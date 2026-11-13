---
title: "XMLHttpRequest : propriété timeout"
short-title: timeout
slug: Web/API/XMLHttpRequest/timeout
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété **`timeout`** de l'interface {{DOMxRef("XMLHttpRequest")}} est un `unsigned long` représentant le nombre de millisecondes qu'une requête peut prendre avant d'être automatiquement terminée. La valeur par défaut est 0, ce qui signifie qu'il n'y a pas de délai d'attente. Le délai d'attente ne doit pas être utilisé pour les requêtes `XMLHttpRequest` synchrones utilisées dans un {{Glossary("document environment", "environnement de document")}} ou il lève une exception `InvalidAccessError`. Lorsqu'un délai d'attente se produit, un évènement [de dépassement du délai](/fr/docs/Web/API/XMLHttpRequestEventTarget/timeout_event) est déclenché.

> [!NOTE]
> Il n'est pas possible d'utiliser un délai d'attente pour les requêtes synchrones avec une fenêtre propriétaire.

[Utiliser un délai d'attente avec une requête asynchrone](/fr/docs/Web/API/XMLHttpRequest_API/Synchronous_and_Asynchronous_Requests#example_using_a_timeout).

## Exemples

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

xhr.timeout = 2000; // durée en millisecondes

xhr.onload = () => {
  // Requête terminée. Traiter le résultat ici.
};

xhr.ontimeout = (e) => {
  // Requête qui a expiré. Traiter ce cas.
};

xhr.send(null);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
