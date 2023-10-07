---
title: Date
slug: Web/HTTP/Headers/Date
---

{{HTTPSidebar}}

O cabeçalho geral HTTP **`Date`** contém a data e a hora que a mensagem foi gerada.

> **Aviso:** Note que `Date` é listado em [nomes de cabeçalhos proibidos](https://fetch.spec.whatwg.org/#forbidden-header-name) na especificação do fetch - então este código não enviará o cabeçalho `Date`:
>
> ```js
> fetch("https://httpbin.org/get", {
>   headers: {
>     Date: new Date().toUTCString(),
>   },
> });
> ```

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("General header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Date: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Diretivas

- \<day-name>
  - : Dia da semana, um de "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", ou "Sun" (sensível a capitalização). Segunda-feira até domingo em ordem.
- \<day>
  - : Um dia em número de 2 dígitos, e.g. "04" ou "23".
- \<month>
  - : Um de "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (sensível a capitalização). Os meses em ordem de Janeiro a Dezembro.
- \<year>
  - : Um ano em número de 4 dígitos, e.g. "1990" ou "2016".
- \<hour>
  - : Uma hora em número de 2 dígitos, e.g. "09" ou "23".
- \<minute>
  - : Minutos em número de 2 dígitos, e.g. "04" ou "59".
- \<second>
  - : Segundos em número de 2 dígitos, e.g. "04" ou "59".
- GMT
  - : Meridiano de Greenwich. Datas HTTP são sempre expressadas em GMT, nunca em tempo local.

## Exemplos

```
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

```js
new Date().toUTCString();
// "Mon, 09 Mar 2020 08:13:24 GMT"
```

## Especificações

| Especificação                      | Título                                                        |
| ---------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Date", "7.1.1.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Compatibilidade com navegadores

{{Compat("http.headers.Date")}}

## Veja também

- {{HTTPHeader("Age")}}
