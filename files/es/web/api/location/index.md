---
title: Location
slug: Web/API/Location
---

{{APIRef("HTML DOM")}}

La interface **`Location`** representa la ubicación (URL) del objeto al que esta vinculado. Los cambios hechos en ella son reflejados en el objeto al cual está relacionado. Ambas interfaces, {{domxref("Document")}} y {{domxref("Window")}} tienen una interface `Location` asignada, accessible desde {{domxref("Document.location")}} y {{domxref("Window.location")}} respectivamente.

## Propiedades

_La interface `Location`_ _no hereda ninguna propiedad, pero las implementa desde {{domxref("URLUtils")}}._

- {{domxref("Location.href")}}
  - : Es un {{domxref("DOMString")}} que contiene la URL completa. Si es cambiada, el documento asociado navegará a la nueva pagina. Puede ser cambiada desde un origen diferente que el asociado al documento.
- {{domxref("Location.protocol")}}
  - : Es un {{domxref("DOMString")}} que contiene el esquema del protocolo de la URL, incluyendo el `':'` final.
- {{domxref("Location.host")}}
  - : Es un {{domxref("DOMString")}} que contiene el host, el cual esta compuesta por: _hostname_, `':'`, y el _port_ de la URL.
- {{domxref("Location.hostname")}}
  - : Es un {{domxref("DOMString")}} que contiene el dominio de la URL.
- {{domxref("Location.port")}}
  - : Es un {{domxref("DOMString")}} que contiene el numero del puerto de la URL.
- {{domxref("Location.pathname")}}
  - : Es un {{domxref("DOMString")}} que contiene el `'/'` inicial, seguido por la ruta de la URL.
- {{domxref("Location.search")}}
  - : Es un {{domxref("DOMString")}} que contiene un `'?'` seguido por los parametros o el "querystring" de la URL. Navegadores modernos proveen [URLSearchParams](/es/docs/Web/API/URLSearchParams/get#Example) y [URL.searchParams](/es/docs/Web/API/URL/searchParams#Example) para hacer mas facil de obtener los parametros desde el querystring.
- {{domxref("Location.hash")}}
  - : Es un {{domxref("DOMString")}} que contiene un `'#'` seguido por el fragmento identificador de la URL.
- {{domxref("Location.username")}}
  - : Es un {{domxref("DOMString")}} que contiene el _username_ (usuario) especificado antes del dominio.
- {{domxref("Location.password")}}
  - : Es un {{domxref("DOMString")}} que contiene el _password_ (contraseña) especificado antes del dominio.
- {{domxref("Location.origin")}} {{readOnlyInline}}
  - : Es un {{domxref("DOMString")}} que contiene la forma canonica del _origin_ (origen) de la URL.

## Metodos

_La interface `Location` no hereda ningun metodo, pero los implementa desde {{domxref("URLUtils")}}_.

- {{domxref("Location.assign()")}}
  - : Carga el recurso en la URL proporcionada en el parámetro.
- {{domxref("Location.reload()")}}
  - : Recarga el recurso desde la URL actual. Si unico y opcional parametro es {{domxref("Boolean")}}, el cual, cuando es `true`, hace que la pagina siempre sea recargada desde el servidor. Si es `false` o no es especificado, el navegador puede recargar la pagina desde su cache.
- {{domxref("Location.replace()")}}
  - : Reemplaza el recurso actual por el recibido como URL. La diferencia con el metodo `assign()` es que luego de usar `replace()` la pagina actual no va a ser guardada en la sesión {{domxref("History")}}, esto significa que el usuario no podrá usar el boton _Atras_ para navegar a esta.
- {{domxref("Location.toString()")}}
  - : Retorna un {{domxref("DOMString")}} que contiene la URL completa. Es un sinonimo de {{domxref("URLUtils.href")}}, aunque este no puede ser utilizado para modificar el valor.

## Ejemplo

```js
// Crear un elemento <a> y usar la propiedad href para el proposito de este ejemplo.
// Una alternativa mas correcta es navegar a la URL y usar document.location o window.location
var url = document.createElement("a");
url.href =
  "https://developer.mozilla.org:8080/en-US/search?q=URL#search-results-close-container";
console.log(url.href); // https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
console.log(url.protocol); // https:
console.log(url.host); // developer.mozilla.org:8080
console.log(url.hostname); // developer.mozilla.org
console.log(url.port); // 8080
console.log(url.pathname); // /en-US/search
console.log(url.search); // ?q=URL
console.log(url.hash); // #search-results-close-container
console.log(url.origin); // https://developer.mozilla.org
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- Dos metodos que crean tal objeto: {{domxref("Window.location")}} y {{domxref("Document.location")}}.
- URL relacionadas a interfaces: {{domxref("URL")}}, {{domxref("URLSearchParams")}} y {{domxref("HTMLHyperlinkElementUtils")}}
