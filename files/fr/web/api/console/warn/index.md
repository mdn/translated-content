---
title: Console.warn()
slug: Web/API/Console/warn
tags:
  - API
  - DOM
  - Développement
  - Méthode
  - console
  - débogage
translation_of: Web/API/Console/warn
---
{{ APIRef("Console API") }}

Affiche un message d'avertissement dans la console web.

{{AvailableInWorkers}}

> **Note :** Dans Firefox, une icône de point d'exclamation est affichée à côté des messages d'avertissement

## Syntaxe

    console.warn(obj1 [, obj2, ..., objN]);
    console.warn(msg [, subst1, ..., substN]);

## Paramétres

- `obj1` ... `objN`
  - : Une liste d'objets JavaScript à afficher. La représentation, en chaîne de caractéres, de chacun de ces objets est affichée dans l'ordre de la liste.
- `msg`
  - : Une chaîne de caractères JavaScript contenant zéro ou plusieurs subdivisions de chaîne de caractères.
- `subst1` ... `substN`
  - : Une liste d'objets JavaScript qui remplace les chaînes de caractéres de `msg`. Cela vous donne plus de contrôle sur le format de sortie.

Voir [Outputting text to the console](/fr/docs/Web/API/console#Outputting_text_to_the_console) dans la documentation de {{ domxref("console") }} pour plus de détails.

## Spécification

| Spécification                                                            | Statut                           | Commentaire         |
| ------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#warn", "console.warn()")}} | {{Spec2("Console API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Console.warn")}}

## Voir aussi

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
