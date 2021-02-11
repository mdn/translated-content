---
title: 'TypeError: Reduce of empty array with no initial value'
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
tags:
  - Error
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
original_slug: Web/JavaScript/Reference/Erreurs/Reduce_of_empty_array_with_no_initial_value
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: reduce of empty array with no initial value
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>En JavaScript, il existe plusieurs fonctions qui permettent de réduire un tableau :</p>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}} ainsi que</li>
 <li>{{jsxref("TypedArray.prototype.reduce()")}},  {{jsxref("TypedArray.prototype.reduceRight()")}}).</li>
</ul>

<p>Ces fonctions utilisent un argument optionnel <code>valeurInitiale</code> (qui sera utilisée comme premier argument pour le premier appel du <code>callback</code>). Toutefois, si aucune valeur initiale explicite est fournie, la méthode utilisera le premier élément de l'objet  {{jsxref("Array")}} / {{jsxref("TypedArray")}} comme valeur initiale. Cette exception est déclenchée lorsqu'on souhaite réduire un tableau vide car aucune valeur initiale n'a été fournie.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemples_invalides">Exemples invalides</h3>

<p>Ce problème se produit lorsqu'on combine une méthode de filtrage ({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}}) qui retire tous les éléments du tableau. Si on applique ensuite une réduction, il n'y aura pas de valeur initiale.</p>

<pre class="brush: js example-bad">var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x =&gt; x &gt; 0)         // cet appel retire tous les éléments
    .reduce((x, y) =&gt; x + y)    // aucun ne peut alors être utilisé comme valeur initiale</pre>

<p>Cela peut également se produire si on utilise un sélecteur avec une coquille ou que la liste contient un nombre d'élément inattendu:</p>

<pre class="brush: js example-bad">var names = document.getElementsByClassName("names");
var name_list = Array.prototype.reduce.call(names, (acc, name) =&gt; acc + ", " + name);
</pre>

<h3 id="Exemples_valides">Exemples valides</h3>

<p>On peut résoudre ces problèmes de deux façons.</p>

<p>On peut fournir une valeur initiale qui soit l'élément neutre de la réduction (par exemple 0 si on additionne, 1 si on multiplie ou la chaîne vide si on concatène du texte).</p>

<pre class="brush: js example-good">var ints = [0, -1, -2, -3, -4, -5];
ints.filter(x =&gt; x &gt; 0)         // removes all elements
    .reduce((x, y) =&gt; x + y, 0) // the initial value is the neutral element of the addition
</pre>

<p>On peut également gérer le cas où le tableau est vide, avant d'appeler <code>reduce</code> ou dans le <em>callback</em> après avoir ajouté une valeur initiale.</p>

<pre class="brush: js example-good">var names = document.getElementsByClassName("names");

var nameList1 = "";
if (names1.length &gt;= 1)
  nameList1 = Array.prototype.reduce.call(names, (acc, name) =&gt; acc + ", " + name);
// nameList1 == "" lorsque names est vide

var nameList2 = Array.prototype.reduce.call(names, (acc, name) =&gt; {
  if (acc == "") // la valeur initiale
    return name;
  return acc + ", " + name;
}, "");
// nameList2 == "" lorsque names est vide
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.reduce()")}}</li>
 <li>{{jsxref("Array.prototype.reduceRight()")}}</li>
 <li>{{jsxref("TypedArray.prototype.reduce()")}}</li>
 <li>{{jsxref("TypedArray.prototype.reduceRight()")}}</li>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("Array.prototype.filter()")}}</li>
 <li>{{jsxref("TypedArray.prototype.filter()")}}</li>
</ul>
