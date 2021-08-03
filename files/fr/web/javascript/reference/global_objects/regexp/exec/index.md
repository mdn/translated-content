---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/exec
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/exec
---
<div>{{JSRef}}</div>

<p>La méthode <strong><code>exec()</code></strong> exécute la recherche d'une correspondance sur une chaîne de caractères donnée. Elle renvoie un tableau contenant les résultats ou {{jsxref("null")}}.</p>

<p>Si on souhaite uniquement savoir s'il y a une correspondance, on utilisera la méthode {{jsxref("RegExp.prototype.test()")}} ou la méthode {{jsxref("String.prototype.search()")}}.</p>

<div>{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}</div>



<p>Les objets représentant des expressions rationnelles gardent un état en mémoire lorsqu'ils utilisent les marqueurs {{jsxref("RegExp.global", "global")}} ou {{jsxref("RegExp.sticky", "sticky")}} et ils gardent notamment en mémoire {{jsxref("RegExp.lastIndex", "lastIndex")}} à partir de la correspondance précédemment trouvée. Ainsi, <code>exec()</code> peut être utilisée afin de parcourir plusieurs correspondances dans un texte (avec des groupes capturants) (contrairement à {{jsxref("String.prototype.match()")}}).</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><var>regexObj</var>.exec(<var>chaîne</var>)</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>chaîne</code></dt>
 <dd>La chaîne de caractères dans laquelle on recherche la correspondance décrite par l'expression rationnelle.</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>S'il y a une correspondance, la méthode <code>exec()</code> renvoie un tableau (contenant des éléments et deux propriétés <code>index</code> et <code>values</code>, cf. ci-après) et met à jour les propriétés de l'objet représentant l'expression rationnelle (notamment {{jsxref("RegExp.lastIndex", "lastIndex")}}). Le tableau renvoyé contient le texte qui correspond dans le premier élément puis un élément pour chaque groupe capturé dans les parenthèses capturantes.</p>

<p>S'il n'y a aucune correspondance, la méthode <code>exec()</code> renvoie {{jsxref("null")}} et la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} reçoit la valeur 0.</p>

<h2 id="Description">Description</h2>

<p>Si on a l'exemple suivant :</p>

<pre class="brush: js">// On a une correspondance si on a "quick brown" suivi par "jumps", on ignore les caractères entre
// On garde en mémoire "brown" et "jumps"
// On ignore la casse
var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
</pre>

<p>Le tableau suivant montre l'état résultant suite à ce script :</p>

<table class="fullwidth-table">
 <tbody>
  <tr>
   <td class="header">Objet</td>
   <td class="header">Propriété/Index</td>
   <td class="header">Description</td>
   <td class="header">Exemple</td>
  </tr>
  <tr>
   <td rowspan="4"><code>result</code></td>
   <td><code>[0]</code></td>
   <td>La chaîne complète des caractères qui correspondent.</td>
   <td><code>"Quick Brown Fox Jumps"</code></td>
  </tr>
  <tr>
   <td><code>[1], ...[<em>n</em> ]</code></td>
   <td>Les sous-chaînes correspondantes aux groupes capturants s'il y en a. Le nombre de groupes de parenthèses capturantes est illimité.</td>
   <td><code>result[1] === "Brown"<br>
    result[2] === "Jumps"</code></td>
  </tr>
  <tr>
   <td><code>index</code></td>
   <td>L'indice (compté à partir de 0) de la correspondance dans la chaîne.</td>
   <td><code>4</code></td>
  </tr>
  <tr>
   <td><code>input</code></td>
   <td>La chaîne de caractères utilisée en entrée.</td>
   <td><code>"The Quick Brown Fox Jumps Over The Lazy Dog"</code></td>
  </tr>
  <tr>
   <td rowspan="5"><code>re</code></td>
   <td><code>lastIndex</code></td>
   <td>L'indice à partir duquel chercher la prochaine correspondance. Lorsque le drapeau "g" est absent, cette propriété sera 0.</td>
   <td><code>25</code></td>
  </tr>
  <tr>
   <td><code>ignoreCase</code></td>
   <td>Indique si le drapeau "<code>i</code>" a été utilisé pour ignorer la casse.</td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>global</code></td>
   <td>Indique si le drapeau "<code>g</code>" a été utilisé pour la correspondance globale.</td>
   <td><code>true</code></td>
  </tr>
  <tr>
   <td><code>multiline</code></td>
   <td>Indique si le drapeau "<code>m</code>" a été utilisé pour chercher une correspondance sur plusieurs lignes.</td>
   <td><code>false</code></td>
  </tr>
  <tr>
   <td><code>source</code></td>
   <td>Le texte du motif.</td>
   <td><code>"quick\s(brown).+?(jumps)"</code></td>
  </tr>
 </tbody>
