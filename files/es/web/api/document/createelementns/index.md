---
title: Document.createElementNS()
slug: Web/API/Document/createElementNS
---

{{ApiRef("DOM")}}

Crea un elemento del DOM con el espacio de nombres URI y un nombre calificado.

Para crear un elemento sin especificar un espacio de nombre URI usa el método [createElement](/es/docs/Web/API/Document/createElement).

## Sintaxis

```js
var element = document.createElementNS(namespaceURI, qualifiedName[, options]);
```

### Parámetros

- `namespaceURI`
  - : _String_ que especifica el [namespace URI](https://www.w3.org/TR/2004/REC-DOM-Level-3-Core-20040407/glossary.html#dt-namespaceURI) a asociar con el elemento. La propiedad [namespaceURI](/es/docs/Web/API/Element/namespaceURI) del elemento creado es inicializada con el valor del `namespaceURI`. Ver [Namespace URIs válidos](#valid_namespace_uri's).
- `qualifiedName`
  - : _String_ que especifica el tipo del elemento a ser creado. La propiedad [nodeName](/es/docs/Web/API/Node/nodeName) del elemento creado es inicializada con el valor `qualifiedName`.
- `options`{{optional_inline}}
  - : Un objeto opcional `ElementCreationOptions` que contiene una sola propiedad llamada `is`, cuyo valor es el nombre de la etiqueta para un elemento personalizado previamente definido usando `customElements.define()`. Para retro compatibilidad con versiones previas de la [Especificación de Elementos Personalizados](https://www.w3.org/TR/custom-elements/), algunos navegadores te permitirán pasar un _String_ aquí en lugar de un _Objeto_, donde el valor del _String_ es el nombre de la etiqueta del elemento personalizado. Ver [Extendiendo elementos HTML nativos](https://developers.google.com/web/fundamentals/primers/customelements/#extendhtml) para más información sobre como usar este parámetro.

    Al nuevo elemento le será dado un atributo `is` cuyo valor es el nombre de la etiqueta del elemento personalizado. Los elementos personalizados son una característica experimental disponible solo en algunos navegadores.

### Valor de Retorno

El nuevo [`Elemento`](/es/docs/Web/API/Element).

## Namespace URIs válidos

- HTML - Usa `http://www.w3.org/1999/xhtml`
- SVG - Usa `http://www.w3.org/2000/svg`
- XBL - Usa `http://www.mozilla.org/xbl`
- XUL - Usa `http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul`

## Ejemplo

El código siguiente crea un elemento \<div> nuevo en el namespace [XHTML](/es/docs/Glossary/XHTML) y lo agrega al elemento vbox. Aunque no es un documento [XUL](/es/docs/XUL) extremamente útil esto demuestra el uso de los elementos de dos namespaces distintos dentro de un solo documento:

```xml
<?xml version="1.0"?>
<page xmlns="http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul"
      xmlns:html="http://www.w3.org/1999/xhtml"
      title="||Trabajando con elementos||"
      onload="init()">

<script type="text/javascript"><![CDATA[
 var container;
 var newdiv;
 var txtnode;

 function init(){
   container = document.getElementById("ContainerBox");
   newdiv = document.createElementNS("http://www.w3.org/1999/xhtml","div");
   txtnode = document.createTextNode("Este es el texto que fue construido dinámicamente con createElementNS y createTextNode y luego insertado dentro del documento usando appendChild.");
   newdiv.appendChild(txtnode);
   container.appendChild(newdiv);
 }

]]></script>

 <vbox id='ContainerBox' flex='1'>
  <html:div>
   El script en esta página agregará contenido dinámico debajo:
  </html:div>
 </vbox>

</page>
```

> [!NOTE]
> El ejemplo dado arriba usa script en linea lo cúal no es recomendable en documentos XHTML. Este ejemplo en particular es un documento XUL con XHTML embedido, de cualquier forma la recomendación aplica.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- {{DOMxRef("document.createElement()")}}
- {{DOMxRef("document.createTextNode()")}}
- {{DOMxRef("Element.namespaceURI")}}
- [Namespaces in XML](https://www.w3.org/TR/1999/REC-xml-names-19990114/)
