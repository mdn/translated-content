---
title: Console.timeLog()
slug: Web/API/Console/timeLog
tags:
  - API
  - Console Web
  - DOM
  - Développement Web
  - Méthode
  - console
  - débogage
translation_of: Web/API/Console/timeLog
---
{{APIRef("Console API")}}

Affiche dans la console la valeur actuelle d'un timer précédemment appelé par {{domxref("console.time()")}}

Voir [Timers](/en-US/docs/Web/API/console#Timers) dans la documentation pour des exemples et plus de détails

{{AvailableInWorkers}}

## Syntaxe

    console.timeLog(label);

### Paramètres

- `label`
  - : Le nom du timer à afficher sur la console

### Valeur de retour

Si aucun label n'est inclus

    default: 1042ms

Si un `label` est inclus:

    timer name: 1242ms

### Exceptions

Si aucun timer n'est en cours d'éxecution, `timeLog()` retourne l'avertissement suivant :

    Timer “default” doesn’t exist.

Si le paramètre label est spécifé mais aucun timer n'y correspond :

     Timer “timer name” doesn’t exist.

## Exemples

    console.time("answer time");
    alert("Click to continue");
    console.timeLog("answer time");
    alert("Do a bunch of other stuff...");
    console.timeEnd("answer time");

Le résultat de l'exemple ci-dessus montre le temps qu'a mis l'utilisateur à fermer la première pop-up d'alerte, puis le temps que l'utilisateur a pris pour fermer la seconde :

![](timer_output.png)

Notez que le nom du timer est à la fois affiché lorsque la valeur est affichée par `timeLog()` et lorsque le timer est arrêté

## Spécifications

| Spécification                                                                    | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#timelog", "console.timeLog()")}} | {{Spec2("Console API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Console.timeLog")}}

## Voir aussi

- [Documentation d'Opera Dragonfly: Console](http://www.opera.com/dragonfly/documentation/console/)
