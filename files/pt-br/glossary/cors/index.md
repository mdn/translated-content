---
title: CORS
slug: Glossary/CORS
---

**CORS** (Cross-Origin Resource Sharing) é um sistema que consiste na transmissão de {{Glossary("Header", "HTTP headers")}}, que determina se navegadores vão bloquear código JavaScript de acessarem respostas provindas de requisições entre origens.

A [same-origin security policy](/pt-BR/docs/Web/Security/Same-origin_policy) proíbe acesso aos recursos entre origens. Mas CORS dá aos servidores web a habilidade de dizer quando eles querem optar em permitir o acesso aos seus recursos entre origens.

## Aprenda mais

### Conhecimento geral

- [Cross-Origin Resource Sharing (CORS)](/pt-BR/docs/Web/HTTP/CORS) na MDN
- [Cross-origin resource sharing](https://pt.wikipedia.org/wiki/Cross-origin_resource_sharing) na Wikipedia

### Cabeçalhos CORS

- {{HTTPHeader("Access-Control-Allow-Origin")}}
  - : Indica quando uma resposta pode ser compartilhada.
- {{HTTPHeader("Access-Control-Allow-Credentials")}}
  - : Indica quando uma resposta a uma requisição pode ou não ser exposta quando a bandeira de credenciais é verdadeira.
- {{HTTPHeader("Access-Control-Allow-Headers")}}
  - : Usado na resposta a uma requisição _on-the-fly_ que indica quais cabeçalhos HTTP podem ser usados quando a requisição verdadeira for feita.
- {{HTTPHeader("Access-Control-Allow-Methods")}}
  - : Especifica o método ou métodos de acesso ao recurso na requisição _on-the-fly._
- {{HTTPHeader("Access-Control-Expose-Headers")}}
  - : Indica quais cabeçalhos podem ser expostos como parte da resposta listando seus nomes.
- {{HTTPHeader("Access-Control-Max-Age")}}
  - : Indica quanto tempo os resultados da requisição _on-the-fly_ podem ser cacheados.
- {{HTTPHeader("Access-Control-Request-Headers")}}
  - : Usado ao emitir uma requisição _on-the-fly_ para deixar o servidor sabendo quais cabeçalhos HTTP serão utilizados quando a requisição verdadeira for feita.
- {{HTTPHeader("Access-Control-Request-Method")}}
  - : Usado ao emitir uma requisição _on-the-fly_ para deixar o servidor sabendo qual [método HTTP](/pt-BR/docs/Web/HTTP/Methods) será usado quando a requisição verdadeira for feita.
- {{HTTPHeader("Origin")}}
  - : Indica de onde uma busca se origina.

### Referência técnica

- [Especificação Fetch](https://fetch.spec.whatwg.org)

{{QuickLinksWithSubpages("/pt-BR/docs/Glossary")}}
