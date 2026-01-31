---
title: "ARIA: роль checkbox"
short-title: checkbox
slug: Web/Accessibility/ARIA/Reference/Roles/checkbox_role
---

Роль `checkbox` предназначена для интерактивных элементов управления с состоянием
"отмечен/не отмечен". Элементы с `role="checkbox"` должны также включать атрибут
[`aria-checked`](/ru/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked),
чтобы передавать состояние флажка вспомогательным технологиям.

```html
<span
  role="checkbox"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label">
</span>
<label id="chk1-label">Запомнить мои настройки</label>
```

> [!NOTE]
> Первое правило ARIA: если встроенный HTML-элемент или атрибут обладает нужной
> семантикой и поведением, используйте его вместо перепрофилирования другого
> элемента с добавлением ARIA. Вместо этого применяйте нативный
> [HTML-флажок `<input type="checkbox">`](/ru/docs/Web/HTML/Reference/Elements/input/checkbox)
> (с связанным элементом {{HTMLElement('label')}}), который изначально предоставляет
> всю необходимую функциональность:

```html
<input type="checkbox" id="chk1-label" />
<label for="chk1-label">Запомнить мои настройки</label>
```

## Описание

Нативный элемент управления формы HTML — флажок
([`<input type="checkbox">`](/ru/docs/Web/HTML/Reference/Elements/input/checkbox))
может находиться в двух состояниях: ("отмечен" или "не отмечен"), а также в
[`неопределённом`](/ru/docs/Web/HTML/Reference/Elements/input/checkbox#indeterminate_state_checkboxes)
состоянии, устанавливаемом с помощью JavaScript. Аналогично, элемент с
`role="checkbox"` может находиться в трёх состояниях, обозначаемых с помощью
атрибута `aria-checked`: `true`, `false` или `mixed`.

Поскольку флажок является интерактивным элементом управления, он должен быть
доступен для фокусировки и управления с клавиатуры. Если роль применяется к
элементу, который не может получать фокус, используйте атрибут
[`tabindex`](/ru/docs/Web/HTML/Reference/Global_attributes/tabindex), чтобы это
исправить. Ожидаемая клавиша для активации флажка — <kbd>Пробел</kbd>.

Разработчик должен динамически изменять значение атрибута `aria-checked` при
активации флажка.

### Все потомки являются презентационными

Существуют некоторые типы компонентов пользовательского интерфейса, которые при
представлении в API доступности платформы могут содержать только текст. API
доступности не имеют способа представления семантических элементов, содержащихся
внутри `checkbox`. Чтобы обойти это ограничение, браузеры автоматически применяют
роль [`presentation`](/ru/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role)
ко всем элементам-потомкам любого элемента `checkbox`, так как это роль, которая
не поддерживает семантические дочерние элементы.

Например, рассмотрим следующий элемент `checkbox`, содержащий заголовок.

```html
<div role="checkbox"><h6>Название моего флажка</h6></div>
```

Поскольку потомки `checkbox` являются презентационными, следующий код эквивалентен:

```html
<div role="checkbox"><h6 role="presentation">Название моего флажка</h6></div>
```

С точки зрения пользователя вспомогательных технологий, заголовок не существует,
так как предыдущие snippets кода эквивалентны следующему в
[дереве доступности](/ru/docs/Glossary/Accessibility_tree):

```html
<div role="checkbox">Название моего флажка</div>
```

### Связанные роли, состояния и свойства WAI-ARIA

- [`aria-checked`](/ru/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked)
  - : Значение `aria-checked` определяет состояние флажка. Этот атрибут имеет одно
    из трёх возможных значений:
    - `true`
      - : Флажок отмечен.
    - `false`
      - : Флажок не отмечен.
    - `mixed`
      - : Флажок частично отмечен или находится в неопределённом состоянии.

- `tabindex="0"`
  - : Используется, чтобы сделать элемент фокусируемым, чтобы пользователь
    вспомогательных технологий мог перейти к нему с помощью клавиши Tab и начать
    чтение сразу.

### Взаимодействия с клавиатурой

| Клавиша           | Функция           |
| ----------------- | ----------------- |
| <kbd>Пробел</kbd> | Активирует флажок |

### Необходимый JavaScript

#### Необходимые обработчики событий

- `onclick`
  - : Обрабатывает клики мышью как по самому флажку, так и по связанной с ним
    метке, которые изменяют состояние флажка путём изменения значения атрибута
    `aria-checked` и его внешнего вида, чтобы он отображался как отмеченный или
    неотмеченный для зрячих пользователей.
- `onKeyDown`
  - : Обрабатывает случай, когда пользователь нажимает клавишу <kbd>Пробел</kbd>,
    чтобы изменить состояние флажка путём изменения значения атрибута `aria-checked`
    и его внешнего вида, чтобы он отображался как отмеченный или неотмеченный для
    зрячих пользователей.

## Примеры

В следующем примере создаётся несемантический элемент флажка с использованием CSS
и JavaScript для обработки состояния "отмечен" или "не отмечен".

### HTML

```html
<span
  role="checkbox"
  id="chkPref"
  aria-checked="false"
  tabindex="0"
  aria-labelledby="chk1-label"></span>
<label id="chk1-label">Запомнить мои настройки</label>
```

### CSS

```css
[role="checkbox"] {
  padding: 5px;
}

[role="checkbox"]:focus {
  border: 2px solid #0198e1;
}

[aria-checked="true"]::before {
  content: "[x]";
}

[aria-checked="false"]::before {
  content: "[ ]";
}
```

### JavaScript

```js
const item = document.getElementById("chkPref");
const label = document.getElementById("chk1-label");

function changeCheckbox(code) {
  const checked = item.getAttribute("aria-checked");

  if (code && code !== "Space") {
    return;
  }
  if (checked === "true") {
    item.setAttribute("aria-checked", "false");
  } else {
    item.setAttribute("aria-checked", "true");
  }
}

item.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

label.addEventListener("keydown", (event) => {
  changeCheckbox(event.code);
});

item.addEventListener("click", changeCheckbox);
label.addEventListener("click", changeCheckbox);
```

{{EmbedLiveSample("Примеры", 230, 250)}}

## Вопросы доступности

Когда роль `checkbox` добавляется к элементу, пользовательский агент должен
сделать следующее:

- Предоставить элемент как имеющий роль `checkbox` в API доступности операционной
  системы.
- Когда значение `aria-checked` изменяется, отправлять событие изменения
  доступного состояния.

Продукты вспомогательных технологий должны делать следующее:

- Скринридеры должны объявлять элемент как флажок и, опционально, предоставлять
  инструкции по его активации.

Разработчики, реализующие флажки, должны делать следующее:

- Обеспечить, чтобы до флажка можно было добраться и взаимодействовать с ним как
  с помощью клавиатуры, так и с помощью кликов мыши.
- Поддерживать атрибут `aria-checked` в актуальном состоянии после пользовательских
  взаимодействий.
- Предоставлять стили, указывающие на то, что флажок находится в фокусе.

> [!NOTE]
> Мнения о том, как вспомогательные технологии должны обрабатывать эту технику,
> могут различаться. Представленная выше информация отражает одно из таких мнений
> и может быть изменена.

## Рекомендации

Первое правило ARIA: если встроенный HTML-элемент или атрибут обладает нужной
вам семантикой и поведением, используйте его вместо перепрофилирования элемента
и добавления роли, состояния или свойства ARIA для обеспечения доступности.
Таким образом, рекомендуется использовать нативный
[HTML-флажок](/ru/docs/Web/HTML/Reference/Elements/input/checkbox) через элемент
управления формой вместо воссоздания его функциональности с помощью JavaScript и
ARIA.

## Смотрите также

- [`<input type="checkbox">`](/ru/docs/Web/HTML/Reference/Elements/input/checkbox)
- [ARIA: роль `radio`](/ru/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role)
- [ARIA: роль `menuitem`](/ru/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role)
- [ARIA: роль `menuitemcheckbox`](/ru/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role)
- [ARIA: роль `menuitemradio`](/ru/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role)
- [ARIA: роль `switch`](/ru/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role)
- [ARIA: роль `option`](/ru/docs/Web/Accessibility/ARIA/Reference/Roles/option_role)
