---
title: HMAC
slug: Glossary/HMAC
tags:
  - Cryptographie
  - Glossaire
  - Sécurité
translation_of: Glossary/HMAC
original_slug: Glossaire/HMAC
---
HMAC est un protocole utilisé pour les messages d'authentification {{Glossary("Cryptography","cryptographiquement")}}. Il peut utiliser toutes sortes de {{Glossary("Cryptographic hash function","fonctions de hachage cryptographique")}}, et sa force dépend de la fonction sous-jacente (SHA1 ou MD5 par exemple) et du choix de la clé secrète. Avec une telle combinaison, l'{{Glossary("Algorithm","algorithme")}} de vérification HMAC est alors repéré avec un nom composé comme HMAC-SHA1.

HMAC est utilisé pour s'assurer de l'intégrité et de l'authenticité.

## En apprendre plus

### Culture générale

- {{Interwiki("wikipedia", "Keyed-Hash_Message_Authentication_Code","HMAC")}} sur Wikipedia

### Référence technique

- [RFC 2104](http://www.ietf.org/rfc/rfc2104.txt) sur IETF
