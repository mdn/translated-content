---
title: WorkerGlobalScope.console
slug: Web/API/WorkerGlobalScope/console
tags:
  - API
  - Propriété
  - Reference
  - Web Workers
  - WorkerGlobalScope
  - lecture seule
translation_of: Web/API/WorkerGlobalScope/console
---
<p>{{APIRef("Web Workers API")}}{{Non-standard_header}}</p>

<p>La propriété en lecture seule <code><strong>console</strong></code> de l'interface {{domxref("WorkerGlobalScope")}} retourne un objet {{domxref("Console")}} donnant accès à la console du navigateur pour le worker.</p>

<h2 id="Syntaxe">Syntaxe</h2>

<pre class="brush: js">var consoleObj = self.console;</pre>

<h3 id="Valeur">Valeur</h3>

<p>Un objet {{domxref("Console")}}.</p>

<h2 id="Exemple">Exemple</h2>

<p>Cette propriété vous permet d'avoir accès à la console du navigateur à des fins de débogage dans un worker. Par exemple, vous pouvez appeler</p>

<pre class="brush: js">console.log('test');</pre>

<p>dans un worker (qui est tout simplement l'équivalent de <code>self.console.log('test');</code>, car appelé dans le contexte du worker, qui peut être référencé par {{domxref("WorkerGlobalScope.self")}}), afin de retourner un message de test dans la console du navigateur.</p>

<p>Si vous appelez <code>console.log()</code> depuis un {{domxref("DedicatedWorkerGlobalScope")}} ou un autre contexte qui agit sur une seule fenêtre chargée, la console de l'onglet correspondant recevra le message. En revanche, si vous appelez <code>console.log()</code> depuis un {{domxref("SharedWorkerGlobalScope")}}, la console globale du navigateur recevra le message.</p>

<h2 id="Specifications">Spécifications</h2>

<p>Ne fait pas encore parti d'une spécification.</p>

<h2 id="Compatibilité_des_navigateurs">Compatibilité des navigateurs</h2>



<p>{{Compat("api.WorkerGlobalScope.console")}}</p>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{domxref("Console")}}</li>
 <li>{{domxref("WorkerGlobalScope")}}</li>
</ul>
