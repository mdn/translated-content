---
title: Element.getElementsByClassName()
slug: Web/API/Element/getElementsByClassName
---

{{APIRef}}

El método `Element.getElementsByClassName()` retorna una {{domxref("HTMLCollection")}} "viva" conteniendo todos los elementos hijos que tienen todos los nombres de clase dados. Cuando se llama en el objeto document, se realiza la búsqueda en el documento completo, incluyendo el nodo raíz.

De forma similar, el método {{domxref("Document.getElementsByClassName", "Document.getElementsByClassName()")}} actúa en todo el documento; retornará los elementos que sean descendientes del documento raiz especificado que tengan los nombres de clase dados.

## Sintaxis

```js
var elements = element.getElementsByClassName(names);
```

- **elements** es una {{ domxref("HTMLCollection") }} "viva" de los elementos encontrados.
- **names** es una cadena representando la lista de nombres de clase que deben concordar; los nombres de clase está separados por espacios en blanco.
- _element_ es cualquier {{domxref("Element")}} de un documento.

## Ejemplo

Obtiene todos los elementos que tienen una clase `test`:

```js
element.getElementsByClassName("test");
```

Obtiene todos los elementos que tienen tanto la clase `red` como `test`:

```js
element.getElementsByClassName("red test");
```

Obtiene todos los elementos que tienen la clase of `test`, dentro de un elemento que tiene el `id` `main`:

```js
document.getElementById("main").getElementsByClassName("test");
```

Podemos también usar métodos de {{jsxref("Array.prototype")}} en cualquier {{ domxref("HTMLCollection") }} pasando `el HTMLCollection` como el valor _this_ del método. Aquí encontramos todos los elementos {{HTMLElement("div")}} que tienen una clase `test`:

```js
var testElements = document.getElementsByClassName("test");
var testDivs = Array.prototype.filter.call(
  testElements,
  function (testElement) {
    return testElement.nodeName === "div";
  },
);
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
