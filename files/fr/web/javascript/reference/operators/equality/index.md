---
title: Égalité (==)
slug: Web/JavaScript/Reference/Operators/Equality
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
browser-compat: javascript.operators.equality
translation-of: Web/JavaScript/Reference/Operators/Equality
---
<div>{{jsSidebar("Operators")}}</div>

<p>L'opérateur d'égalité (<code>==</code>) vérifie si ses deux opérandes sont égaux et renvoie un booléen indiquant le résultat de la comparaison. À la différence de l'opérateur <a href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality">d'égalité stricte</a>, l'opérateur d'égalité tente de convertir ses opérandes avant la comparaison si ceux-ci sont de types différents.</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">
x == y
</pre>

<h2 id="description">Description</h2>

<p>Les opérateurs d'égalité (<code>==</code> et <code>!=</code>) utilisent <a href="https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3">l'algorithme de comparaison d'égalité abstraite</a> pour comparer deux opérandes. On peut le résumer ainsi :</p>

<ul>
  <li>Si les opérandes sont deux objets, on renvoie <code>true</code> uniquement si les deux opérandes référencent le même objet.</li>
  <li>Si un opérande vaut <code>null</code> et que l'autre vaut <code>undefined</code>, on renvoie <code>true</code>.</li>
  <li>Si les opérandes sont de types différents, on tente une conversion pour avoir le même type de part et d'autre avant la comparaison :
    <ul>
      <li>Si on compare un nombre à une chaîne de caractères, on tentera de convertir la chaîne en une valeur numérique.</li>
      <li>Si l'un des opérandes est un booléen, on le convertira en 1 s'il vaut <code>true</code> et en +0 s'il vaut <code>false</code>.</li>
      <li>Si l'un des opérandes est un objet et que l'autre est un nombre ou une chaîne de caractères, on tentera de convertir l'objet en une valeur primitive grâce aux méthodes <code>valueOf()</code> et <code>toString()</code> de l'objet.</li>
    </ul>
  </li>
  <li>Si les opérandes sont du même types, on les compare comme suit :
    <ul>
      <li><code>String</code> : on renvoie <code>true</code> uniquement si les deux opérandes ont les mêmes caractères dans le même ordre.</li>
      <li><code>Number</code> : on renvoie <code>true</code> uniquement si les deux opérandes ont la même valeur. <code>+0</code> et <code>-0</code> sont considérés comme la même valeur. Si au moins un des opérandes vaut <code>NaN</code>, on renvoie <code>false</code>.</li>
      <li><code>Boolean</code> : on renvoie <code>true</code> uniquement si les deux opérandes valent tous les deux <code>true</code> ou s'ils valent tous les deux <code>false</code>.</li>
    </ul>
  </li>
</ul>

<p>La différence fondamentale entre cet opérateur et <a href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality">l'opérateur d'égalité stricte</a> (<code>===</code>) est que ce dernier n'opère pas de conversion de type. L'opérateur d'égalité stricte considère toujours que deux valeurs de types différents sont différentes.</p>

<h2 id="examples">Exemples</h2>

<h3 id="comparison_with_no_type_conversion">Comparaison sans conversion de types</h3>

<pre class="brush: js">
1 == 1;              // true
"coucou" == "coucou";  // true
</pre>

<h3 id="comparison_with_type_conversion">Comparaison avec conversion de types</h3>

<pre class="brush: js">
"1" ==  1;            // true
1 == "1";             // true
0 == false;           // true
0 == null;            // false
0 == undefined;       // false
0 == !!null;          // true, voir la documentation pour !!
0 == !!undefined;     // true, voir la documentation pour !!
null == undefined;    // true

const nombre1 = new Number(3);
const nombre2 = new Number(3);
nombre1 == 3;         // true
nombre1 == nombre2;   // false
</pre>

<h3 id="comparison_of_objects">Comparaison d'objets</h3>

<pre class="brush: js">
const objet1 = {"clé": "valeur"}
const objet2 = {"clé": "valeur"};

objet1 == objet2 // false
objet2 == objet2 // true
</pre>

<h3 id="comparing_strings_and_string_objects">Comparaison entre des chaînes de caractères et des objets String</h3>

<p>On notera que les chaînes de caractères construites avec <code>new String()</code> sont des objets. Si on compare une telle valeur avec une chaîne de caractères "primitives", l'objet <code>String</code> sera converti en une chaîne de caractères et les contenus de ces chaînes seront comparés. Toutefois, si les deux opérandes sont des objets <code>String</code>, ils seront comparés comme tels et devront référencer le même objet pour être considérés égaux :</p>

<pre class="brush: js">
const string1 = "coucou";
const string2 = String("coucou");
const string3 = new String("coucou");
const string4 = new String("coucou");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
</pre>

<h3 id="comparing_dates_and_strings">Comparaison entre les dates et les chaînes de caractères</h3>

<pre class="brush: js">
const d = new Date('December 17, 1995 03:24:00');
const s = d.toString(); // par exemple : "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s);    //true
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Inequality">L'opérateur d'inégalité</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality">L'opérateur d'égalité stricte</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality">L'opérateur d'inégalité stricte</a></li>
</ul>
