---
title: BigInt
slug: Web/JavaScript/Reference/Global_Objects/BigInt
tags:
  - BigInt
  - Experimental
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt
original_slug: Web/JavaScript/Reference/Objets_globaux/BigInt
---
<div>{{JSRef}}</div>

<p><strong><code>BigInt</code></strong> est un objet natif qui permet de représenter des nombres entiers supérieurs à 2^53 (la plus grande valeur entière qui puisse être représentée par le type primitif {{jsxref("Number")}}). <code>BigInt</code> peut être utilisé afin de représenter de grands entiers de n'importe quelle taille.</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> BigInt est actuellement une <strong>proposition de niveau 3</strong> pour la <a href="#Spécifications">spécification</a> ECMAScript.</p>

<p>Lorsque cette proposition atteindra le niveau 4 (soit la spécification finale), BigInt sera le deuxième type natif disponible en JavaScript pour représenter des valeurs numériques.</p>

<p><strong><code>BigInt</code></strong> sera ainsi le prochain type primitif ajouté à JavaScript depuis {{JSxRef("Symbol")}} avec ES2015</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">BigInt(valeur);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeur</code></dt>
 <dd>La valeur numérique de l'objet qu'on souhaite créer. Cet argument peut être une chaîne de caractères ou un entier.</dd>
</dl>

<div class="blockIndicator note">
<p><strong>Note :</strong> <code>BigInt()</code> n'est pas censé être utilisé avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}.</p>
</div>

<h2 id="Description">Description</h2>

<p>Un objet <code>BigInt</code> est créé en ajoutant un <code>n</code> à la fin d'un littéral d'entier — <code>10n</code> par exemple — ou en appelant la fonction <code>BigInt()</code>.</p>

<pre class="brush: js">const plusGrandEntier = 9007199254740991n;

const grandNombre = BigInt(9007199254740991);
// ↪ 9007199254740991n

const grandNombreEnChaîne = BigInt('9007199254740991');
// ↪ 9007199254740991n

const grandeNombreHexa = BigInt("0x1fffffffffffff");
// ↪ 9007199254740991n

const grandeNombreBinaire = BigInt("0b11111111111111111111111111111111111111111111111111111");
// ↪ 9007199254740991n</pre>

<p>Les objets <code>BigInt</code> sont semblables aux objets {{jsxref("Number")}} selon certains aspects mais avec quelques différences clés. Les objets <code>BigInt</code> ne peuvent pas êre utilisés avec l'objet {{jsxref("Math")}} et ne peuvent pas être manipulés avec des opérations qui impliquent des objets {{jsxref("Number")}}.</p>

<div class="warning">
<p><strong>Attention :</strong> Il est nécessaire de convertir des valeurs {{jsxref("Number")}} ou <code>BigInt</code> dans les opérations qui les combinent.</p>

<p>Attention lors de ces conversions car la précision d'une valeur <code>BigInt</code> peut être perdue lorsque ce dernier est converti en {{jsxref("Number")}}.</p>
</div>

<h3 id="Type">Type</h3>

<p>Lorsqu'on utilise <code>typeof</code> sur une valeur <code>BigInt</code>, cet opérateur renverra <code>"bigint"</code> :</p>

<pre class="brush: js">typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true</pre>

<p>Lorsqu'on « enveloppe » la valeur dans un objet, on aura alors un type <code>"object"</code> (comme pour les autres valeurs primitives lorsqu'on les enveloppe dans le constructeur objet) :</p>

<pre class="brush: js">typeof Object(1n) === "object"; // true</pre>

<h3 id="Opérateurs">Opérateurs</h3>

<p>On peut utiliser les opérateurs suivants avec les objets <code>BigInt</code> : <code>+</code>, `<code>*</code>`, `<code>-</code>`, `<code>**</code>`, `<code>%</code>` , <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_binaires">les opérateurs binaires</a> (à l'exception de <code>&gt;&gt;&gt;</code> / décalage à droite avec des zéros) car les grands entiers sont signés. Le <code>+</code> unaire n'est pas non plus pris en charge (afin de <a href="https://github.com/tc39/proposal-bigint/blob/master/ADVANCED.md#dont-break-asmjs">ne pas casser asm.js</a>).</p>

<pre class="brush: js">const nombreSain = BigInt(Number.MAX_SAFE_INTEGER);
// ↪ 9007199254740991

const maxPlusUn = nombreSain + 1n;
// ↪ 9007199254740992n

const leFutur = nombreSain + 2n;
// ↪ 9007199254740993n, cela fonctionne désormais !

const multi = nombreSain * 2n;
// ↪ 18014398509481982n

const subtr = multi – 10n;
// ↪ 18014398509481972n

const mod = multi % 10n;
// ↪ 2n

const bigN = 2n ** 54n;
// ↪ 18014398509481984n

bigN * -1n
// ↪ –18014398509481984n
</pre>

<p>L'opérateur <code>/</code> fonctionne de façon analogue aux nombres classiques. Toutefois, les objets <code>BigInt</code> permettent uniquement de représenter des entiers et non des nombres décimaux. Aussi, la division ne produira pas de partie décimale pour les <code>BigInt</code>.</p>

<pre class="brush: js">const attendu = 4n / 2n;
// ↪ 2n

const tronque = 5n / 2n;
// ↪ 2n et pas 2.5n

