---
title: 404 Not Found
slug: Web/HTTP/Status/404
---

{{HTTPSidebar}}

A resposta de erro **`404 Not Found`** indica que o servidor não conseguiu encontrar o recurso solicitado. Normalmente, links que levam para uma página 404 estão quebrados ou desativados e podem estar sujeitos a [link rot](https://en.wikipedia.org/wiki/Link_rot).

Um código 404 não indica se o recurso está indisponível temporariamente ou se o recurso foi permanentemente removido. Mas, se esse for o caso, o ideal é utilizar o código {{HTTPStatus(410)}} (Gone).

## Status

```
404 Not Found
```

## Páginas de erro personalizadas

Vários sites customizam o design de uma página 404 para facilitar a usabilidade e ajudá-lo em o que fazer em seguida. Servidores apache podem ser configurados usando um arquivo `.htaccess` e um pequeno código como o seguinte.

```bash
ErrorDocument 404 /notfound.html
```

Para um exemplo de uma página 404 personalizada, veja [MDN's 404 page](/pt-BR/404).

> **Nota:** Usar um design personalizado é uma boa ideia, se usado em moderação. Sinta-se livre para fazer a sua página 404 divertida, mas tome cuidado para não confundir seus usuários.

## Especificações

| Especificação                              | Título                                                        |
| ------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "404 Not Found" , "6.5.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.status.404")}}

## Veja também

- {{HTTPStatus(410)}}
- [Wikipedia: HTTP 404](https://pt.wikipedia.org/wiki/HTTP_404)
