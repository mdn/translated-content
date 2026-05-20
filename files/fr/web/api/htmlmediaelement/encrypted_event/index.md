---
title: "HTMLMediaElement : évènement encrypted"
short-title: encrypted
slug: Web/API/HTMLMediaElement/encrypted_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
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

## Propriétés de l'évènement

- {{DOMxRef("MediaEncryptedEvent.initDataType")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères sensible à la casse avec le _type_ du format des données d'initialisation trouvées.
- {{DOMxRef("MediaEncryptedEvent.initData")}} {{ReadOnlyInline}}
  - : Retourne un objet {{JSxRef("ArrayBuffer")}} contenant les données d'initialisation trouvées. S'il n'y a pas de données d'initialisation associées au format, elle retourne `null`.

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
