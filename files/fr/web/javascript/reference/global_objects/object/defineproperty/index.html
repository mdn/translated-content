---
title: Object.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/defineProperty
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/defineProperty
---
<div>{{JSRef}}</div>

<p>La méthode statique <code><strong>Object.defineProperty()</strong></code> permet de définir une nouvelle propriété ou de modifier une propriété existante, directement sur un objet. La méthode renvoie l'objet modifié.</p>

<div class="note">
<p><strong>Note :</strong> Cette méthode est directement appelée via le constructeur {{jsxref("Object")}} plutôt que sur les instances de type <code>Object</code>.</p>
</div>

<div>{{EmbedInteractiveExample("pages/js/object-defineproperty.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.defineProperty(<var>obj</var>, <var>prop</var>, <var>descripteur</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>L'objet sur lequel on souhaite définir ou modifier une propriété.</dd>
 <dt><code>prop</code></dt>
 <dd>Le nom ou le symbole ({{jsxref("Symbol")}}) de la propriété qu'on définit ou qu'on modifie.</dd>
 <dt><code>descripteur</code></dt>
 <dd>Le descripteur de la propriété qu'on définit ou qu'on modifie.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'objet qui a été passé à la fonction et qui a éventuellement été modifié.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode permet d'ajouter ou de modifier une propriété d'un objet avec une certaine précision. En effet, quand on ajoute une propriété « normalement » (via une affectation), on crée une propriété dont le comportement par défaut fait qu'elle sera listée dans une énumération de propriétés (par exemple avec une boucle {{jsxref("Instructions/for...in","for...in")}} ou via la méthode {{jsxref("Object.keys")}}), dont la valeur peut être changée et qui peut être supprimée via {{jsxref("Opérateurs/L_opérateur_delete","delete")}}. La méthode <code>Object.defineProperty()</code> permet de préciser le comportement attendu, potentiellement différent de celui par défaut.</p>

<p>Les descripteurs de propriété existent en deux versions : les descripteurs de données et les descripteurs d'accesseur. Un descripteur de données est une propriété qui possède une valeur et qui peut ou non être accessible en écriture. Un descripteur d'accesseur est une propriété décrite par une paire d'accesseur/mutateur (<em>getter/setter</em>) qui sont des fonctions. Un descripteur est un descripteur de données ou un descripteur d'accesseur, il ne peut pas être les deux.</p>

<p>Les descripteurs de données et d'accesseur sont des objets. Ils partagent les propriétés suivantes (la valeur par défaut indiquée est utilisée lorsqu'on passe par <code>Object.defineProperty()</code>) :</p>

<dl>
 <dt><code>configurable</code></dt>
 <dd><code>true</code> si et seulement si le type de ce descripteur de propriété peut être changé et si la propriété peut/pourra être supprimée de l'objet correspondant..<br>
 <strong>La valeur par défaut est </strong><strong><code>false</code></strong><strong>.</strong></dd>
 <dt><code>enumerable</code></dt>
 <dd><code>true</code> si et seulement si la propriété apparaît lors de l'énumération des propriétés de l'objet correspondant.<br>
 <strong><strong>La valeur par défaut est</strong> </strong><strong><code>false</code></strong><strong>.</strong></dd>
</dl>

<p>Un descripteur de données possède les propriétés optionnelles suivantes :</p>

<dl>
 <dt><code>value</code></dt>
 <dd>La valeur associée à la propriété. Peut être n'importe quelle valeur JavaScript valide (un nombre, un objet, etc.).<br>
 <strong>La valeur par défaut est {{jsxref("undefined")}}.</strong></dd>
 <dt><code>writable</code></dt>
 <dd><code>true</code> si et seulement si la valeur associée à la propriété peut être modifiée en utilisant un {{jsxref("Opérateurs/Opérateurs_d_affectation", "opérateur d'affectation", "", 1)}}.<br>
 <strong><strong>La valeur par défaut est</strong> <code>false</code>.</strong></dd>
</dl>

<p>Un descripteur d'accesseur possède les propriétés optionnelles suivantes :</p>

<dl>
 <dt><code>get</code></dt>
 <dd>Une fonction qui est utilisée comme accesseur (<em>getter</em>) pour la propriété ou bien {{jsxref("undefined")}} s'il n'existe pas d'accesseur. La valeur de retour de la fonction sera utilisée comme valeur pour la propriété. Lorsqu'on accède à la propriété, la fonction est appelée sans argument avec <code>this</code> qui est l'objet pour lequel on souhaite consulter la propriété.<br>
 <strong><strong>La valeur par défaut est</strong> {{jsxref("undefined")}}</strong>.</dd>
 <dt><code>set</code></dt>
 <dd>Une fonction qui est utilisée comme mutateur (<em>setter</em>) pour la propriété ou bien {{jsxref("undefined")}} s'il n'existe pas de mutateur. Pour unique argument, la fonction recevra la nouvelle valeur à affecter à la propriété. Le contexte <code>this</code> passé est l'objet sur lequel on souhaite modifier la propriété.<br>
 <strong>La valeur par défaut est {{jsxref("undefined")}}</strong>.</dd>
</dl>

<p>Si un descripteur ne possède aucune des clés <code>value</code>, <code>writable</code>, <code>get</code> ou <code>set</code>, il est considéré comme un descripteur de données. Si un descripteur possède à la fois une propriété <code>value</code> ou <code>writable</code> et une propriété <code>get</code> ou <code>set</code>, un exception sera déclenchée.</p>

<p>Il faut garder à l'esprit que ces options ne sont pas nécessairement les descripteurs des propriétés propres. Elles peuvent être héritées et faire partie de la chaine des prototypes. Afin de s'assurer que les valeur par défaut sont préservées, on peut d'abord geler le prototype {{jsxref("Object.prototype")}}, définir toutes les options explicitement ou faire pointer la propriété {{jsxref("Object.prototype.__proto__", "__proto__")}} vers {{jsxref("null")}} (par exemple avec {{jsxref("Object.create","Object.create(null)")}}).</p>

<pre class="brush:js">var obj = {};
// en utilisant __proto__
Object.defineProperty(obj, "clé", {
  __proto__: null, // aucune propriété héritée
  value: "static"  // non énumérable
                   // non configurable
                   // non accessible en écriture
                   // par défaut
});

// en étant explicite
Object.defineProperty(obj, "clé", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static"
});

// en recyclant un objet
function avecValeur(valeur) {
  var d = avecValeur.d || (
    avecValeur.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value: null
    }
  );
  if(d.value !== valeur){
    d.value = valeur;
  }
  return d;
}
// ... autres instructions... puis
Object.defineProperty(obj, "clé", avecValeur("static"));

