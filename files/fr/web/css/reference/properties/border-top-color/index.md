---
title: border-top-color
slug: Web/CSS/Reference/Properties/border-top-color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-top-color`** permet de définir la couleur de la [bordure](/fr/docs/Web/CSS/Reference/Properties/border) supérieure d'un élément. Elle peut aussi être définie avec les propriétés raccourcies CSS {{CSSxRef("border-color")}} ou {{CSSxRef("border-top")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-top-color")}}

```css interactive-example-choice
border-top-color: red;
```

```css interactive-example-choice
border-top-color: #32a1ce;
```

```css interactive-example-choice
border-top-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-top-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-top-color: transparent;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec une bordure autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eeeeee;
  color: black;
  border: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntaxe

```css
/* Valeurs de type <color> */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255 0 0);
border-top-color: hsl(100deg 50% 25% / 75%);
border-top-color: currentColor;
border-top-color: transparent;

/* Valeurs globales */
border-top-color: inherit;
border-top-color: initial;
border-top-color: revert;
border-top-color: revert-layer;
border-top-color: unset;
```

La propriété `border-top-color` se définit avec une seule valeur.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure supérieure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Une div avec une bordure

#### HTML

```html
<div class="ma-boite">
  <p>
    Une boîte avec une bordure autour. Notez le côté de la boîte qui est
    <span class="texte-rouge">rouge</span>.
  </p>
</div>
```

#### CSS

```css
.ma-boite {
  border: solid 0.3em gold;
  border-top-color: red;
  width: auto;
}

.texte-rouge {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample("Une div avec une bordure")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés raccourcies liées aux bordures&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-top")}}, {{CSSxRef("border-color")}}.
- Les propriétés de couleur pour les autres bordures&nbsp;: {{CSSxRef("border-right-color")}}, {{CSSxRef("border-bottom-color")}}, {{CSSxRef("border-left-color")}}.
- Les autres propriétés liées à la même bordure&nbsp;: {{CSSxRef("border-top-style")}}, {{CSSxRef("border-top-width")}}.
- La valeur de couleur par défaut [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor).
