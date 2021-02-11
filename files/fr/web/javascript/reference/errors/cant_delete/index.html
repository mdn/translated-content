---
title: 'TypeError: property "x" is non-configurable and can''t be deleted'
slug: Web/JavaScript/Reference/Errors/Cant_delete
tags:
  - Erreurs
  - JavaScript
  - Mode strict
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cant_delete
original_slug: Web/JavaScript/Reference/Erreurs/Cant_delete
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Calling delete on 'x' is not allowed in strict mode (Edge)
TypeError: property "x" is non-configurable and can't be deleted. (Firefox)
TypeError: Cannot delete property 'x' of #&lt;Object&gt; (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}} in strict mode only.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Une instruction demande la suppression d'une propriété <a href="/fr/docs/Web/JavaScript/Structures_de_données#Propriétés">non-configurable</a>. L'attribut <code>configurable</code> permet de contrôler si la propriété peut être supprimée de l'objet auquel elle est rattachée et si ces attributs (en dehors de <code>writable</code>) peuvent être modifiés.</p>

<p>Cette erreur ne se produit qu'en <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>. En mode non-strict, l'opération de suppression renverra <code>false</code>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Les propriétés non-configurables ne sont pas très fréquentes mais il est possible d'en créer grâce à {{jsxref("Object.defineProperty()")}} ou à  {{jsxref("Object.freeze()")}}.</p>

<pre class="brush: js example-bad">"use strict";
var obj = Object.freeze({name: "Elsa", score: 157});
delete obj.score;  // TypeError

"use strict";
var obj = {};
Object.defineProperty(obj, "toto", {value: 2, configurable: false});
delete obj.toto;  // TypeError

"use strict";
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray.pop();  // TypeError
</pre>

<p>Certaines propriétés natives de JavaScript sont non-configurables. Peut-être que le code tente de supprimer une constante mathématique :</p>

<pre class="brush: js example-bad">"use strict";
delete Math.PI;  // TypeError</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_delete">L'opérateur <code>delete</code></a></li>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
</ul>
