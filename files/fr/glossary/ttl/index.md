---
title: TTL
slug: Glossary/TTL
tags:
  - Glossaire
  - Infrastructure
translation_of: Glossary/TTL
original_slug: Glossaire/TTL
---
TTL peut se référer soit à :

- la durée de vie d'un paquet dans un réseau (avant de pouvoir être libéré)
- l'heure d'expiration des données mises en cache

## Dans le réseau

Le TTL, intégré dans le paquet, est généralement défini comme un nombre de sauts ou comme un horodatage d'expiration au-delà duquel le paquet est abandonné. Il offre un moyen d'éviter la congestion du réseau et de libérer des paquets après qu'ils ont parcouru le réseau trop longtemps.

## Mise en cache

Dans le contexte du cache, TTL (en tant qu'entier non signé de 32 bits) fait partie de l'{{Glossary("Response header","en-tête de réponse HTTP")}} ou de la requête {{Glossary("DNS")}}, indique la durée en secondes pendant laquelle la ressource peut être mise en cache par le demandeur.

## En apprendre plus

### Culture générale

- {{Interwiki("wikipedia","Time_to_Live", "Time to Live")}} sur Wikipedia

### Références techniques

- [RFC 2181](https://tools.ietf.org/html/rfc2181#section-8) sur IETF (en)
- [RFC1035](https://tools.ietf.org/html/rfc1035) sur IETF (en)
