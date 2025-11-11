---
title: HTMLStyleElement
slug: Web/API/HTMLStyleElement
---

{{APIRef("HTML DOM")}}

### Notas

Vea las siguientes páginas para información sobre alguno de los objetos utilizados para manipular propiedades CSS especificadas utilizando el DOM:

- [Objeto DOM element.style](/es/docs/Web/API/HTMLElement/style)
- [Objeto DOM stylesheet](/es/docs/Web/API/StyleSheet)
- [Objeto DOM cssRule](/es/docs/Web/API/CSSRule)
- [Lista de Propiedades DOM CSS](/es/docs/Web/CSS)

### Material que se moverá a otras páginas

El objeto básico `style`, presenta los estilos definidos para el DOM en su especificación de nivel 2. Los estilos se definen mediante `las interfaces StyleSheet` y `CSSStyleSheet`. Estas interfaces contienen miembros tales como `insertRule`, `selectorText`, y `parentStyleSheet` que permiten acceder y manipular las reglas de estilo individuales de que se compone una hoja de estilos CSS.

Para obtener los objetos `style` de un `document`, podemos usar la propiedad `document.styleSheets` y llegar a los distintos objetos por su índice (por ejemplo: `document.styleSheets[0]` es la primer stylesheet definida en el documento, etc.). Aunque hay varias formas y sintaxis para expresar una stylsheet para un documento, Netscape implementa exclusivamente, CSS, de manera que el objeto `style` obtenido por este método, es a la vez StyleSheet y CSSStyleSheet.

```
var ss = document.styleSheets[1];
ss.cssRules[0].style.backgroundColor="blue";
```

La lista de propiedades disponibles en el DOM se encuentra en la página: [DOM CSS Properties List](/es/docs/Web/CSS).

El elemento propiedad [style](/es/docs/Web/API/HTMLStyleElement) puede ser usado también para leer o establecer el estilo de un elemento. Sin embargo, esta propiedad solo devuelve atributos de estilo que han sido establecidos in-line (por ejemplo: \<td style="background-color: lightblue"> devuelve la cadena "background-color: lightblue" o directamente para ese elemento usando element.style.propertyName, aún si hay otros estilos definidos para ese elemento en un stylesheet).

De igual manera, cuando establecemos esa propiedad en un elemento, sobreescribimos y borramos cualquier estilo que hubiera sido fijado en alguna otra parte para la propiedad particular de ese elemento que estamos estableciendo. Por ejemplo, estableciendo la propiedad border sobreescribimos cualquier asignación que se establezca en la sección principal o en una hoja de estilo externa, sobre la propiedad border del elemento. Sin embargo, esto no afectará ninguna otra declaración de propiedad que se haga para el estilo del elemento, tales como padding o margin o font-size, por ejemplo.

Para cambiar el estilo de un elemento en particular, podemos adaptar el siguiente ejemplo para el elemento al que quieres cambiar su estilo/s.

```
<html>
<head>
<title>ejemplo simple de estilo</title>

<script type="text/javascript">

function alterStyle(elem) {
  elem.style.background = 'green';
}

function resetStyle(elemId) {
  elem = document.getElementById(elemId);
  elem.style.background = 'white';
}
</script>

<style type="text/css">
#p1 {
 border: solid blue 2px;
}
</style>
</head>

<body>

<!-- pasar la referencia al objeto del elemento, como parámetro 'this'. -->
<p id="p1" onclick="alterStyle(this)";>
 Haz clic aquí para cambiar el color de fondo. </p>

<!-- pasar el identificador 'pl' de otro elemento a modificar. -->
<button onclick="resetStyle('p1');">Volver al color de fondo original</button>

</body>
</html>
```

El método `getComputedStyle()` en el objeto `document.defaultView` devuelve todos los estilos que han sido asignados al elemento. Para una explicación del uso de este método, consulta el capítulo de ejemplos en: [Example 6: getComputedStyle](/en-US/Gecko_DOM_Reference/Examples#example_6:_getcomputedstyle) (en).

#### El objeto estilo (`style`) de DOM

El objeto `style` representa una sentencia de estilo individual. Al contrario de las reglas individuales disponibles en la colección: [`document.styleSheets`](/es/docs/Web/API/Document/styleSheets), se accede al objeto style a partir del `document` o desde el elemento para el cual se aplica el estilo. Representa pues, el estilo _in-line_ de ese elemento.

Más importante que los dos procedimientos que señalamos aquí, es el uso del objeto `style` para establecer las propiedades de un elemento:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
 <head>
  <title>Ejemplo de la Propiedad style</title>
  <link rel="StyleSheet" href="example.css" type="text/css">
  <script type="text/javascript">
    function stilo()
    {
      document.getElementById("d").style.color = "orange";
    }
  </script>
 </head>

 <body>
  <div id="d" class="thunder">Trueno</div>
  <button onclick="stilo()">ss</button>
 </body>
</html>
```

Los atributos **media** y **type** de style pueden o no estar presentes. Ten en cuenta que también puedes cambiar el estilo de un elemento haciendo una referencia a él y luego usando el método [`setAttribute`](/es/docs/Web/API/Element/setAttribute) para especificar la propiedad CSS y su valor.

```
var el = document.getElementById("some-element");
el.setAttribute("style", "background-color:darkblue;");
```

Ten presente, si embargo, que el método `setAttribute` eliminará cualquier otra propiedad que haya podido ser definida en el estilo del objeto. Si el elemento some-element arriba, tenia un atributo de estilo in-line como `style="font-size: 18px"`, ese valor habrá sido eliminado por el uso de `setAttribute`.

##### Propiedades

- [style.media](/es/docs/Web/API/StyleSheet/media)
  - : Especifica el destino intencionado de la información de estilo
- [style.type](/es/docs/Web/API/StyleSheet/type)
  - : Devuelve el tipo de estilo que esta siendo aplicado por esta declaración.
