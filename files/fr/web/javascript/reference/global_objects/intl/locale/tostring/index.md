---
title: Intl.Locale.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
tags:
  - Intl
  - JavaScript
  - Locale
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Locale/toString
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Locale/toString
---
{{JSRef}}

La méthode **`Intl.Locale.prototype.toString()`** renvoie [l'identifiant de locale complet](https://www.unicode.org/reports/tr35/#Unicode_locale_identifier) pour la locale courante.

{{EmbedInteractiveExample("pages/js/intl-locale-prototype-tostring.html")}}

## Syntaxe

```js
locale.toString()
```

### Valeur de retour

La chaîne de caractères représentant l'identifiant complet de la locale.

## Description

Une instance de `Locale` est une représentation JavaScript d'une locale au sens Unicode. Les informations décrivant une locale donnée (la langue, le système d'écriture, le type de calendrier, etc.) peuvent être encodées en une chaîne de caractères qui est l'identifiant de la locale. Lorsqu'on appelle la méthode `toString()` sur une instance de `Locale`, on obtiendra l'identifiant complet de la locale.

## Exemples

```js
let maLocale = new Intl.Locale("fr-Latn-FR", {hourCycle: "h24", calendar: "gregory"});
console.log(maLocale.baseName); // Affiche "fr-Latn-FR"
console.log(maLocale.toString()); // Affiche "fr-Latn-FR-u-ca-gregory-hc-h24"
```

## Spécifications

| Spécification                                                                                                                          | État                    | Commentaires |
| -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `Intl.Locale.prototype.toString()`](https://tc39.github.io/proposal-intl-locale/#sec-Intl.Locale.prototype.toString) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.Locale.toString")}}

## Voir aussi

- {{jsxref("Locale", "Intl.Locale")}}
- {{jsxref("Locale/baseName", "Intl.Locale.baseName")}}
