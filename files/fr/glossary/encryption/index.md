---
title: Chiffrement
slug: Glossary/Encryption
tags:
  - Confidentialité
  - Cryptographie
  - Glossaire
  - Sécurité
translation_of: Glossary/Encryption
original_slug: Glossaire/Chiffrement
---
En {{glossary("cryptography","cryptographie")}}, le **chiffrement** est la conversion d'un {{glossary("Texte_brut","texte brut")}} en un texte codé ou {{glossary("ciphertext","cryptogramme")}}. Ce dernier est destiné à ne pas pouvoir être lu par les lecteurs qui n'y sont pas autorisés.

Le chiffrement est une primitive cryptographique : il transforme un message de texte brut en un cryptogramme via l'utilisation d'un algorithme cryptographique appelé {{glossary("cipher","cryptosystème")}}. Avec les cryptosystèmes modernes, le chiffrement est effectué par l'utilisation d'un algorithme spécifique et d'un code secret appelé {{glossary("Key","clé")}}. Comme l'algorithme est souvent public, la clé doit rester secrète si le chiffrement reste sécurisé.

![How encryption works.](encryption.png)

Sans connaître le code secret, l'opération inverse, le {{glossary("decryption","déchiffrement")}}, se révèle mathématiquement difficile à réaliser. Le degré de difficulté dépend de la sécurité de l'algorithme cryptographique choisi et évolue au fur et à mesure des progrès de la {{glossary("cryptanalysis","cryptanalyse")}}.

## Pour approfondir

- En savoir plus sur les [Chiffrement et déchiffrement](/fr/docs/Archive/Security/Encryption_and_Decryption)
