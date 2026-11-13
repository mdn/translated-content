---
title: "Element : évènement webkitmouseforcewillbegin"
short-title: webkitmouseforcewillbegin
slug: Web/API/Element/webkitmouseforcewillbegin_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Force Touch Events")}}{{Non-standard_Header}}

Safari pour macOS déclenche l'évènement non standard **`webkitmouseforcewillbegin`** sur un élément {{DOMxRef("Element")}} avant de déclencher l'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}} initial.

Cela permet d'indiquer au système de ne déclencher aucune action Force Touch par défaut si le clic devient un clic associé à [des évènements Force Touch](/fr/docs/Web/API/Force_Touch_events).

Pour indiquer à macOS de ne déclencher aucune action Force Touch par défaut si l'utilisateur·ice exerce une pression suffisante pour activer un évènement Force Touch, appelez {{DOMxRef("Event.preventDefault", "preventDefault()")}} sur l'objet évènement `webkitmouseforcewillbegin`.

**`webkitmouseforcewillbegin`** est un évènement propriétaire spécifique à WebKit. Il fait partie de la fonctionnalité [des évènements Force Touch](/fr/docs/Web/API/Force_Touch_events).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("webkitmouseforcewillbegin", (event) => { })

onwebkitmouseforcewillbegin = (event) => { }
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
- L'évènement {{DOMxRef("Element/webkitmouseforcedown_event", "webkitmouseforcedown")}}
- L'évènement {{DOMxRef("Element/webkitmouseforceup_event", "webkitmouseforceup")}}
- L'évènement {{DOMxRef("Element/webkitmouseforcechanged_event", "webkitmouseforcechanged")}}
