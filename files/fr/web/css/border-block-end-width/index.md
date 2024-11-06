---
title: border-block-end-width
slug: Web/CSS/border-block-end-width
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-block-end-width`** définit la largeur de la bordure pour le côté de bloc de la fin « logique » de l'élément. Cette propriété logique correspond à l'une des propriétés physiques équivalentes en fonction du mode d'écriture, de la directionnalité et de l'orientation du texte. Autrement dit, elle correspondra à {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} ou a {{cssxref("border-left-width")}} selon les valeurs des propriétés pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-end-width.html")}}

Cette propriété logique est à rapprocher des autres propriétés logiques {{cssxref("border-block-start-width")}}, {{cssxref("border-inline-end-width")}} et {{cssxref("border-inline-end-width")}} qui permettent de définir la largeur de la bordure pour les différents côtés de l'élément.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
border-block-end-width: 5px;
border-block-end-width: thick;
```

### Valeurs

- `<'border-width'>`
  - : La largeur utilisée pour la bordure, voir {{cssxref("border-width")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-block-end-width: 5px;
}
```

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("border-top-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
