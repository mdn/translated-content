---
title: 412 Precondition Failed
slug: Web/HTTP/Reference/Status/412
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`412 Precondition Failed`** indique que l'accès à la ressource cible a été refusé.
Cela se produit avec les [requêtes conditionnelles](/fr/docs/Web/HTTP/Guides/Conditional_requests) sur des méthodes autres que {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}, lorsque la condition définie par les en-têtes {{HTTPHeader("If-Unmodified-Since")}} ou {{HTTPHeader("If-Match")}} n'est pas remplie.
Dans ce cas, la requête (généralement un téléversement ou une modification de ressource) ne peut pas être effectuée et cette réponse d'erreur est renvoyée.

## Statut

```http
412 Precondition Failed
```

## Exemples

### Précondition non remplie

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Éviter les conflits d'édition

Grâce aux en-têtes `ETag` et {{HTTPHeader("If-Match")}}, il est possible d'éviter les conflits ou les collisions d'édition.
Par exemple, lors de la modification de certaines pages wiki, le contenu est haché et placé dans un `ETag` dans les réponses réussies&nbsp;:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Lors de l'enregistrement des modifications d'une page wiki (envoi de données), la requête {{HTTPMethod("POST")}} contiendra l'en-tête {{HTTPHeader("If-Match")}} avec la valeur d'`ETag` que le client a enregistrée lors de la dernière édition afin de vérifier la fraîcheur de la ressource sur le serveur&nbsp;:

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Si les deux empreintes ne correspondent pas, cela signifie que le document a été édité entre-temps et une erreur `412 Precondition Failed` est déclenchée.

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [Requêtes conditionnelles](/fr/docs/Web/HTTP/Guides/Conditional_requests)
- Le code de statut HTTP {{HTTPStatus("304")}}
- Les en-têtes HTTP {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- Le code de statut HTTP {{HTTPStatus("428")}}
