---
title: Upgrade-Insecure-Requests
slug: Web/HTTP/Headers/Upgrade-Insecure-Requests
---

{{HTTPSidebar}}

O cabeçalho HTTP **`Upgrade-Insecure-Requests`** envia um sinal ao servidor expressando a preferência do cliente por uma resposta criptografada e autenticada, e podendo manipular com êxito a diretiva {{CSP("upgrade-insecure-requests")}} [CSP](/pt-BR/docs/Web/Security/CSP).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Upgrade-Insecure-Requests: 1
```

## Exemplos

Um cliente solicita ao servidor que ele faça o suporte aos mecanismos de upgrade de {{CSP ("upgrade-insecure-requests")}}:

```
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

O servidor agora pode redirecionar para uma versão segura do site. Um cabeçalho {{HTTPHeader ("Vary")}} pode ser usado para que o site não seja veiculado por caches à clientes que não oferecem suporte ao mecanismo de upgrade.

```
Local: https://example.com/
Vary: Upgrade-Insecure-Requests
```

## Especificações

| Especificação                                                                         | Status                                 | Comentário          |
| ------------------------------------------------------------------------------------- | -------------------------------------- | ------------------- |
| {{specName("Upgrade Insecure Requests", "#preference", "upgrade-insecure-requests")}} | {{Spec2('Upgrade Insecure Requests')}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("http.headers.Upgrade-Insecure-Requests")}}

## Veja também

- {{HTTPHeader("Content-Security-Policy")}}
- CSP {{CSP("upgrade-insecure-requests")}} directive
