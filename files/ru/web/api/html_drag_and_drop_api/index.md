---
title: HTML Drag and Drop API
slug: Web/API/HTML_Drag_and_Drop_API
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Интерфейс **HTML Drag and Drop** позволяет приложениям использовать функционал перетаскивания в браузерах. Пользователь может выбрать _перетаскиваемые_ элементы мышью, перетащить к элементу _сброса_ и бросить их, отпустив кнопку мыши. Во время переноса за указателем следует полупрозрачный образ _перетаскиваемого_ элемента

При создании веб-сайтов, расширений и XUL-приложений можно настраивать, какие именно элементы можно _перетаскивать_, какую обратную связь они при этом будут создавать, и какие элементы будут создавать область _сброса_.

Данный обзор HTML Drag and Drop включает описание интерфейса, основные шаги по добавлению поддержки данного функционала в приложение, а также краткие данные о поддержке.

## События перетаскивания

HTML drag-and-drop использует {{domxref("Event","модель событий DOM")}} и _{{domxref("DragEvent","события перетаскивания")}}_ унаследованные от {{domxref("MouseEvent","событий мыши")}}. Обычно _операция перетаскивания_ начинается, когда пользователь выбирает _перетаскиваемый_ элемент, перемещает его в зону элемента _сброса_, после чего отпускает.

В ходе операции перетаскивания происходит несколько типов событий, а события {{domxref('Document/drag_event', 'drag')}} и {{domxref('Document/dragover_event', 'dragover')}} могут вызываться множество раз.

У каждого [события перетаскивания](/ru/docs/Web/API/DragEvent#event_types) есть связанный [глобальный обработчик события](/ru/docs/Web/API/DragEvent#globaleventhandlers):

| Событие                                              | Обработчик события                                           | Запускается, когда…                                                                                                                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{domxref('Document/drag_event', 'drag')}}           | {{domxref('GlobalEventHandlers.ondrag','ondrag')}}           | …длится перетаскивание элемента или выделения текста.                                                                                                                                            |
| {{domxref('Document/dragend_event', 'dragend')}}     | {{domxref('GlobalEventHandlers.ondragend','ondragend')}}     | …завершается перетаскивание (например, отпускается кнопка мыши или нажимается Escape; подробнее в [Завершение перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragend).) |
| {{domxref('Document/dragenter_event', 'dragenter')}} | {{domxref('GlobalEventHandlers.ondragenter','ondragenter')}} | …перетаскиваемый элемент попадает в допустимую цель сброса (Подробнее в [Указание целей сброса](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets).)                           |
| {{domxref('Document/dragexit_event', 'dragexit')}}   | {{domxref('GlobalEventHandlers.ondragleave','ondragexit')}}  | …элемент больше не является целью операции перетаскивания.                                                                                                                                       |
| {{domxref('Document/dragleave_event', 'dragleave')}} | {{domxref('GlobalEventHandlers.ondragleave','ondragleave')}} | …перетаскиваемый элемент покидает допустимую цель сброса.                                                                                                                                        |
| {{domxref('Document/dragover_event', 'dragover')}}   | {{domxref('GlobalEventHandlers.ondragover','ondragover')}}   | …элемент перетаскивается над допустимой целью сброса каждые несколько сотен миллисекунд                                                                                                          |
| {{domxref('Document/dragstart_event', 'dragstart')}} | {{domxref('GlobalEventHandlers.ondragstart','ondragstart')}} | …пользователь начал перетаскивать элемент. (Подробнее в [Начало операции перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragstart).)                                    |
| {{domxref('Document/drop_event', 'drop')}}           | {{domxref('GlobalEventHandlers.ondrop','ondrop')}}           | …элемент сброшен в допустимую зону сброса. (Подробнее в [Выполнение сброса](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop).)                                                      |

> **Примечание:** При перемещении файла из операционной системы в браузер ни событие `dragstart`, ни `dragend` не вызывается.

