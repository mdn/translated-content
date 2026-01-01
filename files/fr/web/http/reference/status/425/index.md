---
title: 425 Too Early
slug: Web/HTTP/Reference/Status/425
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`425 Too Early`** indique que le serveur n'a pas voulu prendre le risque de traiter une requête qui pourrait être rejouée afin d'éviter d'éventuelles attaques par rejeu.

Si un client a récemment interagi avec un serveur, les données précoces (aussi appelées données à zéro aller-retour [(0-RTT)](/fr/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)) permettent au client d'envoyer des données au serveur dès le premier aller-retour d'une connexion, sans attendre la fin de la [négociation TLS](/fr/docs/Glossary/TCP_handshake).
Un client qui envoie une requête en données précoces n'a pas besoin d'inclure l'en-tête `Early-Data`.
Voir {{HTTPHeader("Early-Data")}} pour plus d'informations.

## Statut

```http
425 Too Early
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les codes de statut de réponse HTTP](/fr/docs/Web/HTTP/Reference/Status)
- [TLS 1.3](/fr/docs/Web/Security/Defenses/Transport_Layer_Security#tls_1.3)
- L'en-tête HTTP {{HTTPHeader("Early-Data")}}
