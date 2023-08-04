---
title: content_security_policy
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">Тип</th>
      <td><code>Строка</code></td>
    </tr>
    <tr>
      <th scope="row">Обязателен</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Пример</th>
      <td>
        <pre class="brush: json no-line-numbers">
"content_security_policy": "default-src 'self'"</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Политика защиты содержимого применяется к расширениям автоматически. Изначальная политика защиты содержимого ограничивает источники, из которых расширение может загружать [\<script>](/ru/docs/Web/HTML/Element/script) и [\<object>](/ru/docs/Web/HTML/Element/object) ресурсы, а так же препятствует потенциально опасным практикам, например использованию [`eval()`](/ru/docs/Web/JavaScript/Reference/Global_Objects/eval). Смотрите [изначальные правила защиты содержимого](/ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#Изначальные_правила_по_защите_содержимого), чтобы узнать о конкретных последствиях применения изначальных правил.

Ключ `"content_security_policy"` в manifest.json используется для ослабления или ужесточения политики защиты содержимого. Значения для этого ключа устанавливаются в точно таком же виде, как и для Content-Security-Policy HTTP заголовка. Смотрите [Использование политики содержимого](/ru/docs/Web/HTTP/CSP) для получения общего представления о синтаксисе для написания правил политики.

Примеры использования ключа могут включать в себя:

- Разрешение на загрузку не запакованных в расширение скриптов и объектов, предоставляя их URL в {{CSP("script-src")}} и {{CSP("object-src")}} директивах.
- Разрешение на выполнение встраиваемых скриптов, [предоставляя hash скрипта в `"script-src"` директиве](/ru/docs/Web/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_inline_script).
- Разрешение на использование `eval()` и похожих функций, добавляя `'unsafe-eval'` в {{CSP("script-src")}} директиву.
- Ограничение допускаемых источников загрузки для других видов контента, например картинок или файлов стилей, используя соответствующие [директивы](/ru/docs/Web/HTTP/Headers/Content-Security-Policy).

При написании правил по защите содержимого, вы имеете некоторые ограничения:

- Правило должно включать в себя {{CSP("script-src")}} и {{CSP("object-src")}} директивы, и {{CSP("script-src")}} директива должна включать ключевое слово `'self'`.
- Удалённые источники должны иметь `https:` схему.
- Удалённые источники не должны определяться через универсальный символ `*` со следующим за ним [доменным публичным суффиксом](https://publicsuffix.org/list/) (например "\*.co.uk" и "\*.blogspot.com" являются не разрешёнными значениями, но "\*.foo.blogspot.com" разрешёно).
- У всех источников должен быть определён хост.
- Единственные позволенные схемы источников: `blob:`, `filesystem:`, `moz-extension:` и `https:`.
- Единственные позволенные [ключевые слова](/ru/docs/Web/HTTP/Headers/Content-Security-Policy/default-src#Sources): `'none'`, `'self'` и `'unsafe-eval'`.

## Примеры

### Работающие примеры

Разрешает загрузку скриптов из "https://example.com": (_смотрите примечание_ [1](#exampleNote_1))

```json
"content_security_policy": "script-src 'self' https://example.com; object-src 'self'"
```

Разрешает загрузку скриптов из любого субдомена "jquery.com":

```json
"content_security_policy": "script-src 'self' https://*.jquery.com; object-src 'self'"
```

Разрешает использование [`eval()` и его товарищей](</ru/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#eval()_и_товарищи>):

```json
"content_security_policy": "script-src 'self' 'unsafe-eval'; object-src 'self';"
```

Разрешает встроить скрипт: `"<script>alert('Hello, world.');</script>"`:

```json
"content_security_policy": "script-src 'self' 'sha256-qznLcsROx4GACP2dm0UCKCzCG+HiZ1guq6ZZDob/Tng='; object-src 'self'"
```

Оставляет изначальные правила, но так же требует, чтобы могли загружаться только изображения, запакованные вместе с расширением:

```json
"content_security_policy": "script-src 'self'; object-src 'self'; img-src 'self'"
```

Разрешает загрузку только тех ресурсов, которые были запакованы вместе с расширением:

```json
"content_security_policy": "default-src 'self'"
```

### Недопустимые примеры

Политика, не включающая `"object-src"` директиву:

```json
"content_security_policy": "script-src 'self' https://*.jquery.com;"
```

Политика, не включающая ключевое слово `"self"` в `"script-src"` директиве:

```json
"content_security_policy": "script-src https://*.jquery.com; object-src 'self'"
```

Использование отличной от `https` схемы для загрузки удалённых ресурсов:

```json
"content_security_policy": "script-src 'self' http://code.jquery.com; object-src 'self'"
```

Использование универсального символа в связке с публичным доменным суффиксом:

```json
"content_security_policy": "script-src 'self' https://*.blogspot.com; object-src 'self'"
```

Указание схемы без хоста:

```json
"content_security_policy": "script-src 'self' https:; object-src 'self'"
```

Использование неподдерживаемого ключевого слова `'unsafe-inline'`:

```json
"content_security_policy": "script-src 'self' 'unsafe-inline'; object-src 'self'"
```

_Примечание: Работающие примеры демонстрируют правильное написание политики защиты содержимого. Тем не менее, расширения с политикой, включающей ключевые словами 'unsafe-eval', 'unsafe-inline', разрешающей загрузку удалённых скриптов и ресурсов, а так же blob файлов не будут допущены к распространению на addons.mozilla.org из-за значительных проблем с безопасностью._

## Browser compatibility

{{Compat}}
