---
title: Introduction
slug: Web/JavaScript/Guide/Introduction
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Ce chapitre introduit JavaScript et présente certains de ses concepts fondamentaux.

## Ce que vous devriez déjà savoir

Pour lire ce guide, il est conseillé d'avoir&nbsp;:

- Une compréhension générale du fonctionnement d'Internet et du [World Wide Web](/fr/docs/Glossary/World_Wide_Web) .
- Une connaissance élémentaire du _HyperText Markup Language_ ({{Glossary("HTML")}}).
- Une expérience préalable en programmation. Si vous débutez la programmation, vous pouvez utiliser l'un des tutoriels listés sur la page [JavaScript](/fr/docs/Web/JavaScript).

## Où trouver des informations concernant JavaScript

La documentation MDN pour JavaScript comprend&nbsp;:

- [Apprendre le Web](/fr/docs/Learn)&nbsp;: cette section fournit des informations destinées aux débutants et présente les concepts de bases autour de la programmation et d'Internet.
- [Le guide JavaScript](/fr/docs/Web/JavaScript/Guide) (ce guide) fournit un aperçu du langage JavaScript et de ses objets.
- [La référence JavaScript](/fr/docs/Web/JavaScript/Reference) fournit une référence détaillée sur les fonctionnalités de JavaScript.

Si vous débutez en JavaScript, vous pouvez commencer par les articles de la section [Apprendre](/fr/docs/Learn) et du [Guide JavaScript](/fr/docs/Web/JavaScript/Guide). Une fois que vous maîtrisez les briques de bases, vous pourrez utiliser [la référence JavaScript](/fr/docs/Web/JavaScript/Reference) pour obtenir des informations détaillées sur chacun des objets natifs et des instructions.

## Qu'est-ce que JavaScript&nbsp;?

JavaScript est un langage de script, multi-plateforme et orienté objet. C'est un langage léger qui doit faire partie d'un environnement hôte (un navigateur web par exemple) pour qu'il puisse être utilisé sur les objets de cet environnement.

JavaScript contient une bibliothèque standard d'objets tels que `Array`, `Date`, et `Math`, ainsi qu'un ensemble d'éléments de langage tels que les opérateurs, les structures de contrôles et les instructions. Ces fonctionnalités centrales et natives de JavaScript peuvent être étendues de plusieurs façons en fournissant d'autres objets, par exemple&nbsp;:

- _JavaScript côté client_ étend ces éléments de base en fournissant des objets pour contrôler le navigateur et le _Document Object Model_ (DOM). Par exemple, les extensions du langage côté client permettent de placer des éléments dans un formulaire HTML, de réagir aux événements déclenchés par l'utilisateur (les clics, la saisie d'un formulaire, les actions de navigation, etc.).
- _JavaScript côte serveur_ étend ces éléments de base avec des objets utiles pour le fonctionnement sur un serveur tels que la possibilité de communiquer avec une base de données, manipuler des fichiers, passer d'une application à une autre, etc.

## JavaScript et Java

JavaScript et Java se ressemblent sur certains aspects, mais ils sont fondamentalement différents l'un de l'autre. Le langage JavaScript ressemble à Java, mais n'est pas typé statiquement et le typage de JavaScript est faible (alors qu'il est fort en Java). La syntaxe des expressions JavaScript est très proche de celle du Java avec les conventions de nommage et les constructions conditionnelles par exemple&nbsp;: c'est une des raisons qui a fait que le langage LiveScript a été renommé en JavaScript.

À la différence de Java qui est un système compilé et dont les classes sont déclarées, JavaScript est traité lors de l'exécution et possède quelques types de données pour représenter les nombres, les booléens et les chaînes de caractères (entre autres). JavaScript utilise un modèle basé sur les prototypes pour représenter les liens entre les objets alors que Java utilise un modèle plus courant basé sur les classes. Les prototypes permettent d'avoir un héritage dynamique. Ainsi, les caractéristiques héritées par un objet peuvent varier dans le temps. JavaScript supporte également les fonctions qui sont des objets à part entière et qui peuvent être des propriétés d'autres objets.

