---
title: Сравнение разных целей событий
slug: Web/API/Event/Comparison_of_Event_Targets
l10n:
  sourceCommit: f0f30c318c2a318552a753759fa0a09f6690f2a5
---

{{APIRef("DOM")}}

Легко запутаться в том, какую цель события (англ. _event target_) следует использовать при написании обработчика. В этой статье разъяснено использование свойств, связанных с целями событий.

Существуют 5 свойств, связанных с целями событий:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Свойство</th>
      <th>Определено&nbsp;в</th>
      <th>Назначение</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/ru/docs/Web/API/Event/target">event.target</a></code>
      </td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface">DOM Event Interface</a>
      </td>
      <td>
        DOM-элемент слева от вызова этого события.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ru/docs/Web/API/Event/currentTarget">event.currentTarget</a></code>
      </td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface">DOM Event Interface</a>
      </td>
      <td>
        Цель <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventTarget"><code>EventTarget</code></a>, слушатели <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventListener"><code>EventListeners</code></a> которой в настоящее время обрабатываются. По мере того, как происходит захват и всплытие событий, это значение изменяется.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ru/docs/Web/API/MouseEvent/relatedTarget">event.relatedTarget</a></code>
      </td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-MouseEvent">DOM MouseEvent Interface</a>
      </td>
      <td>Определяет вторичную цель для события.</td>
    </tr>
    <tr>
      <td>
        <code><a href="/ru/docs/Web/API/Event/explicitOriginalTarget">event.explicitOriginalTarget</a></code>
      </td>
      <td>
        <a href="https://searchfox.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} Если по какой-либо причине (кроме анонимного пересечения границ элемента) цель события была изменена, то будет содержать первоначальную цель. Например, события мыши перенацеливаются на их родительский узел, когда они встречаются над текстовыми узлами ([Firefox bug 185889](https://bugzil.la/185889)). В этом случае <code>.target</code> указывает на родителя, а <code>.explicitOriginalTarget</code> указывает на текстовый узел.<br />
        <code>.explicitOriginalTarget</code> никогда не будет содержать анонимный контент в отличие от <code>.originalTarget</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/ru/docs/Web/API/Event/originalTarget">event.originalTarget</a></code>
      </td>
      <td>
        <a href="https://searchfox.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} Первоначальная цель события до любых изменений.
      </td>
    </tr>
    <tr>
      <td>event.composedTarget</td>
      <td>
        <a href="https://searchfox.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} Первоначальная ненативная цель события до всплытия из Shadow DOM.
      </td>
    </tr>
  </tbody>
</table>

### Использование `explicitOriginalTarget` и `originalTarget`

> **Примечание:** Эти свойства доступны только в браузерах на базе Mozilla.

### Примеры

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Сравнение разных целей событий</title>
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
            Первоначальная цель, отправляющая событие
            <small>event.target</small>
          </td>
          <td class="standard">
            Цель, слушатель события которой обрабатывает
            <small>event.currentTarget</small>
          </td>
          <td class="standard">
            Определяет другой элемент (если он есть), участвующий в событии
            <small>event.relatedTarget</small>
          </td>
          <td class="non-standard">
            Если по какой-то причине произошло изменение цели события, то
            <small>event.explicitOriginalTarget</small> содержит цель до
            изменений (никогда не содержит анонимных целей)
          </td>
          <td class="non-standard">
            Если по какой-то причине произошло изменение цели события, то
            <small>event.originalTarget</small> содержит цель до изменений
            (может содержать анонимные цели)
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

Свойство `relatedTarget` для события `mouseover` содержит узел, над которым ранее была указатель мыши. Для события `mouseout` оно содержит узел, к которому движется мышь.

| Тип&nbsp;события | [event.target](/ru/docs/Web/API/Event/target) | [event.relatedTarget](/ru/docs/Web/API/MouseEvent/relatedTarget) |
| ---------------- | --------------------------------------------- | ---------------------------------------------------------------- |
| `mouseover`      | цель, в которую входит указатель              | цель, из которой выходит указатель                               |
| `mouseout`       | цель, из которой выходит указатель            | цель, в которую входит указатель                                 |

#### Пример

```xml
<hbox id="outer">
  <hbox id="inner"
        onmouseover="dump('mouseover ' + event.relatedTarget.id + ' > ' + event.target.id + '\n');"
        onmouseout="dump('mouseout  ' + event.target.id + ' > ' + event.relatedTarget.id + '\n');"
        style="margin: 100px; border: 10px solid black; width: 100px; height: 100px;" />
</hbox>
```
