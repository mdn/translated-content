---
title: Authorization
slug: Web/HTTP/Headers/Authorization
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`Authorization`** contém as credenciais para autenticar o agente de usuário com o servidor, geralmente o servidor responderá com um status {{HTTPStatus("401")}} `Unauthorized` se não for possível fazer a autenticação, e com o cabeçalho {{HTTPHeader("WWW-Authenticate")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Authorization: <tipo> <credenciais>
```

## Directives

- \<tipo>

  - : [Tipo de autenticação](/pt-BR/docs/Web/HTTP/Authentication#Authentication_schemes). Um tipo comum é o ["Basic"](/pt-BR/docs/Web/HTTP/Authentication#Basic_authentication_scheme). Outros tipos:

    - [Registro do IANA dos esquemas de Autenticação](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml)
    - [Autenticação para servidores AWS (`AWS4-HMAC-SHA256`)](http://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html)

- \<credenciais>

  - : Se a autenticação "Basic" é utilizada, as credenciais construção são parecidas com isto:

    - O nome de usuário com a senha combinados por dois pontos (`aladdin:opensesame`).
    - A cadeia de caracteres resultante é uma codificação [base64](/pt-BR/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) (`YWxhZGRpbjpvcGVuc2VzYW1l`).

    > **Nota:** Codificação Base64 não significa encriptação ou hashing! Esse método é igualmente seguro como mandar em texto limpo (base64 é uma codificação que pode ser revertida). Use o HTTPS em conjunto com a Autenticação Basic.

## Exemplos

```
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

Veja também [autenticação HTTP](/pt-BR/docs/Web/HTTP/Authentication) para exemplos em como configurar os servidores Apache ou nginx para proteger seu site com autenticação básica HTTP.

## Especificações

| Especificação                           | Título                                 |
| --------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Authorization", "4.2")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                         | O esquema de autenticação HTTP 'Basic' |

## Veja também

- [Autenticação HTTP](/pt-BR/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
