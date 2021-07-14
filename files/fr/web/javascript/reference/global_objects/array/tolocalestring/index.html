---
title: Array.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
tags:
  - Array
  - Internationalisation
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - i18n
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/toLocaleString
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/toLocaleString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toLocaleString()</strong></code> renvoie une chaîne de caractères qui représente les éléments du tableau. Les éléments sont convertis en chaînes de caractères grâce à leurs méthodes <code>toLocaleString</code> et chacune de ces chaînes est séparée des autres avec un séparateur propre à la locale courante (par exemple une virgule ou un point).</p>

<div>{{EmbedInteractiveExample("pages/js/array-tolocalestring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>arr</var>.toLocaleString();
<var>arr</var>.toLocaleString(<var>locales</var>);
<var>arr</var>.toLocaleString(<var>locales</var>, <var>options</var>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>locales</code> {{optional_inline}}</dt>
 <dd>Une chaine de caractères avec un identifiant de langue BCP 47, ou un tableau de ce type de chaine de caractères. Pour le format général et l'interprétation de l'argument <code>locales</code>. Pour plus de détails quant à la forme et l'interprétation de l'argument <code>locales</code>, on consultera la page {{jsxref("Intl")}}.</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>Un objet qui contient des propriétés de configuration. Pour les nombres, consulter {{jsxref("Number.prototype.toLocaleString()")}}, pour les dates, consulter {{jsxref("Date.prototype.toLocaleString()")}}.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente les éléments du tableau.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_les_arguments_locales_et_options">Utiliser les arguments <code>locales</code> et <code>options</code></h3>

<p>Les éléments du tableau sont converties en chaînes de caractères via leurs méthodes <code>toLocaleString()</code>.</p>

<ul>
 <li><code>Object</code> : {{jsxref("Object.prototype.toLocaleString()")}}</li>
 <li><code>Number</code> : {{jsxref("Number.prototype.toLocaleString()")}}</li>
 <li><code>Date</code> : {{jsxref("Date.prototype.toLocaleString()")}}</li>
</ul>

<p>Ici, on voit qu'on affiche le symbole de la devise de la locale pour chacun des éléments (nombres ou chaînes de caractères) du tableau <code>prix</code> :</p>

<pre class="brush: js">var prix = ["￥7", 500, 8123, 12];
prix.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
</pre>

<p>Pour plus d'exemples, on peut se référer aux pages {{jsxref("Intl")}}, {{jsxref("NumberFormat")}} et {{jsxref("DateTimeFormat")}}.</p>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<pre class="brush: js">// https://tc39.github.io/ecma402/#sup-array.prototype.tolocalestring
if (!Array.prototype.toLocaleString) {
  Object.defineProperty(Array.prototype, 'toLocaleString', {
    value: function(locales, options) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var a = Object(this);

      // 2. Let len be ? ToLength(? Get(A, "length")).
      var len = a.length &gt;&gt;&gt; 0;

      // 3. Let separator be the String value for the
      //    list-separator String appropriate for the
      //    host environment's current locale (this is
      //    derived in an implementation-defined way).
      // NOTE: In this case, we will use a comma
      var separator = ',';

      // 4. If len is zero, return the empty String.
      if (len === 0) {
        return '';
      }

      // 5. Let firstElement be ? Get(A, "0").
      var firstElement = a[0];
      // 6. If firstElement is undefined or null, then
      //  a.Let R be the empty String.
      // 7. Else,
      //  a. Let R be ?
      //     ToString(?
      //       Invoke(
      //        firstElement,
      //        "toLocaleString",
      //        « locales, options »
      //       )
      //     )
      var r = firstElement == null ?
        '' : firstElement.toLocaleString(locales, options);

      // 8. Let k be 1.
      var k = 1;

      // 9. Repeat, while k &lt; len
      while (k &lt; len) {
        // a. Let S be a String value produced by
        //   concatenating R and separator.
        var s = r + separator;

        // b. Let nextElement be ? Get(A, ToString(k)).
        var nextElement = a[k];

        // c. If nextElement is undefined or null, then
        //   i. Let R be the empty String.
        // d. Else,
        //   i. Let R be ?
        //     ToString(?
        //       Invoke(
        //        nextElement,
        //        "toLocaleString",
        //        « locales, options »
        //       )
        //     )
        r = nextElement == null ?
          '' : nextElement.toLocaleString(locales, options);

        // e. Let R be a String value produced by
        //   concatenating S and R.
        r = s + r;

        // f. Increase k by 1.
        k++;
      }

      // 10. Return R.
      return r;
    }
  });
}
</pre>

<p>S'il faut absolument prendre en charge les moteurs JavaScript qui ne supportent pas {{jsxref("Object.defineProperty()")}}, mieux vaut ne pas ajouter de prothèse pour les méthodes <code>Array.prototype</code> car elles ne peuvent pas être rendues non-énumérables.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-array.prototype.tolocalestring', 'Array.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définition initiale dans ECMAScript 3.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sup-array.prototype.tolocalestring', 'Array.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td>Cette définition remplace la définition fournit dans ECMA-262.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Array.toLocaleString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Array.prototype.toString()")}}</li>
 <li>{{jsxref("Intl")}}</li>
 <li>{{jsxref("Object.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Number.prototype.toLocaleString()")}}</li>
 <li>{{jsxref("Date.prototype.toLocaleString()")}}</li>
</ul>
