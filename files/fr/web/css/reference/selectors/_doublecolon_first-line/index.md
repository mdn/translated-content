---
title: ::first-line
slug: Web/CSS/Reference/Selectors/::first-line
original_slug: Web/CSS/::first-line
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::first-line`** applique la décoration à la première ligne d'un élément. La quantité de texte sur la première ligne dépend de nombreux facteurs, comme la largeur des éléments ou du document, mais aussi de la taille du texte. Comme tous les pseudo-éléments, les sélecteurs contenant `::first-line` ne ciblent pas un élément HTML réel.

{{InteractiveExample("Démonstration CSS&nbsp;: ::first-line", "tabbed-shorter")}}

```css interactive-example
p::first-line {
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: underline;
}
```

```html interactive-example
<p>
  Dans les eaux chaudes des océans du monde entier, vous pouvez être témoin d'un
  spectacle étrange&nbsp;: un poisson bondissant hors de l'eau et planant à des
  dizaines de mètres avant de retourner dans les profondeurs de l'océan. Les
  premiers marins méditerranéens pensaient que ces poissons volants revenaient
  sur le rivage la nuit pour dormir et ont donc appelé cette famille de poissons
  marins Exocoetidae.
</p>
```

Les effets de `::first-line` sont limités par la longueur et le contenu de la première ligne de texte dans l'élément. La longueur de la première ligne dépend de nombreux facteurs, notamment la largeur de l'élément, la largeur du document et la taille de la police du texte. `::first-line` n'a aucun effet lorsque le premier enfant de l'élément, qui serait la première partie de la première ligne, est un élément de bloc en ligne, tel qu'un tableau en ligne.

> [!NOTE]
> Le standard [Sélecteurs de Niveau 3 <sup>(angl.)</sup>](https://drafts.csswg.org/selectors-3/#first-line) a introduit la notation à double deux-points (`::`) pour distinguer les [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) des [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) à deux points simples (`:`). Les navigateurs acceptent à la fois `::first-line` et `:first-line`, qui a été introduit dans CSS2.

Aux fins de {{CSSXref("background")}}, le pseudo-élément `::first-line` est comme un élément de niveau en ligne, ce qui signifie que dans une première ligne justifiée à gauche, l'arrière-plan peut ne pas s'étendre jusqu'à la marge droite.

## Propriétés autorisées

Seul un petit sous-ensemble de propriétés CSS peut être utilisé avec le pseudo-élément `::first-line`&nbsp;:

- Toutes les propriétés liées à la police&nbsp;: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}} et {{Cssxref("font-family")}}
- Toutes les propriétés liées à l'arrière-plan&nbsp;: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}}, {{cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}} et {{cssxref("background-blend-mode")}}
- La propriété {{cssxref("color")}}
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}} et {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}} et {{cssxref("vertical-align")}}.

## Syntaxe

```css
::first-line {
  /* ... */
}
```

## Exemples

### Mise en forme de la première ligne d'un paragraphe

#### HTML

```html
<p>
  Les styles ne seront appliqués qu'à la première ligne de ce paragraphe.
  Ensuite, tout le texte sera formaté normalement. Vous voyez ce que je veux
  dire&nbsp;?
</p>

<span>
  La première ligne de ce texte ne bénéficiera pas d'un style particulier, car
  il ne s'agit pas d'un élément de niveau bloc.
</span>
```

#### CSS

```css hidden
* {
  font-size: 20px;
  font-family: sans-serif;
}
```

```css
::first-line {
  color: blue;
  font-weight: bold;

  /* AVERTISSEMENT : NE PAS UTILISER CES ÉLÉMENTS */
  /* De nombreuses propriétés ne sont pas valides dans les pseudo-éléments
     ::first-line */
  margin-left: 20px;
  text-indent: 20px;
}
```

### Résultat

{{EmbedLiveSample('mise_en_forme_de_la_première_ligne_dun_paragraphe', 350, 130)}}

### Mise en forme de la première ligne d'un élément de texte SVG

Dans cet exemple, nous stylisons la première ligne d'un élément SVG {{SVGElement("text")}} en utilisant le pseudo-élément `::first-line`.

> [!NOTE]
> Au moment de la rédaction, cette fonctionnalité a un [support limité](#compatibilité_des_navigateurs).

#### HTML

```html-nolint
<svg viewBox="0 0 320 150">
  <text y="20">Voici un paragraphe en anglais
qui est divisé en plusieurs lignes
dans le code source afin qu'il puisse
être plus facilement lu et modifié
dans un éditeur de texte.
  </text>
</svg>
```

#### CSS

Dans cet exemple, nous utilisons la propriété CSS {{cssxref("white-space", "", "#lignes_multiples_dans_un_élément_de_texte_svg")}} pour faire en sorte que l'élément SVG `<text>` se divise en plusieurs lignes. Nous sélectionnons ensuite la première ligne à l'aide du pseudo-élément `::first-line`.

```css hidden
text {
  font-size: 20px;
  font-family: sans-serif;
}
```

```css
text {
  white-space: break-spaces;
}

text::first-line {
  fill: blue;
  font-weight: bold;
}
```

#### Résultat

{{EmbedLiveSample("mise_en_forme_de_la_première_ligne_dun_élément_de_texte_svg", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("::first-letter")}}
- {{cssxref("white-space")}}
