---
title: inset
slug: Web/CSS/inset
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/inset
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`inset`** définit les décalages physiques d'un élément. Bien qu'elle fasse partie de la spécification sur les propriétés logiques, sa valeur ne dépend pas du mode d'écriture de l'élément, de sa direction ou de l'orientation du texte. La syntaxe de cette propriété suit la même structure que {{cssxref("margin")}}, `inset` est une propriété raccourcie permettant de définir les propriétés {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}} et/ou {{cssxref("left")}}.

```css
/* Valeurs de longueurs */
/* Type <length> */
inset: 10px; /* la valeur est appliquée à l'ensemble des côtés */
inset: 4px 8px; /* haut/bas gauche/droit */
inset: 5px 15px 10px; /* haut gauche/droit bas */
inset: 2.4em 3em 3em 3em; /* haut droit bas gauche */

/* pourcentages de la largeur/hauteur du bloc englobant */
inset: 10% 5% 5% 5%;

/* Valeur avec un mot-clé */
inset: auto;

/* Valeurs globales */
inset: inherit;
inset: initial;
inset: unset;
```

## Syntaxe

### Valeurs

La propriété `inset` prend les mêmes valeurs que la propriété {{cssxref("left")}}.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div {
  background-color: yellow;
  width: 150px;
  height: 120px;
  position: relative;
}

.texteExemple {
  writing-mode: vertical-lr;
  position: absolute;
  inset: 20px 40px 30px 10px;
  background-color: #c8c800;
}
```

### HTML

```html
<div>
  <span class="texteExemple">Texte d'exemple</span>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

| Spécification                                                                            | État                                             | Commentaires         |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-inset", "inset")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.inset")}}

## Voir aussi

- La propriété raccourcie physique {{cssxref("margin")}}
- Les propriétés physiques détaillées :

  - {{cssxref("top")}},
  - {{cssxref("right")}},
  - {{cssxref("bottom")}},
  - {{cssxref("left")}}

- Les propriétés utilisées pour les autres propriétés logiques {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
