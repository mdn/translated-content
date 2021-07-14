---
title: Object.prototype.hasOwnProperty()
slug: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
tags:
  - JavaScript
  - Méthode
  - Object
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/hasOwnProperty
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>hasOwnProperty()</strong></code> retourne un booléen indiquant si l'objet possède la propriété spécifiée "en propre", sans que celle-ci provienne de la chaîne de prototypes de l'objet.</p>

<div>{{EmbedInteractiveExample("pages/js/object-prototype-hasownproperty.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>obj</var>.hasOwnProperty(<var>prop</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>prop</code></dt>
 <dd>Le nom ({{jsxref("String")}}) ou le symbole ({{jsxref("Symbol")}}) de la propriété à tester.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un booléen qui indique si l'objet possède ou non la propriété indiquée en argument et que celle-ci est directement rattachée à l'objet (elle ne provient pas de la chaîne de prototypes de l'objet). <code>hasOwnProperty()</code> renvoie <code>true</code> si la propriété existe et que sa valeur est {{jsxref("null")}} ou {{jsxref("undefined")}}.</p>

<h2 id="Description">Description</h2>

<p>Chaque objet descendant d'{{jsxref("Object")}} hérite de la méthode <code>hasOwnProperty()</code>. Cette méthode peut être utilisée pour déterminer si un objet a la propriété spécifiée en tant que propriété directe de cet objet. Contrairement à l'opérateur {{jsxref("Opérateurs/L_opérateur_in", "in")}}, cette méthode ne vérifie pas la chaîne des prototypes de l'objet. Si l'objet est un tableau ({{jsxref("Array")}}), la méthode <code>hasOwnProperty()</code> pourra être utilisée afin de vérifier la présence d'un index.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_hasOwnProperty()_pour_tester_l'existence_d'une_propriété">Utiliser <code>hasOwnProperty()</code> pour tester l'existence d'une propriété</h3>

<p>L'exemple suivant détermine si l'objet <code>o</code> contient une propriété appelée <code>prop</code>:</p>

<pre class="brush: js">o = new Object();
o.hasOwnProperty('prop'); // false
o.prop = 'exists';
o.hasOwnProperty('prop'); // true</pre>

<h3 id="Propriétés_directes_et_propriétés_héritées">Propriétés directes et propriétés héritées</h3>

<p>L'exemple suivant illustre la différence entre les propriétés directes et les propriétés héritées à partir de la chaîne de prototypes :</p>

<pre class="brush: js">o = new Object();
o.prop = 'exists';

o.hasOwnProperty('prop');
// retourne true

o.hasOwnProperty('toString');
// retourne false

o.hasOwnProperty('hasOwnProperty');
// retourne false</pre>

<h3 id="Parcourir_les_propriétés_d'un_objet">Parcourir les propriétés d'un objet</h3>

<p>L'exemple suivant montre comment parcourir les propriétés d'un objet sans traiter les propriétés héritées. On notera que la boucle  {{jsxref("Instructions/for...in", "for...in")}} ne prend en compte que les éléments énumérables. Il ne faut donc pas déduire de l'absence de propriétés non-énumérables dans la boucle, que <code>hasOwnProperty()</code> est elle-même strictement restreinte aux éléments énumérables (comme c'est le cas pour {{jsxref("Object.getOwnPropertyNames()")}}) .</p>

<pre class="brush: js">var bidule = {
    truc: 'stack'
};

for (var nom in bidule) {
    if (bidule.hasOwnProperty(nom)) {
        console.log("C'est bien la propriété (" +
                     nom +
                     "), sa valeur : " + bidule[nom]
                    );
    }
    else {
        console.log(nom);
        // toString ou autre
    }
}</pre>

<h3 id="hasOwnProperty()_en_tant_que_propriété"><code>hasOwnProperty()</code> en tant que propriété</h3>

<p>JavaScript ne protège pas le nom de propriété <code>hasOwnProperty</code>, ainsi il est possible qu'un objet puisse avoir une propriété avec ce nom, il sera donc nécessaire d'utiliser une version externe de la méthode pour obtenir des résultats corrects.</p>

<pre class="brush: js">var toto = {
  hasOwnProperty: function() {
    return false;
  },
  truc: 'Voici les dragons'
};

toto.hasOwnProperty('truc'); // renvoie toujours false

// On utilise une méthode d'un autre objet
// et on l'appelle avec this qui vaut toto
({}).hasOwnProperty.call(toto, 'truc'); // true

// On peut aussi utiliser la propriété hasOwnProperty de Object prototype
Object.prototype.hasOwnProperty.call(toto, 'truc'); // true
</pre>

<p>La dernière version utilisée permet de ne pas créer d'objet supplémentaire.</p>

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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.5.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.2.4.5', 'Object.prototype.hasOwnProperty')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-object.prototype.hasownproperty', 'Object.prototype.hasOwnProperty')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.hasOwnProperty")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement">Caractère énumérable et rattachement des propriétés</a></li>
 <li>{{jsxref("Object.getOwnPropertyNames()")}}</li>
 <li>{{jsxref("Instructions/for...in", "for...in")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_in", "in")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Retours_sur_héritage">Guide JavaScript : Retours sur l'héritage</a></li>
</ul>
