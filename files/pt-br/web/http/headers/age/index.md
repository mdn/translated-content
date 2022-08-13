---
title: Age
slug: Web/HTTP/Headers/Age
tags:
  - Cabeçalhos
translation_of: Web/HTTP/Headers/Age
---
{{HTTPSidebar}}

O cabeçalho **`Age`** contém o tempo, em segundos, em que o objeto já está no _cache_ de um proxy.

O cabeçalho `Age` é normalmente perto de zero. Se `Age: 0`, é provável que ele tenha acabado de ser obtido do servidor de origem; senão, é normalmente calculado como a diferença entre a data corrente do proxy e o cabeçalho genérico {{HTTPHeader("Date")}} incluído na resposta HTTP.

| Tipo de cabeçalho                                | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | não                                      |

## Sintaxe

    Age: <delta-seconds>

## Diretivas

- \<delta-seconds>
  - : Um inteiro não-negativo, representando o tempo em segundos em que o objeto já está no _cache_ do proxy.

## Exemplos

    Age: 24

## Especificações

| Especificação                            | Título                                          |
| ---------------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Age", "5.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## Compatibilidade com navegadores

{{Compat("http.headers.Age")}}

## Veja também

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
