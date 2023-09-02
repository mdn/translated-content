---
title: border-block-width
slug: Web/CSS/border-block-width
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-block-width`** définit la largeur de la bordure sur les côtés d'un élément sur les côtés de l'axe de bloc. Cette propriété logique peut correspondre à différentes propriétés physiques selon le mode d'écriture, la direction et l'orientation du texte. Autrement dit, cette propriété correspond à {{cssxref("border-top-width")}} et {{cssxref("border-bottom-width")}} ou à {{cssxref("border-left-width")}} et {{cssxref("border-right-width")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

```css
/* Valeurs de type <'border-width'> */
border-block-width: 5px 10px;
border-block-width: 5px;
border-block-width: thick;
```

The border width in the other dimension can be set with {{cssxref("border-inline-width")}}, which sets {{cssxref("border-block-inline-width")}}, and {{cssxref("border-block-inline-width")}}.

{{cssinfo}}

## Syntaxe

### Valeur

- `<'border-width'>`
  - : La largeur de la bordure. Voir {{ cssxref("border-width") }}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.texteExemple {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-block-width: 5px 10px;
}
```

### HTML

```html
<div>
  <p class="texteExemple">Texte d'exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques qui peuvent correspondre à cette propriété logique {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
