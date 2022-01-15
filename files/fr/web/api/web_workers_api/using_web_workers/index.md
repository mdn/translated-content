---
title: Utilisation des web workers
slug: Web/API/Web_Workers_API/Using_web_workers
tags:
  - Avancé
  - Guide
  - JavaScript
  - Web Workers
translation_of: Web/API/Web_Workers_API/Using_web_workers
original_slug: Web/API/Web_Workers_API/Utilisation_des_web_workers
---
{{DefaultAPISidebar("Web Workers API")}}

Les _Web Workers_ sont un outil permettant au contenu web d'exécuter des scripts dans des tâches (_threads_) d'arrière-plan. Le _thread_ associé au _worker_ peut réaliser des tâches sans qu'il y ait d'interférence avec l'interface utilisateur. De plus, les _web workers_ peuvent réaliser des opérations d'entrée/sortie grâce à [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) (bien que les attributs `responseXML` et `channel` soient nécessairement vides dans ces cas). Une fois créé, un _worker_ peut envoyer des messages au code JavaScript qui l'a créé. De même, le script initial peut envoyer des messages au _worker_. Cette communication s'effectue grâce à des gestionnaires d'évènements. Dans cet article, nous verrons une introduction à l'utilisation des _web workers_.

## L'API Web Workers

Un _worker_ est un objet créé à l'aide d'un constructeur (par exemple {{domxref("Worker.Worker", "Worker()")}}) et qui exécute un fichier JavaScript donné. Ce fichier contient le code qui sera exécuté par le _thread_ du _worker_. Les _workers_ sont exécutés dans un contexte global qui n'est pas celui du document (généralement {{domxref("window")}}). Aussi, si, dans un _worker_, on utilise {{domxref("window")}} pour accéder à la portée globale (plutôt que {{domxref("window.self","self")}}), cela provoquera une erreur.

Le contexte du _worker_ est représenté par un objet {{domxref("DedicatedWorkerGlobalScope")}} pour les _workers_ dédiés et par un objet {{domxref("SharedWorkerGlobalScope")}} sinon. Un _worker_ dédié est uniquement accessible au travers du script qui l'a déclenché tandis qu'un _worker_ partagé peut être utilisé par différents scripts.

> **Note :** Voir [la page d'entrée pour l'API Web Workers](/fr/docs/Web/API/Web_Workers_API) pour consulter la documentation de référence sur les _workers_ et d'autres guides.

Il est possible d'exécuter n'importe quel code JavaScript dans le _thread_ du _worker_, à l'exception des méthodes de manipulation du DOM ou de certaines propriétés et méthodes rattachées à {{domxref("window")}}. On notera cependant qu'on peut tout à fait utiliser certaines API rendues disponibles via `window` comme les [WebSockets](/fr/docs/Web/API/WebSockets_API), les API de stockage de données telles que [IndexedDB](/fr/docs/Web/API/API_IndexedDB). Pour plus de détails, voir [les fonctions et classes disponibles au sein des _workers_](/fr/docs/Web/API/Worker/Functions_and_classes_available_to_workers).

Les données sont échangées entre le _thread_ du _worker_ et le _thread_ principal par l'intermédiaire de messages. Chaque partie peut envoyer des messages à l'aide de la méthode `postMessage()` et réagir aux messages reçus grâce au gestionnaire d'évènement `onmessage` (le message sera contenu dans l'attribut `data` de l'évènement {{event("Message")}} associé). Les données sont copiées dans le message, elles ne sont pas partagées.

Les _workers_ peuvent également déclencher la création d'autres _workers_ tant que ceux-ci restent hébergés sur la même origine que la page parente. De plus, les _workers_ pourront utiliser [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) pour effectuer des opérations réseau mais les attributs `responseXML` et `channel` de `XMLHttpRequest` renverront nécessairement `null`.

## Les _workers_ dédiés

Comme indiqué plus haut, un _worker_ dédié n'est accessible qu'au travers du script qui l'a initié. Dans cette section, nous étudierons le code JavaScript de [notre exemple de _worker_ dédié simple](https://github.com/mdn/simple-web-worker). Dans cet exemple, nous souhaitons multiplier deux nombres. Ces nombres sont envoyés à un _worker_ dédié puis le résultat est renvoyé à la page et affiché.

