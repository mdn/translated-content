---
title: Grammaire lexicale
slug: Web/JavaScript/Reference/Lexical_grammar
tags:
  - Avancé
  - Grammaire
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Lexical_grammar
original_slug: Web/JavaScript/Reference/Grammaire_lexicale
---
<div>{{JsSidebar("More")}}</div>

<p>Cette page décrit la grammaire lexicale de JavaScript. Le code source d'un script ECMAScript est analysé de gauche à droite et est converti en une série d'éléments qui sont : des jetons, des caractères de contrôle, des terminateurs de lignes, des commentaires ou des blancs. ECMAScript définit également certains mots-clés et littéraux. ECMAScript possède également des règles pour insérer automatiquement des points-virgules à la fin des instructions.</p>

<h2 id="Caractères_de_contrôle">Caractères de contrôle</h2>

<p>Les caractères de contrôle n'ont aucune représentation visuelle mais sont utilisés pour contrôler l'interprétation du texte.</p>

<table class="standard-table">
 <caption>Caractères de contrôle au format Unicode</caption>
 <tbody>
  <tr>
   <th>Point de code</th>
   <th>Nom</th>
   <th>Abréviation</th>
   <th>Description</th>
  </tr>
  <tr>
   <td><code>U+200C</code></td>
   <td>Antiliant sans chasse (<em>zero width non-joiner</em> en anglais)</td>
   <td>&lt;ZWNJ&gt;</td>
   <td>Placé entre des caractères pour empêcher qu'ils soient connectés par une ligature dans certaines langues (<a href="https://fr.wikipedia.org/wiki/Antiliant_sans_chasse">Wikipédia</a>).</td>
  </tr>
  <tr>
   <td><code>U+200D</code></td>
   <td>Liant sans chasse (<em>zero width joiner</em> en anglais)</td>
   <td>&lt;ZWJ&gt;</td>
   <td>Placé entre des caractères qui ne seraient normalement pas connectés pour les afficher comme connectés dans certaines langues (<a href="https://fr.wikipedia.org/wiki/Liant_sans_chasse">Wikipédia</a>).</td>
  </tr>
  <tr>
   <td><code>U+FEFF</code></td>
   <td>Indicateur d'ordre des octets (<em>byte order mark</em> en anglais)</td>
   <td>&lt;BOM&gt;</td>
   <td>Utilisé au début d'un script pour indiquer qu'il est en Unicode et quel est l'ordre des octets (<a href="https://fr.wikipedia.org/wiki/Indicateur_d%27ordre_des_octets">Wikipedia</a>).</td>
  </tr>
 </tbody>
</table>

<h2 id="Blancs">Blancs</h2>

<p>Les caractères d'espacement (blancs) sont utilisés pour des raisons de lisibilité et permetttent de séparer les différents fragments entre eux. Ces caractères sont généralement inutiles au code. Les outils de <a href="https://en.wikipedia.org/wiki/Minification_%28programming%29">minification</a> sont souvent utilisés pour retirer les blancs afin de réduire le volume de données à transférer.</p>

<table class="standard-table">
 <caption>Caractères d'espacament</caption>
 <tbody>
  <tr>
   <th>Point de code</th>
   <th>Nom</th>
   <th>Abréviation</th>
   <th>Description</th>
   <th>Séquence d'échappement</th>
  </tr>
  <tr>
   <td>U+0009</td>
   <td>Tabulation (horizontale)</td>
   <td>&lt;HT&gt;</td>
   <td>Tabulation horizontale</td>
   <td>\t</td>
  </tr>
  <tr>
   <td>U+000B</td>
   <td>Tabulation verticale</td>
   <td>&lt;VT&gt;</td>
   <td>Tabulation verticale</td>
   <td>\v</td>
  </tr>
  <tr>
   <td>U+000C</td>
   <td>Caractère de saut de page (<em>form feed</em> en anglais)</td>
   <td>&lt;FF&gt;</td>
   <td>Caractère de contrôle pour le saut de page (<a href="http://en.wikipedia.org/wiki/Page_break#Form_feed">Wikipédia</a>).</td>
   <td>\f</td>
  </tr>
  <tr>
   <td>U+0020</td>
   <td>Espace sécable (<em>space</em> en anglais)</td>
   <td>&lt;SP&gt;</td>
   <td>Espace sécable</td>
   <td></td>
  </tr>
  <tr>
   <td>U+00A0</td>
   <td>Espace insécable (<em>no-break space</em> en anglais)</td>
   <td>&lt;NBSP&gt;</td>
   <td>Espace insécable</td>
   <td></td>
  </tr>
  <tr>
   <td>Autres</td>
   <td>Autres caractères d'espaces Unicode</td>
   <td>&lt;USP&gt;</td>
   <td><a href="http://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode">Espaces Unicode sur Wikipédia</a></td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Terminateurs_de_lignes">Terminateurs de lignes</h2>

