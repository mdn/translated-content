---
title: DOMParser
slug: Web/API/DOMParser
---

{{APIRef("DOM")}}{{SeeCompatTable}}

`DOMParser` puede analizar gramaticalmente (parsear, en adelante) código XML o HTML almacenado en una cadena de texto y convertirlo en un [Documento](/es/docs/Web/API/Document) DOM. `DOMParser` está especificado en [DOM Parsing and Serialization](https://w3c.github.io/DOM-Parsing/).

Tener en cuenta que [XMLHttpRequest](/es/docs/DOM/XMLHttpRequest) soporta parsear XML y HTML desde recursos direccionables por URL.

## Creando un DOMParser

Para crear un objeto `DOMParser`simplemente usar `new DOMParser()`.

Para más información sobre crear un objeto `DOMParser` en extensiones Firefox, por favor vea la documentación de [`nsIDOMParser`](/es/docs/nsIDOMParser).

## Parseando XML

Una vez creado el objeto parseador, puedes parsear XML desde una cadena de texto usando el método `parseFromString:`

```js
var parser = new DOMParser();
var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
```

### Manejo de errores

Es importante tener en cuenta que si el proceso de parseado falla, actualmente `DOMParser` no arroja una excepción, pero devuelve en cambio un documento de error (see [Error 45566 en Firefox](https://bugzil.la/45566)):

```xml
<parsererror xmlns="http://www.mozilla.org/newlayout/xml/parsererror.xml">
(error description)
<sourcetext>(a snippet of the source XML)</sourcetext>
</parsererror>
```

Los errores de parseo son reportados también a la [Consola de errores](/es/docs/Consola_de_errores), con el URI del documento (ver debajo) como el origen del error.

## Parseando un documento SVG o HTML

El `DOMParser` puede ser usado para parsear un documento SVG (Firefox 10.0 / Thunderbird 10.0 / SeaMonkey 2.7) o un documento HTML (Firefox 12.0 / Thunderbird 12.0 / SeaMonkey 2.9). Hay 3 resultados diferentes posibles, dependiendo del tipo MIME dado. Si el tipo del MIME es `text/xml`, el objeto resultante será un `XMLDocument`, si el tipo MIME es `image/svg+xml` será un `SVGDocument,` y si el tipo MIME es `text/html` será un `HTMLDocument`.

```js
var parser = new DOMParser();
var doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
// returns a Document, but not a SVGDocument nor a HTMLDocument

parser = new DOMParser();
doc = parser.parseFromString(stringContainingXMLSource, "image/svg+xml");
// returns a SVGDocument, which also is a Document.

parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html");
// returns a HTMLDocument, which also is a Document.
```

### Extensión HTML DOMParser para otros navegadores

```js
/*
 * DOMParser HTML extension
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function (DOMParser) {
  "use strict";

  var proto = DOMParser.prototype,
    nativeParse = proto.parseFromString;
  // Firefox/Opera/IE throw errors on unsupported types
  try {
    // WebKit returns null on unsupported types
    if (new DOMParser().parseFromString("", "text/html")) {
      // text/html parsing is natively supported
      return;
    }
  } catch (ex) {}

  proto.parseFromString = function (markup, type) {
    if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
      var doc = document.implementation.createHTMLDocument("");
      if (markup.toLowerCase().indexOf("<!doctype") > -1) {
        doc.documentElement.innerHTML = markup;
      } else {
        doc.body.innerHTML = markup;
      }
      return doc;
    } else {
      return nativeParse.apply(this, arguments);
    }
  };
})(DOMParser);
```

### DOMParser de Chrome/JSM/XPCOM/Privileged Scope

Ver artículo aquí: [nsIDOMParser](/es/docs/nsIDOMParser)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Parsing and serializing XML](/es/docs/Parsing_and_serializing_XML)
- [XMLHttpRequest](/es/docs/XMLHttpRequest)
- [XMLSerializer](/es/docs/XMLSerializer)
- [Parsing HTML to DOM](/es/Add-ons/Code_snippets/HTML_to_DOM)
