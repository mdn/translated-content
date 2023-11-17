---
title: document.getElementsByTagNameNS
slug: Web/API/Document/getElementsByTagNameNS
---

{{ ApiRef() }}

### Resumen

Devuelve una lista de elementos cuyo nombre pertenece a un determinado 'namespace'. La búsqueda se realiza en todo el documento, incluyendo el elemento raíz.

### Sintaxis

```js
elements = document.getElementsByTagNameNS(namespace, name);
```

- `elements` es una lista del tipo `NodeList` de los elementos encontrados, en el orden en el que aparecen en el árbol.
- `namespace` es el nombre URI en el que buscamos. (Véase [`element.namespaceURI`](/es/DOM/element.namespaceURI)).
- `name` es bien el nombre local por el que buscamos, o bien el valor especial `"*"`, que representa todos los elementos (véase [`element.localName`](/es/DOM/element.localName)).

### Ejemplo

En el siguiente ejemplo, `getElementsByTagNameNS` comienza por un elemento padre determinado y busca recurrentemente, hacia abajo, por los elementos que tienen el parámetro `name` que concuerda.

Es importante tener en cuenta que cuando el nodo en el que se invoca `getElementsByTagName`, no es el nodo `document`, en realidad estamos usando el método [element.getElementsByTagNameNS](/es/DOM/element.getElementsByTagNameNS).

Para usar el siguiente ejemplo, copia y pega en un documento con la extensión xhtml.

```html
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <title>ejemplo de getElementsByTagNameNS</title>

    <script type="text/javascript">
      function getAllParaElems() {
        var allParas = document.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );

        var num = allParas.length;

        alert("Hay " + num + " &lt;p&gt; elementos en este documento");
      }

      function div1ParaElems() {
        var div1 = document.getElementById("div1");
        var div1Paras = div1.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );

        var num = div1Paras.length;

        alert("Hay " + num + " &lt;p&gt; elementos en el elemento div1");
      }

      function div2ParaElems() {
        var div2 = document.getElementById("div2");
        var div2Paras = div2.getElementsByTagNameNS(
          "http://www.w3.org/1999/xhtml",
          "p",
        );

        var num = div2Paras.length;

        alert("Hay " + num + " &lt;p&gt; elementos en el elemento div2");
      }
    </script>
  </head>

  <body style="border: solid green 3px">
    <p>Algo de texto exterior</p>
    <p>Algo de texto exterior</p>

    <div id="div1" style="border: solid blue 3px">
      <p>Algo de texto en div1</p>
      <p>Algo de texto en div1</p>
      <p>Algo de texto en div1</p>

      <div id="div2" style="border: solid red 3px">
        <p>Algo de texto en div2</p>
        <p>Algo de texto en div2</p>
      </div>
    </div>

    <p>Algo de texto exterior</p>
    <p>Algo de texto exterior</p>

    <button onclick="getAllParaElems();">
      muestra todos los elementos p en el documento</button
    ><br />

    <button onclick="div1ParaElems();">
      muestra todos los elementos p en el div1</button
    ><br />

    <button onclick="div2ParaElems();">
      muestra todos los elementos p en el div2
    </button>
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}
