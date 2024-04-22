---
title: ValidityState.patternMismatch
slug: Web/API/ValidityState/patternMismatch
---

Доступное только для чтения свойство **`patternMismatch`** объекта **[`ValidityState`](/ru/docs/Web/API/ValidityState)** указывает, соответствует ли значение {{HTMLElement("input")}} шаблону, указанному в атрибуте [`pattern`](/ru/docs/Web/HTML/Attributes/pattern).

Если поле поддерживает атрибут [`pattern`](/ru/docs/Web/HTML/Attributes/pattern), это значит, что {{HTMLElement("input")}} содержит `type` {{HTMLElement("input/text", "text")}}, {{HTMLElement("input/tel", "tel")}}, {{HTMLElement("input/email", "email")}}, {{HTMLElement("input/url", "url")}}, {{HTMLElement("input/password", "password")}} или {{HTMLElement("input/search", "search")}} и в значении атрибута задано валидное регулярное выражение. Если значение не соответствует ограничениям, заданным в [`pattern`](/ru/docs/Web/HTML/Attributes/pattern), свойство `patternMismatch` будет `true`.

## Примеры

Учитывая следующее:

```html
<p>
  <label
    >Enter your phone number in the format (123)456-7890 (<input
      name="tel1"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit area code"
      size="2" />)-
    <input
      name="tel2"
      type="tel"
      pattern="[0-9]{3}"
      placeholder="###"
      aria-label="3-digit prefix"
      size="2" />
    -
    <input
      name="tel3"
      type="tel"
      pattern="[0-9]{4}"
      placeholder="####"
      aria-label="4-digit number"
      size="3" />
  </label>
</p>
```

Здесь у нас есть 3 поля для номера телефона северной Америки, помещённых внутрь `label`. В каждом поле, как определено в атрибуте [`pattern`](/ru/docs/Web/HTML/Attributes/pattern), ожидается ввод 3, 3 и 4 символов соответственно.

Если значения слишком длинные, слишком короткие или содержат не цифровые символы, `patternMismatch` будет `true`. Если `true`, элемент соответствует CSS-псевдоклассу{{cssxref(":invalid")}}.

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 40)}}

Обратите внимание, что в данном примере мы получаем значение свойства `patternMismatch`, а не {{domxref('validityState.tooLong')}} или {{domxref('validityState.tooShort')}}, потому что ограничения заданы именно с помощью атрибута `pattern`. Если бы вместо него использовались атрибуты [`minlength`](/ru/docs/Web/HTML/Attributes/minlength) и [`maxlength`](/ru/docs/Web/HTML/Attributes/maxlength), для валидации можно было использовать {{domxref('validityState.tooLong')}} или {{domxref('validityState.tooShort')}}.

> **Примечание:** Примечание: Если атрибут `pattern` не используется, поле `{{HTMLElement("input/email", "email")}}` требует, соответствия значения хотя бы формату `x@y`, а поле `{{HTMLElement("input/url", "url")}}` — хотя бы формату `x:`. Если поле не валидно, свойство {{domxref('validityState.typeMismatch')}} будет `true`, если не используется атрибут `pattern`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Также смотрите

- [Валидация ограничений](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Формы: Валидация форм](/ru/docs/Learn/Forms/Form_validation)
- [Регулярные выражения](/ru/docs/Web/JavaScript/Guide/Regular_Expressions)
