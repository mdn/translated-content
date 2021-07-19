---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
tags:
  - Déprécié
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/substr
original_slug: Web/JavaScript/Reference/Objets_globaux/String/substr
---
<div>{{JSRef}}</div>

<div class="warning"><p><strong>Attention :</strong> Bien que <code>String.prototype.substr(…)</code> ne soit pas strictement obsolète (au sens où elle n'a pas été retirée des standards), elle est définie au sein de <a href="https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers">l'Annexe B</a> du standard ECMA-262 qui définit l'ensemble des fonctionnalités historiques qui doivent être évitées autant que possible. On utilisera la méthode {{jsxref("String.prototype.substring()")}} à la place.</p></div>

<p>La méthode <strong><code>substr()</code></strong> retourne la partie d'une chaîne de caractères comprise entre l'indice de départ et un certain nombre de caractères après celui-ci.</p>

<div>{{EmbedInteractiveExample("pages/js/string-substr.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>chn</em>.substr(<var>début</var>[, <var>longueur</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>début</code></dt>
 <dd>L'indice du premier caractère à inclure dans la sous-chaîne retournée.</dd>
 <dt><code>longueur</code></dt>
 <dd>Optionnel. Le nombre de caractères à extraire.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle chaîne contenant la partie indiquée de la chaîne donnée.</p>

<h2 id="Description">Description</h2>

<p><code>substr()</code> extrait <code>longueur</code> caractères d'une <code>string</code>, en comptant à partir de l'indice <code>début</code>.</p>

<p>Si <code>début</code> est un nombre positif, l'indice commence à compter du début de la chaîne. Sa valeur est limitée à <code>chn.length</code>.</p>

<p>Si <code>début</code> est un nombre négatif, l'indice commence à compter de la fin de la chaîne. Sa valeur est limitée à <code>-chn.length</code>.</p>

<p>Note : dans JScript de Microsoft, les valeurs négatives de l'argument <code>début</code> ne sont pas considérées comme faisant référence à la fin de la chaîne.</p>

<p>Si <code>longueur</code> est omise, <code>substr()</code> extrait les caractères jusqu'à la fin de la chaîne.</p>

<p>Si <code>longueur</code> est {{jsxref("undefined")}}, <code>substr()</code> extrait les caractères jusqu'à la fin de la chaîne.</p>

<p>Si <code>longueur</code> est négative, elle est traitée comme 0.</p>

<p>Pour <code>début</code> comme pour <code>longueur</code>, NaN est traité comme 0.</p>

<h2 id="Exemples">Exemples</h2>

<pre class="brush: js">var uneChaine = 'Mozilla';

<code>console.log(</code>uneChaine<code>.substr(0, 1));   // 'M'
console.log(</code>uneChaine<code>.substr(1, 0));   // ''
console.log(</code>uneChaine<code>.substr(-1, 1));  // 'a'
console.log(</code>uneChaine<code>.substr(1, -1));  // ''
console.log(</code>uneChaine<code>.substr(-3));     // 'lla'
console.log(</code>uneChaine<code>.substr(1));      // 'ozilla'
console.log(</code>uneChaine<code>.substr(-20, 2)); // 'Mo'
console.log(</code>uneChaine<code>.substr(20, 2));  // ''</code></pre>

<h2 id="Prothèse_d'émulation_(polyfill)">Prothèse d'émulation (<em>polyfill</em>)</h2>

<p>JScript de Microsoft ne supporte pas les valeurs négatives pour l'indice de début. Pour utiliser cette fonctionnalité, vous pouvez utiliser le code suivant :</p>

<pre class="brush: js">// N'appliquer que lorsque la fonction est incomplète
if ('ab'.substr(-1) != 'b') {
  /**
   *  Obtenir la sous-chaîne d'une chaîne
   *  @param  {entier}  début     où démarrer la sous-chaîne
   *  @param  {entier}  longueur  combien de caractères à retourner
   *  @return {chaîne}
   */
  String.prototype.substr = function(substr) {
    return function(début, longueur) {
      <code>// Appel de la méthode originale
      return </code>substr<code>.call(this,</code>
        // Si on a un début négatif, calculer combien il vaut à partir du début de la chaîne
        // Ajuster le paramètre pour une valeur négative
<code>        début &lt; 0 ? this.length + début : début,
        longueur)
    </code>}
  }(String.prototype.substr);
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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définie dans la Compatibility Annex B (informative). Implémentée dans JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-B.2.3', 'String.prototype.substr')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définie dans la Compatibility Annex B (informative).</td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.substr', 'String.prototype.substr')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Définie dans l'Annex B (normative) pour les Additional ECMAScript Features for Web Browsers.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.substr', 'String.prototype.substr')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définie dans l'Annex B (normative) pour les Additional ECMAScript Features for Web Browsers</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.substr")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.slice()")}}</li>
 <li>{{jsxref("String.prototype.substring()")}}</li>
</ul>
