---
title: Déchiffrement
slug: Glossary/Decryption
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En {{Glossary("Cryptography", "cryptographie")}}, le **déchiffrement** est la conversion d'un {{Glossary("ciphertext", "cryptogramme")}} en {{Glossary("Plaintext", "texte brut")}}.

Le déchiffrement est une primitive cryptographique : il transforme un cryptogramme en texte brut via l'utilisation d'un algorithme cryptographique appelé {{Glossary("cipher", "chiffre")}}. À l'instar du chiffrement, le déchiffrement est effectué par l'utilisation d'un algorithme spécifique et d'un code secret appelé {{Glossary("key", "clé")}}. Comme l'algorithme est souvent public, la clé doit rester secrète si le chiffrement reste sécurisé.

![La primitive de déchiffrement.](decryption.png)

Le déchiffrement est l'inverse du {{Glossary("encryption", "chiffrement")}} et si la clé reste secrète, le déchiffrement sans connaître le code secret spécifique sera mathématiquement difficile à réaliser. Le degré de difficulté dépend de la sécurité de l'algorithme cryptographique choisi et évolue au fur et à mesure des progrès de la {{Glossary("cryptanalysis", "cryptanalyse")}}.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Encryption", "Chiffrement")}}
  - {{Glossary("Cipher", "Chiffre")}}
  - {{Glossary("Cryptography", "Cryptographie")}}
