---
title: DedicatedWorkerGlobalScope.close()
slug: Web/API/DedicatedWorkerGlobalScope/close
---

{{APIRef("Web Workers API")}}

La méthode **`close()`** de l'interface {{domxref("DedicatedWorkerGlobalScope")}} ferme toutes les tâches placées dans la boucle de l'évènement `DedicatedWorkerGlobalScope`, fermant effectivement cette portée particulière.

## Syntaxe

```js
self.close();
```

## Exemple

Si vous souhaitez fermer votre instance de travail depuis l'intérieur du worker, vous pouvez appeler ce qui suit :

```js
close();
```

`close()` et `self.close()` sont effectivement équivalents — les deux représentent une instruction `close()` qui est appelée de l'intérieur de la portée interne du worker.

> **Note :** Il y a une autre façon d'arrêter le worker depuis le fil principal : la méthode {{domxref("Worker.terminate")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

{{domxref("DedicatedWorkerGlobalScope")}}
