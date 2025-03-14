---
title: margin-inline
slug: Web/CSS/margin-inline
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`margin-inline`** définit la marge sur les côtés de l'élément qui sont ceux de l'axe en ligne. Cette propriété logique peut correspondre à différentes marges selon le mode d'écriture de l'élément, sa direction ou l'orientation du texte. Autrement dit, cette propriété peut correspondre aux propriétés {{cssxref("margin-top")}} et {{cssxref("margin-bottom")}} ou à {{cssxref("margin-right")}} et {{cssxref("margin-left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

```css
/* Valeurs de longueur */
/* Type <length> */
margin-inline: 10px 20px; /* Une longueur absolue */
margin-inline: 1em 2em; /* Une longueur relative à la taille du texte */
margin-inline: 5% 2%; /* Une longueur relative à la largeur ou hauteur du bloc englobant */
margin-inline: 10px; /* Une valeur utilisée pour les deux côtés */

/* Valeurs avec un mot-clé */
margin-inline: auto;

/* Valeurs globales */
margin-inline: inherit;
margin-inline: initial;
margin-inline: unset;
```

Cette propriété est une propriété raccourcie pour les deux propriétés logiques {{cssxref("margin-inline-start")}} et {{cssxref("margin-inline-end")}}. Pour régler les marges selon l'axe en ligne, on pourra utiliser la propriété logique raccourcie {{cssxref("margin-block")}} qui correspond aux propriétés {{cssxref("margin-block-start")}} et {{cssxref("margin-block-end")}}.

## Syntaxe

### Valeurs

La propriété `margin-inline` peut prendre les mêmes valeurs que la propriété {{cssxref("margin-left")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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
  margin-inline: 20px 40px;
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes : {{cssxref("margin-top")}}, {{cssxref("margin-right")}}, {{cssxref("margin-bottom")}} et {{cssxref("margin-left")}}
- Les propriétés qui influencent les propriétés logiques {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
