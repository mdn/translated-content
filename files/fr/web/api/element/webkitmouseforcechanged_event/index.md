---
title: "Element : évènement webkitmouseforcechanged"
short-title: webkitmouseforcechanged
slug: Web/API/Element/webkitmouseforcechanged_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Force Touch Events")}}{{Non-standard_Header}}

L'évènement non standard **`webkitmouseforcechanged`** est déclenché par Safari chaque fois que la pression change sur le pavé tactile/l'écran tactile.

**`webkitmouseforcechanged`** est un évènement propriétaire spécifique à WebKit introduit par Apple pour prendre en charge leur fonctionnalité [des évènements Force Touch](/fr/docs/Web/API/Force_Touch_events).

Ce évènement se déclenche d'abord après l'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}} et cesse de se déclencher avant l'évènement {{DOMxRef("Element/mouseup_event", "mouseup")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("webkitmouseforcechanged", (event) => { })

onwebkitmouseforcechanged = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Spécifications

_Ne fait partie d'aucune spécification._ Apple en propose [une description dans la Mac Developer Library <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/SafariJSProgTopics/RespondingtoForceTouchEventsfromJavaScript.html).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/webkitmouseforcewillbegin_event", "webkitmouseforcewillbegin")}}
- L'évènement {{DOMxRef("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- L'évènement {{DOMxRef("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
