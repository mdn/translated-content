---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Promise
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/catch
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/catch
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>catch()</strong></code> renvoie un objet {{jsxref("Promise")}} et ne traite que des cas où la promesse initiale est rejetée. Elle a le même effet qu'un appel à {{jsxref("Promise.then", "Promise.prototype.then(undefined, siRejetée)")}} (c'est en fait ce qui se passe dans le moteur, <code>obj.catch(onRejected)</code> est traduit en <code>obj.then(undefined, onRejected)</code>). Cela signifie qu'il est nécessaire de fournir une fonction <code>onRejected</code>, même si on souhaite avoir une valeur de secours qui est <code>undefined</code> (par exemple avec <code>obj.catch(() =&gt; {})</code>.</p>

<div>{{EmbedInteractiveExample("pages/js/promise-catch.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>p.catch(siRejetée)</var>;

p.catch(function(raison) {
   // rejet
});
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>siRejetée</code></dt>
 <dd>Une {{jsxref("Function","fonction","",1)}} à appeler si la <code>Promise</code> est rejetée (i.e. n'est pas tenue). Cette fonction possède un argument :
 <dl>
  <dt><code>raison</code></dt>
  <dd>Une chaîne de caractères qui indique pourquoi la promesse n'est pas tenue.</dd>
 </dl>

 <p>La promesse renvoyée par la méthode <code>catch()</code> est rompue si <code>siRejetée</code> lève une erreur ou si elle renvoie une promesse rompue. Dans les autres cas, elle est tenue.</p>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une promesse ({{jsxref("Promise")}}).</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>catch()</code> est utile pour gérer les cas d'erreur en cas de compositions de plusieurs promesses. Elle renvoie elle-même une promesse et peut donc être utilisée lorsqu'on <a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses#Chaînage_après_un_catch">chaîne des promesses</a>, à l'instar de la méthode sœur qu'est {{jsxref("Promise.prototype.then()")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utilisation_de_la_méthode_catch">Utilisation de la méthode <code>catch</code></h3>

<pre class="brush: js">var p1 = new Promise(function(resolve, reject) {
  resolve("Succès");
});

p1.then(function(value) {
  console.log(value); // "Succès!"
  throw new Error("zut !");
}).catch(function(e) {
  console.error(e.message); // "zut !"
}).then(function(e) {
   console.log('après le catch, la chaîne est restaurée');
});

// Le code qui suit est équivalent :
p1.then(function(value) {
  console.log(value); // "Succès!"
  return Promise.reject('zut !');
}).catch(function(e) {
  console.log(e); // "zut !"
}).then(function(e){
  console.log('après le catch, la chaîne est restaurée');
});
</pre>

<h3 id="Les_promesses_n'interceptent_pas_les_exceptions_levées_de_façon_asynchrone">Les promesses n'interceptent pas les exceptions levées de façon asynchrone</h3>

<pre class="brush: js">var p1 = new Promise(function(resolve, reject) {
  throw new Error('Oh oh!');
});

p1.catch(function(e) {
  console.log(e.message); // "Oh oh!"
});

var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    throw new Error('Exception invisible !');
  }, 1000);
});

p2.catch(function(e) {
  console.log(e.message); // Cela n'est jamais appelé
});</pre>

<h3 id="Démonstration_de_l'appel_interne_à_then">Démonstration de l'appel interne à <code>then</code></h3>

<pre class="brush: js">// On surcharge Promise.prototype.then/catch
// pour y ajouter des logs
(function(Promise){
    var originalThen = Promise.prototype.then;
    var originalCatch = Promise.prototype.catch;

    Promise.prototype.then = function(){
        console.log('&gt; &gt; &gt; &gt; &gt; &gt; appel de .then sur %o avec les arguments: %o', this, arguments);
        return originalThen.apply(this, arguments);
    };
    Promise.prototype.catch = function(){
        console.log('&gt; &gt; &gt; &gt; &gt; &gt; appel de .catch sur %o avec les arguments: %o', this, arguments);
        return originalCatch.apply(this, arguments);
    };

})(this.Promise);



// On appelle catch sur une promesse déjà résolue
Promise.resolve().catch(function XXX(){});

// Dans la console, on aura :
// &gt; &gt; &gt; &gt; &gt; &gt; appel de .catch sur Promise{} avec les arguments: Arguments{1} [0: function XXX()]
// &gt; &gt; &gt; &gt; &gt; &gt; appel de .then sur Promise{} avec les arguments: Arguments{2} [0: undefined, 1: function XXX()]
</pre>

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
   <td>{{SpecName('ES2015', '#sec-promise.prototype.catch', 'Promise.prototype.catch')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale au sein d'un standard ECMA.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-promise.prototype.catch', 'Promise.prototype.catch')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Promise.catch")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Promise.prototype.then()")}}</li>
</ul>
