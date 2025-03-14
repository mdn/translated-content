---
title: Element.attributes
slug: Web/API/Element/attributes
---

{{ APIRef }}

La propiedad `Element.attributes` retorna una colección "viva" cuyos nodos son todos los atributos registrados en el nodo especificado. Es un {{domxref("NamedNodeMap")}}, no un `Array`, así que no tiene los métodos de {{jsxref("Array")}} y los índices de nodo {{domxref("Attr")}} pueden diferir en cada navegador. Más concretamente `attributes` es un conjunto de pares de cadenas nombre/valor que representan la información relativa a cada atributo.

## Sintaxis

```js
var attr = element.attributes;
```

## Ejemplo

### Ejemplos básicos

```js
// Obtiene el primer elemento <p> en el documento
var para = document.getElementsByTagName("p")[0];
var atts = para.attributes;
```

### Enumerando atributos de elemtentos

La indexación numérica es útil para recorrer de todos los atributos de un elemento.
El siguiente ejemplo corre a través de los atributors del elemento con id "p1" en el documento, e imprime el valor de cada atributo.

```html
<!doctype html>

<html>
  <head>
    <title>Attributes example</title>
    <script type="text/javascript">
      function listAttributes() {
        var paragraph = document.getElementById("paragraph");
        var result = document.getElementById("result");

        // Primero, verifiquenmos que el párrafo tiene algún atributo
        if (paragraph.hasAttributes()) {
          var attrs = paragraph.attributes;
          var output = "";
          for (var i = attrs.length - 1; i >= 0; i--) {
            output += attrs[i].name + "->" + attrs[i].value;
          }
          result.value = output;
        } else {
          result.value = "No hay atributos que mostrar";
        }
      }
    </script>
  </head>

  <body>
    <p id="paragraph" style="color: green;">Párrafo de ejemplo</p>
    <form action="">
      <p>
        <input
          type="button"
          value="Muestra el nombre cada atributo y su valor"
          onclick="listAttributes();" />
        <input id="result" type="text" value="" />
      </p>
    </form>
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("NamedNodeMap")}}, la interfaz del objeto retornado.
- Consideracións sobre compatibilidad cruzada entre navegadores: en [quirksmode](https://www.quirksmode.org/dom/w3c_core.html#attributes)
