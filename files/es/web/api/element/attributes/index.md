---
title: Element.attributes
slug: Web/API/Element/attributes
translation_of: Web/API/Element/attributes
---
{{ APIRef("DOM") }}

La propiedad **`Element.attributes`** retorna una colección "viva" cuyos nodos son todos los atributos registrados en el nodo especificado. Es un {{domxref("NamedNodeMap")}}, no un `Array`, así que no tiene los métodos de {{jsxref("Array")}} y los índices de nodo {{domxref("Attr")}} pueden diferir en cada navegador. Más concretamente `attributes` es un conjunto de pares de cadenas nombre/valor que representan la información relativa a cada atributo.

## Sintaxis

    var attr = element.attributes;

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
<!DOCTYPE html>

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
       for(var i = attrs.length - 1; i >= 0; i--) {
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
    <input type="button" value="Muestra el nombre cada atributo y su valor"
      onclick="listAttributes();">
    <input id="result" type="text" value="">
  </p>
 </form>
</body>
</html>
```

## Especificaciones

| Especificación                                                                                       | Estado                           | Observaciones                                                                                             |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-attributes', 'Element.attributes')}} | {{Spec2('DOM WHATWG')}} | From {{SpecName('DOM3 Core')}}, moved from {{domxref("Node")}} a {{domxref("Element")}} |
| {{SpecName('DOM3 Core', 'core.html#ID-84CF096', 'Element.attributes')}}     | {{Spec2('DOM3 Core')}}     | Sin cambios desde {{SpecName('DOM2 Core')}}                                                        |
| {{SpecName('DOM2 Core', 'core.html#ID-84CF096', 'Element.attributes')}}     | {{Spec2('DOM2 Core')}}     | Sin cambios desde {{SpecName('DOM1')}}                                                            |
| {{SpecName('DOM1', 'level-one-core.html#ID-84CF096', 'Element.attributes')}} | {{Spec2('DOM1')}}         | Definición inicial.                                                                                       |

## Compatibilidad con navegadores

{{Compat("api.Element.attributes")}}

## Ver también

- {{domxref("NamedNodeMap")}}, la interfaz del objeto retornado.
- Consideracións sobre compatibilidad cruzada entre navegadores: en [quirksmode](http://www.quirksmode.org/dom/w3c_core.html#attributes)
