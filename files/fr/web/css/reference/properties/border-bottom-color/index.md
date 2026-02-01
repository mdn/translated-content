---
title: border-bottom-color
slug: Web/CSS/Reference/Properties/border-bottom-color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-bottom-color`** définit la couleur de la [bordure](/fr/docs/Web/CSS/Reference/Properties/border) inférieure d'un élément. Elle peut aussi être définie avec les propriétés raccourcies CSS {{CSSxRef("border-color")}} ou {{CSSxRef("border-bottom")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-bottom-color")}}

```css interactive-example-choice
border-bottom-color: red;
```

```css interactive-example-choice
border-bottom-color: #32a1ce;
```

```css interactive-example-choice
border-bottom-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-bottom-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-bottom-color: transparent;
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
border-bottom-color: red;
border-bottom-color: #ffbb00;
border-bottom-color: rgb(255 0 0);
border-bottom-color: hsl(100deg 50% 25% / 75%);
border-bottom-color: currentColor;
border-bottom-color: transparent;

/* Valeurs globales */
border-bottom-color: inherit;
border-bottom-color: initial;
border-bottom-color: revert;
border-bottom-color: revert-layer;
border-bottom-color: unset;
```

La propriété `border-bottom-color` est définie avec une seule valeur.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure inférieure.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Un div avec une bordure

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
  border-bottom-color: red;
  width: auto;
}

.texte-rouge {
  color: red;
}
```

#### Résultat

{{EmbedLiveSample("Un div avec une bordure")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés raccourcies CSS liées aux bordures&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-bottom")}} et {{CSSxRef("border-color")}}.
- Les propriétés CSS de couleur pour les autres bordures&nbsp;: {{CSSxRef("border-right-color")}}, {{CSSxRef("border-top-color")}} et {{CSSxRef("border-left-color")}}.
- Les autres propriétés CSS liées à la même bordure&nbsp;: {{CSSxRef("border-bottom-style")}} et {{CSSxRef("border-bottom-width")}}.
- La valeur de couleur par défaut [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor).
