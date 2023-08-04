---
title: ValidityState.typeMismatch
slug: Web/API/ValidityState/typeMismatch
---

Доступное только для чтения свойство **`typeMismatch`** объекта **[`ValidityState`](/ru/docs/Web/API/ValidityState)** указывает, соответствует ли изменённое пользователем значение {{HTMLElement("input")}} ограничениям атрибута [`type`](/ru/docs/Web/HTML/Element/input#input_types).

Если атрибут `type` получает типы вроде {{HTMLElement("input/email", "email")}} или {{HTMLElement("input/url", "url")}}, а значение не соответствует ограничениям данного типа, свойство `typeMismatch` будет true.

Тип {{HTMLElement("input/email", "email")}} допускает ввод одного или нескольких email-адресов, в зависимости от наличия атрибута [`multiple`](/ru/docs/Web/HTML/Attributes/multiple). Валидный email-адрес включает префикс электронной почты и домен, с доменом верхнего уровня или без него. Если значение поля email-адреса не является пустой строкой, одним или несколькими email-адресами, разделёнными запятой (если присутствует атрибут [`multiple`](/ru/docs/Web/HTML/Attributes/multiple)), то это `typeMismatch`.

Тип {{HTMLElement("input/url", "url")}} допускает ввода одного или нескольких url-адресов, в зависимости от наличия атрибута [`multiple`](/ru/docs/Web/HTML/Attributes/multiple). Валидный URL-адрес включает протокол с IP-адресом или комбинацией поддоменом, домена и домен верхнего уровня. Если значение поля URL не ялвяется пустой строкой, одним или несколькими URL-адресами, разделёнными запятой (если присутствует атрибут [`multiple`](/ru/docs/Web/HTML/Attributes/multiple)), то это `typeMismatch`.

| Тип input                               | Значение           | Ожидаемое значение                                 |
| --------------------------------------- | ------------------ | -------------------------------------------------- |
| {{HTMLElement("input/email", "email")}} | `x@y` или `x@y.z`  | Email-адрес с или без [TLD](/ru/docs/Glossary/TLD) |
| {{HTMLElement("input/url", "url")}}     | `x:` или `x://y.z` | Протокол или полный URL с протоколом               |

## Примеры

Учитывая следующее:

```html
<p>
  <label>
    Enter an email address:
    <input type="email" value="example.com" />
  </label>
</p>
<p>
  <label>
    Enter a URL:
    <input type="url" value="example.com" />
  </label>
</p>
```

```css
input:invalid {
  border: red solid 3px;
}
```

{{EmbedLiveSample("Examples", 300, 40)}}

В примере выше в обоих полях происходит `typeMismatch`, потому что email-адрес является просто доменом, а URL не содержит протокол

`typeMismatch` происходит при несоответствии [`значения`](/ru/docs/Web/HTML/Attributes/value), заданного в атрибуте [`type`](/ru/docs/Web/HTML/Element/input#%3cinput%3e_types) и содержимым поля. `typeMismatch` является лишь одной из возможных ошибок и возможна только для полей {{HTMLElement("input/email", "email")}} и {{HTMLElement("input/url", "url")}}. Когда введённое значение не соответствует ожидаемому для других полей ввода, в зависимости от типа поля будут возникать разные ошибки. Например, если в поле {{HTMLElement("input/number", "number")}} ввести значение не являющееся числом с плавающей запятой, `badInput` будет `true`. Если `обязательное поле email не заполнено`, {{domxref('ValidityState.valueMissing','valueMissing')}} будет `true`.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Валидация ограничений](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation)
- [Валидация форм на стороне клиента](/ru/docs/Learn/Forms/Form_validation)
- [Регулярные выражения](/ru/docs/Web/JavaScript/Guide/Regular_Expressions)
