---
title: input
slug: Web/API/HTMLElement/input_event
tags:
  - DOM
  - Element
  - Entrée
  - HTML5
translation_of: Web/API/HTMLElement/input_event
---
L'évènement DOM `input` _(entrée)_ est déclenché de façon synchrone quand la valeur d'un élément {{HTMLElement("input")}} _(entrée)_, {{HTMLElement("select")}} _(sélection)_ ou {{ HTMLElement("textarea") }} _(zone de texte)_ est modifiée. (Pour les éléments `input` avec `type=checkbox` _(case à cocher)_ ou `type=radio` , l'évènement `input`  n'est pas lancé quand l'utilisateur clique sur le contrôle, parce que la valeur attribuée ne peut être changée).

De plus, l'évènement  `input` se déclenche sur les éditeurs [`contenteditable`](/fr/docs/Web/API/HTMLElement/contentEditable) quand son contenu est modifié. Dans ce cas, l'évènement cible est l'élément "editing host" _(hôte de l'édition)_ . S'il y a deux éléments ou plus qui ont `contenteditable` à true _(vrai)_, "editing host" est l'élément ancêtre le plus proche dont le parent n'est pas modifiable . De même, il est déclenché sur l'élément racine des éditeurs [`designMode`](/fr/docs/Web/API/Document/designMode) .

## Information générale

- Spécification
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#event-input-input), [DOM Level 3 Events](https://dvcs.w3.org/hg/dom3events/raw-file/tip/html/DOM3-Events.html#event-type-input)
- Interface
  - : {{domxref("Event")}}, {{domxref("InputEvent")}}
- Propagation
  - : Oui
- Annulable
  - : Non
- Cible
  - : Élement
- Action par défaut
  - : La valeur ou le contenu est modifié



## Propriétés

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Spécifications

| Spécification                                                                                        | Statut                           |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('HTML WHATWG', "forms.html#event-input-input", "input event")}} | {{Spec2('HTML WHATWG')}} |
| {{SpecName('DOM3 Events', "#event-type-input", "input event")}}                 | {{Spec2('DOM3 Events')}} |

## Compatibilité des navigateurs

{{Compat("api.HTMLElement.input_event")}}

## Voir aussi

- {{event("keydown")}}
- {{event("keyup")}}
- {{event("keypress")}}
- {{event("input")}}
