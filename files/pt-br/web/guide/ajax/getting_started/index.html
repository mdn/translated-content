---
title: Primeiros passos
slug: Web/Guide/AJAX/Getting_Started
tags:
  - AJAX
  - XMLHttpRequest
translation_of: Web/Guide/AJAX/Getting_Started
---
<p>Esse artigo guia você através dos princípios do AJAX e oferece dois exemplos práticos simples para poder começar.</p>

<h3 id="O_que_é_AJAX">O que é AJAX?</h3>

<p>AJAX significa Asynchronous JavaScript e XML. Em poucas palavras, é o uso do objeto <code><a href="/en/DOM/XMLHttpRequest" title="en/XMLHttpRequest">XMLHttpRequest</a></code> para se comunicar com os scripts do lado do servidor. Ele pode enviar bem como receber informações em uma variedade de formatos, incluindo JSON, XML, HTML, e até mesmo arquivos de texto. Porém a característica mais atraente do AJAX, é a sua natureza "assíncrona", o que significa que ele pode fazer tudo isso sem a necessidade de atualizar a página. Isso permite a você atualizar partes de uma página com base em eventos do usuário.</p>

<p>Os dois recursos em questão que você pode utilizar são:</p>

<ul>
 <li>Fazer requisições para o servidor sem recarregar a página</li>
 <li>Receber e trabalhar com dados do servidor</li>
</ul>

<h3 id="Passo_1_-_Como_fazer_uma_requisição_HTTP">Passo 1 - Como fazer uma requisição HTTP</h3>

<p>Para fazer uma requisição <a href="/en/HTTP" title="en/HTTP">HTTP</a> ao servidor usando JavaScript, você precisa de uma instância de uma classe que fornece essa funcionalidade. Este é o lugar onde o<code> XMLHttpRequest</code> entra. Essa classe foi originalmente introduzida no Internet Explorer como um objeto ActiveX chamado <code>XMLHTTP</code>. Então, Mozilla, Safari e outros navegadores o seguiram, implementando uma classe <code>XMLHttpRequest</code> que suporta os métodos e propriedades do objeto ActiveX original da Microsoft. </p>

<p>Como resultado, a fim de criar uma instância (objeto) compatível com multiplos navegadores da classe requerida, você pode fazer o seguinte:</p>

<pre class="brush: js">var httpRequest;
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 8 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
</pre>

<div class="note"><strong>Nota:</strong> Para fins de ilustração, o que precede é uma versão um tanto simplificada do código necessário para criar uma instância XMLHTTP. Para um exemplo mais real, consulte o passo 3 deste artigo.</div>

<p>Em seguida, você precisa decidir o que quer fazer depois de receber a resposta do servidor ao seu pedido. Nesta etapa, você somente precisa dizer ao objeto requisição HTTP qual função JavaScript irá manipular o processamento da resposta. Isto é feito definindo a propriedade <code>onreadystatechange</code> do objeto para o nome da função JavaScript que deve ser chamada quando o estado da requisição muda, desse jeito:</p>

<pre><code>httpRequest.onreadystatechange = nameOfTheFunction;</code></pre>

<p>Observe que não existem parênteses depois do nome da função e nenhum parâmetro é passado, porque você está simplesmente atribuindo uma referência à função, ao invés de realmente chamá-la. Além disso, em vez de dar um nome de função, você pode usar a técnica JavaScript de definir funções dinâmicamente (chamadas "funções anônimas") e definir as ações que irão processar de imediato a resposta, dessa forma:</p>

<pre class="brush: js">httpRequest.onreadystatechange = function(){
    // processar a resposta do servidor
};
</pre>

<p>Em seguida, depois de ter declarado o que vai acontecer assim que receber a resposta, você precisa realmente fazer a requisição. Você precisa chamar os métodos <code>open()</code> e <code>send()</code> da classe requisição HTTP, dessa forma:</p>

<pre class="brush: js">httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send(null);
</pre>

