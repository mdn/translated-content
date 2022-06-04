---
title: Worker()
slug: Web/API/Worker/Worker
tags:
  - API
  - Reference
translation_of: Web/API/Worker/Worker
---
{{APIRef("Worker")}}

Le constructeur **`Worker()`** crée un objet {{domxref("Worker")}} qui exécute le script à l'URL spécifiée. Ce script doit obéir à la [same-origin policy](/en/Same_origin_policy_for_JavaScript).

> **Note :** il y a un désaccord entre les éditeurs de navigateur sur la question de savoir si une donnée URI relève ou non de la même origine. Bien que Gecko 10.0 {{ geckoRelease("10.0") }} et suivant accepte les données URIs, ce n'est pas le cas dans tous les autres navigateurs.

## Syntaxe

```js
var myWorker = new Worker(aURL, options);
```

### Arguments

- _aURL_
  - : Est un {{domxref("DOMString")}} représentant l'URL du script que le worker va exécuter. Il doit obéir à la same-origin policy.
- options {{optional_inline}}

  - : Un objet contenant des propriétés pour définir les options. Les propriétés suivantes sont valables:

    - `type`: Une {{domxref("DOMString")}} définissant le type de worker à créer. The valeur peuvent être `classic` ou `module`. Si cette prpriété n'est pas définie, la valeur sera `classic`.
    - `credentials`&nbsp;: une [`DOMString`](/fr/docs/Web/API/DOMString) définissant le type de politique d'origine à utiliser pour le _worker_. Les valeurs peuvent être `omit`, `same-origin` ou *`include`*. *Si cette propriété n'est pas définie, ou que type est défini à `classic`, la valeur sera `classic`.*
    - `name`: Une {{domxref("DOMString")}} définissant un identifiant pour l'environment du worker {{domxref("DedicatedWorkerGlobalScope")}}, souvent utilisé pour le débogage.

### Exceptions

- `SecurityError` est levé si le document n'est pas autorisé à démarer des _workers_; par exemple si l'URL à une syntaxe invalide ou que la politique d'origine n'est pas respectée.
- `NetworkError` est levé si le type MIME du script du worker est incorect. Il doit toujours être défini à `text/javascript`.
- `SyntaxError` est levé si l'URL ne peut pas être analysée.

## Exemple

L'extrait de code suivant illustre la création d'un objet {{domxref("Worker")}} en utilisant le constructeur `Worker()` et l'usage qui peut alors en être fait :

```js
var myWorker = new Worker("worker.js");

first.onchange = function() {
  myWorker.postMessage([first.value,second.value]);
  console.log('Message envoyé au worker');
}
```

Pour un exemple complet, consultez notre [exemple basique d'un worker dédié](https://github.com/mdn/simple-web-worker) ([lancer le worker dédié](https://mdn.github.io/simple-web-worker/)).

## Spécifications

| Spécification                                                            | Statut                           | Commentaire |
| ------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "#dom-worker", "Worker()")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Worker.Worker")}}

> **Note :** Un navigateur peut indiquer avoir un support complet de `Worker()` même s'il ne supporte pas les fichiers worker écrit comme des modules. À partir du premier août 2019, aucun navigateur n'est connu pour avoir un support en production des fichiers _worker_ écrit comme des modules. Sans ces suppports, les fichiers _workers_ écrit sous forme de module et les modules utilisés dans les workers doivent être transpilés ou convertis en non-module pour être utilisables.

## Voir aussi

L'interface {{domxref("Worker")}} auquel il appartient.
