---
title: ключ version
slug: Mozilla/Add-ons/WebExtensions/manifest.json/version
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Тип</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">Обязательный</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">Пример</th>
      <td><pre class="brush: json no-line-numbers">"version": "0.1"</pre></td>
    </tr>
  </tbody>
</table>

Версия дополнения, отформатированная как числа и символы ASCII, разделённые точками. Подробнее о формате версий смотрите страницу [Version format](/ru/docs/Toolkit_version_format).

Обратите внимание, что [синтаксис ключа `version` для Chrome](https://developer.chrome.com/extensions/manifest/version) более ограниченный, чем у Firefox:

- значения `version` которые действительны для Chrome, всегда будут действительны для Firefox
- значения `version` которые действительны для Firefox, могут быть не действительны для Chrome

## Пример

```json
"version": "0.1"
```

## Совместимость с браузерами

{{Compat}}
