---
title: Курсор
slug: Web/CSS/cursor
---

{{CSSRef}}

## Описание

The **`cursor`** CSS property specifies the mouse cursor displayed when the mouse pointer is over an element.

{{cssinfo}}

## Синтаксис

```css
/* Применение ключевых значений */
cursor: pointer;
cursor: auto;

/* Использование URL и координат */
cursor:
  url(cursor1.png) 4 12,
  auto;
cursor:
  url(cursor2.png) 2 2,
  pointer;

/* Глобальные значения */
cursor: inherit;
cursor: initial;
cursor: unset;
```

### Значения

- `<url>`
  - : Ссылка или разделённый запятыми список ссылок: `url(…), url(…), …`, указывающие на файл изображения. Дополнительные ссылки могут быть предоставлены в качестве запасных значений, на случай если изображение по основной ссылке не поддерживается в качестве курсора. Запасное значение, не являющееся ссылкой (одно или несколько ключевых слов) **должно** находиться в конце списка значений. See [Using URL values for the cursor property](/ru/docs/CSS/Using_URL_values_for_the_cursor_property) for more details.
- `<x>` `<y>` {{experimental_inline}}
  - : Необязательные значения х- и у- координат. Два безразмерных неотрицательных числа меньше 32.
- Ключевые слова
  - : **Наведите курсор на картинку, чтобы увидеть пример в действии:**<table class="standard-table">
      <tbody>
        <tr>
          <th>Категория</th>
          <th style="width: 7.5em">Значение</th>
          <th>Вид</th>
          <th>Описание</th>
        </tr>
        <tr style="cursor: auto">
          <td rowspan="3">Основные</td>
          <td><code>auto</code></td>
          <td></td>
          <td>
            Браузер самостоятельно определяет значение курсора в зависимости от
            свойств элемента, на который наведена мышь.<br />Например: при наведении
            на текст отобразит курсор <code>text</code>.
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img alt="default.gif" src="default.gif" /></td>
          <td>Основной курсор платформы, обычно стрелочка.</td>
        </tr>
        <tr style="cursor: none">
          <td><code>none</code></td>
          <td></td>
          <td>Курсор не отображается.</td>
        </tr>
        <tr style="cursor: context-menu">
          <td rowspan="5" style="cursor: auto">
            Ссылки и статусы выполнения задач
          </td>
          <td><code>context-menu</code></td>
          <td><img alt="context-menu.png" src="context-menu.png" /></td>
          <td>Доступно контекстное меню.</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img alt="help.gif" src="help.gif" /></td>
          <td>Доступна вспомогательная информация.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img alt="pointer.gif" src="pointer.gif" /></td>
          <td>Указатель, обозначающий ссылку, обычно указующая рука.</td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img alt="progress.gif" src="progress.gif" /></td>
          <td>
            Программа занята, но пользователь может взаимодействовать с интерфейсом
            (в отличие от <code>wait</code>).
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img alt="wait.gif" src="wait.gif" /></td>
          <td>Программа занята (песочные часы).</td>
        </tr>
        <tr style="cursor: cell">
          <td rowspan="4" style="cursor: auto">Выделение</td>
          <td><code>cell</code></td>
          <td><img alt="cell.gif" src="cell.gif" /></td>
          <td>Указывает на возможность выбора клетки или клеток таблицы.</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img alt="crosshair.gif" src="crosshair.gif" /></td>
          <td>
            Крестик, часто используемый для обозначения выбора на битовой карте.
          </td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img alt="text.gif" class="default" src="text.gif" /></td>
          <td>Значок выбора текста.</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="vertical-text.gif" src="vertical-text.gif" /></td>
          <td>Значок выбора вертикального текста.</td>
        </tr>
        <tr style="cursor: alias">
          <td rowspan="5" style="cursor: auto">"Захвати и перенеси"</td>
          <td><code>alias</code></td>
          <td><img alt="alias.gif" src="alias.gif" /></td>
          <td>Будет создана ссылка внутри страницы.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img alt="copy.gif" class="default" src="copy.gif" /></td>
          <td>Указывает на возможность копирования.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img alt="move.gif" src="move.gif" /></td>
          <td><p>Указывает на возможность перемещения объекта.</p></td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td><img alt="no-drop.gif" src="no-drop.gif" /></td>
          <td>
            Указывает на невозможность "сбрасывания" объекта.<br />В Windows и Mac
            OSX то же самое что и <code>not-allowed</code>.
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="not-allowed.gif" src="not-allowed.gif" /></td>
          <td>Указатель невозможности выполнения действия.</td>
        </tr>
        <tr style="cursor: all-scroll">
          <td rowspan="15" style="cursor: auto">
            Изменение размера, прокручивание (скроллинг)
          </td>
          <td><code>all-scroll</code></td>
          <td><img alt="all-scroll.gif" src="all-scroll.gif" /></td>
          <td>
            Указатель возможности перемещения по странице в любом направлении.<br />в
            Windows то же самое что <code>move</code>.
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" /></td>
          <td>
            Объект может быть раздвинут/сдвинут горизонтально. Обычно две
            вертикальные черты со стрелочками в разные стороны.
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img alt="row-resize.gif" src="row-resize.gif" /></td>
          <td>
            Объект может быть раздвинут/сдвинут вертикально. Две горизонтальные
            черты с вертикальными стрелочками.
          </td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top cursor"
              src="n-resize.gif"
              style="border-style: solid; border-width: 0px"
            />
          </td>
          <td rowspan="8" style="cursor: auto">
            Грань или грани могут быть перемещены. Например
            <code>se-resize</code> используется для обозначения перемещения с
            юго-востока. В некоторых системах то же самое что двунаправленное
            изменение.
          </td>
        </tr>
        <tr style="cursor: e-resize">
          <td><code>e-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the right cursor"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom cursor "
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the left cursor"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-right corner cursor"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-left corner cursor"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-right corner cursor"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-left corner cursor"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="3-resize.gif" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">
            Двунаправленное изменение размера.
          </td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="6-resize.gif" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="1-resize.gif" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="4-resize.gif" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <td rowspan="2">Масштабирование</td>
          <td><code>zoom-in</code></td>
          <td><img alt="zoom-in.gif" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Приближение или уменьшение.</p>
          </td>
        </tr>
        <tr style="cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img alt="zoom-out.gif" class="default" src="zoom-out.gif" /></td>
        </tr>
        <tr style="cursor: grab">
          <td rowspan="2">Захват</td>
          <td><code>grab</code></td>
          <td><img alt="grab.gif" class="default" src="grab.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Указывает на возможность схватить и переместить объект.</p>
          </td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img alt="grabbing.gif" class="default" src="grabbing.gif" /></td>
        </tr>
      </tbody>
    </table>

### Формальный синтаксис

{{csssyntax}}

## Примеры

```css
.foo {
  cursor: crosshair;
}

/* use prefixed-value if "zoom-in" isn't supported */
.bar {
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}

/* standard cursor value as fallback for url() must be provided (doesn't work without) */
.baz {
  cursor: url(hyper.cur), auto;
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Using URL values for the cursor property](/ru/docs/CSS/Using_URL_values_for_the_cursor_property)
- {{cssxref("pointer-events")}}
- [Cursor Property (MSDN)](http://msdn.microsoft.com/en-us/library/aa358795.aspx)
