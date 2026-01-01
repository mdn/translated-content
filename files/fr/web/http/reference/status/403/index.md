---
title: 403 Forbidden
slug: Web/HTTP/Reference/Status/403
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`403 Forbidden`** indique que le serveur a compris la requête mais a refusé de la traiter.
Ce statut est similaire à {{HTTPStatus("401")}}, sauf que pour les réponses **`403 Forbidden`**, s'authentifier ou se réauthentifier ne change rien.
L'échec de la requête est lié à la logique applicative, comme des permissions insuffisantes pour une ressource ou une action.

Les clients qui reçoivent une réponse `403` doivent s'attendre à ce que répéter la requête sans modification échoue avec la même erreur.
Les propriétaires de serveurs peuvent choisir d'envoyer une réponse {{HTTPStatus("404")}} au lieu d'un 403 s'ils ne souhaitent pas révéler l'existence d'une ressource à des clients sans privilèges suffisants.

## Statut

```http
403 Forbidden
```

## Exemples

### Échec de la requête pour permissions insuffisantes

L'exemple de requête suivant est envoyé à une API de gestion des utilisateur·ice·s.
La requête contient un en-tête {{HTTPHeader("Authorization")}} utilisant le [schéma d'authentification](/fr/docs/Web/HTTP/Guides/Authentication#schéma_dauthentification) `Bearer` contenant un jeton d'accès&nbsp;:

```http
DELETE /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
```

Le serveur a authentifié la requête, mais l'action échoue en raison de droits insuffisants et le corps de la réponse contient la raison de l'échec&nbsp;:

```http
HTTP/1.1 403 Forbidden
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 88

{
  "error": "InsufficientPermissions",
  "message": "Deleting users requires the 'admin' role."
}
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus("401")}}
- [Définitions des codes de statut HTTP <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#status.403)
