---
title: Utiliser les promesses
slug: Web/JavaScript/Guide/Using_promises
tags:
  - Guide
  - Intermédiaire
  - JavaScript
  - Promesses
  - Promise
translation_of: Web/JavaScript/Guide/Using_promises
original_slug: Web/JavaScript/Guide/Utiliser_les_promesses
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Le_modèle_objet_JavaScript_en_détails", "Web/JavaScript/Guide/iterateurs_et_generateurs")}}</div>

<p>Une promesse est un objet ({{jsxref("Promise")}}) qui représente la complétion ou l'échec d'une opération asynchrone. La plupart du temps, on « consomme » des promesses et c'est donc ce que nous verrons dans la première partie de ce guide pour ensuite expliquer comment les créer.</p>

<p>En résumé, une promesse est un objet qui est renvoyé et auquel on attache des <em>callbacks</em> plutôt que de passer des <em>callbacks</em> à une fonction. Ainsi, au lieu d'avoir une fonction qui prend deux <em>callbacks</em> en arguments :</p>

<pre class="brush: js">function faireQqcALAncienne(successCallback, failureCallback){
  console.log("C'est fait");
  // réussir une fois sur deux
  if (Math.random() &gt; .5) {
    successCallback("Réussite");
  } else {
    failureCallback("Échec");
  }
}

function successCallback(résultat) {
  console.log("L'opération a réussi avec le message : " + résultat);
}


function failureCallback(erreur) {
  console.error("L'opération a échoué avec le message : " + erreur);
}

faireQqcALAncienne(successCallback, failureCallback);

</pre>

<p>On aura une fonction qui renvoie une promesse et on attachera les callbacks sur cette promesse :</p>

<pre class="brush: js">function faireQqc() {
  return new Promise((successCallback, failureCallback) =&gt; {
    console.log("C'est fait");
    // réussir une fois sur deux
    if (Math.random() &gt; .5) {
      successCallback("Réussite");
    } else {
      failureCallback("Échec");
    }
  })
}

const promise = faireQqc();
promise.then(successCallback, failureCallback);
</pre>

<p>ou encore :</p>

<pre class="brush: js">faireQqc().then(successCallback, failureCallback);
</pre>

<p>Cette dernière forme est ce qu'on appelle <em>un appel de fonction asynchrone</em>. Cette convention possède différents avantages dont le premier est <em>le chaînage</em>.</p>

<h2 id="Garanties">Garanties</h2>

<p>À la différence des imbrications de <em>callbacks</em>, une promesse apporte certaines garanties :</p>

<ul>
 <li>Les <em>callbacks</em> ne seront jamais appelés avant la fin du parcours de la boucle d'évènements JavaScript courante</li>
 <li>Les <em>callbacks</em> ajoutés grâce à <code>then</code> seront appelés, y compris après le succès ou l'échec de l'opération asynchrone</li>
 <li>Plusieurs <em>callbacks</em> peuvent être ajoutés en appelant <code>then</code> plusieurs fois, ils seront alors exécutés l'un après l'autre selon l'ordre dans lequel ils ont été insérés.</li>
</ul>

<h2 id="Chaînage_des_promesses">Chaînage des promesses</h2>

<p>Un besoin fréquent est d'exécuter deux ou plus d'opérations asynchrones les unes à la suite des autres, avec chaque opération qui démarre lorsque la précédente a réussi et en utilisant le résultat de l'étape précédente. Ceci peut être réalisé en créant une chaîne de promesses.</p>

<p>La méthode <code>then()</code> renvoie une <em>nouvelle</em> promesse, différente de la première :</p>

<pre class="brush: js">const promise = faireQqc();
const promise2 = promise.then(successCallback, failureCallback);
</pre>

<p>ou encore :</p>

<pre class="brush: js">const promise2 = faireQqc().then(successCallback, failureCallback);
</pre>

<p>La deuxième promesse (<code>promise2</code>) indique l'état de complétion, pas uniquement pour <code>faireQqc()</code> mais aussi pour le callback qui lui a été passé (<code>successCallback</code> ou <code>failureCallback</code>) qui peut aussi être une fonction asynchrone qui renvoie une promesse. Lorsque c'est le cas, tous les <em>callbacks</em> ajoutés à <code>promise2</code> forment une file derrière la promesse renvoyée par <code>successCallback</code> ou <code>failureCallback</code>.</p>

