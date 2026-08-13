---
title: "Element : évènement touchcancel"
short-title: touchcancel
slug: Web/API/Element/touchcancel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Touch Events")}}

L'évènement `touchcancel` est déclenché lorsqu'un ou plusieurs points de contact ont été interrompus, selon les spécificités de l'implémentation.

Quelques exemples de situations qui déclenchent un évènement `touchcancel`&nbsp;:

- Un évènement matériel se produit et annule les activités tactiles. Cela peut inclure, par exemple, l'utilisateur·ice changeant d'application à l'aide d'une interface de commutation d'applications ou le bouton «&nbsp;accueil&nbsp;» sur un appareil mobile.
- L'orientation de l'écran de l'appareil est modifiée alors que le contact tactile est actif.
- Le navigateur décide que l'utilisateur·ice a commencé une interaction tactile par accident. Cela peut se produire si, par exemple, le matériel prend en charge le rejet de la paume pour empêcher qu'une main reposant sur l'écran tout en utilisant un stylet ne déclenche accidentellement des évènements.
- La propriété CSS {{CSSxRef("touch-action")}} empêche la poursuite de l'interaction tactile.
- Lorsque l'utilisateur·ice interagit avec trop de doigts simultanément, le navigateur peut déclencher cet évènement pour tous les points de contact existants (même si l'utilisateur·ice touche encore l'écran).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("touchcancel", (event) => { })

ontouchcancel = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("TouchEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("TouchEvent")}}

## Exemples

Des exemples de code pour ces évènements sont disponibles sur la page dédiée&nbsp;: [Évènements tactiles](/fr/docs/Web/API/Touch_events).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
