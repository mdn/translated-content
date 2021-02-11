---
title: 'TypeError: ''x'' is not iterable'
slug: Web/JavaScript/Reference/Errors/is_not_iterable
tags:
  - Error
  - JavaScript
  - Reference
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/is_not_iterable
original_slug: Web/JavaScript/Reference/Erreurs/is_not_iterable
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: 'x' is not iterable (Firefox, Chrome)
TypeError: 'x' is not a function or its return value is not iterable (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>La valeur passée comme opérande droit de <a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of"><code>for…of</code> </a>ou comme argument d'une fonction telle que {{jsxref("Promise.all")}} ou {{jsxref("TypedArray.from")}} n'est pas <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration">un objet itérable</a>.  Un objet itérable peut être un objet itérable natif tel qu'un objet {{jsxref("Array")}}, {{jsxref("String")}} ou {{jsxref("Map")}} ou le résultat d'un générateur ou un objet qui implémente <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_»">le protocole itérable</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Parcourir_les_propriétés_d'un_objet">Parcourir les propriétés d'un objet</h3>

<p>En JavaScript, les objets ne sont pas itérables car ils n'implémentent pas le <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_»">protocole itérable</a>. On ne peut donc pas utiliser <code>for...of</code> afin d'en parcourir les propriétés.</p>

<pre class="brush: js example-bad">var obj = { 'France': 'Paris', 'England': 'London' };
for (let p of obj) { // TypeError: obj is not iterable
    // …
}
</pre>

<p>Si on souhaite utiliser un itérateur pour parcourir les propriétés (leurs noms ou leurs valeurs), on pourra utiliser les méthodes {{jsxref("Object.keys")}} ou {{jsxref("Object.entries")}} qui fournissent des itérateurs :</p>

<pre class="brush: js example-good">var obj = { 'France': 'Paris', 'England': 'London' };
// On parcourt les noms des propriétés
for (let country of Object.keys(obj)) {
    var capital = obj[country];
    console.log(country, capital);
}

for (const [country, capital] of Object.entries(obj))
    console.log(country, capital);
</pre>

<p>On pourrait également utiliser un objet {{jsxref("Map")}} :</p>

<pre class="brush: js example-good">var map = new Map;
map.set('France', 'Paris');
map.set('England', 'London');
// On parcourt les noms des propriétés
for (let country of map.keys()) {
    let capital = map[country];
    console.log(country, capital);
}

for (let capital of map.values())
    console.log(capital);

for (const [country, capital] of map.entries())
    console.log(country, capital);
</pre>

<h3 id="Itérer_grâce_à_un_générateur">Itérer grâce à un générateur</h3>

<p><a href="/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs">Les générateurs</a> sont des fonctions qui, lorsqu'elles sont appelées, produisent des objets itérables.</p>

<pre class="brush: js example-bad">function* generate(a, b) {
  yield a;
  yield b;
}

for (let x of generate) // TypeError: generate is not iterable
    console.log(x);
</pre>

<p>Lorsqu'elles ne sont pas appelées, l'objet {{jsxref("Function")}} correspondant au générateur peut être appelé mais il n'est pass itérable. Il ne faut donc pas oublier d'invoquer le générateur afin de parcourir les valeurs de l'itérateur qu'il produit.</p>

<pre class="brush: js example-good">function* generate(a, b) {
    yield a;
    yield b;
}

for (let x of generate(1,2))
    console.log(x);
</pre>

<h3 id="Parcourir_un_itérable_spécifique">Parcourir un itérable spécifique</h3>

<p>Les itérables spécifiques (<em>custom iterables</em>) peuvent être créés en implémentant la méthode {{jsxref("Symbol.iterator")}}. En implémentant cette méthode, il faut s'assurer que la valeur renvoyée est un objet qui est un itérateur. Autrement dit, l'objet renvoyé doit posséder une méthode <code>next()</code>.</p>

<pre class="brush: js example-bad">const monIterableVide = {
    [Symbol.iterator]() {
        return [] // [] est un iterable mais pas un itérateur
                  // car il n'a pas de méthode next
    }
}

Array.from(monIterableVide);  // TypeError: monIterableVide is not iterable
</pre>

<p>Voici une implémentation correcte :</p>

<pre class="brush: js example-good">const monIterableVide = {
    [Symbol.iterator]() {
        return [][Symbol.iterator]()
    }
}

Array.from(monIterableVide);  // []
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_»">Le protocole itérable</a></li>
 <li>{{jsxref("Object.keys")}}</li>
 <li>{{jsxref("Object.entries")}}</li>
 <li>{{jsxref("Map")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs#Générateurs">Les générateurs</a></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for…of</a></code></li>
</ul>
