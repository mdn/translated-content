---
title: XMLHttpRequest.send()
slug: Web/API/XMLHttpRequest/send
---

{{APIRef('XMLHttpRequest')}}

O método **`send()`**, do {{domxref("XMLHttpRequest")}}, envia uma requisição para o servidor.Se a solicitação for assíncrona (que é o padrão), esse método retornará assim que a solicitação for enviada e o resultado for entregue usando eventos. Se a solicitação for síncrona, esse método não retornará até que a resposta chegue.

`send()` aceita um parâmetro opcional que permite especificar o corpo da solicitação; isso é usado principalmente para solicitações como {{HTTPMethod("PUT")}}. Se o método de solicitação for {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}}, o parâmetro `body` será ignorado e o corpo da solicitação será definido como `null`.

Se nenhum cabeçalho {{HTTPHeader("Accept")}} tiver sido definido usando {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}, um cabeçalho `Accept` com o tipo `"*/*"` (qualquer tipo) é enviado.

## Sintaxe

```
XMLHttpRequest.send(body)
```

### Parâmetros

- `body` {{optional_inline}}

  - : Um corpo de dados a ser enviado na solicitação XHR. Isso pode ser:

    - Um {{domxref("Document")}}, caso em que é serializado antes de ser enviado.
    - Um `BodyInit`, que [conforme a espeficicação Fetch](https://fetch.spec.whatwg.org/#bodyinit), pode ser um objeto {{domxref("Blob")}}, {{domxref("BufferSource")}}, {{domxref("FormData")}}, {{domxref("URLSearchParams")}}, {{domxref("ReadableStream")}} ou {{domxref("USVString")}}.

    Se nenhum valor for espeficicado para o corpo, o valor padrão de `null` é usado.

A melhor maneira de enviar conteúdo binário (por exemplo, em uploads de arquivos) é usando um {{domxref("ArrayBufferView")}} ou {{domxref("Blob")}} em conjunto com o método `send()`.

### Valor retornado

`undefined.`

### Exceções

| Exceção             | Descrição                                                                        |
| ------------------- | -------------------------------------------------------------------------------- |
| `InvalidStateError` | `send()` já foi invocado para a requisição, e/ou a requisição está completa.     |
| `NetworkError`      | O tipo de recurso a ser buscada é um {{domxref("Blob")}} e o método não é `GET`. |

## Exemplo: GET

```
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.onload = function () {
  // Requisição finalizada. Faça o processamento aqui.
};

xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Exemplo: POST

```
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

// Envia a informação do cabeçalho junto com a requisição.
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { // Chama a função quando o estado mudar.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Requisição finalizada. Faça o processamento aqui.
    }
}
xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest/Usando_XMLHttpRequest)
- [Obter arquivo HTML usando XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
