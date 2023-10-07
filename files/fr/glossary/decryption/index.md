---
title: Déchiffrement
slug: Glossary/Decryption
---

En {{glossary("Cryptography","cryptographie")}}, le **déchiffrement** est la conversion d'un {{glossary("ciphertext","cryptogramme")}} en {{glossary("cleartexte","texte brut")}}.

Le déchiffrement est une primitive cryptographique : il transforme un cryptogramme en texte brut via l'utilisation d'un algorithme cryptographique appelé {{glossary("cipher","chiffre")}}. À l'instar du chiffrement, le déchiffrement est effectué par l'utilisation d'un algorithme spécifique et d'un code secret appelé {{glossary("key","clé")}}. Comme l'algorithme est souvent public, la clé doit rester secrète si le chiffrement reste sécurisé.

![The decryption primitive.](decryption.png)

Le déchiffrement est l'inverse du {{glossary("encryption","chiffrement")}} et si la clé reste secrète, le déchiffrement sans connaître le code secret spécifique sera mathématiquement difficile à réaliser. Le degré de difficulté dépend de la sécurité de l'algorithme cryptographique choisi et évolue au fur et à mesure des progrès de la {{glossary("cryptanalysis","cryptanalyse")}}.

## Voir aussi

- [Chiffrement et déchiffrement](/fr/docs/Archive/Security/Encryption_and_Decryption)
