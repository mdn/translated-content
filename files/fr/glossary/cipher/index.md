---
title: Chiffre
slug: Glossary/Cipher
---

En {{glossary("cryptography","cryptographie")}}, un **chiffre** est un algorithme qui permet de {{glossary("encryption","chiffrer")}} du {{glossary("cleartext","texte brut")}} dans le but de le rendre illisible et de le {{glossary("decryption", "déchiffrer")}} par la suite.

Les chiffres étaient communs bien avant l'âge de l'informatique (par exemple, [le chiffrement par substitution](https://fr.wikipedia.org/wiki/Chiffrement_par_substitution), [le chiffrement par transposition](https://fr.wikipedia.org/wiki/Chiffrement_par_transposition) ou le chiffrement par permutation), mais aucun d'entre eux n'était cryptologiquement sûr à l'exception du [masque jetable](https://fr.wikipedia.org/wiki/Masque_jetable).

Les chiffres modernes sont construits de manière à résister à des {{glossary("attack","attaques")}} découvertes par un {{glossary("cryptanalysis","cryptanalyste")}}. Il n'y a aucune garantie que tous les vecteurs d'attaques aient été découverts, mais chaque algorithme est jugé à l'aune des types de vecteurs d'attaques connus.

Les chiffres opèrent de deux manières, soit en [chiffrement par bloc](https://fr.wikipedia.org/wiki/Chiffrement_par_bloc) sur des blocs de données, soit en [chiffrement par flot](https://fr.wikipedia.org/wiki/Chiffrement_de_flux) pour des flux de données continus (souvent de l'audio ou de la vidéo).

Ils sont également classés en fonction de la manière dont leurs {{glossary("Key", "clefs")}} sont gérées :

- les algorithmes à [clefs symétriques](https://fr.wikipedia.org/wiki/Cryptographie_symétrique) utilisent la même clef pour chiffrer et déchiffrer un message. Cette clef doit également être envoyée de manière sécurisée afin que le message reste confidentiel.
- les algorithmes à [clefs asymétriques](https://fr.wikipedia.org/wiki/Cryptographie_asymétrique) utilisent une clef différente pour le chiffrement et le déchiffrement.

## Voir aussi

- [Chiffrement](https://fr.wikipedia.org/wiki/Chiffrement) sur Wikipédia
