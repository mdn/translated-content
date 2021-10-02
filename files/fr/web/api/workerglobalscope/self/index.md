---
title: WorkerGlobalScope.self
slug: Web/API/WorkerGlobalScope/self
translation_of: Web/API/WorkerGlobalScope/self
---
<p>{{APIRef("Web Workers API")}}</p>

<p>La propriété en lecture seule <code><strong>self</strong></code> de l'interface {{domxref("WorkerGlobalScope")}} retourne une référence au <code>WorkerGlobalScope</code> lui-même. La plupart du temps il s'agit d'un contexte spécifique comme {{domxref("DedicatedWorkerGlobalScope")}},  {{domxref("SharedWorkerGlobalScope")}}, ou {{domxref("ServiceWorkerGlobalScope")}}.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var selfRef = self;</pre>

<h3 id="Specifications">Valeur</h3>

<p>Un objet global scope (qui diffère selon le type du worker concerné, comme indiqué ci-dessus).</p>

<h2 id="Exemple">Exemple</h2>

<p>Si vous appelez</p>

<pre class="brush: js">console.log(self);</pre>

<p>au sein d'un worker, vous obtiendrez un worker global scope du même type que l'objet worker écrit sur la console — quelque chose comme ce qui suit :</p>

<pre class="brush: js">DedicatedWorkerGlobalScope {
undefined: undefined, Infinity: Infinity, Math: MathConstructor, NaN: NaN, Intl: Object…}
    Infinity: Infinity
    Array: function Array() { [native code] }
      arguments: null
      caller: null
      isArray: function isArray() { [native code] }
      length: 1
      name: "Array"
      observe: function observe() { [native code] }
      prototype: Array[0]
      unobserve: function unobserve() { [native code] }
      __proto__: function Empty() {}
      &lt;function scope&gt;
    ArrayBuffer: function ArrayBuffer() { [native code] }
    Blob: function Blob() { [native code] }
    Boolean: function Boolean() { [native code] }
    DataView: function DataView() { [native code] }
    Date: function Date() { [native code] }
    DedicatedWorkerGlobalScope: function DedicatedWorkerGlobalScope() { [native code] }
    Error: function Error() { [native code] }
<em>// etc. etc.</em>
</pre>

<p>Cette trace fournit la liste complète des objets disponibles dans le contexte d'un worker, et constitue un test très utile lorsqu'il s'agit de savoir ce qui est disponible ou non au sein d'un worker. Nous maintenons aussi une liste des <a href="/en-US/docs/Web/API/Worker/Functions_and_classes_available_to_workers">Fonctions et classes disponibles dans les Web Workers</a>.</p>

<h2 id="Spécifications">Spécifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Spécification</th>
   <th scope="col">Statut</th>
   <th scope="col">Commentaire</th>
  </tr>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-workerglobalscope-self', 'self')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>

<p>{{Compat("api.WorkerGlobalScope.self")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<p>{{domxref("WorkerGlobalScope")}}</p>
