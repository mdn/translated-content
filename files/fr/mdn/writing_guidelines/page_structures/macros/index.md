---
title: Utiliser les macros
slug: MDN/Writing_guidelines/Page_structures/Macros
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

Le back-end [Rari <sup>(angl.)</sup>](https://github.com/mdn/rari) est le système de construction de MDN et fournit une syntaxe de macro pour les tâches courantes.

## Utiliser une macro dans le contenu

Pour utiliser une macro, vous devez entourer le nom de la macro d'une paire d'accolades doubles (`{{ }}`) ainsi que de ses paramètres, le cas échéant&nbsp;:

```plain
\{{macroname(parameter-list)}}
```

Quelques notes sur les appels de macro&nbsp;:

- Les noms de macro sont sensibles à la casse, mais une tentative est faite pour corriger les erreurs de capitalisation courantes&nbsp;; vous pouvez utiliser des lettres minuscules même si le nom de la macro utilise des majuscules, et vous pouvez mettre en majuscules une macro dont le nom commence normalement par une lettre minuscule.
- Les paramètres sont séparés par des virgules.
- S'il n'y a pas de paramètres, vous pouvez omettre complètement les parenthèses. Par exemple, les macros `\{{APIRef()}}` et `\{{APIRef}}` sont identiques.
- Les paramètres numériques peuvent être avec et sans guillemets. Cependant, les numéros de version avec plusieurs décimales doivent être entre guillemets.

Les macros peuvent être aussi simples que l'insertion d'un bloc de texte plus grand ou l'échange de contenus d'une autre partie de MDN, ou aussi complexes que la construction d'un index entier de contenu en recherchant à travers des parties du site, en mettant en forme la sortie et en ajoutant des liens.

## Voir aussi

- [Macros couramment utilisées](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Macros de lien](/fr/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Macros de barre latérale](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Macros de statut de fonctionnalité](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Les autres macros](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Other) (macros peu utilisées ou obsolètes)
