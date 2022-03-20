---
title: Console.groupCollapsed()
slug: Web/API/Console/groupCollapsed
tags:
  - API
  - DOM
  - Développement
  - Méthode
  - Reference
  - Web
  - console
  - débogage
translation_of: Web/API/Console/groupCollapsed
---
{{APIRef("Console API")}}

Crée un nouveau groupe intégré dans la console Web. Contrairement à {{domxref ("console.group ()")}}, le nouveau groupe est créé réduit. L'utilisateur devra utiliser le bouton de divulgation à côté pour le développer, en révélant les entrées créées dans le groupe.

Appellez {{domxref("console.groupEnd()")}} pour revenir au groupe parent.

Voir [Using groups in the console](/fr/docs/Web/API/console#Using_groups_in_the_console) dans la documentation de {{domxref("console")}}  pour plus de détails et des exemples.

{{AvailableInWorkers}}

## Syntaxe

    console.groupCollapsed([label]);

## Paramètres

- `label`
  - : Étiquette pour le groupe. Facultatif.

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#groupcollapsed", "console.groupCollapsed()")}} | {{Spec2("Console API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Console.groupCollapsed")}}

## Voir aussi

- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
