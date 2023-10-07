---
title: Chiffrement avec clé publique
slug: Glossary/Public-key_cryptography
---

Le chiffrage avec clé publique — ou _chiffrage asymétrique_ — est un système de chiffrage dans lequel les clés fonctionnent par paires. La transformation réalisée par l'une des clés ne peut être inversée que par l'autre clé. L'une des clés (la _clé privée_) est gardée secrète, tandis que l'autre est rendue publique.

Lorsqu'elles sont utilisées pour signer numériquement, la clé privée sert à signer et la clé publique sert à vérifier. En clair, n'importe qui peut vérifier une signature, mais seul le propriétaire de la clé privée correspondante peut l'avoir générée.

Lorsqu'on les utilise pour du chiffrage, la clé publique va chiffrer le message, et la clé privée sera utilisée pour le déchiffrer. Cela donne au système de chiffrage avec clé publique un avantage par rapport aux systèmes de chiffrement symétriques, puisque la clé de chiffrage peut être rendue publique. N'importe qui peut chiffrer un message à destination du propriétaire de la clé privée, mais seul le ou la propriétaire de la clé privée peut le déchiffrer. Ces systèmes sont généralement beaucoup plus lents que les algorithmes symétriques, et la taille du message qu'ils peuvent chiffrer est proportionnelle à la taille de la clé, ce qui rend leur utilisation moins évidente pour de longs messages.

De ce fait, il est courant pour un système de chiffrage d'utiliser un algorithme symétrique pour chiffrer le message, puis un système de clé publique pour chiffrer la clé symétrique. Cette combinaison permet de profiter des avantages des deux systèmes.

Parmi les systèmes de chiffrement par clé publique les plus courants, on retrouve le système RSA (aussi bien pour la signature que le chiffrage), le DSA (pour la signature) et le Diffie-Hellman (pour des accords de clés).

## Voir aussi

- [Glossaire](/fr/docs/Glossary)

  - [Chiffrement par clé symétrique](/fr/docs/Glossary/Symmetric-key_cryptography)

- L'API [Web Crypto](/fr/docs/Web/API/Web_Crypto_API)
