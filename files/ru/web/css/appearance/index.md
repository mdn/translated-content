---
title: appearance (-moz-appearance, -webkit-appearance)
slug: Web/CSS/appearance
---

{{CSSRef}}{{SeeCompatTable}}

CSS-свойство **`-moz-appearance`** используется в Gecko (Firefox) для отображения элемента, используя базовые стили платформы на основе темы операционной системы.

Свойство **`-webkit-appearance`** используется в браузерах WebKit-based (например, Safari) и Blink-based (например, Chrome, Opera) для того же эффекта. Заметьте, что Firefox и Edge также поддерживают `-webkit-appearance`, для обеспечения совместимости.

{{EmbedInteractiveExample("pages/css/appearance.html")}}

Это свойство часто используется в таблицах стилей [XUL](/ru/docs/Mozilla/Tech/XUL/Tutorial) для разработки пользовательских виджетов в стиле, соответствующем платформе. Оно, также, используется в реализации [XBL](/ru/docs/XBL) виджетов, которые поставляются с платформой Mozilla.

> **Примечание:** Если вы хотите использовать это свойство на веб-сайте, вы должны тестировать его очень осторожно. Хотя оно поддерживается в большинстве современных браузерах, его реализация широко варьируется. В старых браузерах, даже ключевое слово `none` не окажет одинакового эффекта на все элементы формы различных браузеров, а некоторые его совсем не поддерживают. Различия меньше в более современных браузерах.

## Синтаксис

```css
/* CSS модуль базового интерфейса 4 уровня, значения */
appearance: none;
appearance: auto;
appearance: button;
appearance: textfield;
appearance: searchfield;
appearance: textarea;
appearance: push-button;
appearance: button-bevel;
appearance: slider-horizontal;
appearance: checkbox;
appearance: radio;
appearance: square-button;
appearance: menulist;
appearance: menulist-button;
appearance: listbox;
appearance: meter;
appearance: progress-bar;

/* Частичный список доступных значений в Gecko */
-moz-appearance: scrollbarbutton-up;
-moz-appearance: button-bevel;

/* Частичный список доступных значений в WebKit/Blink (таких как Gecko и Edge) */
-webkit-appearance: media-mute-button;
-webkit-appearance: caret;
```

Свойство `-moz-appearance` может быть указано как одно значение, выбранное из списка ниже.

### Значения

`<appearance>` является одним из нижеследующих ключевых свойств:

<table class="standard-table">
  <tbody>
    <tr>
      <th>Value</th>
      <th>Browser</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>none</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>Hides certain features of widgets, such as arrow displayed in select element, indicating that list can be expanded.</td>
    </tr>
    <tr>
      <td><code>auto</code></td>
      <td>Firefox Chrome Edge</td>
      <td>
        The user agent selects the appropriate special styling based on the
        element. Acts as <code>none</code> on elements with no special styling.
      </td>
    </tr>
    <tr>
      <td><code>menulist-button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>textfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td colspan="3">
        The following values are treated as equivalent to <code>auto</code>:
      </td>
    </tr>
    <tr>
      <td><code>button</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>The element used to be drawn like a button.</td>
    </tr>
    <tr>
      <td><code>checkbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        The element used to be drawn like a checkbox, including only the actual
        "checkbox" portion.
      </td>
    </tr>
    <tr>
      <td><code>listbox</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>menulist</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>meter</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>progress-bar</code></td>
      <td>Chrome Safari Firefox</td>
      <td></td>
    </tr>
    <tr>
      <td><code>push-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>radio</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td>
        The element used to be drawn like a radio button, including only the actual
        "radio button" portion.
      </td>
    </tr>
    <tr>
      <td><code>searchfield</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>slider-horizontal</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>square-button</code></td>
      <td>Chrome Safari Edge</td>
      <td></td>
    </tr>
    <tr>
      <td><code>textarea</code></td>
      <td>Firefox Chrome Safari Edge</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Non-standard keywords

The following values may be operational on historical browser versions using **`-moz-appearance`** or **`-webkit-appearance`** prefix, but not on the standard **`appearance`** property.

