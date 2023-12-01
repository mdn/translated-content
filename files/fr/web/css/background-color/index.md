---
title: background-color
slug: Web/CSS/background-color
---

{{CSSRef}}

La propriété **`background-color`** permet de définir la couleur utilisée pour l'arrière-plan d'un élément (celle-ci peut être une couleur transparente).

{{EmbedInteractiveExample("pages/css/background-color.html")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-color: red;

/* Valeur hexadécimale */
background-color: #bbff00; /* Complètement opaque */
background-color: #bf0; /* Complètement opaque - notation raccourcie */
background-color: #11ffee00; /* Complètement transparent */
background-color: #1fe0; /* Complètement transparent - notation raccourcie */
background-color: #11ffeeff; /* Complètement opaque */
background-color: #1fef; /* Complètement opaque - notation raccourcie */

/* Valeur RGB */
background-color: rgb(255, 255, 128);

/* Valeur RGBA : une valeur RGB avec un canal alpha */
background-color: rgba(117, 190, 218, 0); /* 0.0 - transparent */
background-color: rgba(117, 190, 218, 0.5); /* 0.5 - semi-transparent */
background-color: rgba(117, 190, 218, 1); /* 1.0 - opaque */

/* Valeur HSLA */
background-color: hsla(50, 33%, 25%, 0.75);

/* Valeurs avec un mot-clé spécial */
background-color: currentcolor;
background-color: transparent;

/* Valeurs globales */
background-color: inherit;
background-color: initial;
background-color: unset;
```

La propriété `background-color` se définit grâce à une valeur de type `<color>`.

### Valeurs

- `<color>`
  - : Une valeur de type {{cssxref("&lt;color&gt;")}} qui indique la couleur uniforme de l'arrière-plan. Même si une ou plusieurs images sont définies grâce à {{cssxref("background-image")}}, la couleur peut avoir un impact en fonction de la transparence des images. De façon générale, c'est une bonne pratique que de définir une couleur malgré la présence d'image pour prévenir aux problèmes de chargement des images.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
.exemple_un {
  background-color: teal;
  color: white;
}

.exemple_deux {
  background-color: rgb(153, 102, 153);
  color: rgb(255, 255, 204);
}

.exemple_trois {
  background-color: #777799;
  color: #ffffff;
}
```

### HTML

```html
<div class="exemple_un">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exemple_deux">Lorem ipsum dolor sit amet, consectetuer</div>

<div class="exemple_trois">Lorem ipsum dolor sit amet, consectetuer</div>
```

### Résultat

{{EmbedLiveSample("Exemples","200","150")}}

## Accessibilité

Il est important de vérifier que le contraste entre la couleur d'arrière-plan et la couleur du texte est suffisamment élevé afin que le contenu de la page puisse être lu, quelles que soient les conditions de vision.

Le ratio de contraste entre les couleurs est déterminé en comparant la luminosité de la couleur du texte et celle de la couleur d'arrière-plan. Pour respecter les règles d'accessibilité [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/intro/wcag), il faut avoir un ratio de 4.5:1 pour le contenu textuel normal et un ratio de 3:1 pour les textes plus grands comme les titres (un texte sera considéré comme grand s'il est en gras et mesure au moins 18.66px ou s'il mesure au moins 24 pixels).

- [Vérificateur de contraste WebAIM](https://webaim.org/resources/contrastchecker/)
- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [_Understanding Success Criterion 1.4.3, W3C Understanding WCAG 2.0_ (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gérer plusieurs arrières-plans](/fr/docs/Web/CSS/CSS_Background_and_Borders/Utiliser_des_fonds_multiples)
- Le type de données {{cssxref("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs : {{cssxref("color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}} et {{cssxref("column-rule-color")}}
- [Appliquer des couleurs à des éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
