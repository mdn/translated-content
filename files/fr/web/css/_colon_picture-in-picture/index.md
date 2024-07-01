---
title: ":picture-in-picture"
slug: Web/CSS/:picture-in-picture
l10n:
  sourceCommit: 257486f64b2472dda4996a4ea7b6b5305e46f863
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:picture-in-picture`** cible les éléments qui sont présentement affichés en incrustation vidéo (<i lang="en">picture-in-picture</i>).

## Syntaxe

```
:picture-in-picture
```

## Notes d'utilisation

La pseudo-classe `:picture-in-picture` permet de configurer les feuilles de style pour ajuster automatiquement la taille, la mise en forme ou la disposition du contenu lorsqu'une vidéo passe de l'incrustation vidéo à l'affichage normal et réciproquement.

## Exemples

Dans cet exemple, la boîte de la vidéo aura une ombre portée rouge ou non selon qu'elle est affichée en incrustation vidéo ou non.

### CSS

```css
:picture-in-picture {
  box-shadow: 0 0 0 5px red;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [API <i lang="en">Picture-in-picture</i>](/fr/docs/Web/API/Picture-in-Picture_API)
- [`HTMLVideoElement.requestPictureInPicture()`](/fr/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`HTMLVideoElement.autoPictureInPicture`](/fr/docs/Web/API/HTMLVideoElement/autoPictureInPicture)
- [`HTMLVideoElement.disablePictureInPicture`](/fr/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/fr/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.exitPictureInPicture()`](/fr/docs/Web/API/Document/exitPictureInPicture)
- [`Document.pictureInPictureElement`](/fr/docs/Web/API/Document/pictureInPictureElement)
