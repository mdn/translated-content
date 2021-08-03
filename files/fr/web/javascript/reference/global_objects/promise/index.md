---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
tags:
  - ECMAScript 2015
  - JavaScript
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise
---
<div>{{JSRef}}</div>

<p>L'objet <code><strong>Promise</strong></code> (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.</p>

<div class="note">
<p><strong>Note :</strong> Cet article décrit le constructeur <code>Promise</code>. Pour en savoir plus sur les promesses en général, nous vous conseillons de lire l'article <a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses">Utiliser les promesses</a>. Le constructeur <code>Promise</code> est principalement utilisé pour envelopper des fonctions qui ne prennent pas en charge les promesses.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/promise-constructor.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new Promise( /* exécuteur */ function(resolve, reject) { ... } );</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>exécuteur</code></dt>
 <dd>Une fonction à laquelle on passera deux arguments : <code>resolve</code> et <code>reject</code>. Cette fonction est exécutée immédiatement par l'implémentation de <strong><code>Promise</code></strong> qui fournit les fonctions <code>resolve</code> et <code>reject</code> (elle est exécutée avant que le constructeur <strong><code>Promise</code></strong> ait renvoyé l'objet créé). Les fonctions <code>resolve</code> et <code>reject</code>, lorsqu'elles sont appelées, permettent respectivement de tenir ou de rompre la promesse. On attend de l'exécuteur qu'il démarre un travail asynchrone puis, une fois le travail terminé, appelle la fonction <code>resolve</code> (si tout s'est bien passé) ou la fonction <code>reject</code> (lorsqu'il y a eu un problème) pour définir l'état final de la promesse.<br>
 Si une erreur est générée par l'exécuteur, la promesse est rompue et la valeur de retour de l'exécuteur est ignorée.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>L'interface <strong><code>Promise</code></strong> représente un intermédiaire (<em>proxy</em>) vers une valeur qui n'est pas nécessairement connue au moment de sa création. Cela permet d'associer des gestionnaires au succès éventuel d'une action asynchrone et à la raison d'une erreur. Ainsi, des méthodes asynchrones renvoient des valeurs comme les méthodes synchrones, la seule différence est que la valeur retournée par la méthode asynchrone est une promesse (d'avoir une valeur plus tard).</p>

<p>Une <code>Promise</code> est dans un de ces états :</p>

<ul>
 <li><em>pending (en attente)</em> : état initial, la promesse n'est ni remplie, ni rompue ;</li>
 <li><em>fulfilled (tenue</em>) : l'opération a réussi ;</li>
 <li><em>rejected (rompue)</em> : l'opération a échoué ;</li>
 <li><em>settled (acquittée)</em> : la promesse est tenue ou rompue mais elle n'est plus en attente.</li>
</ul>

<p>Une promesse en attente peut être <em>tenue</em> avec une valeur ou <em>rompue</em> avec une raison (erreur). Quand on arrive à l'une des deux situations, les gestionnaires associés lors de l'appel de la méthode <code>then</code> sont alors appelés. (Si la promesse a déjà été tenue ou rompue lorsque le gestionnaire est attaché à la promesse, le gestionnaire est appelé. Cela permet qu'il n'y ait pas de situation de compétition entre une opération asynchrone en cours et les gestionnaires ajoutés).</p>

<p>Les méthodes {{jsxref("Promise.then","Promise.prototype.then()")}} et {{jsxref("Promise.catch","Promise.prototype.catch()")}} renvoient des promesses et peuvent ainsi être chaînées. C'est ce qu'on appelle une <em>composition</em>.</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/15911/promises.png"></p>

<div class="note">
<p><strong>Note :</strong> Une promesse est dans l'état <em>settled </em>(acquittée) qu'elle soit tenue ou rompue mais plus en attente. Le terme <em>resolved</em> (résolue) est aussi utilisé concernant les promesses — cela signifie que la promesse est acquittée ou bien enfermée dans une chaine de promesse. Le billet de Domenic Denicola, <a href="https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md"><em>States and fates</em> (en anglais)</a>, contient de plus amples détails sur la terminologie utilisée.</p>
</div>

