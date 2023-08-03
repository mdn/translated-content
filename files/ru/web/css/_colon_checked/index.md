---
title: ":checked"
slug: Web/CSS/:checked
---

{{CSSRef}}

CSS [псевдоклассы](/ru/docs/Web/CSS/Псевдо-классы) **`:checked`** CSS находит любые элементы **radio** (`<input type="radio">`), **checkbox** (`<input type="checkbox">`) или **option** ({{ HTMLElement("option") }} внутри {{ HTMLElement("select") }}), которые выбраны или включены. Пользователь может изменить это состояние, нажав на элемент, или выбрав другое значение, в этом случае `:checked` повторно не применится к элементу, а сохранится.

## Синтаксис

```css
input:checked {
  margin-left: 25px;
  border: 1px solid blue;
}
```

### Формальный синтаксис

```
element:checked { стили }
```

## Примеры

### Примеры селекторов

```css
/* любой "кликабельный" элемент */
:checked {
  width: 50px;
  height: 50px;
}

/* только радиокнопки */
input[type="radio"]:checked {
  margin-left: 25px;
}

/* только чекбоксы */
input[type="checkbox"]:checked {
  display: none;
}

/* только элементы option */
option:checked {
  color: red;
}
```

- `input[type="radio"]:checked`
  - : Находит, все отмеченные на странице, радиокнопки

<!---->

- `input[type="checkbox"]:checked`
  - : Находит все отмеченные чекбоксы
- `option:checked`
  - : Находит все отмеченные option

### Использование скрытых чекбоксов, чтобы хранить некоторые булевские значения в CSS

Псевдокласс `:checked` применяется к скрытым чекбоксам в начале вашей страницы, которые могут использоваться, чтобы хранить некоторые динамические значения, используемые в CSS-правилах. Следующий пример показывает, как скрывать/показывать некоторые расширяемые элементы, нажимая на кнопку ([открыть это демо](/@api/deki/files/6246/=expandable-elements.html)).

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Расширяемые элементы</title>
    <style>
      #expand-btn {
        margin: 0 3px;
        display: inline-block;
        font:
          12px / 13px "Lucida Grande",
          sans-serif;
        text-shadow: rgba(255, 255, 255, 0.4) 0 1px;
        padding: 3px 6px;
        border: 1px solid rgba(0, 0, 0, 0.6);
        background-color: #969696;
        cursor: default;
        border-radius: 3px;
        box-shadow:
          rgba(255, 255, 255, 0.4) 0 1px,
          inset 0 20px 20px -10px white;
      }

      #isexpanded:checked ~ #expand-btn,
      #isexpanded:checked ~ * #expand-btn {
        background: #b5b5b5;
        box-shadow:
          inset rgba(0, 0, 0, 0.4) 0 -5px 12px,
          inset rgba(0, 0, 0, 1) 0 1px 3px,
          rgba(255, 255, 255, 0.4) 0 1px;
      }

      #isexpanded,
      .expandable {
        display: none;
      }

      #isexpanded:checked ~ * tr.expandable {
        display: table-row;
        background: #cccccc;
      }

      #isexpanded:checked ~ p.expandable,
      #isexpanded:checked ~ * p.expandable {
        display: block;
        background: #cccccc;
      }
    </style>
  </head>
  <body>
    <input type="checkbox" id="isexpanded" />

    <h1>Расширяемые элементы</h1>
    <table>
      <thead>
        <tr>
          <th>Колонка #1</th>
          <th>Колонка #2</th>
          <th>Колонка #3</th>
        </tr>
      </thead>
      <tbody>
        <tr class="expandable">
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tr>
        <tr>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tr>
        <tr>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tr>
        <tr class="expandable">
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tr>
        <tr class="expandable">
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
          <td>[текст ячейки]</td>
        </tr>
      </tbody>
    </table>

    <p>[какой-то текст примера]</p>
    <p>
      <label for="isexpanded" id="expand-btn">Показать скрытые элементы</label>
    </p>
    <p class="expandable">[другой текст для примера]</p>
    <p>[какой-то текст примера]</p>
  </body>
</html>
```

{{ EmbedLiveSample('Использование_скрытых_чекбоксов_чтобы_хранить_некоторые_булевские_значения_в_CSS') }}

### Использование скрытых радиокнопок, чтобы хранить некоторые булевские значения в CSS

Также вы можете псевдокласс `:checked`, чтобы скрывать радиокнопки для того, чтобы создать, например, **галерею изображений с полноразмерными картинками, показываемыми при наведении на них мыши**. Загрузите [это демо](/@api/deki/files/6268/=css-checked-gallery.zip) как вариант решения.

> **Примечание:** Для аналогично эффекта, но основанного на псевдоклассе [`:hover`](/ru/docs/CSS/:hover) и без скрытых радиокнопок, смотрите [это демо](/@api/deki/files/6247/=css-gallery.zip), взятое со страницы [:hover](/ru/docs/CSS/:hover).

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
