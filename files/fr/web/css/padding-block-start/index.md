---
title: padding-block-start
slug: Web/CSS/padding-block-start
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/padding-block-start
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`padding-block-start`** définit le début logique de la zone de remplissage d'un élément de bloc. Cette propriété logique est traduite en une propriété physique selon le mode d'écriture, la directionnalité et l'orientation du texte. Autrement dit, elle correspond à la propriété {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} ou {{cssxref("padding-left")}} selon les valeurs qui sont utilisées pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

Elle est à rapprocher des propriétés {{cssxref("padding-block-end")}}, {{cssxref("padding-inline-start")}} et {{cssxref("padding-inline-end")}} qui définissent les autres écarts de remplissage logiques d'un élément.

{{EmbedInteractiveExample("pages/css/padding-block-start.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-block-start: 10px;
padding-block-start: 1em;

/* Valeurs de proportions */
/* Type <percentage>      */
padding-block-start: 5%;  /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-block-start: inherit;
padding-block-start: initial;
padding-block-start: unset;
```

### Valeurs

La propriété `padding-block-start` peut prendre les mêmes valeurs que la propriété {{cssxref("padding-left")}}.

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
  padding-block-start: 20px;
  background-color: #C8C800;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

| Spécification                                                                                                                | État                                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-padding-block-start", "padding-block-start")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.padding-block-start")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("padding-top")}},
  - {{cssxref("padding-right")}},
  - {{cssxref("padding-bottom")}},
  - {{cssxref("padding-left")}}

- {{cssxref("writing-mode")}},
- {{cssxref("direction")}},
- {{cssxref("text-orientation")}}
