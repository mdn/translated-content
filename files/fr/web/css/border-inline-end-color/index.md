---
title: border-inline-end-color
slug: Web/CSS/border-inline-end-color
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/border-inline-end-color
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-inline-end-color`** définit la couleur de la bordure pour le côté de la fin de l'élément orienté dans l'axe de lecture. Elle correspond à une propriété physique selon le mode d'écriture de l'élément, sa directionnalité et l'orientation du texte. Autrement dit, elle correspond à l'une des propriétés {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} ou {{cssxref("border-left-color")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-end-color.html")}}

Cette propriété est à rapprocher des autres propriétés logiques permettant de définir les couleurs de la bordure d'un élément :

- {{cssxref("border-block-start-color")}},
- {{cssxref("border-block-end-color")}},
- {{cssxref("border-inline-start-color")}}.

## Syntaxe

```css
border-inline-end-color: red;
border-inline-end-color: #fffff;
border-inline-end-color: rgb(200, 0, 0);

border-inline-end-color: unset;
border-inline-end-color: initial;
border-inline-end-color: inherit;
```

### Valeurs

- `<'border-color'>`
  - : Voir {{cssxref("border-color")}}

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
  border: 10px solid blue;
  border-inline-end-color: red;
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

| Spécification                                                                                                                            | État                                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-border-inline-end-color", "border-inline-end-color")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-inline-end-color")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("border-top-color")}},
  - {{cssxref("border-right-color")}},
  - {{cssxref("border-bottom-color")}},
  - {{cssxref("border-left-color")}}.

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
