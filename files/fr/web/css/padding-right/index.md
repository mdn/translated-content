---
title: padding-right
slug: Web/CSS/padding-right
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/padding-right
---
{{CSSRef}}

La propriété **`padding-right`** d'un élément correspond à l'espace nécessaire à la droite d'un élément. La [zone de remplissage](/fr/Apprendre/CSS/Les_bases/Le_mod%C3%A8le_de_bo%C3%AEte "http://developer.mozilla.org/en/CSS/Box_model#padding") correspond à l'espace entre le contenu et la bordure. `padding-right` ne peut pas recevoir de valeurs négatives.

{{EmbedInteractiveExample("pages/css/padding-right.html")}}

> **Note :** La propriété raccourcie {{cssxref("padding")}} permet de paramétrer les dimensions des quatre côtés de cette boîte (y compris `padding-right` donc).

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-right: 0.5em;
padding-right: 0;
padding-right: 2cm;

/* Valeurs de proportions */
/* Type <percentage>      */
padding-right: 10%;

/* Valeurs globales */
padding-right: inherit;
padding-right: initial;
padding-right: unset;
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
  padding-right: 20%;
  border: solid 1px;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

| Spécification                                                                                | État                                     | Commentaires                                |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------- |
| {{SpecName('CSS3 Box', '#the-padding', 'padding-right')}}                 | {{Spec2('CSS3 Box')}}             | Aucun changement.                           |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'padding-right')}} | {{Spec2('CSS3 Transitions')}} | `padding-right` peut désormais être animée. |
| {{SpecName('CSS2.1', 'box.html#padding-properties', 'padding-right')}} | {{Spec2('CSS2.1')}}                 | Aucun changement.                           |
| {{Specname('CSS1', '#padding-right', 'padding-right')}}                     | {{Spec2('CSS1')}}                 | Définition initiale.                        |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.padding-right")}}

## Voir aussi

- [Le modèle de boîtes CSS](/fr/Apprendre/CSS/Introduction_à_CSS/Le_modèle_de_boîte)
- La propriété raccourcie {{cssxref("padding")}} qui permet de paramétrer `padding-right`, {{cssxref("padding-top")}}, {{cssxref("padding-bottom")}} et {{cssxref("padding-left")}}.
