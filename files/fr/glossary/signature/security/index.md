---
title: Signature (sécurité)
slug: Glossary/Signature/Security
tags:
  - Confidentialité
  - Cryptographie
  - Glossaire
  - Sécurité
translation_of: Glossary/Signature/Security
original_slug: Glossaire/Signature/Sécurité
---
Une **signature**, ou _signature numérique_, est un {{glossary("protocol","protocole")}} montrant l'authenticité d'un message.

À partir du {{glossary("hash")}} d'un message donné, le **processus de signature** génère d'abord une signature numérique liée à l'entité qui effectue la signature, en utilisant la {{glossary("clé")}} privée de l'entité.

À la réception du message, le **processus de vérification**

- _authentifie l'émetteur -_ utilise la clé publique de l'émetteur pour {{glossary("decryption","déchiffrer")}} la signature et récupérer le hash qui ne peut être créer qu'avec la clé privée de l'émetteur, et
- _contrôle l'intégrité du message -_ compare le hash avec celui nouvellement calculé à partir du document reçu (les deux hashs seront différents si le document a été falsifié)

Le système échoue si la clé privée est compromise ou si le destinataire donne trompeusement une fausse clé publique.

## Pour approfondir

### Culture générale

- {{Interwiki("wikipedia", "Signature numérique")}} sur Wikipédia
- Voir {{glossary("digest")}}, {{glossary("encryption")}}

### Référence technique

- [Tutoriel sur la sécurité informatique](/fr/Apprendre/Tutoriels/Les_bases_de_la_sécurité_informatique)
