---
title: super
slug: Web/JavaScript/Reference/Operators/super
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
  - Left-hand-side expressions
  - Operator
translation_of: Web/JavaScript/Reference/Operators/super
original_slug: Web/JavaScript/Reference/Opérateurs/super
browser-compat: javascript.operators.super
---
<div>{{jsSidebar("Operators")}}</div>

<p>Le mot-clé <code><strong>super</strong></code> est utilisé afin d'appeler ou d'accéder à des fonctions définies sur l'objet parent.</p>

<p>Les expressions de la forme <code>super.propriete</code> et <code>super[expr]</code> sont valides pour n'importe quelle <a href="/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions">définition de méthode</a>, que ce soit au sein d'une <a href="/fr/docs/Web/JavaScript/Reference/Classes">classe</a> ou d'un <a href="/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer">littéral objet</a>.</p>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">super([arguments]); // Le constructeur parent est appelé
super.functionOnParent([arguments]);
</pre>

<h2 id="description">Description</h2>

<p>Lorsqu'il est utilisé dans un constructeur, le mot-clé <code>super</code> est utilisé seul et doit apparaître avant le mot-clé <code>this</code>. Ce mot-clé peut également être utilisé afin d'appeler des fonctions sur un objet parent.</p>

<h2 id="examples">Exemples</h2>

<h3 id="using_super_in_classes">Utiliser <code>super</code> avec les classes</h3>

<p>Ce fragment de code est tiré de <a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">cet exemple</a>. Ici on utilise <code>super()</code> afin d'éviter la duplication des parties communes entre le constructeur de <code>Rectangle</code> et de <code>Carre</code>.</p>

<pre class="brush: js">class Rectangle {
  constructor(hauteur, largeur) {
    this.name = 'Rectangle';
    this.hauteur = hauteur;
    this.largeur = largeur;
  }
  coucou(){
    console.log('Coucou, je suis un ' + this.name + '.');
  }
  get aire() {
    return this.hauteur * this.largeur;
  }
  set aire(valeur) {
    this.hauteur = Math.sqrt(valeur);
    this.largeur = Math.sqrt(valeur);
  }
}

class Carre extends Rectangle {
  constructor(longueur) {

    // Ici, on appelle le constructeur de Rectangle
    // qui est l'objet « parent » de Carré
    super(longueur, longueur);

    // Pour les classes dérivées, super() doit être appelé
    // avant d'utiliser 'this' sinon cela entraînera une
    // exception ReferenceError.
    this.name = 'Carré';
  }
}</pre>

<h3 id="super-calling_static_methods">Utiliser super pour appeler des méthodes statiques</h3>

<p>Il est possible d'utiliser super pour invoquer des méthodes <a href="/fr/docs/Web/JavaScript/Reference/Classes/static">statiques</a> :</p>

<pre class="brush: js">class Rectangle {
  constructor() {}
  static logNbCotes() {
    return "J'ai 4 côtés";
  }
}

class Carre extends Rectangle {
  constructor(){}
  static logDescription() {
    return super.logNbCotes() + ' qui sont tous égaux';
  }
}
Carre.logDescription(); // "J'ai 4 côtés qui sont tous égaux"
</pre>

<h3 id="deleting_super_properties_will_throw_an_error">Supprimer des propriétés parentes lèvera une exception</h3>

<p>Il n'est pas possible d'utiliser l'opérateur <code><a href="/fr/docs/Web/JavaScript/Reference/Operators/delete">delete</a></code> sur <code>super.prop</code> ou <code>super[expr]</code> pour supprimer une propriété de la classe parente, cela renverra une exception <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"><code>ReferenceError</code></a> :</p>

<pre class="brush: js">class Base {
  toto() {}
}

class Derivee extends Base {
  delete() {
    delete super.toto; // À ne pas faire
  }
}

new Derivee().delete();
// ReferenceError : suppression invalide avec 'super'</pre>

<h3 id="super.prop_cannot_overwrite_non-writable_properties"><code>super.prop</code> ne peut pas surcharger les propriétés non modifiables</h3>

<p>Lorsque des propriétés sont définies sans accès en écriture (<em>non-writable</em>), par exemple avec <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a>, <code>super</code> ne peut pas surcharger les valeurs de ces propriétés.</p>

<pre class="brush: js">class X {
  constructor() {
    Object.defineProperty(this, "prop", {
      configurable: true,
      writable: false,
      value: 1
    });
  }
}
class Y extends X {
  constructor() {
    super();
  }
  toto(){
    super.prop = 2; // Impossible de surcharger
  }
}
const y = new Y();
y.toto(); // TypeError "prop" est en lecture seule
console.log(y.prop); // 1
</pre>

<h3 id="Utiliser_super.prop_sur_les_littéraux_objets">Utiliser <code>super.prop</code> sur les littéraux objets</h3>

<p><code>super</code> peut également être utilisé avec <a
    href="/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer">la notation littérale</a>. Dans l'exemple qui suit, deux objets définissent chacun une méthode. Le deuxième objet utilise <code>super</code> pour appeler la méthode du premier objet. Cela fonctionne grâce à <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf"><code>Object.setPrototypeOf()</code></a> avec lequel on définit que le prototype de <code>obj2</code> est <code>obj1</code>. De cette façon, super peut parcourir la chaîne de prototypes et trouver <code>methode1</code> dans <code>obj1</code>.</p>

<pre class="brush: js">const obj1 = {
  methode1() {
    console.log("méthode 1");
  }
}

const obj2 = {
  methode2() {
    super.methode1();
  }
}

Object.setPrototypeOf(obj2, obj1);
obj2.methode2(); // affiche "méthode 1" dans la console
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Classes">Les classes</a></li>
</ul>
