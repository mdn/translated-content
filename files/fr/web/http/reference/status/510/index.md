---
title: 510 Not Extended
slug: Web/HTTP/Reference/Status/510
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Le code de statut de [réponse d'erreur serveur](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_serveur) HTTP **`510 Not Extended`** est envoyé lorsque la requête du client déclare une extension HTTP ({{RFC("2774")}}) qui doit être utilisée pour traiter la requête, mais que l'extension n'est pas prise en charge.

## Statut

```http
510 Not Extended
```

## Exemples

### Extension non prise en charge

Dans l'exemple suivant, un client envoie une requête avec une extension obligatoire définie dans l'en-tête `C-MAN`.
L'en-tête {{HTTPHeader("Connection")}} indique que ces extensions doivent être traitées sur une base [de point par point](/fr/docs/Web/HTTP/Reference/Headers#en-têtes_de_point_à_point_hop-by-hop_headers).
Un {{Glossary("Proxy_server", "serveur mandataire")}} transmet la requête étendue, mais l'en-tête {{HTTPHeader("Connection")}} est supprimé lors du transit.
Comme le serveur d'origine ne reçoit aucune information sur la méthode `M-GET`, il envoie un code `510` en réponse&nbsp;:

```http
M-GET /document HTTP/1.1
Host: exemple.com
C-Man: "http://www.exemple.org/"
Connection: C-Man
```

```http
HTTP/1.1 510 Not Extended
```

## Spécifications

{{Specifications}}

## See also

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
