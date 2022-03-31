---
title: Condensé
slug: Glossary/Digest
tags:
  - Confidentialité
  - Cryptographie
  - Glossaire
  - Sécurité
translation_of: Glossary/Digest
original_slug: Glossaire/Condensat
---
Un **condensé _(digest)_** est une petite valeur générée par une {{glossary("hash","fonction de hachage")}} à partir d'un message complet. Dans l'idéal, un condensé est rapide à calculer, non réversible et imprédictible, et par conséquent indique si quelqu'un a falsifié un message donné.

Un condensé peut être utilisé pour effectuer plusieurs tâches :

- dans des applications non cryptographiques (par exemple, l'index de tables de hachage ou une empreinte servant soit à détecter des données dupliquées, soit à identifier des fichiers de manière unique)
- vérifier l'intégrité d'un message (un message falsifié aura un haché différent)
- enregistrer des mots de passe afin qu'ils ne puissent pas être récupérés, mais seulement vérifiés (pour faire cela de manière sécurisée, il faut aussi saler le mot de passe.)
- générer des nombres pseudo-aléatoires
- générer des {{glossary("Key","clés")}}

Il est primordial de choisir la fonction de hachage appropriée à votre cas concret pour éviter les collisions et la prévisibilité.

## Pour approfondir

- Voir {{glossary("hash","fonction de hachage")}}
- {{interwiki("wikipedia", "Fonction_de_hachage_cryptographique", "Fonction de hachage")}} sur Wikipédia
