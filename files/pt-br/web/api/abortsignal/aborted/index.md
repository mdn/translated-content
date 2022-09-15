---
title: AbortSignal.aborted
slug: Web/API/AbortSignal/aborted
tags:
  - API
  - AbortSignal
  - Propriedade
  - aborted
translation_of: Web/API/AbortSignal/aborted
---
<div>{{APIRef("DOM")}}{{SeeCompatTable}}</div>

<p>A propriedade <strong><code>aborted</code></strong> é apenas para leitura e fornece um valor {{domxref("Boolean")}} indicando se as solicitações ao objeto sinal de comunicação DOM forão abortadas (<code>true</code>) ou não (<code>false</code>).</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="brush: js">var isAborted = abortSignal.aborted;</pre>

<h3 id="Valor">Valor</h3>

<p>Um valor {{domxref("Boolean")}}</p>

<h2 id="Exemplos">Exemplos</h2>

<p>No fragmento abaixo, criamos um novo objeto <code>AbortController</code> e recebemos dele um sinal {{domxref("AbortSignal")}} (disponível na propriedade <code>signal</code>). Depois checamos se o sinal foi ou não abortado usando a propriedade <code>aborted</code>, e então enviamos um log apropriado para o console.</p>

<pre class="brush: js">var controller = new AbortController();
var signal = controller.signal;

// ...

signal.aborted ? console.log('Pedido foi abortado') : console.log('Pedido nao foi abortado');
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('DOM WHATWG', '#dom-abortsignal-onabort', 'onabort')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td>Definição Inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("api.AbortSignal.aborted")}}</p>

<h2 id="Veja_Também">Veja Também</h2>

<ul>
 <li><a href="/en-US/docs/Web/API/Fetch_API">Documentação de busca API</a></li>
</ul>
