---
title: 'TypeError: cyclic object value'
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cyclic_object_value
original_slug: Web/JavaScript/Reference/Erreurs/Cyclic_object_value
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Message">Message</h2>

<pre class="syntaxbox">TypeError: cyclic object value (Firefox)
TypeError: Converting circular structure to JSON (Chrome and Opera)
TypeError: Circular reference in value argument not supported (Edge)
</pre>

<h2 id="Type_d'erreur">Type d'erreur</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Quel_est_le_problème">Quel est le problème ?</h2>

<p>Lorsqu'on appelle la méthode {{jsxref("JSON.stringify()")}}, les structures de références cycliques ne peuvent pas être converties en chaîne de caractères car <a href="https://www.json.org/">le format JSON</a> ne prend pas en charge les références (bien qu'<a href="http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03">un brouillon IETF existe</a>).</p>

<h2 id="Exemples">Exemples</h2>

<p>Avec une structure circulaire comme la suivante :</p>

<pre class="brush: js">var a = {};
var b = {};
a.child = b;
b.child = a;
</pre>

<p>{{jsxref("JSON.stringify()")}} échouera :</p>

<pre class="brush: js example-bad">JSON.stringify(a);
// TypeError: cyclic object value
</pre>

<p>Il est nécessaire de contrôler l'existence de cycles avant la conversion en chaîne de caractères. On peut par exemple fournir une fonction de remplacement comme deuxième argument de la fonction {{jsxref("JSON.stringify()")}}.</p>

<pre class="brush: js">const getCircularReplacer = () =&gt; {
  const seen = new WeakSet();
  return (key, value) =&gt; {
    if (typeof value === "object" &amp;&amp; value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123}</pre>

<p>On peut également utiliser une bibliothèque ou une fonction utilitaire pour ce scénario. comme <a href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a>.</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("JSON.stringify")}}</li>
 <li><a href="https://github.com/douglascrockford/JSON-js/blob/master/cycle.js">cycle.js</a> qui introduit deux fonctions : <code>JSON.decycle</code> <code>et JSON.retrocycle</code> qui permettent d'encoder et de décoder des structures cycliques en JSON.</li>
</ul>
