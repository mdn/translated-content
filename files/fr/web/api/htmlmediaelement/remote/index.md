---
title: "HTMLMediaElement : propriété remote"
short-title: remote
slug: Web/API/HTMLMediaElement/remote
l10n:
  sourceCommit: 0b6bfb8a3a03de5956dd1cec4b47e5e37078149d
---

{{APIRef("Remote Playback API")}}

La propriété en lecture seule **`remote`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne l'objet {{DOMxRef("RemotePlayback")}} associé à l'élément média. L'objet `RemotePlayback` permet de contrôler les appareils distants lisant le média.

## Valeur

Un objet {{DOMxRef("RemotePlayback")}} associé à l'élément média.

## Exemples

```js
const el = document.createElement("audio");
const remotePlayback = el.remote;

remotePlayback.watchAvailability((disponibilite) => {
  // Faites quelque chose lorsque la disponibilité change
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
