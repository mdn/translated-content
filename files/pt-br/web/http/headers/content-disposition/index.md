---
title: Content-Disposition
slug: Web/HTTP/Headers/Content-Disposition
---

{{HTTPSidebar}}

Em uma resposta HTTP normal, o cabeçalho de resposta **`Content-Disposition`** indica se o conteúdo é esperado a ser exibido _inline_ no navegador, isso significa, como uma página Web ou parte de uma, ou como um anexo, que é baixado e salvo localmente.

Em um corpo `multipart/form-data`, o cabeçalho geral HTTP **`Content-Disposition`** é um cabeçalho que pode ser utilizado em uma subparte de um corpo multipartes para dar informações sobre o campo a que ele se aplica. A subparte é delimitada pelo limite definido no cabeçalho {{HTTPHeader("Content-Type")}}. Usado no corpo em si, `Content-Disposition` não tem efeito.

O cabeçalho `Content-Disposition` é definido em um grande contexto de mensagens MIME para e-mail, mas somente um subconjunto dos possíveis parâmetros são aplicados à formulários HTTP e requisições {{HTTPMethod("POST")}} requests. Somente o valor `form-data`, assim como a diretiva opcional `name` e `filename`, podem ser usadas no contexto HTTP.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>
        {{Glossary("Response header")}} (para o corpo principal)<br />{{Glossary("General header")}}
        (para a subparte de um corpo multipartes)
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

### Como cabeçalho de resposta para o corpo principal

O primeiro parâmetro no contexto HTTP ou é `inline` (valor padrão, indicando que ele pode ser mostrado dentro de uma página Web, ou como uma página Web) ou `attachment` (indicando que ele deve ser baixado; a maioria dos navegadores apresenta uma caixa de diálogo "Salvar como", pré-preenchido com o valor do parâmetro `filename` se presente).

```
Content-Disposition: inline
Content-Disposition: attachment
Content-Disposition: attachment; filename="filename.jpg"
```

### Como cabeçalho para um corpo multipartes

O primeiro parâmetro no contexto HTTP é sempre o `form-data`. Parâmetros adicionais são _case-insensitive_ e possuem argumentos que usam a sintaxe de cadeia de caracteres delimitadas por aspas depois do sinal `'='`. Múltiplos parâmetros são separados por um ponto e vírgula (`';'`).

```
Content-Disposition: form-data
Content-Disposition: form-data; name="fieldName"
Content-Disposition: form-data; name="fieldName"; filename="filename.jpg"
```

### Diretivas

- `name`

  - : O nome é seguido por uma cadeia de caracteres contendo o nome do campo HTML no formulário que o conteúdo dessa subparte se refere. Quando lidando com múltiplos arquivos no mesmo campo (por exemplo, o atributo [`multiple`](/pt-BR/docs/Web/HTML/Element/input#multiple) de um elemento `{HTMLElement("input","<input type=\"file\">")}}`), podem haver diversas subpartes com o mesmo nome.

    Um `name` com o valor de `'_charset_'` indica que a parte não é um campo HTML, mas uma codificação para usar em partes sem explicitar a informação de codificação.

- `filename`
  - : É seguido por uma cadeia de caracteres contendo o nome original do arquivo transmitido. O nome do arquivo é sempre opcional e não deve ser usado cegamente pela aplicação: informação de caminho deve ser removida, e conversão para as regras do sistema de arquivo do servidor devem ser feitas. Este parâmetro provém a maior parte da informação indicativa. Quando usado em combinação com `Content-Disposition: attachment`, ele é usado como nome de arquivo padrão para uma eventual caixa de diálogo "Salvar como" apresentado ao usuário.
- `filename*`
  - : Os parâmetros "filename" e "filename\*" se diferenciam somente no fato de que "filename\*" usa a codificação definida na [RFC 5987](https://tools.ietf.org/html/rfc5987). Quando ambos "filename" e "filename\*" estão presentes em um único campo de valor do cabeçalho, "filename\*" é preferido sobre "filename" quando ambos são entendidos.

## Exemplos

Uma resposta ativando a caixa de diálogo "Salvar como":

```
200 OK
Content-Type: text/html; charset=utf-8
Content-Disposition: attachment; filename="cool.html"
Content-Length: 21

<HTML>Me salve!</HTML>
```

O simples arquivo HTML será salvo como um download regular ao invés de ser mostrado no navegador. A maioria dos navegadores irá propôr salvar o arquivo como nome de `cool.html` (por padrão).

Um exemplo de um formulário de HTML postado usando o formato `multipart/form-data` que faz o uso do cabeçalho `Content-Disposition`:

```
POST /test.html HTTP/1.1
Host: example.org
Content-Type: multipart/form-data;boundary="boundary"

--boundary
Content-Disposition: form-data; name="field1"

value1
--boundary
Content-Disposition: form-data; name="field2"; filename="example.txt"

value2
--boundary--
```

## Especificações

| Especificação   | Título                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------- |
| {{RFC("7578")}} | Returning Values from Forms: multipart/form-data                                                  |
| {{RFC("6266")}} | Use of the Content-Disposition Header Field in the Hypertext Transfer Protocol (HTTP)             |
| {{RFC("2183")}} | Communicating Presentation Information in Internet Messages: The Content-Disposition Header Field |

## Compatibilidade com navegadores

{{Compat("http.headers.Content-Disposition")}}

## Notas de compatibilidade

- Firefox 5 lida com o cabeçalho de resposta HTTP `Content-Disposition` mais efetivamente se ambos parâmetros `filename` e `filename*` são providos; ele olha através de todos os nomes providenciados, usando o parâmetro `filename*` se um estiver disponível, mesmo se o parâmetro `filename` estiver incluído primeiro. Anteriormente, o primeiro parâmetro que combinasse seria utilizado, Previously, the first matching parameter would be used, desse modo prevenindo um nome mais apropriado de ser utilizado. Veja [Erro do Firefox 588781](https://bugzil.la/588781).

## Veja também

- [Formulários HTML](/pt-BR/docs/Web/Guide/HTML/Forms)
- O cabeçalho {{HTTPHeader("Content-Type")}} definindo o limite do corpo multipartes.
- A interface {{domxref("FormData")}} usada para manipular dados de formulários para uso na API {{domxref("XMLHttpRequest")}}.
