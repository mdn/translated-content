---
title: inset-inline
slug: Web/CSS/inset-inline
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`inset-inline`** définit le décalage d'un élément par rapport au début et à la fin de l'axe en ligne de l'élément. Cette propriété logique correspond à une propriété physique donnée selon le mode d'écriture de l'élément, sa direction et l'orientation de son texte. Autrement dit, cette propriété peut correspondre à {{cssxref("top")}} et {{cssxref("bottom")}} ou à {{cssxref("right")}} et {{cssxref("left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

```css
/* Valeurs de longueur */
/* Type <length> */
inset-inline: 3px 10px;
inset-inline: 2.4em 3em;
inset-inline: 10px; /* La valeur est appliquée des deux côtés */

/* Les valeurs en pourcentage sont relatives à la */
/* largeur ou à la hauteur du bloc englobant */
/* Type <percentage> */
inset-inline: 10% 5%;

/* Valeur avec un mot-clé */
inset-inline: auto;

/* Valeurs globales */
inset-inline: inherit;
inset-inline: initial;
inset-inline: unset;
```

Pour gérer les décalages sur la dimension orthogonale, on pourra utiliser la propriété logique {{cssxref("inset-block")}} qui est une propriété raccourcie pour {{cssxref("inset-block-start")}}, and {{cssxref("inset-block-end")}}.

## Syntaxe

### Valeurs

La propriété `inset-inline` peut prendre les mêmes valeurs que la propriété {{cssxref("left")}}.

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
  writing-mode: vertical-lr;
  position: relative;
  inset-inline: 20px 50px;
  background-color: #c8c800;
}
```

### HTML

```html
<div>
  <p class="texteExemple">Texte d'exemple</p>
</div>
```

### Exemples

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques correspondantes : {{cssxref("top")}}, {{cssxref("right")}}, {{cssxref("bottom")}}, and {{cssxref("left")}}
- Les propriétés influençant les propriétés logiques {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
