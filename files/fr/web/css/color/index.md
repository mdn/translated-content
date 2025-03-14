---
title: color
slug: Web/CSS/color
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
color: rgb(34 12 64 / 60%);
color: rgba(34.6 12 64 / 30%);

/* Valeurs <hsl()> */
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30 100% 50% / 60%);
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

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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
  En passant elle prit sur un rayon un pot de confiture portant cette étiquette,
  <span class="confiture"> «&nbsp;MARMELADE D’ORANGES.&nbsp;» </span>
  Mais, à son grand regret, le pot était vide&nbsp;: elle n’osait le laisser
  tomber dans la crainte de tuer quelqu’un&nbsp;; aussi s’arrangea-t-elle de
  manière à le déposer en passant dans une des armoires.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Accessibilité

Il est important de vérifier le contraste entre la couleur utilisée pour le texte et celle utilisée pour l'arrière-plan afin que les personnes ayant une vision faible ou lisant le document dans de mauvaises conditions puissent correctement lire le document.

Le ratio de contraste est déterminé en comparant la luminosité de la couleur du texte et celle de la couleur d'arrière-plan. Afin de respecter [les règles d'accessibilité (WCAG)](https://www.w3.org/WAI/intro/wcag), on doit avoir un ratio de 4.5:1 pour les textes « normaux » et un ratio de 3:1 pour les textes plus grands comme les titres (un texte est considéré comme « grand » s'il est en gras et qu'une lettre mesure plus de 18.66 px ou bien si une lettre mesure plus de 24 pixels).

- [Contrôleur de contraste WebAIM](https://webaim.org/resources/contrastchecker/)
- [Comprendre les règles WCAG 1.4](/fr/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- _[Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0 (en anglais)](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)_

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{cssxref("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs : {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("outline-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, {{cssxref("column-rule-color")}} et {{cssxref("color-adjust")}}
- [Appliquer des couleurs aux éléments HTML grâce à CSS](/fr/docs/Web/CSS/CSS_colors/Applying_color)
