/*! For license information please see 8fcfe31d.d04be4b0.js.LICENSE.txt */
(self.webpackChunkjac_docs=self.webpackChunkjac_docs||[]).push([[2741],{7863:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"datos-gob/bitacora","title":"Bit\xe1cora de Aeropuertos","description":"La Junta de Aeron\xe1utica Civil pone a disposici\xf3n la serie","source":"@site/docs/datos-gob/bitacora.mdx","sourceDirName":"datos-gob","slug":"/datos-gob/bitacora","permalink":"/jac-docs/es/docs/datos-gob/bitacora","draft":false,"unlisted":false,"editUrl":"https://github.com/jac-mtt/jac-docs/edit/main/docs/datos-gob/bitacora.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Bit\xe1cora de Aeropuertos","sidebar_position":1},"sidebar":"jacDocsSidebar","previous":{"title":"Datos Gob","permalink":"/jac-docs/es/docs/category/datos-gob"},"next":{"title":"Operaciones por Aeropuerto","permalink":"/jac-docs/es/docs/datos-gob/operaciones-aeropuertos"}}');var n=r(4848),s=r(8453),o=r(9950);const a='nombre_columna,tipo_dato,descripcion\r\ndt_operacion,datetime,Fecha y hora (en UTC) de la operaci\xf3n realizada por una nave en aeropuerto chileno.\r\naeropuerto_oaci,string,"Indicador de lugar OACI correspondiente al aeropuerto/aer\xf3dromo informante \nque debe ser notificado por personal aeron\xe1utico de la unidad."\r\ntipo_operacion,string,"Condici\xf3n de la Operaci\xf3n: Aterrizaje (A), despegue (D) y sobrevuelo (W)."\r\naeropuerto_dgac_orig_dest,string,C\xf3digo OACI o DGAC correspondiente al aeropuerto de origen o destino.\r\naerolinea_dgac,string,C\xf3digo OACI o DGAC de la aerolinea.\r\nnumero_vuelo,string?,N\xfamero que la aerolinea le asigna a su vuelo.\r\ncod_actividad,string,"C\xf3digo de la actividad, definida por DGAC, donde se detalla el motivo del vuelo."\r\nmatricula,string,Matr\xedcula de la aeronave.\r\ndt_prkg,datetime,"Fecha y hora (en UTC) del hito de ""parking"" efectuado por la aeronave."\r\ntipo_avion,string?,Tipo o modelo del avi\xf3n.\r\ntipo_avion_desc,string?,Descripci\xf3n detallada del modelo del avi\xf3n.\r\nes_internacional,bool,Si el campo `aeropuerto_dgac_orig_dest` corresponde a un aeropuerto internacional (true) o no (false).\r\nregular_no_regular,string,"El vuelo es de tipo regular (R), es decir que se realiza con frecuencia, o no (N)."\r\npmd,numeric?,"Peso m\xe1ximo de despegue, determinado por el tipo de avi\xf3n. N\xfamero decimal."\r\n',d={title:"Bit\xe1cora de Aeropuertos",sidebar_position:1},c="Datos de Bit\xe1cora Aeropuertos",l={},u=[{value:"Actualizaci\xf3n de Datos",id:"actualizaci\xf3n-de-datos",level:2},{value:"Descripci\xf3n de los Datos",id:"descripci\xf3n-de-los-datos",level:2},{value:"Informaci\xf3n T\xe9cnica del Archivo",id:"informaci\xf3n-t\xe9cnica-del-archivo",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"datos-de-bit\xe1cora-aeropuertos",children:"Datos de Bit\xe1cora Aeropuertos"})}),"\n",(0,n.jsx)(t.p,{children:"La Junta de Aeron\xe1utica Civil pone a disposici\xf3n la serie\r\nde datos obtenidos de la bit\xe1cora de los aeropuertos de Chile,\r\ncorrespondientes a los registros de arribo, despegue y\r\nsobrevuelo que realizan las aeronaves en el pa\xeds."}),"\n",(0,n.jsx)(t.p,{children:"Estos datos son recolectados por la Direcci\xf3n General de\r\nAeron\xe1utica Civil (DGAC) en las torres de control operadas\r\npor este organismo."}),"\n",(0,n.jsxs)(t.p,{children:["Los datos se encuentran en el sitio de Datos Abiertos de Gobierno\r\nen el siguiente ",(0,n.jsx)(t.a,{href:"https://datos.gob.cl/dataset/bitacora-aeropuertos",children:"enlace"}),".\r\nMientras que un reuso de estos datos se puede encontrar en el siguiente\r\ndashboard de ",(0,n.jsx)(t.a,{href:"https://app.powerbi.com/view?r=eyJrIjoiMjk4NDY4NDQtYTU1MC00MTNhLTk0MWQtYmY4ODcxMjhhMjhhIiwidCI6IjFhNmRiN2EwLTllZjgtNDQ1NC05MGUzLWMwNmM1Njc1N2FlZCIsImMiOjR9",children:"Operaciones de Naves en Aeropuertos/Aer\xf3dromos de Chile"}),"."]}),"\n",(0,n.jsxs)(t.admonition,{type:"warning",children:[(0,n.jsx)(t.p,{children:"No todas las operaciones de aeronaves que se efectuan en\r\nel pa\xeds son informadas en las bit\xe1coras entregadas\r\npor parte de la DGAC, ya que se excluyen aquellos vuelos\r\nque presenten alguna de las siguientes condiciones:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Son operaciones de aeronaves militares o policiales."}),"\n",(0,n.jsx)(t.li,{children:"Provienen de aer\xf3dromos que no cuenten con administraci\xf3n\r\nde la DGAC."}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"actualizaci\xf3n-de-datos",children:"Actualizaci\xf3n de Datos"}),"\n",(0,n.jsxs)(t.p,{children:["Los datos de bit\xe1cora son actualizados mensualmente,\r\naproximadamente los d\xedas 10 de cada mes (",(0,n.jsx)(t.code,{children:"t"}),"), con informaci\xf3n\r\ndel periodo anterior al de la actualizaci\xf3n (",(0,n.jsx)(t.code,{children:"t-1"}),")."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Registros del \xfaltimo d\xeda de ",(0,n.jsx)(t.code,{children:"t-2"})," est\xe1n sujetos a cambios, ya\r\nque es posible que pueden ser corregidos."]})}),"\n",(0,n.jsx)(t.h2,{id:"descripci\xf3n-de-los-datos",children:"Descripci\xf3n de los Datos"}),"\n",(0,n.jsx)(t.p,{children:"A continuaci\xf3n, se describen las columnas contenidas en la\r\ntabla de bit\xe1cora:"}),"\n",(0,n.jsx)(o.A,{csvData:a}),"\n",(0,n.jsxs)(t.admonition,{type:"note",children:[(0,n.jsx)(t.p,{children:"A continuaci\xf3n, algunos conceptos importantes a considerar:"}),(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"es_internacional"}),": Una operaci\xf3n se considera internacional cuando\r\nel origen o destino del vuelo corresponde a un aeropuerto o aer\xf3dromo\r\nubicado fuera del territorio chileno, mientras que una operaci\xf3n se\r\nconsidera dom\xe9stica cuando tanto el origen como el destino del vuelo\r\ncorresponden a un aeropuerto o aer\xf3dromo ubicado dentro del territorio\r\nchileno, a\xfan si corresponde a un tramo dom\xe9stico de un vuelo internacional."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"aeropuerto_dgac_orig_dest"}),": No todos los aer\xf3dromos de Chile cuentan\r\ncon un c\xf3digo OACI, por lo que la DGAC les asigna un c\xf3digo propio."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"aerolinea_dgac"}),": Similar a lo anteriormente, no todas las\r\naerolineas de Chile cuentan con un c\xf3digo OACI, por lo que la DGAC\r\nles asigna un c\xf3digo propio."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"dt_operacion"}),": Adicional al periodo ",(0,n.jsx)(t.code,{children:"t-1"}),", existen registros del primer\r\nd\xeda del mes ",(0,n.jsx)(t.code,{children:"t"})," para facilitar su uso en horario local (",(0,n.jsx)(t.code,{children:"America/Santiago"}),")."]}),"\n"]})]}),"\n",(0,n.jsx)(t.h2,{id:"informaci\xf3n-t\xe9cnica-del-archivo",children:"Informaci\xf3n T\xe9cnica del Archivo"}),"\n",(0,n.jsxs)(t.p,{children:["Debido a su tama\xf1o, el archivo de bit\xe1cora se encuentra en formato\r\n",(0,n.jsx)(t.a,{href:"https://parquet.apache.org/",children:(0,n.jsx)(t.code,{children:"parquet"})}),", comprimido utilizando\r\n",(0,n.jsx)(t.code,{children:"gzip"})," (m\xe1ximo nivel)."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9950:(e,t,r)=>{"use strict";r.d(t,{A:()=>a});r(6540);var i=r(4809),n=r.n(i);const s={nombre_columna:"Columna",tipo_dato:"Tipo de Dato",descripcion:"Descripci\xf3n"};var o=r(4848);const a=e=>{let{csvData:t}=e;const{headers:r,rows:i}=function(e,t){void 0===t&&(t=s);const r=n().parse(e,{header:!0,skipEmptyLines:!0});if(r.errors.length>0)throw new Error(`Error parsing CSV: ${r.errors.map((e=>e.message)).join(", ")}`);const i=r.meta.fields;if(!i)throw new Error("No se encontraron columnas en el CSV.");if(i.length>3)throw new Error("Demasiadas columnas en el CSV.");const o=i.filter((e=>!(e in t)));if(o.length>0)throw new Error(`Nombre columnas no validas: ${o.join(", ")}`);return{headers:i.map((e=>t[e])),rows:r.data.map((e=>i.map((t=>e[t]||""))))}}(t);return(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsx)("tr",{children:r.map(((e,t)=>(0,o.jsx)("th",{children:e},t)))})}),(0,o.jsx)("tbody",{children:i.map(((e,t)=>(0,o.jsx)("tr",{children:e.map(((e,t)=>(0,o.jsx)("td",{children:t<2?(0,o.jsx)("code",{children:e}):e},t)))},t)))})]})}},4809:function(e,t){var r,i,n;i=[],r=function e(){var t,r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:{},i=!r.document&&!!r.postMessage,n=r.IS_PAPA_WORKER||!1,s={},o=0,a={};function d(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=y(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new p(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){var i=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<i){let t=this._config.newline;t||(s=this._config.quoteChar||'"',t=this._handle.guessLineEndings(e,s)),e=[...e.split(t).slice(i)].join(t)}this.isFirstChunk&&k(this._config.beforeFirstChunk)&&void 0!==(s=this._config.beforeFirstChunk(e))&&(e=s),this.isFirstChunk=!1,this._halted=!1,i=this._partialLine+e;var s=(this._partialLine="",this._handle.parse(i,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=s.meta.cursor,this._finished||(this._partialLine=i.substring(e-this._baseIndex),this._baseIndex=e),s&&s.data&&(this._rowCount+=s.data.length),i=this._finished||this._config.preview&&this._rowCount>=this._config.preview,n)r.postMessage({results:s,workerId:a.WORKER_ID,finished:i});else if(k(this._config.chunk)&&!t){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=s=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!i||!k(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),i||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):n&&this._config.error&&r.postMessage({workerId:a.WORKER_ID,error:e,finished:!1})}}function c(e){var t;(e=e||{}).chunkSize||(e.chunkSize=a.RemoteChunkSize),d.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),i||(t.onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var e,r=this._config.downloadRequestHeaders;for(e in r)t.setRequestHeader(e,r[e])}var n;this._config.chunkSize&&(n=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+n));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}i&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>null!==(e=e.getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(new Error(e))}}function l(e){(e=e||{}).chunkSize||(e.chunkSize=a.LocalChunkSize),d.call(this,e);var t,r,i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=b(this._chunkLoaded,this),t.onerror=b(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,n=(this._config.chunkSize&&(n=Math.min(this._start+this._config.chunkSize,this._input.size),e=r.call(e,this._start,n)),t.readAsText(e,this._config.encoding));i||this._chunkLoaded({target:{result:n}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function u(e){var t;d.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,r;if(!this._finished)return e=this._config.chunkSize,t=e?(r=t.substring(0,e),t.substring(e)):(r=t,""),this._finished=!t,this.parseChunk(r)}}function h(e){d.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){d.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){d.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=b((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=b((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=b((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=b((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function p(e){var t,r,i,n,s=Math.pow(2,53),o=-s,d=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,c=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,l=this,u=0,h=0,p=!1,g=!1,_=[],v={data:[],errors:[],meta:{}};function b(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function x(){if(v&&i&&(w("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+a.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(v.data=v.data.filter((function(e){return!b(e)}))),C()){if(v)if(Array.isArray(v.data[0])){for(var t=0;C()&&t<v.data.length;t++)v.data[t].forEach(r);v.data.splice(0,1)}else v.data.forEach(r);function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),_.push(t)}}function n(t,r){for(var i=e.header?{}:[],n=0;n<t.length;n++){var a=n,l=t[n];l=((t,r)=>(t=>(e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&((e=>{if(d.test(e)&&(e=parseFloat(e),o<e&&e<s))return 1})(r)?parseFloat(r):c.test(r)?new Date(r):""===r?null:r):r)(a=e.header?n>=_.length?"__parsed_extra":_[n]:a,l=e.transform?e.transform(l,a):l),"__parsed_extra"===a?(i[a]=i[a]||[],i[a].push(l)):i[a]=l}return e.header&&(n>_.length?w("FieldMismatch","TooManyFields","Too many fields: expected "+_.length+" fields but parsed "+n,h+r):n<_.length&&w("FieldMismatch","TooFewFields","Too few fields: expected "+_.length+" fields but parsed "+n,h+r)),i}var l;v&&(e.header||e.dynamicTyping||e.transform)&&(l=1,!v.data.length||Array.isArray(v.data[0])?(v.data=v.data.map(n),l=v.data.length):v.data=n(v.data,0),e.header&&v.meta&&(v.meta.fields=_),h+=l)}function C(){return e.header&&0===_.length}function w(e,t,r,i){e={type:e,code:t,message:r},void 0!==i&&(e.row=i),v.errors.push(e)}k(e.step)&&(n=e.step,e.step=function(t){v=t,C()?x():(x(),0!==v.data.length&&(u+=t.data.length,e.preview&&u>e.preview?r.abort():(v.data=v.data[0],n(v,l))))}),this.parse=function(n,s,o){var d=e.quoteChar||'"';return e.newline||(e.newline=this.guessLineEndings(n,d)),i=!1,e.delimiter?k(e.delimiter)&&(e.delimiter=e.delimiter(n),v.meta.delimiter=e.delimiter):((d=((t,r,i,n,s)=>{var o,d,c,l;s=s||[",","\t","|",";",a.RECORD_SEP,a.UNIT_SEP];for(var u=0;u<s.length;u++){for(var h,p=s[u],f=0,g=0,_=0,v=(c=void 0,new m({comments:n,delimiter:p,newline:r,preview:10}).parse(t)),y=0;y<v.data.length;y++)i&&b(v.data[y])?_++:(g+=h=v.data[y].length,void 0===c?c=h:0<h&&(f+=Math.abs(h-c),c=h));0<v.data.length&&(g/=v.data.length-_),(void 0===d||f<=d)&&(void 0===l||l<g)&&1.99<g&&(d=f,o=p,l=g)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=d.bestDelimiter:(i=!0,e.delimiter=a.DefaultDelimiter),v.meta.delimiter=e.delimiter),d=y(e),e.preview&&e.header&&d.preview++,t=n,r=new m(d),v=r.parse(t,s,o),x(),p?{meta:{paused:!0}}:v||{meta:{paused:!1}}},this.paused=function(){return p},this.pause=function(){p=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){l.streamer._halted?(p=!1,l.streamer.parseChunk(t,!0)):setTimeout(l.resume,3)},this.aborted=function(){return g},this.abort=function(){g=!0,r.abort(),v.meta.aborted=!0,k(e.complete)&&e.complete(v),t=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576),t=new RegExp(f(t)+"([^]*?)"+f(t),"gm");var r=(e=e.replace(t,"")).split("\r");if(e=1<(t=e.split("\n")).length&&t[0].length<r[0].length,1===r.length||e)return"\n";for(var i=0,n=0;n<r.length;n++)"\n"===r[n][0]&&i++;return i>=r.length/2?"\r\n":"\r"}}function f(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t=(e=e||{}).delimiter,r=e.newline,i=e.comments,n=e.step,s=e.preview,o=e.fastMode,d=null,c=!1,l=null==e.quoteChar?'"':e.quoteChar,u=l;if(void 0!==e.escapeChar&&(u=e.escapeChar),("string"!=typeof t||-1<a.BAD_DELIMITERS.indexOf(t))&&(t=","),i===t)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<a.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var h=0,p=!1;this.parse=function(a,m,g){if("string"!=typeof a)throw new Error("Input must be a string");var _=a.length,v=t.length,y=r.length,b=i.length,x=k(n),C=[],w=[],j=[],E=h=0;if(!a)return q();if(o||!1!==o&&-1===a.indexOf(l)){for(var R=a.split(r),A=0;A<R.length;A++){if(j=R[A],h+=j.length,A!==R.length-1)h+=r.length;else if(g)return q();if(!i||j.substring(0,b)!==i){if(x){if(C=[],L(j.split(t)),N(),p)return q()}else L(j.split(t));if(s&&s<=A)return C=C.slice(0,s),q(!0)}}return q()}for(var D=a.indexOf(t,h),S=a.indexOf(r,h),O=new RegExp(f(u)+f(l),"g"),I=a.indexOf(l,h);;)if(a[h]===l)for(I=h,h++;;){if(-1===(I=a.indexOf(l,I+1)))return g||w.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:C.length,index:h}),M();if(I===_-1)return M(a.substring(h,I).replace(O,l));if(l===u&&a[I+1]===u)I++;else if(l===u||0===I||a[I-1]!==u){-1!==D&&D<I+1&&(D=a.indexOf(t,I+1));var T=F(-1===(S=-1!==S&&S<I+1?a.indexOf(r,I+1):S)?D:Math.min(D,S));if(a.substr(I+1+T,v)===t){j.push(a.substring(h,I).replace(O,l)),a[h=I+1+T+v]!==l&&(I=a.indexOf(l,h)),D=a.indexOf(t,h),S=a.indexOf(r,h);break}if(T=F(S),a.substring(I+1+T,I+1+T+y)===r){if(j.push(a.substring(h,I).replace(O,l)),z(I+1+T+y),D=a.indexOf(t,h),I=a.indexOf(l,h),x&&(N(),p))return q();if(s&&C.length>=s)return q(!0);break}w.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:C.length,index:h}),I++}}else if(i&&0===j.length&&a.substring(h,h+b)===i){if(-1===S)return q();h=S+y,S=a.indexOf(r,h),D=a.indexOf(t,h)}else if(-1!==D&&(D<S||-1===S))j.push(a.substring(h,D)),h=D+v,D=a.indexOf(t,h);else{if(-1===S)break;if(j.push(a.substring(h,S)),z(S+y),x&&(N(),p))return q();if(s&&C.length>=s)return q(!0)}return M();function L(e){C.push(e),E=h}function F(e){var t=0;return-1!==e&&(e=a.substring(I+1,e))&&""===e.trim()?e.length:t}function M(e){return g||(void 0===e&&(e=a.substring(h)),j.push(e),h=_,L(j),x&&N()),q()}function z(e){h=e,L(j),j=[],S=a.indexOf(r,h)}function q(i){if(e.header&&!m&&C.length&&!c){var n=C[0],s={},o=new Set(n);let t=!1;for(let r=0;r<n.length;r++){let i=n[r];if(s[i=k(e.transformHeader)?e.transformHeader(i,r):i]){let e,a=s[i];for(;e=i+"_"+a,a++,o.has(e););o.add(e),n[r]=e,s[i]++,t=!0,(d=null===d?{}:d)[e]=i}else s[i]=1,n[r]=i;o.add(i)}t&&console.warn("Duplicate headers found and renamed."),c=!0}return{data:C,errors:w,meta:{delimiter:t,linebreak:r,aborted:p,truncated:!!i,cursor:E+(m||0),renamedHeaders:d}}}function N(){n(q()),C=[],w=[]}},this.abort=function(){p=!0},this.getCharIndex=function(){return h}}function g(e){var t=e.data,r=s[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(k(r.userStep)){for(var o=0;o<t.results.data.length&&(r.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},n),!i);o++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=s[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete s[e]}function v(){throw new Error("Not implemented.")}function y(e){if("object"!=typeof e||null===e)return e;var t,r=Array.isArray(e)?[]:{};for(t in e)r[t]=y(e[t]);return r}function b(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return a.parse=function(t,i){var n=(i=i||{}).dynamicTyping||!1;if(k(n)&&(i.dynamicTypingFunction=n,n={}),i.dynamicTyping=n,i.transform=!!k(i.transform)&&i.transform,!i.worker||!a.WORKERS_SUPPORTED)return n=null,a.NODE_STREAM_INPUT,"string"==typeof t?(t=(e=>65279!==e.charCodeAt(0)?e:e.slice(1))(t),n=new(i.download?c:u)(i)):!0===t.readable&&k(t.read)&&k(t.on)?n=new h(i):(r.File&&t instanceof File||t instanceof Object)&&(n=new l(i)),n.stream(t);(n=(()=>{var t;return!!a.WORKERS_SUPPORTED&&(t=(()=>{var t=r.URL||r.webkitURL||null,i=e.toString();return a.BLOB_URL||(a.BLOB_URL=t.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))})(),(t=new r.Worker(t)).onmessage=g,t.id=o++,s[t.id]=t)})()).userStep=i.step,n.userChunk=i.chunk,n.userComplete=i.complete,n.userError=i.error,i.step=k(i.step),i.chunk=k(i.chunk),i.complete=k(i.complete),i.error=k(i.error),delete i.worker,n.postMessage({input:t,config:i,workerId:n.id})},a.unparse=function(e,t){var r=!1,i=!0,n=",",s="\r\n",o='"',d=o+o,c=!1,l=null,u=!1,h=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||a.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),"boolean"!=typeof t.quotes&&"function"!=typeof t.quotes&&!Array.isArray(t.quotes)||(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(c=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(o=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");l=t.columns}void 0!==t.escapeChar&&(d=t.escapeChar+o),t.escapeFormulae instanceof RegExp?u=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(u=/^[=+\-@\t\r].*$/)}})(),new RegExp(f(o),"g"));if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,c);if("object"==typeof e[0])return p(l||Object.keys(e[0]),e,c)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||l),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),p(e.fields||[],e.data||[],c);throw new Error("Unable to serialize unrecognized input");function p(e,t,r){var o="",a=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),d=!Array.isArray(t[0]);if(a&&i){for(var c=0;c<e.length;c++)0<c&&(o+=n),o+=m(e[c],c);0<t.length&&(o+=s)}for(var l=0;l<t.length;l++){var u=(a?e:t[l]).length,h=!1,p=a?0===Object.keys(t[l]).length:0===t[l].length;if(r&&!a&&(h="greedy"===r?""===t[l].join("").trim():1===t[l].length&&0===t[l][0].length),"greedy"===r&&a){for(var f=[],g=0;g<u;g++){var _=d?e[g]:g;f.push(t[l][_])}h=""===f.join("").trim()}if(!h){for(var v=0;v<u;v++){0<v&&!p&&(o+=n);var y=a&&d?e[v]:v;o+=m(t[l][y],v)}l<t.length-1&&(!r||0<u&&!p)&&(o+=s)}}return o}function m(e,t){var i,s;return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(s=!1,u&&"string"==typeof e&&u.test(e)&&(e="'"+e,s=!0),i=e.toString().replace(h,d),(s=s||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||((e,t)=>{for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1})(i,a.BAD_DELIMITERS)||-1<i.indexOf(n)||" "===i.charAt(0)||" "===i.charAt(i.length-1))?o+i+o:i)}},a.RECORD_SEP=String.fromCharCode(30),a.UNIT_SEP=String.fromCharCode(31),a.BYTE_ORDER_MARK="\ufeff",a.BAD_DELIMITERS=["\r","\n",'"',a.BYTE_ORDER_MARK],a.WORKERS_SUPPORTED=!i&&!!r.Worker,a.NODE_STREAM_INPUT=1,a.LocalChunkSize=10485760,a.RemoteChunkSize=5242880,a.DefaultDelimiter=",",a.Parser=m,a.ParserHandle=p,a.NetworkStreamer=c,a.FileStreamer=l,a.StringStreamer=u,a.ReadableStreamStreamer=h,r.jQuery&&((t=r.jQuery).fn.parse=function(e){var i=e.config||{},n=[];return this.each((function(e){if("INPUT"!==t(this).prop("tagName").toUpperCase()||"file"!==t(this).attr("type").toLowerCase()||!r.FileReader||!this.files||0===this.files.length)return!0;for(var s=0;s<this.files.length;s++)n.push({file:this.files[s],inputElem:this,instanceConfig:t.extend({},i)})})),s(),this;function s(){if(0===n.length)k(e.complete)&&e.complete();else{var r,i,s,d,c=n[0];if(k(e.before)){var l=e.before(c.file,c.inputElem);if("object"==typeof l){if("abort"===l.action)return r="AbortError",i=c.file,s=c.inputElem,d=l.reason,void(k(e.error)&&e.error({name:r},i,s,d));if("skip"===l.action)return void o();"object"==typeof l.config&&(c.instanceConfig=t.extend(c.instanceConfig,l.config))}else if("skip"===l)return void o()}var u=c.instanceConfig.complete;c.instanceConfig.complete=function(e){k(u)&&u(e,c.file,c.inputElem),o()},a.parse(c.file,c.instanceConfig)}}function o(){n.splice(0,1),s()}}),n&&(r.onmessage=function(e){e=e.data,void 0===a.WORKER_ID&&e&&(a.WORKER_ID=e.workerId),"string"==typeof e.input?r.postMessage({workerId:a.WORKER_ID,results:a.parse(e.input,e.config),finished:!0}):(r.File&&e.input instanceof File||e.input instanceof Object)&&(e=a.parse(e.input,e.config))&&r.postMessage({workerId:a.WORKER_ID,results:e,finished:!0})}),(c.prototype=Object.create(d.prototype)).constructor=c,(l.prototype=Object.create(d.prototype)).constructor=l,(u.prototype=Object.create(u.prototype)).constructor=u,(h.prototype=Object.create(d.prototype)).constructor=h,a},void 0===(n="function"==typeof r?r.apply(t,i):r)||(e.exports=n)}}]);