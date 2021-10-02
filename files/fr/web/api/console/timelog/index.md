---
title: Console.timeLog()
slug: Web/API/Console/timeLog
tags:
  - API
  - Console Web
  - DOM
  - Développement Web
  - Méthode
  - console
  - débogage
translation_of: Web/API/Console/timeLog
---
<div>{{APIRef("Console API")}}</div>

<p>Affiche dans la console la valeur actuelle d'un timer précédemment appelé par {{domxref("console.time()")}}</p>

<p>Voir <a href="/en-US/docs/Web/API/console#Timers">Timers</a> dans la documentation pour des exemples et plus de détails</p>

<p>{{AvailableInWorkers}}</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">console.timeLog(<em>label</em>);
</pre>

<h3 id="Paramètres">Paramètres</h3>

<dl>
 <dt><code>label</code></dt>
 <dd>Le nom du timer à afficher sur la console</dd>
</dl>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Si aucun label n'est inclus</p>

<pre>default: 1042ms</pre>

<p>Si un <code>label</code> est inclus:</p>

<pre>timer name: 1242ms</pre>

<h3 id="Exceptions">Exceptions</h3>

<p>Si aucun timer n'est en cours d'éxecution, <code>timeLog()</code> retourne l'avertissement suivant :</p>

<pre>Timer “default” doesn’t exist.</pre>

<p>Si le paramètre label est spécifé mais aucun timer n'y correspond :</p>

<pre> Timer “timer name” doesn’t exist. </pre>

<h2 id="Exemples">Exemples</h2>

<pre>console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");</pre>

<p>Le résultat de l'exemple ci-dessus montre le temps qu'a mis l'utilisateur à fermer la première pop-up d'alerte, puis le temps que l'utilisateur a pris pour fermer la seconde :</p>

<p><img src="timer_output.png"></p>

<p>Notez que le nom du timer est à la fois affiché lorsque la valeur est affichée par <code>timeLog()</code> et lorsque le timer est arrêté</p>

<h2 id="Spécifications">Spécifications</h2>

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
   <td>{{SpecName("Console API", "#timelog", "console.timeLog()")}}</td>
   <td>{{Spec2("Console API")}}</td>
   <td>Définition initiale</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.Console.timeLog")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li><a href="http://www.opera.com/dragonfly/documentation/console/">Documentation d'Opera Dragonfly: Console</a></li>
</ul>
