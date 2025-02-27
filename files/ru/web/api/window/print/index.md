---
title: "Window: метод print()"
slug: Web/API/Window/print
l10n:
  sourceCommit: d303345cabd0cd9ab33fdfe51957479c8fb35424
---

{{APIRef}}

Открывает диалоговое окно для печати текущего документа.

Если в момент вызова этой функции документ ещё загружается, то диалоговое окно печати откроется после загрузки документа.

Этот метод будет заблокирован пока открыто диалоговое окно печати.

## Синтаксис

```js-nolint
print()
```

### Параметры

Нет.

### Возвращаемое значение

Нет ({{jsxref("undefined")}}).

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Печать документов](/ru/docs/Web/CSS/CSS_media_queries/Printing)
- Событие {{ domxref("window.beforeprint_event", "beforeprint") }}
- Событие {{ domxref("window.afterprint_event", "afterprint") }}
