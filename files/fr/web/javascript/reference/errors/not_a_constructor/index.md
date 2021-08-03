---
title: 'TypeError: "x" is not a constructor'
slug: Web/JavaScript/Reference/Errors/Not_a_constructor
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_constructor
original_slug: Web/JavaScript/Reference/Erreurs/Not_a_constructor
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Object doesn't support this action (Edge)
TypeError: "x" is not a constructor

TypeError: Math is not a constructor
TypeError: JSON is not a constructor
TypeError: Symbol is not a constructor
TypeError: Reflect is not a constructor
TypeError: Intl is not a constructor
TypeError: SIMD is not a constructor
TypeError: Atomics is not a constructor
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Une variable ou un objet a été utilisé comme un constructeur alors que cet objet ou cette variable n'est pas un constructeur. Pour plus d'informations sur les constructeurs, voir la page sur <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new">l'opérateur <code>new</code></a>.</p>

<p>De nombreux objets globaux tels que {{jsxref("String")}} ou {{jsxref("Array")}}, sont constructibles avec <code>new</code>. Cependant, d'autres objets globaux ne le sont pas (leurs propriétés et méthodes sont statiques). Les objets standards natifs suivants ne sont pas des constructeur : {{jsxref("Math")}}, {{jsxref("JSON")}}, {{jsxref("Symbol")}}, {{jsxref("Reflect")}}, {{jsxref("Intl")}}, {{jsxref("SIMD")}}, {{jsxref("Atomics")}}.</p>

<p><a href="/fr/docs/Web/JavaScript/Reference/Instructions/function*">Les fonctions génératrices</a> ne peuvent pas non plus être utilisées comme des constructeurs.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemples_invalides">Exemples invalides</h3>

<pre class="brush: js example-bad">var Voiture = 1;
new Voiture();
// TypeError: Voiture is not a constructor

new Math();
// TypeError: Math is not a constructor

new Symbol();
// TypeError: Symbol is not a constructor

function* f() {};
var obj = new f;
// TypeError: f is not a constructor
</pre>

<h3 id="Créer_un_constructeur_voiture">Créer un constructeur <code>voiture</code></h3>

<p>Imaginons qu'on veuille représenter des voitures sous forme d'objets. On appellera ce type <code>voiture</code> et on lui ajoutera des propriétés pour le fabricant, le modèle et l'année. Pour cela, on pourra écrire la fonction suivante :</p>

<pre class="brush: js">function Voiture(fabriquant, modèle, année) {
  this.fabriquant = fabriquant;
  this.modèle = modèle;
  this.année = année;
}
</pre>

<p>On peut désormais créer un objet <code>maVoiture</code> comme ceci :</p>

<pre class="brush: js">var maVoiture = new Voiture("Renault", "Twingo", 2006);</pre>

<h3 id="Avec_les_promesses">Avec les promesses</h3>

<p>Lorsqu'on renvoie une promesse immédiatement tenue ou rompue, il n'est pas nécessaire d'utiliser <code>new Promise()</code> pour la manipuler. Il faut plutôt utiliser les méthodes statiques {{jsxref("Promise.resolve()")}} ou {{jsxref("Promise.reject()")}} :</p>

<pre class="brush: js example-bad">// Dans ce cas on aura une exception
// "this is not a constructor"
return new Promise.resolve(true);
</pre>

<pre class="brush: js">// Cette formulation fonctionne mais
// est inutilement longue
return new Promise((resolve, reject) =&gt; { resolve(true); });

// On pourra autrement utiliser les
// méthodes statiques
return Promise.resolve(true);
return Promise.reject(false);
</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{Glossary("constructor")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_new">L'opérateur <code>new</code></a></li>
</ul>
