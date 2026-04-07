---
title: text-spacing-trim
slug: Web/CSS/Reference/Properties/text-spacing-trim
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`text-spacing-trim`** contrôle l'espacement interne défini sur les caractères de ponctuation chinois/japonais/coréens (CJK) entre les caractères adjacents (approche) et au début ou à la fin des lignes de texte.

## Syntaxe

```css
/* Valeur avec un mot-clé */
text-spacing-trim: normal;
text-spacing-trim: space-all;
text-spacing-trim: space-first;
text-spacing-trim: trim-start;

/* Valeurs globales */
text-spacing-trim: inherit;
text-spacing-trim: initial;
text-spacing-trim: revert;
text-spacing-trim: revert-layer;
text-spacing-trim: unset;
```

### Valeurs

- `<spacing-trim>`
  - : Définit les différentes options de réduction de l'espacement. Les valeurs disponibles sont&nbsp;:
    - `normal`
      - : Définit les caractères de ponctuation CJK à pleine largeur au début de chaque ligne. Définit les caractères de ponctuation CJK à pleine largeur à la fin de chaque ligne, ou à demi-largeur s'ils ne tiennent pas sur la ligne avant la justification. [Réduit l'espacement](#réduire_lespace_entre_les_ponctuations_en_pleine_largeur) entre les caractères de ponctuation.
    - `space-all`
      - : Tous les caractères de ponctuation CJK à pleine largeur sont définis à pleine largeur.
    - `space-first`
      - : Se comporte comme `normal`, sauf que les caractères de ponctuation CJK à pleine largeur ouvrants sont définis à pleine largeur au début de la première ligne du conteneur de bloc de texte, et au début de chaque ligne suivante après un saut de ligne explicite tel qu'un caractère de nouvelle ligne.
    - `trim-start`
      - : Se comporte comme `normal`, sauf que les caractères de ponctuation CJK à pleine largeur ouvrants sont définis à demi-largeur au début de chaque ligne.

    > [!NOTE]
    > Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text) définit également les valeurs `trim-both`, `trim-all` et `auto`. Cependant, elles ne sont actuellement implémentées dans aucun navigateur.

## Description

La propriété `text-spacing-trim` applique un espacement/kerning aux caractères de ponctuation CJK pour produire une typographie visuellement agréable, comme défini par les [Exigences pour la mise en page du texte japonais <sup>(angl.)</sup>](https://w3c.github.io/jlreq/) (JLREQ) et les [Exigences pour la mise en page du texte chinois <sup>(angl.)</sup>](https://www.w3.org/International/clreq/) (CLREQ).

De nombreux caractères de ponctuation CJK comportent un espacement interne au glyphe. Par exemple, le point CJK et la parenthèse fermante CJK ont généralement un espacement interne sur leur côté droit, afin de leur donner une [mesure d'avance](/fr/docs/Glossary/Advance_measure) constante et cohérente avec les autres caractères idéographiques. Cependant, lorsqu'ils se suivent, cet espacement interne peut devenir excessif.

`text-spacing-trim` peut être utilisé pour ajuster cet espacement excessif entre caractères adjacents (crénage) et au début ou à la fin des lignes de texte. D'une manière générale&nbsp;:

- Si un caractère de ponctuation en pleine largeur est défini comme pleine largeur, il possède un espacement interne des deux côtés et occupe la largeur complète d'un idéographe.
- Si un caractère de ponctuation en pleine largeur est défini comme demi-largeur, il possède un espacement interne d'un seul côté, et son autre côté est collé au début (pour les caractères ouvrants) ou à la fin (pour les caractères fermants). Les caractères en demi-largeur font généralement la moitié de la largeur d'un idéographe.

> [!NOTE]
> Pour éviter le risque d'un crénage excessif, les polices doivent disposer de la fonctionnalité OpenType Alternate Half Widths (`halt`), de la fonctionnalité Contextual Half-width Spacing (`chws`), ou des deux. Si la police ne possède aucune de ces fonctionnalités, `text-spacing-trim` est désactivée.

### Réduire l'espace entre les ponctuations en pleine largeur

Lorsque des paires de caractères de ponctuation sont adjacentes, l'espace entre eux est réduit selon les règles suivantes&nbsp;:

- Définir un caractère de ponctuation ouvrant en pleine largeur comme demi-largeur si le caractère précédent est un caractère de ponctuation ouvrant en pleine largeur, un point médian en pleine largeur, un espace idéographique (U+3000), un caractère de ponctuation fermant en pleine largeur d'une taille de police équivalente ou supérieure, ou un caractère appartenant à [la catégorie Unicode générale "Open punctuation" Ps <sup>(angl.)</sup>](https://www.compart.com/en/unicode/category/Ps). Sinon, le définir en pleine largeur.
- Définir un caractère de ponctuation fermant en pleine largeur comme demi-largeur si le caractère suivant est un caractère de ponctuation fermant en pleine largeur, un point médian en pleine largeur, un espace idéographique (U+3000), un caractère de ponctuation ouvrant en pleine largeur d'une taille de police supérieure, ou un caractère appartenant à [la catégorie Unicode générale "Close punctuation" (Pe) <sup>(angl.)</sup>](https://www.compart.com/en/unicode/category/Pe). Sinon, le définir en pleine largeur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparaison des valeurs de `text-spacing-trim`

Cet exemple compare l'effet de quatre propriétés `text-spacing-trim` différentes, en les appliquant à quatre paragraphes identiques afin que vous puissiez voir les différences visuelles entre chacune.

#### HTML

```html
<main>
  <div id="normal">
    <h2>normal</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="space-all">
    <h2>space-all</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="space-first">
    <h2>space-first</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
  <div id="trim-start">
    <h2>trim-start</h2>
    <p>
      （東）、【「（東）」】。<br />
      「東」「東」「東」東東東「東」。
    </p>
  </div>
</main>
```

#### CSS

```css
main {
  font-family:
    "Yu Gothic", "YuGothic", "Noto Sans JP", "Hiragino Sans",
    "Hiragino Kaku Gothic ProN", sans-serif;
  display: grid;
  gap: 0.5em;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin: 0 auto;
}
h2 {
  font-size: 80%;
  margin: 0;
}
p {
  font-size: 20px;
  border: 1px solid blue;
  margin: 0;
}
#normal {
  text-spacing-trim: normal;
  grid-column: 1;
  grid-row: 1;
}
#space-all {
  text-spacing-trim: space-all;
  grid-column: 2;
  grid-row: 1;
}
#space-first {
  text-spacing-trim: space-first;
  grid-column: 1;
  grid-row: 2;
}
#trim-start {
  text-spacing-trim: trim-start;
  grid-column: 2;
  grid-row: 2;
}
```

#### Résultat

{{EmbedLiveSample("Comparaison des valeurs de `text-spacing-trim`", "100%",320)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-autospace")}}
- Les unités [`ic`](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#local_font-relative_lengths) et [`ric`](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#root_font-relative_lengths) units
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