Cet exemple est assez simple mais permet d'introduire les concepts de base autour des _workers_. Nous verrons certains détails plus avancés dans la suite de cet article.

### Détecter la possibilité d'utiliser les _workers_

Afin de gérer une meilleure amélioration progressive, une rétro-compatibilité et de présenter des messages d'erreur adéquats, il pourra être utile d'envelopper le code relatif au _worker_ de la façon suivante ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)) :

```js
if (window.Worker) {
  ...
}
```

### Initier un _worker_ dédié

La création d'un nouveau _worker_ est assez simple. On appellera le constructeur {{domxref("Worker.Worker", "Worker()")}} en indiquant l'URI du script à exécuter dans le _thread_ associé au _worker_ ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)) :

```js
var monWorker = new Worker('worker.js');
```

### Envoyer des messages au _worker_ et y réagir

L'intérêt principal des _workers_ repose sur l'échange de messages à l'aide de la méthode {{domxref("Worker.postMessage", "postMessage()")}} et grâce au gestionnaire d'évènement {{domxref("Worker.onmessage", "onmessage")}}. Lorsqu'on souhaite envoyer un message au _worker_, on enverra des messages de la façon suivante ([main.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/main.js)) :

```js
premierNombre.onchange = function() {
  monWorker.postMessage([premierNombre.value, deuxiemeNombre.value]);
  console.log('Message envoyé au worker');
}

deuxiemeNombre.onchange = function() {
  monWorker.postMessage([premierNombre.value, deuxiemeNombre.value]);
  console.log('Message envoyé au worker');
}
```

Ici, nous disposons de deux éléments {{htmlelement("input")}} représentés par les variables `premierNombre` et `deuxiemeNombre`. Lorsque l'un de ces deux champs est modifié, on utilise `monWorker.postMessage([premierNombre.value, deuxiemeNombre.value])` afin d'envoyer les deux valeurs au _worker_ dans un tableau. Les messages peuvent être utilisés pour échanger n'importe quel type de valeur.

Dans le _worker_, on peut réagir au message reçu grâce à un gestionnaire d'évènement comme celui-ci ([worker.js](https://github.com/mdn/simple-web-worker/blob/gh-pages/worker.js)) :

```js
onmessage = function(e) {
  console.log('Message reçu depuis le script principal.');
  var workerResult = 'Résultat : ' + (e.data[0] * e.data[1]);
  console.log('Envoi du message de retour au script principal');
  postMessage(workerResult);
}
```

Le gestionnaire `onmessage` permet d'exécuter du code lorsqu'un message est reçu. Le message même est disponible grâce à l'attribut `data` de l'évènement. Dans cet exemple, nous multiplions simplement les deux nombres avant d'utiliser `postMessage()` à nouveau afin d'envoyer le résultat via un message destiné au _thread_ principal.

De retour dans le _thread_ principal, nous pouvons utiliser `onmessage` à nouveau pour réagir à la réponse provenant du _worker_ :

```js
monWorker.onmessage = function(e) {
  resultat.textContent = e.data;
  console.log('Message reçu depuis le worker');
}
```

Ici, nous récupérons les données grâce à l'attribut `data` de l'évènement et nous mettons à jour le contenu du paragraphe avec l'attribut `textContent` de l'élément. Ainsi, l'utilisateur peut visualiser le résultat du calcul.

> **Note :** On notera que `onmessage` et `postMessage()` doivent être rattachés à un objet `Worker` lorsqu'ils sont utilisés depuis le _thread_ principal (ici, c'était `monWorker`) mais pas lorsqu'ils sont employés depuis le _worker_. En effet, dans le _worker_, c'est le _worker_ qui constitue la portée globale et qui met à disposition ces méthodes.

> **Note :** Lorsqu'un message est envoyé d'un _thread_ à l'autre, ses données sont copiées. Elles ne sont pas partagées. Voir [ci-après](#échange) pour plus d'explications à ce sujet.

### Clôturer un _worker_

Si on doit arrêter un _worker_ immédiatement, on pourra utiliser la méthode {{domxref("Worker", "terminate")}} depuis le _thread_ principal :

