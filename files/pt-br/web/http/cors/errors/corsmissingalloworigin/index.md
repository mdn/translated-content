---
title: 'Reason: CORS header ''Access-Control-Allow-Origin'' missing'
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
tags:
  - CORS
  - Cross-Origin
  - Error
  - HTTP
  - HTTPS
  - Reasons
translation_of: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
---
<div>{{HTTPSidebar}}</div>

<h2 id="Motivo">Motivo</h2>

<pre class="syntaxbox">Reason: CORS header 'Access-Control-Allow-Origin' missing</pre>

<h2 id="O_que_houve_de_errado">O que houve de errado?</h2>

<p>A resposta à requisição {{Glossary ("CORS")}} está sem o cabeçalho {{HTTPHeader ("Access-Control-Allow-Origin")}} necessário, que é usado para determinar se o recurso pode ser acessado ou não pelo conteúdo operando dentro da origem atual.</p>

<p>Se o servidor estiver sob seu controle, adicione a origem do site solicitante ao conjunto de domínios de acesso permitido, adicionando-o ao valor do cabeçalho <code>Access-Control-Allow-Origin</code>.</p>

<p>Por exemplo, para permitir que um site da origem https://amazing.site acesse ao recurso usando CORS, o cabeçalho deve conter:</p>

<pre>Access-Control-Allow-Origin: https://amazing.site</pre>

<p>Você também pode configurar um site para permitir que qualquer site o acesse usando o curinga <code>"*"</code>. Você só deve usar isso para APIs públicas. As APIs privadas nunca devem usar <code>"*"</code> e devem ter um domínio ou domínios específicos definidos. Além disso, o curinga só funciona para solicitações feitas com o atributo {{htmlattrxref ("crossorigin")}} definido como <code>"anonymous"</code>.</p>

<pre>Access-Control-Allow-Origin: *</pre>

<div class="warning">
<p><strong>Advertência:</strong> Usar o caractere curinga para permitir que todos os sites acessem uma API privada é uma péssima ideia para o que deve ser uma razão óbvia.</p>
</div>



<p>Por exemplo, no Apache, adicione uma linha como a seguinte à configuração do servidor (na seção <code>&lt;Directory&gt;</code>, <code>&lt;Location&gt;</code>, <code>&lt;Files&gt;</code> ou <code>&lt;VirtualHost&gt;</code> apropriada). A configuração é tipicamente encontrada em um arquivo <code>.conf</code> (<code>httpd.conf</code> e <code>apache.conf</code> são nomes comuns para estes), ou em um arquivo <code>.htaccess</code>.</p>

<pre>Header set Access-Control-Allow-Origin '<em>origin-list</em>'</pre>

<p>No Nginx, O comando para configurar este cabeçalho é:</p>

<pre>add_header 'Access-Control-Allow-Origin' '<em>origin-list</em>'</pre>



<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/HTTP/CORS/Errors">CORS errors (Erros do CORS)</a></li>
 <li>Glossário: {{Glossary("CORS")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/CORS">CORS introduction (Introdução ao CORS)</a></li>
</ul>
