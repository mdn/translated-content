---
title: 414 URI Too Long
slug: Web/HTTP/Reference/Status/414
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`414 URI Too Long`** indique qu'une URI demandée par le client est plus longue que ce que le serveur est disposé à interpréter.

Il existe quelques rares cas de figure pour lesquels cela peut se produire&nbsp;:

- Un client a mal converti une requête {{HTTPMethod("POST")}} en une requête {{HTTPMethod("GET")}} contenant de nombreuses informations,
- Un client est descendu dans une boucle de redirection (par exemple, un préfixe d'URI de redirection qui pointe vers un suffixe de lui-même),
- Un serveur est sous le coup d'une attaque par un client qui tente d'exploiter des failles de sécurité potentielles.

Certains systèmes implémentent `414 URI Too Long` sous la forme `414 Request-URI Too Large`.

## Statut

```http
414 URI Too Long
```

## Exemples

### Soumission de formulaire avec GET

Dans l'exemple suivant, une [méthode HTML `<form>`](/fr/docs/Web/HTML/Reference/Elements/form#method) utilise accidentellement `get` au lieu de `post`.
Une grande quantité de données du formulaire est ajoutée à l'URL définie dans l'attribut `action` du formulaire et envoyée en tant que requête GET&nbsp;:

```http
GET /search?feedback=it+was+the+best+of+times+it+was+the+worst+of+times… HTTP/1.1
Host: exemple.com
```

La limite de longueur d'URI du serveur est atteinte avec cette requête et une réponse 414 est envoyée&nbsp;:

```http
HTTP/1.1 414 URI Too Long
Content-Type: text/html; charset=UTF-8
Date: Fri, 28 Jun 2024 11:40:58 GMT
Content-Length: 1234

<!doctype html>
<head>
  <title>414 - URI Too Long</title>
</head>
  <body>
    <h1>414 - URI Too Long</h1>
    <p>L'URI fournie est trop longue pour être traitée par le serveur.</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'entrée de glossaire {{Glossary("URI")}}
