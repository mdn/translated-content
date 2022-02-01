---
title: padding-inline-end
slug: Web/CSS/padding-inline-end
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/padding-inline-end
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`padding-inline-end`** définit le décalage avec la fin de la zone de remplissage d'un élément, selon le mode d'écriture, la directionnalité et l'orientation du texte. Elle correspond à la propriété {{cssxref("padding-top")}}, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} ou {{cssxref("padding-left")}} selon les valeurs définies pour {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

Les autres parties « logiques » du remplissage sont définies grâce aux propriétés {{cssxref("padding-block-start")}}, {{cssxref("padding-block-end")}} et {{cssxref("padding-inline-start")}}.

{{EmbedInteractiveExample("pages/css/padding-inline-end.html")}}

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-inline-end: 10px;
padding-inline-end: 1em;

/* Valeurs de proportions */
/* Type <percentage>      */
padding-inline-end: 5%;  /* Relatif à la largeur du bloc englobant */

/* Valeurs globales */
padding-inline-end: inherit;
padding-inline-end: initial;
padding-inline-end: unset;
```

### Valeurs

La propriété `padding-inline-end` peut prendre les mêmes valeurs que la propriété {{cssxref("padding-left")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div>
  <p class="exemple">Texte d'exemple Lorem y psoum</p>
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
  padding-inline-end: 20px;
  background-color: #C8C800;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

| Spécification                                                                                                            | Statut                                           | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-padding-inline-end", "padding-inline-end")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.padding-inline-end")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("padding-top")}},
  - {{cssxref("padding-right")}},
  - {{cssxref("padding-bottom")}},
  - {{cssxref("padding-left")}}

- {{cssxref("writing-mode")}},
- {{cssxref("direction")}},
- {{cssxref("text-orientation")}}
