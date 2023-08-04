---
title: document.getElementsByTagName
slug: Web/API/Document/getElementsByTagName
---

{{ ApiRef("DOM") }}

### Resumen

Devuelve una lista de elementos con un nombre determinado. Se busca en todo el documento, incluyendo el nodo raíz.

### Sintaxis

```js
elements = document.getElementsByTagName(name);
```

- `elements` es una lista 'viva' (`NodeList`) de los elementos encontrados en el orden en que han aparecido en el árbol.
- `name` es una cadena que representa el nombre de los elementos. La cadena especial "\*" representa a todos los elementos.

### Ejemplo

En el siguiente ejemplo, `getElementsByTagName` empieza por el elemento padre y busca hacia abajo recurrentemente a lo largo de todo el DOM por ese elemento padre, buscando por hijos que cumplan con el criterio: nombre = `name`.

Ten en cuenta que cuando el nodo en el que se invoca `getElementsByTagName`, no es el nodo `document`, en realidad se está usando el método [element.getElementsByTagName](/es/DOM/element.getElementsByTagName).

```html
<html>
  <head>
    <title>ejemplo de getElementsByTagName</title>

    <script type="text/javascript">
      function getAllParaElems() {
        var allParas = document.getElementsByTagName("p");

        var num = allParas.length;

        alert("Hay " + num + " <p> elementos en este documento");
      }

      function div1ParaElems() {
        var div1 = document.getElementById("div1");
        var div1Paras = div1.getElementsByTagName("p");

        var num = div1Paras.length;

        alert("Hay " + num + " <p> elementos en el elemento div1");
      }

      function div2ParaElems() {
        var div2 = document.getElementById("div2");
        var div2Paras = div2.getElementsByTagName("p");

        var num = div2Paras.length;

        alert("Hay " + num + " <p> elementos en el elemento div2");
      }
    </script>
  </head>

  <body style="border: solid green 3px">
    <p>Algo de texto</p>
    <p>Algo de texto</p>

    <div id="div1" style="border: solid blue 3px">
      <p>Algo de texto en div1</p>
      <p>Algo de texto en div1</p>
      <p>Algo de texto en div1</p>

      <div id="div2" style="border: solid red 3px">
        <p>Algo de texto en div2</p>
        <p>Algo de texto en div2</p>
      </div>
    </div>

    <p>Algo de texto</p>
    <p>Algo de texto</p>

    <button onclick="getAllParaElems();">
      muestra todos los elementos p en el documento</button
    ><br />

    <button onclick="div1ParaElems();">
      muestra todos los elementos p en div1</button
    ><br />

    <button onclick="div2ParaElems();">
      muestra todos los elementos p en div2
    </button>
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
