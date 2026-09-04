---
title: "Element : évènement webkitmouseforcedown"
short-title: webkitmouseforcedown
slug: Web/API/Element/webkitmouseforcedown_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Force Touch Events")}}{{Non-standard_Header}}

Après le déclenchement d'un évènement {{DOMxRef("Element.mousedown_event", "mousedown")}} sur l'élément, si une pression suffisante est exercée sur le bouton de la souris ou du pavé tactile pour être qualifiée de «&nbsp;clic forcé&nbsp;», Safari commence à envoyer des évènements **`webkitmouseforcedown`** à l'élément.

**`webkitmouseforcedown`** est un évènement propriétaire spécifique à WebKit. Il fait partie de la fonctionnalité [des évènements Force Touch](/fr/docs/Web/API/Force_Touch_events).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("webkitmouseforcedown", (event) => { })

onwebkitmouseforcedown = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Spécifications

_Ne fait partie d'aucune spécification._ Apple en propose [une description dans la Mac Developer Library <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
- L'évènement {{DOMxRef("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
- L'évènement {{DOMxRef("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
