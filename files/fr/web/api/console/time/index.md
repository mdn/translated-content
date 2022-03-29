---
title: console.time
slug: Web/API/Console/time
tags:
  - API
  - DOM
  - Développement
  - Méthode
  - Web
  - console
  - débogage
translation_of: Web/API/Console/time
---
{{APIRef("Console API")}}

Chronomètre une opération. Chaque "timer" doit avoir un nom unique. Il peut y avoir jusqu'à 10000 "timers" sur une même page. En appelant {{ domxref("console.timeEnd()") }} avec le même nom, le navigateur affichera le temps d'execution en millisecondes dans la console.

Voir [Timers](/fr/docs/Web/API/console#Timers) dans la documentation de {{ domxref("console") }} pour plus de details et d'exemples.

## Syntaxe

    console.time(label);

## Paramètres

- `label`
  - : Nom qui identifiera le nouveau "timer". Il faut utiliser le même nom pour {{ domxref("console.timeEnd()") }} pour arrêter le "timer" et afficher le temps dans la console.

## Spécification

| Spécification                                                            | Statut                           | Commentaire         |
| ------------------------------------------------------------------------ | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#time", "console.time()")}} | {{Spec2("Console API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Console.time")}}

## Voir aussi

- {{ domxref("console.timeEnd()") }}
- [Opera Dragonfly documentation: Console](http://www.opera.com/dragonfly/documentation/console/)
