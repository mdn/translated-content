---
title: "XMLHttpRequest : propriété withCredentials"
short-title: withCredentials
slug: Web/API/XMLHttpRequest/withCredentials
l10n:
  sourceCommit: c9f3d85f24d7839c9fe36a68d8042d088d906147
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété **`withCredentials`** de l'interface {{DOMxRef("XMLHttpRequest")}} est une valeur booléenne qui indique si les requêtes `Access-Control` inter-sites doivent être effectuées en utilisant des informations d'identification telles que des cookies, des en-têtes d'authentification ou des certificats client TLS. La définition de `withCredentials` n'a aucun effet sur les requêtes de même origine.

De plus, ce drapeau est également utilisé pour indiquer quand les cookies doivent être ignorés dans la réponse. La valeur par défaut est `false`. Les réponses `XMLHttpRequest` provenant d'un domaine différent ne peuvent pas définir de valeurs de cookie pour leur propre domaine à moins que `withCredentials` ne soit défini sur `true` avant d'effectuer la requête. Les [cookies tiers](/fr/docs/Web/Privacy/Guides/Third-party_cookies) obtenus en définissant `withCredentials` sur `true` respectent toujours la politique de même origine et ne peuvent donc pas être accessibles par le script demandeur avec {{DOMxRef("Document.cookie")}} ou à partir des en-têtes de réponse.

> [!NOTE]
> Cela n'affecte jamais les requêtes de même origine.

> [!NOTE]
> Les réponses `XMLHttpRequest` provenant d'un domaine différent _ne peuvent pas_ définir de valeurs de cookie pour leur propre domaine à moins que `withCredentials` ne soit défini sur `true` avant d'effectuer la requête, indépendamment des valeurs des en-têtes `Access-Control-`.

## Exemples

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
