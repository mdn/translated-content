---
title: Object.getOwnPropertyDescriptors()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
tags:
  - JavaScript
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/getOwnPropertyDescriptors
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>Object.getOwnPropertyDescriptors()</strong></code> renvoie l'ensemble des descripteurs des propriétés propres d'un objet donné.</p>

<div>{{EmbedInteractiveExample("pages/js/object-getownpropertydescriptors.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">Object.getOwnPropertyDescriptors(<var>obj</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj</code></dt>
 <dd>L'objet dont on souhaite connaître les descripteurs des propriétés.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un objet qui contient tous les descripteurs des propriétés propres de l'objet passé en paramètre. S'il n'y aucune propriété, cela sera un objet vide.</p>

<h2 id="Description">Description</h2>

<p>Cette méthode permet d'examiner de façon précise les différentes propriétés directement rattachées à un objet. Une propriété JavaScript se définit par un nom (une chaîne de caractères) ou un symbole ({{jsxref("Symbol")}}) et un descripteur. Vous pouvez trouver de plus amples informations sur les types de descripteurs et sur leurs attributs sur la page de {{jsxref("Object.defineProperty()")}}.</p>

<p>Un descripteur de propriété est un enregistrement qui possède les attributs suivants :</p>

<dl>
 <dt><code>value</code></dt>
 <dd>La valeur associée à la propriété (uniquement pour les descripteurs de données).</dd>
 <dt><code><strong>writable</strong></code></dt>
 <dd><code>true</code> si et seulement si la valeur associée à la propriété peut être changée (uniquement pour les descripteurs de données).</dd>
 <dt><code>get</code></dt>
 <dd>Une fonction qui est utilisée comme accesseur pour la propriété ou {{jsxref("undefined")}} s'il n'existe pas de tel accesseur (uniquement pour les descripteurs d'accesseur/mutateur).</dd>
 <dt><code>set</code></dt>
 <dd>Une fonction qui est utilisée comme mutateur pour la propriété ou {{jsxref("undefined")}} s'il n'existe pas de tel mutateur (uniquement pour les descripteurs d'accesseur/mutateur).</dd>
 <dt><code>configurable</code></dt>
 <dd><code>true</code> si et seulement si le type de descripteur peut être changé et si la propriété peut être supprimée de l'objet correspondant.</dd>
 <dt><code>enumerable</code></dt>
 <dd><code>true</code> si et seulement si cette propriété est listée lorsqu'on énumère les propriétés de l'objet correspondant.</dd>
</dl>

<h2 id="Exemples">Exemples</h2>

<h3 id="Créer_un_clone">Créer un clone</h3>

<p>La méthode {{jsxref("Object.assign()")}} ne copiera que les propriétés propres et énumérables d'un objet source vers un objet cible. On peut donc utiliser cette méthode avec {{jsxref("Object.create()")}} afin de réaliser une copie « plate » entre deux objets inconnus :</p>

<pre class="brush: js">Object.create(
  Object.getPrototypeOf(obj),
  Object.getOwnPropertyDescriptors(obj)
);
</pre>

<h3 id="Créer_une_sous-classe">Créer une sous-classe</h3>

<p>Pour créer une sous-classe, généralement, on définit la sous-classe et on définit son prototype comme étant une instance de la classe parente. Enfin on définit les propriétés de cette nouvelle sous-classe.</p>

<pre class="brush: js">function superclass() {};
superclass.prototype = {
  // on définit les méthodes et propriétés
  // de la classe parente
};

function subclass() {};
subclass.prototype = Object.create(
  superclass.prototype,
  Object.getOwnPropertyDescriptors({
  // on définit les méthodes et propriétés
  // de la sous-classe
}));
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
   <td>{{SpecName('ESDraft', '#sec-object.getownpropertydescriptors', 'Object.getOwnPropertyDescriptors')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES2017', '#sec-object.getownpropertydescriptors', 'Object.getOwnPropertyDescriptors')}}</td>
   <td>{{Spec2('ES2017')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Object.getOwnPropertyDescriptors")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.getOwnPropertyDescriptor()")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li><a href="https://github.com/tc39/proposal-object-getownpropertydescriptors">Prothèse d'émulation (<em>polyfill</em>)</a></li>
</ul>
