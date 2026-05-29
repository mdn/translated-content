---
title: 425 Too Early
slug: Web/HTTP/Reference/Status/425
l10n:
  sourceCommit: 74109a487250280f5f4c1595e91dfb43efef544a
---

Le code de statut de [réponse d'erreur client](/fr/docs/Web/HTTP/Reference/Status#réponses_derreur_côté_client) HTTP **`425 Too Early`** indique que le serveur n'a pas voulu prendre le risque de traiter une requête qui pourrait être rejouée afin d'éviter d'éventuelles attaques par rejeu.

Si un client a récemment interagi avec un serveur, les données précoces (aussi appelées données à zéro aller-retour (0-RTT)) permettent au client d'envoyer des données au serveur dès le premier aller-retour d'une connexion, sans attendre la fin de la [négociation TLS](/fr/docs/Glossary/TCP_handshake).
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
- [TLS](/fr/docs/Web/Security/Defenses/Transport_Layer_Security)
- L'en-tête HTTP {{HTTPHeader("Early-Data")}}
