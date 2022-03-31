---
title: max-height
slug: Web/CSS/max-height
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/max-height
---
{{CSSRef}}

La propriété **`max-height`** est utilisée pour définir la hauteur maximale d'un élément donné. Elle empêche la valeur de la propriété {{cssxref("height")}} de devenir supérieure à la valeur spécifiée par `max-height` (autrement dit, `max-height` est une borne supérieure pour `height`).

{{EmbedInteractiveExample("pages/css/max-height.html")}}

La valeur de `max-height` surcharge la valeur de {{cssxref("height")}} mais elle est surchargée par {{cssxref("min-height")}}.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
max-height: 3.5em;

/* Valeurs relatives */
/* Type <percentage> */
max-height: 10%;

/* Valeurs avec un mot-clé */
max-height: none;
max-height: max-content;
max-height: min-content;
max-height: fit-content;
max-height: fill-available;

/* Valeurs globales */
max-height: inherit;
max-height: initial;
max-height: unset;
```

### Valeurs

- `<length>`
  - : La hauteur maximale fixée, exprimée comme une valeur absolue. Voir {{cssxref("&lt;length&gt;")}} pour les unités qu'on peut utiliser.
- `<percentage>`
  - : La hauteur maximale fixée, exprimée comme un fraction de la hauteur du bloc englobant. Voir la page {{cssxref("&lt;percentage&gt;")}} sur les valeurs possibles avec ce type.
- `none`
  - : Il n'y pas de limite à la hauteur que peut prendre la boîte.
- `max-content` {{experimental_inline}}
  - : La hauteur intrinsèque préférée.
- `min-content` {{experimental_inline}}
  - : La hauteur intrinsèque minimale.
- `fill-available`{{experimental_inline}}
  - : La hauteur du bloc englobant moins la marge verticale, la bordure et le remplissage (_padding_). Certains navigateurs implémentent cette valeur avec un ancien nom : `available`.
- `fit-content` {{experimental_inline}}
  - : Un synonyme pour `max-content`.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<div> Lorem ipsum tralala sit amet, consectetur adipisicing
  <p>
     Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</div>
```

### CSS

```css
div {
  height: 250px;
  border: solid 1px red;
}

p {
  max-height: 30%;
  border: solid 1px blue;
}
```

### Résultat

{{EmbedLiveSample("Exemples","100%","100%")}}

## Accessibilité

Veiller à s'assurer que les éléments ciblés avec une règle utilisant `max-height` ne sont pas tronqués ou ne masquent pas d'autre contenu sur la page lorsqu'on zoome pour augmenter la taille du texte.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.4, W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Spécifications

| Spécification                                                                                | État                                     | Commentaires                                                                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Sizing', '#height-height-keywords', 'max-height')}} | {{Spec2('CSS3 Sizing')}}         | Ajout des mots-clés `max-content`, `min-content`, `fit-content` et `fill-available`. Les deux brouillons de spécification CSS3 Box et CSS3 Writing Modes définissaient ces mots-clés mais ces spécifications ont été remplacées par celles-ci. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'max-height')}}     | {{Spec2('CSS3 Transitions')}} | `max-height` peut désormais être animée.                                                                                                                                                                                                       |
| {{SpecName('CSS2.1', 'visudet.html#min-max-heights', 'max-height')}} | {{Spec2('CSS2.1')}}                 | Définition initiale.                                                                                                                                                                                                                           |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.max-height")}}

## Voir aussi

- {{cssxref("height")}}
- {{cssxref("min-height")}}
- {{cssxref("box-sizing")}}
- [Le modèle de boîtes](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte "en/CSS/box_model")
