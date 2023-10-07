---
title: event.pageX
slug: Web/API/MouseEvent/pageX
---

{{ ApiRef() }}

### Sumario

Retorna la coordena horizontal del evento, relativo al documento completo.

### Sintaxis

```
pageX =event.pageX;
```

`pageX` es un valor entero expresado en pixels para la corrdenada X del puntero del ratón, relativo al documento entero, cuando se produjo el evento. Esta propiedad toma en cuenta la barra de desplazamiento horizontal de la página.

### Ejemplo

```
<html>
<head>
<title>pageX\pageY & layerX\layerY example</title>

<script type="text/javascript">

function showCoords(evt){
  var form = document.forms.form_coords;
  var parent_id = evt.target.parentNode.id;
  form.parentId.value = parent_id;
  form.pageXCoords.value = evt.pageX;
  form.pageYCoords.value = evt.pageY;
  form.layerXCoords.value = evt.layerX;
  form.layerYCoords.value = evt.layerY;
}

</script>

<style type="text/css">

 #d1 {
  border: solid blue 1px;
  padding: 20px;
 }

 #d2 {
  position: absolute;
  top: 180px;
  left: 80%;
  right:auto;
  width: 40%;
  border: solid blue 1px;
  padding: 20px;
 }

 #d3 {
  position: absolute;
  top: 240px;
  left: 20%;
  width: 50%;
  border: solid blue 1px;
  padding: 10px;
 }

</style>
</head>

<body onmousedown="showCoords(event)">

<p>To display the mouse coordinates please click anywhere on the page.</p>

<div id="d1">
<span>This is an un-positioned div so clicking it will return
layerX/layerY values almost the same as pageX/PageY values.</span>
</div>

<div id="d2">
<span>This is a positioned div so clicking it will return layerX/layerY
values that are relative to the top-left corner of this positioned
element. Note the pageX\pageY properties still return the
absolute position in the document, including page scrolling.</span>

<span>Make the page scroll more! This is a positioned div so clicking it
will return layerX/layerY values that are relative to the top-left
corner of this positioned element. Note the pageX\pageY properties still
return the absolute position in the document, including page
scrolling.</span>
</div>

<div id="d3">
<form name="form_coords">
 Parent Element id: <input type="text" name="parentId" size="7" /><br />
 pageX:<input type="text" name="pageXCoords" size="7" />
 pageY:<input type="text" name="pageYCoords" size="7" /><br />
 layerX:<input type="text" name="layerXCoords" size="7" />
 layerY:<input type="text" name="layerYCoords" size="7" />
</form>
</div>

</body>
</html>
```

### Specificación

No es parte del estándar público.