```js
monWorker.terminate();
```

Lorsque cette méthode exécuté, le _thread_ associé au _worker_ est tué immédiatement.

### Gérer les erreurs

Lorsqu'une erreur d'exécution se produit avec le _worker_, son gestionnaire d'évènement `onerror` est appelé et reçoit un évènement `error` qui implémente l'interface `ErrorEvent`.

Cet évènement ne bouillonne (_bubble_) pas et peut être annulé. Pour empêcher les conséquences par défaut, on pourra utiliser la méthode [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault) rattachée à l'évènement d'erreur.

L'évènement décrivant l'erreur possède notamment trois propriétés intéressantes :

- `message`
  - : Un message d'erreur compréhensible par un humain.
- `filename`
  - : Le nom du fichier pour lequel l'erreur s'est produite.
- `lineno`
  - : Le numéro de ligne au sein du fichier responsable de l'erreur.

### Initier des _workers_ fils

Les _workers_ peuvent également engendrer d'autres _workers_. Ces _workers_-fils doivent être hébergés sur la même origine que la page initiale. De plus, les URI des workers-fils sont résolues relativement à l'emplacement du _worker_ père (plutôt que par rapport à la page parente). Ces contraintes permettent de simplifier le suivi des dépendances.

### Importer des scripts et des bibliothèques

Les _threads_ d'exécution des _workers_ peuvent accéder à la fonction globale `importScripts()`, qui leur permet d'importer des scripts. Cette fonction prend zéro à plusieurs URL en paramètres et importe les ressources associées. Voici quelques exemples valides :

```js
importScripts();                         /* n'importe rien */
importScripts('toto.js');                /* importe uniquement "toto.js" */
importScripts('toto.js', 'truc.js');     /* importe deux scripts */
importScripts('//example.com/hello.js'); /* importe un script d'une autre origine */
```

