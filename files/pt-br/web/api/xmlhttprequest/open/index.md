---
title: XMLHttpRequest.open()
slug: Web/API/XMLHttpRequest/open
---

{{APIRef('XMLHttpRequest')}}

O {{domxref("XMLHttpRequest")}} método**`open()`** inicializa uma nova requisição, ou reinicializa uma requisição já existente.

> **Nota:** Chamar este método para uma requisição já ativada (uma que `open()` já tenha sido chamada) é equivalente a chamar {{domxref("XMLHttpRequest.abort", "abort()")}}.

## Sintaxe

```
XMLHttpRequest.open(method, url)
XMLHttpRequest.open(method, url, async)
XMLHttpRequest.open(method, url, async, user)
XMLHttpRequest.open(method, url, async, user, password)
```

### Parâmetros

- `method`
  - : O [método de requisição HTTP](/pt-BR/docs/Web/HTTP/Methods) para ser usado, como `"GET"`, `"POST"`, `"PUT"`, `"DELETE"`, etc. Ignorado para URLs não-HTTP(S).
- `url`
  - : Um {{domxref("DOMString")}} representando a URL para enviar a requisição.
- `async` {{optional_inline}}

  - : Parâmetro booleano opcional, valor padrão `true`, indica quando realizar a operação de forma assíncrona. Se este valor for `false`, o método `send()` não retorna nada até que a resposta da requisição seja recebida. Se o valor for `true`, notificação de uma transação concluída é provida usando event listeners. Isso _deve_ ser verdadeiro se o atributo `multipart` é `true`, ou uma exceção será lançada.

    > **Nota:** Requisições Síncronas no thread principal podem ser facilmente disruptivas para a experiência de usuário e devem ser evitadas; de fato, muitos navegadores descontinuaram inteiramente o suporte para XHR síncrono no thread principal. Requisições síncronas são permitidas nos {{domxref("Worker")}}s.

- `user` {{optional_inline}}
  - : O nome de usuário opcional para ser usado em autenticação; por padrão, isso é o valor `null`.
- `password` {{optional_inline}}
  - : A senha de usuário opcional para ser usado em autenticação; por padrão, isso é o valor `null`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- Métodos Relacionados ao {{domxref("XMLHttpRequest")}}: {{domxref("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}},{{domxref("XMLHttpRequest.send", "send()")}}, e {{domxref("XMLHttpRequest.abort", "abort()")}}
