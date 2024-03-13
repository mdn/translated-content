---
title: setTimeout()
slug: Web/API/setTimeout
---

{{APIRef("HTML DOM")}}

La méthode globale **`setTimeout()`** permet de définir un minuteur qui exécute une fonction ou un code donné après la fin du délai indiqué.

## Syntaxe

```js
setTimeout(code);
setTimeout(code, delay);

setTimeout(functionRef);
setTimeout(functionRef, delay);
setTimeout(functionRef, delay, param1);
setTimeout(functionRef, delay, param1, param2);
setTimeout(functionRef, delay, param1, param2, /* ... ,*/ paramN);
```

### Paramètres

- `functionRef`
  - : Une [fonction](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function) à exécuter lorsque le délai du minuteur est expiré.
- `code`
  - : Une syntaxe alternative qui permet d'inclure une chaîne de caractères plutôt qu'une fonction. Le code contenu est compilé et exécuté lorsque le minuteur expire. Cette syntaxe est **déconseillée** pour les mêmes raisons qu'[`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval) et représente un risque de sécurité.
- `delay` {{optional_inline}}

  - : La durée, exprimée en millisecondes, que le minuteur devrait attendre avant l'exécution de la fonction indiquée. Si ce paramètre est absent, c'est 0 qui est utilisé comme valeur par défaut, indiquant que la fonction doit être exécutée au plus vite, c'est-à-dire au prochain cycle d'évènements.

    Que le paramètre soit fourni ou non, la durée attendue avant l'exécution peut être plus longue que le nombre de millisecondes exprimées, voir [les raisons pour lesquelles la durée effective est plus longue](#raisons_pour_lesquelles_la_durée_effective_est_plus_longue) ci-après.

    On notera également que si la valeur n'est pas un nombre, [une conversion implicite](/fr/docs/Glossary/Type_coercion) est effectuée pour transformer la valeur en un nombre. Voir [un exemple de conversion de valeur non-numérique pour la durée](#conversion_de_valeur_non-numérique_pour_le_durée) ci-après.

- `param1`, …, `paramN` {{optional_inline}}

  - : Des arguments additionnels qui sont passés à la fonction donnée par l'argument `function`.

### Valeur de retour

Un entier positif `timeoutID` qui identifie le minuteur créé par l'appel à `setTimeout()`. Cette valeur peut être passée à [`clearTimeout()`](/fr/docs/Web/API/clearTimeout) pour annuler le minuteur.

Une même valeur de `timeoutID` ne sera jamais réutilisée par un appel ultérieur à `setTimeout()` ou `setInterval()` sur le même objet (que ce soit une fenêtre ou un <i lang="en">worker</i>). Toutefois, des objets différents utilisent des ensembles distincts d'identifiants.

## Description

Les minuteurs sont annulés grâce à la fonction [`clearTimeout()`](/fr/docs/Web/API/clearTimeout).

Pour appeler une fonction de façon répétée (toutes les _N_ millisecondes), on utilisera plutôt [`setInterval()`](/fr/docs/Web/API/setInterval).

### Conversion de valeur non-numérique pour la durée

Lorsque `setTimeout()` est appelée avec une valeur du paramètre `delay` qui n'est pas un nombre, une [conversion de type](/fr/docs/Glossary/Type_coercion) sera effectuée implicitement pour convertir la valeur en nombre. Ainsi, dans l'exemple qui suit, le code fait l'erreur d'utiliser la valeur `"1000"` qui est une chaîne de caractères, plutôt que le nombre `1000`, mais cela fonctionne, car la chaîne est transformée implicitement dans la valeur numérique `1000`, et la fonction est donc exécutée après 1 seconde.

```js example-bad
setTimeout(() => {
  console.log("Retardée d'une seconde.");
}, "1000");
```

Toutefois, dans de nombreux cas, la conversion implicite peut mener à des résultats inattendus voire surprenants. Par exemple, lorsque le code qui suit est exécuté, la chaîne de caractères `"1 seconde"` est en fait transformée dans le nombre `0`, et le code est donc exécuté immédiatement.

```js example-bad
setTimeout(() => {
  console.log("Retardée d'une seconde.");
}, "1 seconde");
```

Aussi, on veillera à ne pas utiliser de chaîne de caractères pour le paramètre `delay` et à utiliser uniquement des nombres&nbsp;:

```js example-good
setTimeout(() => {
  console.log("Retardée d'une seconde.");
}, 1000);
```

### Fonctionnement avec les fonctions asynchrones

