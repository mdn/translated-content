---
title: "Element : évènement beforexrselect"
short-title: beforexrselect
slug: Web/API/Element/beforexrselect_event
l10n:
  sourceCommit: f18c76e518179f2facc688464c5d382bf5a9b536
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

L'évènement **`beforexrselect`** est déclenché avant que les évènements de sélection WebXR ({{DOMxRef("XRSession/select_event", "select")}}, {{DOMxRef("XRSession/selectstart_event", "selectstart")}}, {{DOMxRef("XRSession/selectend_event", "selectend")}}) ne soient expédiés. Il peut être utilisé pour supprimer les évènements d'entrée du monde XR pendant que l'utilisateur·ice interagit avec une interface utilisateur de superposition DOM.

Cet évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling), est [annulable](/fr/docs/Web/API/Event/cancelable) et est [composé](/fr/docs/Web/API/Event/composed).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("beforexrselect", (event) => { })

onbeforexrselect = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("XRSessionEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("XRSessionEvent")}}

## Propriétés de l'évènement

- {{DOMxRef("XRSessionEvent.session", "session")}} {{ReadOnlyInline}}
  - : Le {{DOMxRef("XRSession")}} auquel l'évènement se réfère.

## Disponibilité de l'évènement

L'évènement **`beforexrselect`** est un évènement global et est disponible pour les interfaces suivantes&nbsp;:

- {{DOMxRef("Window")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("SVGElement")}}
- {{DOMxRef("MathMLElement")}}

## Exemples

Pour supprimer les évènements de sélection WebXR ({{DOMxRef("XRSession/select_event", "select")}}, {{DOMxRef("XRSession/selectstart_event", "selectstart")}}, {{DOMxRef("XRSession/selectend_event", "selectend")}}), une application peut écouter l'évènement `beforexrselect`. Cet évènement se propage, donc un appel à {{DOMxRef("Event/preventDefault", "preventDefault()")}} sur l'élément de superposition DOM empêche tout évènement de sélection WebXR au sein de ce conteneur, ce qui permet d'interagir avec l'élément DOM et d'éviter la duplication des évènements dans l'environnement XR.

```js
document
  .getElementById("xr-overlay")
  .addEventListener("beforexrselect", (ev) => ev.preventDefault());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("XRSession/select_event", "select")}}
- L'évènement {{DOMxRef("XRSession/selectstart_event", "selectstart")}}
- L'évènement {{DOMxRef("XRSession/selectend_event", "selectend")}}
- La pseudo-classe CSS {{CSSxRef(":xr-overlay")}}
