---
title: String
slug: Web/JavaScript/Reference/Global_Objects/String
tags:
  - Class
  - ECMAScript 2015
  - JavaScript
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String
original_slug: Web/JavaScript/Reference/Objets_globaux/String
browser-compat: javascript.builtins.String
---
<div>{{JSRef}}</div>

<p>Un objet <strong><code>String</code></strong> est utilisé afin de représenter et de manipuler une chaîne de caractères.</p>

<h2 id="description">Description</h2>

<p>Les chaînes de caractères sont utiles pour stocker des données qui peuvent être représentées sous forme de texte. Parmi les opérations les plus utilisées pour manipuler les chaînes de caractères, on a : la vérification de leur longueur avec <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length"><code>length</code></a>, la construction et la concaténation avec <a href="/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators">les opérateurs <code>+</code> et <code>+=</code></a>, la recherche de sous-chaîne avec les méthodes <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/includes"><code>includes()</code></a> ou <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"><code>indexOf()</code></a> ou encore l'extraction de sous-chaînes avec la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substring"><code>substring()</code></a>.</p>

<h3 id="creating_strings">Créer des chaînes de caractères</h3>

<p>Il est possible de créer des chaînes de caractères comme des valeurs primitives ou comme des objets avec le constructeur <a href="/fr/docs/Web/JavaScript/Reference/String/String"><code>String()</code></a> :</p>

<pre class="brush: js">
const string1 = "Une chaîne de caractères primitive";
const string2 = 'Là encore une valeur de chaîne de caractères primitive';
const string3 = `Et ici aussi`;</pre>

<pre class="brush: js">
const string4 = new String("Un objet String");
</pre>

<p>Les valeurs primitives ou les objets représentant des chaînes de caractères peuvent être utilisés de façon interchangeable dans la plupart des situations. Voir ci-après <a href="#string_primitives_and_string_objects">Chaînes de caractères : valeurs primitives et objets</a>.</p>

