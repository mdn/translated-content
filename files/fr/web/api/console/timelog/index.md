---
title: Console.timeLog()
slug: Web/API/console/timeLog
---

{{APIRef("Console API")}}

Affiche dans la console la valeur actuelle d'un timer précédemment appelé par {{domxref("console.time()")}}

Voir [Timers](/fr/docs/Web/API/console#Timers) dans la documentation pour des exemples et plus de détails

{{AvailableInWorkers}}

## Syntaxe

```js
console.timeLog(label);
```

### Paramètres

- `label`
  - : Le nom du timer à afficher sur la console

### Valeur de retour

Si aucun label n'est inclus

```
default: 1042ms
```

Si un `label` est inclus:

```
timer name: 1242ms
```

### Exceptions

Si aucun timer n'est en cours d'éxecution, `timeLog()` retourne l'avertissement suivant :

```
Timer “default” doesn’t exist.
```

Si le paramètre label est spécifé mais aucun timer n'y correspond :

```
Timer “timer name” doesn’t exist.
```

## Exemples

```js
console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
```

Le résultat de l'exemple ci-dessus montre le temps qu'a mis l'utilisateur à fermer la première pop-up d'alerte, puis le temps que l'utilisateur a pris pour fermer la seconde :

![](timer_output.png)

Notez que le nom du timer est à la fois affiché lorsque la valeur est affichée par `timeLog()` et lorsque le timer est arrêté

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Documentation d'Opera Dragonfly: Console](http://www.opera.com/dragonfly/documentation/console/)
