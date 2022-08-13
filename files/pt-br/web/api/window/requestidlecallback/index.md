---
title: window.requestIdleCallback()
slug: Web/API/Window/requestIdleCallback
translation_of: Web/API/Window/requestIdleCallback
---
<div>{{APIRef("HTML DOM")}}{{SeeCompatTable}}</div>

<p>O método <code><strong>window.requestIdleCallback()</strong></code> enfileira uma função para ser executado durante períodos onde o navegador está ocioso. Isso permite que desenvolvedores realizem tarefas de baixa prioridade em relação a o event loop em segundo plano. As funções são geralmente chamadas na ordem first-in-first-out (primeiro-a-entrar-primeiro-a-sair); Contudo, callbacks nos quais tem um timeout especificado, podem ser chamados na ordem out-of-order (fora-de-ordem) se necessário, afim de executar antes do tempo limite.</p>

<p>Você pode chamar <code>requestIdleCallback()</code> com uma função callback ociosa para agendar outro callback para ter lugar não antes da próxima passagem pelo event loop.</p>

<div class="note">Um <code>timeout</code> é altamento recomendado, caso contrário, é possível que vários segundos passem antes que a função callback seja chamada.</div>

<h2 id="Syntax" name="Syntax">Syntax</h2>

<pre class="syntaxbox notranslate"><code>var <em>handle</em> = <em>window</em>.requestIdleCallback(<em>callback</em>[, <em>options</em>])</code></pre>

<h3 id="Returns" name="Returns">Return value</h3>

<p>An ID which can be used to cancel the callback by passing it into the {{domxref("window.cancelIdleCallback()")}} method.</p>

<h3 id="Parameters" name="Parameters">Parameters</h3>

<dl>
 <dt><code>callback</code></dt>
 <dd>A reference to a function that should be called in the near future, when the event loop is idle. The callback function is passed an {{domxref("IdleDeadline")}} object describing the amount of time available and whether or not the callback has been run because the timeout period expired.</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>Contains optional configuration parameters. Currently only one property is defined:
 <ul>
  <li><code>timeout</code>: If <code>timeout</code> is specified and has a positive value, and the callback has not already been called by the time <em>timeout</em> milliseconds have passed, the callback will be called during the next idle period, even if doing so risks causing a negative performance impact.</li>
 </ul>
 </dd>
</dl>

<h2 id="Example" name="Example">Example</h2>

<p>See our <a href="/en-US/docs/Web/API/Background_Tasks_API#Example">complete example</a> in the article <a href="/en-US/docs/Web/API/Background_Tasks_API">Cooperative Scheduling of Background Tasks API</a>.</p>

<h2 id="Specifications" name="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th>Specification</th>
   <th>Status</th>
   <th>Comment</th>
  </tr>
  <tr>
   <td>{{SpecName('Background Tasks')}}</td>
   <td>{{Spec2('Background Tasks')}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Browser compatibility</h2>



<p>{{Compat("api.Window.requestIdleCallback")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("window.cancelIdleCallback()")}}</li>
 <li>{{domxref("IdleDeadline")}}</li>
 <li>{{domxref("window.setTimeout()")}}</li>
 <li>{{domxref("window.setInterval()")}}</li>
 <li>{{domxref("window.requestAnimationFrame")}}</li>
</ul>
