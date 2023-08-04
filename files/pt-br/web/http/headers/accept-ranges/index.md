---
title: Accept-Ranges
slug: Web/HTTP/Headers/Accept-Ranges
---

{{HTTPSidebar}}

O cabeçalho de resposta HTTP **`Accept-Ranges`** é um marcador usado pelo servidor para indicar que ele suporta requisições parciais. O valor deste campo indica a unidade utilizada para definir o tamanho.

Na presença do cabeçalho `Accept-Ranges`, o navegador pode tentar retomar um _download_ interrompido, ao invés de começar de novo do início.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Accept-Ranges: bytes
Accept-Ranges: none
```

## Diretivas

- `none`
  - : Nenhuma unidade de tamanho é suportada, isso faz com que o cabeçalho seja equivalente a sua própria ausência, sendo então raramente usado, apesar de que alguns navegadores, como o IE9, é usado para habilitar ou desabilitar os botões de pausa no gerenciador de downloads.
- `bytes`
  - : A unidade de tamanho são bytes.

## Exemplos

```
Accept-Ranges: bytes
```

## Especificações

| Especificação                           | Título                                                 |
| --------------------------------------- | ------------------------------------------------------ |
| {{RFC("7233", "Accept-Ranges", "2.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Range Requests |

## Compatibilidade com navegadores

{{Compat("http.headers.Accept-Ranges")}}

## Veja também

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
