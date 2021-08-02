---
title: L'opérateur this
slug: Web/JavaScript/Reference/Operators/this
tags:
  - JavaScript
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/this
original_slug: Web/JavaScript/Reference/Opérateurs/L_opérateur_this
---
<div>{{jsSidebar("Operators")}}</div>

<p>En JavaScript, <strong>le mot-clé <code>this</code></strong> se comporte légèrement différemment des autres langages de programmation. Son comportement variera également légèrement selon qu'on utilise le <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a> ou le mode non-strict.</p>

<p>Dans la plupart des cas, la valeur de <code>this</code> sera déterminée à partir de la façon dont une fonction est appelée. Il n'est pas possible de lui affecter une valeur lors de l'exécution et sa valeur peut être différente à chaque fois que la fonction est appelée. La méthode {{jsxref("Function.prototype.bind()","bind()")}} a été introduite avec ECMAScript 5 pour <a href="#bind">définir la valeur de <code>this</code> pour une fonction, indépendamment de la façon dont elle est appelée</a>. ECMAScript 2015 (ES6) a ajouté <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es">les fonctions fléchées</a> dans lesquelles <code>this</code> correspond à la valeur du contexte englobant.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-this.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">this</pre>

<h3 id="Valeur">Valeur</h3>

<p>L'objet JavaScript représentant le contexte dans lequel le code courant est exécuté.</p>

<h2 id="Dans_le_contexte_global">Dans le contexte global</h2>

<p>Dans le contexte global d'exécution (c'est-à-dire, celui en dehors de toute fonction), <code>this</code> fait référence à l'objet global (qu'on utilise ou non le mode strict).</p>

<pre class="brush:js">// Si l'environnement de script est un navigateur,
// l'objet window sera l'objet global
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37

this.b = "MDN";
console.log(window.b); // "MDN"
console.log(b);        // "MDN"
</pre>

<div class="note">
<p><strong>Note :</strong> Il est également possible d'accéder au contexte global avec la propriété {{jsxref("globalThis")}} quel que soit le contexte utilisé pour l'exécution.</p>
</div>

<h2 id="Dans_le_contexte_dune_fonction">Dans le contexte d'une fonction</h2>

<p>S'il est utilisé dans une fonction, la valeur de <code>this</code> dépendra de la façon dont la fonction a été appelée.</p>

<h3 id="Avec_un_appel_simple">Avec un appel simple</h3>

<pre class="brush:js">function f1(){
  return this;
}

// Dans un navigateur
f1() === window; // true (objet global)

// Côté serveur (ex. Node)
f1() === global; // true
</pre>

<p>Dans cet exemple, la valeur de <code>this</code> n'est pas définie lors de l'appel. Le code n'étant pas en mode strict, <code>this</code> doit toujours être un objet et ce sera donc l'objet global (soit {{domxref("Window", "window")}} pour un navigateur).</p>

<pre class="brush:js">function f2(){
  "use strict"; // on utilise le mode strict
  return this;
}

f2() === undefined; // true
</pre>

<p>En mode strict, la valeur de <code>this</code> est conservée (il reste le même) entre le moment de sa définition et l'entrée dans le contexte d'exécution. S'il n'est pas défini, il reste <code>undefined</code>. Il pourrait être défini avec n'importe quelle autre valeur, telle que <code>null</code> ou <code>42</code> ou <code>"Je ne suis pas this"</code>.</p>

<div class="note"><p><strong>Note :</strong> Dans ce deuxième exemple,<code>this</code> vaut {{jsxref("undefined")}} car <code>f2</code> a été appelé sans « base » (ex. : <code>window.f2()</code>). Cette fonctionnalité ne fut pas correctement implémentée dans certains navigateurs aux débuts du mode strict, en effet, certains renvoyaient alors l'objet <code>window</code>.</p></div>

<h3 id="call_et_apply"><code>call</code> et <code>apply</code></h3>

<p>Pour passer <code>this</code> d'un contexte à un autre, on pourra utiliser {{jsxref("Function.prototype.call()", "call()")}} ou {{jsxref("Function.prototype.apply()", "apply()")}} :</p>

<pre class="brush: js">// Un objet peut être passé en premier argument
// de call ou de apply
var obj = { a: "Toto" };

// Ici, on déclare une variable et la variable est affectée à l'objet global window comme propriété de celui-ci
var a = "Global";

function whatsThis(arg) {
  // La valeur de this ici dépend de la façon
  // dont la fonction est appelée
  return this.a;
}

whatsThis();          // 'Global' car celui-ci dans la fonction n'est pas défini, il est donc défini par défaut sur l'objet global window
whatsThis.call(obj);  // "Toto"
whatsThis.apply(obj); // "Toto"
</pre>

