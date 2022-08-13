---
title: CONNECT
slug: Web/HTTP/Methods/CONNECT
tags:
  - HTTP
  - Método de requisição
  - Referencia
translation_of: Web/HTTP/Methods/CONNECT
---
{{HTTPSidebar}}

O **médoto HTTP `CONNECT` **começa a comunicação bidirecional com o recurso solicitado. Ele pode ser usado para abrir um túnel.

Por exemplo, o método `CONNECT` pode ser utilizado para acessar websites que usam {{Glossary("SSL")}} ({{Glossary("HTTPS")}}). O cliente solicita a um servidor proxy HTTP que tunelize a conexão TCP para o destino desejado. O servidor então procede para fazer a conexão em nome do cliente. Uma vez que a conexão foi estabelecida pelo servidor, o servidor Proxy continua a proxy do fluxo TCP para e do cliente.

`CONNECT` é um método hop-by-hop.

| Requisição tem corpo                 | Sim |
| ------------------------------------ | --- |
| Resposta bem sucedida tem corpo      | Sim |
| {{Glossary("Seguro")}}         | Não |
| {{Glossary("Idempotente")}} | Não |
| {{Glossary("Cacheável")}} | Não |
| Permitido em formulários HTML        | Não |

## Sintaxe

    CONNECT www.exemplo.com:443 HTTP/1.1

## Exemplo

Alguns servidores de proxy podem precisar de autoridade para criar um túnel. Veja mais no header {{HTTPHeader("Proxy-Authorization")}}

```html
CONNECT server.exemplo.com:80 HTTP/1.1
Host: server.exemplo.com:80
Proxy-Authorization: basic aGVsbG86d29ybGQ=
```

## Especificações

| Especificação                                    | Título                                                       |
| ------------------------------------------------ | ------------------------------------------------------------ |
| {{RFC("7231", "CONNECT", "4.3.6")}} | Hypertext Transfer Protocol (HTTP/1.1): Semântica e conteúdo |

## Compatibilidade com navegadores

{{Compat("http.methods.CONNECT")}}

## Veja também

- {{Glossary("Servidor proxy")}}
- {{HTTPHeader("Proxy-Authorization")}}
