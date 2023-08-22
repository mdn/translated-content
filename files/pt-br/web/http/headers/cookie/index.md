---
title: Cookie
slug: Web/HTTP/Headers/Cookie
---

{{HTTPSidebar}}

O cabeçalho de requisição HTTP **`Cookie`** contém [cookies HTTP](/pt-BR/docs/Web/HTTP/Cookies) armazenados anteriormente que foram enviados pelo servidor com o cabeçalho {{HTTPHeader("Set-Cookie")}}.

O cabeçalho `Cookie` é opicional e pode ser omitido se, por exemplo, as configurações de privacidade do navegador bloqueiam _cookies_.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Tipo de cabeçalho</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>sim</td>
    </tr>
  </tbody>
</table>

## Sintaxe

```
Cookie: <cookie-list>
Cookie: name=value
Cookie: name=value; name2=value2; name3=value3
```

- \<cookie-list>
  - : Uma lista de pares nome-valor na forma de `<cookie-name>=<cookie-value>`. Pares na lista são separados por ponto e vírgula e um espaço (`'; '`).

## Exemplos

```
Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;
```

## Especificações

| Especificação                    | Título                          |
| -------------------------------- | ------------------------------- |
| {{RFC("6265", "Cookie", "5.4")}} | HTTP State Management Mechanism |

## Compatibilidade com navegadores

{{Compat("http.headers.Cookie")}}

## Veja também

- {{HTTPHeader("Set-Cookie")}}
- {{domxref("Document.cookie")}}
