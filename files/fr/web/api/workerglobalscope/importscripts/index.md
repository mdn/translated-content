---
title: WorkerGlobalScope.importScripts()
slug: Web/API/WorkerGlobalScope/importScripts
translation_of: Web/API/WorkerGlobalScope/importScripts
---
{{APIRef("Web Workers API")}}

La méthode **`importScripts()`** de l'interface synchrome {{domxref("WorkerGlobalScope")}} importe un ou plusieurs scripts dans l'environnement du worker.

## Syntaxe

```js
self.importScripts('foo.js');
self.importScripts('foo.js', 'bar.js', ...);
```

### Paramètres

Une liste d'objets {{domxref("DOMString")}} séparés par des virgules et représentant les scripts à importer.

### Valeur de retour

Rien.

### Exceptions

| Exception      | Description                                                                                |
| -------------- | ------------------------------------------------------------------------------------------ |
| `NetworkError` | Importer un script qui n'est pas servi avec un type MIME valide. (i.e. `text/javascript`). |

## Exemple

Si vous disposez d'un code présent dans un script indépendant appelé `foo.js` que vous souhaitez utiliser à l'intérieur de worker.js, vous pouvez l'importer de la façon suivante:

```js
importScripts('foo.js');
```

`importScripts()` et `self.importScripts()` sont effectivement équivalentes — les deux expressions correspondent à la façon d'appeler `importScripts()` au sein du contexte local du worker.

## Spécifications

| Spécification                                                                                                        | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', '#dom-workerglobalscope-importscripts', 'importScripts()')}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.WorkerGlobalScope.importScripts")}}

## Voir aussi

{{domxref("WorkerGlobalScope")}}
