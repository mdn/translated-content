---
title: Méthode
slug: Glossary/Method
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **méthode** est une {{Glossary("function", "fonction")}} qui est une {{Glossary("property", "propriété")}} d'un {{Glossary("object", "objet")}}. Il existe deux sortes de méthodes&nbsp;: Les _méthodes d'instance_ qui représentent les fonctions fournissant une interface pour effectuer des actions dans le contexte de l'objet qu'elles composent ou les _{{Glossary("static method", "méthodes statiques")}}_ qui représentent les fonctions pouvant être exécutées sans nécessiter d'instanciation.

> [!NOTE]
> En JavaScript, les fonctions sont elles-mêmes des objets. Dans ce contexte, une méthode est plus précisément une {{Glossary("object reference", "référence vers un objet")}} de type `function`.

Lorsque l'on dit que `F` est une _méthode_ de `O`, cela signifie souvent que `F` utilise `O` comme liaison pour [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this). Les propriétés de fonction qui n'ont pas de comportements différents selon leur valeur `this` (ou celles qui n'ont pas de liaison dynamique à `this` — comme les [fonctions liées](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) et les [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions)) ne sont pas toujours universellement reconnues comme des méthodes.

## Voir aussi

- [Méthode (informatique)](<https://fr.wikipedia.org/wiki/Méthode_(informatique)>) sur Wikipédia
- [Définir une méthode en JavaScript](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions) (comparaison entre la syntaxe traditionnelle et la version proposée pour ECMAScript 6)
- [Liste des méthodes fournies par JavaScript](/fr/docs/Web/JavaScript/Reference)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("function", "Fonction")}}
  - {{Glossary("object", "Objet")}}
  - {{Glossary("property", "Propriété")}}
  - {{Glossary("static method", "Méthode statique")}}
