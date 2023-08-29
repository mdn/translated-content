---
title: dir
slug: conflicting/Web/Manifest
original_slug: Web/Manifest/dir
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
      <td><pre class="brush: json no-line-numbers">"dir": "auto"</pre></td>
    </tr>
  </tbody>
</table>

Базовое направление, в котором отображаются направленные элементы манифеста. Вместе с [`lang`](./lang), позволяет корректно отобразить языки, читающиеся справа налево.

`dir` может быть одним из следующих значений:

- `"auto"` — направление текста определяется агентом пользователя
- `"ltr"` — слева направо
- `"rtl"` — справа налево

Направленные свойства:

- [`name`](./name)
- [`short_name`](./short_name)
- [`description`](./description)

> **Примечание:** Если значение опущено или установлено в `auto`, браузер будет использовать [двунаправленный алгоритм Unicode](/ru/docs/Web/Localization/Unicode_Bidirectional_Text_Algorithm), чтобы сделать наилучшее предположение о направлении текста.

## Пример

```json
"dir": "rtl",
"lang": "ar",
"short_name": "!أنا من التطبيق"
```

## Specification

| Specification                                                | Status                       | Comment             | Feedback                                                                         |
| ------------------------------------------------------------ | ---------------------------- | ------------------- | -------------------------------------------------------------------------------- |
| {{SpecName('Manifest', '#dir-member', 'dir')}} | {{Spec2('Manifest')}} | Initial definition. | [Web App Manifest Working Group drafts](https://github.com/w3c/manifest/issues/) |

## Browser compatibility

{{Compat}}
