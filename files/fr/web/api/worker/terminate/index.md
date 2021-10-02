---
title: Worker.terminate()
slug: Web/API/Worker/terminate
translation_of: Web/API/Worker/terminate
---
<p>{{ apiref("Worker") }}</p>

<p>La méthode <code> <strong>terminate()</strong></code> de l'interface {{domxref("Worker")}} termine immédiatement le {{domxref("Worker")}}. Cette interruption ne permet pas au worker de finaliser ses opérations, il est juste arrêté sur le champ.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">myWorker.terminate();</pre>

<h3 id="Paramètres">Paramètres</h3>

<p>Aucun.</p>

<h3 id="Valeur_de_retour">Valeur de retour</h3>

<p>Néant.</p>

<h2 id="Exemple">Exemple</h2>

<p>L'extrait de code suivant montre la création d'un objet {{domxref("Worker")}} en utilisant le constructeur {{domxref("Worker.Worker", "Worker()")}}, qui est alors immédiatement interrompu.</p>

<pre class="brush: js">var myWorker = new Worker("worker.js");

myWorker.terminate();
</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#dom-worker-terminate", "Worker.terminate()")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<div>


<p>{{Compat("api.Worker.terminate")}}</p>
</div>

<h2 id="Voir_aussi">Voir aussi</h2>

<p>L'interface {{domxref("Worker")}} à laquelle elle appartient.</p>
