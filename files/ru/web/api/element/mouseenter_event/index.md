---
title: "Element: mouseenter event"
slug: Web/API/Element/mouseenter_event
---

{{APIRef}}

Событие **`mouseenter`** вызывается в {{domxref("Element")}} когда указательное устройство (обычно мышь) изначально перемещается так, что его горячая точка находится в пределах элемента, в котором было запущено событие.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Всплывающее</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Отменяемое</th>
      <td>Нет</td>
    </tr>
    <tr>
      <th scope="row">Интерфейс</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Свойство обработчика события</th>
      <td>
        {{domxref("GlobalEventHandlers.onmouseenter", "onmouseenter")}}
      </td>
    </tr>
  </tbody>
</table>

## Примечания по использованию

Хотя `mouseenter` похоже на {{domxref("Element/mouseover_event", "mouseover")}}, `mouseenter` отличается тем, что он не является [bubble](/ru/docs/Web/API/Event/bubbles) и не отправляется никаким потомкам, когда указатель перемещается из физического пространства одного из его потомков в его собственное физическое пространство.

![mouseenter.png](/@api/deki/files/5908/=mouseenter.png)Одно событие `mouseenter` отправляется каждому элементу иерархии при их вводе. Здесь 4 события отправляются четырём элементам иерархии, когда указатель достигает текста.![mouseover.png](/@api/deki/files/5909/=mouseover.png)Одиночное событие наведения мыши `mouseover` отправляется в самый глубокий элемент дерева DOM, затем оно всплывает в иерархии, пока не будет отменено обработчиком или не достигнет корня.

При наличии глубокой иерархии количество отправляемых событий `mouseover` может быть довольно большим и вызывать значительные проблемы с производительностью. В таких случаях лучше обрабатывать события `mouseenter`.

В сочетании с соответствующим событием `mouseleave` (которое запускается в элементе, когда мышь покидает область содержимого), событие `mouseenter` действует очень похоже на псевдокласс CSS {{cssxref(':hover')}}.

## Примеры

В документации по [`mouseover`](/ru/docs/Web/Events/mouseover#Example) есть пример иллюстрирующий различия между `mouseover` и `mouseenter`.

### mouseenter

В следующем тривиальном примере событие `mouseenter` используется для изменения границы элемента `div`, когда мышь входит в выделенное ему пространство. Затем он добавляет элемент в список с номером события `mouseenter` или `mouseleave`.

#### HTML

```html
<div id="mouseTarget">
  <ul id="unorderedList">
    <li>No events yet!</li>
  </ul>
</div>
```

#### CSS

Стилизация `div` чтобы сделать его более заметным.

```css
#mouseTarget {
  box-sizing: border-box;
  width: 15rem;
  border: 1px solid #333;
}
```

#### JavaScript

```js
var enterEventCount = 0;
var leaveEventCount = 0;
const mouseTarget = document.getElementById("mouseTarget");
const unorderedList = document.getElementById("unorderedList");

mouseTarget.addEventListener("mouseenter", (e) => {
  mouseTarget.style.border = "5px dotted orange";
  enterEventCount++;
  addListItem("This is mouseenter event " + enterEventCount + ".");
});

mouseTarget.addEventListener("mouseleave", (e) => {
  mouseTarget.style.border = "1px solid #333";
  leaveEventCount++;
  addListItem("This is mouseleave event " + leaveEventCount + ".");
});

function addListItem(text) {
  // Создать новый текстовый узел, используя предоставленный текст
  var newTextNode = document.createTextNode(text);

  // Создать новый элемент li
  var newListItem = document.createElement("li");

  // Добавить текстовый узел к элементу li
  newListItem.appendChild(newTextNode);

  // Добавить вновь созданный элемент списка в список
  unorderedList.appendChild(newListItem);
}
```

### Результат

{{EmbedLiveSample('mouseenter')}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Introduction to events](/ru/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/mousemove_event", "mousemove")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mouseover_event", "mouseover")}}
- {{domxref("Element/mouseout_event", "mouseout")}}
- {{domxref("Element/mouseenter_event", "mouseenter")}}
- {{domxref("Element/mouseleave_event", "mouseleave")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
