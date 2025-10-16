---
title: Modèle d'exécution JavaScript
slug: Web/JavaScript/Reference/Execution_model
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Cette page présente l'infrastructure de base de l'environnement d'exécution JavaScript. Le modèle est principalement théorique et abstrait, sans aucun détail spécifique à une plateforme ou à une implémentation. Les moteurs JavaScript modernes optimisent fortement la sémantique décrite ici.

Cette page est une référence. Elle suppose que vous connaissez déjà le modèle d'exécution d'autres langages de programmation, comme C ou Java. Elle fait de nombreuses références à des concepts existants dans les systèmes d'exploitation et les langages de programmation.

## Le moteur et l'hôte

L'exécution JavaScript nécessite la coopération de deux logiciels&nbsp;: le **moteur JavaScript** et l'**environnement hôte**.

Le moteur JavaScript implémente le [langage ECMAScript (JavaScript)](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_le_langage_ecmascript), fournissant les fonctionnalités de base. Il prend le code source, l'analyse et l'exécute. Cependant, pour interagir avec le monde extérieur, produire une sortie utile, accéder à des ressources externes ou mettre en œuvre des mécanismes liés à la sécurité ou aux performances, il faut des mécanismes supplémentaires fournis par l'environnement hôte. Par exemple, le DOM HTML est l'environnement hôte lorsque JavaScript s'exécute dans un navigateur web. Node.js est un autre environnement hôte qui permet d'exécuter JavaScript côté serveur.

Bien que cette page se concentre principalement sur les mécanismes définis dans ECMAScript, elle aborde parfois des mécanismes définis dans la spécification HTML, souvent imités par d'autres environnements hôtes comme Node.js ou Deno. Cela permet de donner une vision cohérente du modèle d'exécution JavaScript tel qu'il est utilisé sur le web et au-delà.

## Modèle d'exécution d'agent

Dans la spécification JavaScript, chaque exécuteur autonome de JavaScript est appelé un **agent**, qui maintient ses propres structures pour l'exécution du code&nbsp;:

