---
title: extends
slug: Web/JavaScript/Reference/Classes/extends
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Classes/extends
---
<div>{{jsSidebar("Classes")}}</div>

<p>Le mot-clé <strong><code>extends</code></strong> est utilisé dans les <a href="/fr/docs/Web/JavaScript/Reference/Instructions/class">déclarations</a> et <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/class">expressions de classes</a> afin de signifier qu'un type représenté par une classe hérite d'un autre type.</p>



<div>{{EmbedInteractiveExample("pages/js/classes-extends.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">class ClasseFille extends ClasseParente { ... }
</pre>

<h2 id="Description">Description</h2>

<p>Le mot-clé <code>extends</code> peut être utilisé pour créer des sous-classes de classes existantes (natives ou non).</p>

<p>La propriété <code>.prototype</code> d'une classe fille (aussi appelée une <em>extension</em>) doit être un {{jsxref("Object")}} ou {{jsxref("null")}}.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_extends">Utiliser <code>extends</code></h3>

<p>Ce fragment de code est tiré de <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">cet exemple</a> et crée une classe <code>Carré</code> qui hérite de <code>Polygone</code> :</p>

<pre class="brush: js">class Carré extends Polygone {
  constructor(longueur) {
    // On utilise le constructeur de la classe parente
    // avec le mot-clé super
    super(longueur, longueur);
    // Pour les classes dérivées, super() doit être appelé avant de
    // pouvoir utiliser 'this' sinon cela provoque une exception
    // ReferenceError
    this.nom = 'Carré';
  }

  get aire() {
    return this.hauteur * this.largeur;
  }

}</pre>

<h3 id="Utiliser_extends_avec_des_objets_natifs">Utiliser <code>extends</code> avec des objets natifs</h3>

<p>Dans l'exemple suivant, on crée l'équivalent d'une sous-classe pour {{jsxref("Date")}} :</p>

<pre class="brush: js">class maDate extends Date {
  constructor() {
    super();
  }

  getFormattedDate() {
    var mois = ['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'];
    return this.getDate() + "-" + mois[this.getMonth()] + "-" + this.getFullYear();
  }
}</pre>

<p>Ces exemples sont extraits de ces deux pages : <a href="https://googlechrome.github.io/samples/classes-es6/index.html">démonstration</a>, <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">source</a>.</p>

<h3 id="Étendre_null">Étendre <code>null</code></h3>

<p>Étendre {{jsxref("null")}} se fait comme avec une classe normale sauf que l'objet prototype n'hérite pas de {{jsxref("Object.prototype")}}.</p>

<pre class="brush: js">class extensionNull extends null {
  constructor() {}
}

Object.getPrototypeOf(extensionNull); // Function.prototype
Object.getPrototypeOf(extensionNull.prototype); // null

new extensionNull(); // ReferenceError
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
   <td>{{SpecName('ES2015', '#sec-class-definitions', 'extends')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-class-definitions', 'extends')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.classes.extends")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Classes">Les classes</a></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/super">super</a></code></li>
</ul>
