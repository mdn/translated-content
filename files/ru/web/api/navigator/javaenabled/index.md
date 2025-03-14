---
title: "Navigator: метод javaEnabled()"
slug: Web/API/Navigator/javaEnabled
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("HTML DOM")}}{{Deprecated_Header}}

Этот метод всегда возвращает `false`.

## Синтаксис

```js-nolint
javaEnabled()
```

### Параметры

Нет.

### Возвращаемое значение

Булево значение `false`.

## Примеры

```js
if (window.navigator.javaEnabled()) {
  // этот код не будет выполнен; условие всегда равное false
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
