---
title: label
slug: Web/JavaScript/Reference/Statements/label
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/label
original_slug: Web/JavaScript/Reference/Instructions/label
---
<div>{{jsSidebar("Statements")}}</div>

<p>Une <strong>instruction étiquetée (<em>labeled</em> en anglais)</strong> peut être utilisée avec les instructions {{jsxref("Instructions/break", "break")}} ou {{jsxref("Instructions/continue", "continue")}}. Un label permet d'identifier une instruction avec un identifiant pour y faire référence plus tard.</p>

<div>{{EmbedInteractiveExample("pages/js/statement-label.html")}}</div>



<div class="note">
<p><strong>Note :</strong> Les boucles ou les blocs étiquetés sont très rares et on peut généralement utiliser des appels de fonction plutôt que des sauts de boucle.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>label</em> :
   <em>instruction</em>
</pre>

<dl>
 <dt><code>label</code></dt>
 <dd>N'importe quel identifiant JavaScript qui n'est pas un mot-clé réservé.</dd>
 <dt><code>instruction</code></dt>
 <dd>Une instruction. <code>break</code> peut être utilisé avec n'importe quelle instruction identifiée. <code>continue</code> ne peut être utilisé qu'avec des instructions de boucle.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Une étiquette (<em>label</em>) peut être utilisée pour identifier une boucle et pour y faire référence à l'intérieur en utilisant les instructions <code>break</code> ou <code>continue</code> afin d'interrompre cette boucle ou de reprendre son exécution.</p>

<p>JavaScript <em>ne possède pas</em> d'instruction <code>goto</code>, les étiquettes ne peuvent être utilisées que par les instructions <code>break</code> ou <code>continue</code>.</p>

<p>En <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>, on ne peut pas utiliser <code>let</code> comme étiquette, cela lèvera une exception {{jsxref("SyntaxError")}} (<code>let</code> est un identifiant réservé).</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Faire_référence_à_une_étiquette_avec_continue_dans_une_boucle">Faire référence à une étiquette avec <code>continue</code> dans une boucle</h3>

<pre class="brush: js">var i, j;

boucle1:
for (i = 0; i &lt; 3; i++) {      //Le premier for correspond à "boucle1"
   boucle2:
   for (j = 0; j &lt; 3; j++) {   //Le second for correspond à "boucle2"
      if (i === 1 &amp;&amp; j === 1) {
         continue boucle1;
      } else {
         console.log("i = " + i + ", j = " + j);
      }
   }
}

// On aura les résultats suivants :
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// On voit bien l'absence de "i = 1, j = 1" et "i = 1, j = 2"
</pre>

<h3 id="Second_exemple_utilisant_continue">Second exemple utilisant <code>continue</code></h3>

<p>Étant donné un tableau d'élément et un tableau de tests, cet exemple donne le nombre d'éléments qui ont réussi tous les tests.</p>

<pre class="brush: js">var nbItemsReussis = 0;
var i, j;

top:
for (i = 0; i &lt; items.length; i++){
  for (j = 0; j &lt; tests.length; j++){
    if (!tests[j].reussi(items[i])){
      continue top;
    }
  }
  nbItemsReussis++;
}</pre>

<h3 id="Utiliser_break_avec_une_étiquette_au_sein_d'une_boucle_for">Utiliser <code>break</code> avec une étiquette au sein d'une boucle <code>for</code></h3>

<pre class="brush: js">var i, j;

boucle1:
for (i = 0; i &lt; 3; i++) { // première boucle étiquetée « boucle1 »
  boucle2:
  for (j =0; j &lt; 3; j++) { // seconde boucle étiquetée « boucle2 »
    if (i == 1 &amp;&amp; j == 1) {
      break boucle1;
    }
    console.log("i = " + i + ", j = " + j);
  }
}

// Ce qui produira en sortie
// (dans la console)
// "i = 0, j = 0"
// "i = 0, j = 1"
// "i = 0, j = 2"
// "i = 1, j = 0"
// Ici on voit la différence avec l'exemple précédent utilisant continue
</pre>

<h3 id="Second_exemple_utilisant_un_label_et_break">Second exemple utilisant un label et <code>break</code></h3>

<p>Étant donné un tableau d'éléments et un tableau de tests, cet exemple permet de déterminer si oui ou non tous les éléments ont réussis tous les tests.</p>

<pre class="brush: js">var toutReussi = true;
var i, j;

top:
for (i = 0; items.length; i++)
  for (j = 0; j &lt; tests.length; i++)
    if (!tests[j].reusi(items[i])){
      toutReussi = false;
      break top;
    }
</pre>

<h3 id="Utilise_un_bloc_étiqueté_avec_break">Utilise un bloc étiqueté avec <code>break</code></h3>

<p>On peut utiliser des étiquettes dans des blocs simples mais seul <code>break</code> permettra de faire référence à des étiquettes en dehors d'une boucle.</p>

<pre class="brush: js">toto: {
  console.log("face");
  break toto;
  console.log("this will not be executed");
}
console.log("swap");

// On aura alors dans la console :

// "face"
// "swap </pre>

<h3 id="Déclarations_de_fonctions_étiquetées">Déclarations de fonctions étiquetées</h3>

<p>À partir d'ECMAScript 2015, les déclarations de fonctions étiquetées sont standardisées pour du code non-strict <a href="http://www.ecma-international.org/ecma-262/6.0/#sec-labelled-function-declarations">au sein de l'annexe de la spécification relative à la compatibilité web</a>.</p>

<pre class="brush: js">L: function F() {}</pre>

<p>En revanche, en <a href="/fr/docs/Web/JavaScript/Reference/Strict_mode">mode strict</a>, cela lèvera une exception {{jsxref("SyntaxError")}}:</p>

<pre class="brush: js">"use strict";
L: function F() {}
// SyntaxError: functions cannot be labelled</pre>

<p><a href="/fr/docs/Web/JavaScript/Reference/Instructions/function*">Les fonctions génératrices</a> ne peuvent pas être étiquetées, en mode strict, comme en mode non-strict :</p>

<pre class="brush: js">L: function* F() {}
// SyntaxError: generator functions cannot be labelled
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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.12', 'Labelled statement')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-labelled-statements', 'Labelled statement')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-labelled-statements', 'Labelled statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.label")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Instructions/break", "break")}}</li>
 <li>{{jsxref("Instructions/continue", "continue")}}</li>
</ul>
