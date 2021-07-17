---
title: function*
slug: Web/JavaScript/Reference/Statements/function*
tags:
  - ECMAScript 2015
  - Function
  - Generator
  - Instruction
  - Iterator
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/function*
original_slug: Web/JavaScript/Reference/Instructions/function*
---
<div>{{jsSidebar("Statements")}}</div>

<p>La déclaration <code><strong>function*</strong></code> (le mot-clé <code>function</code> suivi par un astérisque) permet de définir un générateur (aussi appelé une fonction génératrice) (un générateur est un objet {{jsxref("Generator")}}).</p>

<div>{{EmbedInteractiveExample("pages/js/statement-functionasterisk.html")}}</div>



<div>
<p>Il est également possible de définir un générateur en utilisant le constructeur {{jsxref("GeneratorFunction")}} et une expression {{jsxref("Opérateurs/function*", "function*")}}.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate">function* <em>nom</em>([<em>param1</em>[, <em>param2</em>[, ... <em>paramN</em>]]]) {
   <em>instructions</em>
}
</pre>

<dl>
 <dt><code>nom</code></dt>
 <dd>Le nom de la fonction.</dd>
 <dt><code>paramN</code></dt>
 <dd>Le nom d'un paramètre formel passé à la fonction.</dd>
 <dt><code>instructions</code></dt>
 <dd>Les instructions qui constituent le corps de la fonction.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Les générateurs sont des fonctions qu'il est possible de quitter puis de reprendre. Le contexte d'un générateur (les liaisons avec ses variables) est sauvegardé entre les reprises successives.</p>

<p>Les générateurs, combinés avec <a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses">les promesses</a>, sont des outils de programmation asynchrones puissants qui permettent de réduire les inconvénients causés par les <em>callbacks</em> (fonctions de rappel) et <a href="https://frontendmasters.com/courses/rethinking-async-js/callback-problems-inversion-of-control/">l'inversion de contrôle</a>.</p>

<p>Lorsqu'on appelle une fonction génératrice, son corps n'est pas exécuté immédiatement, c'est un {{jsxref("Les_protocoles_iteration","itérateur","#Le_protocole_.C2.AB_it.C3.A9rateur_.C2.BB",1)}} qui est renvoyé pour la fonction. Lorsque la méthode <code>next()</code> de l'itérateur est appelée, le corps de la fonction génératrice est utilisé jusqu'à ce que la première expression {{jsxref("Opérateurs/yield", "yield")}} soit trouvée. Cette expression définira la valeur à renvoyer pour l'itérateur. Si on utilise {{jsxref("Opérateurs/yield*", "yield*")}}, on pourra déléguer la génération des valeurs à une autre fonction génératrice. La méthode <code>next()</code> renvoie un objet dont la propriété <code>value</code> contient la valeur générée et une propriété <code>done</code> qui indique si le générateur a produit sa dernière valeur ou non. Lorsqu'on appelle la méthode <code>next()</code> avec un argument, cela reprendra l'exécution de la fonction génératrice et remplacera la valeur de l'expression <code>yield</code> (là où l'exécution avait été interrompue) avec la valeur de l'argument passé à <code>next()</code>.</p>

<p>On peut utiliser une instruction <code>return</code> dans un générateur. Lorsque cette instruction sera exécutée, le générateur sera terminé (<code>done</code> vaudra <code>true</code>). La valeur renvoyée par l'instruction <code>return</code> sera la valeur de terminaison du générateur. Une fois qu'un générateur est terminé, il ne peut plus produire d'autres valeurs.</p>

<p>À l'instar d'une instruction <code>return</code>, une exception levée à l'intérieur du générateur entraînera la terminaison du générateur sauf si cette exception est interceptée. Lorsqu'un générateur est terminé, les appels suivants à <code>next()</code> n'exécuteront aucun code provenant du générateur, ils renverront simplement un objet de la forme <code>{value: undefined, done: true}</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemple_simple">Exemple simple</h3>

<pre class="brush: js notranslate">function* creerID(){
  var index = 0;
  while (true) {
    yield index++;
  }
}

var gen = creerID();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
</pre>

<h3 id="Exemple_utilisant_des_arguments">Exemple utilisant des arguments</h3>

<pre class="brush: js notranslate">function* logGenerator() {
  console.log(yield);
  console.log(yield);
  console.log(yield);
}

var gen = logGenerator();

// le premier appel à next exécute la fonction depuis son
// début jusqu'au premier yield rencontré
gen.next();
gen.next('bretzel');    // bretzel
gen.next('california'); // california
gen.next('mayonnaise'); // mayonnaise
</pre>

<h3 id="Exemple_utilisant_yield*">Exemple utilisant <code>yield*</code></h3>

<pre class="brush: js notranslate">function* autreGenerateur(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}
function* generateur(i){
  yield i;
  yield* autreGenerateur(i);
  yield i + 10;
}

