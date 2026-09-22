---
title: "HTMLMediaElement : évènement encrypted"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Encrypted Media Extensions")}}

L'évènement **`encrypted`** est déclenché lorsque des données d'initialisation sont trouvées dans le média, indiquant qu'il est chiffré.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("encrypted", (event) => { })

onencrypted = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MediaEncryptedEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MediaEncryptedEvent")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAudioElement")}}
- L'interface {{DOMxRef("HTMLVideoElement")}}
- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
- L'interface {{DOMxRef("MediaEncryptedEvent")}}
