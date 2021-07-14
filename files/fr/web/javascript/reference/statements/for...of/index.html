---
title: for...of
slug: Web/JavaScript/Reference/Statements/for...of
tags:
  - ECMAScript 2015
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/for...of
original_slug: Web/JavaScript/Reference/Instructions/for...of
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'<strong>instruction <code>for...of</code></strong> permet de créer une boucle {{jsxref("Array")}} qui parcourt un {{jsxref("Les_protocoles_iteration","objet itérable","#Le_protocole_.C2.AB_it.C3.A9rable_.C2.BB",1)}} (ce qui inclut les objets {{jsxref("Array")}}, {{jsxref("Map")}}, {{jsxref("Set")}}, {{jsxref("String")}}, {{jsxref("TypedArray")}}, l'objet {{jsxref("Fonctions/arguments","arguments")}}, etc.) et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-forof.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">for (<em><var>variable</var></em> of iterable)
  <em>instruction</em>
</pre>

<dl>
 <dt><code>variable</code></dt>
 <dd>À chaque itération, la valeur d'une propriété différente est affectée à <code><em>variable</em></code> (cette variable peut être déclarée avec <code>const</code>, <code>let</code> ou <code>var</code>).</dd>
 <dt><code>iterable</code></dt>
 <dd>L'objet dont on parcourt les propriétés énumérables.</dd>
 <dt><code>instruction</code></dt>
 <dd>Une instruction à exécuter pour chaque propriété, cette instruction peut être composée de plusieurs instructions en utilisant un {{jsxref("Instructions/bloc","bloc","",1)}} d'instructions.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_for...of_sur_un_tableau">Utiliser <code>for...of</code> sur un tableau</h3>

<pre class="brush: js">let tableauItérable = [1, 2, 3];

for (let valeur of tableauItérable) {
  console.log(valeur);
}
// 1
// 2
// 3</pre>

<p>Si la variable n'est pas réaffectée dans la boucle, on pourra également utiliser <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/const">const</a></code> à la place de <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/let">let</a></code> :</p>

<pre class="brush: js">let tableauItérable = [1, 2, 3];

for (const valeur of tableauItérable) {
  console.log(valeur);
}
// 1
// 2
// 3</pre>

<h3 id="Parcourir_une_chaîne_de_caractères_avec_for...of">Parcourir une chaîne de caractères avec <code>for...of</code></h3>

<pre class="brush: js">let iterable = 'pixel';

for (let valeur of iterable) {
  console.log(valeur);
}
// p
// i
// x
// e
// l</pre>

<h3 id="Parcourir_un_tableau_typé_(jsxref(TypedArray))">Parcourir un tableau typé ({{jsxref("TypedArray")}})</h3>

<pre class="brush: js">let iterable = new Uint8Array([0x00, 0xff]);

for (let valeur of iterable) {
  console.log(valeur);
}
// 0
// 255</pre>

<h3 id="Parcourir_une_jsxref(Map)">Parcourir une {{jsxref("Map")}}</h3>

