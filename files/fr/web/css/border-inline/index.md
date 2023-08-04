---
title: border-inline
slug: Web/CSS/border-inline
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-inline`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) qui permet de paramétrer les différentes propriétés logiques relatives à la bordure sur l'axe en ligne.

```css
border-inline: 1px;
border-inline: 2px dotted;
border-inline: medium dashed blue;
```

`border-inline` peut être utilisée afin de définir une ou plusieurs propriétés parmi {{cssxref("border-inline-width")}}, {{cssxref("border-inline-style")}} et {{cssxref("border-inline-color")}}. La bordure est donc paramétrée de la même façon pour le début et la fin de l'axe de en ligne. Les propriétés physiques correspondantes dépendront du mode d'écriture, de la direction et de l'orientation du texte. Autrement dit, cette propriété peut correspondre à {{cssxref("border-top")}} et {{cssxref("border-bottom")}} ou à {{cssxref("border-right")}} et {{cssxref("border-left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

Les bordures sur l'autre dimension peuvent être définies grâce à {{cssxref("border-block")}}, (qui est la proprété raccourcie pour {{cssxref("border-block-start")}} et {{cssxref("border-block-end")}}).

## Syntaxe

### Valeurs

La propriété `border-inline` peut être utilisée avec une ou plusieurs de ces valeurs, quel que soit l'ordre.

- `<'border-width'>`
  - : La largeur de la bordure. Voir {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Le style pour la ligne de la bordure. Voir {{cssxref("border-style")}}.
- `<'color'>`
  - : La couleur de la bordure. Voir {{cssxref("color")}}.

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

.exempleTexte {
  writing-mode: vertical-rl;
  border-inline: 5px dashed blue;
}
```

### HTML

```html
<div>
  <p class="exempleTexte">Texte exemple</p>
</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 140, 140)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés physiques qui peuvent correspondre à cette propriété logique :

  - {{cssxref("border-top")}},
  - {{cssxref("border-right")}},
  - {{cssxref("border-bottom")}},
  - {{cssxref("border-left")}}.

- Les propriétés relatives aux propriétés logiques : {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
