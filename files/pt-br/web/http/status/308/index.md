---
title: 308 Permanent Redirect
slug: Web/HTTP/Status/308
---

{{HTTPSidebar}}

O código de resposta do status de redirecionamento **`308 Redirecionamento Permanente`** do Protocolo de Transferência de Hipertexto (HTTP) indica que o recurso requisitado foi movido definitivamente para o URL dado pelo cabeçalho {{HTTPHeader("Localização")}}. O navegador redireciona para essa página e o motor de busca atualiza os seus links para o recurso (na linguagem 'SEO', é dito que o "suco do link" ('link-juice') é enviado à nova URL).

O método de requisição e o corpo não será alterado, onde talvez o status {{HTTPStatus("301")}} seja modificado incorretamente para o método {{HTTPMethod("GET")}}.

> **Nota:**Algumas aplicações Web podem usar o `308 Permanent Redirect` de forma não convencional e para outros propósitos. Por exemplo, Google Drive usa a resposta `308 Resume Incomplete` para indicar ao cliente quando um upload incompleto parou.[\[1\]](https://developers.google.com/drive/v3/web/manage-uploads#resumable)

## Status

```
308 Redirecionamento Permanente
```

## Specifications

| Specification                                   | Title                                                                |
| ----------------------------------------------- | -------------------------------------------------------------------- |
| {{RFC("7538", "308 Permanent Redirect" , "3")}} | The Hypertext Transfer Protocol Status Code 308 (Permanent Redirect) |

## Compatibilidade com navegadores

{{Compat("http.status.308")}}

## Veja também

- {{HTTPStatus("301", "301 Moved Permanently")}}
- {{HTTPStatus("302", "302 Found")}}, o redirecionamento temporário
