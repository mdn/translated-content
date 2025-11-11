---
title: Chiffre (cipher)
slug: Glossary/Cipher
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En {{Glossary("cryptography", "cryptographie")}}, un **chiffre** est un algorithme qui permet de {{Glossary("encryption", "chiffrer")}} du {{Glossary("Plaintext", "texte brut")}} dans le but de le rendre illisible et de le {{Glossary("decryption", "déchiffrer")}} par la suite.

Les chiffres étaient communs bien avant l'âge de l'informatique (par exemple, [le chiffrement par substitution](https://fr.wikipedia.org/wiki/Chiffrement_par_substitution), [le chiffrement par transposition](https://fr.wikipedia.org/wiki/Chiffrement_par_transposition) ou le chiffrement par permutation), mais aucun d'entre eux n'était cryptologiquement sûr à l'exception du [masque jetable](https://fr.wikipedia.org/wiki/Masque_jetable).

À l'époque moderne, les chiffres ont beaucoup évolué. [AES](https://fr.wikipedia.org/wiki/Advanced_Encryption_Standard), [RSA](https://fr.wikipedia.org/wiki/Chiffrement_RSA) et [Blowfish](https://fr.wikipedia.org/wiki/Blowfish) sont des exemples de chiffres qui font partie intégrante des standards et systèmes de chiffrement contemporains.

Les chiffres modernes sont construits de manière à résister aux attaques découvertes par un {{Glossary("cryptanalysis", "cryptanalyste")}}. Il n'existe aucune garantie que toutes les méthodes d'attaque aient été découvertes, donc chaque algorithme est [recommandé pour des usages différents](/fr/docs/Web/API/SubtleCrypto#algorithmes_pris_en_charge) selon les types d'attaques connus.

Les chiffres opèrent de deux manières, soit en [chiffrement par bloc](https://fr.wikipedia.org/wiki/Chiffrement_par_bloc) sur des blocs de données, soit en [chiffrement par flot](https://fr.wikipedia.org/wiki/Chiffrement_de_flux) pour des flux de données continus (souvent de l'audio ou de la vidéo).

Ils sont également classés en fonction de la manière dont leurs {{Glossary("Key", "clés")}} sont gérées&nbsp;:

- les algorithmes à {{Glossary("Symmetric-key cryptography", "clés symétriques")}} utilisent la même clé pour chiffrer et déchiffrer un message. Cette clé doit également être envoyée de manière sécurisée afin que le message reste confidentiel.
- les algorithmes à {{Glossary("Public-key cryptography", "clés asymétriques")}} utilisent une clé différente pour le chiffrement et le déchiffrement.

## Voir aussi

- [L'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API)
- [Algorithmes pris en charge par SubtleCrypto](/fr/docs/Web/API/SubtleCrypto#algorithmes_pris_en_charge)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Block cipher mode of operation", "Mode opératoire de chiffrement par bloc")}}
  - {{Glossary("Ciphertext", "Texte chiffré")}}
  - {{Glossary("Cipher suite", "Suite de chiffrement")}}
  - {{Glossary("Cryptanalysis", "Cryptanalyse")}}
  - {{Glossary("Cryptography", "Cryptographie")}}
  - {{Glossary("Decryption", "Déchiffrement")}}
  - {{Glossary("Encryption", "Chiffrement")}}
  - {{Glossary("Key", "Clef")}}
  - {{Glossary("Plaintext", "Texte brut")}}
  - {{Glossary("Public-key cryptography", "Cryptographie à clé publique")}}
  - {{Glossary("Symmetric-key cryptography", "Cryptographie symétrique")}}
- [Chiffrement](https://fr.wikipedia.org/wiki/Chiffrement) sur Wikipédia
