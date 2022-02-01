---
title: Element.releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
tags:
  - API
  - DOM
  - Element
  - Méthodes
  - Pointeur
translation_of: Web/API/Element/releasePointerCapture
---
{{APIRef("DOM")}}

Relâche (arrête) la capture de pointeur précédemment définie pour un _pointer_ ({{domxref("PointerEvent")}}) spécifique.

Voir la méthode **{{domxref("Element.setPointerCapture","Element.setPointerCapture()")}}** pour une description de _pointer capture_ et la façon de le définir pour un élément particulier.

## Syntaxe

    targetElement.releasePointerCapture(pointerId);

### Arguments

- _pointerId_
  - : L'{{domxref("PointerEvent.pointerId","identifiant")}} pour un {{domxref("PointerEvent","pointer event")}}.

### Valeur retournée

Si `pointerId` ne correspond à aucun pointeur actif, cette méthode renvoie `void` (_vide_) et déclenche une {{domxref("DOMException")}} avec le nom `InvalidPointerId`.

## Exemple

```html
<html>
<script>
function downHandler(ev) {
 var el=document.getElementById("target");
 // L'élément "target" va recevoir/capturer d'autres évènements
 el.setPointerCapture(ev.pointerId);
}
function cancelHandler(ev) {
 var el=document.getElementById("target");
 // Relâche la capture du pointeur
 el.releasePointerCapture(ev.pointerId);
}
function init() {
 var el=document.getElementById("target");
 // Enregistre les gestionnaires du pointeur
 el.onpointerdown = downHandler;
 el.onpointercancel = cancelHandler;
}
</script>
<body onload="init();">
<div id="target"> Touch me ... </div>
</body>
</html>
```

## Spécifications

| Spécification                                                                                                                                            | Statut                                   | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('Pointer Events 2','#widl-Element-releasePointerCapture-void-long-pointerId', 'releasePointerCapture')}} | {{Spec2('Pointer Events 2')}} | Version non stable.  |
| {{SpecName('Pointer Events', '#widl-Element-releasePointerCapture-void-long-pointerId', 'releasePointerCapture')}} | {{Spec2('Pointer Events')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Element.releasePointerCapture")}}

## Voir aussi

- {{ domxref("Element.setPointerCapture","Element.setPointerCapture()") }}
- {{ domxref("Pointer_events","Pointer Events") }}
