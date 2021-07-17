---
title: instanceof
slug: Web/JavaScript/Reference/Operators/instanceof
tags:
  - JavaScript
  - Operator
  - Prototype
  - Reference
  - instanceof
translation_of: Web/JavaScript/Reference/Operators/instanceof
original_slug: Web/JavaScript/Reference/Opérateurs/instanceof
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'<strong>opérateur <code>instanceof</code></strong> permet de tester si un objet possède, dans sa chaîne de prototype, la propriété <code>prototype</code> d'un certain constructeur.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-instanceof.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate"><em>objet</em> instanceof <em>constructeur</em></pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>objet</code></dt>
 <dd>L'objet qu'on souhaite analyser.</dd>
 <dt><code>constructeur</code></dt>
 <dd>La fonction dont on souhaite vérifier la présence dans la chaîne de prototypes.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>L'opérateur <code>instanceof</code> teste la présence de <code>constructeur.prototype</code> dans la chaîne de prototypes d'<code>objet</code>.</p>

<pre class="brush: js notranslate">function C(){} // Définition du constructeur
function D(){} // Définition d'un autre constructeur

var o = new C();

// true, car : Object.getPrototypeOf(o) === C.prototype
o instanceof C;

// false, car D.prototype n'existe pas dans la chaîne de prototype de o
o instanceof D;

o instanceof Object; // true, car:
C.prototype instanceof Object // true

C.prototype = {};
var o2 = new C();

o2 instanceof C; // true

// false, car C.prototype n'existe plus dans la chaîne de prototype de o
o instanceof C;

D.prototype = new C(); // Utilisation de l'héritage
var o3 = new D();
o3 instanceof D; // true
o3 instanceof C; // true car C.prototype fait partie de la chaîne de o3
</pre>

<p>À noter que la valeur retournée par <code>instanceof</code> peut être différente suite à un changement de la propriété <code>prototype</code> du constructeur, notamment via la méthode <code>Object.setPrototypeOf()</code>. On peut aussi utiliser la pseudo-propriété <code>__proto__</code> qui n'était pas standard avant ECMAScript 2015.</p>

<h3 id="instanceof_dans_dautres_contextes_frames_ou_fenêtres"><code>instanceof</code> dans d'autres contextes (frames ou fenêtres)</h3>

<p>Différents niveaux d'intégrations ont différents environnements. Cela signifie que les valeurs retournées sont différentes (objet globaux différents, constructeurs différents, etc.). Cela peut engendrer des résultats inattendus. Par exemple, <code>[] instanceof window.frames[0].Array</code> renverra <code>false</code>, car <code>Array !== </code><code>window.frames[0].Array</code> et que les tableaux héritent de leur constructeur.</p>

<p>Cela peut être contre-intuitif au début, mais lorsqu'il est nécessaire de travailler avec plusieurs frames ou fenêtres, et que des objets sont transférés via des fonctions, cela sera un obstacle valide et important. Par contre, il est tout à fait possible d'utiliser <code>Array.isArray(myObj)</code> pour vérifier de manière sécurisée qu'un tableau est effectivement un tableau.</p>

<p>Ainsi, pour vérifier qu'un <a href="/fr/docs/Web/API/Node">nœud</a> est bien un objet de type <a href="/fr/docs/Web/API/SVGElement">SVGElement</a> dans un autre contexte, on pourra utiliser <code>monNœud instanceof monNœud.documentMaitre.vue.SVGElement</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Démonstration_que_String_et_Date_sont_de_type_Object_et_cas_aux_limites_des_littéraux">Démonstration que <code>String</code> et <code>Date</code> sont de type <code>Object</code> et cas aux limites des littéraux</h3>

<p>Le code suivant utilise <code>instanceof</code> pour démontrer que les objets <code>String</code> et <code>Date</code> sont aussi de type <code>Object</code> (ils dérivent d'<code>Object</code>).</p>

<p>Cependant, les objets créés à partir de littéraux objets sont une exception : en effet, bien que leur prototype ne soit pas défini, <code>instanceof Object</code> renvoie <code>true</code>.</p>

<pre class="brush: js notranslate">var chaîneSimple = "Une chaîne simple";
var maChaîne  = new String();
var newChaîne = new String("Chaîne créée avec un constructeur");
var maDate    = new Date();
var monObjet  = {};
var monNonObjet = Object.create(null);

chaîneSimple instanceof String; //false car le prototype vaut undefined
maChaîne  instanceof String; // true
newChaîne instanceof String; // true
maChaîne  instanceof Object; // true

monObjet instanceof Object;  // true, bien que le protoype soit undefined
({}) instanceof Object;      // true, comme pour le cas précédent
monNonObjet instance Object; // false

maChaîne instanceof Date;   // false

maDate instanceof Date;     // true
maDate instanceof Object;   // true
maDate instanceof String;   // false
</pre>

<h3 id="Démonstration_que_mavoiture_est_de_type_Voiture_et_de_type_Object">Démonstration que <code>mavoiture</code> est de type <code>Voiture</code> et de type <code>Object</code></h3>

<p>Le code suivant créé un objet de type <code>Voiture</code> et une instance de cet objet, <code>mavoiture</code>. L'opérateur <code>instanceof</code> montre que l'objet <code>mavoiture</code> est de type <code>Voiture</code> et de type <code>Object</code>.</p>

<pre class="brush: js notranslate">function Voiture(fabricant, modele, annee) {
  this.fabricant = fabricant;
  this.modele = modele;
  this.annee = annee;
}
var mavoiture = new Voiture("Citroën", "C3", 2006);
var a = mavoiture instanceof Voiture; // retourne true
var b = mavoiture instanceof Object;  // retourne true
</pre>

<h3 id="Attention_à_la_précédence_des_opérateurs">Attention à la précédence des opérateurs</h3>

<p>Pour tester qu'un objet n'est pas une instance d'un constructeur donné, on pourra faire le test <code>!(monObj instanceof Constructor)</code>. Toutefois, attention à ne pas écrire <code>!monObj instanceof Constructor</code> car <code>!monObj</code> serait traité en priorité et on testerait donc <code>false instanceof Constructor</code> qui sera toujours faux.</p>

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
   <td>{{SpecName('ES6', '#sec-relational-operators', 'Opérateurs relationnels')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.8.6', 'Opérateur instanceof')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-11.8.6', 'Opérateur instanceof')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.4.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.instanceof")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Opérateurs/L_opérateur_typeof","typeof")}}</li>
 <li>{{jsxref("Symbol.hasInstance")}}</li>
</ul>
