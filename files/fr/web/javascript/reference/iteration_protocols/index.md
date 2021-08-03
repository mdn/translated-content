---
title: Les protocoles d'itération
slug: Web/JavaScript/Reference/Iteration_protocols
tags:
  - ECMAScript 2015
  - Intermédiaire
  - Iterator
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Iteration_protocols
original_slug: Web/JavaScript/Reference/Les_protocoles_iteration
---
<div>{{jsSidebar("More")}}</div>

<p>Un des ajouts à ECMAScript 2015 (ES6) n'est ni une nouvelle syntaxe ni un nouvel objet natif mais des protocoles. Ces protocoles peuvent être implémentés par n'importe quel objet qui respecte certaines conventions.</p>

<p>Il existe deux protocoles concernant l'itération : <a href="#itérable">le protocole « itérable »</a> et <a href="#itérateur">le protocole « itérateur »</a>.</p>

<h2 id="Le_protocole_«_itérable_»">Le protocole « itérable »</h2>

<p>Le protocole «<strong> itérable</strong> » permet aux objets JavaScript de définir ou de personnaliser leur comportement lors d'une itération, par exemple la façon dont les valeurs seront parcourues avec une boucle {{jsxref("Instructions/for...of", "for..of")}}. Certains types natifs tels que {{jsxref("Array")}} ou {{jsxref("Map")}} possèdent un comportement itératif par défaut, d'autres types, comme {{jsxref("Object")}} n'ont pas ce type de comportement.</p>

<p>Afin d'être <strong>itérable</strong>, un objet doit implémenter la méthode <code><strong>@@iterator</strong></code>, cela signifie que l'objet (ou un des objets de <a href="/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain">sa chaîne de prototypes</a>) doit avoir une propriété avec une clé <strong><code>@@iterator</code></strong> qui est accessible via {{jsxref("Symbol.iterator")}} :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Propriété</th>
   <th scope="col">Valeur</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>[Symbol.iterator]</code></td>
   <td>Une fonction sans argument qui renvoie un objet conforme au <a href="#itérateur">protocole itérateur</a>.</td>
  </tr>
 </tbody>
</table>

<p>Lorsqu'on doit itérer sur un objet (ex. : au début d'une boucle <code>for..of</code>), sa méthode <code>@@iterator</code> est appelée sans argument et l'<strong>itérateur</strong> qui est renvoyé est utilisé afin d'obtenir les valeurs sur lesquelles itérer.</p>

<h2 id="Le_protocole_«_itérateur_»">Le protocole « itérateur »</h2>

<p>Le protocole « <strong>itérateur</strong> » définit une façon standard pour produire une suite de valeurs (finie ou infinie) ainsi qu'une valeur de retour lorsque toutes les valeurs ont été générées.</p>

<p>Un objet est considéré comme un itérateur lorsqu'il implémente une méthode <code><strong>next()</strong></code> avec la sémantique suivante :</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Propriété</th>
   <th scope="col">Valeur</th>
  </tr>
  <tr>
   <td><code>next</code></td>
   <td>
    <p>Une fonction sans argument qui renvoie un objet qui possède au moins deux propriétés :</p>

    <ul>
     <li><code>done</code> (un booléen)

      <ul>
       <li>Qui vaut <code>true</code> lorsque l'itérateur a fini la suite. Dans ce cas, la propriété <code>value</code> sera facultative et permettra de spécifier la valeur de retour de l'itérateur. Les valeurs de retour sont détaillées <a href="https://www.2ality.com/2013/06/iterators-generators.html#generators-as-threads">ici</a>.</li>
       <li>Qui vaut <code>false</code> lorsque l'itérateur a pu produire la prochaine valeur de la suite. Si on ne définit pas la propriété <code>done</code>, on aura ce comportement par défaut.</li>
      </ul>
     </li>
     <li><code>value</code> : n'importe quelle valeur JavaScript, renvoyée par l'itérateur. Cette propriété peut être absente lorsque <code>done</code> vaut <code>true</code>.</li>
    </ul>

    <p>La méthode <code>next</code> doit toujours renvoyer un objet contenant les propriétés <code>done</code> et <code>value</code>. Si c'est une valeur primitive qui est renvoyée (ex. <code>false</code> ou <code>undefined</code>), une exception {{jsxref("TypeError")}} sera levée ("iterator.next() returned a non-object value").</p>
   </td>
  </tr>
 </tbody>
</table>

