---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
---

{{HTTPSidebar}}

O cabeçalho HTTP **`Accept-Language`** anuncia quais linguas o cliente é capaz de entender, e qual é a preferência do variante do Locale. (Por Linguas, queremos dizer linguas como Inglês e portugues) Usando [content negotiation](/pt-BR/docs/Web/HTTP/Content_negotiation), o servidor seleciona uma das propostas, usa ela e informa o cliente da sua escolha com o {{HTTPHeader("Content-Language")}} cabeçalho de responsta. Navegadores configuram valores adequados para este cabeçalhos de acordo com a língua configurada pelo usuario.

Este cabeçalho é uma dica a ser usada pelo servidor quando ele não possui outra forma de determinar a lingua do cliente, como uma URL específica, que é controlada por uma decisão explicita do usuário. É recomendado que o servidor nunca sobreescreva uma decisão explícita. O conteúdo de `Accept-Language` está comumente fora do controle do usuário (em uma viagem a outro país por exemplo); O usuário pode querer acessar a página em outra língua diferente da decidida pelo navegador.

Se o servicor não encontrar uma língua correspondente, ele pode, teóricamente responder com o código de erro{{HTTPStatus("406")}} (Not Acceptable) . Mas, para uma melhor experiência de usuário, isso raramente é feito. Mais comumente, quando isso ocorre, o cabeçalho é ignorado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de Cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Accept-Language: <language>
Accept-Language: *

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Diretivas

- `<language>`
  - : A tag language (a qual pode ser chamada de "identificador de Locale") consiste de uma tag de 2 a 3 letras representando a lingua, opcionalmente pode ser seguida de um `'-'` separa outras informações extras. A mais comum informação extra é a região do país (como`'pt-BR'` ou `'pt-PT'`) ou o tipo do alfabeto a ser usado (como`'sr-Latn'`). Outras variantes como o tipo de ortografia (`'de-DE-1996'`) normalmente não são utilizadas no contexto deste cabeçalho.
- `*`
  - : Qualquer lingua; `'*'` é utilizado como curinga.
- `;q=` (q-factor weighting)
  - : Any value placed in an order of preference expressed using a relative {{glossary("Quality values", "quality value")}} called _weight_.

## Examples

```
Accept-Language: de

Accept-Language: de-CH

Accept-Language: en-US,en;q=0.5
```

## Specifications

| Specification                               | Title                                                         |
| ------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Accept-Language", "5.3.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |
| [BCP 47](https://tools.ietf.org/html/bcp47) | Tags for the Identification of Language                       |

## Compatibilidade com navegadores

{{Compat("http.headers.Accept-Language")}}

## See also

- HTTP [content negotiation](/pt-BR/docs/Web/HTTP/Content_negotiation)
- Header with the result of the content negotiation: {{HTTPHeader("Content-Language")}}
- Other similar headers: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept")}}