<p>Les valeurs littérales pour les chaînes de caractères peuvent être indiquées avec des simples quotes (<kbd>'</kbd>), des doubles quotes (<kbd>"</kbd>) ou encore par des accents graves (<kbd>`</kbd>). Cette dernière forme permet de définir un <a href="/fr/docs/Web/JavaScript/Reference/Template_literals">littéral de gabarit de chaîne de caractères</a> avec lequel on pourra interpoler des expressions dans une chaîne de caractères.</p>

<h3 id="character_access">Accéder à un caractère</h3>

<p>Il existe deux façons d'accéder à un caractère dans une chaîne. La première façon consiste à utiliser la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"><code>charAt()</code></a> :</p>

<pre class="brush: js">
return 'chat'.charAt(2); // renvoie "a"
</pre>

<p>La seconde méthode, introduite avec ECMAScript 5, est de manipuler la chaîne comme un tableau, où les caractères sont les éléments du tableau et ont un indice correspondant à leur position :</p>

<pre class="brush: js">
return 'chat'[2]; // renvoie "a"
</pre>

<p>En utilisant la seconde notation, il est impossible de supprimer ou d'affecter une valeur à ces propriétés. En effet, les propriétés concernées ne sont ni accessibles en écriture ni configurables. Pour plus d'informations, voir la page de <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty"><code>Object.defineProperty()</code></a>.</p>

<h3 id="comparing_strings">Comparer des chaînes de caractères</h3>

<p>Les développeurs C utilisent la fonction <code>strcmp()</code> pour comparer des chaînes de caractères. En JavaScript, il est possible d'utiliser <a href="/fr/docs/Web/JavaScript/Reference/Operators">les opérateurs inférieur et supérieur </a>:</p>

<pre class="brush: js">
let a = "a";
let b = "b";
if (a &lt; b) { // true
  console.log(a + " est inférieure à " + b);
} else if (a &gt; b) {
  console.log(a + " est supérieure à " + b);
} else {
  console.log(a + " et " + b + " sont égales.");
}
</pre>

<p>On peut obtenir un résultat semblable avec la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"><code>localeCompare()</code></a> qui permet de prendre en compte la locale utilisée et qui est héritée par toutes les instances de <code>String</code>.</p>

<p>On notera que <code>a == b</code> compare les chaînes de caractères <code><var>a</var></code> et <code><var>b</var></code> de façon sensible à la casse. Si on souhaite comparer des chaînes sans être sensible à la casse, on pourra utiliser une fonction semblable à&nbsp;:</p>

<pre class="brush: js">
function isEqual(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase()
}
</pre>

<p>On utilise ici une conversion en majuscules plutôt qu'en minuscules, car cela cause certains problèmes de conversion pour certains caractères UTF-8.</p>

<h3 id="string_primitives_and_string_objects">Les différences entre les objets <code>String</code> et le type primitif pour les chaînes de caractères</h3>

<p>En JavaScript, on distingue d'une part les objets <code>String</code> et d'autre par les valeurs primitives qui sont des chaînes de caractères (il en va de même pour les booléens/<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean"><code>Boolean</code></a> et les nombres/<a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Number"><code>Number</code></a>).</p>

<p>Les valeurs littérales (délimitées par des simples quotes, des doubles quotes ou des accents graves et les chaînes de caractères renvoyées par les appels à <code>String</code> sans le mot-clé <a href="/fr/docs/Web/JavaScript/Reference/Operators/new"><code>new</code></a> sont des chaînes de caractères primitives. JavaScript convertit automatiquement les valeurs primitives en objets <code>String</code> et il est donc possible d'utiliser les méthodes objet de <code>String</code> sur les chaînes de caractères primitives. Dans les contextes où une méthode est appelée sur une chaîne de caractères primitive ou alors qu'on recherche une propriété, JavaScript convertira implicitement la valeur primitive et appellera la méthode ou accèdera à la propriété correspondante.</p>

<pre class="brush: js">
let s_prim = "toto";
let s_obj = new String(s_prim);

console.log(typeof s_prim); // affiche "string"
console.log(typeof s_obj);  // affiche "object"
</pre>

<p>Les chaînes primitives et les objets <code>String</code> renvoient des résultats différents lorsqu'ils sont évalués avec <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/eval"><code>eval()</code></a>. Les chaînes primitives sont traitées comme du code source, tandis que les objets <code>String</code> sont traités comme tous les autres objets, en renvoyant l'objet. Par exemple :</p>

<pre class="brush: js">
let s1 = "2 + 2";                // crée une chaîne primitive
let s2 = new String("2 + 2");    // crée un objet String
console.log(eval(s1));           // renvoie le nombre 4
console.log(eval(s2));           // renvoie la chaîne "2 + 2"
</pre>

<p>Pour ces raisons, il peut y avoir certains problèmes quand le code attend une chaîne primitive plutôt qu'un objet <code>String</code>. Toutefois, cette distinction est rarement nécessaire en pratique.</p>

<p>Un objet <code>String</code> peut toujours être converti en son équivalent primitif grâce à la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf"><code>valueOf()</code></a>.</p>

<pre class="brush: js">
console.log(eval(s2.valueOf())); // renvoie  4
</pre>

<h3 id="escape_notation">Échappement des caractères</h3>

<p>En dehors des caractères classiques, des caractères spéciaux peuvent être encodés grâce à l'échappement :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Code</th>
   <th scope="col">Résultat</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>\0</code></td>
   <td>Caractère nul (U+0000 NULL)</td>
  </tr>
  <tr>
   <td><code>\'</code></td>
   <td>simple quote (U+0027 APOSTROPHE)</td>
  </tr>
  <tr>
   <td><code>\"</code></td>
   <td>double quote (U+0022 QUOTATION MARK)</td>
  </tr>
  <tr>
   <td><code>\\</code></td>
   <td>barre oblique inversée (U+005C REVERSE SOLIDUS)</td>
  </tr>
  <tr>
   <td><code>\n</code></td>
   <td>nouvelle ligne (U+000A LINE FEED; LF)</td>
  </tr>
  <tr>
   <td><code>\r</code></td>
   <td>retour chariot (U+000D CARRIAGE RETURN; CR)</td>
  </tr>
  <tr>
   <td><code>\v</code></td>
   <td>tabulation verticale (U+000B LINE TABULATION)</td>
  </tr>
  <tr>
   <td><code>\t</code></td>
   <td>tabulation (U+0009 CHARACTER TABULATION)</td>
  </tr>
  <tr>
   <td><code>\b</code></td>
   <td>retour arrière (U+0008 BACKSPACE)</td>
  </tr>
  <tr>
   <td><code>\f</code></td>
   <td>saut de page (U+000C FORM FEED)</td>
  </tr>
  <tr>
   <td><code>\uXXXX</code> (<code>XXXX</code> étant 4 chiffres hexadécimaux pour l'intervalle of 0x0000 - 0xFFFF)</td>
   <td>Point de code Unicode entre U+0000 et U+FFFF (représente le plan Unicode multilingue basique)</td>
  </tr>
  <tr>
   <td><code>\u{X}</code> ... <code>\u{XXXXXX}</code> (<code>X…XXXXXX</code> étant 1 à 6 chiffres hexadécimaux pour l'intervalle 0x0 - 0x10FFFF)</td>
   <td>Point de code Unicode entre U+0000 et U+10FFFF (représente l'intégralité d'Unicode)</td>
  </tr>
  <tr>
   <td><code>\xXX</code> (<code>XX</code> étant 2 chiffres hexadécimaux pour l'intervalle 0x00 - 0xFF)</td>
   <td>Point de code Unicode entre U+0000 et U+00FF (correspond à Basic Latin et Latin-1 supplement ; équivalent à ISO-8859-1)</td>
  </tr>
 </tbody>
</table>

<h3 id="long_literal_strings">Littéraux pour les chaînes longues</h3>

<p>Il peut arriver que le code contienne des chaînes plutôt longues. Plutôt que d'avoir des lignes qui s'étirent sur tout le fichier et dans un éditeur de code, il est possible de casser la chaîne sur plusieurs lignes sans que cela modifie le contenu de la chaîne. Il existe deux façons de faire.</p>

<h4 id="method_1">Méthode 1</h4>

<pre class="brush: js">
let chaineLongue = "Voici une très longue chaîne qui a besoin " +
                   " d'être passée à la ligne parce que sinon " +
                   " ça risque de devenir illisible.";
</pre>

<h4 id="method_2">Méthode 2</h4>

<p>On peut sinon utiliser le caractère barre oblique inversée "\" à la fin de chaque ligne pour indiquer que la chaîne continue sur la ligne suivante. Il faut bien faire attention à ce que la barre oblique soit bien le dernier caractère de la ligne avant le saut de ligne. Sinon, cela ne fonctionnera pas. Voilà comment se présente cette forme :</p>

<pre class="brush: js">
let chaineLongue = "Voici une très longue chaîne qui a besoin \
d'être passée à la ligne parce que sinon \
ça risque de devenir illisible.";
</pre>

<h4 id="method_3">Méthode 3</h4>

<p>Si les sauts de ligne doivent faire partie du résultat, on peut utiliser l'accent grave comme délimiteur de chaîne. Celui-ci permet d'utiliser des sauts de ligne à l'intérieur de la valeur littérale.</p>

<pre class="brush: js">
let chaineLongue = `Voici une très longue chaîne qui a besoin
d'être passée à la ligne parce que sinon
ça risque de devenir illisible.`;
</pre>

<h2 id="constructor">Constructeur</h2>

<dl>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/String/String"><code>String()</code></a></dt>
  <dd>Crée un nouvel <code>String</code>. S'il est appelé comme une fonction plutôt que comme un constructeur, il effectue une conversion de la valeur en chaîne de caractères.</dd>
</dl>

<h2 id="static_methods">Méthodes statiques</h2>

<dl>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode"><code>String.fromCharCode(<var>num1</var> [, ...[,<var>numN</var>]])</code></a></dt>
  <dd>Renvoie une chaîne de caractères créée en utilisant la séquence indiquée de valeurs Unicode.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint"><code>String.fromCodePoint(<var>num1</var> [, ...[,<var>numN</var>]])</code></a></dt>
  <dd>Renvoie une chaîne de caractères créée en utilisant la séquence indiquée de points de code.</dd>
  <dt><dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/raw"><code>String.raw()</code></a></dt></dt>
  <dd>Renvoie une chaîne de caractères créée à partir d'un gabarit de chaîne de caractères brut.</dd>
</dl>

<h2 id="instance_properties">Propriétés des instances</h2>

<dl>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/length"><code>String.prototype.length</code></a></dt>
  <dd>Cette propriété indique la longueur de la chaîne de caractères. Elle est en lecture seule.</dd>
</dl>

<h2 id="instance_methods">Méthodes des instances</h2>

<dl>
 <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/at"><code>String.prototype.at(<var>index</var>)</code></a>{{Experimental_Inline}}</dt>
 <dd>Renvoie le caractère (exactement un seul codet UTF-16) à l'indice indiqué par <code><var>index</var></code>. Les indices négatifs sont acceptés, dans ce cas ils indiquent la position par rapport au dernier caractère.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charAt"><code>String.prototype.charAt(<var>index</var>)</code></a></dt>
  <dd>Renvoie le caractère (exactement un seul codet UTF-16) à l'indice indiqué par <code><var>index</var></code>.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt"><code>String.prototype.charCodeAt(index)</code></a></dt>
  <dd>Renvoie un nombre qui est la valeur du codet UTF-16 à l'indice indiqué par <code><var>index</var></code>.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt"><code>String.prototype.codePointAt(pos)</code></a></dt>
  <dd>Renvoie un entier positif qui correspond à la valeur du codet UTF-16 à la position indiquée par <code><var>pos</var></code>.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/concat"><code>String.prototype.concat(<var>str </var>[,...<var>strN </var>])</code></a></dt>
  <dd>Combine le texte de deux (ou plusieurs) chaînes en une nouvelle chaîne de caractères.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/includes"><code>String.prototype.includes(searchString [, position])</code></a></dt>
  <dd>Détermine si la chaîne de caractères courante contient <code><var>searchString</var></code>.
  </dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith"><code>String.prototype.endsWith(searchString [, length])</code></a></dt>
  <dd>Détermine si la chaîne de caractères courante se termine par <code><var>searchString</var></code>.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf"><code>String.prototype.indexOf(searchValue [, fromIndex])</code></a></dt>
  <dd>Renvoie l'indice, au sein de la chaîne courante, de la première occurrence de <code><var>searchValue</var></code> ou <code>-1</code> si ce motif n'est pas trouvé.
  </dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf"><code>String.prototype.lastIndexOf(searchValue [, fromIndex])</code></a>
  </dt>
  <dd>Renvoie l'indice, au sein de la chaîne courant, de la dernière occurrence de <code><var>searchValue</var></code> ou <code>-1</code> si ce motif n'est pas trouvé.
  </dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare"><code>String.prototype.localeCompare(compareString [, locales [, options]])</code></a></dt>
  <dd>Renvoie un nombre indiquant si la chaîne courante vient avant ou après (ou est équivalente à ) <code><var>compareString</var></code> pour l'ordre de tri.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match"><code>String.prototype.match(<var>regexp</var>)</code></a>
  </dt>
  <dd>Permet de tester la correspondance d'une expression rationnelle entre <code><var>regexp</var></code> et la chaîne de caractères courante.
  </dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"><code>String.prototype.matchAll(regexp)</code></a></dt>
  <dd>Renvoie un itérateur contenant l'ensemble des correspondances de l'expression rationnelle <code><var>regexp</var></code> au sein de la chaîne de caractères courante.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/normalize"><code>String.prototype.normalize([form])</code></a></dt>
  <dd>Renvoie la forme Unicode normalisée de la chaîne courante.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd"><code>String.prototype.padEnd(targetLength [, padString])</code></a></dt>
  <dd>Complète la chaîne courante à la fin avec une chaîne donnée afin d'obtenir une longueur cible <code><var>targetLength</var></code> et renvoie la chaîne ainsi construite.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/padStart"><code>String.prototype.padStart(targetLength [, padString])</code></a></dt>
  <dd>Complète la chaîne courante au début avec une chaîne donnée afin d'obtenir une longueur cible <code><var>targetLength</var></code> et renvoie la chaîne ainsi construite.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/repeat"><code>String.prototype.repeat(<var>count</var>)</code></a>
  </dt>
  <dd>Renvoie une chaîne de caractères qui est la répétition (<code><var>count</var></code> fois) de la chaîne de caractères courante.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace"><code>String.prototype.replace(searchFor, replaceWith)</code></a></dt>
  <dd>Remplace les occurrences de <code><var>searchFor</var></code> par <code><var>replaceWith</var></code>. <code><var>searchFor</var></code> peut être une chaîne de caractères ou une expression rationnelle et <code><var>replaceWith</var></code> peut être une chaîne de caractères ou une fonction.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll"><code>String.prototype.replaceAll(searchFor, replaceWith)</code></a></dt>
  <dd>Remplace toutes les occurrences de <code><var>searchFor</var></code> avec <code><var>replaceWith</var></code>. <code><var>searchFor</var></code> peut être une chaîne de caractères ou une expression rationnelle et <code><var>replaceWith</var></code> peut être une chaîne de caractères ou une fonction.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/search"><code>String.prototype.search(regexp)</code></a></dt>
  <dd>Recherche une correspondance entre une expression rationnelle <code><var>regexp</var></code> et la chaîne de caractères courante.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/slice"><code>String.prototype.slice(<var>beginIndex</var>[, <var>endIndex</var>])</code></a></dt>
  <dd>Extrait une section de la chaîne de caractères et renvoie une nouvelle chaîne de caractères.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split"><code>String.prototype.split([<var>sep</var> [, <var>limit</var>] ])</code></a></dt>
  <dd>Renvoie un tableau de chaînes de caractères composé des fragments de la chaîne courante scindée à chaque occurrence de la sous-chaîne <code><var>sep</var></code>.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith"><code>String.prototype.startsWith(searchString [, length])</code></a></dt>
  <dd>Détermine si la chaîne courante commence par la chaîne de caractères indiquée en paramètre (<code><var>searchString</var></code>).</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/substring"><code>String.prototype.substring(indexStart [, indexEnd])</code></a></dt>
  <dd>Renvoie une nouvelle chaîne de caractères contenant les caractères de la chaîne courante, situés à partir de l'indice donné ou entre les indices donnés.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleLowerCase"><code>String.prototype.toLocaleLowerCase( [locale, ...locales])</code></a>
  </dt>
  <dd>
    <p>Renvoie une conversion en minuscules de la chaîne de caractères courante qui respecte la locale indiquée.</p>

    <p>Pour la plupart des langues, cela renverra la même valeur que <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"><code>toLowerCase()</code></a>.</p>
  </dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLocaleUpperCase"><code>String.prototype.toLocaleUpperCase( [locale, ...locales])</code></a>
  </dt>
  <dd>
    <p>Renvoie une conversion en majuscules de la chaîne de caractères courante qui respecte la locale indiquée.</p>

    <p>Pour la plupart des langues, cela renverra la même valeur que <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"><code>toUpperCase()</code></a>.</p>
  </dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase"><code>String.prototype.toLowerCase()</code></a></dt>
  <dd>Renvoie la valeur de la chaîne de caractères, convertie en minuscules.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toString"><code>String.prototype.toString()</code></a></dt>
  <dd>Renvoie une chaîne de caractères représentant l'objet courant. Surcharge la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString"><code>Object.prototype.toString()</code></a>.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase"><code>String.prototype.toUpperCase()</code></a></dt>
  <dd>Renvoie la valeur de la chaîne de caractères, convertie en majuscules.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Trim"><code>String.prototype.trim()</code></a></dt>
  <dd>Retire les blancs situés au début et à la fin de la chaîne de caractères.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart"><code>String.prototype.trimStart()</code></a></dt>
  <dd>Retire les blancs situés au début de la chaîne de caractères.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd"><code>String.prototype.trimEnd()</code></a></dt>
  <dd>Retire les blancs situés à la fin de la chaîne de caractères.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/valueOf"><code>String.prototype.valueOf()</code></a></dt>
  <dd>Renvoie la valeur primitive de l'objet courant. Surcharge la méthode <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf"><code>Object.prototype.valueOf()</code></a>.</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/@@iterator"><code>String.prototype.@@iterator()</code></a></dt>
  <dd>Renvoie un nouvel objet itérateur qui permet d'itérer sur les points de code composant la chaîne de caractère. Chaque point de code est renvoyé comme une chaîne de caractères.</dd>
</dl>

<h2 id="html_wrapper_methods">Méthodes de conversion HTML</h2>

<div class="notecard warning">
  <p><strong>Attention :</strong> Ces méthodes sont dépréciées et ne doivent plus être utilisées.</p>

  <p>Elles ont des possibilités limitées et ne concernent qu'une petite sous-partie des éléments et attributs HTML disponibles.</p>
</div>

<dl>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/anchor"><code>String.prototype.anchor()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/a#attr-name"><code>&lt;a name="name"&gt;</code></a> (cible hypertexte)</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/big"><code>String.prototype.big()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/big"><code>&lt;big&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/blink"><code>String.prototype.blink()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/blink"><code>&lt;blink&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/bold"><code>String.prototype.bold()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/b"><code>&lt;b&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fixed"><code>String.prototype.fixed()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/tt"><code>&lt;tt&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor"><code>String.prototype.fontcolor()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/font#attr-color"><code>&lt;font color="color"&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize"><code>String.prototype.fontsize()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/font#attr-size"><code>&lt;font size="size"&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/italics"><code>String.prototype.italics()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/i"><code>&lt;i&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/link"><code>String.prototype.link()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/a#attr-href"><code>&lt;a href="url"&gt;</code></a> (lien d'une URL)</dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/small"><code>String.prototype.small()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/small"><code>&lt;small&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/strike"><code>String.prototype.strike()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/strike"><code>&lt;strike&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/sub"><code>String.prototype.sub()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/sub"><code>&lt;sub&gt;</code></a></dd>
  <dt><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/sup"><code>String.prototype.sup()</code></a></dt>
  <dd><a href="/fr/docs/Web/HTML/Element/sup"><code>&lt;sup&gt;</code></a></dd>
</dl>

<h2 id="exemples">Exemples</h2>

<h3 id="string_conversion">Conversion en chaîne de caractères</h3>

<p>Il est possible d'utiliser <code>String</code> comme une alternative à <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toString"><code>toString()</code></a> car cela permet de traiter les valeurs <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/null"><code>null</code></a>, <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined"><code>undefined</code></a> et les <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol">symboles</a>. Ainsi :</p>

<pre class="brush: js">
let chainesSortie = []
for (let i = 0, n = valeursEntree.length; i &lt; n; ++i) {
  chainesSortie.push(String(valeursEntree[i]));
}
</pre>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="voir_aussi">Voir aussi</h2>

<ul>
  <li><a href="/fr/docs/Web/JavaScript/Guide/Text_formatting">Formatage du texte dans le guide JavaScript</a></li>
  <li><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp"><code>RegExp</code></a></li>
  <li><a href="/fr/docs/Web/API/DOMString"><code>DOMString</code></a></li>
  <li><a href="/fr/docs/Web/API/DOMString/Binary">Les chaînes binaires</a></li>
</ul>
