---
title: Itérateurs et générateurs
slug: Web/JavaScript/Guide/Iterators_and_Generators
tags:
  - Guide
  - Intermediate
  - JavaScript
translation_of: Web/JavaScript/Guide/Iterators_and_Generators
original_slug: Web/JavaScript/Guide/iterateurs_et_generateurs
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Utiliser_les_promesses", "Web/JavaScript/Guide/Métaprogrammation")}}</div>

<p>Effectuer des traitements sur chacun des éléments d'une collection est une opération très fréquente. Il existe plusieurs outils natifs dans JavaScript pour parcourir une collection, les boucles <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for">for</a></code>, <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/map">map()</a></code>, <code><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/filter">filter()</a></code>. Les itérateurs et les générateurs font de ce concept d'itération une fonctionnalité principale du langage et permettent d'adapter et de personnaliser le comportement des boucles <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for...of</a></code>.</p>

<p>Pour plus de détails sur les mécanismes d'itération, voir les pages suivantes :</p>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration">Les protocoles d'itération</a></li>
 <li>{{jsxref("Instructions/for...of","for...of")}}</li>
 <li>{{jsxref("Instructions/function*","function*")}} et {{jsxref("Generator")}}</li>
 <li>{{jsxref("Opérateurs/yield","yield")}} et {{jsxref("Opérateurs/yield*","yield*")}}</li>
</ul>

<h2 id="Itérateurs">Itérateurs</h2>

<p>Un itérateur est un objet sachant comment accéder aux éléments d'une collection un par un et qui connait leur position dans la collection. En JavaScript, un itérateur expose une méthode <code>next()</code> qui retourne l'élément suivant dans la séquence. Cette méthode renvoie un objet possédant deux propriétés : <code>done</code> et <code>value</code>.</p>

<p>Un itérateur est "terminé" lorsque l'appel à la méthode <code>next()</code> renvoie un objet dont la propriété <code>done</code> vaut <code>true</code>.</p>

<p>Une fois créé, un itérateur peut être utilisé explicitement en appelant sa méthode <code>next()</code>, ou implicitement en utilisant la boucle <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...in">for...in</a></code>.</p>

<p>Voici un exemple d'une fonction créant un itérateur qui parcourt l'intervalle défini par ses arguments (depuis <code>debut</code> (inclus) jusqu'à <code>end</code> (exclus) et avec <code>pas</code> comme incrément. La valeur finale qui est renvoyée correspond à la taille de la séquence créée</p>

<pre class="brush: js">function creerIterateurIntervalle(debut = 0, fin = Infinity, pas = 1) {
  let prochainIndex = debut;
  let nbIterations = 0;

  const rangeIterator = {
    next: function() {
      let resultat;
      if (prochainIndex &lt; fin) {
        resultat = { value: prochainIndex, done: false };
        prochainIndex += pas;
        nbIterations++;
        return resultat;
      }
      return { value: nbIterations, done: true }
    }
  };
  return rangeIterator;
}</pre>

<p>On pourra alors utiliser cette fonction et l'itérateur de la façon suivante :</p>

<pre class="brush: js">let it = creerIterateurIntervalle(1, 10, 2);

let resultat = it.next();
while (!resultat.done) {
 console.log(resultat.value); // 1 3 5 7 9
 resultat = it.next();
}

console.log("La séquence parcourue contenait ", result.value, " éléments.");
</pre>

<h2 id="Itérables">Itérables</h2>

<p>Un objet est considéré comme <strong>itérable</strong> s'il définit le comportement qu'il aura lors de l'itération (par exemple les valeurs qui seront utilisées dans une boucle {{jsxref("Instructions/for...of", "for...of")}}). Certains types natifs, tels qu'{{jsxref("Array")}} ou {{jsxref("Map")}}, possède un comportement par défaut pour les itérations, cependant d'autres types comme les Objets, ne possèdent pas ce comportement.</p>

<p>Pour qu'un objet soit <strong>itérable</strong>, un objet doit implémenter la méthode <strong>@@iterator</strong>, cela signifie que l'objet (ou un des objets de la <a href="/fr/docs/Web/JavaScript/Héritage_et_chaîne_de_prototypes">chaîne de prototypes</a>) doit avoir une propriété avec la clé {{jsxref("Symbol.iterator")}}. Cette fonction doit également, même si ce n'est pas une obligation, renvoyer une nouvel opérateur à chaque appel.</p>

<h3 id="Itérables_personnalisés">Itérables personnalisés</h3>

<p>Il est possible de définir ses propres itérables de cette façon :</p>

<pre class="brush: js">var monItérable = {};
monItérable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...monItérable] // [1, 2, 3]
</pre>

