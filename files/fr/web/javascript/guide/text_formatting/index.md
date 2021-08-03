---
title: Formatage de texte
slug: Web/JavaScript/Guide/Text_formatting
tags:
  - Guide
  - JavaScript
  - l10n:priority
translation_of: Web/JavaScript/Guide/Text_formatting
original_slug: Web/JavaScript/Guide/Formatage_du_texte
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}</div>

<p>Ce chapitre présente comment travailler avec les chaînes de caractères et le texte en JavaScript.</p>

<h2 id="Les_chaînes_de_caractères">Les chaînes de caractères</h2>

<p>Le type {{Glossary("String")}} de JavaScript est utilisé pour représenter des données textuelles. C'est un ensemble d'"éléments" de valeurs non signées sur 16 bits (unités de codage UTF-16). Chaque élément dans la chaîne de caractères occupe une position dans la chaîne de caractères. Le premier élément se trouve à l'indice 0, le suivant à l'indice 1 et ainsi de suite. La longueur d'une chaîne de caractères est le nombre d'éléments qu'elle contient. Vous pouvez créer des chaînes de caractères en utilisant des littéraux de chaîne de caractères ou des objets chaîne de caractères.</p>

<h3 id="Les_littéraux_de_chaînes_de_caractères">Les littéraux de chaînes de caractères</h3>

<p>Vous pouvez créer des chaînes de caractères simple en utilisant des apostrophes simples ou doubles :</p>

<pre class="brush: js">'machin'
"truc"</pre>

<p>Des chaînes plus avancées peuvent être créées en utilisant des séquences d'échappement.</p>

<h4 id="Les_séquences_déchappement_hexadécimales">Les séquences d'échappement hexadécimales</h4>

<p>Le nombre situé après \x est interprété comme un nombre <a href="https://fr.wikipedia.org/wiki/Syst%C3%A8me_hexad%C3%A9cimal">hexadécimal</a> :</p>

<pre class="brush: js">'\xA9' // "©"</pre>

<h4 id="Les_séquences_déchappement_Unicode">Les séquences d'échappement Unicode</h4>

<p>Les séquences d'échappement Unicode requièrent au moins quatres caractères hexadécimaux après \u.</p>

<pre class="brush: js">'\u00A9' // "©"</pre>

<h4 id="Léchappement_dunités_de_codage_Unicode">L'échappement d'unités de codage Unicode</h4>

<p>Nouveau dans ECMAScript 2015. Avec les échappements d'unités de codage Unicode, tout caractère peut être échappé en utilisant des nombres hexadécimaux, de sorte qu'il est possible de d'utiliser des unités de codage Unicode jusqu'à <code>0x10FFFF</code>. Avec les échappements Unicode simples, il est souvent nécessaire d'écrire les moitiés de remplacement séparément pour obtenir le même résultat.</p>

<p>Voir aussi {{jsxref("String.fromCodePoint()")}} ou {{jsxref("String.prototype.codePointAt()")}}.</p>

<pre class="brush: js">'\u{2F804}'

// Le même avec des échappements Unicode simples
'\uD87E\uDC04'
</pre>

<h3 id="Les_objets_String">Les objets String</h3>

<p>L'objet {{jsxref("String")}} est un conteneur autour du type de donnée primitif chaîne de caractères.</p>

<pre><code>var s = new String('foo'); // crée un objet String
console.log(s); // affiche : {'0': 'f', '1': 'o', '2': 'o'}
typeof s; // retourne 'object'</code></pre>

<p>Vous pouvez appeler chacune des méthodes de l'objet <code>String</code> avec une valeur littérale de chaîne de caractères : JavaScript convertira automatiquement le littéral en un objet <code>String</code> temporaire, appellera la méthode, puis supprimera l'objet <code>String</code> temporaire. Vous pouvez aussi utiliser la propriété <code>String.length</code> sur un littéral de chaîne de caractères.</p>

