---
title: padding-block-end
slug: Web/CSS/padding-block-end
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/padding-block-end
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`padding-block-end`** définit le début logique de la zone de remplissage d'un élément de bloc. Cette propriété logique est traduite en une propriété physique selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à la propriété {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} ou {{cssxref("padding-left")}} selon les valeurs qui sont utilisées pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

Elle est à rapprocher des propriétés {{cssxref("padding-block-start")}}, {{cssxref("padding-inline-start")}} et {{cssxref("padding-inline-end")}} qui définissent les autres écarts de remplissage logiques d'un élément.

{{EmbedInteractiveExample("pages/css/padding-block-end.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-block-end: 10px;
padding-block-end: 1em;

/* Valeurs de proportions */
/* Type <percentage>      */
padding-block-end: 5%;  /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-block-end: inherit;
padding-block-end: initial;
padding-block-end: unset;
```

### Valeurs

La propriété `padding-block-end` peut prendre les mêmes valeurs que la propriété {{cssxref("padding-left")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple et Lorem et IP sum</p>
</div>
```

### CSS

```css
div {
  background-color: yellow;
  width: 120px;
  height: 120px;
}

.exemple {
  writing-mode: vertical-lr;
  padding-block-end: 20px;
  background-color: #C8C800;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

| Spécification                                                                                                            | État                                             | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-padding-block-end", "padding-block-end")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.padding-block-end")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("padding-top")}},
  - {{cssxref("padding-right")}},
  - {{cssxref("padding-bottom")}},
  - {{cssxref("padding-left")}}

- {{cssxref("writing-mode")}},
- {{cssxref("direction")}},
- {{cssxref("text-orientation")}}
