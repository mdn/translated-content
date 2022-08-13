---
title: Large-Allocation
slug: Web/HTTP/Headers/Large-Allocation
tags:
  - Cabeçalho HTTP
  - Cabeçalho de Resposta
  - HTTP
  - Não padronizado
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Large-Allocation
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de resposta não padronizado <strong><code>Large-Allocation</code></strong> diz ao nevagador que a página que está sendo carregada vai performar uma grande alocação. Ele é atualmente implementado somente no Firefox, mas é inofensivo para ser enviado para qualquer navegador.</p>

<p>Aplicações <a href="/en-US/docs/WebAssembly">WebAssembly</a> ou <em>asm.js</em> podem usar grandes blocos contíguos de memória alocada. Para jogos complexos, por exemplo, estas alocações podem ser bem grandes, algumas vezes grandes na escala de 1GB. O <code>Large-Allocation</code> diz ao navegador que o conteúdo web que será carregado vai querer performar uma grande alocação de memória contígua e o navegador pode reagir a este cabeçalho iniciando um processo dedicado para carregador o documento, por exemplo.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Response header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">Large-Allocation: 0
Large-Allocation: &lt;megabytes&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt><code>0</code></dt>
 <dd>0 é um valor especial que representa incerteza em relação a qual será o tamanho da alocação.</dd>
 <dt><code>&lt;megabytes&gt;</code></dt>
 <dd>O tamanho esperado da alocação a ser performada, em megabytes.</dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre class="notranslate">Large-Allocation: 0
Large-Allocation: 500
</pre>

<h2 id="Tratamento_de_erros">Tratamento de erros</h2>

<p>O cabeçalho <code>Large-Allocation</code> joga mensagens de aviso ou erro quando utilizado incorretamente. Você vai encontrá-los no <a href="/en-US/docs/Tools/Web_Console">console web</a>.</p>

<dl>
 <dt>This page was loaded in a new process due to a <code>Large-Allocation</code> header.</dt>
 <dd>Esta mensagem significa que o navegador viu o cabeçalho <code>Large-Allocation</code>, e conseguiu recarregar a página em um novo processo que deve ter mais memória contígua disponível.</dd>
 <dt>A <code>Large-Allocation</code> header was ignored due to the load being triggered by a non-GET request.</dt>
 <dd>Quando uma requisição {{HTTPMethod("POST")}} é usada para carregar um documento, aquele carregamento não pode ser redirecionado para um novo processo. Este erro é mostrado quando carregando um documento com um cabeçalho <code>Large-Allocation</code> com um método HTTP que não seja GET. Isto pode ter sido causado devido ao documento estar sendo carregado por um formulário de submissão, por exemplo.</dd>
 <dt>A <code>Large-Allocation</code> header was ignored due to the presence of windows which have a reference to this browsing context through the frame hierarchy or {{domxref("window.opener")}}.</dt>
 <dd>
 <p>Este erro significa que o documento não foi carregado no nível mais alto de uma janela ou aba aberta, ou não aberta do usuário. Ele pode ocorrere nestas situações:</p>

 <ul>
  <li>O documento com cabeçalho <code>Large-Allocation</code> foi carregado em um {{HTMLElement("iframe")}}. O Firefox não pode mover um iframe em um novo processo atualmente, então o documento deve carregar no novo processo.</li>
  <li>O documento com cabeçalho <code>Large-Allocation</code> foi carregado em uma em uma janela que foi aberta pelo {{domxref("window.open()")}}, <code>&lt;a target="_blank"&gt;</code> ou outros métodos similares sem <code>rel="noopener"</code> ou a funcionalidade <code>"noopener"</code> sendo colocado. Estas janelas devem permanecer no mesmo processo que o abriu, já que eles podem se comunicar, significando que não podemos permití-los trocar processos.</li>
  <li>O documento cabeçalho <code>Large-Allocation</code> abriu outra janela com {{domxref("window.open()")}}, <code>&lt;a target="_blank"&gt;</code> ou outros métodos similares sem a funcionalidade <code>rel="noopener"</code> ou <code>"noopener"</code> sem colocada. Isto é para o mesmo motivo, This is for the same reason as above, ou seja, que eles podem se comunicar e, portanto, não podemos permitir que eles alternem processos.</li>
 </ul>
 </dd>
 <dt>A <code>Large-Allocation</code> header was ignored due to the document not being loaded out of process.</dt>
 <dd>O Firefox moveu para uma <a href="/en-US/docs/Mozilla/Firefox/Multiprocess_Firefox">arquitetura multiprocesso</a>, e esta arquitetura é necessária para suportar o cabeçalho <code>Large-Allocation</code>. Alguns <a href="/en-US/docs/Mozilla/Add-ons/SDK">Addons legado</a> podem previnir o Firefox de usar esta nova, e mais rápida arquitetura multiprocesso. Se você tem um destes Addons, então nós vamos continuar a utilizar a antiga arquitetura de processo único para compatibilidade, e não pode lidar com o cabeçalho <code>Large-Allocation</code>.</dd>
 <dt>This page would be loaded in a new process due to a <code>Large-Allocation</code> header, however <code>Large-Allocation</code> process creation is disabled on non-Win32 platforms.</dt>
 <dd>O Firefox atualmente somente suporta o cabeçalho <code>Large-Allocation</code> nas versões 32-bits do Windows, como fragmentação de memória não é um problema em versões 64-bits. Se você está rodando uma versão não <em>win32 </em>do Firefox, este erro irá aparecer. Esta checagem pode ser desabilitada com a preferência de booleano "dom.largeAllocation.
 <p>forceEnable" em about:config.</p>
 </dd>
</dl>

<h2 id="Especificações">Especificações</h2>

<p>Não faz parte de nenhuma especificação atualmente. Uma explicação das ideias por trás deste cabeçalho podem ser encontradas <a href="https://gist.github.com/mystor/5739e222e398efc6c29108be55eb6fe3">neste documento</a>.</p>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Large-Allocation")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/WebAssembly">WebAssembly</a></li>
</ul>
