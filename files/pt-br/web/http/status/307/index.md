---
title: 307 Redirecionamento temporário
slug: Web/HTTP/Status/307
---

{{HTTPSidebar}}

{{Glossary("HTTP")}} O código de estado **`307 Redirecionamento temporário`** indica que o recurso da requisição foi temporariamente alterado para a URL informada no cabeçalho {{HTTPHeader("Location")}}.

O método e o corpo da requisição original são reutilizados para realizar a requisição de redirecionamento. Em casos onde você deseja que o método utilizado seja alterado para {{HTTPMethod("GET")}}, utilize o código de estado {{HTTPStatus("303", "303 See Other")}}. Isto é util quando você deseja dar uma resposta a um método {{HTTPMethod("PUT")}} que não seja o recurso enviado, mas uma mensagem de confirmação (como por exemplo "Envio de XYZ concluído com sucesso").

A única diferença entre `307` e {{HTTPStatus("302")}} é que o `307` garante que o método e o corpo não são alterados quando o redirecionamento é feito. Com o `302`, alguns clientes antigos alteram o método para {{HTTPMethod("GET")}}: o comportamento com métodos não-`GET` e `302` fica assim imprevisível na Web, enquanto o comportamento com `307` é previsível. Para requisições `GET`, seu comportamento é identico.

## Status

```
307 Redirecionamento temporário
```

## Especificações

| Especificação                                       | Título                                                        |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "307 Temporary Redirect" , "6.4.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.status.307")}}

## Veja também

- {{HTTPStatus("302", "302 Found")}}, o equivalente a este código de estado, que pode mudar o método utilizado quiando não é um {{HTTPMethod("GET")}}.
- {{HTTPStatus("303", "303 See Other")}}, um redirecionamento temporário que altera o método utilizado para {{HTTPMethod("GET")}}.
- {{HTTPStatus("301", "301 Moved Permanently")}}, um redirecionamento permanente.
