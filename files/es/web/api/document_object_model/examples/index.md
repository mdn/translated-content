---
title: Ejemplos
slug: Web/API/Document_Object_Model/Examples
---

En este capítulo se brindan ejemplos relativamente extensos que ilustran el uso del DOM para el desarrollo web y XML. Siempre que sea posible, usaremos las APIs, trucos y patrones comunes en JavaScript para la manipulación del objeto `document`.

### Ejemplo 1: Altos y anchos

El ejemplo siguiente muestra el uso de las propiedades de alto (`height`) y ancho (`width`) junto a imágenes de dimensiones variadas:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html lang="es">
  <head>
    <title>Ejemplo de height/width</title>
    <script type="text/javascript">
      function iniciar() {
        var arrImages = new Array(3);
        arrImages[0] = document.getElementById("imagen1");
        arrImages[1] = document.getElementById("imagen2");
        arrImages[2] = document.getElementById("imagen3");
        var objOutput = document.getElementById("salida");
        var strHtml = "<ul>";
        for (var i = 0; i < arrImages.length; i++)
          strHtml +=
            "<li>imagen" +
            (i + 1) +
            ": height=" +
            arrImages[i].height +
            ", width=" +
            arrImages[i].width +
            ", style.height=" +
            arrImages[i].style.height +
            ", style.width=" +
            arrImages[i].style.width +
            "<\/li>";
        strHtml += "<\/ul>";
        salida.innerHTML = strHtml;
      }
    </script>
  </head>
  <body onload="iniciar();">
    <p>
      La 1ª imagen: - alto (height): no - ancho (width): no - estilo (style): no
      <img
        id="imagen1"
        src="http://www.mozilla.org/images/mozilla-banner.gif" />
    </p>
    <p>
      La 2ª imagen: - height="50" - width="500" - style: no
      <img
        id="imagen2"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        height="50"
        width="500" />
    </p>
    <p>
      La 3ª imagen: - height y width: no - style="height: 50px; width: 500px;":
      sí
      <img
        id="imagen3"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        style="height: 50px; width: 500px;" />
    </p>

    <div id="salida"></div>
  </body>
</html>
```

`height` y `width` son además propiedades de los elementos `OBJECT` y `APPLET`.

### Ejemplo 2: Atributos de una imagen

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html lang="es">
  <head>
    <title>Modificación del borde de una imagen</title>
    <script type="text/javascript">
      function setBorderWidth(width) {
        document.getElementById("img1").style.borderWidth = width + "px";
      }
    </script>
  </head>

  <body>
    <p>
      <img
        id="img1"
        src="image1.gif"
        style="border: 5px solid green;"
        width="100"
        height="100"
        alt="test de borde" />
    </p>

    <form name="Formulario">
      <p>
        <input
          type="button"
          value="Definir un borde de 20px"
          onclick="setBorderWidth(20);" />
        <input
          type="button"
          value="Definir un borde de 5px"
          onclick="setBorderWidth(5);" />
      </p>
    </form>
  </body>
</html>
```

### Ejemplo 3: Manipulación de estilos

En este ejemplo sencillo, algunas propiedades de estilo básicas de un elemento párrafo HTML son accedidas utilizando el objeto estilo en el elemento y aquellas propiedades de estilo CSS del objeto, pueden ser entregadas y establecidas desde el DOM. En este caso, está manipulando los estilos directamente. En el siguiente ejemplo (ver ejemplo 4), puede utilizar las hojas de estilo y sus reglas para cambiar estilos para el documento entero.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
  <head>
    <title>Changing color and font-size example</title>
    <script type="text/javascript">
      function changeText() {
        var p = document.getElementById("pid");
        p.style.color = "blue";
        p.style.fontSize = "18pt";
      }
    </script>
  </head>
  <body>
    <p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">
      linker
    </p>
    <form>
      <p><input value="rec" type="button" onclick="changeText();" /></p>
    </form>
  </body>