</table>

<h2 id="Exemples">Exemples</h2>

<h3 id="Trouver_des_correspondances_successives">Trouver des correspondances successives</h3>

<p>Si on utilise le drapeau "<code>g</code>" dans l'expression rationnelle, on peut utiliser la méthode <code>exec()</code> plusieurs fois afin de trouver les correspondances successives dans la chaîne. Lorsqu'on procède ainsi, la recherche reprend à la position indiquée par la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} ({{jsxref("RegExp.prototype.test()", "test()")}} fera également progresser la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}}).</p>

<p>On notera que la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} ne sera pas réinitialisée lors de la recherche sur une autre chaîne de caractères, c'est la valeur existante de {{jsxref("RegExp.lastIndex", "lastIndex")}} qui sera utilisée.</p>

<p>Par exemple, si on utilise le fragment de code suivant :</p>

<pre class="brush: js">var maRegex = /ab*/g;
var str = 'abbcdefabh';
var monTableau;
while ((monTableau = maRegex.exec(str)) !== null) {
  var msg = 'Trouvé ' + monTableau[0] + '. ';
  msg += 'Prochaine correspondance à partir de ' + maRegex.lastIndex;
  console.log(msg);
}
</pre>

<p>Le script affichera alors :</p>

<pre>Trouvé abb. Prochaine correspondance à partir de 3
Trouvé ab. Prochaine correspondance à partir de 9
</pre>

<div class="warning">
<p><strong>Attention :</strong> Il ne faut pas placer un littéral d'expression rationnelle (ou le constructeur {{jsxref("RegExp")}}) au sein de la condition <code>while</code> car cela créerait un boucle infinie s'il y a une correspondance car la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} serait redéfinie à chaque itération. Il faut également s'assurer que le drapeau global est défini sinon on aura également une boucle.</p>
</div>

<h3 id="Utiliser_exec()_avec_des_littéraux">Utiliser <code>exec()</code> avec des littéraux</h3>

<p>Il est aussi possible d'utiliser <code>exec()</code> sans créer d'objet {{jsxref("RegExp")}} explicite :</p>

<pre class="brush: js">var matches = /(coucou \S+)/.exec('Ceci est un coucou monde !');
console.log(matches[1]);
</pre>

<p>Cela affichera 'coucou monde !'.</p>

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
   <td>{{SpecName('ES3')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td>Définition initiale. Implémentée avec JavaScript 1.2.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-15.10.6.21', 'RegExp.exec')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-regexp.prototype.exec', 'RegExp.exec')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-regexp.prototype.exec', 'RegExp.exec')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.builtins.RegExp.exec")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Le chapitre sur <a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières">les expressions rationnelles</a> du <a href="/fr/docs/Web/JavaScript/Guide">Guide JavaScript</a></li>
 <li>{{jsxref("RegExp")}}</li>
 <li>{{jsxref("String.prototype.match()")}}</li>
 <li>{{jsxref("String.prototype.matchAll()")}}</li>
</ul>
