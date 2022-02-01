---
title: Intl.Locale.prototype.hourCycle
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - Locale
  - Propriété
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/hourCycle
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/hourCycle
---
{{JSRef}}

La propriété **`Intl.Locale.prototype.hourCycle`** est une propriété accessible via un accesseur qui renvoie la convention pour le format des heures utilisée par la locale courante.

## Description

Il existe deux types de conventions pour la représentation des heures : sur douze heures d'une part et sur vingt-quatre heures d'autre part. La propriété `hourCycle` permet aux développeurs de connaître la représentation utilisée par une locale donnée. À l'instar des autres données fournies par les instances de `Locale`, `hourCycle` représente une [extension Unicode](https://www.unicode.org/reports/tr35/#u_Extension) qui permet d'affiner le comportement d'une locale. Les valeurs de cette propriété/extension peuvent être :

| Clé   | Description                                                                                                                                                          |
| ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `h12` | Système horaire sur les heures 1 à 12 (correspond à la notation "h" pour les motifs de recherche). L'horloge est sur douze heures et minuit commence à 12:00 AM.     |
| `h23` | Système horaire sur les heures 0 à 23 (correspond à la notation "H" pour les motifs de recherche). L'horloge est sur vingt-quatre heures et minuit commence à 0:00.  |
| `h11` | Système horaire sur les heures 0 à 11 (correspond à la notation "K" pour les motifs de recherche). L'horloge est sur douze heures et minuit commence à 0:00 AM.      |
| `h24` | Système horaire sur les heures 1 à 24 (correspond à la notation "K" pour les motifs de recherche). L'horloge est sur vingt-quatre heures et minuit commence à 24:00. |

## Exemples

### Définir le format horaire grâce à la chaîne décrivant la locale

Il est possible de préciser la valeur d'une extension Unicode dans la chaîne de caractères représentant la locale. Pour indiquer l'extension, on ajoutera le suffixe `-u` qui indique une clé d'extension à venir, ensuite on ajoutera la clé de l'extension en question (ici `-hc`) et enfin on ajoutera la valeur souhaitée pour cette extension.

```js
let fr24hour = new Intl.Locale("fr-FR-u-hc-h23");
console.log(fr24hour.hourCycle); // Affichera "h23" dans la console
```

### Définir le format horaire grâce à un objet de configuration

Le constructeur [`Intl.Locale`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Locale "The Intl.Locale constructor is a standard built-in property of the Intl object.") permet d'utiliser un objet de configuration comme deuxième argument. Les propriétés de cet objet permettent de définir différentes extensions, y compris celle pour le format horaire. Pour cela, on indiquera la propriété `hourCycle` sur l'objet de configuration avec la valeur souhaitée et on passera cet objet au constructeur.

```js
let us12hour = new Intl.Locale("en-US-u-hc-h12");
console.log(us12hour.hourCycle); // Affichera "h12" dans la console
```

## Spécifications

| Spécification                                                                                                      | État                    | Commentaires |
| ------------------------------------------------------------------------------------------------------------------ | ----------------------- | ------------ |
| [Proposition pour `Intl.Locale`](https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.hourCycle) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.Locale.hourCycle")}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- [Spécification pour l'extension Unicode des cycles horaires](https://www.unicode.org/reports/tr35/#UnicodeHourCycleIdentifier)
