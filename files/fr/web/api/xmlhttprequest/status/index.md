---
title: XMLHttpRequest.status
slug: Web/API/XMLHttpRequest/status
translation_of: Web/API/XMLHttpRequest/status
---
{{APIRef('XMLHttpRequest')}}

La propriété en lecture seule XMLHttpRequest.status renvoie le code d'état HTTP numérique de la réponse de XMLHttpRequest.

Avant que la demande ne se termine, la valeur du statut est 0. Les navigateurs signalent également un statut de 0 en cas d'erreurs XMLHttpRequest.

## Exemple

```js
var xhr = new XMLHttpRequest();
console.log('UNSENT: ', xhr.status);

xhr.open('GET', '/server');
console.log('OPENED: ', xhr.status);

xhr.onprogress = function () {
  console.log('LOADING: ', xhr.status);
};

xhr.onload = function () {
  console.log('DONE: ', xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
```

## Specifications

| Specification                                                            | Statut                               | Comment                |
| ------------------------------------------------------------------------ | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest', '#the-status-attribute')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## Compatibilité des navigateurs

{{Compat("api.XMLHttpRequest.status")}}

Voir aussi

- Liste des [HTTP response codes](/en-US/docs/Web/HTTP/Response_codes)
- [HTTP](/en-US/docs/Web/HTTP)
