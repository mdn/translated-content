---
title: Document.location
slug: Web/API/Document/location
---

{{APIRef("DOM")}}

Доступное только для чтения свойство **`Document.location`** возвращает объект {{domxref("Location")}}, который содержит информацию о URL страницы и предоставляет методы для изменения этого URL и загрузки другого URL.

Хотя `Document.location` это _read-only_ объект `Location`, вы всё же можете присвоить ему {{domxref("DOMString")}}. Это означает, что в большинстве случаев вы можете работать с document.location так, будто это строка: `document.location = 'http://www.example.com'` фактически то же, что и `document.location.href = 'http://www.example.com'`.

Чтобы получить URL как строку, вы можете использовать _read-only_ свойство {{domxref("document.URL")}}.

Если страница находится вне текущего контекста, вернётся `null`.

## Синтаксис

```
locationObj = document.location
document.location = 'http://www.mozilla.org' // Эквиваленто след.
document.location.href = 'http://www.mozilla.org'
```

## Пример

```js
dump(document.location);
// Выведет строку
// "http://www.example.com/juicybits.html" в консоли
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс возвращаемого значения, {{domxref("Location")}}.
- Похожая информация, но привязанная к контексту, {{domxref("Window.location")}}
