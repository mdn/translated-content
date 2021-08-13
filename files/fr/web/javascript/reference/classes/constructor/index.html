---
title: constructor
slug: Web/JavaScript/Reference/Classes/constructor
tags:
  - Classes
  - ECMAScript 2015
  - JavaScript
  - Language feature
translation_of: Web/JavaScript/Reference/Classes/constructor
browser-compat: javascript.classes.constructor
---
<div>{{jsSidebar("Classes")}}</div>

<p>La méthode <strong><code>constructor</code></strong> est une méthode qui est utilisée pour créer et initialiser un objet lorsqu'on utilise le mot clé <a href="/fr/docs/Web/JavaScript/Reference/Statements/class"><code>class</code></a>.</p>

<div>{{EmbedInteractiveExample("pages/js/classes-constructor.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">constructor() { ... }
constructor(argument0) { ... }
constructor(argument0, argument1) { ... }
constructor(argument0, argument1, ... , argumentN) { ... }</pre>

<h2 id="description">Description</h2>

<p>Un constructeur vous permet de fournir toute initialisation personnalisée qui doit être effectuée avant que toute autre méthode puisse être appelée sur un objet instancié.</p>

<pre class="brush: js">class Person {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const otto = new Person('Otto');

otto.introduce();</pre>

<p>Si vous ne fournissez pas votre propre constructeur, alors un constructeur par défaut sera fourni pour vous. Si votre classe est une classe de base, le constructeur par défaut est vide :</p>

<pre class="brush: js">constructor() {}</pre>

<p>Si votre classe est une classe dérivée, le constructeur par défaut appelle le constructeur parent, en transmettant tous les arguments qui ont été fournis :</p>

<pre class="brush: js">constructor(...args) {
  super(...args);
}</pre>

<p>Cela permet à un code comme celui-ci de fonctionner :</p>

<pre class="brush: js">class ValidationError extends Error {
  printCustomerMessage() {
    return `La validation a échoué :-( (détails : ${this.message})`;
  }
}

try {
  throw new ValidationError("Numéro de téléphone invalide");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Il s'agit d'une erreur au lieu de ValidationError !
    console.log(error.printCustomerMessage());
  } else {
    console.log('Erreur inconnue', error);
    throw error;
  }
}</pre>

<p>La classe <code>ValidationError</code> n'a pas besoin d'un constructeur explicite, car elle n'a pas besoin de faire d'initialisation personnalisée. Le constructeur par défaut se charge alors d'initialiser le parent <code>Error</code> à partir de l'argument qui lui est fourni.</p>

<p>Cependant, si vous fournissez votre propre constructeur, et que votre classe dérive d'une certaine classe parente, alors vous devez appeler explicitement le constructeur de la classe parente en utilisant <code>super</code>. Par exemple :</p>

<pre class="brush: js">class ValidationError extends Error {
  constructor(message) {
    super(message);  // appelle le constructeur de la classe parent
    this.name = 'ValidationError';
    this.code = '42';
  }

  printCustomerMessage() {
     return `La validation a échoué :-( (détails : ${this.message}, code : ${this.code})`;
  }
}

try {
  throw new ValidationError("Numéro de téléphone invalide");
} catch (error) {
   if (error instanceof ValidationError) {
    console.log(error.name); // Maintenant, c'est une ValidationError !
    console.log(error.printCustomerMessage());
  } else {
    console.log('Unknown error', error);
    throw error;
  }
}</pre>

<p>Il ne peut y avoir qu'une seule méthode spéciale portant le nom « <code>constructor</code> » dans une classe. Avoir plus d'une occurrence d'une méthode <code>constructor</code> dans une classe lancera une erreur <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"><code>SyntaxError</code></a>.</p>

<h2 id="examples">Exemples</h2>

<h3 id="using_the_constructor_method">Utilisation de la méthode du <code>constructor</code></h3>

<p>Cet extrait de code est tiré de l'<a href="https://github.com/GoogleChrome/samples/blob/gh-pages/classes-es6/index.html">échantillon de classes</a> (<a href="https://googlechrome.github.io/samples/classes-es6/index.html">démo en direct</a>).</p>

<pre class="brush: js">class Square extends Polygon {
  constructor(length) {
    // Ici, on appelle le constructeur de la classe parente avec des longueurs
    // fournies pour la largeur et la hauteur du polygone.
    super(length, length);
    // NOTE : Dans les classes dérivées, `super()` doit être appelé avant de pouvoir
    // utiliser `this`. Si vous ne le faites pas, cela provoquera une ReferenceError.
    this.name = 'Carré';
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this.height = value**0.5;
    this.width = value**0.5;
  }
}</pre>

<h3 id="another_example">Un autre exemple</h3>

<p>Ici, le prototype de la classe <code>Square</code> est modifié — mais le constructeur de sa classe de base <code>Polygon</code> est toujours appelé lorsqu'une nouvelle instance d'un carré est créée.</p>

<pre class="brush: js">class Polygon {
    constructor() {
        this.name = "Polygone";
    }
}

class Square extends Polygon {
    constructor() {
        super();
    }
}

class Rectangle {}

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

console.log(Object.getPrototypeOf(Square.prototype) === Polygon.prototype); //false
console.log(Object.getPrototypeOf(Square.prototype) === Rectangle.prototype); //true

let newInstance = new Square();
console.log(newInstance.name); // Polygone</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/super"><code>super()</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/class">Expression <code>class</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Statements/class">Déclaration <code>class</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Classes"><code>Classes</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor">Object.prototype.constructor</a>
  </li>
</ul>
