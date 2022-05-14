---
title: event.layerX
slug: Web/API/MouseEvent/layerX
tags:
  - API
  - DOM
  - Propriété
  - Reference
  - UIEvent
  - lecture seule
translation_of: Web/API/UIEvent/layerX
original_slug: Web/API/UIEvent/layerX
---
{{APIRef("DOM Events")}} {{Non-standard_header}}

La propriété en lecture seule **`UIEvent.layerX`** retourne la coordonnée horizontale de l'évènement relativement à la couche en cours.

Cette propriété prend en compte le défilement de la page, et retourne une valeur relative à l'ensemble du document, à moins que l'évènement ne se soit produit à l'intérieur d'un élément positionné, auquel cas la valeur retournée est relative au coin supérieur gauche de l'élément positionné.

## **Syntaxe**

    var posx = event.layerX

- *`posx`* est une valeur entière en pixels pour la coordonnée x du pointeur de la souris, lorsque l'évènement souris est déclenché.

## **Exemples**

```html
<html>
<head>
<title>Exemple pageX\pageY & layerX\layerY</title>

<script type="text/javascript">

function montrerCoords(evt){
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

<body onmousedown="montrerCoords(event)">

<p>Pour afficher les coordonnées de la souris, veuillez cliquer quelque part sur la page.</p>

<div id="d1">
<span>Cette div n'est pas positionnée : cliquer dedans renverra des valeurs layerX/layerY identiques à celles de pageX/PageY.</span>
</div>

<div id="d2">

<span>Cette div est positionnée : cliquer dedans renverra des valeurs layerX/layerY
relatives à son coin supérieur. Notez que les valeurs de pageX\pageY sont toujours relatives au document, ce qui inclue le défilement dans la page.</span>

<span>Un peu de défilement ! C'est un div positionné : le clic renverra des valeurs layerX/layerY relative à son coin supérieur gauche. Notez que les valeurs de pageX\pageY sont toujours relatives au document, ce qui inclue le défilement dans la page.</span>

</div>

<div id="d3">
<form name="form_coords" id="form1">
 Id de l'élément parent : <input type="text" name="parentId" size="7" /><br />
 pageX:<input type="text" name="pageXCoords" size="7" />
 pageY:<input type="text" name="pageYCoords" size="7" /><br />
 layerX:<input type="text" name="layerXCoords" size="7" />
 layerY:<input type="text" name="layerYCoords" size="7" />
</form>
</div>

</body>
</html>
```

## Spécifications

_Cette propriété ne fait partie d'aucune spécification._

## Compatibilité des navigateurs

{{Compat("api.UIEvent.layerX")}}
