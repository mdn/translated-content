---
title: Document.createElement()
slug: Web/API/Document/createElement
tags:
  - Documento
  - Referencia
  - Referência(2)
  - metodo
translation_of: Web/API/Document/createElement
---
<div>{{APIRef("DOM")}}</div>

<div> </div>

<p>Em um documento <a href="/en-US/docs/Web/HTML">HTML</a>, o método <strong><code>Document.createElement()</code></strong> cria o elemento HTML especificado ou um {{domxref("HTMLUnknownElement")}} se o nome do elemento dado não for conhecido.</p>

<p>Em um documento <a href="/en-US/docs/Mozilla/Tech/XUL">XUL</a>, o elemento XUL especificado é criado.</p>

<p>Em outros documentos, ele cria um elemento com um <em>namespace</em> URI <code>null</code>.</p>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox"><var>var <em>elemento</em></var> = <var>document</var>.createElement(nomeDaTag);
</pre>

<ul>
 <li><code>elemento</code> é o objeto {{domxref("Element")}} criado.</li>
 <li><code>nomeDaTag</code> é uma <em>string</em> que especifica o tipo do elemento a ser criado. O {{domxref("Node.nodeName", "nodeName")}} do elemento criado é inicializado com o valor da <code>nomeDaTag</code>. Não use nomes qualificados (como "html:a") com este método.</li>
</ul>

<h2 id="Exemplo">Exemplo</h2>

<p>Este código cria uma nova <code>&lt;div&gt;</code> e a insere antes do elemento com ID "<code>div1</code>".</p>

<h3 id="HTML">HTML</h3>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;title&gt;||Trabalhando com elementos||&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div id="div1"&gt;O texto acima foi criado dinamicamente.&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>

<h3 id="JavaScript"><span style="line-height: normal;">JavaScript</span></h3>

<pre class="brush:js">document.body.onload = adcElemento;

function adcElemento () {
  // cria um novo elemento div
  // e dá à ele conteúdo
  var divNova = document.createElement("div");
  var conteudoNovo = document.createTextNode("Olá, cumprimentos!");
  divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada

  // adiciona o novo elemento criado e seu conteúdo ao DOM
  var divAtual = document.getElementById("div1");
  document.body.insertBefore(divNova, divAtual);
}</pre>

<p>{{EmbedLiveSample("Exemplo", 500, 50)}}</p>

<h2 id="Notas">Notas</h2>

<ul>
 <li>Quando chamada em um objeto de documento marcado como um documento HTML, <code>createElement()</code> torna seu argumento caixa-baixa antes de criá-lo.</li>
 <li>Para criar um elemento com um nome qualificado e <em>namespace URI</em>, use {{ domxref("document.createElementNS()") }}.</li>
 <li>Antes do Gecko 2.0 {{ geckoRelease("2.0") }} você podia incluir os símbolos de menor que e maior que em volta da <code>tagName</code> no modo <em>quirks</em>; a partir do Gecko 2.0, a função comporta-se da mesma forma em ambos os modos <em>quirks</em> e estrito.</li>
 <li>A partir do Gecko 19.0 {{geckoRelease("19.0")}}, <code>createElement(null)</code> funciona como <code>createElement("null")</code>. Note que o Opera torna <code>null</code> uma <em>string</em>, mas ambos Chrome e Internet Explorer lançarão erros.</li>
 <li>A partir do Gecko 22.0 {{geckoRelease("22.0")}} <code>createElement()</code> não mais usa a interface {{domxref("HTMLSpanElement")}} quando o argumento é  "bgsounds", "multicol", or "image".  Ao invés disso, <code>HTMLUnknownElement</code> é usado para "bgsound", "multicol" e {{domxref("HTMLElement")}} <code>HTMLElement</code> é usado para "image".</li>
 <li>A implementação Gecko de <code>createElement</code> não se conforma à especificação DOM para documentos XUL e XHTML: <code>localName</code> e <code>namespaceURI</code> não estão definidos para <code>null</code> no elemento criado. Veja {{ Bug(280692) }} para detalhes.</li>
</ul>

<h2 id="Especificações">Especificações</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-2141741547">DOM 2 Core: createElement</a></li>
 <li><a class="external" href="http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents">HTML5: APIs in HTML documents</a></li>
</ul>
