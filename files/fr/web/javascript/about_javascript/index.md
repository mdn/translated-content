---
title: À propos de JavaScript
slug: Web/JavaScript/About_JavaScript
tags:
  - Débutant
  - Intro
  - JavaScript
translation_of: Web/JavaScript/About_JavaScript
original_slug: Web/JavaScript/A_propos
---
{{jsSidebar}}

## Qu'est-ce que JavaScript ?

[JavaScript](https://fr.wikipedia.org/wiki/JavaScript)®, souvent abrégé en JS, est le langage de script développé par Netscape utilisé dans des millions de pages web et d'applications serveur dans le monde entier. Le JavaScript de Netscape est une extension du langage de script standard ECMA-262 Edition 3 (ECMAScript), ne différant que légèrement des standards publiés. JavaScript est un langage léger, interprété, orienté objet (les fonctions étant des objets à part entière). Il est [orienté prototype](https://fr.wikipedia.org/wiki/Programmation_orient%C3%A9e_prototype), multi-paradigme étant dynamique, impératif et fonctionnel à la fois

Contrairement à une conception populaire, _JavaScript n'est pas « du Java interprété »_. En quelques mots, JavaScript est un langage de script dynamique utilisant une construction d'objets basée sur des prototypes. La syntaxe de base est volontairement similaire à Java et à C++ pour réduire le nombre de concepts nouveaux à assimiler par un débutant. Les structures de contrôle, telles que les instructions `if`, les boucles `for` et `while`, les blocs `switch` et `try..catch` fonctionnent de la même manière que dans ces langages (ou presque).

JavaScript peut être employé en tant que langage [procédural](https://fr.wikipedia.org/wiki/Programmation_procédurale) ou [orienté objet](https://fr.wikipedia.org/wiki/Programmation_orientée_objet). Les objets sont créés par le programme et des méthodes et des propriétés lui sont attachés lors de l'exécution, contrairement aux définitions de classes courantes dans les langages compilés comme C++ et Java. Une fois qu'un objet a été construit, il peut servir de modèle (ou prototype) pour créer des objets similaires.

Parmi les capacités dynamiques de JavaScript, on peut citer la construction d'objets à l'exécution, les listes de paramètres variables, les fonctions comme variables, la création des scripts dynamique (via [`eval`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/eval)), le parcours d'objets (via [`for ... in`](/fr/docs/Web/JavaScript/Reference/Instructions/for...in)), et la récupération du code source (les programmes JavaScript peuvent décompiler les corps de fonction pour retrouver le code source).

Pour une description approfondie de la programation en JavaScript, consultez les liens de la section [ressources JavaScript](#Ressources_JavaScript) ci-dessous.

## Les implémentations de JavaScript disponibles

Mozilla héberge deux implémentations de JavaScript. La première **au monde** est celle créée par Brendan Eich chez Netscape, et depuis mise à jour pour se conformer à la cinquième édition d'ECMA-262 (aussi appelé ECMAScript 5). Ce moteur, portant le nom de code [SpiderMonkey](/fr/docs/SpiderMonkey), est implémenté en C. Le moteur [Rhino](/fr/docs/Rhino), créé principalement par Norris Boyd (également chez Netscape) est une implémentation de JavaScript en Java. Comme SpiderMonkey, Rhino suit la spécification ECMA-262 Edition 5.

Plusieurs optimisations ont été apportées au moteur JavaScript au fur et à mesure, parmi lesquelles on peut citer : TraceMonkey (Firefox 3.5), JägerMonkey (Firefox 4) et IonMonkey.

En plus de ces implémentations, il existe d'autres moteurs JavaScript largement utilisés comme :

- [V8](https://code.google.com/p/v8/ "https://code.google.com/p/v8/") de Google, qui est utilisé dans le navigateur Google Chrome et dans les versions récentes du navigateur Opéra.
- [JavaScriptCore](https://www.webkit.org/projects/javascript/index.html "https://www.webkit.org/projects/javascript/index.html") (SquirrelFish/Nitro) utilisé dans certains navigateurs WebKit tels que Safari, d'Apple.
- [Carakan](https://my.opera.com/ODIN/blog/carakan-faq "https://my.opera.com/ODIN/blog/carakan-faq") est utilisé dans les anciennes versions d'Opera.
- Le moteur [Chakra](https://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29 "https://en.wikipedia.org/wiki/Chakra_%28JScript_engine%29") est utilisé dans Internet Explorer (bien que le langage qu'il implémente soit formellement appelé « JScript » pour des raisons de droits des marques).

Chacun des moteurs JavaScript de Mozilla expose une API publique que les applications peuvent appeler pour utiliser JavaScript. L'environnement hôte le plus courant pour JavaScript est, de loin, un navigateur Web. Les navigateurs utilisent typiquement l'API publique pour créer des « objets hôtes », reflétant le [DOM](/fr/docs/DOM) en JavaScript.

Une autre utilisation courante de JavaScript est d'être un langage de script côté serveur (Web). Un serveur web JavaScript exposerait, lui, des objets hôtes représentant les requêtes HTTP et leurs réponses, qui peuvent ensuite être manipulées par un programme JavaScript pour générer dynamiquement des pages Web.

## Ressources JavaScript

- [SpiderMonkey](/fr/docs/SpiderMonkey)
  - : Informations concernant l'intégration du moteur JavaScript en C/C++ (SpiderMonkey).
- [Rhino](/fr/docs/Rhino)
  - : Informations concernant l'intégration du moteur JavaScript en Java (Rhino).
- [Ressources sur le langage JavaScript](/fr/docs/Web/JavaScript/Language_Resources)
  - : Liens vers les standards JavaScript publiées.
- [Une réintroduction à JavaScript](/fr/docs/Web/JavaScript/Une_réintroduction_à_JavaScript)
  - : [Le guide JavaScript](/fr/docs/Web/JavaScript/Guide) et [la référence JavaScript](/fr/docs/Web/JavaScript/Reference)

JavaScript® est une marque déposée d'Oracle aux États-Unis et dans d'autres pays.
