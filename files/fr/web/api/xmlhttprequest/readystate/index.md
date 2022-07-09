---
title: XMLHttpRequest.readyState
slug: Web/API/XMLHttpRequest/readyState
translation_of: Web/API/XMLHttpRequest/readyState
---
{{APIRef('XMLHttpRequest')}}

La propriété XMLHttpRequest.readyState renvoie l'état dans lequel se trouve un client XMLHttpRequest.Un client XHR existe dans l'un des états suivants :

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Value</td>
      <td class="header">State</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td><code>0</code></td>
      <td><code>UNSENT</code></td>
      <td>Le client a été créé. open() n'a pas encore été appelé.</td>
    </tr>
    <tr>
      <td><code>1</code></td>
      <td><code>OPENED</code></td>
      <td><code>open()</code>a été appelé.</td>
    </tr>
    <tr>
      <td><code>2</code></td>
      <td><code>HEADERS_RECEIVED</code></td>
      <td>
        <code>send()</code> a été appelé, et les en-têtes et le statut sont
        disponibles.
      </td>
    </tr>
    <tr>
      <td><code>3</code></td>
      <td><code>LOADING</code></td>
      <td>
        Téléchargement; <code>responseText</code> contient des données
        partielles.
      </td>
    </tr>
    <tr>
      <td><code>4</code></td>
      <td><code>DONE</code></td>
      <td>L'opération est terminée.</td>
    </tr>
  </tbody>
</table>

- UNSENT
  - : Le client XMLHttpRequest a été créé, mais la méthode open() n'a pas encore été appelée.
- OPENED
  - : La méthode open() a été invoquée. Pendant cet état, les en-têtes de requête peuvent être définis à l'aide de la méthode [setRequestHeader()](/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader)  et la méthode [send()](/en-US/docs/Web/API/XMLHttpRequest/send)  peut être appelée, ce qui lancera la récupération.
- HEADERS_RECEIVED
  - : send() a été appelé et les en-têtes de réponse ont été reçus
- LOADING
  - : Le corps de la réponse est en cours de réception. Si [`responseType`](/en-US/docs/Web/API/XMLHttpRequest/responseType) is "text"  ou une chaîne vide, [`responseText`](/en-US/docs/Web/API/XMLHttpRequest/responseText) aura la réponse textuelle partielle au fur et à mesure de son chargement.
- DONE
  - : L'opération de récupération est terminée. Cela peut signifier que le transfert de données a été effectué avec succès ou a échoué.

> **Note :** Les noms des états sont différents dans les versions d'Internet Explorer antérieures à 11. Au lieu de `UNSENT`, `OPENED`, `HEADERS_RECEIVED`, `LOADING` et `DONE`, les noms `READYSTATE_UNINITIALIZED` (0), `READYSTATE_LOADING` (1), `READYSTATE_LOADED` (2), `READYSTATE_INTERACTIVE` (3) et `READYSTATE_COMPLETE` (4) sont utilisés.

## Exemple

```js
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState will be 4
};

xhr.send(null);
```

## Specifications

| Specification                                            | Statut                               | Comment                |
| -------------------------------------------------------- | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest', '#states')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## Compatibilité des navigateurs

{{Compat("api.XMLHttpRequest.readyState")}}
