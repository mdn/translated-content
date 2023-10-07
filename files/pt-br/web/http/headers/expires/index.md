---
title: Expires
slug: Web/HTTP/Headers/Expires
---

{{HTTPSidebar}}

O cabeçalho **`Expires`** contém a data/hora após a qual a resposta é considerada velha.

Datas inválidas, como o valor 0, representam uma data no passado e significam que o recurso já expirou.

Se existe um cabeçalho {{HTTPHeader("Cache-Control")}} com a diretiva "max-age" ou "s-maxage" na resposta, o cabeçalho `Expires` é ignorado.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de Header</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>não</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple response header", "CORS-safelisted response-header")}}
      </th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Expires: <http-date>
```

## Diretivas

- \<http-date>
  - : Ums data/hora HTTP-date.

## Exemplos

```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Especificações

| Especificação                     | Título                                          |
| --------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Expires", "5.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## Compatibilidade com navegadores

{{Compat("http.headers.Expires")}}

## Veja também

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Age")}}
