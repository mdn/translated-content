---
title: 204 No Content
slug: Web/HTTP/Status/204
---

{{HTTPSidebar}}

O código de resposta HTTP de status de sucesso **`204 No Content`** indica que a solicitação foi bem sucedida e o cliente não precisa sair da página atual. Uma resposta `204` é armazenada em cache por padrão. Um cabeçalho {{HTTPHeader("ETag")}} está incluso na resposta.

O caso de uso comum é retornar `204` como resultado de uma solicitação {{HTTPMethod("PUT")}}, atualizando um recurso, sem alterar o conteúdo atual da página exibida para o usuário. Se o recurso for criado, {{HTTPStatus("201")}} `Created` será retornado. Se a página for alterada para a página recém-atualizada, o {{HTTPStatus ("200")}} deve ser usado em vez disso.

## Status

```
204 No Content
```

## Especificações

| Especificação                               | Título                                                        |
| ------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "204 No Content" , "6.3.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.status.204")}}

## Notas de compatibilidade

- Embora este código de status seja destinado a descrever uma resposta sem corpo, os servidores podem incluir dados erroneamente após os cabeçalhos. O protocolo permite que os agentes do usuário variem em como eles processam essas respostas ([a discussão sobre este texto da especificação pode ser encontrada aqui](https://github.com/httpwg/http11bis/issues/26)). Isso é observável em conexões persistentes, onde o corpo inválido pode incluir uma resposta distinta a uma solicitação subseqüente.

  O Apple Safari rejeita qualquer desses dados. O Google Chrome e o Microsoft Edge descartam até quatro bytes inválidos que precedem uma resposta válida. O Firefox tolera mais de um kilobyte de dados inválidos que precedem uma resposta válida.

## Veja também

- [Métodos de requisições HTTP](/pt-BR/docs/Web/HTTP/Methods)
