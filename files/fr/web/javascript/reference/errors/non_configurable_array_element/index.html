---
title: 'TypeError: can''t delete non-configurable array element'
slug: Web/JavaScript/Reference/Errors/Non_configurable_array_element
tags:
  - Erreur
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Non_configurable_array_element
original_slug: Web/JavaScript/Reference/Erreurs/Non_configurable_array_element
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: can't delete non-configurable array element (Firefox)
TypeError: Cannot delete property '2' of [object Array] (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>On a voulu <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/length#Tronquer_un_tableau">raccourcir la longueur d'un tableau</a> mais l'un des éléments de ce tableau est <a href="/fr/docs/Web/JavaScript/Structures_de_données#Propriétés">non-configurable</a>. Lorsqu'on tronque un tableau, les éléments situés au-delà de la nouvelle longueur seront supprimés. Dans ce cas, c'est cette suppression qui n'a pas pu être effectuée.</p>

<p>L'attribut <code>configurable</code> permet de contrôler si la propriété peut être supprimée d'un objet et si ses attributs (en dehors de <code>writable</code>) peuvent être modifiés.</p>

<p>La plupart du temps, les propriétés d'un objet créé avec <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array#Syntaxe">un littéral de tableau</a> sont configurables. Toutefois, si on utilise {{jsxref("Object.defineProperty()")}} par exemple, la propriété n'est pas configurable par défaut.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Propriétés_non-configurables_créées_avec_Object.defineProperty">Propriétés non-configurables créées avec  <code>Object.defineProperty</code></h3>

<p>Par défaut, la méthode {{jsxref("Object.defineProperty()")}} crée des propriétés non-configurables si on n'indique pas expressément le contraire :</p>

<pre class="brush: js example-bad">var arr = [];
Object.defineProperty(arr, 0, {value: 0});
Object.defineProperty(arr, 1, {value: "1"});

arr.length = 1;
// TypeError: can't delete non-configurable array element
</pre>

<p>Si on veut tronquer le tableau, il faut que les éléments excédants soient configurables :</p>

<pre class="brush: js example-good">var arr = [];
Object.defineProperty(arr, 0, {value: 0, configurable: true});
Object.defineProperty(arr, 1, {value: "1", configurable: true});

arr.length = 1;
</pre>

<h3 id="Tableaux_scellés_(seal)">Tableaux scellés (<code>seal</code>)</h3>

<p>La méthode {{jsxref("Object.seal()")}} permet de marquer l'ensemble des propriétés (ici les éléments du tableau) comme non-configurables :</p>

<pre class="brush: js example-bad">var arr = [1,2,3];
Object.seal(arr);

arr.length = 1;
// TypeError: can't delete non-configurable array element
</pre>

<p>Pour corriger l'erreur, il faut retirer l'appel à {{jsxref("Object.seal()")}} ou réaliser une copie du tableau. Dans ce dernier cas, on notera que tronquer la copie du tableau ne modifie pas la longueur du tableau original.</p>

<pre class="brush: js example-good">var arr = [1,2,3];
Object.seal(arr);

// On copie le tableau initial pour tronquer cette copie
var copie = Array.from(arr);
copie.length = 1;
// arr.length == 3
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Structures_de_données#Propriétés">La propriété interne <code>[[Configurable]]</code></a></li>
 <li>{{jsxref("Array.length")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.seal()")}}</li>
</ul>
