---
title: related_applications
slug: Web/Manifest/related_applications
---

{{QuickLinksWithSubpages('/ru/docs/Web/Manifest')}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Mandatory</th>
      <td>No</td>
    </tr>
    <tr>
      <th scope="row">Example</th>
      <td>
        <pre class="brush: json no-line-numbers">
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }
]</pre>
      </td>
    </tr>
  </tbody>
</table>

Поле `related_applications` field is an array of objects specifying native applications that are installable by, or accessible to, the underlying platform — for example, a native Android application obtainable through the Google Play Store. Предполагается, что такие приложения являются альтернативами веб-сайту манифеста, который предоставляет аналогичные/эквивалентные функции - как эквивалент нативного приложения.

> **Примечание:** Разработчик может указать, что нативные приложения предпочтительнее, чем веб-приложение, установив значение `prefer_related_applications` в `true`.

## Пример

```json
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }, {
    "platform": "itunes",
    "url": "https://itunes.apple.com/app/example-app1/id123456789"
  }
]
```

## Значения

Объекты приложения могут содержать следующие значения:

| Свойство   | Описание                                                                                                                        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `platform` | Платформа, на которой может быть найдено приложение. [List of available values](https://github.com/w3c/manifest/wiki/Platforms) |
| `url`      | URL, по которому может быть найдено приложение.                                                                                 |
| `id`       | ID, используемое для представления приложения на определённой платформе.                                                        |

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
