---
title: Console.debug()
slug: Web/API/Console/debug
tags:
  - API
  - Développement
  - Méthodes
  - Web
  - console
  - débogage
  - outils de développement
translation_of: Web/API/Console/debug
---
{{APIRef("Console API")}}

Affiche un message dans la console web, avec le niveau de log "debug". Le message est affiché uniquement si la console est configurée pour afficher les messages de type debug.

{{AvailableInWorkers}}

## Syntaxe

    console.debug(obj1 [, obj2, ..., objN]);
    console.debug(msg [, subst1, ..., substN]);

### Paramètres

- `obj1` ... `objN`
  - : Une liste d'objets JavaScript à afficher. La représentation, en chaîne de caractères, de chacun de ces objets est affichée dans l'ordre de la liste.
- `msg`
  - : Une chaîne de caractères JavaScript contenant zéro ou plusieurs subdivisions de chaîne de caractères.
- `subst1` ... `substN`
  - : Une liste d'objets JavaScript qui remplace les chaînes de caractéres de `msg`. Cela vous donne plus de contrôle sur le format de sortie. Voir {{SectionOnPage("fr/docs/Web/API/Console", "Utiliser les caractères de substitution")}} pour une description du fonctionnement des substitutions.

Voir [Afficher du texte dans la console](/fr/docs/Web/API/console#Outputting_text_to_the_console) dans la documentation de {{domxref("console")}} pour plus de détails.

## Spécification

| Spécification                                                                | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#debug", "console.debug()")}} | {{Spec2("Console API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Console.debug")}}

## Voir aussi

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
- [MSDN: Using the F12 Tools Console to View Errors and Status](http://msdn.microsoft.com/library/gg589530)
- [Chrome Developer Tools: Using the Console](https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings)
