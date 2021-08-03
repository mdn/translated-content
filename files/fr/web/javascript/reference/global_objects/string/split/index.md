---
title: String.prototype.split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
tags:
  - JavaScript
  - Method
  - Prototype
  - Reference
  - Regular Expressions
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/split
original_slug: Web/JavaScript/Reference/Objets_globaux/String/split
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>split()</code></strong> divise une <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String">chaîne de caractères</a> en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. La division est effectuée en recherchant un motif ; où le motif est fourni comme premier paramètre dans l'appel de la méthode.</p>

<div>{{EmbedInteractiveExample("pages/js/string-split.html", "taller")}}</div>

<h2 id="syntax">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.split([<var>separator</var>[, limit]])</pre>

<h3 id="parameters">Paramètres</h3>

<dl>
  <dt><code>separator</code> Facultatif</dt>
  <dd>
    <p>Le motif décrivant où chaque séparation doit se produire. Le <code>separator</code> peut être une simple chaîne de caractères ou peut être une <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp">expression régulière</a>.</p>

    <ul>
      <li>Le cas le plus simple est celui où <code>separator</code> n'est qu'un seul caractère ; il est utilisé pour diviser une chaîne délimitée. Par exemple, une chaîne contenant des valeurs séparées par des tabulations (TSV) pourrait être analysée en passant un caractère de tabulation comme séparateur, comme ceci : <code>myString.split("\t")</code>.</li>
      <li>Si <code>separator</code> contient plusieurs caractères, cette séquence de caractères entière doit être trouvée afin de diviser la chaîne.</li>
      <li>Si <code>separator</code> est omis ou n'apparaît pas dans la chaîne <code>str</code>, le tableau retourné contient un élément constitué de la chaîne entière.</li>
      <li>Si <code>separator</code> apparaît au début (ou à la fin) de la chaîne, il a quand même l'effet de division. Le résultat est une chaîne vide (c'est-à-dire de longueur nulle), qui apparaît à la première (ou dernière) position du tableau retourné.</li>
      <li>Si <code>separator</code> est une chaîne vide (<code>""</code>), la chaîne <code>str</code> est convertie en un tableau de chacun de ses "caractères" UTF-16.</li>
    </ul>

    <div class="warning">
      <p><strong>Attention :</strong> Lorsque une chaîne vide (<code>""</code>) est utilisée comme séparateur, la chaîne n'est <strong>pas</strong> divisée par des <em>caractères perçus par l'utilisateur</em> (<a href="https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries">grappes de graphèmes</a>) ou des caractères unicodes (codepoints), mais par des unités de code UTF-16. Cela détruit les <a href="http://unicode.org/faq/utf_bom.html#utf16-2">paires de substituts</a>. Voir <a href="https://stackoverflow.com/a/34717402">« Comment obtenir une chaîne de caractères vers un tableau de caractères en JavaScript ? » sur StackOverflow</a>.</p>
    </div>
  </dd>
  <dt><code>limit</code> Facultatif</dt>
  <dd>
    <p>Un nombre entier non négatif spécifiant une limite sur le nombre de sous-chaînes à inclure dans le tableau. S'il est fourni, il divise la chaîne de caractères à chaque occurrence du <code>separator</code> spécifié, mais s'arrête lorsque la <code>limit</code> (limite) d'entrées a été atteinte dans le tableau. Tout texte restant n'est pas du tout inclus dans le tableau.</p>

    <ul>
      <li>Le tableau peut contenir moins d'entrées que la <code>limit</code> (limite), si la fin de la chaîne de caractères est atteinte avant que la limite ne soit atteinte.</li>
      <li>Si <code>limit</code> est paramétré sur <code>0</code>, un tableau vide <code>[]</code> est retourné.</li>
    </ul>
  </dd>
</dl>

<h3 id="return_value">Valeur de retour</h3>

<p>Un tableau (<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Array"><code>Array</code></a>) qui contient les fragments de la chaîne de caractères, découpée en fonction du séparateur indiqué.</p>

<h2 id="description">Description</h2>

<p>Lorsqu'il est trouvé, <code>separator</code> est supprimé de la chaîne de caractère, et les sous-chaînes sont retournées dans un tableau.</p>

<p>Si <code>separator</code> est une expression régulière avec des parenthèses de capture, alors chaque fois que <code>separator</code> correspond, les résultats (y compris tout résultat <code>undefined</code>) des parenthèses de capture sont joints au tableau de sortie.</p>

<p>Si le séparateur est un tableau, alors ce tableau est converti en une chaîne de caractères et est utilisé comme séparateur.</p>

<h2 id="examples">Exemples</h2>

<h3 id="using_split">Utiliser <code>split()</code></h3>

<p>Lorsque la chaîne de caractères est vide, <code>split()</code> retourne un tableau contenant une chaîne de caractères vide, plutôt qu'un tableau vide. Si la chaîne et le séparateur sont tous deux des chaînes vides, un tableau vide est retourné.</p>

<pre class="brush: js">const myString = ''
const splits = myString.split()

console.log(splits)

// ↪ [""]</pre>

<p>L'exemple suivant définit une fonction qui divise une chaîne en un tableau de chaînes selon un délimiteur spécifié. Après la coupe de la chaîne, la fonction affiche des messages indiquant la chaîne initiale (avant la coupe), le délimiteur utilisé, le nombre d'éléments dans le tableau, et les éléments du tableau retourné.</p>

<pre class="brush: js">function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log(`La chaine d'origine est : ${stringToSplit}`);
  console.log(`Le délimiteur est : ${separator}`);
  console.log(`Le tableau comporte ${arrayOfStrings.length} elements : `, arrayOfStrings.join(' / '));
}

