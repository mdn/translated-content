---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
tags:
  - JavaScript
  - Reference
  - Statement
translation_of: Web/JavaScript/Reference/Statements/debugger
original_slug: Web/JavaScript/Reference/Instructions/debugger
---
<div>{{jsSidebar("Statements")}}</div>

<p>L'instruction <strong><code>debugger</code> </strong>permet de faire appel à un outil de débogage (qui peut par exemple permettre de placer un point d'arrêt). Si cette fonctionnalité de débogage n'est pas disponible, l'instruction n'aura aucun effet.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox"><code>debugger;</code></pre>

<h2 id="Exemples">Exemples</h2>

<p>Dans l'exemple qui suit, on utilise un code avec l'instruction <code>debugger</code> qui permet de démarrer un débogueur (s'il existe) lorsque la fonction est appelée :</p>

<pre class="brush:js">function codeProbablementBogue() {
    debugger;
    // exécuter des instructions qu'on veut
    // examiner, exécuter pas à pas etc.
}</pre>

<p>Lors que le débogueur est lancé, l'exécution est interrompue au niveau de l'instruction <code>debugger</code>. Cela agit comme un point d'arrêt dans le code du script :</p>

<p><a href="https://mdn.mozillademos.org/files/6963/Screen Shot 2014-02-07 at 9.14.35 AM.png"><img alt="Paused at a debugger statement." src="https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png"></a></p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-debugger-statement', 'Debugger statement')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES6', '#sec-debugger-statement', 'instruction debugger')}}</td>
   <td>{{Spec2('ES6')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES5.1', '#sec-12.15', 'instruction debugger')}}</td>
   <td>{{Spec2('ES5.1')}}</td>
   <td>Définition initiale</td>
  </tr>
  <tr>
   <td>{{SpecName('ES3', '#sec-7.5.3', 'instruction debugger')}}</td>
   <td>{{Spec2('ES3')}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName('ES1', '#sec-7.4.3', 'instruction debugger')}}</td>
   <td>{{Spec2('ES1')}}</td>
   <td>Uniquement mentionné comme mot-clé réservé.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("javascript.statements.debugger")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="/fr/docs/Outils/Debugger">Le débogueur des outils de développement Firefox</a></li>
</ul>
