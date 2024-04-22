---
title: "502"
slug: conflicting/Web/HTTP/Status/502
---

Um erro {{Glossary("HTTP")}} que significa "Bad Gateway".

O {{Glossary("Servidor","Servidor")}} pode agir como um gateway ou proxy (go-between) entre um cliente (como seu navegador web) ou outro, servidor de upstream. Quando sua requisição tenta acessar uma {{Glossary("URL")}}, o servidor de gateway pode retransmitir sua requisição para o servidor de upstream. "502" significa que o servidor de upstream retorou uma resposta inválida.

Normalmente o servidor de upstream não esta fora (ou seja, não fornece resposta ao gateway/proxy), mas simplesmente não entende o mesmo protocolo de troca de dados(data-exchange) como o gateway/proxy. Os {{Glossary("Protocol", "protocols")}} de Internet são bem explícitos, então um 502 normalmente significa que uma ou ambas as maquinas estão programadas incorretamente ou parcialmente.

## Aprenda mais

- [list of HTTP response codes](/pt-BR/docs/Web/HTTP/Response_codes)
