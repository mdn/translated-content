---
title: color
slug: Web/CSS/Reference/Properties/color
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`color`** permet de définir la valeur de couleur du texte d'un élément et de ses décorations de texte, et définit la valeur [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor). `currentColor` peut être utilisée comme valeur indirecte pour d'autres propriétés et constitue la valeur par défaut pour d'autres propriétés de couleur, telles que {{CSSxRef("border-color")}}.

Pour avoir un aperçu de l'utilisation de la couleur dans HTML, veuillez consulter [Appliquer des couleurs aux éléments HTML grâce à CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color).

{{InteractiveExample("Démonstration CSS&nbsp;: color")}}

```css interactive-example-choice
color: rebeccapurple;
```

```css interactive-example-choice
color: #00a400;
```

```css interactive-example-choice
color: rgb(214 122 127);
```

```css interactive-example-choice
color: hsl(30deg 82% 43%);
```

```css interactive-example-choice
color: hsl(237deg 74% 33% / 61%);
```

```css interactive-example-choice
color: hwb(152deg 0% 58% / 70%);
```

```html interactive-example
<section id="default-example">
  <div class="example-container">
    <p id="example-element">
      Londres. Le trimestre de la Saint-Michel vient de se terminer, et le Lord
      Chancelier siège dans la salle de Lincoln's Inn. Un temps de novembre
      implacable.
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.5em;
}

.example-container {
  background-color: white;
  padding: 10px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
color: currentcolor;

/* Valeurs de type <named-color> */
color: red;
color: orange;
color: tan;
color: rebeccapurple;

/* Valeurs de type <hex-color> */
color: #090;
color: #009900;
color: #090a;
color: #009900aa;

/* Valeurs de fonction <rgb()> et anciennes valeurs <rgba()> */
color: rgb(34, 12, 64);
color: rgb(34, 12, 64, 0.6);
color: rgba(34, 12, 64, 0.6);
color: rgb(34 12 64 / 0.6);
color: rgba(34 12 64 / 0.6);
color: rgb(34.6 12 64 / 60%);
color: rgba(34.6 12 64 / 60%);

/* Valeurs de fonction <hsl()> et anciennes valeurs <hsla()> */
color: hsl(30, 100%, 50%);
color: hsl(30, 100%, 50%, 0.6);
color: hsla(30, 100%, 50%, 0.6);
color: hsl(30 100% 50% / 0.6);
color: hsla(30 100% 50% / 0.6);
color: hsl(30.2 100% 50% / 60%);
color: hsla(30.2 100% 50% / 60%);

/*  Valeurs de fonction <hwb()> */
color: hwb(90 10% 10%);
color: hwb(90 10% 10% / 0.5);
color: hwb(90deg 10% 10%);
color: hwb(1.5708rad 60% 0%);
color: hwb(0.25turn 0% 40% / 50%);

/* Valeurs globales */
color: inherit;
color: initial;
color: revert;
color: revert-layer;
color: unset;
```

La propriété `color` est définie grâce à une valeur de type {{CSSxRef("&lt;color&gt;")}}.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : Définit la couleur des parties textuelles et décoratives de l'élément.
- [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor)
  - : Définit la couleur à la valeur de la propriété `color` de l'élément. Cependant, si elle est définie comme valeur de `color`, `currentColor` est traité comme `inherit`.

## Accessibilité

Il est important de vérifier le contraste entre la couleur utilisée pour le texte et celle utilisée pour l'arrière-plan afin que les personnes ayant une vision faible ou lisant le document dans de mauvaises conditions puissent correctement lire le document.

Le ratio de contraste est déterminé en comparant la luminosité de la couleur du texte et celle de la couleur d'arrière-plan. Afin de respecter [les règles d'accessibilité (WCAG) <sup>(angl.)</sup>](https://www.w3.org/WAI/standards-guidelines/wcag/), on doit avoir un ratio de 4.5:1 pour les textes «&nbsp;normaux&nbsp;» et un ratio de 3:1 pour les textes plus grands comme les titres (un texte est considéré comme «&nbsp;grand&nbsp;» s'il est en [gras](/fr/docs/Web/CSS/Reference/Properties/font-weight) et qu'une lettre mesure plus de 18.66px ou bien si une lettre mesure plus de 24 pixels).

- [Contrôleur de contraste WebAIM <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/)
- [Explications de la directive 1.4 de WCAG sur MDN](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.3 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Mettre le texte en rouge

Voici toutes les façons de mettre le texte d'un paragraphe en rouge&nbsp;:

```css
p {
  color: red;
}
p {
  color: #f00;
}
p {
  color: #ff0000;
}
p {
  color: rgb(255 0 0);
}
p {
  color: rgb(100% 0% 0%);
}
p {
  color: hsl(0 100% 50%);
}

/* 50% transparent */
p {
  color: #ff000080;
}
p {
  color: rgb(255 0 0 / 50%);
}
p {
  color: hsl(0 100% 50% / 50%);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Les autres propriétés relatives aux couleurs&nbsp;: {{CSSxRef("background-color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("outline-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}}, {{CSSxRef("column-rule-color")}} et {{CSSxRef("color-adjust")}}
- L'attribut SVG {{SVGAttr("color")}}
- La fonction {{CSSxRef("color_value/color", "color()")}}
- [Appliquer des couleurs aux éléments HTML grâce à CSS](/fr/docs/Web/CSS/Guides/Colors/Applying_color)
- [WCAG&nbsp;: contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
