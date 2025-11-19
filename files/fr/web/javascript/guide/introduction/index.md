---
title: Introduction
slug: Web/JavaScript/Guide/Introduction
l10n:
  sourceCommit: 30c9f71e6a6cac4d894688cabf7e4b50af87cfe5
---

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}

Ce chapitre introduit JavaScript et présente certains de ses concepts fondamentaux.

## Ce que vous devriez déjà savoir

Pour lire ce guide, il est conseillé d'avoir&nbsp;:

- Une compréhension générale du fonctionnement d'Internet et du [World Wide Web](/fr/docs/Glossary/World_Wide_Web).
- Une connaissance élémentaire du _HyperText Markup Language_ ({{Glossary("HTML")}}).
- Une expérience préalable en programmation. Si vous débutez la programmation, vous pouvez utiliser l'un des tutoriels listés sur la page [JavaScript](/fr/docs/Web/JavaScript).

## Où trouver des informations concernant JavaScript

La documentation MDN pour JavaScript comprend&nbsp;:

- [Apprendre le Web](/fr/docs/Learn_web_development)&nbsp;: cette section fournit des informations destinées aux débutants et présente les concepts de bases autour de la programmation et d'Internet.
- [Le guide JavaScript](/fr/docs/Web/JavaScript/Guide) (ce guide) fournit un aperçu du langage JavaScript et de ses objets.
- [La référence JavaScript](/fr/docs/Web/JavaScript/Reference) fournit une référence détaillée sur les fonctionnalités de JavaScript.

## Qu'est-ce que JavaScript&nbsp;?

JavaScript est un langage de script, multi-plateforme et orienté objet. C'est un langage léger qui doit faire partie d'un environnement hôte (un navigateur web par exemple) pour qu'il puisse être utilisé sur les objets de cet environnement.

JavaScript contient une bibliothèque standard d'objets tels que `Array`, `Date`, et `Math`, ainsi qu'un ensemble d'éléments de langage tels que les opérateurs, les structures de contrôles et les instructions. Ces fonctionnalités centrales et natives de JavaScript peuvent être étendues de plusieurs façons en fournissant d'autres objets, par exemple&nbsp;:

- _JavaScript côté client_ étend ces éléments de base en fournissant des objets pour contrôler le navigateur et le _Document Object Model_ (DOM). Par exemple, les extensions du langage côté client permettent de placer des éléments dans un formulaire HTML, de réagir aux événements déclenchés par l'utilisateur·ice (les clics, la saisie d'un formulaire, les actions de navigation, etc.).
- _JavaScript côte serveur_ étend ces éléments de base avec des objets utiles pour le fonctionnement sur un serveur tels que la possibilité de communiquer avec une base de données, manipuler des fichiers, passer d'une application à une autre, etc.

Cela signifie que, dans le navigateur, JavaScript peut modifier l'apparence de la page web (DOM). De même, JavaScript Node.js côté serveur peut répondre à des requêtes personnalisées envoyées par du code exécuté dans le navigateur.

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
| Ne peut pas écrire automatiquement sur le disque dur.                                                                                                                                                                    | Peut écrire automatiquement sur le disque dur.                                                                                                                                                                                                                          |

## JavaScript et la spécification ECMAScript