<ul>
 <li>O primeiro parâmetro da chamada <code>para open()</code> é o método da requisição HTTP – GET, POST, HEAD ou qualquer outro método que você deseja usar e que é suportado pelo seu servidor. Mantenha o método em letras maiúsculas de acordo com o padrão HTTP; caso contrário, alguns navegadores (como o Firefox) podem não processar a requisição. Para mais informações sobre os possíveis métodos de requisição HTTP verifique as <a class="external" href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html">especificações do W3C</a>.</li>
 <li>O segundo parâmetro é a URL da página que você está requisitando. Como um recurso de segurança, você não pode chamar páginas em domínios de terceiros. Certifique-se de usar o nome exato do domínio em todas as suas páginas ou irá obter um erro de "permissão negada" quando chamar o <code>open()</code>. Uma cilada comum é acessar o seu site pelo <code>domain.tld</code>, mas tentar chamar páginas com <code>www.domain.tld</code>. Se você realmente precisa enviar uma requisição para outro domínio, veja <a href="/En/HTTP_access_control" title="https://developer.mozilla.org/en/HTTP_access_control">controle de acesso HTTP</a>.</li>
 <li>O terceiro parâmetro opcional define se a requisição é assíncrona. Se <code>TRUE</code> (o padrão), a execução da função JavaScript irá continuar enquanto a resposta do servidor não chegar. Isso é o A no AJAX.</li>
</ul>

<p>O parâmetro para o método <code>send()</code> pode ser qualquer dado que você deseja enviar para o servidor se a requisição for <code>POST</code>. Dados de formulário devem ser enviados em um formato que o servidor possa facilmente analisar. Isso pode ser feito através de uma string de consulta, como:</p>

<pre><code>"name=value&amp;anothername="+encodeURIComponent(myVar)+"&amp;so=on"</code></pre>

<p>ou em vários outros formatos, incluindo JSON, SOAP, etc.</p>

<p>Observe que se você deseja utilizar <code>POST</code>,  você pode ter que definir o tipo de solicitação como MIME. Por exemplo, use a linha a seguir antes de chamar <code>send()</code> para os dados do formulário enviados como uma string de consulta:</p>

<pre class="brush: js">httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
</pre>

<h3 id="Passo_2_-_Manipulando_a_resposta_do_servidor">Passo 2 - Manipulando a resposta do servidor</h3>

<p>Lembre-se que quando você estava enviando a requisição, você forneceu o nome de uma função JavaScript que foi projetada para lidar com a resposta.</p>

<pre class="brush: js">httpRequest.onreadystatechange = nameOfTheFunction;
</pre>

<p>Vamos ver o que essa função deve fazer. Primeiro, a função precisa checar o estado da requisição. Se o estado da requisição tem o valor igual a "4", significa que a resposta do servidor foi recebida por completo e está tudo OK para continuar o processo.</p>

<pre class="brush: js">if (httpRequest.readyState === 4) {
    // everything is good, the response is received
} else {
    // still not ready
}
</pre>

<p>A lista completa dos valores <code>readyState</code> é a seguinte:</p>

<ul>
 <li>0 (não inicializado)</li>
 <li>1 (carregando)</li>
 <li>2 (carregado)</li>
 <li>3 (interativo)</li>
 <li>4 (completo)</li>
</ul>

<p>* readyState é algo como "estado de prontidão", mostra qual é o status do processo que está sendo executado e se está sendo executado.</p>

<p>(<a class="external" href="http://msdn.microsoft.com/en-us//library/ms534361%28en-us,VS.85%29.aspx">Fonte</a>)</p>

<p>A próxima coisa a se checar é o <a href="/en/HTTP#HTTP_Response_Codes" title="en/HTTP#HTTP Response Codes">código de resposta</a> do servidor HTTP. Todos os possíveis códigos estão listados no site do <a class="external" href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">W3C</a>. No exemplo a seguir, nós tratamos do retorno bem sucedido ou mal sucedido da requisição HTTP do AJAX, verificando se o código de resposta for <a href="/en/HTTP/HTTP_response_codes#200" title="https://developer.mozilla.org/en/HTTP/HTTP_response_codes#200"><code>200</code></a>.</p>

<pre class="brush: js">if (httpRequest.status === 200) {
    // perfect!
} else {
    // there was a problem with the request,
    // for example the response may contain a 404 (Not Found)
    // or 500 (Internal Server Error) response code
}
</pre>

<p>Agora, após você ter checado o estado da requisição e o código de status do HTTP da resposta, caberá a você fazer o que quiser com os dados que o servidor lhe enviou. Você tem duas opções para acessar esses dados:</p>

<ul>
 <li><code>httpRequest.responseText</code> – retorna a resposta do servidor como uma string de texto</li>
 <li><code>httpRequest.responseXML</code> – retorna a resposta do servidor como um objeto XMLDocument no qual você poderá percorrer usando as funções DOM do JavaScript</li>
