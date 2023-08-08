---
title: Origem
slug: Glossary/Origin
---

O conteúdo de **origem** é definido pelo _esquema_ (protocolo), _host_ (domínio), e _porta_ da {{Glossary("URL")}} usada para acessá-lo. Dois objetos tem a mesma origem somente quando o esquema, host, e porta batem.

Algumas operações são restritas para conteúdos de mesma origem, e essa restrição pode ser ultrapassada usando {{Glossary("CORS")}}.

## Exemplos de mesma origem

| `http://example.com/app1/index.html` `http://example.com/app2/index.html` | Mesma origem pois possuem o mesmo esquema (`http`) e mesmo host (`example.com`)    |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `http://Example.com:80` `http://example.com`                              | Mesma origem pois o servidor entrega conteúdo HTTP através da porta 80 por padrão. |

## Exemplos de origens diferentes

| `http://example.com/app1` `https://example.com/app2`                     | Esquemas diferentes |
| ------------------------------------------------------------------------ | ------------------- |
| `http://example.com` `http://www.example.com` `http://myapp.example.com` | Hosts diferentes    |
| `http://example.com` `http://example.com:8080`                           | Portas diferentes   |

## Especificações

| Especificação                                    | Status                   | Comentário |
| ------------------------------------------------ | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', '#origin', 'origin')}} | {{Spec2('HTML WHATWG')}} |            |

## Aprenda mais

Veja [Same-origin policy](/pt-BR/docs/Web/Security/Same-origin_policy) para mais informações.

{{QuickLinksWithSubpages("/pt-BR/docs/Glossary")}}
