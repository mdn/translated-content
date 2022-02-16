---
title: margin-block
slug: Web/CSS/margin-block
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/margin-block
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`margin-block`** définit la marge sur les côtés de l'élément qui sont ceux de l'axe de bloc. Cette propriété logique peut correspondre à différentes marges selon le mode d'écriture de l'élément, sa direction ou l'orientation du texte. Autrement dit, cette propriété peut correspondre aux propriétés {{cssxref("margin-top")}} et {{cssxref("margin-bottom")}} ou à   {{cssxref("margin-right")}} et {{cssxref("margin-left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

```css
/* Valeurs de longueur */
/* Type <length> */
margin-block: 10px 20px;  /* Une longueur absolue */
margin-block: 1em 2em;    /* Une longueur relative à la taille du texte */
margin-block: 5% 2%;      /* Une longueur relative à la largeur ou hauteur du bloc englobant */
margin-block: 10px;       /* Une valeur utilisée pour les deux côtés */

/* Valeurs avec un mot-clé */
margin-block: auto;

/* Valeurs globales */
margin-block: inherit;
margin-block: initial;
margin-block: unset;
```

Cette propriété est une propriété raccourcie pour les deux propriétés logiques {{cssxref("margin-block-start")}} et {{cssxref("margin-block-end")}}. Pour régler les marges selon l'axe en ligne, on pourra utiliser la propriété logique raccourcie {{cssxref("margin-inline")}} qui correspond aux propriétés {{cssxref("margin-inline-start")}} et {{cssxref("margin-inline-end")}}.

## Syntaxe

### Valeurs

La propriété `margin-block` peut prendre les mêmes valeurs que la propriété {{cssxref("margin-left")}}.

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

.texteExemple {
  writing-mode: vertical-rl;
  margin-block: 20px 40px;
  background-color: #c8c800;
}
```

### HTML

```html
<div>
  <p class="texteExemple">Texte d'exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

| Spécification                                                                                            | État                                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-margin-block", "margin-block")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.margin-block")}}

## Voir aussi

- Les propriétés physiques correspondantes : {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} et {{cssxref("margin-left")}}
- Les propriétés qui influencent les propriétés logiques {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
