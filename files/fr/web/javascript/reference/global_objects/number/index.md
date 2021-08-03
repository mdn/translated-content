---
title: Number
slug: Web/JavaScript/Reference/Global_Objects/Number
tags:
  - JavaScript
  - Number
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Number
original_slug: Web/JavaScript/Reference/Objets_globaux/Number
---
<div>{{JSRef}}</div>

<p>L'objet <strong><code>Number</code></strong> est une enveloppe objet (<em>wrapper</em>) autour du <a href="/fr/docs/Web/JavaScript/Structures_de_données#Le_type_nombre">type primitif numérique</a>. Autrement dit, il est utilisé pour manipuler les nombres comme des objets. Pour créer un objet <code>Number</code>, on utilise le constructeur <code>Number()</code>.</p>

<p>Le type JavaScript <code>Number</code> utilise <a href="https://fr.wikipedia.org/wiki/IEEE_754">une représentation binaire à précision double sur 64 bits telle que décrite par le standard IEEE 754</a>. Les implémentations plus récentes offrent un nouveau type : {{jsxref("BigInt")}} qui permet de représenter des entiers avec une précision arbitraire.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox notranslate">new Number(valeur);
var a = new Number('123'); // a === 123 donnera false
var b = Number('123'); // b === 123 donnera true
a instanceof Number; // donnera true
b instanceof Number; // donnera false</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>valeur</code></dt>
 <dd>La valeur numérique pour l'objet qu'on souhaite créer.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>L'objet <code>Number</code> est principalement utilisé dans les cas de figure suivants :</p>

