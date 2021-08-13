---
title: Number.prototype.toLocaleString()
slug: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
tags:
  - Internationalisation
  - JavaScript
  - Méthode
  - Number
  - Prototype
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
original_slug: Web/JavaScript/Reference/Objets_globaux/Number/toLocaleString
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>toLocaleString()</strong></code> permet de renvoyer une chaîne de caractères représentant un nombre en tenant compte de la locale.</p>

<div>{{EmbedInteractiveExample("pages/js/number-tolocalestring.html")}}</div>



<p>Les arguments <code>locales</code> et <code>options</code> permettent à l'application de spécifier les options de formatage selon la langue utilisée. Ces arguments ont un effet sur le comportement de la fonction. Les implémentations passées, qui ignoraient les arguments <code>locales</code> et <code>options</code> se basaient uniquement sur l'implémentation pour ce qui concernait la locale et le format.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">objetNumber.toLocaleString([locales [, options]])</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Voir la section <a href="#compat" title="#Browser_Compatibility">compatibilité des navigateurs</a> afin de voir quels navigateurs supportent les arguments <code>locales</code> et <code>options</code>. L'exemple <a href="#check">Vérifier le support des arguments <code>locales</code> et <code>options</code></a> permet de détecter cette fonctionnalité.</p>

<div class="note">
<p><strong>Note :</strong> L'API ECMAScript Internationalization, implémentée avec Firefox 29, a ajouté l'argument <code>locales</code> à la méthode <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number/toLocaleString"><code>Number.toLocaleString</code></a>. Si l'argument vaut <code>undefined</code>,cette méthode renvoie les nombres selon la locale du système d'exploitation, les versions antérieures de Firefox renvoyaient un résultat correspondant à la locale anglaise. Ce changement a été rapporté comme une régression, avec un risque de manque de rétrocompatibilité, avant d'être corrigé avec Firefox 55, voir le bug ({{bug(999003)}}).</p>
</div>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/NumberFormat','Paramètres')}}</p>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une chaîne de caractères qui représente le nombre indiqué en tenant compte de la locale.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_toLocaleString()">Utiliser <code>toLocaleString()</code></h3>

<p>En utilisant la fonction simplement, sans spécifier de locale, la chaîne est formatée dans la locale par défaut et avec des options par défaut.</p>

<pre class="brush: js">var nombre = 3500;

console.log(nombre.toLocaleString()); // Affichera "3 500" pour la locale française
</pre>

<h3 id="Vérifier_le_support_des_arguments_locales_et_options">Vérifier le support des arguments <code>locales</code> et <code>options</code></h3>

<p>Les arguments <code>locales</code> et <code>options</code> ne sont pas supportés par tous les navigateurs. Afin de vérifier qu'une implémentation les prend en charge, on se base sur le fait que les balises de langues incorrectes renvoient une exception{{jsxref("RangeError")}} :</p>

<pre class="brush: js">function testSupporttoLocaleString() {
    var nombre = 0;
    try {
        nombre.toLocaleString("i");
    } catch (e) {
        return e​.name === "RangeError";
    }
    return false;
}
</pre>

<p>Avant ES5.1, il n'était pas nécessaire pour les implémentations de provoquer une erreur d'intervalle si <code>toLocaleString</code> était appelé avec des arguments.</p>

<p>Afin de vérifier le support pour tous les environnements, y compris ceux qui supportent ECMA-262 avant la version 5.1, on peut tester les fonctionnalités définies dans ECMA-402, directement sur <code>Number.prototype.toLocaleString</code> :</p>

<pre class="brush: js">function toLocaleStringSupportsOptions() {
  return !!(typeof Intl == 'object' &amp;&amp; Intl &amp;&amp; typeof Intl.NumberFormat == 'function');
}
</pre>

<p>Cela permet de tester la présence d'un objet global <code>Intl</code>, de vérifier que celui-ci n'est pas <code>null</code> et qu'il a une méthode <code>NumberFormat</code>.</p>

<h3 id="Utiliser_l'argument_locales">Utiliser l'argument <code>locales</code></h3>

<p>Cet exemple illustre les variations possibles entre les différents formats localisés. Afin que le format de langue utilisé soit celui de votre utilisateur, assurez-vous de fournir la langue utilisée (ainsi que des langues de secours) en utilisant l'argument <code>locales</code> :</p>

<pre class="brush: js">var nombre= 123456.789;

// Pour la locale allemande, on utilise un point comme séparateur
// pour les milliers et une virgule comme séparateur décimal
console.log(nombre.toLocaleString("de-DE"));
// → 123.456,789

// Les locales arabes, dans la plupart des pays arabophones, utilisent
// les chiffres arabes
console.log(nombre.toLocaleString("ar-EG"));
// → ١٢٣٤٥٦٫٧٨٩

// En Inde, on utilise des séparateurs de milliers/lakh/crore
console.log(nombre.toLocaleString("en-IN"));
// → 1,23,456.789

// La clé d'extension nu indique un système numérique, ici le système chinois décimal
console.log(nombre.toLocaleString("zh-Hans-CN-u-nu-hanidec"));
// → 一二三,四五六.七八九

// quand on souhaite utiliser un langage qui n'est pas supporté, on peut
// inclure un langage de secours. Exemple ici avec le balinais et l'indonésien
console.log(nombre.toLocaleString(["ban", "id"]));
// → 123.456,789
</pre>

<h3 id="Utiliser_l'argument_options">Utiliser l'argument <code>options</code></h3>

<p>Les résultats fournis par <code>toLocaleString</code> peuvent être déclinés en utilisant l'argument <code>options</code> :</p>

<pre class="brush: js">var nombre = 123456.789;

// on formate selon une devise
console.log(nombre.toLocaleString("de-DE", {style: "currency", currency: "EUR"}));
// → 123.456,79 €

// le yen japonais ne possède pas de centimes
console.log(nombre.toLocaleString("ja-JP", {style: "currency", currency: "JPY"}))
// → ￥123,457

// on se limite à trois chiffres significatifs
console.log(nombre.toLocaleString("en-IN", {maximumSignificantDigits: 3}));
// → 1,23,000

// on utilise la langue du système pour la mise en
// forme des nombres
var num = 30000.65;
console.log(num.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}));
// → "30,000.65" quand l'anglais est la langue par défaut
// → "30.000,65" quand l'allemand est la langue par défaut
// → "30 000,65" quand le français est la langue par défaut
</pre>

<h2 id="Performance">Performance</h2>

<p>Lors du formatage de beaucoup de nombres, il est préférable de créer un objet {{jsxref("NumberFormat")}} et d'utiliser sa méthode {{jsxref("NumberFormat.format")}}.</p>

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
   <td>Définition initiale. Implémentée avec JavaScript 1.5.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.7.4.3', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number.prototype.tolocalestring', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 1.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int 1.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int 2.0', '#sec-13.2.1', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int 2.0')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES Int Draft', '#sec-Number.prototype.toLocaleString', 'Number.prototype.toLocaleString')}}</td>
   <td>{{Spec2('ES Int Draft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Number.toLocaleString")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Number.prototype.toString()")}}</li>
</ul>
