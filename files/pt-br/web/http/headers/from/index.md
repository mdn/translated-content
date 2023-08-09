---
title: From
slug: Web/HTTP/Headers/From
---

{{HTTPSidebar}}

O cabeçalho de requisição **`From`** contém um endereço de email da Internet para um usuário humano que controla o agente de usuário requisitante poder enviar uma mensagem.

Se você está rodando um agente de usuário robótico (e.g. um _crawler_), o cabeçalho `From` deve ser enviado, para que você possa contatar se problemas ocorrerem em servidores, como por exemplo, o robô estar enviando requisições excessivas, não desejadas ou inválidas.

> **Aviso:** Você não deve usar o cabeçalho `From` para controle de acesso ou autenticação.

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
From: <email>
```

## Directives

- \<email>
  - : Um endereço de email utilizável para mensagens serem enviadas.

## Exemplos

```
From: webmaster@example.org
```

## Especificações

| Especificação                    | Título                                                        |
| -------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "From", "5.5.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.From")}}

## Veja também

- {{HTTPHeader("Host")}}