JavaScript est un langage plutôt « libre » comparé au Java. Il n'est pas nécessaire de déclarer toutes les variables, classes et méthodes. Il n'est pas nécessaire de savoir si une méthode est publique, privée ou protégée et il n'y a pas d'interfaces à implémenter. Les variables, les paramètres et les valeurs de retour des fonctions ne sont pas explicitement typés.

Java est un langage de programmation utilisant les classes, conçus pour être exécuté rapidement et garantir la sûreté du typage. Cela signifie par exemple qu'il n'est pas possible de transformer un entier Java en un objet ou qu'on ne peut pas accéder à des caractéristiques privées en corrompant le bytecode Java. Le modèle de classes utilisé par Java signifie qu'un programme n'est constitué que de classes et de méthodes. Cet héritage à base de classes, associé au typage fort font qu'on obtient des structures et des hiérarchies d'objets fortement couplées. Pour ces raisons, Java peut apparaître comme un langage plus complexe que JavaScript.

À l'inverse, JavaScript est un descendant de langages plus légers, dynamiquement typés tels que HyperTalk et dBASE. Ces langages de scripts visent un public plus large avec une syntaxe plus simple, des fonctionnalités natives spécialisées et des prérequis minimaux pour pouvoir créer des objets.

| JavaScript                                                                                                                                                                                                               | Java                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orienté objet. Aucune distinction entre les types et les objets. L'héritage est basé sur un mécanisme utilisant les prototypes et les propriétés et méthodes peuvent être ajoutées dynamiquement à n'importe quel objet. | Orienté objet, utilisant un modèle de classes. Les objets sont divisés entre les classes et les instances, l'héritage s'effectue via la hiérarchie des classes. Les classes et les instances ne peuvent pas recevoir de nouvelles propriétés ou méthodes dynamiquement. |
| Le type de données des variables n'est pas déclaré (typage dynamique).                                                                                                                                                   | Le type de données des variables doit être déclaré (typage statique).                                                                                                                                                                                                   |

Pour plus d'informations sur les différences entre JavaScript et Java, voir le chapitre sur [les détails du modèle objet JavaScript](/fr/docs/Web/JavaScript/Guide/Details_of_the_Object_Model).

## JavaScript et la spécification ECMAScript

