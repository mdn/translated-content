---
title: Fonction de hachage cryptographique
slug: Glossary/Hash_function
original_slug: Glossary/Cryptographic_hash_function
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **fonction de hachage** est une fonction qui prend une entrée de longueur variable et produit une sortie de longueur fixe, aussi appelée _empreinte_ (ou simplement «&nbsp;hachage&nbsp;»). Les fonctions de hachage doivent être rapides à calculer, et des entrées différentes doivent autant que possible produire des sorties différentes (c'est ce qu'on appelle la _résistance aux collisions_).

Les fonctions de hachage ont des usages à la fois {{Glossary("cryptography", "cryptographiques")}} et non cryptographiques. En dehors de la cryptographie, par exemple, les fonctions de hachage peuvent servir à générer les clés d'un tableau associatif comme une map ou un dictionnaire.

La fonction {{DOMxRef("SubtleCrypto.digest()", "digest()")}} de l'interface {{DOMxRef("SubtleCrypto")}} met différentes fonctions de hachage à disposition des applications web.

## Fonctions de hachage cryptographiques

En cryptographie, les fonctions de hachage ont de nombreuses applications, notamment les {{Glossary("digital signature", "signatures numériques")}} et les {{Glossary("HMAC", "codes d'authentification de message")}}.

Toutes les fonctions de hachage ne conviennent pas à la cryptographie. Pour être utilisée en cryptographie, une fonction de hachage doit être&nbsp;:

- rapide à calculer
- à sens unique&nbsp;: connaissant la sortie, il doit être impossible ou irréaliste de retrouver l'entrée d'origine
- résistante à la falsification&nbsp;: toute modification de l'entrée conduit à une sortie différente
- résistante aux collisions&nbsp;: il doit être irréaliste de trouver deux entrées différentes produisant la même sortie

Les fonctions de hachage les plus couramment utilisées en cryptographie appartiennent à la famille _SHA-2_ (Secure Hash Algorithm 2), dont les noms sont `"SHA-"` suivis de la longueur de l'empreinte en bits&nbsp;: par exemple, `"SHA-256"` et `"SHA-512"`.

SHA-2 est le successeur de l'algorithme SHA-1, qui n'est plus considéré comme sûr et ne doit plus être utilisé en cryptographie. Notez que l'algorithme MD5 est également considéré comme non sécurisé.

## Voir aussi

- La méthode {{DOMxRef("SubtleCrypto.digest()")}}
- [Fonction de hachage](https://fr.wikipedia.org/wiki/Fonction_de_hachage) sur Wikipédia
- [Fonction de hachage cryptographique](https://fr.wikipedia.org/wiki/Fonction_de_hachage_cryptographique) sur Wikipédia
- Terme associé du glossaire&nbsp;:
  - {{Glossary("Symmetric-key cryptography", "Cryptographie à clé secrète")}}
