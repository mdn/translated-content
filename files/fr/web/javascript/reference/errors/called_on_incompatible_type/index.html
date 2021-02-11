---
title: 'TypeError: X.prototype.y called on incompatible type'
slug: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Called_on_incompatible_type
original_slug: Web/JavaScript/Reference/Erreurs/Called_on_incompatible_type
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: 'this' is not a Set object (Edge)
TypeError: Function.prototype.toString called on incompatible object (Firefox)
TypeError: Function.prototype.bind called on incompatible target (Firefox)
TypeError: Method Set.prototype.add called on incompatible receiver undefined (Chrome)
TypeError: Bind must be called on a function (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Lorsque cette erreur est levée, cela signifie qu'une fonction (d'un objet donné) est appelé avec une valeur <code>this</code> qui ne correspond pas au type attendu par la fonction.</p>

<p>Cela peut se produire lorsqu'on utilise les méthodes {{jsxref("Function.prototype.call()")}} ou {{jsxref("Function.prototype.apply()")}} et qu'on fournit un argument <code>this</code> dont le type n'est pas celui attendu.</p>

<p>Cela peut également se produire quand on fournit une fonction (sous la forme d'un objet) comme argument d'une autre fonction. Dans ce cas, l'objet ne sera pas capturé comme valeur <code>this</code> pour la fonction. Pour contourner ce problème, on peut fournir une fonction lambda qui effectue l'appel ou utiliser la fonction {{jsxref("Function.prototype.bind()")}} afin que <code>this</code> soit l'objet attendu.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Exemples_invalides">Exemples invalides</h3>

<pre class="brush: js example-bad">var monSet = new Set;
['truc', 'bidule'].forEach(monSet.add);
// monSet.add est une fonction mais
// "monSet" n'est pas capturé en tant que this.

var maFonction = function () {
  console.log(this);
};
['truc', 'bidule'].forEach(maFonction.bind);
// maFonction.bind est une fonction
// mais "maFonction" n'est pas capturé en tant
// que this.

</pre>

<h3 id="Exemples_valides">Exemples valides</h3>

<pre class="brush: js example-good">var monSet = new Set;
['truc', 'bidule'].forEach(monSet.add.bind(monSet));
// Cela fonctionne car on lie "monSet" avec this.

var maFonction = function () {
  console.log(this)
};
['truc', 'bidule'].forEach(x =&gt; maFonction.bind(x));
// Cela fonctionne car on utilise
// la fonction "bind" ce qui permet de
// créer une fonction lambda qui propage
// l'argument.

</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Function.prototype.call()")}}</li>
 <li>{{jsxref("Function.prototype.apply()")}}</li>
 <li>{{jsxref("Function.prototype.bind()")}}</li>
</ul>
