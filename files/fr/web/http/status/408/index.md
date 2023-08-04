---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
---

{{HTTPSidebar}}

Le code de statut de réponse HTTP **`408 Request Timeout`** indique que le serveur souhaiterait clôturer cette connexion inutilisée. Pour certains serveurs, ce code est parfois envoyé sur une connexion inactive sans qu'il y ait nécessairement eu de requête de la part du client.

Un serveur doit envoyer l'en-tête [`Connection`](/fr/docs/Web/HTTP/Headers/Connection) avec la valeur `close` en réponse, puisque `408` implique que le serveur a décidé de fermer la connexion plutôt que de continuer à attendre.

Cette réponse est plus utilisée depuis que certains navigateurs, comme Chrome, Firefox 27+ ou IE9, utilisent le mécanisme HTTP de pré-connexion qui permet d'accélérer la navigation.

> **Note :** Certains serveurs ferment purement et simplement la connexion, sans renvoyer ce message.

## Statut

```
408 Request Timeout
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Connection`](/fr/docs/Web/HTTP/Headers/Connection)
- [`X-DNS-Prefetch-Control`](/fr/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control)