<p>Certains itérateurs sont des itérables :</p>

<pre class="brush: js">var unTableau = [1, 5, 7];
var élémentsDuTableau = unTableau.entries();

élémentsDuTableau.toString();    // "[object Array Iterator]"
élémentsDuTableau === élémentsDuTableau[Symbol.iterator]();    // true
</pre>

<h2 id="Exemples_d'utilisation_des_protocoles_d'itération">Exemples d'utilisation des protocoles d'itération</h2>

<p>Une {{jsxref("String")}} est un exemple d'objet natif itérable :</p>

<pre class="brush: js">var uneChaîne = "coucou";
typeof uneChaîne[Symbol.iterator];           // "function"
</pre>

<p><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/@@iterator">L'itérateur par défaut d'un objet <code>String</code></a> renverra les caractères de la chaîne les uns à la suite des autres :</p>

<pre class="brush: js">var itérateur = uneChaîne[Symbol.iterator]();
itérateur + "";     // "[object String Iterator]"

itérateur.next();  // { value: "c", done: false }
itérateur.next();  // { value: "o", done: false }
itérateur.next();  // { value: "u", done: false }
itérateur.next();  // { value: "c", done: false }
itérateur.next();  // { value: "o", done: false }
itérateur.next();  // { value: "u", done: false }
itérateur.next();  // { value: undefined, done: true }</pre>

<p>Certains éléments natifs du langage, tels que <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateur_de_décomposition">la syntaxe de décomposition</a>, utilisent ce même protocole :</p>

<pre class="brush: js">[...uneChaîne];   // ["c", "o", "u", "c", "o", "u"]</pre>

<p>Il est possible de redéfinir le comportement par défaut en définissant soi-même le symbole <code>@@iterator</code> :</p>

<pre class="brush: js">var uneChaîne = new String("yo");          // on construit un objet String explicitement afin d'éviter la conversion automatique

uneChaîne[Symbol.iterator] = function() {
  return { // l'objet itérateur qui renvoie un seul élément, la chaîne "bop"
    next: function() {
      if (this._first) {
        this._first = false;
        return { value: "bop", done: false };
      } else {
        return { done: true };
      }
    },
    _first: true
  };
};
</pre>

<p>On notera que redéfinir le symbole <code>@@iterator</code> affecte également le comportement des éléments du langage qui utilisent le protocole :</p>

<pre class="brush: js">[...uneChaîne];  // ["bop"]
uneChaîne + "";  // "yo"
</pre>

<h2 id="Exemples_d'itérables">Exemples d'itérables</h2>

<h3 id="Les_itérables_natifs">Les itérables natifs</h3>

<p>{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} et {{jsxref("Set")}} sont des itérables natifs car leurs prototypes possèdent une méthode <code>@@iterator</code>.</p>

<h3 id="Les_itérables_définis_par_l'utilisateur">Les itérables définis par l'utilisateur</h3>

<p>Il est possible de construire un itérable dans un script de la façon suivante :</p>

<pre class="brush: js">var monItérable = {};
monItérable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};
[...monItérable]; // [1, 2, 3]
</pre>

<h3 id="Les_API_natives_utilisant_des_itérables">Les API natives utilisant des itérables</h3>

<p>Plusieurs API utilisent les itérables, par exemple : {{jsxref("Map", "Map([itérable])")}}, {{jsxref("WeakMap", "WeakMap([itérable])")}}, {{jsxref("Set", "Set([itérable])")}} et {{jsxref("WeakSet", "WeakSet([itérable])")}} :</p>

<pre class="brush: js">var monObjet = {};
new Map([[1,"a"],[2,"b"],[3,"c"]]).get(2);  // "b"
new WeakMap([[{},"a"],[monObjet,"b"],[{},"c"]]).get(monObjet); // "b"
new Set([1, 2, 3]).has(3);    // true
new Set("123").has("2");      // true
new WeakSet(function*() {
    yield {};
    yield monObjet;
    yield {};
}()).has(monObjet);           // true
</pre>

<p>ainsi que {{jsxref("Promise.all", "Promise.all(itérable)")}}, {{jsxref("Promise.race", "Promise.race(itérable)")}}, {{jsxref("Array.from", "Array.from()")}}</p>

<h3 id="Les_éléments_de_syntaxe_utilisant_des_itérables">Les éléments de syntaxe utilisant des itérables</h3>

