---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
tags:
  - Constructeur
  - Experimental
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/AsyncFunction
original_slug: Web/JavaScript/Reference/Objets_globaux/AsyncFunction
---
<div>{{JSRef}}</div>

<p>Le constructeur <code><strong>Async</strong></code><strong><code>Function</code></strong> crée un nouvel objet pour {{jsxref("Instructions/async function", "une fonction asynchrone","",1)}}. En JavaScript, chaque fonction asynchrone est en fait un objet <code>AsyncFunction</code>.</p>

<p>Attention, <code>AsyncFunction</code> n'est pas un objet global. On peut l'obtenir grâce au code suivant :</p>

<pre class="brush: js">Object.getPrototypeOf(async function(){}).constructor
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new AsyncFunction ([<var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]],] <var>functionBody</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>arg1, arg2, ... arg<em>N</em></code></dt>
 <dd>Les noms des paramètres passés à la fonction. Chacun doit être une chaîne de caractères qui puisse être un identifiant JavaScript valide ou une liste de telles chaînes séparées par une virgule (ex. "<code>x</code>", "<code>laValeur</code>", ou "<code>a,b</code>").</dd>
 <dt><code>functionBody</code></dt>
 <dd>Une chaîne de caractères qui contient les instructions JavaScript définissant la définition de la fonction.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Les objets des {{jsxref("Instructions/async_function", "fonctions asynchrones","",1)}} créés avec le constructeur <code>AsyncFunction</code> sont analysés lorsque la fonction est créée. C'est moins efficace que de déclarer une fonction asynchrone avec une {{jsxref("Instructions/async_function", "expression de fonction asynchrone")}} et de l'appeler depuis le code car ces fonctions sont analysées avec le reste du code.</p>

<p>Tous les arguments passés à la fonction sont traités comme les noms des identifiants des paramètres de la fonction qui sera créée, dans l'ordre dans lequel ils sont passés.</p>

<div class="note">
<p><strong>Note :</strong> Les fonctions asynchrones créées avec le constructeur <code>AsyncFunction</code> ne créent pas de fermetutres dans leurs contextes de création. Elles sont toujours créées dans la portée globale. Lorsqu'on les exécute, ellee ne pourront accéder qu'à leurs variables locales et aux variables globales, pas à celles qui appartiennent à la portée dans laquelle <code>AsyncFunction</code> a été appelé. On aurait donc un comportement différent  si on appelait {{jsxref("Objets_globaux/eval", "eval")}} avec le code de l'expression de la fonction asynchrone.</p>
</div>

<p>Si on appelle <code>AsyncFunction</code> comme une fonction (c'est-à-dire sans <code>new</code>), cela aura le même effet que s'il est appelé comme un constructeur.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code><strong>AsyncFunction.length</strong></code></dt>
 <dd>La propriété de longueur du constructeur <code>AsyncFunction</code> dont la valeur est 1.</dd>
 <dt>{{jsxref("AsyncFunction.prototype")}}</dt>
 <dd>Le prototype permet d'ajouter des propriétés à tous les objets représentant les fonctions asynchrones.</dd>
</dl>

<h2 id="Prototype_de_l'objet_AsyncFunction">Prototype de l'objet <code>AsyncFunction</code></h2>

<h3 id="Propriétés_2">Propriétés</h3>

<div>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/AsyncFunction/prototype', 'Propriétés')}}</div>

<h2 id="Instances_AsyncFunction">Instances <code>AsyncFunction</code></h2>

<p>Les instances d'<code>AsyncFunction</code> héritent des méthodes et des propriétés de {{jsxref("AsyncFunction.prototype")}}. Comme avec les autres constructeurs, on peut changer l'objet prototype du constructeur afin de modifier l'ensemble des instances <code>AsyncFunction</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Créer_une_fonction_asynchrone_avec_un_constructeur_AsyncFunction">Créer une fonction asynchrone avec un constructeur <code>AsyncFunction</code></h3>

<pre class="brush: js">function resolveAfter2Seconds(x) {
  return new Promise(resolve =&gt; {
    setTimeout(() =&gt; {
      resolve(x);
    }, 2000);
  });
}

var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor
var a = new AsyncFunction("a",
                          "b",
                          "return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);");
a(10, 20).then(v =&gt; {
  console.log(v); // affiche 30 après 4 secondes
});
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
   <td>{{SpecName('ESDraft', '#sec-async-function-objects', 'AsyncFunction object')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définition initiale dans ES2017.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.AsyncFunction")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Instruction {{jsxref("Instructions/async_function", "async function")}}</li>
 <li>Expression {{jsxref("Opérateurs/async_function","async function")}}</li>
 <li>{{jsxref("Objets_globaux/Function", "Function")}}</li>
 <li>Instruction {{jsxref("Instructions/function", "function")}}</li>
 <li>Expression {{jsxref("Opérateurs/function", "function")}}</li>
 <li>{{jsxref("Fonctions", "Fonctions et portées des fonctions", "", 1)}}</li>
</ul>
