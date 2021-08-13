---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
tags:
  - ECMAScript6
  - JavaScript
  - Méthode
  - Promise
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/then
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/then
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>then()</strong></code> renvoie un objet {{jsxref("Promise")}}. Elle peut prendre jusqu'à deux arguments qui sont deux fonctions <em>callback</em> à utiliser en cas de complétion ou d'échec de la <code>Promise</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-then.html")}}</div>



<div class="note">
<p><strong>Note :</strong> Si aucun des deux arguments n'est utilisé ou que les objets fournis ne sont pas des fonctions, une nouvelle promesse est créée sans autre gestionnaire supplémentaire. Si le premier argument est absent ou qu'un objet qui n'est pas une fonction est passé, la nouvelle promesse utilisera la fonction de réussite de la promesse originelle. De même, si le deuxième argument n'est pas passé ou que ce n'est pas une fonction, la nouvelle promesse créée utilisera la fonction de rejet de la promesse appelante.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>p.then(siTenue);
p.then(siTenue, siRejetée)</var>;

p.then((valeur) =&gt; {
    // Promesse tenue
  }, (raison) =&gt; {
    // Rejet de la promesse
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<ul>
</ul>

<dl>
 <dt><code>siTenue</code></dt>
 <dd>Une {{jsxref("Function","fonction","",1)}} appelée lorsque la <code>Promise</code> est tenue. Cette fonction a un seul argument, la <code>valeur</code> qui a permis de résoudre la promesse. Si <code>siTenue</code> n'est pas une fonction, elle est implicitement remplacée par une fonction « identité » qui renvoie l'argument tel quel.</dd>
 <dt><code>siRejetée</code> {{optional_inline}}</dt>
 <dd>Une {{jsxref("Function","fonction","",1)}} appelée lorsque la <code>Promise</code> est rejetée. Cette fonction a un seul argument, la <code>raison</code> pour laquelle la promesse a été rejetée. Si <code>siRejetée</code> n'est pas une fonction, elle est implicitement remplacée par une fonction qui lève une erreur avec la <code>raison</code> passée en argument.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>La méthode <code>then()</code> renvoie une promesse ({{jsxref("Promise")}}) en attente de résolution et dont la valeur est déterminée selon les deux fonctions passées en arguments et qui seront appelées de façon asynchrone :</p>

<ul>
 <li>Si <code>siRejetée</code> ou <code>siTenue</code> lève une exception ou renvoie une promesse rompue, la promesse renvoyée par <code>then()</code> est rompue et la valeur fournie est l'exception ou l'explication de la promesse rompue.</li>
 <li>Si <code>siRejetée</code> ou <code>siTenue</code> renvoie une promesse tenue ou n'importe quelle autre valeur, la promesse renvoyée est tenue et la valeur de résolution est la même que celle de la promesse tenue.</li>
 <li>Si <code>siRejetée</code> ou <code>siTenue</code> renvoie une promesse en attente de résolution, la promesse renvoyée par <code>then()</code> sera résolue de la même façon que la promesse renvoyée par le gestionnaire. En fait, dans ce cas, la promesse renvoyée par <code>then()</code> est la même que la promesse renvoyée par le gestionnaire (<code>siTenue</code> ou <code>siRejetée</code>).</li>
</ul>

<h2 id="Description">Description</h2>

<p>Comme les méthodes <code>then()</code> et {{jsxref("Promise.prototype.catch()")}} renvoient des promesses, on peut enchaîner ces opérations (c'est ce qu'on appelle la <em>composition</em> de promesses, voir l'exemple ci-après).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_de_la_méthode_then()">Utilisation de la méthode <code>then()</code></h3>

<pre class="brush: js">var p1 = new Promise(function(resolve, reject) {
  resolve("Succès !");
  // ou
  // reject("Erreur !");
});

p1.then((valeur) =&gt; {
  console.log(valeur); // Succès !
  }, (raison) =&gt; {
  console.log(raison); // Erreur !
});
</pre>

<h3 id="Composition_-_Chaînage">Composition - Chaînage</h3>

<p>La méthode <code>then()</code> renvoie un objet <code>Promise</code>, ce qui permet d'enchaîner les opération. On peut passer une fonction lambda à then puis utiliser la promesse obtenue pour la passer à la méthode suivante. Dans l'exemple ci-après, on simule un code asynchrone avec la fonction <code>setTimeout</code>.</p>

<pre class="brush: js">Promise.resolve("toto")
  // 1. Première étape, on reçoit "toto" et on le concatène avec
  //    "truc", ce qui résoud la première étape puis on passe au
  //    deuxième then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'truc';
        resolve(string);
      }, 1);
    });
  })
  // 2. Deuxième étape, on reçoit "tototruc" et on enregistre une
  //    fonction de rappel pour manipuler cette chaîne puis l'imprimer
  //    dans la console. Avant cela, on passe la chaîne intacte au
  //    prochain then
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string);
    }, 1)
    return string;
  })
  // 3. On affiche un message sur le code, celui-ci sera affiché
  //    avant que la chaîne soit traitée dans le bloc précédent
  //    qui agit comme un bloc asynchrone.
  .then(function(string) {
    console.log("Et voilà la dernière, qui risque d'arriver avant la 2e");

    // Ici, la chaîne n'aura pas le morceau 'baz' car la fonction
    // setTimeout retarde l'exécution du code.
    console.log(string);
});
</pre>