<ul>
 <li>Si l'argument ne peut pas être converti en un nombre, il renverra {{jsxref("NaN")}}.</li>
 <li>Dans un contexte de fonction simple (quand il n'est pas utilisé comme un constructeur avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}), <code>Number</code> peut être utilisé afin d'effectuer des conversions.</li>
</ul>

<h2 id="Propriétés">Propriétés</h2>

<dl>
 <dt>{{jsxref("Number.EPSILON")}}</dt>
 <dd>Le plus petit intervalle entre deux valeurs qu'il est possible de représenter en JavaScript.</dd>
 <dt>{{jsxref("Number.MAX_SAFE_INTEGER")}}</dt>
 <dd>La valeur entière maximale qu'on peut représenter en JavaScript (<code>2^53 - 1</code>).</dd>
 <dt>{{jsxref("Number.MAX_VALUE")}}</dt>
 <dd>La valeur numérique maximale qu'on peut représenter en JavaScript.</dd>
 <dt>{{jsxref("Number.MIN_SAFE_INTEGER")}}</dt>
 <dd>La valeur entière minimale qu'on peut représenter en JavaScript (<code>-(2^53 - 1)</code>).</dd>
 <dt>{{jsxref("Number.MIN_VALUE")}}</dt>
 <dd>La plus petite valeur qu'on peut représenter en JavaScript, c'est-à-dire le plus petit nombre positif (le nombre le plus près de zéro qui n'est pas égal à zéro et qu'on peut représenter en JavaScript).</dd>
 <dt>{{jsxref("Number.NaN")}}</dt>
 <dd>Une valeur spéciale pour représenter les valeurs non-numériques (<strong>NaN</strong> correspond à « <em><strong>n</strong>ot <strong>a</strong> <strong>n</strong>umber</em> » en anglais, qui signifie « n'est pas un nombre »).</dd>
 <dt>{{jsxref("Number.NEGATIVE_INFINITY")}}</dt>
 <dd>Une valeur spéciale pour représenter l'infini négatif.</dd>
 <dt>{{jsxref("Number.POSITIVE_INFINITY")}}</dt>
 <dd>Une valeur spéciale pour représenter l'infini (positif).</dd>
 <dt>{{jsxref("Number.prototype")}}</dt>
 <dd>Cet objet permet d'ajouter des propriétés aux instances de <code>Number</code>.</dd>
</dl>

<h2 id="Méthodes">Méthodes</h2>

<dl>
 <dt>{{jsxref("Number.isNaN()")}}</dt>
 <dd>Cette méthode permet de déterminer si la valeur passée en argument vaut <code>NaN</code>.</dd>
 <dt>{{jsxref("Number.isFinite()")}}</dt>
 <dd>Cette méthode permet de déterminer si la valeur numérique passée en argument est un nombre fini.</dd>
 <dt>{{jsxref("Number.isInteger()")}}</dt>
 <dd>Cette méthode permet de déterminer si la valeur passée en argument est un entier.</dd>
 <dt>{{jsxref("Number.isSafeInteger()")}}</dt>
 <dd>Cette méthode permet de déterminer si la valeur passée en argument peut correctement être représentée comme un entier en JavaScript (savoir si elle est comprise entre <code>-(2^53 - 1)</code> et <code>2^53 - 1</code>).</dd>
 <dt>{{jsxref("Number.toInteger()")}} {{obsolete_inline}}</dt>
 <dd>Cette méthode est utilisée afin d'évaluer et de convertir la valeur passée en argument en entier (ou en l'{{jsxref("Infinity", "infini","",1)}}). Cette méthode a été supprimée.</dd>
 <dt>{{jsxref("Number.parseFloat()", "Number.parseFloat(<var>string</var>)")}}</dt>
 <dd>Cette méthode correspond à la méthode {{jsxref("parseFloat", "parseFloat()")}} de l'objet global.</dd>
 <dt>{{jsxref("Number.parseInt()", "Number.parseInt(<var>string</var>, [<var>radix</var>])")}}</dt>
 <dd>Cette méthode correspond à la méthode {{jsxref("parseInt", "parseInt()")}} de l'objet global.</dd>
</dl>

<h2 id="Les_instances_de_Number">Les instances de <code>Number</code></h2>

<p>Toutes les instances de <code>Number</code> héritent de {{jsxref("Number.prototype")}}. Il est possible de modifier le prototype du constructeur <code>Number</code> pour affecter toutes les instances de <code>Number</code>.</p>

<h3 id="Méthodes_2">Méthodes</h3>

<div>
<dl>
 <dt>{{jsxref("Number.prototype.toExponential()" ,"Number.prototype.toExponential(<var>fractionDigits</var>)")}}</dt>
 <dd>Retourne une chaîne représentant le nombre en notation exponentielle.</dd>
 <dt>{{jsxref("Number.prototype.toFixed()", "Number.prototype.toFixed(<var>digits</var>)")}}</dt>
 <dd>Retourne une chaîne représentant le nombre avec la notation virgule fixe.</dd>
 <dt>{{jsxref("Number.prototype.toLocaleString()", "Number.prototype.toLocaleString([<var>locales</var> [, <var>options</var>]])")}}</dt>
 <dd>Retourne une chaîne avec une représentation sensible à la langue de ce nombre. Surcharge la méthode {{jsxref("Object.prototype.toLocaleString()")}}.</dd>
 <dt>{{jsxref("Number.prototype.toPrecision()", "Number.prototype.toPrecision(<var>precision</var>)")}}</dt>
 <dd>Retourne une chaîne représentant le nombre avec une précision donnée en notation virgule fixe ou exponentielle.</dd>
 <dt>{{jsxref("Number.prototype.toString()", "Number.prototype.toString([<var>radix</var>])")}}</dt>
 <dd>Retourne une chaîne représentant le nombre dans une base numérique (radix) donnée. Surcharge la méthode {{jsxref("Object.prototype.toString()")}}.</dd>
 <dt>{{jsxref("Number.prototype.valueOf()")}}</dt>
 <dd>Retourne la valeur primitive de l'objet spécifié. Surcharge la méthode {{jsxref("Object.prototype.valueOf()")}}.</dd>
</dl>
</div>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_lobjet_Number_pour_affecter_des_valeurs_numériques_à_des_variables">Utiliser l'objet <code>Number</code> pour affecter des valeurs numériques à des variables</h3>

<p>Dans l'exemple suivant, on utilise les propriétés de l'objet <code>Number</code> pour affecter des valeurs à des variables numériques :</p>

<pre class="brush: js notranslate">var plusGrandNombre = Number.MAX_VALUE;
var plusPetitNombre = Number.MIN_VALUE;
var infini = Number.POSITIVE_INFINITY;
var infiniNégatif = Number.NEGATIVE_INFINITY;
var nonNumérique = Number.NaN;
</pre>

<h3 id="Intervalle_entier_pour_Number">Intervalle entier pour <code>Number</code></h3>

<p>Dans l'exemple suivant, on illustre les valeurs numériques maximales et minimales (exclues) qu'on peut représenter avec un nombre en JavaScript (pour plus de détails, <a href="https://tc39.github.io/ecma262/#sec-ecmascript-language-types-number-type">voir le chapitre 6.1.6 du standard ECMAScript</a>) :</p>

<pre class="brush: js notranslate">var biggestInt = 9007199254740992; //Number.MAX_SAFE_INTEGER+1 (2^53-1)
var smallestInt = -9007199254740992; //Number.MIN_SAFE_INTEGER-1 -(2^53-1)
</pre>

<p>Lorsqu'on analyse et convertit des données JSON, les valeurs en dehors de cet intervalle peuvent entraîner des erreurs ou des corruptions de valeurs lors de leurs conversions. Selon les objets qu'on souhaite représenter, on peut utiliser {{jsxref("String")}} dans certains cas pour représenter certaines valeurs.</p>

<h3 id="Utiliser_Number_pour_convertir_un_objet_Date">Utiliser <code>Number</code> pour convertir un objet <code>Date</code></h3>

<p>Dans l'exemple suivant, on convertit un objet {{jsxref("Date")}} en une valeur numérique grâce à la fonction <code>Number</code> :</p>

<pre class="brush: js notranslate">var d = new Date('December 17, 1995 03:24:00');
console.log(Number(d));
</pre>

<p>Ceci affichera "819167040000".</p>

<h3 id="Convertir_une_chaîne_représentant_une_valeur_numérique_en_un_nombre">Convertir une chaîne représentant une valeur numérique en un nombre</h3>

<pre class="brush: js notranslate">Number("123");       // 123
Number("12.3");      // 12.3
Number("12.00");     // 12
Number("123e-1");    // 12.3
Number("");          // 0
Number("0x11");      // 17
Number("0b11");      // 3
Number("0o11");      // 9
Number("toto");      // NaN
Number("100a");      // NaN
Number("-Infinity";) // -Infinity
</pre>

<div class="note">
<p><strong>Note :</strong> On pourra également convertir <code>null</code> en <code>0</code> grâce à <code>Number</code> : <code>Number(null)</code> donnera <code>0</code>.</p>
</div>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.7', 'Number')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-number-objects', 'Number')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Ajout des méthodes et propriétés suivantes : ({{jsxref("Number.EPSILON", "EPSILON")}}, {{jsxref("Number.isFinite", "isFinite")}}, {{jsxref("Number.isInteger", "isInteger")}}, {{jsxref("Number.isNaN", "isNaN")}}, {{jsxref("Number.parseFloat", "parseFloat")}}, {{jsxref("Number.parseInt", "parseInt")}})</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-number-objects', 'Number')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.Number")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("NaN")}}</li>
 <li>L'objet global {{jsxref("Math")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Structures_de_données#Le_type_nombre">Les types de données en JavaScript</a></li>
 <li><a href="https://medium.com/@maximus.koretskyi/javascripts-number-type-8d59199db1b6#.9whwe88tz">Un billet sur le type <code>Number</code> (en anglais)</a></li>
 <li>Représenter de grands entiers avec une précision arbitraire : {{jsxref("BigInt")}}</li>
</ul>
