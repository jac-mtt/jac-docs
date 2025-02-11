/*! For license information please see 8fcfe31d.e823a44d.js.LICENSE.txt */
(self.webpackChunkjac_docs=self.webpackChunkjac_docs||[]).push([[2741],{7863:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>d,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"datos-gob/bitacora","title":"Bit\xe1cora de Aeropuertos","description":"La Junta de Aeron\xe1utica Civil carga a Datos.Gob","source":"@site/docs/datos-gob/bitacora.mdx","sourceDirName":"datos-gob","slug":"/datos-gob/bitacora","permalink":"/jac-docs/docs/datos-gob/bitacora","draft":false,"unlisted":false,"editUrl":"https://github.com/jac-mtt/jac-docs/edit/main/docs/datos-gob/bitacora.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Bit\xe1cora de Aeropuertos","sidebar_position":1},"sidebar":"jacDocsSidebar","previous":{"title":"Datos Gob","permalink":"/jac-docs/docs/category/datos-gob"},"next":{"title":"Operaciones por Aeropuerto","permalink":"/jac-docs/docs/datos-gob/operaciones-aeropuertos"}}');var i=r(4848),s=r(8453),o=r(9950);const a='nombre_columna,tipo_dato,descripcion\r\ndt_operacion,datetime,Fecha y hora (en UTC) de la operaci\xf3n realizada por una nave en aeropuerto chileno.\r\naeropuerto_oaci,string,"Indicador OACI (ICAO en ingl\xe9s) correspondiente al aeropuerto/aer\xf3dromo informante \r\nque debe ser notificado por personal aeron\xe1utico de la unidad."\r\ntipo_operacion,string,"Condici\xf3n de la Operaci\xf3n: Aterrizaje (A), despegue (D) y sobrevuelo (W)."\r\naeropuerto_dgac_orig_dest,string,C\xf3digo OACI o DGAC correspondiente al aeropuerto de origen o destino.\r\naerolinea_dgac,string,C\xf3digo OACI o DGAC de la aerolinea.\r\nnumero_vuelo,string?,N\xfamero que la aerolinea le asigna a su vuelo.\r\ncod_actividad,string,"C\xf3digo de la actividad, definida por DGAC, donde se detalla el motivo del vuelo."\r\nmatricula,string,Matr\xedcula de la aeronave.\r\ndt_prkg,datetime,"Fecha y hora (en UTC) del hito de ""parking"" efectuado por la aeronave."\r\ntipo_avion,string?,Tipo o modelo del avi\xf3n.\r\ntipo_avion_desc,string?,Descripci\xf3n detallada del modelo del avi\xf3n.\r\nes_internacional,bool,Si el campo `aeropuerto_dgac_orig_dest` corresponde a un aeropuerto internacional (true) o no (false).\r\nregular_no_regular,string,"El vuelo es de tipo regular (R), es decir que se realiza con frecuencia, o no (N)."\r\npmd,numeric?,"Peso m\xe1ximo de despegue, determinado por el tipo de avi\xf3n. N\xfamero decimal."\r\n',d={title:"Bit\xe1cora de Aeropuertos",sidebar_position:1},l="Datos de Bit\xe1cora Aeropuertos",c={},u=[{value:"Actualizaci\xf3n de Datos",id:"actualizaci\xf3n-de-datos",level:2},{value:"Descripci\xf3n de los Datos",id:"descripci\xf3n-de-los-datos",level:2},{value:"Informaci\xf3n T\xe9cnica del Archivo",id:"informaci\xf3n-t\xe9cnica-del-archivo",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"datos-de-bit\xe1cora-aeropuertos",children:"Datos de Bit\xe1cora Aeropuertos"})}),"\n",(0,i.jsxs)(t.p,{children:["La Junta de Aeron\xe1utica Civil carga a ",(0,i.jsx)(t.a,{href:"https://datos.gob.cl/",children:"Datos.Gob"}),"\r\nla serie de datos obtenidos de la bit\xe1cora de los aeropuertos de Chile,\r\ncorrespondientes a los registros de arribo, despegue y\r\nsobrevuelo que realizan las aeronaves en el pa\xeds."]}),"\n",(0,i.jsx)(t.p,{children:"Estos datos son recolectados por la Direcci\xf3n General de\r\nAeron\xe1utica Civil (DGAC) en las torres de control operadas\r\npor este organismo."}),"\n",(0,i.jsxs)(t.p,{children:["Los datos se encuentran en el sitio de Datos Abiertos de Gobierno\r\nen el siguiente ",(0,i.jsx)(t.a,{href:"https://datos.gob.cl/dataset/bitacora-aeropuertos",children:"enlace"}),".\r\nMientras que un reuso de estos datos se puede encontrar en el siguiente\r\ndashboard de ",(0,i.jsx)(t.a,{href:"https://app.powerbi.com/view?r=eyJrIjoiMjk4NDY4NDQtYTU1MC00MTNhLTk0MWQtYmY4ODcxMjhhMjhhIiwidCI6IjFhNmRiN2EwLTllZjgtNDQ1NC05MGUzLWMwNmM1Njc1N2FlZCIsImMiOjR9",children:"Operaciones de Naves en Aeropuertos/Aer\xf3dromos de Chile"}),"."]}),"\n",(0,i.jsxs)(t.admonition,{type:"warning",children:[(0,i.jsx)(t.p,{children:"No todas las operaciones de aeronaves que se efectuan en\r\nel pa\xeds son informadas en las bit\xe1coras entregadas\r\npor parte de la DGAC, ya que se excluyen aquellos vuelos\r\nque presenten alguna de las siguientes condiciones:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Son operaciones de aeronaves militares o policiales."}),"\n",(0,i.jsx)(t.li,{children:"Provienen de aer\xf3dromos que no cuenten con la\r\nadministraci\xf3n de la DGAC."}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"actualizaci\xf3n-de-datos",children:"Actualizaci\xf3n de Datos"}),"\n",(0,i.jsxs)(t.p,{children:["Los datos de bit\xe1cora son actualizados mensualmente,\r\naproximadamente los d\xedas 10 de cada mes (",(0,i.jsx)(t.code,{children:"t"}),"), con informaci\xf3n\r\ndel periodo anterior al de la actualizaci\xf3n (",(0,i.jsx)(t.code,{children:"t-1"}),")."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Registros del \xfaltimo d\xeda de ",(0,i.jsx)(t.code,{children:"t-2"})," est\xe1n sujetos a cambios, ya\r\nque es posible que puedan ser corregidos."]})}),"\n",(0,i.jsx)(t.h2,{id:"descripci\xf3n-de-los-datos",children:"Descripci\xf3n de los Datos"}),"\n",(0,i.jsx)(t.p,{children:"En la siguiente tabla, se describen las columnas contenidas en la\r\ntabla de bit\xe1cora:"}),"\n",(0,i.jsx)(o.A,{csvData:a}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Los tipos de dato que presenten un signo de pregunta (",(0,i.jsx)(t.code,{children:"?"}),") al final\r\nde su descripci\xf3n, indica que la columna contiene valores nulos o vac\xedos."]})}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:"A continuaci\xf3n, algunos conceptos importantes a considerar:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"es_internacional"}),": Una operaci\xf3n se considera internacional cuando\r\nel origen o destino del vuelo corresponde a un aeropuerto o aer\xf3dromo\r\nubicado fuera del territorio chileno, mientras que una operaci\xf3n se\r\nconsidera dom\xe9stica cuando tanto el origen como el destino del vuelo\r\ncorresponden a un aeropuerto o aer\xf3dromo ubicado dentro del territorio\r\nchileno, a\xfan si corresponde a un tramo dom\xe9stico de un vuelo internacional."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"aeropuerto_dgac_orig_dest"}),": No todos los aer\xf3dromos de Chile cuentan\r\ncon un c\xf3digo OACI, por lo que la DGAC les asigna un c\xf3digo propio."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"aerolinea_dgac"}),": Similar a lo anteriormente, no todas las\r\naerolineas de Chile cuentan con un c\xf3digo OACI, por lo que la DGAC\r\nles asigna un c\xf3digo interno."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"dt_operacion"}),": Adicional al periodo ",(0,i.jsx)(t.code,{children:"t-1"}),", existen registros del primer\r\nd\xeda del mes ",(0,i.jsx)(t.code,{children:"t"})," para facilitar el uso de la serie en horario local\r\n(",(0,i.jsx)(t.code,{children:"America/Santiago"}),")."]}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"informaci\xf3n-t\xe9cnica-del-archivo",children:"Informaci\xf3n T\xe9cnica del Archivo"}),"\n",(0,i.jsxs)(t.p,{children:["Debido a su tama\xf1o, el archivo de bit\xe1cora se encuentra en formato\r\n",(0,i.jsx)(t.a,{href:"https://parquet.apache.org/",children:(0,i.jsx)(t.code,{children:"parquet"})}),", comprimido utilizando\r\n",(0,i.jsx)(t.code,{children:"gzip"})," (m\xe1ximo nivel)."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9950:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});r(6540);var n=r(4809),i=r.n(n);const s={nombre_columna:"Columna",tipo_dato:"Tipo de Dato",descripcion:"Descripci\xf3n"};var o=r(4848);const a=e=>{let{csvData:t}=e;const{headers:r,rows:n}=function(e,t){void 0===t&&(t=s);const r=i().parse(e,{header:!0,skipEmptyLines:!0});if(r.errors.length>0)throw new Error(`Error parsing CSV: ${r.errors.map((e=>e.message)).join(", ")}`);const n=r.meta.fields;if(!n)throw new Error("No se encontraron columnas en el CSV.");if(n.length>3)throw new Error("Demasiadas columnas en el CSV.");const o=n.filter((e=>!(e in t)));if(o.length>0)throw new Error(`Nombre columnas no validas: ${o.join(", ")}`);return{headers:n.map((e=>t[e])),rows:r.data.map((e=>n.map((t=>e[t]||""))))}}(t);return(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{children:r.map(((e,t)=>(0,o.jsx)("th",{children:e},t)))})}),(0,o.jsx)("tbody",{children:n.map(((e,t)=>(0,o.jsx)("tr",{children:e.map(((e,t)=>(0,o.jsx)("td",{children:t<2?(0,o.jsx)("code",{children:e}):e},t)))},t)))})]})}},4809:function(e,t){var r,n,i;n=[],r=function e(){var t,r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:{},n=!r.document&&!!r.postMessage,i=r.IS_PAPA_WORKER||!1,s={},o=0,a={};function d(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new p(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){var n=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<n){let t=this._config.newline;t||(s=this._config.quoteChar||'"',t=this._handle.guessLineEndings(e,s)),e=[...e.split(t).slice(n)].join(t)}this.isFirstChunk&&x(this._config.beforeFirstChunk)&&void 0!==(s=this._config.beforeFirstChunk(e))&&(e=s),this.isFirstChunk=!1,this._halted=!1,n=this._partialLine+e;var s=(this._partialLine="",this._handle.parse(n,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=s.meta.cursor,this._finished||(this._partialLine=n.substring(e-this._baseIndex),this._baseIndex=e),s&&s.data&&(this._rowCount+=s.data.length),n=this._finished||this._config.preview&&this._rowCount>=this._config.preview,i)r.postMessage({results:s,workerId:a.WORKER_ID,finished:n});else if(x(this._config.chunk)&&!t){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=s=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!n||!x(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),n||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){x(this._config.error)?this._config.error(e):i&&this._config.error&&r.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function l(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),d.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),n||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!n),this._config.downloadRequestHeaders){var e,r=this._config.downloadRequestHeaders;for(e in r)t.setRequestHeader(e,r[e])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+i));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}n&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>null!==(e=e.getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(new Error(e))}}function c(e){(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),d.call(this,e);var t,r,n="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,n?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,i=(this._config.chunkSize&&(i=Math.min(this._start+this._config.chunkSize,this._input.size),e=r.call(e,this._start,i)),t.readAsText(e,this._config.encoding));n||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function u(e){var t;d.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,r;if(!this._finished)return e=this._config.chunkSize,t=e?(r=t.substring(0,e),t.substring(e)):(r=t,""),this._finished=!t,this.parseChunk(r)}}function h(e){d.call(this,e=e||{});var t=[],r=!0,n=!1;this.pause=function(){d.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){d.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function p(e){var t,r,n,i,s=Math.pow(2,53),o=-s,d=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,l=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,c=this,u=0,h=0,p=!1,g=!1,_=[],v={data:[],errors:[],meta:{}};function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function k(){if(v&&n&&(w("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines&&(v.data=v.data.filter((function(e){return!b(e)}))),C()){if(v)if(Array.isArray(v.data[0])){for(var t=0;C()&&t<v.data.length;t++)v.data[t].forEach(r);v.data.splice(0,1)}else v.data.forEach(r);function r(t,r){x(e.transformHeader)&&(t=e.transformHeader(t,r)),_.push(t)}}function i(t,r){for(var n=e.header?{}:[],i=0;i<t.length;i++){var a=i,c=t[i];c=((t,r)=>(t=>(e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&((e=>{if(d.test(e)&&(e=parseFloat(e),o<e&&e<s))return 1})(r)?parseFloat(r):l.test(r)?new Date(r):""===r?null:r):r)(a=e.header?i>=_.length?"__parsed_extra":_[i]:a,c=e.transform?e.transform(c,a):c),"__parsed_extra"===a?(n[a]=n[a]||[],n[a].push(c)):n[a]=c}return e.header&&(i>_.length?w("FieldMismatch","TooManyFields","Too many fields: expected "+_.length+" fields but parsed "+i,h+r):i<_.length&&w("FieldMismatch","TooFewFields","Too few fields: expected "+_.length+" fields but parsed "+i,h+r)),n}var c;v&&(e.header||e.dynamicTyping||e.transform)&&(c=1,!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(i),c=v.data.length):v.data=i(v.data,0),e.header&&v.meta&&(v.meta.fields=_),h+=c)}function C(){return e.header&&0===_.length}function w(e,t,r,n){e={type:e,code:t,message:r},void 0!==n&&(e.row=n),v.errors.push(e)}x(e.step)&&(i=e.step,e.step=function(t){v=t,C()?k():(k(),0!==v.data.length&&(u+=t.data.length,e.preview&&u>e.preview?r.abort():(v.data=v.data[0],i(v,c))))}),this.parse=function(i,s,o){var d=e.quoteChar||'"';return e.newline||(e.newline=this.guessLineEndings(i,d)),n=!1,e.delimiter?x(e.delimiter)&&(e.delimiter=e.delimiter(i),v.meta.delimiter=e.delimiter):((d=((t,r,n,i,s)=>{var o,d,l,c;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var u=0;u<s.length;u++){for(var h,p=s[u],f=0,g=0,_=0,v=(l=void 0,new m({comments:i,delimiter:p,newline:r,preview:10}).parse(t)),y=0;y<v.data.length;y++)n&&b(v.data[y])?_++:(g+=h=v.data[y].length,void 0===l?l=h:0<h&&(f+=Math.abs(h-l),l=h));0<v.data.length&&(g/=v.data.length-_),(void 0===d||f<=d)&&(void 0===c||c<g)&&1.99<g&&(d=f,o=p,c=g)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=d.bestDelimiter:(n=!0,e.delimiter=a.DefaultDelimiter),v.meta.delimiter=e.delimiter),d=y(e),e.preview&&e.header&&d.preview++,t=i,r=new m(d),v=r.parse(t,s,o),k(),p?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return p},this.pause=function(){p=!0,r.abort(),t=x(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){c.streamer._halted?(p=!1,c.streamer.parseChunk(t,!0)):setTimeout(c.resume,3)},this.aborted=function(){return g},this.abort=function(){g=!0,r.abort(),v.meta.aborted=!0,x(e.complete)&&e.complete(v),t=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576),t=new RegExp(f(t)+"([^]*?)"+f(t),"gm");var r=(e=e.replace(t,"")).split("\r");if(e=1<(t=e.split("\n")).length&&t[0].length<r[0].length,1===r.length||e)return"\n";for(var n=0,i=0;i<r.length;i++)"\n"===r[i][0]&&n++;return n>=r.length/2?"\r\n":"\r"}}function f(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t=(e=e||{}).delimiter,r=e.newline,n=e.comments,i=e.step,s=e.preview,o=e.fastMode,d=null,l=!1,c=null==e.quoteChar?'"':e.quoteChar,u=c;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof t||-1<a.BAD_DELIMITERS.indexOf(t))&&(t=","),n===t)throw new Error("Comment character same as delimiter");!0===n?n="#":("string"!=typeof n||-1<a.BAD_DELIMITERS.indexOf(n))&&(n=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var h=0,p=!1;this.parse=function(a,m,g){if("string"!=typeof a)throw new Error("Input must be a string");var _=a.length,v=t.length,y=r.length,b=n.length,k=x(i),C=[],w=[],j=[],E=h=0;if(!a)return z();if(o||!1!==o&&-1===a.indexOf(c)){for(var R=a.split(r),A=0;A<R.length;A++){if(j=R[A],h+=j.length,A!==R.length-1)h+=r.length;else if(g)return z();if(!n||j.substring(0,b)!==n){if(k){if(C=[],L(j.split(t)),N(),p)return z()}else L(j.split(t));if(s&&s<=A)return C=C.slice(0,s),z(!0)}}return z()}for(var D=a.indexOf(t,h),S=a.indexOf(r,h),O=new RegExp(f(u)+f(c),"g"),I=a.indexOf(c,h);;)if(a[h]===c)for(I=h,h++;;){if(-1===(I=a.indexOf(c,I+1)))return g||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:C.length,index:h}),M();if(I===_-1)return M(a.substring(h,I).replace(O,c));if(c===u&&a[I+1]===u)I++;else if(c===u||0===I||a[I-1]!==u){-1!==D&&D<I+1&&(D=a.indexOf(t,I+1));var T=F(-1===(S=-1!==S&&S<I+1?a.indexOf(r,I+1):S)?D:Math.min(D,S));if(a.substr(I+1+T,v)===t){j.push(a.substring(h,I).replace(O,c)),a[h=I+1+T+v]!==c&&(I=a.indexOf(c,h)),D=a.indexOf(t,h),S=a.indexOf(r,h);break}if(T=F(S),a.substring(I+1+T,I+1+T+y)===r){if(j.push(a.substring(h,I).replace(O,c)),q(I+1+T+y),D=a.indexOf(t,h),I=a.indexOf(c,h),k&&(N(),p))return z();if(s&&C.length>=s)return z(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:C.length,index:h}),I++}}else if(n&&0===j.length&&a.substring(h,h+b)===n){if(-1===S)return z();h=S+y,S=a.indexOf(r,h),D=a.indexOf(t,h)}else if(-1!==D&&(D<S||-1===S))j.push(a.substring(h,D)),h=D+v,D=a.indexOf(t,h);else{if(-1===S)break;if(j.push(a.substring(h,S)),q(S+y),k&&(N(),p))return z();if(s&&C.length>=s)return z(!0)}return M();function L(e){C.push(e),E=h}function F(e){var t=0;return-1!==e&&(e=a.substring(I+1,e))&&""===e.trim()?e.length:t}function M(e){return g||(void 0===e&&(e=a.substring(h)),j.push(e),h=_,L(j),k&&N()),z()}function q(e){h=e,L(j),j=[],S=a.indexOf(r,h)}function z(n){if(e.header&&!m&&C.length&&!l){var i=C[0],s={},o=new Set(i);let t=!1;for(let r=0;r<i.length;r++){let n=i[r];if(s[n=x(e.transformHeader)?e.transformHeader(n,r):n]){let e,a=s[n];for(;e=n+"_"+a,a++,o.has(e););o.add(e),i[r]=e,s[n]++,t=!0,(d=null===d?{}:d)[e]=n}else s[n]=1,i[r]=n;o.add(n)}t&&console.warn("Duplicate headers found and renamed."),l=!0}return{data:C,errors:w,meta:{delimiter:t,linebreak:r,aborted:p,truncated:!!n,cursor:E+(m||0),renamedHeaders:d}}}function N(){i(z()),C=[],w=[]}},this.abort=function(){p=!0},this.getCharIndex=function(){return h}}function g(e){var t=e.data,r=s[t.workerId],n=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){n=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(x(r.userStep)){for(var o=0;o<t.results.data.length&&(r.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!n);o++);delete t.results}else x(r.userChunk)&&(r.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!n&&_(t.workerId,t.results)}function _(e,t){var r=s[e];x(r.userComplete)&&r.userComplete(t),r.terminate(),delete s[e]}function v(){throw new Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t,r=Array.isArray(e)?[]:{};for(t in e)r[t]=y(e[t]);return r}function b(e,t){return function(){e.apply(t,arguments)}}function x(e){return"function"==typeof e}return a.parse=function(t,n){var i=(n=n||{}).dynamicTyping||!1;if(x(i)&&(n.dynamicTypingFunction=i,i={}),n.dynamicTyping=i,n.transform=!!x(n.transform)&&n.transform,!n.worker||!a.WORKERS_SUPPORTED)return i=null,a.NODE_STREAM_INPUT,"string"==typeof t?(t=(e=>65279!==e.charCodeAt(0)?e:e.slice(1))(t),i=new(n.download?l:u)(n)):!0===t.readable&&x(t.read)&&x(t.on)?i=new h(n):(r.File&&t instanceof File||t instanceof Object)&&(i=new c(n)),i.stream(t);(i=(()=>{var t;return!!a.WORKERS_SUPPORTED&&(t=(()=>{var t=r.URL||r.webkitURL||null,n=e.toString();return a.BLOB_URL||(a.BLOB_URL=t.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",n,")();"],{type:"text/javascript"})))})(),(t=new r.Worker(t)).onmessage=g,t.id=o++,s[t.id]=t)})()).userStep=n.step,i.userChunk=n.chunk,i.userComplete=n.complete,i.userError=n.error,n.step=x(n.step),n.chunk=x(n.chunk),n.complete=x(n.complete),n.error=x(n.error),delete n.worker,i.postMessage({input:t,config:n,workerId:i.id})},a.unparse=function(e,t){var r=!1,n=!0,i=",",s="\r\n",o='"',d=o+o,l=!1,c=null,u=!1,h=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(i=t.delimiter),"boolean"!=typeof t.quotes&&"function"!=typeof t.quotes&&!Array.isArray(t.quotes)||(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(l=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(n=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");c=t.columns}void 0!==t.escapeChar&&(d=t.escapeChar+o),t.escapeFormulae instanceof RegExp?u=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(u=/^[=+\-@\t\r].*$/)}})(),new RegExp(f(o),"g"));if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,l);if("object"==typeof e[0])return p(c||Object.keys(e[0]),e,l)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||c),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),p(e.fields||[],e.data||[],l);throw new Error("Unable to serialize unrecognized input");function p(e,t,r){var o="",a=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),d=!Array.isArray(t[0]);if(a&&n){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=m(e[l],l);0<t.length&&(o+=s)}for(var c=0;c<t.length;c++){var u=(a?e:t[c]).length,h=!1,p=a?0===Object.keys(t[c]).length:0===t[c].length;if(r&&!a&&(h="greedy"===r?""===t[c].join("").trim():1===t[c].length&&0===t[c][0].length),"greedy"===r&&a){for(var f=[],g=0;g<u;g++){var _=d?e[g]:g;f.push(t[c][_])}h=""===f.join("").trim()}if(!h){for(var v=0;v<u;v++){0<v&&!p&&(o+=i);var y=a&&d?e[v]:v;o+=m(t[c][y],v)}c<t.length-1&&(!r||0<u&&!p)&&(o+=s)}}return o}function m(e,t){var n,s;return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(s=!1,u&&"string"==typeof e&&u.test(e)&&(e="'"+e,s=!0),n=e.toString().replace(h,d),(s=s||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||((e,t)=>{for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1})(n,a.BAD_DELIMITERS)||-1<n.indexOf(i)||" "===n.charAt(0)||" "===n.charAt(n.length-1))?o+n+o:n)}},a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!n&&!!r.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=p,a.NetworkStreamer=l,a.FileStreamer=c,a.StringStreamer=u,a.ReadableStreamStreamer=h,r.jQuery&&((t=r.jQuery).fn.parse=function(e){var n=e.config||{},i=[];return this.each((function(e){if("INPUT"!==t(this).prop("tagName").toUpperCase()||"file"!==t(this).attr("type").toLowerCase()||!r.FileReader||!this.files||0===this.files.length)return!0;for(var s=0;s<this.files.length;s++)i.push({file:this.files[s],inputElem:this,instanceConfig:t.extend({},n)})})),s(),this;function s(){if(0===i.length)x(e.complete)&&e.complete();else{var r,n,s,d,l=i[0];if(x(e.before)){var c=e.before(l.file,l.inputElem);if("object"==typeof c){if("abort"===c.action)return r="AbortError",n=l.file,s=l.inputElem,d=c.reason,void(x(e.error)&&e.error({name:r},n,s,d));if("skip"===c.action)return void o();"object"==typeof c.config&&(l.instanceConfig=t.extend(l.instanceConfig,c.config))}else if("skip"===c)return void o()}var u=l.instanceConfig.complete;l.instanceConfig.complete=function(e){x(u)&&u(e,l.file,l.inputElem),o()},a.parse(l.file,l.instanceConfig)}}function o(){i.splice(0,1),s()}}),i&&(r.onmessage=function(e){e=e.data,void 0===a.WORKER_ID&&e&&(a.WORKER_ID=e.workerId),"string"==typeof e.input?r.postMessage({workerId:a.WORKER_ID,results:a.parse(e.input,e.config),finished:!0}):(r.File&&e.input instanceof File||e.input instanceof Object)&&(e=a.parse(e.input,e.config))&&r.postMessage({workerId:a.WORKER_ID,results:e,finished:!0})}),(l.prototype=Object.create(d.prototype)).constructor=l,(c.prototype=Object.create(d.prototype)).constructor=c,(u.prototype=Object.create(u.prototype)).constructor=u,(h.prototype=Object.create(d.prototype)).constructor=h,a},void 0===(i="function"==typeof r?r.apply(t,n):r)||(e.exports=i)}}]);