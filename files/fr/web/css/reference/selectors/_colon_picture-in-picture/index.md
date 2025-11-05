---
title: :picture-in-picture
slug: Web/CSS/Reference/Selectors/:picture-in-picture
original_slug: Web/CSS/:picture-in-picture
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:picture-in-picture`** cible les éléments qui sont présentement affichés en incrustation vidéo (<i lang="en">picture-in-picture</i>).

## Syntaxe

```css
:picture-in-picture {
  /* ... */
}
```

## Notes d'utilisation

La pseudo-classe `:picture-in-picture` permet de configurer les feuilles de style pour ajuster automatiquement la taille, la mise en forme ou la disposition du contenu lorsqu'une vidéo passe de l'incrustation vidéo à l'affichage normal et réciproquement.

## Exemples

Dans cet exemple, la boîte de la vidéo aura une ombre portée rouge ou non selon qu'elle est affichée en incrustation vidéo ou non.

### HTML

La page HTML ressemble à ceci&nbsp;:

```html
<h1>Démonstration du MDN Web Docs: la pseudo-classe :picture-in-picture</h1>

<p>
  Cette démonstration utilise la pseudo-classe <code>:picture-in-picture</code>
  pour changer automatiquement le style d'une vidéo entièrement à l'aide de CSS.
</p>

<video id="pip-video"></video>
```

L'élément {{HTMLElement("video")}} avec l'ID `"pip-video"` changera entre avoir une ombre portée rouge ou non, selon qu'il est affiché ou non dans la fenêtre flottante d'incrustation vidéo.

### CSS

La magie opère dans le CSS.

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

- L'[API <i lang="en">Picture-in-picture</i>](/fr/docs/Web/API/Picture-in-Picture_API)
- [`HTMLVideoElement.requestPictureInPicture()`](/fr/docs/Web/API/HTMLVideoElement/requestPictureInPicture)
- [`HTMLVideoElement.autoPictureInPicture`](/fr/docs/Web/API/HTMLVideoElement)
- [`HTMLVideoElement.disablePictureInPicture`](/fr/docs/Web/API/HTMLVideoElement/disablePictureInPicture)
- [`Document.pictureInPictureEnabled`](/fr/docs/Web/API/Document/pictureInPictureEnabled)
- [`Document.exitPictureInPicture()`](/fr/docs/Web/API/Document/exitPictureInPicture)
- [`Document.pictureInPictureElement`](/fr/docs/Web/API/Document/pictureInPictureElement)
