---
title: border-block
slug: Web/CSS/border-block
tags:
  - CSS
  - Experimental
  - Propriété
  - Propriété logique
  - Reference
translation_of: Web/CSS/border-block
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`border-block`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propriétés_raccourcies) qui permet de paramétrer les différentes propriétés logiques relatives à la bordure sur l'axe en bloc.

```css
border-block: 1px;
border-block: 2px dotted;
border-block: medium dashed blue;
```

`border-block` peut être utilisée afin de définir une ou plusieurs propriétés parmi {{cssxref("border-block-width")}}, {{cssxref("border-block-style")}} et {{cssxref("border-block-color")}}. La bordure est donc paramétrée de la même façon pour le début et la fin de l'axe de bloc. Les propriétés physiques correspondantes dépendront du mode d'écriture, de la direction et de l'orientation du texte. Autrement dit, cette propriété peut correspondre à {{cssxref("border-top")}} et {{cssxref("border-bottom")}} ou à {{cssxref("border-right")}} et {{cssxref("border-left")}} selon les valeurs des propriétés {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}.

Les bordures sur l'autre dimension peuvent être définies grâce à {{cssxref("border-inline")}}, (qui est la proprété raccourcie pour {{cssxref("border-inline-start")}} et {{cssxref("border-inline-end")}}).

## Syntaxe

### Valeurs

La propriété `border-block` peut être utilisée avec une ou plusieurs de ces valeurs, quel que soit l'ordre.

- `<'border-width'>`
  - : La largeur de la bordure. Voir {{cssxref("border-width")}}.
- `<'border-style'>`
  - : Le style pour la ligne de la bordure. Voir {{cssxref("border-style")}}.
- `<'color'>`
  - : La couleur de la bordure. Voir {{cssxref("color")}}.

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

.exempleTexte {
  writing-mode: vertical-rl;
  border-block: 5px dashed blue;
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

| Spécification                                                                                            | État                                             | Commentaires         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| {{SpecName("CSS Logical Properties", "#propdef-border-block", "border-block")}} | {{Spec2("CSS Logical Properties")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-block")}}

## Voir aussi

- Les propriétés physiques qui peuvent correspondre à cette propriété logique :

  - {{cssxref("border-top")}},
  - {{cssxref("border-right")}},
  - {{cssxref("border-bottom")}},
  - {{cssxref("border-left")}}.

- Les propriétés relatives aux propriétés logiques : {{cssxref("writing-mode")}}, {{cssxref("direction")}}, {{cssxref("text-orientation")}}
