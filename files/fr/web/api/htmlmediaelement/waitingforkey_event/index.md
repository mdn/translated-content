---
title: "HTMLMediaElement : évènement waitingforkey"
short-title: waitingforkey
slug: Web/API/HTMLMediaElement/waitingforkey_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Encrypted Media Extensions")}}

L'évènement `waitingforkey` est déclenché sur un élément média lorsqu'il est incapable de lire parce qu'il a besoin d'une clé pour décoder les données suivantes, et la lecture est arrêtée.

Si l'image vidéo et/ou les données audio pour la position de lecture actuelle ont été décodées, {{DOMxRef("HTMLMediaElement.readyState", "readyState")}} est défini sur [`HAVE_CURRENT_DATA`](/fr/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_current_data).
Sinon, y compris si les données étaient précédemment disponibles mais ne le sont plus, le `readyState` est défini sur [`HAVE_METADATA`](/fr/docs/Web/API/HTMLMediaElement/readyState#htmlmediaelement.have_metadata).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("waitingforkey", (event) => { })

onwaitingforkey = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAudioElement")}}
- L'interface {{DOMxRef("HTMLVideoElement")}}
- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
