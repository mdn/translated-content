---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
translation_of: Web/HTTP/Status/503
browser-compat: http.status.503
---
{{HTTPSidebar}}

Le code de réponse HTTP d'erreur serveur **`503 Service Unavailable`** indique que le serveur n'est pas prêt à traiter la requête.

Généralement, cela se produit car le serveur est éteint ou inaccessible pour cause de maintenance ou de surcharge. Cette réponse doit être utilisée pour indiquer un état temporaire et l'en-tête HTTP [`Retry-After`](/fr/docs/Web/HTTP/Headers/Retry-After) doit, si possible, indiquer le temps estimé avant la reprise du service.

> **Note :** Avec cette erreur, il est préférable d'envoyer une page compréhensible pour l'utilisateur qui explique le problème.

Les en-têtes relatifs au cache qui sont envoyés avec cette réponse doivent être pris en compte, car un code de statut 503 indique un état temporaire et cette réponse ne doit généralement pas être mise en cache.

## Statut

```
503 Service Unavailable
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Retry-After`](/fr/docs/Web/HTTP/Headers/Retry-After)
- [HTTP/1.1&nbsp;: Définitions des codes de statut (en anglais)](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
