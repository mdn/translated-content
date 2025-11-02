---
title: border-left-color
slug: Web/CSS/Reference/Properties/border-left-color
original_slug: Web/CSS/border-left-color
---

{{CSSRef}}

La propriété **`border-left-color`** permet de définir la couleur utilisée pour la bordure gauche d'un élément.

Pour avoir une formulation plus concise, on pourra utiliser les propriétés raccourcies {{cssxref("border-color")}} et/ou {{cssxref("border-left")}}.

{{InteractiveExample("CSS Demo: border-left-color")}}

```css interactive-example-choice
border-left-color: red;
```

```css interactive-example-choice
border-left-color: #32a1ce;
```

```css interactive-example-choice
border-left-color: rgb(170, 50, 220, 0.6);
```

```css interactive-example-choice
border-left-color: hsl(60, 90%, 50%, 0.8);
```

```css interactive-example-choice
border-left-color: transparent;
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
border-left-color: red;
border-left-color: rgb(255, 128, 0);
border-left-color: hsla(100%, 50%, 25%, 0.75);
border-left-color: #ffbb00;
border-left-color: currentColor;
border-left-color: transparent;

/* Valeurs globales */
border-left-color: inherit;
border-left-color: initial;
border-left-color: unset;
```

### Valeurs

- `<color>`
  - : Une valeur de couleur (type {{cssxref("&lt;color&gt;")}}) qui décrit la couleur utilisée pour la bordure du côté gauche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.maboite {
  border: solid 0.3em gold;
  border-left-color: red;
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

- Les propriétés raccourcies liées aux bordures
  - {{cssxref("border")}},
  - {{cssxref("border-left")}},
  - {{cssxref("border-color")}}.

- Les propriétés de couleur pour les autres bordures :
  - {{cssxref("border-top-color")}},
  - {{cssxref("border-bottom-color")}},
  - {{cssxref("border-right-color")}}.

- Les autres propriétés liées à la bordure gauche :
  - {{cssxref("border-left-style")}},
  - {{cssxref("border-left-width")}}.
