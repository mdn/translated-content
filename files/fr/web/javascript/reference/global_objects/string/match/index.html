---
title: String.prototype.match()
slug: Web/JavaScript/Reference/Global_Objects/String/match
tags:
  - Expressions rationnelles
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/match
original_slug: Web/JavaScript/Reference/Objets_globaux/String/match
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>match()</code></strong> permet d'obtenir le tableau des correspondances entre la chaîne courante et une expression rationnelle.</p>

<div>{{EmbedInteractiveExample("pages/js/string-match.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.match(<var>regexp</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>regexp</code></dt>
 <dd>Un objet représentant une expression rationnelle. Si ce n'est pas un objet de type <code>RegExp</code>, celui-ci sera converti en un objet {{jsxref("RegExp")}} grâce à <code>new RegExp(regexp)</code>. Si aucun paramètre n'est utilisé, cela renverra un tableau contenant un élément étant la chaîne vide : <code>[""]</code>.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un tableau ({{jsxref("Array")}}) contenant les correspondances et les groupes capturés avec les parenthèses ou {{jsxref("null")}} s'il n'y a pas de correspondance. Le contenu de ce tableau dépend de l'utilisation du marqueur pour la recherche globale <code>g</code> :</p>

<ul>
 <li>Si le marqueur <code>g</code> est utilisé, tous les résultats correspondants à l'expression rationnelle complète seront renvoyés mais les groupes capturants ne seront pas renvoyés.</li>
 <li>Si le marqueur <code>g</code> n'est pas utilisé, seule la première correspondance et ses groupes capturants seront renvoyés. Dans ce cas, l'élément renvoyé aura des propriétés supplémentaires listées ci-après.</li>
</ul>

<h4 id="Propriétés_supplémentaires">Propriétés supplémentaires</h4>

<p>Comme indiqué ci-avant, les résultats peuvent contenir certaines propriétés supplémentaires :</p>

<ul>
 <li><code>groups</code> : un tableau de groupes capturants nommés ou {{jsxref("undefined")}} si aucun groupe capturant n'a été défini. Voir <a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">la page sur les groupes et les intervalles</a> pour plus d'informations.</li>
 <li><code>index</code> : l'indice de la chaîne de caractères où a été trouvée la correspondance.</li>
 <li><code>input</code> : une copie de la chaîne sur laquelle a été effectuée la recherche.</li>
</ul>

<h2 id="Description">Description</h2>

<p>Si l'expression n'utilise pas le drapeau (<em>flag</em>) <code>g</code>, le résultat obtenu sera le même qu'avec {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}}.</p>

<h3 id="Voir_aussi_les_méthodes_de_RegExp">Voir aussi : les méthodes de <code>RegExp</code></h3>

<ul>
 <li>Si on souhaite savoir s'il existe des correspondances entre une chaîne de caractères et une expression rationnelle {{jsxref("RegExp")}}, on pourra utiliser {{jsxref("RegExp.prototype.test()", "RegExp.test()")}}.</li>
 <li>Si on ne souhaite obtenir que la première correspondance, on pourra plutôt utiliser {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} à la place.</li>
 <li>Si on souhaite obtenir les groupes correspondants et que le drapeau « global » est activé, il faudra utiliser {{jsxref("RegExp.prototype.exec()", "RegExp.exec()")}} à la place.</li>
</ul>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_match()">Utiliser <code>match()</code></h3>

<p>Dans l'exemple suivant, on utilise <code>match()</code> afin de trouver la chaîne <code>'Chapitre'</code> suivie par un ou plusieurs chiffres séparés par des points. L'expression utilisée active le drapeau <code>i</code> afin que la casse ne soit pas prise en compte.</p>

<pre class="brush: js">var str = 'Pour plus d\'informations, voir le chapitre 3.4.5.1';
var re = /(chapitre \d+(\.\d)*)/i;
var trouvé = str.match(re);

console.log(trouvé);

// logs ['chapitre 3.4.5.1', 'chapitre 3.4.5.1', '.1']

// 'chapitre 3.4.5.1' est la première correspondance
// 'chapitre 3.4.5.1' est la valeur gardée en mémoire par
// `(chapitre \d+(\.\d)*)`.
// '.1' est la valeur gardée en mémoire par `(\.\d)`.
</pre>

<h3 id="Utiliser_les_drapeaux_g_(global)_et_i_(ignorer_la_casse)_avec_match()">Utiliser les drapeaux <code>g</code> (global) et <code>i</code> (ignorer la casse) avec <code>match()</code></h3>

<p>Dans cet exemple, on illustre comment utiliser des drapeaux avec l'expression rationnelle qui est un argument de <code>match()</code>. Chaque lettre de A à E et de a à e est renvoyée, chacune dans un élément du tableau de résultat.</p>

<pre class="brush: js">var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var tableau_correspondances = str.match(regexp);

console.log(tableau_correspondances);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
</pre>

<h3 id="Utiliser_un_paramètre_qui_n'est_pas_une_RegExp">Utiliser un paramètre qui n'est pas une <code>RegExp</code></h3>

<p>Lorsque le paramètre passé à la fonction est une chaîne de caractères ou un nombre, il est converti de façon implicite en un objet  {{jsxref("RegExp")}} grâce à <code>new RegExp(obj)</code>. Si c'est un nombre positif avec le signe +, la méthode <code>RegExp()</code> ignorera ce signe.</p>

<pre class="brush: js">var str1 = "NaN signifie : qui n'est pas un nombre.";
var str2 = "Mon père a 65 ans."
str1.match("nombre");   // "nombre" est une chaîne, renvoie ["nombre"]
str1.match(NaN);        // NaN est de type number, renvoie ["NaN"]
str2.match(65);         // Renvoie ["65"]
str2.match(+65);        // Renvoie également ["65"]</pre>

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
   <td>Définition initiale. Implémentée avec JavaScript 1.2.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.5.4.10', 'String.prototype.match')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.match', 'String.prototype.match')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.match', 'String.prototype.match')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.match")}}</p>

<h2 id="Notes_spécifiques_à_FirefoxGecko">Notes spécifiques à Firefox/Gecko</h2>

<ul>
 <li><code>flags</code> était un second argument non standard présent uniquement sur Gecko : <var>str</var>.match(<var>regexp, flags</var>) et a été retiré avec Firefox 49.</li>
 <li>À partir de Firefox 27, cette méthode a été ajustée afin d'être conforme à ECMAScript. Lorsque <code>match()</code> est appelée sur une expression rationnelle globale, la propriété {{jsxref("RegExp.lastIndex")}} de l'objet sera redéfini à <code>0</code> ({{bug(501739)}}).</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{jsxref("RegExp.prototype.exec()")}}</li>
 <li>{{jsxref("RegExp.prototype.test()")}}</li>
</ul>
