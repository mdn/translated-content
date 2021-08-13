---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/String/codePointAt
original_slug: Web/JavaScript/Reference/Objets_globaux/String/codePointAt
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>codePointAt()</strong></code> renvoie un entier positif qui correspond au code Unicode (<em>code point</em>) du caractère de la chaîne à la position donnée.</p>

<div>{{EmbedInteractiveExample("pages/js/string-codepointat.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.codePointAt(<var>pos</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>pos</code></dt>
 <dd>La position de l'élément dans la chaîne de caractères dont on souhaite obtenir la valeur du codet.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un nombre qui représente la valeur du point de code du caractère à la position indiqué. C'est la valeur {{jsxref("undefined")}} qui est renvoyée s'il n'y aucun élément à <code>pos</code>.</p>

<h2 id="Description">Description</h2>

<p>S'il n'y a pas d'élément à la position donnée, la valeur renvoyée sera {{jsxref("undefined")}}. Si ce n'est pas un élément représenté sur deux demi-codets (<em>surrogate pair</em>) UTF-16 et qui commence à <code>pos</code>, le codet de l'élément à l'indice <code>pos</code> est renvoyé.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">'ABC'.codePointAt(1);          // 66
'\uD800\uDC00'.codePointAt(0); // 65536

'XYZ'.codePointAt(42); // undefined
</pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>Le fragment de code suivant permet d'ajouter la méthode <code>codePointAt()</code> pour les chaînes de caractères (<code>String</code>). En effet, cette méthode fait partie de ECMAScript 2015 et certains navigateurs peuvent ne pas proposer cette fonction nativement.</p>

<pre class="brush:js">/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function() {
    'use strict'; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function() {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) &amp;&amp; $defineProperty;
      } catch(error) {}
      return result;
    }());
    var codePointAt = function(position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) { // better `isNaN`
        index = 0;
      }
      // Account for out-of-bounds indices:
      if (index &lt; 0 || index &gt;= size) {
        return undefined;
      }
      // Get the first code unit
      var first = string.charCodeAt(index);
      var second;
      if ( // check if it’s the start of a surrogate pair
        first &gt;= 0xD800 &amp;&amp; first &lt;= 0xDBFF &amp;&amp; // high surrogate
        size &gt; index + 1 // there is a next code unit
      ) {
        second = string.charCodeAt(index + 1);
        if (second &gt;= 0xDC00 &amp;&amp; second &lt;= 0xDFFF) { // low surrogate
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xD800) * 0x400 + second - 0xDC00 + 0x10000;
        }
      }
      return first;
    };
    if (defineProperty) {
      defineProperty(String.prototype, 'codePointAt', {
        'value': codePointAt,
        'configurable': true,
        'writable': true
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  }());
}
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-string.prototype.codepointat', 'String.prototype.codePointAt')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.codepointat', 'String.prototype.codePointAt')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.codePointAt")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.fromCodePoint()")}}</li>
 <li>{{jsxref("String.fromCharCode()")}}</li>
 <li>{{jsxref("String.prototype.charCodeAt()")}}</li>
 <li>{{jsxref("String.prototype.charAt()")}}</li>
</ul>
