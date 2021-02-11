---
title: 'TypeError: setting a property that has only a getter'
slug: Web/JavaScript/Reference/Errors/Getter_only
tags:
  - Erreurs
  - JavaScript
  - Mode strict
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Getter_only
original_slug: Web/JavaScript/Reference/Erreurs/Getter_only
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: Assignment to read-only properties is not allowed in strict mode (Edge)
TypeError: setting getter-only property "x" (Firefox)
TypeError: Cannot set property "prop" of #&lt;Object&gt; which has only a getter (Chrome)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}, uniquement en <a href="/en-US/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>.</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>On essaie de fournir une nouvelle valeur pour une propriété qui ne dispose que d'un <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/get">accesseur</a>. Ceci échouera en mode non-strict mais lèvera une exception {{jsxref("TypeError")}} en <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>.</p>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on voit comment créer un accesseur sur une propriété. En revanche, dans la définition de l'objet, on n'inclut aucun <a href="/fr/docs/Web/JavaScript/Reference/Fonctions/set">mutateur</a> et une exception <code>TypeError</code> sera déclenchée lorsqu'on voudra modifier la propriété <code>temperature</code> pour la passer à <code>30</code>. Pour plus de détails, on pourra consulter la page {{jsxref("Object.defineProperty()")}}.</p>

<pre class="brush: js example-bad">"use strict";

function Archiver() {
  var temperature = null;
  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    }
  });
}

var arc = new Archiver();
arc.temperature; // 'get!'

arc.temperature = 30;
// TypeError: setting a property that has only a getter
</pre>

<p>Pour corriger cette erreur, soit on retire la ligne 16 (où on tente de modifier la propriété) soit on implémente un mutateur, comme ceci :</p>

<pre class="brush: js example-good highlight[12]">"use strict";

function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]</pre>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Object.defineProperty()")}}</li>
 <li>{{jsxref("Object.defineProperties()")}}</li>
</ul>
