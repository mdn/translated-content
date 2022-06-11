---
title: Lignes directrices pour les fragments de code
slug: MDN/Guidelines/Code_guidelines
tags:
  - CSS
  - Code
  - Guide
  - HTML
  - JavaScript
  - MDN Meta
  - Shell
translation_of: MDN/Guidelines/Code_guidelines
original_slug: MDN/Guidelines/Code_lignesdirectrices
---
{{MDNSidebar}}

Cette série de documents décrit les directives de codage et les meilleures pratiques que nous utilisons pour écrire des démonstrations, des extraits de code, des exemples interactifs, etc. à utiliser sur MDN.

Si vous cherchez des lignes directrices à suivre pour rédiger vos exemples de codes, vous êtes au bon endroit. Le plus grand avantage de respecter ces directives est qu'elles favoriseront la cohérence entre nos échantillons et nos démos sur MDN, ce qui augmente la lisibilité et la compréhension en général.

> **Note :** Si vous souhaitez obtenir des conseils sur le style du code tel qu'il apparaît sur un article de MDN, plutôt que sur le contenu du code, consultez notre [Guide stylistique](/fr/docs/MDN/Guidelines/Writing_style_guide#code_sample_style_and_formatting).

## Structure d'article

Cet article contient les meilleures pratiques générales de haut niveau pour la rédaction d'exemples de codes MDN. Ses sous-articles sont les suivants :

- [Lignes directrices générales pour tous les codes](/fr/docs/MDN/Guidelines/Code_guidelines/General) — à la fois syntaxique et pour des exemples de stylisme/affichage
- [Lignes directrices du HTML](/fr/docs/MDN/Guidelines/Code_guidelines/HTML)
- [Lignes directrices du CSS](/fr/docs/MDN/Guidelines/Code_guidelines/CSS)
- [Lignes directrices du JavaScript](/fr/docs/MDN/Guidelines/Code_guidelines/JavaScript)
- [Lignes directrices des commandes Shell](/fr/docs/MDN/Guidelines/Code_guidelines/Shell)

## Bonnes pratiques générales

Cette section fournit rapidement les meilleures pratiques générales pour créer un échantillon de code minimal compréhensible afin de démontrer l'utilisation d'une caractéristique ou d'une fonction spécifique.

Les échantillons de code doivent l'être :

- assez simple pour être compréhensible, mais
- suffisamment complexe pour faire quelque chose d'intéressant, et de préférence utile.

Il y a une considération primordiale que vous devez garder à l'esprit : **Les lecteurs copieront et colleront l'échantillon de code dans leur propre code, et pourront le mettre en production.**

Par conséquent, vous devez vous assurer que l'exemple de code est utilisable et suit les meilleures pratiques généralement acceptées, et **ne fait rien** qui puisse rendre une application peu sûre, grossièrement inefficace, gonflée ou inaccessible. Si l'exemple de code n'est pas utilisable ou ne vaut pas la peine d'être produit, veillez à inclure un avertissement dans un commentaire de code et dans le texte explicatif — s'il s'agit d'un extrait et non d'un exemple complet, précisez-le clairement. Cela signifie également que vous devez fournir **toutes** les informations nécessaires à l'exécution de l'exemple, y compris les dépendances et la configuration.

Les échantillons de code doivent être aussi autonomes et faciles à comprendre que possible. L'objectif n'est pas nécessairement de produire un code efficace et intelligent qui impressionne les experts et possède une grande fonctionnalité, mais plutôt de produire des exemples de travail réduits qui peuvent être compris le plus rapidement possible.

Les autres meilleures pratiques générales sont les suivantes :

- L'échantillon doit être court et, idéalement, ne montrer que la caractéristique qui vous intéresse immédiatement.
- **Seulement** inclure le code qui est essentiel pour l'exemple. Une grande quantité de code non pertinent peut facilement distraire ou embrouiller le public. Si vous souhaitez fournir un exemple complet, plus long, mettez-le dans l'un de nos [Dépôts GitHub](https://github.com/mdn/) (ou un JSBin, CodePen, ou similaire) et fournissez ensuite le lien vers la version complète au-dessus ou au-dessous de l'échantillon.
- N'incluez pas de code côté serveur, de bibliothèques, de frameworks, de préprocesseurs et autres dépendances inutiles - ils rendent le code moins portable et plus difficile à exécuter et à comprendre. Utilisez du code "vanilla" lorsque cela est possible.
- Ne présumez pas de la connaissance des bibliothèques, des frameworks, des préprocesseurs ou d'autres fonctionnalités non natives. Par exemple, utilisez des noms de classe qui ont un sens dans l'exemple plutôt que des noms de classe qui ont un sens pour les utilisateurs de BEM ou Bootstrap.
- Écrivez votre code de manière aussi propre et compréhensible que possible, même si ce n'est pas la manière la plus efficace de le faire.
- N'utilisez pas de mauvaises pratiques pour faire court (comme des éléments de présentation tels que [`<big>`](/fr/docs/Web/HTML/Element/big) ou [`document.write()`](/fr/docs/Web/API/Document/write)) ; faites-le correctement.
- Dans le cas des démonstrations d'API, si vous utilisez plusieurs API ensemble, indiquez quelles API sont incluses ainsi que l'origine des fonctionnalités.
