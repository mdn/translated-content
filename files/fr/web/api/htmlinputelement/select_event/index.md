---
title: select
slug: Web/API/HTMLInputElement/select_event
---

L'évènement `select` est déclenché quand du texte est sélectionné. L'évènement peut ne pas être disponible pour tous les éléments dans tous les langages. Par exemple, en [HTML5](http://www.w3.org/TR/DOM-Level-3-Events/#references-HTML5), les évènements select ne peuvent être envoyés que sur des éléments `input` de formulaire et `textarea`.

## Info générale

- Spécification
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-select)
- Interface
  - : UIEvent si généré depuis une interface utilisateur, Event sinon.
- Remonte
  - : Oui
- Annulable
  - : Non
- Cible
  - : Élément
- Action par Défault
  - : Aucune

## Propriétés

| Property                        | Type                                          | Description                                                                                |
| ------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | [`EventTarget`](/fr/docs/Web/API/EventTarget) | The event target (the topmost target in the DOM tree).                                     |
| `type` {{readonlyInline}}       | [`DOMString`](/fr/docs/Web/API/DOMString)     | The type of event.                                                                         |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/fr/docs/Web/API/Boolean)         | Whether the event normally bubbles or not.                                                 |
| `cancelable` {{readonlyInline}} | [`Boolean`](/fr/docs/Web/API/Boolean)         | Whether the event is cancellable or not.                                                   |
| `view` {{readonlyInline}}       | [`WindowProxy`](/fr/docs/Web/API/WindowProxy) | [`document.defaultView`](/fr/docs/Web/API/Document/defaultView) (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                              | 0.                                                                                         |

## Exemple

```html
<input id="test" type="text" value="Sélectionnez-moi !" />
<script>
  var elem = document.getElementById("test");
  elem.addEventListener(
    "select",
    function () {
      alert("La sélection a changé !");
    },
    false,
  );
</script>
```