<pre class="brush: js">let iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (let element of iterable) {
  console.log(element);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (let [clef, valeur] of iterable) {
  console.log(valeur);
}
// 1
// 2
// 3</pre>

<h3 id="Utiliser_Array.prototype.forEach()">Utiliser <code>Array.prototype.forEach()</code></h3>

<p>Pour obtenir les mêmes valeurs qu'avec une boucle <code>for...of</code>, on peut utiliser la méthode {{jsxref("Array.prototype.forEach()")}} :</p>

<pre class="brush: js">let arr = [3, 5, 7];
arr.toto = "coucou";

arr.forEach(function (element, index) {
  console.log(element); // affiche "3", "5", "7"
  console.log(index);  // affiche "0", "1", "2"
});

// ou avec Object.keys()

Object.keys(arr).forEach(function (element, index) {
  console.log(arr[element]); // affiche "3", "5", "7", "coucou"
  console.log(arr[index]);  // affiche "3", "5", "7", undefined
});</pre>

<h3 id="Parcourir_l'objet_arguments">Parcourir l'objet <code>arguments</code></h3>

<p>Il est possible de parcourir l'objet {{jsxref("Fonctions/arguments", "arguments")}} afin d'examiner l'ensemble des paramètres passés à la fonction :</p>

<pre class="brush: js">(function() {
  for (let argument of arguments){
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3
</pre>

<h3 id="Parcourir_des_collections_DOM">Parcourir des collections DOM</h3>

<p>Il est possible de parcourir des collections DOM telles que {{domxref("NodeList")}}. Dans cet exemple, on ajoute une classe <code>read</code> aux paragraphes qui sont des descendants directs d'un article :</p>

<pre class="brush:js">// Note : Cela ne fonctionnera que pour les plates-formes
// qui implémentent NodeList.prototype[Symbol.iterator]
let articleParagraphs = document.querySelectorAll("article &gt; p");

for (let paragraph of articleParagraphs) {
  paragraph.classList.add("read");
}
</pre>

<h3 id="Clôturer_les_itérateurs">Clôturer les itérateurs</h3>

<p>Dans les boucles <code>for...of</code>, on peut provoquer la fin de l'itérateur avec <code>break</code>, <code>continue</code>, <code>throw</code>, ou <code>return</code>. Dans ces cas, l'itérateur est fermé.</p>

<pre class="brush: js">function* toto() {
  yield 1;
  yield 2;
  yield 3;
};

for (let o of toto()) {
  console.log(o);
  break; // L'itérateur est fermé
}
</pre>

<h3 id="Itérer_sur_les_générateurs">Itérer sur les générateurs</h3>

<p>Grâce à cette instruction, on peut également itérer sur les {{jsxref("Instructions/function*","générateurs","",1)}} :</p>

<pre class="brush:js">function* fibonacci() { // une fonction génératrice
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // on arrête la séquence à 1000
  if (n &gt;= 1000){
    break;
  }
}
</pre>

<h3 id="Itérer_sur_les_autres_objets_itérables">Itérer sur les autres objets itérables</h3>

<p>Il est aussi possible d'itérer sur un objet qui implémente <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérable_»">le protocole itérable</a> de façon explicite :</p>

<pre class="brush: js">var iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i &lt; 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (let value of iterable) {
  console.log(value);
}
console.log("fini !");
// 0
// 1
// 2</pre>

<h3 id="Les_différences_entre_for...of_et_for...in">Les différences entre <code>for...of</code> et <code>for...in</code></h3>

<p>Les deux instructions <code>for...in</code> et <code>for...of</code> permettent de parcourir un ensemble. Mais elles ne parcourent pas le même ensemble.</p>

<p>L'instruction {{jsxref("Instructions/for...in", "for...in")}} permet de parcourir <a href="/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement">les propriétés énumérables</a> d'un objet dans un ordre arbitraire.</p>

<p>L'instruction <code>for...of</code> permet quant à elle de parcourir les données contenues dans l'<a href="/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs#Itérables">objet itérable</a> visé.</p>

<p>Dans l'exemple qui suit, on illustre la différence de comportement entre une boucle <code>for...of</code> et une boucle <code>for...in</code> utilisées sur un tableau ({{jsxref("Array")}}).</p>

<pre class="brush:js">Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.toto = 'coucou';

for (let i in iterable) {
  console.log(i); // affiche 0, 1, 2, "toto",
                  // "arrCustom", "objCustom"
}

for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // affiche 0, 1, 2, "toto"
  }
}

for (let i of iterable) {
  console.log(i); // affiche 3, 5, 7
}
</pre>

<p>Chaque objet héritera de la propriété <code>objCustom</code> et chaque objet qui est un tableau ({{jsxref("Array")}}) héritera de la propriété <code>arrCustom</code> car on les ajoute aux prototypes {{jsxref("Object.prototype")}} et {{jsxref("Array.prototype")}}. L'objet <code>iterable</code> hérite donc des propriétés <code>objCustom</code> et <code>arrCustom</code> grâce <a href="/fr/docs/Web/JavaScript/Héritage_et_chaîne_de_prototypes">à l'héritage et à la chaîne de prototypes</a>.</p>

<pre class="brush: js">for (let i in iterable) {
  console.log(i); // affiche 0, 1, 2, "toto",
                  // "arrCustom" et "objCustom"
}</pre>

<p>Cette boucle ne parcourt que les <a href="/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement">propriétés énumérables</a> de l'objet <code>iterable</code> dans un ordre arbitraire. Les éléments du tableau <code>3</code>, <code>5</code>, <code>7</code> ou <code>hello</code> ne sont pas affichés car ce ne sont pas des propriétés (et encore moins des propriétés énumérables). En revanche, on retrouve bien les indices du tableau et les propriétés <code>arrCustom</code> et <code>objCustom</code>. Pour décrire plus précisément ce comportement, vous pouvez consulter {{jsxref("Instructions/for...in", "for...in", "#/fr/docs/Web/JavaScript/Reference/Instructions/for...in#Utiliser_for...in_et_parcourir_un_tableau")}}.</p>

<pre class="brush: js">for (let i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // affiche 0, 1, 2, "toto"
  }
}</pre>

<p>Cette boucle ressemble à la première mais ajoute la méthode {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}} qui permet de vérifier si la propriété énumérable recensée est directement disponible sur l'objet (c'est-à-dire si elle n'est pas héritée). La console affiche donc les propriétés <code>0</code>, <code>1</code>, <code>2</code> et <code>toto</code> car ce sont des propriétés directement rattachées à l'objet <code>iterable</code>. En revanche, les propriétés <code>arrCustom</code> et <code>objCustom</code> ne sont pas affichées car elles proviennent de l'héritage.</p>

<pre class="brush: js">for (let i of iterable) {
  console.log(i); // affiche 3, 5, 7
}</pre>

<p>Cette boucle parcourt les valeurs définies comme itérables par <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_.C2.AB_it.C3.A9rable_.C2.BB">l'objet itérable</a><strong> </strong>et dans ce cas ce sont les éléments du tableau <code>3</code>, <code>5</code>, <code>7</code> et pas les propriétés de l'objet.</p>

<h3 id="Attention_à_ne_pas_réutiliser_les_générateurs">Attention à ne pas réutiliser les générateurs</h3>

<p>Les générateurs ne doivent pas être réutilisés, même lorsque la boucle <code>for...of</code> a été interrompue (par exemple lorsque {{jsxref("Instructions/break","break")}} est utilisé). Lorsqu'on quitte une boucle, le générateur est clôturé et si on l'utilise à nouveau, il ne fournira aucun résultat. Firefox n'a pas encore implémenté ce comportement standard (cf. {{bug("1147371")}}).</p>

<pre class="brush: js">var gen = (function *(){
  yield 1;
  yield 2;
  yield 3;
})();
for (let o of gen) {
  console.log(o);
  break; // L'itérateur est fermé
}

// Le générateur ne doit pas être réutilisé !
for (let o of gen){
  console.log(o); // Ceci n'est jamais exécuté
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-for-in-and-for-of-statements', 'instruction for...of')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-for-in-and-for-of-statements', 'instruction for...of')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.for_of")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.forEach()")}}</li>
 <li>{{jsxref("Map.prototype.forEach()")}}</li>
</ul>
