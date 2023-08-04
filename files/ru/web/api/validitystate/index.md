---
title: ValidityState
slug: Web/API/ValidityState
---

{{APIRef("HTML DOM")}}

Интерфейс **`ValidityState`** представляет _состояния валидности_, в которых может находиться элемент при валидации ограничений. Вместе они помогают понять, по какой именно причине значение элемента не прошло валидацию.

## Свойства

Если свойство возвращает `true`, значит оно отражает причину, по которой значение не прошло валидацию. Исплючением является лишь свойство `valid`, которое возвращает `true`, когда значение элемента соответствует всем ограничениям.

- {{domxref("ValidityState.badInput", "badInput")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если пользователь ввёл значение, которое браузер не может преобразовать.
- `customError` {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}}, указывающий, было ли установлено кастомное сообщение валидации путём вызова метода {{domxref('HTMLObjectElement.setCustomValidity', 'setCustomValidity()')}} с непустой строкой в аргументе.
- {{domxref("ValidityState.patternMismatch", "patternMismatch")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если значение не соответствует шаблону, указанному в атрибуте [`pattern`](/ru/docs/Web/HTML/Element/input#pattern). `false`, если значение соответствует этому шаблону. Если `true`, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.
- {{domxref("ValidityState.rangeOverflow", "rangeOverflow")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если значение больше максимума, заданного в атрибуте [`max`](/ru/docs/Web/HTML/Element/input#max). `false`, если значение меньше или равно ему. Если `true`, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.
- {{domxref("ValidityState.rangeUnderflow", "rangeUnderflow")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если значение меньше минимума, заданного в атрибуте [`min`](/ru/docs/Web/HTML/Element/input#min). `false`, если значение больше или равно ему. Если `true`, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.
- {{domxref("ValidityState.stepMismatch", "stepMismatch")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если значение не соответствует правилам, заданным в атрибуте [`step`](/ru/docs/Web/HTML/Element/input#step) (то есть, не делится без остатка на значение шага). `false`, если соответствует этим правилам. Если `true`, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.
- {{domxref("ValidityState.tooLong", "tooLong")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если значение превышает лимит, указанный в атрибуте `maxlength` объектов {{domxref("HTMLInputElement")}} или {{domxref("HTMLTextAreaElement")}}. `false`, если длина меньше или равна максимальной длине. _**Примечание:** Данное свойство никогда не будет `true` в Gecko, потому что значению элемента не разрешается быть больше `maxlength`._ Если `true`, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.
- {{domxref("ValidityState.tooShort", "tooShort")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если длина значения не достигает минимума, указанного в атрибуте `minlength` объектов {{domxref("HTMLInputElement")}} и {{domxref("HTMLTextAreaElement")}}. `false`, если длина больше или равна ему. Если `true`, элемент соответствует CSS-псевдоклассам {{cssxref(":invalid")}} и {{cssxref(":out-of-range")}}.
- {{domxref("ValidityState.typeMismatch", "typeMismatch")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если значение не соответствует требуемому синтаксису (когда для [`type`](/ru/docs/Web/HTML/Element/input#type) задано значение `email` или `url`). `false`, если синтаксис корректный. Если `true`, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.
- `valid` {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если элемент соответствует всем ограничениям валидации и, следовательно, считается валидным. `false`, если не соответствует любому ограничению. Если `true`, элемент соответствует CSS-псевдоклассу {{cssxref(":valid")}}; иначе — псевдоклассу {{cssxref(":invalid")}}.
- {{domxref("ValidityState.valueMissing", "valueMissing")}} {{ReadOnlyInline}}
  - : {{jsxref("Boolean")}} `true`, если у элемента есть атрибут [`required`](/ru/docs/Web/HTML/Element/input#required), но сам элемент заполнен не был. `false`, если элемент был заполнен. Если `true`, элемент соответствует CSS-псевдоклассу {{cssxref(":invalid")}}.

## Спецификации

{{Specifications}}

## Совместимость с браузером

{{Compat}}

## Также смотрите

- [Руководство: Валидация ограничений](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Учебник: Валидация форм](/ru/docs/Learn/Forms/Form_validation)