## Интерфейсы

К HTML Drag and Drop интерфейсам относятся {{domxref("DragEvent")}}, {{domxref("DataTransfer")}}, {{domxref("DataTransferItem")}} и {{domxref("DataTransferItemList")}}.

Интерфейс {{domxref("DragEvent")}} имеет конструктор и одно свойство {{domxref("DragEvent.dataTransfer","dataTransfer")}}, которое является объектом {{domxref("DataTransfer")}}.

Объекты {{domxref("DataTransfer")}} включают состояние события, такое как тип выполненного перетаскивания (вроде `copy` или `move`), данные перетаскивания (один или более элементов) и MIME-тип каждого _элемента перетаскивания_. Объекты {{domxref("DataTransfer")}} также имеют методы добавления или удаления элементов из данных о перетасивании.

Для добавления в приложение поддержки HTML Drag and Drop, следует использовать только интерфейсы {{domxref("DragEvent")}} и {{domxref("DataTransfer")}}. (Firefox поддерживает некоторые [Специфичные для Gecko расширения](#gecko_specific_interfaces) объекта {{domxref("DataTransfer")}}, но они будут работать только в Firefox.)

Каждый объект {{domxref("DataTransfer")}} содержит свойство {{domxref("DataTransfer.items","items")}}, являющееся {{domxref("DataTransferItemList","списком")}} объектов {{domxref("DataTransferItem")}}. Объект {{domxref("DataTransferItem")}} представляет собой отдельный _перетаскиваемый элемент_, каждый со свойством {{domxref("DataTransferItem.kind","kind")}} (либо `string` либо `file`) и свойство {{domxref("DataTransferItem.type","type")}} для MIME-типа данных элемента. Объект {{domxref("DataTransferItem")}} также имеет методы для получения данных о перемещаемых элементах.

Объект {{domxref("DataTransferItemList")}} содержит список объектов {{domxref("DataTransferItem")}}. Он имеет методы для добавления перетаскиваемых объектов в список, их удаления, и очистки списка.

Ключевое отличие интерфейсов {{domxref("DataTransfer")}} и {{domxref("DataTransferItem")}} заключается в том, что первый использует синхронный метод доступа к данным о перетаскиваемых объектах {{domxref("DataTransfer.getData","getData()")}}, а второй – асинхронный метод {{domxref("DataTransferItem.getAsString","getAsString()")}}.

> **Примечание:** {{domxref("DragEvent")}} и {{domxref("DataTransfer")}} широко поддерживаются десктопными браузерами. Однако, поддержка интерфейсов {{domxref("DataTransferItem")}} и {{domxref("DataTransferItemList")}} достаточно ограниченная. Более подробно можно узнать в разделе [Поддержка](#interoperability) .

### Специфичные для Gecko интерфейсы

Mozilla и Firefox поддерживают некоторые функции, которых нет в стандартной drag-and-drop модели. Это _удобные функции_, помогающие перетаскивать несколько элементов или нестроковых данных (например, файлов). Для получения дополнительной информации смотрите [Перетаскивание и Сброс нескольких элементов](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items). Дополнительно посмотрите {{domxref("DataTransfer")}} страницу справочника со всеми специфичными для Gecko [свойствами](/ru/docs/Web/API/DataTransfer#gecko_properties) и [методами](/ru/docs/Web/API/DataTransfer#gecko_methods).

## Основы

В данном разделе кратко описаны основные шаги добавления в приложение функционала drag-and-drop.

### Обозначьте, что можно _перетаскивать_

Чтобы сделать элемент _перетаскиваемым_, к нему нужно добавить атрибут [`draggable`](/ru/docs/Web/HTML/Global_attributes#draggable) и глобальный обработчик события {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}}. Пример показан в коде ниже:

```html
<script>
  function dragstart_handler(ev) {
    // Добавить id целевого элемента в объект передачи данных
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // Найти элемент по id
    const element = document.getElementById("p1");
    // Добавить обработчик события `dragstart`
    element.addEventListener("dragstart", dragstart_handler);
  });
</script>

<p id="p1" draggable="true">Данный элемент является перетаскиваемым.</p>
```

Для получения дополнительной информации смотрите:

- [Справочник атрибута `draggable`](/ru/docs/Web/HTML/Global_attributes/draggable)
- [Руководство по операциям перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#draggableattribute)

### Определите данные перетаскивания

Приложение может добавлять в операцию перетаскивания любое количество элементов данных. Каждый элемент данных — это {{domxref("DOMString","строка")}} определённого `типа`. Обычно MIME-тип равен `text/html`.

У каждого {{domxref("DragEvent","события перетаскивания")}} есть свойство {{domxref("DragEvent.dataTransfer","dataTransfer")}}, которое _содержит_ данные о событии. Это свойство (являющееся объектом {{domxref("DataTransfer")}}), также имеет методы _управления_ данными перетаскивания. Метод {{domxref("DataTransfer.setData","setData()")}} используется для добавления элемента в данные перетаскивания, как показано в следующем примере.

```js
function dragstart_handler(ev) {
  // Добавление различных типов данных перетаскивания
  ev.dataTransfer.setData("text/plain", ev.target.innerText);
  ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  ev.dataTransfer.setData(
    "text/uri-list",
    ev.target.ownerDocument.location.href,
  );
}
```

- Список общих типов данных, используемых при перетаскивании (например, текст, HTML, ссылки и файлы), смотрите в разделе [Рекомендуемые типы перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types).
- Для получения дополнительной информации, смотрите раздел [Данные перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragdata).

### Определите изображение перетаскивания

По умолчанию браузер предоставляет изображение, которое в процессе перетаскивания отображается рядом с указателем. Тем не менее, приложение может использовать сторонее изображение с помощью метода {{domxref("DataTransfer.setDragImage","setDragImage()")}}, как показано в следующем примере.

```js
function dragstart_handler(ev) {
  // Создайте изображение, чтобы использовать как изображение перетаскивания
  // Примечание: замените "example.gif" на URL-адрес реального изоражения,
  // иначе оно не будет создано и будет использоваться изображение по умолчанию
  let img = new Image();
  img.src = "example.gif";
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

Узнать больше об изображении перетаскивания можно в:

- [Настройка изображения перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragfeedback)

### Определите _эффект_ перетаскивания

Свойство {{domxref("DataTransfer.dropEffect","dropEffect")}} используется для управления обратной связью, которую пользователь получает во время операции перетаскивания. Обычно это влияет на то, какой курсор будет отображаться во время перетаскивания. Например, когда пользователь наводит указатель на цель сброса, курсор браузера может отражать тип операции, которая будет произведена.

Можно определить три эффекта:

1. **`copy`** обозначает, что перетаскиваемые данные будут скопированы из предыдущего места в место сброса.
2. **`move`** обозначает, что перетаскиваемые данные будут перемещены из предыдущего места в место сброса.
3. **`link`** обозначает, что между исходным местоположением и местом сброса будет создана некоторая форма свази.

В течение операции перетаскивания, эффекты перетаскивания могут быть изменены, чтобы обозначить, что в разных местах доступны разные эффекты.

Следующий пример демонстрирует, как использовать это свойство.

```js
function dragstart_handler(ev) {
  ev.dataTransfer.dropEffect = "copy";
}
```

Для получения дополнительной информации смотрите:

- [Эффекты перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drageffects)

### Определите _зону сброса_

По умолчанию, при сбросе на большинство элементов, браузер не производит никаких действий. Чтобы изменить это поведение и сделать элемент _зоной сброса_ или _сбрасываемым_, он должен иметь атрибуты для обработчиков событий {{domxref("GlobalEventHandlers.ondragover","ondragover")}} и {{domxref("GlobalEventHandlers.ondrop","ondrop")}}.

Следующий пример демонстрирует, как использовать эти атрибуты, а также включает основные обработчики событий для каждого атрибута.

```html
<script>
  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // Получить id цели и добавить перемещённый элемент в его DOM
    const data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

<p
  id="target"
  ondrop="drop_handler(event)"
  ondragover="dragover_handler(event)">
  Drop Zone
</p>
```

Обратите внимание, что каждый обработчик вызывает {{domxref("Event.preventDefault","preventDefault()")}}, чтобы предотвратить дополнительную обработку данного события (например, [события касания](/ru/docs/Web/API/Touch_events) или [события указателя](/ru/docs/Web/API/Pointer_events)).

Для получения дополнительной информации смотрите:

- [Указание целей сброса](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#droptargets)

### Обработайте _эффекты_ сброса

Обработчик события {{domxref("Document/drop_event", "drop")}} может по-разному обрабатывать данные перетаскивания, в зависимости от конкретного приложения.

Как правило, для извлечения и последующей обработки элементов перетаскивания, приложение использует метод {{domxref("DataTransfer.getData","getData()")}}. Кроме того, семантика приложения может отличаться в зависимости от значения {{domxref("DataTransfer.dropEffect","dropEffect")}} и состояния кнопок-модификаторов.

Следующий пример демонстрирует обработчик сброса, получающий `id` исходного элемента из данных перетаскивания и затем использует `id` для перемещения исходного элемента к элементу сброса.

```html
<script>
  function dragstart_handler(ev) {
    // Добавить id целевого элемента в объект передачи данных
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.effectAllowed = "move";
  }
  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // Получить id целевого элемента и добавить перемещаемый элемент в его DOM
    const data = ev.dataTransfer.getData("application/my-app");
    ev.target.appendChild(document.getElementById(data));
  }
</script>

<p id="p1" draggable="true" ondragstart="dragstart_handler(event)">
  This element is draggable.
</p>
<div
  id="target"
  ondrop="drop_handler(event)"
  ondragover="dragover_handler(event)">
  Drop Zone
</div>
```

Для получения дополнительной информации смотрите:

- [Выполнение сброса](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#drop)

### Завершение перетаскивания

В конце операции перетаскивания событие {{domxref("Document/dragend_event", "dragend")}} происходит у _исходного_ элемента, который был целью начала перетаскивания.

Это событие происходит независимо от того, было перетаскивание выполнено или прервано. Обработчик события {{domxref("Document/dragent_event", "dragend")}} может проверить значение свойства {{domxref("DataTransfer.dropEffect","dropEffect")}} чтобы определить, успешно ли выполнена операция перетаскивания.

Для получения дополнительной информации об обработке завершения операции перетаскивания, смотрите:

- [Завершение перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragend)

## Поддержка

Из [таблицы поддержки браузерами интерфейса DataTransferItem](/ru/docs/Web/API/DataTransferItem#browser_compatibility) видно, что поддержка drag-and-drop достаточно обширная среди десктопных браузеров (за исключением интерфейсов {{domxref("DataTransferItem")}} и {{domxref("DataTransferItemList")}}, у которых поддержка ниже). Эти данные также указывают, что среди мобильных устройств поддержка очень низкая.

## Примеры и демо

- [Копирование и перемещение элементов с помощью интерфейса `DataTransfer`](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Копирование и перемещение элементов с помощью интерфейса `DataTransferListItem`](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- Перетаскивание и сброс файлов (только Firefox): <https://jsfiddle.net/9C2EF/>
- Перетаскивание и сброс файлов (все браузеры): [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)
- Использование Drag and Drop API в проекте парковки: <https://park.glitch.me/> (Отредактировать можно [здесь](https://glitch.com/edit/#!/park))

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Операции перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Перетаскивание и сброс нескольких файлов](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [Рекомендуемые типы перетаскивания](/ru/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Информация о поддержке Drag and Drop из CanIUse](https://caniuse.com/#search=draganddrop)
