---
title: "ARIA: checkbox role"
slug: Web/Accessibility/ARIA/Roles/checkbox_role
---

[checkbox role](https://www.w3.org/TR/wai-aria-1.1/#checkbox) используется для переключаемых интерактивных элементов управления. Элементы, содержащие `role="checkbox"` также должны включать `aria-checked` атрибут, чтобы продемонстрировать состояние чекбокса ассистивным технологиям.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label">
</span>
<label id="chk1-label">Remember my preferences</label>
```

Первое правило ARIA - если у нативного HTML-элемента или атрибута присутствует необходимая семантика или поведение, следует использовать его, а не использовать другой элемент не по назначению, добавляя ARIA. Вместо этого лучше использовать [HTML checkbox](/ru/docs/Web/HTML/Element/input/checkbox) [`<input type="checkbox">`](/ru/docs/Web/HTML/Element/input/checkbox), который изначально предоставляет необходимый функционал:

```html
<input type="checkbox" id="chk1-label" />
<label for="chk1-label">Запомнить мои предпочтения</label>
```

## Описание

Нативный [HTML checkbox](/ru/docs/Web/HTML/Element/input/checkbox) элемент управления может находиться только в двух состояниях отмеченности - "отмечен" или "не отмечен", с [неопределённым](/ru/docs/Web/HTML/Element/input/checkbox#Indeterminate_state_checkboxes) состоянием, устанавливаемым с помощью JavaScript. Аналогично элемент с `role="checkbox"` может находиться в трёх состояниях, обозначенных через `aria-checked` атрибут: `true`, `false`, or `mixed`.

Поскольку чекбокс является интерактивным элементом, он должен быть фокусируемым и доступным при помощи клавиатуры. Если роль установлена для нефокусируемого элемента, чтобы исправить ситуацию, используйте атрибут `tabindex`. Ожидаемый способ активации чекбокса при помощи клавиатуры - <kbd>Пробел</kbd> .

Разработчику необходимо динамически изменять значение атрибута `aria-checked` при активации чекбокса.

### Связанные ARIA-роли, ARIA-состояния и ARIA-свойства

- aria-checked

  - : Значение `aria-checked` определяет состояние чекбокса. Этот атрибут может принимать одно из трёх значений:

    `true`
    Чекбокс отмечен
    `false`
    Чекбокс не отмечен
    `mixed`
    Чекбокс частично отмечен, или в неопределённом состоянии

- tabindex="0"
  - : Делает элемент фокусируемым, так что пользователь ассистивных технологий может сразу перейти к нему и начать читать.

### Взаимодействие с клавиатурой

| Клавиша           | Функция            |
| ----------------- | ------------------ |
| <kbd>Пробел</kbd> | Активирует чекбокс |

### Необходимый JavaScript

#### Необходимый обработчики событий

- onclick
  - : Обрабатывает клики, которые изменяют состояние чекбокса, меняя значение атрибута `aria-checked` и внешний вид чекбокса так, чтобы он выглядел отмеченным млм неотмеченным для зрячего пользователя.
- onKeyPress

  - : Обрабатывает случай, когда пользователь нажимает&#x20;

    <kbd>Пробел</kbd>

    &#x20;для смены состояния чекбокса путём изменения значения атрибута `aria-checked` и внешнего вида чекбокса так, чтобы он выглядел отмеченным млм неотмеченным для зрячего пользователя.

### Примеры

Пример ниже создаёт простой чекбокс, используя CSS и JavaScript для обработки отмеченного и неотмеченного состояний элемента.

#### HTML

```html
<span
  role="checkbox"
  id="chkPref"
  aria-checked="false"
  onclick="changeCheckbox()"
  onKeyPress="changeCheckbox()"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label" onclick="changeCheckbox()" onKeyPress="changeCheckbox()"
  >Запомнить мои предпочтения</label
>
```

#### CSS

```css
[role="checkbox"] {
  padding: 5px;
}

[aria-checked="true"]::before {
  content: "[x]";
}

[aria-checked="false"]::before {
  content: "[ ]";
}
```

#### JavaScript

```js
function changeCheckbox(event) {
  let item = document.getElementById("chkPref");
  switch (item.getAttribute("aria-checked")) {
    case "true":
      item.setAttribute("aria-checked", "false");
      break;
    case "false":
      item.setAttribute("aria-checked", "true");
      break;
  }
}
```

{{EmbedLiveSample("Примеры", 230, 250)}}

## Проблемы доступности

Когда `checkbox` роль добавлена к элементу, юзер агент должен сделать следующее:

- Показать элемент как элемент с функциями чекбокса для API доступности.
- Когда значение aria-checked меняется, отправить доступное событие изменения состояния.

Продукты, использующие ассистивные технологии должны сделать следующее:

- Программы чтения с экрана должны объявить элемент как чекбокс и при необходимости предоставить инструкции о том, как его активировать.

> **Примечание:** Мнения относительно того, как ассистивные технологии должны работать в таких случаях, отличаются. Информация, приведённая выше, также одно из таких мнений, и не является нормативом.

## Лучшие практики

Первое правило ARIA - если у нативного HTML-элемента или атрибута присутствует необходимая семантика или поведение, следует использовать его, а не использовать другой элемент не по назначению, добавляя ARIA, чтобы сделать его доступным. По существу, рекомендуется использовать нативный [HTML checkbox](/ru/docs/Web/HTML/Element/input/checkbox) вместо воспроизведения функциональности чекбокса с помощью JavaScript и ARIA.

## Смотрите также

- [`<input type="checkbox">`](/ru/docs/Web/HTML/Element/input/checkbox)
- [ARIA: radio role](/ru/docs/Web/Accessibility/ARIA/Roles/Radio_Role)
- [ARIA: menuitem role](/ru/docs/Web/Accessibility/ARIA/Roles/Menuitem_Role)
- [ARIA: menuitemcheckbox role](/ru/docs/Web/Accessibility/ARIA/Roles/Menuitemcheckbox_Role)
- [ARIA: menuitemradio role](/ru/docs/Web/Accessibility/ARIA/Roles/Menuitemradio_Role)
- [ARIA: switch role](/ru/docs/Web/Accessibility/ARIA/Roles/Switch_role)
- [ARIA: option role](/ru/docs/Web/Accessibility/ARIA/Roles/Option_role)
