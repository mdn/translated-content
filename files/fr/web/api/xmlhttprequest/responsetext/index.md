---
title: "XMLHttpRequest : propriété responseText"
short-title: responseText
slug: Web/API/XMLHttpRequest/responseText
l10n:
  sourceCommit: 9c78a44b9321fcd3fbe63d6f5b61ed749c2fa261
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété en lecture seule **`responseText`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne le texte reçu d'un serveur suite à l'envoi d'une requête.

## Valeur

Une chaîne de caractères contenant soit les données textuelles reçues à l'aide de
`XMLHttpRequest`, soit `""` si la requête a échoué ou si aucun contenu n'a encore été reçu.

Lors du traitement d'une requête asynchrone, la valeur de `responseText` contient toujours le contenu actuel reçu du serveur, même s'il est incomplet parce que les données n'ont pas encore été entièrement reçues.

Vous savez que l'intégralité du contenu a été reçue lorsque la valeur de {{DOMxRef("XMLHttpRequest.readyState", "readyState")}} devient `XMLHttpRequest.DONE` (`4`), et que {{DOMxRef("XMLHttpRequest.status", "status")}} devient 200 (`"OK"`).

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si le type de réponse ({{DOMxRef("XMLHttpRequest.responseType")}}) n'est pas défini sur la chaîne de caractères vide ou `"text"`. Comme la propriété `responseText` n'est valide que pour le contenu textuel, toute autre valeur constitue une condition d'erreur.

## Exemples

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server", true);

// Si défini, responseType doit être la chaîne de caractères vide ou « text »
xhr.responseType = "text";

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseText);
    }
  }
};

xhr.send(null);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
