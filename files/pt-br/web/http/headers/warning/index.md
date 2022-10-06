---
title: Warning
slug: Web/HTTP/Headers/Warning
tags:
  - Cabeçalho Geral
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Warning
---
<div>{{HTTPSidebar}}</div>

<div class="blockIndicator note">
<p><strong>Nota</strong>: O cabeçalho <code>Warning</code> será depreciado em breve; veja <a href="https://github.com/httpwg/http-core/issues/139">Warning (https://github.com/httpwg/http-core/issues/139)</a> e <a href="https://github.com/whatwg/fetch/issues/913">Warning: header &amp; stale-while-revalidate (https://github.com/whatwg/fetch/issues/913)</a> para mais detalhes.</p>
</div>

<p>O cabeçalho geral HTTP <strong><code>Warning</code></strong> contém informação sobre possíveis problemas com o status da mensagem. Mais de um cabeçalho <code>Warning</code> pode aparecer na resposta.</p>

<p>O cabeçalho <code>Warning</code> geralmente pode ser aplicado para qualquer mensagem, entretanto alguns códigos de aviso são específicos para caches e podem somente ser aplicados para mensagens de resposta.</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row">Tipo de cabeçalhos</th>
   <td>{{Glossary("General header")}}</td>
  </tr>
  <tr>
   <th scope="row">{{Glossary("Forbidden header name")}}</th>
   <td>não</td>
  </tr>
 </tbody>
</table>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate">Warning: &lt;warn-code&gt; &lt;warn-agent&gt; &lt;warn-text&gt; [&lt;warn-date&gt;]
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;warn-code&gt;</dt>
 <dd>Um número de aviso de três dígitos. O primeiro dígito indica se é necessário o <code>Warning</code> ser deletado de uma resposta guardada depois da validação.
 <ul>
  <li>Códigos de aviso <code>1xx</code> descrevem o frescor ou status de validação da resposta e será deletado por um cache depois da deleção.</li>
  <li>
   <p>Códigos de aviso <code>2xx</code> descrevem algum aspecto da representação que não é retificada por uma validação e não será deletado por uma cache depois da validação a não que a resposta completa seja enviada.</p>
  </li>
 </ul>
 </dd>
 <dt>&lt;warn-agent&gt;</dt>
 <dd>
 <p>O nome ou pseudônimo do servidor ou software adicionando o cabeçalho <code>Warning</code> (pode ser "-" quando o agente não é conhecido).</p>
 </dd>
 <dt>&lt;warn-text&gt;</dt>
 <dd>Texto consultivo descrevendo o erro.</dd>
 <dt>&lt;warn-date&gt;</dt>
 <dd>Opcional. Se mais de um cabeçalho <code>Warning</code> é enviado, inclui a data que corresponde com o cabeçalho {{HTTPHeader("Date")}}.</dd>
</dl>

<h2 id="Códigos_de_aviso_Warning">Códigos de aviso (Warning)</h2>

<p>O <a href="http://www.iana.org/assignments/http-warn-codes/http-warn-codes.xhtml">registro de Códigos de Aviso HTTP em iana.org</a> define o espaço de nomes para códigos de aviso.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Código</th>
   <th scope="col">Texto</th>
   <th scope="col">Descrição</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>110</td>
   <td>Resposta está velha</td>
   <td>A resposta provida pela cache está velha (o tempo de expiração já passou).</td>
  </tr>
  <tr>
   <td>111</td>
   <td>Revalidação falhou</td>
   <td>Uma tentaiva de validar a resposta falhou, por causa da impossibilidade de alcançar o servidor.</td>
  </tr>
  <tr>
   <td>112</td>
   <td>Operação Desconectou</td>
   <td>O cache desconectou do resto da rede.</td>
  </tr>
  <tr>
   <td>113</td>
   <td>Expiração Heurística</td>
   <td>Enviado se a cache escolhe heuristicamente um tempo de vida fresco maior que 24 horas e a idade da resposta é maior que 24 horas.</td>
  </tr>
  <tr>
   <td>199</td>
   <td>Aviso diverso</td>
   <td>Arbitrário, aviso não específico.</td>
  </tr>
  <tr>
   <td>214</td>
   <td>Transformação aplicada</td>
   <td>Adicionado por um proxy se ele aplica qualquer transformação na representação, como mudar a codificação de conteúdo, tipo de media ou semelhante.</td>
  </tr>
  <tr>
   <td>299</td>
   <td>Aviso diverso persistente</td>
   <td>O mesmo que 199, mas indicando um aviso persistente.</td>
  </tr>
 </tbody>
</table>

<h2 id="Exemplos">Exemplos</h2>

<pre class="notranslate">Warning: 110 anderson/1.3.37 "Response is stale"

Date: Wed, 21 Oct 2015 07:28:00 GMT
Warning: 112 - "cache down" "Wed, 21 Oct 2015 07:28:00 GMT"
</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificação</th>
   <th scope="col">Título</th>
  </tr>
  <tr>
   <td>{{RFC("7234", "Warning", "5.5")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Caching</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{Compat("http.headers.Warning")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("Date")}}</li>
 <li><a href="/en-US/docs/Web/HTTP/Status">Código de resposta de status HTTP</a></li>
</ul>
