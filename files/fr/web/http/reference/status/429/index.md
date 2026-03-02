---
title: 429 Too Many Requests
slug: Web/HTTP/Reference/Status/429
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`429 Too Many Requests`** indique que le client a envoyé trop de requêtes dans un laps de temps donné.
Ce mécanisme qui consiste à demander au client de ralentir la fréquence des requêtes est couramment appelé «&nbsp;{{Glossary("rate limit", "limitation de débit")}}&nbsp;».

Un en-tête {{HTTPHeader("Retry-After")}} peut être inclus dans cette réponse pour indiquer combien de temps le client doit attendre avant de refaire une requête.

Les implémentations de la limitation de débit varient&nbsp;; les restrictions peuvent s'appliquer à l'ensemble du serveur ou à une ressource spécifique.
En général, les restrictions de limitation de débit sont basées sur l'adresse IP du client, mais peuvent être spécifiques à des utilisateur·ice·s ou à des applications autorisées si les requêtes sont authentifiées ou contiennent un {{Glossary("cookie")}}.

## Statut

```http
429 Too Many Requests
```

## Exemples

### Réponse contenant l'en-tête `Retry-After`

La requête suivante est envoyée de façon répétée en boucle par un client mal configuré&nbsp;:

```http
GET /reports/mdn HTTP/1.1
Host: example.com
```

Dans cet exemple, la limitation de débit à l'échelle du serveur est active lorsqu'un client dépasse un seuil défini de demandes par minute.
Une réponse 429 est retournée avec un en-tête {{HTTPHeader("Retry-After")}} qui indique que les requêtes seront à nouveau autorisées pour ce client dans 60 minutes&nbsp;:

```http
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600

<html lang="fr">
  <head>
    <title>Too Many Requests</title>
  </head>
  <body>
    <h1>Trop de requêtes</h1>
    <p>Vous effectuez cette action trop souvent&nbsp;! Veuillez réessayer plus tard.</p>
  </body>
</html>
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'en-tête HTTP {{HTTPHeader("Retry-After")}}
- Solution Python&nbsp;: [Comment éviter l'erreur HTTP 429 en Python <sup>(angl.)</sup>](https://stackoverflow.com/questions/22786068/how-to-avoid-http-error-429-too-many-requests-python)
