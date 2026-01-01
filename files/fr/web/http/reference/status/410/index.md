---
title: 410 Gone
slug: Web/HTTP/Reference/Status/410
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`410 Gone`** indique que la ressource cible n'est plus disponible sur le serveur d'origine et que cette situation est probablement permanente.
Une réponse 410 est mise en cache par défaut.

Les clients ne doivent pas répéter les requêtes pour les ressources qui retournent une réponse 410, et les propriétaires de sites doivent supprimer ou remplacer les liens qui retournent ce code.
Si les propriétaires de serveurs ne savent pas si cette situation est temporaire ou permanente, il convient d'utiliser le code de statut {{HTTPStatus(404)}} à la place.

## Statut

```http
410 Gone
```

## Exemples

### Requête d'une ressource obsolète

La requête `GET` suivante concerne une page dont le contenu promotionnel n'est plus valide&nbsp;:

```http
GET /promotions/summer-2023 HTTP/1.1
Host: exemple.com
```

```http
HTTP/1.1 410 Gone
Content-Type: text/html
Content-Length: 212

<html lang="fr">
  <head>
    <title>Promotion expirée</title>
  </head>
  <body>
    <h1>Promotion expirée</h1>
    <p>La promotion n'est plus active&nbsp;! Voir les <a href="/offers">offres en cours</a>.</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- Le code de statut HTTP {{HTTPStatus(404)}}
- [410 Gone](https://fr.wikipedia.org/wiki/Liste_des_codes_HTTP#410)
