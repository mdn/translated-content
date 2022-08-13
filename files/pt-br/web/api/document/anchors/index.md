---
title: Document.anchors
slug: Web/API/Document/anchors
tags:
  - API
  - Deprecated
  - HTML DOM
  - NeedsCompatTable
  - Property
  - Reference
translation_of: Web/API/Document/anchors
---
<div>{{APIRef("DOM")}}</div>

<p>{{deprecated_header("HTML5")}}</p>

<p><code>anchors</code> retorna uma lista de todas as âncoras no documento.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="syntaxbox"><var>nodeList</var> = document.anchors;
</pre>

<h2 id="Example" name="Example">Exemplo</h2>

<pre class="brush:js">if ( document.anchors.length &gt;= 5 ) {
  dump("dump found too many anchors");
  window.location = "http://www.google.com";
}
</pre>

<p>O código a seguir é um exemplo que popula automaticamente um índice de conteúdo com cada âncora encontrada na página:</p>

<pre class="brush:html">&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
&lt;meta charset="UTF-8" /&gt;
&lt;title&gt;Test&lt;/title&gt;
&lt;script&gt;
function init() {
  var toc = document.getElementById("toc");
  var i, li, newAnchor;
  for (i = 0; i &lt; document.anchors.length; i++) {
    li = document.createElement("li");
    newAnchor = document.createElement('a');
    newAnchor.href = "#" + document.anchors[i].name;
    newAnchor.innerHTML = document.anchors[i].text;
    li.appendChild(newAnchor);
    toc.appendChild(li);
  }
}
&lt;/script&gt;

&lt;/head&gt;
&lt;body onload="init()"&gt;

&lt;h1&gt;Title&lt;/h1&gt;
&lt;h2&gt;&lt;a name="contents"&gt;Contents&lt;/a&gt;&lt;/h2&gt;
&lt;ul id="toc"&gt;&lt;/ul&gt;

&lt;h2&gt;&lt;a name="plants"&gt;Plants&lt;/a&gt;&lt;/h2&gt;
&lt;ol&gt;
    &lt;li&gt;Apples&lt;/li&gt;
    &lt;li&gt;Oranges&lt;/li&gt;
    &lt;li&gt;Pears&lt;/li&gt;
&lt;/ol&gt;

&lt;h2&gt;&lt;a name="veggies"&gt;Veggies&lt;/a&gt;&lt;/h2&gt;
&lt;ol&gt;
    &lt;li&gt;Carrots&lt;/li&gt;
    &lt;li&gt;Celery&lt;/li&gt;
    &lt;li&gt;Beats&lt;/li&gt;
&lt;/ol&gt;

&lt;/body&gt;
&lt;/html&gt;
</pre>

<p><a href="https://jsfiddle.net/S4yNp">View on JSFiddle</a></p>

<h2 id="Notes" name="Notes">Notas</h2>

<p>Por motivos de compatibilidade, o conjunto de âncoras retornadas por <code>anchors</code> contém apenas as âncoras criadas com o atributo <code>name</code>, não incluindo as âncoras criadas com o atributo {{ htmlattrxref("id") }}.</p>

<h2 id="Specifications" name="Specifications">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-document-anchors', 'Document.anchors')}}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td>Obsoleted.</td>
  </tr>
  <tr>
   <td>{{SpecName('DOM2 HTML', 'html.html#ID-7577272', 'Document.anchors')}}</td>
   <td>{{ Spec2('DOM2 Events') }}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>
