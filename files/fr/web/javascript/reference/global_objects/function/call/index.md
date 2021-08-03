---
title: Function.prototype.call()
slug: Web/JavaScript/Reference/Global_Objects/Function/call
tags:
  - Function
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function/call
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/call
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>call()</strong></code> réalise un appel à une fonction avec une valeur <code>this</code> donnée et des arguments fournis individuellement.</p>

<div class="note"><p><strong>Note :</strong> Bien que la syntaxe de cette fonction ressemble à celle de {{jsxref("Function.apply", "apply()")}}, la différence fondamentale réside dans le fait que <code>call()</code> accepte <strong>une liste d'arguments</strong>, tandis que la méthode <code>apply()</code> accepte <strong>un unique tableau d'arguments</strong>.</p></div>

<div>{{EmbedInteractiveExample("pages/js/function-call.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>fun</var>.call(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...]]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>thisArg</code></dt>
 <dd>La valeur <code>this</code> fournie pour l'appel de la fonction <em><code>fun</code></em>. La valeur peut être différente de celle normalement perçue par la méthode : si la méthode est une fonction utilisée dans un code en {{jsxref("Fonctions/Strict_mode", "mode non-strict", "", 1)}}, {{jsxref("null")}} and {{jsxref("undefined")}} seront remplacés par l'objet global et les valeurs primitives seront encapsulées en objets.</dd>
 <dt><code>arg1, arg2, ...</code></dt>
 <dd>Les arguments pour la fonction.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le résultat de l'appel de la fonction invoquée avec la valeur <code>this</code> indiquée et les arguments fournis.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>call()</code> permet d'appeler une fonction rattachée à un objet donné sur un autre objet.</p>

<p>Il est possible d'affecter un objet <code>this</code> différent lors de l'appel à une fonction existante. En général, <code>this</code> fait référence à l'objet courant, celui sur lequel est appelée la méthode. Avec <code>call</code>, on peut écrire une méthode une seule fois et ensuite en hériter dans un autre objet, sans avoir à réécrire cette méthode pour ce nouvel objet.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_call()_pour_chaîner_le_constructeur_d'un_objet.">Utiliser <code>call()</code> pour chaîner le constructeur d'un objet.</h3>

<p>Il est possible d'utiliser <code>call</code> pour chaîner le constructeur d'un objet, de façon similaire à Java. Dans l'exemple suivant, le constructeur de l'objet <code>Product</code> est défini avec deux paramètres, <code>name</code> et <code>price</code>. Deux autres fonctions, <code>Food</code> et <code>Toy</code> invoquent <code>Product</code> en passant <code>this,</code> <code>name</code> et <code>price</code>. <code>Product</code> initialise les propriétés <code>name</code> et <code>price</code>, tandis que les fonctions spécialisées définissent la propriété <code>category</code>.</p>

<pre class="brush: js">function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
</pre>

<h3 id="Utiliser_call()_pour_invoquer_une_fonction_anonyme">Utiliser <code>call()</code> pour invoquer une fonction anonyme</h3>

<p>Dans cet exemple (purement inventé), on crée une fonction anonyme et on utilise <code>call</code> pour l'invoquer sur chaque objet d'un tableau. Le principal but de cette fonction anonyme est d'ajouter une fonction <code>print</code> sur chaque élément qui permet d'afficher l'index de l'objet. Le passage de l'objet en tant que valeur <code>this</code> n'était pas nécessaire, mais il permet d'expliquer le sujet.</p>

<pre class="brush: js">var animaux = [
  {espece: 'Lion', nom: 'Roi'},
  {espece: 'Éléphant', nom: 'Dumbo'}
];

for (var i = 0; i &lt; animaux.length; i++) {
  (function (i) {
    this.print = function () {
      console.log('#' + i  + ' ' + this.espece + ' : ' + this.nom);
    }
    this.print();
  }).call(animaux[i], i);
}
</pre>

<h3 id="Utiliser_call()_pour_appeler_une_fonction_avec_un_objet_pour_this">Utiliser <code>call()</code> pour appeler une fonction avec un objet pour <code>this</code></h3>

<p>Dans l'exemple qui suit, on utilise la méthode <code>call()</code> sur la fonction <code>saluer()</code> afin de l'appliquer à l'objet <code>personne1</code> :</p>

<pre class="brush: js">function saluer() {
  var reponse = [this.nom, "est un", this.role, "."].join(" ");
  console.log(reponse);
}

var personne1 = {
  nom: "Sénèque",
  role: "philosophe"
};

saluer.call(personne1); // Sénèque est un philosophe.
</pre>

<h3 id="Utiliser_call()_pour_appeler_une_fonction_sans_indiquer_de_premier_argument">Utiliser <code>call()</code> pour appeler une fonction sans indiquer de premier argument</h3>

<p>Dans l'exemple qui suit, on appelle la fonction <code>afficher()</code> sans lui passer d'argument. C'est donc l'objet global qui est utilisé comme contexte :</p>

<pre class="brush: js">var prenom = 'Archibald';

function afficher() {
  console.log('prenom vaut ' + this.prenom);
}

afficher.call(); // prenom est Archibald</pre>

<div class="note">
<p><strong>Note :</strong> La valeur de <code>this</code> sera {{jsxref("undefined")}} en mode strict.</p>

<pre class="brush: js">'use strict';

var prenom = 'Archibald';

function afficher() {
  console.log('prenom vaut ' + this.prenom);
}

afficher.call(); // Cannot read the property prenom' of undefined</pre>
</div>

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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.3.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.3.4.4', 'Function.prototype.call')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-function.prototype.call', 'Function.prototype.call')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function.prototype.call', 'Function.prototype.call')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Function.call")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Function.prototype.bind()")}}</li>
 <li>{{jsxref("Function.prototype.apply()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Introduction_à_JavaScript_orienté_objet">Introduction à JavaScript orienté objet</a></li>
</ul>
