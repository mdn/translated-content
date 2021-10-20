---
title: padding-inline-start
slug: Web/CSS/padding-inline-start
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/padding-inline-start
---
{{CSSRef}}{{SeeCompatTable}}

La propriété** `padding-inline-start`** définit le décalage avec le début de la zone de remplissage d'un élément, selon le mode d'écriture, la directionnalité et l'orientation du texte. Elle correspond à la propriété {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} ou {{cssxref("padding-left")}} selon les valeurs définies pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

Les autres parties « logiques » du remplissage sont définies grâce aux propriétés {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} et {{cssxref("padding-inline-end")}}.

{{EmbedInteractiveExample("pages/css/padding-inline-start.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-inline-start: 10px;
padding-inline-start: 1em;

/* Valeurs de proportions */
/* Type <percentage>      */
padding-inline-start: 5%;  /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-inline-start: inherit;
padding-inline-start: initial;
padding-inline-start: unset;
```

### Valeurs

La propriété `padding-inline-start` peut prendre les mêmes valeurs que la propriété {{cssxref("padding-left")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple</p>
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
  padding-inline-start: 20px;
  background-color: #C8C800;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

| Spécification                                                                                                                    | État                                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-padding-inline-start", "padding-inline-start")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.padding-inline-start")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("padding-top")}},
  - {{cssxref("padding-right")}},
  - {{cssxref("padding-bottom")}},
  - {{cssxref("padding-left")}}

- {{cssxref("writing-mode")}},
- {{cssxref("direction")}},
- {{cssxref("text-orientation")}}
