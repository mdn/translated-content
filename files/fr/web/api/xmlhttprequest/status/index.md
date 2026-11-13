---
title: "XMLHttpRequest : propriété status"
short-title: status
slug: Web/API/XMLHttpRequest/status
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété en lecture seule **`status`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne le [code d'état](/fr/docs/Web/HTTP/Reference/Status) numérique HTTP de la réponse de `XMLHttpRequest`.

Avant que la requête ne soit terminée, la valeur de `status` est 0. Les navigateurs signalent également un statut de 0 en cas d'erreurs `XMLHttpRequest`.

## Valeur

Un nombre.

## Exemples

```js
const xhr = new XMLHttpRequest();
console.log("UNSENT: ", xhr.status);

xhr.open("GET", "/server");
console.log("OPENED: ", xhr.status);

xhr.onprogress = () => {
  console.log("LOADING: ", xhr.status);
};

xhr.onload = () => {
  console.log("DONE: ", xhr.status);
};

xhr.send();

/**
 * Affiche les valeurs suivantes :
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Liste des [codes de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [HTTP](/fr/docs/Web/HTTP)
