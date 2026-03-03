---
title: Sel (Salt)
slug: Glossary/Salt
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En cryptographie, le **sel** est des données aléatoires ajoutées à un mot de passe avant d'être {{Glossary("hash function", "haché")}}. Cela rend impossible pour un attaquant de retrouver les mots de passe à partir de leurs hachages en utilisant des tables précomputées de mots de passe et les hachages correspondants.

Les mots de passe ne doivent jamais être stockés en clair, en raison du risque qu'un attaquant puisse s'introduire dans la base de données où ils sont conservés. En général, le mot de passe est haché, et le hachage obtenu est stocké. Si la fonction de hachage est cryptographiquement sûre, alors même si un attaquant obtient accès aux hachages stockés, il est peu plausible qu'il puisse inverser la fonction.

Pour retrouver un mot de passe à partir d'un hachage, les attaquants peuvent consulter la table précomputée correspondante (aussi appelée [table arc‑en‑ciel](https://fr.wikipedia.org/wiki/Rainbow_table)) qui associe les mots de passe possibles à leurs hachages&nbsp;:

| Mot de passe | Hachage     |
| ------------ | ----------- |
| pa55w0rd     | 56965E2A... |
| abcdef       | BEF57EC7... |
| letmein      | 1C8BFE8F... |

Bien que ces tables puissent être très volumineuses, de telles attaques peuvent être efficaces parce que la recherche dans une table est une opération rapide.

L'ajout d'un sel aléatoire aux mots de passe avant de les hacher empêche ce type d'attaque, car le hachage n'est pas calculé uniquement à partir du mot de passe, mais à partir du mot de passe combiné avec le sel.

Contrairement au mot de passe, le sel n'a pas besoin d'être gardé secret&nbsp;: il peut être stocké aux côtés du mot de passe salé et haché dans la base de données du serveur.
