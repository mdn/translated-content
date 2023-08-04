---
title: 451 Unavailable For Legal Reasons
slug: Web/HTTP/Status/451
---

{{HTTPSidebar}}

O código de erro HTTP para o cliente **`451 Unavailable For Legal Reasons`** indica que o recurso solicitado pelo usuário não está disponível por motivos legais, como em uma página web para a qual foi emitida uma ação legal.

## Status

```
451 Unavailable For Legal Reasons
```

## Exemplo

Este exemplo de resposta foi obtida da RFC do IETF (veja abaixo) e contém uma referência à [Monty Python's Life of Brian](https://pt.wikipedia.org/wiki/A_Vida_de_Brian).

**Nota:** o cabeçalho {{HTTPHeader("Link")}} também pode conter uma relação `rel="blocked-by"` identificando a entidade que solicitou o bloqueio, e não qualquer outra entidade.

Qualquer identificação da entidade responsável pela não disponibilidade do recurso, como o nome da pessoa ou organização que demandou a ação legal que resultou na remoção do conteúdo, deve estar no corpo da resposta, não no link `rel="blocked-by"`.

```
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html
```

```
<html>
      <head><title>Unavailable For Legal Reasons</title></head>
      <body>
            <h1>Unavailable For Legal Reasons</h1>
            <p>This request may not be serviced in the Roman Province
            of Judea due to the Lex Julia Majestatis, which disallows
            access to resources hosted on servers deemed to be
            operated by the People's Front of Judea.</p>
     </body>
</html>
```

## Especificações

| Epecificação                                         | Título                                        |
| ---------------------------------------------------- | --------------------------------------------- |
| {{RFC("7725", "451 Unavailable For Legal Reasons")}} | An HTTP Status Code to Report Legal Obstacles |

## Compatibilidade com navegadores

A informação exibida acima está sendo servida do MDN's GitHub (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.451")}}

## Veja também

- [Wikipedia: HTTP 451](https://pt.wikipedia.org/wiki/HTTP_451)
- [Wikipedia: Fahrenheit 451](https://pt.wikipedia.org/wiki/Fahrenheit_451) (which gave this status code its number)
