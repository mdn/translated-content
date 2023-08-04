---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
---

{{HTTPSidebar}}

O cabeçalho **`Server-Timing`** comunica uma ou mais métricas e descrições para um dado ciclo de requisição e resposta. Ele é usado para dar uma visão superficial de qualquer métrica de tempo do servidor _backend_ (e.g. leitura e escrita de banco de dados, tempo de CPU, acesso ao sistema de arquivos, etc.) nas ferramentas do desenvolvedor no navegador do usuário ou na interface {{domxref("PerformanceServerTiming")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

A sintaxe do cabeçalho `Server-Timing` permite você comunicar métricas de diversas formas: nome da métrica do servidor somente, métrica com valor, métrica com valor e descrição, métrica com descrição.

A especificação aconselha que nomes e descrições devem ser mantidas o mais curtas possível (use abreviações e omita valores opicionais quando possível) para minimizar o sobrecarregamento HTTP.

```
// Métrica único sem valor
Server-Timing: missedCache

// Métrica única com valor
Server-Timing: cpu;dur=2.4

// Métrica única com descrição e valor
Server-Timing: cache;desc="Cache Read";dur=23.2

// Duas métricas com valor
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing como reboque (trailer)
Trailer: Server-Timing
--- response body ---
Server-Timing: total;dur=123.4
```

## Privacidade e segurança

O cabeçalho `Server-Timing` pode expôr potenciais aplicações sensíveis e informação de infraestrutura. Considere controlar quais métricas são retornadas, quando e para quem no lado do servidor. Por exemplo, você pode mostrar métricas somente para usuários autenticados e nada para o público.

## Interface PerformanceServerTiming

Em adição tendo o cabeçalho `Server-Timing` de métricas aparecendo nas ferramentas de desenvolvedor do navegador, a interface {{domxref("PerformanceServerTiming")}} habilita ferramentas para automaticamente coletar e processar métricas do JavaScript. Essa interface é restrita para a mesma origem, mas você pode usar o cabeçalho {{HTTPHeader("Timing-Allow-Origin")}} para especificar domínios que estão permitidos de ter acesso às métricas do servidor. A interface está somente disponível em contextos seguros (HTTPS) em alguns navegadores.

## Especificações

| Especificação                                                                                 | Status                     | Título             |
| --------------------------------------------------------------------------------------------- | -------------------------- | ------------------ |
| {{SpecName('Server Timing','#the-server-timing-header-field', 'Server-Timing Header Field')}} | {{Spec2("Server Timing")}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("http.headers.Server-Timing")}}

## Veja também

- {{domxref("PerformanceServerTiming")}}
