---
title: "Intl.PluralRules : méthode selectRange()"
short-title: selectRange()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`selectRange()`** des instances de {{JSxRef("Intl.PluralRules")}} reçoit deux valeurs et retourne une chaîne de caractères qui indique la règle de nombre à utiliser pour un formatage tenant compte de la locale.

## Syntaxe

```js-nolint
selectRange(startRange, endRange)
```

### Paramètres

- `startRange`
  - : Le nombre représentant le début de l'intervalle.
- `endRange`
  - : Le nombre représentant la fin de l'intervalle.

### Valeur de retour

Une chaîne de caractères représentant la catégorie de pluriel de l'intervalle défini.
Cela peut être l'une des valeurs `zero`, `one`, `two`, `few`, `many` ou `other`, qui sont pertinentes pour la locale dont la localisation est spécifiée dans [les règles de pluriel des langues LDML <sup>(angl.)</sup>](https://www.unicode.org/cldr/charts/43/supplemental/language_plural_rules.html).

## Description

Cette fonction sélectionne une catégorie de pluriel en fonction de la locale et des options de formatage d'un objet {{JSxRef("Intl.PluralRules")}}.

Conceptuellement, le comportement est le même que pour obtenir les règles de pluriel pour un seul nombre cardinal ou ordinal.
Les langues ont une ou plusieurs formes pour décrire les intervalles, et cette méthode retourne la forme appropriée en fonction de la locale et des options de formatage fournies.
En français, il n'y a qu'une seule forme de pluriel, comme «&nbsp;1-10 pommes&nbsp;», et la méthode retournera `other`.
D'autres langues peuvent avoir plusieurs formes.

## Exemples

### Utiliser la méthode `selectRange()`

```js
new Intl.PluralRules("sl").selectRange(102, 201); // 'few'

new Intl.PluralRules("pt").selectRange(102, 102); // 'other'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.PluralRules")}}
