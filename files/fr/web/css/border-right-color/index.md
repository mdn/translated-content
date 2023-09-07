---
title: border-right-color
slug: Web/CSS/border-right-color
---

{{CSSRef}}

La propriété **`border-right-color`** définit la couleur utilisée pour la bordure droite d'un élément. Pour avoir une formulation plus concise, on pourra utiliser les propriétés raccourcies {{cssxref("border-color")}} et/ou {{cssxref("border-right")}}.

{{EmbedInteractiveExample("pages/css/border-right-color.html")}}

## Syntaxe

```css
/* Valeurs de type <color> */
border-right-color: red;
border-right-color: rgb(255, 128, 0);
border-right-color: hsla(100%, 50%, 25%, 0.75);
border-right-color: #ffbb00;
border-right-color: currentColor;
border-right-color: transparent;

/* Valeurs globales */
border-right-color: inherit;
border-right-color: initial;
border-right-color: unset;
```

### Valeurs

- `<color>`
  - : Une valeur de couleur (type {{cssxref("&lt;color&gt;")}}) qui décrit la couleur utilisée pour la bordure du côté droit.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

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
  - {{cssxref("border-right")}},
  - {{cssxref("border-color")}}.

- Les propriétés de couleur pour les autres bordures :

  - {{cssxref("border-top-color")}},
  - {{cssxref("border-bottom-color")}},
  - {{cssxref("border-left-color")}}.

- Les autres propriétés liées à la bordure droite :

  - {{cssxref("border-right-style")}},
  - {{cssxref("border-right-width")}}.