<p>Vous devriez utiliser des littéraux de chaîne de caractères, à moins que vous n'ayez spécifiquement besoin d'un objet <code>String</code>, parce que les objets <code>String</code> peuvent avoir un comportement contre-intuitif :</p>

<pre class="brush: js">var s1 = '2 + 2'; // crée une valeur de chaîne de caractères
var s2 = new String('2 + 2'); // crée un objet String
eval(s1); // renvoie le nombre 4
eval(s2); // renvoie la chaîne "2 + 2"</pre>

<p>Un objet <code>String</code> possède une propriété, <code>length</code>, qui indique le nombre d'unités de codage UTF-16 dans la chaîne de caractères. Par exemple, le code suivant affecte à <code>x</code> la valeur 16, parce que la chaîne "Bonjour, Monde !" contient 16 caractères, chacun représenté par une unité de codage UTF-16. Vous pouvez accéder à chaque unité de codage en utilisant une syntaxe de tableau entre crochets. Vous ne pouvez pas changer les caractères, du fait que les chaînes sont des objets immuables (semblables à des tableaux) :</p>

<pre class="brush: js">var machaine = 'Bonjour, Monde !';
var x = machaine.length;
machaine[0] = 'L'; // cela n'a aucun effet car les chaînes sont immuables
machaine[0]; // cela renvoie "B"
</pre>

<p>Les caractères dont les valeurs scalaires sont supérieures à U+FFFF (comme certains rares caractères chinois/japonais/coréens/vietnamiens et certains emojis) sont stockés en UTF-16 via deux unités de codage de remplacement. Par exemple, une chaîne de caractères contenant le seul caractère U+1F600 ("Emoji grinning face") aura une longueur de 2. Le fait d'accéder aux unités de codage individuelles dans une telle chaîne de caractères en utilisant des crochets peut avoir des conséquences indésirables telles que la génération d'unité de codage de remplacement non conformes, en violation du standard Unicode. (Des exemples devraient être ajoutés à cette page après que le bug MDN 857438 sera corrigé. Voir aussi {{jsxref("String.fromCodePoint()")}} ou {{jsxref("String.prototype.codePointAt()")}}.</p>

<p>Un objet String a une grande variété de méthodes : par exemple, celles qui retournent une variation de la chaîne de caractères elle-même, telles que <code>substring</code> et <code>toUpperCase</code>.</p>

<p>Le tableau suivant résume les méthodes des objets {{jsxref("String")}}.</p>

<h4 id="Méthodes_de_String">Méthodes de <code>String</code></h4>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Méthode</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("String.charAt", "charAt")}}, {{jsxref("String.charCodeAt", "charCodeAt")}}, {{jsxref("String.codePointAt", "codePointAt")}}</td>
   <td>Retourne le caractère ou le code de caractère à la position spécifiée de la chaîne de caractères.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.indexOf", "indexOf")}}, {{jsxref("String.lastIndexOf", "lastIndexOf")}}</td>
   <td>Retourne la position de la sous-chaîne spécifiée dans la chaîne de caractères, ou la dernière position de la sous-chaîne spécifiée, respectivement.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.startsWith", "startsWith")}}, {{jsxref("String.endsWith", "endsWith")}}, {{jsxref("String.includes", "includes")}}</td>
   <td>Retourne le fait de savoir si la chaîne de caractères courante commence ou non par, finit ou non par, ou contient ou non, la chaîne spécifiée.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.concat", "concat")}}</td>
   <td>Combine le texte de deux chaînes de caractères et retourne une nouvelle chaîne de caractères.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.fromCharCode", "fromCharCode")}}, {{jsxref("String.fromCodePoint", "fromCodePoint")}},</td>
   <td>Construit une chaîne de caractères à partir de la séquence de valeurs Unicode fournie. Cette méthode est une méthode de la classe String et non une instance de String.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.split", "split")}}</td>
   <td>Découpe un objet <code>String</code> en un tableau de chaînes de caractères en découpant la chaîne de caractères en sous-chaînes.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.slice", "slice")}}</td>
   <td>Extrait une partie de la chaîne de caractères et retourne une nouvelle chaîne de caractères.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.substring", "substring")}}, {{jsxref("String.substr", "substr")}}</td>
   <td>Retourne le sous-ensemble spécifié de la chaîne de caractères, en spécifiant soit des indices de début et de fin, soit l'indice de début et une longueur.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.match", "match")}}, {{jsxref("String.matchAll", "matchAll")}}, {{jsxref("String.replace", "replace")}}, {{jsxref("String.search", "search")}}</td>
   <td>Ces fonctions utilisent des expressions rationnelles.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.toLowerCase", "toLowerCase")}}, {{jsxref("String.toUpperCase", "toUpperCase")}}</td>
   <td>
    <p>Retourne la chaîne tout en minuscules ou tout en majuscules, respectivement.</p>
   </td>
  </tr>
  <tr>
   <td>{{jsxref("String.normalize", "normalize")}}</td>
   <td>Retourne la Forme Normalisée Unicode de la chaîne de caractères appelante.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.repeat", "repeat")}}</td>
   <td>Retourne une chaîne constituée des éléments de l'objet répétés le nombre de fois donné.</td>
  </tr>
  <tr>
   <td>{{jsxref("String.trim", "trim")}}</td>
   <td>Retire les blancs en début et en fin de chaîne.</td>
  </tr>
 </tbody>
