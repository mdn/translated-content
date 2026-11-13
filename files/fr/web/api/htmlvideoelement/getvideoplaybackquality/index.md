---
title: "HTMLVideoElement : méthode getVideoPlaybackQuality()"
short-title: getVideoPlaybackQuality()
slug: Web/API/HTMLVideoElement/getVideoPlaybackQuality
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

La méthode **`getVideoPlaybackQuality()`** de l'interface {{DOMxRef("HTMLVideoElement")}} crée et retourne un objet {{DOMxRef("VideoPlaybackQuality")}} contenant des métriques, notamment le nombre d'images perdues.

Les données retournées peuvent être utilisées pour évaluer la qualité du flux vidéo.

## Syntaxe

```js-nolint
getVideoPlaybackQuality()
```

### Paramètres

Aucun.

### Valeur de retour

Un objet {{DOMxRef("VideoPlaybackQuality")}} fournissant des informations sur la qualité de lecture actuelle de l'élément vidéo.

## Exemples

Cet exemple met à jour un élément pour indiquer le nombre total d'images vidéo écoulées jusqu'à présent dans le processus de lecture. Cette valeur inclut les images perdues ou corrompues, elle n'est donc pas identique au «&nbsp;nombre total d'images lues&nbsp;».

```js
const videoElem = document.getElementById("my_vid");
const counterElem = document.getElementById("counter");
const quality = videoElem.getVideoPlaybackQuality();

counterElem.innerText = quality.totalVideoFrames;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("video")}}
- L'interface {{DOMxRef("VideoPlaybackQuality")}}.
