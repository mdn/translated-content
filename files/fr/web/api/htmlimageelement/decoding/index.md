---
title: "HTMLImageElement : propriété decoding"
short-title: decoding
slug: Web/API/HTMLImageElement/decoding
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML DOM")}}

La propriété **`decoding`** de l'interface {{domxref("HTMLImageElement")}} fournit une indication au navigateur sur la façon de décoder l'image. Plus précisément, elle indique s'il faut attendre que l'image soit décodée avant d'afficher d'autres mises à jour du contenu ou non.

## Valeur

Une chaîne de caractères représentant l'indication de décodage. Les valeurs possibles sont&nbsp;:

- `"sync"`
  - : Décoder l'image de façon synchrone pour une présentation atomique avec le reste du contenu.
- `"async"`
  - : Décoder l'image de façon asynchrone et permettre l'affichage d'autres contenus avant la fin du décodage.
- `"auto"`
  - : Aucune préférence pour le mode de décodage&nbsp;: le navigateur choisit ce qui est le mieux pour l'utilisateur·ice. C'est la valeur par défaut, mais chaque navigateur a son propre comportement&nbsp;:
    - Chromium utilise par défaut `"sync"`.
    - Firefox utilise par défaut `"async"`.
    - Safari utilise par défaut `"sync"`, sauf dans quelques cas particuliers.

## Notes d'utilisation

La propriété `decoding` donne une indication au navigateur sur le fait de décoder l'image en même temps que d'autres tâches en une seule étape (`"sync"`), ou de permettre l'affichage d'autres contenus avant la fin du décodage (`"async"`). En pratique, la différence entre les deux valeurs est souvent difficile à percevoir et, lorsqu'il y en a une, il existe souvent une meilleure solution.

Pour les images insérées dans le DOM à l'intérieur de la zone d'affichage (<i lang="en">viewport</i> en anglais), `"async"` peut entraîner des flashs de contenu non stylisé, tandis que `"sync"` peut provoquer de légers effets de saccade ([<i lang="en">jank</i>](/fr/docs/Glossary/Jank) en anglais). L'utilisation de la méthode {{domxref("HTMLImageElement.decode()")}} est généralement préférable pour obtenir une présentation atomique sans bloquer le reste du contenu.

Pour les images insérées dans le DOM en dehors de la zone d'affichage, les navigateurs modernes les décodent généralement avant qu'elles ne soient affichées à l'écran, et il n'y a alors aucune différence perceptible entre les deux valeurs.

## Exemples

Dans l'exemple ci-dessous, vous obtiendrez probablement une image vide affichée sur la page pendant le téléchargement de l'image. Définir `decoding` ne l'empêchera pas.

```js
const img = new Image();
img.decoding = "sync";
img.src = "img/logo.png";
document.body.appendChild(img);
```

Insérer une image après le téléchargement peut rendre la propriété `decoding` plus pertinente&nbsp;:

```js
async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

const img = new Image();
await loadImage("img/logo.png", img);
// L'utilisation de `sync` permet de s'assurer que les autres contenus ne sont mis à jour qu'avec l'image
img.decoding = "sync";
document.body.appendChild(img);
const p = document.createElement("p");
p.textContent = "L'image est complètement chargée !";
document.body.appendChild(p);
```

Une meilleure solution consiste cependant à utiliser la méthode {{domxref("HTMLImageElement.decode()")}} pour résoudre ce problème. Elle permet de décoder une image de façon asynchrone, en retardant son insertion dans le DOM jusqu'à ce qu'elle soit entièrement téléchargée et décodée, évitant ainsi le problème d'image vide mentionné ci-dessus. Ceci est particulièrement utile si vous remplacez dynamiquement une image existante par une nouvelle, et cela évite également que des rendus non liés à ce code soient bloqués pendant le décodage de l'image.

L'utilisation de `img.decoding = "async"` peut éviter de bloquer l'affichage d'autres contenus si le décodage prend du temps&nbsp;:

```js
const img = new Image();
img.decoding = "async";
img.src = "img/logo.png";
document.body.appendChild(img);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{domxref("HTMLImageElement.decode()")}}
- L'attribut `decoding` de l'élément HTML {{htmlelement("img")}}
- [Que fait réellement l'attribut de décodage d'image&nbsp;? <sup>(angl.)</sup>](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) sur tunetheweb.com (2023)
