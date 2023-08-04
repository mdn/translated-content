---
title: WorkerGlobalScope.dump()
slug: Web/API/WorkerGlobalScope/dump
---

{{APIRef("Web Workers API")}}

> **Attention :** Cette fonctionnalité n'est ni standard, ni en voie de standardisation. Ne l'utilisez pas pour des sites accessibles sur le Web : elle ne fonctionnera pas pour tout utilisateur. Il peut également y avoir d'importantes incompatibilités entre les implémentations et son comportement peut être modifié dans le futur.

La méthode **`dump()`** de l'interface {{domxref("WorkerGlobalScope")}} permet d'écrire des messages vers `stdout` — i.e. dans le terminal, seulement sur Firefox. C'est la même chose que {{domxref("window.dump")}} dans Firefox, mais pour les *worker*s.

## Syntaxe

```js
dump("Mon message\n");
```

### Paramètre

Une {{domxref("DOMString")}} contenant le message que vous voulez envoyer.

### Retour

Rien.

## Exemple

Pour écrire quelque chose depuis votre _worker_ vers votre terminal, vous devez d'abord ouvrir une instance de Firefox depuis votre invité de commande ou terminal. Par exemple, sous Mac OS X vous le lancer en utilisant quelque chose comme (en supposant que vous êtes dans le répertoire de l'application):

```bash
./Firefox.app/Contents/MacOS/firefox-bin -profile /tmp -no-remote
```

Maintenant allez dans `about:config` et activez la préférence `browser.dom.window.dump.enabled`.

Après, lancez un worker contenant la ligne suivante:

```js
dump("test\n");
```

Vous devriez observer le message «test» apparaître dans le terminal.

## Spécifications

Cette méthode n'apparaît dans aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

{{domxref("WorkerGlobalScope")}}
