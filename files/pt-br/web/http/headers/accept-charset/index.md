---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`Accept-Charset`** anuncia quais {{glossary("character encoding", "character encodings")}} o cliente entende. Usando [negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation), o servidor seleciona uma das codificações, a utiliza, e informa o cliente da sua escolha dentro do cabeçalho de resposta {{HTTPHeader("Content-Type")}}, geralmente em um parâmetro `charset=`. Navegadores geralmente não mandam este cabeçalho, por que o valor padrão para cada recurso geralmente está correto e transmiti-lo iria permitir [fingerprinting](/pt-BR/docs/Mozilla/Firefox/Privacy/Tracking_Protection).

Se o servidor não pode servir nenhum codificação de caracteres vindo deste cabeçalho de requisição, ele pode teoricamente manda de volta um código de erro {{HTTPStatus("406", "406 Not Acceptable")}}. Mas para uma melhor experiência de usuário, isso raramente é feito e o cabeçalho `Accept-Charset` é ignorado.

> **Nota:** Nas versões mais antigas do HTTP/1.1, a codificação de caracteres definida era: ISO-8859-1. Isto não é mais recomendado, e agora todo tipo de conteúdo tem o seu próprio padrão.
>
> O UTF-8 é agora muito bem suportado e extremamente recomendado como codificação de caracteres preferida. Para [garantir melhor privacidade e através de menor entropia com base em configuração](https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy), todos os navegadores omitem o cabeçalho `Accept-Charset`: Internet Explorer 8+, Safari 5+, Opera 11+, Firefox 10+ e Chrome 27+ não o enviam mais.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Accept-Charset: <charset>

// Múltiplos tipos, com pesos baseados na sintaxe de {{glossary("quality values", "quality value")}}:
Accept-Charset: utf-8, iso-8859-1;q=0.5
```

## Diretivas

- `<charset>`
  - : O nome da codificação de caracteres, como `utf-8` ou `iso-8859-15.`
- `*`
  - : Qualquer codificação de caracteres não mencionada em qualquer lugar no cabeçalho; `*` é usado como coringa.
- `;q=<weight>`
  - : Qualquer codificação de caracteres é colocado na ordem de preferência, expresso usando um {{glossary("quality values", "quality value")}} relativo chamado de _peso_.

## Exemplos

```
Accept-Charset: iso-8859-1

Accept-Charset: utf-8, iso-8859-1;q=0.5

Accept-Charset: utf-8, iso-8859-1;q=0.5, *;q=0.1
```

## Especificações

| Especificação                              | Título                                                        |
| ------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "Accept-Charset", "5.3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |

## Compatibilidade com navegadores

{{Compat("http.headers.Accept-Charset")}}

## Veja também

- [Negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation) HTTP
- [Nunca mais Accept-Charset](https://hsivonen.fi/accept-charset/)
- Cabeçalho com a resposta do conteúdo de negociação: {{HTTPHeader("Content-Type")}}
- Outros cabeçalhos similares: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