JavaScript est standardisé par [Ecma International](https://www.ecma-international.org/) — une association européenne de standardisation des systèmes d'information et de communication (ECMA étant historiquement un acronyme pour _European Computer Manufacturers Association_) qui délivre un langage de programmation standardisé, international appelé ECMAScript. Ce langage se comporte de la même façon pour toutes les applications qui supportent ce standard. Les entreprises peuvent utiliser ce langage standard afin de développer leur implémentation de JavaScript. Le standard ECMAScript est documenté avec la spécification ECMA-262.

Le standard ECMA-262 est également approuvé par l'[ISO](https://www.iso.ch/) (_International Organization for Standardization_) sous ISO-16262. La spécification peut également être trouvée sur [le site web d'Ecma International](https://www.ecma-international.org/publications/standards/Ecma-262.htm). La spécification ECMAScript ne décrit pas le _Document Object Model_ (DOM) qui est standardisé par le [World Wide Web Consortium (W3C)](https://www.w3.org/) et [le WHATWG (Web Hypertext Application Technology Working Group)](https://whatwg.org). Le DOM définit la façon dont les documents HTML sont exposés aux scripts. Pour mieux comprendre les différentes technologies gravitant autour de JavaScript, voir l'article [Aperçu des technologies JavaScript](/fr/docs/Web/JavaScript/JavaScript_technologies_overview).

### Documentation JavaScript et spécification ECMAScript

La spécification ECMAScript est un ensemble de conditions à respecter pour implémenter ECMAScript&nbsp;: cela est utile lorsqu'on souhaite implémenter des fonctionnalités standard du langage au sein d'une implémentation ou d'un moteur ECMAScript (tel que SpiderMonkey pour Firefox, ou V8 pour Chrome).

La spécification ECMAScript n'a pas pour but d'aider les développeurs à écrire des scripts. La documentation JavaScript permet d'obtenir des informations pour écrire des scripts JavaScript.

La spécification ECMAScript utilise parfois une terminologie et une syntaxe qui peuvent sembler étranges aux yeux d'un développeur JavaScript. Bien que la description du langage diffère entre ECMAScript et la documentation JavaScript, le langage lui-même reste le même. JavaScript supporte l'ensemble des fonctionnalités mises en avant dans la spécification ECMAScript.

La documentation JavaScript décrit les aspects du langage qui pourront être utilisés par les développeurs JavaScript.

## Démarrer avec JavaScript

Pour commencer à développer en JavaScript, c'est très simple&nbsp;: il suffit d'avoir un navigateur web récent. Ce guide inclut certaines fonctionnalités de JavaScript qui ne sont disponibles que dans les dernières versions de Firefox, il est donc recommandé d'utiliser une version de Firefox à jour pour essayer les exemples fournis.

L'outil Web Console intégré à Firefox est utile pour expérimenter avec JavaScript. Vous pouvez l'utiliser selon deux modes&nbsp;: le mode de saisie à une ligne et le mode de saisie multiligne.

### La console web

La [console web](/fr/docs/Tools/Web_Console) affiche des informations sur la page actuellement chargée, elle dispose également d'une [ligne de commande](/fr/docs/Tools/Web_Console) qui peut être utilisée pour exécuter des expressions JavaScript dans la page actuelle.

Pour ouvrir la console, dans le menu, sélectionner « Développement » puis « Console web » (en passant par la barre d'outils, ce sera « Outils » puis « Développement web » puis « Console web »). Avec le clavier, on pourra utiliser la combinaison de touche <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>K</kbd> sur Windows et Linux ou <kbd>Cmd</kbd>-<kbd>Option</kbd>-<kbd>K</kbd> sur Mac. Une fois lancée, la console apparaît en base de la fenêtre du navigateur. En bas de la zone occupée par la console, il y a une ligne de commande qui peut être utilisée pour saisir des instructions JavaScript, le résultat de ces instructions sera affiché dans le panneau au-dessus&nbsp;:

![Console web](2019-04-04_00-15-29.png)

La console fonctionne exactement de la même manière que `eval`&nbsp;: la dernière expression saisie est retournée. Pour simplifier, on peut imaginer que chaque fois qu'une expression est saisie dans la console, elle est en fait entourée de `console.log` autour de `eval`, comme suit:

```js
function saluer(votreNom) {
  alert("Hello " + votreNom);
}
console.log(eval("3 + 5"));
```

### Le mode éditeur multiligne

La console est pratique quand il s'agit d'exécuter des instructions ligne par ligne. Cependant dès qu'on souhaite exécuter un script plus complexe de plusieurs lignes, la console devient vite limitée. Pour ça, on pourra utiliser [le mode éditeur multiligne](/fr/docs/Tools/Web_Console/The_command_line_interpreter#le_mode_éditeur_multiligne).

### Coucou monde (_hello world_)

Pour commencer à écrire du JavaScript, ouvrez votre console web en mode éditeur multiligne et écrivez votre premier « _Hello world_ » en JavaScript.

```js
function saluer(utilisateur) {
  return "Bonjour " + utilisateur;
}

saluer("Alice"); // "Bonjour Alice"
```

Dans les pages qui suivent, ce guide introduira la syntaxe du langage JavaScript ainsi que ses fonctionnalités ; vous pourrez ainsi écrire des applications plus complexes.

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
