---
title: Littéraux de gabarits
slug: Web/JavaScript/Reference/Template_literals
tags:
  - Chaîne de caractères
  - ECMAScript 2015
  - Guide
  - JavaScript
  - Littéraux de gabarits
translation_of: Web/JavaScript/Reference/Template_literals
original_slug: Web/JavaScript/Reference/Littéraux_gabarits
---
<div>{{JsSidebar("More")}}</div>

<p>Les littéraux de gabarits sont des littéraux de chaînes de caractères permettant d'intégrer des expressions. Avec eux, on peut utiliser des chaînes de caractères multi-lignes et des fonctionnalités d'interpolation.</p>

<div class="blockIndicator note">
<p><strong>Note :</strong> Dans les premières versions de la spécification ECMAScript 2015, cette fonctionnalité était intitulée « gabarits de chaîne de caractères ». Dans la suite de cet article, les expressions « gabarits de texte », « gabarits de libellés », « littéraux de gabarits » et « gabarits » seront équivalents.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">`texte`

`ligne de texte 1
 ligne de texte 2`

`texte ${expression} texte`

etiquette `texte ${expression} texte`
</pre>

<h2 id="Description">Description</h2>

<p>Les gabarits sont délimités par des caractères <a href="https://fr.wikipedia.org/wiki/Accent_grave">accent grave</a> (` `)  au lieu des apostrophes doubles ou simples. Les gabarits peuvent contenir des espaces réservés (<em>placeholders</em>). Ces espaces sont indiqués par le signe dollar ($) et des accolades (<code>${expression})</code>. Les expressions dans les espaces réservés et le texte compris dans ces espaces sont passés à une fonction.</p>

<p>Pour créer la chaîne finale, la fonction par défaut concatène simplement les différentes parties en une seule chaîne. Toutefois, on peut utiliser une fonction spécifique pour obtenir un comportement différent et recomposer la chaîne avec une autre logique. On parlera alors <a href="#Gabarits_étiquetés">de gabarit étiqueté (cf. ci-après)</a>.</p>

<pre class="brush: js">let rep = 42;
console.log(`La réponse est ${rep}`); // Gabarit simple avec la concaténation par défaut

function concatenationAdHoc(chaines, reponse){
  let parite;
  if(reponse % 2 === 0){
    parite = "paire";
  } else {
    parite = "impaire";
  }
  return `${chaines[0]}${parite}.`;
}
// concaténation spécifique où on modifie la sortie
console.log(concatenationAdHoc`La réponse est ${rep}.`);
</pre>

<p>Pour utiliser des accents graves dans un gabarit, on les échappera avec une barre oblique inverse (\) :</p>

<pre class="brush: js">`\`` === "`"; // true</pre>

<h3 id="Les_chaînes_de_caractères_multi-lignes">Les chaînes de caractères multi-lignes</h3>

<p>Tous les caractères de saut de ligne insérés dans la source font partie du gabarit. Avec des chaînes de caractères normales, il aurait fallu utiliser la syntaxe suivante pour obtenir des chaînes multi-lignes :</p>

<pre class="brush: js">console.log('ligne de texte 1\n'+
'ligne de texte 2');
// "ligne de texte 1
// ligne de texte 2"</pre>

<p>Pour obtenir le même effet avec les gabarits, on peut désormais écrire :</p>

<pre class="brush: js">console.log(`ligne de texte 1
ligne de texte 2`);
// "ligne de texte 1
//  ligne de texte 2"</pre>

<h3 id="Interpolation_dexpressions">Interpolation d'expressions</h3>

<p>Pour intégrer des expressions dans des chaînes de caractères normales, il fallait utiliser la syntaxe suivante :</p>

<pre class="brush: js">let a = 5;
let b = 10;
console.log('Quinze vaut ' + (a + b) + ' et\nnon ' + (2 * a + b) + '.');
// "Quinze vaut 15 et
// non 20."</pre>

<p>On peut désormais utiliser le sucre syntaxique fourni par les gabarits pour rendre les substitutions plus lisibles :</p>

