---
title: "Headers : méthode get()"
short-title: get()
slug: Web/API/Headers/get
l10n:
  sourceCommit: 93bf38a7f79a39cf5ec50ecbb5c3ddfedf2f1e81
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

La méthode **`get()`** de l'interface {{DOMxRef("Headers")}} retourne une chaîne de caractères d'octets contenant toutes les valeurs d'un en-tête dans un objet `Headers` avec un nom donné. Si l'en-tête demandé n'existe pas dans l'objet `Headers`, elle retourne `null`.

Pour des raisons de sécurité, certains en-têtes ne peuvent être contrôlés que par l'agent utilisateur. Ces en-têtes incluent les {{Glossary("Forbidden_request_header", "en-têtes de requête interdits")}} et les {{Glossary("Forbidden_response_header_name", "noms d'en-têtes de réponse interdits")}}.

## Syntaxe

```js-nolint
get(name)
```

### Paramètres

- `name`
  - : Nom de l'en-tête HTTP dont vous souhaitez récupérer les valeurs à partir de l'objet `Headers`. Si le nom donné ne correspond pas à la production [field-name <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#fields.names) dans la spécification HTTP, cette méthode lance une {{JSxRef("TypeError")}}.
    Le nom n'est pas sensible à la casse.

### Valeur de retour

Une séquence de {{JSxRef("String")}} représentant les valeurs de l'en-tête récupéré ou `null` si cet en-tête n'est pas défini.

## Exemples

Créer un objet `Headers` vide est simple&nbsp;:

```js
const mesEnTetes = new Headers(); // Actuellement vide
mesEnTetes.get("Not-Set"); // Retourne null
```

Vous pouvez ajouter un en-tête à cet objet en utilisant {{DOMxRef("Headers.append")}}, puis le récupérer en utilisant `get()`&nbsp;:

```js
mesEnTetes.append("Content-Type", "image/jpeg");
mesEnTetes.get("Content-Type"); // Retourne "image/jpeg"
```

Si l'en-tête a plusieurs valeurs associées, la chaîne de caractères d'octets contiendra toutes les valeurs, dans l'ordre dans lequel elles ont été ajoutées à l'objet `Headers`&nbsp;:

```js
mesEnTetes.append("Accept-Encoding", "deflate");
mesEnTetes.append("Accept-Encoding", "gzip");
mesEnTetes.get("Accept-Encoding"); // Retourne "deflate, gzip"
mesEnTetes
  .get("Accept-Encoding")
  .split(",")
  .map((v) => v.trimStart()); // Retourne [ "deflate", "gzip" ]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API)
- [Contrôle d'accès HTTP (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- [HTTP](/fr/docs/Web/HTTP)
