---
title: Constructeur Intl.PluralRules()
short-title: Intl.PluralRules()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/PluralRules
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Le constructeur **`Intl.PluralRules()`** permet de créer des objets {{JSxRef("Intl.PluralRules")}}.

## Syntaxe

```js-nolint
new Intl.PluralRules()
new Intl.PluralRules(locales)
new Intl.PluralRules(locales, options)
```

> [!NOTE]
> `Intl.PluralRules()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` génère une {{JSxRef("TypeError")}}.

### Paramètres

- `locales` {{Optional_Inline}}
  - : Une chaîne de caractères avec une {{Glossary("BCP 47 language tag", "balise de langue BCP 47")}} ou une instance de {{JSxRef("Intl.Locale")}}, ou un tableau de tels identifiants de locale. La locale par défaut de l'environnement d'exécution est utilisée lorsque `undefined` est passé ou lorsqu'aucun des identifiants de locale définis n'est pris en charge. Pour la forme générale et l'interprétation de l'argument `locales`, voir [la description du paramètre sur la page principale de `Intl`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#argument_locales).
- `options` {{Optional_Inline}}
  - : Un objet contenant les propriétés suivantes, dans l'ordre dans lequel elles sont récupérées (toutes sont optionnelles)&nbsp;:
    - `localeMatcher`
      - : L'algorithme de correspondance de locale à utiliser. Les valeurs possibles sont `"lookup"` et `"best fit"`&nbsp;; la valeur par défaut est `"best fit"`. Pour plus d'informations sur cette option, voir [Identification et négociation de la locale](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl#identification_et_négociation_de_locale).
    - `type`
      - : Le type à utiliser. Les valeurs possibles sont&nbsp;:
        - `"cardinal"` (par défaut)
          - : Pour les nombres cardinaux (se référant à la quantité de choses).
        - `"ordinal"`
          - : Pour les nombres ordinaux (se référant à l'ordre ou au classement des choses, par exemple «&nbsp;1er&nbsp;», «&nbsp;2e&nbsp;», «&nbsp;3e&nbsp;» en français).

    `Intl.PluralRules` prend également en charge les [options de chiffres](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options_de_chiffres) de `Intl.NumberFormat()` (voir `Intl.NumberFormat()` pour plus de détails)&nbsp;:
    - `minimumIntegerDigits`
    - `minimumFractionDigits`
    - `maximumFractionDigits`
    - `minimumSignificantDigits`
    - `maximumSignificantDigits`
    - `roundingPriority`
    - `roundingIncrement`
    - `roundingMode`

    Ces options sont interprétées comme si l'option `notation` de `Intl.NumberFormat` était `"standard"` et `style` était `"decimal"`.

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée si `locales` ou `options` contiennent des valeurs invalides.

## Exemples

### Utilisation simple

Utilisé simplement sans fournir de locale, une chaîne de caractères formatée dans la locale par défaut et avec les options par défaut est retournée.
Cela permet de distinguer les formes du singulier et du pluriel, par exemple «&nbsp;chien&nbsp;» et «&nbsp;chiens&nbsp;».

```js
const pr = new Intl.PluralRules();

pr.select(0); // 'autre' si en anglais américain

pr.select(1); // 'un' si en anglais américain

pr.select(2); // 'autre' si en anglais américain
```

### Utiliser `options`

Les résultats peuvent être personnalisés avec l'argument `options` qui possède une propriété `type` qu'on peut fixer à `ordinal`. Cela s'avère utile pour déterminer l'indicateur ordinal (par exemple en anglais où il y a des variations entre «&nbsp;1st&nbsp;», «&nbsp;2nd&nbsp;», «&nbsp;3rd&nbsp;», «&nbsp;4th&nbsp;», «&nbsp;42nd&nbsp;» et ainsi de suite).

```js
const pr = new Intl.PluralRules("en-US", { type: "ordinal" });

const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

formatOrdinals(0); // '0th'
formatOrdinals(1); // '1st'
formatOrdinals(2); // '2nd'
formatOrdinals(3); // '3rd'
formatOrdinals(4); // '4th'
formatOrdinals(11); // '11th'
formatOrdinals(21); // '21st'
formatOrdinals(42); // '42nd'
formatOrdinals(103); // '103rd'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.PluralRules")}}
- L'objet {{JSxRef("Intl")}}
