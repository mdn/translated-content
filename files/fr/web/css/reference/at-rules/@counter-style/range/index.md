---
title: range
slug: Web/CSS/Reference/At-rules/@counter-style/range
original_slug: Web/CSS/@counter-style/range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`range`** de la règle {{cssxref("@counter-style")}} permet à l'auteur·ice de spécifier une ou plusieurs plages de valeurs du compteur pour lesquelles le style est appliqué lors de la définition de styles de compteur personnalisés. Lorsque le descripteur `range` est inclus, le compteur défini ne sera utilisé que pour les valeurs comprises dans les plages définies. Si la valeur du compteur est en dehors de la plage spécifiée, le style de repli sera utilisé pour construire la représentation de ce marqueur.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
range: auto;

/* Valeurs de plage */
range: 2 5;
range: infinite 10;
range: 6 infinite;
range: infinite infinite;

/* Plusieurs valeurs de plage */
range:
  2 5,
  8 10;
range:
  infinite 6,
  10 infinite;
```

### Valeurs

La valeur est une liste de plages séparées par des virgules, chacune comprenant une limite inférieure et supérieure ou le mot-clé `auto`.

- `auto`
  - : L'ensemble des nombres représentables par le compteur {{cssxref("@counter-style/system","system")}}. Ces valeurs de plage dépendent du système de compteur&nbsp;:
    - Pour les systèmes `cyclic`, `numeric` et `fixed`, la plage va de `infinite` négatif à `infinite` positif.
    - Pour les systèmes `alphabetic` et `symbolic`, la plage va de `1` à `infinite` positif.
    - Pour les systèmes `additive`, la plage va de `0` à `infinite` positif.
    - Lorsqu'on utilise `extend` pour étendre un système, la plage correspond à ce que `auto` produirait pour le système étendu, y compris les extensions de styles prédéfinis complexes, comme certains styles de compteurs japonais, coréens, chinois et éthiopiens.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Chaque plage dans la liste séparée par des virgules comprend deux valeurs, chacune étant soit un {{cssxref("integer")}} soit le mot-clé `infinite`. Si `infinite` est utilisé comme première valeur d'une plage, cela représente l'infini négatif&nbsp;; s'il est utilisé comme seconde valeur, cela représente l'infini positif. La première valeur de chaque plage est la borne inférieure et la seconde la borne supérieure, incluses. Si la borne inférieure de l'une des plages de la liste est supérieure à la borne supérieure, le descripteur `range` entier est invalide et sera ignoré.

## Description

La valeur du descripteur `range` peut être soit `auto`, soit une liste séparée par des virgules de plages avec bornes inférieure et supérieure, spécifiées à l'aide d'entiers négatifs ou positifs ou du mot-clé `infinite`.

### Comprendre `auto`

Lorsque la valeur est définie sur `auto`, la plage est la plage par défaut du système de compteur. Si le `system` est `cyclic`, `numeric` ou `fixed`, la plage va de l'infini négatif à l'infini positif. Si le `system` est `alphabetic` ou `symbolic`, la plage va de `1` à l'infini positif. Pour `system: additive`, `auto` donne la plage de `0` à l'infini positif.

Lorsqu'on étend un compteur, si `range` est défini sur `auto`, la valeur de plage sera celle du `system` du compteur étendu, et non la valeur `range`, le cas échéant, de ce compteur. Par exemple, si le compteur «&nbsp;B&nbsp;» a le `system: extends A` avec un compteur de type `alphabetic`, définir `range: auto` sur «&nbsp;B&nbsp;» donne à «&nbsp;B&nbsp;» la plage de `1` à `infinite`. Il s'agit de la plage du système `alphabetic`, pas nécessairement de la plage définie dans le style de compteur «&nbsp;A&nbsp;». Avec `range: auto` sur «&nbsp;B&nbsp;», la plage est celle par défaut du système `alphabetic`, et non la valeur `range` définie dans la liste des descripteurs du compteur A.

### Explication de `infinite`

Lorsque la plage est spécifiée par des entiers (plutôt que par `auto`), la valeur `infinite` peut être utilisée pour désigner l'infini. Si <i lang="en">infinite</i> est spécifié comme première valeur d'une plage, il est interprété comme l'infini négatif. S'il est utilisé comme borne supérieure, la seconde valeur de la paire, il est pris comme l'infini positif.

### Liste de plages

La valeur de `range` est soit `auto` (voir ci-dessus), soit une liste séparée par des virgules d'une ou plusieurs plages. La plage du style de compteur est l'union de toutes les plages définies dans la liste.

Chaque plage de la liste prend deux valeurs. Ces valeurs sont soit un {{cssxref("integer")}}, soit le mot-clé `infinite`. La première valeur est la _borne inférieure_, incluse. La seconde valeur est la _borne supérieure_, incluse. Pour deux valeurs entières, la valeur la plus basse doit être en premier. Si la borne inférieure de l'une des plages de la liste est supérieure à la borne supérieure, le descripteur `range` entier est invalide et sera ignoré. Le mot-clé `infinite` n'invalide pas la plage, car sa position détermine sa valeur&nbsp;: soit l'infini négatif (borne inférieure), soit l'infini positif (borne supérieure).

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définir un style de compteur sur une plage

#### HTML

```html
<ul class="list">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li>Six</li>
  <li>Sept</li>
  <li>Huit</li>
  <li>Neuf</li>
  <li>Dix</li>
</ul>
```

#### CSS

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}

.list {
  list-style: range-multi-example;
}
```

#### Résultat

{{EmbedLiveSample('définir_un_style_de_compteur_sur_une_plage')}}

La première plage est la liste des plages qui inclut 2, 3 et 4. La seconde inclut 7, 8 et 9. La plage est l'union de ces deux plages, soit 2, 3, 4, 7, 8 et 9.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{cssxref("@counter-style")}}&nbsp;: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}} et {{cssxref("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- La fonction {{cssxref("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
