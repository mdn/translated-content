---
title: Content-Location
slug: Web/HTTP/Headers/Content-Location
---

{{HTTPSidebar}}

O cabeçalho **`Content-Location`** indica uma localização alternativa para os dados retornados. O principal uso é para indicar o URL de um recurso transmitido como resultado de uma [negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation).

{{HTTPHeader("Location")}} e `Content-Location` são diferentes. `Location` indica o URL de um redirecionamento, enquanto `Content-Location` indica o URL direto usado para acessar o recurso, sem qualquer outra negociação de conteúdo no futuro. `Location` é um cabeçalho associado com a resposta, enquanto `Content-Location` é associado com os dados retornados. Essa distinção parece abstrata sem exemplos. Essa distinção pode parecer abstrata sem [exemplos](#Exemplos).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Entity header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Content-Location: <url>
```

## Diretivas

- \<url>
  - : Uma URL [relativa](/pt-BR/docs/Learn/Common_questions/What_is_a_URL#Examples_of_relative_URLs) (à URL da requisição) ou URL [absoluta](/pt-BR/docs/Learn/Common_questions/What_is_a_URL#Examples_of_absolute_URLs).

## Exemplos

### Requerindo dados de um servidor em diferentes formatos

Digamos que uma API de um site pode retornar dados em formatos {{glossary("JSON")}}, {{glossary("XML")}}, ou [CSV](https://en.wikipedia.org/wiki/Comma-separated_values). Se a URL para um documento em particular está em `https://example.com/documents/foo`, o site pode retornar diferentes URLs para `Content-Location` dependendo do cabeçalho {{HTTPHeader("Accept")}} nas requisições:

| Cabeçalho de requisição               | Cabeçalho de resposta                   |
| ------------------------------------- | --------------------------------------- |
| `Accept: application/json, text/json` | `Content-Location: /documents/foo.json` |
| `Accept: application/xml, text/xml`   | `Content-Location: /documents/foo.xml`  |
| `Accept: text/plain, text/*`          | `Content-Location: /documents/foo.txt`  |

Estas URLs são exemplos — o site pode servir diferentes formatos de arquivos com qualquer padrão URL que ele deseje, como por exemplo, um [query string parameter](/pt-BR/docs/Web/API/HTMLHyperlinkElementUtils/search): `/documents/foo?format=json`, `/documents/foo?format=xml`, entre outros.

Então o cliente pode lembrar que a versão JSON está disponível em uma URL em particular, evitando negociação de conteúdo da próxima vez que ele requerer aquele documento.

O servidor também pode considerar outros cabeçalhos de [negociação de conteúdo](/pt-BR/docs/Web/HTTP/Content_negotiation), como o {{HTTPHeader("Accept-Language")}}.

### Apontando para um novo documento (HTTP 201 Created)

Digamos que você está criando um novo _post_ no blog através da API do site:

```
PUT /new/post
Host: example.com
Content-Type: text/markdown

# Meu primeiro post no blog!

Eu fiz através da API do `example.com`. Espero que ele tenha funcionado.
```

O site retorna uma mensagem de sucesso genérica confirmando que o _post_ foi publicado. O servidor especifica onde o novo _post_ está com `Content-Location`:

```
HTTP/1.1 201 Created
Content-Type: text/plain; charset=utf-8
Content-Location: /meu-primeiro-post-no-blog

✅ Sucesso!
```

### Indicando a URL do resultado de uma transação

Digamos que você tem um [`<form>`](/pt-BR/docs/Web/HTML/Element/form) para enviar dinheiro para outro usuário do de um site.

```html
<form action="/mandar-pagamento" method="post">
  <p>
    <label
      >Para quem você quer enviar o dinheiro?
      <input type="text" name="destinatario" />
    </label>
  </p>

  <p>
    <label
      >Quanto?
      <input type="number" name="quantidade" />
    </label>
  </p>

  <button type="submit">Enviar Dinheiro</button>
</form>
```

Quando o formulário é submetido, o site gera um recibo para a transação. O servidor pode usar `Content-Location` para indicar a URL do recibo para acesso futuro.

```
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
Content-Location: /meus-recibos/38

<!doctype html>
(Um monte de HTML…)

<p>Você mandou R$38.00 para UsuárioExemplo.</p>

(Mais um monte de HTML…)
```

## Especificações

| Especificação                                  | Título                                                        |
| ---------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Content-Location", "3.1.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.Content-Location")}}

## Veja também

- {{HTTPHeader("Location")}}
