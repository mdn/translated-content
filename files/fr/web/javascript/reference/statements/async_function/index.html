---
title: async function
slug: Web/JavaScript/Reference/Statements/async_function
tags:
  - Experimental
  - Function
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/async_function
original_slug: Web/JavaScript/Reference/Instructions/async_function
---
<div>{{jsSidebar("Statements")}}</div>

<p>La déclaration <code><strong>async function</strong></code> définit une fonction asynchrone qui renvoie un objet {{jsxref("Objets_globaux/AsyncFunction","AsyncFunction")}}. Une fonction asynchrone est une fonction qui s'exécute de façon asynchrone grâce à la boucle d'évènement en utilisant une promesse ({{jsxref("Promise")}}) comme valeur de retour.</p>

<div class="noinclude">
<p>On peut également définir des fonctions asynchrones grâce au constructeur {{jsxref("AsyncFunction")}} et via une {{jsxref("Opérateurs/async_function", "expression de fonction asynchrone","",1)}}.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/statement-async.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">async function <em>name</em>([<em>param</em>[, <em>param</em>[, ... <em>param</em>]]]) {
   <em>instructions</em>
}
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>name</code></dt>
 <dd>Le nom de la fonction.</dd>
 <dt><code>param</code></dt>
 <dd>Le nom d'un argument à passer à la fonction.</dd>
 <dt><code>instructions</code></dt>
 <dd>Les instructions qui composent le corps de la fonction.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une promesse ({{jsxref("Promise")}}) qui sera résolue avec la valeur renvoyée par la fonction asynchrone ou qui sera rompue s'il y a une exception non interceptée émise depuis la fonction asynchrone.</p>

<h2 id="Description">Description</h2>

<p>Une fonction <code>async</code> peut contenir une expression {{jsxref("Opérateurs/await", "await")}} qui interrompt l'exécution de la fonction asynchrone et attend la résolution de la promesse passée <code>Promise</code>. La fonction asynchrone reprend ensuite puis renvoie la valeur de résolution.<br>
 <br>
 Le mot-clé <code>await</code> est uniquement valide au sein des fonctions asynchrones. Si ce mot-clé est utilisé en dehors du corps d'une fonction asynchrone, cela provoquera une exception {{jsxref("SyntaxError")}}.</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Lorsqu'une fonction aysnchrone est mise en pause, la fonction appelante continue son exécution (car elle a reçu la promesse implicite renvoyée par la fonction <code>async</code>).</p>
</div>

<div class="note">
<p><strong>Note :</strong> Le but des fonctions <code>async</code>/<code>await</code> est de simplifier l'utilisation synchrone des promesses et d'opérer sur des groupes de promesses. De la même façon que les promesses sont semblables à des <em>callbacks</em> structurés, <code>async</code>/<code>await</code> est semblable à la combinaison des générateurs et des promesses.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<pre class="brush: js">var resolveAfter2Seconds = function() {
  console.log("Initialisation de la promesse lente");
  return new Promise(resolve =&gt; {
    setTimeout(function() {
      resolve("lente");
      console.log("La promesse lente est terminée");
    }, 2000);
  });
};

var resolveAfter1Second = function() {
  console.log("Initialisation de la promesse rapide");
  return new Promise(resolve =&gt; {
    setTimeout(function() {
      resolve("rapide");
      console.log("La promesse rapide est terminée");
    }, 1000);
  });
};

var sequentialStart = async function() {
  console.log('==Début séquentiel==');

  // 1. L'exécution atteint ce point quasi-instantanément
  const lente = await resolveAfter2Seconds();
  console.log(lente); // 2. cela s'exécute 2s après 1.

  const rapide = await resolveAfter1Second();
  console.log(rapide); // 3. cela s'exécute 3s après 1.
}

