---
title: Rapport d'aspect (Aspect ratio)
slug: Glossary/Aspect_ratio
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **rapport d'aspect** est la relation proportionnelle entre la largeur et la hauteur d'un élément ou de la {{Glossary("viewport", "zone d'affichage")}}. Il s'exprime comme un {{CSSxRef("ratio")}} de deux nombres.

Le fait de définir un rapport d'aspect, qu'il soit inhérent (comme pour les images et vidéos) ou défini de façon extrinsèque, permet de conserver les proportions prévues d'un élément. Il est aussi possible d'interroger le rapport d'aspect d'un élément ou d'une zone d'affichage, ce qui est utile pour développer des composants et des mises en page flexibles.

En CSS, le type de donnée {{CSSxRef("ratio")}} s'écrit sous la forme `largeur / hauteur` (par exemple, `1 / 1` pour un carré, `16 / 9` pour du format large) ou comme un nombre seul, auquel cas ce nombre représente la largeur et la hauteur vaut `1`.

```css
.wideBox {
  aspect-ratio: 5 / 2;
}
.tallBox {
  aspect-ratio: 0.25;
}
```

En SVG, le rapport d'aspect est défini par l'attribut [`viewBox`](/fr/docs/Web/SVG/Reference/Attribute/viewBox) à quatre valeurs. Les deux premières valeurs sont les coordonnées X et Y minimales d'origine que le SVG peut avoir, et les deux suivantes sont la largeur et la hauteur qui fixent le rapport d'aspect du SVG.

```svg
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg"></svg>
```

Dans les API JavaScript, interroger un rapport d'aspect retourne un nombre flottant en double précision représentant la largeur divisée par la hauteur. On peut aussi utiliser JavaScript pour définir le rapport d'aspect d'un élément. Par exemple, définir une contrainte de rapport d'aspect pour une vidéo 1920x1080 avec le dictionnaire {{DOMxRef("MediaStreamTrack")}} ou {{DOMxRef("MediaTrackSettings")}} et la propriété [`aspectRatio`](/fr/docs/Web/API/MediaTrackSettings/aspectRatio) sera calculé comme 16/9, ou 1920/1080, soit `1.7777777778`&nbsp;:

```js
const constraints = {
  width: 1920,
  height: 1080,
  aspectRatio: 1.777777778,
};

myTrack.applyConstraints(constraints);
```

## Voir aussi

- La propriété CSS {{CSSxRef("aspect-ratio")}}
- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/CSS_box_sizing/Understanding_aspect-ratio)
- Le module de [taille de boîte CSS](/fr/docs/Web/CSS/CSS_box_sizing)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("intrinsic size")}}
- Valeurs de propriété CSS {{CSSxRef("min-content")}}, {{CSSxRef("max-content")}} et {{CSSxRef("fit-content")}}.