<p>Autrement dit, chaque promesse représente l'état de complétion d'une étape asynchrone au sein de cette succession d'étapes.</p>

<p>Auparavant, l'enchaînement de plusieurs opérations asynchrones déclenchait une pyramide dantesque de <em>callbacks</em> :</p>

<pre class="brush: js">faireQqc(function(result) {
  faireAutreChose(result, function(newResult) {
    faireUnTroisiemeTruc(newResult, function(finalResult) {
      console.log('Résultat final :' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
</pre>

<p>Grâce à des fonctions plus modernes et aux promesses, on attache les <em>callbacks</em> aux promesses qui sont renvoyées. On peut ainsi construire une <em>chaîne de promesses</em> :</p>

<pre class="brush: js">faireQqc().then(function(result) {
  return faireAutreChose(result);
})
.then(function(newResult) {
  return faireUnTroisiemeTruc(newResult);
})
.then(function(finalResult) {
  console.log('Résultat final : ' + finalResult);
})
.catch(failureCallback);
</pre>

<p>Les arguments passés à <code>then</code> sont optionnels. La forme <code>catch(failureCallback)</code> est un alias plus court pour <code>then(null, failureCallback)</code>. Ces chaînes de promesses sont parfois construites avec <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées">des fonctions fléchées</a> :</p>

<pre class="brush: js">faireQqc()
.then(result =&gt; faireAutreChose(result))
.then(newResult =&gt; faireUnTroisiemeTruc(newResult))
.then(finalResult =&gt; {
  console.log('Résultat final : ' + finalResult);
})
.catch(failureCallback);
</pre>

<div class="warning">
<p><strong>Attention :</strong> cela implique que les fonctions asynchrones renvoient toutes des promesses, sinon les <em>callbacks</em> ne pourront être chaînés et les erreurs ne seront pas interceptées (les fonctions fléchées ont une valeur de retour implicite si les accolades ne sont pas utilisées : <code>() =&gt; x</code> est synonyme de <code>() =&gt; { return x; }</code>).</p>
</div>

<h3 id="Chaînage_après_un_catch">Chaînage après un catch</h3>

<p>Il est possible de chaîner de nouvelles actions <em>après</em> un rejet, c'est-à-dire un <code>catch</code>. C'est utile pour accomplir de nouvelles actions après qu'une action ait échoué dans la chaine. Par exemple :</p>

<pre class="brush: js">new Promise((resolve, reject) =&gt; {
    console.log('Initial');

    resolve();
})
.then(() =&gt; {
    throw new Error('Something failed');

    console.log('Do this');
})
.catch(() =&gt; {
    console.error('Do that');
})
.then(() =&gt; {
    console.log('Do this whatever happened before');
});
</pre>

<p>Cela va produire la sortie suivante :</p>

<pre>Initial
Do that
Do this whatever happened before
</pre>

<p>Notez que le texte <q>Do this</q> n'est pas affiché car l'erreur <q>Something failed</q> a produit un rejet.</p>

<h2 id="Propagation_des_erreurs">Propagation des erreurs</h2>

<p>Dans les exemples précédents, <code>failureCallback</code> était présent trois fois dans la pyramide de <em>callbacks</em> et une seule fois, à la fin, dans la chaîne des promesses :</p>

<pre class="brush: js">faireQqc()
.then(result =&gt; faireAutreChose(result))
.then(newResult =&gt; faireUnTroisiemeTruc(newResult))
.then(finalResult =&gt; console.log('Résultat final : ' + finalResult))
.catch(failureCallback);
</pre>

<p>En fait, dès qu'une exception est levée, la chaîne de promesses utilisera le premier <code>catch()</code> ou <code>onRejected</code> disponible. Ce fonctionnement est assez proche de ce qu'on peut trouver pour du code synchrone :</p>

<pre class="brush: js">try {
  const result = syncFaireQqc();
  const newResult = syncFaireQqcAutre(result);
  const finalResult = syncFaireUnTroisiemeTruc(newResult);
  console.log('Résultat final : ' + finalResult);
} catch(error) {
  failureCallback(error);
}
</pre>

<p>Cette symétrie entre le code asynchrone et le code synchrone atteint son paroxysme avec le couple d'opérateurs <a href="/fr/docs/Web/JavaScript/Reference/Instructions/async_function"><code>async</code>/<code>await</code></a> d'ECMAScript 2017:</p>

<pre class="brush: js">async function toto() {
  try {
    const result = await faireQqc();
    const newResult = await faireQqcAutre(result);
    const finalResult = await faireUnTroisiemeTruc(newResult);
    console.log('Résultat final : ' + finalResult);
  } catch(error) {
    failureCallback(error);
  }
}
</pre>

<p>Ce fonctionnement est construit sur les promesses et <code>faireQqc()</code> est la même fonction que celle utilisée dans les exemples précédents.</p>

<p>Les promesses permettent de résoudre les problèmes de cascades infernales de <em>callbacks</em> notamment en interceptant les différentes erreurs (exceptions et erreurs de programmation). Ceci est essentiel pour obtenir une composition fonctionnelle des opérations asynchrones.</p>

<h2 id="Évènements_liés_à_la_rupture_dune_promesse">Évènements liés à la rupture d'une promesse</h2>

<p>Lorsqu'une promesse est rompue/rejetée, un des deux évènements suivants est envoyé au niveau de la portée globale ({{domxref("window")}} ou {{domxref("Worker")}} si le script est utilisé dans un <em>worker</em>) :</p>

<dl>
 <dt>{{domxref("Window.rejectionhandled_event","rejectionhandled")}}</dt>
 <dd>Cet évènement est envoyé lorsqu'une promesse est rompue et après que le rejet ai été traité par la fonction <code>reject</code> associée à la promesse.</dd>
 <dt>{{domxref("Window.unhandledrejection_event","unhandledrejection")}}</dt>
 <dd>Cet évènement est envoyé lorsque la promesse est rompue et qu'aucune fonction n'a été définie pour gérer le rejet de la promesse.</dd>
</dl>

<p>Dans les deux cas, l'évènement (dont le type est {{domxref("PromiseRejectionEvent")}}) aura deux propriétés :</p>

<dl>
 <dt>{{domxref("PromiseRejectionEvent.promise","promise")}}</dt>
 <dd>La promesse qui a été rompue.</dd>
 <dt>{{domxref("PromiseRejectionEvent.reason","reason")}}</dt>
 <dd>La raison pour laquelle la promesse a été rompue.</dd>
</dl>

<p>Gérer ces évènements permet d'avoir une ultime méthode pour gérer le rejet des promesses. Cela peut notamment s'avérer utile pour le débogage. Ces évènements sont déclenchés au niveau global et permettent ainsi d'intercepter les erreurs pour chaque contexte (fenêtre ou <em>worker</em>)</p>

<pre class="brush: js">window.addEventListener("unhandledrejection", event =&gt; {
  // Examiner la ou les promesse(s) qui posent problème en debug
  // Nettoyer ce qui doit l'être quand ça se produit en réel

}, false);</pre>

<h2 id="Envelopper_les_callbacks_des_API">Envelopper les <em>callbacks</em> des API</h2>

<p>Il est possible de créer un objet  {{jsxref("Promise")}} grâce à son constructeur. Et même si, idéalement, cela ne devrait pas être nécessaire, certaines API fonctionnent toujours avec des <em>callbacks</em> passés en arguments. C'est notamment le cas de la méthode  {{domxref("WindowTimers.setTimeout", "setTimeout()")}} :</p>

<pre class="brush: js">setTimeout(() =&gt; saySomething("10 seconds passed"), 10 * 1000);
</pre>

<p>Si on mélange des <em>callbacks</em> et des promesses, cela sera problématique. Si  <code>saySomething</code> échoue ou contient des erreurs, rien n'interceptera l'erreur.</p>

<p>Pour ces fonctions, la meilleure pratique consiste à les <em>envelopper</em> dans des promesses au plus bas niveau possible et de ne plus les appeler directement :</p>

<pre class="brush: js">const wait = ms =&gt; new Promise(resolve =&gt; setTimeout(resolve, ms));

wait(10 * 1000).then(() =&gt; saySomething("10 seconds")).catch(failureCallback);
</pre>

<p>Le constructeur <code>Promise</code> prend en argument une fonction et nous permet de la convertir manuellement en une promesse. Ici, vu que <code>setTimeout</code> n'échoue pas vraiment, on laisse de côté la gestion de l'échec.</p>

<h2 id="Composition">Composition</h2>

<p>{{jsxref("Promise.resolve()")}} et {{jsxref("Promise.reject()")}} sont des méthodes qui permettent de créer des promesses déjà tenues ou rompues.</p>

<p>{{jsxref("Promise.all()")}} et {{jsxref("Promise.race()")}} sont deux outils de composition qui permettent de mener des opérations asynchrones en parallèle.</p>

<p>On peut lancer des opérations en parallèles et attendre qu'elles soient toutes finies de cette façon :</p>

<pre class="brush: js">Promise.all([func1(), func2(), func3()])
.then(([resultat1, resultat2, resultat3]) =&gt; { /* où on utilise resultat1/2/3 */ });</pre>

<p>Il est possible de construire une composition séquentielle de la façon suivante :</p>

<pre class="brush: js">[func1, func2].reduce((p, f) =&gt; p.then(f), Promise.resolve());
</pre>

<p>Dans ce fragment de code, on réduit un tableau de fonctions asynchrones en une chaîne de promesse équivalente à : <code>Promise.resolve().then(func1).then(func2);</code></p>

<p>On peut également accomplir cela avec une fonction de composition réutilisable  :</p>

<pre class="brush: js">const applyAsync = (acc, val) =&gt; acc.then(val);
const composeAsync = (...funcs) =&gt; x =&gt; funcs.reduce(applyAsync, Promise.resolve(x));</pre>

<p>La fonction <code>composeAsync</code> accepte autant de fonctions que nécessaire comme arguments et renvoie une nouvelle fonction qui prend une valeur initiale pour la passer à travers ces étapes de compositions. Cette façon de faire garantit que les fonctions, qu'elles soient synchrones ou asynchrones, sont exécutées dans le bon ordre :</p>

<pre class="brush: js">const transformData = composeAsync(func1, asyncFunc1, asyncFunc2, func2);
transformData(data);</pre>

<p>Avec ECMAScript 2017, on peut obtenir une composition séquentielle plus simplement avec les opérateurs <code>await</code>/<code>async</code> :</p>

<pre class="brush: js">let result;
for(const f of [func1, func2, func3]) {
  result = await f(result);
} </pre>

<h2 id="Gestion_du_temps">Gestion du temps</h2>

<p>Pour éviter de mauvaises surprises, les fonctions passées à <code>then()</code> ne seront jamais appelées de façon synchrone, y compris lorsqu'il s'agit d'une promesse déjà résolue :</p>

<pre class="brush: js">Promise.resolve().then(() =&gt; console.log(2));
console.log(1); // 1, 2
</pre>

<p>En fait, la fonction passée à <code>then</code><code>()</code> est placée dans une file de micro-tâches qui sont exécutées lorsque cette file est vidée à la fin de la boucle d'évènements JavaScript :</p>

<pre class="brush: js">var wait = ms =&gt; new Promise(resolve =&gt; setTimeout(resolve, ms));

wait().then(() =&gt; console.log(4));
Promise.resolve().then(() =&gt; console.log(2)).then(() =&gt; console.log(3));
console.log(1); // 1, 2, 3, 4
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Promise.then()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Instructions/async_function"><code>async</code>/<code>await</code></a></li>
 <li><a href="http://promisesaplus.com/">La spécification Promises/A+</a></li>
 <li><a href="http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html">Nolan Lawson : We have a problem with promises — Common mistakes with promises (article en anglais)</a></li>
</ul>

<p>{{PreviousNext("Web/JavaScript/Guide/Le_modèle_objet_JavaScript_en_détails", "Web/JavaScript/Guide/iterateurs_et_generateurs")}}</p>
