---
title: 300 Multiple Choices
slug: Web/HTTP/Status/300
---

{{HTTPSidebar}}

O código de resposta HTTP do status de redirecionamento **`300 Multiple Choices`** indica que a requisição tem uma ou mais possíveis respostas. O agente de usuário ou o usuário devem escolher uma delas. Como não há forma padrão de se escolher uma das respostas, esse código de resposta é raramente usado.

Se o servidor tem uma escolha de preferência, ele deve gerar um cabeçalho {{HTTPHeader("Localização")}}.

## Status

```
300 Multiple Choices
```

## Especificações

| Especificação                                     | Título                                                        |
| ------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "300 Multiple Choices" , "6.4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Veja também

- {{HTTPStatus("301")}} `Moved Permanently`
- {{HTTPStatus("302")}} `Found`, o redirecionamento temporário
- {{HTTPStatus("308")}} `Permanent Redirect`
