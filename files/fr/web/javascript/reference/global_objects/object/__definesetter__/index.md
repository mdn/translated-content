---
title: Object.prototype.__defineSetter__()
slug: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
tags:
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/__defineSetter__
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/defineSetter
---
<div>{{JSRef}}</div>

<div class="warning">
<p><strong>Attention :</strong> Cette fonctionnalité est dépréciée et il est préférable d'utiliser l'API {{jsxref("Object.defineProperty()")}} et <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Initialisateur_objet">la syntaxe d'initialisation d'objets</a>. Toutefois, <code>__defineGetter__</code> est largement utilisée sur le Web et est implémentée. Il est donc peu probable que les navigateurs retirent cette méthode.</p>
</div>

<p>La méthode <code><strong>__defineSetter__</strong></code> permet de lier une propriété d'un objet à une fonction qui sera exécutée pour toute tentative de définition/changement de cette propriété.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>obj</var>.__defineSetter__(<var>prop</var>, <var>fun</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>Une chaîne de caractères qui contient le nom de la propriété qu'on souhaite lier à la fonction.</dd>
 <dt><code>fun</code></dt>
 <dd>Une fonction à appeler pour chaque modification de la propriété. Cette fonction prend la forme suivante :
 <pre class="brush: js">function(<var>val</var>) { . . . }</pre>

 <dl>
  <dt><code>val</code></dt>
  <dd>Un alias pour la variable contenant la nouvelle valeur qu'on souhaite affecter à <code>prop</code>.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>{{jsxref("undefined")}}.</p>

<h2 id="Description">Description</h2>

<p>La méthode <code>__defineSetter__</code> permet de définir un {{jsxref("Opérateurs/L_opérateur_set", "mutateur", "", 1)}} sur un objet pré-existant.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">// Méthode non-standard et dépréciée

var o = {};
o.__defineSetter__('valeur', function(val) { this.uneAutreValeur = val; });
o.valeur = 5;
console.log(o.valeur); // undefined
console.log(o.uneAutreValeur); // 5


// Façons standard

// En utilisant l'opérateur set
var o = { set valeur(val) { this.uneAutreValeur = val; } };
o.valeur = 5;
console.log(o.valeur); // undefined
console.log(o.uneAutreValeur); // 5

// En utilisant Object.defineProperty
var o = {};
Object.defineProperty(o, 'valeur', {
  set: function(val) {
    this.uneAutreValeur = val;
  }
});
o.valeur = 5;
console.log(o.valeur); // undefined
console.log(o.uneAutreValeur); // 5
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="spectable standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.prototype.__defineSetter__', 'Object.prototype.__defineSetter__()')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Incluse dans l'annexe normative pour les fonctionnalités historiques liées aux navigateurs web (la spécification codifie ce qui est déjà présent dans les différentes implémentations).</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.defineSetter")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.prototype.defineGetter","Object.prototype.__defineGetter__()")}}</li>
 <li>L'opérateur {{jsxref("Opérateurs/L_opérateur_set", "set")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.prototype.lookupGetter","Object.prototype.__lookupGetter__()")}}</li>
 <li>{{jsxref("Object.prototype.lookupSetter","Object.prototype.__lookupSetter__()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters">Guide JavaScript : Définir des getters et setters</a></li>
 <li><a href="https://whereswalden.com/2010/04/16/more-spidermonkey-changes-ancient-esoteric-very-rarely-used-syntax-for-creating-getters-and-setters-is-being-removed/">[Billet de blog] Deprecation of __defineGetter__ and __defineSetter__</a> (en anglais)</li>
 <li>{{bug(647423)}}</li>
</ul>