<p>Lorsque le mot-clé <code>this</code> est utilisé dans le corps d'une fonction, il est possible d'utiliser les méthodes {{jsxref("Function.prototype.call()", "call()")}} ou {{jsxref("Function.prototype.apply()", "apply()")}} pour lier <code>this</code> à un objet donné. Toutes les fonctions héritent de ces méthodes grâce à {{jsxref("Function.prototype")}}.</p>

<pre class="brush:js">function ajout(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};

// Le premier paramètre correspond à l'objet qu'on souhaite
// lier à 'this', les paramètres suivants sont les arguments
// à utiliser dans l'appel de la fonction
ajout.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// Le premier paramètre correspond à l'objet qu'on souhaite
// lier à 'this', le second paramètre est le tableau dont les
// les éléments sont les arguments à passer à la fonction
ajout.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34
</pre>

<p>Note : En mode non-strict, si la valeur à lier à <code>this</code>, passée à <code>call</code> ou <code>apply</code>, n'est pas un objet, le moteur JavaScript tentera de la convertir en un objet grâce à l'opération interne <code>ToObject</code>. Si la valeur est d'un type primitif autre qu'objet, <code>7</code> ou <code>'toto'</code> par exemple, elle sera convertie en un objet grâce au constructeur associé. Ainsi, on aura le nombre <code>7</code> converti en un objet grâce à <code>new Number(7)</code> et la chaîne <code>'toto'</code> convertie en objet grâce à <code>new String('toto')</code>.</p>

<pre class="brush:js">function truc() {
  console.log(Object.prototype.toString.call(this));
}

truc.call(7);     // [object Number]
truc.call('foo'); // [object String]
</pre>

<h3 id="La_méthode_bind">La méthode <code>bind</code></h3>

<p>Avec ECMAScript 5, une nouvelle fonction fut introduite : {{jsxref("Function.prototype.bind()")}}. Lorsqu'on appelle <code>f.bind(unObjet)</code>, on crée une nouvelle fonction qui possède le même corps et la même portée que <code>f</code>, mais où <code>this</code> sera lié, de façon permanente, au premier argument passé à <code>bind</code>, quelle que soit la façon dont la méthode est utilisée.</p>

<pre class="brush:js">function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var h = g.bind({a:"coucou"}); // bind ne fonctionne qu'une seule fois
console.log(h()); // azerty

var o = {a:37, f:f, g:g, h:h};
console.log(o.a, o.f(), o.g(), o.h()); // 37, 37, azerty, azerty
</pre>

<h3 id="Avec_les_fonctions_fléchées">Avec les fonctions fléchées</h3>

<p>En utilisant <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fléchées">les fonctions fléchées</a>, <code>this</code> correspond à la valeur de <code>this</code> utilisé dans le contexte englobant. Lorsqu'on utilise une fonction fléchée dans du code global, <code>this</code> sera l'objet global :</p>

<pre class="brush: js">var objetGlobal = this;
var toto = (() =&gt; this);
console.log(toto() === objetGlobal); // true</pre>

<p>Peu importe la façon dont <code>toto</code> sera appelée, <code>this</code> sera toujours l'objet global. Cela est également valable pour les méthodes d'objet (où généralement <code>this</code> correspond à l'objet courant) ou lorsque <code>call</code>, <code>apply</code> ou <code>bind</code> sont utilisés :</p>

<pre class="brush: js">// Appelé comme la méthode d'un objet
var obj = {toto: toto};
console.log(obj.toto() === objetGlobal); // true

// Ici on utilise call
console.log(toto.call(obj) === objetGlobal); // true
// Là on utilise bind
toto = toto.bind(obj);
console.log(toto() === objetGlobal); // true</pre>

<p>Quelle que soit la méthode utilisée le <code>this</code> de <code>toto</code> sera défini avec la valeur qu'il avait lors de la création (dans l'exemple précédent, il s'agit de l'objet global). Cela vaut également pour les fonctions fléchées créées dans d'autres fonctions : <code>this</code> prendra la valeur de <code>this</code> dans le contexte englobant.</p>

<pre class="brush: js">// On crée un objet obj qui a une méthode truc
// qui renvoie une fonction qui renvoie la
// valeur de this.
// La fonction qui est renvoyée est créée sous
// la forme d'une fonction fléchée. this est
// donc fixé de façon permanente avec la valeur
// de this du contexte englobant.
var obj = { truc : function() {
                    var x = (() =&gt; this);
                    return x;
                  }
          };
// On appelle truc comme une méthode d'obj, this
// vaudra donc obj. On récupère la fonction
// renvoyée par truc et on en stocke une référence
// avec la variable fn
var fn = obj.truc();

// On appelle fn sans définir this, par défaut
// en mode strict cela correspondrait à l'objet
// global ou à undefined
console.log(fn() === obj); // true

