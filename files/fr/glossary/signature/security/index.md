---
title: Signature (sécurité)
slug: Glossary/Signature/Security
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **signature**, ou _signature numérique_, est un {{Glossary("protocol", "protocole")}} montrant l'authenticité d'un message.

À partir du {{Glossary("hash function", "hash")}} d'un message donné, le **processus de signature** génère d'abord une signature numérique liée à l'entité qui effectue la signature, en utilisant la {{Glossary("key", "clé")}} privée de l'entité.

À la réception du message, le **processus de vérification**

- _authentifie l'émetteur_ — utilise la clé publique de l'émetteur pour {{Glossary("decryption", "déchiffrer")}} la signature et récupérer le hash qui ne peut être créer qu'avec la clé privée de l'émetteur, et
- _contrôle l'intégrité du message_ — compare le hash avec celui nouvellement calculé à partir du document reçu (les deux hashs seront différents si le document a été falsifié)

Le système échoue si la clé privée est compromise ou si le destinataire donne trompeusement une fausse clé publique.

## Voir aussi

- [Signature numérique](https://fr.wikipedia.org/wiki/Signature_numérique) sur Wikipédia
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Hash function", "Fonction de hachage")}}
  - {{Glossary("Encryption", "Chiffrement")}}
