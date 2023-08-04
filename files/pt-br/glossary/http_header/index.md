---
title: Cabeçalho HTTP
slug: Glossary/HTTP_header
---

Um **Cabeçalho HTTP** é um campo de uma requisição ou resposta HTTP que passa informações adicionais, alterando ou melhorando a precisão da semântica da mensagem ou do corpo. Cabeçalhos são _case-insensitive_, iniciam-se no começo da linha e são seguidos imediamente por um `':'` e um valor dependendo do cabeçalho em si. O valor termina no próximo CRLF ou no fim da mensagem.

Tradicionalmente, cabeçalhos são classificados em categorias, apesar disso, essa classificação não faz mais parte de nenhuma especificação:

- {{Glossary("General header")}}: Cabeçalhos aplicados ambos em requisições e respostas mas sem nenhuma relação com os dados eventualmente transmitidos no corpo.
- {{Glossary("Request header")}}: Cabeçalhos contendo mais informação sobre o recurso a ser buscado ou sobre o cliente em si.
- {{Glossary("Response header")}}: Cabeçalhos com informação adicional sobre a resposta, como localização ou sobre o servidor em si (nome, versão etc.).
- {{Glossary("Entity header")}}: Cabeçalhos contendo mais informação sobre o corpo da entidade, como o tamanho do conteúdo ou o seu _MIME-type._

Uma requisição básica com um cabeçalho:

```
GET /example.http HTTP/1.1
Host: example.com
```

Redirecionamentos possuem cabeçalhos mandatários ({{HTTPHeader("Location")}}):

```
302 Found
Location: /NewPage.html
```

Um típicos conjunto de cabeçalhos:

```
304 Not Modified
Access-Control-Allow-Origin: *
Age: 2318192
Cache-Control: public, max-age=315360000
Connection: keep-alive
Date: Mon, 18 Jul 2016 16:06:00 GMT
Server: Apache
Vary: Accept-Encoding
Via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cloudfront.net (CloudFront)
X-Amz-Cf-Id: TOl0FEm6uI4fgLdrKJx0Vao5hpkKGZULYN2TWD2gAWLtr7vlNjTvZw==
X-Backend-Server: developer6.webapp.scl3.mozilla.com
X-Cache: Hit from cloudfront
X-Cache-Info: cached
```

1. Especificações

   1. Sintaxe dos [cabeçalhos](https://tools.ietf.org/html/rfc7230#section-3.2) na especificação HTTP.

2. Referência Técnica

   1. [Lista de todos os cabeçalhos HTTP](/pt-BR/docs/Web/HTTP/Headers)

3. [Glossário](/pt-BR/docs/Glossario)

   1. {{Glossary("HTTP header")}}
   2. {{Glossary("General header")}}
   3. {{Glossary("Request header")}}
   4. {{Glossary("Response header")}}
   5. {{Glossary("Entity header")}}
   6. {{Glossary("Forbidden header name")}}
   7. {{Glossary("Forbidden response header name")}}
   8. {{Glossary("CORS-safelisted request header")}}
   9. {{Glossary("CORS-safelisted response header")}}
