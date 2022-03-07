---
title: outline-color
slug: Web/CSS/outline-color
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/outline-color
---
{{CSSRef}}

La propriété **`outline-color`** permet de définir la couleur avec laquelle on trace le conteur de l'élément. Ce contour est tracé autour de [la boîte de bordure](/fr/Apprendre/CSS/Les_bases/Le_mod%C3%A8le_de_bo%C3%AEte) et peut être utilisé pour faire ressortir l'élément.

{{EmbedInteractiveExample("pages/css/outline-color.html")}}

À la différence de la bordure, le contour est tracé en dehors du cadre de l'élément et peut donc chevaucher d'autres contenus. La bordure, en revanche, modifiera la disposition de la page afin de s'assurer qu'aucun chevauchement involontaire ne se produit.La propriété `outline-color` est également synthétisée avec la propriété raccourcie {{cssxref("outline")}}.

## Syntaxe



```css
/* Valeurs avec un mot-clé */
outline-color: invert;

/* Valeurs de couleur */
/* Type <color>       */
outline-color: red;
outline-color: #f92525;
outline-color: rgb(30,222,121);

/* Valeurs globales */
outline-color: inherit;
outline-color: initial;
outline-color: unset;
```



La propriété `outline-color` est définie avec une des valeurs listées ci-après.

### Valeurs

- `<color>`
  - : Voir la page {{cssxref("&lt;color&gt;")}} pour plus d'informations sur les valeurs utilisables avec ce type.
- `invert`
  - : Afin de s'assurer que la bordure est visible, on applique une inversion de couleur avec l'arrière-plan. Cela permet de renforcer le contraste, quelle que soit la couleur de l'arrière-plan. Cette valeur ne doit pas nécessairement être supportée par les navigateurs. Si elle ne l'est pas, ils considèreront la règle comme invalide.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p class="exemple">Mon contour est blue, da ba dee.</p>
```

### CSS

```css
.exemple {
  /* Tout d'abord on utiliser outline */
  /* pour définir le contour          */
  outline: 2px solid;

  /* Ensuite on précise sa couleur avec */
  /* outline-color                      */
  outline-color: #0000FF;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Accessibilité

[L'utilisation d'un focus personnalisé](/fr/docs/Web/CSS/:focus) s'accompagne généralement d'une modification de la propriété {{cssxref("outline")}}. Si la couleur du contour est modifiée, il est nécessaire de vérifier que le contraste entre le contour et l'arrière-plan est suffisant afin que le contour puisse clairement être distingué.

Le ratio de contraste est déterminé en comparaisant les luminosités des deux couleurs. Pour le contraste entre un texte et son arrière-plan, les recommandations [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag) requièrent un ratio de 4.5:1 pour le contenu textuel et un ratio de 3:1 pour les titres ou les textes plus grands (18.66px et en gras ou 24px ou plus grand).

- [Vérificateur de contraste WebAIM (en anglais)](https://webaim.org/resources/contrastchecker/)
- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- _[Understanding Success Criterion 1.4.3 - W3C Understanding WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Spécifications

| Spécification                                                                                    | Statut                                   | Commentaires                                |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------------------------------- |
| {{SpecName('CSS3 Basic UI', '#outline-color', 'outline-color')}}             | {{Spec2('CSS3 Basic UI')}}     | Aucun changement                            |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'outline-color')}}     | {{Spec2('CSS3 Transitions')}} | `outline-color` peut désormais être animée. |
| {{SpecName('CSS2.1', 'ui.html#propdef-outline-color', 'outline-color')}} | {{Spec2('CSS2.1')}}                 | Définition initiale.                        |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.outline-color")}}

## Voir aussi

- Le type de donnée {{cssxref("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}
- [Appliquer des couleurs sur des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