// si la méthode freeze est disponible,
// on peut empêcher que du code ajoute des
// propriétés (valeur, get, set, enumerable,
// writable, configurable) au prototype d'Object
(Object.freeze||Object)(Object.prototype);</pre>

<h2 id="Exemples">Exemples</h2>

<p>Pour plus d'exemples utilisant la méthode <code>Object.defineProperty</code> avec une syntaxe de masque binaire, voir <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty/Exemples_suppl%C3%A9mentaires">les exemples supplémentaires</a>.</p>

<h3 id="Créer_une_propriété">Créer une propriété</h3>

<p>Lorsqu'une propriété n'existe pas pour l'objet, <code>Object.defineProperty()</code> créera une nouvelle propriété telle qu'elle est décrite. Certains champs du descripteur peuvent manquer, les valeurs par défaut seront alors utilisées. Tous les booléens ont <code>false</code> pour valeur par défaut. Une propriété définie sans <code>get</code>/<code>set</code>/<code>value</code>/<code>writable</code> est appelée « générique » et « correspond » à un descripteur de données.</p>

<pre class="brush: js">var o = {}; // on crée un nouvel objet

// Exemple d'une propriété ajoutée via defineProperty
// avec un descripteur de données
Object.defineProperty(o, "a", {value : 37,
                               writable : true,
                               enumerable : true,
                               configurable : true});
// la propriété 'a' existe pour l'objet o et vaut 37

