---
title: DataTransfer
slug: Web/API/DataTransfer
---

{{APIRef("HTML DOM")}}

Объект **DataTransfer** используется для хранения данных, перетаскиваемых мышью во время операции **drag and drop**. Он может хранить от одного до нескольких элементов данных, вне зависимости от их типа. Для получения доп. информации об операции drag and drop, см. [Drag and Drop](/En/DragDrop/Drag_and_Drop)

Объект может быть получен из свойства **dataTransfer** всех событий перетаскивания. Он не может быть отдельно создан.

## Список свойств

| Свойство                                                          | Тип                                                             |
| ----------------------------------------------------------------- | --------------------------------------------------------------- |
| [`dropEffect`](#dropEffect.28.29)                                 | [`String`](/ru/docs/JavaScript/Reference/Global_Objects/String) |
| [`effectAllowed`](#effectAllowed.28.29)                           | [`String`](/ru/docs/JavaScript/Reference/Global_Objects/String) |
| [`files`](#files.28.29)                                           | {{ domxref("FileList") }}                                       |
| [`mozCursor`](#mozCursor) {{ non-standard_inline() }}             | [`String`](/ru/docs/JavaScript/Reference/Global_Objects/String) |
| [`mozItemCount`](#mozItemCount.28.29) {{ non-standard_inline() }} | `unsigned long`                                                 |
| [`mozSourceNode`](#mozSourceNode) {{ non-standard_inline() }}     | {{ domxref("Node") }}                                           |
| [`mozUserCancelled`](#mozUserCancelled)                           | [`Boolean`](/en/JavaScript/Reference/Global_Objects/Boolean)    |
| [`types`](#types.28.29)                                           | [`DOMStringList`](/ru/docs/Web/API/DOMStringList)               |

## Список методов

| `void addElement(in Element element)`                                           |
| ------------------------------------------------------------------------------- |
| `void clearData([in String type])`                                              |
| `String getData(in String type)`                                                |
| `void setData(in String type, in String data)`                                  |
| `void setDragImage(in nsIDOMElement image, in long x, in long y)`               |
| `void mozClearDataAt([in String type, in unsigned long index])`                 |
| `nsIVariant mozGetDataAt(in String type, in unsigned long index)`               |
| `void mozSetDataAt(in String type, in nsIVariant data, in unsigned long index)` |
| `StringList mozTypesAt([in unsigned long index])`                               |

## Свойства

### dropEffect

Реальное действие, которое будет выполнено, и единственное возможное значение свойства **effectAllowed.**

Для событий **dragenter** и **dragover**, **dropEffect** будет инициализировано значением, зависящим от того, какое действие запрашивает пользователь. То, как это определяется, зависит от платформы, но, как правило, пользователи могут зажать клавиши-модификаторы для выбора желаемого действия. В обработчике событий для **dragenter** и **dragover**, **dropEffect** следует модифицировать, если запрашиваемое пользователем действие не то, которое требовалось.

Для событий **dragstart**, **drag**, и **dragleave**, **dropEffect** будет инициализировано значением "none". Свойства **dropEffect** можно присвоить любое значение, но оно не будет ни для чего использоваться.

Для событий **drop** и **dragend**, **dropEffect** будет инициализировано значением, которое было назначено свойству **dropEffect** после последнего события **dragenter** или **dragover**.

Возможные значения:

- **copy**: в новом расположении создаётся копия исходного элемента.
- **move**: элемент перемещается в новое расположение.
- **link**: в новом расположении создаётся ссылка на исходный элемент.
- **none**: элемент не может быть брошен.

Присвоение каких-либо других значений не возымеет эффекта и оставит старое значение.

### effectAllowed

Определяет эффекты, которые разрешены для этого перетаскивания. Вы можете указать их в событии `dragstart` чтобы желаемый эффект сработал на перетаскиваемом элементе (что перетаскиваем), или в событии `dragenter` и `dragenter` чтобы желаемый эффект сработал для цели перетаскивания (куда перетаскиваем). В других событиях значение не используется.

Возможные значения:

- **copy**: Копия ресурса может быть сделана в новом месте.
- **move**: Элемент может быть перемещён в новое место.
- **link**: A link may be established to the source at the new location.
- **copyLink**: A copy or link operation is permitted.
- **copyMove**: A copy or move operation is permitted.
- **linkMove**: A link or move operation is permitted.
- **all**: All operations are permitted.
- **none**: the item may not be dropped.
- **uninitialized**: the default value when the effect has not been set, equivalent to all.

Assigning any other value has no effect and retains the old value.

### files

Содержит список локальных файлов доступных на dataTransfer. Если операция перемещения не включала в себя перемещение файлов, то данное свойство будет пустым списком. Неверное обращение по индексу к объекту {{ domxref("FileList") }} определённым данным свойством вернёт null.

#### Пример

Данный пример демонстрирует перетаскивание файлов в окно браузера:

<http://jsfiddle.net/9C2EF/>

### types

Содержит список типов форматов данных в порядке добавления данных. Если ничего не было добавлено, то будет вернут пустой список.

### mozCursor

The drag cursor's state. This is primarily used to control the cursor during tab drags.

> **Примечание:** This method is currently only implemented on Windows.

#### Possible values

- `auto`
  - : Uses the default system behavior.
- `default`
  - : Uses the default Gecko behavior, which is to set the cursor to an arrow during the drag operation.

> **Примечание:** If you specify any value other than "default", "auto" is assumed.

### mozItemCount

The number of items being dragged.

> **Примечание:** This property is Gecko-specific.

### mozSourceNode

The {{ domxref("Node") }} over which the mouse cursor was located when the button was pressed to initiate the drag operation. This value is `null` for external drags or if the caller can't access the node.

> **Примечание:** This property is Gecko-specific.

### mozUserCancelled

This property applies only to the `dragend` event, and is `true` if the user canceled the drag operation by pressing escape. It will be `false` in all other cases, including if the drag failed for any other reason, for instance due to a drop over an invalid location. This property is not currently implemented on Linux.

> **Примечание:** This property is Gecko-specific.

## Методы

### addElement()

Данный метод устанавливает источник перетаскивания. Обычно вы его не изменяете, но он влияет на то, на каком узле запускаются события drag и dragend. По умолчанию целью является узел который перетаскивали.

```
 void addElement(
   in Element element
 );
```

###### Параметры

- `element`
  - : Элемент для добавления.

### clearData()

Удаление данных, связанные с указанным типом. Аргумент **type** является необязательным. Если **type** пуст или не указан, тогда данные, связанные со всеми типами удаляются. Если данные для указанного типа не существуют или передача данных не содержит данных, тогда этот метод не будет делать ничего.

```
 void clearData(
   [optional] in String type
 );
```

###### Параметры

- `type`
  - : Тип данных для удаления.

### getData()

Возвращает данные для указанного типа или пустую строку, если данные для указанного типа не существуют или передаваемая сущность не содержит данных.

Ошибка безопасности возникает при попытке получить данные во время перетаскивания из другого домена, иначе вызывающий объект не будет иметь доступа. Эти данные будут доступны только после того, как элемент будет отпущен в случае события **drop**.

```
 String getData(
   in String type
 );
```

###### Параметры

Тип данных который будет возвращён.

`type`

### setData()

Установка данных для указываемого типа. Если данные для **type** не существуют, тогда они добавляются в конце, так что последним элементом в списке типов будет новый формат. Если данные для **type** уже существуют, существующие данные заменяются в том же положении. То есть порядок списка типов не изменяется при замене данных одного и того же типа.

```
 void setData(
   in String type,
   in String data
 );
```

###### Параметры

- `type`
  - : Тип добавляемых данных.
- `data`
  - : Данные для добавления.

### setDragImage()

Устанавливает изображение, которое будет использоваться для перетаскивания если нужно. В большинстве случаев это не будет установлено, так как изображение по умолчанию создаётся из перетаскиваемого узла.

Если узел является HTML-элементом img, HTML-элементом canvas или XUL-элементом изображения, тогда используются данные изображения. В противном случае изображение должно быть видимым узлом, и из этого будет создано перетаскиваемое изображение. Если изображение равно null, любое пользовательское изображение перетаскиваемое очищается и вместо него используется значение по умолчанию.

Координаты указывают смещение в изображении, где должен находиться курсор мыши. Например, для центрирования изображения используйте значения, которые составляют половину ширины и высоты изображения.

```
 void setDragImage(
   in Element image,
   in long x,
   in long y
 );
```

###### Параметры

- `image`
  - : Элемент используемый в качестве изображения обратной связи при перетаскивании
- `x`
  - : Горизонтальное смещение внутри изображения.
- `y`
  - : Вертикальное смещение внутри изображения.

### mozClearDataAt()

Removes the data associated with the given format for an item at the specified index. The index is in the range from zero to the number of items minus one.

If the last format for the item is removed, the entire item is removed, reducing `mozItemCount` by one.

If the `format` list is empty, then the data associated with all formats is removed. If the format is not found, then this method has no effect.

> **Примечание:** This method is Gecko-specific.

```
 void mozClearDataAt(
   [optional] in String type,
   in unsigned long index
 );
```

###### Parameters

- `type`
  - : The type of data to remove.
- `index`
  - : The index of the data to remove.

### mozGetDataAt()

Retrieves the data associated with the given format for an item at the specified index, or null if it does not exist. The index should be in the range from zero to the number of items minus one.

> **Примечание:** This method is Gecko-specific.

```
 nsIVariant mozGetDataAt(
   [optional] in String type,
   in unsigned long index
 );
```

###### Parameters

- `type`
  - : The type of data to retrieve.
- `index`
  - : The index of the data to retrieve.

### mozSetDataAt()

A data transfer may store multiple items, each at a given zero-based index. `mozSetDataAt()` may only be called with an index argument less than `mozItemCount` in which case an existing item is modified, or equal to `mozItemCount` in which case a new item is added, and the `mozItemCount` is incremented by one.

Data should be added in order of preference, with the most specific format added first and the least specific format added last. If data of the given format already exists, it is replaced in the same position as the old data.

The data should be either a string, a primitive boolean or number type (which will be converted into a string) or an `nsISupports`.

> **Примечание:** This method is Gecko-specific.

```
 void mozSetDataAt(
   [optional] in String type,
   in nsIVariant data,
   in unsigned long index
 );
```

###### Parameters

- `type`
  - : The type of data to add.
- `data`
  - : The data to add.
- `index`
  - : The index of the data to add.

### mozTypesAt()

Holds a list of the format types of the data that is stored for an item at the specified index. If the index is not in the range from 0 to the number of items minus one, an empty string list is returned.

> **Примечание:** This method is Gecko-specific.

```
 nsIVariant mozTypesAt(
   in unsigned long index
 );
```

###### Parameters

- `index`
  - : The index of the data for which to retrieve the types.

## See also

[Drag and Drop](/En/DragDrop/Drag_and_Drop)
