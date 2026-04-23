---
title: JavaScript
slug: Web/JavaScript
l10n:
  sourceCommit: 04158640487c17d515de8078c9307a2f906377d0
---

**JavaScript** (ou **JS** en abrégé) est un langage de programmation léger, interprété (ou {{Glossary("Just_In_Time_Compilation", "compilé à la volée")}}) avec des {{Glossary("First-class Function", "fonctions de première classe")}}. S'il est surtout connu comme langage de script pour les pages web, [de nombreux environnements hors navigateur](https://fr.wikipedia.org/wiki/JavaScript#Autres_utilisations) l'utilisent aussi, comme {{Glossary("Node.js")}}, [Apache CouchDB <sup>(angl.)</sup>](https://couchdb.apache.org/) ou [Adobe Acrobat <sup>(angl.)</sup>](https://opensource.adobe.com/dc-acrobat-sdk-docs/acrobatsdk/). JavaScript est un langage [à prototype](/fr/docs/Glossary/Prototype-based_programming), [à ramasse-miettes](/fr/docs/Glossary/Garbage_collection), [dynamique](/fr/docs/Glossary/Dynamic_typing), prenant en charge plusieurs paradigmes&nbsp;: impératif, fonctionnel et orienté objet.

Les capacités dynamiques de JavaScript incluent la construction d'objets à l'exécution, les listes de paramètres variables, les fonctions comme variables, la création dynamique de scripts (via [`eval`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval)), l'introspection d'objets (via [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) et les utilitaires [`Object`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)), et la récupération du code source (les fonctions JavaScript conservent leur texte source, accessible via [`toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/toString)).

Cette section est dédiée au langage JavaScript lui-même, et non aux parties spécifiques aux pages web ou à d'autres environnements hôtes. Pour les {{Glossary("API")}} propres aux pages web, consultez [API Web](/fr/docs/Web/API) et {{Glossary("DOM")}}.

Les standards de JavaScript sont la [spécification ECMAScript <sup>(angl.)</sup>](https://tc39.es/ecma262/) (ECMA-262) et la [spécification ECMAScript Internationalization API <sup>(angl.)</sup>](https://tc39.es/ecma402/) (ECMA-402). Dès qu'un navigateur implémente une fonctionnalité, nous essayons de la documenter. Ainsi, il arrive que certaines [propositions de nouvelles fonctionnalités ECMAScript <sup>(angl.)</sup>](https://github.com/tc39/proposals) soient déjà implémentées dans les navigateurs&nbsp;; la documentation et les exemples sur MDN peuvent donc les utiliser. Cela se produit le plus souvent entre les [étapes <sup>(angl.)</sup>](https://tc39.es/process-document/) 3 et 4, généralement avant la publication officielle de la spécification.

Ne confondez pas JavaScript avec le [langage Java](<https://fr.wikipedia.org/wiki/Java_(langage)>) — **JavaScript n'est _pas_ un «&nbsp;Java interprété&nbsp;»**. «&nbsp;Java&nbsp;» et «&nbsp;JavaScript&nbsp;» sont des marques ou des marques déposées d'Oracle aux États-Unis et dans d'autres pays. Cependant, ces deux langages ont une syntaxe, une sémantique et des usages très différents.

La documentation JavaScript sur les fonctionnalités du langage (principalement le [noyau ECMAScript](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)) comprend&nbsp;:

- Le [guide JavaScript](/fr/docs/Web/JavaScript/Guide)
- La [référence JavaScript](/fr/docs/Web/JavaScript/Reference)

Pour plus d'informations sur les spécifications JavaScript et les technologies associées, voir [Vue d'ensemble des technologies JavaScript](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Tutoriels pour les débutant·e·s

Nos [modules principaux pour apprendre le développement web](/fr/docs/Learn_web_development/Core) proposent des tutoriels modernes et à jour sur les bases de JavaScript.

- [Votre premier site web&nbsp;: ajouter de l'interactivité](/fr/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity)
  - : Cet article propose une brève introduction à JavaScript et à son utilisation, destinée aux personnes totalement débutantes en développement web.
- [Scripts dynamiques avec JavaScript](/fr/docs/Learn_web_development/Core/Scripting)
  - : Ce module se concentre sur l'essentiel du langage JavaScript, ainsi que sur quelques sujets clés autour&nbsp;: apprendre ces notions vous donnera une base solide.
- [Frameworks et bibliothèques JavaScript](/fr/docs/Learn_web_development/Core/Frameworks_libraries)
  - : Les frameworks JavaScript sont essentiels dans le développement web moderne côté client, fournissant des outils éprouvés pour créer des applications web interactives et évolutives. Beaucoup d'entreprises les utilisent comme standard, et de nombreux emplois en développement exigent désormais une expérience des frameworks. Cette série d'articles constitue un point de départ confortable pour débuter avec les frameworks.

## Guides JavaScript

### Guides fondamentaux du langage

- [Guide JavaScript](/fr/docs/Web/JavaScript/Guide)
  - : Un guide beaucoup plus détaillé du langage JavaScript, destiné à celles et ceux ayant déjà programmé en JavaScript ou dans un autre langage.

### Intermédiaire

- [Objets JavaScript avancés](/fr/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects)
  - : La nature orientée objet de JavaScript est importante à comprendre pour progresser et écrire un code plus efficace&nbsp;; ce module est là pour vous y aider.
- [JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS)
  - : Ce module présente le JavaScript {{Glossary("asynchronous", "asynchrone")}}, pourquoi il est important et comment l'utiliser pour gérer efficacement les opérations potentiellement bloquantes, comme la récupération de ressources sur un serveur.
- [API web côté client](/fr/docs/Learn_web_development/Extensions/Client-side_APIs)
  - : Explore ce que sont les API et comment utiliser les plus courantes dans vos développements.
- [Vue d'ensemble du langage JavaScript](/fr/docs/Web/JavaScript/Guide/Language_overview)
  - : Un aperçu de la syntaxe et de la sémantique de base de JavaScript pour celles et ceux venant d'autres langages.
- [Structures de données JavaScript](/fr/docs/Web/JavaScript/Guide/Data_structures)
  - : Présentation des structures de données disponibles en JavaScript.
- [Comparaisons d'égalité et identité](/fr/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness)
  - : JavaScript propose trois opérations de comparaison de valeurs&nbsp;: l'égalité stricte avec `===`, l'égalité souple avec `==` et la méthode {{jsxref("Object.is()")}}.
- [Énumérabilité et propriété des attributs](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
  - : Comment les différentes méthodes qui parcourent les propriétés d'un objet gèrent l'énumérabilité et la propriété de ces attributs.
- [Closures](/fr/docs/Web/JavaScript/Guide/Closures)
  - : Une closure est la combinaison d'une fonction et de l'environnement lexical dans lequel elle a été déclarée.

### Avancé

- [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
  - : Explication de l'héritage basé sur les prototypes, souvent mal compris et sous-estimé.
- [Gestion de la mémoire](/fr/docs/Web/JavaScript/Guide/Memory_management)
  - : Cycle de vie de la mémoire et ramasse-miettes en JavaScript.

## Référence

Consultez la [référence JavaScript complète](/fr/docs/Web/JavaScript/Reference).

- [Objets standards](/fr/docs/Web/JavaScript/Reference/Global_Objects)
  - : Découvrez les objets intégrés standards&nbsp;: {{jsxref("Array")}}, {{jsxref("Boolean")}}, {{jsxref("Error")}}, {{jsxref("Function")}}, {{jsxref("JSON")}}, {{jsxref("Math")}}, {{jsxref("Number")}}, {{jsxref("Object")}}, {{jsxref("RegExp")}}, {{jsxref("String")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, et d'autres.
- [Expressions et opérateurs](/fr/docs/Web/JavaScript/Reference/Operators)
  - : Approfondissez le comportement des opérateurs JavaScript&nbsp;: {{jsxref("Operators/instanceof", "instanceof")}}, {{jsxref("Operators/typeof", "typeof")}}, {{jsxref("Operators/new", "new")}}, {{jsxref("Operators/this", "this")}}, la [priorité des opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence), etc.
- [Instructions et déclarations](/fr/docs/Web/JavaScript/Reference/Statements)
  - : Découvrez le fonctionnement de {{jsxref("Statements/do...while", "do-while")}}, {{jsxref("Statements/for...in", "for-in")}}, {{jsxref("Statements/for...of", "for-of")}}, {{jsxref("Statements/try...catch", "try-catch")}}, {{jsxref("Statements/let", "let")}}, {{jsxref("Statements/var", "var")}}, {{jsxref("Statements/const", "const")}}, {{jsxref("Statements/if...else", "if-else")}}, {{jsxref("Statements/switch", "switch")}} et d'autres instructions et mots-clés JavaScript.
- [Fonctions](/fr/docs/Web/JavaScript/Reference/Functions)
  - : Apprenez à utiliser les fonctions JavaScript pour développer vos applications.
- [Classes](/fr/docs/Web/JavaScript/Reference/Classes)
  - : Les classes JavaScript sont la manière la plus adaptée de faire de la programmation orientée objet.
