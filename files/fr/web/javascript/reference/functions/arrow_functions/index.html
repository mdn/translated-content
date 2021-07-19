---
title: Fonctions fléchées
slug: Web/JavaScript/Reference/Functions/Arrow_functions
tags:
  - ECMAScript 2015
  - Fonctions
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions/Arrow_functions
original_slug: Web/JavaScript/Reference/Fonctions/Fonctions_fléchées
---
<div>{{jsSidebar("Functions")}}</div>

<p>Une <strong>expression de fonction fléchée</strong> (<em>arrow function</em> en anglais) permet d’avoir une syntaxe plus courte que <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_function">les expressions de fonction</a> et ne possède pas ses propres valeurs pour <code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this">this</a></code>, <code><a href="/fr/docs/Web/JavaScript/Reference/Fonctions/arguments">arguments</a></code>, <code><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/super">super</a></code>, ou <code><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/new.target">new.target</a></code>. Les fonctions fléchées sont souvent <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/name">anonymes</a> et ne sont pas destinées à être utilisées pour déclarer des méthodes.</p>

<div>{{EmbedInteractiveExample("pages/js/functions-arrow.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">([param] [, param]) =&gt; {
   instructions
}

(param1, param2, …, param2) =&gt; expression
// équivalent à
(param1, param2, …, param2) =&gt; {
  return expression;
}

// Parenthèses non nécessaires quand il n'y a qu'un seul argument
param =&gt; expression

// Une fonction sans paramètre peut s'écrire avec un couple
// de parenthèses
() =&gt; {
  instructions
}

// Gestion des <a href="/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters">paramètres du reste</a> et <a href="/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters">paramètres par défaut</a>
(param1, param2, ...reste) =&gt; {
  instructions
}
(param1 = valeurDefaut1, param2, …, paramN = valeurDefautN) =&gt; {
  instructions
}

// Gestion de la décomposition pour la liste des paramètres
let f = ([a, b] = [1, 2], {x: c} = {x: a + b}) =&gt; a + b + c;
f();
</pre>

<dl>
 <dt><code>param</code></dt>
 <dd>Le nom d’un argument. S’il n'y a aucun argument, cela doit être indiqué par une paire de parenthèses <code>()</code>. S’il n'y a qu’un argument, les parenthèses ne sont pas nécessaires (ex. : <code>toto =&gt; 1</code>).</dd>
 <dt><code>instructions</code> ou <code>expression</code></dt>
 <dd>Plusieurs instructions doivent être encadrées par des accolades, {}. Une expression simple ne nécessite pas d’accolades. L’expression est également la valeur de retour implicite pour cette fonction.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Deux facteurs sont à l’origine de la conception des fonctions fléchées : une syntaxe plus courte et l’absence de <code>this</code> spécifique à la fonction. Sur ce dernier point, cela signifie qu’une fonction fléchée ne lie pas son propre {{jsxref("Opérateurs/L_opérateur_this","this")}} au sein de la fonction (il en va de même avec {{jsxref("Fonctions/arguments","arguments")}}, {{jsxref("Opérateurs/super","super")}} ou {{jsxref("Opérateurs/new.target","new.target")}}).</p>

<div class="note">
<p><strong>Note :</strong> Voir aussi l’article sur les fonctions fléchées présent sur <a href="https://tech.mozfr.org/post/2015/06/10/ES6-en-details-%3A-les-fonctions-flechees">https://tech.mozfr.org/post/2015/06/10/ES6-en-details-%3A-les-fonctions-flechees</a> (l’article original en anglais est disponible <a href="https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/">ici</a>).</p>
</div>

<h3 id="Syntaxe_plus_courte">Syntaxe plus courte</h3>

<p>Pour des aspects fonctionnels, la légèreté de la syntaxe est bienvenue. Par exemple :</p>

<pre class="brush: js">var a = [
  "We're up all night 'til the sun",
  "We're up all night to get some",
  "We're up all night for good fun",
  "We're up all night to get lucky"
];

// Sans la syntaxe des fonctions fléchées
var a2 = a.map(function (s) { return s.length });
// [31, 30, 31, 31]

// Avec, on a quelque chose de plus concis
var a3 = a.map( s =&gt; s.length);
// [31, 30, 31, 31]</pre>

<h3 id="Pas_de_this_lié_à_la_fonction">Pas de <code>this</code> lié à la fonction</h3>

<p>Jusqu’a l’apparition des fonctions fléchées, chaque nouvelle fonction définissait son propre {{jsxref("Opérateurs/L_opérateur_this","this")}} :</p>

<ul>
 <li>un nouvel objet dans le cas d’un constructeur</li>
 <li><code>undefined</code> dans les appels de fonctions en <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a></li>
 <li>l’objet courant si la fonction est appelée comme une méthode, etc.</li>
</ul>

<p>Cela a pu entraîner des confusions lorsqu’on utilisait un style de programmation orientée objet.</p>

<pre class="brush: js">function Personne () {
  // Le constructeur Personne() définit `this` comme lui-même.
  this.age = 0;

  setInterval(function grandir () {
    // En mode non strict, la fonction grandir() définit `this`
    // comme l'objet global et pas comme le `this` defini
    // par le constructeur Personne().
    this.age++;
  }, 1000);
}

var p = new Personne();</pre>

<p>Avec ECMAScript 3/5, ce problème a pu être résolu en affectant la valeur de <code>this</code> à une autre variable :</p>

<pre class="brush: js">function Personne () {
  var that = this;
  that.age = 0;

  setInterval(function grandir () {
    // La fonction callback se réfère à la variable `that`
    // qui est le contexte souhaité
    that.age++;
  }, 1000);
}</pre>

<p>Autrement, on aurait pu utiliser une <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function/bind">fonction de liaison</a> afin que la bonne valeur <code>this</code> soit passée à la fonction <code>grandir</code>.</p>

<p>Les fonctions fléchées ne créent pas de nouveau contexte, elles utilisent la valeur <code>this</code> de leur contexte. Aussi, si le mot-clé <code>this</code> est utilisé dans le corps de la fonction, le moteur recherchera la référence à cette valeur dans une portée parente. Le code qui suit fonctionne ainsi de la façon attendue car le <code>this</code> utilisé dans <code>setInterval</code> est le <code>this</code>de la portée de <code>Personne</code> :</p>

<pre class="brush: js">function Personne () {
  this.age = 0;

  setInterval(() =&gt; {
    this.age++;
    // |this| fait bien référence à l'objet personne
  }, 1000);
}

var p = new Personne();</pre>

<h4 id="Liens_avec_le_mode_strict">Liens avec le mode strict</h4>

<p>Ici <code>this</code> provient du contexte englobant, les règles du <a href="/fr/docs/Web/JavaScript/Reference/Fonctions_et_portee_des_fonctions/Strict_mode">mode strict</a> sont donc ignorées pour ce qui concerne <code>this</code>.</p>

<pre class="brush: js">var f = () =&gt; {'use strict'; return this};
f() === window; // ou l'objet global</pre>

<p>Le reste des règles du mode strict sont appliquées normalement.</p>

<h4 id="Appel_via_jsxref(Function.prototype.call())_ou_jsxref(Function.prototype.apply())">Appel via {{jsxref("Function.prototype.call()")}} ou {{jsxref("Function.prototype.apply()")}}</h4>

<p>Étant donné que <code>this</code> provient du contexte englobant, si on invoque une fonction via la méthode <code>call</code> ou <code>apply</code>, cela ne passera que des arguments mais n’aura aucun effet sur <code>this</code> :</p>

<pre class="brush: js">var ajouter = {
  base: 1,

  add : function (a) {
    var f = v =&gt; v + this.base;
    return f(a);
  },

  addViaCall: function (a) {
    var f = v =&gt; v + this.base;
    var b = {
      base: 2
    };
    return f.call(b, a);
  }
};

console.log(ajouter.add(1));
// Cela affichera 2 dans la console

console.log(ajouter.addViaCall(1));
// Cela affichera toujours 2
</pre>

<h4 id="Pas_de_liaison_pour_arguments">Pas de liaison pour <code>arguments</code></h4>

<p>Les fonctions fléchées n’exposent pas d’objet <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/arguments"><code>arguments</code></a> : <code>arguments.length</code>, <code>arguments[0]</code>, <code>arguments[1]</code>, et autres ne font donc pas référence aux arguments passés à la fonction fléchés. Dans ce cas <code>arguments</code> est simplement une référence à la variable de même nom si elle est présente dans la portée englobante :</p>

<pre class="brush: js">var arguments = [1, 2, 3];
var arr = () =&gt; arguments[0];

arr(); // 1

function toto () {
  var f = (i) =&gt; arguments[0] + i;
  // lien implicite avec arguments de toto
  return f(2);
}

toto(3); // 5</pre>

<p>Les fonctions fléchées n’ont donc pas leur propre objet <code>arguments</code>, mais dans la plupart des cas, <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/paramètres_du_reste">les paramètres du reste</a> représentent une bonne alternative :</p>

<pre class="brush: js">function toto () {
  var f = (...args) =&gt; args[0];
  return f(2);
}

toto(1); // 2</pre>

<h4 id="Les_fonctions_fléchées_comme_méthodes">Les fonctions fléchées comme méthodes</h4>

<p>Comme indiqué précédemment, les fonctions fléchées sont mieux indiquées pour les fonctions qui ne sont pas des méthodes. Prenons un exemple pour illustrer ce point</p>

<pre class="brush: js">'use strict';
var objet = {
  i: 10,
  b: () =&gt; console.log(this.i, this),
  c: function() {
    console.log(this.i, this);
  }
}

objet.b();
// affiche undefined, Window (ou l'objet global de l'environnement)

objet.c();
// affiche 10, Object {...}</pre>

<h4 id="Utiliser_prototype">Utiliser <code>prototype</code></h4>

<p>Les fonctions fléchées ne possèdent pas de prototype :</p>

<pre class="brush: js">var Toto = () =&gt; {};
console.log(Toto.prototype);
</pre>

<h4 id="Utiliser_le_mot-clé_yield">Utiliser le mot-clé <code>yield</code></h4>

<p>Le mot-clé <code><a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/yield">yield</a></code> ne peut pas être utilisé dans le corps d’une fonction fléchée (sauf si cela intervient dans une autre fonction, imbriquée dans la fonction fléchée). De fait, les fonctions fléchéees ne peuvent donc pas être utilisées comme générateurs.</p>

<h4 id="Utiliser_le_mot-clé_new">Utiliser le mot-clé <code>new</code></h4>

<p>Les fonctions fléchées ne peuvent pas être utilisées comme constructeurs et lèveront une exception si elles sont utilisées avec le mot-clé <code>new</code>.</p>

<pre class="brush: js">var Toto = () =&gt; {};
var toto = new Toto();
// TypeError: Toto is not a constructor</pre>

<h2 id="Gestion_du_corps_de_la_fonction">Gestion du corps de la fonction</h2>

<p>Les fonctions fléchées peuvent avoir une syntaxe concise ou utiliser un bloc d’instructions classique. Cette dernière syntaxe n’a pas de valeur de retour implicite et il faut donc employer l’instruction <code>return</code>.</p>

<pre class="brush: js">// méthode concise, retour implicite
var fonction = x =&gt; x * x;

// bloc classique, retour explicite
var fonction = (x, y) =&gt; { return x + y; }
</pre>

<h2 id="Renvoyer_des_littéraux_objets">Renvoyer des littéraux objets</h2>

<p>Attention à bien utiliser les parenthèses lorsqu’on souhaite renvoyer des objets avec des littéraux :</p>

<pre class="brush: js">// fonction() renverra undefined !
var fonction = () =&gt; { toto: 1 };

// SyntaxError
var fonction2 = () =&gt;  { toto: function () {} };
</pre>

<p>En effet, ici, l’analyse de l’expression trouve des blocs d’instructions au lieu de littéraux objets. Pour éviter cet effet indésirable, on pourra encadrer le littéral objet :</p>

<pre class="brush: js">var fonction = () =&gt; ({ toto: 1 });</pre>

<h2 id="Sauts_de_ligne">Sauts de ligne</h2>

<p>Il ne peut pas y avoir de saut de ligne entre les paramètres et la flèche d’une fonction fléchée.</p>

<pre class="brush: js">var func = ()
            =&gt; 1; // SyntaxError: expected expression,
                  //              got '=&gt;'
</pre>

<h2 id="Ordre_syntaxique">Ordre syntaxique</h2>

<p>La flèche utilisée pour une fonction fléchée n’est pas un opérateur. Les fonctions fléchées ont des règles spécifiques quant à leur place dans la syntaxe et interagissent différemment de la précédence des opérateurs par rapport à une fonction classique :</p>

<pre class="brush: js">let fonctionRappel;

fonctionRappel = fonctionRappel || function () {};
// OK

fonctionRappel = fonctionRappel || () =&gt; {};
// SyntaxError: invalid arrow-function arguments

fonctionRappel = fonctionRappel || (() =&gt; {});
// OK
</pre>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Une fonction fléchée vide renvoie undefined
let vide = () =&gt; {};

(() =&gt; "tototruc")()
// exemple d'une fonction immédiatement
// invoquée (IIFE en anglais) qui renvoie
// "tototruc"

var simple = a =&gt; a &gt; 15 ? 15 : a;
simple(16); // 15
simple(10); // 10

var complexe = (a, b) =&gt; {
    if (a &gt; b) {
        return a;
    } else {
        return b;
    }
}

var arr = [5, 6, 13, 0, 1, 18, 23];

var sum = arr.reduce((a, b) =&gt; a + b);
// 66

var even = arr.filter(v =&gt; v % 2 == 0);
// [6, 0, 18]

var double = arr.map(v =&gt; v * 2);
// [10, 12, 26, 0, 2, 36, 46]

// On peut aussi construire des chaînes
// de promesses plus concises
promise.then(a =&gt; {
    // ...
}).then(b =&gt; {
    // ...
});

// Cela permet de visualiser les
// fonctions sans paramètres
setTimeout( () =&gt; {
    console.log("Et voilà");
    setTimeout( () =&gt; {
        console.log("ensuite…");
    }, 1);
}, 1);
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
   <td>{{SpecName('ES2015', '#sec-arrow-function-definitions', 'Arrow Function Definitions')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-arrow-function-definitions', 'Arrow Function Definitions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.functions.arrow_functions")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L’article sur les fonctions fléchées présent sur <a href="https://tech.mozfr.org">https ://tech.mozfr.org</a> (l’article original en anglais est disponible <a href="https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/">ici</a>).</li>
</ul>