// Attention à ne pas référence la méthode d'obj
// sans l'appeler
var fn2 = obj.truc;
// Appeler le this de la fonction fléchée dans ce contexte
// renverra window car c'est le this associé à fn2 (qui
// correspond au contexte global)
console.log(fn2()() == window); // true</pre>

<p>Dans l'exemple précédent, la fonction affectée à <code>obj.truc</code> renvoie une autre fonction créée sous la forme d'une fonction fléchée. Par conséquent, <code>this</code> vaut toujours <code>obj.truc</code> lorsque la fonction est appelée. Lorsque la fonction est renvoyée, <code>this</code> continue de correspondre à la valeur initiale. Dans ce code, <code>this</code> vaut <code>obj</code> et garde cette valeur, même lorsqu'il est appelé plus tard.</p>

<h3 id="En_tant_que_méthode_dun_objet">En tant que méthode d'un objet</h3>

<p>Lorsqu'une fonction est appelée comme méthode d'un objet, <code>this</code> correspondra à l'objet possédant la méthode qu'on appelle.</p>

<p>Ainsi, dans l'exemple suivant, lorsqu'on appelle <code>o.f()</code>, le <code>this</code> contenu à l'intérieur de la fonction correspond à l'objet <code>o</code>.</p>

<pre class="brush:js">var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // 37
</pre>

<p>On notera que ce comportement n'est pas du tout affecté par la façon ou l'endroit de la définition de la fonction. Dans l'exemple précédent, on aurait très bien pu définir la fonction plus tard et la rattacher à une propriété de <code>o</code> plutôt que de la déclarer de cette façon. On aura le même résultat en faisant ainsi :</p>

<pre class="brush:js">var o = {prop: 37};

function indépendante() {
  return this.prop;
}

o.f = indépendante;

console.log(o.f()); // 37
</pre>

<p>On voit ici que ce qui importe est la façon dont la fonction est appelée et non pas la façon dont elle est définie. Ici la fonction est appelée comme une propriété (méthode) de <code>o</code>.</p>

<p>De la même façon, <code>this</code> n'est affecté que par la référence la plus proche. Autrement dit, dans l'exemple suivant quand on appelle la fonction <code>o.b.g</code>, on appelle la méthode <code>g</code> de l'objet <code>o.b</code>. Ainsi, au moment de l'exécution, <code>this</code> fera référence à <code>o.b</code>. Le fait que cet objet soit une propriété de <code>o</code> n'a aucun impact : seule la référence objet la plus proche compte.</p>

<pre class="brush:js">o.b = {g: indépendante, prop: 42};
console.log(o.b.g()); // 42
</pre>

<h4 id="this_sur_la_chaîne_de_prototypes_de_lobjet"><code>this</code> sur la chaîne de prototypes de l'objet</h4>

<p>Ce qui a été vu ci-avant est également applicable pour les méthodes qui sont présentes sur la chaîne de prototypes de l'objet. Si une méthode se situe sur la chaîne de prototype, <code>this</code> fera référence à l'objet appelant (de la même façon que si la méthode était une propriété directe de l'objet).</p>

<pre class="brush:js">var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5
</pre>

<p>Dans cet exemple, l'objet qui est affecté à la variable <code>p</code> ne possède pas directement la propriété <code>f</code>, il en hérite de par son prototype. Cela n'impacte en rien la détermination de <code>this</code> car la recherche de la propriété <code>f</code> remonte le long de la chaîne de prototype et s'arrête à <code>o</code>. Au début de cette recherche, on a une référence à <code>p.f</code>, aussi <code>this</code> fera référence à l'objet représenté par <code>p</code>. Autrement dit <code>f</code> étant appelé comme une méthode de <code>p</code>, <code>this</code> fera ici référence à <code>p</code>. Cette fonctionnalité fait partie des caractéristiques de l'héritage prototypal de JavaScript.</p>

<h4 id="this_dans_un_getter_ou_setter"><code>this</code> dans un <em>getter</em> ou <em>setter</em></h4>

<p>Ici aussi, on a le même principe lorsque la fonction est appelée à partir d'un accesseur (<em>getter</em>) ou d'un mutateur (<em>setter</em>). Une fonction utilisée comme accesseur ou mutateur verra son <code>this</code> lié à l'objet à partir duquel on souhaite accéder/changer la propriété.</p>

<pre class="brush:js">function moduleRéel(){
  return Math.sqrt(this.re * this.re + this.im * this.im);
}

var o = {
  re: 1,
  im: -1,
  get phase(){
    return Math.atan2(this.im, this.re);
  }
};

Object.defineProperty(o, 'moduleRéel', {
    get: moduleRéel, enumerable:true, configurable:true});

console.log(o.phase, o.moduleRéel); // logs -0.78 1.4142
</pre>

<h3 id="En_tant_que_constructeur">En tant que constructeur</h3>

<p>Lorsqu'une fonction est utilisée comme constructeur (c'est-à-dire qu'elle est invoquée avec le mot-clé {{jsxref("Opérateurs/L_opérateur_new","new")}}), le <code>this</code> correspondant sera lié au nouvel objet en train d'être construit.</p>

<div class="note">
<p><strong>Note :</strong> Par défaut, un constructeur renverra l'objet auquel <code>this</code> fait référence. Cependant si la valeur de retour du constructeur est définie et est un objet, ce sera elle qui sera renvoyée (sinon ce sera la valeur de <code>this</code>).</p>
</div>

<pre class="brush:js">/*
 * Les constructeurs fonctionnent de la façon suivante :
 *
 * function MonConstructeur(){
 *   // le corps de la fonction
 *   // on crée des propriétés sur |this|
 *   // par exemple
 *   this.fum = "nom";
 *   // etc.
 *
 *   // Si la fonction utilise une instruction de
 *   // retour (return) et renvoie un objet
 *   // ce sera cet objet qui sera le résultat de
 *   // l'expression |new|.
 *   // Sinon, le résultat sera l'objet
 *   // lié à |this|
 *   // (ce second cas est celui qu'on rencontre
 *   // fréquemment).
 * }
 */

function C(){
  this.a = 37;
}

var o = new C();
console.log(o.a); // 37


function C2(){
  this.a = 37;
  return {a:38};
}

o = new C2();
console.log(o.a); // 38
</pre>

<p>Dans le dernier exemple (<code>C2</code>), on renvoie un objet lors de la construction. L'objet qui était lié <code>this</code> est alors abandonné. (L'instruction "<code>this.a = 37;</code>" devient alors totalement inutile, bien qu'elle soit exécutée, elle n'aura aucun effet de bord.)</p>