Lors d'un import, le navigateur chargera chacun des scripts puis l'exécutera. Chaque script pourra ainsi mettre à disposition des objets globaux qui pourront être utilisés par le _worker_. Si le script ne peut pas être chargé, une exception `NETWORK_ERROR` sera levée et le code assicé ne sera pas exécuté. Le code exécuté précédemment (y compris celui-ci reporté à l'aide de {{domxref("window.setTimeout()")}}) continuera cependant d'être fonctionnel. Les déclarations de fonction situées **après** `importScripts()` sont également exécutées car évaluées avant le reste du code.

> **Note :** Les scripts peuvent être téléchargés dans n'importe quel ordre mais ils seront exécutés dans l'ordre des arguments passés à `importScripts()` . Cet exécution est effectuée de façon synchrone et `importScripts()` ne rendra pas la main tant que l'ensemble des scripts n'auront pas été chargés et exécutés.

## Les _workers_ partagés

Un _worker_ partagé est accessible par plusieurs scripts (même si ceux-ci proviennent de différentes fenêtres, _iframes_ voire d'autres _workers_). Dans cette section, nous illustrerons les concepts à l'aide de [l'exemple simple d'un _worker_ partagé.](https://github.com/mdn/simple-shared-worker) Cet exemple est semblable à l'exemple utilisé pour le _worker_ dédié. Il diffère car il possède deux fonctions, gérées par deux fichiers de script distincts : une fonction permettant de multiplier deux nombres et une fonction permettant d'élever un nombre au carré. Les deux scripts utilisent le même _worker_ pour réaliser le calcul demandé.

Ici, nous nous intéresserons particulièrement aux différences entre les _workers_ dédiés et les _workers_ partagés. Dans cet exemple, nous aurons deux pages HTML, chacune utilisant du code JavaScript employant le même _worker_.

> **Note :** Si on peut accéder à un _worker_ partagé depuis différents contextes de navigations, ces contextes de navigation doivent néanmoins partager la même origine (même protocole, même hôte, même port).

> **Note :** Dans Firefox, les _workers_ partagés ne peuvent pas être partagés entre les documents chargés en navigation privée et les documents chargés en navigation classique ({{bug(1177621)}}).

### Initier un _worker_ partagé

La création d'un nouveau _worker_ partagé est assez semblable à la création d'un _worker_ dédié. On utilise alors un constructeur différent :

```js
var monWorker = new SharedWorker('worker.js');
```

Une différence fondamentale avec les _workers_ dédiés est l'utilisation d'un objet `port` pour la communication. Un port sera explicitement ouvert pour être utilisé afin de communiquer avec le _worker_ (dans le cas des _workers_ dédiés, ce port est ouvert implicitement).

La connexion au port doit être démarrée implicitement avec l'utilisation du gestionnaire d'évènement `onmessage` ou explicitement avec la méthode `start()` avant qu'un message soit envoyé. On utilisera uniquement `start()` si l'évènement `message` est détecté avec la méthode `addEventListener()`.

> **Note :** Lorsqu'on utilise la méthode `start()` afin d'ouvrir le port de connexion, celle-ci doit être appelée de part et d'autre (depuis le _thread_ parent **et** depuis le _worker_) si on souhaite disposer d'une connexion bidirectionnelle.

### Échanger des messages avec un _worker_ partagé et y réagir

On peut alors envoyer des messages au _worker_. Dans le cas d'un _worker_ partagé, la méthode `postMessage()` doit être appelée via l'objet `port` (là aussi, vous pouvez étudier le code de [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) et [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)) :

```js
carreNombre.onchange = function() {
  monWorker.port.postMessage([carreNombre.value, carreNombre.value]);
  console.log('Message envoyé au worker');
}
```

Du côté du _worker_, les choses sont également légèrement plus compliquées (voir [worker.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/worker.js)) :

```js
onconnect = function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Résultat : ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }
}
```

On commence par utiliser le gestionnaire `onconnect` afin de déclencher du code à la connexion au port (c'est-à-dire lorsque le gestionnaire `onmessage` est déclaré depuis le _thread_ parent ou lorsque la méthode `start()` est invoquée explicitement depuis le _thread_ parent).

On utilise l'attribut `ports` de l'évènement afin de récupérer le port utilisé et on le place dans une variable.

Ensuite, sur ce port, on ajoute un gestionnaire d'évènement pour l'évènement `message` afin de faire les calculs et de renvoyer le résultat au _thread_ principal. En définissant ce gestionnaire pour `message` dans le _thread_ du _worker_, on ouvre implicitement le port pour la connexion au _thread_ parent : il n'est donc pas nécessaire d'invoquer `port.start()`.

Enfin, dans le script de la page, on gère le message du résultat (voir [multiply.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/multiply.js) et [square.js](https://github.com/mdn/simple-shared-worker/blob/gh-pages/square.js)):

```js
monWorker.port.onmessage = function(e) {
  result2.textContent = e.data;
  console.log('Message reçu depuis le worker');
}
```

Lorsqu'un message provient du port associé au _worker_, on vérifie son type puis on insère le résultat dans le paragraphe associé.

## Sûreté des _threads_

L'interface {{domxref("Worker")}} engendre des _threads_ au sens du système d'exploitation. Certains développeurs avertis pourront se demander si cette communication à base de _threads_ ne peut pas générer d'effets indésirables tels que des situations de compétition (_race conditions_).

Toutefois, la communication entre les _web workers_ est contrôlée explicitement dans les scripts et il n'y a pas d'accès aux composants ou au DOM qui ne seraient pas sûrs à ce niveau. De plus, la communication entre les _threads_ s'effectue par recopie de données. Aussi, s'il n'est théoriquement pas impossible de ne pas avoir de tels problèmes, il faudrait les chercher pour les provoquer.

## Règles de sécurité du contenu (_content security policy_, CSP)

Les _workers_ disposent de leur propre contexte d'exécution, distinct de celui du document qui les a créés. Aussi, en général, les _workers_ ne sont pas gérés par la [politique de sécurité de contenu](/fr/docs/Web/HTTP/CSP) du document (ou du _worker_ parent) responsable de leur création. Ainsi, si un document est servi avec l'en-tête suivant :

    Content-Security-Policy: script-src 'self'

Cette règle empêchera n'importe quel script inclus dans le document d'utiliser [`eval()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/eval). Toutefois, si le script génère un _worker_, le code exécuté par ce _worker_ pourra utiliser `eval()`.

Pour appliquer une règle de sécurité au _worker_, il faudra fournir un en-tête [Content-Security-Policy](/fr/docs/Web/HTTP/Headers/Content-Security-Policy) approprié pour la requête responsable du service du script du _worker_.

Si l'origine du script du _worker_ est un identifiant global unique (si son URL utilise le schéma `data://` ou `blob://` par exemple), le _worker_ héritera du CSP associé au document responsable de sa création.

## Échanger des données avec les _workers_ : plus de détails

Les données échangées entre le document principal et les _workers_ sont **copiées** et non partagées. Lorsqu'ils sont envoyés au _worker_, les objets sont sérialisés (puis désérialisés à leur réception). La page et le _worker_ **ne partagent pas le même exemplaire** et on a donc deux versions d'une part et d'autre. La plupart des navigateurs implémentent cette approche avec [une clonage structurel](/fr/docs/Web/API/Web_Workers_API/algorithme_clonage_structure).

Pour illustrer ce point, on prendra une fonction intitulée `emulateMessage()` et qui simule le comportement d'une valeur clonée (pas partagée) avec un _worker_ attaché à la page principale et réciproquement :

```js
function emulateMessage(vVal) {
    return eval('(' + JSON.stringify(vVal) + ')');
}

// Tests

// test #1
var example1 = new Number(3);
console.log(typeof example1); // object
console.log(typeof emulateMessage(example1)); // number

// test #2
var example2 = true;
console.log(typeof example2); // boolean
console.log(typeof emulateMessage(example2)); // boolean

// test #3
var example3 = new String('Hello World');
console.log(typeof example3); // object
console.log(typeof emulateMessage(example3)); // string

// test #4
var example4 = {
    'name': 'John Smith',
    "age": 43
};
console.log(typeof example4); // object
console.log(typeof emulateMessage(example4)); // object

// test #5
function Animal(sType, nAge) {
    this.type = sType;
    this.age = nAge;
}
var example5 = new Animal('Cat', 3);
console.log(example5.constructor); // Animal
console.log(emulateMessage(example5).constructor); // Object
```

Une valeur qui est clonée et non partagée est appelée un message. Les messages peuvent être envoyés et reçus grâce à `postMessage()` et au gestionnaire d'évènement pour `message` (dont l'attribut {{domxref("MessageEvent.data", "data")}} contiendra les données copiées).

**example.html** (page principale) :

```js
var myWorker = new Worker('my_task.js');

myWorker.onmessage = function(oEvent) {
  console.log('Worker said : ' + oEvent.data);
};

myWorker.postMessage('ali');
```

**my_task.js** (le code du _worker_) :

```js
postMessage("I\'m working before postMessage(\'ali\').");

onmessage = function(oEvent) {
  postMessage('Hi ' + oEvent.data);
};
```

L'[algorithme de clonage structurel](/fr/docs/Web/API/Web_Workers_API/algorithme_clonage_structure) permet de sérialiser aussi bien des données JSON que d'autres formats et permet notamment de gérer les références circulaires (ce que JSON ne permet pas de gérer nativement).

### Les objets transférables - échanger des données avec transfert de la propriété

Chrome 17+ et Firefox 18+ permettent également d'échanger certains types d'objet (qualifiés de transférables et qui implémentent l'interface {{domxref("Transferable")}}) avec des _workers_ et à haute performance. Les objets transférables sont passés d'un contexte à l'autre avec une opération [zero-copy](https://en.wikipedia.org/wiki/Zero-copy) qui permet d'obtenir des améliorations sensibles lors de l'échange de données volumineuses. On peut voir cela comme un passage de référence du monde C/C++ mais les données qui sont transférées depuis le contexte appelant ne sont plus disponibles dans ce contexte après le transfert. La propriété des données est transférée au nouveau contexte. Ainsi, lorsqu'on transfère un objet {{domxref("ArrayBuffer")}} depuis l'application principale vers le _worker_, l'objet {{domxref("ArrayBuffer")}} de départ est nettoyé et ne peut plus être utilisé, son contenu est (littéralement) transféré au contexte du _worker_.

```js
// Créer un fichier de 32MB et le remplir.
var uInt8Array = new Uint8Array(1024 * 1024 * 32); // 32MB
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i;
}

worker.postMessage(uInt8Array.buffer, [uInt8Array.buffer]);
```

> **Note :** Pour plus d'informations quant aux objets transférables, aux performances associées et à la détection de ces fonctionnalités, on pourra lire [Transferable Objects: Lightning Fast](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast).

## _Workers_ embarqués

Il n'existe pas de méthode standard pour embarquer le code d'un worker dans une page web à la façon des éléments {{HTMLElement("script")}}. Toutefois, un élément {{HTMLElement("script")}}, qui ne possède pas d'attribut `src`, qui possède un attribut `type` ne correspondant pas à un type MIME exécutable pourra être considéré comme un bloc de données pouvant être utilisé par JavaScript. Ces blocs de données sont une fonctionnalité HTML5 qui permet de transporter n'importe quelle donnée textuelle. On pourrait donc embarquer un _worker_ de cette façon :

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Exemple MDN - Worker embarqué</title>
<script type="text/js-worker">
  // Ce script ne sera pas analysé par le moteur JS car
  // son type MIME est text/js-worker.
  var maVar = 'Coucou monde !';
  // Reste du code du worker.
</script>
<script type="text/javascript">
  // Ce script sera analysé par le moteur JS car son type MIME
  // est text/javascript.
  function pageLog(sMsg) {
    // On utilise un fragment afin que le navigateur ne rende/peigne
    // qu'une seule fois.
    var oFragm = document.createDocumentFragment();
    oFragm.appendChild(document.createTextNode(sMsg));
    oFragm.appendChild(document.createElement('br'));
    document.querySelector('#logDisplay').appendChild(oFragm);
  }
</script>
<script type="text/js-worker">
  // Ce script ne sera pas analysé par le moteur JS car son type
  // MIME est text/js-worker.
  onmessage = function(oEvent) {
    postMessage(myVar);
  };
  // Reste du code du worker
</script>
<script type="text/javascript">
  // Ce script sera analysé par le moteur JS car son type MIME est
  // text/javascript

  var blob = new Blob(Array.prototype.map.call(document.querySelectorAll('script[type=\'text\/js-worker\']'), function (oScript) { return oScript.textContent; }),{type: 'text/javascript'});

  // On crée une nouvelle propriété document.worker qui contient
  // tous les scripts "text/js-worker".
  document.worker = new Worker(window.URL.createObjectURL(blob));

  document.worker.onmessage = function(oEvent) {
    pageLog('Received: ' + oEvent.data);
  };

  // On démarre le worker.
  window.onload = function() { document.worker.postMessage(''); };
</script>
</head>
<body><div id="logDisplay"></div></body>
</html>
```

Le _worker_ embarqué est désormais injecté dans la propriété `document.worker`.

On notera également qu'on peut convertir une fonction en un `Blob` et générer une URL d'objet vers ce blob. Par exemple :

```js
function fn2workerURL(fn) {
  var blob = new Blob(['('+fn.toString()+')()'], {type: 'application/javascript'})
  return URL.createObjectURL(blob)
}
```

## Autres exemples

Dans cette section nous voyons d'autres exemples d'application.

### Effectuer des calculs en arrière-plan

Les _workers_ sont notamment utiles pour réaliser des opérations de traitement intensives sans bloquer pour autant le _thread_ responsable de l'interface utilisateur. Dans cet exemple, on utilise un *worker* afin de calculer la suite de Fibonacci.

#### JavaScript

Le code JavaScript suivant sera enregistré dans le fichier "fibonacci.js" auquel on fera référence dans le document HTML ci-après.

```js
var results = [];

function resultReceiver(event) {
  results.push(parseInt(event.data));
  if (results.length == 2) {
    postMessage(results[0] + results[1]);
  }
}

function errorReceiver(event) {
  throw event.data;
}

onmessage = function(event) {
  var n = parseInt(event.data);

  if (n == 0 || n == 1) {
    postMessage(n);
    return;
  }

  for (var i = 1; i <= 2; i++) {
    var worker = new Worker('fibonacci.js');
    worker.onmessage = resultReceiver;
    worker.onerror = errorReceiver;
    worker.postMessage(n - i);
  }
 };
```

On a défini la propriété `onmessage` avec une fonction qui recevra les messages envoyés au _worker_ via `postMessage()`. On initie alors la récursion et on déclenche des copies du _worker_ afin de gérer chacune des itérations liées au calcul.

#### HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"  />
    <title>Test threads fibonacci</title>
  </head>
  <body>

  <div id="result"></div>

  <script language="javascript">

    var worker = new Worker('fibonacci.js');

    worker.onmessage = function(event) {
      document.getElementById('result').textContent = event.data;
      dump('Got: ' + event.data + '\n');
    };

    worker.onerror = function(error) {
      console.error('Worker error: ' + error.message + '\n');
      throw error;
    };

    worker.postMessage('5');

  </script>
  </body>
</html>
```

Dans la page web, on crée un élément `div` avec l'identifiant `result`. C'est cet élément qui sera utilisé afin d'afficher le résultat.

Ensuite, on lance le _worker_. Après avoir initié le _worker_, on configure le gestionnaire d'évènement `onmessage` afin d'afficher le résultat via le `div`. On configure également le gestionnaire `onerror` afin d'afficher l'erreur de la console.

Enfin, on envoie un message au _worker_ afin de le démarrer.

[Essayer cet exemple](https://mdn.github.io/fibonacci-worker/).

### Répartir des tâches entre plusieurs _workers_

Les ordinateurs dotés de plusieurs coeurs se généralisent et il peut s'avérer utile de fragmenter une tâche complexe entre différents _workers_ afin de tirer parti des différents coeurs du processeur.

## Autres _workers_

En plus des web _workers_ (dédiés et partagés), il existe d'autres types de _workers_ :

- [Les service _workers_](/en-US/docs/Web/API/ServiceWorker_API) peuvent notamment servir de serveurs mandataires (_proxy_) entre les applications web, le navigateur et le réseau (lorsque celui-ci est disponible). Ces _workers_ sont conçus afin de permettre des utilisations hors-ligne en interceptant les requêtes réseau et en déclenchant les actions nécessaires selon que le réseau est disponible ou non et que les ressources souhaitées sont disponibles sur le serveur. Ces _workers_ permettent de déclencher des notifications _push_ et d'utiliser des API de synchronisation en arrière-plan.
- [Les _worklets_ audio](/fr/docs/Web/API/Web_Audio_API#Audio_processing_in_JavaScript) permettent de traiter des signaux audios en arrière-plan (fonctionnalité expérimentale).

## Fonctions et interfaces disponibles pour les _workers_

La plupart des fonctionnalités JavaScript standard peuvent être utilisées dans les _web workers_, dont :

- {{domxref("Navigator")}}
- {{domxref("XMLHttpRequest")}}
- {{jsxref("Objets_globaux/Array", "Array")}}, {{jsxref("Objets_globaux/Date", "Date")}}, {{jsxref("Objets_globaux/Math", "Math")}} et {{jsxref("Objets_globaux/String", "String")}}
- {{domxref("WindowTimers.setTimeout")}} et {{domxref("WindowTimers.setInterval")}}

En revanche, un _worker_ ne pourra pas directement manipuler la page parente et notamment le DOM et les objets de la page. Il faudra effectuer ce traitement indirectement, via des messages.

> **Note :** Pour avoir une liste exhaustive des fonctionnalités disponibles pour les _workers_, voir  [les fonctions et interfaces disponibles pour les _workers_](/fr/docs/Web/API/Worker/Functions_and_classes_available_to_workers).

## Spécifications

| Spécification                                                            | État                             | Commentaires |
| ------------------------------------------------------------------------ | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', '#workers', 'Web workers')}} | {{Spec2('HTML WHATWG')}} |              |

## Voir aussi

- [L'interface `Worker`](/fr/docs/Web/API/Worker)
- [L'interface `SharedWorker`](/fr/docs/Web/API/SharedWorker)
- [Les fonctions disponibles dans les _workers_](/fr/docs/Web/API/Worker/Functions_and_classes_available_to_workers)
