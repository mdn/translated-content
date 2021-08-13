---
title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/parseInt
tags:
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/parseInt
original_slug: Web/JavaScript/Reference/Objets_globaux/parseInt
---
<div>{{jsSidebar("Objects")}}</div>

<p>La fonction <code><strong>parseInt()</strong></code> analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée.</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-parseint.html")}}</div>



<div class="warning">
<p><strong>Attention :</strong> On veillera à bien utiliser le second paramètre de la fonction pour éviter toute ambiguité sur la base numérique utilisée.</p>
</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">parseInt(<var>string</var>, <var>base</var>);</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>string</code></dt>
 <dd>La valeur qu'on souhaite analyser et convertir. Si l'argument <code>string</code> n'est pas une chaîne de caractères, elle sera convertie en une chaîne (grâce à l'opération abstraite <code><a href="https://www.ecma-international.org/ecma-262/6.0/#sec-tostring">ToString</a></code>) . Les blancs contenus au début de l'argument sont ignorés.</dd>
 <dt><code>base</code></dt>
 <dd>
 <p>Un entier compris entre 2 et 36 qui représente la <a href="https://fr.wikipedia.org/wiki/Base_%28arithm%C3%A9tique%29">base</a> utilisée pour la valeur représentée dans la chaîne. La base communément utilisée est la base décimale et on utilisera donc <code>10</code> dans ce cas pour ce paramètre.</p>

 <div class="warning"><p><strong>Attention :</strong>La base par défaut n'est pas 10. Ce paramètre doit toujours être utilisé, en effet s'il n'est pas spécifié, le comportement de la fonction n'est pas garanti et peut varier d'une plate-forme à une autre.</p></div>

 <p>Voir cependant la description ci-après qui explicite le comportement par défaut attendu.</p>
 </dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Un entier obtenu à partir de l'analyse de la chaîne de caractères. Si le premier caractère ne permet d'obtenir un nombre d'après la base fournie, ce sera {{jsxref("NaN")}} qui sera renvoyé.</p>

<h2 id="Description">Description</h2>

<p>La fonction <code>parseInt()</code> convertit le premier argument en une chaîne, l'analyse et renvoie un entier ou <code>NaN</code>. Si la valeur renvoyée n'est pas <code>NaN</code>, ce sera l'entier représentant le nombre contenu dans la chaîne dans la base donnée. Une base 10 est utilisée pour la base décimale, 8 pour la base octale, 16 pour la base hexadécimale. Pour les bases supérieures à <code>10</code>, les lettres de l'alphabet latin seront utilisées pour représenter les chiffres supérieurs à <code>9</code>. Par exemple, pour la base hexadécimale, on utilisera les lettres <code>A</code> à <code>F</code>.</p>

<p>Si, lors de l'analyse de la chaîne, <code>parseInt()</code> rencontre un caractère qui n'est pas un chiffre dans la base donnée, ce caractère, ainsi que les suivants seront ignorés. <code>parseInt()</code> tronque les nombres fournies en valeurs entières (attention donc lorsque les chaînes utilisent une notation scientifique : "4e2" donnera la valeur 4 en base 10 et pas 400). Les espaces en début et en fin de chaîne sont autorisés.</p>

