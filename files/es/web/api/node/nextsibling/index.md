---
title: Node.nextSibling
slug: Web/API/Node/nextSibling
---

{{APIRef("DOM")}}

La propiedad de sólo lectura **`Node.nextSibling`** devuelve el siguiente nodo con respecto al indicado en la lista de nodos ({{domxref("Node.childNodes","childNodes")}}) a la que este pertenece o `null` si el nodo especificado es el último en dicha lista.

## Sintaxis

```
siguienteNodo = node.nextSibling
```

## Notas

Gecko-based browsers insert text nodes into a document to represent whitespace in the source markup.
Therefore a node obtained, for example, using [`Node.firstChild`](/es/docs/Web/API/Node/firstChild) or [`Node.previousSibling`](/es/docs/Web/API/Node/previousSibling) may refer to a
whitespace text node rather than the actual element the author intended to get.

See [Whitespace in the DOM](/es/docs/Web/Guide/DOM/Whitespace_in_the_DOM) and
[W3C DOM 3 FAQ: Why are some Text nodes empty?](http://www.w3.org/DOM/faq.html#emptytext)
for more information.

{{domxref("Element.nextElementSibling")}} debe ser utilizado para obtener el siguiente elemento ignorando cualquier nodo en blanco.

## Ejemplo

```html
<div id="div-01">Este es el div-01</div>
<div id="div-02">Este es el div-02</div>

<script type="text/javascript">
  var el = document.getElementById("div-01").nextSibling,
    i = 1;

  console.log("Hermanos de div-01:");

  while (el) {
    console.log(i + ". " + el.nodeName);
    el = el.nextSibling;
    i++;
  }
</script>

<!--
  Lo siguiente se escribe en la consola cuando carga:

      Nodos hermanos del div-01

      1. #text
      2. DIV
      3. #text
      4. SCRIPT

-->
```

En el ejemplo anterior, se puede observar que los nodos `#text` se insertan en el DOM, donde se produce un espacio en blanco en el marcado entre las etiquetas (es decir, después de la etiqueta de cierre de un elemento y antes de la etiqueta de apertura del siguiente). No se crea ningún espacio en blanco entre los elementos insertados por la sentencia `document.write`.

La posible inclusión de los nodos de texto en el DOM se debe permitir cuando se atraviese el DOM utilizando `nextSibling`. Vea los recursos en la sección Notas.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- {{domxref("Element.nextElementSibling")}}
