---
title: border-bottom-color
slug: Web/CSS/border-bottom-color
---

{{CSSRef}}

La propriété **`border-bottom-color`** permet de définir la couleur utilisée pour la bordure basse d'un élément.

Pour avoir une formulation plus concise, on pourra utiliser les propriétés raccourcies {{cssxref("border-color")}} et/ou {{cssxref("border-bottom")}}.

{{EmbedInteractiveExample("pages/css/border-bottom-color.html")}}

## Syntaxe

```css
/* Valeurs de type <color> */
border-bottom-color: red;
border-bottom-color: rgb(255, 128, 0);
border-bottom-color: hsla(100%, 50%, 25%, 0.75);
border-bottom-color: #ffbb00;
border-bottom-color: currentColor;
border-bottom-color: transparent;

/* Valeurs globales */
border-bottom-color: inherit;
border-bottom-color: initial;
border-bottom-color: unset;
```

### Valeurs

- `<color>`
  - : Une valeur de couleur (type {{cssxref("&lt;color&gt;")}}) qui décrit la couleur utilisée pour la bordure du côté inférieur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.maboite {
  border: solid 0.3em gold;
  border-bottom-color: red;
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
  - {{cssxref("border-bottom")}},
  - {{cssxref("border-color")}}.

- Les propriétés de couleur pour les autres bordures :

  - {{cssxref("border-right-color")}},
  - {{cssxref("border-top-color")}},
  - {{cssxref("border-left-color")}}.

- Les autres propriétés liées à la bordure du haut :

  - {{cssxref("border-bottom-style")}},
  - {{cssxref("border-bottom-width")}}.