<div class="warning">
<p><strong>Attention :</strong> D'autres langages utilisent des mécanismes d'évaluation à la volée (<em>lazy evaluation</em>) et de déport des calculs (<em>deferring computations</em>). Ces mécanismes sont également intitulés promesses (<em>promises</em>). En JavaScript, les promesses correspondent à des processus déjà lancés et qui peuvent être chaînés avec des fonctions de retour. Si vous cherchez à retarder l'évaluation, vous pouvez utiliser les fonctions fléchées sans arguments (ex. <code>f = () =&gt; expression</code>) afin de créer une expression à évaluer plus tard et utiliser <code>f()</code> pour l'évaluer au moment voulu.</p>
</div>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>Promise.length</code></dt>
 <dd>Une propriété de longueur qui vaut 1 (le nombre d'arguments pour le constructeur).</dd>
 <dt>{{jsxref("Promise.prototype")}}</dt>
 <dd>Cette propriété représente le prototype du constructeur <code>Promise</code>.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("Promise.all", "Promise.all(iterable)")}}</dt>
 <dd>Renvoie une promesse tenue lorsque toutes les promesses de l'argument itérable sont tenues ou une promesse rompue dès qu'une promesse de l'argument itérable est rompue. Si la promesse est tenue, elle est résolue avec un tableau contenant les valeurs de résolution des différentes promesses contenues dans l'itérable (dans le même ordre que celui-ci). Si la promesse est rompue, elle contient la raison de la rupture de la part de la promesse en cause, contenue dans l'itérable. Cette méthode est utile pour agréger les résultats de plusieurs promesses tous ensemble.</dd>
 <dt>{{jsxref("Promise.allSettled", "Promise.allSettled(iterable)")}}</dt>
 <dd>Attend que l'ensemble des promesses aient été acquittées (tenues ou rompues) et renvoie une promesse qui est résolue après que chaque promesse ait été tenue ou rompue. La valeur de résolution de la promesse renvoyée est un tableau dont chaque élément est le résultat des promesses initiales.</dd>
 <dt>{{jsxref("Promise.race", "Promise.race(iterable)")}}</dt>
 <dd>Renvoie une promesse qui est tenue ou rompue dès que l'une des promesses de l'itérable est tenue ou rompue avec la valeur ou la raison correspondante.</dd>
 <dt>{{jsxref("Promise.reject", "Promise.reject(raison)")}}</dt>
 <dd>Renvoie un objet <code>Promise</code> qui est rompue avec la raison donnée.</dd>
 <dt>{{jsxref("Promise.resolve", "Promise.resolve(valeur)")}}</dt>
 <dd>Renvoie un objet <code>Promise</code> qui est tenue (résolue) avec la valeur donnée. Si la valeur possède une méthode <code>then</code>, la promesse renvoyée « suivra » cette méthode pour arriver dans son état, sinon la promesse renvoyée sera tenue avec la valeur fournie. Généralement, quand on veut savoir si une valeur est une promesse, on utilisera {{jsxref("Promise.resolve","Promise.resolve(valeur)")}} et on travaillera avec la valeur de retour en tant que promesse.</dd>
</dl>

<h2 id="Prototype_pour_Promise">Prototype pour <code>Promise</code></h2>

<h3 id="Propriétés_2">Propriétés</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/prototype','Propriétés')}}</p>

<h3 id="Méthodes_2">Méthodes</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/prototype','Méthodes')}}</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Créer_une_promesse">Créer une promesse</h3>

<p>Pour créer une promesse, on utilise l'opérateur <code>new</code> et le constructeur. Celui-ci prend en argument une fonction qui prend deux fonctions en paramètres. La première est appelée quand la tâche asynchrone est correctement terminée et la seconde est appelée quand la tâche échoue :</p>

<pre class="brush: js">const maPremierePromesse = new Promise((resolve, reject) =&gt; {
  // réaliser une tâche asynchrone et appeler :

  // resolve(uneValeur); // si la promesse est tenue
  // ou
  // reject("raison d'echec"); // si elle est rompue
});
</pre>

<p>On peut ainsi obtenir des fonctions asynchrones en renvoyant une promesse :</p>

<pre class="brush: js">function maFonctionAsynchrone(url) {
  return new Promise((resolve, reject) =&gt; {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () =&gt; resolve(xhr.responseText);
    xhr.onerror = () =&gt; reject(xhr.statusText);
    xhr.send();
  });
}</pre>

<h3 id="Exemple_interactif">Exemple interactif</h3>

<pre class="brush: html">&lt;button id="btn" type="button"&gt;Créer un objet Promise !&lt;/button&gt;
&lt;div id="log"&gt;&lt;/div&gt;
</pre>

<p>Dans le court exemple qui suit, on illustre le mécanisme d'une <code>Promise</code>. La méthode <code>testPromise()</code> est appelée chaque fois qu'on clique sur l'élément {{HTMLElement("button")}}. Cette méthode crée une promesse qui sera tenue grâce à la fonction {{domxref("window.setTimeout()")}}, et avec la valeur comptePromesse (nombre commançant à 1) après <code>1s</code> à <code>3s</code> (aléatoire). Le constructeur Promise() est utilisé pour créer la promesse.</p>

