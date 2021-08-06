---
title: Function.prototype.apply()
slug: Web/JavaScript/Reference/Global_Objects/Function/apply
tags:
  - Function
  - JavaScript
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Function/apply
original_slug: Web/JavaScript/Reference/Objets_globaux/Function/apply
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>apply()</strong></code> appelle une fonction en lui passant une valeur <code>this</code> et des <code>arguments</code> sous forme d'un tableau (ou d'un objet <a href="/fr/docs/Web/JavaScript/Guide/Objets_élémentaires_JavaScript#Manipuler_des_objets_semblables_aux_tableaux">semblable à un tableau</a>).</p>

<div class="note"><p><strong>Note :</strong> Bien que la syntaxe de cette fonction ressemble à celle de {{jsxref("Function.call", "call()")}}, elle est différente car <code>call()</code> accepte <strong>une liste d'arguments</strong>, tandis que <code>apply()</code> accepte un <strong>tableau d'arguments</strong>.</p></div>

<div class="note"><p><strong>Note :</strong> Quand on utilise {{jsxref("undefined")}} ou {{jsxref("null")}} comme premier argument pour cette fonction, on peut obtenir un résultat similaire avec la <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Syntaxe_décomposition">syntaxe de décomposition</a>.</p></div>

<div>{{EmbedInteractiveExample("pages/js/function-apply.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>fun</var>.apply(<var>thisArg, </var>[<var>argsArray</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>thisArg</code></dt>
 <dd>La valeur de <code>this</code> fournie pour l'appel à la fonction <em><code>fun</code></em>. On notera que, sous certaines conditions, <code>this</code> peut ne pas être la valeur exacte vue par la méthode : si la méthode est une fonction utilisée en mode {{jsxref("Strict_mode", "mode non-strict", "", 1)}}, {{jsxref("null")}} et {{jsxref("undefined")}} seront remplacées par l'objet global, et les valeurs primitives seront encapsulées. Cet argument n'est pas optionnel.</dd>
 <dt><code>argsArray</code></dt>
 <dd>Un objet semblable à un tableau qui définit les arguments avec lesquel <em><code>fun</code></em> devrait être appelée, ou {{jsxref("null")}} ou {{jsxref("undefined")}} si aucun argument n'est passé à la fonction. Avec ECMAScript 5, ces arguments peuvent être représentés par un objet semblable un tableau. Voir ci-après pour plus d'informations sur <a href="#compat">la compatibilité des navigateurs</a>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le résultat obtenu en appelant la fonction avec la valeur <code>this</code> indiquée et les arguments fournis.</p>

<h2 id="Description">Description</h2>

<p>Il est possible d'utiliser un objet <code>this</code> différent lors de l'appel à une fonction existante. <code>this</code> fait référence à l'objet courant, l'objet appelant. Avec <code>apply</code>, on peut écrire une méthode une seule fois et en hériter dans un autre objet, sans avoir à la réécrire dans le nouvel objet.</p>

<p><code>apply</code> est similaire à {{jsxref("Function.call", "call()")}}, hormis pour le type d'arguments supporté. Il est possible d'utiliser un tableau à la place d'un ensemble de paramètres. Avec <code>apply</code>, il est également possible d'utiliser un littéral de tableau, par exemple, <code><em>fun</em>.apply(this, ['manger', 'bananes'])</code>, ou un objet {{jsxref("Array")}}, par exemple, <code><em>fun</em>.apply(this, new Array('manger', 'bananes'))</code>.</p>

<p>On peut aussi passer {{jsxref("Fonctions/arguments", "arguments ")}} en tant que paramètre <code>argsArray</code>. <code>arguments</code> étant une variable locale à la fonction. Celle-ci peut également être utilisée pour tous les arguments non spécifiés de l'objet appelé. Ainsi, il n'est pas nécessaire de connaître les arguments de l'objet appelé lors d'un appel à la méthode <code>apply</code>. <code>arguments</code> peut être utilisé pour passer tous les arguments à l'objet appelé. L'objet appelé gèrera alors la manipulation des arguments.</p>

<p>Depuis la cinquième édition d'ECMAScript, il est possible d'utiliser des objet semblables à des tableaux à la place. En pratique tout objet possédant une propriété <code>length</code> et une propriété entière comprise entre <code>[0..length[</code> est un objet semblable à un tableau. On peut ainsi, par exemple, utiliser un objet {{domxref("NodeList")}} ou un objet quelconque comme <code>{'length': 2, '0': 'manger', '1': 'bananes'}</code>.</p>

<div class="note">
<p><strong>Note :</strong> Beaucoup de navigateurs, y compris Chrome 14 et Internet Explorer 9 n'acceptent pas encore un objet semblable à un tableau, ils déclencheront un exception.</p>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_apply_pour_chaîner_des_constructeurs">Utiliser <code>apply</code> pour chaîner des constructeurs</h3>

<p>Il est possible d'utiliser <code>apply</code> afin de chaîner les {{jsxref("Opérateurs/L_opérateur_new", "constructeurs","",1)}} d'un objet, de façon sembable au chaînage utilisé en java. Dans l'exemple suivant, on crée une {{jsxref("Function")}} globale appelée <code>construct</code>, qui permet d'utiliser un objet de type <code>Array</code> associé à un constructeur au lieu d'une liste d'arguments.</p>

<pre class="brush: js">Function.prototype.construct = function (aArgs) {
  var nouvelObjet = Object.create(this.prototype);
  this.apply(nouvelObjet, aArgs);
  return nouvelObjet;
};
</pre>

<div class="note">
<p><strong>Note :</strong> La méthode {{jsxref("Object.create()")}} utilisée ci-avant est relativement nouvelle. Pour une autre méthode qui utilise les <code>closure</code>, on pourra utiliser :</p>

<pre class="brush: js">Function.prototype.construct = function(aArgs) {
  var fConstructeur = this, fNouveauConstructeur = function() {
    fConstructeur.apply(this, aArgs);
  };
  fNouveauConstructeur.prototype = fConstructeur.prototype;
  return new fNouveauConstructeur();
};</pre>
</div>

<p>Exemple d'utilisation :</p>

<pre class="brush: js">function MonConstructeur () {
    for (var nProp = 0; nProp &lt; arguments.length; nProp++) {
        this["propriété" + nProp] = arguments[nProp];
    }
}

var monTableau = [4, "Coucou monde !", false];
var monInstance = MonConstructeur.construct(monTableau);

console.log(monInstance.propriété1); // "Coucou monde !"
console.log(monInstance instanceof MonConstructeur); // "true"
console.log(monInstance.constructor); // "MonConstructeur"
</pre>

<div class="note">
<p><strong>Note :</strong> On pourrait également utiliser {{jsxref("Object/__proto__", "Object.__proto__")}}</p>

<pre class="brush: js">Function.prototype.construct = function (aArgs) {
  var oNew = {};
  oNew.__proto__ = this.prototype;
  this.apply(oNew, aArgs);
  return oNew;
};
</pre>

<p>ou encore le constructeur {{jsxref("Function")}} :</p>

<pre class="brush: js">Function.prototype.construct = function (aArgs) {
  var fNewConstr = new Function("");
  fNewConstr.prototype = this.prototype;
  var oNew = new fNewConstr();
  this.apply(oNew, aArgs);
  return oNew;
};
</pre>
</div>

<div class="note"><p><strong>Note :</strong> Attention, cette méthode non-native <code>Function.construct</code> ne fonctionnera pas avec certains contructeurs natifs (tels que {{jsxref("Date", "Date")}}). Dans ce cas précis, on peut utiliser la méthode {{jsxref("Function.bind")}} (pour exemple, si on prend le tableau suivant <code>[2012, 11, 4]</code> utilisé sur le constructeur de l'objet <code>Date</code> : on peut écrire ceci : <code>new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))()</code> – cependant cela reste une pratique à éviter si possible et à ne pas utiliser en dans un environnement de production).</p></div>

<h3 id="Utiliser_apply_et_des_fonctions_natives">Utiliser <code>apply</code> et des fonctions natives</h3>

<p>Un usage singulier de <code>apply</code> permet d'appeler des fonctions natives pour réaliser par exemple des tâches qui autrement auraient nécessité une boucle sur toutes les valeurs d'un tableau. Pour illustrer ce concept, on prend l'exemple de <code>Math.max</code>/<code>Math.min</code> qui permettent d'extraire la valeur maximum/minimale de notre tableau.</p>

<pre class="brush: js">/* min/max tableau de nombres */
var nombres = [5, 6, 2, 3, 7];

/* usage de Math.min/Math.max et de la méthode apply */
var max = Math.max.apply(null, nombres);
/* Equivalent à Math.max(nombres[0], ...)
  ou Math.max(5, 6, ..) */

var min = Math.min.apply(null, nombres);

/* vs. algorithme trivial avec une boucle */
max = -Infinity, min = +Infinity;

for (var i = 0; i &lt; nombres.length; i++) {
  if (nombres[i] &gt; max)
    max = nombres[i];
  if (nombres[i] &lt; min)
    min = nombres[i];
}</pre>

<p>Note : l'utilisation de <code>apply</code> peut provoquer l'atteinte du seuil limite du nombres d'arguments supporté par le moteur Javascript. Les conséquences de cette utilisation abusive (on évoque plus de 10000 arguments) peuvent varier selon les moteurs Javascript (JavaScript contient une limite en dur de <a class="link-https" href="https://bugs.webkit.org/show_bug.cgi?id=80797">65536</a>), car une liberté subsiste quant à l'implémentation du moteur. Des moteurs lèveront une exception si le seuil est atteint. Il est donc préférable d'apporter une attention toute particulière au nombre d'arguments passés. (Illustrerons ce cas dans l'exemple suivant avec un moteur factice capable de ne gérer que 4 arguments au maximum (les limites natives sont, bien sûr, plus élevées), et reprenons les arguments de l'exemple précédent <code>5, 6, 2, 3</code> passés à la méthode <code>apply</code> plutôt que notre tableau entier.) Imaginons que notre tableau soit progressivement peuplé de milliers d'éléments, une stratégie spécifique devra être appliquée, par exemple en appliquant la méthode apply sur des portions du tableau:</p>

<pre class="brush: js">function minimumDuTableau(tab) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, longueur = tab.length; i &lt; len; i += QUANTUM) {
    var submin = Math.min.apply(null,
                                tab.slice(i, Math.min(i + QUANTUM, longueur)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minimumDuTableau([5, 6, 2, 3, 7]);
</pre>

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
   <td>{{SpecName('ES5.1', '#sec-15.3.4.3', 'Function.prototype.apply')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-function.prototype.apply', 'Function.prototype.apply')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-function.prototype.apply', 'Function.prototype.apply')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Function.apply")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'objet {{jsxref("Fonctions/arguments", "arguments")}}</li>
 <li>{{jsxref("Function.prototype.bind()")}}</li>
 <li>{{jsxref("Function.prototype.call()")}}</li>
 <li>{{jsxref("Fonctions", "Les fonctions et portées de fonctions", "", 1)}}</li>
 <li>{{jsxref("Reflect.apply()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Syntaxe_décomposition">La syntaxe de décomposition permettant d'exploser un tableau</a></li>
</ul>
