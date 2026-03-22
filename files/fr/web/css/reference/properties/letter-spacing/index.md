---
title: letter-spacing
slug: Web/CSS/Reference/Properties/letter-spacing
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`letter-spacing`** définit l'espacement entre les caractères du texte. Cette valeur s'ajoute à l'espacement naturel entre les caractères lors du rendu du texte. Des valeurs positives de `letter-spacing` écartent davantage les caractères, tandis que des valeurs négatives de `letter-spacing` rapprochent les caractères.

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
letter-spacing: 30%;
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

/* Valeurs de type <length-percentage> */
letter-spacing: 0.3em;
letter-spacing: 3px;
letter-spacing: -0.5px;
letter-spacing: 50%;

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
- {{CSSxRef("&lt;length-percentage&gt;")}}
  - : Définit un espace supplémentaire entre les caractères _en plus_ de l'espace par défaut entre les caractères. Les valeurs peuvent être négatives, mais il peut exister des limites propres à chaque implémentation. Les agents utilisateur ne peuvent pas augmenter ou diminuer davantage l'espace entre les caractères afin de justifier le texte.

    Les valeurs en pourcentage sont calculées par rapport à la largeur du caractère espace de la police appliquée au texte.

## Accessibilité

Utiliser une valeur trop grande (positive ou négative) pour `letter-spacing` rendra les mots illisibles. Si une valeur positive trop importante est utilisée, les lettres seront trop éloignées les unes des autres et on ne pourra pas distinguer les mots. Si une valeur négative trop faible est employée, les lettres peuvent se chevaucher et on ne pourra pas lire le texte.

L'espacement doit être déterminé au cas par cas car chaque famille de polices utilise des caractères de largeurs différentes. Il n'existe pas de valeur unique qui permette de s'assurer que, quelle que soit la police utilisée, le texte soit lisible.

- [Explications de MDN sur les WCAG, règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.8 | W3C Understanding WCAG 2.0 <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Problèmes d'internationalisation

Certaines langues écrites ne doivent pas avoir d'espacement entre les lettres. Par exemple, les langues utilisant l'alphabet arabe attendent que les lettres restent visuellement connectées, comme dans l'exemple suivant. Appliquer un espacement entre les lettres peut rendre le texte visuellement incorrect.

```html live-sample___i18n-sample
<p lang="ar" dir="rtl">شسيبتنمك</p>
```

```css hidden live-sample___i18n-sample
p {
  font-size: 3em;
  margin-inline-start: 5px;
}
```

{{EmbedLiveSample("i18n-sample", "100%", 180)}}

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir l'espacement des lettres avec des valeurs de longueur

Cet exemple montre plusieurs paragraphes avec différentes valeurs de `letter-spacing` définies en longueur, ce qui permet de les comparer.

#### HTML

```html live-sample___length-letter-spacing
<p class="normal">Et voici l'interlettre</p>
<p class="large-em">Et voici l'interlettre</p>
<p class="tres-large-em">Et voici l'interlettre</p>
<p class="court-em">Et voici l'interlettre</p>
<p class="large-px">Et voici l'interlettre</p>
```

#### CSS

Notre CSS applique une valeur différente de `letter-spacing` à chaque paragraphe.

```css live-sample___length-letter-spacing
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

{{EmbedLiveSample("length-letter-spacing", "100%", 200)}}

### Comparer l'espacement des lettres défini avec des longueurs et des pourcentages

Cet exemple montre que les valeurs de `letter-spacing` en pourcentage sont utiles pour la mise en page réactive du texte.

Le code affiche plusieurs paragraphes ayant le même `letter-spacing` appliqué à du texte avec une taille de police croissante. Nous fournissons une fonctionnalité permettant de basculer entre une valeur de `letter-spacing` en longueur et une valeur en pourcentage, afin que vous puissiez observer les qualités réactives de l'utilisation d'une valeur en pourcentage.

#### HTML

Le HTML contient plusieurs éléments HTML {{HTMLElement("p")}} contenant du texte, ainsi qu'un [`<input type="checkbox">`](/fr/docs/Web/HTML/Reference/Elements/input/checkbox) que nous utiliserons pour basculer entre une valeur de `letter-spacing` en longueur et une valeur en pourcentage.

```html live-sample___percentage-versus-length
<p class="x-small">X-small font-size (0.8em)</p>
<p class="small">Small font-size (1.3em)</p>
<p class="medium">Medium font-size (2em)</p>
<p class="large">Large font-size (3em)</p>
<p class="x-large">X-Large (3.5em)</p>

<form>
  <label for="ls-toggle">
    Basculer <code>letter-spacing</code> (désactivé&nbsp;: <code>8px</code>,
    activé&nbsp;: <code>12%</code>)
  </label>
  <input type="checkbox" id="ls-toggle" />
</form>
```

#### CSS

Notre CSS commence par appliquer des valeurs de {{CSSxRef("font-size")}} croissantes à chaque paragraphe successif&nbsp;:

```css hidden live-sample___percentage-versus-length
html {
  font-family: Arial, Helvetica, sans-serif;
}
```

```css live-sample___percentage-versus-length
.x-small {
  font-size: 0.8em;
}

.small {
  font-size: 1.3em;
}

.medium {
  font-size: 2em;
}

.large {
  font-size: 3em;
}

.x-large {
  font-size: 3.5em;
}
```

Nous appliquons une valeur de `letter-spacing` de `8px` à tous les paragraphes par défaut. Lorsque la case à cocher est cochée, nous changeons cependant la valeur de `letter-spacing` à `12%`&nbsp;:

```css live-sample___percentage-versus-length
p {
  letter-spacing: 8px;
}

p:has(~ form > input:checked) {
  letter-spacing: 12%;
}
```

#### Résultat

Le rendu final ressemble à ceci&nbsp;:

{{EmbedLiveSample("percentage-versus-length", "100%", 460)}}

Tout d'abord, notez comment la valeur initiale de l'espacement des lettres en longueur semble correcte lorsqu'elle est appliquée aux tailles de police plus grandes, mais qu'elle ne rend pas bien sur les tailles de police plus petites. Maintenant, cochez la case, et notez comment l'espacement des lettres en pourcentage semble approprié sur toutes les lignes, car il s'adapte à la taille de la police.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("font-kerning")}}
- La propriété {{CSSxRef("word-spacing")}}
- L'attribut SVG {{SVGAttr("letter-spacing")}}
