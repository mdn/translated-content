---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/setPrototypeOf
---
<div>{{JSRef}}</div>

<div class="warning">
<p><strong>Attention :</strong> Étant donnée la façon dont la plupart des moteurs JavaScript optimisent les performances, modifier le <code>[[Prototype]]</code> d'un objet est une opération lente pour chaque navigateur et moteur JavaScript. Les impacts liés aux performances sur ce point sont vastes et subtiles : ils concernent pas uniquement le temps passé à effectuer <code>Object.setPrototypeOf</code>, mais peuvent concerner n'importe quel code pour n'importe quel objet dont <code>[[Prototype]]</code> a été modifié. Si vous souhaitez obtenir des performances optimales, évitez de modifier le <code>[[Prototype]]</code> d'un objet. À la place, il est conseillé de créer un objet avec le prototype voulu en utilisant {{jsxref("Object/create","Object.create()")}}</p>
</div>

<p>La méthode <code><strong>Object.setPrototypeOf()</strong></code> définit le prototype (autrement dit la propriété interne <code>[[Prototype]]</code>) d'un objet donné avec un autre objet ou {{jsxref("null")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.setPrototypeOf(<var>obj</var>, <var>prototype</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>L'objet dont on souhaite définir le prototype.</dd>
 <dt><code>prototype</code></dt>
 <dd>Le nouveau prototype de l'objet (un objet ou <code>null</code>).</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>L'objet sur lequel on a défini le prototype.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode renvoie une exception {{jsxref("TypeError")}} si l'objet dont on souhaite modifier le <code>[[Prototype]]</code> est non-extensible selon {{jsxref("Object.isExtensible")}}.  Cette méthode ne fait rien si le paramètre prototype n'est ni un objet ni {{jsxref("null")}} (par exemple : un nombre, une chaîne, un booléen ou {{jsxref("undefined")}}).  Dans les autres cas, cette méthode substitue le <code>[[Prototype]]</code> de <code>obj</code> avec un nouvel objet.</p>

<p><code>Object.setPrototypeOf()</code> fait partie de la spécification ECMAScript 2015. L'utilisation de cette méthode est considérée comme la façon correcte pour modifier le prototype d'un objet (contrairement à la propriété {{jsxref("Object/proto","Object.prototype.__proto__")}} plus controversée).</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var dict = Object.setPrototypeOf({}, null);
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>En utilisant la propriété {{jsxref("Object.proto", "Object.prototype.__proto__")}}, on peut définir <code>Object.setPrototypeOf</code> si elle n'est pas disponible :</p>

<pre class="brush: js">// Cette prothèse ne fonctionne pas pour IE
Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}</pre>

<h2 id="Ajouter_une_chaîne_de_prototypes_à_un_objet">Ajouter une chaîne de prototypes à un objet</h2>

<p>En combinant <code>Object.getPrototypeOf()</code> et {{jsxref("Object.proto", "Object.prototype.__proto__")}} on peut ajouter une chaîne de prototypes au nouveau prototype d'un objet :</p>

<pre class="brush: js">/**
*** Object.setPrototypeOf(@object, @prototype)
* Change le prototype d'une instance
*
**/

Object.setPrototypeOf = function (oInstance, oProto) {
  oInstance.__proto__ = oProto;
  return oInstance;
};

/**
*** Object.appendChain(@object, @prototype)
*
* Ajoute le premier prototype non-natif d'une chaîne au nouveau prototype.
* Renvoie @object (si c'est une valeur primitive, elle sera transformée
* en objet).
*
*** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
*** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
*
* Ajoute le premier prototype non-natif d'une chaîne à l'objet Function.prototype
* puis ajoute new Function(["@arg"(s)], "@function_body") à cette chaîne.
* Renvoie la fonction.
*
**/

Object.appendChain = function (oChain, oProto) {
  if (arguments.length &lt; 2) {
    throw new TypeError("Object.appendChain - Pas suffisamment d'arguments");
  }
  if (typeof oProto !== 'object' &amp;&amp; typeof oProto !== 'string') {
   throw new TypeError("le deuxième argument de Object.appendChain doit être un objet ou une chaîne");
  }

  var oNewProto = oProto, oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

  for (var o1st = this.getPrototypeOf(o2nd); o1st !== Object.prototype &amp;&amp; o1st !== Function.prototype; o1st = this.getPrototypeOf(o2nd)) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
}
</pre>

<h3 id="Utilisation">Utilisation</h3>

<h4 id="Ajouter_une_chaîne_de_prototypes_à_un_prototype">Ajouter une chaîne de prototypes à un prototype</h4>

<pre class="brush: js">function Mammifère () {
  this.isMammifère = "oui";
}

function EspèceMammifère (sEspèceMammifère) {
  this.espèce = sEspèceMammifère;
}

EspèceMammifère.prototype = new Mammifère();
EspèceMammifère.prototype.constructor = EspèceMammifère;

var oChat = new EspèceMammifère("Felis");

console.log(oChat.isMammifère); // "oui"

function Animal () {
  this.respire = "oui";
}

Object.appendChain(oChat, new Animal());

console.log(oChat.respire); // "oui"
</pre>

<h4 id="Deuxième_exemple_Transformer_une_valeur_primitive_en_une_instance_de_son_constructeur_et_ajouter_sa_chaîne_à_un_prototype">Deuxième exemple : Transformer une valeur primitive en une instance de son constructeur et ajouter sa chaîne à un prototype</h4>

<pre class="brush: js">function MySymbol () {
  this.isSymbol = "yes";
}

var nPrime = 17;

console.log(typeof nPrime); // "number"

var oPrime = Object.appendChain(nPrime, new MySymbol());

console.log(oPrime); // "17"
console.log(oPrime.isSymbol); // "yes"
console.log(typeof oPrime); // "object"
</pre>

<h4 id="Troisième_exemple_Ajouter_une_chaîne_de_prototypes_à_l'objet_Function.prototype_object_et_ajouter_une_nouvelle_fonction_à_cette_chaîne">Troisième exemple : Ajouter une chaîne de prototypes à l'objet Function.prototype object et ajouter une nouvelle fonction à cette chaîne</h4>

<pre class="brush: js">function Personne (sNom) {
  this.identité = sNom;
}

var george = Object.appendChain(new Person("George"),
                                "console.log(\"Salut !!\");");

console.log(george.identité); // "George"
george(); // "Salut !!"</pre>

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
   <td>{{SpecName('ES2015', '#sec-object.setprototypeof', 'Object.setPrototypeOf')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.setprototypeof', 'Object.setPrototypeOf')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.setPrototypeOf")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Reflect.setPrototypeOf()")}}</li>
 <li>{{jsxref("Object.prototype.isPrototypeOf()")}}</li>
 <li>{{jsxref("Object.getPrototypeOf()")}}</li>
 <li>{{jsxref("Object/proto","Object.prototype.__proto__")}}</li>
</ul>
