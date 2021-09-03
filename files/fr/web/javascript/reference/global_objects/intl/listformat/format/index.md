---
title: Intl​.ListFormat.prototype​.format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
tags:
  - Internationalisation
  - Intl
  - JavaScript
  - ListFormat
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/ListFormat/format
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/ListFormat/format
---
{{JSRef}}

La méthode **`format()`** renvoie une chaîne de caractères représentant la liste passée en argument, mise en forme selon la langue choisie (lors de la construction de l'objet `Intl.ListFormat`).

{{EmbedInteractiveExample("pages/js/intl-listformat.html")}}

## Description

La méthode **`format()`** renvoie une chaîne de caractères qui a été formatée en fonction des paramètres fournis à l'objet `Intl.ListFormat`. Les paramètres `locales` et `options` permettent de personnaliser le comportement de `format()` et de gérer différentes conventions linguistiques au sein d'une application, notamment pour la mise en forme des listes.

## Syntaxe

    listFormat.format([list]);

### Paramètres

- **`list`**
  - : Un objet itérable (ex. un tableau / {{jsxref("Array")}}).

### Valeur de retour

Une chaîne de caractères représentant les éléments de la liste et mise en forme en fonction de la langue souhaitée (grâce au paramètre `locales` passé au constructeur `Intl.ListFormat`).

## Spécifications

| Spécification                                                                                                                                 | État                    | Commentaires |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------ |
| [Proposition pour `Intl.ListFormat.prototype.format`](https://tc39.github.io/proposal-intl-list-format/#sec-Intl.ListFormat.prototype.format) | Proposition de niveau 3 |              |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.ListFormat.format")}}

## Voir aussi

- {{jsxref("ListFormat", "Intl.ListFormat")}}
