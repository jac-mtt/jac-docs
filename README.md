# Sitio de Documentación de Datos.Gob de la JAC

Creado utilizando [Docusaurus](https://docusaurus.io/).
Enlace a la documentación en [GitHub Pages](https://jac-mtt.github.io/jac-docs/).

Requisitos y Pasos para modificar la documentación:

### Requisitos

Tener instalado [Node.js](https://nodejs.org/) y [Yarn](https://yarnpkg.com/).
Actualmente se utiliza la versión 20. Revisar documentación de docusaurus para
determinar la versión minima requerida de node y yarn.

### Instalación para Desarrollo

Descargar el repositorio:

```
$ gh repo clone jac-mtt/jac-docs
# o
$ git clone https://github.com/jac-mtt/jac-docs
```

Instalar librerías:

```
$ npm install
``` 

### Local Development

Para ejecutar el código en modo de desarrollo:

```
$ npm run start
```

### Deployment

Basta con hacer un `git push` a branch `main` para que se actualice la
documentación mediante GitHub Actions.

#### Deployment Antiguo
La forma antigua utilizando gh-pages para el hosting:

```
$ GIT_USER=jac-mtt yarn deploy
```
