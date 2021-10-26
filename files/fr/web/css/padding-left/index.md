---
title: padding-left
slug: Web/CSS/padding-left
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/padding-left
---
{{CSSRef}}

La propriété **`padding-left`** d'un élément correspond à l'espace nécessaire à la gauche d'un élément. La [zone de remplissage](/fr/Apprendre/CSS/Les_bases/Le_mod%C3%A8le_de_bo%C3%AEte) correspond à l'espace entre le contenu et la bordure. `padding-left` ne peut pas recevoir de valeurs négatives.

{{EmbedInteractiveExample("pages/css/padding-left.html")}}

La propriété raccourcie {{cssxref("padding")}} permet de paramétrer les dimensions des quatre côtés de cette boîte (y compris `padding-left` donc).

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-left: 0.5em;
padding-left: 0;
padding-left: 2cm;

/* Valeurs de proportions */
/* Type <percentage>      */
padding-left: 10%;

/* Valeurs globales */
padding-left: inherit;
padding-left: initial;
padding-left: unset;
```

### Valeurs

- `<length>`
  - : Cette valeur définit une largeur positive. Voir {{cssxref("&lt;length&gt;")}} pour plus de détails.
- `<percentage>`
  - : Un pourcentage en rapport avec la largeur du bloc englobant. Voir {{cssxref("&lt;percentage&gt;")}} pour plus de détails.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="padd">
  Elle n’avait pas bu la moitié de la bouteille,
  que sa tête touchait au plafond et qu’elle fut
  forcée de se baisser pour ne pas se casser le
  cou.
</p>
```

### CSS

```css
.padd {
  padding-left: 20%;
  border: solid 1px;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

| Spécification                                                                                | État                                     | Commentaires                               |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------ |
| {{SpecName('CSS3 Box', '#the-padding', 'padding-left')}}                 | {{Spec2('CSS3 Box')}}             | Aucun changement.                          |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'padding-left')}}     | {{Spec2('CSS3 Transitions')}} | `padding-left` peut désormais être animée. |
| {{SpecName('CSS2.1', 'box.html#padding-properties', 'padding-left')}} | {{Spec2('CSS2.1')}}                 | Aucun changement.                          |
| {{Specname('CSS1', '#padding-left', 'padding-left')}}                     | {{Spec2('CSS1')}}                 | Définition initiale.                       |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.padding-left")}}

## Voir aussi

- [Le modèle de boîtes CSS](/fr/Apprendre/CSS/Introduction_à_CSS/Le_modèle_de_boîte)
- La propriété raccourcie {{cssxref("padding")}} qui permet de paramétrer `padding-top`, {{cssxref("padding-right")}}, {{cssxref("padding-bottom")}} et {{cssxref("padding-left")}}.
