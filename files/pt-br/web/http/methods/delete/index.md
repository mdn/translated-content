---
title: DELETE
slug: Web/HTTP/Methods/DELETE
---

{{HTTPSidebar}}O **método de requisição HTTP DELETE** remove o recurso especificado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Requisição tem corpo</th>
      <td>Talvez</td>
    </tr>
    <tr>
      <th scope="row">A resposta bem sucedida tem corpo</th>
      <td>Talvez</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Seguro")}}</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Idempotente")}}</th>
      <td>Sim</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Cacheável")}}</th>
      <td>Não</td>
    </tr>
    <tr>
      <th scope="row">
        Aceito nos
        <a href="/pt-BR/docs/Web/Guide/HTML/Forms">formulários HTML</a>
      </th>
      <td>Não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
DELETE /arquivo.html HTTP/1.1
```

## Exemplo

### Requisição

```
DELETE /arquivo.html HTTP/1.1
```

### Respostas

Se um método `DELETE` for aplicado com sucesso, há muitos códigos de status de resposta possíveis:

- Um código de status {{HTTPStatus("202")}} (`Accepted`) se a ação provavelmente teve sucesso, porém ainda não foi realizada.
- Um código de status {{HTTPStatus("204")}} (`No Content`) se a ação foi realizada e nenhuma outra informação deve ser fornecida.
- Um código de status {{HTTPStatus("200")}} (`OK`) se a ação foi realizada e a mensagem de resposta inclui uma representação descrevendo o status.

```
HTTP/1.1 200 OK
Date: Wed, 21 Oct 2015 07:28:00 GMT

<html>
  <body>
    <h1>Arquivo removido.</h1>
  </body>
</html>
```

## Especificações

| Especificação                      | Título                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------- |
| {{RFC("7231", "DELETE", "4.3.5")}} | Protocolo de Transferência de Hipertexto (HTTP/1.1): Semântica e conteúdo |

## Compatibilidade com navegadores

{{Compat("http.methods.DELETE")}}

## Veja também

- HTTP status: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
