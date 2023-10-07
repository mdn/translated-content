---
title: PUT
slug: Web/HTTP/Methods/PUT
---

{{HTTPSidebar}}

O **método de requisição** **HTTP PUT** cria um novo recurso ou subsititui uma representação do recurso de destino com os novos dados.

A diferença entre `PUT` e {{HTTPMethod("POST")}} é que `PUT` é idempotente: chamá-lo uma ou várias vezes sucessivamente terá o mesmo efeito (não é um efeito colateral), enquanto usar `POST` repetidamente pode ter efeitos adicionais, como passar uma ordem várias vezes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">A requisição tem corpo</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">Resposta bem sucedida tem corpo</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Safe")}}</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotent")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheable")}}</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">
        Permitido em
        <a href="/pt-BR/docs/Web/Guide/HTML/Forms">formulários HTML</a>
      </th>
      <td>Não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
PUT /new.html HTTP/1.1
```

## Exemplo

### Solicitação

```
PUT /new.html HTTP/1.1
Host: example.com
Content-type: text/html
Content-length: 16

<p>New File</p>
```

### Resposta

Se o recurso de destino não tem uma representação atual e a requisição `PUT` foi criada com sucesso, então o servidor original deve informar o agente de usuário enviando uma resposta {{HTTPStatus("201")}} (`Created`).

```
HTTP/1.1 201 Created
Content-Location: /new.html
```

Se o recurso de destino tem uma representação atual e essa representação é modificada com sucesso de acordo com o estado de representação em anexo, então o servidor original deve enviar também uma resposta {{HTTPStatus("200")}} (`OK`) or a {{HTTPStatus("204")}} (`No Content`) para indicar a conclusão da requisição.

```
HTTP/1.1 204 No Content
Content-Location: /existing.html
```

## Especificações

| Specification                   | Title                                                         |
| ------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "PUT", "4.3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semântica e conteúdo. |

## Compatibilidade com navegadores

{{Compat("http.methods.PUT")}}

## Veja também

- {{HTTPStatus("201")}}
- {{HTTPStatus("204")}}