<p>En plus des blancs, les caractères de fin de ligne (terminateurs de lignes) sont utilisés pour améliorer la lisibilité du texte. Cependant, dans certains cas, les terminateurs de lignes peuvent influencer l'exécution du code JavaScript là où ils sont interdits. Les terminateurs de lignes affectent également le processus d'<a href="#Automatic_semicolon_insertion">insertion automatique des points-virgules</a>. Les terminateurs de lignes correspondent à la classe <strong>\s</strong> <a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières">des expressions rationnelles</a>.</p>

<p>Seuls les points de code Unicode qui suivent sont traités comme des fins de lignes en ECMAScript, les autres caractères sont traités comme des blancs (par exemple : <em>Next Line </em>(nouvelle ligne) : NEL, U+0085 est considéré comme un blanc).</p>

<table class="standard-table">
 <caption>Caractères de fin de ligne</caption>
 <tbody>
  <tr>
   <th>Point de code</th>
   <th>Nom</th>
   <th>Abréviation</th>
   <th>Description</th>
   <th>Séquence d'échappement</th>
  </tr>
  <tr>
   <td>U+000A</td>
   <td>Nouvelle ligne</td>
   <td>&lt;LF&gt;</td>
   <td>Caractère de nouvelle ligne pour les systèmes UNIX.</td>
   <td>\n</td>
  </tr>
  <tr>
   <td>U+000D</td>
   <td>Retour chariot</td>
   <td>&lt;CR&gt;</td>
   <td>Caractère de nouvelle ligne pour les systèmes Commodore et les premiers Mac.</td>
   <td>\r</td>
  </tr>
  <tr>
   <td>U+2028</td>
   <td>Séparateur de ligne</td>
   <td>&lt;LS&gt;</td>
   <td><a href="https://fr.wikipedia.org/wiki/Fin_de_ligne">Wikipédia</a></td>
   <td></td>
  </tr>
  <tr>
   <td>U+2029</td>
   <td>Séparateur de paragraphe</td>
   <td>&lt;PS&gt;</td>
   <td><a href="https://fr.wikipedia.org/wiki/Fin_de_ligne">Wikipédia</a></td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Commentaires">Commentaires</h2>

<p>Les commentaires sont utilisés pour fournir des notes, des suggestions, des indications ou des avertissements sur le code JavaScript. Cela peut en faciliter la lecture et la compréhension. Ils peuvent également être utilisés pour empêcher l'exécution d'un certain code ; cela peut être pratique lors du débogage.</p>

<p>En JavaScript, Il existe actuellement deux façons de former des commentaires (cf. ci-après pour une troisième méthode en cours de discussion).</p>

<h3 id="Commentaire_sur_une_ligne">Commentaire sur une ligne</h3>

<p>La première façon est d'utiliser <code>//</code> (double barre oblique), pour commenter tout le texte qui suit (sur la même ligne). Par exemple :</p>

<pre class="brush: js">function comment() {
  // Voici un commentaire d'une ligne en JavaScript
  console.log("Hello world !");
}
comment();
</pre>

<h3 id="Commentaire_sur_plusieurs_lignes">Commentaire sur plusieurs lignes</h3>

<p>La seconde façon est d'utiliser <code>/* */</code>, qui est plus flexible.</p>

<p>Il est possible d'utiliser cette forme sur une seule ligne :</p>

<pre class="brush: js">function comment() {
  /* Voici un commentaire d'une ligne en JavaScript */
  console.log("Hello world !");
}
comment();</pre>