<p>Certains éléments du langage utilisent des itérables, par exemple : <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/for...of">for..of</a></code>, <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateur_de_d%C3%A9composition">la syntaxe de décomposition</a>, <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/yield*">yield*</a>, <a href="/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Affecter_par_d%C3%A9composition">l'affectation par décomposition</a> :</p>

<pre class="brush: js">for(let value of ["a", "b", "c"]){
    console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen(){
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a; // "a"

</pre>

<h3 id="Itérables_mal-formés">Itérables mal-formés</h3>

<p>Si une méthode <code>@@iterator</code> d'un objet itérable ne renvoie pas d'objet itérateur, on dira que cet objet est un itérable mal-formé. Utiliser de tels itérables peut provoquer des exceptions lors de l'exécution ou un comportement erratique :</p>

<pre class="brush: js">var itérableMalFormé = {}
itérableMalFormé[Symbol.iterator] = () =&gt; 1
[...itérableMalFormé] // TypeError: [] is not a function
</pre>

<h2 id="Exemples_d'itérateurs">Exemples d'itérateurs</h2>

<h3 id="Un_itérateur_simple">Un itérateur simple</h3>

<pre class="brush: js">function créerItérateur(tableau){
    var nextIndex = 0;

    return {
       next: function(){
           return nextIndex &lt; tableau.length ?
               {value: tableau[nextIndex++], done: false} :
               {done: true};
       }
    }
}

var it = créerItérateur(['yo', 'ya']);

console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true
</pre>

<h3 id="Un_itérateur_infini">Un itérateur infini</h3>

<pre class="brush: js">function créateurID(){
    var index = 0;

    return {
       next: function(){
           return {value: index++, done: false};
       }
    };
}

var it = créateurID();

console.log(it.next().value); // '0'
console.log(it.next().value); // '1'
console.log(it.next().value); // '2'
// ...
</pre>

<h3 id="Avec_un_générateur">Avec un générateur</h3>

<pre class="brush: js">function* créerUnGénérateurSimple(tableau){
    var nextIndex = 0;

    while(nextIndex &lt; tableau.length){
        yield tableau[nextIndex++];
    }
}

var gen = créerUnGénérateurSimple(['yo', 'ya']);

console.log(gen.next().value); // 'yo'
console.log(gen.next().value); // 'ya'
console.log(gen.next().done);  // true

function* créateurID(){
    var index = 0;
    while(true)
        yield index++;
}

var gen = créateurID();

console.log(gen.next().value); // '0'
console.log(gen.next().value); // '1'
console.log(gen.next().value); // '2'
</pre>

<h3 id="Avec_une_classe_ECMAScript_2015_(ES6)">Avec une classe ECMAScript 2015 (ES6)</h3>

<pre class="brush: js">class ClasseSimple {
  constructor(data) {
    this.index = 0;
    this.data = data;
  }

  [Symbol.iterator]() {
    return {
      next: () =&gt; {
        if (this.index &lt; this.data.length) {
          return {value: this.data[this.index++], done: false};
        } else {
          this.index = 0;
          // En réinitialisant l'index, on peut
          // "reprendre" l'itérateure sans avoir
          // à gérer de mise à jour manuelle
          return {done: true};
        }
      }
    };
  }
}

const simple = new ClasseSimple([1,2,3,4,5]);

for (const val of simple) {
  console.log(val);  // '1' '2' '3' '4' '5'
}
</pre>

<h2 id="Un_générateur_est-il_un_itérateur_ou_un_itérable">Un générateur est-il un itérateur ou un itérable ?</h2>

<p>Les deux réponses sont correctes :</p>

<pre class="brush: js">var unObjetGénérateur = function*(){
    yield 1;
    yield 2;
    yield 3;
}()
typeof unObjetGénérateur.next
// "function", car il possède une fonction next, c'est donc un itérateur
typeof unObjetGénérateur[Symbol.iterator]
// "function", car il possède une méthode @@iterator, c'est donc un itérable
unObjetGénérateur[Symbol.iterator]() === unObjetGénérateur
// vrai car la méthode @@iterator renvoie elle-même, un itérateur, c'est donc un itérable bien formé
[...unObjetGénérateur]
// [1, 2, 3]
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
   <td>{{SpecName('ES2015', '#sec-iteration', 'Iteration')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-iteration', 'Iteration')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Pour plus d'informations sur les générateurs définis par ES2015, voir <a href="/fr/docs/Web/JavaScript/Reference/Instructions/function*">la page dédiée</a>.</li>
</ul>