`setTimeout()` est une fonction asynchrone, ce qui signifie que la fonction passée en argument ne bloquera pas l'exécution des autres fonctions de la pile d'appels. Autrement dit, on ne peut pas utiliser `setTimeout()` afin de créer une pause avant que la prochaine fonction de la pile soit déclenchée.

Prenons cet exemple&nbsp;:

```js
setTimeout(() => {
  console.log("Voici le premier message");
}, 5000);
setTimeout(() => {
  console.log("Voici le second message");
}, 3000);
setTimeout(() => {
  console.log("Voici le troisième message");
}, 1000);

// Produira ceci dans la console&nbsp;:

// Voici le troisième message
// Voici le second message
// Voici le premier message
```

On voit ici que la première fonction ne crée pas une pause de 5 secondes que la deuxième fonction soit appelée. La première fonction est appelée par le moteur dès lors que 5 secondes sont écoulées. Pendant ce délai, le reste des instructions continue de s'exécuter et la deuxième fonction est appelée par le moteur dès que 3 secondes se sont écoulées. Juste après, il en va de même après la troisième fonction. Le délai de 1 seconde étant écoulé d'abord, c'est la troisième fonction qui est exécutée d'abord, puis la seconde et enfin la première.

Pour créer une séquence d'opérations où une fonction se déclenche uniquement après qu'une autre fonction ait terminé, on utilisera plutôt [les promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise).

### Le problème de `this`

Lorsqu'on passe une méthode à `setTimeout()`, elle est appelée avec une valeur de `this` qui peut être différente de celle attendue. Ce problème général est détaillé dans [la référence JavaScript](/fr/docs/Web/JavaScript/Reference/Operators/this#en_tant_que_méthode_dun_objet).

Le code exécuté par `setTimeout()` est appelé par un contexte d'exécution séparé de la fonction depuis laquelle `setTimeout()` a été appelé. Les règles usuelles pour la définition du mot-clé `this` s'appliquent et si `this` n'est pas défini lors de l'appel ou avec `bind()`, sa valeur par défaut sera l'objet `window` (ou `global`). Il ne s'agira pas de la même valeur de `this` qu'au sein de la fonction qui a appelé `setTimeout()`.

Prenons l'exemple suivant&nbsp;:

```js
const monTableau = ["zéro", "un", "deux"];
monTableau.maMethode = function (sPropriete) {
  console.log(arguments.length > 0 ? this[sPropriete] : this);
};

monTableau.maMethode(); // affiche "zéro,un,deux"
monTableau.maMethode(1); // affiche "un"
```

Cela fonctionne, car, lorsque `maMethode` est appelée, `this` vaut `monTableau` et, au sein de la fonction, `this[sPropriete]` est donc équivalent à `monTableau[sPropriete]`. Toutefois, si on écrit ceci&nbsp;:

```js
setTimeout(monTableau.maMethode, 1.0 * 1000); // affiche "[object Window]" après 1 seconde
setTimeout(monTableau.maMethode, 1.5 * 1000, "1"); // affiche "undefined" après 1.5 secondes
```

La fonction `monTableau.maMethode` est passée à `setTimeout`, et lorsqu'elle est appelée, la valeur de `this` n'est pas définie et vaut `window` par défaut.

