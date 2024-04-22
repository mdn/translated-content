---
title: GlobalEventHandlers.ongotpointercapture
slug: Web/API/Element/gotpointercapture_event
---

{{ApiRef("HTML DOM")}}La propriété **`ongotpointercapture`** du mixin {{domxref("GlobalEventHandlers")}} est un gestionnaire d'évènement qui traite les évènements de type `gotpointercapture`.

## Syntaxe

```js
target.ongotpointercapture = functionRef;
```

### Valeur

`functionRef` est un nom de fonction ou une [expression fonction](/fr/docs/Web/JavaScript/Reference/Operators/function). La fonction accepte un objet {{domxref("FocusEvent")}} en tant qu'unique argument.

## Example

```js
function overHandler(event) {
  // Obtient le gestionnaire de type "gotpointercapture" de la cible de l'événement
  let gotCaptureHandler = event.target.ongotpointercapture;
}

function init() {
  let el = document.getElementById("target");
  el.ongotpointercapture = overHandler;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement [`Document: gotpointercapture`](/fr/docs/Web/API/Document/gotpointercapture_event)
- L'évènement [`Element: gotpointercapture`](/fr/docs/Web/API/Element/gotpointercapture_event)
- {{domxref("Element.setPointerCapture()")}}
