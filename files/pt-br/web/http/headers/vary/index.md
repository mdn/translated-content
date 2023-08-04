---
title: Vary
slug: Web/HTTP/Headers/Vary
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`Vary`** determina como corresponder futuros cabeçalhos de requisição para decidir se uma resposta cacheada pode ser usada ao invés de solicitar uma nova do servidor de origem. Ele é usado pelo servidor para indicar quais cabeçalhos ele utilizou quando selecionando a representação do recurso em um algoritmo de [negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation).

O cabeçalho `Vary` deve ser colocado em uma resposta {{HTTPStatus("304")}} `Not Modified` exatamente como seria colocado em uma resposta {{HTTPStatus("200")}} `OK` equivalente.

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

```
Vary: *
Vary: <header-name>, <header-name>, ...
```

## Diretivas

- \*
  - : Cada requisição para a URL é supostamente tratada como uma requisição única e incacheavél. Um jeito melhor de indicar isso é usar {{HTTPHeader("Cache-Control")}}: `no-store`, que é mais limpo para se ler e também sinaliza que o objeto não deve ser guardado nunca.
- \<header-name>
  - : Uma lista separada por vírgula de nomes de cabeçalhos para levar em conta quando for decidir se uma resposta cacheada pode ser usada.

## Exemplos

### Servimento dinâmico

Quando utilizando o cabeçalho `Vary: User-Agent`, servidores de cacheamento devem considerar o agente de usuário quando estiverem decidindo se irão servir a página do cache. Por exemplo, se você está servindo conteúdo diferente para usuários móveis, ele pode ajudar você a evitar que um cache possa erroneamente servir uma versão desktop do seu site, para os usuários móveis. Ele pode ajudar o Google e outros motores de busca a descobrir a versão móvel da página, e talvez possa dizer a eles que não existe intenção de [Cloaking](https://en.wikipedia.org/wiki/Cloaking).

```
Vary: User-Agent
```

## Especificações

| Especificação                    | Título                                                        |
| -------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Vary", "7.1.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.Vary")}}

## Notas de compatibilidade

- [Vary com cuidado – Problemas do cabeçalho Vary em IE6-9](https://blogs.msdn.microsoft.com/ieinternals/2009/06/17/vary-with-care/)

## Veja também

- [Entendendo o cabeçalho Vary (Understanding The Vary Header) - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Melhores práticas quando utilizando o cabeçalho Vary (Best Practices for Using the Vary Header) – fastly.com](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)
- [Negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation)
