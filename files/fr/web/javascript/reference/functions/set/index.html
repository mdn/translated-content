---
title: L'opérateur set
slug: Web/JavaScript/Reference/Functions/set
tags:
  - ECMAScript 5
  - Functions
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions/set
original_slug: Web/JavaScript/Reference/Fonctions/set
---
<div>{{jsSidebar("Functions")}}</div>

<p>La syntaxe <strong><code>set</code></strong> permet de lier une propriété d'un objet à une fonction qui sera appelée à chaque tentative de modification de cette propriété.</p>

<div>{{EmbedInteractiveExample("pages/js/functions-setter.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">{set <em>prop</em>(<em>val</em>) { . . .}}
{set [expression](<em>val</em>) { . . .}}</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>Le nom de la propriété à lier à la fonction.</dd>
 <dt><code>val</code></dt>
 <dd>Un alias pour la variable qui contient la valeur qu'on souhaiterait affecter à <code>prop.</code></dd>
 <dt><code>expression</code></dt>
 <dd>Avec ECMAScript 2015, il est également possible d'utiliser des expressions pour utiliser un nom de propriété calculé à lier à la fonction.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>En JavaScript, un mutateur (ou <em>setter</em> en anglais) peut être utiisé afin d'exécuter une fonction à chaque fois qu'on souhaite modifier la valeur d'une propriété donnée. La plupart du temps, les mutateurs sont utilisés avec les accesseurs (<em>getters</em>) afin de créer une pseudo-propriété. Il n'est pas possible d'avoir à la fois un mutateur et une valeur donnée pour une même propriété.</p>

<p>On notera que <code>set</code> :</p>

<div>
<ul>
 <li>peut avoir un identifiant qui est soit un nombre soit une chaîne de caractères</li>
 <li>doit avoir exactement un paramètre (voir l'article « <a class="external" href="https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/" rel="external nofollow">Incompatible <abbr title="ECMAScript 5th edition">ES5</abbr> change: literal getter and setter functions must now have exactly zero or one arguments</a> » (en anglais) pour plus d'informations)</li>
 <li>ne doit pas apparaître dans un littéral objet qui possède un autre <code>set</code> ou une autre propriété avec la même clé :<br>
  ( <code>{ set x(v) { }, set x(v) { } }</code> et <code>{ x: ..., set x(v) { } }</code> seront interdits)</li>
</ul>
</div>

<p>On peut retirer un mutateur d'un objet grâce à l'opérateur {{jsxref("Opérateurs/L_opérateur_delete","delete")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Définir_un_mutateur_sur_de_nouveaux_objets_avec_un_littéral_objet">Définir un mutateur sur de nouveaux objets avec un littéral objet</h3>

<p>Dans l'exemple qui suit, on définit une pseudo-propriété <code>courant</code> pour un objet <code>o</code> qui, lorsqu'elle recevra une valeur, mettra à jour la propriété <code>log</code> avec la valeur reçue :</p>

<pre class="brush: js">var o = {
  set courant (str) {
    this.log[this.log.length] = str;
  },
  log: []
}
</pre>

<p>On notera que <code>courant</code> n'est pas défini. Toute tentative pour y accéder renverra <code>undefined</code>.</p>

<h3 id="Supprimer_un_mutateur_grâce_à_l'opérateur_delete">Supprimer un mutateur grâce à l'opérateur <code>delete</code></h3>

<p>Si on souhaite retirer un mutateur, on peut simplement utiliser l'opérateur {{jsxref("Opérateurs/L_opérateur_delete","delete")}} :</p>

<pre class="brush: js">delete o.courant;
</pre>

<h3 id="Définir_un_mutateur_sur_un_objet_existant_avec_defineProperty">Définir un mutateur sur un objet existant avec <code>defineProperty</code></h3>

<p>On peut également ajouter un mutateur sur un objet d'ores et déjà créé. Pour cela, on utilisera la méthode {{jsxref("Object.defineProperty()")}}.</p>

<pre class="brush: js">var o = { a:0 };

Object.defineProperty(o, "b", { set: function (x) { this.a = x / 2; } });

o.b = 10; // On utilise le setter, qui affecte 10 / 2 (5) à 'a'
console.log(o.a) // 5</pre>

<h3 id="Utiliser_un_nom_de_propriété_calculé">Utiliser un nom de propriété calculé</h3>

<pre class="brush: js">var expr = "toto";

var obj = {
  bidule: "truc",
  set [expr](v) { this.bidule = v; }
};

console.log(obj.bidule); // "truc"
obj.toto = "bidule";      // le mutateur est utilisé
console.log(obj.bidule); // "bidule"
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
   <td>{{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-method-definitions', 'Method definitions')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Ajout des noms de propriétés calculés</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.functions.set")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Fonctions/get","get")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_delete","delete")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.defineGetter", "__defineGetter__")}}</li>
 <li>{{jsxref("Object.defineSetter", "__defineSetter__")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters">Définir des accesseurs et des mutateurs</a>, dans le Guide JavaScript</li>
</ul>
