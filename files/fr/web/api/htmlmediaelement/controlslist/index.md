---
title: "HTMLMediaElement : propriété controlsList"
short-title: controlsList
slug: Web/API/HTMLMediaElement/controlsList
l10n:
  sourceCommit: 281a6e50be0858c0200a59aac6b4a3f1b64116dc
---

{{APIRef("HTML DOM")}}

La propriété **`controlsList`** de l'interface {{DOMxRef("HTMLMediaElement")}} retourne un objet `DOMTokenList` qui aide l'agent utilisateur à sélectionner les contrôles à afficher sur l'élément multimédia chaque fois que cet agent affiche son propre ensemble de contrôles. L'objet `DOMTokenList` prend une ou plusieurs des trois valeurs possibles suivantes&nbsp;: `nodownload`, `nofullscreen` et `noremoteplayback`.

## Valeur

Un objet {{DOMxRef("DOMTokenList")}}.

La valeur de `controlsList` peut être définie en passant une chaîne de caractères représentant la propriété {{DOMxRef("DOMTokenList/value", "value")}} de `DOMTokenList`.

## Exemples

### Récupérer la propriété `controlsList`

La propriété `controlsList` retourne un objet {{DOMxRef("DOMTokenList")}} contenant la valeur actuelle.

```js
const video = document.createElement("video");
console.log(video.controlsList.value); // ""

video.controlsList.add("noremoteplayback");
console.log(video.controlsList.value); // "noremoteplayback"
```

### Définir la propriété `controlsList`

Vous pouvez également modifier `controlsList` en le définissant directement sur une chaîne de caractères contenant la nouvelle valeur.

```js
const audio = document.createElement("audio");
audio.controlsList = "nodownload";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Exemple Google Chrome pour `HTMLMediaElement.controlsList` <sup>(angl.)</sup>](https://googlechrome.github.io/samples/media/controlslist.html)
