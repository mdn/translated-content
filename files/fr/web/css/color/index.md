---
title: color
slug: Web/CSS/color
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/color
---
{{CSSRef}}

La propriété **`color`** définit la couleur de premier plan d'un élément texte et de ses éventuelles [décorations](/fr/docs/Web/CSS/text-decoration). Elle définit également la valeur de {{cssxref("currentColor")}} qui peut être utilisée pour d'autres propriétés (par exemple comme valeur par défaut pour {{cssxref("border-color")}}).

{{EmbedInteractiveExample("pages/css/color.html")}}

La valeur de cette propriété doit être une couleur uniforme. Celle-ci peut contenir des informations de transparences à partir de CSS3 mais ce ne doit pas être un dégradé ({{cssxref("&lt;gradient&gt;")}}) car en CSS un dégradé est considéré comme une image (type {{cssxref("&lt;image&gt;")}}) et pas comme une couleur.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
color: currentcolor;

/* Valeurs avec un mot-clé pour une couleur nommée */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* Valeurs hexadécimales <hex-color> */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* Valeurs utilisant la fonction <rgb()> */
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.3);
color: rgb(34.0 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* Valeurs <hsl()> */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.0 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);


/* Valeurs globales */
color: inherit;
color: initial;
color: unset;
```

La propriété `color` est définie grâce à une valeur de type {{cssxref("&lt;color&gt;")}}.

### Valeurs

- `<color>`
  - : Une valeur de type {{cssxref("&lt;color&gt;")}} qui fournit la couleur pour les éléments textuels de l'élément.

### Formal syntax

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  color: rgb(0, 0, 255);
  /* équivalent à
  color: blue;
  color: #0000ff;
  color: #00f;
  color: hsl(0, 100%, 50%); */
}

.confiture {
  color: orange;
  /* on pourrait aussi utiliser
  color: rgb(255, 128, 0); */
}
```

### HTML

```html
<p class="exemple">
  En passant elle prit sur un rayon un pot de
  confiture portant cette étiquette,
  <span class="confiture">
    « MARMELADE D’ORANGES. »
  </span>
  Mais, à son grand regret, le pot était vide :
  elle n’osait le laisser tomber dans la crainte
  de tuer quelqu’un ; aussi s’arrangea-t-elle de
  manière à le déposer en passant dans une
  des armoires.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Accessibilité

Il est important de vérifier le contraste entre la couleur utilisée pour le texte et celle utilisée pour l'arrière-plan afin que les personnes ayant une vision faible ou lisant le document dans de mauvaises conditions puissent correctement lire le document.

Le ratio de contraste est déterminé en comparant la luminosité de la couleur du texte et celle de la couleur d'arrière-plan. Afin de respecter [les règles d'accessibilité (WCAG)](https://www.w3.org/WAI/intro/wcag), on doit avoir un ratio de 4.5:1 pour les textes « normaux » et un ratio de 3:1 pour les textes plus grands comme les titres (un texte est considéré comme « grand » s'il est en gras et qu'une lettre mesure plus de 18.66 px ou bien si une lettre mesure plus de 24 pixels).

- [Contrôleur de contraste WebAIM](https://webaim.org/resources/contrastchecker/)
- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- _[Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Spécifications

| Spécification                                                                    | État                                     | Commentaires                                                                                                                                                                                                                                                                                                                                                                                                                              |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Colors', '#the-color-property', 'color')}} | {{Spec2('CSS4 Colors')}}         | Ajout de la syntaxe sans virgule pour les fonctions `rgb()`, `rgba()`, `hsl()` et `hsla()` Une valeur alpha peut être utilisée dans `rgb()` et `hsl()`, `rgba()` et `hsla()` sont donc des synonymes (dépréciés) de ces fonctions. Ajout de la couleur `rebeccapurple`. Ajout des valeurs hexadécimales sur 4 et 8 chiffres où le dernier chiffre indique la composante alpha. Ajout des fonctions `hwb()`, `device-cmyk()` et `color()`. |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'color')}} | {{Spec2('CSS3 Transitions')}} | `color` peut désormais être animée.                                                                                                                                                                                                                                                                                                                                                                                                       |
| {{SpecName('CSS3 Colors', '#color', 'color')}}                     | {{Spec2('CSS3 Colors')}}         | Dépréciation des couleurs système. Ajout des couleurs SVG. Ajout des fonctions `rgba()`, `hsl()` et `hsla()`.                                                                                                                                                                                                                                                                                                                             |
| {{SpecName('CSS2.1', 'colors.html#colors', 'color')}}         | {{Spec2('CSS2.1')}}                 | Ajout de la couleur `orange` et des couleurs système.                                                                                                                                                                                                                                                                                                                                                                                     |
| {{SpecName('CSS1', '#color', 'color')}}                             | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                                                                                                                                                                                                                                                                                                                                      |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.color")}}

## Voir aussi

- Le type de donnée {{cssxref("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs : {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}} et {{cssxref("color-adjust")}}
- [Appliquer des couleurs aux éléments HTML grâce à CSS](/fr/docs/Web/HTML/Applying_color)
