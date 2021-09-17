---
title: border-inline-start-style
slug: Web/CSS/border-inline-start-style
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/border-inline-start-style
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-inline-start-style`** définit le style de la bordure utilisé pour le côté du début de l'élément dans l'axe de lecture. Cette propriété logique correspondra à une propriété physique selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à {{cssxref("border-top-style")}}, {{cssxref("border-right-style")}}, {{cssxref("border-bottom-style")}} ou à {{cssxref("border-left-style")}} selon les valeurs de {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

{{EmbedInteractiveExample("pages/css/border-inline-start-style.html")}}

Les autres propriétés logiques permettant de définir le style de la bordure sont les suivantes :

- {{cssxref("border-block-start-style")}}
- {{cssxref("border-block-end-style")}}
- {{cssxref("border-inline-end-style")}}.

## Syntaxe

```css
/* Valeur avec un mot-clé */
border-inline-start-style: dashed;
border-inline-start-style: dotted;
border-inline-start-style: groove;
```

### Valeurs

- `<'border-style'>`
  - : Le style de la ligne utilisé pour la bordure, voir {{cssxref("border-style")}}.

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
  border-inline-start-style: dashed;
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
| {{SpecName("CSS Logical Properties", "#propdef-border-inline-start-style", "border-inline-start-style")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-inline-start-style")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("border-top-style")}},
  - {{cssxref("border-right-style")}},
  - {{cssxref("border-bottom-style")}},
  - {{cssxref("border-left-style")}}

- {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
