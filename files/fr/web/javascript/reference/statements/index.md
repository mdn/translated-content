---
title: Instructions
slug: Web/JavaScript/Reference/Statements
tags:
  - JavaScript
  - Reference
  - statements
translation_of: Web/JavaScript/Reference/Statements
original_slug: Web/JavaScript/Reference/Instructions
---
<div>{{jsSidebar("Statements")}}</div>

<p>Les applications JavaScript sont composées de plusieurs instructions organisées grâce à une syntaxe. Une instruction peut s'étaler sur plusieurs lignes et on peut avoir plusieurs instructions sur une seule ligne si chaque instruction est séparée de la suivante par un point-virgule.</p>

<h2 id="Instructions_et_déclarations_par_catégorie">Instructions et déclarations, par catégorie</h2>

<p>Pour une liste alphabétique, voir le volet de navigation situé à gauche sur cette page.</p>

<h3 id="Contrôle_du_flux">Contrôle du flux</h3>

<dl>
 <dt>{{jsxref("Instructions/bloc", "Bloc")}}</dt>
 <dd>Une instruction de bloc est utilisée pour regrouper zéro ou plusieurs instructions. Un bloc est délimité par une paire d'accolades.</dd>
 <dt>{{jsxref("Instructions/break", "break")}}</dt>
 <dd>Cette instruction termine la boucle ou l'instruction <code>switch</code> ou l'instruction <code>label</code> en cours et continue l'exécution sur l'instruction suivant l'instruction terminée.</dd>
 <dt>{{jsxref("Instructions/continue", "continue")}}</dt>
 <dd>Cette instruction termine l'exécution des instructions dans la boucle courante, ou la boucle avec une étiquette correspondante, et continue l'exécution de la boucle dans l'itération suivante.</dd>
 <dt>{{jsxref("Instructions/vide", "Vide")}}</dt>
 <dd>Une instruction vide est utilisée pour ne fournir aucune instruction là où JavaScript en attendrait une.</dd>
 <dt>{{jsxref("Instructions/if...else","if...else")}}</dt>
 <dd>Cette instruction exécute une instruction si une condition donnée est vérifiée. Si la condition n'est pas vérifiée une autre instruction pourra être exécutée.</dd>
 <dt>{{jsxref("Instructions/switch", "switch")}}</dt>
 <dd>Cette instruction permet d'évaluer une expression et de faire correspondre le résultat de cette expression avec différents cas et d'exécuter les instructions associées aux cas qui ont chacun un identifiant.</dd>
 <dt>{{jsxref("Instructions/throw", "throw")}}</dt>
 <dd>Cette instruction lève une exception.</dd>
 <dt>{{jsxref("Instructions/try...catch","try...catch")}}</dt>
 <dd>Cette instruction permet de spécifier un ensemble d'instructions à tenter, et de préciser le traitement à effectuer dans le cas où une exception est produite.</dd>
</dl>

<h3 id="Déclarations">Déclarations</h3>

<dl>
 <dt>{{jsxref("Instructions/var", "var")}}</dt>
 <dd>
 <p>Cette instruction permet de déclarer une variable, éventuellement en fournissant une valeur pour permettant de l'initialiser.</p>
 </dd>
 <dt>{{jsxref("Instructions/let", "let")}}</dt>
 <dd>Cette instruction permet de déclarer une variable locale dans une portée d'un bloc et éventuellement d'initialiser sa valeur.</dd>
 <dt>{{jsxref("Instructions/const", "const")}}</dt>
 <dd>Cette instruction déclare une constante en lecture seule.</dd>
</dl>

<h3 id="Fonctions_et_classes">Fonctions et classes</h3>

<dl>
 <dt>{{jsxref("Instructions/function", "function")}}</dt>
 <dd>Cette instruction déclare une fonction avec les paramètres donnés.</dd>
 <dt>{{jsxref("Instructions/function*", "function*")}}</dt>
 <dd>Les fonctions génératrices permettent de créer des <a href="/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator">itérateurs</a> plus simplement.</dd>
 <dt>{{experimental_inline}} {{jsxref("Instructions/async_function", "async function")}}</dt>
 <dd>Cette instruction déclare une fonction asynchrone avec les paramètres associés.</dd>
 <dt>{{jsxref("Instructions/return", "return")}}</dt>
 <dd>Cette instruction spécifie la valeur de retour renvoyée par une fonction.</dd>
 <dt>{{jsxref("Instructions/class", "class")}}</dt>
 <dd>Déclare une classe.</dd>
