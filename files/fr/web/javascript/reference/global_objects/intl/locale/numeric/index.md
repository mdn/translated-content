---
title: Intl.Locale.prototype.numeric
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Locale
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/numeric
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/numeric
---
{{JSRef}}

La propriété **`Intl.Locale.prototype.numeric`** est une propriété fournie par un accesseur et qui indique si la locale possède une collation spécifique pour les caractères numériques (la collation étant la méthode qui permet d'ordonner des chaînes de caractères entre elles).

## Description

À l'instar de {{jsxref("Locale.caseFirst", "Intl.Locale.caseFirst")}}, `numeric` représente une modification des règles de collation utilisée par la locale. `numeric` est un booléen (`true` ou `false`). Lorsque cette propriété vaut `false`, il n'y a pas de gestion particulière des chiffres et si cette propriété vaut `true`, cela indique que les caractères numériques sont pris en compte lors de la collation des chaînes. Ainsi, les séquences de chiffres décimaux seront comparés comme des nombres. Ainsi, la chaîne de caractères `"A-21"` sera considérée inférieure à `"A-123"`.

## Exemples

### Définir `numeric` grâce à la chaîne de description de la locale

Selon [la spécification Unicode sur les chaînes de caractères décrivant les locales](https://www.unicode.org/reports/tr35/), les valeurs de `numeric` sont associées à la clé `kn`. Pour utiliser cette clé dans la chaîne de description de la locale (le premier argument de [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale "The Intl.Locale constructor is a standard built-in property of the Intl object.")), après la chaîne de base, on pourra ajouter un suffixe avec `"-u"` afin d'indiquer la présence d'une extension, puis `"-kn"` afin de préciser l'extension en question et enfin la valeur souhaitée pour cette extension. Si on veut que `numeric` soit `true`, il suffit d'ajouter la clé `kn`. Pour indiquer la valeur `false`, il faudra explicitement ajouter `"-false"`.

```js
let numericViaStr = new Intl.Locale("fr-Latn-FR-u-kn-false");
console.log(numericStr.numeric);
// Affichera "false" dans la console
```

### Définir `numeric` via l'objet de configuration de l'instance

Le constructeur [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale "The Intl.Locale constructor is a standard built-in property of the Intl object.") possède un deuxième argument, optionnel, qui est un objet permettant de configurer la locale. Les propriétés de cet objet sont utilisées comme extensions pour la locale ; les clés des propriétés sont les noms des extensions et leurs valeurs sont celles utilisées pour chaque extension. On peut donc utiliser la propriété `numeric` sur cet objet afin de définir le système de numération à utiliser pour cette locale.

```js
let numericViaObj= new Intl.Locale("en-Latn-US", {numeric: true});
console.log(us12hour.numeric);
// Affichera "true" dans la console
```

## Spécifications

| Spécification                                                                                                    | État                    | Commentaires |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `Intl.Locale`](https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.numeric) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.Locale.numeric")}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
