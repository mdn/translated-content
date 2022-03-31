---
title: Constructeur Intl.PluralRules()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
browser-compat: javascript.builtins.Intl.PluralRules.PluralRules
---
{{JSRef}}

Le constructeur **`Intl.PluralRules()`** permet de créer des objets [`Intl.PluralRules`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules).

## Syntaxe

```js
new Intl.PluralRules()
new Intl.PluralRules(locales)
new Intl.PluralRules(locales, options)
```

### Parameters

- `locales` {{optional_inline}}
  - : Une chaîne de caractères représentant une balise de langue BCP 47 ou un tableau de telles balises. Pour la forme générale et l'interprétation de cet argument, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_choix_de_la_locale).
- `options` {{optional_inline}}

  - : Un objet avec une ou plusieurs des propriétés suivantes&nbsp;:

    - `localeMatcher`
      - : L'algorithme de correspondance des locales à utiliser. Les valeurs possibles sont "`lookup`" et "`best fit`"&nbsp;; la valeur par défaut est "`best fit`". Pour plus d'information, voir la page [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#négociation_de_la_locale).
    - `type`

      - : Le type à utiliser. Les valeurs possibles sont&nbsp;:

        - "`cardinal`" pour les nombres cardinaux (qui indiquent une quantité de choses). C'est la valeur par défaut.
        - "`ordinal`" pour les nombres ordinaux (qui indiquent un ordre ou un classement comme "1er", "2e", "3e").

    Les propriétés suivantes appartiennent à deux groupes distincts&nbsp;: `minimumIntegerDigits`, `minimumFractionDigits`, et `maximumFractionDigits` pour le premier et `minimumSignificantDigits` et `maximumSignificantDigits` dans l'autre. Si au moins une des propriétés du second groupe est définie, le premier groupe est ignoré.

    - `minimumIntegerDigits`
      - : Le nombre minimal de chiffres à utiliser. Les valeurs possibles vont de 1 à 21&nbsp;; la valeur par défaut est 1.
    - `minimumFractionDigits`
      - : Le nombre minimal de chiffres décimaux (derrière la virgule) à utiliser. Les valeurs possibles vont de 0 à 20&nbsp;; la valeur par défaut pour les nombres normaux et les pourcentages est 0&nbsp;; la valeur par défaut pour la mise en forme des montants en devises correspond au nombre de chiffres fourni par [la liste ISO 4217 pour les devises](https://www.currency-iso.org/en/home/tables/table-a1.html) (et 2 si la liste ne fournit pas cette information).
    - `maximumFractionDigits`
      - : Le nombre maximal de chiffres décimaux (derrière la virgule) à utiliser. Les valeurs possibles vont de 0 à 20&nbsp;; la valeur par défaut pour les nombres normaux correspond au maximum entre `minimumFractionDigits` et 3&nbsp;; la valeur par défaut pour les montants en devises correspond au maximum entre `minimumFractionDigits` et au nombre de chiffres fourni par [la liste ISO 4217 pour les devises](https://www.currency-iso.org/en/home/tables/table-a1.html) (et 2 si la liste ne fournit pas cette information)&nbsp;; la valeur par défaut pour le formatage des pourcentages correspond au maximum entre `minimumFractionDigits` et 0.
    - `minimumSignificantDigits`
      - : Le nombre minimal de chiffres significatifs à utiliser. Les valeurs possibles vont de 1 à 21&nbsp;; la valeur par défaut est 1.
    - `maximumSignificantDigits`
      - : Le nombre maximal de chiffres significatifs à utiliser. Les valeurs possibles vont de 1 à 21&nbsp;; la valeur par défaut 21.

## Exemples

### Usage simple

Utilisé simplement sans fournir de locale, une chaîne de caractères formatée dans la locale par défaut et avec les options par défaut est renvoyée. Cela permet de distinguer les formes du singulier et du pluriel.

```js
var pr = new Intl.PluralRules();

pr.select(1);
// → 'one' si en anglais américain

pr.select(2);
// → 'other' si en anglais américain
```

### Utiliser options

Les résultats peuvent être personnalisés avec l'argument `options` qui possède une propriété `type` qu'on peut fixer à `ordinal`. Cela s'avère utile pour déterminer l'indicateur ordinal (par exemple en anglais où il y a des variations entre "1st", "2nd", "3rd", "4th", "42nd" et ainsi de suite).

```js
var pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

const suffixes = new Map([
  ['one',   'st'],
  ['two',   'nd'],
  ['few',   'rd'],
  ['other', 'th'],
]);
const formatOrdinals = (n) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0);   // '0th'
formatOrdinals(1);   // '1st'
formatOrdinals(2);   // '2nd'
formatOrdinals(3);   // '3rd'
formatOrdinals(4);   // '4th'
formatOrdinals(11);  // '11th'
formatOrdinals(21);  // '21st'
formatOrdinals(42);  // '42nd'
formatOrdinals(103); // '103rd'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Intl.PluralRules`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules)
- [`Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl)