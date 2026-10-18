---
title: "XMLHttpRequest : méthode abort()"
short-title: abort()
slug: Web/API/XMLHttpRequest/abort
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La méthode **`abort()`** de l'interface {{DOMxRef("XMLHttpRequest")}} interrompt la requête si elle a déjà été envoyée. Lorsque la requête est interrompue, son {{DOMxRef("XMLHttpRequest.readyState", "readyState")}} est changé en `XMLHttpRequest.UNSENT` (0) et le code {{DOMxRef("XMLHttpRequest.status", "status")}} de la requête est défini sur 0.

Si la requête est toujours en cours (son `readyState` n'est ni `XMLHttpRequest.DONE` ni `XMLHttpRequest.UNSENT`), un évènement {{DOMxRef("XMLHttpRequest/readystatechange_event", "readystatechange")}}, un évènement {{DOMxRef("XMLHttpRequestEventTarget/abort_event", "abort")}} et un évènement {{DOMxRef("XMLHttpRequestEventTarget/loadend_event", "loadend")}} sont déclenchés, dans cet ordre. Pour les requêtes synchrones, aucun évènement n'est déclenché et une erreur est levée à la place.

## Syntaxe

```js-nolint
abort()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Cet exemple commence par charger le contenu de la page d'accueil de MDN, puis, en raison de certaines conditions, interrompt le transfert en appelant `abort()`.

```js
const xhr = new XMLHttpRequest();
const methode = "GET";
const url = "https://developer.mozilla.org/";
xhr.open(methode, url, true);

xhr.send();

if (OH_NOES_WE_NEED_TO_CANCEL_RIGHT_NOW_OR_ELSE) {
  xhr.abort();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
