---
title: WWW-Authenticate
slug: Web/HTTP/Headers/WWW-Authenticate
---

{{HTTPSidebar}}

O cabeçalho da resposta HTTP **`WWW-Authenticate`** define o método de autenticação a ser usado para obter acesso ao recurso.

O cabeçalho `WWW-Authenticate` é enviado junto a resposta {{HTTPStatus("401")}} `Unauthorized`.

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
WWW-Authenticate: <type> realm=<realm>
```

## Diretivas

- \<type>
  - : [Tipo de autenticação.](/pt-BR/docs/Web/HTTP/Authentication#Authentication_schemes) Um tipo comum de autenticação é ["Basic"](/pt-BR/docs/Web/HTTP/Authentication#Basic_authentication_scheme). IANA mantém uma [lista de esquema de autenticação](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- realm=\<realm>
  - : Uma descrição da área protegida. Se nenhuma área for informada, os clientes frequentemente exibirão um hostname formatado.
- charset=\<charset>
  - : Informa ao cliente qual é o encoding do servidor quando for submetido usuário e senha. O único valor permitido é "UTF-8". Isso não está relacionado ao encoding da realm string.

## Exemplos

Tipicamente, uma resposta do servidor contém um cabeçalho `WWW-Authenticate` que se parece com isso:

```
WWW-Authenticate: Basic

WWW-Authenticate: Basic realm="Access to the staging site", charset="UTF-8"
```

Veja também [autenticação HTTP](/pt-BR/docs/Web/HTTP/Authentication) para exemplos em como configurar servidores Apache ou nginx para proteger seu site com senha usando autenticação básica HTTP.

## Especificações

| Especificação                              | Título                                 |
| ------------------------------------------ | -------------------------------------- |
| {{RFC("7235", "WWW-Authenticate", "4.1")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                            | The 'Basic' HTTP Authentication Scheme |

## Compatibilidade com navegadores

{{Compat("http.headers.WWW-Authenticate")}}

## Veja também

- [Autenticação HTTP](/pt-BR/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
