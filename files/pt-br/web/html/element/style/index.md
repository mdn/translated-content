---
title: <style>
slug: Web/HTML/Element/style
translation_of: Web/HTML/Element/style
---
<h2 id="Resumo">Resumo</h2>

<p>O <strong>elemento HTML &lt;style&gt;</strong> contém informações de estilo para um documento ou uma parte do documento. As informações de estilo específico estão contidas dentro deste elemento, geralmente no <a href="/en-US/docs/Web/CSS">CSS</a>.</p>

<ul>
 <li><dfn><a href="/en-US/docs/HTML/Content_categories">Content categories</a></dfn><a href="/en-US/docs/Web/HTML/Content_categories#Metadata_content">Metadata content</a>, e se o atributo <code>scoped</code> é apresentado: <a href="/en-US/docs/Web/HTML/Content_categories#Flow_content">flow content </a>.</li>
 <li><dfn>Conteúdo Permitido</dfn> Style information matching the language of the <code>type</code> attribute.</li>
 <li><dfn>Omissão de Tag</dfn> {{no_tag_omission}}</li>
 <li><dfn>Permitted parent elements</dfn>Qualquer elemento que aceite Metadata content.</li>
 <li><dfn>Interface DOM</dfn> {{domxref("HTMLStyleElement")}}</li>
</ul>

<h2 id="Atributos">Atributos</h2>

<p>Este elemento inclui os <a href="/pt-BR/docs/Web/HTML/Global_attributes">atributos globais</a>.</p>

<dl>
 <dt>type</dt>
 <dd>
 <div>Este atributo define a linguagem de estilo como um tipo MIME (charset não deve ser especificado). ' text/css' presume se este atributo estiver ausente.</div>
 </dd>
 <dt>media</dt>
 <dd>Qual mídia deve aplicar-se a este estilo. Deve ser uma consulta de mídia, consulte <a href="http://dev.w3.org/csswg/css3-mediaqueries">http://dev.w3.org/csswg/css3-mediaqueries</a>.</dd>
 <dt>scoped</dt>
 <dd>Se este atributo está presente, então o estilo aplica-se apenas ao seu elemento pai. Se está ausente, o estilo aplica-se ao documento inteiro.</dd>
 <dt>title</dt>
 <dd>
 <div>Especifica os conjuntos de folhas de estilo alternativa.</div>
 </dd>
 <dt>disabled</dt>
 <dd>
 <div>Se definido, desativa (não se aplica) às regras de estilo para a {{domxref("document","Document")}} que são especificadas no elemento.</div>
 </dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Uma_folha_de_estilo_simples">Uma folha de estilo simples</h3>

<pre class="brush:html">&lt;style type="text/css"&gt;
body {
  color:red;
}
&lt;/style&gt;
</pre>

<h3 id="Uma_folha_de_estilos_com_escopo">Uma folha de estilos com escopo</h3>

<pre class="brush:html">&lt;article&gt;
  &lt;div&gt;The scoped attribute allows for you to include style elements mid-document.
   Inside rules only apply to the parent element.&lt;/div&gt;
  &lt;p&gt;This text should be black. If it is red your browser does not support the scoped attribute.&lt;/p&gt;
  &lt;section&gt;
    &lt;style scoped&gt;
      p { color: red; }
    &lt;/style&gt;
    &lt;p&gt;This should be red.&lt;/p&gt;
  &lt;/section&gt;
&lt;/article&gt;
</pre>

<h4 id="Amostra">Amostra</h4>

<div>{{ EmbedLiveSample('A_scoped_stylesheet', '100%', '200') }}</div>

<div> </div>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
  <tr>
   <td>{{ SpecName('HTML WHATWG', 'document-metadata.html#the-style-element', 'style') }}</td>
   <td>{{ Spec2('HTML WHATWG') }}</td>
   <td>No change from {{ SpecName('HTML5 W3C') }}.</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML5 W3C', 'document-metadata.html#the-style-element', 'style') }}</td>
   <td>{{ Spec2('HTML5 W3C') }}</td>
   <td>Added the <code>scoped</code> attribute</td>
  </tr>
  <tr>
   <td>{{ SpecName('HTML4.01', 'present/styles.html#h-14.2.3', 'style') }}</td>
   <td>{{ Spec2('HTML4.01') }}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

{{Compat("html.elements.style")}}

<h2 id="Veja_também">Veja também:</h2>

<ul>
 <li>O elemento {{HTMLElement("link")}} que permite usar folhas de estilo externas.</li>
</ul>

<p>{{HTMLRef}}</p>
