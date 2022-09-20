---
title: HSTS
slug: Glossary/HSTS
tags:
  - HSTS
  - HTTP
  - Segurança
translation_of: Glossary/HSTS
original_slug: Glossario/HSTS
---
<p><strong><font><font>O HTTP Strict Transport Security</font></font></strong><font><font> permite que um site informe ao navegador que ele nunca deve carregar o site usando HTTP e deve converter automaticamente todas as tentativas de acessar o site usando HTTP para solicitações HTTPS. </font><font>Consiste em um cabeçalho HTTP </font></font><a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security" title="O cabeçalho de resposta HTTP Strict-Transport-Security (geralmente abreviado como HSTS) permite que um site informe aos navegadores que ele deve ser acessado apenas por HTTPS, em vez de usar HTTP."><code>Strict-Transport-Security</code></a><font><font>, enviado de volta pelo servidor com o recurso.</font></font></p>

<p><font><font>Em outras palavras, ele diz ao navegador que apenas altere o protocolo de HTTP para HTTPS em uma url (e será mais seguro) e solicitará que o navegador faça isso para cada solicitação.</font></font></p>

<p> </p>

<div>
<h2 id="Leia_Mais">Leia Mais</h2>

<ul>
 <li>{{HTTPHeader("Strict-Transport-Security")}}</li>
 <li>Artigo OWASP: <a href="https://www.owasp.org/index.php/HTTP_Strict_Transport_Security">HTTP Strict Transport Security</a></li>
 <li>Wikipedia: {{interwiki("wikipedia", "HTTP Strict Transport Security")}}</li>
</ul>
</div>
