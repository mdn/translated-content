---
title: Primeiros passos
slug: conflicting/Web/Guide/AJAX
---

Esse artigo guia você através dos princípios do AJAX e oferece dois exemplos práticos simples para poder começar.

### O que é AJAX?

AJAX significa Asynchronous JavaScript e XML. Em poucas palavras, é o uso do objeto [`XMLHttpRequest`](/pt-BR/DOM/XMLHttpRequest) para se comunicar com os scripts do lado do servidor. Ele pode enviar bem como receber informações em uma variedade de formatos, incluindo JSON, XML, HTML, e até mesmo arquivos de texto. Porém a característica mais atraente do AJAX, é a sua natureza "assíncrona", o que significa que ele pode fazer tudo isso sem a necessidade de atualizar a página. Isso permite a você atualizar partes de uma página com base em eventos do usuário.

Os dois recursos em questão que você pode utilizar são:

- Fazer requisições para o servidor sem recarregar a página
- Receber e trabalhar com dados do servidor

### Passo 1 - Como fazer uma requisição HTTP

Para fazer uma requisição [HTTP](/pt-BR/HTTP) ao servidor usando JavaScript, você precisa de uma instância de uma classe que fornece essa funcionalidade. Este é o lugar onde o `XMLHttpRequest` entra. Essa classe foi originalmente introduzida no Internet Explorer como um objeto ActiveX chamado `XMLHTTP`. Então, Mozilla, Safari e outros navegadores o seguiram, implementando uma classe `XMLHttpRequest` que suporta os métodos e propriedades do objeto ActiveX original da Microsoft.

Como resultado, a fim de criar uma instância (objeto) compatível com multiplos navegadores da classe requerida, você pode fazer o seguinte:

```js
var httpRequest;
if (window.XMLHttpRequest) { // Mozilla, Safari, ...
    httpRequest = new XMLHttpRequest();
} else if (window.ActiveXObject) { // IE 8 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
```

> **Nota:** Para fins de ilustração, o que precede é uma versão um tanto simplificada do código necessário para criar uma instância XMLHTTP. Para um exemplo mais real, consulte o passo 3 deste artigo.

Em seguida, você precisa decidir o que quer fazer depois de receber a resposta do servidor ao seu pedido. Nesta etapa, você somente precisa dizer ao objeto requisição HTTP qual função JavaScript irá manipular o processamento da resposta. Isto é feito definindo a propriedade `onreadystatechange` do objeto para o nome da função JavaScript que deve ser chamada quando o estado da requisição muda, desse jeito:

```
httpRequest.onreadystatechange = nameOfTheFunction;
```

Observe que não existem parênteses depois do nome da função e nenhum parâmetro é passado, porque você está simplesmente atribuindo uma referência à função, ao invés de realmente chamá-la. Além disso, em vez de dar um nome de função, você pode usar a técnica JavaScript de definir funções dinâmicamente (chamadas "funções anônimas") e definir as ações que irão processar de imediato a resposta, dessa forma:

```js
httpRequest.onreadystatechange = function(){
    // processar a resposta do servidor
};
```

Em seguida, depois de ter declarado o que vai acontecer assim que receber a resposta, você precisa realmente fazer a requisição. Você precisa chamar os métodos `open()` e `send()` da classe requisição HTTP, dessa forma:

```js
httpRequest.open('GET', 'http://www.example.org/some.file', true);
httpRequest.send(null);
```

- O primeiro parâmetro da chamada `para open()` é o método da requisição HTTP – GET, POST, HEAD ou qualquer outro método que você deseja usar e que é suportado pelo seu servidor. Mantenha o método em letras maiúsculas de acordo com o padrão HTTP; caso contrário, alguns navegadores (como o Firefox) podem não processar a requisição. Para mais informações sobre os possíveis métodos de requisição HTTP verifique as [especificações do W3C](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html).
- O segundo parâmetro é a URL da página que você está requisitando. Como um recurso de segurança, você não pode chamar páginas em domínios de terceiros. Certifique-se de usar o nome exato do domínio em todas as suas páginas ou irá obter um erro de "permissão negada" quando chamar o `open()`. Uma cilada comum é acessar o seu site pelo `domain.tld`, mas tentar chamar páginas com `www.domain.tld`. Se você realmente precisa enviar uma requisição para outro domínio, veja [controle de acesso HTTP](/En/HTTP_access_control).
- O terceiro parâmetro opcional define se a requisição é assíncrona. Se `TRUE` (o padrão), a execução da função JavaScript irá continuar enquanto a resposta do servidor não chegar. Isso é o A no AJAX.

