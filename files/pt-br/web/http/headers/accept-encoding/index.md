---
title: Accept-Encoding
slug: Web/HTTP/Headers/Accept-Encoding
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`Accept-Encoding`** indica qual codificação de conteúdo, usualmente um algoritmo de compressão, o cliente está apto a entender. Usando [negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation), o servidor seleciona uma das propostas, a utiliza e informa o cliente da escolha feita com o cabeçalho de resposta {{HTTPHeader("Content-Encoding")}}.

Até mesmo se o cliente e o servidor suportarem os mesmos algoritmos de compressão, o servidor pode escolher não comprimir o corpo da resposta, se o valor de identidade também é aceitável. Dois casos comuns levam a isso:

- Os dados a serem enviados já estão comprimidos e a segunda compressão não irá deixar os dados menores para serem transmitidos. Isso pode ser o caso com alguns formatos de imagens;
- O servidor está sobrecarregado e não pode suportar a sobrecarga computacional induzida pelas exigências da compressão. Tipicamente, a Microsoft recomenda a não comprimir um corpo de resposta se o servidor utiliza mais do que 80% do seu poder computacional.

Enquanto o valor de `identity`, que significa sem codificação, não é explicitamente proibido, por um `identity;q=0` ou um `*;q=0` sem qualquer outra atribuição explícita para a identidade, o servidor nunca deve mandar como resposta um erro {{HTTPStatus("406")}} `Not Acceptable`.

> **Nota:** **Notas:**- Um registro da IANA mantém [a lista completa das codificações de conteúdo](http://www.iana.org/assignments/http-parameters/http-parameters.xml#http-parameters-1).
>
> - Duas outras codificações de conteúdo, `bzip` e `bzip2`, são algumas vezes utilizadas, entretanto não são o padrão. Elas implementam o algoritmo usado por estes dois programas UNIX. Note que o primeiro foi descontinuado por problemas de patente.

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
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// Múltiplos algoritmos, com pesos baseados na sintaxe de {{Glossary("Quality Values", "quality value")}}:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## Diretivas

- `gzip`
  - : Formato de compressão usando o [Lempel-Ziv coding](http://en.wikipedia.org/wiki/LZ77_and_LZ78#LZ77) (LZ77), com CRC de 32-bits.
- `compress`
  - : Formato de compressão usando o algoritmo [Lempel-Ziv-Welch](http://en.wikipedia.org/wiki/LZW) (LZW).
- `deflate`
  - : Formato de compressão usando a estrutura [zlib](http://en.wikipedia.org/wiki/Zlib), com o algoritmo de compressão [_deflate_](http://en.wikipedia.org/wiki/DEFLATE).
- `br`
  - : Formato de compressão usando o algoritmo de [Brotli](https://en.wikipedia.org/wiki/Brotli).
- `identity`
  - : Indica a identidade da função (i.e. sem compressão, ou sem modificação). Esse valor é sempre considerado como aceitável, mesmo se não estiver presente.
- `*`
  - : Aceita qualquer codificação de conteúdo ainda não listada no cabeçalho. Esse é o valor padrão se o cabeçalho não estiver presente. Isto não significa que qualquer algoritmo é suportado; meramente que nenhuma preferência é expressa.
- `;q=` (valores de peso q)
  - : Qualquer valor é colocado em uma ordem de preferência expressada usando a [quality value](/pt-BR/docs/Glossary/Quality_values) relativa chamada _peso_.

## Exemplos

```
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Especificações

| Especificação                               | Título                                                        |
| ------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Accept-Encoding", "5.3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |

## Compatibilidade com navegadores

{{Compat("http.headers.Accept-Encoding")}}

## Veja também

- [Negociação de conteúdo HTTP](/pt-BR/docs/Web/HTTP/Content_negotiation)
- Cabeçalho com o resultado do conteúdo de negociação: {{HTTPHeader("Content-Encoding")}}
- Outros cabeçalhos similares: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
