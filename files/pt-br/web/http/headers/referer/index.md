---
title: Referer
slug: Web/HTTP/Headers/Referer
tags:
  - HTTP
  - Reference
  - Referencia
  - Referenciado
  - cabeçalho
  - header
  - referer
translation_of: Web/HTTP/Headers/Referer
---
{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`Referer`** contém o endereço da página web anterior do qual a página atual requerida foi chamada. O `Referer` permite aos servidores identificar de onde as pessoas estão visitando eles e pode usar esses dados para análise, log e cacheamento otimizado, por exemplo.

> **Warning:** **Importante**: Apesar que esse cabeçalho tenha diversos usos inocentes, ele pode ter consequências indesejáveis para segurança e privacidade dos usuários. Veja [Referer header: privacy and security concerns](/pt-BR/docs/Web/Security/Referer_header:_privacy_and_security_concerns) para mais informações e mitigações.

Note que _referer_ é na verdade, uma má pronúncia da palavra "referrer"("referenciador"). Veja {{interwiki("wikipedia", "HTTP_referer", "HTTP referer no Wikipedia")}} para mais detalhes.

O cabeçalho `Referer` não é enviado pelos navegadores se:

- O recurso referenciado é um arquivo local ou URI de dados.
- Uma requisição HTTP insegura é usada e a página referenciada utilizou o protocolo seguro (HTTPS).

| Tipo de cabeçalho                                | {{Glossary("Request header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | yes                                      |

## Sintaxe

    Referer: <url>

## Diretivas

- \<url>
  - : Um endereço parcial ou absoluto da página web anterior do qual a página atual requirida foi alcançada. Fragmentos de URL (i.e. "#section") e informações de usuário (i.e. "username:password" em "https\://username:password\@example.com/foo/bar/") não são inclusos.

## Exemplos

    Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Especificações

| Especificação                                    | Título                                                        |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "Referer", "5.5.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.Referer")}}

## Veja também

- {{interwiki("wikipedia", "HTTP_referer", "HTTP referer no Wikipedia")}}
- {{HTTPHeader("Referrer-Policy")}}
