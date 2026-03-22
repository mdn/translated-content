---
title: outline-color
slug: Web/CSS/Reference/Properties/outline-color
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`outline-color`** définit la couleur du contour d'un élément.

{{InteractiveExample("Démonstration CSS&nbsp;: outline-color")}}

```css interactive-example-choice
outline-color: red;
```

```css interactive-example-choice
outline-color: #32a1ce;
```

```css interactive-example-choice
outline-color: rgb(170 50 220 / 0.6);
```

```css interactive-example-choice
outline-color: hsl(60 90% 50% / 0.8);
```

```css interactive-example-choice
outline-color: currentColor;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec un contour autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntaxe

```css
/* Valeurs de type <color> */
outline-color: #f92525;
outline-color: rgb(30 222 121);
outline-color: blue;

/* Valeurs globales */
outline-color: inherit;
outline-color: initial;
outline-color: revert;
outline-color: revert-layer;
outline-color: unset;
```

La propriété `outline-color` est définie avec une des valeurs listées ci-après.

### Valeurs

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur du contour, définie comme un `<color>`.

La spécification liste également une valeur supplémentaire, `auto`, qui n'est actuellement prise en charge par aucun navigateur. Lorsqu'elle sera implémentée, `auto` sera calculée comme [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor) sauf si {{CSSxRef("outline-style")}} est défini sur `auto`, auquel cas elle sera calculée comme la [couleur d'accentuation](/fr/docs/Web/CSS/Reference/Properties/accent-color).

## Description

Un contour est une ligne tracée autour d'un élément, à l'extérieur de la bordure ({{CSSxRef("border")}}). Contrairement à la bordure de l'élément, le contour est tracé à l'extérieur du cadre de l'élément et peut chevaucher d'autres contenus. La bordure, en revanche, modifie réellement la mise en page de la page pour s'assurer qu'elle s'adapte sans chevaucher quoi que ce soit d'autre (sauf si vous la configurez explicitement pour chevaucher).

Il est souvent plus pratique d'utiliser la propriété raccourcie {{CSSxRef("outline")}} lors de la définition de l'apparence d'un contour.

## Accessibilité

Les styles de [sélection personnalisés](/fr/docs/Web/CSS/Reference/Selectors/:focus) impliquent souvent des ajustements de la propriété {{CSSxRef("outline")}}. Si la couleur du contour est modifiée, il est important de s'assurer que le contraste entre celle-ci et l'arrière-plan sur lequel le contour est placé est suffisamment élevé pour que les personnes ayant une vision réduite puissent le percevoir.

Le ratio de contraste des couleurs est déterminé en comparant la luminosité des valeurs de couleur du texte et de l'arrière-plan. Pour respecter les [Directives pour l'accessibilité des contenus Web (WCAG) <sup>(angl.)</sup>](https://www.w3.org/WAI/standards-guidelines/wcag/), un ratio de 4,5:1 est requis pour le contenu textuel et de 3:1 pour le texte plus grand, comme les titres. Le texte de grande taille est défini comme ayant une taille de `18.66px` et [gras](/fr/docs/Web/CSS/Reference/Properties/font-weight) ou plus, ou `24px` ou plus.

- [WebAIM&nbsp;: Vérificateur de contraste des couleurs <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/)
- [Comprendre le WCAG sur le MDN, explications de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.3 | Comprendre le WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir un contour bleu solide

#### HTML

```html
<p>Mon contour est bleu, comme vous pouvez le voir.</p>
```

#### CSS

```css
p {
  outline: 2px solid; /* Définir la largeur et le style du contour */
  outline-color: blue; /* Définir la couleur du contour */
  margin: 5px;
}
```

#### Résultat

{{EmbedLiveSample("Définir un contour bleu solide")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("outline")}}
- La propriété {{CSSxRef("outline-width")}}
- La propriété {{CSSxRef("outline-style")}}
- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Autres propriétés associées aux couleurs&nbsp;: {{CSSxRef("color")}}, {{CSSxRef("background-color")}}, {{CSSxRef("border-color")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-emphasis-color")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("caret-color")}} et {{CSSxRef("column-rule-color")}}
