---
title: String.prototype.substring()
slug: Web/JavaScript/Reference/Global_Objects/String/substring
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/substring
original_slug: Web/JavaScript/Reference/Objets_globaux/String/substring
---
<div>{{JSRef}}</div>

<p>La méthode <code><strong>substring()</strong></code> retourne une sous-chaîne de la chaîne courante, entre un indice de début et un indice de fin.</p>

<div>{{EmbedInteractiveExample("pages/js/string-substring.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>str</var>.substring(<var>indiceA</var>[, <var>indiceB</var>])</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>indiceA</code></dt>
 <dd>Un entier compris entre 0 et la longueur de la chaîne.</dd>
 <dt><code>indiceB</code></dt>
 <dd>Paramètre optionnel : un entier compris entre 0 et la longueur de la chaine.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Une nouvelle chaîne de caractères qui correspond à la section souhaitée de la chaîne appelante.</p>

<h2 id="Description">Description</h2>

<p><code>substring</code> extrait des caractères de la chaîne courante à partir de <code>indiceA</code> jusqu'à <code>indiceB</code> (non compris). On a notamment :</p>

<ul>
 <li>Si <code>indiceA</code> est égal à <code>indiceB</code>, <code>substring</code> retournera une chaîne vide.</li>
 <li>Si <code>indiceB</code> est omis, <code>substring</code> effectuera l'extraction des caractères jusqu'à la fin de la chaîne.</li>
 <li>Si l'un des deux arguments est négatif ou vaut {{jsxref("NaN")}}, il sera traité comme 0.</li>
 <li>Si l'un des deux arguments est plus grand que <code>str.length</code>, il sera traité comme <code>str.length</code>.</li>
</ul>

<p>Si <code>indiceA</code> est supérieur à <code>indiceB</code>, la fonction <code>substring()</code> intervertira ces deux valeurs afin de les traiter comme si elles avaient été passées dans le bon ordre. Par exemple : <code><var>str</var>.substring(1, 0) == <var>str</var>.substring(0, 1)</code>.</p>

<h2 id="Exemples">Exemples</h2>

<h3 id="Utiliser_substring()">Utiliser <code>substring()</code></h3>

<p>Les exemples suivants utilisent la méthode <code>substring()</code> pour extraire et afficher des caractères à partir de la chaine "<code>Mozilla</code>" :</p>

<pre class="brush:js">var uneChaîne = "Mozilla";

// Affiche "Moz"
console.log(uneChaîne.substring(0,3));
console.log(uneChaîne.substring(3,0));

// Affiche "lla"
console.log(uneChaîne.substring(4,7));
console.log(uneChaîne.substring(4));
console.log(uneChaîne.substring(7,4));

// Affiche "Mozill"
console.log(uneChaîne.substring(0,6));

// Affiche "Mozilla"
console.log(uneChaîne.substring(0,7));
console.log(uneChaîne.substring(0,10));
</pre>

<h3 id="Remplacer_une_sous-chaîne_dans_une_chaîne">Remplacer une sous-chaîne dans une chaîne</h3>

<p>L'exemple suivant remplace une partie d'une chaine. Elle remplace à la fois les caractères individuels et les sous-chaines. La fonction appelée à la fin de cet exemple transforme la chaine "<code>Brave New World</code>" en "<code>Brave New Web</code>".</p>

<pre class="brush:js">function replaceString(oldS, newS, fullS) {
// On remplace oldS avec newS dans fullS
  for (var i = 0; i &lt; fullS.length; i++) {
    if (fullS.substring(i, i + oldS.length) == oldS) {
     fullS = fullS.substring(0, i) + newS + fullS.substring(i + oldS.length, fullS.length);
    }
  }
  return fullS;
}

replaceString("World", "Web", "Brave New World");</pre>

<p>Attention : ceci peut résulter en une boucle infinie si <code>oldS</code> est elle-même une sous-chaine de <code>newS</code> -- par exemple, si on essaie de remplacer "World" par "OtherWorld". Une meilleure solution serait de remplacer les chaines de cette manière :</p>

<pre class="brush:js">function replaceString(oldS, newS,fullS){
  return fullS.split(oldS).join(newS);
}</pre>

<p>Le code ci-dessus sert d'exemple pour les opérations sur les sous-chaines. S'il est nécessaire de remplacer des sous-chaines, la plupart du temps il faudrait préférer l'utilisation de {{jsxref("String.prototype.replace()")}}.</p>

<h3 id="Différence_entre_substring()_et_substr()">Différence entre <code>substring()</code> et <code>substr()</code></h3>

<p>Il existe une légère différence entre les méthodes <code>substring()</code> et {{jsxref("String.substr", "substr()")}}. Les deux ne doivent pas être confondues.</p>

<p>Les arguments de la méthode <code>substring()</code> représentent les indices de début et de fin sur la chaîne. Pour <code>substr()</code>, les arguments représentent l'indice de début et le nombre de caractères à utiliser pour la chaîne résultante.</p>

<pre class="brush: js">var texte = "Mozilla";
console.log(texte.substring(2,5)); // =&gt; "zil"
console.log(texte.substr(2,3)); // =&gt; "zil"
</pre>

<h3 id="Différences_entre_substring()_et_slice()">Différences entre <code>substring()</code> et <code>slice()</code></h3>

<p>Les méthodes <code>substring()</code> et {{jsxref("String.slice", "slice()")}} sont très proches mais certaines différences les distinguent, notamment la façon de gérer les arguments négatifs.</p>

<p>La méthode <code>substring()</code> échangera les deux arguments si <code>indiceA</code> est supérieur à <code>indiceB</code> et renverra donc une chaîne de caractères. La méthode {{jsxref("String.slice", "slice()")}} n'échange pas les arguments et renvoie donc une chaîne vide si le premier est supérieur au second :</p>

<pre class="brush: js">var text = 'Mozilla';
console.log(text.substring(5, 2)); // =&gt; "zil"
console.log(text.slice(5, 2));     // =&gt; ""
</pre>

<p>Si l'un ou l'autre des arguments sont négatifs ou valent <code>NaN</code>, la méthode <code>substring()</code> les traitera comme s'ils valaient <code>0</code>.</p>

<pre class="brush: js">console.log(text.substring(-5, 2)); // =&gt; "Mo"
console.log(text.substring(-5, -2)); // =&gt; ""
</pre>

<p><code>slice()</code> traite également <code>NaN</code> comme <code>0</code>, mais parcourt la chaîne à partir de la fin lorsque des arguments négatifs sont utilisés.</p>

<pre class="brush: js">console.log(text.slice(-5, 2)); // =&gt; ""
console.log(text.slice(-5, -2)); // =&gt; "zil"
</pre>

<p>Pour plus d'exemples sur l'utilisation d'arguments négatifs, voir la page {{jsxref("String.slice", "slice()")}}.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">État</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES1')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Implémentée avec JavaScript 1.0.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.5.4.15', 'String.prototype.substring')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-string.prototype.substring', 'String.prototype.substring')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-string.prototype.substring', 'String.prototype.substring')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.String.substring")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("String.prototype.substr()")}} {{deprecated_inline}}</li>
 <li>{{jsxref("String.prototype.slice()")}}</li>
</ul>
