---
title: 506 Variant Also Negotiates
slug: Web/HTTP/Status/506
tags:
  - Código de status
  - Erro do servidor
  - HTTP
  - Server error
  - Status code
translation_of: Web/HTTP/Status/506
---
<div>{{HTTPSidebar}}</div>

<p>O código de status de resposta HTTP <code><strong>506 Variant Also Negotiates</strong></code> pode ser dado no contexto de Negociação de Conteúdo Transparente (Transparent Content Negotiation) (veja <a href="https://tools.ietf.org/html/rfc2295">RFC 2295</a>). Esse protocolo permite ao cliente requerer a melhor variante de um dado recurso, onde um servidor fornece múltiplos variantes.</p>

<p>O código de status <code><strong>Variant Also Negotiates</strong></code> indica um erro na configuração interna do servidor na qual a variante escolhida é em si configurada para entrar em uma negociação de conteúdo, então não é um <em>endpoint</em> de negociação apropriado.</p>

<h2 id="Status">Status</h2>

<pre class="syntaxbox">506 Variant Also Negotiates</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("2295", "506 Variant Also Negotiates" , "8.1")}}</td>
   <td>Transparent Content Negotiation in HTTP</td>
  </tr>
 </tbody>
</table>
