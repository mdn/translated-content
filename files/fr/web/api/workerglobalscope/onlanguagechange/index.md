---
title: WorkerGlobalScope.onlanguagechange
slug: Web/API/WorkerGlobalScope/onlanguagechange
translation_of: Web/API/WorkerGlobalScope/onlanguagechange
---
<p>{{APIRef("Web Workers API")}}</p>

<p>La propriété <strong><code>onlanguagechange</code></strong> de l'interface {{domxref("WorkerGlobalScope")}} représente un {{event("Event_handlers", "event handler")}} à appeler lorsque l'événement {{event("languagechange")}} survient et se propage à travers le {{domxref("Worker")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre>self.onlanguagechange = function() { ... };</pre>

<h2 id="Exemple">Exemple</h2>

<p>L'extrait de code suivant montre un gestionnaire <code>onlanguagechange</code> placé au sein d'un worker :</p>

<pre class="brush: js">self.onlanguagechange = function() {
  console.log('Your preferred language settings have been changed');
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
   <td>{{SpecName('HTML WHATWG', "#handler-workerglobalscope-onlanguagechange", "WorkerGlobalScope.onlanguagechange")}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.WorkerGlobalScope.onlanguagechange")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<p>L'interface {{domxref("WorkerGlobalScope")}} à laquelle elle appartient.</p>
