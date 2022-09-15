---
title: XMLHttpRequest.abort()
slug: Web/API/XMLHttpRequest/abort
tags:
  - AJAX
  - API
  - HTTP
  - HttpRequest
  - Referencia
  - XMLHttpRequest
  - cancelando
translation_of: Web/API/XMLHttpRequest/abort
---
{{APIRef('XMLHttpRequest')}}

O método **XMLHttpRequest.abort()** aborta a requisição se ela já tiver sido enviada. Quando uma requisição é abortada, o seu readyState é modificado para 0 (Desativado), mas o evento [readystatechange](/pt-BR/docs/Web/Events/readystatechange) não é disparado.

## Sitaxe

```
xhrInstance.abort();
```

### Parâmetros

Nenhum.

### Retorno

Nenhum.

## Exemplo

```js
var xhr = new XMLHttpRequest(),
    method = "GET",
    url = "https://developer.mozilla.org/";
xhr.open(method,url,true);

xhr.send();

xhr.abort();
```

## Especificações

| Especificação                                                            | Status                               | Comentário             |
| ------------------------------------------------------------------------ | ------------------------------------ | ---------------------- |
| {{SpecName('XMLHttpRequest', '#the-abort()-method')}} | {{Spec2('XMLHttpRequest')}} | WHATWG living standard |

## Compatibilidade com navegadores

{{Compat("api.XMLHttpRequest.abort")}}

## Veja também

- [Usando o XMLHttpRequest](/pt-BR/docs/Web/API/XMLHttpRequest/Usando_XMLHttpRequest)
