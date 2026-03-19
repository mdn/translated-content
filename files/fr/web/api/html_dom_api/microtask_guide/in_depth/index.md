---
title: "Aller plus loin : Les microtâches et l'environnement d'exécution JavaScript"
slug: Web/API/HTML_DOM_API/Microtask_guide/In_depth
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("HTML DOM")}}

Lorsque vous déboguez ou, éventuellement, lorsque vous essayez de déterminer la meilleure approche pour résoudre un problème autour du temps d'exécution et de la planification des tâches et des microtâches, il y a des éléments sur le fonctionnement interne de l'environnement d'exécution JavaScript qui peuvent être utiles à comprendre.

JavaScript est un langage intrinsèquement monoprocessus. Il a été conçu à une époque où ce choix était positif&nbsp;; il y avait peu d'ordinateurs multiprocesseurs accessibles au grand public, et la quantité de code que JavaScript devait gérer était relativement faible à ce moment-là.

Avec le temps, bien sûr, nous savons que les ordinateurs ont évolué en systèmes puissants à cœurs multiples, et JavaScript est devenu l'un des langages les plus utilisés dans le monde informatique. Un grand nombre des applications les plus populaires reposent au moins en partie sur du code JavaScript. Pour accompagner cela, il a été nécessaire de trouver des moyens permettant aux projets de dépasser les contraintes d'un langage monoprocessus.

En commençant par l'ajout des temporisations et des intervalles dans l'API Web ({{DOMxRef("Window.setTimeout", "setTimeout()")}} et {{DOMxRef("Window.setInterval", "setInterval()")}}), l'environnement JavaScript fourni par les navigateurs Web s'est progressivement enrichi de fonctionnalités puissantes permettant la planification des tâches, le développement d'applications multiprocessus, et ainsi de suite. Pour comprendre où {{DOMxRef("Window.queueMicrotask()", "queueMicrotask()")}} intervient ici, il est utile de comprendre comment l'environnement d'exécution JavaScript fonctionne lors de la planification et de l'exécution du code.

## Contextes d'exécution JavaScript

> [!NOTE]
> Ces détails ne sont généralement pas importants pour la plupart des développeur·euse·s JavaScript. Cette information est fournie pour expliquer pourquoi les microtâches sont utiles et comment elles fonctionnent&nbsp;; si cela ne vous intéresse pas, vous pouvez passer cette section et y revenir plus tard si besoin.

Lorsqu'un fragment de code JavaScript s'exécute, il s'exécute dans un **contexte d'exécution**. Il existe trois types de code qui créent un nouveau contexte d'exécution&nbsp;:

- Le contexte global est le contexte d'exécution créé pour exécuter le corps principal de votre code&nbsp;; c'est-à-dire tout code qui existe en dehors d'une fonction JavaScript.
- Chaque fonction s'exécute dans son propre contexte d'exécution. On parle souvent de «&nbsp;contexte local&nbsp;».
- L'utilisation de la fonction déconseillée {{JSxRef("Global_Objects/eval", "eval()")}} crée également un nouveau contexte d'exécution.

Chaque contexte est, en substance, un niveau de portée dans votre code. Lorsqu'un de ces segments de code commence à s'exécuter, un nouveau contexte est construit pour l'exécuter&nbsp;; ce contexte est ensuite détruit lorsque le code quitte ce segment. Considérez le programme JavaScript ci-dessous&nbsp;:

```js
const elemSortie = document.getElementById("output");

const langueUtilisateurs = {
  Mike: "en",
  Teresa: "es",
};

function saluerUtilisateur(utilisateur) {
  function salutationLocale(utilisateur) {
    let salutation;
    const langue = langueUtilisateurs[utilisateur];

    switch (langue) {
      case "es":
        salutation = `¡Hola, ${utilisateur}!`;
        break;
      case "en":
      default:
        salutation = `Hello, ${utilisateur}!`;
        break;
    }
    return salutation;
  }
  elemSortie.innerText += `${salutationLocale(utilisateur)}\n`;
}

saluerUtilisateur("Mike");
saluerUtilisateur("Teresa");
saluerUtilisateur("Veronica");
```