// Exemple d'une propriété ajoutée via defineProperty
// avec un descripteur d'accesseur
var valeurB = 38;
Object.defineProperty(o, "b", {get : function(){ return valeurB; },
                               set : function(nouvelleValeur){
                                           valeurB = nouvelleValeur;
                                     },
                               enumerable : true,
                               configurable : true});
o.b; // 38
// la propriété 'b' existe pour l'objet o
// et vaut 38
// La valeur de o.b est désormais toujours
// identique à valeurB, sauf si o.b est redéfini

// On ne peut pas mélanger les deux :
Object.defineProperty(o, "conflit", { value: 0x9f91102,
                                       get: function() {
                                            return 0xdeadbeef;
                                       }
                                     });
// une exception TypeError sera lancée : value n'apparaît
// que dans les descripteurs de données
// get n'apparait que dans les descripteurs d'accesseur
</pre>

<h3 id="Modifier_une_propriété_existante">Modifier une propriété existante</h3>

<p>Quand une propriété existe d'ores et déjà pour un objet, <code>Object.defineProperty()</code> tentera de modifier la propriété pour qu'elle corresponde aux valeurs indiquées dans le descripteur et à la configuration de l'objet courant. Si l'ancien descripteur avait <code>configurable</code> à  <code>false</code> (la propriété est dite non-configurable), aucun attribut, à l'exception de <code>writable</code>, ne peut être changé. Dans ce cas, il n'est pas possible de changer entre les types de descripteur.</p>

<p>Si une propriété est non-configurable, son attribut <code>writable</code> ne peut être mis qu'à <code>false</code>.</p>

<p>Une exception {{jsxref("TypeError")}} peut être levée quand on essaie de modifier des attributs de propriété non-configurables (en dehors des attributs <code>value</code> et <code>writable</code>) sauf dans le cas où les valeurs souhaitées sont les mêmes que les valeurs courantes.</p>

<h4 id="Attribut_writable">Attribut <code>writable</code></h4>

<p>Lorsque l'attribut <code>writable</code> vaut <code>false</code> pour la propriété, cette dernière n'est plus accessible en écriture. Il est impossible de la réaffecter.</p>

<pre class="brush: js">var o = {}; // On crée un nouvel objet

Object.defineProperty(o, "a", { value : 37,
                                writable : false });

console.log(o.a); // inscrit 37 dans les journaux (logs)
o.a = 25; // Aucune exception n'est lancée (on aurait une
          // exception en mode strict, y compris si la
          // valeur souhaitée avait été la même)
console.log(o.a); // inscrit toujours 37.
                  //L'affectation n'a pas fonctionné.</pre>

<pre class="brush: js">// En mode strict
(function() {
  'use strict';
  var o = {};
  Object.defineProperty(o, 'b', {
    value: 2,
    writable: false
  });
  o.b = 3; // déclenche une TypeError: "b" est en lecture seule
  return o.b; // renvoie 2 sans la ligne précédente
}());
</pre>

<p>Comme on l'a vu dans l'exemple, essayer de modifier une propriété non accessible en écriture ne la modifie pas. Cela ne rend pas d'erreur non plus (en mode non-strict).</p>

<h4 id="Attribut_enumerable">Attribut <code>enumerable</code></h4>

<p>L'attribut de propriété <code>enumerable</code> permet de définir si la propriété est sélectionnée par {{jsxref("Object.assign()")}} ou via l'opérateur <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax">de décomposition</a> (<em>spread</em>). Pour les propriétés qui ne sont pas nommées avec des symboles, les propriétés énumérables correspondent aux propriétés qui sont listées avec une boucle {{jsxref("Instructions/for...in","for...in")}} ou avec la méthode {{jsxref("Object.keys()")}}.</p>

<pre class="brush: js">var o = {};
Object.defineProperty(o, 'a', {
  value: 1,
  enumerable: true
});
Object.defineProperty(o, 'b', {
  value: 2,
  enumerable: false
});
Object.defineProperty(o, 'c', {
  value: 3
}); // enumerable vaut false par défaut
o.d = 4; // enumerable vaut true par défaut
         // lorsqu'on crée une propriété
         // en la définissant
Object.defineProperty(o, Symbol.for('e'), {
  value: 5,
  enumerable: true
});
Object.defineProperty(o, Symbol.for('f'), {
  value: 6,
  enumerable: false
});

