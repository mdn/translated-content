---
title: ":invalid"
slug: Web/CSS/:invalid
---

{{ CSSRef() }}

## Описание

CSS [псевдокласс](/ru/docs/Web/CSS/Псевдо-классы) `:invalid` находит любые {{ HTMLElement("input") }} или {{ HTMLElement("form") }} элементы, контент которых не проходит [валидацию](/ru/docs/Web/Guide/HTML/HTML5/Constraint_validation), в соответствии с типом поля. Он позволяет вам легко менять внешний вид полей, что позволяет пользователю видеть и исправлять ошибки.

По умолчанию, Gecko не применяет стили к псевдоклассу `:invalid`. Однако, применяет стили (красное "свечение", используя свойство {{ Cssxref("box-shadow") }}) к псевдоклассу {{ Cssxref(":-moz-ui-invalid") }}, который применяется в подгруппе случаев для `:invalid`.

Вы можете отключить свечение, используя следующий CSS или полностью изменить внешний вид некорректных полей.

```css
:invalid {
  box-shadow: none;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}
```

## Замечания

#### Радиокнопки

Если любая из радиокнопок в группе (т.е., с одинаковым атрибутом `name`) имеет атрибут `required`, псевдокласс `:invalid` применяется ко всем из них, если ни одна из кнопок группы не выбрана.

## Пример

Этот пример представляет собой простую форму, цвета элементов которой зелёные, когда данные корректные, и красные, когда нет.

### HTML

```html
<form>
  <label>Введите URL:</label>
  <input type="url" />
  <br />
  <br />
  <label>Введите эл. почту:</label>
  <input type="email" required />
</form>
```

### CSS

```css
input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}
```

{{ EmbedLiveSample('Example2',600,150) }}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Прочие псевдоклассы для валидации: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Псевдоклассы Mozilla: {{cssxref(":user-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Валидация форм](/ru/docs/Learn/Forms/Form_validation)
- Получение [состояния валидации](/ru/docs/Web/API/ValidityState) средствами JavaScript
