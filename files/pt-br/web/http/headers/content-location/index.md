---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
translation_of: Web/HTTP/Headers/Content-Location
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho <strong><code>Content-Location</code></strong> indica uma localização alternativa para os dados retornados. O principal uso é para indicar o URL de um recurso transmitido como resultado de uma <a href="/en-US/docs/Web/HTTP/Content_negotiation">negociação de conteúdo</a>.</p>

<p>{{HTTPHeader("Location")}} e <code>Content-Location</code> são diferentes. <code>Location</code> indica o URL de um redirecionamento, enquanto <code>Content-Location</code> indica o URL direto usado para acessar o recurso, sem qualquer outra negociação de conteúdo no futuro. <code>Location</code> é um cabeçalho associado com a resposta, enquanto <code>Content-Location</code> é associado com os dados retornados. Essa distinção parece abstrata sem exemplos. Essa distinção pode parecer abstrata sem <a href="#Exemplos">exemplos</a>.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Entity header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>no</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Content-Location: &lt;url&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;url&gt;</dt>
 <dd>Uma URL <a href="/en-US/docs/Learn/Common_questions/What_is_a_URL#Examples_of_relative_URLs">relativa</a> (à URL da requisição) ou URL <a href="/en-US/docs/Learn/Common_questions/What_is_a_URL#Examples_of_absolute_URLs">absoluta</a>.</dd>
</dl>

<h2 id="Exemplos_2"><a name="Exemplos">Exemplos</a></h2>

<h3 id="Requerindo_dados_de_um_servidor_em_diferentes_formatos">Requerindo dados de um servidor em diferentes formatos</h3>

<p>Digamos que uma API de um site pode retornar dados em formatos {{glossary("JSON")}}, {{glossary("XML")}}, ou <a href="https://en.wikipedia.org/wiki/Comma-separated_values" rel="external" title="Comma-separated values">CSV</a>. Se a URL para um documento em particular está em <code>https://example.com/documents/foo</code>, o site pode retornar diferentes URLs para <code>Content-Location</code> dependendo do cabeçalho {{HTTPHeader("Accept")}} nas requisições:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Cabeçalho de requisição</th>
   <th scope="col">Cabeçalho de resposta</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>Accept: application/json, text/json</code></td>
   <td><code>Content-Location: /documents/foo.json</code></td>
  </tr>
  <tr>
   <td><code>Accept: application/xml, text/xml</code></td>
   <td><code>Content-Location: /documents/foo.xml</code></td>
  </tr>
  <tr>
   <td><code>Accept: text/plain, text/*</code></td>
   <td><code>Content-Location: /documents/foo.txt</code></td>
  </tr>
 </tbody>
</table>

<p>Estas URLs são exemplos — o site pode servir diferentes formatos de arquivos com qualquer padrão URL que ele deseje, como por exemplo, um <a href="/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search">query string parameter</a>: <code>/documents/foo?format=json</code>, <code>/documents/foo?format=xml</code>, entre outros.</p>

<p>Então o cliente pode lembrar que a versão JSON está disponível em uma URL em particular, evitando negociação de conteúdo da próxima vez que ele requerer aquele documento.</p>

<p>O servidor também pode considerar outros cabeçalhos de <a href="/en-US/docs/Web/HTTP/Content_negotiation">negociação de conteúdo</a>, como o {{HTTPHeader("Accept-Language")}}.</p>

<h3 id="Apontando_para_um_novo_documento_HTTP_201_Created">Apontando para um novo documento (HTTP 201 Created)</h3>

<p>Digamos que você está criando um novo <em>post </em>no blog através da API do site:</p>

<pre>PUT /new/post
Host: example.com
Content-Type: text/markdown

# Meu primeiro post no blog!

Eu fiz através da API do `example.com`. Espero que ele tenha funcionado.
</pre>

<p>O site retorna uma mensagem de sucesso genérica confirmando que o <em>post</em> foi publicado. O servidor especifica onde o novo <em>post</em> está com <code>Content-Location</code>:</p>

<pre>HTTP/1.1 201 Created
Content-Type: text/plain; charset=utf-8
Content-Location: /meu-primeiro-post-no-blog

✅ Sucesso!
</pre>

<h3 id="Indicando_a_URL_do_resultado_de_uma_transação">Indicando a URL do resultado de uma transação</h3>

<p>Digamos que você tem um <code><a href="/en-US/docs/Web/HTML/Element/form">&lt;form&gt;</a></code> para enviar dinheiro para outro usuário do de um site.</p>

<pre class="brush: html">&lt;form action="/mandar-pagamento" method="post"&gt;
  &lt;p&gt;
    &lt;label&gt;Para quem você quer enviar o dinheiro?
      &lt;input type="text" name="destinatario"&gt;
    &lt;/label&gt;
  &lt;/p&gt;

  &lt;p&gt;
    &lt;label&gt;Quanto?
      &lt;input type="number" name="quantidade"&gt;
    &lt;/label&gt;
  &lt;/p&gt;

  &lt;button type="submit"&gt;Enviar Dinheiro&lt;/button&gt;
&lt;/form&gt;
</pre>

<p>Quando o formulário é submetido, o site gera um recibo para a transação. O servidor pode usar <code>Content-Location</code> para indicar a URL do recibo para acesso futuro.</p>

<pre>HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /meus-recibos/38

&lt;!doctype html&gt;
<em>(Um monte de HTML…)</em>

&lt;p&gt;Você mandou R$38.00 para UsuárioExemplo.&lt;/p&gt;

<em>(Mais um monte de HTML…)</em>
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{RFC("7231", "Content-Location", "3.1.4.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Content-Location")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Location")}}</li>
</ul>
