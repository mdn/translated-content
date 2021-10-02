---
title: Console.debug()
slug: Web/API/Console/debug
tags:
  - API
  - Développement
  - Méthodes
  - Web
  - console
  - débogage
  - outils de développement
translation_of: Web/API/Console/debug
---
<div>{{APIRef("Console API")}}</div>

<p>Affiche un message dans la console web, avec le niveau de log "debug". Le message est affiché uniquement si la console est configurée pour afficher les messages de type debug.</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">console.debug(<em>obj1</em> [, <em>obj2</em>, ..., <em>objN</em>]);
console.debug(<em>msg</em> [, <em>subst1</em>, ..., <em>substN</em>]);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>obj1</code> ... <code>objN</code></dt>
 <dd>Une liste d'objets JavaScript à afficher. La représentation, en chaîne de caractères, de chacun de ces objets est affichée dans l'ordre de la liste.</dd>
 <dt><code>msg</code></dt>
 <dd>Une chaîne de caractères JavaScript contenant zéro ou plusieurs subdivisions de chaîne de caractères.</dd>
 <dt><code>subst1</code> ... <code>substN</code></dt>
 <dd>Une liste d'objets JavaScript qui remplace les chaînes de caractéres de <code>msg</code>. Cela vous donne plus de contrôle sur le format de sortie. Voir {{SectionOnPage("fr/docs/Web/API/Console", "Utiliser les caractères de substitution")}} pour une description du fonctionnement des substitutions.</dd>
</dl>

<p>Voir <a href="/fr/docs/Web/API/console#Outputting_text_to_the_console">Afficher du texte dans la console</a> dans la documentation de {{domxref("console")}} pour plus de détails.</p>

<h2 id="Spécification">Spécification</h2>

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
   <td>{{SpecName("Console API", "#debug", "console.debug()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.Console.debug")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Opera Dragonfly documentation: Console</a></li>
 <li><a href="http://msdn.microsoft.com/library/gg589530">MSDN: Using the F12 Tools Console to View Errors and Status</a></li>
 <li><a href="https://developers.google.com/chrome-developer-tools/docs/console#errors_and_warnings">Chrome Developer Tools: Using the Console</a></li>
</ul>
