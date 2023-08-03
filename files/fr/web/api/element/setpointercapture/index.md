---
title: Element.setPointerCapture()
slug: Web/API/Element/setPointerCapture
---

{{APIRef("DOM")}}

La _Pointer capture_ (_capture de pointeur_) permet de re-cibler des événements pour un événement de pointeur particulier ({{domxref ("PointerEvent")}}) vers un élément particulier au lieu de la cible normale à l'emplacement d'un pointeur. Cela peut être utilisé pour garantir qu'un élément continue à recevoir des événements de pointeur même si le contact du périphérique de pointeur se déplace hors de l'élément (par exemple en faisant défiler).

**`setPointerCapture()`** est la méthode de l'interface {{domxref("Element")}} utilisée pour désigner un élément spécifique comme _cible de capture_ de{{domxref("PointerEvent", "évènements de pointeur")}} futurs. Les évènements subséquents du pointeur seront reciblés sur l'élément jusqu'à la libération de la capture (via {{domxref("Element.releasePointerCapture")}}).

> **Note :** Lorque la capture du pointeur est définie, les évènements {{domxref("PointerEvent.pointerover","pointerover")}}, {{domxref("PointerEvent.pointerout","pointerout")}} {{domxref("PointerEvent.pointerenter","pointerenter")}} et {{domxref("PointerEvent.pointerleave","pointerleave")}} sont uniquement générés lors du franchissement de la limite de l'élément dont la capture est définie, car les autres éléments ne peuvent plus être ciblés par le pointeur. Cela a pour effet de supprimer ces événements sur tous les autres éléments.

## Syntaxe

```js
.setPointerCapture(pointerId);
```

targetElement

### Arguments

- _pointerId_
  - : L'{{domxref("PointerEvent.pointerId","identifiant")}} pour un {{domxref("PointerEvent","évènement de pointeur")}}.

### Valeur de retour

Cette méthode renvoie `void` et lance une {{domxref("DOMException")}} nommée `InvalidPointerId` si `pointerId` ne correspond à aucun des pointeurs actifs.

## Exemple

```html
<html>
  <script>
    function downHandler(ev) {
      var el = document.getElementById("target");
      //L'élément cible  ('target') recevra/capturera d'autres évènements
      el.setPointerCapture(ev.pointerId);
    }
    function init() {
      var el = document.getElementById("target");
      el.onpointerdown = downHandler;
    }
  </script>
  <body onload="init();">
    <div id="target">Touch me ...</div>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{ domxref("Element.releasePointerCapture")}}
- {{ domxref("Pointer_events","Pointer Events") }}
