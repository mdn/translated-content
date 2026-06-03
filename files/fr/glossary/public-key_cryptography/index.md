---
title: Chiffrement avec clé publique
slug: Glossary/Public-key_cryptography
l10n:
  sourceCommit: 0785c8882d49e091d1d122ce8b114c64047e0930
---

Le chiffrage avec clé publique — ou _chiffrage asymétrique_ — est un système de chiffrage dans lequel les clés fonctionnent par paires. La transformation réalisée par l'une des clés ne peut être inversée que par l'autre clé. L'une des clés (la _clé privée_) est gardée secrète, tandis que l'autre est rendue publique.

## Signature numérique

Lorsqu'elles sont utilisées pour {{Glossary("digital signature", "signer numériquement")}}, la clé privée sert à signer et la clé publique sert à vérifier. En clair, n'importe qui peut vérifier une signature, mais seul le propriétaire de la clé privée correspondante peut l'avoir générée.

## Chriffrement

Lorsqu'on les utilise pour du {{Glossary("encryption", "chiffrage")}}, la clé publique va chiffrer le message, et la clé privée sera utilisée pour le déchiffrer. Cela donne au système de chiffrage avec clé publique un avantage par rapport aux systèmes de chiffrement symétriques, puisque la clé de chiffrage peut être rendue publique. N'importe qui peut chiffrer un message à destination du propriétaire de la clé privée, mais seul le ou la propriétaire de la clé privée peut le déchiffrer.

Cependant, les systèmes de chiffrement à clé publique sont généralement beaucoup plus lents que les algorithmes symétriques, et la taille des messages qu'ils peuvent chiffrer est proportionnelle à la taille de la clé&nbsp;; ils ne sont donc pas adaptés aux longs messages.

De ce fait, il est courant pour un système de chiffrage d'utiliser un algorithme symétrique pour chiffrer le message, puis un système de clé publique pour chiffrer la clé symétrique. Cette combinaison permet de profiter des avantages des deux systèmes.

## Systèmes de chiffrement courants à clé publique

Les systèmes de chiffrement à clé publique couramment utilisés sont [RSA](https://fr.wikipedia.org/wiki/Chiffrement_RSA) (pour la signature et le chiffrement), [DSA](https://fr.wikipedia.org/wiki/Digital_Signature_Algorithm) (pour la signature) et [Diffie-Hellman](https://fr.wikipedia.org/wiki/%C3%89change_de_cl%C3%A9s_Diffie-Hellman) (pour l'accord de clé).

La cryptographie à courbe elliptique propose une approche alternative à ces systèmes, avec l'avantage d'utiliser des clés de taille plus réduite, des opérations plus rapides et un stockage/transfert plus compact.
Les algorithmes populaires à courbe elliptique incluent [l'change de clés Diffie-Hellman basé sur les courbes elliptiques](https://fr.wikipedia.org/wiki/%C3%89change_de_cl%C3%A9s_Diffie-Hellman_bas%C3%A9_sur_les_courbes_elliptiques) et [Algorithme de signature numérique à courbe elliptique](https://fr.wikipedia.org/wiki/Elliptic_curve_digital_signature_algorithm), que les développeur·euse·s rencontrent souvent sous les abréviations **ECDH** et **ECDSA**.

## Voir aussi

- L'API [Web Crypto](/fr/docs/Web/API/Web_Crypto_API)
- [Algorithmes pris en charge par SubtleCrypto](/fr/docs/Web/API/SubtleCrypto#algorithmes_pris_en_charge)
- Terme associé du glossaire&nbsp;:
  - {{Glossary("Symmetric-key cryptography", "Chiffrement par clé symétrique")}}
- [Chiffrement à clé publique](https://fr.wikipedia.org/wiki/Cryptographie_asym%C3%A9trique) sur Wikipedia