O parâmetro para o método `send()` pode ser qualquer dado que você deseja enviar para o servidor se a requisição for `POST`. Dados de formulário devem ser enviados em um formato que o servidor possa facilmente analisar. Isso pode ser feito através de uma string de consulta, como:

```
"name=value&anothername="+encodeURIComponent(myVar)+"&so=on"
```

ou em vários outros formatos, incluindo JSON, SOAP, etc.

Observe que se você deseja utilizar `POST`, você pode ter que definir o tipo de solicitação como MIME. Por exemplo, use a linha a seguir antes de chamar `send()` para os dados do formulário enviados como uma string de consulta:

```js
httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

### Passo 2 - Manipulando a resposta do servidor

Lembre-se que quando você estava enviando a requisição, você forneceu o nome de uma função JavaScript que foi projetada para lidar com a resposta.

```js
httpRequest.onreadystatechange = nameOfTheFunction;
```

Vamos ver o que essa função deve fazer. Primeiro, a função precisa checar o estado da requisição. Se o estado da requisição tem o valor igual a "4", significa que a resposta do servidor foi recebida por completo e está tudo OK para continuar o processo.

```js
if (httpRequest.readyState === 4) {
    // everything is good, the response is received
} else {
    // still not ready
}
```

A lista completa dos valores `readyState` é a seguinte:

- 0 (não inicializado)
- 1 (carregando)
- 2 (carregado)
- 3 (interativo)
- 4 (completo)

\* readyState é algo como "estado de prontidão", mostra qual é o status do processo que está sendo executado e se está sendo executado.

([Fonte](http://msdn.microsoft.com/en-us//library/ms534361%28en-us,VS.85%29.aspx))

A próxima coisa a se checar é o [código de resposta](/pt-BR/HTTP#HTTP_Response_Codes) do servidor HTTP. Todos os possíveis códigos estão listados no site do [W3C](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html). No exemplo a seguir, nós tratamos do retorno bem sucedido ou mal sucedido da requisição HTTP do AJAX, verificando se o código de resposta for [`200`](/pt-BR/HTTP/HTTP_response_codes#200).

```js
if (httpRequest.status === 200) {
    // perfect!
} else {
    // there was a problem with the request,
    // for example the response may contain a 404 (Not Found)
    // or 500 (Internal Server Error) response code
}
```

Agora, após você ter checado o estado da requisição e o código de status do HTTP da resposta, caberá a você fazer o que quiser com os dados que o servidor lhe enviou. Você tem duas opções para acessar esses dados:

- `httpRequest.responseText` – retorna a resposta do servidor como uma string de texto
- `httpRequest.responseXML` – retorna a resposta do servidor como um objeto XMLDocument no qual você poderá percorrer usando as funções DOM do JavaScript

Note que os passos acima são válidos somente se você usou uma solicitação assíncrona (terceiro parâmetro de `open()` foi definido como `true`). Se você usou um pedido **síncrono** você não precisa especificar uma função, você pode acessar o retorno de dados pelo servidor diretamente depois de chamar `send()`, porque o script irá parar e esperar pela resposta do servidor.

### Passo 3 – Um simples exemplo

Vamos colocar tudo junto e fazer uma simples requisição HTTP. Nosso JavaScript irá solicitar um documento HTML (`test.html`) com o conteúdo "I'm a test." e depois utilizaremos `alert()` para ver o conteúdo do arquivo `test.html`.

```html
<span id="ajaxButton" style="cursor: pointer; text-decoration: underline">
  Make a request
