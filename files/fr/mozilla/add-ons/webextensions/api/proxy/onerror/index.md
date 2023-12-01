---
title: proxy.onProxyError
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onError
---

{{AddonSidebar()}}

Lancé en cas d'erreur lors de l'évaluation du fichier PAC ou l'écouteur `onRequest`.

L'erreur peut être déclenchée en lançant ou renvoyant une valeur invalide dans le gestionnaire d'événements proxy.onRequest.

## Syntaxe

```js
browser.proxy.onError.addListener(listener);
browser.proxy.onError.removeListener(listener);
browser.proxy.onError.hasListener(listener);
```

Les événements ont trois fonctions :

- `addListener(listener)`
  - : Ajoute un écouteur à cet événement.
- `removeListener(listener)`
  - : Arrêtez d'écouter cet événement. L'argument `listener` est l'écouteur à supprimer.
- `hasListener(listener)`
  - : Vérifiez si l'`écouteur` est enregistré pour cet événement. Renvoie `true` s'il écoute, sinon `false`.

## Syntaxe addListener

### Paramètres

- `callback`

  - : Fonction qui sera appelée lorsque cet événement se produit. La fonction recevra les arguments suivants :

    - `newState`
      - : `Object`. Un objet [Error](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Error) représentant l'erreur.

{{WebExtExamples}}

## Compatibilité des navigateurs

{{Compat}}
