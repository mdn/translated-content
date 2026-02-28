---
title: "HTMLVideoElement : propriété videoHeight"
short-title: videoHeight
slug: Web/API/HTMLVideoElement/videoHeight
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`videoHeight`** de l'interface {{DOMxRef("HTMLVideoElement")}} indique la [hauteur intrinsèque](#à_propos_de_la_largeur_et_de_la_hauteur_intrinsèques) de la vidéo, exprimée en pixels CSS.
En termes simples, il s'agit de la hauteur du média à sa taille naturelle.

## Valeur

Un entier qui définit la hauteur intrinsèque de la vidéo en pixels CSS.
Si la propriété {{DOMxRef("HTMLMediaElement.readyState", "readyState")}} de l'élément vaut `HTMLMediaElement.HAVE_NOTHING`, alors la valeur de cette propriété est 0, car aucune information de taille n'est encore disponible pour la vidéo ou l'image d'affiche.

### À propos de la largeur et de la hauteur intrinsèques

Un {{Glossary("user agent", "agent utilisateur")}} calcule la largeur et la hauteur intrinsèques du média de l'élément en partant de la largeur et de la hauteur brutes en pixels, puis en tenant compte de plusieurs facteurs&nbsp;:

- Le {{Glossary("aspect ratio", "rapport d'affichage")}} du média.
- L'ouverture propre du média (le sous-rectangle centré dans le média qui correspond au rapport d'affichage cible).
- La résolution de l'appareil cible.
- Tout autre facteur requis par le format du média.

Si l'élément affiche actuellement l'image d'affiche au lieu de la vidéo rendue, la taille intrinsèque de l'image d'affiche est considérée comme étant la taille de l'élément `<video>`.

Si à tout moment la taille intrinsèque du média change et que la propriété {{DOMxRef("HTMLMediaElement.readyState", "readyState")}} de l'élément n'est pas `HAVE_NOTHING`, un évènement {{DOMxRef("HTMLVideoElement.resize_event", "resize")}} sera envoyé à l'élément `<video>`.
Ceci peut se produire lorsque l'élément passe de l'affichage de l'image d'affiche à l'affichage du contenu vidéo, ou lorsque la piste vidéo affichée change.

## Exemples

Cet exemple crée un gestionnaire pour l'évènement {{DOMxRef("HTMLVideoElement.resize_event", "resize")}} qui redimensionne l'élément HTML {{HTMLElement("video")}} pour correspondre à la taille intrinsèque de son contenu.

```js
let v = document.getElementById("myVideo");

v.addEventListener("resize", (ev) => {
  let w = v.videoWidth;
  let h = v.videoHeight;

  if (w && h) {
    v.style.width = w;
    v.style.height = h;
  }
});
```

Notez que ce changement n'est appliqué que si `videoWidth` et `videoHeight` sont tous deux non nuls.
Ceci évite d'appliquer des modifications invalides lorsqu'aucune information réelle n'est encore disponible pour les dimensions.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