</pre>

<h3 id="Comparaisons">Comparaisons</h3>

<p>Un objet <code>BigInt</code> n'est pas strictement égal à {{jsxref( "Number")}} mais peut l'être au sens de l'égalité faible.</p>

<pre class="brush: js">0n === 0
// ↪ false

0n == 0
// ↪ true</pre>

<p>On peut toutefois comparer des objets {{jsxref("Number")}} et <code>BigInt</code> :</p>

<pre class="brush: js">1n &lt; 2
// ↪ true

2n &gt; 1
// ↪ true

2 &gt; 2
// ↪ false

2n &gt; 2
// ↪ false

2n &gt;= 2
// ↪ true</pre>

<p>On peut également mélanger ces valeurs au sein de tableaux :</p>

<pre class="brush: js">const mixed = [4n, 6, -12n, 10, 4, 0, 0n];
// ↪  [4n, 6, -12n, 10, 4, 0, 0n]

mixed.sort();
// ↪ [-12n, 0, 0n, 10, 4n, 4, 6]</pre>

<p>On notera que les comparaisons entre les valeurs <code>BigInt</code> et les mêmes valeurs, passées dans le constructeur <code>Object()</code> ne seront pas équivalentes au sens strict :</p>

<pre class="brush: js">0n === Object(0n); // false
Object(0n) === Object(0n); // false

const o = Object(0n);
o === o; // true</pre>

<h3 id="Opérations_conditionnelles">Opérations conditionnelles</h3>

<p>Un objet <code>BigInt</code> se comporte comme un objet {{jsxref("Number")}} lorsqu'il est utilisé dans un contexte booléen : comme argument pour le constructeur {{jsxref("Boolean")}}, comme opérandes pour les opérateurs logiques <code>||</code>, `<code>&amp;&amp;</code>` et <code>!</code> ou avec les instructions conditonnelles telles que <code><a href="/fr/docs/Web/JavaScript/Reference/Instructions/if...else">if</a></code>.</p>

<pre class="brush: js">if (0n) {
  console.log('Nous voici dans le if !');
} else {
  console.log('Et nous voilà dans le else !');
}

// ↪ "Et nous voilà dans le else !"

0n || 12n
// ↪ 12n

0n &amp;&amp; 12n
// ↪ 0n

Boolean(0n)
// ↪ false

Boolean(12n)
// ↪ true

!12n
// ↪ false

!0n
// ↪ true
</pre>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt><strong><code>BigInt.asIntN()</code></strong></dt>
 <dd>Écrète un objet <code>BigInt</code> pour obtenir un entier signé entre -2^(largeur-1) et 2^(largeur-1)-1</dd>
 <dt><code>BigInt.asUintN()</code></dt>
 <dd>Écrète un objet <code>BigInt</code> pour obtenir un entier non-signé entre 0 et 2^(largeur)-1</dd>
</dl>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{jsxref("BigInt.prototype")}}</dt>
 <dd>Cette propriété permet d'ajouter des propriétés aux objets <code>BigInt</code>.</dd>
</dl>

<h2 id="Instances_de_BigInt">Instances de <code>BigInt</code></h2>

<p>L'ensemble des instances de <code>BigInt</code> héritent de <code>BigInt.prototype</code>. Le prototype du constructeur <code>BigInt</code> peut être modifié afin de modifier l'ensemble des instances de <code>BigInt</code>.</p>

<h3 id="Méthodes_2">Méthodes</h3>

<p>{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/BigInt/prototype', 'Méthodes')}}</p>

<h2 id="Recommandations">Recommandations</h2>

<h3 id="Coercition_en_Number">Coercition en <code>Number</code></h3>

<p>Lorsqu'on convertit une valeur <code>BigInt</code> en {{jsxref("Objets_globaux/Number","Number")}}, on perd en précision. Si on effectue des allers-retours entre ces deux types, on ne conservera pas la même valeur. Aussi, il est recommandé d'utiliser uniquement <code>BigInt</code> lorsque les valeurs qu'on manipule seront supérieures à 2^53 et qu'il ne sera pas nécessaire de passer d'un type à l'autre.</p>

<h3 id="Cryptographie">Cryptographie</h3>

<p>Les opérations prises en charge pour les valeurs <code>BigInt</code> ne s'effectuent pas à temps constant. Aussi, <code>BigInt</code> ne serait être utilisé à <a href="https://www.chosenplaintext.ca/articles/beginners-guide-constant-time-cryptography.html">des fins cryptographiques</a>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Calculer_des_nombres_premiers">Calculer des nombres premiers</h3>

<pre class="brush: js">function isPrime(p) {
  for (let i = 2n; i * i &lt;= p; i++) {
    if (p % i === 0n) return false;
  }
  return true;
}

// Takes a BigInt as an argument and returns a BigInt
function nthPrime(nth) {
  let maybePrime = 2n;
  let prime = 0n;

  while (nth &gt;= 0n) {
    if (isPrime(maybePrime)) {
      nth -= 1n;
      prime = maybePrime;
    }
    maybePrime += 1n;
  }

  return prime;
}

nthPrime(20n)
// ↪ 73n</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="https://tc39.es/proposal-bigint/#sec-bigint-objects">BigInt</a></code></td>
   <td>Brouillon de niveau 3</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.BigInt")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Number")}}</li>
</ul>
