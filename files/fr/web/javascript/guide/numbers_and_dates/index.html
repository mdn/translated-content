---
title: Nombres et dates
slug: Web/JavaScript/Guide/Numbers_and_dates
tags:
  - Guide
  - JavaScript
translation_of: Web/JavaScript/Guide/Numbers_and_dates
original_slug: Web/JavaScript/Guide/Nombres_et_dates
---
<div>{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Expressions_et_Op%C3%A9rateurs", "Web/JavaScript/Guide/Formatage_du_texte")}}</div>

<p>Ce chapitre illustre le fonctionnement des nombres et des dates en JavaScript grâce aux concepts, objets et fonctions utilisables avec ce langage. Cela inclut notamment l'écriture de nombre selon différentes bases (décimale, binaire, hexadécimale) et l'utilisation de l'objet global {{jsxref("Math")}}.</p>

<h2 id="Nombres">Nombres</h2>

<p>Les nombres en JavaScript sont implémentés comme des <a href="https://en.wikipedia.org/wiki/Double-precision_floating-point_format">nombres sur 64 bits à précision double selon le format IEEE-754</a> qui est un standard pour la représentation des nombres flottants et qui permet d'avoir jusqu'à 16 chiffres significatifs. Le type numérique possède également trois valeurs spéciales symboliques : +{{jsxref("Infinity")}}, -{{jsxref("Infinity")}} et {{jsxref("NaN")}} (pour désigner une valeur qui n'est pas un nombre).</p>

<p>Le format IEEE-754 permet de représenter des valeurs entre ±2^−1022 et ±2^+1023, ce qui correspond à des valeurs entre ±10^−308 et ±10^+308 avec une précision sur 53 bits. Les nombres entiers compris sur l'intervalle ±2^53 − 1 peuvent être représentés exactement.</p>

<p>Le type {{jsxref("BigInt")}} est une addition récente à JavaScript qui permet de représenter de grands entiers. Toutefois, il n'est pas possible de mélanger les <code>BigInt</code> et les nombres ({{jsxref("Number")}}) dans les mêmes opérations et on ne peut pas utiliser l'objet {{jsxref("Math")}} avec les valeurs <code>BigInt</code>.</p>

<p>Voir également <a href="/fr/docs/Web/JavaScript/Structures_de_données">les types de données et structures JavaScript</a> pour l'articulation des types primitifs en JavaScript.</p>

<p>Il est possible d'utiliser quatre types de littéraux numériques : décimal, binaire, octal et hexadécimal.</p>

<h3 id="Les_nombres_décimaux">Les nombres décimaux</h3>

<pre class="brush: js">1234567980;
42;

// Attention à l'utilisation des zéros
// en début de nombre

0888; // 888 analysé en base décimale
0777; // en mode non-strict, analysé en base octale,
      // ce qui correspond
      // à 511 en base décimale
</pre>

<p>On voit ici que les littéraux numériques qui commencent par un zéro (<code>0</code>) et contiennent un chiffre strictement inférieur à 8 après ce 0 sont analysés comme étant exprimés en base octale.</p>

<h3 id="Les_nombres_binaires">Les nombres binaires</h3>

<p>Pour utiliser des nombres binaires, on utilise un littéral qui commence par un 0 suivi d'un b minuscule ou majuscule (<code>0b</code> ou <code>0B</code>). Si les chiffres qui suivent ce préfixe ne sont pas des 0 ou des 1, une exception {{jsxref("SyntaxError")}} sera levée.</p>

<pre class="brush: js">var FLT_BITSIGNE = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPOSANT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSE = 0B00000000011111111111111111111111; // 8388607
</pre>

<h3 id="Les_nombres_octaux">Les nombres octaux</h3>

<p>Pour utiliser des nombres en base octale, on utilisera un préfixe avec un <code>0</code>. Si les nombres qui suivent ce 0 ne sont pas compris entre 0 et 7 (au sens strict), le nombre sera interprété comme un nombre décimal.</p>

<pre class="brush: js">var n = 0755; // 493 en base 10
var m = 0644; // 420 en base 10
</pre>

<p>En mode strict, ECMAScript 5 interdit cette syntaxe octale. Cette syntaxe ne fait pas partie d'ECMAScript 5 mais est supportée par la majorité des navigateurs. Avec ECMAScript 2015 (ES6), il est possible de représenter un nombre en notation octale grâce au préfixe "<code>0o</code>" :</p>

<pre class="brush: js">var a = 0o10; // Notation octale pour ES2015</pre>

<h3 id="Les_nombres_hexadécimaux">Les nombres hexadécimaux</h3>

<p>Pour utiliser des nombres exprimés en base hexadécimale, on utilisera un préfixe avec un zéro suivi d'un x majuscule ou minuscule (<code>0x</code> ou <code>0X</code>). Si les chiffres qui suivent ce préfixe ne sont pas 0123456789ABCDEF, cela provoquera une exception {{jsxref("SyntaxError")}}.</p>

<pre class="brush: js">0xFFFFFFFFFFFFFFFFF // 295147905179352830000
0x123456789ABCDEF   // 81985529216486900
0XA                 // 10
</pre>

<h3 id="Notation_scientifique">Notation scientifique</h3>

<pre class="brush: js">1E3   // 100
2e6   // 2000000
0.1e2 // 10
</pre>

<h2 id="Lobjet_Number">L'objet <code>Number</code></h2>

<p>L'objet {{jsxref("Number")}} possède certaines propriétés représentant les constantes numériques telles que : la valeur maximale représentable en JavaScript, une valeur spéciale pour dire que la valeur numérique n'est pas un nombre et l'infini. Ces valeurs ne peuvent pas être modifiées, on pourra les utiliser de la façon suivante :</p>

<pre class="brush: js">var plusGrandNombre = Number.MAX_VALUE;
var plusPetitNombre = Number.MIN_VALUE;
var infini = Number.POSITIVE_INFINITY;
var infiniNégatif = Number.NEGATIVE_INFINITY;
var pasUnNombre = Number.NaN;
</pre>

<p>On utilisera toujours ces valeurs directement avec l'objet natif <code>Number</code> (et non pas avec les propriétés d'une instance d'un objet <code>Number</code> qu'on aurait créé).</p>

<p>Le tableau qui suit liste certaines des propriétés de <code>Number</code>.</p>

<table class="standard-table">
 <caption>Propriétés de <code>Number</code></caption>
 <tbody>
  <tr>
   <th scope="col">Propriété</th>
   <th scope="col">Description</th>
  </tr>
  <tr>
   <td>{{jsxref("Number.MAX_VALUE")}}</td>
   <td>Le plus grand nombre qu'on peut représenter en JavaScript (<code>±1.7976931348623157e+308</code>).</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.MIN_VALUE")}}</td>
   <td>Le plus petit nombre qu'on peut représenter en JavaScript (<code>±5e-324</code>).</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.NaN")}}</td>
   <td>Une valeur spéciale signifiant que la valeur n'est pas un nombre.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.NEGATIVE_INFINITY")}}</td>
   <td>L'infini négatif, renvoyé lorsqu'on dépasse la valeur minimale.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.POSITIVE_INFINITY")}}</td>
   <td>L'infini positif, renvoyé lorsqu'on dépasse la valeur maximale.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.EPSILON")}}</td>
   <td>La différence entre 1 et la première valeur supérieure à 1 qui puisse être représentée comme {{jsxref("Number")}}. (<code>2.220446049250313e-16</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.MIN_SAFE_INTEGER")}}</td>
   <td>Le plus petit entier qu'on puisse représenter en JavaScript. (−2^53 + 1 ou <code>−9007199254740991</code>)</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.MAX_SAFE_INTEGER")}}</td>
   <td>
    <p>L'entier le plus grand qu'on puisse représenter en JavaScript (+2^53 − 1 ou <code>+9007199254740991</code>)</p>
   </td>
  </tr>
 </tbody>
</table>

<table class="standard-table">
 <caption>Méthodes de <code>Number</code></caption>
 <tbody>
  <tr>
   <th>Méthode</th>
   <th>Description</th>
  </tr>
  <tr>
   <td>{{jsxref("Number.parseFloat()")}}</td>
   <td>Analyse un argument qui est une chaîne de caractères et renvoie un nombre décimal. Cette méthode est équivalente à la fonction {{jsxref("parseFloat", "parseFloat()")}}.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.parseInt()")}}</td>
   <td>Analyse un argument qui est une chaîne de caractères et renvoie un entier exprimé dans une base donnée. Cette méthode est équivalente à la fonction {{jsxref("parseInt", "parseInt()")}}.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isFinite()")}}</td>
   <td>Détermine si la valeur passée en argument est un nombre fini.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isInteger()")}}</td>
   <td>Détermine si la valeur passée en argument est un nombre entier.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isNaN()")}}</td>
   <td>Détermine si la valeur passée en argument est {{jsxref("NaN")}}. Cette version est plus robuste que la fonction globale {{jsxref("Objets_globaux/isNaN", "isNaN()")}}.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.isSafeInteger()")}}</td>
   <td>Détermine si la valeur fournie est un nombre qu'il est possible de représenter comme un entier sans perdre d'information.</td>
  </tr>
 </tbody>
</table>

<p>Le prototype de <code>Number</code> fournit certaines méthodes pour exprimer les valeurs représentées par les objets <code>Number</code> dans différents formats. Le tableau suivant liste certaines de ces méthodes de <code>Number.prototype</code>.</p>

<table class="standard-table">
 <caption>Méthodes of <code>Number.prototype</code></caption>
 <thead>
  <tr>
   <th scope="col">Méthode</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{jsxref("Number.toExponential", "toExponential()")}}</td>
   <td>Renvoie une chaîne de caractères représentant le nombre en notation exponentielle.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.toFixed", "toFixed()")}}</td>
   <td>Renvoie une chaîne de caractères représentant le nombre en notation à point fixe.</td>
  </tr>
  <tr>
   <td>{{jsxref("Number.toPrecision", "toPrecision()")}}</td>
   <td>Renvoie une chaîne de caractères représentant le nombre en notation à point fixe avec une précision donnée.</td>
  </tr>
 </tbody>
</table>

<h2 id="Lobjet_Math">L'objet <code>Math</code></h2>

<p>L'objet natif {{jsxref("Math")}} possède des propriétés et des méthodes statiques pour représenter des constantes et des fonctions mathématiques. Ainsi, la propriété <code>PI</code> de l'objet <code>Math</code> représente la valeur de la constante <math><semantics><mi>π</mi><annotation encoding="TeX">\pi</annotation></semantics></math> (3.141...), on peut l'utiliser dans les applications avec :</p>

<pre class="brush: js">Math.PI
</pre>

<p>De la même façon, les fonctions mathématiques usuelles sont des méthodes de <code>Math</code>. On retrouve par exemple les fonctions trigonométriques, logarithmiques et exponentielles ainsi que d'autres fonctions. Si on souhaite utiliser la fonction sinus, on pourra écrire :</p>

<pre class="brush: js">Math.sin(1.56)
</pre>

<div class="note">
<p><strong>Note :</strong> Les méthodes trigonométriques de <code>Math</code> prennent des arguments exprimés en radians.</p>
</div>

<p>Le tableau suivant liste les méthodes de l'objet <code>Math</code>.</p>

<table class="standard-table">
 <caption>Méthodes de <code>Math</code></caption>
 <tbody>
  <tr>
   <th scope="col">Méthode</th>
   <th scope="col">Description</th>
  </tr>
  <tr>
   <td>{{jsxref("Math.abs", "abs()")}}</td>
   <td>Valeur absolue</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sin", "sin()")}}, {{jsxref("Math.cos", "cos()")}}, {{jsxref("Math.tan", "tan()")}}</td>
   <td>Fonctions trigonométriques standards (les arguments sont exprimés en radians)</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.asin", "asin()")}}, {{jsxref("Math.acos", "acos()")}}, {{jsxref("Math.atan", "atan()")}}, {{jsxref("Math.atan2", "atan2()")}}</td>
   <td>Fonctions trigonométriques inverses (les valeurs renvoyées sont exprimées en radians)</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sinh", "sinh()")}}, {{jsxref("Math.cosh", "cosh()")}}, {{jsxref("Math.tanh", "tanh()")}}</td>
   <td>Fonctions trigonométriques hyperboliques (les arguments sont exprimés en radians)</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.asinh", "asinh()")}}, {{jsxref("Math.acosh", "acosh()")}}, {{jsxref("Math.atanh", "atanh()")}}</td>
   <td>Fonctions trigonométriques hyperboliques inverses (les valeurs renvoyées sont exprimées en radians).</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.pow", "pow()")}}, {{jsxref("Math.exp", "exp()")}}, {{jsxref("Math.expm1", "expm1()")}}, {{jsxref("Math.log10", "log10()")}}, {{jsxref("Math.log1p", "log1p()")}}, {{jsxref("Math.log2", "log2()")}}</td>
   <td>Fonctions exponentielles et logarithmiques</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.floor", "floor()")}}, {{jsxref("Math.ceil", "ceil()")}}</td>
   <td>Renvoie le plus petit/grand entier inférieur/supérieur ou égal à l'argument donné</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.min", "min()")}}, {{jsxref("Math.max", "max()")}}</td>
   <td>Renvoie le plus petit (resp. grand) nombre d'une liste de nombres séparés par des virgules</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.random", "random()")}}</td>
   <td>Renvoie un nombre aléatoire compris entre 0 et 1</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.round", "round()")}}, {{jsxref("Math.fround", "fround()")}}, {{jsxref("Math.trunc", "trunc()")}},</td>
   <td>Fonctions d'arrondis et de troncature</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sqrt", "sqrt()")}}, {{jsxref("Math.cbrt", "cbrt()")}}, {{jsxref("Math.hypot", "hypot()")}}</td>
   <td>Racine carrée, cubique et racine carrée de la somme des carrés des arguments</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.sign", "sign()")}}</td>
   <td>Renvoie le signe d'un nombre et indique si la valeur est négative, positive ou nulle</td>
  </tr>
  <tr>
   <td>{{jsxref("Math.clz32", "clz32()")}},<br>
    {{jsxref("Math.imul", "imul()")}}</td>
   <td>Le nombre de zéros qui commencent un nombre sur 32 bits en représentation binaire.<br>
    La résultat de la multiplication de deux arguments sur 32 bits effectuée comme en C.</td>
  </tr>
 </tbody>
</table>

<p>À la différence des autres objets, on ne crée pas d'objet de type <code>Math</code>. Ses propriétés sont statiques, on les appelle donc toujours depuis l'objet <code>Math</code>.</p>

<h2 id="Lobjet_Date">L'objet <code>Date</code></h2>

<p>JavaScript ne possède pas de type primitif pour représenter des dates. Cependant l'objet {{jsxref("Date")}} et ses méthodes permettent de manipuler des dates et des heures au sein d'une application. L'objet <code>Date</code> possède de nombreuses méthodes pour définir, modifier, obtenir des dates. Il ne possède pas de propriétés.</p>

<p>JavaScript gère les dates de façon similaire à Java. Les deux langages possèdent de nombreuses méthodes en commun et les deux langages stockent les dates selon les nombres de millisecondes écoulées depuis le premier janvier 1970 à 00h00:00.</p>

<p>L'objet <code>Date</code> permet de représenter des dates allant de -100 000 000 jours jusqu'à +100 000 000 jours par rapport au premier janvier 1970 UTC.</p>

<p>Pour créer un objet <code>Date</code>, on utilisera la syntaxe suivante :</p>

<pre class="brush: js">var monObjetDate = new Date([paramètres]);
</pre>

<p>avec <code>monObjetDate</code> étant le nom de l'objet à créer, cela peut être un nouvel objet ou une propriété d'un objet existant.</p>

<p>Lorsqu'on appelle <code>Date</code> sans le mot-clé <code>new</code>, cela renvoie la date fournie sous la forme d'une chaîne de caractères.</p>

<p>Les <code>paramètres</code> qui peuvent être utilisés sont :</p>

<ul>
 <li>Aucun paramètre : l'objet créé représentera la date et l'heure courante.</li>
 <li>Une chaîne de caractères représentant une date au format suivant : "jour, année heures:minutes:secondes". Par exemple <code>var noël95 = new Date("December 25, 1995 13:30:00")</code>. Si les valeurs pour les heures, minutes ou secondes sont absentes, elles vaudront 0 par défaut.</li>
 <li>Un ensemble de valeurs entières pour l'année, le mois et le jour : <code>var noël95 = new Date(1995, 11, 25)</code>.</li>
 <li>Un ensemble de valeurs entières pour l'année, le mois, le jour, l'heure, les minutes et les secondes : <code>var noël95 = new Date(1995, 11, 25, 9, 30, 0);</code>.</li>
</ul>

<h3 id="Méthodes_de_lobjet_Date">Méthodes de l'objet <code>Date</code></h3>

<p>Les méthodes de l'objet <code>Date</code> se répartissent en différentes catégories :</p>

<ul>
 <li>celles utilisées pour définir et modifier les valeurs des objets <code>Date</code> (mutateurs).</li>
 <li>celles utilisées pour obtenir des informations à partir des objets <code>Date</code> (accesseurs).</li>
 <li>celles utilisées pour convertir les objets <code>Date</code> sous différents formats (souvent en chaînes de caractères).</li>
 <li>celles utilisées pour analyser et convertir des chaînes de caractères représentant des dates.</li>
</ul>

<p>Avec les accesseurs et les mutateurs, il est possible d'obtenir ou de modifier séparément les secondes, les minutes, les heures, le jour du mois ou de la semaine, le mois et l'année. Il existe une méthode <code>getDay</code> qui renvoie le jour de la semaine mais il n'existe pas de méthode réciproque <code>setDay</code> car le jour de la semaine est automatiquement déterminé. Ces méthodes utilisent des entiers pour représenter les valeurs utilisées :</p>

<ul>
 <li>Pour les secondes et les minutes : 0 à 59</li>
 <li>Pour les heures : 0 à 23</li>
 <li>Pour les jours : 0 (dimanche) à 6 (samedi)</li>
 <li>Pour les dates : 1 à 31 (jour du mois)</li>
 <li>Pour les mois : 0 (janvier) à 11 (décembre)</li>
 <li>Pour les années : les années à partir de 1900</li>
</ul>

<p>Ainsi, si on définit la date suivante :</p>

<pre class="brush: js">var noël95 = new Date("December 25, 1995");
</pre>

<p><code>noël95.getMonth()</code> renverra 11, et <code>noël95.getFullYear()</code> renverra 1995.</p>

<p>Les méthodes <code>getTime</code> et <code>setTime</code> peuvent être utiles pour comparer des dates entre elles. La méthode <code>getTime</code> renvoie le nombre de millisecondes écoulées depuis le premier janvier 1970 à 00:00:00 pour l'objet <code>Date</code>.</p>

<p>Par exemple, les instructions suivantes affichent le nombre de jours qui restent pour l'année courante :</p>

<pre class="brush: js">var aujourdhui = new Date();

// On définit le jour et le mois
var finAnnée = new Date(1995, 11, 31, 23, 59, 59, 999);

// On définit l'année avec l'année courante
finAnnée.setFullYear(aujourdhui.getFullYear());

// On calcule le nombre de millisecondes par jour
var msParJour = 24 * 60 * 60 * 1000;

// On renvoie le nombre de jours restants dans l'année
var joursRestants = (finAnnée.getTime() - aujourdhui.getTime()) / msParJour;

joursRestants = Math.round(joursRestants);</pre>

<p>Cet exemple crée un objet <code>Date</code> nommé <code>aujourdhui</code> qui contient la date du jour. On crée ensuite un objet <code>Date</code> nommé <code>finAnnée</code> pour lequel on définit ensuite l'année avec l'année courante. Après, on calcule le nombre de millisecondes qui s'écoulent dans une journée. Enfin, on calcule le nombre de jours entre <code>aujourdhui</code> et <code>finAnnée</code> en utilisant <code>getTime</code> puis on arrondit le tout pour avoir un nombre de jours.</p>

<p>La méthode <code>parse</code> est utile lorsqu'on souhaite affecter des valeurs temporelles à partir de chaînes de caractères. Par exemple, dans le code qui suit, on utilise les méthodes <code>parse</code> et <code>setTime</code> pour affecter la valeur d'une date à un objet <code>IPOdate</code> :</p>

<pre class="brush: js">var IPOdate = new Date();
IPOdate.setTime(Date.parse("Aug 9, 1995"));
</pre>

<h3 id="Exemple_dutilisation_de_lobjet_Date">Exemple d'utilisation de l'objet <code>Date</code></h3>

<p>Dans l'exemple qui suit, la fonction <code>JSClock()</code> renvoie le temps au format d'une horloge numérique représentant les heures sur 12 heures :</p>

<pre class="brush: js">function JSClock() {
  var temps = new Date();
  var heures = temps.getHours();
  var minutes = temps.getMinutes();
  var secondes = temps.getSeconds();
  var calc = "" + (heures &gt; 12) ? heures - 12 : heures);
  if (heures == 0)
    calc = "12";
  calc += ((minutes &lt; 10) ? ":0" : ":") + minutes;
  calc += ((secondes &lt; 10) ? ":0" : ":") + secondes;
  calc += (heures &gt;= 12) ? " P.M." : " A.M.";
  return calc;
}
</pre>

