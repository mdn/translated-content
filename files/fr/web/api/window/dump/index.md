---
title: Window.dump()
slug: Web/API/Window/dump
---

{{ApiRef}} {{Non-standard_header}}

La méthode **`Window.dump()`** permet d'afficher des messages sur la sortie standard (`stdout`) du navigateur. Si le navigateur a été démarré depuis un terminal, la sortie produite par `dump()` apparaîtra dans le terminal.

La sortie produite par `dump()` n'est _pas_ envoyée vers la console des outils de développement du navigateur. Pour afficher des messages dans la console des outils de développement, il faudra utiliser [`console.log()`](/fr/docs/Web/API/Console/log).

## Syntaxe

```js
dump(message);
```

### Paramètres

- `message`
  - : Une chaîne de caractères contenant le message à afficher.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}
