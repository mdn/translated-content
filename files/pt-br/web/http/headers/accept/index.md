---
title: Accept
slug: Web/HTTP/Headers/Accept
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`Accept`** anuncia quais tipos de conteúdo, expressos como [MIME types](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types), o cliente é capaz de entender. Usando [negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation), o servidor então seleciona uma das propostas, a usa e então informa o cliente da sua escolha com o cabeçalho de resposta {{HTTPHeader("Content-Type")}}. Navegadores colocam valores adequados para este cabeçalho dependendo do contexto onde a requisição é feita: quando buscando um CSS _stylesheet_, um valor diferente é colocado para a requisição, o mesmo acontece com imagens, vídeos ou scripts.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted request header")}}
      </th>
      <td>
        sim, com a restrição adicional de que valores não podem conter um
        <em>byte de requisição de cabeçalho CORS inseguro:</em
        ><code><em> </em>"():&#x3C;>?@[\]{}</code>, Delete, Tab e outros
        caracteres de controle: 0x00 à 0x19.
      </td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Múltiplos tipos, com pesos devido à sintaxe {{glossary("quality values", "quality value")}}:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## Diretivas

- `<MIME_type>/<MIME_subtype>`
  - : Um único e preciso [MIME type](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types), como por exemplo: `text/html`.
- `<MIME_type>/*`
  - : Um [MIME type](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types), mas com qualquer subtipo. `image/*` vai coincidir com `image/png`, `image/svg`, `image/gif` e outros tipos de imagens.
- `*/*`
  - : Qualquer [MIME type](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
- `;q=` (fator de q de peso \[q-factor])
  - : Qualquer valor usado é colocado em uma ordem de preferência expressada usando o [quality value](/pt-BR/docs/Glossary/Quality_values) relativo chamado _peso._

## Exemplos

```
Accept: text/html

Accept: image/*

// Padrão geral
Accept: */*

// Padrão para requisições de navegação
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## Especificações

| Especificação                      | Título                                                        |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Accept", "5.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |

## Compatibilidade com navegadores

{{Compat("http.headers.Accept")}}

## Veja também

- [Negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation) HTTP
- Cabeçalho com o resultado da negociação de conteúdo: {{HTTPHeader("Content-Type")}}
- Outros cabeçalhos similares: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
