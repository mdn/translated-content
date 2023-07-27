---
title: Element.outerHTML
slug: Web/API/Element/outerHTML
---

{{APIRef}}

## Resumen

El atributo `outerHTML` del interfaz DOM {{ domxref("element") }} obtiene el fragmento HTML serializado que describe el elemento incluyendo sus descendientes. Puede ser asignado para reemplazar el elemento por los nodos resultantes de examinar de la cadena proporcionada.

## Sintaxis

```js
var content = element.outerHTML;
```

Al retorno, `content` contendrá el fragmento de HTML serializado que describe al elemento `element` y a sus descendientes.

```
element.outerHTML = content;
```

Reemplaza el elemento por los nodos generados del análisis de la cadena `content` con el padre de `element` como el nodo de contexto para el algoritmo de procesado del fragmento.

## Ejemplos

Ontener el valor de la propiedas `outerHTML` de un elemento:

```js
// HTML:
// <div id="d"><p>Content</p><p>Further Elaborated</p></div>

d = document.getElementById("d");
dump(d.outerHTML);

// La cadena '<div id="d"><p>Content</p><p>Further Elaborated</p></div>'
// es volcada a la ventana de la consola.
```

Reemplazar un nodo mediante la asignación de la propiedad `outerHTML`:

```js
// HTML:
// <div id="container"><div id="d">This is a div.</div></div>

container = document.getElementById("container");
d = document.getElementById("d");
console.log(container.firstChild.nodeName); // logs "DIV"

d.outerHTML = "<p>This paragraph replaced the original div.</p>";
console.log(container.firstChild.nodeName); // logs "P"

// El div #d no será parte del árbol del documento,
// el nuevo párrafo lo reemplazará.
```

## Notas

Si el elemento no tiene elemento padre, esto es, si es el elemento raíz del documento, la asignación de su propiedad `outerHTML` lanzará una [`DOMException`](/en/DOM/DOMException) con el código de error `NO_MODIFICATION_ALLOWED_ERR`. Por ejemplo:

```js
document.documentElement.outerHTML = "test"; // lanza una DOMException
```

Además, aunque el elemento es reemplazado en el documento, la variable cuya propiedad `outerHTML` fue asignada continuará conteniendo una referencia al elemento original:

```js
var p = document.getElementsByTagName("p")[0];
console.log(p.nodeName); // muestra: "P"
p.outerHTML = "<div>This div replaced a paragraph.</div>";
console.log(p.nodeName); // sigue mostrando: "P";
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("HTMLElement.outerText")}}
- MSDN: [Propiedad outerHTML](http://msdn.microsoft.com/en-us/library/ms534310%28v=vs.85%29.aspx)
