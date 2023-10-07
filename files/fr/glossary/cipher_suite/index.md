---
title: Suite de chiffrement
slug: Glossary/Cipher_suite
---

Une **suite de chiffrement** est un ensemble comprenant un algorithme d'échange de clefs, une méthode d'authentification, un {{glossary("Cipher","chiffre")}} et un code d'authentification des messages.

Dans un {{glossary("cryptosystem","protocole de chiffrement")}} tel que {{glossary("TLS")}}, le client et le serveur doivent s'accorder sur une suite de chiffrement avant de pouvoir commencer à communiquer de manière sécurisée. Un exemple de suite de chiffrement peut être ECDHE_RSA_WITH_AES_128_GCM_SHA256 ou ECDHE-RSA-AES128-GCM-SHA256. Ces exemples indiquent :

- ECDHE (elliptic curve Diffie-Hellman ephemeral) pour l'échange de clefs
- RSA pour l'authentification
- AES-128 comme chiffre, avec Galois/Counter Mode (GCM) comme mode d'opération de chiffrement par bloc
- SHA-256 comme code d'authentification des messages (HMAC)

## Voir aussi

- [Les choix de suites de chiffrement TLS recommandées par Mozilla](https://wiki.mozilla.org/Security/Server_Side_TLS) (en anglais)
