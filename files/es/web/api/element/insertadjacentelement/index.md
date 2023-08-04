---
title: Element.insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
---

{{APIRef}}

El método `insertAdjacentElement()` inserta un elemento nodo dado en una posición dada con respecto al elemento sobre el que se invoca.

## Sintaxis

```js
elementoObjetivo.insertAdjacentElement(posición, elemento);
```

### Parameters

- `posición`

  - : Un {{domxref("DOMString")}} representando la posición relativa al elementoObjetivo; debe ser una de las siguientes cadenas:

    - `'beforebegin'`: Antes del `elementoObjetivo`.
    - `'afterbegin'`: Dentro del `elementoObjetivo`, antes de su primer hijo.
    - `'beforeend'`: Dentro del `elementoObjetivo`, después de su último hijo.
    - `'afterend'`: Después del `elementoObjetivo`.

- `elemento`
  - : El elemento HTML a ser insertado.

### Valor devuelto

El elemento insertado o `null`, si la inserción falla.

### Excepciones

| Excepción     | Explicación                                              |
| ------------- | -------------------------------------------------------- |
| `SyntaxError` | La `posición` especificada no tiene un valor reconocido. |
| `TypeError`   | El `elemento` especificado no es un elemento válido.     |

### Visualización de los nombres de posición

```
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> **Nota:** Las posiciones `beforebegin` y `afterend` sólo funcionan si el nodo está en un árbol y tiene un padre.

## Ejemplo

```js
beforeBtn.addEventListener("click", function () {
  var tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  activeElem.insertAdjacentElement("beforebegin", tempDiv);
  setListener(tempDiv);
});

afterBtn.addEventListener("click", function () {
  var tempDiv = document.createElement("div");
  tempDiv.style.backgroundColor = randomColor();
  activeElem.insertAdjacentElement("afterend", tempDiv);
  setListener(tempDiv);
});
```

Mira nuestro [insertAdjacentElement.html](https://mdn.github.io/dom-examples/insert-adjacent/insertAdjacentElement.html) demo en Github (mira el[código fuente](https://github.com/mdn/dom-examples/blob/master/insert-adjacent/insertAdjacentElement.html) también.) Aquí tenemos una secuencia de elementos {{htmlelement("div")}} dentro de un contenedor. Cuando uno es clickeado, se torna en seleccionado y tu puedes presionar los botones _Insert before_ e _Insert after_ para insertar nuevos divs antes o despues del elemento seleccionado usando `insertAdjacentElement()`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("Element.insertAdjacentHTML()")}}
- {{domxref("Element.insertAdjacentText()")}}
- {{domxref("Node.insertBefore()")}} (similar to `beforebegin`, with different arguments)
- {{domxref("Node.appendChild()")}} (mismo efecto que `beforeend`)
