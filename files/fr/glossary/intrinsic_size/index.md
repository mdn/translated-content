---
title: Taille intrinsèque
slug: Glossary/Intrinsic_Size
l10n:
  sourceCommit: bbff081938f76bdd6c6fdbf59d2e25e0a7a1cf2a
---

En CSS, la **taille intrinsèque** d'un élément est la taille qu'il aurait uniquement en fonction de son contenu, sans tenir compte des effets du contexte de mise en page dans lequel il apparaît. C'est l'opposé de la {{Glossary("extrinsic size", "taille extrinsèque")}} d'un élément, qui est déterminée par des contraintes externes comme la taille du conteneur. Les tailles intrinsèques d'un élément sont représentées par ses tailles {{CSSxRef("min-content")}} et {{CSSxRef("max-content")}}.

Les éléments en ligne sont dimensionnés de façon intrinsèque. Les propriétés CSS du [modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) comme {{CSSxRef("height")}}, {{CSSxRef("width")}}, {{CSSxRef("block-size")}}, {{CSSxRef("inline-size")}}, {{CSSxRef("padding-block")}} et {{CSSxRef("margin-block")}} n'ont aucun impact sur leur disposition (mais {{CSSxRef("margin-inline")}} et {{CSSxRef("padding-inline")}} affectent l'espacement à l'intérieur d'une ligne).

Par exemple, la taille intrinsèque minimale de l'élément en ligne {{HTMLElement("span")}} est la plus petite taille qu'il aurait s'il était flottant (sans aucune autre propriété de boîte CSS appliquée) dans un conteneur avec `inline-size: 0`. La taille intrinsèque maximale est l'inverse&nbsp;; c'est la taille que ce même `<span>` aurait s'il était placé dans un conteneur avec une `inline-size` infinie.

La taille intrinsèque a la même signification pour les images que pour le texte — c'est la taille à laquelle les images sont affichées si aucun CSS n'est appliqué pour modifier le rendu.

La densité de pixels et la résolution influent sur la taille intrinsèque. Par défaut, les images sont supposées avoir une densité de pixels «&nbsp;1x&nbsp;» (1 pixel matériel = 1 pixel CSS), auquel cas la taille intrinsèque correspond simplement à la hauteur et à la largeur en pixels. La taille intrinsèque et la résolution d'une image peuvent être explicitement spécifiées dans ses données {{Glossary("EXIF")}}. La densité de pixels d'une image peut aussi être définie via l'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset). Notez que si les deux mécanismes sont utilisés, la valeur de `srcset` est appliquée «&nbsp;par-dessus&nbsp;» la valeur EXIF.

Les tailles intrinsèques et leur mode de calcul sont définis dans le module [de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/CSS_box_sizing).

## Taille intrinsèque minimale

Pour définir un élément selon sa taille intrinsèque minimale, définissez la propriété {{CSSxRef("inline-size")}} (ou {{CSSxRef("width")}} dans les modes d'écriture horizontaux, comme l'anglais ou l'hébreu) à {{CSSxRef("min-content")}}. Cela ajuste l'élément à la taille qu'il aurait si le texte était replié au maximum dans la direction en ligne, sans provoquer de débordement, avec autant de retours à la ligne souples que possible. Pour une boîte contenant une chaîne de texte, la taille intrinsèque minimale est définie par le mot le plus long.

```html hidden
<p>
  Le texte se replie, rendant l'élément aussi large que son mot le plus long.
</p>
```

```css
p {
  inline-size: min-content;
  background-color: palegoldenrod;
}
```

{{EmbedLiveSample('Taille intrinsèque minimale', '100%', 220)}}

## Taille intrinsèque maximale

La taille intrinsèque maximale est l'inverse. C'est la taille de l'élément si la taille en ligne du conteneur était infinie. Le contenu textuel s'afficherait aussi large que possible, sans retour à la ligne souple, même s'il déborde de son conteneur. La valeur-clé {{CSSxRef("max-content")}} permet d'obtenir ce comportement.

```html hidden
<p>L'élément grandit car le texte ne se replie pas.</p>
<p>
  Ce paragraphe peut être plus large que la page entière et il ne sera pas
  replié car <code>width: max-content</code> est défini. Il peut donc déborder
  de son conteneur.
</p>
```

```css
p {
  width: max-content;
  background-color: palegoldenrod;
}
```

{{EmbedLiveSample('Taille intrinsèque maximale', '100%', '200')}}

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Extrinsic size", "Taille extrinsèque")}}
- Mots-clés de dimensionnement CSS&nbsp;: {{CSSxRef("min-content")}}, {{CSSxRef("max-content")}} et {{CSSxRef("fit-content")}}
- La propriété CSS {{CSSxRef("interpolate-size")}}
- La propriété CSS {{CSSxRef("aspect-ratio")}}
- La fonction CSS {{CSSxRef("calc-size()")}}
- [Module de dimensionnement des boîtes CSS](/fr/docs/Web/CSS/CSS_box_sizing)
- Spécification du module CSS [de dimensionnement des boîtes niveau 3 <sup>(angl.)</sup>](https://drafts.csswg.org/css-sizing-3/#intrinsic-sizes)
