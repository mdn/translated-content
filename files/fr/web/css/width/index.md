---
title: width
slug: Web/CSS/width
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/width
---
{{CSSRef}}

La propriété **`width`** permet de définir la largeur de la [boîte du contenu](/fr/Apprendre/CSS/Les_bases/Le_modèle_de_boîte) d'un élément. Par défaut, sa valeur est **`auto`**, c'est à dire la largeur automatiquement calculée de son contenu. Si {{cssxref("box-sizing")}} vaut `border-box`, la valeur appliquée incluera les dimensions de la boîte d'encadrement (_border_) et de la boîte de remplissage (_padding_).

{{EmbedInteractiveExample("pages/css/width.html")}}

> **Note :** Les propriétés {{cssxref("min-width")}} et {{cssxref("max-width")}} permettent de surcharger {{cssxref("width")}}.

## Syntaxe

```css
/* Valeurs de longueur */
/* Type <length> */
width: 300px;
width: 25em;

/* Valeurs en pourcentages */
/* Type <percentage> */
width: 75%;

/* Avec un mot-clé */
width: 25em border-box;
width: 75% content-box;
width: max-content;
width: min-content;
width: available;
width: fit-content;
width: auto;

/* Valeurs globales */
width: inherit;
width: initial;
width: unset;
```

La propriété `width` se définit avec

- un des mots-clés suivants : [`available`](#available), [`min-content`](#min-content), [`max-content`](#max-content), [`fit-content`](#fit-content), [`auto`](#auto).
- ou une valeur de longeur ([`<length>`](#length)) ou de pourcentage ([`<percentage>`](#percentage)) éventuellement suivie par le mots-clé [`border-box`](#border-box) ou [`content-box`](#content-box).

### Valeurs

- `<length>`
  - : Voir {{cssxref("&lt;length&gt;")}} pour les unités qui peuvent être utilisées.
- `<percentage>`
  - : Permet de définir la largeur en pourcentages ({{cssxref("&lt;percentage&gt;")}}) par rapport à la largeur du bloc contenant le bloc courant. Si la largeur du bloc englobant dépend de la largeur de l'élément, la disposition est indéfinie.
- `border-box`{{experimental_inline}}
  - : Si cette valeur est présente, la longueur ({{cssxref("&lt;length&gt;")}}) ou le pourcentage ({{cssxref("&lt;percentage&gt;")}}) est appliqué à la boîte de bordure (_border_) de l'élément.
- `content-box` {{experimental_inline}}
  - : Si cette valeur est présente, la longueur ({{cssxref("&lt;length&gt;")}}) ou le pourcentage ({{cssxref("&lt;percentage&gt;")}}) est appliqué à la boîte de contenu de l'élément.
- `auto`
  - : Le navigateur calculera et sélectionnera une largeur pour l'élément.
- `fill` {{experimental_inline}}
  - : Utilise la taille `fill-available` dans l'axe du sens de lecture ou la taille `fill-available` dans l'axe perpendiculaire au sens de lecture selon le mode d'écriture.
- `max-content` {{experimental_inline}}
  - : La largeur intrinsèque préférée.
- `min-content` {{experimental_inline}}
  - : La largeur intrinsèque minimum.
- `available` {{experimental_inline}}
  - : La largeur du bloc contenant le bloc courant, moins la marge horizontale, la bordure et le remplissage (_padding_).
- `fit-content` {{experimental_inline}}

  - : La quantité la plus grande entre :

    - La largeur intrinsèque minimum
    - Le minimum entre la largeur intrinsèque préférée et la largeur disponible

### Syntaxe formelle

{{csssyntax}}

## Exemples

### Valeur par défaut

```css
p.goldie {
  background: gold;
}
```

```html
<p class="goldie">La communauté Mozilla ressemble à un panda roux.</p>
```

{{EmbedLiveSample('Valeur_par_défaut', '500px', '64px')}}

### En utilisant les pixels et les `em`

```css
.longueur_px {
  width: 200px;
  background-color: red;
  color: white;
  border: 1px solid black;
}

.longueur_em {
  width: 20em;
  background-color: white;
  color: red;
  border: 1px solid black;
}
```

```html
<div class="longueur_px">Largeur mesurée en pixels</div>
<div class="longueur_em">Largeur mesurée en ems</div>
```

{{EmbedLiveSample('En_utilisant_les_pixels_et_les_em', '500px', '64px')}}

### En utilisant les pourcentages

```css
.pourcent {
  width: 20%;
  background-color: silver;
  border: 1px solid red;
}
```

```html
<div class="pourcent">Largeur exprimée en pourcentages</div>
```

{{EmbedLiveSample('En_utilisant_les_pourcentages', '500px', '64px')}}

### En utilisant `max-content`

```css
p.maxgreen {
  background: lightgreen;
  width: intrinsic;           /* Safari/WebKit utilisent un nom non-standard */
  width: -moz-max-content;    /* Firefox/Gecko */
  width: -webkit-max-content; /* Chrome */
}
```

```html
<p class="maxgreen">La communauté Mozilla ressemble à un panda roux.</p>
```

{{EmbedLiveSample('En_utilisant_max-content', '500px', '64px')}}

### En utilisant `min-content`

```css
p.minblue {
  background: lightblue;
  width: -moz-min-content;    /* Firefox */
  width: -webkit-min-content; /* Chrome */
}
```

```html
<p class="minblue">La communauté Mozilla ressemble à un panda roux.</p>
```

{{EmbedLiveSample('En_utilisant_min-content', '500px', '155px')}}

## Accessibilité

Il faut s'assurer que les éléments sur lesquels on utilise `width` ne sont pas tronqués et ne masquent pas d'autre contenu sur la page lorsque l'utilisateur zoome afin d'agrandir la taille du texte.

- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.4  | Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Spécifications

| Spécification                                                                            | État                                     | Commentaires                                                                                                 |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS3 Sizing', '#width-height-keywords', 'width')}}     | {{Spec2('CSS3 Sizing')}}         | Ajout des mots-clés `max-content`, `min-content`, `available`, `fit-content`, `border-box` et `content-box`. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'width')}}         | {{Spec2('CSS3 Transitions')}} | `width` peut désormais être animée.                                                                          |
| {{SpecName('CSS2.1', 'visudet.html#the-width-property', 'width')}} | {{Spec2('CSS2.1')}}                 | Précision sur les éléments auxquels peuvent être appliquée la propriété.                                     |
| {{SpecName('CSS1', '#width', 'width')}}                                     | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                         |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.width")}}

## Voir aussi

- [Le modèle de boîtes](/fr/docs/Web/CSS/Modèle_de_boîte), {{cssxref("height")}}, {{cssxref("box-sizing")}}, {{cssxref("min-width")}}, {{cssxref("max-width")}}
