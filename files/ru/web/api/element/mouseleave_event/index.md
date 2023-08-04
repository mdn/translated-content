---
title: mouseleave
slug: Web/API/Element/mouseleave_event
---

{{APIRef}}

Событие `mouseleave` срабатывает, когда курсор манипулятора (обычно мыши) перемещается за границы элемента.

`mouseleave` `и` {{event('mouseout')}} схожи, но отличаются тем, что `mouseleave` не всплывает, а `mouseout` всплывает.
Это значит, что `mouseleave` срабатывает, когда курсор выходит за границы элемента _и_ всех его дочерних элементов, в то время как `mouseout` срабатывает, когда курсор покидает границы элемента _или_ одного из его дочерних элементов (даже если курсор все ещё находится в пределах элемента).

| ![mouseenter.png](/@api/deki/files/5910/=mouseleave.png)                                                                                                                                                                                                                          | ![mouseover.png](/@api/deki/files/5911/=mouseout.png)                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Одно `mouseleave` событие шлётся каждому элементу в иерархии в момент выхода курсора за их границы. Здесь 4 события рассылаются четырём элементам в иерархии когда курсор передвигается от текста к области за границей самого внешнего div элемента представленного на картинке. | Одно единственное `mouseout` событие шлётся самому глубоколежащему элементу в DOM дереве, затем оно поднимается вверх по иерархии пока не будет отменено обработчиком или не достигнет корня. |

## Общая информация

- Спецификация
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-mouseleave)
- Интерфейс
  - : {{domxref('MouseEvent')}}
- Bubbles
  - : Нет
- Отменяемое
  - : Нет
- Цель
  - : {{cssxref('Element')}}
- Действие по умолчанию
  - : Нет

## Свойства

| Свойство                           | Тип                        | Описание                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | {{domxref("EventTarget")}} | Целевой элемент события (вышележащий элемент в DOM дереве).                                                                                                                                                                                                                                                                                                                                                          |
| `type` {{readonlyInline}}          | {{domxref("DOMString")}}   | Тип события.                                                                                                                                                                                                                                                                                                                                                                                                         |
| `bubbles` {{readonlyInline}}       | Boolean                    | Поднимается ли событие вверх как принято или нет                                                                                                                                                                                                                                                                                                                                                                     |
| `cancelable` {{readonlyInline}}    | `Boolean`                  | Является ли событие отменяемым или нет?                                                                                                                                                                                                                                                                                                                                                                              |
| `view` {{readonlyInline}}          | {{domxref("WindowProxy")}} | {{domxref("document.defaultView")}} (`window` объекта document)                                                                                                                                                                                                                                                                                                                                                      |
| `detail` {{readonlyInline}}        | `long` (`float`)           | 0.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `currentTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | Целевой узел (элемент), который используется обработчиком события.                                                                                                                                                                                                                                                                                                                                                   |
| `relatedTarget` {{readonlyInline}} | {{domxref("EventTarget")}} | Для `mouseover`, `mouseout`, `mouseenter` и `mouseleave` событий: цель дополнительного события (`mouseleave` цель в случае наступления `mouseenter` события). `null` иначе.                                                                                                                                                                                                                                          |
| `screenX` {{readonlyInline}}       | long                       | X координата указателя мыши в глобальных (относительно экрана) координатах.                                                                                                                                                                                                                                                                                                                                          |
| `screenY` {{readonlyInline}}       | long                       | Y координата указателя мыши в глобальных (относительно экрана) координатах.                                                                                                                                                                                                                                                                                                                                          |
| `clientX` {{readonlyInline}}       | long                       | X координата указателя мыши в локальных (относительно DOM содержимого) координатах.                                                                                                                                                                                                                                                                                                                                  |
| `clientY` {{readonlyInline}}       | long                       | Y координата указателя мыши в локальных (относительно DOM содержимого) координатах.                                                                                                                                                                                                                                                                                                                                  |
| `button` {{readonlyInline}}        | unsigned short             | Всегда 0, так как нажатие любой кнопки не может произвести это событие (mouse movement does).                                                                                                                                                                                                                                                                                                                        |
| `buttons` {{readonlyInline}}       | unsigned short             | The buttons depressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are depressed, returns the logical sum of the values. E.g., if Left button and Right button are depressed, returns 3 (=1 \| 2). [More info](/ru/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                      | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                                                                                                                       |
| `ctrlKey` {{readonlyInline}}       | boolean                    | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                      |
| `shiftKey` {{readonlyInline}}      | boolean                    | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                        |
| `altKey` {{readonlyInline}}        | boolean                    | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                          |
| `metaKey` {{readonlyInline}}       | boolean                    | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                         |

## Примеры

The [`mouseout`](/ru/docs/Web/Events/mouseout#Example) documentation has an example illustrating the difference between `mouseout` and `mouseleave`.

The following example illustrates how to use `mouseout`, to simulate the principle of event delegation for the mouseleave event.

```html
<ul id="test">
  <li>
    <ul class="leave-sensitive">
      <li>item 1-1</li>
      <li>item 1-2</li>
    </ul>
  </li>
  <li>
    <ul class="leave-sensitive">
      <li>item 2-1</li>
      <li>item 2-2</li>
    </ul>
  </li>
</ul>

<script>
  var delegationSelector = ".leave-sensitive";

  document.getElementById("test").addEventListener(
    "mouseout",
    function (event) {
      var target = event.target,
        related = event.relatedTarget,
        match;

      // search for a parent node matching the delegation selector
      while (
        target &&
        target != document &&
        !(match = matches(target, delegationSelector))
      ) {
        target = target.parentNode;
      }

      // exit if no matching node has been found
      if (!match) {
        return;
      }

      // loop through the parent of the related target to make sure that it's not a child of the target
      while (related && related != target && related != document) {
        related = related.parentNode;
      }

      // exit if this is the case
      if (related == target) {
        return;
      }

      // the "delegated mouseleave" handler can now be executed
      // change the color of the text
      target.style.color = "orange";
      // reset the color after a small amount of time
      setTimeout(function () {
        target.style.color = "";
      }, 500);
    },
    false,
  );

  // function used to check if a DOM element matches a given selector
  // the following code can be replaced by this IE8 compatible function: https://gist.github.com/2851541
  function matches(elem, selector) {
    // the matchesSelector is prefixed in most (if not all) browsers
    return elem.matchesSelector(selector);
  }
</script>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- {{Event("mousedown")}}
- {{Event("mouseup")}}
- {{Event("mousemove")}}
- {{Event("click")}}
- {{Event("dblclick")}}
- {{Event("mouseover")}}
- {{Event("mouseout")}}
- {{Event("mouseenter")}}
- {{Event("mouseleave")}}
- {{Event("contextmenu")}}
