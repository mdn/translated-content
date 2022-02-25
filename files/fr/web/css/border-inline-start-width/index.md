---
title: border-inline-start-width
slug: Web/CSS/border-inline-start-width
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/border-inline-start-width
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-inline-start-width`** définit la largeur de la bordure pour le côté du début « logique » de l'élément. Cette propriété logique correspond à l'une des propriétés physiques équivalentes en fonction du mode d'écriture, de la directionnalité et de l'orientation du texte. Autrement dit, elle correspondra à  {{cssxref("border-top-width")}}, {{cssxref("border-right-width")}}, {{cssxref("border-bottom-width")}} ou a {{cssxref("border-left-width")}} selon les valeurs des propriétés pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-start-width.html")}}

Cette propriété logique est à rapprocher des autres propriétés logiques {{cssxref("border-block-start-width")}}, {{cssxref("border-block-end-width")}} et {{cssxref("border-inline-end-width")}} qui permettent de définir la largeur de la bordure pour les différents côtés de l'élément.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
border-inline-start-width: 5px;
border-inline-start-width: thick;
```

### Valeurs

- `<'border-width'>`
  - : La largeur de la bordure, voir {{cssxref("border-width")}}.

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

.exemple {
  writing-mode: vertical-lr;
  border: 1px solid blue;
  border-inline-start-width: 5px;
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

| Spécification                                                                                                                                | État                                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-border-inline-start-width", "border-inline-start-width")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-inline-start-width")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("border-top-width")}}
  - {{cssxref("border-right-width")}}
  - {{cssxref("border-bottom-width")}}
  - {{cssxref("border-left-width")}}

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
