---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
tags:
  - Código de status
  - HTTP
  - Redirecionamento
  - Redirect
  - Reference
  - Status code
translation_of: Web/HTTP/Status/301
---
<div>{{HTTPSidebar}}</div>

<p>O código de resposta de status de redirecionamento <code><strong>301 Moved Permanently</strong></code> do protocolo HTTP indica que o recurso requisitado foi movido permanentemente para a URL dada pelo cabeçalho {{HTTPHeader("Localização")}} headers. Um navegador redireciona para essa página e o motor de busca atualiza os links para o recurso (na linguagem 'SEO', é dito que o "suco do link" ('link-juice') é enviado à nova URL).</p>

<p>Mesmo que a especificação exija que o método (e corpo) não sejam alterados quando o redirecionamento seja executado, nem todos os agentes de usuário são alinhados com isso, você ainda pode encontrar alguns softwares com "bugs" que não o seguem. É recomendado que se use o código 301 somente como resposta para os métodos {{HTTPMethod("GET")}} ou {{HTTPMethod("Head")}} e use {{HTTPStatus("308","308 Permanent Redirect")}} para {{HTTPMethod("POST")}}, para proibir explicitamente o uso do método com esse status.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">301 Moved Permanently</pre>

<h2 id="Exemplo">Exemplo</h2>

<h3 id="Requisição_do_cliente">Requisição do cliente</h3>

<pre>GET /index.php HTTP/1.1
Host: www.example.org</pre>

<h3 id="Resposta_do_servidor">Resposta do servidor</h3>

<pre>HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7231", "301 Moved Permanently" , "6.4.2")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("http.status.301")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPStatus("308", "308 Permanent Redirect")}}</li>
 <li>{{HTTPStatus("302", "302 Found")}}, o redirecionamento temporário.</li>
</ul>
