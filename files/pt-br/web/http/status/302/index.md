---
title: 302 Found
slug: Web/HTTP/Status/302
---

{{HTTPSidebar}}

O código de estado HyperText Transfer Protocol (HTTP) **`302 Found`** indica que o recurso foi temporariamente movido para a URL informada pelo cabeçalho {{HTTPHeader("Localização")}}. Os navegadores redirecionar para essa página porém os motores de busca não atualizam o link inicial.

Mesmo que a requisição requer que o método (e o corpo) não sejam alterados quando o redirecionamento é feito, nem todos os user-agent entram em conformidade - ainda é comum encontrar softwares com bugs neste quesito. Por isso, é recomendado habilitar o código `302` somente em resposta aos métodos {{HTTPMethod("GET")}} ou {{HTTPMethod("HEAD")}} e utilizar o método {{HTTPStatus("307", "307 Temporary Redirect")}} em outros casos, já que a troca de método é expressamente proibida nesse caso.

Em casos onde você deseja que o método utilizado altere para {{HTTPMethod("GET")}}, utilize {{HTTPStatus("303", "303 See Other")}}. Isto é útil quando você deseja dar uma resposta a um método {{HTTPMethod("PUT")}} que não seja um recurso, mas uma mensagem de confirmação, como por exemplo: 'você enviou XYZ com sucesso'.

## Status

```
302 Encontrado
```

## Especificações

| Especificação                          | Título                                                        |
| -------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "302 Found" , "6.4.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.status.302")}}

## Veja também

- {{HTTPStatus("307", "307 Temporary Redirect")}}, o equivalente a esse código de estado quando o método utilizado nunca é alterado.
- {{HTTPStatus("303", "303 See Other")}}, um redirecionamento temporário que altera o método utilizado para {{HTTPMethod("GET")}}.
- {{HTTPStatus("301", "301 Moved Permanently")}}, o redirecionamento permanente.
