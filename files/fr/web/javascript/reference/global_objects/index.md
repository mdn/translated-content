---
title: Objets globaux
slug: Web/JavaScript/Reference/Global_Objects
tags:
  - Aperçu
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects
original_slug: Web/JavaScript/Reference/Objets_globaux
---
<div>{{jsSidebar("Objects")}}</div>

<p>Cette partie référence tous les objets natifs standards JavaScript, avec leurs propriétés et méthodes.</p>

<p>Le terme « objets globaux » (ou objets natifs standards) ne doit pas ici être confondu avec l<em>'objet global</em>. Ici, « objets globaux » se réfère aux <em>objets de portée globale</em>. L'objet global lui-même peut être accédé en utilisant {{jsxref("Opérateurs/L_opérateur_this", "this")}} dans la portée globale (uniquement lorsque <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">le mode strict</a> n'est pas utilisé, sinon, il renvoie {{jsxref("undefined")}}). En réalité, la portée globale <em>consiste des</em> propriétés de l'objet global (avec ses propriétés héritées, s'il en a).</p>

<div class="note">
<p><strong>Note :</strong> En <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>, la portée globale représentée par <code>this</code> sera {{jsxref("undefined")}}.</p>
</div>

<p>Les autres objets de la portée globale sont <a href="/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#Cr.C3.A9er_de_nouveaux_objets">créés par les scripts utilisateurs</a> ou fournis par l'application hôte dans laquelle s'exécute JavaScript. Les objets mis à disposition par les navigateurs web sont documentés dans la <a href="/fr/docs/Web/API">référence API</a>. Pour plus d'informations sur la distinction entre le <a href="/fr/docs/Web/API/R%C3%A9f%C3%A9rence_du_DOM_Gecko">DOM</a> et JavaScript, voir <a href="/fr/docs/Web/JavaScript/JavaScript_technologies_overview">l'aperçu des technologies JavaScript</a>.</p>

<h2 id="Objets_globaux_standards_(par_catégorie)">Objets globaux standards (par catégorie)</h2>

<h3 id="Propriétés_-_valeurs">Propriétés - valeurs</h3>

<p>Les propriétés globales renvoient une valeur simple, elles ne possèdent aucune propriété ou méthode :</p>

<ul>
 <li>{{jsxref("Infinity")}}</li>
 <li>{{jsxref("NaN")}}</li>
 <li>{{jsxref("undefined")}}</li>
 <li>le littéral {{jsxref("null")}}</li>
 <li>{{JSxRef("globalThis")}}</li>
</ul>

<h3 id="Propriétés_-_fonctions">Propriétés - fonctions</h3>

<p>Les fonctions globales, appelées globalement (et non par rapport à un objet), renvoient directement leur résultat à l'objet appelant.</p>

<ul>
 <li>{{jsxref("Objets_globaux/eval", "eval()")}}</li>
 <li>{{jsxref("Objets_globaux/uneval", "uneval()")}} {{non-standard_inline()}}</li>
 <li>{{jsxref("Objets_globaux/isFinite", "isFinite()")}}</li>
 <li>{{jsxref("Objets_globaux/isNaN", "isNaN()")}}</li>
 <li>{{jsxref("Objets_globaux/parseFloat", "parseFloat()")}}</li>
 <li>{{jsxref("Objets_globaux/parseInt", "parseInt()")}}</li>
 <li>{{jsxref("Objets_globaux/decodeURI", "decodeURI()")}}</li>
 <li>{{jsxref("Objets_globaux/decodeURIComponent", "decodeURIComponent()")}}</li>
 <li>{{jsxref("Objets_globaux/encodeURI", "encodeURI()")}}</li>
 <li>{{jsxref("Objets_globaux/encodeURIComponent", "encodeURIComponent()")}}</li>
 <li>{{jsxref("Objets_globaux/escape", "escape()")}} {{deprecated_inline()}}</li>
 <li>{{jsxref("Objets_globaux/unescape", "unescape()")}} {{deprecated_inline()}}</li>
</ul>

<h3 id="Objets_fondamentaux">Objets fondamentaux</h3>

<p>Ces objets sont les objets fondamentaux de JavaScript. Parmi ces objets, on retrouve les objets génériques, les fonctions et les erreurs.</p>

<ul>
 <li>{{jsxref("Object")}}</li>
 <li>{{jsxref("Function")}}</li>
 <li>{{jsxref("Boolean")}}</li>
 <li>{{jsxref("Symbol")}}</li>
 <li>{{jsxref("Error")}}</li>
 <li>{{jsxref("EvalError")}}</li>
 <li>{{jsxref("InternalError")}} {{Non-standard_Inline}}</li>
 <li>{{jsxref("RangeError")}}</li>
 <li>{{jsxref("ReferenceError")}}</li>
 <li>{{jsxref("StopIteration")}}</li>
 <li>{{jsxref("SyntaxError")}}</li>
 <li>{{jsxref("TypeError")}}</li>
 <li>{{jsxref("URIError")}}</li>
</ul>

<h3 id="Nombres_et_dates">Nombres et dates</h3>

<p>Ces objets permettent de manipuler les nombres, dates et calculs mathématiques.</p>

<ul>
 <li>{{jsxref("Number")}}</li>
 <li>{{JSxRef("BigInt")}}</li>
 <li>{{jsxref("Math")}}</li>
 <li>{{jsxref("Date")}}</li>
</ul>

<h3 id="Manipulation_de_textes">Manipulation de textes</h3>

<p>Ces objets permettent de manipuler des chaînes de caractères.</p>

<ul>
 <li>{{jsxref("String")}}</li>
 <li>{{jsxref("RegExp")}}</li>
</ul>

<h3 id="Collections_indexées">Collections indexées</h3>

<p>Ces objets sont des collections ordonnées par un index. Cela inclut les tableaux (typés) et les objets semblables aux tableaux.</p>

<ul>
 <li>{{jsxref("Array")}}</li>
 <li>{{jsxref("Int8Array")}}</li>
 <li>{{jsxref("Uint8Array")}}</li>
 <li>{{jsxref("Uint8ClampedArray")}}</li>
 <li>{{jsxref("Int16Array")}}</li>
 <li>{{jsxref("Uint16Array")}}</li>
 <li>{{jsxref("Int32Array")}}</li>
 <li>{{jsxref("Uint32Array")}}</li>
 <li>{{jsxref("Float32Array")}}</li>
 <li>{{jsxref("Float64Array")}}</li>
 <li>{{jsxref("BigInt64Array")}}</li>
 <li>{{jsxref("BigUint64Array")}}</li>
</ul>

<h3 id="Collections_avec_clefs">Collections avec clefs</h3>

<p>Ces objets représentent des collections d'objets avec clefs. Ils contiennent des éléments itérables, dans leur ordre d'insertion.</p>

<ul>
 <li>{{jsxref("Map")}}</li>
 <li>{{jsxref("Set")}}</li>
 <li>{{jsxref("WeakMap")}}</li>
 <li>{{jsxref("WeakSet")}}</li>
</ul>

<h3 id="Données_structurées">Données structurées</h3>

<p>Ces objets permettent de représenter et de manipuler des tampons de données (<em>buffers</em>) et des données utilisant la notation JSON (<strong>J</strong>ava<strong>S</strong>cript <strong>O</strong>bject <strong>N</strong>otation).</p>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("SharedArrayBuffer")}} {{experimental_inline}}</li>
 <li>{{jsxref("Atomics")}} {{experimental_inline}}</li>
 <li>{{jsxref("DataView")}}</li>
 <li>{{jsxref("JSON")}}</li>
