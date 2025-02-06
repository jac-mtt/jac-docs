import Papa from "papaparse";

export interface ParsedCsv {
    headers: string[],
    rows: string[][]
}

const DEFAULT_HEADERS: Record<string, string> = {
    "nombre_columna": "Columna",
    "tipo_dato": "Tipo de Dato",
    "descripcion": "Descripción"
}

/**
 * CSV parser que:
 * - Usa PapaParse para manajar correctamente las comas y quotes,
 * - Validación de columnas (3) y filas,
 * - Asigna nombres de columnas para mostrar en la tabla.
 *
 * @param csv - CSV en string (no lee archivo en compile time).
 * @param headerMap - mapping con los nombres del archivo y web. Defaults a DEFAULT_HEADERS.
 * @returns A ParsedCsv object with headers and rows.
 */
export function parseCsv(csv: string, headerMap: Record<string, string> = DEFAULT_HEADERS): ParsedCsv {
    const result = Papa.parse(csv, { header: true, skipEmptyLines: true });

    if (result.errors.length > 0) {
        throw new Error(
            `Error parsing CSV: ${result.errors.map((e) => e.message).join(", ")}`
        );
    }

    const fields = result.meta.fields;
    if (!fields) {
        throw new Error("No se encontraron columnas en el CSV.");
    }

    if (fields.length > 3) {
        throw new Error("Demasiadas columnas en el CSV.");
    }

    const invalidHeaders = fields.filter((field) => !(field in headerMap));
    if (invalidHeaders.length > 0) {
        throw new Error(
            `Nombre columnas no validas: ${invalidHeaders.join(", ")}`
        );
    }

    const headers = fields.map((field) => headerMap[field]);

    const rows = result.data.map((row: Record<string, string>) =>
        fields.map((field) => row[field] || "")
    );

    return { headers, rows };


}