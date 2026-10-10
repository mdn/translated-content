---
title: "XMLHttpRequest : propriété statusText"
short-title: statusText
slug: Web/API/XMLHttpRequest/statusText
l10n:
  sourceCommit: be1922d62a0d31e4e3441db0e943aed8df736481
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété en lecture seule **`statusText`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne une chaîne de caractères contenant le message d'état de la réponse tel que retourné par le serveur HTTP. Contrairement à [`XMLHttpRequest.status`](/fr/docs/Web/API/XMLHttpRequest/status) qui indique un code d'état numérique, cette propriété contient le _texte_ de l'état de la réponse, tel que «&nbsp;OK&nbsp;» ou «&nbsp;Not Found&nbsp;». Si l'état [`readyState`](/fr/docs/Web/API/XMLHttpRequest/readyState) de la requête est `UNSENT` ou `OPENED`, la valeur de `statusText` est une chaîne de caractères vide.

Si la réponse du serveur ne définit pas explicitement un texte d'état, `statusText` prend la valeur par défaut «&nbsp;OK&nbsp;».

> [!NOTE]
> Les réponses sur une connexion HTTP/2 ont toujours une chaîne de caractères vide comme message d'état, car HTTP/2 ne les prend pas en charge.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const xhr = new XMLHttpRequest();
console.log("0 UNSENT", xhr.statusText);

xhr.open("GET", "/server", true);
console.log("1 OPENED", xhr.statusText);

xhr.onprogress = () => {
  console.log("3 LOADING", xhr.statusText);
};

xhr.onload = () => {
  console.log("4 DONE", xhr.statusText);
};

xhr.send(null);

/**
 * Affiche les valeurs suivantes :
 *
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Liste des [codes de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [HTTP](/fr/docs/Web/HTTP)
- [Le standard vivant WHATWG Fetch <sup>(angl.)</sup>](https://fetch.spec.whatwg.org/#concept-response-status-message)
