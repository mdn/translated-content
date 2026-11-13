---
title: "XMLHttpRequest : propriété readyState"
short-title: readyState
slug: Web/API/XMLHttpRequest/readyState
l10n:
  sourceCommit: 118909727d715a42a27e3d368379bf959feca4af
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété en lecture seule **`readyState`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne l'état dans lequel se trouve un client XMLHttpRequest. Un client XHR existe dans l'un des états suivants&nbsp;:

| Valeur | État               | Description                                                                    |
| ------ | ------------------ | ------------------------------------------------------------------------------ |
| `0`    | `UNSENT`           | Le client est créé. `open()` n'a pas encore été appelé.                        |
| `1`    | `OPENED`           | `open()` est appelé.                                                           |
| `2`    | `HEADERS_RECEIVED` | `send()` est appelé, et les en-têtes ainsi que le statut sont disponibles.     |
| `3`    | `LOADING`          | Téléchargement en cours&nbsp;; `responseText` contient des données partielles. |
| `4`    | `DONE`             | L'opération est terminée.                                                      |

- `UNSENT`
  - : Le client XMLHttpRequest est créé, mais la méthode `open()` n'a pas encore été appelée.
- `OPENED`
  - : La méthode `open()` est appelée. Pendant cet état, les en-têtes de la requête peuvent être définis à l'aide de la méthode [`setRequestHeader()`](/fr/docs/Web/API/XMLHttpRequest/setRequestHeader) et la méthode [`send()`](/fr/docs/Web/API/XMLHttpRequest/send) peut être appelée, ce qui initie la récupération.
- `HEADERS_RECEIVED`
  - : `send()` est appelé, toutes les redirections (le cas échéant) ont été suivies et les en-têtes de réponse ont été reçus.
- `LOADING`
  - : Le corps de la réponse est en cours de réception. Si [`responseType`](/fr/docs/Web/API/XMLHttpRequest/responseType) est «&nbsp;text&nbsp;» ou une chaîne de caractères vide, [`responseText`](/fr/docs/Web/API/XMLHttpRequest/responseText) contient la réponse textuelle partielle au fur et à mesure de sa réception.
- `DONE`
  - : L'opération de récupération est terminée. Cela peut signifier que le transfert de données a été effectué avec succès ou qu'il a échoué.

## Exemples

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT", xhr.readyState); // readyState vaut 0

xhr.open("GET", "/api", true);
console.log("OPENED", xhr.readyState); // readyState vaut 1

xhr.onprogress = () => {
  console.log("LOADING", xhr.readyState); // readyState vaut 3
};

xhr.onload = () => {
  console.log("DONE", xhr.readyState); // readyState vaut 4
};

xhr.send(null);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
