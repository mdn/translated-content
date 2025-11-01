---
title: border-top-color
slug: Web/CSS/Reference/Properties/border-top-color
original_slug: Web/CSS/border-top-color
---

{{CSSRef}}

La propriété **`border-top-color`** définit la couleur utilisée pour la bordure haute d'un élément.

Pour avoir une formulation plus concise, on pourra utiliser les propriétés raccourcies {{cssxref("border-color")}} et/ou {{cssxref("border-top")}}.

{{InteractiveExample("CSS Demo: border-top-color")}}

```css interactive-example-choice
border-top-color: red;
```

```css interactive-example-choice
border-top-color: #32a1ce;
```

```css interactive-example-choice
border-top-color: rgb(170, 50, 220, 0.6);
```

```css interactive-example-choice
border-top-color: hsl(60, 90%, 50%, 0.8);
```

```css interactive-example-choice
border-top-color: transparent;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a border around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  background-color: #eee;
  color: #000;
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
border-top-color: rgb(255, 0, 0);
border-top-color: hsla(100%, 50%, 25%, 0.75);
border-top-color: currentColor;
border-top-color: transparent;

/* Valeurs globales */
border-top-color: inherit;
border-top-color: initial;
border-top-color: unset;
```

### Valeurs

- `<color>`
  - : Une valeur de couleur (type {{cssxref("&lt;color&gt;")}}) qui décrit la couleur utilisée pour la bordure du côté haut.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.maboite {
  border: solid 0.3em gold;
  border-top-color: red;
  width: auto;
}

.texterouge {
  color: red;
}
```

### HTML

```html
<div class="maboite">
  <p>
    Une boîte avec une bordure autour. Notez le côté de la boîte qui est
    <span class="texterouge">rouge</span>.
  </p>
</div>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés raccourciées liées aux bordures
  - {{cssxref("border")}},
  - {{cssxref("border-top")}},
  - {{cssxref("border-color")}}.

- Les propriétés de couleur pour les autres bordures :
  - {{cssxref("border-right-color")}},
  - {{cssxref("border-bottom-color")}},
  - {{cssxref("border-left-color")}}.

- Les autres propriétés liées à la bordure du haut :
  - {{cssxref("border-top-style")}},
  - {{cssxref("border-top-width")}}.