</table>

<h3 id="Les_littéraux_de_modèle_multi-lignes">Les littéraux de modèle multi-lignes</h3>

<p>Le <a href="/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits">littéraux de modèle</a> sont des littéraux de chaîne de caractères permettant des expressions intégrées. Avec eux, vous pouvez utiliser des chaînes de caractères multi-lignes et des fonctionnalités d'interpolation de chaînes.</p>

<p>Les littéraux de gabarits sont délimités par des <a href="https://fr.wikipedia.org/wiki/Accent_grave">accents graves</a> (ou <em>backticks` `</em> en anglais), au lieu des apostrophes simples ou doubles. Les littéraux de modèle peuvent contenir des marque-places. Ceux-ci sont indiqués par le signe dollar et des accolades (<code>${expression}</code>).</p>

<h4 id="Multi-lignes">Multi-lignes</h4>

<p>Tout caractère de passage à la ligne inséré dans le source fait partie du littéral de modèle. En utilisant les chaînes de caractères normales, vous auriez eu à utiliser la syntaxe suivante afin d'avoir des chaînes de caractères multi-lignes :</p>

<pre class="brush: js">console.log('chaîne ligne de texte 1\n\
chaîne ligne de texte 2');
// "chaîne ligne de texte 1
// chaîne ligne de texte 2"</pre>

<p>Pour obtenir le même effet avec des chaînes de caractères multi-lignes, vous pouvez maintenant écrire :</p>

<pre class="brush: js">console.log(`chaîne ligne de texte 1
chaîne ligne de texte 2`);
// "chaîne ligne de texte 1
// chaîne ligne de texte 2"</pre>

<h4 id="Expressions_intégrées">Expressions intégrées</h4>

<p>Pour intégrer des expressions dans des chaînes normales, vous devriez utiliser la syntaxe suivante :</p>

<pre class="brush: js">var a = 5;
var b = 10;
console.log('Quinze vaut ' + (a + b) + ' et\npas ' + (2 * a + b) + '.');
// "Quinze vaut 15 et
// pas 20."</pre>

<p>Maintenant, avec les modèles, vous pouvez utiliser du sucre syntaxique rendant plus lisibles les substitutions comme celle-ci :</p>

<pre class="brush: js">var a = 5;
var b = 10;
console.log(`Quinze vaut ${a + b} et\npas ${2 * a + b}.`);
// "Quinze vaut 15 et
// pas 20."</pre>

<p>Pour plus d'informations, voir les <a href="/fr/docs/Web/JavaScript/Reference/Littéraux_gabarits">Littéraux de modèles</a> dans la <a href="/fr/docs/Web/JavaScript/Reference">Référence JavaScript</a>.</p>

<h2 id="Internationalisation">Internationalisation</h2>

