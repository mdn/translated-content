---
title: Console.info()
slug: Web/API/Console/info
tags:
  - API
  - Debugging
  - Method
  - NeedsBrowserCompatibility
  - web console
translation_of: Web/API/Console/info
---
{{ APIRef("Console API") }}{{Non-standard_header}}

Affiche un message informatif dans la console du navigateur. Dans Firefox et Chrome, une petit icône de _i_ s'affiche devant le message.

{{AvailableInWorkers}}

## Syntaxe

    console.info(obj1 [, obj2, ..., objN]);
    console.info(msg [, subst1, ..., substN]);

### Paramètres

- `obj1` ... `objN`
  - : Une liste d'objets JavaScript à afficher. La représentation, en chaîne de caractéres, de chacun de ces objets est affichée dans l'ordre de la liste.
- `msg`
  - : Une chaîne de caractères JavaScript contenant zéro ou plusieurs subdivisions de chaîne de caractères.
- `subst1` ... `substN`
  - : Une liste d'objets JavaScript qui remplace les chaînes de caractéres de `msg`. Cela vous donne plus de contrôle sur le format de sortie.

Voir [Afficher du texte sur la console](/fr/docs/Web/API/Console#Outputting_text_to_the_console) dans la documentation de {{ domxref("console") }} pour plus de détails.

## Spécification

| Spécification                                                            | Statut                           | Commentaire          |
| ------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("Console API", "#info", "console.info()")}} | {{Spec2("Console API")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Console.info")}}

## Voir aussi

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