</ul>

<p>Note que os passos acima são válidos somente se você usou uma solicitação assíncrona (terceiro parâmetro de <code>open()</code> foi definido como <code>true</code>). Se você usou um pedido <strong>síncrono</strong> você não precisa especificar uma função, você pode acessar o retorno de dados pelo servidor diretamente depois de chamar <code>send()</code>, porque o script irá parar e esperar pela resposta do servidor.</p>

<h3 id="Passo_3_–_Um_simples_exemplo">Passo 3 – Um simples exemplo</h3>

<p>Vamos colocar tudo junto e fazer uma simples requisição HTTP. Nosso JavaScript irá solicitar um documento HTML (<code>test.html</code>) com o conteúdo "I'm a test." e depois utilizaremos <code>alert()</code> para ver o conteúdo do arquivo <code>test.html</code>.</p>

<pre class="brush: html">&lt;span id="ajaxButton" style="cursor: pointer; text-decoration: underline"&gt;
  Make a request
&lt;/span&gt;
&lt;script type="text/javascript"&gt;
(function() {
  var httpRequest;
  document.getElementById("ajaxButton").onclick = function() { makeRequest('test.html'); };

  function makeRequest(url) {
    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
      httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
      try {
        httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
      }
      catch (e) {
        try {
          httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) {}
      }
    }

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
})();
&lt;/script&gt;
</pre>

<p><br>
 Neste exemplo:</p>

<ul>
 <li>O usuário clica no link "Make a request" em seu browser (navegador);</li>
 <li>O manipulador de eventos chama a função makeRequest()  com um parâmetro - o nome <code>test.html</code> de um arquivo HTML no mesmo diretório.</li>
 <li>A requisição é realizada e então (<code>onreadystatechange</code>) a execução é passada para <code>alertContents()</code>;</li>
 <li><code>alertContents()</code> checa se a resposta foi recebida e se está OK, então <code>alert()</code> mostra o conteúdo do arquivo <code>test.html.</code></li>
</ul>

<div class="note"><strong>Nota</strong>: Se você está enviando uma solicitação para um pedaço de código que retornará XML, ao invés de um arquivo XML estático, é necessário definir alguns cabeçalhos de resposta se a sua página é para trabalhar com o Internet Explorer e com o Mozilla. Se você não definir cabeçalho <code>Content-Type: application/xml</code>, o IE irá lançar um erro JavaScript, "Objeto esperado", após a linha onde você tentar acessar um elemento XML..</div>

<div class="note"><strong>Nota 2</strong>: Se você não definir cabeçalho <code>Cache-Control: no-cache</code> o navegador armazenará em cache a resposta e jamais voltará a submeter o pedido, tornando a depuração "desafiadora". Também é possível acrescentar um parâmetro GET adicional sempre diferente, como o timestamp ou um número aleatório (veja <a href="https://developer.mozilla.org/en/DOM/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache" title="https://developer.mozilla.org/En/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache">bypassing the cache</a>).</div>

<div class="note"><strong>Nota 3</strong>: Se a variável httpRequest é utilizada globalmente, funções concorrentes chamando <code>makeRequest</code><code>()</code> podem sobrescrever uma à outra, causando uma condição de corrida. Declarando o httpRequest variável local para um <a href="https://developer.mozilla.org/en/JavaScript/Guide/Closures" title="https://developer.mozilla.org/en/JavaScript/Guide/Closures">closure</a> contendo as funções AJAX impede a condição de corrida.</div>

<p>Caso ocorra um erro de comunicação (tal como a queda de do servidor web), uma exceção será lançada no método onreadystatechange quando o campo status for acessado. Tenha a certeza de envolver sua declaração if...then dentro de um bloco try...catch.</p>

