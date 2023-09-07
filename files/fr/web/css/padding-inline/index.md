---
title: padding-inline
slug: Web/CSS/padding-inline
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`padding-inline`** définit l'espace de remplissage (_padding_) pour le début et la fin de l'axe en ligne de l'élément. Cette propriété logique peut correspondre à différentes propriétés physiques selon le mode d'écriture de l'élément, sa direction et l'orientation du texte. Autrement dit, cette propriété peut correspondre aux propriétés {{cssxref("padding-top")}} et {{cssxref("padding-bottom")}} ou à {{cssxref("padding-right")}} et {{cssxref("padding-left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

```css
/* Valeurs de longueur */
/* Type <length> */
padding-inline: 10px 20px; /* Des longueurs absolues */
padding-inline: 1em 2em; /* Des longueurs relatives à la taille du texte */
padding-inline: 5% 2%; /* Des longueurs relatives à la taille du bloc englobant */
padding-inline: 10px; /* Une seule valeur définit le remplissage des deux côtés */

/* Valeurs avec un mot-clé */
padding-inline: auto;

/* Valeurs globales */
padding-inline: inherit;
padding-inline: initial;
padding-inline: unset;
```

Ces valeurs peuvent être définies individuellement grâce aux propriétés détaillées {{cssxref("padding-inline-start")}} et {{cssxref("padding-inline-end")}}. Pour définir le remplissage sur l'axe de bloc, on pourra utiliser la propriété logique raccourcie {{cssxref("padding-block")}} qui définit {{cssxref("padding-block-start")}} et {{cssxref("padding-block-end")}}.

## Syntaxe

### Valeur

La propriété `padding-inline` peut prendre les mêmes valeurs que la propriété {{cssxref("padding-left")}}.

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
  padding-inline: 20px 40px;
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

- Les propriétés physiques correspondantes :

  - {{cssxref("padding-top")}},
  - {{cssxref("padding-right")}},
  - {{cssxref("padding-bottom")}},
  - {{cssxref("padding-left")}}

- Les propriétés influençant les propriétés logiques :

  - {{cssxref("writing-mode")}},
  - {{cssxref("direction")}},
  - {{cssxref("text-orientation")}}
