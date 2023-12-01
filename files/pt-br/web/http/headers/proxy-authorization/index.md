---
title: Proxy-Authorization
slug: Web/HTTP/Headers/Proxy-Authorization
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`Proxy-Authorization`** contém as credenciais para autenticar o agente de usuário em um servidor proxy, usualmente depois do servidor responder com um código de status {{HTTPStatus("407")}} `Proxy Authentication Required` e cabeçalho {{HTTPHeader("Proxy-Authenticate")}}.

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
Proxy-Authorization: <type> <credentials>
```

## Diretivas

- \<type>
  - : [Tipo de autentação](/pt-BR/docs/Web/HTTP/Authentication#Authentication_schemes). Um tipo comum é ["Basic"](/pt-BR/docs/Web/HTTP/Authentication#Basic_authentication_scheme). Veja também o [registro IANA de esquemas de autenticação](http://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml).
- \<credentials>

  - : As credenciais são construídas assim:

    - O nome de usuário e senha combinados com dois pontos (`aladdin:opensesame`).
    - O resultado é uma cadeia de caracteres codificado em [base64](/pt-BR/docs/Web/API/WindowBase64/Base64_encoding_and_decoding) (`YWxhZGRpbjpvcGVuc2VzYW1l`).

    > **Nota:** Codificação Base64 não significa encriptação ou hashing! Esse método é igualmente seguro se mandar as credenciais em texto limpo (base64 é uma codificação reversível). Prefira o uso de HTTPS em conjunto com Autenticação Básica.

## Exemplos

```
Proxy-Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l
```

## Especificações

| Especificação                                 | Título                                 |
| --------------------------------------------- | -------------------------------------- |
| {{RFC("7235", "Proxy-Authorization", "4.4")}} | HTTP/1.1: Authentication               |
| {{RFC("7617")}}                               | The 'Basic' HTTP Authentication Scheme |

## Veja também

- [Autenticação HTTP](/pt-BR/docs/Web/HTTP/Authentication)
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
