---
title: "HTMLMediaElement : propriété disableRemotePlayback"
short-title: disableRemotePlayback
slug: Web/API/HTMLMediaElement/disableRemotePlayback
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Remote Playback API")}}

La propriété **`disableRemotePlayback`** de l'interface {{DOMxRef("HTMLMediaElement")}} détermine si l'élément média est autorisé à avoir une interface de lecture à distance.

## Valeur

Une valeur booléenne indiquant si l'élément média peut avoir une interface de lecture à distance. (`false` signifie «&nbsp;n'est pas désactivé&nbsp;», ce qui signifie «&nbsp;activé&nbsp;».)

## Exemples

```js
const obj = document.createElement("audio");
obj.disableRemotePlayback = true;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'attribut `disableremoteplayback` de l'élément `<audio>`](/fr/docs/Web/HTML/Reference/Elements/audio#disableremoteplayback)
- [L'attribut `disableremoteplayback` de l'élément `<video>`](/fr/docs/Web/HTML/Reference/Elements/video#disableremoteplayback)
