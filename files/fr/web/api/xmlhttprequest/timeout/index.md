---
title: XMLHttpRequest.timeout
slug: Web/API/XMLHttpRequest/timeout
---

{{APIRef('XMLHttpRequest')}}

La propriété **`XMLHttpRequest.timeout`** est un `unsigned long` (un entier long, non-signé) représentant la durée, en millisecondes, qu'une requête peut prendre avant d'être automatiquement terminée. Par défaut, la valeur est 0 et il n'y pas de _timeout_. Lorsqu'une requête expire, un évènement [`timeout`](/fr/docs/Web/API/XMLHttpRequest/timeout_event) est déclenché.

> [!NOTE]
> Pour un exemple, voir [Utiliser la propriété `timeout` avec une requête asynchrone](/fr/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Example_using_a_timeout).

> [!NOTE]
> Ces délais d'expiration ne devraient pas être utilisés pour les requêtes `XMLHttpRequest` synchrones dans [un environnement de document](/fr/docs/Glossaire/Environnement_de_document) : ils déclencheront une exception `InvalidAccessError`. On ne peut donc pas utiliser de _timeout_ pour les requêtes synchrones avec une fenêtre parente.

## Exemples

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.timeout = 2000; // durée en millisecondes

xhr.onload = function () {
  // Requête terminée. On traite le résultat ici.
};

xhr.ontimeout = function (e) {
  // Requête qui a expiré. On traite ce cas.
};

xhr.send(null);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
