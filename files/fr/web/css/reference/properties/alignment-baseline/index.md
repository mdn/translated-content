---
title: alignment-baseline
slug: Web/CSS/Reference/Properties/alignment-baseline
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`alignment-baseline`** définit la [ligne de base](/fr/docs/Glossary/Baseline/Typography) spécifique utilisée pour aligner le texte de la boîte et ses contenus en ligne. **L'alignement sur la ligne de base** désigne la relation entre les lignes de base de plusieurs sujets d'alignement au sein d'un même contexte d'alignement. Lors d'un alignement sur la ligne de base, la valeur de la propriété `alignment-baseline` définit quelle ligne de base de la boîte est alignée sur la ligne de base correspondante de son contexte d'alignement.

> [!NOTE]
> La propriété `alignment-baseline` n'a d'effet que sur les boîtes en ligne, les éléments flex, les éléments de grille, les cellules de tableau, ainsi que sur les éléments SVG {{SVGElement("text")}}, {{SVGElement("textPath")}} et {{SVGElement("tspan")}}. Si elle est présente, elle remplace l'attribut {{SVGAttr("alignment-baseline")}} de la forme.

Dans un contexte de formatage en ligne, les fragments de boîte en ligne et les glyphes partagent un contexte d'alignement établi par leur fragment de boîte en ligne parent le long de son axe en ligne. Dans la mise en page de texte SVG, ces valeurs définissent plutôt la ligne de base qui est alignée sur la position de texte courante du SVG.

## Syntaxe

```css
/* Valeur initiale */
alignment-baseline: baseline;

/* Valeurs par mot-clé */
alignment-baseline: alphabetic;
alignment-baseline: central;
alignment-baseline: ideographic;
alignment-baseline: mathematical;
alignment-baseline: middle;
alignment-baseline: text-bottom;
alignment-baseline: text-top;

/* Valeurs cartographiées */
alignment-baseline: text-before-edge; /* text-top */
alignment-baseline: text-after-edge; /* text-bottom */

/* Valeurs obsolètes  */
alignment-baseline: auto;
alignment-baseline: before-edge;
alignment-baseline: after-edge;
alignment-baseline: hanging;

/* Valeurs globales */
alignment-baseline: inherit;
alignment-baseline: initial;
alignment-baseline: revert;
alignment-baseline: revert-layer;
alignment-baseline: unset;
```

### Valeurs

- `baseline`
  - : Utilise la valeur {{CSSxRef("dominant-baseline")}} du parent.

- `alphabetic`
  - : Utilisé pour l'écriture latine, cyrillique, grecque et de nombreux autres systèmes d'écriture&nbsp;; met en correspondance la ligne de base alphabétique de la boîte avec celle de son parent, correspondant au bas de la plupart des caractères, mais pas de tous.

- `central`
  - : Met en correspondance la ligne de base centrale de la boîte avec la ligne de base centrale de son parent, correspondant à la ligne de base centrale idéographique, à mi-chemin entre les lignes de base idéographiques inférieure et supérieure.

- `ideographic`
  - : Met en correspondance la ligne de base inférieure du visage des caractères idéographiques de la boîte avec celle de son parent, la table de lignes de base dérivée étant construite à l'aide de la table de lignes de base idéographiques de la police.

- `mathematical`
  - : Met en correspondance la ligne de base mathématique de la boîte avec celle de son parent, correspondant à la ligne de base centrale autour de laquelle sont conçus les caractères mathématiques.

- `middle`
  - : Aligne le point médian vertical de la boîte sur la ligne de base de la boîte parente plus la moitié de la hauteur en x de celle-ci. Utilise les lignes de base centrée en x&nbsp;; sauf sous [`text-orientation: upright;`](/fr/docs/Web/CSS/Reference/Properties/text-orientation) (où les lignes de base alphabétique et de hauteur en x sont essentiellement dépourvues de sens), auquel cas elle utilise la ligne de base `central`.

- `text-bottom`
  - : Met en correspondance le bas de la boîte avec le haut de la zone de contenu du parent, en utilisant le bord inférieur de la boîte de contenu d'un élément en ligne.

- `text-top`
  - : Met en correspondance le haut de la boîte avec le haut de la zone de contenu du parent, en utilisant le bord supérieur de la boîte de contenu d'un élément en ligne.

> [!NOTE]
> Dans SVG2, les mots-clés `auto`, `before-edge`, et `after-edge` ont été dépréciés et `text-before-edge` est un alias de `text-top`, et `text-after-edge` est un alias de `text-bottom`. Ces mots-clés ne doivent pas être utilisés dans le cadre de la propriété de raccourci {{CSSxRef("vertical-align")}}. Les navigateurs supportent `auto` comme synonyme de `baseline` et `hanging`, dans lesquels le point d'alignement de l'objet aligné est aligné avec la ligne de base «&nbsp;suspendue&nbsp;» de l'élément de contenu textuel parent, mais aucun de ces deux mots-clés ne fait partie de la spécification.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

```html
<svg viewBox="0 0 450 160" width="700" height="200">
  <text x="50" y="20">alphabetic</text>
  <text x="50" y="60">central</text>
  <text x="50" y="100">hanging</text>
  <text x="50" y="140">ideographic</text>
  <text x="250" y="20">mathematical</text>
  <text x="250" y="60">middle</text>
  <text x="250" y="100">text-bottom</text>
  <text x="250" y="140">text-top</text>
  <path
    d="M   0,20 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0
       m -400,40 l 400,0"
    stroke="grey" />
  <text x="0" y="20" fill="red">baseline</text>
  <text x="0" y="60" fill="red">baseline</text>
  <text x="0" y="100" fill="red">baseline</text>
  <text x="0" y="140" fill="red">baseline</text>
</svg>
```

```css
text {
  font-size: 20px;
  alignment-baseline: baseline;
}
text:nth-of-type(1) {
  alignment-baseline: alphabetic;
}
text:nth-of-type(2) {
  alignment-baseline: central;
}
text:nth-of-type(3) {
  alignment-baseline: hanging;
}
text:nth-of-type(4) {
  alignment-baseline: ideographic;
}
text:nth-of-type(5) {
  alignment-baseline: mathematical;
}
text:nth-of-type(6) {
  alignment-baseline: middle;
}
text:nth-of-type(7) {
  alignment-baseline: text-bottom;
}
text:nth-of-type(8) {
  alignment-baseline: text-top;
}
```

{{EmbedLiveSample("Exemples", 750, 220)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("dominant-baseline")}}
- L'attribut SVG {{SVGAttr("alignment-baseline")}}
- Le module [de mise en page en ligne CSS](/fr/docs/Web/CSS/Guides/Inline_layout)
- Le module [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment)
