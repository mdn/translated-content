---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
---

{{HTTPSidebar}}

Le code de réponse d'erreur HTTP **`426 Upgrade Required`** indique que le serveur refuse de réaliser la requête en utilisant le protocole actuel mais qu'il sera peut-être disposé à le faire après que le client passe sur un protocole différent.

Avec cette réponse, le serveur renvoie un en-tête [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade) pour indiquer le(s) protocole(s) requis.

## Statut

```
426 Upgrade Required
```

## Exemples

```
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/3.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Upgrade`](/fr/docs/Web/HTTP/Headers/Upgrade)
- [`101 Switching Protocol`](/fr/docs/Web/HTTP/Status/101)