JavaScript est standardisé par [Ecma International <sup>(angl.)</sup>](https://www.ecma-international.org/) — une association européenne de standardisation des systèmes d'information et de communication (ECMA étant historiquement un acronyme pour _European Computer Manufacturers Association_) qui délivre un langage de programmation standardisé, international appelé ECMAScript. Ce langage se comporte de la même façon pour toutes les applications qui supportent ce standard. Les entreprises peuvent utiliser ce langage standard afin de développer leur implémentation de JavaScript. Le standard ECMAScript est documenté avec la spécification ECMA-262.

Le standard ECMA-262 est également approuvé par l'[ISO <sup>(angl.)</sup>](https://www.iso.ch/) (_International Organization for Standardization_) sous ISO-16262. La spécification peut également être trouvée sur [le site web d'Ecma International <sup>(angl.)</sup>](https://www.ecma-international.org/publications/standards/Ecma-262.htm). La spécification ECMAScript ne décrit pas le _Document Object Model_ (DOM) qui est standardisé par le [World Wide Web Consortium (W3C) <sup>(angl.)</sup>](https://www.w3.org/) et [le WHATWG (Web Hypertext Application Technology Working Group) <sup>(angl.)</sup>](https://whatwg.org). Le DOM définit la façon dont les documents HTML sont exposés aux scripts. Pour mieux comprendre les différentes technologies gravitant autour de JavaScript, voir l'article [Aperçu des technologies JavaScript](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### Documentation JavaScript et spécification ECMAScript

La spécification ECMAScript est un ensemble de conditions à respecter pour implémenter ECMAScript&nbsp;: cela est utile lorsqu'on souhaite implémenter des fonctionnalités standard du langage au sein d'une implémentation ou d'un moteur ECMAScript (tel que SpiderMonkey pour Firefox, ou V8 pour Chrome).

La spécification ECMAScript n'a pas pour but d'aider les développeur·euse·s à écrire des scripts. La documentation JavaScript permet d'obtenir des informations pour écrire des scripts JavaScript.

La spécification ECMAScript utilise parfois une terminologie et une syntaxe qui peuvent sembler étranges aux yeux d'un développeur·euse JavaScript. Bien que la description du langage diffère entre ECMAScript et la documentation JavaScript, le langage lui-même reste le même. JavaScript supporte l'ensemble des fonctionnalités mises en avant dans la spécification ECMAScript.

La documentation JavaScript décrit les aspects du langage qui pourront être utilisés par les développeur·euse·s JavaScript.

## Démarrer avec JavaScript

Pour commencer à utiliser JavaScript, il suffit d'avoir un navigateur web moderne. Les versions récentes de [Firefox](https://www.firefox.com/fr/), [Chrome](https://www.google.com/chrome/index.html), [Microsoft Edge](https://www.microsoft.com/fr-fr/edge) et [Safari](https://www.apple.com/fr/safari/) prennent toutes en charge les fonctionnalités abordées dans ce guide.

Un outil très utile pour explorer JavaScript est la console JavaScript (parfois appelée console web, ou simplement console)&nbsp;: il s'agit d'un outil qui permet de saisir du JavaScript et de l'exécuter dans la page courante.

Les captures d'écran ici montrent la [console web de Firefox <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/), mais tous les navigateurs modernes sont livrés avec une console qui fonctionne de manière similaire.

### Ouvrir la console web

Les instructions exactes pour ouvrir la console varient selon le navigateur&nbsp;:

- [Ouvrir la console dans Firefox <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/#opening-the-web-console)
- [Ouvrir la console dans Chrome](https://developer.chrome.com/docs/devtools/open?hl=fr)
- [Ouvrir la console dans Microsoft Edge <sup>(angl.)</sup>](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/)

### Saisir et exécuter du JavaScript

La console apparaît en bas de la fenêtre du navigateur. Le long du bas de la console se trouve une ligne de saisie que vous pouvez utiliser pour entrer du JavaScript, et la sortie apparaît dans le panneau au-dessus&nbsp;:

![Une fenêtre de navigateur avec la console web ouverte en bas, contenant deux lignes de saisie et de sortie. Du texte peut être saisi en dessous.](2019-04-04_00-15-29.png)

La console fonctionne exactement comme `eval`&nbsp;: la dernière expression saisie est renvoyée. Pour simplifier, on peut imaginer qu'à chaque fois que quelque chose est saisi dans la console, cela est en fait entouré par `console.log` autour de `eval`, comme ceci&nbsp;:

```js
console.log(eval("3 + 5"));
```

### Le mode éditeur multiligne

Par défaut, si vous appuyez sur <kbd>Entrée</kbd> (ou <kbd>Retour</kbd>, selon votre clavier) après avoir saisi une chaîne de caractères (<i lang="en">string</i> en anglais) de code, celle-ci est exécutée. Pour saisir plusieurs lignes&nbsp;:

- Si la chaîne de caractères que vous avez tapée est incomplète (par exemple, vous avez saisi `function foo() {`), la console considérera <kbd>Entrée</kbd> comme un saut de ligne et vous permettra de saisir une autre ligne.
- Si vous maintenez <kbd>Maj</kbd> enfoncée tout en appuyant sur <kbd>Entrée</kbd>, la console considérera cela comme un saut de ligne et vous permettra de saisir une autre ligne.
- Uniquement dans Firefox, vous pouvez activer [le mode éditeur multiligne <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/the_command_line_interpreter/index.html#multi-line-mode), dans lequel vous pouvez saisir plusieurs lignes dans un mini-éditeur, puis exécuter l'ensemble lorsque vous êtes prêt·e.

Pour commencer à écrire du JavaScript, ouvrez la console, copiez le code suivant et collez-le à l'invite&nbsp;:

```js
(function () {
  "use strict";
  // Début de votre code
  function saluerMoi(votreNom) {
    alert(`Bonjour ${votreNom}`);
  }

  saluerMoi("le Monde");
  // Fin de votre code
})();
```

Appuyez sur <kbd>Entrée</kbd> pour voir le résultat dans votre navigateur&nbsp;!

## Et ensuite

Dans les pages suivantes, ce guide vous présente la syntaxe de JavaScript et les fonctionnalités du langage, afin que vous puissiez écrire des applications plus complexes.

Mais pour l'instant, souvenez-vous d'inclure toujours `(function(){"use strict";` avant votre code, et d'ajouter `})();` à la fin de votre code. Les articles sur le [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) et sur les [IIFE](/fr/docs/Glossary/IIFE) expliquent ce que cela fait, mais pour l'instant, on peut considérer que cela permet&nbsp;:

1. D'éviter des comportements de JavaScript qui piègent les débutant·e·s.
2. D'empêcher que des extraits de code exécutés dans la console n'interagissent entre eux (par exemple, qu'un élément créé lors d'une exécution soit utilisé lors d'une autre exécution).

{{PreviousNext("Web/JavaScript/Guide", "Web/JavaScript/Guide/Grammar_and_types")}}