Il n'y a pas d'argument `thisArg` pour `setTimeout` (comme on peut en voir pour [`forEach()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) et [`reduce()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce). Comme indiqué après, utiliser `call()` ne fonctionne pas non plus.

```js
setTimeout.call(monTableau, monTableau.maMethode, 2.0 * 1000); // erreur
setTimeout.call(monTableau, monTableau.maMethode, 2.5 * 1000, 2); // erreur également
```

#### Solutions

##### Utiliser une fonction englobante

Une méthode pour résoudre ce problème consiste à englober la méthode dans une fonction afin que `this` ait la valeur attendue&nbsp;:

```js
setTimeout(function () {
  monTableau.maMethode();
}, 2.0 * 1000);
// affiche "zéro,un,deux" après 2 secondes
setTimeout(function () {
  monTableau.maMethode("1");
}, 2.5 * 1000);
// affiche "un" après 2.5 secondes
```

La fonction englobante peut être une fonction fléchée&nbsp;:

```js
setTimeout(() => {
  monTableau.maMethode();
}, 2.0 * 1000);
// affiche "zéro,un,deux" après 2 secondes
setTimeout(() => {
  monTableau.maMethode("1");
}, 2.5 * 1000);
// affiche "un" après 2.5 secondes
```

##### Utiliser `bind()`

On peut aussi utiliser la fonction [`bind()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) afin de fixer la valeur de `this` pour tous les appels à une fonction donnée&nbsp;:

```js
const monTableau = ["zéro", "un", "deux"];
const maMethodeLiee = function (sPropriete) {
  console.log(arguments.length > 0 ? this[sPropriete] : this);
}.bind(monTableau);

maMethodeLiee();
// affiche "zéro,un,deux" car 'this' est lié à monTableau
// dans la fonction
maMethodeLiee(1);
// affiche "un"
setTimeout(maMethodeLiee, 1.0 * 1000);
// Affiche "zéro,un,deux" après 1 seconde grâce à la liaison
setTimeout(maMethodeLiee, 1.5 * 1000, "1");
// Affiche "un" après 1.5 secondes
```

### Passer une chaîne de caractères pour les instructions à exécuter

Lorsqu'on passe une chaîne de caractères plutôt qu'une fonction à `setTimeout()`, cela expose aux mêmes problèmes que d'utiliser [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval).

```js example-bad
// À ne pas faire
setTimeout("console.log('Hello World!');", 500);
```

```js example-good
// On privilégiera cette forme
setTimeout(function () {
  console.log("Hello World!");
}, 500);
```

Une chaîne de caractères passée à `setTimeout()` est évaluée dans le contexte global et les symboles locaux au contexte où `setTimeout()` a été appelée ne seront plus disponibles lorsque la chaîne de caractères sera évaluée comme du code.

### Raisons pour lesquelles la durée effective est plus longue

Plusieurs raisons peuvent expliquer que la durée effective d'un minuteur soit plus longue que celle attendue. Dans cette section, nous couvrirons les raisons les plus communes.

#### Minuteurs imbriqués

Comme indiqué dans [le standard HTML](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers), les navigateurs appliqueront un délai minimum de 4 millisecondes lorsqu'un appel imbriqué à `setTimeout` a été planifié 5 fois.

On peut observer ce comportement dans l'exemple qui suit, dans lequel on imbrique un appel à `setTimeout()` avec une durée spécifiée à `0` milliseconde. Ensuite, on affiche la durée effective lorsque le gestionnaire est appelé. On peut voir que, pour les 4 premières fois, la durée effective est de 0 milliseconde environ et qu'après, elle passe à environ 4 millisecondes&nbsp;:

```html
<button id="run">Exécuter</button>
<pre>Précédent    courant    durée</pre>
<div id="log"></div>
```

```js
let last = 0;
let iterations = 10;

function timeout() {
  // Enregistrer l'instant de l'appel
  logline(new Date().getMilliseconds());

  // Tant qu'on n'a pas fini, planifier le prochain appel
  if (iterations-- > 0) {
    setTimeout(timeout, 0);
  }
}

function run() {
  // Nettoyer le journal
  const log = document.querySelector("#log");
  while (log.lastElementChild) {
    log.removeChild(log.lastElementChild);
  }

  // Initialiser le nombre d'itérations et l'horodatage
  // de départ
  iterations = 10;
  last = new Date().getMilliseconds();

  // Démarrer le minuteur
  setTimeout(timeout, 0);
}

function pad(number) {
  return number.toString().padStart(3, "0");
}

function logline(now) {
  // Afficher le dernier horodatage, le nouveau, et la
  // différence
  const newLine = document.createElement("pre");
  newLine.textContent = `${pad(last)}           ${pad(now)}          ${
    now - last
  }`;
  document.getElementById("log").appendChild(newLine);
  last = now;
}

document.querySelector("#run").addEventListener("click", run);
```

{{EmbedLiveSample("", 100, 420)}}

#### Minuteurs dans les onglets inactifs

Afin de réduire la charge (et la consommation énergétique associée) des onglets en arrière-plan, les navigateurs appliqueront un délai minimum sur les onglets inactifs. Ceci peut ne pas s'appliquer si la page joue du son avec l'API Web Audio et [`AudioContext`](/fr/docs/Web/API/AudioContext).

Certains aspects spécifiques de cette règle dépendent des navigateurs&nbsp;:

- Firefox Desktop et Chrome appliquent une durée minimale de 1 seconde pour les onglets inactifs.
- Firefox pour Android applique une durée minimale de 15 minutes pour les onglets inactifs et peut les décharger complètement.
- Firefox ne limite pas un onglet inactif si celui-ci contient un [`AudioContext`](/fr/docs/Web/API/AudioContext).

#### Limitation des scripts de pistage

Firefox applique certaines limitations pour les scripts qu'il reconnaît comme scripts de pistage. Lors de l'exécution dans un onglet actif, le délai minimal est de 4ms. Pour les onglets en arrière-plan, ce délai passe à 10 seconds et s'applique 30 secondes après que le chargement initial du document a eu lieu.

Voir [la page d'information sur la protection contre le pistage (en anglais)](https://wiki.mozilla.org/Security/Tracking_protection) pour plus de détails.

#### Ordonnancement des autres tâches

Le minuteur peut également se déclencher plus tard si le système d'exploitation ou le navigateur est occupé à d'autres tâches.

Par exemple, on notera que la fonction passée en argument de `setTimeout()` ne peut pas être exécutée avant que le <i lang="en">thread</i> qui appelle `setTimeout()` ait terminé son exécution. On aura donc&nbsp;:

```js
function toto() {
  console.log("toto a été appelée");
}
setTimeout(toto, 0);
console.log("Après setTimeout()");
```

Affichera ce qui suit dans la console&nbsp;:

```
Après setTimeout()
toto a été appelée
```

En effet, même si `setTimeout()` a été appelé avec un délai à zéro, la fonction correspondante est placée dans une queue et son exécution est planifiée pour le prochain cycle disponible et pas immédiatement.

Le code en cours d'exécution doit terminer avant que les fonctions placées dans la queue puissent être exécutées. C'est pour cela qu'on a cet ordre d'exécution, qui peut ne pas être celui qu'on attendait.

#### Report des minuteurs pendant le chargement de la page

Firefox diffèrera le déclenchement des minuteurs lorsque l'onglet actuel est en train de charger. Le déclenchement est reporté jusqu'à ce que le fil d'exécution principal soit considéré comme inactif (<i lang="en">idle</i>) (à la façon de [window.requestIdleCallback()](/fr/docs/Web/API/Window/requestIdleCallback)), ou jusqu'à ce que l'évènement `load` soit déclenché.

### Pages d'arrière-plan des WebExtensions et minuteurs

Pour les [WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions), `setTimeout()` ne fonctionne pas de façon sûre. Il faut privilégier l'API [`alarms`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/alarms) pour le développement d'extensions.

### Valeur maximale pour le délai

Les navigateurs comme Internet Explorer, Chrome, Safari, et Firefox stockent le délai sous la forme d'un entier signé sur 32 bits. Aussi, il y a un dépassement des limites lorsqu'on indique un délai supérieur à 2&nbsp;147&nbsp;483&nbsp;647&nbsp;ms (ce qui correspond à 24,8 jours), et le résultat est un minuteur qui est exécuté immédiatement.

## Exemples

### Définir et annuler des minuteurs

Dans l'exemple qui suit, on a deux boutons simples sur une page web qui sont reliés aux fonctions `setTimeout()` et `clearTimeout()`. Appuyer sur le premier bouton déclenchera un minuteur qui affichera un message après deux secondes et enregistrera l'identifiant du minuteur pour que celui-ci soit utilisé avec `clearTimeout()`. En appuyant sur le deuxième bouton, on peut annuler le minuteur.

#### HTML

```html
<button onclick="delayedMessage();">
  Afficher un message après deux secondes
</button>
<button onclick="clearMessage();">
  Annuler le message avant qu'il apparaisse
</button>

<div id="output"></div>
```

#### JavaScript

```js
let timeoutID;

function setOutput(outputContent) {
  document.querySelector("#output").textContent = outputContent;
}

function delayedMessage() {
  setOutput("");
  timeoutID = setTimeout(setOutput, 2 * 1000, "C'était lent !");
}

function clearMessage() {
  clearTimeout(timeoutID);
}
```

```css hidden
#output {
  padding: 0.5rem 0;
}
```

#### Résultat

{{EmbedLiveSample('')}}

Voir aussi [l'exemple `clearTimeout()`](/fr/docs/Web/API/clearTimeout#example).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `setTimeout()` qui permet de passer des arguments à la fonction de rappel, avec la bibliothèque tierce `core-js`](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- [`clearTimeout()`](/fr/docs/Web/API/clearTimeout)
- [`setInterval()`](/fr/docs/Web/API/setInterval)
- [`Window.requestAnimationFrame()`](/fr/docs/Web/API/Window/requestAnimationFrame)
- [`queueMicrotask()`](/fr/docs/Web/API/queueMicrotask)
