---
title: Proxy-Authenticate
slug: Web/HTTP/Headers/Proxy-Authenticate
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`Proxy-Authenticate`** define o método de autenticação que deve ser utilizado para conseguir acesso ao recurso por trás de um {{Glossary("proxy server")}}. Ele autentica a requisição ao servidor proxy, permitindo que transmita a requisição em frente.

O cabeçalho `Proxy-Authenticate` é enviado junto com um {{HTTPStatus("407")}} `Proxy Authentication Required`.

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
Proxy-Authenticate: <type> realm=<realm>
```

## Diretivas

- \<type>
  - : [Tipo de autenticação](/pt-BR/docs/Web/HTTP/Authentication#Authentication_schemes). Um tipo comum é ["Basic"](/pt-BR/docs/Web/HTTP/Authentication#Basic_authentication_scheme). A IANA mantém uma [lista de esquemas de autenticação](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- realm=\<realm>
  - : A descrição da área protegida, o reino. Se um reino não foi especificado, clientes geralmente mostram um nome de _host_ formatado.

## Exemplos

```
Proxy-Authenticate: Basic

Proxy-Authenticate: Basic realm="Access to the internal site"
```

## Especificações

| Especificação                                | Título                                 |
| -------------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Proxy-Authenticate", "4.3")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                              | The 'Basic' HTTP Authentication Scheme |

## Compatibilidade com navegadores

{{Compat("http.headers.Proxy-Authenticate")}}

## Veja também

- [Autenticação HTTP](/pt-BR/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
