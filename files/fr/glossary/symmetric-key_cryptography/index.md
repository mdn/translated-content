---
title: Chiffrement par clé symétrique
slug: Glossary/Symmetric-key_cryptography
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le chiffrement par clé symétrique est un terme utilisé pour décrire les algorithmes de chiffrement qui utilisent une même clé pour le chiffrage et le déchiffrage. La clé est généralement appelée « clé symétrique » ou « clé secrète ».

On utilise cette appellation par contraste avec le {{Glossary("public-key cryptography", "chiffrement par clé publique")}}, dans lequel les clés sont générées par paires et la transformation réalisée par une clé ne peut être inversée qu'en utilisant l'autre clé.

Les algorithmes par clé symétrique doivent être sûrs lorsqu'ils sont utilisés correctement et sont très efficaces, ils peuvent donc être utilisés pour chiffrer de grandes quantités de données sans avoir d'effet négatif sur les performances.

La plupart des algorithmes par clé symétrique actuellement utilisés sont des {{Glossary("Cipher", "chiffrements")}} par bloc&nbsp;: cela signifie qu'ils chiffrent les données un bloc à la fois. La taille de chaque bloc est fixe et déterminée par l'algorithme&nbsp;: par exemple, AES utilise des blocs de 16 octets. Les chiffrements par bloc sont toujours utilisés avec un _{{Glossary("Block cipher mode of operation", "mode")}}_, qui définit comment chiffrer de façon sûre les messages plus longs que la taille du bloc. Par exemple, AES est un chiffrement, tandis que CTR, CBC et GCM sont tous des modes. Utiliser un mode inadapté, ou utiliser un mode de façon incorrecte, peut complètement compromettre la sécurité apportée par le chiffrement sous-jacent.

## Voir aussi

- [L'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API)
- [Algorithmes pris en charge par SubtleCrypto](/fr/docs/Web/API/SubtleCrypto#algrithmes_pris_en_charge)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Block cipher mode of operation", "Chiffrement par bloc")}}
  - {{Glossary("Cryptography", "Cryptographie")}}
  - {{Glossary("Hash function", "Fonction de hachage")}}
