---
title: Suite de chiffrement
slug: Glossary/Cipher_suite
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **suite de chiffrement** est un ensemble comprenant un algorithme d'échange de clés, une méthode d'authentification, un {{Glossary("Cipher", "chiffre")}} et un code d'authentification des messages.

Dans un protocole de chiffrement tel que {{Glossary("TLS")}}, le client et le serveur doivent s'accorder sur une suite de chiffrement avant de pouvoir commencer à communiquer de manière sécurisée. Un exemple de suite de chiffrement peut être ECDHE_RSA_WITH_AES_128_GCM_SHA256 ou ECDHE-RSA-AES128-GCM-SHA256. Ces exemples indiquent&nbsp;:

- ECDHE (elliptic curve Diffie-Hellman ephemeral) pour l'échange de clés
- RSA pour l'authentification
- AES-128 comme chiffre, avec Galois/Counter Mode (GCM) comme mode d'opération de chiffrement par bloc
- SHA-256 comme code d'authentification des messages (HMAC)

## Voir aussi

- [Les choix de suites de chiffrement TLS recommandées par Mozilla <sup>(angl.)</sup>](https://wiki.mozilla.org/Security/Server_Side_TLS)
