---
title: Element.setCapture()
slug: Web/API/Element/setCapture
---

{{ APIRef("DOM") }}

Appelez cette méthode pendant la gestion d'un évènement de la souris pour recibler tous les évènements de la souris sur cet élément jusqu'à ce que le bouton de la souris soit relâché ou que soit appelée {{ domxref("document.releaseCapture()") }}.

## Syntaxe

```js
element.setCapture(retargetToElement);
```

- `retargetToElement`
  - : Si la valeur est `true` (_vrai_), tous les évènements sont ciblés directement vers cet élément ; si elle est `false` (_faux_), les évènements peuvent aussi être déclenchés sur les descendants de cet élément.

## Exemple

Dans cet exemple, les coordonnées en cours de la souris sont dessinées pendant que vous passez la souris après un clic et un appui sur un élément.

```html
<html>
  <head>
    <title>Mouse Capture Example</title>
    <style type="text/css">
      #myButton {
        border: solid black 1px;
        color: black;
        padding: 2px;
        box-shadow: black 2px 2px;
      }
    </style>

    <script type="text/javascript">
      function init() {
        var btn = document.getElementById("myButton");
        btn.addEventListener("mousedown", mouseDown, false);
        btn.addEventListener("mouseup", mouseUp, false);
      }

      function mouseDown(e) {
        //e.target.setCapture(); // cette méthode doit être définie
        e.target.addEventListener("mousemove", mouseMoved, false);
      }

      function mouseUp(e) {
        e.target.removeEventListener("mousemove", mouseMoved, false);
      }

      function mouseMoved(e) {
        var output = document.getElementById("output");
        output.innerHTML = "Position: " + e.clientX + ", " + e.clientY;
      }
    </script>
  </head>
  <body onload="init()">
    <p>
      This is an example of how to use mouse capture on elements in Gecko 2.0.
    </p>
    <p><a id="myButton" href="#">Test Me</a></p>
    <div id="output">No events yet</div>
  </body>
</html>
```

[Voir l'exemple sur une page](/samples/domref/mousecapture.html)

## Notes

L'élément ne peut pas être entièrement déplacé vers le haut ou vers le bas, selon la disposition des autres éléments.

## Spécification

Basé sur l'implémentation Internet Explorer.

## Voir aussi

- {{ domxref("document.releaseCapture()") }}
