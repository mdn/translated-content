---
title: border-right-color
slug: Web/CSS/Reference/Properties/border-right-color
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La propriété [CSS](/fr/docs/Web/CSS) **`border-right-color`** permet de définir la couleur de la [bordure](/fr/docs/Web/CSS/Reference/Properties/border) à droite d'un élément. Elle peut aussi être définie avec les propriétés raccourcies CSS {{CSSxRef("border-color")}} ou {{CSSxRef("border-right")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: border-right-color")}}

```css interactive-example-choice
border-right-color: red;
```

```css interactive-example-choice
border-right-color: #32a1ce;
```

```css interactive-example-choice
border-right-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
border-right-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
border-right-color: transparent;
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
border-right-color: red;
border-right-color: #ffbb00;
border-right-color: rgb(255 0 0);
border-right-color: hsl(100deg 50% 25% / 75%);
border-right-color: currentColor;
border-right-color: transparent;

/* Valeurs globales */
border-right-color: inherit;
border-right-color: initial;
border-right-color: revert;
border-right-color: revert-layer;
border-right-color: unset;
```

La propriété `border-right-color` est définie comme une seule valeur.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur de la bordure à droite.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Une div avec une bordure

#### HTML

```html
<div class="maboite">
  <p>
    Une boîte avec une bordure autour. Notez le côté de la boîte qui est
    <span class="texterouge">rouge</span>.
  </p>
</div>
```

#### CSS

```css
.maboite {
  border: solid 0.3em gold;
  border-right-color: red;
  width: auto;
}

.texterouge {
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

- Les propriétés raccourcies CSS liées aux bordures&nbsp;: {{CSSxRef("border")}}, {{CSSxRef("border-right")}}, et {{CSSxRef("border-color")}}.
- Les propriétés CSS de couleur pour les autres bordures&nbsp;: {{CSSxRef("border-left-color")}}, {{CSSxRef("border-bottom-color")}}, et {{CSSxRef("border-top-color")}}.
- Les autres propriétés CSS liées à la même bordure&nbsp;: {{CSSxRef("border-right-style")}} et {{CSSxRef("border-right-width")}}.
- La valeur de couleur par défaut [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor).