<pre class="brush: js">function alertContents() {
  try {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  catch( e ) {
    alert('Caught Exception: ' + e.description);
  }
}
</pre>

<h3 id="Passo_4_–_Trabalhando_com_a_resposta_XML">Passo 4 – Trabalhando com a resposta XML</h3>

<p>Nos exemplos anteriores, após a resposta para a requisição HTTP ser recebida nós utilizamos a propriedade <code>responseText</code> do objeto solicitado,  que continha o conteúdo de arquivo  <code>test.html</code> file. Agora, vamos experimentar a propriedade <code>responseXML</code>.</p>

<p>Em primeiro lugar, vamos criar um documento XML válido para solicitarmos mais tarde. O documento  (<code>test.xml</code>) possui o seguinte conteúdo:</p>

<pre class="brush: html">&lt;?xml version="1.0" ?&gt;
&lt;root&gt;
    I'm a test.
&lt;/root&gt;
</pre>

<p>No script nós precisamos apenas alterar a linha da requisição para:</p>

<pre class="brush: html">...
onclick="makeRequest('test.xml')"&gt;
...
</pre>

<p>Em seguida,  dentro de <code>alertContents() precisamos substituir a linha</code> <code>alert(httpRequest.responseText);</code> para:</p>

<pre class="brush: js">var xmldoc = httpRequest.responseXML;
var root_node = xmldoc.getElementsByTagName('root').item(0);
alert(root_node.firstChild.data);
</pre>

<p>Este código pega o objeto <code>XMLDocument</code> obtido por <code>responseXML</code> e utiliza métodos DOM para acessar alguns dados contidos no documento XML. Você pode ver o <code>test.xml</code> <a class="external" href="http://www.w3clubs.com/mozdev/test.xml">aqui</a> e o script de teste atualizado <a class="external" href="http://www.w3clubs.com/mozdev/httprequest_test_xml.html">aqui</a>.</p>

<h3 id="Passo_5_–_Trabalhando_com_os_dados">Passo 5 – Trabalhando com os dados</h3>

<p>Finalmente, vamos enviar algum dado para o servidor e obter a resposta. Desta vez, nosso JavaScript solicitará um página dinâmica (<code>test.php</code>)  que receberá os dados que enviamos e retornará um string computada - "<code>Hello,[user data]!</code>" - visualizada através de <code>alert().</code></p>

<p>Primeiro, vamos adicionar uma text box em nosso HTML de modo que o usuário possa digitar o seu nome:</p>

<pre class="brush: html">&lt;label&gt;Your name:
  &lt;input type="text" id="ajaxTextbox" /&gt;
&lt;/label&gt;
&lt;span id="ajaxButton" style="cursor: pointer; text-decoration: underline"&gt;
  Make a request
&lt;/span&gt;</pre>

<p>Vamos, também, adicionar uma linha para nosso manipulador de eventos obter os dados do usuário da text box e enviá-lo para função <code>makeRequest()</code> juntamente com a URL do nosso script do lado do servidor (server-side):</p>

<pre class="brush: js">  document.getElementById("ajaxButton").onclick = function() {
      var userName = document.getElementById("ajaxTextbox").value;
      makeRequest('test.php',userName);
  };
</pre>

<p>Precisamos modificar <code>makeRequest </code><code>()</code> para aceitar os dados do usuário e passá-lo para o servidor. Vamos mudar o método de requisição de <code>GET</code> para <code>POST</code>, e incluir nossos dados como um parâmetro na chamada para <code>httpRequest.send()</code>:</p>

<pre class="brush: js">  function makeRequest(url, userName) {

    ...

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('userName=' + encodeURIComponent(userName));
  }
</pre>

<p>A função <code>alertContents()</code> pode ser escrita da mesma forma que se encontrava no <strong>Passo 3</strong> para alertar (<code>alert()</code>) nossa string computada,  se isso for tudo o que o servidor retorna. No entanto, vamos dizer que  o servidor irá retornar tanto a sequência computada como o dados original do usuário. Portanto, se o usuário digitou "Jane" na text box, a resposta do servidor ficaria assim:</p>

<p><code>{"userData":"Jane","computedString":"Hi, Jane!"}</code></p>

<p>Para utilizar estes dados dentro de <code>alertContents()</code>, nós não podemos simplesmente exibir com <code>alert()</code>  a propriedade <code>responseText</code>. Temos que analisar (parse) e então alertar (<code>alert()</code>) <code>computedString,</code> a propriedade que queremos:</p>

<pre class="brush: js">function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var response = JSON.parse(httpRequest.responseText);
        alert(response.computedString);
    } else {
      alert('There was a problem with the request.');
    }
}</pre>

<p>O arquivo test.php possui o seguinte código</p>

<pre class="brush: php">$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'no name';
$computedString = "Hi, " . $name;
$array = ['userName' =&gt; $name, 'computedString' =&gt; $computedString];
echo json_encode($array);</pre>

<p>Para mais métodos DOM, não deixe de conferir a documentação <a class="external" href="http://www.mozilla.org/docs/dom/">Mozilla's DOM implementation</a>.</p>
