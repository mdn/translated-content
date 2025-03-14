---
title: height
slug: Web/CSS/height
---

{{CSSRef}}

La propriété **`height`** définit la hauteur de la boîte de contenu d'un élément. [La boîte de contenu](/fr/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model#content) est à l'intérieur de la boîte de remplissage (_padding_) qui est à l'intérieur de la boîte de bordure qui est elle-même à l'intérieur de la boîte de marge de l'élément. Si la propriété {{cssxref("box-sizing")}} vaut `border-box`, cette propriété détermine la hauteur de [la boîte de marge](/fr/docs/Learn/CSS/Building_blocks/The_box_model#les_propriétés_des_boîtes).

{{EmbedInteractiveExample("pages/css/height.html")}}

Les propriétés {{cssxref("min-height")}} et {{cssxref("max-height")}} surchargent la propriété `height`.

## Syntaxe

```css
/* Valeur avec un mot-clé */
height: auto;

/* Valeurs de longueur */
/* Type <length>       */
height: 120px;
height: 10em;

/* Valeurs relatives proportionnelles  */
/* Type <percentage>                   */
height: 75%;

/* Valeurs globales */
height: inherit;
height: initial;
height: unset;
```

### Valeurs

- `<length>`
  - : Une valeur de longueur absolue. Voir la page {{cssxref("&lt;length&gt;")}} pour les unités qui peuvent être utilisées.
- `<percentage>`
  - : La valeur exprimée correspond à un pourcentage (type {{cssxref("&lt;percentage&gt;")}}) de la hauteur du bloc englobant.
- `border-box` {{experimental_inline}}
  - : Si cette valeur est présente, la valeur de longueur ou le pourcentage indiqués avant s'applique à la boîte de bordure de l'élément.
- `content-box` {{experimental_inline}}
  - : Si cette valeur est présente, la valeur de longueur ou le pourcentage indiqués avant s'applique à la boîte de contenu de l'élément
- `auto`
  - : Le navigateur calculera une valeur et sélectionnera une hauteur pour l'élément ciblé.
- `fill` {{experimental_inline}}
  - : Utilise la taille `fill-available` dans l'axe du sens de lecture ou la taille `fill-available` dans l'axe perpendiculaire au sens de lecture selon le mode d'écriture.
- `max-content` {{experimental_inline}}
  - : La hauteur intrinsèque préférrée.
- `min-content` {{experimental_inline}}
  - : La hauteur intrinsèque minimale.
- `available` {{experimental_inline}}
  - : La hauteur du bloc englobant à laquelle on a soustrait la marge verticale, la bordure verticale et le remplissage (_padding_) vertical.
- `fit-content` {{experimental_inline}}

  - : La plus grande des valeurs entre :

    - La hauteur minimale intrinsèque.
    - Le minimum entre la hauteur intrinsèque préférrée et la hauteur disponible

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### CSS

```css
div {
  width: 250px;
  margin-bottom: 5px;
  border: 3px solid #999999;
}

#red {
  height: 50px;
}

#green {
  height: 25px;
}

#parent {
  height: 100px;
}

#child {
  height: 50%;
  width: 75%;
}
```

### HTML

```html
<div id="red">
  <span>Je mesure 50 pixels de haut.</span>
</div>
<div id="green">
  <span>Et moi je mesure 25 pixels de haut.</span>
</div>
<div id="parent">
  <div id="child">
    <span>Je suis moitié moins haut que mon parent.</span>
  </div>
</div>
```

### Résultat

{{EmbedLiveSample('Exemple')}}

## Accessibilité

Veiller à s'assurer que les éléments ciblés avec une règle utilisant `height` ne sont pas tronqués ou ne masquent pas d'autre contenu sur la page lorsqu'on zoome pour augmenter la taille du texte.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.4, W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le modèle de boîtes](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
- {{cssxref("width")}}
- {{cssxref("box-sizing")}}
- {{cssxref("min-height")}}
- {{cssxref("max-height")}}
