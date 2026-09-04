---
title: Worker()
slug: Web/API/Worker/Worker
---

{{APIRef("Worker")}}

Le constructeur **`Worker()`** crée un objet {{domxref("Worker")}} qui exécute le script à l'URL spécifiée. Ce script doit obéir à la [same-origin policy](/fr/docs/Web/Security/Defenses/Same-origin_policy).

> [!NOTE]
> Il y a un désaccord entre les éditeurs de navigateur sur la question de savoir si une donnée URI relève ou non de la même origine. Bien que Gecko 10.0 et suivant accepte les données URIs, ce n'est pas le cas dans tous les autres navigateurs.

## Syntaxe

```js
var myWorker = new Worker(aURL, options);
```

### Arguments

- _aURL_
  - : Est un {{jsxref("String")}} représentant l'URL du script que le worker va exécuter. Il doit obéir à la same-origin policy.
- options {{optional_inline}}
  - : Un objet contenant des propriétés pour définir les options. Les propriétés suivantes sont valables:
    - `type`: Une {{jsxref("String")}} définissant le type de worker à créer. The valeur peuvent être `classic` ou `module`. Si cette prpriété n'est pas définie, la valeur sera `classic`.
    - `credentials`&nbsp;: une [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) définissant le type de politique d'origine à utiliser pour le _worker_. Les valeurs peuvent être `omit`, `same-origin` ou _`include`_. _Si cette propriété n'est pas définie, ou que type est défini à `classic`, la valeur sera `classic`._
    - `name`: Une {{jsxref("String")}} définissant un identifiant pour l'environment du worker {{domxref("DedicatedWorkerGlobalScope")}}, souvent utilisé pour le débogage.

### Exceptions

- `SecurityError` est levé si le document n'est pas autorisé à démarer des _workers_; par exemple si l'URL à une syntaxe invalide ou que la politique d'origine n'est pas respectée.
- `NetworkError` est levé si le type MIME du script du worker est incorect. Il doit toujours être défini à `text/javascript`.
- `SyntaxError` est levé si l'URL ne peut pas être analysée.

## Exemple

L'extrait de code suivant illustre la création d'un objet {{domxref("Worker")}} en utilisant le constructeur `Worker()` et l'usage qui peut alors en être fait :

```js
var myWorker = new Worker("worker.js");

first.onchange = function () {
  myWorker.postMessage([first.value, second.value]);
  console.log("Message envoyé au worker");
};
```

Pour un exemple complet, consultez notre [exemple basique d'un worker dédié](https://github.com/mdn/simple-web-worker) ([lancer le worker dédié](https://mdn.github.io/simple-web-worker/)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

L'interface {{domxref("Worker")}} auquel il appartient.
