---
title: Authorization
slug: Web/HTTP/Headers/Authorization
tags:
  - Autenticação
  - Cabeçalho HTTP
  - Cabeçalho de requisição
  - HTTP
  - Reference
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Authorization
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição HTTP <strong><code>Authorization</code></strong> contém as credenciais para autenticar o agente de usuário com o servidor, geralmente o servidor responderá com um status {{HTTPStatus("401")}} <code>Unauthorized</code> se não for possível fazer a autenticação, e com o cabeçalho {{HTTPHeader("WWW-Authenticate")}}.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalho</th>
   <td>{{Glossary("Request header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">Authorization: &lt;tipo&gt; &lt;credenciais&gt;</pre>

<h2 id="Directives">Directives</h2>

<dl>
 <dt>&lt;tipo&gt;</dt>
 <dd><a href="/en-US/docs/Web/HTTP/Authentication#Authentication_schemes">Tipo de autenticação</a>. Um tipo comum é o <a href="/en-US/docs/Web/HTTP/Authentication#Basic_authentication_scheme">"Basic"</a>. Outros tipos:
 <ul>
  <li><a href="http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml">Registro do IANA dos esquemas de Autenticação</a></li>
  <li><a href="http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html">Autenticação para servidores AWS (<code>AWS4-HMAC-SHA256</code>)</a></li>
 </ul>
 </dd>
 <dt>&lt;credenciais&gt;</dt>
 <dd>Se a autenticação "Basic" é utilizada, as credenciais construção são parecidas com isto:
 <ul>
  <li>O nome de usuário com a senha combinados por dois pontos (<code>aladdin:opensesame</code>).</li>
  <li>A cadeia de caracteres resultante é uma codificação <a href="/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding">base64</a> (<code>YWxhZGRpbjpvcGVuc2VzYW1l</code>).</li>
 </ul>

 <div class="note">
 <p><strong>Nota</strong>: Codificação Base64 não significa encriptação ou hashing! Esse método é igualmente seguro como mandar em texto limpo (base64 é uma codificação que pode ser revertida). Use o HTTPS em conjunto com a Autenticação Basic.</p>
 </div>
 </dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre>Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
</pre>

<p>Veja também <a href="/en-US/docs/Web/HTTP/Authentication">autenticação HTTP</a> para exemplos em como configurar os servidores Apache ou nginx para proteger seu site com autenticação básica HTTP.</p>

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
   <td>{{RFC("7235", "Authorization", "4.2")}}</td>
   <td>HTTP/1.1: Authentication</td>
  </tr>
  <tr>
   <td>{{RFC("7617")}}</td>
   <td>O esquema de autenticação HTTP 'Basic'</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Authentication">Autenticação HTTP</a></li>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Proxy-Authorization")}}</li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}</li>
</ul>
