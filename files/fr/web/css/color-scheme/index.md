---
title: color-scheme
slug: Web/CSS/color-scheme
translation_of: Web/CSS/color-scheme
browser-compat: css.properties.color-scheme
---
{{CSSRef}}

La propriété CSS **`color-scheme`** permet d'indiquer les jeux de couleurs dans lesquels un élément peut être rendu sans risque.

Les jeux de couleurs communément utilisés par les systèmes d'exploitation sont _light_ (clair) et _dark_ (sombre), ou _day mode_ (mode jour) et _night mode_ (mode nuit). Lorsqu'un utilisateur sélectionne un de ces jeux de couleurs, le système d'exploitation fait des ajustements à l'interface utilisateur. Cela comprend les contrôles de formulaires, les barres de défilement et les valeurs utilisées par le système de couleurs CSS.

## Syntaxe

```css
color-scheme: normal;
color-scheme: light;
color-scheme: dark;
color-scheme: light dark;

/* Valeurs globales */
color-scheme: inherit;
color-scheme: initial;
color-scheme: revert;
color-scheme: unset;
```

La valeur de la propriété `color-scheme` doit être un des mots-clés suivants.

### Valeurs

- `normal`
  - : Indique que l'élément ne tient pas compte d'un éventuel jeu de couleurs et qu'il devrait être rendu à l'aide du jeu de couleurs par défaut du navigateur.
- `light`
  - : Indique que l'élément peut être rendu en utilisant le jeu de couleurs claires du système d'exploitation.
- `dark`
  - : Indique que l'élément peut être rendu en utilisant le jeu de couleurs sombres du système d'exploitation.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Adaptation aux jeux de couleurs

Pour activer la préférence de jeu de couleurs de l'utilisateur sur l'ensemble de la page, `color-scheme` peut être déclaré sur l'élément {{cssxref(":root")}}.

```css
:root {
  color-scheme: light dark;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Appliquer des couleurs aux éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
- Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}
- {{cssxref("background-image")}}
- {{cssxref("-webkit-print-color-adjust")}}
