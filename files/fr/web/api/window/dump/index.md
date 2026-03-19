---
title: "Window : méthode dump()"
short-title: dump()
slug: Web/API/Window/dump
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef}}{{Non-standard_Header}}

La méthode **`Window.dump()`** de l'interface {{DOMxRef("Window")}} permet d'afficher des messages sur la sortie standard (`stdout`) du navigateur. Si le navigateur a été démarré depuis un terminal, la sortie produite par `dump()` apparaîtra dans le terminal.

La sortie produite par `dump()` n'est _pas_ envoyée vers la console des outils de développement du navigateur. Pour afficher des messages dans la console des outils de développement, il faudra utiliser {{DOMxRef("console/log_static", "console.log()")}}.

## Syntaxe

```js-nolint
dump(message)
```

### Paramètres

- `message`
  - : Une chaîne de caractères contenant le message à afficher.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}
