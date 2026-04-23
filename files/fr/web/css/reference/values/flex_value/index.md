---
title: <flex>
slug: Web/CSS/Reference/Values/flex_value
original_slug: Web/CSS/flex_value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<flex>`** permet de représenter une longueur flexible à l'intérieur d'un conteneur en grille, qui est déclarée comme une dimension d'unité `fr`. Il est notamment utilisé pour les propriétés {{CSSxRef("grid-template-columns")}}, {{CSSxRef("grid-template-rows")}} ainsi que d'autres.

## Syntaxe

Le type de donnée `<flex>` est défini par un nombre ({{CSSxRef("&lt;number&gt;")}} suivi de l'unité `fr`. L'unité `fr` représente une **fr**action de l'espace restant dans le conteneur en grille. Comme pour les autres dimensions, il n'y a pas d'espace entre la valeur et l'unité.

## Exemples

### Exemples de valeurs correctes pour le type de donnée `fr`

```plain
1fr    /* Utilisation d'une valeur entière */
2.5fr  /* Utilisation d'une valeur flottante */
```

### Exemple d'utilisation dans une liste de pistes pour la mise en page en grille CSS

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 2.5fr 1.5fr;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le mode de disposition en grille (CSS Grid)](/fr/docs/Web/CSS/Guides/Grid_layout)
