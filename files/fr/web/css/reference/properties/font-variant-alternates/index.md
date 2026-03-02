---
title: font-variant-alternates
slug: Web/CSS/Reference/Properties/font-variant-alternates
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-variant-alternates`** contrôle l'utilisation des glyphes alternatifs. Ces glyphes alternatifs peuvent être référencés par des noms alternatifs définis dans {{CSSxRef("@font-feature-values")}}.

La règle {{CSSxRef("@font-feature-values")}} permet d'associer, pour une police donnée, un nom lisible par l'humain à un indice numérique qui contrôle une fonctionnalité OpenType particulière. Pour les fonctionnalités qui sélectionnent des glyphes alternatifs (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` ou `annotation`), la propriété `font-variant-alternates` peut alors référencer le nom lisible afin d'appliquer la fonctionnalité associée.

Cela permet aux règles CSS d'activer des glyphes alternatifs sans avoir à connaître les valeurs d'index spécifiques qu'une police utilise pour les contrôler.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-variant-alternates: normal;
font-variant-alternates: historical-forms;

/* Valeurs avec une notation fonctionnelle */
font-variant-alternates: stylistic(identifiant-utilisateur);
font-variant-alternates: styleset(identifiant-utilisateur);
font-variant-alternates: character-variant(identifiant-utilisateur);
font-variant-alternates: swash(identifiant-utilisateur);
font-variant-alternates: ornaments(identifiant-utilisateur);
font-variant-alternates: annotation(identifiant-utilisateur);
font-variant-alternates: swash(ident1) annotation(ident2);

/* Valeurs globales */
font-variant-alternates: inherit;
font-variant-alternates: initial;
font-variant-alternates: revert;
font-variant-alternates: revert-layer;
font-variant-alternates: unset;
```

Cette propriété peut être définie selon deux formes&nbsp;:

- la première avec le mot-clé `normal`
- la seconde avec un ou plusieurs mots-clés parmi ceux listés ci-après. S'il y a plusieurs mots-clés, ils sont séparés par des espaces. Les mots-clés peuvent être dans n'importe quel ordre.

### Valeurs

- `normal`
  - : Ce mot-clé désactive l'utilisation de tels glyphes alternatifs.
- `historical-forms`
  - : Ce mot-clé active l'affichage de formes historiques, c'est-à-dire des glyphes communs par le passé qui ne sont plus utilisés aujourd'hui. Cette valeur correspond à la valeur OpenType `hist`.
- `stylistic()`
  - : Cette fonction active l'affichage de formes stylistiques alternatives. Le paramètre passé à la fonction est un nom spécifique à la fonte associée à un nombre. Elle correspond à la valeur OpenType `salt`, par exemple `salt 2`.
- `styleset()`
  - : Cette fonction active l'utilisation d'un ensemble de caractères d'un style alternatif. Le paramètre est un nom spécifique à la fonte, associé à un nombre. Elle correspond à la valeur OpenType `ssXY` (par exemple `ss02`).
- `character-variant()`
  - : Cette fonction active l'utilisation d'un ensemble de caractères stylistiques alternatifs. Elle est semblable à `styleset()` mais n'implique pas de cohérence entre les différents caractères. Avec cette valeur, les différents caractères peuvent avoir un style indépendant qui peut ne pas être cohérent. Le paramètre passé à la fonction est un nom lié à la fonte auquel est associé un nombre. Elle correspond à la valeur OpenType `cvXY` (par exemple `cv02`).
- `swash()`
  - : Cette fonction active l'affichage des glyphes [pour les lettres ornées](https://fr.wikipedia.org/wiki/Lettre_ornée). Le paramètre passé à la fonction est un nom lié à la fonte auquel est associé un nombre. Elle correspond aux valeurs OpenType `swsh` et `cswh` (par exemple `swsh 2` ou `cswh 2`).
- `ornaments()`
  - : Cette fonction active l'affichage des ornements tels que les [fleurons](<https://fr.wikipedia.org/wiki/Fleuron_(typographie)>) et autres casseaux. Le paramètre passé à la fonction est un nom lié à la fonte auquel est associé un nombre. Cette valeur correspond à la valeur OpenType `ornm` (par exemple `ornm 2`).

    > [!NOTE]
    > Afin de préserver la sémantique de la fonte, les fondeurs sont invités à ne pas créer de casseaux qui correspondent aux caractères Unicode déjà définis comme variantes d'ornement pour la puce (`U+2022`). De nombreuses fontes passent outre cette règle et perdent ainsi en qualité.

- `annotation()`
  - : Cette fonction active l'affichage des annotations (telles que les chiffres entourés ou les caractères inversés). Le paramètre est un nom lié à la fonte auquel est associé un nombre. Cette valeur correspond à la valeur OpenType `nalt` (par exemple `nalt 2`).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Activer les glyphes swash

Dans cet exemple, nous utilisons la règle `@font-feature-values` pour définir un nom pour la fonctionnalité `swash` de la police [MonteCarlo <sup>(angl.)</sup>](https://github.com/googlefonts/monte-carlo). La règle associe le nom `"fancy"` à la valeur d'index `1`.

Nous pouvons ensuite utiliser ce nom dans `font-variant-alternates` pour activer les swashs pour cette police. Cela équivaut à une ligne comme `font-feature-settings: "swsh" 1`, sauf que le CSS appliquant la fonctionnalité n'a pas besoin d'inclure, ni même de connaître, la valeur d'index nécessaire pour cette police particulière.

#### HTML

```html
<p>Une lettre ornée élégante</p>
<p class="variant">Une lettre ornée élégante</p>
```

#### CSS

```css
@font-face {
  font-family: "MonteCarlo";
  src: url("/shared-assets/fonts/monte-carlo/monte-carlo-regular.woff2");
}

@font-feature-values "MonteCarlo" {
  @swash {
    fancy: 1;
  }
}

p {
  font-family: "MonteCarlo", cursive;
  font-size: 3rem;
  margin: 0.7rem 3rem;
}

.variant {
  font-variant-alternates: swash(fancy);
}
```

#### Résultat

{{EmbedLiveSample("Activer les glyphes swash", 0, 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-variant")}}
- La propriété {{CSSxRef("font-variant-caps")}}
- La propriété {{CSSxRef("font-variant-east-asian")}}
- La propriété {{CSSxRef("font-variant-emoji")}}
- La propriété {{CSSxRef("font-variant-ligatures")}}
- La propriété {{CSSxRef("font-variant-numeric")}}
- La propriété {{CSSxRef("font-variant-position")}}
- La règle {{CSSxRef("@font-feature-values")}}
- La propriété {{CSSxRef("font-feature-settings")}}
