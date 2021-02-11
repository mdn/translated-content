---
title: 'TypeError: "x" is read-only'
slug: Web/JavaScript/Reference/Errors/Read-only
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Read-only
original_slug: Web/JavaScript/Reference/Erreurs/Read-only
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: "x" is read-only (Firefox)
TypeError: 0 is read-only (Firefox)
TypeError: Cannot assign to read only property 'x' of #&lt;Object&gt; (Chrome)
TypeError: Cannot assign to read only property '0' of [object Array] (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>La variable globale ou la propriété ne peut pas recevoir de valeur ou être modifiée car elle est en lecture seule (d'un point de vue technique, il s'agit d'<a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty#Attribut_writable">une propriété de donnée en lecture seule</a>).</p>

<p>Cette erreur ne se produit qu'avec <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">le mode strict</a>. En mode non-strict, l'affectation est ignorée silencieusement.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemples_invalides">Exemples invalides</h3>

<p>Les propriétés en lecture seule ne sont pas fréquemment utilisées mais on peut en créer en utilisant les méthodes {{jsxref("Object.defineProperty()")}} ou {{jsxref("Object.freeze()")}}.</p>

<pre class="brush: js example-bad">"use strict";
var obj = Object.freeze({name: "Elsa", score: 157});
obj.score = 0;  // TypeError

"use strict";
Object.defineProperty(this, "NB_POUMONS", {value: 2, writable: false});
NB_POUMONS = 3;  // TypeError

"use strict";
var frozenArray = Object.freeze([0, 1, 2]);
frozenArray[0]++;  // TypeError
</pre>

<p>Quelques propriétés natives JavaScript sont également en lecture seule. Par exemple, on obtient cette erreur lorsqu'on souhaite redéfinir une constante mathématique.</p>

<pre class="brush: js example-bad">"use strict";
Math.PI = 4;  // TypeError
</pre>

<p>La variable globale <code>undefined</code> est également en lecture seule. On ne peut donc pas faire disparaître la fameuse erreur "<em>undefined is not a function</em>" avec ce code :</p>

<pre class="brush: js example-bad">"use strict";
undefined = function () {};
// TypeError: "undefined" is read-only
</pre>

<h3 id="Exemples_valides">Exemples valides</h3>

<pre class="brush: js example-good">"use strict";
var obj = Object.freeze({name: "Score", points: 157});
obj = {name: obj.name, points: 0};
// En changeant d'objet, ça fonctionne

"use strict";
var NB_POUMONS = 2;  // `var` fonctionne
NB_POUMONS = 3;  // ok
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.freeze()")}}</li>
</ul>
