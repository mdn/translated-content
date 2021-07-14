---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/fill
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/fill
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>fill()</code></strong> remplit tous les éléments d'un tableau entre deux index avec une valeur statique. La valeur de l'index de fin n'est pas incluse. Cette méthode renvoie le tableau modifié.</p>

<div>{{EmbedInteractiveExample("pages/js/array-fill.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.fill(valeur<var><var>)
</var>arr</var>.fill(valeur, <var>début<var>)
</var>arr</var>.fill(valeur, <var>début<var>, <var>fin</var>)</var></var>
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeur</code></dt>
 <dd>Valeur avec laquelle remplir le tableau.</dd>
 <dt><code>début</code> {{optional_inline}}</dt>
 <dd>Index de début, la valeur par défaut est 0.</dd>
 <dt><code>fin</code> {{optional_inline}}</dt>
 <dd>Index de fin, la valeur par défaut est <code>this.length</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Le tableau modifié par la méthode.</p>

<h2 id="Description">Description</h2>

<p>Les éléments pour lesquels on utilisera la valeur sont ceux contenus dans l'intervalle de positions [<code>début</code>, <code>fin</code>].</p>

<p>La méthode <code>fill()</code> prend jusqu'à trois arguments : <code>valeur</code>, <code>début</code> et <code>fin</code>. Les arguments <code>début</code> et <code>fin</code> sont optionnels. Leurs valeurs par défaut sont respectivement <code>0</code> et la taille <code>length</code> de l'objet <code>this</code>.</p>

<p>Si <code>début</code> est négatif, il sera traité comme <code>length+début</code> où <code>length</code> est la taille du tableau. Si <code>fin</code> est négatif, il est traité comme <code>length+fin</code>.</p>

<p>La fonction <code>fill()</code> est intentionnellement générique, il n'est pas nécessaire que sa valeur <code>this</code> soit un objet <code>Array</code>.</p>

<p>La méthode <code>fill()</code> est une méthode de modification, elle changera l'objet <code>this</code> lui-même, et renverra l'objet modifié. Elle ne crée pas de copie. Lorsque cette méthode reçoit un objet comme valeur, elle copiera l'objet passé et remplira le tableau avec une référence vers cette copie.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">[1, 2, 3].fill(4);            // [4, 4, 4]
[1, 2, 3].fill(4, 1);         // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);      // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);      // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);    // [4, 2, 3]
[1, 2, 3].fill(4, 3, 3);      // [1, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);  // [1, 2, 3]
Array(3).fill(4);             // [4, 4, 4]
[].fill.call({length: 3}, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Les objets sont copiés via une référence
var arr = Array(3).fill({}); // [{}, {}, {}];
arr[0].yop = "yop"; // [{yop: "yop"}, {yop: "yop"}, {yop: "yop"}]
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<pre class="brush: js">if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length &gt;&gt;&gt; 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start &gt;&gt; 0;

      // Step 8.
      var k = relativeStart &lt; 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end &gt;&gt; 0;

      // Step 11.
      var final = relativeEnd &lt; 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k &lt; final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-array.prototype.fill', 'Array.prototype.fill')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.fill', 'Array.prototype.fill')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.fill")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("TypedArray.prototype.fill()")}}</li>
</ul>
