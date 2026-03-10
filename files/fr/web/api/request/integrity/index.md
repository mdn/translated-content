---
title: "Request : propriété integrity"
short-title: integrity
slug: Web/API/Request/integrity
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La propriété en lecture seule **`integrity`** de l'interface {{DOMxRef("Request")}} contient la valeur de [l'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity) de la requête.

## Valeur

La valeur qui a été passée comme argument `options.integrity` lors de la construction de la `Request`.

Si aucune intégrité n'a été définie, la propriété retourne une chaîne de caractères vide (`""`).

## Exemples

Dans l'extrait suivant, nous créons une nouvelle requête à l'aide du constructeur {{DOMxRef("Request/Request", "Request()")}} (pour un fichier image dans le même répertoire que le script), puis nous lisons l'intégrité de la requête. Comme la requête a été créée sans intégrité spécifique, la propriété retourne une chaîne de caractères vide.

```js
const myRequest = new Request("flowers.jpg");
console.log(myRequest.integrity); // ""
```

Dans l'exemple ci-dessous, la requête a été créée avec une valeur d'intégrité spécifique, donc la propriété retourne cette valeur. Notez qu'il n'y a aucune validation de la valeur d'intégrité&nbsp;; la propriété retourne exactement ce qui a été passé en argument.

```js
const myRequest = new Request("flowers.jpg", {
  integrity: "sha256-abc123",
});
console.log(myRequest.integrity); // "sha256-abc123"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- La référence [HTTP](/fr/docs/Web/HTTP)
