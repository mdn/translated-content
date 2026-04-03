---
title: text-emphasis-style
slug: Web/CSS/Reference/Properties/text-emphasis-style
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-emphasis-style`** définit le type d'emphase utilisée. Celui-ci peut également être défini par la propriété raccourcie {{CSSxRef("text-emphasis")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: text-emphasis-style")}}

```css interactive-example-choice
text-emphasis-style: none;
```

```css interactive-example-choice
text-emphasis-style: triangle;
```

```css interactive-example-choice
text-emphasis-style: "x";
```

```css interactive-example-choice
text-emphasis-style: filled double-circle;
```

```html interactive-example
<section id="default-example">
  <p>
    Je préfère être
    <span class="transition-all" id="example-element"
      >heureux que d'avoir raison</span
    >
    n'importe quel jour.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

## Syntaxe

```css
/* Valeur initiale */
text-emphasis-style: none; /* Aucune marque d'emphase */

/* Valeurs de type <string> */
text-emphasis-style: "x";
text-emphasis-style: "\25B2";
text-emphasis-style: "*";

/* Valeurs avec un mot-clé */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: dot;
text-emphasis-style: circle;
text-emphasis-style: double-circle;
text-emphasis-style: triangle;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* Valeurs globales */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: revert;
text-emphasis-style: revert-layer;
text-emphasis-style: unset;
```

### Valeurs

- `none`
  - : Aucune marque d'emphase.
- `filled`
  - : La forme est remplie avec une couleur unie. Si `filled` ou `open` est absent, ce sera la valeur par défaut.
- `open`
  - : La forme est vide.
- `dot`
  - : Cette valeur permet d'afficher des marques en forme de points. Le point rempli est le caractère `'•'` (`U+2022`) et le point vide est le caractère `'◦'` (`U+25E6`).
- `circle`
  - : Cette valeur permet d'afficher des marques en forme de cercles (plus grands que les points). Le cercle rempli est le caractère `'●'` (`U+25CF`) et celui pour le cercle ouvert est `'○'` (`U+25CB`).
- `double-circle`
  - : Cette valeur permet d'afficher des marques en forme de doubles cercles. Le double-cercle rempli est le caractère `'◉'` (`U+25C9`), et le double-cercle ouvert est le caractère `'◎'` (`U+25CE`).
- `triangle`
  - : Cette valeur permet d'afficher des marques en forme de triangles. Le triangle rempli correspond au caractère `'▲'` (`U+25B2`) et le triangle ouvert au caractère `'△'` (`U+25B3`).
- `sesame`
  - : Cette valeur permet d'afficher des marques en forme de points sésame :`'﹅'` (`U+FE45`) pour le caractère rempli et `'﹆'` (`U+FE46`) pour le caractère ouvert.
- `<string>`
  - : Affiche la chaîne de caractères donnée comme marques. Les auteur·ice·s ne doivent pas définir plus d'un _caractère_ dans `<string>`. L'agent utilisateur peut tronquer ou ignorer les chaînes de caractères composées de plus d'un groupe de graphèmes.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

```css
h2 {
  -webkit-text-emphasis-style: sesame;
  text-emphasis-style: sesame;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés associées {{CSSxRef('text-emphasis-color')}}, {{CSSxRef('text-emphasis')}}.
- La propriété {{CSSxRef('text-emphasis-position')}} permet de définir la position des marques d'emphase.
