---
title: padding-bottom
slug: Web/CSS/padding-bottom
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/padding-bottom
---
{{CSSRef}}

La propriété **`padding-bottom`** d'un élément ajuste la hauteur de la boîte de remplissage (_padding_) en haut de l'élément. La [zone de remplissage](/fr/Apprendre/CSS/Les_bases/Le_mod%C3%A8le_de_bo%C3%AEte) correspond à l'espace entre le contenu et la bordure. Contrairement à {{cssxref("margin-bottom")}}, `padding-bottom` ne peut pas recevoir de valeurs négatives.

{{EmbedInteractiveExample("pages/css/padding-bottom.html")}}

La propriété raccourcie {{cssxref("padding")}} permet de paramétrer les dimensions des quatre côtés de cette boîte (y compris `padding-bottom` donc).

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length>       */
padding-bottom: 0.5em;
padding-bottom: 0;
padding-bottom: 2cm;

/* Valeurs de proportions */
/* Type <percentage>      */
padding-bottom: 10%;

/* Valeurs globales */
padding-bottom: inherit;
padding-bottom: initial;
padding-bottom: unset;
```

### Valeurs

- `<length>`
  - : Cette valeur définit une hauteur positive. Voir {{cssxref("&lt;length&gt;")}} pour plus de détails.
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
  padding-bottom: 5em;
  border: solid 1px;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Spécifications

| Spécification                                                                                    | État                                     | Commentaires                                                                                                              |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Box', '#the-padding', 'padding-bottom')}}                     | {{Spec2('CSS3 Box')}}             | Aucun changement depuis {{SpecName('CSS2.1', 'box.html#padding-properties', 'padding-bottom')}}. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'padding-bottom')}}     | {{Spec2('CSS3 Transitions')}} | `padding-bottom` peut désormais être animée.                                                                              |
| {{SpecName('CSS2.1', 'box.html#padding-properties', 'padding-bottom')}} | {{Spec2('CSS2.1')}}                 | Aucun changement depuis {{Specname('CSS1', '#padding-bottom', 'padding-bottom')}}.                     |
| {{Specname('CSS1', '#padding-bottom', 'padding-bottom')}}                     | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                      |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.padding-bottom")}}

## Voir aussi

- [Le modèle de boîtes CSS](/fr/Apprendre/CSS/Introduction_à_CSS/Le_modèle_de_boîte)
- La propriété raccourcie {{cssxref("padding")}} qui permet de paramétrer `padding-bottom`, {{cssxref("padding-right")}}, {{cssxref("padding-top")}} et {{cssxref("padding-left")}}.
