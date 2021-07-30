---
title: yield
slug: Web/JavaScript/Reference/Operators/yield
tags:
  - ECMAScript 2015
  - Générateurs
  - Itérateur
  - JavaScript
  - Opérateur
translation_of: Web/JavaScript/Reference/Operators/yield
original_slug: Web/JavaScript/Reference/Opérateurs/yield
---
<div>{{jsSidebar("Operators")}}</div>

<p>Le mot-clé <code>yield</code> est utilisé pour suspendre et reprendre une fonction génératrice ({{jsxref("Statements/function*", "function*")}} ou <a href="/fr/docs/Web/JavaScript/Reference/Statements/Legacy_generator_function">une fonction génératrice historique</a>).</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-yield.html")}}</div>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><em>[[rv =]]</em> yield [[<em>expression</em>]];</pre>

<dl>
 <dt><code>expression</code></dt>
 <dd>Définit la valeur à retourner depuis la fonction génératrice via <a href="/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration#Le_protocole_«_itérateur_»">le protocole itérateur</a>. Si omise, <code>undefined</code> sera retournée à la place.</dd>
 <dt><code>rv</code></dt>
 <dd>Retourne la valeur optionnelle passée à la méthode <code>next()</code> pour reprendre son exécution.</dd>
</dl>

<h2 id="Description">Description</h2>

<p>Le mot-clé <code>yield</code> suspend une fonction génératrice et la valeur de l'expression suivant le mot-clé <code>yield</code> est retournée à l'appelant du générateur. Il peut être vu comme une version générateur du mot-clé <code>return</code>.</p>

<p>Le mot-clé <code>yield</code> ne peut être appelé qu'à partir de la fonction génératrice qui le contient. Il ne peut pas être utilisé depuis des fonctions imbriquées ou avec des <em>callbacks</em>.</p>

<p>Le mot-clé <code>yield</code> retourne en fait un objet <code>IteratorResult</code> ayant deux propriétés, <code>value</code> et <code>done.</code> La propriété <code>value</code> est le résultat de l'évaluation de l'expression <code>yield</code>, et <code>done</code> est <code>false</code>, indiquant que la fonction génératrice n'est pas complètement terminée.</p>

<p>Une fois suspendue sur une expression <code>yield</code>, l'exécution du code du générateur reste suspendue jusqu'à ce que la méthode <code>next()</code> du générateur soit appelée. Chaque fois que la méthode <code>next()</code> du générateur est appelée, le générateur reprend l'exécution et s'exécute jusqu'à ce qu'elle atteigne l'une des situations suivantes :</p>

<ul>
 <li>
  <p>un <code>yield</code>, ce qui provoque une nouvelle pause du générateur et retourne la nouvelle valeur du générateur ; la prochaine fois que <code>next()</code> sera appelé, l'exécution reprendra à l'instruction immédiatement après le <code>yield</code> ;</p>
 </li>
 <li>
  <p>{{jsxref ("Statements/throw", "throw")}} est utilisé pour déclencher une exception depuis le générateur ; cela arrête entièrement l'exécution du générateur et l'exécution reprend dans l'appelant, comme c'est normalement le cas lorsqu'une exception est déclenchée ;</p>
 </li>
 <li>
  <p>la fin de la fonction génératrice est atteinte ; dans ce cas, l'exécution du générateur se termine et un <code>IteratorResult</code> est retourné à l'appelant, dans lequel la valeur est {{jsxref ("undefined")}} et <code>done</code> est <code>true</code> ;</p>
 </li>
 <li>
  <p>une instruction {{jsxref ("Statements/return", "return")}} est atteinte ; dans ce cas, l'exécution du générateur se termine et un <code>IteratorResult</code> est retourné à l'appelant dans lequel la <code>value</code> est la valeur spécifiée par l'instruction <code>return</code> et <code>done</code> vaut <code>true</code>.</p>
 </li>
</ul>

<p>Si une valeur optionnelle est passée à la méthode <code>next()</code> du générateur, cette valeur devient la valeur retournée par l'opération <code>yield</code> en cours du générateur.</p>

<p>Entre le chemin de code du générateur, ses opérateurs <code>yield</code>, et la possibilité de spécifier une nouvelle valeur de départ en la passant à {{jsxref ("Generator.prototype.next()")}}, les générateurs offrent énormément de puissance et de contrôle.</p>

<h2 id="Exemples">Exemples</h2>

<p>Le code suivant est la déclaration d'un exemple de fonction génératrice :</p>

<pre><code>function* compteVentesPommes () {
  var listeVentes = [3, 7, 5];
  for (var i = 0; i &lt; listeVentes.length; i++) {
    yield listeVentes[i];
  }
}</code></pre>

<p>Une fois qu'une fonction génératrice est définie, elle peut être utilisée en construisant un itérateur comme indiqué.</p>

<pre><code>var magasinPommes = compteVentesPommes(); // Générateur { }
console.log(magasinPommes.next()); // { value: 3, done: false }
console.log(magasinPommes.next()); // { value: 7, done: false }
console.log(magasinPommes.next()); // { value: 5, done: false }
console.log(magasinPommes.next()); // { value: undefined, done: true }</code></pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ES2015', '#prod-YieldExpression', 'Yield')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Définition initiale.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#prod-YieldExpression', 'Yield')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.operators.yield")}}</p>

<h2 id="Notes_spécifiques_à_Firefox">Notes spécifiques à Firefox</h2>

<ul>
 <li>À partir de Gecko 29 {{geckoRelease(29)}}, une fonction génératrice terminée ne déclenche plus une {{jsxref("TypeError")}} "generator has already finished". À la place, elle renvoie un objet <code>IteratorResult</code> tel que <code>{ value: undefined, done: true }</code> ({{bug(958951)}}).</li>
 <li>À partir de Gecko 33 {{geckoRelease(33)}}, l'analyse de l'expression <code>yield</code> a été mise à jour afin d'être conforme aux spécifications ES2015 ({{bug(981599)}}):
  <ul>
   <li>L'expression après le mot-clé <code>yield</code> est optionnelle et l'omettre ne déclenche plus une {{jsxref("SyntaxError")}} : <code>function* compteVentesPommes() { yield; }</code></li>
  </ul>
 </li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Web/JavaScript/Guide/Le_protocole_iterator">Le protocole itérateur</a></li>
 <li>L'instruction {{jsxref("Instructions/function*", "function*")}}</li>
 <li>L'expression {{jsxref("Opérateurs/function*", "function*")}}</li>
 <li>L'opérateur {{jsxref("Opérateurs/yield*", "yield*")}}</li>
</ul>
