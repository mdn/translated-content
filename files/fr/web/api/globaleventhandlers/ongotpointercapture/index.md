---
title: GlobalEventHandlers.ongotpointercapture
slug: Web/API/GlobalEventHandlers/ongotpointercapture
translation_of: Web/API/GlobalEventHandlers/ongotpointercapture
---
{{ApiRef("HTML DOM")}}La propriété **`ongotpointercapture`** du mixin {{domxref("GlobalEventHandlers")}} est un {{event("Event_handlers", "event handler")}} qui traite les évènements de type {{event("gotpointercapture")}}.

## Syntaxe

    target.ongotpointercapture = functionRef;

### Valeur

`functionRef` est un nom de fonction ou une [expression fonction](/en-US/docs/Web/JavaScript/Reference/Operators/function). La fonction accepte un objet {{domxref("FocusEvent")}} en tant qu'unique argument.

## Example

```js
function overHandler(event) {
  // Obtient le gestionnaire de type "gotpointercapture" de la cible de l'événement
  let gotCaptureHandler = event.target.ongotpointercapture;
}

function init() {
  let el = document.getElementById('target');
  el.ongotpointercapture = overHandler;
}
```

## Spécifications

| Spécification                                                                                                        | Status                                   | Commentaire |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------- |
| {{SpecName('Pointer Events 2', '#the-gotpointercapture-event', 'onlostpointercapture')}} | {{Spec2('Pointer Events 2')}} |             |

## Compatibilité des navigateurs

{{Compat("api.GlobalEventHandlers.ongotpointercapture")}}

## Voir aussi

- L'évènement [`Document: gotpointercapture`](/en-US/docs/Web/API/Document/gotpointercapture_event)
- L'évènement [`Element: gotpointercapture`](/en-US/docs/Web/API/Element/gotpointercapture_event)
- {{domxref("Element.setPointerCapture()")}}