for (var i in o) {
  console.log(i);
}
// affiche 'a' et 'd' (dans un ordre indéfini)

Object.keys(o); // ['a', 'd']

o.propertyIsEnumerable('a'); // true
o.propertyIsEnumerable('b'); // false
o.propertyIsEnumerable('c'); // false
o.propertyIsEnumerable('d'); // true
o.propertyIsEnumerable(Symbol.for('e')); // true
o.propertyIsEnumerable(Symbol.for('f')); // false

var p = { ...o }
p.a // 1
p.b // undefined
p.c // undefined
p.d // 4
p[Symbol.for('e')] // 5
p[Symbol.for('f')] // undefined
</pre>

<h4 id="Attribut_configurable">Attribut <code>configurable</code></h4>

<p>L'attribut <code>configurable</code> permet de contrôler si la propriété peut être supprimée et si les autres attributs de propriété (voir ci-avant), à l'exception de <code>value</code> ou de <code>writable</code>, peuvent être modifiés.</p>

<pre class="brush: js">var o = {};
Object.defineProperty(o, "a", { get : function(){return 1;},
                                configurable : false } );

Object.defineProperty(o, "a", {configurable : true});
// renvoie une TypeError

Object.defineProperty(o, "a", {enumerable : true});
// renvoie une TypeError

Object.defineProperty(o, "a", {set : function(){}});
// renvoie une TypeError (set était non défini avant)

Object.defineProperty(o, "a", {get : function(){return 1;}});
// renvoie une TypeError
// (bien que le nouveau get soit identique au précédent)

Object.defineProperty(o, "a", {value : 12});
// renvoie une TypeError

console.log(o.a); // log 1
delete o.a; // Rien ne se passe
console.log(o.a); // log 1
</pre>

<p>Si l'attribut <code>configurable</code> de <code>o.a</code> avait été <code>true</code>, aucune de ces erreurs n'aurait été renvoyée et la propriété aurait été supprimée au final.</p>

<h3 id="Ajouter_des_propriétés_et_des_valeurs_par_défaut">Ajouter des propriétés et des valeurs par défaut</h3>

<p>Il est toujours important de savoir comment les valeurs par défaut sont appliquées. Le comportement est souvent différent entre une affectation simple et l'utilisation de <code>Object.defineProperty()</code>. Par exemple :</p>

<pre class="brush: js">var o = {};

o.a = 1;
// est équivalent à :
Object.defineProperty(o, "a", {value : 1,
                               writable : true,
                               configurable : true,
                               enumerable : true});


// D'un autre côté,
Object.defineProperty(o, "a", {value : 1});
// sera équivalent à :
Object.defineProperty(o, "a", {value : 1,
                               writable : false,
                               configurable : false,
                               enumerable : false});
</pre>

<h3 id="Accesseurs_et_mutateurs_adaptés">Accesseurs et mutateurs adaptés</h3>

<p>L'exemple ci-dessous illustre comment implémenter un objet qui archive des données. Lorsque la propriété <code>température</code> est définie, on ajoute une entrée au tableau <code>archive</code> :</p>

<pre class="brush: js">function Archiviste() {
  var température = null;
  var archive = [];

  Object.defineProperty(this, "température",{
    get: function() {
      console.log("accès !");
      return température;
    },
    set: function(value) {
      température = value;
      archive.push({val: température});
    }
  });

  this.getArchive = function() {return archive;};
}

var arc = new Archiviste();
arc.température; // "accès !"
arc.température = 11;
arc.température = 13;
arc.getArchive(); // [{val: 11}, {val: 13}]
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">É tat</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.3.6', 'Object.defineProperty')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.8.5.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.defineproperty', 'Object.defineProperty')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>
    <p>{{SpecName('ESDraft', '#sec-object.defineproperty', 'Object.defineProperty')}}</p>
   </td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.defineProperty")}}</p>

<h2 id="Notes_de_compatibilité">Notes de compatibilité</h2>

<h3 id="Redéfinir_la_propriété_length_d'un_tableau_(Array)">Redéfinir la propriété <code>length</code> d'un tableau (<code>Array</code>)</h3>

