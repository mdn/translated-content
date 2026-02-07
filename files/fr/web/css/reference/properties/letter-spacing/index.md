---
title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`letter-spacing`** définit le comportement d'espacement horizontal entre les caractères du texte. Cette valeur s'ajoute à l'espacement naturel entre les caractères lors du rendu du texte. Des valeurs positives de `letter-spacing` écartent davantage les caractères, tandis que des valeurs négatives de `letter-spacing` rapprochent les caractères.

{{InteractiveExample("Démonstration CSS&nbsp;: letter-spacing")}}

```css interactive-example-choice
letter-spacing: normal;
```

```css interactive-example-choice
letter-spacing: 0.2rem;
```

```css interactive-example-choice
letter-spacing: 1px;
```

```css interactive-example-choice
letter-spacing: -1px;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Il y a autant de boue dans les rues que si les eaux venaient à peine de se
    retirer de la surface de la terre, et il ne serait pas étonnant de croiser
    un Mégalosaure, long d'une douzaine de mètres, se dandinant comme un lézard
    éléphantesque dans Holborn Hill.
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

## Syntaxe

```css
/* Valeur avec mot-clé */
letter-spacing: normal;

/* Valeurs de type <length> */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: 0.3px;

/* Valeurs globales */
letter-spacing: inherit;
letter-spacing: initial;
letter-spacing: revert;
letter-spacing: revert-layer;
letter-spacing: unset;
```

### Valeurs

- `normal`
  - : L'espacement normal des lettres pour la police courante. Contrairement à une valeur de `0`, ce mot-clé permet à {{Glossary("user agent", "l'agent utilisateur")}} de modifier l'espace entre les caractères afin de justifier le texte.
- {{CSSxRef("&lt;length&gt;")}}
  - : Définit un espace supplémentaire entre les caractères _en plus_ de l'espace par défaut entre les caractères. Les valeurs peuvent être négatives, mais il peut exister des limites propres à chaque implémentation. Les agents utilisateur ne peuvent pas augmenter ou diminuer davantage l'espace entre les caractères afin de justifier le texte.

## Accessibilité

Utiliser une valeur trop grande (positive ou négative) pour `letter-spacing` rendra les mots illisibles. Si une valeur positive trop importante est utilisée, les lettres seront trop éloignées les unes des autres et on ne pourra pas distinguer les mots. Si une valeur négative trop faible est employée, les lettres se chevaucheront et on ne pourra pas lire le texte.

L'espacement doit être déterminé au cas par cas car chaque famille de polices utilise des caractères de largeurs différentes. Il n'existe pas de valeur unique qui permette de s'assurer que, quelle que soit la police utilisée, le texte soit lisible.

- [Explications de MDN sur les WCAG, règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.8 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Problèmes d'internationalisation

Certaines langues écrites ne doivent pas avoir d'espacement entre les lettres. Par exemple, les langues utilisant l'alphabet arabe attendent que les lettres restent visuellement connectées, comme dans l'exemple suivant. Appliquer un espacement entre les lettres rendra le texte visuellement incorrect.

> <p lang="ar" dir="rtl">شسيبتنمك</p>

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir l'espacement des lettres

#### HTML

```html
<p class="normal">Et voici l'interlettre</p>
<p class="large-em">Et voici l'interlettre</p>
<p class="tres-large-em">Et voici l'interlettre</p>
<p class="court-em">Et voici l'interlettre</p>
<p class="large-px">Et voici l'interlettre</p>
```

#### CSS

```css
.normal {
  letter-spacing: normal;
}
.large-em {
  letter-spacing: 0.4em;
}
.tres-large-em {
  letter-spacing: 1em;
}
.court-em {
  letter-spacing: -0.05em;
}
.large-px {
  letter-spacing: 6px;
}
```

#### Résultat

{{EmbedLiveSample("Définir l'espacement des lettres", 440, 185)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-kerning")}}
- La propriété {{CSSxRef("word-spacing")}}
- L'attribut SVG {{SVGAttr("letter-spacing")}}
