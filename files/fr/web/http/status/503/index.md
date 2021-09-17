---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
tags:
  - Code de statut
  - Erreur serveur
  - HTTP
translation_of: Web/HTTP/Status/503
---
{{HTTPSidebar}}

Le code de réponse HTTP d'erreur serveur **`503`\*\***` Service Unavailable`\*\* indique que le serveur n'est pas prêt à traiter la requête.

Généralement, cela se produit car le serveur est éteint ou inaccessible pour cause de maintenance ou de surcharge. Notez qu'avec cette erreur, il est préférable d'envoyer une page compréhensible pour l'utilisateur qui explique le problème. Cette réponse doit être utilisée pour indiquer un état temporaire et l'en-tête HTTP {{HTTPHeader("Retry-After")}} doit, si possible, indiquer le temps estimé avant la reprise du service.

Les en-têtes relatifs au cache qui sont envoyés avec cette réponse doivent être pris en compte car un code de statut 503 indique un état temporaire et cette réponse ne doit généralement pas être mise en cache.

## Statut

    503 Service Unavailable

## Spécifications

| Spécification                                                        | Titre                                                         |
| -------------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "503 Service Unavailable" , "6.6.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilité des navigateurs

{{Compat("http/status", "503")}}

## Voir aussi

- {{HTTPHeader("Retry-After")}}
