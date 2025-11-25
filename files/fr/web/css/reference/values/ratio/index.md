---
title: <ratio>
slug: Web/CSS/Reference/Values/ratio
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<ratio>`** décrit la relation proportionnelle entre deux valeurs. Il correspond essentiellement au rapport d'aspect (<i lang="en">aspect ratio</i> en anglais), qui met en relation la largeur et la hauteur. Par exemple, le `<ratio>` est utilisé comme valeur pour la caractéristique media `aspect-ratio` dans les media queries {{CSSxRef("@media")}}, pour la caractéristique de taille `aspect-ratio` dans les requêtes de conteneur {{CSSxRef("@container")}}, et comme valeur de la propriété CSS {{CSSxRef("aspect-ratio")}}.

## Syntaxe

Le type de donnée `<ratio>` est un nombre ({{CSSxRef("&lt;number&gt;")}}) suivi d'une barre oblique ('/', Unicode `U+002F SOLIDUS`) puis d'un second {{CSSxRef("&lt;number&gt;")}}. Les deux nombres doivent être positifs. Les espaces avant et après la barre oblique sont facultatifs. Le premier nombre représente la largeur, le second représente la hauteur. De plus, une seule {{CSSxRef("&lt;number&gt;")}} peut être utilisée comme valeur.

Deux ratios sont comparés en se basant sur la valeur numérique de leurs quotients. Par exemple, 16/16 est inférieur à 16/9 parce qu'il correspond à 1, tandis que le second correspond à 1,7. Cela signifie que le rapport d'aspect d'un écran haut est plus petit que celui d'un écran large, et que les images en portrait ont des rapports d'aspect plus petits que les images en paysage.

### Ratios fréquemment utilisés

| Ratio                 |                                                                                 | Utilisation                                                                                           |
| --------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `4/3` or `1.33333`    | ![Un rectangle de trois unités de haut et quatre unités de large](ratio4_3.png) | Format traditionnel utilisé par les télévisions au XX<sup>e</sup> siècle.                             |
| `16/9` or `1.7777778` | ![Un rectangle de neuf unités de haut et seize unités de large](ratio16_9.png)  | Format «&nbsp;moderne&nbsp;» des télévisions.                                                         |
| `185/100` or `1.85`   | ![Un rectangle de 1 unité de haut et 1,85 unités de large](ratio1_1.85.png)     | Le format le plus utilisé pour la projection de films depuis les années 1960.                         |
| `239/100` or `2.39`   | ![Un rectangle de 1 unité de haut et 2,39 unités de large](ratio1_2.39.png)     | Le format «&nbsp;large&nbsp;» utilisé pour projeter certains films (on parle de format anamorphique). |

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser dans une requête media

```css
@media screen and (aspect-ratio >= 16/9) {
  /* … */
}
```

### Utiliser dans une requête de taille `@container`

```css
@container (aspect-ratio > 1) and (width < 20em) {
  /* … */
}
```

### Utiliser comme valeur de propriété CSS

```css
.square {
  aspect-ratio: 1 / 1;
}
.circle {
  aspect-ratio: 1;
  border-radius: 50%;
}
.portrait {
  aspect-ratio: 5 / 7;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur média {{CSSxRef("@media/aspect-ratio", "aspect-ratio")}}
- [Comprendre les rapports d'aspect](/fr/docs/Web/CSS/Guides/Box_sizing/Aspect_ratios)
- Le guide des [requêtes CSS sur les conteneurs](/fr/docs/Web/CSS/Guides/Containment/Container_queries)
- Le guide [d'utilisation des requêtes de taille et de style des conteneurs](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries)
- Le module des [requêtes média CSS](/fr/docs/Web/CSS/Guides/Media_queries)
- Le module de [conteneur CSS](/fr/docs/Web/CSS/Guides/Containment)
- Le module de [taille des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_sizing)
- Le module des [valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