<p>L'objet {{jsxref("Intl")}} est l'espace de noms pour l'API d'Internationalisation de l'ECMAScript, qui fournit des fonctionnalités de comparaison de chaînes de caractères, de formatage de nombres, et de formatage des dates et heures prenant en compte la langue. Les constructeurs pour les objets {{jsxref("Collator")}}, {{jsxref("NumberFormat")}} et {{jsxref("DateTimeFormat")}} sont des propriétés de l'objet <code>Intl</code>.</p>

<h3 id="Formatage_date_et_heure">Formatage date et heure</h3>

<p>L'objet {{jsxref("DateTimeFormat")}} est utile pour formater la date et l'heure. Ce qui suit formate une date en anglais telle qu'utilisée aux États-Unis (le résultat sera différent dans une autre zone horaire).</p>

<pre class="brush: js">var msParJour = 24 * 60 * 60 * 1000;

// 17 juillet 2014 00:00:00 UTC.
var _17juillet2014 = new Date(msParJour * (44 * 365 + 11 + 197));

var options = { year: "2-digit", month: "2-digit", day: "2-digit",
                hour: "2-digit", minute: "2-digit", timeZoneName: "short" };
var dateHeureAmericaine = new Intl.DateTimeFormat("en-US", options).format;

console.log(dateHeureAmericaine(_17juillet2014)); // 07/16/14, 5:00 PM PDT
</pre>

<h3 id="Formatage_des_nombres">Formatage des nombres</h3>

<p>L'objet {{jsxref("NumberFormat")}} est utile pour formater les nombres, par exemple, les devises :</p>

<pre class="brush: js">var prixDeLEssence = new Intl.NumberFormat("en-US",
                        { style: "currency", currency: "USD",
                          minimumFractionDigits: 3 });

console.log(prixDeLEssence.format(5.259)); // $5.259

var decimalesHanRMBEnChine = new Intl.NumberFormat("zh-CN-u-nu-hanidec",
                        { style: "currency", currency: "CNY" });

console.log(decimalesHanRMBEnChine.format(1314.25)); // ￥ 一,三一四.二五
</pre>

<h3 id="Ordonnancement">Ordonnancement</h3>

<p>L'objet {{jsxref("Collator")}} est utile pour comparer et trier des chaînes de caractères.</p>

<p>Par exemple, il y a en fait deux ordres de tri en allemand, <em>annuaire</em> et <em>dictionnaire</em>. Annuaire met l'accent sur le son, et c'est comme si "ä", "ö", etc. étaient étendus en "ae", "oe", etc. avant le tri :</p>

<pre class="brush: js">var noms = ['Hochberg', 'Hönigswald', 'Holzman'];

var annuaireAllemand = new Intl.Collator('de-DE-u-co-phonebk');

// Comme si tri de ['Hochberg', 'Hoenigswald', 'Holzman']:
console.log(noms.sort(annuaireAllemand.compare).join(', '));
// Affiche "Hochberg, Hönigswald, Holzman"
</pre>

<p>Certains mots allemands se conjuguent avec des umlauts supplémentaires, de sorte que dans les dictionnaires, le fait d'ignorer les umlauts pour le tri  est perceptible (sauf lors du tri de mots ne différant <em>que</em> par des umlauts, comme <em>schon</em> avant <em>schön</em>).</p>

<pre class="brush: js">var dictionnaireAllemand = new Intl.Collator('de-DE-u-co-dict');

// Comme si tri de ["Hochberg", "Honigswald", "Holzman"]:
console.log(nom.sort(dictionnaireAllemand.compare).join(', '));
// Affiche "Hochberg, Holzman, Hönigswald"
</pre>

<p>Pour plus d'informations sur l'API {{jsxref("Intl")}}, voir aussi <a href="https://hacks.mozilla.org/2014/12/introducing-the-javascript-internationalization-api/">Introducing the JavaScript Internationalization API</a>.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Numbers_and_dates", "Web/JavaScript/Guide/Regular_Expressions")}}</p>
