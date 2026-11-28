---
title: Cabeçalho Accept-Query
short-title: Accept-Query
slug: Web/HTTP/Reference/Headers/Accept-Query
l10n:
  sourceCommit: 346e46c6e10334bf60df2a0a4ef58ebea4c80a4e
---

O {{Glossary("response header", "cabeçalho de resposta")}} HTTP **`Accept-Query`** indica que um recurso suporta o método {{HTTPMethod("QUERY")}} e identifica os [tipos de mídia](/pt-BR/docs/Web/HTTP/Guides/MIME_types) de formato de consulta que ele aceita.
Apesar do nome, o `Accept-Query` é enviado pelo servidor em uma resposta, e não pelo cliente em uma requisição: ele informa aos clientes o que eles podem enviar como conteúdo de uma requisição `QUERY` posterior.

`Accept-Query` é um campo estruturado cujo valor é uma lista de intervalos de mídia (um tipo de mídia que pode incluir coringas), cada um representado como uma string ou um token de campo estruturado e, opcionalmente, acompanhado de parâmetros de campo estruturado.
A ordem dos tipos de mídia na lista não é significativa.
Seu valor se aplica a todas as URIs do servidor com o mesmo caminho, independentemente do componente de consulta da URI.
Se requisições ao mesmo recurso retornarem valores de `Accept-Query` diferentes, vale o valor recebido mais recentemente que ainda esteja válido (_fresh_).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```http
// Token ou string entre aspas equivalente
Accept-Query: <media-type>/<subtype>
Accept-Query: "<media-type>/<subtype>"

// Tokens incluindo coringas
Accept-Query: <media-type>/*
Accept-Query: */*

// Lista de intervalos de mídia separados por vírgula, em qualquer ordem, misturando tokens e strings
Accept-Query: <media-type>/<subtype>, "<media-type-2>/<subtype-2>", <media-type-3>/*

// Parâmetros de tipo de mídia expressos como parâmetros de campo estruturado
Accept-Query: <media-type>/<subtype>;<parameter>=<value>
Accept-Query: <media-type>/<subtype>;<parameter>="<value>"
```

> [!NOTE]
> Embora seu valor se pareça com o de {{HTTPHeader("Accept")}}, o `Accept-Query` é um campo estruturado ({{rfc("9651", "Structured Field Values for HTTP")}}) e deve ser analisado como tal.
> Em particular, ele não tem a noção de preferência por meio de argumentos `q` ({{Glossary("quality values", "valores de qualidade")}}): todos os intervalos de mídia da lista são igualmente aceitáveis, e a ordem da lista não é significativa.
> Isso ocorre porque `Accept-Query` é um cabeçalho de resposta, enquanto `Accept` é um cabeçalho de requisição.

## Diretivas

- `<media-type>/<subtype>`
  - : Um [tipo de mídia](/pt-BR/docs/Web/HTTP/Guides/MIME_types) com um subtipo que o recurso aceita como conteúdo de uma requisição `QUERY`, como `application/json`.
    Expresso como um token de campo estruturado.
- `"<media-type>/<subtype>"`
  - : O mesmo valor expresso como uma string de campo estruturado.
    A escolha entre token e string não carrega nenhum significado; portanto, os destinatários não devem tratar as duas formas de maneira diferente.
    A string é obrigatória quando o intervalo de mídia não é um token válido, como quando o tipo começa com um dígito.
- `<media-type>/*`
  - : Um tipo de mídia que aceita qualquer subtipo.
    Por exemplo, `image/*` corresponde a `image/png`, `image/svg`, `image/gif` e outros tipos de imagem.
- `*/*`
  - : Qualquer tipo de mídia.
- `;<parameter>=<value>`
  - : Um parâmetro de tipo de mídia, como `;charset="UTF-8"`, mapeado para um parâmetro de campo estruturado no intervalo de mídia que o precede.
    Os valores dos parâmetros também são tokens ou strings.
    O intervalo de mídia em si é sempre escrito sem seus parâmetros.

## Exemplos

### Anunciando os formatos de consulta suportados

A resposta a seguir indica que o recurso suporta requisições `QUERY` com conteúdo `application/x-www-form-urlencoded` ou `application/sql`:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: application/x-www-form-urlencoded, application/sql
```

### Usando strings e parâmetros de tipo de mídia

Os intervalos de mídia também podem ser escritos como strings entre aspas, e as duas formas podem ser misturadas em uma mesma lista.
Aqui, o recurso aceita consultas JSONPath e consultas SQL codificadas em UTF-8:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Accept-Query: "application/jsonpath", application/sql;charset="UTF-8"
```

Como a resposta depende do conteúdo da requisição `QUERY`, o servidor também pode enviar um cabeçalho {{HTTPHeader("Vary")}} nomeando os campos envolvidos:

```http
HTTP/1.1 200 OK
Content-Type: text/csv
Accept-Query: "application/sql", "application/xslt+xml"
Vary: Accept-Query, Content-Encoding, Content-Type
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

A compatibilidade com navegadores não é relevante para este cabeçalho.
Os navegadores não têm nenhum tratamento embutido para o `Accept-Query`; cabe ao cliente que envia requisições `QUERY` ler o cabeçalho e usá-lo para escolher um tipo de mídia suportado para o conteúdo da requisição.

## Veja também

- Método de requisição {{HTTPMethod("QUERY")}}
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Location")}}
- {{HTTPHeader("Location")}}
- {{HTTPHeader("Vary")}}
- {{HTTPStatus("415", "415 Unsupported Media Type")}}
