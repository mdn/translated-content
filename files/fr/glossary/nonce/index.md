---
title: Nonce
slug: Glossary/Nonce
l10n:
  sourceCommit: aefcc1599f9a67bfb4e0e5f48b2175eac61739fe
---

En cryptographie et en sécurité informatique, un **`nonce`** est un nombre arbitraire utilisé **une seule fois** dans une communication cryptographique. Le terme vient de «&nbsp;nombre utilisé une seule fois&nbsp;» (<i lang="en">number used once</i> en anglais) et est couramment employé pour empêcher les attaques par rejeu, garantir la fraîcheur des messages et apporter de l'entropie aux protocoles cryptographiques.

Les nonces sont fréquemment utilisés dans les protocoles d'authentification, les schémas de chiffrement, le hachage et les signatures numériques. Ils peuvent être générés de façon aléatoire ou pseudo‑aléatoire, ou dérivés de manière déterministe, selon l'application et les exigences de sécurité.

En sécurité web, les nonces sont fréquemment utilisés dans des mécanismes tels que la politique de sécurité de contenu (CSP) pour autoriser l'exécution de scripts spécifiques tout en empêchant les attaques de type _injection de code_ (<abbr>XSS</abbr> pour <i lang="en">cross-site scripting</i> en anglais). Dans des protocoles cryptographiques comme {{Glossary("TLS")}}, les nonces contribuent à garantir que chaque session est unique.

## Voir aussi

- [Nonce cryptographique](<https://fr.wikipedia.org/wiki/Nonce_(cryptographie)>) sur Wikipédia
- [Politique de sécurité de contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP)
- [Attaque par rejeu](https://fr.wikipedia.org/wiki/Attaque_par_rejeu) sur Wikipédia
- Termes associés du glossaire&nbsp;:
  - {{Glossary("cryptography", "Cryptographie")}}
  - {{Glossary("encryption", "Chiffrement")}}
  - {{Glossary("Hash_function", "Hachage")}}
  - {{Glossary("TLS")}}
  - {{Glossary("authentication", "Authentification")}}
