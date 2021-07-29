---
title: encodeURI()
slug: Web/JavaScript/Reference/Global_Objects/encodeURI
tags:
  - Codificação
  - JavaScript
  - Texto
  - URI
  - URL
  - encodeURI
  - metodo
translation_of: Web/JavaScript/Reference/Global_Objects/encodeURI
---
<div>{{jsSidebar("Objects")}}</div>

<p>A função <code><strong>encodeURI()</strong></code> codifica a <a href="/en-US/docs/Glossary/URI">URI</a> substituindo cada instância de certos caracteres por um, dois, três ou quatro sequências de escape representando a codificação <a href="/en-US/docs/Glossary/UTF-8">UTF-8</a> do caracter (será somente quatro sequências de escape para caracteres compostos de dois caracteres substitutos).</p>

<div>{{EmbedInteractiveExample("pages/js/globalprops-encodeuri.html")}}</div>



<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox notranslate"><code>encodeURI(<var>URI</var>)</code></pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code><var>URI</var></code></dt>
 <dd>Uma URI completa.</dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Uma nova cadeia de caracteres representando a cadeia de caracteres provida, codificada como uma URI.</p>

<h2 id="Descrição">Descrição</h2>

<p>A função <code>encodeURI()</code> não codifica caracteres que possuem significado especial (caracteres reservados) para a URI. O exemplo seguinte mostra todas as partes que o "esquema" da URI pode possivelmente conter. Note como certos caracteres são usados para dar significado especial:</p>

<pre class="notranslate">http://username:password@www.example.com:80/path/to/file.php?foo=316&amp;bar=this+has+spaces#anchor</pre>

<p>Consequentemente, <code>encodeURI()</code> <strong>não</strong> codifica caracteres que são necessários para formular uma URI completa. Também, <code>encodeURI()</code> <strong>não</strong> codifica alguns caracteres adicionais, conhecidos como "marcas não reservadas (unreserved marks)", que não tem propósito reservado mas são permitidos na URI "como são". (Veja <a href="https://www.ietf.org/rfc/rfc2396.txt">RFC2396)</a></p>

<p><code>encodeURI()</code> escapa todos os caracteres <strong>exceto</strong>:</p>

<pre class="notranslate"><strong>Não escapado</strong>:

    A-Z a-z 0-9 ; , / ? : @ &amp; = + $ - _ . ! ~ * ' ( ) #<code>
</code>
</pre>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="encodeURI_vs_encodeURIComponent">encodeURI vs encodeURIComponent</h3>

<p><code>encodeURI()</code> se difere de {{jsxref("encodeURIComponent", "encodeURIComponent()")}} como a seguir:</p>

<pre class="brush: js notranslate">var set1 = ";,/?:@&amp;=+$#"; // Caracteres reservados
var set2 = "-_.!~*'()";   // Marcas não reservadas
var set3 = "ABC abc 123"; // Caracteres alfanuméricos + Espaço

console.log(encodeURI(set1)); // ;,/?:@&amp;=+$#
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // ABC%20abc%20123 (o espaço é codificado como %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // ABC%20abc%20123 (o espaço é codificado como %20)
</pre>

<p>Note que <code>encodeURI()</code> por si só não pode formar requisições <a href="/en-US/docs/Web/HTTP/Methods/GET" title="The HTTP GET method requests a representation of the specified resource. Requests using GET should only retrieve data."><code>GET</code></a> e <a href="/en-US/docs/Web/HTTP/Methods/POST" title="The HTTP POST method sends data to the server. The type of the body of the request is indicated by the Content-Type header."><code>POST</code></a>, como para <a href="/en-US/docs/Web/API/XMLHttpRequest" title="Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing."><code>XMLHttpRequest</code></a>, porque <code>"&amp;"</code>, <code>"+"</code>, e <code>"="</code> não são codificados, que são tratados como caracteres especiais em requisições <code>GET</code> e <code>POST</code>. <code>encodeURIComponent()</code>, entretanto, codifica esses caracteres.</p>

<h3 id="Codificando_um_substituto_solitário_alto_joga">Codificando um substituto solitário alto joga</h3>

<p>Um {{jsxref("URIError")}} será jogado se uma tentativa de codificar um substituto que não é parte de um par alto-baixo, e.g.,</p>

<pre class="brush: js notranslate">// par alto-baixo ok
console.log(encodeURI('\uD800\uDFFF'));

// substituto alto solitário joga "URIError: malformed URI sequence"
console.log(encodeURI('\uD800'));

// substituto baixo solitário joga "URIError: malformed URI sequence"
console.log(encodeURI('\uDFFF'));</pre>

<h3 id="Codificando_para_IPv6">Codificando para IPv6</h3>

<p>Se você deseja seguir a <a href="http://tools.ietf.org/html/rfc3986">RFC3986</a> mais recente para URLs, que faz colchetes ser reservado (para <a href="/en-US/docs/Glossary/IPv6">IPv6</a>) e então não será codificado quando formando algo que possa ser parte da URL (como o host), o seguinte código pode ajudar:</p>

<pre class="brush: js notranslate">function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Especificação</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-encodeuri-uri', 'encodeURI')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>



<p>{{Compat("javascript.builtins.encodeURI")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{jsxref("decodeURI", "decodeURI()")}}</li>
 <li>{{jsxref("encodeURIComponent", "encodeURIComponent()")}}</li>
 <li>{{jsxref("decodeURIComponent", "decodeURIComponent()")}}</li>
</ul>
