---
title: Function.prototype.bind()
slug: Web/JavaScript/Reference/Global_Objects/Function/bind
tags:
  - ECMAScript 2015
  - ECMAScript 5
  - Function
  - JavaScript
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Function/bind
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/bind
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>bind()</strong></code> crée une nouvelle fonction qui, lorsqu'elle est appelée, a pour contexte <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this">this</a></code> la valeur passée en paramètre et éventuellement une suite d'arguments qui précéderont ceux fournis à l'appel de la fonction créée.</p>

<div>{{EmbedInteractiveExample("pages/js/function-bind.html", "taller")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">let boundFunc = <var>fun</var>c.bind(<var>thisArg</var>[, <var>arg1</var>[, <var>arg2</var>[, ...]]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>thisArg</code></dt>
 <dd>La valeur que l'on doit passer est le paramètre <code>this</code> de la fonction cible <em><code>func</code></em> quand la fonction est appelée. La valeur est ignorée si la fonction liée est construite en utilisant l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Lorsque vous utilisez <code>bind</code> pour créer une fonction (fournie comme un rappel) dans un <code>setTimeout</code>, toute valeur primitive passée comme <code>thisArg</code> est convertie en objet. Si aucun argument n'est fourni dans <code>bind</code>, le <code>this</code> de cette fonction est traité comme le <code>thisArg</code> de la nouvelle fonction.</dd>
 <dt><code>arg1, arg2, ...</code> {{optional_inline}}</dt>
 <dd>Arguments à faire précéder aux arguments fournis à la fonction liée lors de l'invocation de <em><code>func</code></em>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une copie de la fonction fournie avec la valeur <code>this</code> indiquée et les arguments initiaux fournis.</p>

<h2 id="Description">Description</h2>

<p>La fonction <code>bind()</code> crée une nouvelle <strong>fonction liée</strong>, qui est un <em>objet de fonction exotique</em> (un terme de l'ECMAScript 2015) qui enveloppe l'objet de fonction original. L'appel de la fonction liée entraîne généralement l'exécution de sa fonction enveloppée.</p>

<p>Une fonction liée possède les propriétés internes suivantes :</p>

<dl>
 <dt><strong><code>[[BoundTargetFunction]]</code> </strong></dt>
 <dd>L'objet de fonction enveloppé</dd>
 <dt><code><strong>[[BoundThis]]</strong></code></dt>
 <dd>La valeur qui est toujours transmise est la valeur <code>this</code> lors de l'appel de la fonction enveloppée.</dd>
 <dt><code><strong>[[BoundArguments]]</strong></code></dt>
 <dd>Une liste de valeurs dont les éléments sont utilisés comme premiers arguments pour tout appel à la fonction enveloppée.</dd>
 <dt><code><strong>[[Call]]</strong></code></dt>
 <dd>Exécute le code associé à cet objet. Invoqué par une expression d'appel de fonction. Les arguments de la méthode interne sont constitués d'une valeur <code>this</code> et d'une liste contenant les arguments passés à la fonction par une expression d'appel.</dd>
</dl>

<p>Lorsqu'une fonction liée est appelée, elle appelle la méthode interne <code>[[Call]]</code> dans <code>[[BoundTargetFunction]]</code>, avec les arguments suivants <code>Call(<var>boundThis</var>, ...<var>args</var>)</code>. <var>Là où </var><code><var>boundThis</var></code> est <code>[[BoundThis]]</code>, <code><var>args</var></code> est <code>[[BoundArguments]]</code>, suivi des arguments passés par l'appel de fonction.</p>

<p>Une fonction liée peut également être construite à l'aide de l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}. Ce faisant, on agit comme si la fonction cible avait été construite. La valeur fournie <code>this</code> est ignorée, tandis que des arguments préparés sont fournis à la fonction émulée.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Créer_une_fonction_liée">Créer une fonction liée</h3>

<p>La façon la plus simple d'utiliser <code>bind()</code>est de faire une fonction qui, peu importe la façon dont elle est appellée, le sera avec une certaine valeur <code>this</code> donnée.</p>

<p>Une erreur courante lorsqu'on débute en JavaScript est d'extraire une méthode d'un objet, puis plus tard d'appeler cette méthode depuis un objet et de s'attendre à utiliser l'objet original en tant que valeur de <code>this</code> (par exemple en utilisant cette méthode dans un <em>callback</em>). Sans précaution, cependant, l'objet original est perdu. Créer une fonction liée depuis la méthode, en utilisant l'objet original, résout simplement le problème :</p>

<pre class="brush: js">this.x = 9; // en dehors de tout contexte,
            // pour un navigateur, this est
            // l'objet window
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, car ici, this fait référence à l'objet global

// On crée une nouvelle fonction à laquelle on lie module en
// tant que 'this'
var boundGetX = getX.bind(module);
boundGetX(); // 81
</pre>

<h3 id="Fonctions_partiellement_appliquées">Fonctions partiellement appliquées</h3>

<p>Dans l'exemple suivant, on utilise <code>bind()</code> afin de créer une fonction avec des arguments initiaux prédéfinis. Ces arguments, s'il y en a, suivent le <code>this</code> fourni et sont ensuite insérés au début des arguments passés à la fonction cible, suivis par les arguments passés à la fonction liée au moment où celle-ci est appelée.</p>

<pre class="brush: js">function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Créer une fonction avec un argument prédéfini
var leadingThirtysevenList = list.bind(null, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]


function sommeArguments(arg1, arg2){
  return arg1 + arg2;
}

var ajouter37 = sommeArguments.bind(null, 37);

var resultat = ajouter37(5); // 37 + 5 = 42
</pre>

<h3 id="Utiliser_bind_avec_setTimeout">Utiliser <code>bind</code> avec <code>setTimeout</code></h3>

<p>Par défaut à l'intérieur de {{domxref("window.setTimeout()")}}, le mot-clé <code>this</code> sera attribué à l'objet {{domxref("window")}} (ou l'objet <code>global</code>). Lorsqu'on travaille avec des méthodes de classe utilisant <code>this</code> qui se réfère à l'instance, on peut lier <code>this</code> de façon explicite afin d'être certain de manipuler l'instance.</p>

<pre class="brush: js">function Fleur() {
  this.nbPétales = Math.floor( Math.random() * 12 ) + 1;
}

// On déclare floraison après un délai d'une seconde
Fleur.prototype.floraison = function() {
  window.setTimeout( this.declare.bind( this ), 1000 );
};

Fleur.prototype.declare = function() {
  console.log('Je suis une fleur avec ' +
     this.nbPétales + ' pétales !');
};

var fleur = new Fleur();
fleur.floraison();
// Après environ 1 seconde, on déclenche la méthode declare
</pre>

<h3 id="Les_fonctions_liées_utilisées_en_tant_que_constructeurs">Les fonctions liées utilisées en tant que constructeurs</h3>

<div class="warning">
<p><strong>Attention :</strong> Cette section illustre des capacités marginales et des cas aux limites concernant l'usage de la méthode bind(). Les méthodes montrées ci-après ne sont pas les façons les plus propres de faire les choses et ne devraient pas être utilisées en production.</p>
</div>

<p>Les fonctions liées sont automatiquement disponibles à l'usage pour toutes les instances initialisées avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}} sur la fonction cible. Quand une fonction liée est utilisée pour construire une valeur, le <code>this</code> fourni est ignoré. Cependant, les arguments fournis sont toujours préremplis lors de l'appel au constructeur :</p>

<pre class="brush: js">function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function() {
  return this.x + "," + this.y;
};

var p = new Point(1, 2);
p.toString(); // "1,2"


var emptyObj = {};
var YAxisPoint = Point.bind(emptyObj, 0 /* x */);
// non supporté dans le polyfill ci dessous,
// fonctionne avec le bind natif :
var YAxisPoint = Point.bind(null,0 /* x */);

var axisPoint = new YAxisPoint(5);
axisPoint.toString(); //  "0,5"

axisPoint instanceof Point; // true
axisPoint instanceof YAxisPoint; // true
new Point(17, 42) instanceof YAxisPoint; // false
</pre>

<p>On notera qu'il n'y a rien à faire de particulier pour pouvoir utiliser {{jsxref("Opérateurs/L_opérateur_new", "new")}} sur votre fonction liée. Le corollaire est qu'il n'y a rien à faire de plus pour créer une fonction liée qui soit appelée sans préfixe, même s'il est préférable d'appeler une fonction liée uniquement avec le mot-clé {{jsxref("Opérateurs/L_opérateur_new", "new")}}.</p>

<pre class="brush: js">// Cet exemple fonctionne dans votre console JavaScript
// ...(sous réserve d'avoir utilisé le code précédent)

// Peut toujours être appelé comme une fonction normale
// (même si ce n'est généralement pas l'effet )
YAxisPoint(13);

emptyObj.x + "," + emptyObj.y; // "0,13"
</pre>

<p>Si on souhaite supporter le cas où la fonction liée  d'une fonction liée en utilisant seulement <code>new</code>, ou juste en l'appellant, la fonction cible doit outrepasser cette restriction.</p>

<h3 id="Créer_des_raccourcis">Créer des raccourcis</h3>

<div>
<p><code>bind()</code> est également utile dans les cas où on souhaite créer un raccourci vers une fonction qui requiert un <code>this</code> ayant une certaine valeur.</p>

<p>Si, par exemple, on considère la fonction {{jsxref("Array.prototype.slice")}} et qu'on souhaite l'utiliser pour convertir un objet semblable à un tableau en un objet <code>array</code>, on peut créer un raccourci de cette façon :</p>

<pre class="brush: js">var slice = Array.prototype.slice;

// ... un peu plus loin

slice.apply(arguments);</pre>

<p>Avec <code>bind()</code>, il est possible de simplifier cela. Dans l'exemple qui suit <code>slice</code> est une fonction liée à la fonction {{jsxref("Function.prototype.apply()", "apply()")}} de <code>Function.prototype</code>, et <code>this</code> défini en tant que fonction {{jsxref("Array.prototype.slice()", "slice()")}} de {{jsxref("Array.prototype")}}. Cela signifie que les appels à la méthode <code>apply()</code> peuvent être éliminés :</p>

<pre class="brush: js">// pareil que "slice" dans l'exemple précédent
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unboundSlice);

// ...

slice(arguments);
</pre>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.3.4.5', 'Function.prototype.bind')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale.<br>
    Implémentée avec JavaScript 1.8.5</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-function.prototype.apply', 'Function.prototype.bind')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function.prototype.bind', 'Function.prototype.bind')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Function.bind")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Function.prototype.apply()")}}</li>
 <li>{{jsxref("Function.prototype.call()")}}</li>
 <li>{{jsxref("Fonctions", "Fonctions et portées de fonctions", "", 1)}}</li>
</ul>
