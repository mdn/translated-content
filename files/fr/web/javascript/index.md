---
title: JavaScript
slug: Web/JavaScript
tags:
  - JavaScript
  - Landing
  - Landing page
  - Learn
translation_of: Web/JavaScript
---
{{JsSidebar}}

**JavaScript** (souvent abrégé en « JS ») est un langage de script léger, orienté objet, principalement connu comme le langage de script des pages web. Mais il est aussi [utilisé dans de nombreux environnements extérieurs aux navigateurs web](https://fr.wikipedia.org/wiki/JavaScript#Autres_utilisations) tels que [Node.js](https://nodejs.org/), [Apache CouchDB](https://couchdb.apache.org/) voire [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html). Le code JavaScript est interprété ou compilé à la volée ([JIT](https://fr.wikipedia.org/wiki/Compilation_%C3%A0_la_vol%C3%A9e)). C'est un langage à objets utilisant le concept de [prototype](https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_prototype), disposant d'un typage faible et dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet. [Apprenez-en plus sur JavaScript](/fr/docs/Web/JavaScript/About_JavaScript).

Cette section de MDN est dédiée au langage JavaScript. Pour des informations sur l'utilisation de JavaScript avec les [API](/fr/docs/Glossary/API) spécifiques des navigateurs web pour les pages web, veuillez consulter les sections sur les [API Web](/fr/docs/Web/API) (_Web API_ en anglais) et le [DOM](/fr/docs/Web/API/Document_Object_Model).

Le standard qui spécifie JavaScript est [ECMAScript](/fr/docs/Web/JavaScript/Language_Resources). En 2012, tous les navigateurs modernes supportent complètement ECMAScript 5.1. Les anciens navigateurs supportent au minimum ECMAScript 3. Une sixième version majeure du standard a été finalisée et publiée le 17 juin 2015. Cette version s'intitule officiellement ECMAScript 2015 mais est encore fréquemment appelée ECMAScript 6 ou ES6. Étant donné que les standards ECMAScript sont désormais édités sur un rythme annuel, cette documentation fait référence à la dernière version en cours de rédaction, actuellement c'est [ECMAScript 2020](https://tc39.github.io/ecma262/).

JavaScript ne doit pas être confondu avec le [langage de programmation Java](https://fr.wikipedia.org/wiki/Java_%28langage%29). Java et JavaScript sont deux marques déposées par Oracle dans de nombreux pays mais ces deux langages de programmation ont chacun une syntaxe, une sémantique et des usages différents.

> **Remarque :** **Vous cherchez à devenir un développeur web front-end ?**
>
> Nous avons élaboré un cours qui comprend toutes les informations essentielles dont vous avez besoin pour atteindre votre objectif.
>
> [Commencer](/fr/docs/Learn/Front-end_web_developer)

## Tutoriels

Apprenez comment programmer en JavaScript.

### Ressources pour commencer

Si vous souhaitez apprendre JavaScript et que vous débutez en programmation ou en JavaScript, [la section JavaScript de la zone d'apprentissage de MDN (_learning area_)](/fr/docs/Learn/JavaScript) est le meilleur endroit où commencer. Cette section contient les modules suivants :

- [Les premiers pas en JavaScript](/fr/docs/Learn/JavaScript/First_steps)
  - : Cet ensemble de chapitres répond à des questions telles que « qu'est-ce que JavaScript ? », « à quoi ressemble-t-il ? », « que puis-je faire avec ? » et présente des éléments clés du langage tels que les variables, les chaînes de caractères, les nombres et les tableaux.
- [Les principaux blocs de JavaScript](/fr/docs/Learn/JavaScript/Building_blocks)
  - : On poursuit ici la présentation des fonctionnalités importantes de JavaScript, notamment celle des blocs de codes fréquemment utilisés comme les instructions conditionnelles, les boucles, les fonctions et les évènements.
- [Une introduction aux objets JavaScript](/fr/docs/Learn/JavaScript/Objects)
  - : JavaScript est un langage de programmation « orienté objet » et ce concept est primordial pour utiliser JavaScript au mieux, écrire du code plus efficace et comprendre son fonctionnement. Ce module présente les bases de ces concepts.
- [La programmation asynchrone en JavaScript](/fr/docs/Learn/JavaScript/Asynchronous)
  - : Dans cet article, on aborde les fonctionnalités asynchrones de JavaScript, en quoi elles sont importantes et la façon dont elles peuvent être utilisées lors d'opérations bloquantes comme la récupération de ressources provenant d'un serveur.
- [Les API Web utilisées côté client](/fr/docs/Learn/JavaScript/Client-side_web_APIs)
  - : Lorsqu'on écrit du JavaScript pour un site web ou une application, il est rapidement nécessaire de manipuler les API : des interfaces qui permettent de manipuler différents aspects du navigateur, des données provenant d'autres sites ou services, etc. Dans ce module, nous verrons ce que sont les API, et comment utiliser les API les plus fréquemment utilisées.

### Guide JavaScript

- [Guide JavaScript](/fr/docs/Web/JavaScript/Guide)
  - : Un guide détaillé de JavaScript, destiné aux personnes qui ont déjà développé en JavaScript ou avec un autre langage.

### Niveau intermédiaire

- [Comprendre les _frameworks_ JavaScript côté client](/fr/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks)
  - : Les _frameworks_ JavaScript font partie de l'écosystème du développement web côté client. Les outils qu'ils fournissent permettent de construire des applications dynamiques sur des bases robustes. Dans ce module, on présente les notions principales de leur fonctionnement et comment ces outils peuvent rejoindre votre panoplie. Des tutoriels sur les frameworks les plus répandus suivront cet article.
- [Une réintroduction à JavaScript](/fr/docs/Web/JavaScript/A_re-introduction_to_JavaScript)
  - : Un aperçu pour ceux qui _pensent_ s'y connaître en JavaScript.
- [Structures de données JavaScript](/fr/docs/Web/JavaScript/Data_structures)
  - : Aperçu des structures de données disponibles en JavaScript.
- [Égalité, comparaison et similarité](/fr/docs/Web/JavaScript/Equality_comparisons_and_sameness)
  - : JavaScript propose trois opérations de comparaison de valeurs différentes : l'égalité stricte à l'aide de `===`, l'égalité souple à l'aide de `==` et la méthode [`Object.is()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
- [Closures](/fr/docs/Web/JavaScript/Closures)
  - : Une _closure_ est la combinaison d'une fonction et de l'environnement lexical dans lequel cette fonction a été déclarée.

### Niveau avancé

- [Héritage et chaîne de prototypes](/fr/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
  - : Cette page explique l'héritage à base de prototype, un concept souvent incompris et sous-estimé.
- [Le mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)
  - : Une variante plus restreinte de JavaScript (par exemple, on ne peut pas utiliser de variable avant de l'avoir définie). Elle permet d'obtenir de meilleures performances et de faciliter le débogage.
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Typed_arrays)
  - : Les tableaux typés permettent d'accéder à des données binaires brutes, de façon organisée.
- [La gestion de la mémoire en JavaScript](/fr/docs/Web/JavaScript/Memory_Management)
  - : Cet article décrit le cycle de vie des objets et de la mémoire en JavaScript, ainsi que le mécanisme du ramasse-miettes.
- [Gestion de la concurrence et boucle des événements](/fr/docs/Web/JavaScript/EventLoop)
  - : Le modèle de concurrence utilisé par JavaScript est basé sur une « boucle d'événements »

## Référence

Parcourez la documentation complète de la [référence JavaScript](/fr/docs/Web/JavaScript/Reference).

- [Les objets standard](/fr/docs/Web/JavaScript/Reference/Global_Objects)
  - : Apprenez à connaître les objets natifs standard tels que [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Boolean`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean), [`Date`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Date), [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error), [`Function`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function), [`JSON`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON), [`Math`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math), [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number), [`Object`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object), [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp), [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String), [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map), [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set), [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap), [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet), et d'autres.
- [Les expressions et les opérateurs](/fr/docs/Web/JavaScript/Reference/Operators)
  - : Apprenez à connaître comment fonctionnent les opérateurs JavaScript comme [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof), [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof), [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new), [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) et bien d'autres notions comme [la précédence des opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence).
- [Les instructions et les déclarations](/fr/docs/Web/JavaScript/Reference/Statements)
  - : Apprenez à connaître comment utiliser [`do...while`](/fr/docs/Web/JavaScript/Reference/Statements/do...while), [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in), [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of), [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch), [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let), [`var`](/fr/docs/Web/JavaScript/Reference/Statements/var), [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const), [`if...else`](/fr/docs/Web/JavaScript/Reference/Statements/if...else), [`switch`](/fr/docs/Web/JavaScript/Reference/Statements/switch) et les autres mots-clés et instructions JavaScript.
- [Les fonctions](/fr/docs/Web/JavaScript/Reference/Functions)
  - : Apprenez à utiliser les fonctions en JavaScript pour développer vos applications.

## Outils & ressources

Voici une liste d'outils utiles pour écrire et déboguer du code **JavaScript**.

- [Outils de développement de Firefox](/fr/docs/Tools)
  - : [Console web](/fr/docs/Tools/Web_Console), [profileur JavaScript](/fr/docs/Tools/Performance), [débogueur](/fr/docs/Tools/Debugger), et plus.
- [Invites de commande JavaScript](/fr/docs/Web/JavaScript/Shells)
  - : Un interpréteur de commandes JavaScript vous permet de tester rapidement des extraits de code JavaScript.
- [Apprendre le JavaScript (en anglais)](https://learnjavascript.online/)
  - : Une excellente ressource pour les développeurs web en herbe - Apprenez JavaScript dans un environnement interactif, avec des leçons courtes et des tests interactifs, guidés par une évaluation automatique. Les 40 premières leçons sont gratuites, et le cours complet est disponible moyennant un petit paiement unique.
- [TogetherJS](https://togetherjs.com/)
  - : La collaboration rendue facile. En ajoutant TogetherJS à votre site, vos utilisateurs peuvent s'entraider sur un site web en temps réel !
- [Stack Overflow](https://stackoverflow.com/questions/tagged/javascript)
  - : Questions Stack Overflow portant le tag « JavaScript ».
- [JSFiddle](https://jsfiddle.net/)
  - : Modifiez votre code JavaScript, CSS, HTML et obtenez des résultats en direct. Utilisez des ressources externes et collaborez avec votre équipe en ligne.
- [Plunker](https://plnkr.co/)
  - : Plunker est une communauté en ligne pour créer, collaborer et partager vos idées de développement web. Modifiez vos fichiers JavaScript, CSS, HTML et obtenez des résultats en direct et la structure des fichiers.
- [JSBin](https://jsbin.com/)
  - : JS Bin est un outil de débogage collaboratif open-source pour le développement web.
- [Codepen](https://codepen.io/)
  - : Codepen est un autre outil de développement web collaboratif utilisé comme un terrain de jeu pour des résultats en direct.
- [StackBlitz](https://stackblitz.com/)
  - : StackBlitz est un autre terrain de jeu/outil de débogage en ligne, qui peut héberger et déployer des applications full-stack utilisant React, Angular, etc.
- [RunJS](https://runjs.app/)
  - : RunJS est un outil de bureau de type bac-à-sable/ardoise, qui fournit des résultats en direct et un accès aux API Node.JS et à celles du navigateur.
