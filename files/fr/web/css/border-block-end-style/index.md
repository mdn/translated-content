---
title: border-block-end-style
slug: Web/CSS/border-block-end-style
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/border-block-end-style
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-block-end-style`** définit le style de la bordure utilisé pour le côté de la fin de l'élément dans l'axe orthogonal au sens de lecture. Cette propriété logique correspondra à une propriété physique selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}} ou à {{cssxref("border-left-style")}} selon les valeurs de {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-block-end-style.html")}}

Les autres propriétés logiques permettant de définir le style de la bordure sont les suivantes :

- {{cssxref("border-inline-start-style")}}
- {{cssxref("border-inline-end-style")}}
- {{cssxref("border-block-start-style")}}.

## Syntaxe

```css
border-block-end-style: dashed;
border-block-end-style: dotted;
border-block-end-style: groove;
```

### Valeurs

- `<'border-style'>`
  - : Le style de la ligne pour la bordure, voir {{cssxref("border-style")}}.

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
  border: 5px solid blue;
  border-block-end-style: dashed;
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

| Spécification                                                                                                                        | État                                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-border-block-end-style", "border-block-end-style")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-block-end-style")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("border-top-style")}},
  - {{cssxref("border-right-style")}},
  - {{cssxref("border-bottom-style")}},
  - {{cssxref("border-left-style")}}

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
