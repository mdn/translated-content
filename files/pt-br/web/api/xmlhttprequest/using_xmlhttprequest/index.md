---
title: Usando XMLHttpRequest
slug: Web/API/XMLHttpRequest/Using_XMLHttpRequest
---

[`XMLHttpRequest`](/pt-BR/docs/DOM/XMLHttpRequest) torna o envio de requisições HTTP muito fácil. Basta criar uma instância do objeto, abrir uma url e enviar uma requisição. O [status](/pt-BR/docs/HTTP/HTTP_response_codes) [HTTP](/pt-BR/docs/HTTP/HTTP_response_codes)do resultado assim como o seu conteúdo estarão disponíveis quando a transação for completada. Esta página descreve alguns casos comuns de uso desse poderoso objeto JavaScript.

```js
function reqListener() {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "yourFile.txt", true);
oReq.send();
```

## Tipos de Requisições

Uma requisição feita via XMLHttpRequest pode buscar dados de duas maneiras, sícrona e assíncrona. O tipo de requisição é dado pelo argumento `async` que é opcional (terceiro argumento) e é definido no método XMLHttpRequest [open()](</pt-BR/docs/DOM/XMLHttpRequest#open()> "DOM/XMLHttpRequest#open()"). Se esse argumento for `true` ou não especificado, o `XMLHttpRequest` será processado de maneira assíncrona, caso contrário o processamento será síncrono. Uma discussão detalhada e demonstrações desses dois tipos podem ser encontradas na página [requisições síncronas e assíncronas](/pt-BR/docs/DOM/XMLHttpRequest/Synchronous_and_Asynchronous_Requests). No geral a melhor prática é a das solicitações assíncronas.

## Manipulando Respostas

Existem vários tipos de [atributos de resposta](https://www.w3.org/TR/XMLHttpRequest2/#response) definidos pela especificação da W3C para o XMLHttpRequest. Eles informam ao cliente que efetuou a requisição XMLHttpRequest informações importantes sobre o status da resposta. Em alguns casos onde se lida com tipos de resposa de não-texto, os tipos de resposta podem envolver alguma manipulação e/ou análise conforme descrito nas seções seguintes.

### Analisando e manipulando a propriedade `responseXML`

Se você utiliza o `XMLHttpRequest` para obter o conteúdo de um documento XML remoto, a propriedade `responseXML` será um objeto DOM que contém um documento XML, o que pode dificultar a manipulação e análise.

As cinco formas mais utilizadas para análisar e manipular um arquivo XML são:

1. Usando [XPath](/pt-BR/docs/XPath) para análisar parte deles.
2. Usando [JXON](/pt-BR/docs/JXON) para converter em um Objeto JavaScript.
3. Manualmente [Parsing and serializing XML](/pt-BR/docs/Parsing_and_serializing_XML) para strings ou objetos.
4. Usando [XMLSerializer](/pt-BR/docs/XMLSerializer) para serializar **árvores do DOM para strings ou para arquivos**.
5. [RegExp](/pt-BR/docs/JavaScript/Reference/Global_Objects/RegExp)pode ser usado se você souber de antemão qual é o conteúdo do XML. Você pode remover quebras de linhas, usando a RegExp para procurar as quebras de linha. No entanto, este é o "último método", caso o código do XML sofra alterações, o método se torna falho.

### Analisando e manipulando uma propriedade `responseText` contendo um documento HTML

> **Nota:** A especificação W3C do [XMLHttpRequest](http://dvcs.w3.org/hg/xhr/raw-file/tip/Overview.html) permite analisar HTML através da propriedade `XMLHttpRequest.responseXML` . Leia o artigo sobre [HTML in XMLHttpRequest](/pt-BR/docs/HTML_in_XMLHttpRequest) para maiores detalhes.

Se você usa o `XMLHttpRequest` para recuperar o conteúdo de uma página HTML remota, a propriedade `responseText` será uma string contendo um a "sopa" de todos as tags HTML, o que pode ser difícil de manipular e analizar. Existem três formas básicas para analizar esta sopa de string HTML:

1. Use a propriedade `XMLHttpRequest.responseXML`.
2. Introduza o conteúdo dentro do corpo de um [document fragment](/pt-BR/docs/Web/API/DocumentFragment) Através de `fragment.body.innerHTML` e percorra o fragmento do DOM.
3. [RegExp](/pt-BR/docs/JavaScript/Reference/Global_Objects/RegExp) pode se usada se você sempre conhece o conteúdo HTML `responseText`de que tem em mãos. Você pode quere remover quebras de linha, se você usar RegExp para varrer no que diz respeito a quebra de linhas. Contudo, este método é um "último recurso" uma vez que se o código HTML mudar um pouco, o método provavelmente irá falhar.

## Manipulação de dados binários

Apesar de `XMLHttpRequest` ser mais comumente usado para enviar e receber dados textual, ele pode ser utilizado para enviar e receber conteúdo binário. Existem vários métodos bem testados para forçar a resposta de um XMLHttpRequest para o envio de dados binário. Eles envolvem a utilização do método .overrideMimeType() sobre o objeto XMLHttpRequest e é uma solução viável.

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
// recupera dados não processados como uma string binária
oReq.overrideMimeType("text/plain; charset=x-user-defined");
/* ... */
```

A especificação XMLHttpRequest Level 2 adiciona novo [responseType attributes](https://www.w3.org/TR/XMLHttpRequest2/#the-responsetype-attribute) que tornam o envio e recebimento de dados muito mais fácil.

```js
var oReq = new XMLHttpRequest();

oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";
oReq.onload = function (e) {
  var arraybuffer = oReq.response; // não é responseText
  /* ... */
};
oReq.send();
```

Para mais exemplos confira a página [Sending and Receiving Binary Data](/pt-BR/docs/DOM/XMLHttpRequest/Sending_and_Receiving_Binary_Data).

## Monitorando o progresso

`XMLHttpRequest` fornece a capacidade de ouvir vários eventos que podem ocorrer enquanto o pedido está sendo processado. Isso inclui notificações periódicas de progresso, notificações de erro e assim por diante.

Suporte para evento de progresso DOM monitorando a conexão `XMLHttpRequest` transfers siga a Web API [specification for progress events](http://dev.w3.org/2006/webapi/progress/Progress.html): estes eventos implementam a interface {{domxref("ProgressEvent")}} .

```js
var oReq = new XMLHttpRequest();

oReq.addEventListener("progress", updateProgress, false);
oReq.addEventListener("load", transferComplete, false);
oReq.addEventListener("error", transferFailed, false);
oReq.addEventListener("abort", transferCanceled, false);

oReq.open();

// ...A transferência foi cancelada pelo usuário

// progresso de transferências do servidor para o cliente (downloads)
function updateProgress(oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
    // ...
  } else {
    // Não é possível calcular informações de progresso uma vez que a dimensão total é desconhecida
  }
}

function transferComplete(evt) {
  alert("A transferência foi concluída.");
}

function transferFailed(evt) {
  alert("Um erro ocorreu durante a transferência do arquivo.");
}

function transferCanceled(evt) {
  alert("A transferência foi cancelada pelo usuário.");
}
```

Lines 3-6 adiciona receptores de eventos (event listeners) para os vários que são enviados ao executar uma transferência de dados usando `XMLHttpRequest`.

> **Nota:** Você precisa adicionar os receptores de eventos (event listeners) antes de chamar `open()` sobre a requisição. Caso contrário, os eventos de prograsso não dispararão..

O manipulador de evento de prograsso, especificado pela função `updateProgress()` neste exemplo, recebe o número total de bytes para transferir, bem como o número de bytes transferidos até o momento em total de eventos e campos carregados . No entanto, se o campo lengthComputable é false, o comprimento total não é conhecido e será zero..

Eventos de progresso existem para ambos as transferências de download e upload. The download events are fired on the `XMLHttpRequest` object itself, as shown in the above sample. The upload events are fired on the `XMLHttpRequest.upload` object, as shown below:

```js
var oReq = new XMLHttpRequest();

oReq.upload.addEventListener("progress", updateProgress, false);
oReq.upload.addEventListener("load", transferComplete, false);
oReq.upload.addEventListener("error", transferFailed, false);
oReq.upload.addEventListener("abort", transferCanceled, false);

oReq.open();
```

> **Nota:** eventos de progresso não estão disponíveis para o arquivo`:` protocol.

> **Nota:** Atualmente, existem bugs em aberto para o evento de progresso que continua fetando a versão 25 do Firefox sobre [OS X](https://bugzilla.mozilla.org/show_bug.cgi?id=908375) e [Linux](https://bugzilla.mozilla.org/show_bug.cgi?id=786953).

> **Nota:** Iniciando no Gecko 9.0, eventos de progresso agora podem ser invocados a entrar para cada pedaço de dados recebidos, incluindo o último bloco, nos casos em que o último pacote é recebido e a conexão fechada antes do evento progresso ser disparado. Neste caso, o evento de progresso é automaticamente acionado quando o evento load ocorre para esse pacote. Isso permite que você agora acompanhe de forma confiável apenas observando o evento de progresso

> **Nota:** A partir do Gecko 12.0, se o seu evento de progresso e chamado com um `responseType` de "moz-blob", o valor da resposta será um {{domxref("Blob")}} contendo os dados recebidos até agorar.

POde-se também detectar todas as três condições de fim de carga (`abort`, `load`, or `error`) usando o evento `loadend`:

```js
req.addEventListener("loadend", loadEnd, false);

function loadEnd(e) {
  alert(
    "A transferência terminou (embora não sabemos se ele conseguiu ou não).",
  );
}
```

Note que não há nenhuma maneira de ter certeza a partir da informação recebida pelo evento loadend sobre qual condição causou a operação de encerrar; no entanto, você pode usar isso para lidar com tarefas que precisam ser realizadas em todos os cenários de fim-de-transferência.

## Submitting forms and uploading files

Instances of `XMLHttpRequest` can be used to submit forms in two ways:

- using nothing but _pure_ AJAX,
- using the [`FormData`](/pt-BR/docs/DOM/XMLHttpRequest/FormData) API.

The **second way** (using the [`FormData`](/pt-BR/docs/DOM/XMLHttpRequest/FormData) API) is the simplest and the fastest, but has the disadvantage that **the data thus collected can not be [stringified](/pt-BR/docs/JavaScript/Reference/Global_Objects/JSON/stringify)**: they are in every way _a blob_. It is the best solution for simple cases.
The **first way** (_pure_ AJAX) is instead the most complex, but in compensation is also the most flexible and powerful: it lends itself to wider uses and **the data thus collected can be [stringified](/pt-BR/docs/JavaScript/Reference/Global_Objects/JSON/stringify)** **and reused for other purposes** such as, for example, populating the _status object_ during a [manipulation of the browser history](/pt-BR/docs/DOM/Manipulating_the_browser_history), or other.

### Using nothing but _pure_ AJAX

Submitting forms without the [`FormData`](/pt-BR/docs/DOM/XMLHttpRequest/FormData) API does not require other APIs, except that, only **if you want to upload one or more files**, the [`FileReader`](/pt-BR/docs/DOM/FileReader) API.

#### A brief introduction to the submit methods

An html {{ HTMLElement("form") }} can be sent in four ways:

- using the `POST` method and setting the `enctype` attribute to `application/x-www-form-urlencoded` (default);
- using the `POST` method and setting the `enctype` attribute to `text/plain`;
- using the `POST` method and setting the `enctype` attribute to `multipart/form-data`;
- using the `GET` method (in this case the `enctype` attribute will be ignored).

Now, consider to submit a form containing only two fields, named `foo` and `baz`. If you are using the `POST` method, the server will receive a string similar to one of the following three ones depending on the encoding type you are using:

- Method: `POST`; Encoding type: `application/x-www-form-urlencoded` (default):

  ```
  Content-Type: application/x-www-form-urlencoded

  foo=bar&baz=The+first+line.&#37;0D%0AThe+second+line.%0D%0A
  ```

- Method: `POST`; Encoding type: `text/plain`:

  ```
  Content-Type: text/plain

  foo=bar
  baz=The first line.
  The second line.
  ```

- Method: `POST`; Encoding type: `multipart/form-data`:

  ```
  Content-Type: multipart/form-data; boundary=---------------------------314911788813839

  -----------------------------314911788813839
  Content-Disposition: form-data; name="foo"

  bar
  -----------------------------314911788813839
  Content-Disposition: form-data; name="baz"

  The first line.
  The second line.

  -----------------------------314911788813839--
  ```

Instead, if you are using the `GET` method, a string like the following will be simply added to the URL:

```
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

#### A little _vanilla_ framework

All these things are done automatically by the web browser whenever you submit a {{ HTMLElement("form") }}. But if you want to do the same things using JavaScript you have to instruct the interpreter about _all_ things. So, how to send forms in _pure_ AJAX is too complex to be explained in detail here. For this reason we posted here **a complete (but still didactic) framework**, which is able to use all the four ways of _submit_ and, also, to **upload files**:

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Sending forms with pure AJAX &ndash; MDN</title>
    <script type="text/javascript">
      "use strict";

      /*\
      |*|
      |*|  :: XMLHttpRequest.prototype.sendAsBinary() Polifyll ::
      |*|
      |*|  https://developer.mozilla.org/pt-BR/docs/DOM/XMLHttpRequest#sendAsBinary()
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

      /*\
      |*|
      |*|  :: AJAX Form Submit Framework ::
      |*|
      |*|  https://developer.mozilla.org/pt-BR/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest
      |*|
      |*|  This framework is released under the GNU Public License, version 3 or later.
      |*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
      |*|
      |*|  Syntax:
      |*|
      |*|   AJAXSubmit(HTMLFormElement);
      \*/

      var AJAXSubmit = (function () {
        function ajaxSuccess() {
          /* console.log("AJAXSubmit - Success!"); */
          alert(this.responseText);
          /* you can get the serialized data through the "submittedData" custom property: */
          /* alert(JSON.stringify(this.submittedData)); */
        }

        function submitData(oData) {
          /* the AJAX request... */
          var oAjaxReq = new XMLHttpRequest();
          oAjaxReq.submittedData = oData;
          oAjaxReq.onload = ajaxSuccess;
          if (oData.technique === 0) {
            /* method is GET */
            oAjaxReq.open(
              "get",
              oData.receiver.replace(
                /(?:\?.*)?$/,
                oData.segments.length > 0 ? "?" + oData.segments.join("&") : "",
              ),
              true,
            );
            oAjaxReq.send(null);
          } else {
            /* method is POST */
            oAjaxReq.open("post", oData.receiver, true);
            if (oData.technique === 3) {
              /* enctype is multipart/form-data */
              var sBoundary =
                "---------------------------" + Date.now().toString(16);
              oAjaxReq.setRequestHeader(
                "Content-Type",
                "multipart\/form-data; boundary=" + sBoundary,
              );
              oAjaxReq.sendAsBinary(
                "--" +
                  sBoundary +
                  "\r\n" +
                  oData.segments.join("--" + sBoundary + "\r\n") +
                  "--" +
                  sBoundary +
                  "--\r\n",
              );
            } else {
              /* enctype is application/x-www-form-urlencoded or text/plain */
              oAjaxReq.setRequestHeader("Content-Type", oData.contentType);
              oAjaxReq.send(
                oData.segments.join(oData.technique === 2 ? "\r\n" : "&"),
              );
            }
          }
        }

        function processStatus(oData) {
          if (oData.status > 0) {
            return;
          }
          /* the form is now totally serialized! do something before sending it to the server... */
          /* doSomething(oData); */
          /* console.log("AJAXSubmit - The form is now serialized. Submitting..."); */
          submitData(oData);
        }

        function pushSegment(oFREvt) {
          this.owner.segments[this.segmentIdx] += oFREvt.target.result + "\r\n";
          this.owner.status--;
          processStatus(this.owner);
        }

        function plainEscape(sText) {
          /* how should I treat a text/plain form encoding? what characters are not allowed? this is what I suppose...: */
          /* "4\3\7 - Einstein said E=mc2" ----> "4\\3\\7\ -\ Einstein\ said\ E\=mc2" */
          return sText.replace(/[\s\=\\]/g, "\\$&");
        }

        function SubmitRequest(oTarget) {
          var nFile,
            sFieldType,
            oField,
            oSegmReq,
            oFile,
            bIsPost = oTarget.method.toLowerCase() === "post";
          /* console.log("AJAXSubmit - Serializing form..."); */
          this.contentType =
            bIsPost && oTarget.enctype
              ? oTarget.enctype
              : "application\/x-www-form-urlencoded";
          this.technique = bIsPost
            ? this.contentType === "multipart\/form-data"
              ? 3
              : this.contentType === "text\/plain"
              ? 2
              : 1
            : 0;
          this.receiver = oTarget.action;
          this.status = 0;
          this.segments = [];
          var fFilter = this.technique === 2 ? plainEscape : escape;
          for (var nItem = 0; nItem < oTarget.elements.length; nItem++) {
            oField = oTarget.elements[nItem];
            if (!oField.hasAttribute("name")) {
              continue;
            }
            sFieldType =
              oField.nodeName.toUpperCase() === "INPUT"
                ? oField.getAttribute("type").toUpperCase()
                : "TEXT";
            if (sFieldType === "FILE" && oField.files.length > 0) {
              if (this.technique === 3) {
                /* enctype is multipart/form-data */
                for (nFile = 0; nFile < oField.files.length; nFile++) {
                  oFile = oField.files[nFile];
                  oSegmReq = new FileReader();
                  /* (custom properties:) */
                  oSegmReq.segmentIdx = this.segments.length;
                  oSegmReq.owner = this;
                  /* (end of custom properties) */
                  oSegmReq.onload = pushSegment;
                  this.segments.push(
                    'Content-Disposition: form-data; name="' +
                      oField.name +
                      '"; filename="' +
                      oFile.name +
                      '"\r\nContent-Type: ' +
                      oFile.type +
                      "\r\n\r\n",
                  );
                  this.status++;
                  oSegmReq.readAsBinaryString(oFile);
                }
              } else {
                /* enctype is application/x-www-form-urlencoded or text/plain or method is GET: files will not be sent! */
                for (
                  nFile = 0;
                  nFile < oField.files.length;
                  this.segments.push(
                    fFilter(oField.name) +
                      "=" +
                      fFilter(oField.files[nFile++].name),
                  )
                );
              }
            } else if (
              (sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") ||
              oField.checked
            ) {
              /* field type is not FILE or is FILE but is empty */
              this.segments.push(
                this.technique === 3 /* enctype is multipart/form-data */
                  ? 'Content-Disposition: form-data; name="' +
                      oField.name +
                      '"\r\n\r\n' +
                      oField.value +
                      "\r\n"
                  : /* enctype is application/x-www-form-urlencoded or text/plain or method is GET */
                    fFilter(oField.name) + "=" + fFilter(oField.value),
              );
            }
          }
          processStatus(this);
        }

        return function (oFormElement) {
          if (!oFormElement.action) {
            return;
          }
          new SubmitRequest(oFormElement);
        };
      })();
    </script>
  </head>
  <body>
    <h1>Sending forms with pure AJAX</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Using the POST method</h2>
    <h3>Enctype: application/x-www-form-urlencoded (default)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <form
      action="register.php"
      method="post"
      enctype="text/plain"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>Your name: <input type="text" name="user" /></p>
        <p>
          Your message:<br />
          <textarea name="message" cols="40" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" /><br />
          Sex:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Male</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Female</label><br />
          Password: <input type="password" name="secret" /><br />
          What do you prefer:
          <select name="image_type">
            <option>Books</option>
            <option>Cinema</option>
            <option>TV</option>
          </select>
        </p>
        <p>
          Post your photos:
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">I have a car</label>
        </p>
        <p>
          Describe yourself:<br />
          <textarea name="description" cols="50" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

To test it, please, create a page named **register.php** (which is the `action` attribute of these sample forms) and just put the following _minimalistic_ content:

```php
<?php

  /* register.php */

  header("Content-type: text/plain");

  echo ":: data received via GET ::\n\n";
  print_r($_GET);

  echo "\n\n:: Data received via POST ::\n\n";
  print_r($_POST);

  echo "\n\n:: Data received as \"raw\" (text/plain encoding) ::\n\n";
  if (isset($HTTP_RAW_POST_DATA)) { echo $HTTP_RAW_POST_DATA; }

  echo "\n\n:: Files received ::\n\n";
  print_r($_FILES);

?>
```

The syntax of this script is the following:

```
AJAXSubmit(myForm);
```

> **Nota:** This little _vanilla_ framework **uses the [`FileReader`](/pt-BR/docs/DOM/FileReader) API**, which is _a recent technique_ (but only when there are files to upload, the `method` of the {{ HTMLElement("form") }} is `POST` and the `enctype` attribute is setted to `multipart/form-data`). For this reason, **the _pure-AJAX_ upload is to be considered an experimental technique**. Instead, if you don't want to upload files, this framework will not use any recent API.
> Note also that **the best way to send binary content is using [ArrayBuffers](/pt-BR/docs/JavaScript/Typed_arrays/ArrayBuffer) or [Blobs](/pt-BR/docs/DOM/Blob) in conjuncton with the [`send()`](/pt-BR/docs/DOM/XMLHttpRequest#send%28%29) method and, possibly, with the [`readAsArrayBuffer()`](</pt-BR/docs/DOM/FileReader#readAsArrayBuffer()>) method of the [`FileReader`](/pt-BR/docs/DOM/FileReader) API**. But, since the aim of this little script is to work with a _[stringifiable](/pt-BR/docs/JavaScript/Reference/Global_Objects/JSON/stringify)_ raw data, we used the [`sendAsBinary()`](/pt-BR/docs/DOM/XMLHttpRequest#sendAsBinary%28%29) method in conjunction with the [`readAsBinaryString()`](/pt-BR/docs/DOM/FileReader#readAsBinaryString%28%29) method of the [`FileReader`](/pt-BR/docs/DOM/FileReader) API. So, this is **the best solution when working with a relatively few data which must be [stringified](/pt-BR/docs/JavaScript/Reference/Global_Objects/JSON/stringify) in order to be reused later**. Anyhow, since working with strings instead of [typed arrays](/pt-BR/docs/JavaScript/Typed_arrays) implies a greater waste of resources, this script makes sense only when you are dealing with _small_ files (like images, documents, mp3, etc.). Otherwise, if you don't want to stringify the submitted or uploaded data, in addition to [typed arrays](/pt-BR/docs/JavaScript/Typed_arrays), consider also the use of **the [`FormData`](/pt-BR/docs/DOM/XMLHttpRequest/FormData) API**.

### Using FormData objects

The [`FormData`](/pt-BR/docs/DOM/XMLHttpRequest/FormData) constructor lets you compile a set of key/value pairs to send using `XMLHttpRequest`. Its primarily intended for use in sending form data, but can be used independently from forms in order to transmit keyed data. The transmitted data is in the same format that the form's `submit()` method would use to send the data if the form's encoding type were set to "multipart/form-data". FormData objects can be utilized in a number of ways with an XMLHttpRequest. For examples and explanations of how one can utilize FormData with XMLHttpRequests see the [Using FormData Objects](/pt-BR/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects) page. For didactic purpose only we post here **a _translation_ of [the previous example](#A_little_vanilla_framework) transformed so as to make use of the `FormData` API**. Note the brevity of the code:

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Sending forms with FormData &ndash; MDN</title>
    <script type="text/javascript">
      "use strict";

      function ajaxSuccess() {
        alert(this.responseText);
      }

      function AJAXSubmit(oFormElement) {
        if (!oFormElement.action) {
          return;
        }
        var oReq = new XMLHttpRequest();
        oReq.onload = ajaxSuccess;
        if (oFormElement.method.toLowerCase() === "post") {
          oReq.open("post", oFormElement.action, true);
          oReq.send(new FormData(oFormElement));
        } else {
          var oField,
            sFieldType,
            nFile,
            sSearch = "";
          for (var nItem = 0; nItem < oFormElement.elements.length; nItem++) {
            oField = oFormElement.elements[nItem];
            if (!oField.hasAttribute("name")) {
              continue;
            }
            sFieldType =
              oField.nodeName.toUpperCase() === "INPUT"
                ? oField.getAttribute("type").toUpperCase()
                : "TEXT";
            if (sFieldType === "FILE") {
              for (
                nFile = 0;
                nFile < oField.files.length;
                sSearch +=
                  "&" +
                  escape(oField.name) +
                  "=" +
                  escape(oField.files[nFile++].name)
              );
            } else if (
              (sFieldType !== "RADIO" && sFieldType !== "CHECKBOX") ||
              oField.checked
            ) {
              sSearch += "&" + escape(oField.name) + "=" + escape(oField.value);
            }
          }
          oReq.open(
            "get",
            oFormElement.action.replace(
              /(?:\?.*)?$/,
              sSearch.replace(/^&/, "?"),
            ),
            true,
          );
          oReq.send(null);
        }
      }
    </script>
  </head>
  <body>
    <h1>Sending forms with FormData</h1>

    <h2>Using the GET method</h2>

    <form
      action="register.php"
      method="get"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h2>Using the POST method</h2>
    <h3>Enctype: application/x-www-form-urlencoded (default)</h3>

    <form
      action="register.php"
      method="post"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Registration example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" />
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>

    <h3>Enctype: text/plain</h3>

    <p>The text/plain encoding is not supported by the FormData API.</p>

    <h3>Enctype: multipart/form-data</h3>

    <form
      action="register.php"
      method="post"
      enctype="multipart/form-data"
      onsubmit="AJAXSubmit(this); return false;">
      <fieldset>
        <legend>Upload example</legend>
        <p>
          First name: <input type="text" name="firstname" /><br />
          Last name: <input type="text" name="lastname" /><br />
          Sex:
          <input id="sex_male" type="radio" name="sex" value="male" />
          <label for="sex_male">Male</label>
          <input id="sex_female" type="radio" name="sex" value="female" />
          <label for="sex_female">Female</label><br />
          Password: <input type="password" name="secret" /><br />
          What do you prefer:
          <select name="image_type">
            <option>Books</option>
            <option>Cinema</option>
            <option>TV</option>
          </select>
        </p>
        <p>
          Post your photos:
          <input type="file" multiple name="photos[]" />
        </p>
        <p>
          <input
            id="vehicle_bike"
            type="checkbox"
            name="vehicle[]"
            value="Bike" />
          <label for="vehicle_bike">I have a bike</label><br />
          <input
            id="vehicle_car"
            type="checkbox"
            name="vehicle[]"
            value="Car" />
          <label for="vehicle_car">I have a car</label>
        </p>
        <p>
          Describe yourself:<br />
          <textarea name="description" cols="50" rows="8"></textarea>
        </p>
        <p>
          <input type="submit" value="Submit" />
        </p>
      </fieldset>
    </form>
  </body>
</html>
```

> **Nota:** As we said, **`FormData` objects are not [stringifiable](/pt-BR/docs/JavaScript/Reference/Global_Objects/JSON/stringify) objects**. If you want to stringify a submitted data, use [the previous _pure_-AJAX example](#A_little_vanilla_framework). Note also that, although in this example there are some `file` {{ HTMLElement("input") }} fields, **when you submit a form through the `FormData` API you do not need to use the [`FileReader`](/pt-BR/docs/DOM/FileReader) API also**: files are automatically loaded and uploaded.

## Cross-site XMLHttpRequest

Modern browsers support cross-site requests by implementing the web applications working group's [Access Control for Cross-Site Requests](/pt-BR/docs/HTTP_access_control) standard. As long as the server is configured to allow requests from your web application's origin, `XMLHttpRequest` will work. Otherwise, an `INVALID_ACCESS_ERR` exception is thrown.

## Bypassing the cache

A, cross-browser compatible approach to bypassing the cache is to append a timestamp to the URL, being sure to include a "?" or "&" as appropriate. For example:

```
http://foo.com/bar.html -> http://foo.com/bar.html?12345
http://foo.com/bar.html?foobar=baz -> http://foo.com/bar.html?foobar=baz&12345
```

Since the local cache is indexed by URL, this causes every request to be unique, thereby bypassing the cache.

You can automatically adjust URLs using the following code:

```js
var oReq = new XMLHttpRequest();

oReq.open(
  "GET",
  url + (/\?/.test(url) ? "&" : "?") + new Date().getTime(),
  true,
);
oReq.send(null);
```

## Security

The recommended way to enable cross-site scripting is to use the `Access-Control-Allow-Origin` HTTP header in the response to the XMLHttpRequest.

### XMLHttpRequests being stopped

If you end up with an XMLHttpRequest having `status=0` and `statusText=null`, it means that the request was not allowed to be performed. It was [`UNSENT`](https://www.w3.org/TR/XMLHttpRequest/#dom-xmlhttprequest-unsent). A likely cause for this is when the [`XMLHttpRequest` origin](https://www.w3.org/TR/XMLHttpRequest/#xmlhttprequest-origin) (at the creation of the XMLHttpRequest) has changed when the XMLHttpRequest is then `open()`. This case can happen for example when one has an XMLHttpRequest that gets fired on an onunload event for a window: the XMLHttpRequest gets in fact created when the window to be closed is still there, and then the request is sent (ie `open()`) when this window has lost its focus and potentially different window has gained focus. The way to avoid this problem is to set a listener on the new window "activate" event that gets set when the old window has its "unload" event fired.

## Using XMLHttpRequest from JavaScript modules / XPCOM components

Instantiating `XMLHttpRequest` from a [JavaScript module](/pt-BR/docs/JavaScript_code_modules/Using) or an XPCOM component works a little differently; it can't be instantiated using the `XMLHttpRequest()` constructor. The constructor is not defined inside components and the code results in an error. The best way to work around this is to use the XPCOM component constructor.

```js
const XMLHttpRequest = Components.Constructor(
  "@mozilla.org/xmlextras/xmlhttprequest;1",
);
var oReq = XMLHttpRequest();
```

Unfortunately in versions of Gecko prior to Gecko 16 there is a bug which can cause requests created this way to be cancelled for no reason. If you need your code to work on Gecko 15 or earlier, you can get the XMLHttpRequest constructor from the hidden DOM window like so.

```js
const { XMLHttpRequest } = Components.classes[
  "@mozilla.org/appshell/appShellService;1"
].getService(Components.interfaces.nsIAppShellService).hiddenDOMWindow;
var oReq = XMLHttpRequest();
```

## See also

1. [MDC AJAX introduction](/pt-BR/docs/AJAX/Getting_Started)
2. [HTTP access control](/pt-BR/docs/HTTP_access_control)
3. [How to check the security state of an XMLHTTPRequest over SSL](/pt-BR/docs/How_to_check_the_security_state_of_an_XMLHTTPRequest_over_SSL)
4. [XMLHttpRequest - REST and the Rich User Experience](http://www.peej.co.uk/articles/rich-user-experience.html)
5. [Microsoft documentation](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmobjxmlhttprequest.asp)
6. [Apple developers' reference](http://developer.apple.com/internet/webcontent/xmlhttpreq.html)
7. ["Using the XMLHttpRequest Object" (jibbering.com)](http://jibbering.com/2002/4/httprequest.html)
8. [The XMLHttpRequest Object: W3C Specification](https://www.w3.org/TR/XMLHttpRequest/)
9. [Web Progress Events specification](http://dev.w3.org/2006/webapi/progress/Progress.html)
