---
title: Access-Control-Expose-Headers
slug: Web/HTTP/Headers/Access-Control-Expose-Headers
---

{{HTTPSidebar}}

O cabeçalho de resposta **`Access-Control-Expose-Headers`** indica quais cabeçalhos podem ser expostos como parte da resposta listando os seus nomes.

Por padrão, somente os 6 {{Glossary("CORS-safelisted response header", "CORS-safelisted response headers")}} são expostos:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

Se você quiser que clientes tenham acesso a outros cabeçalhos, você deve listá-los usando o cabeçalho `Access-Control-Expose-Headers`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Access-Control-Expose-Headers: <nome-do-cabeçalho>, <nome-do-cabeçalho>, ...
Access-Control-Expose-Headers: *
```

## Diretivas

- \<nome-do-cabeçalho>
  - : Uma lista dos cabeçalhos expostos contendo zero ou mais [nomes de cabeçalhos](/pt-BR/docs/Web/HTTP/Headers) além dos {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request headers")}} que o recurso pode usar e expor.
- `*` (coringa)
  - : O valor "`*`" conta somente como um valor coringa para requisições sem credenciais (requisições sem [cookies HTTP](/pt-BR/docs/Web/HTTP/Cookies) ou informação de autenticação HTTP). Em requisições com credenciais, ele é tratado como o nome de cabeçalho literal "`*`" sem qualquer semântica.
    Note que o cabeçalho {{HTTPHeader("Authorization")}} não pode ter valor coringa e sempre precisa ser listado explicitamente.

## Exemplos

Para expor um cabeçalho de requisição não-CORS-seguro, você pode especificar:

```
Access-Control-Expose-Headers: Content-Length
```

Para expor um cabeçalho customizado adicionalmente, como `X-Kuma-Revision`, você pode adicionar múltiplos cabeçalhos separados por vírgula:

```
Access-Control-Expose-Headers: Content-Length, X-Kuma-Revision
```

Em requisições sem credênciais, você também pode usar um valor coringa:

```
Access-Control-Expose-Headers: *
```

Entretanto, isso não irá colocar um valor coringa para o cabeçalho {{HTTPHeader("Authorization")}}, então caso você precise que ele seja exposto, você precisa listá-lo explicitamente:

```
Access-Control-Expose-Headers: *, Authorization
```

## Especificações

| Especificação                                                                                | Status             | Comentário |
| -------------------------------------------------------------------------------------------- | ------------------ | ---------- |
| {{SpecName('Fetch','#http-access-control-expose-headers', 'Access-Control-Expose-Headers')}} | {{Spec2("Fetch")}} |            |

## Compatibilidade com navegadores

{{Compat("http.headers.Access-Control-Expose-Headers")}}

## Veja também

- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Origin")}}
