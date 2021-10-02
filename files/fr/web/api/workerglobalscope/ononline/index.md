---
title: WorkerGlobalScope.ononline
slug: Web/API/WorkerGlobalScope/ononline
translation_of: Web/API/WorkerGlobalScope/ononline
---
<p>{{APIRef("Web Workers API")}}</p>

<p>La propriété <strong><code>ononline</code></strong> de l'interface {{domxref("WorkerGlobalScope")}} représente un {{event("Event_handlers", "event handler")}} à appeler lorsque l'événement {{event("online")}} survient et se propage à travers le {{domxref("Worker")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre>self.ononline = function() { ... };</pre>

<h2 id="Exemple">Exemple</h2>

<p>L'extrait de code suivant montre un gestionnaire <code>ononline</code> placé dans un worker :</p>

<pre class="brush: js">self.ononline = function() {
  console.log('Your worker is now online');
}</pre>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', "#handler-workerglobalscope-ononline", "WorkerGlobalScope.ononline")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WorkerGlobalScope.ononline")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<p>L'interface {{domxref("WorkerGlobalScope")}} à laquelle il appartient.</p>