</ul>

<h3 id="Objets_de_contrôle_d'abstraction">Objets de contrôle d'abstraction</h3>

<ul>
 <li>{{jsxref("Promise")}}</li>
 <li>{{jsxref("Generator")}}</li>
 <li>{{jsxref("GeneratorFunction")}}</li>
 <li>{{jsxref("AsyncFunction")}}{{experimental_inline}}</li>
</ul>

<h3 id="Introspection">Introspection</h3>

<ul>
 <li>{{jsxref("Reflect")}}</li>
 <li>{{jsxref("Proxy")}}</li>
</ul>

<h3 id="Internationalisation">Internationalisation</h3>

<p>Ces objets ont été ajoutés à ECMAScript pour des traitements dépendants de particularités linguistiques. Ils possèdent leur propre spécification.</p>

<ul>
 <li>{{jsxref("Intl")}}</li>
 <li>{{jsxref("Objets_globaux/Collator", "Intl.Collator")}}</li>
 <li>{{jsxref("Objets_globaux/DateTimeFormat", "Intl.DateTimeFormat")}}</li>
 <li>{{JSxRef("Global_Objects/ListFormat", "Intl.ListFormat")}}</li>
 <li>{{jsxref("Objets_globaux/NumberFormat", "Intl.NumberFormat")}}</li>
 <li>{{JSxRef("Global_Objects/PluralRules", "Intl.PluralRules")}}</li>
 <li>{{jsxref("Objets_globaux/RelativeTimeFormat", "Intl.RelativeTimeFormat")}}</li>
 <li>{{jsxref("Objets_globaux/Locale", "Intl.Locale")}}</li>
</ul>

<h3 id="WebAssembly">WebAssembly</h3>

<ul>
 <li>{{jsxref("WebAssembly")}}</li>
 <li>{{jsxref("WebAssembly.Module")}}</li>
 <li>{{jsxref("WebAssembly.Instance")}}</li>
 <li>{{jsxref("WebAssembly.Memory")}}</li>
 <li>{{jsxref("WebAssembly.Table")}}</li>
 <li>{{jsxref("WebAssembly.CompileError")}}</li>
 <li>{{jsxref("WebAssembly.LinkError")}}</li>
 <li>{{jsxref("WebAssembly.RuntimeError")}}</li>
</ul>

<h3 id="Autres">Autres</h3>

<ul>
 <li>{{JSxRef("Fonctions/arguments", "arguments")}}</li>
</ul>