var gen = generateur(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20
</pre>

<h3 id="Utilisation_de_return">Utilisation de <code>return</code></h3>

<pre class="brush: js notranslate">function* yieldAndReturn() {
  yield "Y";
  return "R";
  yield "inaccessible";
}

var gen = yieldAndReturn();

console.log(gen.next()); // { value: "Y", done: false }
console.log(gen.next()); // { value: "R", done: true }
console.log(gen.next()); // { value: undefined, done: true }
</pre>

<h3 id="Utiliser_un_générateur_comme_propriété">Utiliser un générateur comme propriété</h3>

<pre class="brush: js notranslate">const monObj = {
  *generator () {
    yield "a";
    yield "b";
  }
}

const gen = monObj.generator();

console.log(gen.next()); // { value: "a", done: false }
console.log(gen.next()); // { value: "b", done: false }
console.log(gen.next()); // { value: undefined, done: true }</pre>

<h3 id="Utiliser_un_générateur_comme_propriété_calculée">Utiliser un générateur comme propriété calculée</h3>

<pre class="brush: js notranslate">class Toto {
  *[Symbol.iterator] () {
    yield 1;
    yield 2;
  }
}

const monObj = {
  *[Symbol.iterator] () {
    yield "a";
    yield "b";
  }
}

console.log(Array.from(new Toto)); // [1, 2]
console.log(Array.from(monObj));   // [ "a", "b"]</pre>

<h3 id="Les_générateurs_ne_sont_pas_constructibles">Les générateurs ne sont pas constructibles</h3>

<pre class="brush: js example-bad notranslate">function* f() {}
var obj = new f; // lève une TypeError: f n'est pas un constructeur
</pre>

<h3 id="Générateur_défini_avec_une_expression">Générateur défini avec une expression</h3>

<pre class="brush: js notranslate">const toto = function* () {
  yield 10;
  yield 20;
};
const truc = toto();
console.log(truc.next()); // {value: 10, done: false}</pre>

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
   <td>{{SpecName('ES2015', '#sec-generator-function-definitions', 'function*')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2016', '#sec-generator-function-definitions', 'function*')}}</td>
   <td>{{Spec2('ES2016')}}</td>
   <td>Les générateurs ne doivent pas gérer la trappe [[Construct]] et déclencher une exception s'ils sont utilisés avec <code>new</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-generator-function-definitions', 'function*')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.generator_function")}}</p>

<h2 id="Notes_spécifiques_à_Firefox">Notes spécifiques à Firefox</h2>

<h3 id="Les_générateurs_et_itérateurs_dans_Firefox_pour_les_versions_antérieures_à_Firefox_26">Les générateurs et itérateurs dans Firefox pour les versions antérieures à Firefox 26</h3>

<p>Les anciennes versions de Firefox implémentaient une ancienne version de la proposition pour les générateurs. Dans cette version, les générateurs étaient définis avec le mot-clé <code>function</code> (sans astérisque) et étaient différents selon d'autres aspects. Voir <a href="/fr/docs/Web/JavaScript/Reference/Instructions/Fonction_génératrice_historique">la page sur les générateurs historiques</a> pour plus d'informations.</p>

<h3 id="IteratorResult_au_lieu_dune_exception"><code>IteratorResult</code> au lieu d'une exception</h3>

<p>À partir de Gecko 29 {{geckoRelease(29)}}, lorsqu'un générateur est terminé, il ne renvoie plus une exception {{jsxref("TypeError")}} « generator has already finished ». Il renvoie désormais un objet <code>IteratorResult</code> comme <code>{ value: undefined, done: true }</code> ({{bug(958951)}}).</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>L'expression {{jsxref("Opérateurs/function*", "function*")}}</li>
 <li>L'objet {{jsxref("GeneratorFunction")}}</li>
 <li>{{jsxref("Les_protocoles_iteration","itérateur","#Le_protocole_.C2.AB_it.C3.A9rateur_.C2.BB",1)}}</li>
 <li>{{jsxref("Opérateurs/yield", "yield")}}</li>
 <li>{{jsxref("Opérateurs/yield*", "yield*")}}</li>
 <li>L'objet {{jsxref("Function")}}</li>
 <li>{{jsxref("Instructions/function", "Les déclarations de fonction","",1)}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_function", "Les expressions de fonction","",1)}}</li>
 <li>{{jsxref("Fonctions", "Les fonctions","",1)}}</li>
 <li>D'autres ressources disponibles sur le Web :
  <ul>
   <li><a href="https://facebook.github.io/regenerator/">Regenerator</a> un compilateur permettant de traduire des générateurs ES2015 en du code JavaScript basé sur ES5</li>
   <li><a href="https://www.youtube.com/watch?v=qbKWsbJ76-s">Forbes Lindesay: Promises and Generators: control flow utopia -- JSConf EU 2013</a> (vidéo en anglais)</li>
   <li><a href="https://github.com/mozilla/task.js">Task.js</a></li>
   <li><a href="https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/async%20%26%20performance/ch4.md#iterating-generators-asynchronously">Itérer de façon asynchrone sur des générateurs</a></li>
  </ul>
 </li>
</ul>
