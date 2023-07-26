---
title: DocumentFragment
slug: Web/API/DocumentFragment
---

{{ APIRef("DOM") }}

La interfaz **`DocumentFragment`** representa un objeto de documento mínimo que no tiene padre. Se utiliza como una versión ligera de {{domxref("Document")}} que almacena un segmento de una estructura de documento compuesta de nodos como un documento estándar. La gran diferencia se debe al hecho de que el fragmento de documento no forma parte de la estructura de árbol del documento activo. Los cambios realizados en el fragmento no afectan el documento (incluso en {{Glossary("reflow")}}) ni inciden en el rendimiento cuando se realizan cambios. {{InheritanceDiagram}}

## Constructor

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }}
  - : Crea y devuelve un nuevo objeto `DocumentFragment`.

## Propiedades

Esta interfaz no tiene propiedades específicas*,* pero hereda las de su padre*, {{domxref("Node")}},* e implementa los de la interfaz _{{domxref("ParentNode")}}._

- {{ domxref("ParentNode.children") }} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve un {{domxref("HTMLCollection")}} que contiene los objetos de tipo {{domxref("Element")}} que son elementos secundarios del objeto `DocumentFragment`.
- {{ domxref("ParentNode.firstElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve el {{domxref("Element")}} que es el primer hijo del objeto `DocumentFragment`, o `null` si no hay ninguno.
- {{ domxref("ParentNode.lastElementChild") }} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve el {{domxref("Element")}} que es el último hijo del objeto `DocumentFragment`, o `null` si no hay ninguno.
- {{ domxref("ParentNode.childElementCount") }} {{readonlyInline}}{{experimental_inline}}
  - : Devuelve un `unsigned long` que indica cantidad de elementos secundarios que tiene el objeto `DocumentFragment`.

## Métodos

_Esta interfaz hereda los métodos de su padre_, _{{domxref("Node")}}_, e implementa los de la interfaz {{domxref("ParentNode")}}_._

- {{domxref("DocumentFragment.querySelector()")}}
  - : Devuelve el primer nodo {{domxref("Element")}} dentro de `DocumentFragment`, en el orden del documento, que coincide con los selectores especificados.
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : Devuelve un {{domxref("NodeList")}} de todos los nodos {{domxref("Element")}} dentro de `DocumentFragment` que coincide con los selectores especificados.
- {{domxref("DocumentFragment.getElementById()")}}
  - : Devuelve el primer nodo{{domxref("Element")}} dentro de `DocumentFragment`, en el orden del documento, que coincide con el **ID** especificado. funcionalmente equivale a {{domxref("Document.getElementById()")}}.

## Notas de uso

A common use for `DocumentFragment` is to create one, assemble a DOM subtree within it, then append or insert the fragment into the DOM using {{domxref("Node")}} interface methods such as {{domxref("Node.appendChild", "appendChild()")}} or {{domxref("Node.insertBefore", "insertBefore()")}}. Doing this moves the fragment's nodes into the DOM, leaving behind an empty `DocumentFragment`. Because all of the nodes are inserted into the document at once, only one reflow and render is triggered instead of potentially one for each node inserted if they were inserted separately.

This interface is also of great use with Web components: {{HTMLElement("template")}} elements contain a `DocumentFragment` in their {{domxref("HTMLTemplateElement.content")}} property.

An empty `DocumentFragment` can be created using the {{domxref("document.createDocumentFragment()")}} method or the constructor.

## Example

### HTML

```html
<ul id="list"></ul>
```

### JavaScript

```js
var list = document.querySelector("#list");
var fruits = ["Apple", "Orange", "Banana", "Melon"];

var fragment = new DocumentFragment();

fruits.forEach(function (fruit) {
  var li = document.createElement("li");
  li.innerHTML = fruit;
  fragment.appendChild(li);
});

list.appendChild(fragment);
```

### Result

{{EmbedLiveSample('Example')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

- [The DOM interfaces index.](/es/docs/Web/API/Document_Object_Model)