</dl>

<h3 id="Itérations">Itérations</h3>

<dl>
 <dt>{{jsxref("Instructions/do...while", "do...while")}}</dt>
 <dd>Cette instruction crée une boucle qui s'exécute tant que la condition est vraie. La condition est évaluée après avoir exécuté une itération de boucle, ce qui fait que cette boucle sera exécutée au moins une fois.</dd>
 <dt>{{jsxref("Instructions/for", "for")}}</dt>
 <dd>Cette instruction crée une boucle qui se base sur trois expressions facultatives. Ces expressions sont entre parenthèses, séparées par des points virgules et suivies par l'instruction à exécuter dans la boucle.</dd>
 <dt>{{jsxref("Instructions/for_each...in", "for each...in")}} {{deprecated_inline}} {{non-standard_inline}}</dt>
 <dd>Cette instruction itère une variable donnée sur toutes les propriétés d'un objet. Pour chaque propriété distincte, une instruction spécifique est exécutée.</dd>
 <dt>{{jsxref("Instructions/for...in", "for...in")}}</dt>
 <dd>Cette instruction effectue, dans un ordre arbitraire, une boucle sur les propriétés énumérables d'un objet. Pour chacune des différentes propriétés, des instructions peuvent être exécutées.</dd>
 <dt>{{jsxref("Instructions/for...of", "for...of")}}</dt>
 <dd>Cette instruction parcourt les objets sur lesquels on peut itérer (comme les tableaux, les <a href="/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs">itérateurs et générateurs</a>). Pour ce faire, elle utilise un mécanisme d'itération sur mesure utilisant des instructions à exécuter pour chacune des différentes propriétés.</dd>
 <dt>{{jsxref("Instructions/for-await...of","for await...of")}}</dt>
 <dd>Cette instruction parcourt les objets itérables asynchrones tels que les tableaux, les <a href="/fr/docs/Web/JavaScript/Guide/iterateurs_et_generateurs">itérateurs et générateurs</a>. Elle utilise un mécanisme d'itération spécifique et des instructions sont exécutées pour la valeur de chaque propriété.</dd>
 <dt>{{jsxref("Instructions/while", "while")}}</dt>
 <dd>Cette instruction permet de créer une boucle qui s'exécute tant qu'une condition de test est vérifiée. La condition est évaluée avant d'exécuter l'instruction contenue dans la boucle.</dd>
</dl>

<h3 id="Autres">Autres</h3>

<dl>
 <dt>{{jsxref("Instructions/debugger", "debugger")}}</dt>
 <dd>Cette instruction appelle une fonctionnalité de débogage. Si aucune fonctionnalité de débogage n'est disponible, l'instruction n'a aucun effet.</dd>
 <dt>{{jsxref("Instructions/export", "export")}}</dt>
 <dd>Cette instruction permet à un script signé de fournir des propriétés, fonctions et des objets à d'autres scripts (signés ou non).</dd>
 <dt>{{jsxref("Instructions/import", "import")}}</dt>
 <dd>Cette instruction permet à un script d'importer des propriétés, fonctions ou objets depuis un script qui les exporte.</dd>
 <dt><a href="/fr/docs/Web/JavaScript/Reference/Instructions/import.meta"><code>import.meta</code></a></dt>
 <dd>Une méta propriété qui expose des métadonnées à propos du module JavaScript.</dd>
 <dt>{{jsxref("Instructions/label", "label")}}</dt>
 <dd>Cette instruction fournit un identifiant auquel il est possible de se référer en utilisant une instruction <code>break</code> ou <code>continue</code>.</dd>
 <dt>{{jsxref("Instructions/with", "with")}} {{deprecated_inline}}</dt>
 <dd>Cette instruction permet d'étendre la portée chaînée d'une instruction.</dd>
</dl>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-12', 'Statements')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-12', 'Statements')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12', 'Statements')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-ecmascript-language-statements-and-declarations', 'ECMAScript Language: Statements and Declarations')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td>Nouveaux éléments : <code>function*</code>, <code>let</code>, <code>for...of</code>, <code>yield</code>, <code>class</code></td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-ecmascript-language-statements-and-declarations', 'ECMAScript Language: Statements and Declarations')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>Le chapitre de cette référence sur les <a href="/fr/docs/JavaScript/Reference/Op%C3%A9rateurs">opérateurs JavaScript</a>.</li>
</ul>