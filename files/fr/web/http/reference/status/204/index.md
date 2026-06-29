---
title: 204 No Content
slug: Web/HTTP/Reference/Status/204
l10n:
  sourceCommit: c212cfca9809021001637344831487029f1b8887
---

Le code de statut de [réponse de succès](/fr/docs/Web/HTTP/Reference/Status#réponses_de_succès) HTTP **`204 No Content`** indique que la requête a réussi, mais que le client n'a pas besoin de quitter la page actuelle.
Une réponse `204` est mise en cache par défaut, et un en-tête {{HTTPHeader("ETag")}} est inclus dans ce cas.

Une réponse `204 No Content` en réponse à ces méthodes de requête a la signification et les résultats suivants&nbsp;:

- {{HTTPMethod("DELETE")}}&nbsp;: L'action a réussi, aucune information supplémentaire n'a besoin d'être fournie.
- {{HTTPMethod("PUT")}}&nbsp;: L'action a réussi, et la valeur {{HTTPHeader("ETag")}} contient l'étiquette d'entité pour la nouvelle représentation de la ressource cible.

Une réponse `204` peut être utilisée lors de l'implémentation d'une fonctionnalité «&nbsp;enregistrer et continuer l'édition&nbsp;» pour des applications comme les wikis.
Dans ce cas, une requête {{HTTPMethod("PUT")}} pourrait être utilisée pour enregistrer le contenu de la page, et une réponse `204 No Content` indique au navigateur que l'éditeur ne doit pas être remplacé par un autre contenu.

Notez que la réponse ne doit inclure aucun contenu ni l'en-tête {{HTTPHeader("Content-Length")}} (les navigateurs peuvent rejeter les réponses qui incluent du contenu).

## Statut

```http
204 No Content
```

## Exemples

### Réception d'une réponse après la suppression d'une image

Dans cet exemple, le client envoie une requête pour supprimer une image en utilisant la méthode `DELETE`.
La requête inclut un en-tête {{HTTPHeader("Authorization")}} avec un jeton pour authentifier la requête&nbsp;:

```http
DELETE /image/123 HTTP/1.1
Host: exemple.com
Authorization: Bearer 1234abcd
```

Après la suppression réussie de l'image, le serveur répond avec une réponse `204` sans corps, indiquant qu'aucune information supplémentaire n'a besoin d'être envoyée au client.

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

### Réception d'une réponse après la mise à jour avec PUT

Dans cet exemple, le client envoie une requête `PUT` pour mettre à jour les informations du profil d'un·e utilisateur·ice.
La requête inclut un en-tête {{HTTPHeader("Authorization")}} avec un jeton pour authentifier la requête&nbsp;:

```http
PUT /users/123 HTTP/1.1
Host: exemple.com
Content-Type: application/json
Authorization: Bearer 1234abcd

{
  "name": "Sandra Smith",
  "email": "sandra@exemple.com"
}
```

Après la mise à jour réussie du profil utilisateur, le serveur répond avec une réponse `204`.
L'en-tête {{HTTPHeader("ETag")}} contient l'étiquette d'entité pour la ressource mise à jour&nbsp;:

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
Server: Apache/2.4.1 (Unix)
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les méthodes de requête HTTP](/fr/docs/Web/HTTP/Reference/Methods)
- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
