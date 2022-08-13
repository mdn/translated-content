---
title: DELETE
slug: Web/HTTP/Methods/DELETE
tags:
  - HTTP
  - Método HTTP
  - Método de requisição
  - Referencia
translation_of: Web/HTTP/Methods/DELETE
---
{{HTTPSidebar}}O **método de requisição HTTP DELETE** remove o recurso especificado.

| Requisição tem corpo                                            | Talvez |
| --------------------------------------------------------------- | ------ |
| A resposta bem sucedida tem corpo                               | Talvez |
| {{Glossary("Seguro")}}                                    | Não    |
| {{Glossary("Idempotente")}}                            | Sim    |
| {{Glossary("Cacheável")}}                            | Não    |
| Aceito nos [formulários HTML](/pt-BR/docs/Web/Guide/HTML/Forms) | Não    |

## Sintaxe

    DELETE /arquivo.html HTTP/1.1

## Exemplo

### Requisição

    DELETE /arquivo.html HTTP/1.1

### Respostas

Se um método `DELETE` for aplicado com sucesso, há muitos códigos de status de resposta possíveis:

- Um código de status {{HTTPStatus("202")}} (`Accepted`) se a ação provavelmente teve sucesso, porém ainda não foi realizada.
- Um código de status {{HTTPStatus("204")}} (`No Content`) se a ação foi realizada e nenhuma outra informação deve ser fornecida.
- Um código de status {{HTTPStatus("200")}} (`OK`) se a ação foi realizada e a mensagem de resposta inclui uma representação descrevendo o status.

    HTTP/1.1 200 OK
    Date: Wed, 21 Oct 2015 07:28:00 GMT

    <html>
      <body>
        <h1>Arquivo removido.</h1>
      </body>
    </html>

## Especificações

| Especificação                                | Título                                                                    |
| -------------------------------------------- | ------------------------------------------------------------------------- |
| {{RFC("7231", "DELETE", "4.3.5")}} | Protocolo de Transferência de Hipertexto (HTTP/1.1): Semântica e conteúdo |

## Compatibilidade com navegadores

{{Compat("http.methods.DELETE")}}

## Veja também

- HTTP status: {{HTTPStatus("200")}}, {{HTTPStatus("202")}}, {{HTTPStatus("204")}}