<p>Mais également sur plusieurs lignes, comme ceci :</p>

<pre class="brush: js">function comment() {
 /* Ce commentaire s'étend sur plusieurs lignes. Il n'y a
    pas besoin de clore le commentaire avant d'avoir
     fini. */
  console.log("Hello world !");
}
comment();</pre>

<p>Il est également possible d'utiliser un commentaire au milieu d'une ligne. En revanche, cela rend le code plus difficile à lire et devrait être utilisé avec attention :</p>

<pre class="brush: js">function comment(x) {
  console.log("Hello " + x /* insérer la valeur de x */ + " !");
}
comment("world");</pre>

<p>On peut également encadrer du code pour l'empêcher d'être exécuté. Par exemple :</p>

<pre class="brush: js">function comment() {
  /* console.log("Hello world !"); */
}
comment();</pre>

<p>Ici, l'appel <code>console.log()</code> n'a jamais lieu car il fait partie d'un commentaire. On peut ainsi désactiver plusieurs lignes de code d'un coup.</p>

<h3 id="Commentaire_d'environnement_(hashbang)">Commentaire d'environnement (<em>hashbang</em>)</h3>

<p>Une troisième syntaxe, en cours de standardisation par ECMAScript, permet d'indiquer l'environnement dans lequel est exécuté le script via <a href="https://github.com/tc39/proposal-hashbang">un commentaire <em>hashbang</em></a>. Un tel commentaire commence par <code>#!</code> et est <strong>uniquement valide au tout début du script ou du module</strong> (aucun espace/blanc n'est autorisé avant <code>#!</code>). Un tel commentaire ne tient que sur une seule ligne et il ne peut y avoir qu'un seul commentaire de ce type.</p>

<pre class="brush: js">#!/usr/bin/env node

console.log("Coucou le monde");
</pre>

<p>Les commentaires d'environnements sont conçus pour fonctionner comme <a href="https://en.wikipedia.org/wiki/Shebang_(Unix)">les <em>shebangs</em> qu'on peut trouver sous Unix</a> et indiquent l'interpréteur à utiliser pour exécuter le script ou le module.</p>

<div class="warning">
<p><strong>Attention :</strong> Bien qu'utiliser un <a href="https://fr.wikipedia.org/wiki/Indicateur_d%27ordre_des_octets">BOM</a> avant le <em>hashbang</em> fonctionne dans un navigateur, cela n'est pas conseillé. En effet, un BOM empêchera le bon fonctionnement sous Unix/Linux. Utilisez un encodage UTF-8 sans BOM si vous souhaitez exécuter vos scripts depuis une invite de commande.</p>
</div>

<p>Si vous souhaitez placer un commentaire en début de fichier sans indiquer d'environnement d'exécution spécifique, on pourra utiliser le commentaire classique avec <code>//</code>.</p>

<h2 id="Mots-clés">Mots-clés</h2>

<h3 id="Mots-clés_réservés_selon_ECMAScript_2015">Mots-clés réservés selon ECMAScript 2015</h3>

