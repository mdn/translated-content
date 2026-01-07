---
title: 426 Upgrade Required
slug: Web/HTTP/Reference/Status/426
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`426 Upgrade Required`** indique que le serveur refuse de réaliser la requête en utilisant le protocole actuel, mais pourrait accepter de le faire après que le client passe à un autre protocole.

Avec cette réponse, le serveur renvoie un en-tête {{HTTPHeader("Upgrade")}} pour indiquer le(s) protocole(s) requis.

## Statut

```http
426 Upgrade Required
```

## Exemples

### Mise à niveau requise depuis HTTP/1.1

Étant donné une requête GET vers un système&nbsp;:

```http
GET /resources HTTP/1.1
Host: exemple.com
```

Le serveur d'origine attend que les requêtes soient effectuées en {{Glossary("HTTP_3", "HTTP/3")}}&nbsp;:

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/3.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol.
```

## Spécifications

{{Specifications}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- L'en-tête HTTP {{HTTPHeader("Upgrade")}}
- Le code de statut HTTP {{HTTPStatus("101", "101 Switching Protocols")}}