| Value                                  | Browser                    | Description                                                                                                                                                                        |
| -------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachment`                           | Safari                     |                                                                                                                                                                                    |
| `borderless-attachment`                | Safari                     |                                                                                                                                                                                    |
| `button-bevel`                         | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `caps-lock-indicator`                  | Safari Edge                |                                                                                                                                                                                    |
| `caret`                                | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `checkbox-container`                   | Firefox                    | The element is drawn like a container for a checkbox, which may include a prelighting background effect under certain platforms. Normally it would contain a label and a checkbox. |
| `checkbox-label`                       | Firefox                    |                                                                                                                                                                                    |
| `checkmenuitem`                        | Firefox                    |                                                                                                                                                                                    |
| `color-well`                           | Safari                     | `input type=color`                                                                                                                                                                 |
| `continuous-capacity-level-indicator`  | Safari                     |                                                                                                                                                                                    |
| `default-button`                       | Safari Edge                |                                                                                                                                                                                    |
| `discrete-capacity-level-indicator`    | Safari                     |                                                                                                                                                                                    |
| `inner-spin-button`                    | Firefox Chrome Safari      |                                                                                                                                                                                    |
| `image-controls-button`                | Safari                     |                                                                                                                                                                                    |
| `list-button`                          | Safari                     | datalist                                                                                                                                                                           |
| `listitem`                             | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `media-enter-fullscreen-button`        | Chrome Safari              |                                                                                                                                                                                    |
| `media-exit-fullscreen-button`         | Chrome Safari              |                                                                                                                                                                                    |
| `media-fullscreen-volume-slider`       | Safari                     |                                                                                                                                                                                    |
| `media-fullscreen-volume-slider-thumb` | Safari                     |                                                                                                                                                                                    |
| `media-mute-button`                    | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-play-button`                    | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-overlay-play-button`            | Chrome Safari              |                                                                                                                                                                                    |
| `media-return-to-realtime-button`      | Safari                     |                                                                                                                                                                                    |
| `media-rewind-button`                  | Safari                     |                                                                                                                                                                                    |
| `media-seek-back-button`               | Safari Edge                |                                                                                                                                                                                    |
| `media-seek-forward-button`            | Safari Edge                |                                                                                                                                                                                    |
| `media-toggle-closed-captions-button`  | Chrome Safari              |                                                                                                                                                                                    |
| `media-slider`                         | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-sliderthumb`                    | Chrome Safari Edge         |                                                                                                                                                                                    |
| `media-volume-slider-container`        | Chrome Safari              |                                                                                                                                                                                    |
| `media-volume-slider-mute-button`      | Safari                     |                                                                                                                                                                                    |
| `media-volume-slider`                  | Chrome Safari              |                                                                                                                                                                                    |
| `media-volume-sliderthumb`             | Chrome Safari              |                                                                                                                                                                                    |
| `media-controls-background`            | Chrome Safari              |                                                                                                                                                                                    |
| `media-controls-dark-bar-background`   | Safari                     |                                                                                                                                                                                    |
| `media-controls-fullscreen-background` | Chrome Safari              |                                                                                                                                                                                    |
| `media-controls-light-bar-background`  | Safari                     |                                                                                                                                                                                    |
| `media-current-time-display`           | Chrome Safari              |                                                                                                                                                                                    |
| `media-time-remaining-display`         | Chrome Safari              |                                                                                                                                                                                    |
| `menulist-text`                        | Firefox Chrome Safari Edge |                                                                                                                                                                                    |
| `menulist-textfield`                   | Firefox Chrome Safari Edge | The element is styled as the text field for a menulist. (Not implemented for the Windows platform)                                                                                 |
| `meterbar`                             | Firefox                    | Use `meter` instead.                                                                                                                                                               |
| `number-input`                         | Firefox                    |                                                                                                                                                                                    |
| `progress-bar-value`                   | Chrome Safari              |                                                                                                                                                                                    |
| `progressbar`                          | Firefox                    | The element is styled like a progress bar. Use `progress-bar` instead                                                                                                              |
| `progressbar-vertical`                 | Firefox                    |                                                                                                                                                                                    |
| `range`                                | Firefox                    |                                                                                                                                                                                    |
| `range-thumb`                          | Firefox                    |                                                                                                                                                                                    |
| `rating-level-indicator`               | Safari                     |                                                                                                                                                                                    |
| `relevancy-level-indicator`            | Safari                     |                                                                                                                                                                                    |
| `scale-horizontal`                     | Firefox                    |                                                                                                                                                                                    |
| `scalethumbend`                        | Firefox                    |                                                                                                                                                                                    |
| `scalethumb-horizontal`                | Firefox                    |                                                                                                                                                                                    |
| `scalethumbstart`                      | Firefox                    |                                                                                                                                                                                    |
| `scalethumbtick`                       | Firefox                    |                                                                                                                                                                                    |
| `scalethumb-vertical`                  | Firefox                    |                                                                                                                                                                                    |
| `scale-vertical`                       | Firefox                    |                                                                                                                                                                                    |
| `scrollbarthumb-horizontal`            | Firefox                    |                                                                                                                                                                                    |
| `scrollbarthumb-vertical`              | Firefox                    |                                                                                                                                                                                    |
| `scrollbartrack-horizontal`            | Firefox                    |                                                                                                                                                                                    |
| `scrollbartrack-vertical`              | Firefox                    |                                                                                                                                                                                    |
| `searchfield-decoration`               | Safari Edge                |                                                                                                                                                                                    |
| `searchfield-results-decoration`       | Chrome Safari Edge         | (Works on Chrome 51 on Windows 7)                                                                                                                                                  |
| `searchfield-results-button`           | Safari Edge                |                                                                                                                                                                                    |
| `searchfield-cancel-button`            | Chrome Safari Edge         |                                                                                                                                                                                    |
| `snapshotted-plugin-overlay`           | Safari                     |                                                                                                                                                                                    |
| `sheet`                                | None                       |                                                                                                                                                                                    |
| `slider-vertical`                      | Chrome Safari Edge         |                                                                                                                                                                                    |
| `sliderthumb-horizontal`               | Chrome Safari Edge         |                                                                                                                                                                                    |
| `sliderthumb-vertical`                 | Chrome Safari Edge         |                                                                                                                                                                                    |
| `textfield-multiline`                  | Firefox                    | Use `textarea` instead.                                                                                                                                                            |
| `-apple-pay-button`                    | Safari                     | **iOS and macOS only**. Available on the web starting in iOS 10.1 and macOS 10.12.1                                                                                                |

## Formal definition

{{cssinfo}}

### Формальный синтаксис

{{CSSSyntax}}

## Примеры

Нижеприведённый пример показывает, как сделать элемент, выглядящий как кнопка панели инструментов в Firefox:

```css
.exampleone {
  -moz-appearance: toolbarbutton;
}
```

Смотрите также [this JSFiddle](http://jsfiddle.net/go392m5s/) в качестве примера, показывающего как вы можете использовать `appearance: none` для стилизации радио кнопок и чекбоксов.

## Спецификации

{{Specifications}}

{{CSSInfo}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Definition of `appearance` in CSS 3 Basic User Interface](http://www.w3.org/TR/2004/CR-css3-ui-20040511/#appearance) (Candidate Recommendation from 2004-05-11).
- [Dropped CSS3 features from the UI spec.4](http://wiki.csswg.org/spec/css4-ui#dropped-css3-features)
