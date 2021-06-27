---
title: WeakSet
slug: Web/JavaScript/Reference/Global_Objects/WeakSet
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - WeakSet
translation_of: Web/JavaScript/Reference/Global_Objects/WeakSet
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakSet
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>WeakSet</code></strong> permet de créer un ensemble dont les objets sont contenus avec des références <em>faibles</em>.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">new WeakSet([<var>itérable</var>]);</pre>

<h3 id="Paramètre">Paramètre</h3>

<dl>
 <dt><code>itérable</code></dt>
 <dd>Si un <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_.C2.AB_it.C3.A9rable_.C2.BB">objet itérable</a> est présent comme argument, ses éléments seront ajoutés au nouvel objet <code>WeakSet</code>. {{jsxref("null")}} est traité comme {{jsxref("undefined")}}.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var ws = new WeakSet();
var toto = {};
var truc = {};

ws.add(toto);
ws.add(truc);

ws.has(toto);  // true
ws.has(truc);  // true

ws.delete(toto); // retire toto de l'ensemble
ws.has(toto);    // false, toto a été enlevé
</pre>

<p>On notera que <code>toto !== truc</code>. Bien que ce soient des objets similaires, ce ne sont pas les mêmes objets. Aussi, les deux sont ajoutés à l'ensemble.</p>

<h2 id="Description">Description</h2>

<p>Les <code>WeakSet</code> sont des ensembles d'objets. Un objet présent dans un objet <code>WeakSet</code> ne peut apparaître qu'une seule fois, il est unique pour un <code>WeakSet</code> donné.</p>

<p>Les principales différences avec l'objet {{jsxref("Set")}} sont les suivantes :</p>

<ul>
 <li>Contrairement aux <code>Sets</code>, les <code>WeakSets</code> sont des <strong>ensembles uniquement constitués d'objets </strong>et ne peuvent pas contenir des valeurs de n'importe quel type.</li>
 <li>L'objet <code>WeakSet</code> est <em>faible :</em> Les références vers les objets de l'ensemble sont des références faibles. Si aucune autre référence vers l'objet n'est présente en dehors du <code>WeakSet</code>, l'objet pourra alors être nettoyé par le ramasse-miette. Cela signifie également qu'on ne peut pas lister les objets contenus à un instant donné dans l'ensemble. Les objets <code>WeakSets</code> ne sont pas énumérables.</li>
</ul>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt><code>WeakSet.length</code></dt>
 <dd>La valeur de la propriété <code>length</code> est 0.</dd>
 <dt>{{jsxref("WeakSet.prototype")}}</dt>
 <dd>Cette propriété représente le prototype pour le constructeur <code>WeakSet</code>. Il permet d'ajouter des propriétés pour tous les objets <code>WeakSet</code>.</dd>
</dl>

<h2 id="Instances_de_WeakSet">Instances de <code>WeakSet</code></h2>

<p>Toutes les instances de <code>WeakSet</code> héritent de {{jsxref("WeakSet.prototype")}}.</p>

<h3 id="Propriétés_2">Propriétés</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakSet/prototype','Propri.C3.A9t.C3.A9s')}}</p>

<h3 id="Méthodes">Méthodes</h3>

<p>{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakSet/prototype','M.C3.A9thodes')}}</p>

<h2 id="Exemples_2">Exemples</h2>

<h3 id="Détecter_les_références_circulaires">Détecter les références circulaires</h3>

<p>Les fonctions récursives doivent faire attention aux structures de données circulaire qu'elles consommeraient. Les objets <code>WeakSets</code> peuvent être utilisé pour ça :</p>

<pre class="brush: js">// Appeler un callback sur ce qui est stocké dans un objet
function execRecursively(fn, subject, _refs = null){
  if(!_refs)
    _refs = new WeakSet();

  // On évite une récursion infinie
  if(_refs.has(subject))
    return;

  fn(subject);
  if("object" === typeof subject){
    _refs.add(subject);
    for(let key in subject)
      execRecursively(fn, subject[key], _refs);
  }
}

const toto = {
  toto: "Toto",
  truc: {
    truc: "Truc"
  }
};

toto.truc.machin = toto; // Référence circulaire !
execRecursively(obj =&gt; console.log(obj), toto);
</pre>

<p>Ici, on a un objet <code>WeakSet</code> qui est créé lors de la première exécution et qui est passé ensuite à chaque appel qui suit (via l'argument interne <code>_refs</code>). Le nombre d'objets ou l'ordre de parcours n'a pas d'importance et un objet <code>WeakSet</code> est donc plus adapté (y compris en termes de performances) qu'un {{jsxref("Set")}}, notamment si un grand nombre d'objets sont concernés.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-weakset-objects', 'WeakSet')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-weakset-objects', 'WeakSet')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.WeakSet")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
</ul>