<h3 id="Itérables_natifs">Itérables natifs</h3>

<p>{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} et {{jsxref("Set")}} sont des itérables natifs car les prototypes de chacun ont tous une méthode {{jsxref("Symbol.iterator")}}.</p>

<h3 id="Les_éléments_de_syntaxe_utilisant_des_itérables">Les éléments de syntaxe utilisant des itérables</h3>

<p>Certaines instructions ou expressions utilisent des itérables, par exemple les boucles {{jsxref("Instructions/for...of","for...of")}} et {{jsxref("Opérateurs/yield*","yield*")}}.</p>

<pre class="brush: js">for(let value of ["a", "b", "c"]){
    console.log(value)
}
// "a"
// "b"
// "c"

[..."abc"] // ["a", "b", "c"]

function* gen(){
  yield* ["a", "b", "c"]
}

gen().next() // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"])
a // "a"

</pre>

<h2 id="Générateurs">Générateurs</h2>

<p>Les itérateurs personnalisés sont un outil utile mais leur création peut s'avérer complexe et il faut maintenir leur état interne. Avec les générateurs, on peut définir une seule fonction qui est un algorithme itératif et qui peut maintenir son état.</p>

<p>Un générateur est un type de fonction spécial qui fonctionne comme une fabrique (<em>factory</em>) d'itérateurs. Une fonction devient un générateur lorsqu'elle contient une ou plusieurs expressions <code>yield</code> et qu'elle utilise la syntaxe <code>function*</code>.</p>

<pre class="brush: js">function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
// ...</pre>

<h2 id="Générateurs_avancés">Générateurs avancés</h2>

<p>Les générateurs calculent les valeurs à fournir à la demande, ce qui leur permet de représenter efficacement des suites complexes à calculer, voire des séries infinies (comme vu dans l'exemple précédent).</p>

<p>La méthode <code>next()</code> accepte également un argument qui pourra être utilisé pour modifier l'état interne du générateur. Une valeur passée à <code>next()</code> sera traitée comme le résultat de la dernière expression <code>yield</code> qui a interrompu le générateur. Une valeur passée au premier appel de <code>next()</code> sera toujours ignorée.</p>

<p>Par exemple, on peut avoir un générateur pour la suite de Fibonnaci et utiliser <code>next(x)</code> pour redémarrer la série :</p>

<pre class="brush: js">function* fibonacci(){
  var fn1 = 0;
  var fn2 = 1;
  while (true){
    var current = fn1;
    fn1 = fn2;
    fn2 = fn1 + current;
    var reset = yield current;
    if (reset){
        fn1 = 0;
        fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value);     // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2</pre>

<p>Il est possible de forcer un générateur à lever une exception en utilisant la méthode <code>throw()</code> en lui passant la valeur de l'exception en argument. Cette exception sera levée depuis l'état actuel du générateur, comme si le <code>yield</code> qui était en attente avait été une instruction <code>throw <em>valeur</em></code>.</p>

<p>Si le mot-clé <code>yield</code> n'est pas trouvé lors de la levée de l'exception, l'exception sera propagée jusqu'à l'appel de <code>throw()</code>, les appels à <code>next()</code> qui suivent renverront une valeur dont la propriété <code>done</code> sera <code>true</code>.</p>

<p>Si l'exception n'est pas interceptée dans le générateur, elle se propagera jusqu'à l'appel de <code>throw()</code> et les appels suivants de <code>next()</code> renverront un objet dont la propriété <code>done </code>vaut <code>true</code>.</p>

<p>Les générateurs possèdent une méthode <code>return(valeur)</code> qui permet de renvoyer une valeur donnée et de terminer le générateur.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Utiliser_les_promesses", "Web/JavaScript/Guide/Métaprogrammation")}}</p>