</html>
```

### Ejemplo 4: Utilización de las hojas de estilo

La propiedad de las hojas de estilo en un objeto de documento muestra una lista de las hojas de estilo que acompañan a ése documento. Usando los objetos de la hoja de estilo, del estilo y de las reglas de CSS se puede acceder individualmente a esas hojas de estilo y sus reglas, como se demuestra en este ejemplo, el cual muestra todos los selectores de reglas de estilo en la consola.

```js
ss = document.styleSheets;
for (i = 0; i < ss.length; i++) {
  for (j = 0; j < ss[0].cssRules.length; j++) {
    dump(ss[i].cssRules[j].selectorText + "\n");
  }
}
```

Para un documento con una sola hoja de estilo en la cual son definidas las tres reglas siguientes:

```css
body {
  background-color: darkblue;
}
p {
  font-face: Arial;
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

El script sale así:

```
body
p
#lumpy
```

### Ejemplo 5: Propagación del evento

Este ejemplo muestra de una forma muy simple como los eventos se inician y son gestionados en el DOM. Cuando el cuerpo (_body_ ) de ese documento HTML se carga,_un evento listener es registrado con la columna superior de la TABLA. El evento listener maneja el evento ejecutando la función stopEvent, que cambia el valor en el final de la celda de la tabla._

Sin embargo, stopEvent también llama a un método del objeto evento, [event.stopPropagation](/es/DOM/event.stopPropagation), que mantiene el evento del burbujeo a continuación dentro del DOM. Note que la tabla misma tiene un manejador de evento [onclick](/es/DOM/element.onclick) que muestra un mensaje cuando la tabla es seleccionada. Pero el método stopEvent ha detenido la propagación, y así despues los datos en la tabla son actualizados, la fase de evento es efectivamente finalizada, y un cuadro de alerta es mostrado para confirmar esto.

```html
<html>
  <head>
    <title>Propagación del evento</title>

    <style type="text/css">
      #t-daddy {
        border: 1px solid red;
      }
      #c1 {
        background-color: pink;
      }
    </style>

    <script type="text/javascript">
      function stopEvent(ev) {
        c2 = document.getElementById("c2");
        c2.innerHTML = "hola";

        // this ought to keep t-daddy from getting the click.
        ev.stopPropagation();
        alert("La propagación del evento se ha parado.");
      }

      function load() {
        elem = document.getElementById("tbl1");
        elem.addEventListener("click", stopEvent, false);
      }
    </script>
  </head>

  <body onload="load();">
    <table id="t-daddy" onclick="alert('hi');">
      <tr id="tbl1">
        <td id="c1">uno</td>
      </tr>
      <tr>
        <td id="c2">dos</td>
      </tr>
    </table>
  </body>
</html>
```

### Ejemplo 6: Conseguir el estilo computado (getComputedStyle)

Este ejemplo demuestra como el método [window.getComputedStyle](/es/DOM/window.getComputedStyle) puedes utilizarse para obtener los estilos de un elemento que no son especificados en el atributo `style` o con JavaScript (por ejemplo, **`element.style.backgroundColor="rgb(173, 216, 230)"`**). Estos últimos tipos de estilos se pueden recuperar con el atributo [element.style](/es/DOM/element.style), las propiedades del cual están en la [lista de propiedades de CSS](/es/DOM/CSS) del DOM.

`getComputedStyle()` devuelve un objeto `ComputedCSSStyleDeclaration`, cuyas propiedades de estilo individuales pueden ser referenciadas con este método del objeto `getPropertyValue()`, el siguiente documento de ejemplo lo muestra.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html lang="en">
  <head>
    <title>Ejemplo de ''getComputedStyle''</title>

    <script type="text/javascript">
      function cStyles() {
        var RefDiv = document.getElementById("d1");

        var txtHeight = document.getElementById("t1");
        var h_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("height");
        txtHeight.value = h_style;

        var txtWidth = document.getElementById("t2");
        var w_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("width");
        txtWidth.value = w_style;

        var txtBackgroundColor = document.getElementById("t3");
        var b_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("background-color");
        txtBackgroundColor.value = b_style;
      }
    </script>

    <style type="text/css">
      #d1 {
        margin-left: 10px;
        background-color: rgb(173, 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </style>
  </head>

  <body>
    <div id="d1">&nbsp;</div>

    <form action="">
      <p>
        <button type="button" onclick="cStyles();">getComputedStyle</button>
        height<input id="t1" type="text" value="1" /> max-width<input
          id="t2"
          type="text"
          value="2" />
        bg-color<input id="t3" type="text" value="3" />
      </p>
    </form>
  </body>
</html>
```

### Ejemplo 7: Mostrar las propiedades del objeto de evento

Este ejemplo utiliza métodos del DOM para mostrar todas las propiedades del [evento](/es/DOM/event) de [window.onload](/es/DOM/window.onload) y sus valores en una tabla. Muestra además una cómoda técnica del uso de un bucle **_for...in_** para iterar sobre las propiedades de un objeto y conseguir sus valores.

Las propiedades de los objetos de evento difieren bastante entre los navegadores, la [especificación W3C de los eventos del DOM 2](http://www.w3.org/TR/DOM-Level-2-Events/events.html) enumera las propiedades estándares, sin embargo algunos navegadores han extendido estas diferencias.

El siguiente código colocado dentro de un nuevo archivo de texto y cargado en un surtido de navegadores, sorprenderá por las diferencias de los números y nombres de propiedades y/o al ponerle más elementos a la página y llamar esa función desde diferentes gestores de evento.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<title>Muestra las propiedades del evento</title>

<style type="text/css">
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 2px 10px 2px 10px;
  }
  .odd {
    background-color: #efdfef;
  }
  .even {
    background-color: #ffffff;
  }
</style>

<script type="text/javascript">
  function showEventProperties(e) {
    function addCell(row, text) {
      var cell = row.insertCell(-1);
      cell.appendChild(document.createTextNode(text));
    }

    document.getElementById("eventType").innerHTML = e.type;

    var e = e || window.event;
    var table = document.createElement("table");
    var thead = table.createTHead();
    var row = thead.insertRow(-1);
    var lableList = ["#", "Propriété", "Valeur"];
    var len = lableList.length;

    for (var i = 0; i < len; i++) {
      addCell(row, lableList[i]);
    }

    var tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (var p in e) {
      row = tbody.insertRow(-1);
      row.className = row.rowIndex % 2 ? "odd" : "even";
      addCell(row, row.rowIndex);
      addCell(row, p);
      addCell(row, e[p]);
    }

    document.body.appendChild(table);
  }
  window.onload = function (event) {
    showEventProperties(event);
  };
</script>

<h1>Propiedades del objeto evento del DOM<span id="eventType"></span></h1>
```

### Ejemplo 8: Utilización del interfaz de tabla del DOM

La interfaz HTMLTableElement del DOM provee algunos métodos de conveniencia para crear y manipular tablas. Dos métodos usados frecuentemente son [`table.insertRow`](/es/DOM/table.insertRow) y [`row.insertCell`](/es/DOM/table/row.insertCell).

Para agregar una columna y algunas celdas a una tabla existente:

```html
<table id="table0">
  <tr>
    <td>Row 0 Cell 0</td>
    <td>Row 0 Cell 1</td>
  </tr>
</table>

<script type="text/javascript">
  var table = document.getElementById("table0");
  var row = table.insertRow(-1);
  var cell, text;
  for (var i = 0; i < 2; i++) {
    cell = row.insertCell(-1);
    text = "Row " + row.rowIndex + " Cell " + i;
    cell.appendChild(document.createTextNode(text));
  }
</script>
```

#### Notas

- Una propiedad [`innerHTML`](/es/DOM/element.innerHTML) de la tabla nunca debería ser utilizada para modificar una tabla, aunque puede utilizarla para escribir una tabla entera o el contenido de una celda.
- Si los métodos Core del DOM[`document.createElement`](/es/DOM/document.createElement) y [`element.appendChild`](/es/DOM/element.appendChild) son utilizados para crear columnas y celdas, IE requiere que sean agregadas a un elemento tbody, mientras que otros navegadores permitirán agregar a un elemento de la tabla (las columnas serán agregadas al último elemento tbody).
- Hay un número de otros métodos de conveniencia pertenecientes a la [interfaz de tabla](/es/DOM/table#M.C3.A9todos) que pueden ser utilizados para crear y modificar tablas.
