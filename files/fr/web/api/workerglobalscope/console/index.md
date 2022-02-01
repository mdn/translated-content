---
title: WorkerGlobalScope.console
slug: Web/API/WorkerGlobalScope/console
tags:
  - API
  - Propriété
  - Reference
  - Web Workers
  - WorkerGlobalScope
  - lecture seule
translation_of: Web/API/WorkerGlobalScope/console
---
{{APIRef("Web Workers API")}}{{Non-standard_header}}

La propriété en lecture seule **`console`** de l'interface {{domxref("WorkerGlobalScope")}} retourne un objet {{domxref("Console")}} donnant accès à la console du navigateur pour le worker.

## Syntaxe

```js
var consoleObj = self.console;
```

### Valeur

Un objet {{domxref("Console")}}.

## Exemple

Cette propriété vous permet d'avoir accès à la console du navigateur à des fins de débogage dans un worker. Par exemple, vous pouvez appeler

```js
console.log('test');
```

dans un worker (qui est tout simplement l'équivalent de `self.console.log('test');`, car appelé dans le contexte du worker, qui peut être référencé par {{domxref("WorkerGlobalScope.self")}}), afin de retourner un message de test dans la console du navigateur.

Si vous appelez `console.log()` depuis un {{domxref("DedicatedWorkerGlobalScope")}} ou un autre contexte qui agit sur une seule fenêtre chargée, la console de l'onglet correspondant recevra le message. En revanche, si vous appelez `console.log()` depuis un {{domxref("SharedWorkerGlobalScope")}}, la console globale du navigateur recevra le message.

## Spécifications

Ne fait pas encore parti d'une spécification.

## Compatibilité des navigateurs

{{Compat("api.WorkerGlobalScope.console")}}

## Voir aussi

- {{domxref("Console")}}
- {{domxref("WorkerGlobalScope")}}
