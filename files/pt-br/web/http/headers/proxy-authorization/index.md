---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
tags:
  - Cabeçalho HTTP
  - Cabeçalho de requisição
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Proxy-Authorization
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho de requisição HTTP <strong><code>Proxy-Authorization</code></strong> contém as credenciais para autenticar o agente de usuário em um servidor proxy, usualmente depois do servidor responder com um código de status {{HTTPStatus("407")}} <code>Proxy Authentication Required</code> e cabeçalho {{HTTPHeader("Proxy-Authenticate")}}.</p>

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

<pre class="syntaxbox notranslate">Proxy-Authorization: &lt;type&gt; &lt;credentials&gt;</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;type&gt;</dt>
 <dd><a href="/en-US/docs/Web/HTTP/Authentication#Authentication_schemes">Tipo de autentação</a>. Um tipo comum é <a href="/en-US/docs/Web/HTTP/Authentication#Basic_authentication_scheme">"Basic"</a>. Veja também o <a href="http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml">registro IANA de esquemas de autenticação</a>.</dd>
 <dt>&lt;credentials&gt;</dt>
 <dd>As credenciais são construídas assim:
 <ul>
  <li>O nome de usuário e senha combinados com dois pontos (<code>aladdin:opensesame</code>).</li>
  <li>O resultado é uma cadeia de caracteres codificado em <a href="/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding">base64</a> (<code>YWxhZGRpbjpvcGVuc2VzYW1l</code>).</li>
 </ul>

 <div class="note">
 <p><strong>Nota</strong>: Codificação Base64 não significa encriptação ou hashing! Esse método é igualmente seguro se mandar as credenciais em texto limpo (base64 é uma codificação reversível). Prefira o uso de HTTPS em conjunto com Autenticação Básica.</p>
 </div>
 </dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<pre class="notranslate">Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7235", "Proxy-Authorization", "4.4")}}</td>
   <td>HTTP/1.1: Authentication</td>
  </tr>
  <tr>
   <td>{{RFC("7617")}}</td>
   <td>The 'Basic' HTTP Authentication Scheme</td>
  </tr>
 </tbody>
</table>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/Authentication">Autenticação HTTP</a></li>
 <li>{{HTTPHeader("Proxy-Authenticate")}}</li>
 <li>{{HTTPHeader("WWW-Authenticate")}}</li>
 <li>{{HTTPHeader("Authorization")}}</li>
 <li>{{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}</li>
</ul>