- **Tas** (d'objets)&nbsp;: il s'agit simplement d'une grande zone de mémoire (principalement non structurée). Elle se remplit au fur et à mesure que des objets sont créés dans le programme. En cas de mémoire partagée, chaque agent possède son propre tas avec sa propre version d'un objet {{jsxref("SharedArrayBuffer")}}, mais la mémoire sous-jacente représentée par le buffer est partagée.
- [**Queue** (de tâches)](#queue_de_tâches_et_boucle_dévénement)&nbsp;: appelée _boucle d'événement_ en HTML (et couramment), elle permet la programmation asynchrone en JavaScript tout en restant monothread. On parle de queue car elle fonctionne généralement en premier entré, premier sorti&nbsp;: les tâches les plus anciennes sont exécutées avant les plus récentes.
- [**Pile** (de contextes d'exécution)](#pile_et_contextes_dexécution)&nbsp;: c'est la _pile d'appels_ qui permet de transférer le flux de contrôle en entrant et sortant des contextes d'exécution comme les fonctions. On parle de pile car elle fonctionne en dernier entré, premier sorti. Chaque tâche commence en empilant un nouveau cadre sur la pile (vide), et se termine en vidant la pile.

Ce sont trois structures de données distinctes qui gèrent des informations différentes. Nous présenterons la queue et la pile plus en détail dans les sections suivantes. Pour en savoir plus sur l'allocation et la libération de la mémoire du tas, voir [gestion de la mémoire](/fr/docs/Web/JavaScript/Guide/Memory_management).

Chaque agent est analogue à un <i lang="en">thread</i> (ou fil d'exécution) (l'implémentation sous-jacente peut ou non être un vrai <i lang="en">thread</i> système). Chaque agent peut posséder plusieurs [realms](#domaine_dexecution_realm) (qui correspondent 1-à-1 à des objets globaux) pouvant s'accéder mutuellement de façon synchrone, et doit donc s'exécuter dans un seul <i lang="en">thread</i>. Un agent possède aussi un modèle mémoire unique, indiquant s'il est petit-boutiste (<i lang="en">little-endian</i> en anglais), s'il peut être [bloqué de façon synchrone](#concurrency_and_ensuring_forward_progress), si les opérations atomiques sont [sans verrou](/fr/docs/Web/JavaScript/Reference/Global_Objects/Atomics/isLockFree), etc.

Un agent sur le web peut être l'un des suivants&nbsp;:

- Un _agent de fenêtre de même origine_, qui contient différents objets {{domxref("Window")}} pouvant potentiellement s'atteindre mutuellement, soit directement, soit via {{domxref("Document/domain", "document.domain")}}. Si la fenêtre est [origin-keyed](/fr/docs/Web/API/Window/originAgentCluster), alors seules les fenêtres de même origine peuvent s'atteindre.
- Un _agent de worker dédié_ contenant un seul {{domxref("DedicatedWorkerGlobalScope")}}.
- Un _agent de worker partagé_ contenant un seul {{domxref("SharedWorkerGlobalScope")}}.
- Un _agent de service worker_ contenant un seul {{domxref("ServiceWorkerGlobalScope")}}.
- Un _agent de worklet_ contenant un seul {{domxref("WorkletGlobalScope")}}.

En d'autres termes, chaque worker crée son propre agent, tandis qu'une ou plusieurs fenêtres peuvent appartenir au même agent — généralement un document principal et ses iframes de même origine. Dans Node.js, un concept similaire appelé [worker threads <sup>(angl.)</sup>](https://nodejs.org/api/worker_threads.html) existe.

Le schéma ci-dessous illustre le modèle d'exécution des agents&nbsp;:

![Un schéma composé de deux agents : une page HTML et un worker. Chacun possède sa propre pile contenant des contextes d'exécution, un tas contenant des objets et une queue contenant des tâches.](runtime-environment-diagram.svg)

## Domaine d'exécution (_Realm_)

Chaque agent possède un ou plusieurs **realms**. Chaque morceau de code JavaScript est associé à un realm lors de son chargement, ce qui reste vrai même s'il est appelé depuis un autre realm. Un realm contient les informations suivantes&nbsp;:

- Une liste d'objets intrinsèques comme `Array`, `Array.prototype`, etc.
- Les variables globales déclarées, la valeur de [`globalThis`](/fr/docs/Web/JavaScript/Reference/Global_Objects/globalThis), et l'objet global
- Un cache des [tableaux de templates littéraux](/fr/docs/Web/JavaScript/Reference/Template_literals#tagged_templates), car l'évaluation d'une même expression de template littéral balisé fait toujours recevoir au tag le même objet tableau

Sur le web, le realm et l'objet global correspondent 1-à-1. L'objet global est soit un {{domxref("Window")}}, soit un {{domxref("WorkerGlobalScope")}}, soit un {{domxref("WorkletGlobalScope")}}. Par exemple, chaque `iframe` s'exécute dans un realm différent, même s'il peut être dans le même agent que la fenêtre parente.

Les realms sont généralement mentionnés lorsqu'on parle de l'identité des objets globaux. Par exemple, on a besoin de méthodes comme {{jsxref("Array.isArray()")}} ou {{jsxref("Error.isError()")}}, car un tableau construit dans un autre realm aura un prototype différent de `Array.prototype` dans le realm courant, donc `instanceof Array` retournera à tort `false`.

## Pile et contextes d'exécution

Commençons par l'exécution synchrone du code. Chaque [tâche](#queue_de_tâches_et_boucle_dévénement) commence en appelant son callback associé. Le code à l'intérieur de ce callback peut créer des variables, appeler des fonctions ou sortir. Chaque fonction doit garder la trace de ses propres environnements de variables et de l'endroit où retourner. Pour cela, l'agent a besoin d'une pile pour suivre les contextes d'exécution. Un **contexte d'exécution** (ou _stack frame_) est la plus petite unité d'exécution. Il contient les informations suivantes&nbsp;:

- L'état d'évaluation du code
- Le module ou script, la fonction (si applicable), et le [générateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Generator) actuellement exécuté qui contient ce code
- Le [domaine d'exécution](#domaine_dexecution_realm) courant
- Les [liaisons](/fr/docs/Glossary/Binding), incluant&nbsp;:
  - Les variables définies avec `var`, `let`, `const`, `function`, `class`, etc.
  - Les identifiants privés comme `#foo` qui ne sont valides que dans le contexte courant
  - La référence `this`

Imaginons un programme constitué d'une seule tâche définie par le code suivant&nbsp;:

```js
function toto(b) {
  const a = 10;
  return a + b + 11;
}

function tata(x) {
  const y = 3;
  return toto(x * y);
}

const truc = tata(7); // assigne 42 à truc
```

1. Quand la tâche commence, le premier cadre est créé, où les variables `toto`, `tata` et `truc` sont définies. On appelle `tata` avec l'argument `7`.
2. Un deuxième cadre est créé pour l'appel à `tata`, contenant les liaisons pour le paramètre `x` et la variable locale `y`. On effectue d'abord la multiplication `x * y`, puis on appelle `toto` avec le résultat.
3. Un troisième cadre est créé pour l'appel à `toto`, contenant les liaisons pour le paramètre `b` et la variable locale `a`. On effectue d'abord l'addition `a + b + 11`, puis on retourne le résultat.
4. Quand `toto` retourne, l'élément du haut de la pile est dépilé, et l'expression d'appel `toto(x * y)` se résout en la valeur de retour. On continue l'exécution, qui consiste simplement à retourner ce résultat.
5. Quand `tata` retourne, l'élément du haut de la pile est dépilé, et l'expression d'appel `tata(7)` se résout en la valeur de retour. Cela initialise `truc` avec la valeur de retour.
6. On atteint la fin du code source de la tâche, donc le cadre d'entrée est dépilé. La pile est vide, la tâche est terminée.

### Générateurs et réentrées

Quand un cadre est dépilé, il n'est pas forcément perdu pour toujours, car il arrive qu'on doive y revenir. Par exemple, considérons une fonction génératrice&nbsp;:

```js
function* gen() {
  console.log(1);
  yield;
  console.log(2);
}

const g = gen();
g.next(); // affiche 1
g.next(); // affiche 2
```

Dans ce cas, appeler `gen()` crée d'abord un contexte d'exécution qui est suspendu — aucun code à l'intérieur de `gen` n'est encore exécuté. Le générateur `g` sauvegarde ce contexte d'exécution en interne. Le contexte d'exécution courant reste celui du point d'entrée. Quand on appelle `g.next()`, le contexte d'exécution de `gen` est empilé, et le code à l'intérieur de `gen` s'exécute jusqu'à l'expression `yield`. Ensuite, le contexte d'exécution du générateur est suspendu et retiré de la pile, ce qui rend la main au point d'entrée. Quand on appelle `g.next()` à nouveau, le contexte d'exécution du générateur est ré-empilé, et le code à l'intérieur de `gen` reprend là où il s'était arrêté.

### Appels en queue

Un mécanisme défini dans la spécification est l'_appel en queue propre_ (PTC). Un appel de fonction est un appel en queue si l'appelant ne fait rien après l'appel sauf retourner la valeur&nbsp;:

```js
function f() {
  return g();
}
```

Dans ce cas, l'appel à `g` est un appel en queue. Si un appel de fonction est en position de queue, le moteur doit supprimer le contexte d'exécution courant et le remplacer par celui de l'appel en queue, au lieu d'empiler un nouveau cadre pour l'appel à `g()`. Cela signifie que la récursion terminale n'est pas soumise aux limites de taille de pile&nbsp;:

```js
function factoriel(n, acc = 1) {
  if (n <= 1) return acc;
  return factoriel(n - 1, n * acc);
}
```

En pratique, supprimer le cadre courant pose des problèmes de débogage, car si `g()` lève une erreur, `f` n'est plus sur la pile et n'apparaît pas dans la trace. Actuellement, seul Safari (JavaScriptCore) implémente PTC, et ils ont inventé une [infrastructure spécifique <sup>(angl.)</sup>](https://webkit.org/blog/6240/ecmascript-6-proper-tail-calls-in-webkit/) pour résoudre ce problème de débogabilité.

### Fermetures (_closures_)

Un autre phénomène intéressant lié à la portée des variables et aux appels de fonction est celui des [fermetures](/fr/docs/Web/JavaScript/Guide/Closures). Lorsqu'une fonction est créée, elle mémorise aussi en interne les liaisons de variables du contexte d'exécution courant. Ces liaisons peuvent alors survivre au contexte d'exécution.

```js
let f;
{
  let x = 10;
  f = () => x;
}
console.log(f()); // affiche 10
```

## Queue de tâches et boucle d'événement

Un agent est un thread, ce qui signifie que l'interpréteur ne peut traiter qu'une instruction à la fois. Quand le code est entièrement synchrone, cela fonctionne car on peut toujours avancer. Mais si le code doit effectuer une action asynchrone, on ne peut pas progresser tant que cette action n'est pas terminée. Cependant, cela nuirait à l'expérience utilisateur si cela bloquait tout le programme — la nature de JavaScript comme langage de script web exige qu'il soit [non bloquant](#jamais_bloquant). Ainsi, le code qui gère la fin d'une action asynchrone est défini comme un callback. Ce callback définit une **tâche**, qui est placée dans une **queue de tâches** — ou, en HTML, une boucle d'événement — une fois l'action terminée.

À chaque fois, l'agent prend une tâche dans la queue et l'exécute. Lorsqu'une tâche est exécutée, elle peut en créer d'autres, qui sont ajoutées à la fin de la queue. Les tâches peuvent aussi être ajoutées par la complétion de mécanismes asynchrones de la plateforme, comme les timers, les opérations d'entrée/sortie ou les événements. Une tâche est considérée comme terminée quand la [pile](#pile_et_contextes_dexécution) est vide&nbsp;; la tâche suivante est alors prise dans la queue. Les tâches ne sont pas forcément traitées avec la même priorité — par exemple, les boucles d'événement HTML séparent les tâches en deux catégories&nbsp;: _tâches_ et _micro-tâches_. Les micro-tâches ont une priorité plus élevée et la queue de micro-tâches est vidée avant que la queue des tâches ne soit traitée. Pour plus d'informations, voir le [guide HTML sur les micro-tâches](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide). Si la queue de tâches est vide, l'agent attend que d'autres tâches soient ajoutées.

### «&nbsp;Run-to-completion&nbsp;»

Chaque tâche est traitée complètement avant toute autre tâche. Cela offre des propriétés intéressantes pour raisonner sur votre programme, notamment le fait que lorsqu'une fonction s'exécute, elle ne peut pas être interrompue et s'exécutera entièrement avant tout autre code (et pourra modifier les données manipulées). Cela diffère de C, par exemple, où si une fonction s'exécute dans un thread, elle peut être arrêtée à tout moment par le système d'exécution pour exécuter un autre code dans un autre thread.

Par exemple&nbsp;:

```js
const promise = Promise.resolve();
let i = 0;
promise.then(() => {
  i += 1;
  console.log(i);
});
promise.then(() => {
  i += 1;
  console.log(i);
});
```

Dans cet exemple, on crée une promesse déjà résolue, ce qui signifie que tout retour d'appel attaché sera immédiatement planifié comme tâche. Les deux retours d'appels semblent provoquer une condition de course, mais en réalité, le résultat est totalement prévisible&nbsp;: `1` et `2` seront affichés dans l'ordre. En effet, chaque tâche s'exécute jusqu'au bout avant que la suivante ne soit lancée, donc l'ordre global est toujours `i += 1; console.log(i); i += 1; console.log(i);` et jamais `i += 1; i += 1; console.log(i); console.log(i);`.

Un inconvénient de ce modèle est que si une tâche prend trop de temps à s'exécuter, l'application web ne peut plus traiter les interactions utilisateur comme les clics ou le défilement. Le navigateur atténue cela avec le message «&nbsp;un script met trop de temps à s'exécuter&nbsp;». Une bonne pratique consiste à garder le traitement des tâches court et, si possible, à découper une tâche problématique en plusieurs tâches.

### Jamais bloquant

Une autre garantie importante offerte par le modèle de boucle d'événement est que l'exécution JavaScript n'est jamais bloquante. La gestion d'opérations d'entrée/sortie se fait généralement via des événements et des retours d'appels, donc quand l'application attend le résultat d'une requête [IndexedDB](/fr/docs/Web/API/IndexedDB_API) ou d'un appel à [`fetch()`](/fr/docs/Web/API/Window/fetch), elle peut toujours traiter d'autres éléments comme les saisies utilisateur. Le code qui s'exécute après la fin d'une action asynchrone est toujours fourni sous forme de callback (par exemple, le gestionnaire {{jsxref("Promise/then", "then()")}}, le callback de `setTimeout()`, ou le gestionnaire d'événement), qui définit une tâche à ajouter à la queue une fois l'action terminée.

Bien sûr, la garantie de «&nbsp;jamais bloquant&nbsp;» suppose que l'API de la plateforme soit asynchrone, mais il existe quelques exceptions historiques comme `alert()` ou les XHR synchrones. Il est recommandé de les éviter pour garantir la réactivité de l'application.

## Groupes d'agents et partage de mémoire

Plusieurs agents peuvent communiquer via le partage de mémoire, formant un **groupe d'agents**. Les agents sont dans le même groupe si et seulement s'ils peuvent partager la mémoire. Il n'existe aucun mécanisme intégré pour que deux groupes d'agents échangent des informations, ils peuvent donc être considérés comme des modèles d'exécution complètement isolés.

Lors de la création d'un agent (par exemple en lançant un worker), certains critères déterminent s'il appartient au même groupe que l'agent courant ou si un nouveau groupe est créé. Par exemple, les paires d'objets globaux suivantes sont chacune dans le même groupe d'agents et peuvent donc partager la mémoire&nbsp;:

- Un objet `Window` et un worker dédié qu'il a créé.
- Un worker (de n'importe quel type) et un worker dédié qu'il a créé.
- Un objet `Window` A et l'objet `Window` d'un élément `iframe` de même origine créé par A.
- Un objet `Window` et un objet `Window` de même origine qui l'a ouvert.
- Un objet `Window` et un worklet qu'il a créé.

Les paires d'objets globaux suivantes ne sont pas dans le même groupe d'agents et ne peuvent donc pas partager la mémoire&nbsp;:

- Un objet `Window` et un worker partagé qu'il a créé.
- Un worker (de n'importe quel type) et un worker partagé qu'il a créé.
- Un objet `Window` et un service worker qu'il a créé.
- Un objet `Window` A et l'objet `Window` d'un élément `iframe` créé par A qui ne peut pas être de même origine que A.
- Deux objets `Window` sans relation d'ouverture ou d'ascendance. Cela reste vrai même si les deux objets `Window` sont de même origine.

Pour l'algorithme exact, voir la [spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/webappapis.html#integration-with-the-javascript-agent-cluster-formalism).

### Communication inter-agents et modèle mémoire

Comme mentionné plus haut, les agents communiquent via le partage de mémoire. Sur le web, la mémoire est partagée via la méthode [`postMessage()`](/fr/docs/Web/API/Window/postMessage). Le guide [Utiliser les web workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers) donne un aperçu de ce mécanisme. En général, les données sont transmises uniquement par valeur (via le [clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)), ce qui évite toute complication de concurrence. Pour partager la mémoire, il faut transmettre un objet {{jsxref("SharedArrayBuffer")}}, qui peut être accédé simultanément par plusieurs agents. Une fois que deux agents partagent l'accès à la même mémoire via un `SharedArrayBuffer`, ils peuvent synchroniser leurs exécutions via l'objet {{jsxref("Atomics")}}.

Il existe deux façons d'accéder à la mémoire partagée&nbsp;: via un accès mémoire normal (non atomique) et via un accès mémoire atomique. Ce dernier est [séquentiellement cohérent <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Sequential_consistency) (c'est-à-dire qu'il existe un ordre total strict des événements accepté par tous les agents du groupe), tandis que le premier n'est pas ordonné (aucun ordre n'est garanti)&nbsp;; JavaScript ne fournit pas d'opérations avec d'autres garanties d'ordre.

La spécification donne les recommandations suivantes pour les développeur·euse·s travaillant avec la mémoire partagée&nbsp;:

> Il est recommandé d'écrire des programmes sans conditions de concurrence (_data race free_), c'est-à-dire de faire en sorte qu'il soit impossible d'avoir des opérations non atomiques concurrentes sur la même zone mémoire. Les programmes sans conditions de concurrence ont une sémantique d'entrelacement où chaque étape de l'évaluation de chaque agent s'entrelace avec les autres. Pour ces programmes, il n'est pas nécessaire de comprendre les détails du modèle mémoire. Ces détails n'apportent généralement pas d'intuition utile pour mieux écrire de l'ECMAScript.
> <br><br>
> Plus généralement, même si un programme n'est pas _data race free_, il peut avoir un comportement prévisible, tant que les opérations atomiques ne sont pas impliquées dans des courses et que les opérations en course ont toutes la même taille d'accès. Le moyen le plus simple d'éviter que les atomiques soient impliquées dans des courses est de s'assurer que différentes cellules mémoire sont utilisées pour les opérations atomiques et non atomiques, et que des accès atomiques de tailles différentes ne sont pas utilisés sur les mêmes cellules en même temps. En pratique, le programme doit traiter la mémoire partagée comme fortement typée autant que possible. On ne peut toujours pas dépendre de l'ordre et du timing des accès non atomiques en course, mais si la mémoire est traitée comme fortement typée, les accès concurrents ne «&nbsp;déchirent&nbsp;» pas (les bits de leurs valeurs ne seront pas mélangés).

### Concurrence et progression garantie

Lorsque plusieurs agents coopèrent, la garantie [jamais bloquant](#jamais_bloquant) ne s'applique pas toujours. Un agent peut être _bloqué_ ou mis en pause en attendant qu'un autre agent effectue une action. Cela diffère de l'attente d'une promesse dans le même agent, car cela bloque tout l'agent et n'autorise aucun autre code à s'exécuter entre-temps — autrement dit, il ne peut pas progresser.

Pour éviter les interblocages (_deadlocks_), il existe des restrictions strictes sur les moments et les agents qui peuvent être bloqués.

- Tout agent non bloqué avec un thread d'exécution dédié finit par progresser.
- Dans un ensemble d'agents partageant un thread d'exécution, un agent finit par progresser.
- Un agent ne bloque pas un autre agent sauf via des API explicites qui permettent le blocage.
- Seuls certains agents peuvent être bloqués. Sur le web, cela inclut les workers dédiés et partagés, mais pas les fenêtres de même origine ni les service workers.

Le groupe d'agents garantit un certain niveau d'intégrité sur l'activité de ses agents, en cas de pause ou de terminaison externe&nbsp;:

- Un agent peut être mis en pause ou repris sans qu'il le sache ou y consente. Par exemple, naviguer hors d'une fenêtre peut suspendre l'exécution du code mais préserver son état. Cependant, un groupe d'agents ne peut pas être partiellement désactivé, pour éviter qu'un agent soit affamé parce qu'un autre a été désactivé. Par exemple, les shared workers ne sont jamais dans le même groupe que la fenêtre créatrice ou d'autres workers dédiés. En effet, la durée de vie d'un shared worker est indépendante des documents&nbsp;: si un document est désactivé alors que son worker dédié détient un verrou, le shared worker ne pourra pas acquérir le verrou tant que le worker dédié n'est pas réactivé, voire jamais. Pendant ce temps, d'autres workers essayant d'accéder au shared worker depuis d'autres fenêtres seront affamés.
- De même, un agent peut être terminé par des facteurs externes au groupe. Par exemple, un système d'exploitation ou un·e utilisateur·ice qui tue un processus navigateur, ou le navigateur qui force la terminaison d'un agent parce qu'il utilise trop de ressources. Dans ce cas, tous les agents du groupe sont terminés. (La spécification autorise aussi une seconde stratégie, une API permettant à au moins un membre restant du groupe d'identifier la terminaison et l'agent terminé, mais cela n'est pas implémenté sur le web.)

## Spécifications

{{Specifications}}

## Voir aussi

- [Boucles d'événement <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops) dans la norme HTML
- [Qu'est-ce que la boucle d'événement&nbsp;? <sup>(angl.)</sup>](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#what-is-the-event-loop) dans la documentation Node.js
