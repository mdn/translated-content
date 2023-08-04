---
title: SharedWorker()
slug: Web/API/SharedWorker/SharedWorker
l10n:
  sourceCommit: abaa8b38ddf68a2b468e2b46e56b277db25f16cf
---

{{APIRef("Web Workers API")}}

Le constructeur **`SharedWorker()`** crée un objet [`SharedWorker`](/fr/docs/Web/API/SharedWorker) qui exécute le script depuis l'URL indiquée. Le script doit respecter la [politique de même origine](/fr/docs/Web/Security/Same-origin_policy).

> **Note :** Il y a désaccord entre les éditeurs de navigateur pour savoir si une URL de données partage la même origine. Bien que Gecko 10.0 et les versions supérieures acceptent des URL de données, ce n'est pas le cas de tous les autres navigateurs.

## Syntaxe

```js
new SharedWorker(uneURL);
new SharedWorker(uneURL, nom);
new SharedWorker(uneURL, options);
```

### Paramètres

- `uneURL`
  - : Une chaîne de caractères représentant l'URL du script que le <i lang="en">worker</i> exécutera. Cette URL doit respecter la politique de même origine.
- `name` {{optional_inline}}
  - : Une chaîne de caractères indiquant un nom permettant d'identifier l'objet [`SharedWorkerGlobalScope`](/fr/docs/Web/API/SharedWorkerGlobalScope) qui représente la portée du <i lang="en">worker</i>. Elle est principalement utile à des fins de débogage.
- `options` {{optional_inline}}
  - : Un objet contenant des propriétés d'options qui peuvent être définies lors de la création de l'instance. Les propriétés utilisables sont&nbsp;:
    - `type`
      - : Une chaîne de caractères indiquant le type de <i lang="en">worker</i> à créer. La valeur peut être `classic` ou `module`. Si aucune valeur n'est fournie, c'est la valeur `classic` qui est utilisée par défaut.
    - `credentials`
      - : Une chaîne de caractères indiquant le type d'informations d'authentification à utiliser pour le <i lang="en">worker</i>. La valeur peut être `omit`,
        `same-origin`, ou `include`. Si aucune valeur n'est indiquée ou si le type vaut `classic`, la valeur par défaut utilisée est `omit` (aucune information d'authentification n'est nécessaire).
    - `name`
      - : Une chaîne de caractères indiquant un nom permettant d'identifier l'objet [`SharedWorkerGlobalScope`](/fr/docs/Web/API/SharedWorkerGlobalScope) qui représente la portée du <i lang="en">worker</i>. Elle est principalement utile à des fins de débogage.

### Exceptions

- `SecurityError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Déclenchée si le document n'est pas autorisé à démarrer des <i lang="en">workers</i>, par exemple si la syntaxe de l'URL est invalide ou si cette dernière ne respecte pas la règle de même origine.
- `NetworkError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Déclenchée si le type MIME du script du <i lang="en">worker</i> est incorrect. Ce devrait _toujours_ être `text/javascript` (pour des raisons historiques, [d'autres types MIME JavaScript](/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types#textjavascript) peuvent être acceptés).
- `SyntaxError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Déclenchée si `uneURL` ne peut pas être analysée.

## Exemples

L'extrait de code suivant montre la création d'un objet [`SharedWorker`](/fr/docs/Web/API/SharedWorker) en utilisant le constructeur `SharedWorker()` et l'usage qui en est fait.

```js
const monWorker = new SharedWorker("worker.js");

monWorker.port.start();

premier.onchange = function () {
  monWorker.port.postMessage([premier.value, second.value]);
  console.log("Message envoyé depuis le worker");
};

second.onchange = function () {
  monWorker.port.postMessage([premier.value, second.value]);
  console.log("Message envoyé depuis le worker");
};

monWorker.port.onmessage = function (e) {
  result1.textContent = e.data;
  console.log("Message reçu du worker");
};
```

Pour un exemple complet, voir [un exemple simple de <i lang="en">worker</i> partagé](https://github.com/mdn/dom-examples/tree/master/web-workers/simple-shared-worker) ([exécuter le <i lang="en">worker</i> correspondant](https://mdn.github.io/dom-examples/web-workers/simple-shared-worker/)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`SharedWorker`](/fr/docs/Web/API/SharedWorker) à laquelle ce constructeur appartient.
