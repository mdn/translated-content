---
title: XMLHttpRequest.withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
---

{{APIRef('XMLHttpRequest')}}

La propriété **`XMLHttpRequest.withCredentials`** est un booléen qui indique si une requête `Access-Control` entre plusieurs sites devrait être réalisée avec des informations d'authentification (_credentials_) telles que des cookies, des en-têtes d'autorisation ou des certificats clients. Activer `withCredentials` n'aura aucun impact sur les requêtes effectuées sur un même site.

Cette propriété est également utilisée afin d'indiquer lorsque les cookies doivent être ignorés pour une réponse. Par défaut, la valeur est à `false`. Une requête `XMLHttpRequest` d'un autre domaine ne pourra pas définir de cookies pour cet autre domaine à moins que `withCredentials` vaille `true` avant la requête.

Les cookies tiers obtenus lorsque `withCredentials` vaut `true` continuent de respecter la règle de même origine et ne peuvent donc pas être manipulés en script via [`document.cookie`](/fr/docs/Web/API/Document/cookie) ou depuis les en-têtes de la réponse.

> [!NOTE]
> Cette propriété n'a aucun impact pour les requêtes effectuées sur le même site.

> [!NOTE]
> Les réponses `XMLHttpRequest` provenant d'un domaine différent ne peuvent pas définir de cookies pour ce domaine à moins d'avoir `withCredentials` à `true` avant l'envoi de la requête (quelle que soit la valeur de l'en-tête `Access-Control-`).

## Exemples

```js
var xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
