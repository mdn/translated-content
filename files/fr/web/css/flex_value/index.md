---
title: <flex>
slug: Web/CSS/flex_value
tags:
  - CSS
  - Disposition
  - Reference
  - Type de donnée CSS
  - Web
translation_of: Web/CSS/flex_value
---
{{CSSRef}}

Le type de donnée [CSS](/fr/docs/Web/CSS) **`<flex>`** permet de représenter une longueur flexible à l'intérieur d'un conteneur en grille, qui est déclarée comme une dimension d'unité `fr`. Il est notamment utilisé pour les propriétés {{cssxref("grid-template-columns")}}, {{cssxref("grid-template-rows")}} ainsi que d'autres.

## Syntaxe

Le type de donnée `<flex>` est défini par un nombre ({{cssxref("&lt;number&gt;")}} suivi de l'unité `fr`. L'unité `fr` représente une **fr**action de l'espace restant dans le conteneur en grille. Comme pour les autres dimensions, il n'y a pas d'espace entre la valeur et l'unité.

## Exemples

```css
1fr    /* Utilisation d'une valeur entière */
2.5fr  /* Utilisation d'une valeur flottante */
```

## Spécifications

| Spécification                                                                | État                         | Commentaire         |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName("CSS Grid", "#typedef-flex", "&lt;flex&gt;")}} | {{Spec2("CSS Grid")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("css.types.flex")}}

## Voir aussi

- [Le mode de disposition en grille (CSS Grid)](/fr/docs/Web/CSS/CSS_Grid_Layout)
