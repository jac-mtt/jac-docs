/*! For license information please see 0dd8c9f3.da44de56.js.LICENSE.txt */
(self.webpackChunkjac_docs=self.webpackChunkjac_docs||[]).push([[1494],{3571:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>f,frontMatter:()=>d,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"datos-gob/dimensiones","title":"Dimensiones","description":"En esta secci\xf3n se especifican las tablas que se publican","source":"@site/docs/datos-gob/dimensiones.mdx","sourceDirName":"datos-gob","slug":"/datos-gob/dimensiones","permalink":"/jac-docs/es/docs/datos-gob/dimensiones","draft":false,"unlisted":false,"editUrl":"https://github.com/jac-mtt/jac-docs/edit/main/docs/datos-gob/dimensiones.mdx","tags":[],"version":"current","frontMatter":{"title":"Dimensiones"},"sidebar":"jacDocsSidebar","previous":{"title":"Operaciones por Aeropuerto","permalink":"/jac-docs/es/docs/datos-gob/operaciones-aeropuertos"}}');var n=r(4848),s=r(8453),a=r(9950);const o='nombre_columna,tipo_dato,descripcion\r\noaci,string,C\xf3digo OACI/ICAO (4 letras) del aeropuerto/aer\xf3dromo.\r\niata,string?,C\xf3digo IATA (3 letras) del aeropuerto/aer\xf3dromo. No todos los aerodromos presentan este tipo de c\xf3digo.\r\nnombre,string,"Nombre del aeropuerto. Especifica si es aeropuerto internacional, regular, aer\xf3dromo, base militar, entre otros."\r\nnombre_corto,string,Nombre acortado sin especificar tama\xf1o del aeropuerto.\r\nciudad,string,Localidad donde se encuentra el aeropuerto.\r\nregion_iso,string,Regi\xf3n del aeropuerto en formato ISO-3166-2.\r\nlatitud,numeric,Latitud en formato decimal.\r\nlongitud,numeric,Longitud en formato decimal.\r\n',d={title:"Dimensiones"},u="Dimensiones de las Series de Datos",h={},l=[{value:"Dim Aeropuertos",id:"dim-aeropuertos",level:2},{value:"Dim Aerolineas",id:"dim-aerolineas",level:2},{value:"Dim Actividades DGAC",id:"dim-actividades-dgac",level:2}];function c(e){const t={admonition:"admonition",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"dimensiones-de-las-series-de-datos",children:"Dimensiones de las Series de Datos"})}),"\n",(0,n.jsx)(t.p,{children:"En esta secci\xf3n se especifican las tablas que se publican\r\nen Datos.Gob relacionadas con las dimensiones de los datos\r\nque se encargan de contextualizar o describir en mayor\r\ndetalle, columnas de las dem\xe1s series de datos."}),"\n",(0,n.jsx)(t.p,{children:"A continuaci\xf3n, el diagrama muestra las relaciones entre\r\nestas dimensiones y las tablas de series:"}),"\n",(0,n.jsx)(t.mermaid,{value:'erDiagram\r\n    dim_aeropuerto {\r\n        string oaci\r\n    }\r\n    \r\n    dim_aerolinea {\r\n        string oaci\r\n    }\r\n\r\n    dim_actividad {\r\n        string codigo\r\n    }\r\n    \r\n    bitacora {\r\n        string aeropuerto_oaci FK\r\n        string aeropuerto_dgac_orig_dest FK\r\n        string aerolinea_dgac FK\r\n        string cod_actividad FK\r\n    }\r\n\r\n    operaciones_aeropuerto {\r\n        string aeropuerto_oaci FK\r\n    }\r\n    \r\n    dim_aeropuerto ||--o{ bitacora : "aeropuerto_dgac_orig_dest"\r\n    dim_aeropuerto ||--|{ bitacora : "aeropuerto_oaci"\r\n    dim_aerolinea ||--o{ bitacora : "aerolinea_dgac"\r\n    dim_actividad ||--|{ bitacora : "cod_actividad"\r\n    dim_aeropuerto ||--|{ operaciones_aeropuerto : "aeropuerto_oaci"\r\n'}),"\n",(0,n.jsx)(t.p,{children:"Se omiten el resto de las columnas de las tablas para simplificar el diagrama."}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"La informaci\xf3n que se presenta dentro de las dimensiones est\xe1\r\nsujeta a posibles modificaciones."})}),"\n",(0,n.jsx)(t.h2,{id:"dim-aeropuertos",children:"Dim Aeropuertos"}),"\n",(0,n.jsx)(t.p,{children:"La dimensi\xf3n de aeropuertos y aerodromos contiene informaci\xf3n...\r\nInformaci\xf3n de Documentos de la DGAC, IFIS y OurAirports."}),"\n",(0,n.jsx)(a.A,{csvData:o}),"\n",(0,n.jsx)(t.h2,{id:"dim-aerolineas",children:"Dim Aerolineas"}),"\n",(0,n.jsx)(t.p,{children:"Dimension con la descripci\xf3n de las aerolineas que operan en Chile..."}),"\n",(0,n.jsx)(t.h2,{id:"dim-actividades-dgac",children:"Dim Actividades DGAC"}),"\n",(0,n.jsx)(t.p,{children:"Las actividades de la DGAC..."})]})}function f(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},9950:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});r(6540);var i=r(4809),n=r.n(i);const s={nombre_columna:"Columna",tipo_dato:"Tipo de Dato",descripcion:"Descripci\xf3n"};var a=r(4848);const o=e=>{let{csvData:t}=e;const{headers:r,rows:i}=function(e,t){void 0===t&&(t=s);const r=n().parse(e,{header:!0,skipEmptyLines:!0});if(r.errors.length>0)throw new Error(`Error parsing CSV: ${r.errors.map((e=>e.message)).join(", ")}`);const i=r.meta.fields;if(!i)throw new Error("No se encontraron columnas en el CSV.");if(i.length>3)throw new Error("Demasiadas columnas en el CSV.");const a=i.filter((e=>!(e in t)));if(a.length>0)throw new Error(`Nombre columnas no validas: ${a.join(", ")}`);return{headers:i.map((e=>t[e])),rows:r.data.map((e=>i.map((t=>e[t]||""))))}}(t);return(0,a.jsxs)("table",{children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:r.map(((e,t)=>(0,a.jsx)("th",{children:e},t)))})}),(0,a.jsx)("tbody",{children:i.map(((e,t)=>(0,a.jsx)("tr",{children:e.map(((e,t)=>(0,a.jsx)("td",{children:t<2?(0,a.jsx)("code",{children:e}):e},t)))},t)))})]})}},4809:function(e,t){var r,i,n;i=[],r=function e(){var t,r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==r?r:{},i=!r.document&&!!r.postMessage,n=r.IS_PAPA_WORKER||!1,s={},a=0,o={};function d(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new f(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){var i=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<i){let t=this._config.newline;t||(s=this._config.quoteChar||'"',t=this._handle.guessLineEndings(e,s)),e=[...e.split(t).slice(i)].join(t)}this.isFirstChunk&&k(this._config.beforeFirstChunk)&&void 0!==(s=this._config.beforeFirstChunk(e))&&(e=s),this.isFirstChunk=!1,this._halted=!1,i=this._partialLine+e;var s=(this._partialLine="",this._handle.parse(i,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=s.meta.cursor,this._finished||(this._partialLine=i.substring(e-this._baseIndex),this._baseIndex=e),s&&s.data&&(this._rowCount+=s.data.length),i=this._finished||this._config.preview&&this._rowCount>=this._config.preview,n)r.postMessage({results:s,workerId:o.WORKER_ID,finished:i});else if(k(this._config.chunk)&&!t){if(this._config.chunk(s,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=s=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(s.data),this._completeResults.errors=this._completeResults.errors.concat(s.errors),this._completeResults.meta=s.meta),this._completed||!i||!k(this._config.complete)||s&&s.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),i||s&&s.meta.paused||this._nextChunk(),s}this._halted=!0},this._sendError=function(e){k(this._config.error)?this._config.error(e):n&&this._config.error&&r.postMessage({workerId:o.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e=e||{}).chunkSize||(e.chunkSize=o.RemoteChunkSize),d.call(this,e),this._nextChunk=i?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),i||(t.onload=v(this._chunkLoaded,this),t.onerror=v(this._chunkError,this)),t.open(this._config.downloadRequestBody?"POST":"GET",this._input,!i),this._config.downloadRequestHeaders){var e,r=this._config.downloadRequestHeaders;for(e in r)t.setRequestHeader(e,r[e])}var n;this._config.chunkSize&&(n=this._start+this._config.chunkSize-1,t.setRequestHeader("Range","bytes="+this._start+"-"+n));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}i&&0===t.status&&this._chunkError()}},this._chunkLoaded=function(){4===t.readyState&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>null!==(e=e.getResponseHeader("Content-Range"))?parseInt(e.substring(e.lastIndexOf("/")+1)):-1)(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(new Error(e))}}function h(e){(e=e||{}).chunkSize||(e.chunkSize=o.LocalChunkSize),d.call(this,e);var t,r,i="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,r=e.slice||e.webkitSlice||e.mozSlice,i?((t=new FileReader).onload=v(this._chunkLoaded,this),t.onerror=v(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,n=(this._config.chunkSize&&(n=Math.min(this._start+this._config.chunkSize,this._input.size),e=r.call(e,this._start,n)),t.readAsText(e,this._config.encoding));i||this._chunkLoaded({target:{result:n}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function l(e){var t;d.call(this,e=e||{}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,r;if(!this._finished)return e=this._config.chunkSize,t=e?(r=t.substring(0,e),t.substring(e)):(r=t,""),this._finished=!t,this.parseChunk(r)}}function c(e){d.call(this,e=e||{});var t=[],r=!0,i=!1;this.pause=function(){d.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){d.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){i&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):r=!0},this._streamData=v((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),r&&(r=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=v((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=v((function(){this._streamCleanUp(),i=!0,this._streamData("")}),this),this._streamCleanUp=v((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function f(e){var t,r,i,n,s=Math.pow(2,53),a=-s,d=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,h=this,l=0,c=0,f=!1,g=!1,_=[],y={data:[],errors:[],meta:{}};function v(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function w(){if(y&&i&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+o.DefaultDelimiter+"'"),i=!1),e.skipEmptyLines&&(y.data=y.data.filter((function(e){return!v(e)}))),E()){if(y)if(Array.isArray(y.data[0])){for(var t=0;E()&&t<y.data.length;t++)y.data[t].forEach(r);y.data.splice(0,1)}else y.data.forEach(r);function r(t,r){k(e.transformHeader)&&(t=e.transformHeader(t,r)),_.push(t)}}function n(t,r){for(var i=e.header?{}:[],n=0;n<t.length;n++){var o=n,h=t[n];h=((t,r)=>(t=>(e.dynamicTypingFunction&&void 0===e.dynamicTyping[t]&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?"true"===r||"TRUE"===r||"false"!==r&&"FALSE"!==r&&((e=>{if(d.test(e)&&(e=parseFloat(e),a<e&&e<s))return 1})(r)?parseFloat(r):u.test(r)?new Date(r):""===r?null:r):r)(o=e.header?n>=_.length?"__parsed_extra":_[n]:o,h=e.transform?e.transform(h,o):h),"__parsed_extra"===o?(i[o]=i[o]||[],i[o].push(h)):i[o]=h}return e.header&&(n>_.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+_.length+" fields but parsed "+n,c+r):n<_.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+_.length+" fields but parsed "+n,c+r)),i}var h;y&&(e.header||e.dynamicTyping||e.transform)&&(h=1,!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(n),h=y.data.length):y.data=n(y.data,0),e.header&&y.meta&&(y.meta.fields=_),c+=h)}function E(){return e.header&&0===_.length}function C(e,t,r,i){e={type:e,code:t,message:r},void 0!==i&&(e.row=i),y.errors.push(e)}k(e.step)&&(n=e.step,e.step=function(t){y=t,E()?w():(w(),0!==y.data.length&&(l+=t.data.length,e.preview&&l>e.preview?r.abort():(y.data=y.data[0],n(y,h))))}),this.parse=function(n,s,a){var d=e.quoteChar||'"';return e.newline||(e.newline=this.guessLineEndings(n,d)),i=!1,e.delimiter?k(e.delimiter)&&(e.delimiter=e.delimiter(n),y.meta.delimiter=e.delimiter):((d=((t,r,i,n,s)=>{var a,d,u,h;s=s||[",","\t","|",";",o.RECORD_SEP,o.UNIT_SEP];for(var l=0;l<s.length;l++){for(var c,f=s[l],p=0,g=0,_=0,y=(u=void 0,new m({comments:n,delimiter:f,newline:r,preview:10}).parse(t)),b=0;b<y.data.length;b++)i&&v(y.data[b])?_++:(g+=c=y.data[b].length,void 0===u?u=c:0<c&&(p+=Math.abs(c-u),u=c));0<y.data.length&&(g/=y.data.length-_),(void 0===d||p<=d)&&(void 0===h||h<g)&&1.99<g&&(d=p,a=f,h=g)}return{successful:!!(e.delimiter=a),bestDelimiter:a}})(n,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=d.bestDelimiter:(i=!0,e.delimiter=o.DefaultDelimiter),y.meta.delimiter=e.delimiter),d=b(e),e.preview&&e.header&&d.preview++,t=n,r=new m(d),y=r.parse(t,s,a),w(),f?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return f},this.pause=function(){f=!0,r.abort(),t=k(e.chunk)?"":t.substring(r.getCharIndex())},this.resume=function(){h.streamer._halted?(f=!1,h.streamer.parseChunk(t,!0)):setTimeout(h.resume,3)},this.aborted=function(){return g},this.abort=function(){g=!0,r.abort(),y.meta.aborted=!0,k(e.complete)&&e.complete(y),t=""},this.guessLineEndings=function(e,t){e=e.substring(0,1048576),t=new RegExp(p(t)+"([^]*?)"+p(t),"gm");var r=(e=e.replace(t,"")).split("\r");if(e=1<(t=e.split("\n")).length&&t[0].length<r[0].length,1===r.length||e)return"\n";for(var i=0,n=0;n<r.length;n++)"\n"===r[n][0]&&i++;return i>=r.length/2?"\r\n":"\r"}}function p(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function m(e){var t=(e=e||{}).delimiter,r=e.newline,i=e.comments,n=e.step,s=e.preview,a=e.fastMode,d=null,u=!1,h=null==e.quoteChar?'"':e.quoteChar,l=h;if(void 0!==e.escapeChar&&(l=e.escapeChar),("string"!=typeof t||-1<o.BAD_DELIMITERS.indexOf(t))&&(t=","),i===t)throw new Error("Comment character same as delimiter");!0===i?i="#":("string"!=typeof i||-1<o.BAD_DELIMITERS.indexOf(i))&&(i=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var c=0,f=!1;this.parse=function(o,m,g){if("string"!=typeof o)throw new Error("Input must be a string");var _=o.length,y=t.length,b=r.length,v=i.length,w=k(n),E=[],C=[],x=[],R=c=0;if(!o)return q();if(a||!1!==a&&-1===o.indexOf(h)){for(var S=o.split(r),D=0;D<S.length;D++){if(x=S[D],c+=x.length,D!==S.length-1)c+=r.length;else if(g)return q();if(!i||x.substring(0,v)!==i){if(w){if(E=[],T(x.split(t)),N(),f)return q()}else T(x.split(t));if(s&&s<=D)return E=E.slice(0,s),q(!0)}}return q()}for(var O=o.indexOf(t,c),A=o.indexOf(r,c),j=new RegExp(p(l)+p(h),"g"),I=o.indexOf(h,c);;)if(o[c]===h)for(I=c,c++;;){if(-1===(I=o.indexOf(h,I+1)))return g||C.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:E.length,index:c}),M();if(I===_-1)return M(o.substring(c,I).replace(j,h));if(h===l&&o[I+1]===l)I++;else if(h===l||0===I||o[I-1]!==l){-1!==O&&O<I+1&&(O=o.indexOf(t,I+1));var L=F(-1===(A=-1!==A&&A<I+1?o.indexOf(r,I+1):A)?O:Math.min(O,A));if(o.substr(I+1+L,y)===t){x.push(o.substring(c,I).replace(j,h)),o[c=I+1+L+y]!==h&&(I=o.indexOf(h,c)),O=o.indexOf(t,c),A=o.indexOf(r,c);break}if(L=F(A),o.substring(I+1+L,I+1+L+b)===r){if(x.push(o.substring(c,I).replace(j,h)),z(I+1+L+b),O=o.indexOf(t,c),I=o.indexOf(h,c),w&&(N(),f))return q();if(s&&E.length>=s)return q(!0);break}C.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:E.length,index:c}),I++}}else if(i&&0===x.length&&o.substring(c,c+v)===i){if(-1===A)return q();c=A+b,A=o.indexOf(r,c),O=o.indexOf(t,c)}else if(-1!==O&&(O<A||-1===A))x.push(o.substring(c,O)),c=O+y,O=o.indexOf(t,c);else{if(-1===A)break;if(x.push(o.substring(c,A)),z(A+b),w&&(N(),f))return q();if(s&&E.length>=s)return q(!0)}return M();function T(e){E.push(e),R=c}function F(e){var t=0;return-1!==e&&(e=o.substring(I+1,e))&&""===e.trim()?e.length:t}function M(e){return g||(void 0===e&&(e=o.substring(c)),x.push(e),c=_,T(x),w&&N()),q()}function z(e){c=e,T(x),x=[],A=o.indexOf(r,c)}function q(i){if(e.header&&!m&&E.length&&!u){var n=E[0],s={},a=new Set(n);let t=!1;for(let r=0;r<n.length;r++){let i=n[r];if(s[i=k(e.transformHeader)?e.transformHeader(i,r):i]){let e,o=s[i];for(;e=i+"_"+o,o++,a.has(e););a.add(e),n[r]=e,s[i]++,t=!0,(d=null===d?{}:d)[e]=i}else s[i]=1,n[r]=i;a.add(i)}t&&console.warn("Duplicate headers found and renamed."),u=!0}return{data:E,errors:C,meta:{delimiter:t,linebreak:r,aborted:f,truncated:!!i,cursor:R+(m||0),renamedHeaders:d}}}function N(){n(q()),E=[],C=[]}},this.abort=function(){f=!0},this.getCharIndex=function(){return c}}function g(e){var t=e.data,r=s[t.workerId],i=!1;if(t.error)r.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){i=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(k(r.userStep)){for(var a=0;a<t.results.data.length&&(r.userStep({data:t.results.data[a],errors:t.results.errors,meta:t.results.meta},n),!i);a++);delete t.results}else k(r.userChunk)&&(r.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!i&&_(t.workerId,t.results)}function _(e,t){var r=s[e];k(r.userComplete)&&r.userComplete(t),r.terminate(),delete s[e]}function y(){throw new Error("Not implemented.")}function b(e){if("object"!=typeof e||null===e)return e;var t,r=Array.isArray(e)?[]:{};for(t in e)r[t]=b(e[t]);return r}function v(e,t){return function(){e.apply(t,arguments)}}function k(e){return"function"==typeof e}return o.parse=function(t,i){var n=(i=i||{}).dynamicTyping||!1;if(k(n)&&(i.dynamicTypingFunction=n,n={}),i.dynamicTyping=n,i.transform=!!k(i.transform)&&i.transform,!i.worker||!o.WORKERS_SUPPORTED)return n=null,o.NODE_STREAM_INPUT,"string"==typeof t?(t=(e=>65279!==e.charCodeAt(0)?e:e.slice(1))(t),n=new(i.download?u:l)(i)):!0===t.readable&&k(t.read)&&k(t.on)?n=new c(i):(r.File&&t instanceof File||t instanceof Object)&&(n=new h(i)),n.stream(t);(n=(()=>{var t;return!!o.WORKERS_SUPPORTED&&(t=(()=>{var t=r.URL||r.webkitURL||null,i=e.toString();return o.BLOB_URL||(o.BLOB_URL=t.createObjectURL(new Blob(["var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ","(",i,")();"],{type:"text/javascript"})))})(),(t=new r.Worker(t)).onmessage=g,t.id=a++,s[t.id]=t)})()).userStep=i.step,n.userChunk=i.chunk,n.userComplete=i.complete,n.userError=i.error,i.step=k(i.step),i.chunk=k(i.chunk),i.complete=k(i.complete),i.error=k(i.error),delete i.worker,n.postMessage({input:t,config:i,workerId:n.id})},o.unparse=function(e,t){var r=!1,i=!0,n=",",s="\r\n",a='"',d=a+a,u=!1,h=null,l=!1,c=((()=>{if("object"==typeof t){if("string"!=typeof t.delimiter||o.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(n=t.delimiter),"boolean"!=typeof t.quotes&&"function"!=typeof t.quotes&&!Array.isArray(t.quotes)||(r=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(u=t.skipEmptyLines),"string"==typeof t.newline&&(s=t.newline),"string"==typeof t.quoteChar&&(a=t.quoteChar),"boolean"==typeof t.header&&(i=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");h=t.columns}void 0!==t.escapeChar&&(d=t.escapeChar+a),t.escapeFormulae instanceof RegExp?l=t.escapeFormulae:"boolean"==typeof t.escapeFormulae&&t.escapeFormulae&&(l=/^[=+\-@\t\r].*$/)}})(),new RegExp(p(a),"g"));if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return f(null,e,u);if("object"==typeof e[0])return f(h||Object.keys(e[0]),e,u)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||h),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),f(e.fields||[],e.data||[],u);throw new Error("Unable to serialize unrecognized input");function f(e,t,r){var a="",o=("string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),d=!Array.isArray(t[0]);if(o&&i){for(var u=0;u<e.length;u++)0<u&&(a+=n),a+=m(e[u],u);0<t.length&&(a+=s)}for(var h=0;h<t.length;h++){var l=(o?e:t[h]).length,c=!1,f=o?0===Object.keys(t[h]).length:0===t[h].length;if(r&&!o&&(c="greedy"===r?""===t[h].join("").trim():1===t[h].length&&0===t[h][0].length),"greedy"===r&&o){for(var p=[],g=0;g<l;g++){var _=d?e[g]:g;p.push(t[h][_])}c=""===p.join("").trim()}if(!c){for(var y=0;y<l;y++){0<y&&!f&&(a+=n);var b=o&&d?e[y]:y;a+=m(t[h][b],y)}h<t.length-1&&(!r||0<l&&!f)&&(a+=s)}}return a}function m(e,t){var i,s;return null==e?"":e.constructor===Date?JSON.stringify(e).slice(1,25):(s=!1,l&&"string"==typeof e&&l.test(e)&&(e="'"+e,s=!0),i=e.toString().replace(c,d),(s=s||!0===r||"function"==typeof r&&r(e,t)||Array.isArray(r)&&r[t]||((e,t)=>{for(var r=0;r<t.length;r++)if(-1<e.indexOf(t[r]))return!0;return!1})(i,o.BAD_DELIMITERS)||-1<i.indexOf(n)||" "===i.charAt(0)||" "===i.charAt(i.length-1))?a+i+a:i)}},o.RECORD_SEP=String.fromCharCode(30),o.UNIT_SEP=String.fromCharCode(31),o.BYTE_ORDER_MARK="\ufeff",o.BAD_DELIMITERS=["\r","\n",'"',o.BYTE_ORDER_MARK],o.WORKERS_SUPPORTED=!i&&!!r.Worker,o.NODE_STREAM_INPUT=1,o.LocalChunkSize=10485760,o.RemoteChunkSize=5242880,o.DefaultDelimiter=",",o.Parser=m,o.ParserHandle=f,o.NetworkStreamer=u,o.FileStreamer=h,o.StringStreamer=l,o.ReadableStreamStreamer=c,r.jQuery&&((t=r.jQuery).fn.parse=function(e){var i=e.config||{},n=[];return this.each((function(e){if("INPUT"!==t(this).prop("tagName").toUpperCase()||"file"!==t(this).attr("type").toLowerCase()||!r.FileReader||!this.files||0===this.files.length)return!0;for(var s=0;s<this.files.length;s++)n.push({file:this.files[s],inputElem:this,instanceConfig:t.extend({},i)})})),s(),this;function s(){if(0===n.length)k(e.complete)&&e.complete();else{var r,i,s,d,u=n[0];if(k(e.before)){var h=e.before(u.file,u.inputElem);if("object"==typeof h){if("abort"===h.action)return r="AbortError",i=u.file,s=u.inputElem,d=h.reason,void(k(e.error)&&e.error({name:r},i,s,d));if("skip"===h.action)return void a();"object"==typeof h.config&&(u.instanceConfig=t.extend(u.instanceConfig,h.config))}else if("skip"===h)return void a()}var l=u.instanceConfig.complete;u.instanceConfig.complete=function(e){k(l)&&l(e,u.file,u.inputElem),a()},o.parse(u.file,u.instanceConfig)}}function a(){n.splice(0,1),s()}}),n&&(r.onmessage=function(e){e=e.data,void 0===o.WORKER_ID&&e&&(o.WORKER_ID=e.workerId),"string"==typeof e.input?r.postMessage({workerId:o.WORKER_ID,results:o.parse(e.input,e.config),finished:!0}):(r.File&&e.input instanceof File||e.input instanceof Object)&&(e=o.parse(e.input,e.config))&&r.postMessage({workerId:o.WORKER_ID,results:e,finished:!0})}),(u.prototype=Object.create(d.prototype)).constructor=u,(h.prototype=Object.create(d.prototype)).constructor=h,(l.prototype=Object.create(l.prototype)).constructor=l,(c.prototype=Object.create(d.prototype)).constructor=c,o},void 0===(n="function"==typeof r?r.apply(t,i):r)||(e.exports=n)}}]);