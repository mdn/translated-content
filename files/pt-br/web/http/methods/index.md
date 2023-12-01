---
title: Métodos de requisição HTTP
slug: Web/HTTP/Methods
---

> _Nota: O conteúdo original publicado em inglês no Mozilla Developer Network utiliza o termo "resource", mantido na tradução, que refere-se a qualquer destino válido ao executar uma conexão usando o protocolo HTTP. Na língua portuguesa, ao falar sobre requisições, o termo é pouco usado com essa finalidade ou contexto._

{{HTTPSidebar}}

O protocolo HTTP define um conjunto de **métodos de requisição** responsáveis por indicar a ação a ser executada para um dado recurso. Embora esses métodos possam ser descritos como substantivos, eles também são comumente referenciados como **_HTTP Verbs (Verbos HTTP)_**. Cada um deles implementa uma semântica diferente, mas alguns recursos são compartilhados por um grupo deles, como por exemplo, qualquer método de requisição pode ser do tipo {{glossary("safe")}}, {{glossary("idempotent")}} ou {{glossary("cacheable")}}.

- [`GET`](/pt-BR/docs/Web/HTTP/Methods/GET)
  - : O método `GET` solicita a representação de um recurso específico. Requisições utilizando o método `GET` devem retornar apenas dados.
- [`HEAD`](/pt-BR/docs/Web/HTTP/Methods/HEAD)
  - : O método `HEAD` solicita uma resposta de forma idêntica ao método `GET`, porém sem conter o corpo da resposta.
- [`POST`](/pt-BR/docs/Web/HTTP/Methods/POST)
  - : O método `POST` é utilizado para submeter uma entidade a um recurso específico, frequentemente causando uma mudança no estado do recurso ou efeitos colaterais no servidor.
- [`PUT`](/pt-BR/docs/Web/HTTP/Methods/PUT)
  - : O método `PUT` substitui todas as atuais representações do recurso de destino pela carga de dados da requisição.
- [`DELETE`](/pt-BR/docs/Web/HTTP/Methods/DELETE)
  - : O método `DELETE` remove um recurso específico.
- [`CONNECT`](/pt-BR/docs/Web/HTTP/Methods/CONNECT)
  - : O método `CONNECT` estabelece um túnel para o servidor identificado pelo recurso de destino.
- [`OPTIONS`](/pt-BR/docs/Web/HTTP/Methods/OPTIONS)
  - : O método `OPTIONS` é usado para descrever as opções de comunicação com o recurso de destino.
- [`TRACE`](/pt-BR/docs/Web/HTTP/Methods/TRACE)
  - : O método `TRACE` executa um teste de chamada _loop-back_ junto com o caminho para o recurso de destino.
- [`PATCH`](/pt-BR/docs/Web/HTTP/Methods/PATCH)
  - : O método `PATCH` é utilizado para aplicar modificações parciais em um recurso.

## Especificações

| Especificação                           | Título                                                        | Comentário                                                                   |
| --------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| {{RFC("7231", "Request methods", "4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content | Especifica os métodos GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE. |
| {{RFC("5789", "Patch method", "2")}}    | PATCH Method for HTTP                                         | Especifica o método PATCH.                                                   |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Cabeçalhos HTTP](/pt-BR/docs/Web/HTTP/Headers)
