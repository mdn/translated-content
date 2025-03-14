---
title: Crypto
slug: Web/API/Crypto
---

{{APIRef("Web Crypto API")}}

Интерфейс **`Crypto`** представляет базовые криптографические функции, доступные в общеупотребительном контексте. Он позволяет получить доступ к криптографически сильному генератору случайных чисел и к криптографическим примитивам.

Объект с этим интерфейсом доступен в Web-контексте через свойство {{domxref("Window.crypto")}}.

## Свойства

_Этот интерфейс реализует свойства, объявленные в {{domxref("RandomSource")}}._

- {{domxref("Crypto.subtle")}} {{experimental_inline}}{{readOnlyInline}}
  - : Возвращает объект {{domxref("SubtleCrypto")}}, предоставляющий доступ к часто используемым криптографическим примитивам, таким как хэширование, цифровые подписи, шифрование и расшифрованные.

## Методы

_Этот интерфейс реализует методы, объявленные в {{domxref("RandomSource")}}._

- {{ domxref("RandomSource.getRandomValues()") }}
  - : Заполняет переданные {{ jsxref("TypedArray") }} случайными в криптографическом смысле значениями.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Components.utils.importGlobalProperties](/ru/docs/Components.utils.importGlobalProperties)