Ce court programme contient trois contextes d'exécution, certains étant créés et détruits plusieurs fois au cours de l'exécution du programme. À chaque création de contexte, celui-ci est placé sur la **pile des contextes d'exécution**. Lorsqu'il se termine, le contexte est retiré de la pile.

- Au démarrage du programme, le contexte global est créé.
  - Lorsque `saluerUtilisateur("Mike")` est atteint, un contexte est créé pour la fonction `saluerUtilisateur()`&nbsp;; ce contexte d'exécution est ajouté à la pile des contextes d'exécution.
    - Lorsque `saluerUtilisateur()` appelle `salutationLocale()`, un autre contexte est créé pour exécuter cette fonction. Lorsque cette fonction retourne, le contexte de `salutationLocale()` est retiré de la pile d'exécution et détruit. L'exécution du programme reprend avec le prochain contexte trouvé sur la pile, qui est `saluerUtilisateur()`&nbsp;; cette fonction reprend là où elle s'était arrêtée.
    - La fonction `saluerUtilisateur()` retourne et son contexte est retiré de la pile et détruit.

  - Lorsque `saluerUtilisateur("Teresa")` est atteint, un contexte est créé pour elle et ajouté à la pile.
    - Lorsque `saluerUtilisateur()` appelle `salutationLocale()`, un autre contexte est créé pour exécuter cette fonction. Lorsque cette fonction retourne, le contexte de `salutationLocale()` est retiré de la pile d'exécution et détruit. `saluerUtilisateur()` continue à s'exécuter là où elle s'était arrêtée.
    - La fonction `saluerUtilisateur()` retourne et son contexte est retiré de la pile et détruit.

  - Lorsque `saluerUtilisateur("Veronica")` est atteint, un contexte est créé pour elle et ajouté à la pile.
    - Lorsque `saluerUtilisateur()` appelle `salutationLocale()`, un autre contexte est créé pour exécuter cette fonction. Lorsque cette fonction retourne, le contexte de `salutationLocale()` est retiré de la pile d'exécution et détruit.
    - La fonction `saluerUtilisateur()` retourne et son contexte est retiré de la pile et détruit.

- Le programme principal se termine et son contexte d'exécution est retiré de la pile d'exécution&nbsp;; comme il n'y a plus de contextes sur la pile, l'exécution du programme prend fin.

En utilisant les contextes d'exécution de cette manière, chaque programme et chaque fonction peuvent avoir leur propre ensemble de variables et d'autres objets. Chaque contexte suit également la prochaine ligne du programme à exécuter et d'autres informations essentielles à son fonctionnement. En utilisant les contextes et la pile de contextes de cette façon, il est possible de gérer de nombreux aspects fondamentaux du fonctionnement d'un programme, y compris les variables locales et globales, les appels et retours de fonctions, et ainsi de suite.

Une remarque particulière sur les fonctions récursives — c'est-à-dire les fonctions qui s'appellent elles-mêmes, parfois sur plusieurs niveaux de profondeur ou de récursion&nbsp;: chaque appel récursif à la fonction crée un nouveau contexte d'exécution. Cela permet à l'environnement d'exécution JavaScript de suivre les niveaux de récursion et le retour des résultats à travers cette récursion, mais cela signifie aussi qu'à chaque récursion, plus de mémoire est nécessaire pour créer le nouveau contexte.

## Execute, JavaScript, execute !

Pour exécuter du code JavaScript, le moteur d'exécution maintient un ensemble **d'agents** pour exécuter le code JavaScript. Chaque agent est composé d'un ensemble de contextes d'exécution, de la pile des contextes d'exécution, d'un processus principal, d'un ensemble pour tout processus supplémentaire pouvant être créé pour gérer les travailleurs, d'une file de tâches et d'une file de microtâches. À l'exception du processus principal — que certains navigateurs partagent entre plusieurs agents — chaque composant d'un agent est unique à cet agent.

