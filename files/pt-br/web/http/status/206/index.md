---
title: 206 Partial Content
slug: Web/HTTP/Status/206
---

{{HTTPSidebar}}

O código de resposta do status de sucesso **`206 Partial Content`** indica que a requisição teve sucesso e o corpo contém a sequência (em bytes) dos dados, como descrito no cabeçalho {{HTTPHeader("Range")}} da requisição.

Se existe somente uma sequência, o {{HTTPHeader("Content-Type")}} de toda a resposta é colocado para o tipo do documento, e o cabeçalho {{HTTPHeader("Content-Range")}} é provido.

Se várias sequências são mandadas como resposta, o {{HTTPHeader("Content-Type")}} é colocado para `multipart/byteranges` e cada fragmento cobre uma sequência, com {{HTTPHeader("Content-Range")}} e {{HTTPHeader("Content-Type")}} descrevendo-os.

## Status

```
206 Partial Content
```

## Exemplos

Uma resposta contendo uma única sequência:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

... 26012 bytes de dados parciais de uma imagem ...
```

Uma resposta contendo várias sequências:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

...a primeira sequência...
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

...a segunda sequência
--String_separator--
```

## Especificações

| Especificação                                  | Título                                                 |
| ---------------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "206 Partial Content" , "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Compatibilidade com navegadores

{{Compat("http.status.206")}}

## Veja também

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
