---
title: keypress
slug: Web/API/Element/keypress_event
---

{{APIRef}}

Событие `keypress` происходит когда нажимается символьная клавиша, то есть клавиша которая создаёт символ. Пример таких клавиш это буквы, цифры, знаки пунктуации и т.д. Примеры клавиш которые не создают символы, это клавиши модификаторы, такие как: <kbd>Alt</kbd>, <kbd>Shift</kbd>, <kbd>Ctrl</kbd>, or <kbd>Meta</kbd>.

## Общая информация

- Спецификация
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-keypress) {{deprecated_inline()}}
- Интерфейс
  - : [KeyboardEvent](/ru/docs/DOM/KeyboardEvent)
- Bubbles
  - : Yes
- Cancelable
  - : Yes
- Цель
  - : Document, Element
- Действие по умолчанию
  - : Varies: `keypress` event; launch text composition system; `blur` and `focus` events; `DOMActivate` event; other event

## Свойства

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Свойства</th>
      <th scope="col">Тип</th>
      <th scope="col">Описание</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>target</code> {{readonlyInline}}</td>
      <td>EventTarget</td>
      <td>Цель события (самая верхняя цель в дереве DOM).</td>
    </tr>
    <tr>
      <td><code>type</code> {{readonlyInline}}</td>
      <td>DOMString</td>
      <td>Тип события.</td>
    </tr>
    <tr>
      <td><code>bubbles</code> {{readonlyInline}}</td>
      <td>Boolean</td>
      <td>Whether the event normally bubbles or not</td>
    </tr>
    <tr>
      <td><code>cancelable</code> {{readonlyInline}}</td>
      <td>Boolean</td>
      <td>Отменяется ли событие или нет</td>
    </tr>
    <tr>
      <td><code>view</code> {{readonlyInline}}</td>
      <td>WindowProxy</td>
      <td>
        <a
          href="/ru/docs/Web/API/Document/defaultView"
          title="In browsers, document.defaultView returns the window object associated with a document, or null if none is available."
          ><code>document.defaultView</code></a
        >
        (<code>window</code> of the document)
      </td>
    </tr>
    <tr>
      <td><code>detail</code> {{readonlyInline}}</td>
      <td><code>long</code> (<code>float</code>)</td>
      <td>0.</td>
    </tr>
    <tr>
      <td><code>target</code> {{readonlyInline}}</td>
      <td>EventTarget (DOM element)</td>
      <td>
        Сосредоточенный элемент, обрабатывающий ключевое событие, корневой
        элемент, если не выделен подходящий элемент ввода.
      </td>
    </tr>
    <tr>
      <td><code>char</code> {{readonlyInline}}</td>
      <td>DOMString (string)</td>
      <td>
        The character value of the key. If the key corresponds to a printable
        character, this value is a non-empty Unicode string containing that
        character. If the key doesn't have a printable representation, this is
        an empty string. See
        <a href="/ru/docs/Web/API/KeyboardEvent#Key_names_and_Char_values"
          >key names and char values</a
        >
        for the detail.
        <div class="note">
          <strong>Примечание:</strong> Если ключ используется в качестве
          макроса, который вставляет несколько символов, значением этого
          атрибута является вся строка, а не только первый символ.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>key</code> {{readonlyInline}}</td>
      <td>DOMString (string)</td>
      <td>
        <p>
          The key value of the key represented by the event. If the value has a
          printed representation, this attribute's value is the same as the
          <code>char</code> property. Otherwise, it's one of the key value
          strings specified in
          <a href="/ru/docs/Web/API/KeyboardEvent/key/Key_Values"
            >Key values</a
          >. If the key can't be identified, its value is the string
          "Unidentified". See
          <a href="/ru/docs/Web/API/KeyboardEvent#Key_names_and_Char_values"
            >key names and char values</a
          >
          for more details. Read Only.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>code</code> {{readonlyInline}}</td>
      <td>DOMString (string)</td>
      <td>
        Holds a string that identifies the physical key being pressed. The value
        is not affected by the current keyboard layout or modifier state, so a
        particular key will always return the same value.
      </td>
    </tr>
    <tr>
      <td><code>charCode</code> {{readonlyInline}}</td>
      <td>Unsigned long (int)</td>
      <td>
        The Unicode reference number of the key; this attribute is used only by
        the
        <a href="/ru/docs/Mozilla_event_reference/keypress"
          ><code>keypress</code></a
        >
        event. For keys whose <code>char</code> attribute contains multiple
        characters, this is the Unicode value of the first character in that
        attribute.
        <div class="warning">
          <strong>Warning:</strong> This attribute is deprecated; you should use
          <code>char</code> instead, if available.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>keyCode</code> {{readonlyInline}}</td>
      <td>Unsigned long (int)</td>
      <td>
        A system and implementation dependent numerical code identifying the
        unmodified value of the pressed key. This is usually the decimal ASCII
        ({{ RFC(20) }}) or Windows 1252 code corresponding to the key; see
        <a href="#virtual_key_codes">Virtual key codes</a> for a list of common
        values. If the key can't be identified, this value is 0.
        <div class="warning">
          <strong>Warning:</strong> This attribute is deprecated; you should use
          <code>key</code> instead, if available.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>which</code> {{readonlyInline}}</td>
      <td>Unsigned long (int)</td>
      <td>
        A system and implementation dependent numeric code identifying the
        unmodified value of the pressed key; this is usually the same as
        <code>keyCode</code>.
        <div class="warning">
          <strong>Warning:</strong> This attribute is deprecated; you should use
          <code>key</code> instead, if available.
        </div>
      </td>
    </tr>
    <tr>
      <td><code>location</code> {{readonlyInline}}</td>
      <td>long (float)</td>
      <td>The location of the key on the device.</td>
    </tr>
    <tr>
      <td><code>repeat</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> if a key has been depressed long enough to trigger key
        repetition, otherwise <code>false</code>.
      </td>
    </tr>
    <tr>
      <td><code>locale</code> {{readonlyInline}}</td>
      <td>string</td>
      <td>
        The language code for the key event, if available; otherwise, the empty
        string.
      </td>
    </tr>
    <tr>
      <td><code>ctrlKey</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> if the control key was down when the event was fired.
        <code>false</code> otherwise.
      </td>
    </tr>
    <tr>
      <td><code>shiftKey</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> if the shift key was down when the event was fired.
        <code>false</code> otherwise.
      </td>
    </tr>
    <tr>
      <td><code>altKey</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> if the alt key was down when the event was fired.
        <code>false</code> otherwise.
      </td>
    </tr>
    <tr>
      <td><code>metaKey</code> {{readonlyInline}}</td>
      <td>boolean</td>
      <td>
        <code>true</code> if the meta key was down when the event was fired.
        <code>false</code> otherwise.
      </td>
    </tr>
  </tbody>
</table>

## Примечания

Chrome не запускает событие `keypress` для известных сочетаний клавиш ([reference](https://bugs.chromium.org/p/chromium/issues/detail?id=13891#c50)). Какие сочетания клавиш известны, зависит от системы пользователя. Используйте событие `keydown` для реализации сочетаний клавиш.

## Связанные события

- [`keydown`](/ru/docs/Web/Events/keydown)
- [`keyup`](/ru/docs/Web/Events/keyup)
- [`keypress`](/ru/docs/Web/API/Element/keypress_event)
- [`input`](/ru/docs/Web/Events/input)

## Пример

```html
<!doctype html>
<html>
  <head>
    <script>
      "use strict";

      document.addEventListener("keypress", (event) => {
        const keyName = event.key;

        alert("keypress event\n\n" + "key: " + keyName);
      });
    </script>
  </head>
  <body></body>
</html>
```