Nous allons examiner plus en détail le fonctionnement du moteur d'exécution.

### Boucles d'évènements

Chaque agent est piloté par une [boucle d'évènements](/fr/docs/Web/JavaScript/Reference/Execution_model), qui est traitée de façon répétée. À chaque itération, elle exécute au maximum une tâche JavaScript en attente, puis toutes les microtâches en attente, puis effectue tout rendu ou affichage nécessaire avant de recommencer.

Le code de votre site ou application s'exécute dans le même **{{Glossary("thread", "processus")}}**, partageant la même **boucle d'évènements**, que l'interface utilisateur du navigateur Web lui-même. Il s'agit du **{{Glossary("main thread", "processus principal")}}**, et en plus d'exécuter le corps principal de votre site, il gère la réception et la distribution des évènements utilisateur et autres, le rendu et l'affichage du contenu web, etc.

La boucle d'évènements pilote donc tout ce qui se passe dans le navigateur en ce qui concerne l'interaction avec l'utilisateur, mais plus important pour notre propos ici, elle est responsable de la planification et de l'exécution de chaque morceau de code qui s'exécute dans son processus.

Il existe trois types de boucle d'évènements&nbsp;:

- Boucle d'évènements de fenêtre
  - : La boucle d'évènements de fenêtre est celle qui pilote toutes les fenêtres partageant une même origine (bien qu'il existe d'autres limites, comme décrit ci-dessous).
- Boucle d'évènements de travailleur
  - : Une boucle d'évènements de travailleur est celle qui pilote un travailleur&nbsp;; cela inclut toutes les formes de travailleurs, y compris les [web workers](/fr/docs/Web/API/Web_Workers_API), [shared workers](/fr/docs/Web/API/SharedWorker), et [service workers](/fr/docs/Web/API/Service_Worker_API). Les travailleurs sont conservés dans un ou plusieurs agents distincts du «&nbsp;code principal&nbsp;»&nbsp;; le navigateur peut utiliser une seule boucle d'évènements pour tous les travailleurs d'un type donné ou plusieurs boucles pour les gérer.
- Boucle d'évènements de worklet
  - : Une boucle d'évènements {{DOMxRef("Worklet", "worklet", "", 1)}} est la boucle d'évènements utilisée pour piloter les agents qui exécutent le code des worklets pour un agent donné. Cela inclut les worklets de type {{DOMxRef("Worklet")}} et {{DOMxRef("AudioWorklet")}}.

Plusieurs fenêtres chargées depuis la même {{Glossary("origin", "origine")}} peuvent fonctionner sur la même boucle d'évènements, chacune ajoutant des tâches à la boucle pour que leurs tâches prennent tour à tour le processeur. Gardez à l'esprit que dans le langage web, le mot «&nbsp;fenêtre&nbsp;» signifie en réalité «&nbsp;conteneur au niveau du navigateur dans lequel le contenu web s'exécute&nbsp;», incluant une fenêtre réelle, un onglet ou un cadre.

Il existe des circonstances spécifiques dans lesquelles ce partage d'une boucle d'évènements entre fenêtres ayant une origine commune est possible, telles que&nbsp;:

- Si une fenêtre en a ouvert une autre, elles partagent probablement une boucle d'évènements.
- Si une fenêtre est en réalité un conteneur dans un {{HTMLElement("iframe")}}, elle partage probablement une boucle d'évènements avec la fenêtre qui la contient.
- Les fenêtres partagent le même processus dans une implémentation de navigateur web multiprocessus.

Les détails peuvent varier d'un navigateur à l'autre, selon leur implémentation.

#### Tasks vs. microtasks

A **task** is anything scheduled to be run by the standard mechanisms such as initially starting to execute a script, asynchronously dispatching an event, and so forth. Other than by using events, you can enqueue a task by using {{DOMxRef("Window.setTimeout", "setTimeout()")}} or {{DOMxRef("Window.setInterval", "setInterval()")}}.

The difference between the task queue and the microtask queue is simple but very important:

- When a new iteration of the event loop begins, the runtime executes the next task from the task queue. Further tasks and tasks added to the queue after the start of the iteration _will not run until the next iteration_.
- Whenever a task exits and the execution context stack is empty, all microtasks in the microtask queue are executed in turn. The difference is that execution of microtasks continues until the queue is empty—even if new ones are scheduled in the interim. In other words, microtasks can enqueue new microtasks and those new microtasks will execute before the next task begins to run, and before the end of the current event loop iteration.

### Problèmes

Parce que votre code s'exécute dans le même processus, utilisant la même boucle d'évènements, que l'interface utilisateur du navigateur, si votre code bloque ou entre dans une boucle infinie, le navigateur lui-même sera bloqué. Même des performances lentes, qu'elles soient causées par un bogue ou par un travail complexe effectué par votre code, peuvent rendre le navigateur lent pour l'utilisateur·ice.

Lorsque plusieurs programmes et plusieurs objets de code dans ces programmes essaient de fonctionner en même temps, en plus d'un navigateur qui a aussi besoin de temps processeur — sans parler du temps pour afficher et dessiner le site et sa propre interface, gérer les évènements utilisateur, etc. — tout devient beaucoup trop facilement saturé aujourd'hui.

### Solutions

L'utilisation des [web workers](/fr/docs/Web/API/Web_Workers_API), qui permettent au script principal d'exécuter d'autres scripts dans de nouveaux processus, aide à atténuer ce problème. Un site ou une application bien conçu·e utilise des travailleurs pour effectuer toute opération complexe ou longue, laissant le processus principal faire le moins de travail possible, au-delà de la mise à jour, de la disposition et de l'affichage de la page web.

Cela est encore amélioré par l'utilisation de [JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS) et de techniques telles que {{JSxRef("Global_Objects/Promise", "promesses", "", 1)}} pour permettre au code principal de continuer à s'exécuter en attendant les résultats d'une requête. Cependant, le code s'exécutant à un niveau plus fondamental — comme le code d'une bibliothèque ou d'un framework — peut avoir besoin d'un moyen de planifier l'exécution du code à un moment sûr tout en restant sur le processus principal, indépendamment des résultats d'une requête ou d'une tâche.

Les microtâches sont une autre solution à ce problème, offrant un degré d'accès plus fin en permettant de planifier l'exécution du code avant le début de la prochaine itération de la boucle d'évènements, au lieu d'attendre la suivante.

La file de microtâches existe depuis un certain temps, mais elle a historiquement été utilisée uniquement en interne pour piloter des éléments comme les promesses. L'ajout de {{DOMxRef("Window.queueMicrotask()", "queueMicrotask()")}}, qui l'expose aux développeur·euse·s web, crée une file unifiée pour les microtâches qui est utilisée partout où il est nécessaire de pouvoir planifier l'exécution du code en toute sécurité lorsqu'il n'y a plus de contextes d'exécution sur la pile des contextes d'exécution JavaScript. Sur plusieurs instances et dans tous les navigateurs et environnements JavaScript, un mécanisme de file standardisé signifie que ces microtâches fonctionneront de manière fiable dans le même ordre, évitant ainsi des bogues potentiellement difficiles à détecter.

## Voir aussi

- [Guide des microtâches](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide)
- La méthode {{DOMxRef("Window.queueMicrotask()")}}
- [La boucle d'évènements](/fr/docs/Web/JavaScript/Reference/Execution_model)
- [JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS)
  - [Introduction à JavaScript asynchrone](/fr/docs/Learn_web_development/Extensions/Async_JS/Introducing)
  - [Programmation asynchrone élégante avec les promesses](/fr/docs/Learn_web_development/Extensions/Async_JS/Promises)
