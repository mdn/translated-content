---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
---

{{HTTPSidebar}}

HTTP-заголовок ответа **`X-Content-Type-Options`** является маркером, используемым сервером для указания того, что типы MIME, объявленные в заголовках {{HTTPHeader ("Content-Type")}}, должны соблюдаться и не изменяться. Это позволяет отказаться от [перехвата MIME](/ru/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing), или, другими словами, это способ сказать, что веб-мастера знали, что они делают.

Этот HTTP-заголовок был введён Microsoft в IE 8 как способ для веб-мастеров блокировать происходящий перехват содержимого и может преобразовывать неисполняемые типы MIME в исполняемые типы MIME. С тех пор другие браузеры внедрили его, даже если их алгоритмы обработки MIME были менее агрессивными.

Тестеры безопасности сайта обычно ожидают, что этот заголовок будет установлен.

> **Примечание:** Примечание: `nosniff` применяется только к типам "`script`" и "`style`". Также применение `nosniff` к изображениям оказалось [несовместимым с существующими веб-сайтами](https://github.com/whatwg/fetch/issues/395).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>no</td>
    </tr>
  </tbody>
</table>

## Синтаксис

```
X-Content-Type-Options: nosniff
```

## Директивы

- `nosniff`

  - : Блокирует запрос, если запрошенный тип:

    - "`style`" и его MIME не "`text/css`", или
    - "`script`" и его MIME не [JavaScript MIME-тип](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type).

## Спецификации

| Спецификация                                                                                 | Статус             | Комментарий        |
| -------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| {{SpecName("Fetch", "#x-content-type-options-header", "X-Content-Type-Options definition")}} | {{Spec2("Fetch")}} | Initial definition |

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{HTTPHeader("Content-Type")}}
- [Первоначальное определение](https://blogs.msdn.microsoft.com/ie/2008/09/02/ie8-security-part-vi-beta-2-update/) X-Content-Type-Options от Microsoft®.
- Инструмент [Обсерватория Mozilla](https://observatory.mozilla.org/) проверяющий конфигурацию (включая этот заголовок) веб-сайтов на безопасность.
- [Смягчение MIME путаницы в Firefox](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Блокировка чтения из разных источников (Cross-Origin Read Blocking)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB explainer](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
