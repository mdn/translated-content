---
title: Intl.PluralRules.prototype.resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Méthode
  - PluralRules
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/resolvedOptions
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/PluralRules/resolvedOptions
---
{{JSRef}}

La méthode **`Intl.PluralRules.prototype.resolvedOptions()`** renvoie un nouvel objet dont les propriétés reflètent la locale et les options de formatage relatives aux règles de nombre calculées lors de l'initialisation de l'objet {{jsxref("PluralRules")}}.

## Syntaxe

```js
pluralRule.resolvedOptions()
```

### Valeur de retour

Un nouvel objet dont les propriétés reflètent la locale et les options de formatage relatives aux règles de nombre calculées lors de l'initialisation de l'objet {{jsxref("PluralRules")}}.

## Description

L'objet produit possède les propriétés suivantes :

- `locale`
  - : La balise de langue BCP 47 pour la locale réellement utilisée. Si une extension Unicode a été demandée dans la balise de langue BCP 47 ayant menée à cette locale, les paires clé/valeur qui ont été demandées et qui sont prises en charge dans cette locale sont incluses dans l'objet `locale`.
- `pluralCategories`
  - : Un tableau {{jsxref("Array")}} des règles de nombre utilisée pour la langue donnée.
- `type`
  - : Le type de règle utilisée (`cardinal` ou `ordinal`).

Seul l'un de ces deux groupes de propriétés est inclus :

- `minimumIntegerDigits`, `minimumFractionDigits`, `maximumFractionDigits`
  - : Les valeurs fournies pour ces propriétés via l'argument `options` ou les valeurs par défaut. Ces propriétés sont uniquement présentes si aucunes des propriétés `minimumSignificantDigits` ou `maximumSignificantDigits` n'a été fournie dans l'argument `options`.
- `minimumSignificantDigits`, `maximumSignificantDigits`
  - : Les valeurs fournies par ces propriétés via l'argument `options` ou les valeurs par défaut. Ces propriétés sont uniquement présentes si au moins l'une d'entre elles a été fournie dans l'argument `options`.

## Exemples

### Utiliser `resolvedOptions()`

```js
var de = new Intl.PluralRules('de-DE');
var usedOptions = de.resolvedOptions();

usedOptions.locale;                // "de-DE"
usedOptions.maximumFractionDigits; // 3
usedOptions.minimumFractionDigits; // 0
usedOptions.minimumIntegerDigits;  // 1
usedOptions.pluralCategories;      // Array [ "one", "other" ]
usedOptions.type;                  // "cardinal"
```

## Spécifications

| Spécification                                                                                                         | État      | Commentaires         |
| --------------------------------------------------------------------------------------------------------------------- | --------- | -------------------- |
| [Brouillon pour les règles de nombre avec `Intl`](https://rawgit.com/caridy/intl-plural-rules-spec/master/index.html) | Brouillon | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.PluralRules.resolvedOptions")}}

## Voir aussi

- {{jsxref("PluralRules", "Intl.PluralRules")}}
