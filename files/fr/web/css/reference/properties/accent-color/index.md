---
title: accent-color
slug: Web/CSS/Reference/Properties/accent-color
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`accent-color`** définit {{Glossary("accent", "la couleur d'accentuation")}} pour les contrôles d'interface utilisateur générés par certains éléments.

{{InteractiveExample("Démonstration CSS&nbsp;: accent-color")}}

```css interactive-example-choice
accent-color: red;
```

```css interactive-example-choice
accent-color: #74992e;
```

```css interactive-example-choice
accent-color: rgb(255 255 128);
```

```css interactive-example-choice
accent-color: hsl(250 100% 34%);
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <input checked id="example-element" type="checkbox" />
    <label for="example-element" id="example-label">Libellé d'exemple</label>
  </div>
</section>
```

```css interactive-example
.container > div {
  display: flex;
  align-items: center;
}

#example-element {
  width: 40px;
  height: 40px;
}

#example-label {
  margin-left: 10px;
  font-size: x-large;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
accent-color: auto;

/* Valeurs de <color> */
accent-color: darkred;
accent-color: #5729e9;
accent-color: rgb(0 200 0);
accent-color: hsl(228 4% 24%);

/* Valeurs globales */
accent-color: inherit;
accent-color: initial;
accent-color: revert;
accent-color: revert-layer;
accent-color: unset;
```

### Valeurs

- `auto`
  - : Représente une couleur déterminée par l'agent utilisateur, qui devrait correspondre à la couleur d'accentuation de la plateforme, s'il y en a une.
- {{CSSxRef("&lt;color&gt;")}}
  - : Définit la couleur à utiliser en tant que couleur d'accentuation.

## Description

Les navigateurs qui prennent en charge `accent-color` l'appliquent actuellement aux éléments HTML suivants&nbsp;:

- `{{HTMLElement("input/checkbox", "&lt;input type=\"checkbox\"&gt;")}}`
- `{{HTMLElement("input/radio", "&lt;input type=\"radio\"&gt;")}}`
- `{{HTMLElement("input/range", "&lt;input type=\"range\"&gt;")}}`
- {{HTMLElement("progress")}}

Chaque agent utilisateur possède une couleur d'accentuation, avec des variations pour garantir la lisibilité et le contraste. Cette couleur d'accentuation n'est pas utilisée par tous les contrôles d'interface utilisateur ni dans tous les états de ces contrôles. La propriété `accent-color` n'est appliquée qu'aux contrôles d'interface utilisateur qui utilisent une couleur d'accentuation dans les états où cela est pertinent.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une couleur d'accentuation personnalisée

#### HTML

```html
<input type="checkbox" checked />
<input type="checkbox" class="custom" checked />
```

#### CSS

```css
input {
  accent-color: auto;
  display: block;
  width: 30px;
  height: 30px;
}

input.custom {
  accent-color: rebeccapurple;
}
```

#### Résultat

{{EmbedLiveSample("Définir une couleur d'accentuation personnalisée", 500, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("background-color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("caret-color")}}, {{CSSxRef("color")}}, {{CSSxRef("column-rule-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}
- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- L'élément HTML {{HTMLElement("input")}}
