---
title: POST
slug: Web/HTTP/Methods/POST
---

{{HTTPSidebar}}

O **método HTTP `POST`** envia dados ao servidor. O tipo do corpo da solicitação é indicado pelo cabeçalho {{HTTPHeader("Content-Type")}}.

A diferença entre `PUT` e {{HTTPMethod("POST")}} é que `PUT` é idempotente: chamá-lo uma vez ou várias vezes sucessivamente tem o mesmo efeito (ou seja, nenhum efeito colateral), onde sucessivos POST idênticos podem ter efeitos adicionais, assim como passando uma ordem várias vezes.

Uma solicitação `POST` geralmente é enviada por meio de um [formulário HTML](/pt-BR/docs/Web/Guide/HTML/Forms) e resulta em uma alteração no servidor. Nesse caso, o tipo de conteúdo é selecionado colocando a string adequada no atributo [`enctype`](/pt-BR/docs/Web/HTML/Element/form#enctype) do elemento {{HTMLElement("form")}} ou o atributo [`formenctype`](/pt-BR/docs/Web/HTML/Element/input#formenctype) dos elementos {{HTMLElement("input")}} ou {{HTMLElement("button")}}:

- `application/x-www-form-urlencoded`: as chaves e valores são codificados em tuplas de valor-chave separadas por `'&'`, com um `'='` entre a chave e o valor. Caracteres não alfanuméricos em chaves e valores são {{glossary ("percent-encoding", "percent encoded")}}: este é o motivo pelo qual esse tipo não é adequado para uso com dados binários (ao invés disso, use `multipart/form-data`)
- `multipart/form-data`
- `text/plain`

Quando a requisição `POST` é enviada através de um método diferente de um formulário HTML - como por meio de um {{domxref("XMLHttpRequest")}} - o corpo pode assumir qualquer tipo. Conforme descrito na especificação HTTP 1.1, o `POST` é projetado para permitir que um método uniforme cubra as seguintes funções:

- Anotação de recursos existentes
- Postar uma mensagem em um quadro de avisos, newsgroup, lista de emails ou grupo similar de artigos;
- Adicionando um novo usuário através de um modal de inscrição;
- Fornecendo um bloco de dados, como o resultado do envio de um formulário, para um processo de manipulação de dados;
- Estendendo um banco de dados por meio de uma operação de _append_.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Requisição tem corpo</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">Resposta bem-sucedida tem corpo</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/Safe"
          >Seguro</a
        >
      </th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/Idempotent"
          >Idempotente</a
        >
      </th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">
        <a href="https://developer.mozilla.org/pt-BR/docs/Glossary/Cacheable"
          >Cacheável</a
        >
      </th>
      <td>Somente se as informações de atualização estiverem incluídas</td>
    </tr>
    <tr>
      <th scope="row">
        Permitido em
        <a href="/pt-BR/docs/Web/Guide/HTML/Forms">formulários HTML</a>
      </th>
      <td>Sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
POST /index.html
```

## Exemplo

Um simples formulário utilizando o padrão _content type_ `application/x-www-form-urlencoded`:

```http
POST / HTTP/1.1
Host: foo.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 13

say=Hi&to=Mom
```

Um formulário utilizando o _content type_ `multipart/form-data`:

```http
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
```

## Especificações

| Especificação                    | Título                                                        |
| -------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "POST", "4.3.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.methods.POST")}}

## Veja também

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Disposition")}}