var concurrentStart = async function() {
  console.log('==Début concurrentiel avec await==');
  const lente = resolveAfter2Seconds(); // le minuteur démarre immédiatement
  const rapide = resolveAfter1Second();  // le minuteur démarre immédiatement

  // 1. L'exécution atteint ce point quasi-instantanément
  console.log(await lente); // 2. s'exécute 2s après 1.
  console.log(await rapide); // 3. s'exécute 2s après 1., immédiatement après 2.,
                             // car "rapide" est déjà résolue
}

var concurrentPromise = function() {
  console.log('==Début concurrentiel avec Promise.all==');
  return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then((messages) =&gt; {
    console.log(messages[0]); // lente
    console.log(messages[1]); // rapide
  });
}

var parallel = async function() {
  console.log('==Exécution parallèle avec await Promise.all==');

  // Démarre 2 tâches en parallèle et on attend que les deux soient finies
  await Promise.all([
      (async()=&gt;console.log(await resolveAfter2Seconds()))(),
      (async()=&gt;console.log(await resolveAfter1Second()))()
  ]);
}

// Cette fonction ne gère pas les erreurs
// voir les avertissement ci-après !
var parallelPromise = function() {
  console.log('==Exécution parallèle avec Promise.then==');
  resolveAfter2Seconds().then((message)=&gt;console.log(message));
  resolveAfter1Second().then((message)=&gt;console.log(message));
}

sequentialStart(); // après 2 secondes, "lente" est affichée, après une
                   // autre seconde, c'est "rapide" qui est affichée

// on attend que l'étape précédente soit terminée
setTimeout(concurrentStart, 4000); // 2s avant d'afficher "lente" puis "rapide"

// on attend à nouveau
setTimeout(concurrentPromise, 7000); // identique à concurrentStart

// on attend à nouveau
setTimeout(parallel, 10000); // réellement parallele : après 1 seconde,
                             // affiche "rapide" et après une autre seconde
                             // affiche "lente"

// on attend à nouveau
setTimeout(parallelPromise, 13000); // identique à parallel
</pre>

<h4 id="await_et_lexécution_parallèle"><code>await</code> et l'exécution parallèle</h4>

<p>Dans <code>sequentialStart</code>, l'exécution est arrêtée pendant deux secondes avant le premier <code>await</code> puis encore une autre seconde avant le deuxième <code>await</code>. Le deuxième minuteur n'est pas créé tant que le premier n'est pas écoulé. Le code s'exécute donc au moins en 3 secondes.</p>

<p>Avec <code>concurrentStart</code>, les deux minuteurs sont créés puis attendus derrière un <code>await</code> Les minuteurs sont exécutés de façon concurrente. L'ensemble du code se termine donc en au moins 2 secondes plutôt qu'en 3 secondes.<br>
 Toutefois, les appels utilisant  <code>await</code> sont exécutés séquentiellement et la deuxième instruction avec <code>await</code> attendra que la première ait été  traitée. Le minuteur le plus rapide est donc créé juste après le premier.</p>

<p>Si on souhaite avoir deux tâches qui s'exécutent réellement en parallèle, on pourra utiliser  <code>await Promise.all([job1(), job2()])</code> comme illustré ci-avant avec <code>parallel</code>.</p>

<h4 id="asyncawait_Promise.prototype.then_et_la_gestion_des_erreurs"><code>async</code>/<code>await</code>, <code>Promise.prototype.then()</code> et la gestion des erreurs</h4>

<p>La plupart des fonctions asynchrones peuvent être écrites avec des promesses. Toutefois, les fonctions asynchrones qui utilisent <code>async</code> se prêtent mieux à la gestion des erreurs.</p>

<p><code>concurrentStart</code> et <code>concurrentPromise</code> sont fonctionnellement équivalentes.<br>
 Avec <code>concurrentStart</code>, si l'un des deux appels échoue, l'exception sera immédiatement interceptée et l'exécution de la fonction asynchrone sera interrompue. L'erreur sera propagée à la fonction appelante via la valeur de retour qui est une promesse implicite.<br>
 Pour obtenir les mêmes sécurités avec les promesses, il faut s'assurer que la fonction renvoie une promesse qui gère ce cas d'échec. Pour <code>concurrentPromise</code> cela signifie qu'il faut renvoyer la promesse de <code>Promise.all([]).then()</code>.</p>

