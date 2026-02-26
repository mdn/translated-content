---
title: Sécurisée (Méthodes HTTP)
slug: Glossary/Safe/HTTP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une méthode HTTP est **sécurisée** si elle n'altère pas l'état du serveur. Autrement dit, une méthode est sécurisée si elle correspond à une opération en lecture seule. Plusieurs méthodes HTTP courantes sont sécurisées&nbsp;: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}} ou {{HTTPMethod("OPTIONS")}}. Toutes les méthodes sécurisées sont aussi {{Glossary("idempotent")}}, mais toutes les méthodes idempotentes ne sont pas sécurisées. Par exemple, {{HTTPMethod("PUT")}} et {{HTTPMethod("DELETE")}} sont toutes deux idempotentes mais non sécurisées.

Même si les méthodes sécurisées ont une sémantique en lecture seule, les serveurs peuvent modifier leur état&nbsp;: par exemple, ils peuvent consigner des journaux ou conserver des statistiques. Ce qui importe ici, c'est qu'en appelant une méthode sécurisée, le client ne demande lui‑même aucune modification du serveur et, par conséquent, n'entraînera pas une charge ou un fardeau inutile pour le serveur. Les navigateurs peuvent appeler des méthodes sécurisées sans craindre de causer un dommage au serveur&nbsp;; cela leur permet d'effectuer des opérations comme le pré‑chargement sans risque. Les robots d'indexation Web s'appuient également sur l'appel de méthodes sécurisées.

Les méthodes sécurisées ne doivent pas se limiter à la fourniture de fichiers statiques&nbsp;; un serveur peut générer une réponse à une méthode sécurisée à la volée, tant que le script générateur garantit la sécurité&nbsp;: il ne doit pas déclencher d'effets externes, comme déclencher une commande sur un site de commerce électronique.

Il appartient à l'application côté serveur d'implémenter correctement la sémantique des méthodes sécurisées, le serveur web lui‑même, qu'il s'agisse d'Apache, de Nginx ou d'IIS, ne peut pas l'imposer par lui‑même. En particulier, une application ne doit pas permettre que des requêtes {{HTTPMethod("GET")}} modifient son état.

Un appel à une méthode sécurisée, ne modifiant pas l'état du serveur&nbsp;:

```http
GET /pageX.html HTTP/1.1
```

Un appel à une méthode non sécurisée, susceptible de modifier l'état du serveur&nbsp;:

```http
POST /pageX.html HTTP/1.1
```

Un appel à une méthode idempotente mais non sécurisée&nbsp;:

```http
DELETE /idX/delete HTTP/1.1
```

## Voir aussi

- Définition de [safe <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#safe.methods) dans la spécification HTTP.
- Description des méthodes sécurisées courantes&nbsp;: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}
- Description des méthodes non sécurisées courantes&nbsp;: {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
