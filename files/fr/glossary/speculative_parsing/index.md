---
title: Optimisation des pages pour l'analyse spéculative
slug: Glossary/speculative_parsing
tags:
  - Avancé
  - Cookies
  - Développement Web
  - HTML
  - HTML5
  - NeedsUpdate
translation_of: Glossary/speculative_parsing
original_slug: Web/HTML/Optimizing_your_pages_for_speculative_parsing
---
Traditionnellement dans les navigateurs, l'analyseur HTML a été exécuté sur le fil principal et a été bloqué après une balise `</script>` jusqu'à ce que le script ait été extrait du réseau et exécuté. L'analyseur HTML dans Firefox 4 et versions ultérieures prend en charge l'analyse spéculative sur le fil principal. Il analyse "en avant" pendant que les scripts sont téléchargés et exécutés. Comme dans Firefox 3.5 et 3.6, l'analyseur HTML lance des chargements spéculatifs pour les scripts, les feuilles de style et les images qu'il trouve à l'avance dans le flux. Toutefois, dans Firefox 4 et versions ultérieures, l'analyseur HTML exécute également l'algorithme de construction de l'arborescence HTML de manière spéculative. L'avantage est que lorsqu'une spéculation réussit, il n'est pas nécessaire d'analyser la partie du fichier entrant qui a déjà été analysée pour les scripts, les feuilles de style et les images. L'inconvénient est qu'il y a plus de travail perdu quand la spéculation échoue.

Ce document vous aide à éviter le genre de choses qui font échouer la spéculation et ralentir le chargement de votre page.

## Réussir les chargements spéculatifs

Il n'y a qu'une seule règle pour réussir les chargements spéculatifs de scripts liés, de feuilles de style et d'images :

- Si vous utilisez un élément `<base>` pour remplacer l'URI de base de votre page, placez l'élément dans la partie non-scriptée du document. Ne l'ajoutez pas par `document.write()` ou `document.createElement()`.

## Éviter de perdre la sortie du constructeur d'arborescence

L'analyse spéculative du constructeur d'arborescence échoue quand `document.write()` change l'état du constructeur d'arborescence, au point que l'état spéculatif après la balise `</script>` ne tient plus lorsque tout le contenu inséré par `document.write()` a été analysé. Cependant, seules les utilisations inhabituelles de `document.write()` entraînent ce genre de problèmes. Ici, les choses à éviter :

- n'écrivez pas d'arborescences déséquilibrées. `<script>document.write("<div>");</script>` est mauvais. `<script>document.write("<div></div>");</script>` est valide.
- n'écrivez pas de balisage infini. `<script>document.write("<div></div");</script>` est mauvais.
- ne terminez pas votre écriture avec un retour chariot . `<script>document.write("Hello World!\r");</script>` est mauvais. `<script>document.write("Hello World!\n");</script>` est valide.
- notez que l'écriture de balises équilibrées peut entraîner la déduction d'autres balises de telle manière que l'écriture est finalement déséquilibrée. Par exemple, `<script>document.write("<div></div>");</script>` à l'intérieur de l'élément d'en-tête sera interprété comme `<script>document.write("</head><body><div></div>");</script>` qui est déséquilibré.
- ne pas formater une partie de tableau. `<table><script>document.write("<tr><td>Hello World!</td></tr>");</script></table>` est mauvais. Par contre, ` <script>document.write("``<table>``<tr><td>Hello World!</td></tr>``</table>``");</script> ` est valide.
- À FAIRE : document.write inclus dans d'autres éléments de formatage.
