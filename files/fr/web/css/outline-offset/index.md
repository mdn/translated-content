---
title: outline-offset
slug: Web/CSS/outline-offset
---

{{CSSRef}}

La propriété **`outline-offset`** définit l'espace qu'il y a entre la bordure dessinée par {{cssxref("outline")}} et le bord de [la boîte de bordure](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte) d'un élément. Cet espace est transparent et la couleur visible en arrière-plan sera déterminée par l'élément parent.

{{EmbedInteractiveExample("pages/css/outline-offset.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
outline-offset: 3px;
outline-offset: 0.2em;

/* Valeurs globales */
outline-offset: inherit;
outline-offset: initial;
outline-offset: unset;
```

### Valeurs

- `<length>`
  - : La largeur de l'espace, voir la page {{cssxref("&lt;length&gt;")}} pour plus d'informations. Les valeurs négatives sont utilisées et font que la bordure dessinée est dessinée dans l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple {
  outline: 1px dashed red;
  /* On décale la ligne de 10px */
  outline-offset: 10px;
  background: yellow;
  margin: 15px;
  border: 1px solid black;
}
```

### HTML

```html
<p class="exemple">La bordure est décalée</p>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
