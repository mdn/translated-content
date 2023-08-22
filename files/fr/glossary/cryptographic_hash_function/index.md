---
title: Fonction de hachage cryptographique
slug: Glossary/Cryptographic_hash_function
---

Une fonction de hachage cryptographique est une primitive {{glossary("cryptographie", "cryptographique")}} qui transforme un message de taille arbitraire en un message de taille fixe, appelé un {{glossary("digest","condensé")}}. Les fonctions de hachage cryptographiques sont employées pour l'authentification, les {{Glossary("Digital signature", "signatures numériques")}} et les {{Glossary("HMAC", "codes d'authentification de messages")}}.

Pour être utilisable en cryptographie, une fonction de hachage doit disposer de ces qualités :

- rapide à calculer (parce qu'elles sont fréquemment sollicitées)
- non réversible (chaque condensé peut provenir d'un très grand nombre de messages, et seule la force brute peut générer un message qui conduit à un condensé donné)
- résistant à la falsification (la moindre modification du message aboutit à un condensé différent)
- résistant aux collisions (il devrait être impossible de trouver deux messages différents qui produisent le même condensé)

Les fonctions de hachage cryptographiques comme MD5 et SHA-1 sont considérées cassées car des attaques permettant de réduire significativement leur résistance aux collisions ont été trouvées.

## Voir aussi

- [Fonction de hachage cryptographique](https://fr.wikipedia.org/wiki/Fonction_de_hachage_cryptographique) sur Wikipédia
