---
title: Utiliser les macros
slug: MDN/Structures/Macros
translation_of: MDN/Structures/Macros
---
{{MDNSidebar}}

La plate-forme [Yari](/fr/docs/MDN/Yari) qui est la partie serveur de MDN, fournit un système de macros, [KumaScript](/fr/docs/MDN/Tools/KumaScript), qui permet d'automatiser certaines tâches. Cet article fournit des informations sur la façon d'invoquer les macros MDN dans les articles.

Le [Guide KumaScript](/fr/docs/MDN/Tools/KumaScript) offre un regard en profondeur sur la façon d'utiliser des macros sur MDN, cette section est plus qu'un bref aperçu.

## Comment les macros sont-elles mises en œuvre

Macros sur MDN sont mis en œuvre en utilisant le serveur exécuté [JavaScript](/fr/docs/Web/JavaScript) code, interprété à l'aide de  [Node.js](https://nodejs.org/). En plus de cela, nous avons implémenté plusieurs bibliothèques qui fournissent des fonctionnalités d'interaction entre les macros, la plateforme et le contenu.

## Utiliser une macro dans le contenu

Pour utiliser une macro, on placera l'appel à la macro dans une paire de doubles accolades, avec ses éventuels paramètres entre parenthèses&nbsp;:

```js
\{{macroname(liste-parametres)}}
```

Quelques notes sur les appels de macro&nbsp;:

- Les noms de macros sont sensibles à la casse, mais une tentative automatique est effectuée pour corriger ces erreurs communes&nbsp;; vous pouvez utiliser tout en minuscules, même si le nom de la macro utilise des majuscules en son sein, et vous pouvez débuter par une majuscule une macro dont le nom commence normalement par une lettre minuscule.
- Les paramètres sont séparés par des virgules.
- S'il n'y a pas de paramètres, vous pouvez laisser les parenthèses ou les enlever&nbsp;; `\{{macroname()}}` et `\{{macroname}}` sont équivalents.
- Les paramètres numériques peuvent être entre guillemets, ou non (cependant, si vous avez un numéro de version avec plusieurs décimales, il doit être entre guillemets).
- Si vous obtenez des erreurs, consultez votre code attentivement. Si vous ne pouvez toujours pas à comprendre ce qui se passe, voir [Dépannage des erreurs KumaScript](/en-US/docs/MDN/Tools/KumaScript/Troubleshooting).

Les macros sont mises en cache&nbsp;; pour tout ensemble de valeurs d'entrée (les paramètres et les valeurs environnementales telles que l'URL pour laquelle la macro a été exécutée), les résultats sont stockés et réutilisés. Cela signifie que la macro uniquement exécutée de nouveau lorsque les paramètres en entrée changent.

La fonctionnalité fournie par une macro peut être aussi simple que d'insérer un plus grand bloc de texte ou de réutiliser le contenu présent autre part sur MDN, ou aussi complexe que la construction de tout un index du contenu en cherchant dans des parties du site, mettre en forme le résultat, et ajouter des liens.

Pour en savoir plus sur les macros les plus couramment utilisées, vous pouvez lire [l'article sur les macros couramment utilisées](/fr/docs/MDN/Structures/Macros/Commonly-used_macros). Vous pouvez également parcourir [la liste exhaustive, et le code source, de toutes les macros](https://github.com/mdn/yari/tree/main/kumascript/macros). Pour la plupart, le code des macros est documenté avec des commentaires en haut du fichier source.