</span>
<script type="text/javascript">
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
</script>
```

Neste exemplo:

- O usuário clica no link "Make a request" em seu browser (navegador);
- O manipulador de eventos chama a função makeRequest() com um parâmetro - o nome `test.html` de um arquivo HTML no mesmo diretório.
- A requisição é realizada e então (`onreadystatechange`) a execução é passada para `alertContents()`;
- `alertContents()` checa se a resposta foi recebida e se está OK, então `alert()` mostra o conteúdo do arquivo `test.html.`

> **Nota:** Se você está enviando uma solicitação para um pedaço de código que retornará XML, ao invés de um arquivo XML estático, é necessário definir alguns cabeçalhos de resposta se a sua página é para trabalhar com o Internet Explorer e com o Mozilla. Se você não definir cabeçalho `Content-Type: application/xml`, o IE irá lançar um erro JavaScript, "Objeto esperado", após a linha onde você tentar acessar um elemento XML..

> **Nota:** **Nota 2**: Se você não definir cabeçalho `Cache-Control: no-cache` o navegador armazenará em cache a resposta e jamais voltará a submeter o pedido, tornando a depuração "desafiadora". Também é possível acrescentar um parâmetro GET adicional sempre diferente, como o timestamp ou um número aleatório (veja [bypassing the cache](/pt-BR/DOM/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache)).

> **Nota:** **Nota 3**: Se a variável httpRequest é utilizada globalmente, funções concorrentes chamando `makeRequest()` podem sobrescrever uma à outra, causando uma condição de corrida. Declarando o httpRequest variável local para um [closure](/pt-BR/JavaScript/Guide/Closures) contendo as funções AJAX impede a condição de corrida.

Caso ocorra um erro de comunicação (tal como a queda de do servidor web), uma exceção será lançada no método onreadystatechange quando o campo status for acessado. Tenha a certeza de envolver sua declaração if...then dentro de um bloco try...catch.

```js
function alertContents() {
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
```

### Passo 4 – Trabalhando com a resposta XML

Nos exemplos anteriores, após a resposta para a requisição HTTP ser recebida nós utilizamos a propriedade `responseText` do objeto solicitado, que continha o conteúdo de arquivo `test.html` file. Agora, vamos experimentar a propriedade `responseXML`.

Em primeiro lugar, vamos criar um documento XML válido para solicitarmos mais tarde. O documento (`test.xml`) possui o seguinte conteúdo:

```html
<?xml version="1.0" ?>
<root>
    I'm a test.
</root>
```

No script nós precisamos apenas alterar a linha da requisição para:

```html
...
onclick="makeRequest('test.xml')">
...
```

Em seguida, dentro de `alertContents() precisamos substituir a linha` `alert(httpRequest.responseText);` para:

```js
var xmldoc = httpRequest.responseXML;
var root_node = xmldoc.getElementsByTagName('root').item(0);
alert(root_node.firstChild.data);
```

Este código pega o objeto `XMLDocument` obtido por `responseXML` e utiliza métodos DOM para acessar alguns dados contidos no documento XML. Você pode ver o `test.xml` [aqui](https://www.w3clubs.com/mozdev/test.xml) e o script de teste atualizado [aqui](https://www.w3clubs.com/mozdev/httprequest_test_xml.html).

### Passo 5 – Trabalhando com os dados

Finalmente, vamos enviar algum dado para o servidor e obter a resposta. Desta vez, nosso JavaScript solicitará um página dinâmica (`test.php`) que receberá os dados que enviamos e retornará um string computada - "`Hello,[user data]!`" - visualizada através de `alert().`

Primeiro, vamos adicionar uma text box em nosso HTML de modo que o usuário possa digitar o seu nome:

```html
<label>Your name:
  <input type="text" id="ajaxTextbox" />
</label>
<span id="ajaxButton" style="cursor: pointer; text-decoration: underline">
  Make a request
</span>
```

Vamos, também, adicionar uma linha para nosso manipulador de eventos obter os dados do usuário da text box e enviá-lo para função `makeRequest()` juntamente com a URL do nosso script do lado do servidor (server-side):

```js
  document.getElementById("ajaxButton").onclick = function() {
      var userName = document.getElementById("ajaxTextbox").value;
      makeRequest('test.php',userName);
  };
```

Precisamos modificar `makeRequest()` para aceitar os dados do usuário e passá-lo para o servidor. Vamos mudar o método de requisição de `GET` para `POST`, e incluir nossos dados como um parâmetro na chamada para `httpRequest.send()`:

```js
  function makeRequest(url, userName) {

    ...

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('POST', url);
    httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    httpRequest.send('userName=' + encodeURIComponent(userName));
  }
```

A função `alertContents()` pode ser escrita da mesma forma que se encontrava no **Passo 3** para alertar (`alert()`) nossa string computada, se isso for tudo o que o servidor retorna. No entanto, vamos dizer que o servidor irá retornar tanto a sequência computada como o dados original do usuário. Portanto, se o usuário digitou "Jane" na text box, a resposta do servidor ficaria assim:

`{"userData":"Jane","computedString":"Hi, Jane!"}`

Para utilizar estes dados dentro de `alertContents()`, nós não podemos simplesmente exibir com `alert()` a propriedade `responseText`. Temos que analisar (parse) e então alertar (`alert()`) `computedString`, a propriedade que queremos:

```js
function alertContents() {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        var response = JSON.parse(httpRequest.responseText);
        alert(response.computedString);
    } else {
      alert('There was a problem with the request.');
    }
}
```

O arquivo test.php possui o seguinte código

```php
$name = (isset($_POST['userName'])) ? $_POST['userName'] : 'no name';
$computedString = "Hi, " . $name;
$array = ['userName' => $name, 'computedString' => $computedString];
echo json_encode($array);
```

Para mais métodos DOM, não deixe de conferir a documentação [Mozilla's DOM implementation](http://www.mozilla.org/docs/dom/).
