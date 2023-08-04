---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
---

{{APIRef("XMLHttpRequest")}}

`XMLHttpRequest` é um objeto que fornece funcionalidade ao cliente para transferir dados entre um cliente e um servidor. Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer uma atualização de página inteira. Isso permite que uma página da Web atualize apenas uma parte do conteúdo sem interromper o que o usuário esteja fazendo. XMLHttpRequest é usado constantemente na programação de [AJAX](/pt-BR/docs/AJAX).

`XMLHttpRequest` foi originalmente projetado pela Microsoft e adotado pela Mozilla, Apple e Google. Está sendo padronizado pela [WHATWG](https://xhr.spec.whatwg.org/). Apesar do nome, XMLHttpRequest pode ser usado para recuperar qualquer tipo de dados, e não apenas XML, suportando também, protocolos diferentes de [HTTP](/pt-BR/HTTP) (incluindo file e ftp ).

Para criar uma instância de XMLHttpRequest , basta fazer isso:

```
var myRequest = new XMLHttpRequest();
```

Para obter detalhes sobre como usar XMLHttpRequest , consulte [Usando XMLHttpRequest](/pt-BR/DOM/XMLHttpRequest/Using_XMLHttpRequest).

## Métodos

| `XMLHttpRequest(JSObject objParameters);`                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `void abort();`                                                                                                                                             |
| `DOMString getAllResponseHeaders();`                                                                                                                        |
| `DOMString? getResponseHeader(DOMString header);`                                                                                                           |
| `void open(DOMString method, DOMString url, optional boolean async, optional DOMString? user, optional DOMString? password);`                               |
| `void overrideMimeType(DOMString mime);`                                                                                                                    |
| `void send();` `void send(ArrayBuffer data);` `void send(Blob data);` `void send(Document data);` `void send(DOMString? data);` `void send(FormData data);` |
| `void setRequestHeader(DOMString header, DOMString value);`                                                                                                 |
| Métodos não-padrão                                                                                                                                          |
| `[noscript] void init(in nsIPrincipal principal, in nsIScriptContext scriptContext, in nsPIDOMWindow ownerWindow);`                                         |
| `[noscript] void openRequest(in AUTF8String method, in AUTF8String url, in boolean async, in AString user, in AString password);`                           |
| `void sendAsBinary(in DOMString body);`                                                                                                                     |

## Propriedades

<table class="standard-table">
  <tbody>
    <tr>
      <th>Atributo</th>
      <th>Tipo</th>
      <th>Descrição</th>
    </tr>
    <tr id="onreadystatechange">
      <td>
        <p><code>onreadystatechange</code></p>
      </td>
      <td><code>Function?</code></td>
      <td>
        <p>
          A função de objeto JavaScript que é chamado sempre que o atributo
          readyState sofre alteração. A função de callback é chamada a partir da
          thread existente na interface de usuário.
        </p>
        <div class="warning">
          <strong>Aviso:</strong> Este não deve ser usado com chamadas síncronas
          e não deve ser utilizado a partir do código nativo.
        </div>
      </td>
    </tr>
    <tr id="readyState">
      <td><code>readyState</code></td>
      <td><code>retorna o cabeçalho da requisição.</code></td>
      <td>
        <p></p>
        <table class="standard-table">
          <tbody>
            <tr>
              <td class="header">Valor</td>
              <td class="header">Estado</td>
              <td class="header">Descrição</td>
            </tr>
            <tr>
              <td><code>0</code></td>
              <td><code>UNSENT</code></td>
              <td><code>open() não foi chamado ainda.</code></td>
            </tr>
            <tr>
              <td><code>1</code></td>
              <td><code>OPENED</code></td>
              <td><code>send() não foi chamado ainda.</code></td>
            </tr>
            <tr>
              <td><code>2</code></td>
              <td><code>HEADERS_RECEIVED</code></td>
              <td>
                <code
                  >send() foi chamado, e cabeçalhos e status estão
                  disponíveis.</code
                >
              </td>
            </tr>
            <tr>
              <td><code>3</code></td>
              <td><code>LOADING</code></td>
              <td>Download; responseText contém dados parciais.</td>
            </tr>
            <tr>
              <td><code>4</code></td>
              <td><code>DONE</code></td>
              <td>A operação está concluída.</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr id="response">
      <td><code>response</code></td>
      <td>ArrayBuffer, Document,Blob, DOMString</td>
      <td>
        <p>
          Retorna um objeto JavaScript de tipo
          {{domxref("ArrayBuffer")}}, {{domxref("Blob")}} ou
          {{domxref("Document")}}, de acordo com o que estiver contido
          no <code><a href="#responseType">responseType</a>. </code>Retorna
          <code>null</code> se a request não esteja completa ou não obteve
          sucesso.
        </p>
      </td>
    </tr>
    <tr id="responseText">
      <td><code>responseText</code> {{ReadOnlyInline()}}</td>
      <td><code>DOMString</code></td>
      <td>
        A resposta à <em>request</em>, em formato texto, retorna null se a
        solicitação não teve êxito ou que ainda não foi enviada.
      </td>
    </tr>
    <tr id="responseType">
      <td><code>responseType</code></td>
      <td><code>XMLHttpRequestResponseType</code></td>
      <td>
        <p>Pode ser configurado para alterar o tipo de resposta.</p>
        <table class="standard-table" style="width: auto">
          <tbody>
            <tr>
              <td class="header">Valor</td>
              <td class="header">
                Tipo de dados de <code>resposta</code> de propriedade
              </td>
            </tr>
            <tr>
              <td><code>""</code> (string vazia)</td>
              <td>String (este é o padrão)</td>
            </tr>
            <tr>
              <td><code>"arraybuffer"</code></td>
              <td>
                <a
                  href="/en/JavaScript_typed_arrays/ArrayBuffer"
                  ><code>ArrayBuffer</code></a
                >
              </td>
            </tr>
            <tr>
              <td><code>"blob"</code></td>
              <td>{{ domxref("Blob") }}</td>
            </tr>
            <tr>
              <td><code>"document"</code></td>
              <td>{{ domxref("Document") }}</td>
            </tr>
            <tr>
              <td><code>"json"</code></td>
              <td>
                Objeto JavaScript, analisado a partir de uma seqüência de
                caracteres JSON retornado pelo servidor.
              </td>
            </tr>
            <tr>
              <td><code>"text"</code></td>
              <td>String</td>
            </tr>
            <tr>
              <td><code>"moz-blob"</code></td>
              <td>
                Usado pelo Firefox para permitir recuperar dados parciais do
                tipo {{ domxref("Blob") }},de eventos de progresso. Isso
                permite que o manipulador de eventos de progresso iniciar o
                processamento de dados enquanto ele ainda está sendo recebido.
              </td>
            </tr>
            <tr>
              <td><code>"moz-chunked-text"</code></td>
              <td>
                <p>
                  Semelhante ao "text" , mas o <em>streaming </em>ainda está
                  fluindo. Isto significa que o valor na response , só está
                  disponível durante a expedição do "progress" do evento e
                  contém apenas os dados recebidos desde a última "progress" do
                  evento.
                </p>
                <p>
                  Quando response é acessado durante um evento "progress", este
                  contém uma string com os dados. Caso contrário, retorna null .
                </p>
                <p>Este modo atualmente só funciona no Firefox.</p>
              </td>
            </tr>
            <tr>
              <td><code>"moz-chunked-arraybuffer"</code></td>
              <td>
                <p>
                  Semelhante ao <code>"arraybuffer"</code>, mas está fluindo.
                  Isto significa que o valor na response , só está disponível
                  durante a expedição do "progress" do evento e contém apenas os
                  dados recebidos desde a última "progress" do evento.
                </p>
                <p>
                  Quando response é acessado durante um "progress" evento que
                  contém uma seqüência com os dados. Caso contrário, retorna
                  null .
                </p>
                <p>Este modo atualmente só funciona no Firefox.</p>
                <p>.</p>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="note">
          <strong>Nota:</strong> Começando com 11,0 Gecko (Firefox 11.0 / 11.0
          Thunderbird / SeaMonkey 2.8), bem como WebKit construir 528, esses
          navegadores não permitem que você use o atributo responseType ao
          executar solicitações síncronas. Tentativas de fazer isso geram uma
          exceção do tipo NS_ERROR_DOM_INVALID_ACCESS_ERR. Esta mudança foi
          proposta para padronização junto à W3C.
        </div>
      </td>
    </tr>
    <tr id="responseXML">
      <td><code>responseXML</code> {{ReadOnlyInline()}}</td>
      <td><code>Document?</code></td>
      <td>
        <p>
          A resposta ao pedido como um DOM
          <code
            ><a class="internal" href="/en/DOM/document"
              >Document</a
            ></code
          >
          objeto, ou null se o pedido não foi bem sucedida, ainda não foi
          enviado, ou não pode ser analisado como XML ou HTML. A resposta é
          analisado como se fosse um <code>text/html</code> stream. Quando o
          responseType está definido para "document" e que a solicitação tenha
          sido feita de forma assíncrona, a resposta é analisado como se fosse
          um <code>text/html</code> stream.
        </p>
        <div class="note">
          <strong>Nota:</strong> Se o servidor não se aplica o text/xml
          cabeçalho Content-Type, você pode usar overrideMimeType() para forçar
          XMLHttpRequest para analisá-lo como XML de qualquer maneira.
        </div>
      </td>
    </tr>
    <tr id="status">
      <td><code>status</code> {{ReadOnlyInline()}}</td>
      <td><code>unsigned short</code></td>
      <td>
        O status de resposta da requisição. Este é o retorno do codigo da
        requisição HTTP (por exemplo, status é 200 qual a solicitação for
        bem-sucedida).
      </td>
    </tr>
    <tr id="statusText">
      <td><code>statusText</code> {{ReadOnlyInline()}}</td>
      <td><code>DOMString</code></td>
      <td>
        A cadeia de resposta retornado pelo servidor HTTP. Ao contrário do
        status , o que inclui todo o texto da mensagem de resposta (" 200 OK ",
        por exemplo).
      </td>
    </tr>
    <tr id="timeout">
      <td><code>timeout</code></td>
      <td><code>unsigned long</code></td>
      <td>
        <p>
          <br />O número de milissegundos de um pedido pode tomar antes de ser
          automaticamente encerrada. Um valor de 0 (que é o padrão) significa
          que não há tempo limite.
        </p>
        <div class="note">
          <strong>Nota:</strong> Você não pode usar um tempo limite para
          solicitações síncronas com uma janela proprietária.
        </div>
      </td>
    </tr>
    <tr id="upload">
      <td><code>upload</code></td>
      <td><code>XMLHttpRequestUpload</code></td>
      <td>
        O processo de upload pode ser rastreado através da ação de retorno de um
        evento para upload.
      </td>
    </tr>
    <tr id="withCredentials">
      <td><code>withCredentials</code></td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Indica se ou não de cross-site Access-Control solicitações devem ser
          feitas usando credenciais, como cookies ou cabeçalhos de autorização.
          O padrão é false .
        </p>
        <div class="note">
          <strong>Nota:</strong> Esta não afeta as solicitações no mesmo local.
        </div>
        <div class="note">
          <strong>Nota:</strong> Começando com 11,0 Gecko (Firefox 11.0 / 11.0
          Thunderbird / SeaMonkey 2.8), Gecko não permite que você use os
          atributos withCredentials ao realizar solicitações síncronas. Ao
          tentar fazer isso o sistema gera uma exceção do tipo
          NS_ERROR_DOM_INVALID_ACCESS_ERR.
        </div>
      </td>
    </tr>
  </tbody>
</table>

### Propriedades não-padrão

<table class="standard-table">
  <tbody>
    <tr>
      <th>Attribute</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
    <tr id="channel">
      <td><code>channel</code> {{ReadOnlyInline()}}</td>
      <td><code>nsIChannel</code></td>
      <td>
        O canal utilizado pelo objecto aquando da execução do pedido. Esta é
        null se o canal não foi criado ainda. No caso de um pedido de múltiplas
        partes, isto é o canal inicial, não as diferentes partes do pedido de
        várias partes.
        <strong>Requer privilégios elevados para o acesso.</strong>
      </td>
    </tr>
    <tr id="mozAnon">
      <td><code>mozAnon</code> {{ReadOnlyInline()}}</td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Se for verdadeiro (true) o pedido será enviado sem cabeçalhos de
          cookies e autenticação.
        </p>
      </td>
    </tr>
    <tr id="mozSystem">
      <td><code>mozSystem</code> {{ReadOnlyInline()}}</td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Se for verdadeiro (true) , a política de mesma origem não será
          aplicada sobre o pedido.
        </p>
      </td>
    </tr>
    <tr id="mozBackgroundRequest">
      <td><code>mozBackgroundRequest</code></td>
      <td><code>boolean</code></td>
      <td>
        <p>
          Indica se o objeto representa uma solicitação de serviço de fundo. Se
          true , nenhum grupo carga está associada com o pedido, e diálogos de
          segurança estão impedidos de ser mostrado para o usuário.
          <strong>Requer privilégios elevados para o acesso.</strong>
        </p>
        <p>
          Nos casos em que uma caixa de diálogo de segurança (como a
          autenticação ou uma notificação certificado ruim) normalmente seriam
          mostrados, o pedido simplesmente falhar em seu lugar.
        </p>
        <div class="note">
          <strong>Nota: </strong>Esta propriedade deve ser definida antes de
          chamar open().
        </div>
      </td>
    </tr>
    <tr id="mozResponseArrayBuffer">
      <td>
        <code>mozResponseArrayBuffer</code>
        {{ReadOnlyInline()}}
      </td>
      <td>
        <a
          href="/en/JavaScript_typed_arrays/ArrayBuffer"
          ><code>ArrayBuffer</code></a
        >
      </td>
      <td>
        A resposta ao pedido, como uma matriz de JavaScript digitado. Esta é
        NULL se o pedido não foi bem-sucedida, ou se não foi enviada ainda.
      </td>
    </tr>
    <tr id="multipart">
      <td><code>multipart</code></td>
      <td><code>boolean</code></td>
      <td>
        <p>
          <strong
            >Este Gecko somente recurso foi removido no Firefox / Gecko
            22.</strong
          >
          Por favor Utilize
          <a
            href="/pt-BR/docs/Server-sent_events"
            >Server-Sent Events</a
          >,
          <a href="/pt-BR/docs/WebSockets"
            >Web Sockets</a
          >
          ou <code>responseText</code> de eventos de progresso em seu lugar.
        </p>
        <p>
          Indica se ou não a resposta está prevista para ser uma corrente de,
          possivelmente, vários documentos XML. Se definido como true , o tipo
          de conteúdo da resposta inicial deve ser multipart/x-mixed-replace ou
          ocorrerá um erro. Todos os pedidos devem ser assíncrona.
        </p>
        <p>
          Isso permite o suporte para servidor push; para cada documento XML que
          está escrito a este pedido, um novo documento XML DOM é criado eo
          onload manipulador é chamado entre os documentos.
        </p>
        <div class="note">
          <strong>Nota:</strong> Quando este estiver definido, o onload
          manipulador e outros manipuladores de eventos não são repostas após a
          primeira XmlDocument é carregado, eo onload manipulador é chamado após
          cada parte da resposta é recebida.
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Construtor

### XMLHttpRequest()

O construtor inicia um XMLHttpRequest. Ele deve ser chamado antes de quaisquer outras chamadas de método.

Gecko/Firefox 16 acrescenta um parâmetro não-padrão para o construtor que pode ativar o modo anônimo (veja [Bug 692677](https://bugzilla.mozilla.org/show_bug.cgi?id=692677)). Definir o mozAnon bandeira de true eficácia se assemelha a [`AnonXMLHttpRequest()`](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#dom-anonxmlhttprequest) construtor descrito na especificação XMLHttpRequest que não tenha sido implementado em qualquer navegador ainda (em setembro de 2012).

```
XMLHttpRequest (
  JSObject objParameters
);
```

##### Parâmetros (não-padrão)

- `objParameters`

  - : Há dois sinalizadores que você pode definir:

    - `mozAnon`
      - : Boolean: Definir esse sinalizador de true fará com que o navegador para não expor a origem e as [credenciais do usuário](https://www.w3.org/TR/2012/WD-XMLHttpRequest-20120117/#user-credentials) ao buscar recursos. Mais importante, isto significa que os cookies não será enviado a menos que explicitamente adicionado usando setRequestHeader.
    - `mozSystem`
      - : Boolean: Definir esse sinalizador de true . permite fazer conexões entre sites sem a necessidade de o servidor para opt-in usando CORS requer a configuração mozAnon: true . Ou seja, este não pode ser combinada com o envio de cookies ou outras credenciais do usuário. Isso* [só funciona em privilegiados (revisto) Apps](https://bugzilla.mozilla.org/show_bug.cgi?id=692677#c68);ele não funciona em páginas da web arbitrários carregados no Firefox.*

## Métodos

### abort()

Aborta o pedido, se já foi enviada.

### getAllResponseHeaders()

```
DOMString getAllResponseHeaders();
```

Retorna todos os cabeçalhos de resposta como uma string, ou null se nenhuma resposta foi recebida. **Nota:** Para os pedidos de várias partes, isso retorna os cabeçalhos da parte atual da solicitação, não a partir do canal original.

### getResponseHeader()

```
DOMString? getResponseHeader(DOMString header);
```

Retorna a string contendo o texto do cabeçalho especificado, ou null se quer a resposta ainda não foi recebida ou o cabeçalho não existe na resposta.

### open()

Inicializa um pedido. Este método é para ser usado a partir do código JavaScript; para inicializar um pedido do código nativo, use [`openRequest()`](</en/nsIXMLHttpRequest#openRequest()> "/en/XMLHttpRequest#openRequest()") em seu lugar.

> **Nota:** Chamar esse método uma solicitação já está ativo (aquele para o qual open() ou openRequest() já foi chamado) é o equivalente de chamar abort().

```
void open(
   DOMString method,
   DOMString url,
   optional boolean async,
   optional DOMString user,
   optional DOMString password
);
```

###### Parameters

- `method`
  - : O método HTTP para usar, como "GET", "POST", "PUT", "DELETE", etc. ignorado para URLs não-HTTP (S).
- `url`
  - : O URL para o qual enviar a solicitação.
- `async`
  - : Um parâmetro booleano opcional, por padrão true , indicando se a operação deve ou não ser executada de forma assíncrona. Se esse valor for false , o send() método não retorna até que a resposta seja recebida. Se true , a notificação de uma transação concluída é fornecida usando ouvintes de evento. Isso deve ser true se o multipart atributo for true , ou uma exceção será lançada.
- `user`
  - : O nome de usuário opcional para usar para fins de autenticação; por padrão, essa é uma seqüência vazia.
- `password`
  - : A senha opcional para usar para fins de autenticação; por padrão, essa é uma seqüência vazia.

### overrideMimeType()

Substitui o tipo de MIME retornado pelo servidor. Isto pode ser utilizado, por exemplo, para forçar uma corrente a ser tratada e analisada como text/xml, mesmo que o servidor não relatam como método. Este método deve ser chamado antes send() .

```
void overrideMimeType(DOMString mimetype);
```

### send()

Envia a solicitação. Se o pedido é assíncrono (que é o padrão), este método retorna assim que o pedido for enviado. Se o pedido é síncrono, este método não retorna até a resposta chegar.

> **Nota:** Qualquer ouvintes de eventos que pretende definir tem de ser definida antes de chamar send().

```
void send();
void send(ArrayBuffer data);
void send(Blob data);
void send(Document data);
void send(DOMString? data);
void send(FormData data);
```

###### Notas

Se os dados são um Document , ele é serializado antes de serem enviados. Ao enviar um documento, as versões do Firefox antes da versão 3 sempre enviavam a solicitação usando codificação UTF-8; [Firefox 3](/pt-BR/Firefox_3) envia corretamente o documento usando a codificação especificada por body.xmlEncoding , ou UTF-8 se nenhum encoding é especificado.

Se são uma nsIInputStream , deve ser compatível com nsIUploadChannel 's setUploadStream() método. Nesse caso, um cabeçalho Content-Length é adicionado ao pedido, com o seu valor obtido usando nsIInputStream 's available() método. Quaisquer cabeçalhos incluídos na parte superior da corrente são tratados como parte do corpo da mensagem. MIMEType da transmissão deve ser especificado definindo o cabeçalho Content-Type usando o [`setRequestHeader()`](</en/nsIXMLHttpRequest#setRequestHeader()> "/en/XMLHttpRequest#setRequestHeader()") método antes de chamar send().

A melhor maneira de enviar conteúdo binário (como em arquivos de upload) está usando[ArrayBuffers](/pt-BR/docs/JavaScript/Typed_arrays/ArrayBuffer) ou [Blobs](/pt-BR/docs/DOM/Blob) em conjuncton com o send() método. No entanto, se você quiser enviar uma [stringifiable](/pt-BR/docs/JavaScript/Reference/Global_Objects/JSON/stringify) dados brutos, use o [`sendAsBinary()`](</pt-BR/docs/DOM/XMLHttpRequest#sendAsBinary()>) método em vez disso.

### setRequestHeader()

Define o valor de uma solicitação HTTP header. Você deve chamar setRequestHeader() após open() , mas antes de send().

```
void setRequestHeader(
   DOMString header,
   DOMString value
);
```

###### Parametros

- `header`
  - : O nome do cabeçalho cujo valor deve ser definido.
- `value`
  - : O valor definido como o corpo do cabeçalho.

### Métodos não-padrão

#### init()

Inicializa o objeto para uso a partir do código C ++.

> **Aviso:** **Nota:** Este método não deve ser chamado a partir do JavaScript.

```
[noscript] void init(
   in nsIPrincipal principal,
   in nsIScriptContext scriptContext,
   in nsPIDOMWindow ownerWindow
);
```

##### Parametros

- `principal`
  - : O principal a ser usado para o pedido; não deve ser null.
- `scriptContext`
  - : O contexto de script a ser usada para o pedido; não deve ser null.
- `ownerWindow`
  - : A janela associada com o pedido; pode ser `null`.

#### openRequest()

Inicializa um pedido. Este método é para ser usado a partir do código nativo; para inicializar um pedido do código JavaScript, usar `open() em seu lugar. Consulte a documentação do open() .`

#### sendAsBinary()

Uma variante do send() método que envia dados binários.

```
void sendAsBinary(
   in DOMString body
);
```

Este método, usado em conjuncton com o [`readAsBinaryString`](/pt-BR/docs/DOM/FileReader#readAsBinaryString) método do [`FileReader`](/pt-BR/docs/DOM/FileReader) API tornar possível [read and **upload** any type of file](/pt-BR/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files) e para [stringify](/pt-BR/docs/JavaScript/Reference/Global_Objects/JSON/stringify) os dados brutos.

##### Parametros

- `body`
  - : O corpo da solicitação como um DOMString. Estes dados poderão ser convertidos para uma seqüência de caracteres de byte único por truncamento (removendo o byte de mais alta ordem de cada personagem).

##### `sendAsBinary()` polyfill

Desde sendAsBinary() é um recurso experimental, aqui está uma polyfill para navegadores que não suportam o sendAsBinary() método, mas o apoio [typed arrays](/pt-BR/docs/JavaScript/Typed_arrays).

```js
/*\
|*|
|*|  :: XMLHttpRequest.prototype.sendAsBinary() Polifyll ::
|*|
|*|  https://developer.mozilla.org/pt-BR/docs/DOM/XMLHttpRequest#sendAsBinary()
|*|
\*/

if (!XMLHttpRequest.prototype.sendAsBinary) {
  XMLHttpRequest.prototype.sendAsBinary = function (sData) {
    var nBytes = sData.length,
      ui8Data = new Uint8Array(nBytes);
    for (var nIdx = 0; nIdx < nBytes; nIdx++) {
      ui8Data[nIdx] = sData.charCodeAt(nIdx) & 0xff;
    }
    /* send as ArrayBufferView...: */
    this.send(ui8Data);
    /* ...or as ArrayBuffer (legacy)...: this.send(ui8Data.buffer); */
  };
}
```

> **Nota:** É possível construir este polyfill colocar dois tipos de dados como argumento para send() : um [`ArrayBuffer`](/pt-BR/docs/JavaScript/Typed_arrays/ArrayBuffer) (ui8Data.buffer - o código comentado) ou um ArrayBufferView ( ui8Data , que é uma [typed array of 8-bit unsigned integers](/pt-BR/docs/JavaScript/Typed_arrays/Uint8Array) – descomentada código). No entanto, no Google Chrome, quando você tenta enviar uma ArrayBuffer , a seguinte mensagem de aviso aparecerá: ArrayBuffer is deprecated in XMLHttpRequest.send(). Use ArrayBufferView instead. ArrayBuffer is deprecated in XMLHttpRequest.send(). Use ArrayBufferView instead.

## Notas

- Por padrão, o Firefox 3 limita o número de XMLHttpRequest conexões por servidor a 6 (versões anteriores limitar esta para 2 por servidor). Alguns sites interativos podem manter um XMLHttpRequest conexão aberta, de modo que a abertura de várias sessões para esses sites pode resultar no navegador pendurado de tal forma que a janela já não repaints e controles não respondem. Este valor pode ser alterado através da edição do network.http.max-persistent-connections-per-server preferência no [`about:config`](/about:config).
- Do Gecko 7 cabeçalhos estabelecidos pela [setRequestHeader](#setrequestheader) asão enviados com o pedido, quando na sequência de um redirecionamento. Anteriormente, estes cabeçalhos não iria ser enviado.
- `XMLHttpRequest é implementado em Gecko usando os` `nsIXMLHttpRequest`, `nsIXMLHttpRequestEventTarget`, e `nsIJSXMLHttpRequest` interfaces.

#### Eventos

`onreadystatechange` como uma propriedade do `XMLHttpRequest` instância é suportado em todos os navegadores.

Desde então, foram implementadas uma série de manipuladores de eventos adicionais em vários navegadores ( onload , onerror , onprogress , etc.). Estes são suportados no Firefox. Em particular, veja `nsIXMLHttpRequestEventTarget` and [Using XMLHttpRequest](/pt-BR/DOM/XMLHttpRequest/Using_XMLHttpRequest).

avegadores mais recentes, incluindo o Firefox, também suporta ouvir as XMLHttpRequest eventos via padrão [`addEventListener`](/pt-BR/DOM/element.addEventListener) APIs Além de definir on propriedades para uma função de manipulador.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- MDN artigos sobre XMLHttpRequest:

  - [AJAX - Getting Started](/pt-BR/AJAX/Getting_Started)
  - [Using XMLHttpRequest](/pt-BR/DOM/XMLHttpRequest/Using_XMLHttpRequest)
  - [HTML in XMLHttpRequest](/pt-BR/HTML_in_XMLHttpRequest)
  - [`FormData`](/pt-BR/DOM/XMLHttpRequest/FormData)

- XMLHttpRequest referencias da W3C e navegador fornecedores:

  - [W3C: XMLHttpRequest](https://www.w3.org/TR/XMLHttpRequest1/) (base features)
  - [W3C: XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) (latest editor's draft with extensions to the base functionality, formerly XMLHttpRequest Level 2
  - [Microsoft documentation](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmobjxmlhttprequest.asp)
  - [Apple developers' reference](http://developer.apple.com/internet/webcontent/xmlhttpreq.html)

- ["Using the XMLHttpRequest Object" (jibbering.com)](http://jibbering.com/2002/4/httprequest.html)
- [XMLHttpRequest - REST and the Rich User Experience](http://www.peej.co.uk/articles/rich-user-experience.html)
- [HTML5 Rocks - New Tricks in XMLHttpRequest2](http://www.html5rocks.com/en/tutorials/file/xhr2/)
