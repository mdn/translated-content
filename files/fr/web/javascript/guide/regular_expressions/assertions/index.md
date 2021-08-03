---
title: Assertions
slug: Web/JavaScript/Guide/Regular_Expressions/Assertions
tags:
  - Assertions
  - Guide
  - JavaScript
  - RegExp
translation_of: Web/JavaScript/Guide/Regular_Expressions/Assertions
original_slug: Web/JavaScript/Guide/Expressions_régulières/Assertions
---
<p>{{jsSidebar("JavaScript Guide")}}{{draft}}</p>

<p>Les assertions indiquent les conditions selon lesquelles il est possible d'avoir une correspondance (contenu situé avant la correspondance, situé après ou expressions conditionnelles).</p>

<h2 id="Types">Types</h2>

<div class="blockIndicator note">
<p><strong>Note :</strong> Le caractère <code>?</code> peut également être utilisé comme quantificateur.</p>
</div>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Caractères</th>
   <th scope="col">Signification</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>x(?=y)</code></td>
   <td>
    <p>Correspond à 'x' seulement s'il est suivi de 'y'. On appelle cela un test de succession (<em>lookahead</em>).</p>

    <p>Ainsi, <code>/Jack(?=Sparrow)/</code> correspond à 'Jack' seulement s'il est suivi de 'Sparrow'. <code>/Jack(?=Sparrow|Bauer)/</code> correspond à 'Jack' seulement s'il est suivi de 'Sparrow' ou de 'Bauer'. Cependant, ni 'Sparrow' ni 'Bauer' ne feront partie de la correspondance.</p>
   </td>
  </tr>
  <tr>
   <td><code>x(?!y)</code></td>
   <td>
    <p>Correspond à 'x' seulement si 'x' n'est pas suivi de 'y'.</p>

    <p>Ainsi, <code>/\d+(?!\.)/</code> correspond à un nombre qui n'est pas suivi par un point, cette expression utilisée avec <code>la chaîne 3.141</code> correspondra pour '141' mais pas pour '3.141'.</p>
   </td>
  </tr>
  <tr>
   <td><code>(?&lt;=y)x</code></td>
   <td>
    <p>Correspond à <code><em>x</em></code> seulement si <code><em>x</em></code> est précédé par <code><em>y</em></code>. C'est ce qu'on appelle une recherche arrière (<em>lookbehind</em>).</p>

    <p>Ainsi /<code>(?&lt;=Jack)Sprat/</code> correspond à "Sprat" seulement s'il est précédé de "Jack".<br>
     <code>/(?&lt;=Jack|Tom)Sprat/</code> correspond à "Sprat" seulement s'il est précédé de "Jack" ou "Tom".<br>
     Toutefois, "Jack" et "Tom" ne feront pas partie de la correspondance.</p>
   </td>
  </tr>
  <tr>
   <td><code>(?&lt;!y)x</code></td>
   <td>
    <p>Correspond à <code><em>x</em></code> uniquement si <code><em>x</em></code> n'est pas précédé par <code><em>y</em></code> (parfois appelée en anglais <em>negated lookbehind</em>)<em>.</em></p>

    <p>Ainsi, <code>/(?&lt;!-)\d+/</code> correspondra à un nombre seulement si celui-ci n'est pas précédé d'un signe moins.<br>
     <code>/(?&lt;!-)\d+/.exec('3')</code> cible "3".<br>
      <code>/(?&lt;!-)\d+/.exec('-3')</code>  ne trouve aucune correspondance car le nombre est précédé d'un signe</p>
   </td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<h3 id="Assertion_avant_(lookahead)">Assertion avant (<em>lookahead</em>)</h3>

<pre class="brush: js">let regex = /Premier(?= test)/g;

console.log('Premier test'.match(regex)); // [ 'Premier' ]
console.log('Premier truc'.match(regex)); // null
console.log("Voici le Premier test de l'année.".match(regex)); // [ 'Premier' ]
console.log('Voici le Premier truc du mois.'.match(regex)); // null
</pre>

<h3 id="Assertion_avant_négative">Assertion avant négative</h3>

<p>L'expression rationnelle <code>/\d+(?!\.)/</code> permettra de rechercher plusieurs chiffres si ceux-ci ne sont pas suivis d'un point décimal. Ainsi, <code>/\d+(?!\.)/.exec('3.141')</code> trouvera la sous-chaîne "141" mais pas "3."</p>

<pre class="brush: js">console.log(/\d+(?!\.)/g.exec('3.141')); // [ '141', index: 2, input: '3.141' ]
</pre>

<h3 id="Signification_différente_de_'!'_entre_les_assertions_et_les_intervalles">Signification différente de <code>'?!'</code> entre les assertions et les intervalles</h3>

<p>La combinaison de caractères <code>?!</code> a un sens différent entre les <a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Assertions">assertions</a> <code>/x(?!y)/</code> et les <a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Groupes_et_intervalles">intervalles</a> <code>[^?!]</code>.</p>

<pre class="brush: js">let orangePasCitron = "Voulez-vous avoir une orange? Oui, je ne veux pas avoir de citron!";

let choixPasCitron = /[^?!]+avoir(?! un citron)[^?!]+[?!]/gi
console.log(orangePasCitron.match(choixPasCitron)); // [ 'Voulez-vous avoir une orange?' ]

let choixPasOrange = /[^?!]+avoir(?! une orange)[^?!]+[?!]/gi
console.log(orangePasCitron.match(choixPasOrange)); // [ 'Oui, je ne veux pas avoir de citron!' ]
</pre>

<h3 id="Assertion_arrière_(lookbehind)">Assertion arrière (<em>lookbehind</em>)</h3>

<pre class="brush: js">let oranges = ['espèce orange A ', 'sorte orange B', 'espèce orange C',];

let especesOranges = oranges.filter( fruit =&gt; fruit.match(/(?&lt;=espèce )orange/));
console.log(especesOranges); // [ 'espèce orange A ', 'espèce orange C' ]
</pre>
