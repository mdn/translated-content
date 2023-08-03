---
title: Vary
slug: Web/HTTP/Headers/Vary
---

{{HTTPSidebar}}

Заголовок ответа **`Vary`** определяет, как сопоставить будущие заголовки запроса, чтобы решить, можно ли использовать кешированный ответ, а не запрашивать новый с исходного сервера. Он используется сервером для указания того, какие заголовки он использовал при выборе представления ресурса в [алгоритме согласования](/ru/docs/Web/HTTP/Content_negotiation) контента.

Заголовок `Vary` должен быть установлен для ответа {{HTTPStatus("304")}} `Not Modified` точно так же, как он был бы установлен для эквивалентного ответа {{HTTPStatus("200")}} `OK`.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Тип заголовка</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Syntax

```
Vary: *
Vary: <header-name>, <header-name>, ...
```

## Directives

- \*
  - : Каждый запрос должен рассматриваться как уникальный и не кешируемый. Лучший способ указать это - использовать {{HTTPHeader ("Cache-Control")}}: `no-store`, который удобнее для чтения и также сигнализирует о том, что объект не должен храниться никогда.
- \<header-name>
  - : Разделённый запятыми список имён заголовков, которые необходимо учитывать при принятии решения о том, можно ли использовать кешированный ответ.

## Examples

### Dynamic serving

When using the `Vary: User-Agent` header, caching servers should consider the user agent when deciding whether to serve the page from cache. For example, if you are serving different content to mobile users, it can help you to avoid that a cache may mistakenly serve a desktop version of your site to your mobile users. It can help Google and other search engines to discover the mobile version of a page, and might also tell them that no [Cloaking](https://en.wikipedia.org/wiki/Cloaking) is intended.

```
Vary: User-Agent
```

## Specifications

| Specification                    | Title                                                         |
| -------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Vary", "7.1.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser compatibility

{{Compat}}

## Compatibility notes

- [Vary with care – Vary header problems in IE6-9](https://blogs.msdn.microsoft.com/ieinternals/2009/06/17/vary-with-care/)

## See also

- [Understanding The Vary Header - Smashing Magazine](https://www.smashingmagazine.com/2017/11/understanding-vary-header/)
- [Best Practices for Using the Vary Header – fastly.com](https://www.fastly.com/blog/best-practices-for-using-the-vary-header)
- [Content negotiation](/docs/Web/HTTP/Content_negotiation)
