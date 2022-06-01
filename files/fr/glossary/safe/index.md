---
title: Sécurisée
slug: Glossary/safe
tags:
  - Glossaire
  - Mécanismes web
  - Sécurité
translation_of: Glossary/safe
original_slug: Glossaire/sécurisée
---
Une méthode HTTP est **sécurisée (_safe_)** si elle ne modifie pas l'état du serveur. En d'autres termes, une méthode est sécurisée si elle conduit à une opération en lecture seule. Plusieurs méthodes HTTP courantes sont sécurisées : {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}} ou {{HTTPMethod("OPTIONS")}}. Toutes les méthodes sécurisées sont aussi {{glossary("idempotent","idempotentes")}} ainsi que certaines méthodes non sécurisées comme {{HTTPMethod("PUT")}} ou {{HTTPMethod("DELETE")}}.

Même si les méthodes sécurisées ont une sémantique en lecture seule, les serveurs peuvent modifier leur état : par exemple, ils peuvent se connecter ou garder des statistiques. Ce qui est important ici, c'est qu'en appelant une méthode sécurisée, le client ne demande pas de changement du serveur lui-même et, par conséquent, ne créera pas de téléchargement ou de chargement inutile pour le serveur. Les navigateurs peuvent appeler des méthodes sécurisées sans craindre de causer des dommages au serveur : cela leur permet d'effectuer des activités comme la pré-extraction sans risque. Les robots d'exploration web s'appuient également sur l'appel de méthodes sécurisées.

Les méthodes sécurisées n'ont pas besoin de servir uniquement des fichiers statiques ; un serveur peut générer une réponse à une méthode sécurisée à la volée, à condition que le script de génération garantisse la sécurité : il ne doit pas déclencher d'effets externes, comme le lancement d'une commande sur un site web de commerce électronique.

Il est de la responsabilité de l'application sur le serveur d'implémenter la sémantique sécurisée correctement, le serveur web, Apache, nginx ou IIS, ne peuvent pas l'appliquer eux-mêmes. En particulier, une application ne doit pas autoriser les demandes {{HTTPMethod("GET")}} à modifier son état.

Un appel à une méthode sécurisée ne modifiant pas l'état du serveur :

    GET /pageX.html HTTP/1.1

Un appel à une méthode non sécurisée, susceptible de modifier l'état du serveur :

    POST /pageX.html HTTP/1.1

Un appel à une méthode idempotente mais non sûre :

    DELETE /idX/delete HTTP/1.1

## En apprendre plus

### Culture générale

- Définition de [safe](https://tools.ietf.org/html/rfc7231#section-4.2.1) (_sécurisé_) dans la spécification HTTP.

### Technical knowledge

- Description de méthodes sécurisées courantes : {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("OPTIONS")}}
- Description de méthodes non sécurisées courantes : {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("POST")}}