<p>Si la base fournie vaut {{jsxref("undefined")}} ou 0 (ou si elle n'est pas utilisée comme paramètre), le moteur JavaScript procèdera comme suit :</p>

<ul>
 <li>Si l'argument <code>string</code> commence avec "0x" ou "0X", la base considérée sera la base 16 (hexadécimale) et le reste de la chaîne sera analysé et converti.</li>
 <li>Si l'argument <code>string</code> commence avec "0", la base considérée sera la base 8 (octale) ou la base 10 (décimale). La base exacte qui sera choisie dépendra de l'implémentation. ECMAScript 5 définit que la base 10 doit être utilisée. Cependant, cela n'est pas supporté par tous les navigateurs. C'est pour cette raison qu'il faut <strong>toujours spécifier une base lorsqu'on utilise <code>parseInt()</code></strong>.</li>
 <li>Si l'argument <code>string</code> commence avec une autre valeur, la base considérée sera la base 10.</li>
</ul>

<p>Si le premier caractère de la chaîne de caractères ne peut pas être converti, <code>parseInt()</code> renverra <code>NaN</code>.</p>

<p>Pour des raisons arithmétiques, la valeur {{jsxref("NaN")}} n'est un nombre pour aucune base. La fonction {{jsxref("Objets_globaux/isNaN", "isNaN()")}} peut être utilisée pour déterminer si le résultat obtenu par <code>parseInt()</code> vaut <code>NaN</code>. Si <code>NaN</code> est utilisé dans une opération arithmétique, le résultat de cette opération sera aussi <code>NaN</code> (on dit que <code>NaN</code> est une valeur « toxique »).</p>

<p>Pour convertir un nombre en une chaîne de caractères dans une base donnée, on utilisera <code>monEntier.toString(base)</code>.</p>

<p><code>parseInt</code> convertira les valeurs {{jsxref("BigInt")}} en {{jsxref("Number")}} et de la précision sera perdue lors de ce traitement.</p>

<h2 id="Exemples">Exemples</h2>

<p>Les exemples suivants renvoient tous <strong><code>15</code></strong> :</p>

<pre class="brush: js">parseInt("0xF", 16);
parseInt("F", 16);
parseInt("17", 8);
parseInt(021, 8);
parseInt("015", 10); // attention parseInt(015, 10); renvoie 13
parseInt(15.99, 10);
parseInt("15,123", 10);
parseInt("FXX123", 16);
parseInt("1111", 2);
parseInt("15*3", 10);
parseInt("15e2", 10);
parseInt("15px", 10);
parseInt("12", 13);
</pre>

<p>Les exemples suivants renvoient <strong><code>NaN</code></strong> :</p>

<pre class="brush: js">parseInt("Coucou", 8); // Ce sont des lettres et pas des chiffres
parseInt("546", 2);    // Ces chiffres ne sont pas valides pour une représentation
                       // binaire
</pre>

<p>Les exemples suivants renvoient tous <strong><code>-15</code></strong> :</p>

<pre class="brush: js">parseInt("-F", 16);
parseInt("-0F", 16);
parseInt("-0XF", 16);
parseInt(-15.1, 10)
parseInt("-17", 8);
parseInt("-15", 10);
parseInt("-1111", 2);
parseInt("-15e1", 10);
parseInt("-12", 13);
</pre>

<p>Les exemples suivants renvoient tous <code><strong>4</strong></code> :</p>

<pre class="brush: js">parseInt("4e2", 10);
parseInt("4.7", 10);</pre>

<p>L'exemple suivant renvoie  <strong><code>224</code></strong> :</p>

<pre class="brush: js">parseInt("0e0", 16);
</pre>

<p>On perdra en précision si on manipule un grand entier ({{jsxref("BigInt")}}) :</p>

<pre class="brush: js">parseInt(900719925474099267n); // 900719925474099300</pre>

<h2 id="Interpréter_une_base_octale_quand_aucun_paramètre_de_base_n'est_fourni">Interpréter une base octale quand aucun paramètre de base n'est fourni</h2>

<p>Bien que cela soit fortement déconseillé par ECMAScript 3 et que cela soit interdit par ECMAScript 5, de nombreuses implémentations interprètent une chaîne numérique qui commence par <code>0</code> comme une valeur exprimée dans la base octale. Les instructions qui suivent peuvent avoir un résultat octal ou décimal selon les implémentations. <strong>Pour cette raison, il faut toujours définir une base lorsqu'on utilise cette fonction.</strong></p>

<pre class="brush: js">parseInt("0e0"); // 0
parseInt("08");  // 0, '8' n'est pas un chiffre octal.
</pre>

<h3 id="ECMAScript_5_supprime_l'interprétation_octale">ECMAScript 5 supprime l'interprétation octale</h3>

<p>La spécification ECMAScript 5 indique, au sujet de la fonction <code>parseInt()</code>, que les valeurs commençant par <code>0</code> ne doivent plus être considérées comme des valeurs octales. ECMAScript 5 indique :</p>

<p>La fonction <code>parseInt</code> produit une valeur entière définie par le contenu de la chaîne selon la base fournie. Les blancs en début de chaîne sont ignorés. Si la base spécifiée est <code>0</code>, la base décimale sera prise en compte sauf si le nombre représenté commence par la paire de caractères <code>0x</code> ou <code>0X</code> auquel cas la base 16 sera prise en compte.</p>

<p>Sur cet aspect, ECMAScript 3 diffère car il permet l'interprétation octale (bien qu'il la déconseille).</p>

<p>De nombreuses implémentations n'ont pas adopté ce comportement en 2013. Pour cette raison (les anciens environnements et navigateurs doivent être supportés), il faut <strong>toujours définir le paramètre pour la base</strong>.</p>

<h2 id="Une_fonction_plus_stricte">Une fonction plus stricte</h2>

<p>Il est parfois utile d'avoir une fonction de conversion plus stricte. Pour cela, on peut utiliser une expression rationnelle :</p>

<pre class="brush: js">filterInt = function (value) {
  if (/^(-|\+)?(\d+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

console.log(filterInt('421'));               // 421
console.log(filterInt('-421'));              // -421
console.log(filterInt('+421'));              // 421
console.log(filterInt('Infinity'));          // Infinity
console.log(filterInt('421e+0'));            // NaN
console.log(filterInt('421hop'));            // NaN
console.log(filterInt('hop1.61803398875'));  // NaN
console.log(filterInt('1.61803398875'));     // NaN
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
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.1.2.2', 'parseInt')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-parseint-string-radix', 'parseInt')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-parseint-string-radix', 'parseInt')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.parseInt")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("Objets_globaux/parseFloat", "parseFloat()")}}</li>
 <li>{{jsxref("Number.parseFloat()")}}</li>
 <li>{{jsxref("Number.parseInt()")}}</li>
 <li>{{jsxref("Objets_globaux/isNaN", "isNaN()")}}</li>
 <li>{{jsxref("Number.toString()")}}</li>
 <li>{{jsxref("Object.valueOf")}}</li>
</ul>