<p>Bien entendu, il est toutefois possible d'avoir des fonctions asynchrones (avec <code>async</code>) qui gobent des erreurs involontairement. Si on considère la fonction <code>parallel</code> ci-avant, s'il n'y avait eu aucun <code>await</code> ou <code>return</code> pour le résultat de <code>Promise.all([])</code>, aucune erreur n'aurait été propagée.<br>
 Bien que l'exemple <code>parallelPromise</code> paraisse simple, il ne gère aucune erreur du tout. Il aurait fallu utiliser un <code>return </code><code>Promise.all([])</code> analogue.</p>

<h3 id="Réécrire_une_chaîne_de_promesses_avec_une_fonction_asynchrone">Réécrire une chaîne de promesses avec une fonction asynchrone</h3>

<p>Lorsqu'on utilise une API qui renvoie des promesses ({{jsxref("Promise")}}), on construit une chaîne de promesses et on divise la fonction en de nombreuses branches :</p>

<pre class="brush: js">function getProcessedData(url) {
  return downloadData(url) // renvoie une promesse
    .catch(e =&gt; {
      return downloadFallbackData(url);  // renvoie une promesse
    })
    .then(v =&gt; {
      return processDataInWorker(v); // renvoie une promesse
    });
}
</pre>

<p>Cela peut être réécrit avec une seule fonction asynchrone, de la façon suivante :</p>

<pre class="brush: js">async function getProcessedData(url) {
  let v;
  try {
    v = await downloadData(url);
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  return processDataInWorker(v);
}
</pre>

<p>On voit dans l'exemple précédent qu'il n'y a pas de <code>await</code> pour l'instruction <code>return</code> car la valeur de retour d'une fonction asynchrone est implicitement enveloppée dans un appel à {{jsxref("Promise.resolve")}}.</p>

<h3 id="Différences_entre_return_et_return_await">Différences entre <code>return</code> et <code>return await</code></h3>

<p>La conversion automatique des valeurs en promesses avec {{jsxref("Promise.resolve")}} ne signifie pas que <code>return await valeurPromesse</code> sera équivalent à <code>return valeurPromesse</code>.</p>

<p>Si on reprend l'exemple précédent et qu'on le réécrit avec <code>return await</code> et qu'on intercepte une éventuelle erreur de la promesse :</p>

<pre class="brush: js">async function getProcessedData(url) {
  let v;
  try {
     v = await downloadData(url);
  } catch(e) {
    v = await downloadFallbackData(url);
  }
  try {
    return await processDataInWorker(v); // et non plus simplement return
  } catch(e) {
    return null;
  }
}</pre>

<p>Si on avait simplement écrit <code>return processDataInWorker(v);</code>, la promesse renvoyée par la fonction aurait déclenché une exception plutôt que d'être résolue avec la valeur <code>null</code>.</p>

<p>Lorsqu'on utilise <code>return toto;</code>, la valeur <code>toto</code> sera immédiatement renvoyée (sans lever d'exception, quel que soit le cas), tandis que <code>return await toto;</code> attendra la résolution de <code>toto</code> ou son échec et lèvera une exception si besoin <strong>avant de parvenir à renvoyer une valeur</strong>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-async-function-definitions', 'async function')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES8', '#sec-async-function-definitions', 'async function')}}</td>
   <td>{{Spec2('ES8')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.async_function")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Operators/async_function", "async function expression")}}</li>
 <li>{{jsxref("AsyncFunction")}} object</li>
 <li>{{jsxref("Operators/await", "await")}}</li>
 <li><a href="http://innolitics.com/10x/javascript-decorators-for-promise-returning-functions/">Créer des décorateurs asynchrones en JavaScript (billet en anglais sur innolitics.com)</a></li>
</ul>
