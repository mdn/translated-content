---
title: Mode de fonctionnement de chiffrement par bloc
slug: Glossary/Block_cipher_mode_of_operation
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

Un **mode de fonctionnement de chiffrement par bloc**, généralement appelé simplement «&nbsp;mode&nbsp;» dans le contexte, spécifie comment un chiffrement par bloc doit être utilisé pour chiffrer ou déchiffrer les messages qui sont plus longs que la taille du bloc.

La plupart des algorithmes à clé symétrique actuellement utilisés sont des chiffrements par bloc&nbsp;: cela signifie qu'ils chiffrent les données un bloc à la fois. La taille de chaque bloc est fixe et déterminée par l'algorithme&nbsp;: par exemple, AES utilise des blocs de 16 octets. Les chiffrements de bloc sont toujours utilisés avec un mode, qui spécifie comment chiffrer en toute sécurité les messages plus longs que la taille du bloc. Par exemple, AES est un chiffrement, tandis que CTR, CBC et GCM sont tous des modes. L'utilisation d'un mode inapproprié ou une utilisation incorrecte d'un mode peut compromettre complètement la sécurité fournie par le chiffrement sous-jacent.
