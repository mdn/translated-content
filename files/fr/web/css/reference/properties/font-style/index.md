---
title: font-style
slug: Web/CSS/Reference/Properties/font-style
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-style`** permet de sélectionner une fonte italique ou oblique parmi celles listées par {{CSSxRef("font-family")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: font-style")}}

```css interactive-example-choice
font-style: normal;
```

```css interactive-example-choice
font-style: italic;
```

```css interactive-example-choice
font-style: oblique;
```

```css interactive-example-choice
font-style: oblique 40deg;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Londres. Le trimestre de la Saint-Michel vient de se terminer, et le Lord
    Chancelier siège dans le Lincoln's Inn Hall. Un temps de novembre
    implacable. Autant de boue dans les rues que si les eaux venaient tout juste
    de se retirer de la surface de la terre, et il ne serait pas étonnant de
    croiser un Mégalosaure, long d'une quarantaine de pieds, se dandinant comme
    un lézard éléphantesque sur Holborn Hill.
  </p>
</section>
```

```css interactive-example
@font-face {
  src: url("/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "Amstelvar";
  font-style: normal;
}

section {
  font-size: 1.2em;
  font-family: "Amstelvar", serif;
}
```

Les fontes **italiques** sont généralement cursives, utilisant en général moins d'espace horizontal que leurs équivalents non stylisés, tandis que les fontes **obliques** sont habituellement des versions inclinées de la fonte régulière. Lorsque le style demandé n'est pas disponible, les fontes italique et oblique sont simulées en inclinant artificiellement les glyphes de la fonte régulière (utilisez {{CSSxRef("font-synthesis")}} pour contrôler ce comportement).

## Syntaxe

La propriété `font-style` peut être définie avec l'un des mots-clés suivants.

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 10deg;

/* Valeurs globales */
font-style: inherit;
font-style: initial;
font-style: revert;
font-style: revert-layer;
font-style: unset;
```

La propriété `font-style` s'utilise avec un mot-clé parmi ceux qui suivent. Si ce mot-clé est `oblique`, il peut également être suivi de l'angle.

### Valeurs

- `normal`
  - : Sélectionne une police qualifiée de `normal` parmi celles de {{CSSxRef("font-family")}}.
- `italic`
  - : Sélectionne une police qualifiée d'`italic`. S'il n'y a pas de version italique, une version `oblique` sera sélectionnée à la place. Si aucune version n'est disponible, le style de police est synthétisé.
- `oblique`
  - : Sélectionne une police qualifiée d'`oblique`. S'il n'y a pas de version oblique, une version `italic` sera sélectionnée à la place. Si aucune version n'est disponible, le style de police est synthétisé.
- `oblique` {{CSSxRef("angle")}}
  - : Sélectionne une police qualifiée d'`oblique` et indique l'angle à utiliser pour la pente du texte. Si plusieurs fontes sont disponibles pour la police, c'est la fonte avec la pente la plus proche qui est utilisée. Si aucune police oblique n'est disponible, le navigateur _synthétisera_ une police penchée en tournant les caractères d'une fonte normale. L'angle indiqué doit être compris entre `-90deg` et `90deg`. Si aucun angle n'est indiqué, la valeur par défaut utilisée sera `14deg`. Les valeurs positives correspondent à une pente où le haut des caractères penche vers la fin de la ligne et les valeurs négatives permettent d'obtenir une pente orientée vers le début de la ligne.

    En général, si on utilise un angle de 14 degrés ou plus, des angles plus grands sont préférables&nbsp;; sinon, des angles plus petits sont préférables (voir [la section Font Matching Algorithm <sup>(angl.)</sup>](https://drafts.csswg.org/css-fonts-4/#font-matching-algorithm) dans la spécification pour l'algorithme exact).

### Polices variables

Les polices variables permettent d'obtenir un contrôle fin sur la pente appliquée à la fonte. Pour cela, on pourra utiliser une police variable et `font-style` avec le mot-clé `oblique` suivi d'une valeur d'angle.

Pour les polices variables TrueType ou OpenType, c'est l'axe de variation `"slnt"` qui est utilisé afin d'implémenter les variations de pente. C'est l'axe `"ital"` qui est utilisé avec une valeur de 1 pour implémenter les fontes italiques. Voir {{CSSxRef("font-variation-settings")}}.

Cliquez sur «&nbsp;Exécuter&nbsp;» dans les blocs de code ci-dessous pour éditer l'exemple dans le MDN Playground. Modifiez la valeur de l'angle pour voir la pente du texte changer.

```html live-sample___oblique-example
<p class="exemple">
  ...il ne serait pas étonnant de croiser un Mégalosaure, long d'une quarantaine
  de pieds, se dandinant comme un lézard éléphantesque sur Holborn Hill.
</p>
```

```css live-sample___oblique-example
@font-face {
  src: url("https://mdn.github.io/shared-assets/fonts/variable-fonts/AmstelvarAlpha-VF.ttf");
  font-family: "AmstelvarAlpha";
  font-style: normal;
}

.exemple {
  font:
    2rem "AmstelvarAlpha",
    sans-serif;
  /* font-variation-settings: "slnt" 12; */
  font-style: oblique 23deg;
}
```

{{EmbedLiveSample("oblique-example", "", 200)}}

## Accessibilité

L'utilisation de grandes portions de textes avec `font-style: italic` peut rendre la lecture difficile pour les personnes dyslexiques ou ayant des troubles cognitifs.

- [Comprendre le WCAG sur MDN, explications de la Règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le WCAG 2.2 de W3C <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#visual-presentation)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Styles de police

```html
<p class="normal">Un paragraphe normal.</p>
<p class="italic">Un paragraphe italique.</p>
<p class="oblique">Un paragraphe oblique.</p>
```

```css
.normal {
  font-style: normal;
}

.italic {
  font-style: italic;
}

.oblique {
  font-style: oblique;
}
```

{{EmbedLiveSample("Styles de police")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-family")}}
- La propriété {{CSSxRef("font-weight")}}
- L'attribut SVG {{SVGAttr("font-style")}}
- [Apprendre&nbsp;: Mise en forme fondamentale du texte et des polices](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals)
