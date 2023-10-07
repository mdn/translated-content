---
title: Content-Language
slug: Web/HTTP/Headers/Content-Language
---

{{HTTPSidebar}}

O [cabeçalho de entidade](/pt-BR/docs/Glossario/Entity_header) **`Content-Language`** é usado para descrever a língua(s) destinada para a audiência, para que isto permita um usuário de se diferenciar de acordo com a língua preferida do usuário.

Por exemplo, se "`Content-Language: de-DE`" está selecionado, você diz que o documento é destinado para quem fala Alemão (no entanto, não indica que o documento é escrito em Alemão. Por exemplo, pode ser escrito em Inglês como parte de um curso de línguas para fluentes em Alemão).

Se nenhum `Content-Language` é especificado, o padrão é que o conteúdo é destinado para todas as línguas. Múltiplas tags de língua também podem ser usada, assim como usar o header `Content-Language` com varios tipos de mídia e não apenas para documentos de texto.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>sim</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Content-Language: de-DE
Content-Language: en-US
Content-Language: de-DE, en-CA
```

## Directives

- `language-tag`
  - : Múltiplas tags de línguas são separadas por uma vírgula. Cada tag de língua é uma sequencia de uma ou mais subtags insensitíveis, cada uma separada por um hífen ("`-`", `%x2D`). Na maioria dos casos, uma tag de língua consiste de uma tag de língua primária que identifica uma família ampla de outras línguas (ex., "`en`" = English), que é opcionalmente seguida por uma série de subtags que refinam ou restringem aquele alcance da língua (ex., "`en-CA`" = variedade de Inglês como comunicado no Canadá).

> **Nota:** Tags de língua são formalmente deifnidas em [RFC 5646](https://tools.ietf.org/html/rfc5646), que depende do padrão [ISO 639](https://en.wikipedia.org/wiki/ISO_639) (muitas vezes o [ISO 639-1 code list](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)) para [language codes](https://en.wikipedia.org/wiki/Language_code) serem usados.

## Exemplos

### Indicando a língua que um documento está escrito

O atributo global [`lang`](/pt-BR/docs/Web/HTML/Global_attributes/lang) é usado em elementos HTML para indicar a língua de um documento [HTML](/pt-BR/docs/Web/HTML) ou partes dele.

```html
<html lang="de"></html>
```

Não use este elemento meta como o abaixo para definir a língua de um documento:

```html example-bad
<!-- /!\ Esta prática é ruim -->
<meta http-equiv="content-language" content="de" />
```

### Indicando uma audiência destinada para um documento

O header `Content-Language` é usado para especificar a **audiência destinada da página**, e pode indicar que é mais de uma língua.

```
Content-Language: de, en
```

## Especificações

| Specification                                  | Title                                                         |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Content-Language", "3.1.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.Content-Language")}}

## Veja também

- {{HTTPHeader("Accept-Language")}}
- [HTTP headers, meta elements and language information](https://www.w3.org/International/questions/qa-http-and-lang.en)
