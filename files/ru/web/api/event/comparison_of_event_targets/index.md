---
title: Сравнение разных Event Targets
slug: Web/API/Event/Comparison_of_Event_Targets
---

{{ ApiRef() }}

### Event targets

Легко запутаться в том, какую цель (target) следует изучить при написании обработчика событий. В этой статье разъяснено использование свойств target.

Существуют 5 целей для рассмотрения:

<table class="standard-table">
  <tbody>
    <tr>
      <th>Property</th>
      <th>Defined in</th>
      <th>Purpose</th>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/API/Event/target"
          >event.target</a
        >
      </td>
      <td>
        <a
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        <p>Элемент DOM слева от вызова этого события, например:</p>
        <pre class="eval"><em>element</em>.dispatchEvent(<em>event</em>)
</pre>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/API/Event/currentTarget"
          >event.currentTarget</a
        >
      </td>
      <td>
        <a
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        <a
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventTarget"
          ><code>EventTarget</code></a
        >, чьи
        <a
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventListener"
          ><code>EventListeners</code></a
        >
        в настоящее время обрабатываются. По мере того, как происходит захват и
        всплытие событий, это значение изменяется.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/ru/docs/Web/API/MouseEvent/relatedTarget"
          >event.relatedTarget</a
        >
      </td>
      <td>
        <a
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-MouseEvent"
          >DOM MouseEvent Interface</a
        >
      </td>
      <td>Определяет вторичную цель для события.</td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/API/Event/explicitOriginalTarget"
          >event.explicitOriginalTarget</a
        >
      </td>
      <td>
        <a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} Если по какой-либо причине событие
        было перенацелено, кроме анонимного пересечения границ, событие будет
        установлено на цель до перенацеливания. Например, события мыши
        перенацеливаются на их родительский узел, когда они встречаются над
        текстовыми узлами ({{Bug ("185889")}}), и в этом случае
        <code>.target</code> покажет на родителя и
        <code>.explicitOriginalTarget</code> покажет на текстовый узел.<br />В
        отличие от <code>.originalTarget</code> —
        <code>.explicitOriginalTarget</code> никогда не будет содержать
        анонимный контент.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/ru/docs/Web/API/Event/originalTarget"
          >event.originalTarget</a
        >
      </td>
      <td>
        <a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} Первоначальная цель события перед
        любым перенацеливанием. Подробнее см.
        <a
          href="/ru/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting"
          >Анонимный контент#Event_Flow_and_Targeting</a
        >.
      </td>
    </tr>
  </tbody>
</table>

### Использование `explicitOriginalTarget` и `originalTarget`

> **Note:** These properties are only available in Mozilla-based browsers.

### Примеры

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Comparison of Event Targets</title>
    <style>
      table {
        border-collapse: collapse;
        height: 150px;
        width: 100%;
      }
      td {
        border: 1px solid #ccc;
        font-weight: bold;
        padding: 5px;
        min-height: 30px;
      }
      .standard {
        background-color: #99ff99;
      }
      .non-standard {
        background-color: #902d37;
      }
    </style>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <td class="standard">
            Изначальная цель, отправляющая событие <small>event.target</small>
          </td>
          <td class="standard">
            Цель, кто обрабатывает события <small>event.currentTarget</small>
          </td>
          <td class="standard">
            Идентифицировать другой элемент (если он есть), участвующий в
            событии <small>event.relatedTarget</small>
          </td>
          <td class="non-standard">
            Если по какой-то причине произошло перенацеливание события
            <small>event.explicitOriginalTarget</small> содержит цель перед
            перенацеливанием (никогда не содержит анонимных целей)
          </td>
          <td class="non-standard">
            Если по какой-то причине произошло перенацеливание события
            <small>event.originalTarget</small> содержит цель перед
            перенацеливанием (может содержать анонимные цели)
          </td>
        </tr>
      </thead>
      <tr>
        <td id="target"></td>
        <td id="currentTarget"></td>
        <td id="relatedTarget"></td>
        <td id="explicitOriginalTarget"></td>
        <td id="originalTarget"></td>
      </tr>
    </table>
    <p>
      Нажав на текст, вы увидите разницу между explicitOriginalTarget,
      originalTarget и target
    </p>
    <script>
      function handleClicks(e) {
        document.getElementById("target").innerHTML = e.target;
        document.getElementById("currentTarget").innerHTML = e.currentTarget;
        document.getElementById("relatedTarget").innerHTML = e.relatedTarget;
        document.getElementById("explicitOriginalTarget").innerHTML =
          e.explicitOriginalTarget;
        document.getElementById("originalTarget").innerHTML = e.originalTarget;
      }

      function handleMouseover(e) {
        document.getElementById("target").innerHTML = e.target;
        document.getElementById("relatedTarget").innerHTML = e.relatedTarget;
      }

      document.addEventListener("click", handleClicks, false);
      document.addEventListener("mouseover", handleMouseover, false);
    </script>
  </body>
</html>
```

### Использование `target` и `relatedTarget`

Свойство `relatedTarget` для события `mouseover` содержит узел, над которым ранее была указана мышь. Для события `mouseout` он удерживает узел, к которому движется мышь.

| Тип события | [event.target](/ru/docs/Web/API/Event/target) | [event.relatedTarget](/ru/docs/Web/API/MouseEvent/relatedTarget) |
| ----------- | --------------------------------------------- | ---------------------------------------------------------------- |
| `mouseover` | EventTarget, в который входим указателем      | EventTarget, из которого выходим указателем                      |
| `mouseout`  | EventTarget, из которого выходим указателем   | EventTarget, в который входим указателем                         |

TODO: Также требуется описание событий `dragenter` и `dragexit`.

#### Пример

```xml
<hbox id="outer">
  <hbox id="inner"
        onmouseover="dump('mouseover ' + event.relatedTarget.id + ' > ' + event.target.id + '\n');"
        onmouseout="dump('mouseout  ' + event.target.id + ' > ' + event.relatedTarget.id + '\n');"
        style="margin: 100px; border: 10px solid black; width: 100px; height: 100px;" />
</hbox>
```
