---
title: word-spacing
slug: Web/CSS/Reference/Properties/word-spacing
l10n:
  sourceCommit: 09d8ff096be97b28ea415fc4c68fb1cff0ff8af9
---

La propriété [CSS](/fr/docs/Web/CSS) **`word-spacing`** définit la règle d'espacement utilisée entre les balises et entre les mots.

{{InteractiveExample("Démonstration CSS&nbsp;: word-spacing")}}

```css interactive-example-choice
word-spacing: normal;
```

```css interactive-example-choice
word-spacing: 1rem;
```

```css interactive-example-choice
word-spacing: 4px;
```

```css interactive-example-choice
word-spacing: 50%;
```

```css interactive-example-choice
word-spacing: -0.4ch;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    Il y avait tant de boue dans les rues qu'on aurait dit que les eaux venaient
    à peine de se retirer de la surface de la terre, et il n'aurait pas été
    étonnant de croiser un mégalosaure d'une douzaine de mètres de long, se
    dandinant comme un lézard gigantesque en haut de Holborn Hill.
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
/* Avec un mot-clé */
word-spacing: normal;

/* Valeurs de type <length> */
word-spacing: 3px;
word-spacing: 0.3em;
word-spacing: 65%;
word-spacing: -1ex;

/* Valeurs globales */
word-spacing: inherit;
word-spacing: initial;
word-spacing: revert;
word-spacing: revert-layer;
word-spacing: unset;
```

### Valeurs

- `normal`
  - : L'espacement normal entre les mots, tel qu'il est défini par la police courante et/ou le navigateur.
- {{CSSxRef("length-percentage")}}
  - : Définit un espacement supplémentaire en plus de l'espacement intrinsèque entre les mots défini par la police. Les valeurs en pourcentage sont calculées par rapport à la taille de la police ({{CSSxRef("font-size")}}) du texte.

## Accessibilité

Utiliser des valeurs trop importantes (positives ou négatives) pour `word-spacing` rend le texte illisible. Si l'espacement utilisé est trop grand, la structure visuelle ne permettra plus d'identifier une phrase. Si l'espacement est trop petit, les mots se chevaucheront et on ne pourra plus distinguer le début et la fin de chaque mot.

La bonne valeur à utiliser pour `word-spacing` doit être déterminée au cas par cas, en fonction du type de police utilisé et de la largeur de celle-ci.

- [Comprendre le WCAG sur le MDN, explication de la règle 1.4](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#règle_1.4_—_faciliter_la_perception_visuelle_et_auditive_du_contenu_notamment_en_séparant_le_premier_plan_de_larrière-plan)
- [Comprendre le critère de succès 1.4.8 | Explications du WCAG 2.0 du W3C <sup>(angl.)</sup>](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### Utilisation simple

Cet exemple démontre l'utilisation de base de `word-spacing`.

#### HTML

Notre HTML contient deux paragraphes de texte&nbsp;:

```html live-sample___basic-usage
<p id="ligne1">Voici le texte de la ligne 1</p>
<p id="ligne2">Et voilà celui de la ligne 2</p>
```

#### CSS

Notre CSS applique un `word-spacing` différent à chaque paragraphe&nbsp;:

```css live-sample___basic-usage
#ligne1 {
  word-spacing: 15px;
}

#ligne2 {
  word-spacing: 5em;
}
```

### Résultat

L'exemple s'affiche comme suit&nbsp;:

{{EmbedLiveSample("live-sample___basic-usage", "100%", 100)}}

### Comparer l'espacement des mots défini avec une longueur et un pourcentage

Cet exemple démontre que les valeurs de `word-spacing` en pourcentage sont utiles pour la mise en page réactive du texte.

Le code affiche plusieurs paragraphes ayant le même `word-spacing` appliqué à un texte avec une taille de police croissante. Nous fournissons une fonctionnalité pour basculer entre une valeur de `word-spacing` en longueur et une valeur en pourcentage, afin que vous puissiez observer les qualités réactives de l'utilisation d'une valeur en pourcentage.

#### HTML

Le HTML contient plusieurs éléments HTML {{HTMLElement("p")}} contenant du texte, ainsi qu'un `{{HTMLElement("input/checkbox", "&lt;input type=\"checkbox\"&gt;")}}` que nous utiliserons pour basculer entre une valeur de `word-spacing` en longueur et une valeur en pourcentage.

```html live-sample___percentage-versus-length
<p class="x-small">X-small font-size (0.8em)</p>
<p class="small">Small font-size (1.3em)</p>
<p class="medium">Medium font-size (2em)</p>
<p class="large">Large font-size (3em)</p>
<p class="x-large">X-Large (3.5em)</p>

<form>
  <label for="ls-toggle">
    Basculer <code>word-spacing</code> (off: <code>10px</code>, on:
    <code>15%</code>)
  </label>
  <input type="checkbox" id="ls-toggle" />
</form>
```

#### CSS

Notre CSS commence par appliquer des valeurs de {{CSSxRef("font-size")}} croissantes à chaque paragraphe successif&nbsp;:

```css hidden live-sample___percentage-versus-length
html {
  font-family: "Arial", sans-serif;
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

Nous appliquons une valeur de `word-spacing` de `10px` à tous les paragraphes par défaut. Lorsque la case à cocher est cochée, nous changeons cependant la valeur de `word-spacing` à `15%`&nbsp;:

```css live-sample___percentage-versus-length
p {
  word-spacing: 10px;
}

p:has(~ form > input:checked) {
  word-spacing: 15%;
}
```

#### Résultat

Le résultat rendu est le suivant&nbsp;:

{{EmbedLiveSample("percentage-versus-length", "100%", 460)}}

Tout d'abord, notez comment la valeur initiale de l'espacement des mots en longueur semble correcte lorsqu'elle est appliquée aux tailles de police plus grandes, mais elle ne rend pas bien sur les tailles de police plus petites. Maintenant, cochez la case, et notez comment l'espacement des mots en pourcentage semble approprié sur toutes les lignes, car il s'adapte à la taille de la police.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("letter-spacing")}}
- L'attribut SVG {{SVGAttr("word-spacing")}}
