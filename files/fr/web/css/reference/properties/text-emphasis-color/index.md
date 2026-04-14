---
title: text-emphasis-color
slug: Web/CSS/Reference/Properties/text-emphasis-color
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-emphasis-color`** définit la couleur utilisée pour dessiner les marques d'emphase. Celle-ci peut être définie grâce à la propriété raccourcie {{CSSxRef("text-emphasis")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: text-emphasis-color")}}

```css interactive-example-choice
text-emphasis-color: currentColor;
```

```css interactive-example-choice
text-emphasis-color: red;
```

```css interactive-example-choice
text-emphasis-color: rgb(90 200 160 / 0.8);
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

#example-element {
  text-emphasis: filled;
}
```

## Syntaxe

```css
/* Valeur initiale */
text-emphasis-color: currentColor;

/* Valeur de type <color> */
text-emphasis-color: #555555;
text-emphasis-color: blue;
text-emphasis-color: rgb(90 200 160 / 80%);
text-emphasis-color: transparent;

/* Valeurs globales */
text-emphasis-color: inherit;
text-emphasis-color: initial;
text-emphasis-color: revert;
text-emphasis-color: revert-layer;
text-emphasis-color: unset;
```

### Valeurs

- `<color>`
  - : Définit la couleur des marques d'emphase. Si aucune couleur n'est définie, la valeur par défaut sera `currentColor`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Emphase avec une couleur et un caractère personnalisé

#### CSS

```css
em {
  text-emphasis-color: green;
  text-emphasis-style: "*";
}
```

#### HTML

```html
<p>Voici un exemple&nbsp;:</p>

<em>Voici des marques d'emphase&nbsp;!</em>
```

#### Résultat

{{EmbedLiveSample("Emphase avec une couleur et un caractère personnalisé", 450, 100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Les autres propriétés liées aux marques d'emphase&nbsp;: {{CSSxRef('text-emphasis-style')}}, {{CSSxRef('text-emphasis')}} et {{CSSxRef("text-emphasis-position")}}.
- D'autres propriétés relatives aux couleurs&nbsp;: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}} et {{CSSxRef("column-rule-color")}}
