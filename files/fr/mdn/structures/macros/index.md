---
title: Macros
slug: MDN/Structures/Macros
translation_of: MDN/Structures/Macros
---
{{MDNSidebar}}

La plate-forme [Kuma](/fr/docs/projet:MDN/Kuma "/fr/docs/projet:MDN/Kuma") sur laquelle MDN travail, fournit un système de macro, [KumaScript](/docs/fr/projet:MDN/Kuma/KumaScript_guide "/docs/fr/projet: MDN/Kuma/KumaScript_guide"), ce qui permet de faire une grande variété de choses automatiquement. Cet article fournit des informations sur la façon d'invoquer les macros MDN dans les articles.

Le [Guide KumaScript](/docs/fr/projet:MDN/Kuma/KumaScript_guide "/fr/docs/projet:MDN/Kuma/KumaScript_guide ") offre un regard en profondeur sur la façon d'utiliser des macros MDN, cette section est plus qu'un bref aperçu. Si vous avez déjà lu la section ci-dessus sur {{SectionOnPage ("/docs/fr/projet:MDN/Contribuer/Editor_guide/Links", "Utiliser les liens macros")}}, vous êtes un peu familiers avec le concept.

## Comment les macros sont-elle mises en œuvre

Macros sur MDN sont mis en œuvre en utilisant le serveur exécuté [JavaScript](/fr/docs/Web/JavaScript) code, interprété à l'aide de Node.js. En plus de cela, nous avons un certain nombre de bibliothèques, que nous avons mis en place pour fournir des services et des fonctionnalités orientées wiki, les macros interagissent avec la plate-forme wiki et avec son contenu. Si vous voulez en apprendre davantage, consultez le [guide KumaScript](/docs/fr/projet:MDN/Kuma/KumaScript_guide); le [KumaScript reference](/docs/fr/projet:MDN/Kuma/KumaScript_reference) fournit des détails sur les bibliothèques et autres API KumaScript que nous avons mis en œuvre.

## Utiliser une macro dans le contenu

Pour réellement utiliser une macro, vous placez simplement l'appel à la macro dans une paire de doubles acolades, avec ses paramètres, le cas échéant, entre parenthèses:

    \{{macroname(parameter-list)}}

Quelques notes sur les appels de macro:

- Les noms de macros sont sensibles à la casse, mais une tentative est faite pour corriger ces erreurs communes; vous pouvez utiliser tout en minuscules, même si le nom de la macro utilise des majuscules en son sein, et vous pouvez débuter par une majuscule une macro dont le nom commence normalement par une lettre minuscule.
- Les paramètres sont séparés par des virgules.
- Si il n'y a pas de paramètres, vous pouvez laisser les parenthèses ou les enlever; `\{{macroname()}}` et `\{{macroname}}` sont identiques.
- Les paramètres numériques peuvent être entre guillemets, ou non (cependant, si vous avez un numéro de version avec plusieurs décimales, il doit être entre guillemets).
- Si vous obtenez des erreurs, consultez votre code attentivement. Si vous ne pouvez toujours pas à comprendre ce qui se passe, voir [Dépannage des erreurs KumaScript](/fr/docs/MDN/Kuma/Troubleshooting_KumaScript_errors).

Les macros sont mis en cache; pour tout ensemble de valeurs d'entrée (les paramètres et les valeurs environnementales telles que l'URL pour laquelle la macro a été exécutée), les résultats sont stockés et réutilisés. Cela signifie que la macro est que effectivement parcourue que lorsque les entrées changent.

> **Note :** Vous pouvez forcer toutes les macros d'une page à être réévalué avec un shift-reload.

Les macros peuvent être aussi simple que d'insérer un plus grand bloc de texte ou d'échange dans le contenu d'une autre partie du MDN, ou aussi complexe que la construction de tout un index du contenu en cherchant dans des parties du site, coiffer la sortie, et en ajoutant des liens.

Vous pouvez lire sur nos macros les plus couramment utilisés sur le [couramment utilisés](/fr/docs/MDN/Contribute/Structures/Macros/Commonly-used_macros); aussi, il y a un [la liste complète de toutes les macros](https://developer.mozilla.org/fr/docs/templates) ici. La plupart des macros ont intégré dans la documentation eux, comme des commentaires en haut.

{{EditorGuideQuicklinks}}
