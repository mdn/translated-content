---
title: Content-Length
slug: Web/HTTP/Headers/Content-Length
tags:
  - Cabeçalhos
  - HTTP
  - Referencia
translation_of: Web/HTTP/Headers/Content-Length
---
{{HTTPSidebar}}

O cabeçalho de entidade **`Content-Length`** indica o tamanho do corpo da entidade, em bytes, enviado ao destinatário.

| Tipo de cabeçalho                                | {{Glossary("Entity header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | sim                                      |

## Sintaxe

    Content-Length: <tamanho>

## Diretivas

- \<tamanho>
  - : O tamanho em número decimal de octetos.

## Especificações

| Especificação                                            | Título                                                                                |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| {{RFC("7230", "Content-Length", "3.3.2")}} | Protocolo de Transferência de Hypertexto (HTTP/1.1): Sintaxe de mensagem e Roteamento |

## Compatibilidade com navegadores

{{Compat("http.headers.Content-Length")}}

## Veja também

- {{HTTPHeader("Transfer-Encoding")}}