var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var espace = " ";
var virgule = ",";

splitString(tempestString, espace);
splitString(tempestString);
splitString(monthString, virgule);
</pre>

<p>Cet exemple produira la sortie suivante :</p>

<pre class="brush: js">La chaine d'origine est : "Oh brave new world that has such people in it."
Le délimiteur est : " "
Le tableau comporte 10 elements : Oh / brave / new / world / that / has / such / people / in / it. /

La chaine d'origine est : "Oh brave new world that has such people in it."
Le délimiteur est : "undefined"
Le tableau comporte 1 elements : Oh brave new world that has such people in it. /

La chaine d'origine est : "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
Le délimiteur est : ","
Le tableau comporte 12 elements : Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec /
</pre>

<h3 id="removing_spaces_from_a_string">Supprimer les espaces d'une chaîne</h3>

<p>Dans l'exemple suivant, <code>split</code> recherche zéro ou plusieurs espaces suivis d'un point-virgule, lui-même suivi par zéro ou plus espaces. Lorsque ce « motif » est trouvé, cela supprime celui-ci de la chaîne. <code>nameList</code> est le tableau retourné du résultat de <code>split</code>.</p>

<pre class="brush: js">var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

var re = /\s*(;|$)\s*/;
var nameList = names.split(re);

console.log(nameList);</pre>

<p>Ceci affichera deux lignes dans la console ; la première ligne correspondant à la chaîne d'origine, et la seconde au tableau de résultats.</p>

<pre class="brush: js">Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
["Harry Trump","Fred Barney","Helen Rigby","Bill Abel","Chris Hand"]</pre>

<h3 id="returning_a_limited_number_of_splits">Retourner un nombre limité de sous-chaînes</h3>

<p>Dans l'exemple suivant, <code>split()</code> recherche des espaces dans une chaîne et retourne les 3 premières sous-chaînes qui correspondent.</p>

<pre class="brush: js">var myString = "Hello World. How are you doing?";
var splits = myString.split(" ", 3);

console.log(splits);</pre>

<p>Ce script affichera :</p>

<pre class="brush: js">["Hello", "World.", "How"]</pre>

<h3 id="splitting_with_a_regexp_to_include_parts_of_the_separator_in_the_result">Découper une expression rationnelle - Parenthèses capturantes</h3>

<p>Si le paramètre <code>séparateur</code> est une expression rationnelle qui contient des parenthèses de capture, les résultats seront retournés dans le tableau.</p>

<pre class="brush: js">var myString = "Hello 1 word. Sentence number 2.";
var splits = myString.split(/(\d)/);

console.log(splits);</pre>

<p>Ce script affichera :</p>

<pre class="brush: js">[ "Hello ", "1", " word. Sentence number ", "2", "." ]</pre>

<div class="note">
  <p><strong>Note :</strong> <code>\d</code> correspond à la <a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">classe de caractères</a> pour les chiffres compris entre 0 et 9.</p>
</div>

<h3 id="reversing_a_string_using_split">Inverser une chaîne en utilisant <code>split()</code></h3>

<div class="warning">
  <p><strong>Attention :</strong> Ce n'est pas une façon robuste d'inverser une chaîne :</p>

  <pre class="brush: js example-bad">const str = 'asdfghjkl'
const strReverse = str.split('').reverse().join('')
// 'lkjhgfdsa'

// split() retourne un tableau sur lequel reverse() et join() peuvent être appliqués.</pre>

  <p>Cela ne fonctionne pas si la chaîne de caractères contient des groupes de graphèmes, même en utilisant une division sensible aux unicodes. (Utilisez, par exemple, <a href="https://github.com/mathiasbynens/esrever">esrever</a> à la place).</p>

  <pre class="brush: js example-bad">const str = 'résumé'
const strReverse = str.split(/(?:)/u).reverse().join('')
// =&gt; "́emuśer"
</pre>

  <p><strong>Bonus :</strong> utiliser l'opérateur <a href="/fr/docs/Web/JavaScript/Reference/Operators"><code>===</code></a> pour tester si la chaîne d'origine est un palindrome.</p>
</div>

<h2 id="specifications">Spécifications</h2>

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-string.prototype.split', 'String.prototype.split')}}
      </td>
    </tr>
  </tbody>
</table>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.split")}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"><code>String.prototype.charAt()</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"><code>String.prototype.indexOf()</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf"><code>String.prototype.lastIndexOf()</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/join"><code>Array.prototype.join()</code></a></li>
  <li><a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions">Expressions régulières</a></li>
</ul>
