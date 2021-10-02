---
title: WindowOrWorkerGlobalScope.origin
slug: Web/API/origin
translation_of: Web/API/WindowOrWorkerGlobalScope/origin
original_slug: Web/API/WindowOrWorkerGlobalScope/origin
---
<p>{{APIRef()}}{{SeeCompatTable}}</p>

<p>La propriété <code><strong>origin</strong></code> de l'interface {{domxref("WindowOrWorkerGlobalScope")}} retourne l'origine du scope global, serialisé en chaîne de caractères.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="syntaxbox">var <em>myOrigin</em> = self.origin; // ou simplement origin
</pre>

<h3 id="Valeur">Valeur</h3>

<p>Une {{domxref("USVString")}}.</p>

<h2 id="Exemples">Exemples</h2>

<p>Exécuté depuis un worker, le code suivant permet d'afficher en console le scope global de ce worker à chaque message reçu.</p>

<pre class="brush: js">onmessage = function() {
  console.log(self.origin);
};</pre>

<p>Si l'origine n'est pas sous la forme scheme/host/port (par exemple, si vous exécutez le code en local, via <code>file://</code>), <code>origin</code> retournera la chaîne de caractère <code>"null"</code>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaires</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'webappapis.html#dom-origin', 'WindowOrWorkerGlobalScope.origin')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Définition initiale.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.WindowOrWorkerGlobalScope.origin")}}</p>
