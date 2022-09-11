---
title: <main>
slug: Web/HTML/Element/main
tags:
  - Elemento
  - HTML
  - Referencia
  - Web
translation_of: Web/HTML/Element/main
---
<h2 id="Resumo">Resumo</h2>

<p>O elemento <strong><code>&lt;main&gt;</code></strong><code> define o conteúdo principal dentro do </code>{{HTMLElement("body")}} em seu documento ou aplicação. Entende-se como conteúdo principal aquele relacionado diretamente com o tópico central da página ou com a funcionalidade central da aplicação. O mesmo deverá ser único na página, ou seja, dentro do elemento &lt;main&gt; não deverão ser incluidas seções da página que sejam comuns a todo o site ou aplicação, tais como mecanismos de navegação, informações de copyright, logotipo e campos de busca<code> </code>(a não ser, é claro,  caso a função principal do documento seja  fazer algum tipo de busca).</p>

<div class="note">
<p><strong>Nota:</strong> <code>&lt;main&gt;</code> <strong>não pode </strong>ser filho dos elementos {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, ou {{HTMLElement("nav")}}.</p>

<p>Autores <strong>não devem</strong> incluir mais de um elemento main no mesmo documento<strong>.</strong></p>
</div>

<ul>
 <li><dfn><a class="new" href="https://developer.mozilla.org/pt-BR/docs/HTML/Content_categories" title="HTML/Content_categories">Categorias de conteúdo</a></dfn><a href="/en-US/docs/Web/HTML/Content_categories#Flow_content" title="HTML/Content_categories#Flow_content">Conteúdo de fluxo</a>, conteúdo palpável.</li>
 <li><dfn>Conteúdo permitido</dfn> <a href="/en-US/docs/Web/HTML/Content_categories#Flow_content" title="HTML/Content_categories#Flow_content">Conteúdo de fluxo</a>.</li>
 <li><dfn>Omissão de tag</dfn> Nenhuma; ambas as tags de início e fim são obrigatórios.</li>
 <li><dfn>Elementos pais permitidos</dfn> Qualquer elemento que aceite <a href="/en-US/docs/Web/HTML/Content_categories#Flow_content" title="HTML/Content_categories#Flow_content">conteúdo de fluxo</a>, mas não pode ser filho dos elementos {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, ou {{HTMLElement("nav")}}.</li>
 <li><dfn>DOM interface</dfn> {{domxref("HTMLElement")}}</li>
</ul>

<h2 id="Atributos">Atributos</h2>

<p>Este elemento admite apenas os <a href="/pt-BR/docs/Web/HTML/Global_attributes" style="line-height: 21px;" title="HTML/Atributos Globais">atributos globais</a>.</p>

<h2 id="Exemplo">Exemplo</h2>

<pre class="brush: html">&lt;!-- outro conteúdo --&gt;

&lt;main&gt;
  &lt;h1&gt;Maçãs&lt;/h1&gt;
  &lt;p&gt;A maçã é a fruta pomácea da macieira.&lt;/p&gt;

  &lt;article&gt;
    &lt;h2&gt;Vermelho delicioso&lt;/h2&gt;
    &lt;p&gt;Estas maçãs vermelhas brilhantes são as mais comumente encontradas em muitos supermercados.&lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
  &lt;/article&gt;

  &lt;article&gt;
    &lt;h2&gt;Granny Smith&lt;/h2&gt;
    &lt;p&gt;Essas suculentas maçãs verdes, são um ótimo recheio para torta de maçã.&lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
    &lt;p&gt;... &lt;/p&gt;
  &lt;/article&gt;

&lt;/main&gt;

&lt;!-- outro conteúdo --&gt;</pre>

<h2 id="Specifications" name="Specifications">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentário</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', '#the-main-element', '&lt;main&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>Removida a restrição sobre não usar &lt;main&gt; como um filho dos elementos {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, ou {{HTMLElement("nav")}}.</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.1', 'grouping-content.html#the-main-element', '&lt;main&gt;')}}</td>
   <td>{{Spec2('HTML5.1')}}</td>
   <td>Não há mudança na {{SpecName('HTML5 W3C')}}</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'grouping-content.html#the-main-element', '&lt;main&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td>Definição inicial.</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">Navegadores compatíveis</h2>

<p>O elemento &lt;main&gt; é amplamente suportado (exceto pelo Internet Explorer). Sugere-se que, até que o elemento &lt;main&gt; seja suportado pelo Internet Explorer, adicione a ele o atributo role com o valor "main":</p>

<pre class="brush: html">&lt;main role="main"&gt;
  ...
&lt;/main&gt;
</pre>

{{Compat("html.elements.main")}}

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>Elementos estruturais básicos: {{HTMLElement("html")}}, {{HTMLElement("head")}}, {{HTMLElement("body")}}</li>
 <li>Elementos relacionados a seções: {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("footer")}}, {{HTMLElement("header")}}, or {{HTMLElement("nav")}}</li>
</ul>

<p> </p>
