---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
---

{{HTTPSidebar}}

O código de resposta de status de redirecionamento **`301 Moved Permanently`** do protocolo HTTP indica que o recurso requisitado foi movido permanentemente para a URL dada pelo cabeçalho {{HTTPHeader("Localização")}} headers. Um navegador redireciona para essa página e o motor de busca atualiza os links para o recurso (na linguagem 'SEO', é dito que o "suco do link" ('link-juice') é enviado à nova URL).

Mesmo que a especificação exija que o método (e corpo) não sejam alterados quando o redirecionamento seja executado, nem todos os agentes de usuário são alinhados com isso, você ainda pode encontrar alguns softwares com "bugs" que não o seguem. É recomendado que se use o código 301 somente como resposta para os métodos {{HTTPMethod("GET")}} ou {{HTTPMethod("Head")}} e use {{HTTPStatus("308","308 Permanent Redirect")}} para {{HTTPMethod("POST")}}, para proibir explicitamente o uso do método com esse status.

## Status

```
301 Moved Permanently
```

## Exemplo

### Requisição do cliente

```
GET /index.php HTTP/1.1
Host: www.example.org
```

### Resposta do servidor

```
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## Especificações

| Especificação                                      | Título                                                        |
| -------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "301 Moved Permanently" , "6.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.status.301")}}

## Veja também

- {{HTTPStatus("308", "308 Permanent Redirect")}}
- {{HTTPStatus("302", "302 Found")}}, o redirecionamento temporário.
