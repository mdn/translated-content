---
title: Cabeçalho HTTP
slug: Glossary/HTTP_header
tags:
  - Cabeçalho HTTP
  - Glossary
  - Glossário
  - HTTP Header
  - Mecânicas da Web
  - WebMechanics
translation_of: Glossary/HTTP_header
original_slug: Glossario/Cabecalho_HTTP
---
<p>Um <strong>Cabeçalho HTTP</strong> é um campo de uma requisição ou resposta HTTP que passa informações adicionais, alterando ou melhorando a precisão da semântica da mensagem ou do corpo. Cabeçalhos são <em>case-insensitive</em>, iniciam-se no começo da linha e são seguidos imediamente por um <code>':'</code> e um valor dependendo do cabeçalho em si. O valor termina no próximo CRLF ou no fim da mensagem.</p>

<p>Tradicionalmente, cabeçalhos são classificados em categorias, apesar disso, essa classificação não faz mais parte de nenhuma especificação:</p>

<ul>
 <li>{{Glossary("General header")}}: Cabeçalhos aplicados ambos em requisições e respostas mas sem nenhuma relação com os dados eventualmente transmitidos no corpo.</li>
 <li>{{Glossary("Request header")}}: Cabeçalhos contendo mais informação sobre o recurso a ser buscado ou sobre o cliente em si.</li>
 <li>{{Glossary("Response header")}}: Cabeçalhos com informação adicional sobre a resposta, como localização ou sobre o servidor em si (nome, versão etc.).</li>
 <li>{{Glossary("Entity header")}}: Cabeçalhos contendo mais informação sobre o corpo da entidade, como o tamanho do conteúdo ou o seu <em>MIME-type.</em></li>
</ul>

<p>Uma requisição básica com um cabeçalho:</p>

<pre>GET /example.http HTTP/1.1
Host: example.com
</pre>

<p>Redirecionamentos possuem cabeçalhos mandatários ({{HTTPHeader("Location")}}):</p>

<pre>302 Found
Location: /NewPage.html
</pre>

<p>Um típicos conjunto de cabeçalhos:</p>

<pre>304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
</pre>

<section id="Quick_links">
<ol>
 <li>Especificações
  <ol>
   <li>Sintaxe dos <a href="https://tools.ietf.org/html/rfc7230#section-3.2">cabeçalhos</a> na especificação HTTP.</li>
  </ol>
 </li>
 <li>Referência Técnica
  <ol>
   <li><a href="/pt-BR/docs/Web/HTTP/Headers">Lista de todos os cabeçalhos HTTP</a></li>
  </ol>
 </li>
 <li><a href="/pt-BR/docs/Glossario">Glossário</a>
  <ol>
   <li>{{Glossary("HTTP header")}}</li>
   <li>{{Glossary("General header")}}</li>
   <li>{{Glossary("Request header")}}</li>
   <li>{{Glossary("Response header")}}</li>
   <li>{{Glossary("Entity header")}}</li>
   <li>{{Glossary("Forbidden header name")}}</li>
   <li>{{Glossary("Forbidden response header name")}}</li>
   <li>{{Glossary("CORS-safelisted request header")}}</li>
   <li>{{Glossary("CORS-safelisted response header")}}</li>
  </ol>
 </li>
</ol>
</section>
