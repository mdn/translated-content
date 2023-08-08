---
title: NavigatorID
slug: orphaned/Web/API/NavigatorID
---

{{APIRef("HTML DOM")}}

Интерфейс **`NavigatorID`** содержит методы и свойства, позволяющие идентифицировать браузер.

В нем нет объекта типа `NavigatorID`, но другие интерфейсы, такие как {{domxref("Navigator")}} или {{domxref("WorkerNavigator")}}, реализуют его.

## Свойства

_Интерфейс `NavigatorID`_ _не наследует никаких других свойств._

- {{domxref("NavigatorID.appCodeName")}} {{readonlyInline}}{{deprecated_inline}}
  - : Всегда возвращает `'Mozilla'`, в других браузерах. Это свойство сохраняется только для целей совместимости.
- {{domxref("NavigatorID.appName")}} {{readonlyInline}} {{deprecated_inline}}
  - : Возвращает официальное название браузера. Не полагайтесь на это свойство, чтобы получить нужное значение.
- {{domxref("NavigatorID.appVersion")}} {{readonlyInline}} {{deprecated_inline}}
  - : Возвращает версию браузера в виде строки. Не полагайтесь на это свойство, чтобы получить нужное значение.
- {{domxref("NavigatorID.platform")}} {{readonlyInline}} {{deprecated_inline}}
  - : Возвращает строку, представляющую собой платформу браузера. Не полагайтесь на это свойство, чтобы получить нужное значение.
- {{domxref("NavigatorID.product")}} {{readonlyInline}} {{deprecated_inline}}
  - : Всегда возвращает `'Gecko'` в других браузерах. Это свойство сохраняется только для целей совместимости.
- {{domxref("NavigatorID.userAgent")}} {{readonlyInline}}
  - : Возвращает строку пользовательского агента (user agent) для текущего браузера.

## Методы

_Интерфейс_ _`NavigatorID`_ _не наследует других методов._

- {{domxref("NavigatorID.taintEnabled()")}} {{deprecated_inline()}}
  - : Всегда возвращает `false`. Функции JavaScript taint/untaint были удалены в JavaScript 1.2. Этот метод сохраняется только для целей совместимости. Not available in workers.

## Спецификация

{{Specifications}}

## Совместимость в браузерах

{{Compat("api.NavigatorID")}}

## Смотрите также

- Реализован в интерфейсах: {{domxref("Navigator")}} и {{domxref("WorkerNavigator")}}.
