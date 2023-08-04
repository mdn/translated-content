---
title: Content-Type
slug: Web/HTTP/Headers/Content-Type
---

{{HTTPSidebar}}O cabeçalho **Content-Type** é utilizado para indicar o {{Glossary("MIME type","tipo de arquivo")}} do recurso.Em respostas, o `Content-Type` diz para o client qual é o tipo de conteúdo que a resposta, de fato, tem. Alguns browsers vão realizar o chamado "MIME Sniffing" em alguns casos e não vão, necessariamente, seguir o valor declarado por este cabeçalho. Para previnir este comportamento é possível definir o cabeçalho {{HTTPHeader("X-Content-Type-Options")}} para o valor `nosniff`.Em requisições, como {{HTTPMethod("POST")}} ou {{HTTPMethod("PUT")}}, o client diz ao servidor qual o tipo de dado que está, de fato, sendo enviado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">tipo de cabeçalho</th>
      <td>{{Glossary("Cabeçalho de entidade")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Nome de cabeçalho proibido")}}
      </th>
      <td>não</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Cabeçalho de resposta simples", "Cabeçalho de resposta na lista segura do CORS")}}
      </th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Content-Type: text/html; charset=utf-8
Content-Type: multipart/form-data; boundary=something
```

## Diretivas

- `media-type`
  - : O [MIME type](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types) do recurso ou dado.
- charset
  - : O encoding da string
- boundary
  - : Para entidades do tipo multipart, a diretiva `boundary` é obrigatória. Ela consiste em uma sequencia de 1 a 70 caracteres de um conjunto conhecido por sua robustez em gateways de e-mail, e não podem terminar com espaço em branco. É utilizado para encapsular as bordas das multiplas partes da mensagem.

## Exemplos

### `Content-Type` em formulários HTML

Em uma requisição {{HTTPMethod("POST")}}, resultado de uma submissão de um formulário HTML, o `Content-Type` da requisição é especificado pelo atributo `enctype` do elemento {{HTMLElement("form")}} do HTML.

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="text" name="description" value="some text" />
  <input type="file" name="myFile" />
  <button type="submit">Submit</button>
</form>
```

A requisição vai parecer com isto (alguns headers não importantes foram omitidos):

```
POST /foo HTTP/1.1
Content-Length: 68137
Content-Type: multipart/form-data; boundary=---------------------------974767299852498929531610575

---------------------------974767299852498929531610575
Content-Disposition: form-data; name="description"

some text
---------------------------974767299852498929531610575
Content-Disposition: form-data; name="myFile"; filename="foo.txt"
Content-Type: text/plain

(content of the uploaded file foo.txt)
---------------------------974767299852498929531610575
```

## Especificações

| Especificação                                       | Título                                                        |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7233", "Content-Type in multipart", "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests        |
| {{RFC("7231", "Content-Type", "3.1.1.5")}}          | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.Content-Type")}}

## Ver também

- {{HTTPHeader("Accept")}} e {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Content-Disposition")}}
- {{HTTPStatus("206")}} Partial Content
- {{HTTPHeader("X-Content-Type-Options")}}
