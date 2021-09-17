---
title: aspect-ratio
slug: Web/CSS/aspect-ratio
translation_of: Web/CSS/aspect-ratio
browser-compat: css.properties.aspect-ratio
---
{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`aspect-ratio`** définit un **ratio d'affichage préférentiel** pour la boîte, qui sera utilisé dans le calcul des tailles automatiques et pour d'autres fonctions de mise en page.

```css
aspect-ratio: 1 / 1;

/* Valeurs globales */
aspect-ratio: inherit;
aspect-ratio: initial;
aspect-ratio: revert;
aspect-ratio: unset;
```

### Valeurs

- {{cssxref("&lt;auto&gt;")}}
  - : Les [éléments remplacés](/fr/docs/Web/CSS/Replaced_element) ayant leur propre ratio d'affichage intrinsèque, ils utilisent _ce dernier_. Sinon, la boîte n'a pas de ratio d'affichage préférentiel. Les calculs de tailles impliquant un ratio d'affichage intrinsèque fonctionnent toujours avec les dimensions de la boîte de contenu.
- {{cssxref("&lt;ratio&gt;")}}
  - : Le ratio d'affichage préférentiel de la boîte est le ratio spécifié par `width` / `height`. Les calculs de tailles impliquant un ratio d'affichage intrinsèque fonctionnent toujours avec les dimensions de la boîte de contenu spécifiées par `box-sizing`.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemples de valeurs pour aspect-ratio

```css
aspect-ratio: 1 / 1;
aspect-ratio: 16 / 9;
```

## Correspondance entre largeur et hauteur avec aspect-ratio

Les navigateurs ont ajouté une propriété `aspect-ratio` interne qui s'applique aux [éléments remplacés](/fr/docs/Web/CSS/Replaced_element) et à d'autres éléments liés qui acceptent les attributs `width` et `height`. Cela se passe dans la feuille de styles interne du navigateur.

Sur Firefox, la règle de la feuille de styles interne ressemble à cela :

```css
img, input[type="image"], video, embed, iframe, marquee, object, table {
  aspect-ratio: attr(width) / attr(height);
}
```

Vous pouvez en savoir plus sur cette fonctionnalité dans l'article [Setting Height And Width On Images Is Important Again (en anglais)](https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Faire la correspondance des attributs width et height du conteneur des éléments média avec aspect-ratio](/fr/docs/Web/Media/images/aspect_ratio_mapping)
- [Designing an aspect ratio unit for CSS (en anglais)](https://www.smashingmagazine.com/2019/03/aspect-ratio-unit-css/)
