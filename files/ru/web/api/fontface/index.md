---
title: FontFace
slug: Web/API/FontFace
---

{{APIRef("CSS Font Loading API")}}{{SeeCompatTable}}

Интерфейс **`FontFace`** представляет единый используемый шрифт. Он позволяет контролировать источник шрифта, являющийся URL-адресом внешнего ресурса или буфера; а также контролировать момент загрузки шрифта и его текущее состояние.

## Конструктор

- {{domxref("FontFace.FontFace", "FontFace()")}}
  - : Создаёт и возвращает новый объект `FontFace`, созданный из внешнего ресурса, описанного URL-адресом или из {{jsxref("ArrayBuffer")}}.

## Свойства

_Этот интерфейс не наследует свойства._

- {{domxref("FontFace.display")}}
  - : {{jsxref("String")}} определяет способ отображения шрифта, основываясь на информации о статусе его загрузки и готовности к использованию.
- {{domxref("FontFace.family")}}
  - : {{jsxref("String")}} получает или устанавливает _семейство_ шрифта. Эквивалентен дескриптору {{cssxref("@font-face/font-family", "font-family")}}.
- {{domxref("FontFace.featureSettings")}}
  - : {{jsxref("String")}} получает или устанавливает редко используемые возможности шрифта. Эквивалентен дескриптору {{cssxref("@font-face/font-feature-settings", "font-feature-settings")}}.
- {{domxref("FontFace.loaded")}} {{readonlyinline}}
  - : Возвращает {{jsxref("Promise")}}, которое выполняется для текущего объекта `FontFace`, когда специфичный шрифт, указанный в конструкторе объекта, завершает загрузку, либо отклоняется с помощью `SyntaxError`.
- {{domxref("FontFace.status")}} {{readonlyinline}}
  - : Возвращает перечисляемое значение, указывающее на состояние шрифта : `"unloaded"`, `"loading"`, `"loaded"`, или `"error"`.
- {{domxref("FontFace.stretch")}}
  - : {{jsxref("String")}} получает или устанавливает свойство _растягивания_ шрифта. Эквивалентен дескриптору {{cssxref("@font-face/font-stretch", "font-stretch")}}.
- {{domxref("FontFace.style")}}
  - : {{jsxref("String")}} получает или устанавливает _стиль_ шрифта. Эквивалентен дескриптору {{cssxref("@font-face/font-style", "font-style")}}.
- {{domxref("FontFace.unicodeRange")}}
  - : {{jsxref("String")}} получает или устанавливает _диапазон точек кодирования Юникод_, охватывающих шрифт. Эквивалентен дескриптору {{cssxref("@font-face/unicode-range", "unicode-range")}}.
- {{domxref("FontFace.variant")}}
  - : {{jsxref("String")}} получает или устанавливает _вариант_ шрифта. Эквивалентен дескриптору {{cssxref("@font-face/font-variant", "font-variant")}}.
- {{domxref("FontFace.weight")}}
  - : {{jsxref("String")}} содержит _толщину_ шрифта. Эквивалентен дескриптору {{cssxref("@font-face/font-weight", "font-weight")}}.

## Методы

_Этот интерфейс не наследует методы._

- {{domxref("FontFace.load()")}}
  - : Загружает шрифт, основываясь на переданных требованиях конструктора текущего объекта, включая расположение или ресурсный буфер, и возвращает {{jsxref('Promise')}}, которое выполняется для текущего объекта FontFace.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
