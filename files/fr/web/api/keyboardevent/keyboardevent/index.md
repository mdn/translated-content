---
title: KeyboardEvent()
slug: Web/API/KeyboardEvent/KeyboardEvent
---

{{APIRef("DOM Events")}}

Le constructeur **`KeyboardEvent()`** crée un nouveau {{domxref("KeyboardEvent")}}.

## Syntaxe

```js
event = new KeyboardEvent(typeArg, KeyboardEventInit);
```

### Valeurs

- typeArg
  - : Une représentation du nom de l'évènement sous forme de {{domxref("DOMString")}}.
- KeyboardEventInit{{optional_inline}}

  - : Un dictionnaire `KeyboardEventInit` ayant les champs suivants :

    - `"key"`, optionnel et par défaut `""`, de type {{domxref("DOMString")}}, qui définit la valeur de {{domxref("KeyboardEvent.key")}}.
    - `"code"`, optionnel et par défaut `""`, de type {{domxref("DOMString")}}, qui définit la valeur de {{domxref("KeyboardEvent.code")}}.
    - `"location"`, optionnel et par défaut `0`, de type `unsigned long`, qui définit la valeur de {{domxref("KeyboardEvent.location")}}.
    - `"ctrlKey"`, optionnel et par défaut `false`, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.ctrlKey")}}.
    - `"shiftKey"`, optionnel et par défaut `false`, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.shiftKey")}}.
    - `"altKey"`, optionnel et par défaut `false`, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.altKey")}}.
    - `"metaKey"`, optionnel et par défaut `false`, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.metaKey")}}.
    - `"repeat"`, optionnel et par défaut `false`, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.repeat")}}.
    - `"isComposing"`, optionnel et par défaut `false`, de type {{jsxref("Boolean")}}, qui définit la valeur de {{domxref("KeyboardEvent.isComposing")}}.
    - `"charCode"`, optionnel et par défaut `0`, de type `unsigned long`, qui définit la valeur du déprécié {{domxref("KeyboardEvent.charCode")}}.
    - `"keyCode"`, optionnel et par défaut `0`, de type `unsigned long`, qui définit la valeur du déprécié {{domxref("KeyboardEvent.keyCode")}}.
    - `"which"`, optionnel et par défaut `0`, de type `unsigned long`, qui définit la valeur du déprécié {{domxref("KeyboardEvent.which")}}.

> **Note :** Le dictionnaire `KeyboardEventInit` accepte aussi les champs des dictionnaires {{domxref("UIEvent.UIEvent", "UIEventInit")}} et {{domxref("Event.Event", "EventInit")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("KeyboardEvent")}}, l'interface des objets qu'il construit.
