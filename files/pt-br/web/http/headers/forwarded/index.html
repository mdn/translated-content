---
title: Forwarded
slug: Web/HTTP/Headers/Forwarded
tags:
  - Cabeçalho HTTP
  - Cabeçalho de requisição
  - HTTP
  - Referencia
  - cabeçalho
translation_of: Web/HTTP/Headers/Forwarded
---
<div>{{HTTPSidebar}}</div>

<p>O cabeçalho <strong><code>Forwarded</code></strong> contém informação dos <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Proxy_servers_and_tunneling">servidores de proxy reverso</a> que é alterada ou perdida quando um proxy está envolvido no caminho da requisição.</p>

<p>A versão alternativa e de fato padrão deste cabeçalho são os cabeçalhos {{HTTPHeader("X-Forwarded-For")}}, {{HTTPHeader("X-Forwarded-Host")}} e {{HTTPHeader("X-Forwarded-Proto")}}.</p>

<p>Este cabeçalho é utilizado para depuração, estatísticas, e gerar conteúdo localmente dependente e por design ele expõe informações privadas sensíveis, como o endereço IP do cliente. Sendo assim, a privacidade do usuário deve sempre estar em mente quando utilizando este cabeçalho.</p>

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

<pre class="syntaxbox notranslate">Forwarded: by=&lt;identifier&gt;;for=&lt;identifier&gt;;host=&lt;host&gt;;proto=&lt;http|https&gt;
</pre>

<h2 id="Diretivas">Diretivas</h2>

<dl>
 <dt>&lt;identifier&gt;</dt>
 <dd>Um identificador divulgando a informação que é alterada ou perdida usando um proxy. Ela pode ser tanto:
 <ul>
  <li>um endereço IP (v4 ou v6, opicionalmente com a porta, e IPv6 encapsulado por colchetes e aspas),</li>
  <li>um identificador ofuscado (como um "_hidden" ou "_secret"),</li>
  <li>ou "unknown" (desconhecido) quando a entidade precedente não é conhecida (e você ainda quer indicar que aquela repassagem da requisição foi feita).</li>
 </ul>
 </dd>
 <dt>by=&lt;identifier&gt;</dt>
 <dd>A interface onde a requisição chegou ao servidor proxy.</dd>
 <dt>for=&lt;identifier&gt;</dt>
 <dd>O cliente que iniciou a requisição e subsequentes proxies na cadeia de proxies.</dd>
 <dt>host=&lt;host&gt;</dt>
 <dd>O cabeçalho de requisição {{HTTPHeader("Host")}} como foi recebido pelo proxy.</dd>
 <dt>proto=&lt;http|https&gt;</dt>
 <dd>
 <p>Indica qual protocolo foi usado para fazer a requisição (tipicamente "http" ou "https").</p>
 </dd>
</dl>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Usando_o_cabeçalho_Forwarded">Usando o cabeçalho <code>Forwarded</code></h3>

<pre class="notranslate">Forwarded: for="_mdn"

# sem sensibilidade de capitalização
Forwarded: For="[2001:db8:cafe::17]:4711"

# separado por ponto e vírgula
Forwarded: for=192.0.2.60;proto=http;by=203.0.113.43

# múltiplos valores podem ser concatenados usando uma vírgula
Forwarded: for=192.0.2.43, for=198.51.100.17
</pre>

<h3 id="Transicionando_de_X-Forwarded-For_para_Forwarded">Transicionando de <code>X-Forwarded-For</code> para <code>Forwarded</code></h3>

<p>Se a sua aplicação, servidor, ou proxy suporta o cabeçalho padrozinado <code>Forwarded</code>, o cabeçalho {{HTTPHeader("X-Forwarded-For")}} pode então ser substituído. Note que o endereço IPv6 está entre colchetes e aspas em <code>Forwarded</code>.</p>

<pre class="notranslate">X-Forwarded-For: 123.34.567.89
Forwarded: for=123.34.567.89

X-Forwarded-For: 192.0.2.43, "[2001:db8:cafe::17]"
Forwarded: for=192.0.2.43, for="[2001:db8:cafe::17]"
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
   <td>{{RFC("7239", "Forwarded", "4")}}</td>
   <td>Forwarded HTTP Extension</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("http.headers.Forwarded")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{HTTPHeader("X-Forwarded-For")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Host")}}</li>
 <li>{{HTTPHeader("X-Forwarded-Proto")}}</li>
 <li>{{HTTPHeader("Via")}} – provém informação sobre o proxy em si, não sobre o cliente conectando a ele.</li>
</ul>
