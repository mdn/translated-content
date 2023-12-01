---
title: XMLHttpRequest.setRequestHeader()
slug: Web/API/XMLHttpRequest/setRequestHeader
---

{{APIRef('XMLHttpRequest')}}

O método **`setRequestHeader()`** de {{domxref("XMLHttpRequest")}} define o valor do cabeçalho de uma requisição HTTP. Ao usar `setRequestHeader()`, você deve chamá-lo depois de chamar o método {{domxref("XMLHttpRequest.open", "open()")}}, mas antes de chamar o método {{domxref("XMLHttpRequest.send", "send()")}}. Se esse método é chamado muitas vezes com o mesmo cabeçalho, os valores são somados em um único cabeçalho de requisição HTTP.

A cada vez que você chama `setRequestHeader()` depois de ter chamado-o pelo menos uma vez, o texto especificado é somado ao final do conteúdo do cabeçalho existente.

Se nenhum cabeçalho {{HTTPHeader("Accept")}} foi definido usando este método, um cabeçalho `Accept` com o tipo `"*/*"` é enviado com a requisição quando {{domxref("XMLHttpRequest.send", "send()")}} é chamado.

Por razões de segurança, alguns cabeçalhos só podem ser controlados pelo agente do usuário. Esses cabeçalhos incluem o cabeçalho {{Glossary("Forbidden_header_name", "forbidden header names", 1)}} e o cabeçalho {{Glossary("Forbidden_response_header_name", "forbidden response header names", 1)}}.

> **Nota:** **Observação:** Para seu campos personalizados, você pode encontrar uma exceção "**not allowed by Access-Control-Allow-Headers in preflight response**" quando você envia requisições através de domínios. Neste caso, você precisa definir o cabeçalho {{HTTPHeader("Access-Control-Allow-Headers")}} no seu cabeçalho de resposta no lado do servidor.

## Sintaxe

```
XMLHttpRequest.setRequestHeader(header, value)
```

### Parâmetros

- `header`
  - : O nome do cabeçalho cujo valor está para ser definido.
- `value`
  - : O valor a ser definido como o corpo do cabeçalho.

### Valor de retorno

`undefined`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)
- [HTML em XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
