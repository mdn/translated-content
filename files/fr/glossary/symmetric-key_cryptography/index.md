---
title: Chiffrement par clé symétrique
slug: Glossary/Symmetric-key_cryptography
tags:
  - Cryptography
  - Glossary
  - Security
  - Symmetric-key cryptography
translation_of: Glossary/Symmetric-key_cryptography
---
Le chiffrement par clé symétrique est un terme utilisé pour décrire les algorithmes de chiffrement qui utilisent une même clé pour le chiffrage et le déchiffrage. La clé est généralement appelée « clé symétrique » ou « clé secrète ».

On utilise cette appellation par contraste avec le [chiffrement par clé publique](/fr/docs/Glossary/Public-key_cryptography), qui lui va générer des paires de clés : la transformation étant réalisée par une clé et ne pouvant être inversée qu'en utilisant l'autre clé.

Les algorithmes par clé symétrique sont sûrs lorsqu'ils sont utilisés correctement, et sont très efficaces ; ils peuvent donc être utilisés pour chiffrer de grandes quantités de données sans observer d'effets négatifs en termes de performance.

La plupart des algorithmes par clé symétrique actuellement utilisés sont des chiffrements par « bloc » : cela signifie qu'ils chiffrent un bloc de données à la fois. La taille de chaque bloc est fixe et déterminée par l'algorithme utilisé : par exemple, un système [AES](/fr/docs/Glossary/AES) utilise des blocs de 16 bits. Le chiffrement par bloc est toujours utilisé avec un _[mode](/fr/docs/Glossary/Block_cipher_mode_of_operation)_, qui va déterminer comment chiffrer de façon sûre les messages dont la taille dépasse celle du bloc. Par exemple, AES est un chiffrement, tandis que CTR, CBC et GCM sont tous des modes. Attention donc, car si l'on utilise le mauvais mode, ou si l'on utilise un mode de façon incorrecte, on risque de réduire à néant la sécurité apportée par le chiffrement choisi.

## Voir aussi

- [Glossaire](/fr/docs/Glossary)

  - [Chiffrement par bloc](/fr/docs/Glossary/Block_cipher_mode_of_operation)
  - [Cryptographie](/fr/docs/Glossary/Cryptography)
  - [Fonction de hachage cryptographique](/fr/docs/Glossary/Cryptographic_hash_function)
  - [Chiffrement par clé symétrique](/fr/docs/Glossary/Symmetric-key_cryptography)