<p>Le fait que la promesse soit tenue est simplement enregistré via un <em>callback</em> sur <code>p1.then()</code>. Quelques indicateurs illustrent la manière dont la partie synchrone est découplée de la partie asynchrone.</p>

<pre class="brush: js">'use strict';
var comptePromesse = 0;

function testPromise() {
  var thisComptePromesse = ++comptePromesse;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisComptePromesse +
      ') Started (&lt;small&gt;Début du code synchrone&lt;/small&gt;)&lt;br/&gt;');

  // on crée une nouvelle promesse :
  var p1 = new Promise(
    // La fonction de résolution est appelée avec la capacité de
    // tenir ou de rompre la promesse
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisComptePromesse +
          ') Promise started (&lt;small&gt;Début du code asynchrone&lt;/small&gt;)&lt;br/&gt;');

      // Voici un exemple simple pour créer un code asynchrone
      window.setTimeout(
        function() {
          // On tient la promesse !
          resolve(thisComptePromesse);
        }, Math.random() * 2000 + 1000);
    });

  // On définit ce qui se passe quand la promesse est tenue
  // et ce qu'on appelle (uniquement) dans ce cas
  // La méthode catch() définit le traitement à effectuer
  // quand la promesse est rompue.
  p1.then(
    // On affiche un message avec la valeur
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Promise fulfilled (&lt;small&gt;Fin du code asynchrone&lt;/small&gt;)&lt;br/&gt;');
    }).catch(
      // Promesse rejetée
      function() {
        console.log("promesse rompue");
      });

  log.insertAdjacentHTML('beforeend', thisComptePromesse +
      ') Promise made (&lt;small&gt;Fin du code synchrone&lt;/small&gt;)&lt;br/&gt;');
}
</pre>

<pre class="brush: js">if ("Promise" in window) {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
 } else {
  log = document.getElementById('log');
  log.innerHTML = "L'exemple live n'est pas disponible pour votre navigateur car celui-ci ne supporte pas l'interface &lt;code&gt;Promise&lt;code&gt;.";
}</pre>

<p>L'exemple s'exécute lorsqu'on clique sur le bouton. Pour tester cet exemple, il est nécessaire d'utiliser un navigateur qui supporte les objets <code>Promise</code>. En cliquant plusieurs fois sur le bouton en peu de temps, on verra qu'il y a plusieurs promesses tenues les une après les autres.</p>

<p>{{EmbedLiveSample('Exemple_interactif', '500', '200')}}</p>

<h2 id="Charger_une_image_en_XHR">Charger une image en XHR</h2>

<p>Un autre exemple simple utilisant <code>Promise</code> et {{domxref("XMLHttpRequest")}} afin de charger une image est disponible sur le dépôt GitHub MDN <a href="https://github.com/mdn/js-examples/tree/master/promises-test">js-examples</a>. Vous pouvez également <a href="https://mdn.github.io/js-examples/promises-test/">voir le résultat</a>. Chaque étape est commentée afin de vous permettre de suivre l'état de la promesse et l'architecture utilisée avec XHR.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-promise-objects', 'Promise')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise-objects', 'Promise')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Promise")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses">Manipuler les promesses</a></li>
 <li><a href="https://promisesaplus.com/">Promises/A+ specification</a></li>
 <li><a href="https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53">Venkatraman.R - JS Promise (Part 1, Basics) </a>(en anglais)</li>
 <li><a href="https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski">Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js) </a>(en anglais)</li>
 <li><a href="https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction">Venkatraman.R - Tools for Promises Unit Testing </a>(en anglais)</li>
 <li><a href="https://www.html5rocks.com/en/tutorials/es6/promises/">Jake Archibald : <em>JavaScript Promises : There and Back Again</em></a> (tutoriel en anglais)</li>
 <li><a href="https://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript">Domenic Denicola : <em>Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript</em></a> (présentation en anglais sur l'asynchronisme en JavaScript)</li>
 <li><a href="https://www.mattgreer.org/articles/promises-in-wicked-detail/">Matt Greer : <em>JavaScript Promises ... In Wicked Detail</em></a> (en anglais)</li>
 <li><a href="https://www.promisejs.org/">Forbes Lindesay : promisejs.org</a> (en anglais)</li>
 <li><a href="https://github.com/jakearchibald/es6-promise/">Prothèse pour les promesses par Jake Archibald</a></li>
 <li><a href="https://www.udacity.com/course/javascript-promises--ud898">Les promesses JavaScript sur Udacity</a> (en anglais)</li>
</ul>
