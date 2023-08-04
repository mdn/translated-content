---
title: font-variant-alternates
slug: Web/CSS/font-variant-alternates
---

{{CSSRef}}

La propriété CSS **`font-variant-alternates`** contrôle l'utilisation de glyphes alternatifs. Ces glyphes peuvent être référencés par les noms définis avec la règle @ [`@font-feature-values`](/fr/docs/Web/CSS/@font-feature-values).

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

La règle @ [`@font-feature-values`](/fr/docs/Web/CSS/@font-feature-values) définit les noms associés aux valeurs OpenType pour les différentes fonctions de glyphes alternatifs (`stylistic`, `styleset`, `character-variant`, `swash`, `ornament` ou `annotation`). Ces propriétés permettent d'utiliser des noms adaptés (définis avec [`@font-feature-values`](/fr/docs/Web/CSS/@font-feature-values)) dans la feuille de styles.

## Syntaxe

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

    > **Note :** Afin de préserver la sémantique de la fonte, les fondeurs sont invités à ne pas créer de casseaux qui correspondent aux caractères Unicode déjà définis comme variantes d'ornement pour la puce (`U+2022`). De nombreuses fontes passent outre cette règle et perdent ainsi en qualité.

- `annotation()`
  - : Cette fonction active l'affichage des annotations (telles que les chiffres entourés ou les caractères inversés). Le paramètre est un nom lié à la fonte auquel est associé un nombre. Cette valeur correspond à la valeur OpenType `nalt` (par exemple `nalt 2`).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Activer l'affichage de glyphes pour les lettres ornées

#### HTML

```html
<p>MDN c'est là !</p>
<p class="variant">MDN c'est là !</p>
```

#### CSS

```css
@font-feature-values "Leitura Display Swashes" {
  @swash {
    fancy: 1;
  }
}

p {
  font-size: 1.5rem;
}

.variant {
  font-family: Leitura Display Swashes;
  font-variant-alternates: swash(fancy);
}
```

#### Résultat

> **Note :** Pour que cet exemple fonctionne, il faut avoir installé la fonte Open Type Leitura Display Swashes. Une version de test est disponible sur [fontsgeek.com](https://fontsgeek.com).

{{EmbedLiveSample('')}}

## Spécifications

Ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`font-variant`](/fr/docs/Web/CSS/font-variant)
- [`font-variant-caps`](/fr/docs/Web/CSS/font-variant-caps)
- [`font-variant-east-asian`](/fr/docs/Web/CSS/font-variant-east-asian)
- [`font-variant-ligatures`](/fr/docs/Web/CSS/font-variant-ligatures)
- [`font-variant-numeric`](/fr/docs/Web/CSS/font-variant-numeric)
- [`@font-feature-values`](/fr/docs/Web/CSS/@font-feature-values)