<pre class="brush: js">let a = 5;
let b = 10;
console.log(`Quinze vaut ${a + b} et
non ${2 * a + b}.`);
// "Quinze vaut 15 et
// non 20."</pre>

<h3 id="Imbrication_de_gabarits">Imbrication de gabarits</h3>

<p>Parfois, l'imbrication d'un gabarit est la solution la plus simple (et peut-être la plus lisible) pour obtenir des chaînes de caractères configurables.</p>

<p>En ES5 :</p>

<pre class="brush: js">let classes = 'header'
classes += (isLargeScreen() ?
   '' : item.isCollapsed ?
     ' icon-expander' : ' icon-collapser');
</pre>

<p>En ES2015 avec des gabarits et sans imbrication :</p>

<pre class="brush: js">const classes = `header ${ isLargeScreen() ? '' :
    (item.isCollapsed ? 'icon-expander' : 'icon-collapser') }`;</pre>

<p>En ES2015 avec des gabarits imbriqués :</p>

<pre class="brush: js">const classes = `header $<strong>{</strong> isLargeScreen() ? '' :
 `icon-${item.isCollapsed ? 'expander' : 'collapser'}`<strong> </strong><strong>}`</strong>;</pre>

<h3 id="Gabarits_étiquetés_2">Gabarits étiquetés</h3>

<p>Les <em>gabarits étiquetés</em> (<em>tagged templates</em>) sont une forme plus avancée de gabarits. On peut ici utiliser une fonction pour analyser les différents fragments du gabarit. Le premier argument passé à la fonction est l'ensemble de valeurs issues de chaînes de caractères sous la forme d'un tableau. Les arguments ensuite passés à la fonction seront les expressions contenues dans le gabarit. La fonction pourra ainsi créer une chaîne avec une autre forme de concaténation et utiliser une logique spécifique. La fonction utilisée pour le formatage du gabarit peut être nommée comme n'importe quelle autre fonction.</p>

<pre class="brush: js">let personne = 'Michou';
let age = 28;

function monEtiquette(chaines, expPersonne, expAge) {
  let chn0 = chaines[0]; // "ce "
  let chn1 = chaines[1]; // " est un "

  // Techniquement, il y a une chaîne après
  // l'expression finale (dans notre exemple),
  // mais elle est vide (""), donc ne pas en tenir compte.
  // var chn2 = chaines[2];

  let chnAge;
  if (expAge &gt; 99){
    chnAge = 'centenaire';
  } else {
    chnAge = 'jeunot';
  }
  // On peut tout à fait renvoyer une chaîne construite
  // avec un gabarit
  return `${chn0}${expPersonne}${chn1}${chnAge}`;
}

let sortie = monEtiquette`ce ${ personne } est un ${ age }`;

console.log(sortie);
// ce Michou est un jeunot
</pre>

<h3 id="Chaînes_brutes">Chaînes brutes</h3>

<p>La propriété spéciale <code>raw</code>, disponible sur le premier argument de la fonction du gabarit étiqueté, vous permet d'accéder aux chaînes brutes, telles qu'elles ont été entrées, sans traiter <a href="/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Utilisation_des_caractères_spéciaux">les séquences d'échappement</a>.</p>

<pre class="brush: js">function etiquette(chaines) {
  console.log(chaines.raw[0]);
}

etiquette`ligne de texte 1 \n ligne de texte 2`;
// affichera dans la console :
// "ligne de texte 1 \n ligne de texte 2"
</pre>

<p>En outre, la méthode {{jsxref("String.raw()")}} a pour fonction de créer des chaînes de caractères brutes, exactement comme la fonction de gabarit et de concaténation de chaînes par défaut le ferait :</p>

<pre class="brush: js">let chn = String.raw`Salut\n${2+3}!`;
// "Salut\n5!"

chn.length;
// 9

chn.split('').join(',');
// "S,a,l,u,t,\,n,5,!"
</pre>

<h3 id="Les_gabarits_étiquetés_et_les_séquences_déchappement">Les gabarits étiquetés et les séquences d'échappement</h3>

