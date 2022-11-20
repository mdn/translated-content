---
title: GlobalEventHandlers.onclick
slug: conflicting/Web/API/Element/click_event
translation_of: Web/API/GlobalEventHandlers/onclick
original_slug: Web/API/GlobalEventHandlers/onclick
---
<div>{{ ApiRef("HTML DOM") }}</div>

<p>A propriedade <code><strong>onclick</strong></code> do mixin {{domxref("GlobalEventHandlers")}} é o {{event("Event_handlers", "event handler")}} para o processamento de eventos de {{event("click")}} em um dado elemento.</p>

<p>O evento <code>click</code> acontece quando o usuário clica em um elemento. É disparado após os eventos {{event("mousedown")}} e{{event("mouseup")}} na respectiva ordem.</p>

<div class="note"><strong>Note:</strong> Ao usar o evento <code>click</code> para disparar uma ação, considere também adicionar essa mesma ação ao evento {{event("keydown")}}, para permitir o uso dessa mesma ação a pessoas que não usam um mouse ou uma touchscreen.</div>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox"><var>elemento</var>.onclick = <em>refDeFuncao</em>;
</pre>

<h3 id="Value">Value</h3>

<p><code>refDeFuncao</code> é o nome de uma função ou uma <a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/function">expressão de função</a>. Essa função recebe um objeto {{domxref("MouseEvent")}} como único argumento. Dentro da função, <code><a href="/pt-BR/docs/Web/JavaScript/Reference/Operators/this">this</a></code> será o elemento de qual o evento foi disparado.</p>

<p>Apenas um manipulador <code>onclick</code> pode estar associado a um objeto em um momento. Em vez disso, você talvez prefira usar o método {{domxref("EventTarget.addEventListener()")}}, já que ele é mais flexível.</p>

<h2 id="Exemplo">Exemplo</h2>

<p>Esse evento registra a posição dos cliques.</p>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;p&gt;Clique em qualquer lugar nesse exemplo.&lt;/p&gt;
&lt;p id="log"&gt;&lt;/p&gt;</pre>

<h3 id="JavaScript">JavaScript</h3>

<pre class="brush: js">let log = document.getElementById('log');

document.onclick = inputChange;

function inputChange(e) {
  log.textContent = `Posição: (${e.clientX}, ${e.clientY})`;
}</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Exemplo")}}</p>

<h2 id="Especificação">Especificação</h2>

<div>{{Specifications}}</div>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<div>


<p>{{Compat("api.GlobalEventHandlers.onclick")}}</p>
</div>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{event("click")}} event</li>
 <li>Manipuladores de evento relacionados:
  <ul>
   <li>{{domxref("GlobalEventHandlers.onauxclick")}}</li>
   <li>{{domxref("GlobalEventHandlers.ondblclick")}}</li>
  </ul>
 </li>
</ul>
