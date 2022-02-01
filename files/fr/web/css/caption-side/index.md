---
title: caption-side
slug: Web/CSS/caption-side
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/caption-side
---
{{CSSRef}}

La propriété **`caption-side`** permet de choisir l'emplacement de la légende d'un tableau (représentée par l'élément {{HTMLElement("caption")}} du tableau). Les valeurs sont relatives au mode d'écriture (cf. {{cssxref("writing-mode")}}) du tableau.

{{EmbedInteractiveExample("pages/css/caption-side.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
/* Valeurs directionnelles */
caption-side: top;
caption-side: bottom;

/* Valeurs non-standards */
caption-side: left;
caption-side: right;
caption-side: top-outside;
caption-side: bottom-outside;


/* Valeur globales */
caption-side: inherit;
caption-side: initial;
caption-side: unset;
```

### Valeurs

- `top`
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée au-dessus du tableau.
- `bottom`
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée en-dessous du tableau.
- `left` {{non-standard_inline}}
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée à gauche du tableau.
    {{Note("Cette valeur a été proposée pour CSS 2, mais fut retirée avec la spécification CSS 2.1. Elle est non-standard.")}}
- `right` {{non-standard_inline}}
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée à droite du tableau.
    {{Note("Cette valeur a été proposée pour CSS 2, mais fut retirée avec la spécification CSS 2.1. Elle est non-standard.")}}
- `top-outside` {{non-standard_inline}}
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée au-dessus du tableau sans que la largeur ou l'alignement horizontal soient liées à la disposition horizontale du tableau.
    {{Note("La spécification CSS 2.1 note que la spécification CSS 2 a défini un autre comportement pour la valeur <code>top</code>, réintroduit avec cette valeur dans une future spécification.")}}
- `bottom-outside` {{non-standard_inline}}
  - : Un mot-clé qui indique que la boîte de la légende doit être positionnée en-dessous du tableau sans que la largeur ou l'alignement horizontal soient liées à la disposition horizontale du tableau.
    {{Note("La spécification CSS 2.1 note que la spécification CSS 2 a défini un autre comportement pour la valeur <code>bottom</code>, réintroduit avec cette valeur dans une future spécification.")}}

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
caption {
  caption-side: bottom;
}
```

### HTML

```html
<table>
  <caption>Une légende</caption>
  <tr>
    <td>Des données d'un tableau</td>
    <td>Pfiou encore des données</td>
  </tr>
</table>
```

### Résultat

{{EmbedLiveSample("Exemples","300","300")}}

## Spécifications

| Spécification                                                                                    | État                                             | Commentaires                                                                                         |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS Logical Properties', '#caption-side', 'caption-side')}} | {{Spec2('CSS Logical Properties')}} | Les valeurs `top` et `bottom` sont désormais définies comme relatives à la valeur de `writing-mode`. |
| {{SpecName('CSS2.1', 'tables.html#caption-position', 'caption-side')}}     | {{Spec2('CSS2.1')}}                         | Définition initiale.                                                                                 |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.caption-side")}}