<p>Il est possible de redéfinir la propriété {{jsxref("Array.length", "length")}} utilisée pour les tableaux, avec les restrictions vues. (La propriété <code>length</code> est initialement non-configurable, non-enumérable et accessible en écriture (<code>writable</code> vaut <code>true</code>)). Ainsi, sur un tableau, si rien n'a été fait, on peut modifier la valeur de la propriété<code> length</code> ou la rendre non accessible en écriture. Il n'est pas permis de changer son caractère énumérable ou configurable. Cependant, tous les navigateurs n'autorisent pas cette redéfinition.</p>

<p>Les versions de Firefox 4 à 22 renverront une exception {{jsxref("TypeError")}} pour chaque tentative (licite ou non) de modification de la propriété <code>length</code> d'un tableau.</p>

<p>Pour les versions de Chrome qui implémentent <code>Object.defineProperty()</code>, elles ignorent, dans certaines circonstances, une redéfinition de la propriété utilisant une valeur différente de la valeur courante de <code>length</code>. Sous certaines circonstances, le changement de l'accès en écriture n'aura aucun effet (et ne renverra aucune exception). Les méthodes relatives comme  {{jsxref("Array.prototype.push")}} ne respectent pas le non accès en écriture.</p>

<p>Pour les versions de Safari qui implémentent <code>Object.defineProperty()</code> elles ignorent la redéfinition d'une valeur différente de la valeur courante. Toute tentative de modifier l'accès en écriture échouera silencieusement (aucune modification effective, aucune exception renvoyée).</p>

<p>Seules les versions Internet Explorer 9 et supérieures et Firefox 23 et supérieures semblent supporter complètement la redéfinition de la propriété <code>length</code> pour les tableaux. À l'heure actuelle, il n'est pas conseillé de s'attendre à ce qu'une telle redéfinition fonctionne ou ne fonctionne pas. Même dans le cas où on peut supposer que cela fonctionne de façon cohérente : <a href="https://whereswalden.com/2013/08/05/new-in-firefox-23-the-length-property-of-an-array-can-be-made-non-writable-but-you-shouldnt-do-it/">ce n'est pas vraiment une bonne idée de le faire</a> (en anglais).</p>

<h3 id="Notes_spécifiques_relatives_à_Internet_Explorer_8">Notes spécifiques relatives à Internet Explorer 8</h3>

<p>Internet Explorer 8 a implémenté une méthode <code>Object.defineProperty()</code> <a class="external" href="https://msdn.microsoft.com/en-us/library/dd229916%28VS.85%29.aspx">uniquement utilisable sur les objets DOM</a>. Quelques éléments sont à noter :</p>

<ul>
 <li>L'utilisation de <code>Object.defineProperty()</code> sur les objets natifs renvoie une erreur.</li>
 <li>Les attributs de propriétés doivent être définis avec certaines valeurs. <code>true</code> (pour <code>Configurable</code>), <code>true</code> (pour <code>enumerable</code>), <code>true</code> (pour <code>writable</code>) pour les descripteurs de données et <code>true</code> pour <code>configurable</code>, <code>false</code> pour <code>enumerable</code> pour les descripteurs d'accesseur. Fournir d'autres valeurs résultera en une erreur (à confirmer).</li>
 <li>Pour modifier une propriété, il faut d'abord la supprimer. Si ça n'a pas été fait, elle reste telle quelle.</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Caract%C3%A8re_%C3%A9num%C3%A9rable_des_propri%C3%A9t%C3%A9s_et_rattachement">Énumérabilité et maîtrise des propriétés</a></li>
 <li>{{jsxref("Object.defineProperties()")}}</li>
 <li>{{jsxref("Object.propertyIsEnumerable()")}}</li>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Object.prototype.watch()")}}</li>
 <li>{{jsxref("Object.prototype.unwatch()")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_get", "get")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_set", "set")}}</li>
 <li>{{jsxref("Object.create()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty/Exemples_suppl%C3%A9mentaires">Exemples supplémentaires utilisant <code>Object.defineProperty</code></a></li>
 <li>{{jsxref("Reflect.defineProperty()")}}</li>
</ul>
