---
title: Access-Control-Allow-Methods
slug: Web/HTTP/Headers/Access-Control-Allow-Methods
---

{{HTTPSidebar}}

O cabeçalho de resposta **`Access-Control-Allow-Methods`** especifica o método ou métodos permitidos quando acessando o recurso em resposta a uma {{glossary("preflight request")}}.

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
Access-Control-Allow-Methods: <método>, <método>, ...
Access-Control-Allow-Methods: *
```

## Diretivas

- \<método>
  - : Lista separada por vírgula com os [métodos de requisição HTTP](/pt-BR/docs/Web/HTTP/Methods).
- `*` (coringa)
  - : O valor "`*`" só conta como valor coringa para requisições sem credenciais (requisições sem [cookies HTTP](/pt-BR/docs/Web/HTTP/Cookies) ou informação de autenticação HTTP). Em requisições com credenciais, isso é tratado como o nome de método literal "`*`" sem qualquer semântica especial.

## Exemplos

```
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Methods: *
```

## Especificações

| Especificação                                                                              | Status             | Comentário        |
| ------------------------------------------------------------------------------------------ | ------------------ | ----------------- |
| {{SpecName('Fetch','#http-access-control-allow-methods', 'Access-Control-Allow-Methods')}} | {{Spec2("Fetch")}} | Definição inicial |

## Compatibilidade com navegadores

{{Compat("http.headers.Access-Control-Allow-Methods")}}

## Veja também

- {{HTTPHeader("Access-Control-Allow-Origin")}}
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- {{HTTPHeader("Access-Control-Allow-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