<p>Pour commencer, la fonction <code>JSClock</code> crée un objet <code>Date</code> appelé <code>temps</code> qui représente la date et l'heure à l'instant où la fonction est exécutée. Ensuite, les méthodes <code>getHours</code>, <code>getMinutes</code>, et <code>getSeconds</code> sont appelées afin d'affecter les valeurs correspondantes à <code>heures</code>, <code>minute</code>s, et <code>secondes</code>.</p>

<p>Les quatre instructions suivantes permettent de construire une chaîne de caractères à partir de la valeur temporelle. La première instruction crée une variable <code>calc</code> et lui affecte une valeur avec une expression conditionnelle : si <code>heures</code> est supérieure à 12, on affichera (<code>heures - 12</code>), sinon on affichera l'heure sauf si c'est 0 auquel cas on affichera 12.</p>

<p>L'instruction qui suit concatène la valeur de <code>minutes</code> à <code>calc</code>. Si la valeur de <code>minutes</code> est inférieure à 10, l'expression conditionnelle ajoutera une chaîne avec un zéro pour que la valeur soit affichée avec deux chiffres. De la même façon, l'instruction qui suit concatène la valeur de <code>calc</code> avec les secondes.</p>

<p>Enfin, une expression conditionnelle est utilisée pour ajouter "P.M." à <code>calc</code> si <code>heures</code> vaut 12 ou plus, sinon ce sera la chaîne "A.M." qui sera ajoutée à la fin de <code>calc</code>.</p>

<p>{{PreviousNext("Web/JavaScript/Guide/Expressions_et_Op%C3%A9rateurs", "Web/JavaScript/Guide/Formatage_du_texte")}}</p>
