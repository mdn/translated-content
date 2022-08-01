---
title: margin-inline-start
slug: Web/CSS/margin-inline-start
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/margin-inline-start
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`margin-inline-start`** définit la marge logique appliquée au début des éléments en ligne, selon le mode d'écriture, la directionalité et l'orientation du texte. Selon les valeurs utilisées pour {{cssxref("writing-mode")}}, {{cssxref("direction")}}, and {{cssxref("text-orientation")}}, elle peut correspondre à {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} ou {{cssxref("margin-left")}}.

{{EmbedInteractiveExample("pages/css/margin-inline-start.html")}}

Cette propriété est à rapprocher de {{cssxref("margin-block-start")}}, {{cssxref("margin-block-end")}} et de {{cssxref("margin-inline-end")}} qui définissent les autres marges appliquées à l'élément.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
margin-inline-start: 10px;      /* Une longueur absolue */
margin-inline-start: 1em;       /* Une longueur relative à la taille du texte */
margin-inline-start: 5%;        /* Une largeur relative à la
                                   largeur du bloc englobant */

/* Valeurs avec un mot-clé */
margin-inline-start: auto;

/* Valeurs globales */
margin-inline-start: inherit;
```

### Valeurs

La propriété `margin-inline-start` peut prendre les mêmes valeurs que la propriété {{cssxref("margin-left")}}.

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
  margin-inline-start: 20px;
  background-color: #c8c800;
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

| Spécification                                                                                                                | État                                             | Commentaires         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-margin-inline-start", "margin-inline-start")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.margin-inline-start")}}

## Voir aussi

- Les propriétés physiques correspondantes :

  - {{cssxref("margin-top")}},
  - {{cssxref("margin-right")}},
  - {{cssxref("margin-bottom")}}
  - {{cssxref("margin-left")}}

- {{cssxref("margin-inline-end")}}
- {{cssxref("writing-mode")}}
- {{cssxref("direction")}}
- {{cssxref("text-orientation")}}
