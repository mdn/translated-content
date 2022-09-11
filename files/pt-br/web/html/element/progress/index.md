---
title: progress
slug: Web/HTML/Element/progress
translation_of: Web/HTML/Element/progress
---
<p>o elemento HTML progress (&lt;progress&gt;) é usado para visualizar o progresso de uma tarefa. Embora as especifidades de como é mostrado ficam a cargo do desenvolvedor, tipicamente, é mostrado como uma barra de progresso.</p>

<h2 id="Contexto_de_uso">Contexto de uso</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <td>Conteúdo permitido</td>
   <td><a href="/en/HTML/Content_categories#Phrasing_content" title="en/HTML/Content categories#Phrasing content">Conteúdo de texto</a></td>
  </tr>
  <tr>
   <td>Omissão de Tag</td>
   <td>Nenhum, ambas as tags (abertura e encerramento) são obrigatórias</td>
  </tr>
  <tr>
   <td>Elemento pai permitido</td>
   <td>Conteúdo fraseado (phrasing content), mas não deve haver descendentes do elemento progress</td>
  </tr>
  <tr>
   <td>Documento normativo</td>
   <td><a class="external" href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-button-element.html#the-progress-element" rel="external nofollow">HTML5, seção 4.10.16</a></td>
  </tr>
 </tbody>
</table>

<h2 id="Atributos">Atributos</h2>

<p>Como todos os outros elementos HTML, este elemento tem os atributos globais <a href="https://developer-new.mozilla.org/en/HTML/Global_attributes">(global attributes</a>)</p>

<dl>
 <dt>{{ htmlattrdef("max") }}</dt>
 <dd>Este atributo descreve quanto trabalho é demandado pela tarefa indicada pelo elemento progress.</dd>
 <dt>{{ htmlattrdef("value") }}</dt>
 <dd>Este atributo especifica quanto da tarefa foi concluído. Se este não existir, a barra de progresso é indeterminada; isso indica que uma atividade está em progresso sem previsão de quanto tempo é esperado para que seja concluída.</dd>
</dl>

<p>Você pode usar a propriedade {{ cssxref("orient") }} para especificar se a barra de progresso deve ser renderizada horizontalmente (padrão) ou verticalmente. A pseudo-classe {{ cssxref(":indeterminate") }} pode ser associada a barras de progresso indeterminadas.</p>

<dl>
</dl>

<h2 id="Interface_DOM">Interface DOM</h2>

<p>Este elemento implementa a interface HTMLProgressElement.</p>

<h2 id="Exemplos">Exemplos</h2>

<pre class="brush: html">&lt;progress value="70" max="100"&gt;70 %&lt;/progress&gt;
</pre>

<h3 id="Resultado">Resultado</h3>

<p><a href="/samples/html/progress.html">View Live Examples</a></p>

<p>No Mac OS X, o progresso resultante deve aparecer assim:</p>

<p><img alt="progress-1.png" class="default internal" src="/@api/deki/files/4946/=progress-1.png"></p>

<p>No Windows, o progresso resultante deve aparecer assim:</p>

<p><img alt="progress-firefox.JPG" class="default internal" src="/@api/deki/files/6031/=progress-firefox.JPG"></p>

<h3 id="Exemplos_adicionais">Exemplos adicionais</h3>

<p>Veja {{ cssxref("orient") }}.</p>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("html.elements.progress")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{ cssxref("orient") }}</li>
 <li>{{ cssxref(":indeterminate") }}</li>
</ul>
