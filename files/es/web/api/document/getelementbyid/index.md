---
title: document.getElementById
slug: Web/API/Document/getElementById
---

{{ ApiRef("DOM") }}

Devuelve una referencia al elemento por su [ID](/es/docs/DOM/element.id).

## Sintaxis

```js
elemento = document.getElementById(id);
```

### Parámetros

- **`id`**
  - : Es una cadena sensible a mayúsculas referida al ID único del elemento buscado.

### Valor Retornado

- **`element`**
  - : Es una referencia a un objeto {{domxref("Element")}}, o `null` si un elemento con el ID especificado no se encuentra en el documento.

## Ejemplo

### HTML

```html
<html>
  <head>
    <title>Ejemplo getElementById</title>
  </head>
  <body>
    <p id="para">Cualquier texto acá</p>
    <button onclick="changeColor('blue');">Azul</button>
    <button onclick="changeColor('red');">Rojo</button>
  </body>
</html>
```

### JavaScript

```js
function changeColor(newColor) {
  var elem = document.getElementById("para");
  elem.style.color = newColor;
}
```

### Resultado

{{EmbedLiveSample('Ejemplo', 250, 100)}}

## Notas

Los usuarios nuevos deberían notar que escribir en mayúsculas 'Id' en el nombre de este método _debe ser corregida_ para que el código sea válido - 'getElementByID' no funcionará a pesar de que parezca natural.

A diferencia de otros métodos similares, getElementById sólo está disponible como un método del objeto global document, y no se encuentra disponible como un método en todos los objetos del DOM. Como los valores ID deben ser únicos a traves del documento, no existe necesidad para versiones "locales" de la función.

## Ejemplo

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Documento</title>
  </head>
  <body>
    <div id="parent-id">
      <p>Hola Mundo 1</p>
      <p id="test1">Hola Mundo 2</p>
      <p>Hola palabra 3</p>
      <p>Hola palabra 4</p>
    </div>
    <script>
      var parentDOM = document.getElementById("parent-id");
      var test1 = parentDOM.getElementById("test1");
      //lanza error
      //Uncaught TypeError: parentDOM.getElementById is not a function
    </script>
  </body>
</html>
```

Si no existe un elemento con la `id` solicitada, esta función devuelve `null`. Note que el parámetro `id` es sensible a mayúsculas, así que `document.getElementById("Main")` devolverá `null` dentro del elemento `<div id="main">` porque "M" y "m" son diferentes para los propósitos de este método.

**Elementos que no se encuentren** en el documento no serán buscados por `getElementById()`. Cuando se cree un elemento y se le asigne un ID, debe insertar el elemento dentro del árbol del documento con {{domxref("Node.insertBefore()")}} u otro método similar antes de que se pueda acceder a el con `getElementById()`:

```js
var element = document.createElement("div");
element.id = "testqq";
var el = document.getElementById("testqq"); // el será null!
```

**Documentos no-HTML**. La implementación de DOM debe tener información que diga que atributos son del tipo ID. Los atributos con el nombre "id" son son del tipo ID a menos que se los defina en el DTD del documento. El atributo `id` es definido para ser del tipo ID en los casos comunes de [XHTML](/es/docs/XHTML), [XUL](/es/docs/Mozilla/Tech/XUL), y otros. Las implementaciones que no sepan si los atributos son o no del tipo ID se espera que retornen null.

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- La referencia [document](/es/docs/DOM/document) para otros métodos y propiedades que se pueden usar para obtener referencias a elementos en el documento.
- [document.querySelector()](/es/docs/Web/API/document.querySelector) para selectores via consultas como `'div.myclass'`
- [xml:id](/es/docs/xml/xml:id) - tiene un método utilitario para permitir que `getElementById()` obtenga 'xml:id' en documentos XML documents (como los retornados por llamadas Ajax.
