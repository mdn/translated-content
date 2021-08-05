---
title: Définir une méthode
slug: Web/JavaScript/Reference/Functions/Method_definitions
tags:
  - ECMAScript 2015
  - Fonctions
  - JavaScript
  - Object
  - Reference
  - Syntaxe
translation_of: Web/JavaScript/Reference/Functions/Method_definitions
original_slug: Web/JavaScript/Reference/Fonctions/Définition_de_méthode
---
<div>{{JsSidebar("Functions")}}</div>

<p>Avec ECMAScript 2015 (ES6), il est possible d'utiliser une notation plus courte pour définir des méthodes au sein des littéraux objets. On peut ainsi définir plus rapidement une fonction qui sera utilisée comme méthode.</p>

<div>{{EmbedInteractiveExample("pages/js/functions-definitions.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var obj = {
  <var>property</var>( <var>parameters…</var> ) {},
  *<var>generator</var>( <var>parameters…</var> ) {},
  async property( <var>parameters…</var> ) {},
  async* generator( <var>parameters…</var> ) {},

  // avec les noms calculés :
  [property]( <var>parameters…</var> ) {},
  *[generator]( <var>parameters…</var> ) {},
  async [property]( <var>parameters…</var> ) {},

  // avec la syntaxe pour les accesseurs
  // mutateurs :
  get <var>property</var>() {},
  set <var>property</var>(<var>value</var>) {}
};
</pre>

<h2 id="Description">Description</h2>

<p>La notation raccourcie est semblable à la syntaxe introduite par ECMAScript 5 pour les <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/get">accesseurs</a> et <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/set">mutateurs</a>.</p>

<p>Le code suivant :</p>

<pre class="brush: js">var obj = {
  toto: function() {
    /* du code */
  },
  truc: function() {
    /* du code */
  }
};</pre>

<p>Peut désormais être raccourci en :</p>

<pre class="brush: js">var obj = {
  toto() {
    /* du code */
  },
  truc() {
    /* du code */
  }
};</pre>

<h3 id="Notation_raccourcie_pour_les_générateurs">Notation raccourcie pour les générateurs</h3>

<p><a href="/fr/docs/Web/JavaScript/Reference/Instructions/function*">Les générateurs</a> sont des méthodes et peuvent donc être définis en utilisant la notation raccourci. Lorsqu'on les utilise :</p>

<ul>
 <li>L'astérisque de la notation raccourcie doit être située avant le nom de la propriété pour le générateur. Autrement dit, <code>* g(){}</code> fonctionnera mais <code>g*(){}</code> ne fonctionnera pas.</li>
 <li>Les définitions des méthodes qui ne sont pas des générateurs ne peuvent pas contenir le mot-clé <code>yield</code>. Cela signifie que <a href="/fr/docs/Web/JavaScript/Reference/Instructions/Fonction_génératrice_historique">l'ancienne syntaxe pour les générateurs</a> ne fonctionnera pas et déclenchera une exception {{jsxref("SyntaxError")}}. Il faut toujours utiliser <code>yield</code> avec l'astérisque (<code>*</code>).</li>
</ul>

<pre class="brush: js">// Notation utilisant une propriété nommée (avant-ES2015)
var obj2 = {
  g: function*() {
    var index = 0;
    while(true)
      yield index++;
  }
};

// La même définition, en utilisant la notation raccourcie
var obj2 = {
  * g() {
    var index = 0;
    while(true)
      yield index++;
  }
};

var it = obj2.g();
console.log(it.next().value); // 0
console.log(it.next().value); // 1</pre>

<h3 id="Méthodes_asynchrones_avec_notation_raccourcie">Méthodes asynchrones avec notation raccourcie</h3>

<p><a href="/fr/docs/Web/JavaScript/Reference/Instructions/async_function">Les méthodes asynchrones</a> peuvent également être définies grâce à une syntaxe raccourcie.</p>

<pre class="brush: js">// On utilise une propriété nommée
var obj3 = {
  f: async function () {
    await une_promesse;
  }
};

// Ici, on obtient le même résultat
// avec la notation raccourcie
var obj3 = {
  async f() {
    await une_promesse;
  }
};
</pre>

<h3 id="Méthodes_génératrices_asynchrones">Méthodes génératrices asynchrones</h3>

<p>Les méthodes génératrices peuvent également être asynchrones (cf. <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/async_function">async</a></code>) :</p>

<pre class="brush: js">var obj4 = {
  f: async function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

// Le code équivalent avec la
// notation raccourcie
var obj4 = {
  async* f() {
    yield 1;
    yield 2;
    yield 3;
  }
};</pre>

<h3 id="Les_définitions_de_méthodes_ne_sont_pas_constructibles">Les définitions de méthodes ne sont pas constructibles</h3>

<p>Les définitions de méthodes ne sont pas des constructeurs et si on tente de les instancier, cela provoquera une exception {{jsxref("TypeError")}}.</p>

<pre class="brush: js">var obj = {
  méthode() {},
};
new obj.méthode; // TypeError: obj.méthode is not a constructor

var obj = {
  * g() {}
};
new obj.g; // TypeError: obj.g is not a constructuer (changé avec ES2016)
</pre>

<h2 id="Exemples">Exemples</h2>

<h3 id="Cas_de_test">Cas de test</h3>

<pre class="brush: js">var obj = {
  a : "toto",
  b(){ return this.a; }
};
console.log(obj.b()); // "toto"
</pre>

<h3 id="Noms_de_propriétés_calculés">Noms de propriétés calculés</h3>

<p>Cette notation raccourcie peut également être utilisée avec des noms de propriétés calculés.</p>

<pre class="brush: js">var bar = {
  toto0 : function (){return 0;},
  toto1(){return 1;},
  ["toto" + 2](){return 2;},
};

console.log(bar.toto0()); // 0
console.log(bar.toto1()); // 1
console.log(bar.toto2()); // 2</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-method-definitions', 'Method definitions')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES2016', '#sec-method-definitions', 'Method definitions')}}</td>
   <td>{{Spec2('ES2016')}}</td>
   <td>Les méthodes génératrices ne doivent pas implémenter la trappe [[Construct]] et déclencher une exception lorsqu'elles sont utilisées avec <code>new</code>.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.functions.method_definitions")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_get">get</a></code></li>
 <li><code><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_set">set</a></code></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale">Grammaire lexicale de JavaScript</a></li>
</ul>
