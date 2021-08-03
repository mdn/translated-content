---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
translation_of: Web/JavaScript/Reference/Global_Objects/String/replaceAll
original_slug: Web/JavaScript/Reference/Objets_globaux/String/replaceAll
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>replaceAll()</code></strong> retourne une nouvelle chaîne de caractères dans laquelle toutes les occurrences d'un motif donné ont été remplacées par une chaîne de remplacement. L'argument <code>pattern</code> fournit pour décrire le motif peut être une chaîne de caractères ou une expression rationnelle (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a>), l'argument <code>replacement</code> peut être une chaîne de caractères ou une fonction qui sera appelée pour chaque correspondance.</p>

<p>La chaîne de caractères initiale restera inchangée.</p>

<div>{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="brush: js">const newStr = <var>str</var>.replaceAll(<var>regexp</var>|<var>substr</var>, <var>newSubstr</var>|<var>function</var>)
</pre>

<div class="notecard note">
<p><strong>Note :</strong> Quand on utilise une expression rationnelle, il est nécessaire d'utiliser le marqueur global ("g"); autrement, l'exception <code>TypeError</code>: <i>"replaceAll must be called with a global RegExp"</i> sera levée.</p>
</div>

<h3 id="parameters">Paramètres</h3>

<dl>
 <dt><code><var>regexp</var></code> (le motif à rechercher)</dt>
 <dd>Un objet ou littérale <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a> avec le marqueur global. Les correspondances sont remplacées par <code><var>newSubstr</var></code> ou la valeur retournée par la <code><var>function</var></code> spécifiée. Une RegExp sans le marqueur global ("g") renverra l'erreur <code>TypeError</code>: "replaceAll must be called with a global RegExp".</dd>
 <dt><code><var>substr</var></code></dt>
 <dd>Une chaîne de caractères (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a>) qui sera remplacée par <code><var>newSubstr</var></code>. Elle est traitée comme une chaîne de caracères littérale et <em>non pas</em> comme une expression régulière.</dd>
 <dt><code><var>newSubstr</var></code> (remplacement)</dt>
 <dd>La chaîne de caractères (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a>) qui remplacera la sous-chaîne indiquée par la <code><var>regexp</var></code> ou <code><var>substr</var></code> donnée en paramètre. Un certain nombre de motifs spéciaux pour le remplacement sont pris en charge, voir la section "<a href="#specifying_a_string_as_a_parameter">Spécifier une chaîne de caractères comme paramètre</a>" ci-dessous.</dd>
 <dt><code><var>function</var></code> (remplacement)</dt>
 <dd>Une fonction qui a pour but de créer la nouvelle sous-chaîne qui remplacera les occurrences trouvées via la <code><var>regexp</var></code> ou <code><var>substr</var></code> donnée en paramètre. Les arguments passés à cette fonction sont détaillés dans la section "<a href="#specifying_a_function_as_a_parameter">Spécifier une fonction comme paramètre</a>" ci-dessous.</dd>
</dl>

<h3 id="return_value">Valeur de retour</h3>

<p>Une nouvelle chaîne avec toutes les occurrences trouvées remplacées par le pattern de remplacement.</p>

<h2 id="description">Description</h2>

<p>Cette méthode ne remplace ni ne modifie l'objet <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String"><code>String</code></a> original. Elle retourne juste une nouvelle chaîne de caractères.</p>

<h3 id="specifying_a_string_as_a_parameter">Spécifier une chaîne de caractères comme paramètre</h3>

<p>La chaîne de caractères de remplacement peut inclure les motifs de remplacement spéciaux suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">Motif</th>
   <th class="header" scope="col">Insertion</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>$$</code></td>
   <td>Insère un <code>"$"</code>.</td>
  </tr>
  <tr>
   <td><code>$&amp;</code></td>
   <td>Insère la chaîne de caractères trouvée.</td>
  </tr>
  <tr>
   <td><code>$`</code></td>
   <td>Insère la portion de chaîne de caractères qui précède celle trouvée.</td>
  </tr>
  <tr>
   <td><code>$'</code></td>
   <td>Insère la portion de chaîne de caractères qui suit celle trouvée.</td>
  </tr>
  <tr>
   <td><code>$<var>n</var></code></td>
   <td>Où <code><var>n</var></code> est un entier positif inférieur à 100. Insère la n-ième occurrence trouvée, à condition que le premier argument soit un objet <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a>. Cet indice démarre à partir de 1.</td>
  </tr>
 </tbody>
</table>

<h3 id="specifying_a_function_as_a_parameter">Spécifier une fonction comme paramètre</h3>

<p>Vous pouvez passer une fonction comme second paramètre. Dans ce cas, la fonction sera appelée après qu'une occurrence soit trouvée. Le résultat de la fonction (valeur de retour) sera utilisé comme chaîne de remplacement. (<strong>Note : </strong>les remplacements spéciaux mentionnés plus haut <em>ne s'appliqueront pas</em> dans ce cas.)</p>

<p>À noter que la fonction sera utilisée à chaque fois qu'une occurrence sera rencontrée, si l'expression régulière donnée en paramètre est globale.</p>

<p>La fonction admet les arguments suivants :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">Nom possible</th>
   <th class="header" scope="col">Valeur fournie</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>match</code></td>
   <td>L'occurrence trouvée. (Correspond au <code>$&amp;</code> du précédent tableau.)</td>
  </tr>
  <tr>
   <td><code>p1, p2…</code></td>
   <td>
    <p>Le n-ième chaîne de caractères trouvée par une sous-correspondance entre parenthèses, à condition que le premier paramètre soit un objet de type <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a>.<br>
     (Correspond aux <code>$1</code>, <code>$2</code>… précédents.) Par exemple, si <code>/(\a+)(\b+)/</code> a été passé en paramètre, <code>p1</code> est la correspondance pour <code>\a+</code>, et <code>p2</code> pour <code>\b+</code>.</p>
   </td>
  </tr>
  <tr>
   <td><code>offset</code></td>
   <td>Le décalage de la sous-chaîne trouvée dans la chaîne d'entrée (par exemple, si la chaîne complète d'entrée était <code>'abcd'</code> et la sous-chaîne <code>'bc'</code> alors, cet argument vaudra 1.)</td>
  </tr>
  <tr>
   <td><code>string</code></td>
   <td>La chaîne compète examinée.</td>
  </tr>
 </tbody>
</table>

<p>Le nombre d'arguments exact dépend du premier argument de <code>replaceAll()</code> : si c'est un objet de type <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a> et, si tel est le cas, du nombre de sous-correspondances entre parenthèses qu'il spécifie.</p>

<h2 id="examples">Exemples</h2>

<h3 id="using_replaceAll">Utiliser replaceAll()</h3>

<pre class="brush: js">'aabbcc'.replaceAll('b', '.');
// 'aa..cc'</pre>

<h3 id="non-global_regex_throws">Exceptions pour les expressions rationnelles non globales</h3>

<p>Quand on utilise une expression rationnelle pour chercher une valeur, celle-ci doit être globale. Le code suivant ne fonctionnera pas :</p>

<pre class="brush: js; example-bad">'aabbcc'.replaceAll(/b/, '.');
TypeError: replaceAll must be called with a global RegExp
</pre>

<p>L'exemple suivant, utilisant le marqueur <code>g</code>, fonctionnera :</p>

<pre class="brush: js; example-good">'aabbcc'.replaceAll(/b/g, '.');
"aa..cc"
</pre>

<h2 id="specifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.replaceall', 'String.prototype.replaceAll')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.replaceAll")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace"><code>String.prototype.replace()</code></a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match"><code>String.prototype.match()</code></a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec"><code>RegExp.prototype.exec()</code></a></li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test"><code>RegExp.prototype.test()</code></a></li>
</ul>
