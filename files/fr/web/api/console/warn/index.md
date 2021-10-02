---
title: Console.warn()
slug: Web/API/Console/warn
tags:
  - API
  - DOM
  - Développement
  - Méthode
  - console
  - débogage
translation_of: Web/API/Console/warn
---
<p>{{ APIRef("Console API") }}</p>

<p>Affiche un message d'avertissement dans la console web.</p>

<p>{{AvailableInWorkers}}</p>

<div class="note">
  <p><strong>Note :</strong> Dans Firefox, une icône de point d'exclamation est affichée à côté des messages d'avertissement</p>
</div>

<h2 id="Syntax">Syntaxe</h2>

<pre class="syntaxbox">console.warn(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.warn(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
</pre>

<h2 id="Paramétres">Paramétres</h2>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>Une liste d'objets JavaScript à afficher. La représentation, en chaîne de caractéres, de chacun de ces objets est affichée dans l'ordre de la liste.</dd>
 <dt><code>msg</code></dt>
 <dd>Une chaîne de caractères JavaScript contenant zéro ou plusieurs subdivisions de chaîne de caractères.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd>Une liste d'objets JavaScript qui remplace les chaînes de caractéres de <code>msg</code>. Cela vous donne plus de contrôle sur le format de sortie.</dd>
</dl>

<p>Voir <a href="/fr/docs/Web/API/console#Outputting_text_to_the_console">Outputting text to the console</a> dans la documentation de {{ domxref("console") }} pour plus de détails.</p>

<h2 id="Specification">Spécification</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("Console API", "#warn", "console.warn()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Console.warn")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
 <li><a href="http://msdn.microsoft.com/library/gg589530">MSDN: Using the F12 Tools Console to View Errors and Status</a></li>
</ul>
