---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
tags:
  - Constructor
  - ECMAScript 2015
  - GeneratorFunction
  - Iterator
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
original_slug: Web/JavaScript/Reference/Objets_globaux/GeneratorFunction
---
<div>{{JSRef}}</div>

<p>Le constructeur <strong><code>GeneratorFunction</code></strong> permet de créer un nouvel objet qui est une {{jsxref("Instructions/function*", "fonction génératrice","",1)}}. En JavaScript, chaque générateur (ou fonction génératrice) est un objet <code>GeneratorFunction</code>.</p>

<p>L'objet <code>GeneratorFunction</code> n'est pas un objet global. Il peut être obtenu en exécutant le code suivant :</p>

<pre class="brush: js">Object.getPrototypeOf(function*(){}).constructor
</pre>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new GeneratorFunction ([<var>arg1</var>[, <var>arg2</var>[, ...<var>argN</var>]],] corpsFonction)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>arg1, arg2, ... arg<em>N</em></code></dt>
 <dd>Les noms à utiliser pour les arguments formellement déclarés. Chacun doit être une chaîne de caractères correspondant à un identifiant JavaScript valide ou une liste de telles chaînes séparées par des virgules. Par exemple, on peut avoir "<code>x</code>", "<code>maValeur</code>", ou "<code>a,b</code>".</dd>
 <dt><code>corpsFonction</code></dt>
 <dd>Une chaîne qui contient les instructions JavaScript qui composent la définition de la fonction.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Les {{jsxref("Instructions/function*", "fonctions génératrices","",1)}} créées avec le constructeur <code>GeneratorFunction</code> sont analysés lorsque la fonction est crée. Cela est moins efficace que de déclarer un générateur avec une expression {{jsxref("Statements/function*", "function*")}} puis de l'appeler car ces fonctions sont analysées avec le reste du code (ce qui permet au moteur JavaScript d'effectuer certaines optimisations).</p>

<p>Tous les arguments passés à la fonction sont traités par la suite avec les noms des identifiants utilisés pour les noms des paramètres lors de la création de la fonction et avec cet ordre là.</p>

<div class="note">
<p><strong>Note :</strong> Les {{jsxref("Instructions/function*", "générateurs","",1)}} créés avec le constructeur <code>GeneratorFunction</code> ne créent pas de fermetures avec leurs contextes de création. Ils sont toujours créés dans la portée globale. Lorsqu'ils sont exécutés, ils n'ont accès qu'à leurs variables locales et aux variables globales et ils n'ont pas accès aux variables de la portée où a eu lieu l'appel à <code>GeneratorFunction</code>. Ce comportement est différent de celui obtenu lorsqu'on appelle {{jsxref("Objets_globaux/eval", "eval")}} avec du code correspondant à une expression de générateur.</p>
</div>

<p>L'appel du constructeur <code>GeneratorFunction</code> comme fonction (c'est-à-dire sans utiliser l'opérateur <code>new</code>) aura le même effet que si celui-ci est invoqué comme constructeur.</p>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code><strong>GeneratorFunction.length</strong></code></dt>
 <dd>La propriété de longueur du constructeur <code>GeneratorFunction</code> qui vaut 1.</dd>
 <dt>{{jsxref("GeneratorFunction.prototype")}}</dt>
 <dd>Le prototype du constructeur qui permet d'ajouter des propriétés à tous les générateurs.</dd>
</dl>

<h2 id="Le_prototype_de_GeneratorFunction">Le prototype de <code>GeneratorFunction</code></h2>

<h3 id="Propriétés_2">Propriétés</h3>

<div>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/GeneratorFunction/prototype', 'Properties')}}</div>

<h2 id="Les_instances_de_GeneratorFunction">Les instances de <code>GeneratorFunction</code></h2>

<p>Les instances de <code>GeneratorFunction</code> héritent des méthodes et propriétés de {{jsxref("GeneratorFunction.prototype")}}. Comme pour tous les constructeurs, il est possible de modifier le prototype afin d'apporter des modifications à toutes les instances de <code>GeneratorFunction</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Créer_un_générateur_en_utilisant_le_constructeur_GeneratorFunction">Créer un générateur en utilisant le constructeur <code>GeneratorFunction</code></h3>

<pre class="brush: js">var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction("a", "yield a * 2");
var itérateur = g(10);
console.log(itérateur.next().value); // 20
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-generatorfunction-objects', 'GeneratorFunction')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-generatorfunction-objects', 'GeneratorFunction')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.GeneratorFunction")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'instruction {{jsxref("Instructions/function*", "function*")}}</li>
 <li>L'expression {{jsxref("Opérateurs/function*", "function*")}}</li>
 <li>{{jsxref("Function")}}</li>
 <li>L'instruction {{jsxref("Instructions/function", "function")}}</li>
 <li>L'expression {{jsxref("Opérateurs/L_opérateur_function", "function")}}</li>
 <li>{{jsxref("Fonctions", "Les fonctions et portées de fonctions", "", 1)}}</li>
</ul>
