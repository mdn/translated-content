---
title: Analyse Syntaxique
slug: Glossary/Parse
translation_of: Glossary/Parse
original_slug: Glossaire/Parse
---

"Parser" signifie analyser et convertir un programme en un format interne que l'environnement d'exécution peut exécuter, par exemple le moteur {{glossary("JavaScript")}} dans les navigateurs.

Le [navigateur "parse", analyse, HTML](/fr/docs/Learn/HTML) dans une arborescence {{glossary('DOM')}}. L'analyse HTML implique la [tokénisation](/fr/docs/Web/API/DOMTokenList) et la construction d'arborescences. Les "tokens" HTML incluent des balises de début et de fin, ainsi que des noms et des valeurs d'attribut. Si le document est bien formé, son analyse est simple et rapide. L'analyseur "parse" l'entrée tokenisée dans le document, en créant l'arborescence du document.

Lorsque l'analyseur HTML trouve des ressources non bloquantes, telles qu'une image, le navigateur demande ces ressources et continue l'analyse. L'analyse peut continuer lorsqu'un fichier CSS est rencontré, mais les balises `<script>`, en particulier (celles sans attribut [`async`](/fr/docs/Web/JavaScript/Reference/Statements/async_function) ou `defer`) bloque le rendu et interrompt l'analyse du code HTML.

Lorsque le navigateur rencontre des styles CSS, il analyse le texte dans le modèle d'objet CSS (ou {{glossary('CSSOM')}}), une structure de données qu'il utilise ensuite pour styliser les mises en page et la peinture. Le navigateur crée ensuite une arborescence de rendu à partir de ces deux structures pour pouvoir peindre le contenu à l'écran. JavaScript est également téléchargé, analysé, puis exécuté.

L'analyse de JavaScript est faite pendant le {{glossary("compile time", "moment de compilation")}} ou quand l'{{glossary("parser", "analyseur syntaxique")}} est appelé, comme pendant l'appel à une méthode.

## Voir aussi

### Culture générale

- [Analyse syntaxique](https://fr.wikipedia.org/wiki/Analyse_syntaxique) sur Wikipédia