<h4 id="Comportement_de_ES2016">Comportement de ES2016</h4>

<p>Quant à ECMAScript 2016, les gabarits étiquetés se conforment aux règles de séquences d'échappement suivantes :</p>

<ul>
 <li>Les séquences d'échappement Unicode commencent par "\u", par exemple<code>\u00A9</code></li>
 <li>Les séquences d'échappement pour les points de code Unicode sont indiquées par "\u{}", par exemple <code>\u{2F804}</code></li>
 <li>Les séquences d'échappement hexadécimales commencent par "\x", par exemple <code>\xA9</code></li>
 <li>Les séquences d'échappement octales commencent par un "\0o" suivi d'un (ou plusieurs) chiffre(s), par exemple <code>\0o251</code>.</li>
</ul>

<p>Cela signifie qu'un gabarit étiqueté comme celui qui suit pose problème du fait que, selon la grammaire ECMAScript, un analyseur recherchera des séquences d'échappement Unicode valides, mais trouvera la syntaxe mal formée :</p>

<pre class="brush: js">latex`\unicode`
// Génère, dans les anciennes versions ECMAScript (ES2016 et précédentes)
// SyntaxError: malformed Unicode character escape sequence</pre>

<h4 id="Révision_ES2018_pour_les_séquences_déchappement_illégales">Révision ES2018 pour les séquences d'échappement illégales</h4>

<p>Les gabarits étiquetés doivent permettre l'intégration d'autres langages (par exemple, des <a href="https://fr.wikipedia.org/wiki/Langage_d%C3%A9di%C3%A9">DSL</a> ou du <a href="https://fr.wikipedia.org/wiki/LaTeX">LaTeX</a>), dans lesquels d'autres séquences d'échappement sont fréquentes. La proposition <a href="https://tc39.github.io/proposal-template-literal-revision/">Template Literal Revision</a> pour ECMAScript (étape 4, à intégrer dans le standard ECMAScript 2018) supprime la restriction syntaxique des séquences d'échappement dans les gabarits étiquetés.</p>

<p>Toutefois, les séquences d'échappement illégales doivent toujours être représentées dans la version "bidouillée". Elles seront affichées comme un élément {{jsxref("undefined")}} dans le tableau "bidouillé" :</p>

<pre class="brush: js">function latex(chn) {
 return { "bidouillee": chn[0], "brute": chn.raw[0] }
}

latex`\unicode`

// { bidouillee: undefined, brute: "\\unicode" }</pre>

<p>Notez que la restriction sur les séquences d'échappement est uniquement supprimée pour les gabarits <em>étiquetés</em>, et non pour les gabarits de libellés <em>non étiquetés</em> :</p>

<pre class="brush: js example-bad">let mauvaise = `mauvaise séquence d'échappement : \unicode`;</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-template-literals', 'Template Literals')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale. Définie dans plusieurs sections de la spécification : <a href="https://www.ecma-international.org/ecma-262/6.0/#sec-template-literals">Template Literals</a>, <a href="https://www.ecma-international.org/ecma-262/6.0/#sec-tagged-templates">Tagged Templates</a></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-template-literals', 'Template Literals')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>Définie dans plusieurs sections de la spécification : <a href="https://tc39.github.io/ecma262/#sec-template-literals">Template Literals</a>, <a href="https://tc39.github.io/ecma262/#sec-tagged-templates">Tagged Templates</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.grammar.template_literals")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String")}}</li>
 <li>{{jsxref("String.raw()")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale">Grammaire lexicale</a></li>
 <li><em><a href="https://gist.github.com/WebReflection/8f227532143e63649804">Template-like strings in ES3 compatible syntax</a></em></li>
 <li><a href="https://tech.mozfr.org/post/2015/05/27/ES6-en-details-%3A-les-gabarits-de-chaines-de-caracteres"><em>ES6 en détails : les gabarits de libellé</em> sur tech.mozfr.org</a></li>
 <li><em><a href="https://www.styled-components.com/">Styled Components</a></em></li>
</ul>