<h3 id="En_tant_que_gestionnaire_dévénement_DOM">En tant que gestionnaire d'événement DOM</h3>

<p>Lorsqu'une fonction est utilisée comme gestionnaire d'événement (<em>event handler</em>), le <code>this</code> correspondant prendra la valeur de l'élément ayant déclenché l'événement (certains navigateurs ne suivent pas cette convention et les gestionnaires sont ajoutés dynamiquement avec d'autres méthodes qu'{{domxref("EventTarget.addEventListener()", "addEventListener()")}}).</p>

<pre class="brush:js">// Lorsque cette fonction est appelée
// comme listener, l'élément associé
// sera coloré en bleu
function bluify(e){
  // Cette proposition est toujours vraie
  console.log(this === e.currentTarget);

  // true lorsque currentTarget et target correspondent
  // au même objet
  console.log(this === e.target);

  this.style.backgroundColor = '#A5D9F3';
}

// On obtient une liste de tous les éléments
// contenus dans le document
var elements = document.getElementsByTagName('*');

// On ajout le listener bluify pour réagier au clic
// Quand on clique sur un élément, il deviendra bleu
for(var i=0 ; i&lt;elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}</pre>

<h3 id="En_tant_que_gestionnaire_dévénements_in-line">En tant que gestionnaire d'événements <em>in-line</em></h3>

<p>Lorsque le code est appelé depuis un gestionnaire d'événement « en ligne » (<em>in-line</em>), la valeur de <code>this</code> correspondra à l'élément du DOM sur lequel on a placé le <em>listener</em>. Ainsi :</p>

<pre class="brush:js">&lt;button onclick="console.log(this.tagName.toLowerCase());"&gt;
  Afficher this
&lt;/button&gt;
</pre>

<p>montrera le texte <code>button</code> lorsqu'on cliquera dessus. Attention, seul le code externe verra la valeur de <code>this</code> affectée de cette façon :</p>

<pre class="brush:js">&lt;button onclick="console.log((function(){return this})());"&gt;
  Afficher le this interne
&lt;/button&gt;
</pre>

<p>Ici, on utilise <code>this </code>à l'intérieur d'une fonction et il n'est pas défini en amont. Il renvoie donc l'objet global (l'objet <code>window</code> pour un navigateur avec du code non-strict).</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-this-keyword', 'Le mot-clé this')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-this-keyword', 'Le mot-clé this')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-11.1.1', 'Le mot-clé this')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-11.1.1', 'Le mot-clé this')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-11.1.1', 'Le mot-clé this')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.0.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.this")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">Le mode strict</a></li>
 <li><a href="https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&amp;%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes">this &amp; les prototypes objet</a> de Kyle Simpson sur GitHub (en anglais)</li>
 <li><a href="https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/">Un article explicatif sur <code>this</code> (en anglais)</a></li>
 <li>La propriété {{jsxref("globalThis")}} qui permet d'accéder à l'objet global <code>this</code></li>
</ul>
