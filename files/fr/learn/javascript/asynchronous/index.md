---
title: JavaScript asynchrone
slug: Learn/JavaScript/Asynchronous
tags:
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Landing
  - Promises
  - async
  - asynchronous
  - await
  - callbacks
  - requestAnimationFrame
  - setInterval
  - setTimeout
translation_of: Learn/JavaScript/Asynchronous
---
{{LearnSidebar}}

Dans ce module, nous examinons le [JavaScript](/fr/docs/Glossary/JavaScript) [asynchrone](/fr/docs/Glossary/Asynchronous), pourquoi il est important et comment il peut être utilisé afin de gérer efficacement les opérations potentiellement bloquantes telles que la récupération de ressources sur un serveur.

> **Remarque :**
>
> Vous cherchez à devenir une développeuse ou un développeur web front-end ?
>
> Nous avons élaboré un cours qui comprend toutes les informations essentielles dont vous avez besoin pour atteindre votre objectif.
>
> [Commencer](/fr/docs/Learn/Front-end_web_developer)

## Prérequis

Le JavaScript asynchrone est un sujet assez avancé, et il vous est conseillé de travailler sur les modules [Premiers pas en JavaScript](/fr/docs/Learn/JavaScript/First_steps) et [Blocs de construction de JavaScript](/fr/docs/Learn/JavaScript/Building_blocks) avant d'attaquer cette leçon.

Si vous n'êtes pas familier avec le concept de programmation asynchrone, vous devriez absolument commencer par l'article [Concepts généraux de programmation asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Concepts) de ce module. Si vous connaissez ce concept, vous pouvez probablement passer directement au module [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing).

> **Note :** Si vous travaillez sur un ordinateur/tablette/autre appareil où vous n'avez pas la possibilité de créer vos propres fichiers, vous pouvez essayer (la plupart) des exemples de code dans un programme de codage en ligne tel que [JSBin](https://jsbin.com/) ou [Glitch](https://glitch.com).

## Guides

- [Concepts généraux de programmation asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Concepts)
  - : Dans cet article, nous allons passer en revue un certain nombre de concepts importants relatifs à la programmation asynchrone et à la façon dont elle se présente dans les navigateurs web et JavaScript. Vous devez comprendre ces concepts avant de travailler sur les autres articles du module.
- [Introduction au JavaScript asynchrone](/fr/docs/Learn/JavaScript/Asynchronous/Introducing)
  - : Dans cet article, nous récapitulons brièvement les problèmes associés au JavaScript synchrone, et nous jetons un premier coup d'œil à certaines des différentes techniques JavaScript asynchrones que vous rencontrerez, en montrant comment elles peuvent nous aider à résoudre ces problèmes.
- [JavaScript asynchrone coopératif : Délais et intervalles](/fr/docs/Learn/JavaScript/Asynchronous/Timeouts_and_intervals)
  - : Nous examinons ici les méthodes traditionnelles dont dispose JavaScript pour exécuter du code de manière asynchrone après l'écoulement d'une période déterminée ou à un intervalle régulier (par exemple, un nombre déterminé de fois par seconde), nous expliquons à quoi elles servent et nous examinons leurs problèmes inhérents.
- [Gérer les opérations asynchrones avec élégance grâce aux Promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
  - : Les promesses sont une fonctionnalité relativement nouvelle du langage JavaScript qui vous permet de reporter d'autres actions jusqu'à ce que l'action précédente soit terminée, ou de réagir à son échec. C'est très utile pour mettre en place une séquence d'opérations qui fonctionne correctement. Cet article vous montre comment les promesses fonctionnent, où vous les verrez utilisées dans les API Web et comment écrire les vôtres.
- [Faciliter la programmation asynchrone avec async et await](/fr/docs/Learn/JavaScript/Asynchronous/Async_await)
  - : Les promesses peuvent être quelque peu complexes à mettre en place et à comprendre, c'est pourquoi les navigateurs modernes ont implémenté les fonctions `async` et l'opérateur `await`. Le premier permet aux fonctions standard de se comporter implicitement de manière asynchrone avec les promesses, tandis que le second peut être utilisé à l'intérieur des fonctions `async` pour attendre les promesses avant que la fonction ne continue. Cela rend l'enchaînement des promesses plus simple et plus facile à lire.
- [Choisir la bonne approche](/fr/docs/Learn/JavaScript/Asynchronous/Choosing_the_right_approach)
  - : Pour terminer ce module, nous examinerons les différentes techniques et fonctionnalités de codage que nous avons abordées tout au long de ce module, et nous verrons lesquelles vous devez utiliser et à quel moment, avec des recommandations et des rappels des pièges courants le cas échéant.

## Voir aussi

- [Programmation asynchrone](https://eloquentjavascript.net/11_async.html) (en anglais) à partir du fantastique livre en ligne [Eloquent JavaScript](https://eloquentjavascript.net/) de Marijn Haverbeke.
