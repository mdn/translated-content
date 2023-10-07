---
title: Drag Operations
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

Ниже описаны шаги, которые происходят при drag and drop операции.

> **Примечание:** Drag операции описываются в документе, используя {{domxref("DataTransfer")}} интерфейс. Этот документ не использует не{{domxref("DataTransferItem")}} интерфейс, не{{domxref("DataTransferItemList")}} интерфейс.

## `draggable` атрибуты

На веб-странице, в некоторых случаях используется поведение drag (перетаскивания) по умолчанию. Включая выделенный текст, изображения и ссылки. Когда изображение или ссылка переносятся, URL изображения или ссылки устанавливается в качестве данных drag и перетаскивание начинается. Для других элементов, они должны быть частью выделения для выполнения перетаскивания по умолчанию. Чтобы увидеть это в действии, выделите область веб-страницы, а затем нажмите и удерживайте кнопку мыши и перетащите выделение. Появится специфичный для ОС рендеринг выделенного фрагмента и будет следовать за указателем мыши при перетаскивании. Однако это поведение является только drag поведением по умолчанию, если нет обработчиков, определяющих данные для перетаскивания.

В HTML, кроме поведения по умолчанию изображений, ссылок и выделенных областей, никакие другие элементы по умолчанию не переносятся.

Для перетаскивания других HTML-элементов, должны быть выполнены три пункта :

1. Установить `[`draggable`](/ru/docs/Web/HTML/Global_attributes#draggable)="true"` на элемент, который вы хотите сделать перетаскиваемым.
2. Добавить обработчик события `{{event("dragstart")}}`.
3. [Установить данные перетаскивания](/ru/docs/Web/API/DataTransfer/setData) в обработчик выше.

Вот пример, который позволяет перетаскивать часть содержимого.

```html
<p
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</p>
```

Атрибут `[`draggable`](/ru/docs/Web/HTML/Global_attributes#draggable)` установлен в `"true"`, т.о. этот элемент становится перетаскиваемым. Если этот атрибут был опущен или установлен в `"false"`, то элемент не может быть перенесён, и вместо этого будет выбран текст.

Атрибут `[`draggable`](/ru/docs/Web/HTML/Global_attributes#draggable)` может быть использован для любого элемента, включая изображения и ссылки. Однако, для последних двух, значение по умолчанию - `true`, т.о. вы можете только использовать атрибут `[`draggable`](/ru/docs/Web/HTML/Global_attributes#draggable)` со значением `false` для отключение перетаскивания этих элементов.

> **Примечание:** Когда элемент становится перетаскиваемыми, текст или другие элементы в нем больше не могут быть выбраны обычным способом, щёлкая и перетаскивая мышью. Вместо этого пользователь должен удерживать клавишу <kbd>Alt</kbd> чтобы выбрать текст с помощью мыши или клавиатуры.

## Начало операции перетаскивания

В примере, обработчик добавлен для события {{event("dragstart")}} с использованием атрибута`{{domxref("GlobalEventHandlers.ondragstart","ondragstart")}}`.

```html
<p
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</p>
```

Когда пользователь начинает перетаскивание, запускается событие {{event("dragstart")}}.

В этом примере обработчик {{event("dragstart")}} добавлен к самому перемещаемом элементу. Однако, вы можете слушать более высокого предка, так как событие перетаскивание всплывает вверх как и большинство событий.

Внутри события {{event("dragstart")}}, вы можете указать **drag данные**, **изображение отклика**, **drag-эффекты**, все это описано ниже. Однако, обязательны только **drag данные**. (Изображение и drag-эффекты по умолчанию, подходят в большинстве ситуаций)

## Drag-данные

Все {{domxref("DragEvent","drag events")}} имеют свойство, называемое{{domxref("DragEvent.dataTransfer","dataTransfer")}}, которое содержит drag-данные (`dataTransfer` это {{domxref("DataTransfer")}} object).

Когда происходит перетаскивание, данные должны быть связаны с перетаскиванием, которое определяет, что перетаскивается. Например, при перетаскивании выделенного текста в текстовое поле данные, связанные с элементом данных перетаскивания, являются самим текстом. Аналогично, при перетаскивании ссылки на веб-странице элемент данных перетаскивания является URL-адресом ссылки.

