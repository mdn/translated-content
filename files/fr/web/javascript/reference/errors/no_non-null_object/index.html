---
title: 'TypeError: "x" is not a non-null object'
slug: Web/JavaScript/Reference/Errors/No_non-null_object
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/No_non-null_object
original_slug: Web/JavaScript/Reference/Erreurs/No_non-null_object
---
<div>{{JSSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Invalid descriptor for property {x} (Edge)
TypeError: "x" is not a non-null object (Firefox)
TypeError: Property description must be an object: "x" (Chrome)
TypeError: Invalid value used in weak set (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Un objet devrait être trouvé et n'est pas fourni. La valeur {{jsxref("null")}} n'est pas un objet et ne fonctionnera pas, il est nécessaire de fournir un véritable objet pour que le code en question fonctionne.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Absence_d'un_descripteur_de_propriété">Absence d'un descripteur de propriété</h3>

<p>Lorsqu'on utilise des méthodes telles que {{jsxref("Object.create()")}}, {{jsxref("Object.defineProperty()")}} ou {{jsxref("Object.defineProperties()")}}, le paramètre optionnel de description des propriétés doit être un descripteur sous la forme d'un objet. Si la valeur fournie n'est pas un objet (mais par exemple un nombre), l'appel à la méthode déclenchera une erreur :</p>

<pre class="brush: js example-bad">Object.defineProperty({}, 'cle', 1);
// TypeError: 1 is not a non-null object

Object.defineProperty({}, 'cle', null);
// TypeError: null is not a non-null object
</pre>

<p>Un descripteur de propriété valide aura la structure suivante :</p>

<pre class="brush: js example-good">Object.defineProperty({}, 'cle', { value: 'toto', writable: false });
</pre>

<h3 id="Les_clés_de_WeakMap_et_WeakSet_sont_des_objets">Les clés de <code>WeakMap</code> et <code>WeakSet</code> sont des objets</h3>

<p>Les objets {{jsxref("WeakMap")}} et {{jsxref("WeakSet")}} utilisent des objets comme clé. On ne peut pas utiliser d'autres types de valeurs pour les clés de ces objets.</p>

<pre class="brush: js example-bad">var ws = new WeakSet();
ws.add('toto');
// TypeError: "toto" is not a non-null object</pre>

<p>À la place, on utilisera des objets :</p>

<pre class="brush: js example-good">ws.add({toto: 'truc'});
ws.add(window);
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.create()")}}</li>
 <li>{{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}</li>
 <li>{{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}</li>
</ul>
