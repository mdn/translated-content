---
title: L'opérateur in
slug: Web/JavaScript/Reference/Operators/in
tags:
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/in
original_slug: Web/JavaScript/Reference/Opérateurs/L_opérateur_in
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'<strong>opérateur <code>in</code></strong> renvoie <code>true</code> si une propriété donnée appartient à l'objet donné (directement ou via sa chaîne de prototype).</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-inoperator.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>propriété</em> in <em>nomObjet</em>
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>propriété</code></dt>
 <dd>Une expression évaluée en un nombre ou une chaîne de caractères qui représente le nom d'une propriété ou l'indice d'un tableau.</dd>
 <dt><code>nomObjet</code></dt>
 <dd>Le nom de l'objet qu'on souhaite inspecter.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Les exemples suivants illustrent certaines utilisation de l'opérateur <code>in</code>.</p>

<pre class="brush: js">// Tableaux
var arbres = ["sapin", "hêtre", "cèdre", "chêne", "érable"];
0 in arbres        // renvoie true
3 in arbres        // renvoie true
6 in arbres        // renvoie false
"hêtre" in arbres  // renvoie false (l'indice doit être spécifié, pas la valeur à cet indice)
"length" in arbres // renvoie true (length est une propriété des objets Array)
Symbol.iterator in arbres // renvoie true (les tableaux sont itérables, à partir d'ES6)

// Objets prédéfinis
"PI" in Math           // renvoie true
var ma_chaine = new String("corail");
"length" in ma_chaine  // renvoie true

// Objets personnalisés
var voiture = {marque : "Honda", modèle : "Accord", année : 1998};
"marque" in voiture  // renvoie true
"modèle" in voiture  // renvoie true
"marque" in voiture // renvoie true
"Accord" in voiture // renvoie false
</pre>

<p>L'opérande droit doit toujours être du type objet (et pas un autre type primitif). Par exemple, on peut utiliser une  chaîne créée avec le constructeur <code>String</code>, mais pas une chaîne littérale.</p>

<pre class="brush: js">var couleur1 = new String("vert");
"length" in couleur1 // renvoie true
var couleur2 = "corail";
"length" in couleur2 // génère une erreur (couleur n'est pas un objet String)
</pre>

<h3 id="Utilisation_de_l'opérateur_in_avec_des_propriétés_supprimées_ou_indéfinies">Utilisation de l'opérateur <code>in</code> avec des propriétés supprimées ou indéfinies</h3>

<p>Si une propriété est supprimée avec l'opérateur <code><a href="fr/R%c3%a9f%c3%a9rence_de_JavaScript_1.5_Core/Op%c3%a9rateurs/Op%c3%a9rateurs_sp%c3%a9ciaux/L'op%c3%a9rateur_delete">delete</a></code>, l'opérateur <code>in</code> renvoie <code>false</code> pour cette propriété.</p>

<pre class="brush: js">var voiture = {marque : "Honda", modèle : "Accord", année : 1998};
delete voiture.marque;
"marque" in voiture  // renvoie false

var arbres = new Array("sapin", "hêtre", "cèdre", "chêne", "érable");
delete arbres[3];
3 in arbres // renvoie false
</pre>

<p>Si une propriété est définie à {{jsxref("Objets_globaux/undefined", "undefined")}} mais n'est pas supprimée, l'opérateur <code>in</code> renverra <code>true</code> pour cette propriété.</p>

<pre class="brush: js">var voiture = {marque : "Honda", modèle : "Accord", année : 1998};
voiture.marque = undefined;
"marque" in voiture  // renvoie true

var arbres = new Array("sapin", "hêtre", "cèdre", "chêne", "érable");
arbres[3] = undefined;
3 in arbres // renvoie true
</pre>

<h3 id="Propriétés_héritées">Propriétés héritées</h3>

<p>L'opérateur <code>in</code> renvoie <code>true</code> pour les propriétés qui appartiennent à la chaîne de prototypes. SI on souhaite la présence d'une propriété non-héritée, on utilisera plutôt {{jsxref("Object.prototype.hasOwnProperty()")}}.</p>

<pre class="brush: js">"toString" in {}; // renvoie true</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-relational-operators', 'Relational Operators')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-relational-operators', 'Opérateurs relationnels')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.8.7', 'Opérateur in')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-11.8.7', 'Opérateurs in')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.4.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.in")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/for...in","for...in")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_delete","delete")}}</li>
 <li>{{jsxref("Object.prototype.hasOwnProperty()")}}</li>
 <li>{{jsxref("Reflect.has()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement">Caractère énumérable des propriétés et rattachement</a></li>
</ul>
