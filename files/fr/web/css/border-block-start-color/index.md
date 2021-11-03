---
title: border-block-start-color
slug: Web/CSS/border-block-start-color
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/border-block-start-color
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-block-start-color`** définit la couleur de la bordure pour le côté du début de l'élément orienté orthogonalement à l'axe de lecture. Elle correspond à une propriété physique selon le mode d'écriture de l'élément, sa directionnalité et l'orientation du texte. Autrement dit, elle correspond à l'une des propriétés {{cssxref("border-top-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-bottom-color")}} ou {{cssxref("border-left-color")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-start-color.html")}}

Cette propriété est à rapprocher des autres propriétés logiques permettant de définir les couleurs de la bordure d'un élément :

- {{cssxref("border-block-end-color")}},
- {{cssxref("border-inline-end-color")}},
- {{cssxref("border-inline-start-color")}}.

## Syntaxe

```css
border-block-start-color: red;
border-block-start-color: #fffff;
border-block-start-color: rgb(200, 0, 0);

border-block-start-color: unset;
border-block-start-color: initial;
border-block-start-color: inherit;
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
  border-block-start-color: red;
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
| {{SpecName("CSS Logical Properties", "#propdef-border-block-start-color", "border-block-start-color")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-block-start-color")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("border-top-color")}},
  - {{cssxref("border-right-color")}},
  - {{cssxref("border-bottom-color")}},
  - {{cssxref("border-left-color")}}.

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
