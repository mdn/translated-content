---
title: Utiliser les macros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: cb7e7fde9b942001d6acef7d9868fbf622d71636
---

Le backend [rari](https://github.com/mdn/rari) est le système de construction de MDN et fournit une syntaxe de macro pour les tâches courantes.

## Utiliser une macro dans le contenu

Pour utiliser une macro, vous devez entourer le nom de la macro d'une paire d'accolades doubles (`{{ }}`) ainsi que de ses paramètres, le cas échéant&nbsp;:

```plain
\{{macroname(parameter-list)}}
```

Quelques notes sur les appels de macro&nbsp;:

- Les noms de macro sont sensibles à la casse, mais une tentative est faite pour corriger les erreurs de capitalisation courantes&nbsp;; vous pouvez utiliser des lettres minuscules même si le nom de la macro utilise des majuscules, et vous pouvez mettre en majuscules une macro dont le nom commence normalement par une lettre minuscule.
- Les paramètres sont séparés par des virgules.
- S'il n'y a pas de paramètres, vous pouvez omettre complètement les parenthèses&nbsp;; `\{{macroname()}}` et `\{{macroname}}` sont identiques.
- Les paramètres numériques peuvent être entre guillemets ou non. Cela dépend de vous (cependant, si vous avez un numéro de version avec plusieurs décimales, il doit être entre guillemets).

Les macros peuvent être aussi simples que l'insertion d'un bloc de texte plus grand ou l'échange de contenus d'une autre partie de MDN, ou aussi complexes que la construction d'un index entier de contenu en recherchant à travers des parties du site, en mettant en forme la sortie et en ajoutant des liens.

Vous pouvez consulter nos macros les plus couramment utilisées sur la page [Macros couramment utilisées](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros).
Les macros moins courantes sont décrites dans la documentation [Autres macros](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Other).

## Voir aussi

- [Macros de barre latérale](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Macros de lien](/fr/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Macros de statut de fonctionnalité](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
