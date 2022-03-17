---
title: console.error()
slug: Web/API/Console/error
tags:
  - API
  - DOM
  - Développement
  - Méthodes
  - Web
  - console
  - débogage
translation_of: Web/API/Console/error
---
{{APIRef("Console API")}}

Affiche un message d'erreur dans la console du navigateur.

{{AvailableInWorkers}}

## Syntaxe

    console.error(obj1 [, obj2, ..., objN]);
    console.error(msg [, subst1, ..., substN]);
    console.exception(obj1 [, obj2, ..., objN]);
    console.exception(msg [, subst1, ..., substN]);

> **Note :** `console.exception()` est un alias de `console.error()`; ils sont fonctionnellement identiques.

### Paramètres

- `obj1` ... `objN`
  - : Une liste d'objets JavaScript à afficher. La représentation, en chaîne de caractéres, de chacun de ces objets est affichée dans l'ordre de la liste.
- `msg`
  - : Une chaîne de caractères JavaScript contenant zéro ou plusieurs subdivisions de chaîne de caractères.
- `subst1` ... `substN`
  - : Une liste d'objets JavaScript qui remplace les chaînes de caractéres de `msg`. Cela vous donne plus de contrôle sur le format de sortie.

Voir [Afficher du texte dans la console](/fr/docs/Web/API/console#Outputting_text_to_the_console) dans la documentation de  {{domxref("console")}} pour plus de détails.

## Spécification

| Specification                                                                | Status                           | Comment             |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#error", "console.error()")}} | {{Spec2("Console API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Console.error")}}

## Voir aussi

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings)