<div class="threecolumns">
<ul>
 <li>{{jsxref("Instructions/break", "break")}}</li>
 <li>{{jsxref("Instructions/switch", "case")}}</li>
 <li>{{jsxref("Opérateurs/class","class")}}</li>
 <li>{{jsxref("Instructions/try...catch", "catch")}}</li>
 <li>{{jsxref("Instructions/const", "const")}}</li>
 <li>{{jsxref("Instructions/continue", "continue")}}</li>
 <li>{{jsxref("Instructions/debugger", "debugger")}}</li>
 <li>{{jsxref("Instructions/default", "default")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_delete", "delete")}}</li>
 <li>{{jsxref("Instructions/while", "do")}}</li>
 <li>{{jsxref("Instructions/if...else", "else")}}</li>
 <li>{{jsxref("Instructions/export", "export")}}</li>
 <li>{{jsxref("Classes/extends","extends")}}</li>
 <li>{{jsxref("Instructions/try...catch", "finally")}}</li>
 <li>{{jsxref("Instructions/for", "for")}}</li>
 <li>{{jsxref("Instructions/function", "function")}}</li>
 <li>{{jsxref("Instructions/if...else", "if")}}</li>
 <li>{{jsxref("Instructions/import", "import")}}</li>
 <li>{{jsxref("Instructions/for...in", "in")}}</li>
 <li>{{jsxref("Opérateurs/instanceof", "instanceof")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_new", "new")}}</li>
 <li>{{jsxref("Instructions/return", "return")}}</li>
 <li>{{jsxref("Opérateurs/super", "super")}}</li>
 <li>{{jsxref("Instructions/switch", "switch")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_this", "this")}}</li>
 <li>{{jsxref("Instructions/throw", "throw")}}</li>
 <li>{{jsxref("Instructions/try...catch", "try")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_typeof", "typeof")}}</li>
 <li>{{jsxref("Instructions/var", "var")}}</li>
 <li>{{jsxref("Opérateurs/L_opérateur_void", "void")}}</li>
 <li>{{jsxref("Instructions/while", "while")}}</li>
 <li>{{jsxref("Instructions/with", "with")}}</li>
 <li>{{jsxref("Opérateurs/yield","yield")}}</li>
</ul>
</div>

<h3 id="Mots-clés_réservés_pour_le_futur">Mots-clés réservés pour le futur</h3>

<p>Les mots-clés qui suivent ont été réservés pour une utilisation future dans la spécification ECMAScript. Ils n'ont actuellement aucune utilité mais pourrait être utilisés par la suite. Ils ne peuvent donc pas être utilisés comme identifiants. Ces mots-clés ne peuvent être utilisés ni en mode strict ni en mode non strict.</p>

<ul>
 <li><code>enum</code></li>
 <li><code>await</code> (lorsqu'il est utilisé dans le contexte d'un module)</li>
</ul>

<p>Les mots-clés suivants sont réservés dans du code en mode strict :</p>

<div class="threecolumns">
<ul>
 <li><code>implements</code></li>
 <li>{{jsxref("Instructions/let", "let")}}</li>
 <li><code>package</code></li>
 <li><code>protected</code></li>
 <li><code>static</code></li>
 <li><code>interface</code></li>
 <li><code>private</code></li>
 <li><code>public</code></li>
</ul>
</div>

<h4 id="Mots-clés_réservés_pour_un_usage_future_dans_les_anciens_standards">Mots-clés réservés pour un usage future dans les anciens standards</h4>

<p>Les mots-clés suivants sont réservés dans les anciennes spécifications ECMAScript (ECMAScript 1 à 3).</p>

<div class="threecolumns">
<ul>
 <li><code>abstract</code></li>
 <li><code>boolean</code></li>
 <li><code>byte</code></li>
 <li><code>char</code></li>
 <li><code>double</code></li>
 <li><code>final</code></li>
 <li><code>float</code></li>
 <li><code>goto</code></li>
 <li><code>int</code></li>
 <li><code>long</code></li>
 <li><code>native</code></li>
 <li><code>short</code></li>
 <li><code>synchronized</code></li>
 <li><code>throws</code></li>
 <li><code>transient</code></li>
 <li><code>volatile</code></li>
</ul>
</div>

<p>Par ailleurs, les littéraux <code>null</code>, <code>true</code>, et<code> false</code> sont réservés dans ECMAScript pour leur usage normal.</p>

<h3 id="Utilisation_des_mots-clés_réservés">Utilisation des mots-clés réservés</h3>

<p>Les mots-clés réservés ne le sont que pour les identifiants (et non pour les <code>IdentifierNames</code>) . Comme décrit dans <a href="http://es5.github.com/#A.1">es5.github.com/#A.1</a>, dans l'exemple qui suit, on a, légalement, des <code>IdentifierNames</code> qui utilisent des <code>ReservedWords</code>.</p>

<pre class="brush: js">a.import
a["import"]
a = { import: "test" }.
</pre>

<p>En revanche, dans ce qui suit, c'est illégal car c'est un identifiant. Un identifiant peut être un <code>IdentifierName</code> mais pas un mot-clé réservé. Les identifiants sont utilisés pour les <code>FunctionDeclaration</code> (déclarations de fonction), les <code>FunctionExpression</code> (expressions de fonction), les <code>VariableDeclaration</code> (déclarations de variable)<code>.</code></p>

<pre class="brush: js">function import() {} // Illégal.</pre>

<h2 id="Littéraux">Littéraux</h2>

<h3 id="Littéral_null">Littéral <code>null</code></h3>

<p>Voir aussi la page {{jsxref("null")}} pour plus d'informations.</p>

<pre class="brush: js">null</pre>

<h3 id="Littéraux_booléens">Littéraux booléens</h3>

<p>Voir aussi la page {{jsxref("Boolean")}} pour plus d'informations.</p>

<pre class="brush: js">true
false</pre>

<h3 id="Littéraux_numériques">Littéraux numériques</h3>

<h4 id="Décimaux">Décimaux</h4>

<pre class="brush: js">1234567890
42

// Attention à l'utilisation de zéros en début :

0888 // 888 est compris comme décimal
0777 // est compris comme octal et égale 511 en décimal
</pre>

<p>Les littéraux décimaux peuvent commencer par un zéro (<code>0</code>) suivi d'un autre chiffre. Mais si tous les chiffres après le 0 sont (strictement) inférieurs à 8, le nombre sera analysé comme un nombre octal. Cela n'entraînera pas d'erreur JavaScript, voir {{bug(957513)}}. Voir aussi la page sur {{jsxref("parseInt", "parseInt()")}}.</p>

<h4 id="Binaires">Binaires</h4>

<p>La représentation binaire des nombres peut être utilisée avec une syntaxe qui comporte un zéro (0) suivi par le caractère latin "B" (minuscule ou majuscule) (<code>0b</code> ou <code>0B</code>). Cette syntaxe est apparue avec ECMAScript 2015 et il faut donc faire attention au tableau de compatibilité pour cette fonctionnalité. Si les chiffres qui composent le nombre ne sont pas 0 ou 1, cela entraînera une erreur {{jsxref("SyntaxError")}} : "Missing binary digits after 0b".</p>

<pre class="brush: js">var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0B00000000011111111111111111111111; // 8388607</pre>

<h4 id="Octaux">Octaux</h4>

<p>La syntaxe pour représenter des nombres sous forme octale est : un zéro (0), suivi par la lettre latine "O" (minuscule ou majuscule) (ce qui donne <code>0o</code> ou <code>0O)</code>. Cette syntaxe est apparue avec ECMAScript 2015 et il faut donc faire attention au tableau de compatibilité pour cette fonctionnalité. Si les chiffres qui composent le nombre ne sont pas compris entre 0 et 7, cela entraînera une erreur {{jsxref("SyntaxError")}} : "Missing octal digits after 0o".</p>

<pre class="brush: js">var n = 0O755; // 493
var m = 0o644; // 420

// Aussi possible en utilisant des zéros en début du nombre (voir la note ci-avant)
0755
0644
</pre>

<h4 id="Hexadécimaux">Hexadécimaux</h4>

<p>Les littéraux hexadécimaux ont pour syntaxe : un zéro (0), suivi par la lettre latine "X" (minuscule ou majuscule) (ce qui donne <code>0x</code> ou <code>0X)</code>. Si les chiffres qui composent le nombre sont en dehors des unités hexadécimales (0123456789ABCDEF), cela entraînera une erreur {{jsxref("SyntaxError")}} : "Identifier starts immediately after numeric literal".</p>

<pre class="brush: js">0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
</pre>

<h4 id="Littéraux_BigInt">Littéraux <code>BigInt</code></h4>

<p>Le type {{jsxref("BigInt")}} est un type numérique primitif de JavaScript qui permet de représenter des entiers avec une précision arbitraire. De tels littéraux s'écrivent en ajoutant un <code>n</code> à la fin d'un entier.</p>

<pre class="brush: js">123456789123456789n (nombre décimal, en base 10)
0o7777777777777777n (nombre octal, en base 8)
0x123456789ABCDEF1n (nombre hexadécimal, en base 16)
0b0101010101110101n (nombre binaire, en base 2)
</pre>

<p>Voir aussi <a href="/fr/docs/Web/JavaScript/Structures_de_données#Le_type_BigInt">le paragraphe sur les grands entiers/BigInt sur les structures de données en JavaScript</a>.</p>

<h3 id="Littéraux_objets">Littéraux objets</h3>

<p>Voir aussi les pages {{jsxref("Object")}} et {{jsxref("Opérateurs/Initialisateur_objet","Initialisateur d'objet","",1)}} pour plus d'informations.</p>

<pre class="brush: js">var o = { a: "toto", b: "truc", c: 42 };

// notation raccourcie depuis ES6
var a = "toto", b = "truc", c = 42;
var o = {a, b, c};
// plutôt que
var o = { a: a, b: b, c: c };
</pre>

<h3 id="Littéraux_de_tableaux">Littéraux de tableaux</h3>

<p>Voir aussi la page {{jsxref("Array")}} pour plus d'informations.</p>

<pre class="brush: js">[1954, 1974, 1990, 2014]</pre>

<h3 id="Littéraux_de_chaînes_de_caractères">Littéraux de chaînes de caractères</h3>

<p>Un littéral de chaîne de caractères correspond à zéro ou plusieurs codets Unicode entourés de simples ou de doubles quotes. Les codets Unicode peuvent également être représentés avec des séquences d'échappements. Tous les codets peuvent apparaître dans un littéral de chaîne de caractères à l'exception de ces trois codets :</p>

<ul>
 <li>U+005C \ (barre oblique inverse)</li>
 <li>U+000D (retour chariot, <em>carriage return</em>, <em>CR</em>)</li>
 <li>U+000A (saut de ligne, <em>line feed</em>, <em>LF</em>)</li>
</ul>

<p>Avant la proposition consistant à rendre les chaînes JSON valides selon ECMA-262, les caractères U+2028 et U+2029 étaient également interdits.</p>

<p>Tous les codets peuvent être écrits sous la forme d'une séquence d'échappement. Les littéraux de chaînes de caractères sont évalués comme des valeurs <code>String</code> ECMAScript. Lorsque ces valeurs <code>String</code> sont générées, les codets Unicode sont encodés en UTF-16.</p>

<pre class="brush: js">'toto'
"truc"</pre>

<h4 id="Séquence_d'échappement_hexadécimale">Séquence d'échappement hexadécimale</h4>

<p>Une séquence d'échappement hexadécimale consiste en la succession de <code>\x</code> et de deux chiffres hexadécimaux représentant un codet sur l'intervalle 0x0000 à 0x00FF.</p>

<pre class="brush: js">'\xA9' // "©"
</pre>

<h4 id="Séquence_d'échappement_Unicode">Séquence d'échappement Unicode</h4>

<p>La séquence d'échappement Unicode est composée de <code>\u</code> suivi de quatre chiffres hexadécimaux. Chacun de ces chiffres définit un caractères sur deux octets selon l'encodage UTF-16. Pour les codes situés entre <code>U+0000</code> et <code>U+FFFF</code>, les chiffres à utiliser sont identiques au code. Pour les codes supérieurs, il faudra utiliser deux séquences d'échappement dont chacune représentera un demi-codet de la paire de <em>surrogates</em>.</p>

<p>Voir aussi {{jsxref("String.fromCharCode()")}} et {{jsxref("String.prototype.charCodeAt()")}}.</p>

<pre class="brush: js">'\u00A9' // "©" (U+A9)</pre>

<h4 id="Échappement_de_points_de_code_Unicode">Échappement de points de code Unicode</h4>

<p>Apparu avec ECMAScript 2015, l'échappement de points de code Unicode permet d'échapper n'importe quel caractère en utilisant une notation hexadécimale. Il est possible de le faire pour échapper les points de code Unicode dont la représentation va jusqu'à <code>0x10FFFF</code>. Avec la séquence « simple » d'échappement Unicode, il était nécessaire d'échapper respectivement les deux demi-codets d'une paire si on voulait échapper le caractère correspondant, avec cette nouvelle méthode, ce n'est plus nécessaire de faire la distinction.</p>

<p>Voir également {{jsxref("String.fromCodePoint()")}} et {{jsxref("String.prototype.codePointAt()")}}.</p>

<pre class="brush: js">'\u{2F804}' // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// avec l'ancienne méthode d'échappement, cela aurait été écrit
// avec une paire de surrogates
'\uD87E\uDC04'</pre>

<h3 id="Littéraux_d'expressions_rationnelles">Littéraux d'expressions rationnelles</h3>

<p>Voir la page <a href="/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp"><code>RegExp</code></a> pour plus d'informations.</p>

<pre class="brush: js">/ab+c/g

// Un littéral pour une expression rationnelle
// vide. Le groupe non-capturant est utilisé pour
// lever l'ambigüité avec les commentaires
/(?:)/</pre>

<h3 id="Littéraux_modèles_(gabarits_ou_templates)">Littéraux modèles (gabarits ou <em>templates</em>)</h3>

<p>Voir également la page sur <a href="/fr/docs/Web/JavaScript/Reference/Gabarit_chaînes_caractères">les gabarits de chaînes de caractères</a> pour plus d'informations.</p>

<pre class="brush: js">`chaîne de caractères`

`chaîne de caractères ligne 1
 chaîne de caractères ligne 2`

`chaîne1 ${expression} chaîne2`

tag `chaîne1 ${expression} chaîne2`</pre>

<h2 id="Insertion_automatique_de_points-virgules">Insertion automatique de points-virgules</h2>

<p>Certaines <a href="/fr/docs/Web/JavaScript/Reference/Statements">instructions JavaScript</a> doivent finir par un point-virgule et sont donc concernées par l'insertion automatique de points-virgules (ASI pour <em>automatic semicolon insertion</em> en anglais) :</p>

<ul>
 <li>Instruction vide</li>
 <li>instruction de variable, <code>let</code>, <code>const</code></li>
 <li><code>import</code>, <code>export</code>, déclaration de module</li>
 <li>Instruction d'expression</li>
 <li><code>debugger</code></li>
 <li><code>continue</code>, <code>break</code>, <code>throw</code></li>
 <li><code>return</code></li>
</ul>

<p>La spécification ECMAScript mentionne <a href="https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion">trois règles quant à l'insertion de points-virgules</a> :</p>

<p>1. Un point-vrigule est inséré avant un <a href="#Line_terminators">terminateur de ligne</a> ou une accolade ("}") quand celui ou celle-ci n'est pas autorisé par la grammaire</p>

<pre class="brush: js">{ 1 2 } 3
// est donc transformé, après ASI, en :
{ 1 2 ;} 3;</pre>

<p>2. Un point-virgule est inséré à la fin lorsqu'on détecte la fin d'une série de jetons en flux d'entrée et que le parseur est incapable d'analyser le flux d'entrée comme un programme complet.</p>

<p>Ici <code>++</code> n'est pas traité comme <a href="/fr/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment">opérateur postfixe</a> s'appliquant à la variable <code>b</code> car il y a un terminateur de ligne entre <code>b</code> et <code>++</code>.</p>

<pre class="brush: js">a = b
++c

// devient, après ASI :

a = b;
++c;
</pre>

<p>3. Un point-virgule est inséré à la fin, lorsqu'une instruction, à production limitée pour la grammaire, est suivie par un terminateur de ligne. Les instructions concernées par cette règle sont :</p>

<ul>
 <li>Expressions postfixes (<code>++</code> et <code>--</code>)</li>
 <li><code>continue</code></li>
 <li><code>break</code></li>
 <li><code>return</code></li>
 <li><code>yield</code>, <code>yield*</code></li>
 <li><code>module</code></li>
</ul>

<pre class="brush: js">return
a + b

// est transformé, après ASI, en :

return;
a + b;
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
   <td>{{SpecName("ES1")}}</td>
   <td>{{Spec2("ES1")}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-7', 'Lexical Conventions')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-ecmascript-language-lexical-grammar', 'Lexical Grammar')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Ajout : littéraux binaires et octaux, échappements de points de code Unicode, modèles</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-ecmascript-language-lexical-grammar', 'Lexical Grammar')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.grammar")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/">Jeff Walden : Nombres binaires et forme octale (en anglais)</a></li>
 <li><a href="http://mathiasbynens.be/notes/javascript-escapes">Mathias Bynens : Séquences d'échappements de caractères (en anglais)</a></li>
 <li>{{jsxref("Boolean")}}</li>
 <li>{{jsxref("Number")}}</li>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{jsxref("String")}}</li>
</ul>
