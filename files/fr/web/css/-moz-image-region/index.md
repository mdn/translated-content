---
title: '-moz-image-region'
slug: Web/CSS/-moz-image-region
tags:
  - CSS
  - Non-standard
  - Propriété
  - Référence(2)
translation_of: Web/CSS/-moz-image-region
---
{{Non-standard_header}}{{CSSRef}}

Pour certains éléments XUL et les pseudo-éléments qui utilisent une image grâce à la propriété {{cssxref("list-style-image")}}, la propriété **`-moz-image-region`** définit la partie de l'image qui est utilisée plutôt que l'image toute entière. Cela permet d'utiliser des images qui regroupent des _sprites_ afin d'améliorer les performances.

```css
/* Valeur avec un mot-clé */
-moz-image-region: auto;

/* Valeur de type <shape> */
-moz-image-region: rect(0, 8px, 4px, 4px);

/* Valeurs globales */
-moz-image-region: inherit;
-moz-image-region: initial;
-moz-image-region: unset;
```

La syntaxe de cette propriété est semblable à la syntaxe de la propriété {{cssxref("clip")}}. Les quatre valeurs sont relatives au coin en haut à gauche de l'image.

> **Note :** Pour un système qui fonctionne pour n'importe quel arrière-plan, on pourra utiliser la propriété {{cssxref("-moz-image-rect")}}.

## Syntaxe

### Valeurs

- `auto`
  - : La région pour l'image est définie automatiquement
- `<shape>`
  - : Une forme définit la portion d'image qui doit être utilisée. La fonction `rect()` permet de définir un rectangle. Les paramètres de cette fonction correspondent respectivement aux décalages des bords haut, droit, bas et gauche. Voir {{cssxref("&lt;shape&gt;")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
#example-button {
  /* display only the 4x4 area from the top left of this image */
  list-style-image: url("chrome://example/skin/example.png");
  -moz-image-region: rect(0px, 4px, 4px, 0px);
}
#example-button:hover {
  /* use the 4x4 area to the right of the first for the hovered button */
  -moz-image-region: rect(0px, 8px, 4px, 4px);
}
```

## Spécifications

Cette propriété est une propriété propriétaire liée à Mozilla/Gecko et ne fait partie d'aucune spécification.

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.-moz-image-region")}}

## Voir aussi

- {{cssxref("-moz-image-rect")}}