<p>Lorsqu'une valeur est simplement renvoyée depuis une fonction lambda <code>then</code>, celle-ci renverra <code>Promise.resolve(&lt;la valeur renvoyée par le gestionnaire appelé&gt;)</code>.</p>

<pre class="brush: js">var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(valeur) {
  console.log(valeur); // 1
  return valeur + 1;
  }).then(function(valeur) {
  console.log(valeur + "- cette utilisation synchrone est un peu inutile");
  // 2- cette utilisation synchrone est un peu inutile
});

p2.then(function(valeur) {
  console.log(valeur); // 1
});
</pre>

<p>Appeler <code>then()</code> renverra une promesse rompue si la fonction lève une exception ou si elle renvoie une promesse rompue.</p>

<pre class="brush: js">Promise.resolve()
  .then( () =&gt; {
    // Ici .then() lève une exception
    throw 'Oh zut :( !';
  })
  .then( () =&gt; {
    console.log( "Ceci n'est pas appelé." );
  }, raison =&gt; {
    console.error( 'la fonction siRompue est appelée : ' + raison );
});</pre>

<p>Dans tous les autres cas, un promesse de résolution est renvoyée. Dans l'exemple qui suit, le premier <code>then()</code> renvoie <code>42</code> même si la promesse précédente a été rompue :</p>

<pre class="brush: js">Promise.reject()
  .then( () =&gt; 99, () =&gt; 42 ) // la valeur 42 est renvoyée dans une promesse
  .then( solution =&gt; console.log( 'Résolue avec ' + solution ) ); // Résolue avec 42</pre>

<p>En pratique, il est souvent préférable d'attraper les promesses rompues plutôt que d'utiliser la syntaxe de <code>then()</code> avec deux fonctions :</p>

<pre class="brush: js">Promise.resolve()
  .then( () =&gt; {
    // .then() renvoie une promesse rompue
    throw 'Oh zut !';
  })
  .catch( raison =&gt; {
    console.error( 'fonction siRompue appelée : ' + raison );
  })
  .then( () =&gt; {
    console.log("Je suis toujours appelée, même si il y a un souci avant");
  });</pre>

<p>Le chaînage peut également être utilisé pour implémenter une fonction utilisant une API basée sur les promesses et encapsuler une autre fonction :</p>

<pre class="brush: js">function fetch_current_data() {
  // L'API fetch renvoie une promesse. Cette fonction
  // expose une API similaire mais lorsque la promesse
  // est tenue, on effectue plus de tâches
  return fetch("current-data.json").then((response) =&gt; {
    if (response.headers.get("content-type") != "application/json") {
      throw new TypeError();
    }
    var j = response.json();
    // on peut ici manipuler j si besoin
    return j; // la valeur fournie à l'utilisateur de
              // fetch_current_data().then()
  });
}
</pre>

<p>Si le gestionnaire <code><em>siTenue</em></code> renvoie une promesse, la valeur de retour de <code>then()</code> sera alors résolue/rompue par cette promesse.</p>

<pre class="brush: js">function resoudrePlusTard(resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 1000);
}
function romprePlusTard(resolve, reject) {
  setTimeout(function () {
    reject(20);
  }, 1000);
}

var p1 = Promise.resolve("toto");
var p2 = p1.then(function() {
  // On renvoie une nouvelle promesse
  // qui sera résolue avec la valeur 10
  // au bout d'une seconde
  return new Promise(resoudrePlusTard);
});
p2.then(function(v) {
  console.log("tenue", v);
  // "tenue", 10
}, function(e) {
  // ceci n'est pas appelé
  console.log("rompue", e);
});

var p3 = p1.then(function() {
  // Ici, on renvoie une promesse
  // qui sera rompue avec la valeur
  // 20 au bout d'une seconde
  return new Promise(romprePlusTard);
});
p3.then(function(v) {
  // ceci n'est pas appelé
  console.log("tenue", v);
}, function(e) {
  console.log("rompue", e);
  // "rompue", 20
});
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-promise.prototype.then', 'Promise.prototype.then')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise.prototype.then', 'Promise.prototype.then')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Promise.then")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.prototype.catch()")}}</li>
</ul>
