---
title: "HTMLVideoElement : propriété videoWidth"
short-title: videoWidth
slug: Web/API/HTMLVideoElement/videoWidth
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`videoWidth`** de l'interface {{DOMxRef("HTMLVideoElement")}} indique la [largeur intrinsèque](/fr/docs/Web/API/HTMLVideoElement/videoHeight#à_propos_de_la_largeur_et_de_la_hauteur_intrinsèques) de la vidéo, exprimée en pixels CSS.
En termes simples, il s'agit de la largeur du média à sa taille naturelle.

Voir [`HTMLVideoElement.videoHeight` > À propos de la largeur et de la hauteur intrinsèques](/fr/docs/Web/API/HTMLVideoElement/videoHeight#à_propos_de_la_largeur_et_de_la_hauteur_intrinsèques) pour plus de détails.

## Valeur

Un entier qui définit la largeur intrinsèque de la vidéo en pixels CSS.
Si la propriété {{DOMxRef("HTMLMediaElement.readyState", "readyState")}} de l'élément vaut `HTMLMediaElement.HAVE_NOTHING`, alors la valeur de cette propriété est 0, car aucune information de taille n'est encore disponible pour la vidéo ou l'image d'affiche.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