{{domxref("DataTransfer","drag data")}} содержит два параметра, **тип** (или формат) данных, и **значение** данных. Формат это строковый тип (такой как [`text/plain`](/ru/docs/DragDrop/Recommended_Drag_Types#text) текстовых данных), значение - строка текста. Когда начинается перетаскивание, вы добавляете данные, предоставляя тип и данные. Во время перетаскивания в обработчике события для событий `{{event("dragenter")}}` и `{{event("dragover")}}` , вы используете типы данных перетаскиваемых данных, чтобы проверить, разрешено ли удаление. Например, цель drop, которая принимает ссылки, будет проверять тип [`text/uri-list`](/ru/docs/DragDrop/Recommended_Drag_Types#link). В течение события drop, обработчик будет получать данные тащат и вставить его на место.

Свойство {{domxref("DataTransfer","drag data's")}} {{domxref("DataTransfer.types","types")}} возвращает список MIME-типов {{domxref("DOMString")}}, таких как [`text/plain`](/ru/docs/DragDrop/Recommended_Drag_Types#text) или [`image/jpeg`](/ru/docs/DragDrop/Recommended_Drag_Types#image). Вы также можете создавать свои собственные типы. Большинство основные используемых типов описаны в [Recommended Drag Types](/ru/docs/DragDrop/Recommended_Drag_Types).

Перетаскивание может включать элементы данных нескольких различных типов. Это позволяет предоставлять данные в более специфических типах, часто пользовательских, но по предоставляет резервные данные для drop, которые не поддерживают более специфические типы. Как правило, наименее специфичным типом будут обычные текстовые данные, использующие тип [`text/plain`](/ru/docs/DragDrop/Recommended_Drag_Types#text). Эти данные будут простым текстовым представлением.

Установка элементов drag-данных {{domxref("DragEvent.dataTransfer","dataTransfer")}}, используя метод {{domxref("DataTransfer.setData","setData()")}}. Требуется два аргумента: тип данных и значение данных. Например:

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

Здесь, значение - "Text to drag", формат - [`text/plain`](/ru/docs/DragDrop/Recommended_Drag_Types#text).

Вы можете предусмотреть данные в нескольких форматах. Сделаем это, вызовем метод {{domxref("DataTransfer.setData","setData()")}} несколько раз с различными форматами. Вы должны вызывать его с форматами от большей специфичности к меньшей.

```js
const dt = event.dataTransfer;
dt.setData("application/x.bookmark", bookmarkString);
dt.setData("text/uri-list", "https://www.mozilla.org");
dt.setData("text/plain", "https://www.mozilla.org");
```

Добавлены данные трёх различных форматов. Первый тип - `application/x.bookmark`, пользовательский тип.Другие приложения не поддерживают данный тип, но вы можете использовать пользовательский тип для перетаскивания между областями в одном приложение или на одной странице.

Предоставляя данные и в других типах, мы также можем поддерживать перетаскивание в другие приложения в менее специфичных формах. Тип `application/x.bookmark` может предоставлять данные с более подробной информацией для использования в приложении, в то время как другие типы могут включать только один URL-адрес или текстовую версию.

Обратите внимание, что и [`text/uri-list`](/ru/docs/DragDrop/Recommended_Drag_Types#link) и [`text/plain`](/ru/docs/DragDrop/Recommended_Drag_Types#text) содержат одни и те же данные в этом примере. Это часто бывает так, но это не обязательно.

Если вы попытаетесь добавить данные дважды с тем же форматом, новые данные заменят старые данные, но в той же позиции в списке типов, что и старые данные.

Вы можете очистить данные, используя метод {{domxref("DataTransfer.clearData","clearData()")}}, который принимает один аргумент: тип данных для удаления.

```js
event.dataTransfer.clearData("text/uri-list");
```

Аргумент `type` в методе {{domxref("DataTransfer.clearData","clearData()")}} опционален. Если `type` не указан, данные, связанные со всеми типами, удаляются. Если перетаскивание не содержит элементов данных перетаскивания или все элементы были впоследствии очищены, то перетаскивание не произойдёт.

## Настройка изображения отклика drag

Когда происходит перетаскивание, полупрозрачное изображение генерируется из цели перетаскивания (событие "{{event("dragstart")}}" элемента срабатывает), и следует за указателем пользователя во время перетаскивания. Это изображение создаётся автоматически, поэтому вам не нужно создавать его самостоятельно. Однако вы можете использовать {{domxref("DataTransfer.setDragImage","setDragImage()")}} для задания пользовательского изображения отклика перетаскивания.

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

Необходимы три аргумента. Первый - это ссылка на изображение. Эта ссылка обычно относится к элементу `<img>`, но также может относиться к элементу `<canvas>` или любому другому элементу. Изображение отклика будет генерироваться из того, как изображение выглядит на экране, для изображений они будут нарисованы в их первоначальном размере. Второй и третий аргументы метода {{domxref("DataTransfer.setDragImage","setDragImage()")}} - это смещения, в которых изображение должно появляться относительно указателя мыши.

Также можно использовать изображения и canvas, которых нет в документе. Этот метод полезен при рисовании пользовательских изображений перетаскивания с помощью элемента canvas, как показано в следующем примере:

```js
function dragWithCustomImage(event) {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 50;

  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();

  const dt = event.dataTransfer;
  dt.setData("text/plain", "Data to Drag");
  dt.setDragImage(canvas, 25, 25);
}
```

В этом примере мы делаем один canvas перетаскивания. Поскольку размер холста составляет 50×50 пикселей, мы используем смещение половины этого (25), чтобы изображение было центрировано на указателе мыши.

## Drag эффекты

При перетаскивании можно выполнить несколько операций. Операция `copy` используется для указания на то, что перетаскиваемые данные будут скопированы из текущего местоположения в место перетаскивания. Операция `move` используется для указания на то, что перетаскиваемые данные будут перемещены, а операция `link` используется для указания на то, что между исходным и удаляемым местоположениями будет создана некоторая форма связи или соединения.

Вы можете указать, какая из трёх операций разрешена для источника перетаскивания, установив свойство {{domxref("DataTransfer.effectAllowed","effectAllowed")}} в обработчике событий`{{event("dragstart")}}`.

```js
event.dataTransfer.effectAllowed = "copy";
```

В этом примере разрешена только **копия**.

Вы можете комбинировать значения различными способами:

- `none`
  - : никакая операция не разрешена
- `copy`
  - : только `copy`
- `move`
  - : только `move`
- `link`
  - : только `link`
- `copyMove`
  - : только `copy` или `move`
- `copyLink`
  - : только `copy` или `link`
- `linkMove`
  - : только `link` или `move`
- `all`
  - : только `copy`, `move`, или `link`
- uninitialized
  - : Значение по умолчанию `all`.

Обратите внимание, что эти значения должны использоваться так, как указано выше. Например, установка свойства {{domxref("DataTransfer.effectAllowed","effectAllowed")}} на `copyMove` позволяет выполнять операцию копирования или перемещения, но не позволяет пользователю выполнять операцию связывания. Если вы не измените свойство {{domxref("DataTransfer.effectAllowed","effectAllowed")}}, то любая операция разрешена, как и со значением '`all`'. Поэтому вам не нужно настраивать это свойство, если вы не хотите исключить определённые типы.

Во время операции перетаскивания, обработчик для событий `{{event("dragenter")}}` или `{{event("dragover")}}` может проверить свойство {{domxref("DataTransfer.effectAllowed","effectAllowed")}} , какие операции разрешены. Связанное свойство, {{domxref("DataTransfer.dropEffect","dropEffect")}}, должно быть установлено в пределах одного из этих событий, чтобы указать, какая единственная операция должна быть выполнена. Допустимые значения для {{domxref("DataTransfer.dropEffect","dropEffect")}} - `none`, `copy`, `move`, или `link`. Комбинированные значения для этого свойства не используются.

С событиями `{{event("dragenter")}}` и `{{event("dragover")}}`, свойство {{domxref("DataTransfer.dropEffect","dropEffect")}} инициализируется в соответствии с запросом пользователя. Пользователь может изменить желаемый эффект, нажав клавиши-модификаторы. Хотя точные используемые клавиши различаются в зависимости от платформы, обычно клавиши <kbd>Shift</kbd> и <kbd>Control</kbd> используются для переключения между копированием, перемещением и связыванием. Указатель мыши изменится, чтобы указать, какая операция требуется. Например, для `copy` курсор может появиться со знаком плюс рядом с ним.

Вы можете изменять свойство {{domxref("DataTransfer.dropEffect","dropEffect")}} во время событий `{{event("dragenter")}}` или `{{event("dragover")}}`, например, определённая drop-цель поддерживает только определённые операции. Вы можете изменить свойство {{domxref("DataTransfer.dropEffect","dropEffect")}}, чтобы переопределить действие пользователя, и обеспечить выполнение специфичной операции перетаскивания при её наступлении. Обратите внимание, что этот эффект должен быть указан в списке свойств {{domxref("DataTransfer.effectAllowed","effectAllowed")}}. В противном случае ему будет присвоено другое допустимое значение.

```js
event.dataTransfer.dropEffect = "copy";
```

В этом примере выполняется эффект копирования.

Вы можете использовать значение `none`, чтобы указать, что в этом месте не допускается удаление, хотя в этом случае лучше не отменять событие.

В событиях `{{event("drop")}}` и `{{event("dragend")}}`, вы можете проверить свойства {{domxref("DataTransfer.dropEffect","dropEffect")}} для определения того, какой эффект был в конечном итоге выбран. Если выбран эффект "`move`",то исходные данные должны быть удалены из источника перетаскивания в событии`{{event("dragend")}}`.

## Указание drop-целей

Обработчик для событий `{{event("dragenter")}}` и `{{event("dragover")}}` используются для указания допустимых drop-целей, то есть мест, где могут быть сброшены перетаскиваемые элементы. Большинство областей веб-страницы или приложения не являются допустимыми местами для сброса данных. Таким образом, обработка этих событий по умолчанию не допускает сброса перетаскиваемых данных.

Если вы хотите разрешить сброс переносимых данных, вы должны предотвратить обработку по умолчанию, отменив оба события `dragenter` и `dragover`. Это можно сделать, либо вернув `false` из определённых атрибутом обработчика событий, либо вызвав метод {{domxref("Event.preventDefault","preventDefault()")}} событие. Последнее может быть более осуществимо в функции, определённой в отдельном скрипте.

```html
<div ondragover="return false">
  <div ondragover="event.preventDefault()"></div>
</div>
```

Вызывая метод {{domxref("Event.preventDefault","preventDefault()")}} во время обоих событий `{{event("dragenter")}}` и `{{event("dragover")}}` укажите, что падение разрешено в этом месте. Однако обычно вы захотите вызвать метод {{domxref("Event.preventDefault","preventDefault()")}} события только в определённых ситуациях (например, только при перетаскивании ссылки).

Для этого вызовите функцию, которая проверяет условие и отменяет событие только при его выполнении. Если условие не выполнено, не отменяйте событие, и сброс перетаскиваемых данных не произойдёт, если пользователь отпустит кнопку мыши.

Наиболее распространённым является принятие или отклонение сброса в зависимости от типа данных перетаскивания при передаче данных — например, разрешение для изображений, ссылок или и того, и другого. Для этого вы можете проверить свойство {{domxref("DataTransfer.types","types")}} события {{domxref("DragEvent.dataTransfer","dataTransfer")}} (свойство). Свойство {{domxref("DataTransfer.types","types")}} возвращает массив из строк, добавленных при начале перетаскивания, в порядке от наиболее значимого к наименее значимому.

```js
function doDragOver(event) {
  const isLink = event.dataTransfer.types.includes("text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

В этом примере мы используем метод `includes` чтобы проверить, присутствует ли тип [`text/uri-list`](/ru/docs/DragDrop/Recommended_Drag_Types#link) в списке типов. Если это так, мы отменим событие, так что сброс становится разрешён. Если перетаскиваемые данные не содержат ссылки, событие не будет отменено, и сброс не может произойти в этом месте.

Вы также можете установить либо свойство {{domxref("DataTransfer.effectAllowed","effectAllowed")}}, либо свойство{{domxref("DataTransfer.dropEffect","dropEffect")}}, либо оба одновременно, если вы хотите указать более конкретные сведения о типе операции, которая будет выполнена. Естественно, изменение любого свойства не будет иметь никакого эффекта, если вы не отмените событие.

## Drop Feedback

There are several ways in which you can indicate to the user that a drop is allowed at a certain location. The mouse pointer will update as necessary depending on the value of the {{domxref("DataTransfer.dropEffect","dropEffect")}} property.

Although the exact appearance depends on the user's platform, typically a plus sign icon will appear for a '`copy`' for example, and a 'cannot drop here' icon will appear when a drop is not allowed. This mouse pointer feedback is sufficient in many cases.

However, you can also update the user interface with an insertion point or highlight as needed. For simple highlighting, you can use the `:-moz-drag-over` CSS pseudoclass on a drop target.

```css
.droparea:-moz-drag-over {
  outline: 1px solid black;
}
```

In this example, the element with the class `droparea` will receive a 1 pixel black outline while it is a valid drop target, that is, if the {{domxref("Event.preventDefault","preventDefault()")}} method was called during the `{{event("dragenter")}}` event.

> **Примечание:** You must cancel the `{{event("dragenter")}}` event for this pseudoclass to apply, as this state is not checked for the `{{event("dragover")}}` event.

For more complex visual effects, you can also perform other operations during the `{{event("dragenter")}}` event. For example, by inserting an element at the location where the drop will occur. This might be an insertion marker, or an element that represents the dragged element in its new location. To do this, you could create an [image](/ru/docs/XUL/image) or [separator](/ru/docs/XUL/separator) element and simply insert it into the document during the `{{event("dragenter")}}` event.

The `{{event("dragover")}}` event will fire at the element the mouse is pointing at. Naturally, you may need to move the insertion marker around a `{{event("dragover")}}` event as well. You can use the event's {{domxref("MouseEvent.clientX","clientX")}} and {{domxref("MouseEvent.clientY","clientY")}} properties as with other mouse events to determine the location of the mouse pointer.

Finally, the `{{event("dragleave")}}` event will fire at an element when the drag leaves the element. This is the time when you should remove any insertion markers or highlighting. You do not need to cancel this event. Any highlighting or other visual effects specified using the `:-moz-drag-over` pseudoclass will be removed automatically. The `{{event("dragleave")}}` event will always fire, even if the drag is cancelled, so you can always ensure that any insertion point cleanup can be done during this event.

## Performing a Drop

When the user releases the mouse, the drag and drop operation ends.

If the mouse is released over an element that is a valid drop target, that is, one that cancelled the last `{{event("dragenter")}}` or `{{event("dragover")}}` event, then the drop will be successful, and a `{{event("drop")}}` event will fire at the target. Otherwise, the drag operation is cancelled, and no `{{event("drop")}}` event is fired.

During the `{{event("drop")}}` event, you should retrieve that data that was dropped from the event and insert it at the drop location. You can use the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine which drag operation was desired.

As with all drag-related events, the event's `{{domxref("DataTransfer","dataTransfer")}}` property will hold the data that is being dragged. The {{domxref("DataTransfer.getData","getData()")}} method may be used to retrieve the data again.

```js
function onDrop(event) {
  const data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

The {{domxref("DataTransfer.getData","getData()")}} method takes one argument, the type of data to retrieve. It will return the string value that was set when {{domxref("DataTransfer.setData","setData()")}} was called at the beginning of the drag operation. An empty string will be returned if data of that type does not exist. (Naturally, though, you would likely know that the right type of data was available, as it was previously checked during a `{{event("dragover")}}` event.)

In the example here, once the data has been retrieved, we insert the string as the textual content of the target. This has the effect of inserting the dragged text where it was dropped, assuming that the drop target is an area of text such as a `p` or `div` element.

In a web page, you should call the {{domxref("Event.preventDefault","preventDefault()")}} method of the event if you have accepted the drop, so that the browser's default handling is not triggered by the dropped data as well. For example, when a link is dragged to a web page, Firefox will open the link. By cancelling the event, this behavior will be prevented.

You can retrieve other types of data as well. If the data is a link, it should have the type [`text/uri-list`](/ru/docs/DragDrop/Recommended_Drag_Types#link). You could then insert a link into the content.

```js
function doDrop(event) {
  const lines = event.dataTransfer.getData("text/uri-list").split("\n");
  lines
    .filter((line) => !line.startsWith("#"))
    .forEach((line) => {
      const link = document.createElement("a");
      link.href = line;
      link.textContent = line;
      event.target.appendChild(link);
    });
  event.preventDefault();
}
```

This example inserts a link from the dragged data. As the name implies, the [`text/uri-list`](/ru/docs/DragDrop/Recommended_Drag_Types#link) type actually may contain a list of URLs, each on a separate line. The above code uses [`split`](/ru/docs/JavaScript/Reference/Global_Objects/String/split) to break the string into lines, then iterates over the list of lines, and inserts each as a link into the document. (Note also that links starting with a number sign (`#`) are skipped, as these are comments.)

For simple cases, you can use the special type `URL` just to retrieve the first valid URL in the list. For example:

```js
const link = event.dataTransfer.getData("URL");
```

This eliminates the need to check for comments or iterate through lines yourself. However, it is limited to only the first URL in the list.

The `URL` type is a special type. It is used only as a shorthand, and it does not appear within the list of types specified in the {{domxref("DataTransfer.types","types")}} property.

Sometimes you may support some different formats, and you want to retrieve the data that is most specific that is supported. In the following example, three formats are supported by a drop target.

The following example returns the data associated with the best-supported format:

```js
function doDrop(event) {
  const supportedTypes = [
    "application/x-moz-file",
    "text/uri-list",
    "text/plain",
  ];
  const types = event.dataTransfer.types.filter((type) =>
    supportedTypes.includes(type),
  );
  if (types.length) {
    const data = event.dataTransfer.getData(types[0]);
  }
  event.preventDefault();
}
```

## Окончание перетаскивания

Как только перетаскивание завершено, событие `{{event("dragend")}}` запускается в источнике перетаскивания (тот же элемент, который получил событие `{{event("dragstart")}}`). Это событие сработает, если перетаскивание было успешным\[1] или если оно было отменено. Однако вы можете использовать свойство {{domxref("DataTransfer.dropEffect","dropEffect")}} для определения, какая операция удаления произошла.

Если свойство {{domxref("DataTransfer.dropEffect","dropEffect")}} имеет значение `none` во время события `{{event("dragend")}}`, то перетаскивание было отменено. В противном случае эффект указывает, какая операция была выполнена. Источник может использовать эту информацию после операции перемещения для удаления перетаскиваемого элемента из старого расположения. Свойство {{domxref("DataTransfer.mozUserCancelled","mozUserCancelled")}} будет присвоено значение `true`, если пользователь отменил перетаскивание (нажав <kbd>Escape</kbd>), и `false` если перетаскивание было отменено по другим причинам, таким как недопустимая цель перетаскивания, или если оно было успешным.

Сброс может произойти внутри того же окна или над другим приложением. Событие `{{event("dragend")}}` будет срабатывать всегда, независимо от этого. Свойство события {{domxref("MouseEvent.screenX","screenX")}} и {{domxref("MouseEvent.screenY","screenY")}} будут установлены в координаты экрана, где произошёл сброс.

Когда событие `{{event("dragend")}}` завершило распространение, операция перетаскивания завершена.

\[1]: В Gecko, {{event("dragend")}} не отправляется, если исходный узел движется или удаляется во время перетаскивания (например, при сбрасывании или {{event("dragover")}}). [Bug 460801](https://bugzilla.mozilla.org/show_bug.cgi?id=460801)

## Смотрите также

- [HTML Drag and Drop API (Overview)](/ru/docs/Web/API/HTML_Drag_and_Drop_API)
- [Dragging and Dropping Multiple Items](/ru/docs/Web/Guide/HTML/Dragging_and_Dropping_Multiple_Items)
- [Recommended Drag Types](/ru/docs/Web/Guide/HTML/Recommended_Drag_Types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
