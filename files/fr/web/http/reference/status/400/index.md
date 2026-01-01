---
title: 400 Bad Request
slug: Web/HTTP/Reference/Status/400
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`400 Bad Request`** indique que le serveur ne traite pas la requête en raison d'une erreur que le serveur considère comme une erreur du côté client.
La raison d'une réponse `400` est généralement une syntaxe de requête mal formée, un encadrement de message de requête invalide ou un routage de requête trompeur.

Les clients qui reçoivent une réponse `400` doivent s'attendre à ce que répéter la requête sans modification échoue avec la même erreur.

## Statut

```http
400 Bad Request
```

## Exemples

### Syntaxe de requête mal formée

Supposons qu'une API {{Glossary("REST")}} existe avec un point de terminaison pour gérer les utilisateur·ice·s à l'adresse `http://exemple.com/users` et qu'une requête `POST` avec le corps suivant tente de créer un·e utilisateur·ice, mais utilise du JSON invalide avec des sauts de ligne non échappés&nbsp;:

```http
POST /users HTTP/1.1
Host: exemple.com
Content-Type: application/json
Content-Length: 38

{
  "email": "s@exemple.com
",
  "username": "s.smith"
}
```

Si le {{Glossary("HTTP Content", "contenu")}} est dans un format valide, on s'attendrait à recevoir une réponse {{HTTPStatus("201", "201 Created")}} ou un autre message de succès, mais le serveur répond à la place avec un code `400` et le corps de la réponse inclut un champ `message` avec du contexte pour que le client puisse réessayer l'action avec une requête correctement formée&nbsp;:

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: 71

{
  "error": "Bad request",
  "message": "Request body could not be read properly.",
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [Définitions des codes de statut HTTP <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#status.400)
