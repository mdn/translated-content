---
title: NavigatorID.platform
slug: orphaned/Web/API/NavigatorID/platform
tags:
  - API
  - DOM
  - DOM_0
  - Gecko
  - HTML5
  - Propriedade
  - Referencia
  - Referência(2)
translation_of: Web/API/NavigatorID/platform
original_slug: Web/API/NavigatorID/platform
---
<p>{{ ApiRef("HTML DOM") }}</p>

<p>Retorna uma string representando a plataforma do navegador. A especificação permite aos navegadores retornar sempre strings vazias, portanto não se utilize dessa propriedade para obter resultados confiáveis.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="eval"><em>plataforma </em>= <em>navigator</em>.platform
</pre>

<h3 id="Valor">Valor</h3>

<p>Uma {{domxref("DOMString")}} identificando a plataforma na qual o navegador está sendo executado, ou uma string vazia se o browser se negar a (ou for incapaz de) identificar a plataforma. <code>plataforma</code> é uma string que pode estar vazia ou representar a plataforma na qual o navegador está sendo executado.</p>

<p><span style="font-size: 14px; line-height: 1.5;">Por exemplo: "<code>MacIntel</code>", "<code>Win32</code>", "<code>FreeBSD i386</code>", "<code>WebTV OS</code>"</span></p>

<h2 id="Example" name="Example">Exemplo</h2>

<pre class="brush: js">console.log(navigator.platform);</pre>

<h2 id="Notes" name="Notes">Notas</h2>

<p>Na maioria dos browsers, incluindo Chrome, Edge e Firefox 63 em diante, <code>NavegatorID.platform</code> retorna <code>"Win32"</code>, mesmo que o browser seja executado em uma versão 64-bit do Windows. No Internet Explorer e em versões do Firefox anteriores à versão 63, a propriedade ainda retorna <code>"Win64"</code>.</p>

<p>No Firefox, a preferência <code>general.platform.override</code> pode ser usada para sobrepor o valor de retorno padrão dessa propriedade.</p>

<h2 id="Specification" name="Specification">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#dom-navigator-platform', 'NavigatorID.platform')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Definição inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidade">Compatibilidade</h2>



<p>{{Compat("api.NavigatorID.platform")}}</p>
