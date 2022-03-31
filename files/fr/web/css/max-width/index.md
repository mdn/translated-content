---
title: max-width
slug: Web/CSS/max-width
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/max-width
---
{{CSSRef}}

La propriété **`max-width`** est utilisée pour définir la largeur maximale d'un élément donné. Elle empêche la valeur de la propriété {{cssxref("width")}} de devenir supérieure à la valeur spécifiée par `max-width` (autrement dit, `max-width` est une borne supérieur pour `width`).

{{EmbedInteractiveExample("pages/css/max-width.html")}}La valeur de `max-width` surcharge la valeur de {{cssxref("width")}} mais elle est surchargée par {{cssxref("min-width")}}.

## Syntaxe

```css
/* Valeur de longueur */
/* Type <length>      */
max-width: 3.5em;

/* Valeurs relatives */
/* Type <percentage> */
max-width: 10%;

/* Valeurs avec un mot-clé */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fill-available;

/* Valeurs globales */
max-width: inherit;
max-width: initial;
max-width: unset;
```

### Valeurs

- `<length>`
  - : La largeur minimale fixée. Voir {{cssxref("&lt;length&gt;")}} pour les unités qu'on peut utiliser. Une largeur négative rendra la déclaration invalide.
- `<percentage>`
  - : La largeur minimale fixée, exprimée comme un fraction de la largeur du bloc englobant. Voir la page {{cssxref("&lt;percentage&gt;")}} sur les valeurs possibles avec ce type. Les valeurs négatives rendront la déclaration invalide.
- `fill-available`{{experimental_inline}}
  - : La largeur du bloc englobant moins la marge horizontale, la bordure et le remplissage (_padding_). Certains navigateurs implémentent cette valeur avec un ancien nom : `available`.
- `fit-content` {{experimental_inline}}
  - : Un synonyme pour `max-content`.
- `max-content` {{experimental_inline}}
  - : La largeur intrinsèque préférée.
- `min-content` {{experimental_inline}}
  - : La largeur intrinsèque minimale.
- `none`
  - : Il n'y a pas de maximum pour la largeur. C'est la valeur par défaut.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Exemple simple avec un tableau

#### HTML

```html
<div> Lorem ipsum tralala sit amet, consectetur adipisicing
  <p>
     Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</div>
```

#### CSS

```css
div {
  width: 250px;
  border: solid 1px red;
}

p {
  max-width: 60%;
  border: solid 1px blue;
}
```

#### Résultat

{{EmbedLiveSample("Exemple_simple_avec_un_tableau","100%","100%")}}

## Accessibilité

Veiller à s'assurer que les éléments ciblés avec une règle utilisant `max-width` ne sont pas tronqués ou ne masquent pas d'autre contenu sur la page lorsqu'on zoome pour augmenter la taille du texte.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.4, W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Spécifications

| Spécification                                                                            | État                                     | Commentaires                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Sizing', '#width-height-keywords', 'max-width')}} | {{Spec2('CSS3 Sizing')}}         | Ajout des mots-clés `max-content`, `min-content`, `fit-content` et `fill-available`. Les deux brouillons de spécifications CSS3 Box et CSS3 Writing Modes définissaient ces mots-clés mais ont été remplacées par cette spécification. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'max-width')}}     | {{Spec2('CSS3 Transitions')}} | `max-width` peut désormais être animée.                                                                                                                                                                                                |
| {{SpecName('CSS2.1', 'visudet.html#min-max-widths', 'max-width')}} | {{Spec2('CSS2.1')}}                 | Définition initiale.                                                                                                                                                                                                                   |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.max-width")}}

## Voir aussi

- {{cssxref("width")}}
- {{cssxref("min-width")}}
- {{cssxref("min-height")}}
- {{cssxref("max-height")}}
- {{cssxref("box-sizing")}}
- [Le modèle de boîtes](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte "en/CSS/box_model")
