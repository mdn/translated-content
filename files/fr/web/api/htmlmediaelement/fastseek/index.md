---
title: "HTMLMediaElement : méthode fastSeek()"
short-title: fastSeek()
slug: Web/API/HTMLMediaElement/fastSeek
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

La méthode **`fastSeek()`** de l'interface {{DOMxRef("HTMLMediaElement")}} permet de déplacer rapidement la lecture du média à un nouvel instant, avec un compromis sur la précision.

> [!NOTE]
> Si vous avez besoin de rechercher avec précision, vous devez définir {{DOMxRef("HTMLMediaElement.currentTime")}} à la place.

## Syntaxe

```js-nolint
fastSeek(time)
```

### Paramètres

- `time`
  - : Un nombre à virgule flottante.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cet exemple déplace rapidement la lecture à la position de 20 secondes de l'élément vidéo.

```js
let maVideo = document.getElementById("monElementVideo");

maVideo.fastSeek(20);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLMediaElement.currentTime")}} pour une recherche sans compromis en matière de précision
