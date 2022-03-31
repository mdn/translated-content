---
title: border-inline-width
slug: Web/CSS/border-inline-width
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/border-inline-width
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-inline-width`** définit la largeur de la bordure sur les côtés d'un élément sur les côtés de l'axe en ligne. Cette propriété logique peut correspondre à différentes propriétés physiques selon le mode d'écriture, la direction et l'orientation du texte. Autrement dit, cette propriété correspond à {{cssxref("border-top-width")}} et {{cssxref("border-bottom-width")}} ou à {{cssxref("border-left-width")}} et {{cssxref("border-right-width")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

```css
/* Valeurs de type <'border-width'> */
border-inline-width: 5px 10px;
border-inline-width: 5px;
border-inline-width: thick;
```

The border width in the other dimension can be set with {{cssxref("border-block-width")}}, which sets {{cssxref("border-block-start-width")}}, and {{cssxref("border-block-end-width")}}.

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
  border-inline-width: 5px 10px;
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

| Spécification                                                                                                            | État                                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-border-block-width", "border-block-width")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-block-width")}}

## Voir aussi

- Les propriétés physiques qui peuvent correspondre à cette propriété logique {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}}, and {{cssxref("border-left-width")}}
- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
