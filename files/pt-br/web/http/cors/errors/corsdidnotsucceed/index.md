---
title: "Razão: A requisição CORS não foi bem sucedida"
slug: Web/HTTP/CORS/Errors/CORSDidNotSucceed
---

{{HTTPSidebar}}

## Razão

```
Razão: A requisição CORS não foi bem sucedida
```

## O que deu errado?

A requisição {{Glossary("HTTP")}} que faz uso do CORS falhou porque a conexão HTTP falhou a nível da camada de transporte ou protocolo. O erro não é diretamente relacionado ao CORS, mas é um tipo de erro fundamental de rede.

Em alguns casos, isso é causado por um plug-in do navegador (um bloqueador de anúncios ou protetor de privacidade) bloqueando a solicitação.

Outras possíveis causas incluem:

- Tentar acessar um recurso https que possui um certificado inválido causará esse erro.
- Tentar acessar um recurso http de uma página com origem https também causará esse erro.
- No Firefox 68, as páginas https não têm permissão para acessar http: // localhost, embora isso possa ser alterado pelo Bug 1488740.
- O servidor não respondeu à solicitação atual (mesmo que tenha respondido ao {{Glossary ("Preflight request")}}). Um cenário pode ser um serviço HTTP em desenvolvimento que entre em pânico sem retornar nenhum dado.

## Veja também

- [Erros de CORS](/pt-BR/docs/Web/HTTP/CORS/Errors)
- Glossary: {{Glossary("CORS")}}
- [Introdução ao CORS](/pt-BR/docs/Web/HTTP/CORS)
