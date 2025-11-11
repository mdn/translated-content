---
title: Chiffrement
slug: Glossary/Encryption
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En {{Glossary("cryptography", "cryptographie")}}, le **chiffrement** est la conversion d'un {{Glossary("plaintext", "texte brut")}} en un texte codé ou {{Glossary("ciphertext", "cryptogramme")}}. Ce dernier est destiné à ne pas pouvoir être lu par les lecteurs qui n'y sont pas autorisés.

Le chiffrement est une primitive cryptographique : il transforme un message de texte brut en un cryptogramme via l'utilisation d'un algorithme cryptographique appelé {{Glossary("cipher", "chiffre")}}. Avec les chiffres modernes, le chiffrement est effectué par l'utilisation d'un algorithme spécifique et d'un code secret appelé {{Glossary("Key", "clé")}}. Comme l'algorithme est souvent public, la clé doit rester secrète si le chiffrement reste sécurisé.

![Comment fonctionne le chiffrement.](encryption.png)

Sans connaître le code secret, l'opération inverse, le {{Glossary("decryption", "déchiffrement")}}, se révèle mathématiquement difficile à réaliser. Le degré de difficulté dépend de la sécurité de l'algorithme cryptographique choisi et évolue au fur et à mesure des progrès de la {{Glossary("cryptanalysis", "cryptanalyse")}}.
