---
title: Drag Operations
slug: Web/API/HTML_Drag_and_Drop_API/Drag_operations
---

{{DefaultAPISidebar("HTML Drag and Drop API")}}

다음은 드래그 & 드랍(drag & drop) 동작 실행 시 각 단계에 대한 설명입니다.

> **참고:** 이 문서에 설명된 드래그 동작은 {{domxref("DataTransfer")}} 인터페이스를 사용합니다. 이 문서에서는 {{domxref("DataTransferItem")}} 인터페이스나 {{domxref("DataTransferItemList")}} 인터페이스를 사용하지 않습니다.

## Draggable 속성

웹 페이지 안에서 특정 상황에 기본 드래그(default drag) 행위가 사용될 경우가 있습니다. 선택된 텍스트(text selections), 이미지 또는 링크가 여기에 포함됩니다. 이미지나 링크가 드래그될 때, 이미지나 링크의 URL이 드래그 데이터(drag data)로 설정되고 드래그가 시작됩니다. 다른 요소의 경우, 기본 드래그가 발생할 선택(selections)에 포함되어 있어야 합니다(For other elements, they must be part of a selection for a default drag to occur). 이 효과를 보기 위해서는 웹 페이지의 어떤 영역을 선택하고 마우스를 클릭한 채로 드래그하면 됩니다. 드래그가 발생할 때 마우스 포인터로 선택 영역에 대한 OS별 렌더링이 표시됩니다. 이 행위는 기본 드래그 행위인 경우에만 발생하는 것으로 드래그되는 데이터를 조정할 리스너가 없는 경우에는 작동하지 않습니다.

HTML에서 이미지나 링크 그리고 선택(selections)에 대한 기본 행위를 제외한 나머지 요소는 기본적으로 드래그되지 않습니다. [XUL](/ko/docs/Mozilla/Tech/XUL)에서는 모든 요소가 드래그 가능합니다.

다른 HTML 요소를 드래그할 수 있게 하려면 세 가지가 이루어져야 합니다:

- 드래그가 가능하도록 만들고자 하는 요소에 대한 `[`draggable`](/ko/docs/Web/HTML/Global_attributes#draggable)` 속성이 `true`로 설정되어야 합니다.
- `{{event("dragstart")}}` 이벤트에 대한 리스너를 추가합니다.
- 위에서 정의한 리스너에 {{domxref("DataTransfer.setData","Set the drag data")}}를 설정합니다.

컨텐츠의 일부 영역을 드래그할 수 있도록 만드는 예제는 다음과 같습니다.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

요소를 드래그할 수 있게 하기 위해서는 `[`draggable`](/ko/docs/Web/HTML/Global_attributes#draggable)` 속성이 true로 설정되어야 합니다. 이 속성이 생략되거나 false로 설정되면 해당 요소는 드래그할 수 없으며, 대신 텍스트가 선택됩니다. `[`draggable`](/ko/docs/Web/HTML/Global_attributes#draggable)` 속성은 이미지나 링크를 포함한 어떤 요소에서도 사용할 수 있습니다. 하지만, 이미지나 링크에 대해서는 기본값이 true로 설정되어 있으므로 이들 요소에 대해 드래깅할 수 없게 만들 경우에만 `[`draggable`](/ko/docs/Web/HTML/Global_attributes#draggable)` 속성의 값을 false로 설정하면 됩니다.

어떤 요소가 드래그 가능한 경우, 해당 요소 내의 텍스트나 다른 요소는 마우스를 클릭하고 드래그하는 통상적인 방식으로는 선택할 수 없게 됩니다. 대신, 사용자가 <kbd>alt</kbd> 키를 누른채로 마우스로 텍스트를 선택하거나 키보드를 이용해 선택할 수 있습니다.

XUL 요소에 대해서는 `[`draggable`](/ko/docs/Web/HTML/Global_attributes#draggable)` 속성을 사용할 필요가 없으며, 모든 XUL 요소는 드래그가 가능합니다.

```html
<button
  label="Drag Me"
  ondragstart="event.dataTransfer.setData('text/plain', 'Drag Me Button');"></button>
```

## 드래그 작업 시작

이 예제에서는 `{{domxref("GlobalEventHandlers.ondragstart","ondragstart")}}` 속성을 이용하여 {{event("dragstart")}} 이벤트에 대한 리스너를 추가합니다.

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'This text may be dragged')">
  This text <strong>may</strong> be dragged.
</div>
```

사용자가 드래그를 시작할 때, {{event("dragstart")}} 이벤트가 발생합니다. 이 예제에서는 드래그할 요소에 {{event("dragstart")}} 리스너가 추가되었습니다; 하지만, 대부분의 다른 이벤트가 그렇듯이 상위 요소에서 드래그 이벤트를 포착할 수 있습니다. {{event("dragstart")}} 이벤트 내에서 아래에서 설명하는 바와 같이 피드백 이미지(feedback image)나 드래그 효과와 그리고 드래그 데이터를 명시할 수 있습니다. 기본 이미지나 드래그 효과는 대부분의 상황에 적합하게 되어 있으며, 드래그 데이터만 필요합니다.

## 데이터 드래그

모든 {{domxref("DragEvent","drag events")}}는 드래그 데이터를 가지고 있는 {{domxref("DragEvent.dataTransfer","dataTransfer")}}라는 속성이 존재합니다 (`dataTransfer`는 {{domxref("DataTransfer")}} 객체입니다).

드래그가 발생할 때, 데이터는 어떤 것이 드래그되는지를 구분할 수 있는 드래그와 연관되어야 합니다(When a drag occurs, data must be associated with the drag which identifies _what_ is being dragged). 예를 들어, 선택된 텍스트가 드래그될 경우 드래그 데이터 항목에 연관된 데이터는 텍스트 자체입니다. 이와 유사하게, 웹 페이지 상의 링크가 드래그될 경우에 드래그 데이터 항목은 링크의 URL이됩니다.

{{domxref("DataTransfer","drag data")}}는 두 가지 정보를 담고 있는데, 데이터의 유형(또는 형식)과 데이터 값입니다. 형식은 (텍스트 데이터에 해당하는 [text/plain](/ko/docs/DragDrop/Recommended_Drag_Types#text)과 같은) 형식 문자열(type string) 값이고, 값은 텍스트의 문자열입니다. 드래그가 시작되면, 데이터와 형식을 제공하는 데이터를 추가해야 합니다. 드래그되는 동안, `{{event("dragenter")}}` 이벤트와 `{{event("dragover")}}` 이벤트에 대한 이벤트 리스너에서 드래그되는 데이터의 형식을 사용해 드랍이 허용되는지 확인할 수 있습니다. 예를 들어, 링크가 허용되는 드랍 대상(drop target)은 [text/uri-list](/ko/docs/DragDrop/Recommended_Drag_Types#link) 형식의 링크인지 확인합니다. 드랍 이벤트 동안 리스너는 드래그 대상(being dragged)으로부터 데이터를 추출해 드랍되는 위치에 삽입합니다.

{{domxref("DataTransfer","drag data's")}}의 {{domxref("DataTransfer.types","types")}} 속성은 [text/plain](/ko/docs/DragDrop/Recommended_Drag_Types#text) or [image/jpeg](/ko/docs/DragDrop/Recommended_Drag_Types#image)과 같은 {{domxref("DOMString")}} MIME-type 목록을 반환홥니다. 여러분은 자신만의 형식을 만들 수도 있습니다. 가장 흔하게 사용되는 형식은 권장 드래그 데이터 형식([Recommended Drag Types](/ko/docs/DragDrop/Recommended_Drag_Types))에서 소개하고 있습니다.

드래그에는 여러 가지 다른 형식의 데이터 항목이 포함될 수 있습니다. 이를 통해 사용자 정의 형식(custom types)과 같은 보다 특정한 형식의 데이터를 주로 제공하지만, 특정한 유형을 지원하지 않는 드롭 대상에 대해 대체 데이터(fallback data)를 제공할 수도 있습니다. [text/plain](/ko/docs/DragDrop/Recommended_Drag_Types#text) 형식의 일반적인 텍스트 데이터가 가장 단순한 형식의 데이터일 것입니다.이 형식의 데이터는 단순히 텍스트 형식으로 표시될 것입니다.

{{domxref("DragEvent.dataTransfer","dataTransfer")}} 내에 드래그 데이터 항목(drag data item)을 설정하기 위해서는 {{domxref("DataTransfer.setData","setData()")}} 메서드를 이용합니다. 이 메서드는 각각 데이터 형식과 데이터 값인 두 개의 인자가 필요합니다. 예를 들어:

```js
event.dataTransfer.setData("text/plain", "Text to drag");
```

이 경우, 데이터 값은 "Text to drag"이고 형식은 [text/plain](/ko/docs/DragDrop/Recommended_Drag_Types#text)입니다.

여러 형식의 데이터를 제공할 수도 있습니다. 이를 위해서는 서로 다른 형식으로 {{domxref("DataTransfer.setData","setData()")}} 메서드를 여러 번 호출합니다. 이 때, 가장 세부적인 형식에서 덜 세부적인 형식의 순으로 호출해야 합니다.

```js
var dt = event.dataTransfer;
dt.setData("application/x-bookmark", bookmarkString);
dt.setData("text/uri-list", "http://www.mozilla.org");
dt.setData("text/plain", "http://www.mozilla.org");
```

여기서 데이터는 세가지 유형으로 추가됩니다. 첫번째 형식의 'application2x-bookmark'는 사용자 지정 형식입니다. 다른 응용 프로그램에서는 이 형식을 지원하지 않지만 동일한 사이트 또는 응용 프로그램의 영역 간 드래그할 경우, 이 사용자 지정 형식을 사용할 수 있습니다. 또한 다른 형식의 데이터를 제공함으로써 덜 세부적인 형태로 다른 애플리케이션으로의 드래그도 지원할 수 있습니다. 다른 형식이 하나의 URL또는 텍스트 형식만 제공할 때, 'application2x-bookmark' 형식은 해당 어플리케이션 내에서 사용될 경우 더 상세한 데이터를 제공할 수 있습니다

이 예제에서 [text/uri-list](/ko/docs/DragDrop/Recommended_Drag_Types#link)와 [text/plain](/ko/docs/DragDrop/Recommended_Drag_Types#text)은 동일한 데이터를 담고있음에 주목하시기 바랍니다. 이렇게 해도 되지만, 꼭 이럴 필요는 없습니다.

동일한 형식으로 데이터를 두 번 추가하려고 하면 새로운 데이터가 기존 데이터를 대체하지만 형식 목록 내에서 이전 데이터(old data)와 같은 위치에 있게 됩니다.

{{domxref("DataTransfer.clearData","clearData()")}} 메서드를 이용해 해당 데이터를 지울 수 있는데, 이 메서드는 지우고자 하는 데이터의 형식을 인자로 가집니다.

```js
event.dataTransfer.clearData("text/uri-list");
```

{{domxref("DataTransfer.clearData","clearData()")}} 메서드에 대한 형식 인자는 선택적입니다. 형식을 지정하지 않으면 모든 형식과 연관된 데이터가 지워집니다. 드래그할 때, 드래그 데이터 항목이 없거나 이후에 모든 항목이 삭제되면 드래그가 발생하지 않습니다.

## 드래그 피드백 이미지 설정

드래그가 발생할 때, 드래그 대상("{{event("dragstart")}}" 이벤트가 발생한 요소)으로부터 반투명한 이미지가 생성되고 드래그 하는 동안 마우스 포인터를 따라 움직입니다. 이 이미지는 자동으로 생성되며, 따로 생성할 필요가 없습니다. 하지만, {{domxref("DataTransfer.setDragImage","setDragImage()")}}를 이용해 사용자 정의 드래그 피드백 이미지를 지정할 수 있습니다.

```js
event.dataTransfer.setDragImage(image, xOffset, yOffset);
```

세 개의 인자는 필수입니다. 첫 번째 인자는 이미지에 대한 참조(reference)입니다. 이 참조는 일반적으로 이미지에 대한 참조이나 캔버스(canvas)나 다른 요소를 지정할 수도 있습니다. 피드백 이미지는 단순하게 화면에 표시된 이미지의 모양으로부터 생성되지만, 이미지의 경우 원래 크기로 그려집니다. {{domxref("DataTransfer.setDragImage","setDragImage()")}} 메서드의 두 번째와 세 번째 인자는 마우스 포인터에 대해 상대적인 옵셋(offsets)으로 이미지가 나타날 위치를 의미합니다.

문서 내에 있지 않은 이미지나 캔버스를 사용하는 것 역시 가능합니다. 이 기법은 다음의 예제와 같이 캔버스 요소를 이용해 드래그 이미지를 사용자 정의 형태로 그리고자 할 때 유용합니다:

```js
function dragWithCustomImage(event) {
  var canvas = document.createElementNS(
    "http://www.w3.org/1999/xhtml",
    "canvas",
  );
  canvas.width = canvas.height = 50;

  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 4;
  ctx.moveTo(0, 0);
  ctx.lineTo(50, 50);
  ctx.moveTo(0, 50);
  ctx.lineTo(50, 0);
  ctx.stroke();

  var dt = event.dataTransfer;
  dt.setData("text/plain", "Data to Drag");
  dt.setDragImage(canvas, 25, 25);
}
```

이 예제에서, 드래그 이미지를 표시할 캔버스를 하나 생성합니다. 캔버스는 너비가 와 높이가 모두 50 픽셀이고, 마우스 포인터가 이미지의 중앙에 위치하도록 옵셋(offsets)을 너비와 높이의 절반(25)으로 설정했습니다.

## 드래그 효과

드래그할 때, 여러 가지 작업이 수행될 수 있습니다. `copy` 작업은 드래그되는 데이터가 현재 위치에서 드랍되는 위치로 복사될 것임을 나타냅니다. `move` 작업은 드래그되는 데이터가 이동될 것임을 나타내고, `link` 작업은 특정 형태의 관계(relationship)나 연결(connection)이 소스와 드랍되는 위치 사이에 생성될 것임을 나타냅니다.

드래그 소스(drag source)에 대해 `{{event("dragstart")}}` 이벤트 리스너의 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 속성을 설정함으로써, 이 세 가지 작업 중 어떤 것을 허용할 것인지를 지정할 수 있습니다.

```js
event.dataTransfer.effectAllowed = "copy";
```

이 예제에서는, 복사만 허용됩니다. 다양한 방식으로 값을 조합할 수 있습니다:

- none
  - : 어떤 작업도 허용하지 않음.
- copy
  - : 복사만 허용
- move
  - : 이동만 허용
- link
  - : 연결만 허용
- copyMove
  - : 복사 또는 이동만 허용
- copyLink
  - : 복사 또는 연결만 허용
- linkMove
  - : 연결 또는 이동만 허용
- all
  - : 복사, 이동 및 연결 모두 허용

이 값들은 반드시 위에 나열한 것과 정확하게 일치해야 함에 유의하시기 바랍니다. 예를 들어, {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 속성을 `copyMove`로 설정하면 복사와 이동 작업이 허용되나 연결(link) 작업은 금지됩니다. {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 속성을 변경하지 않으면 'all' 값과 마찬가지로 어떤 작업도 허용됩니다. 따라서, 특정한 유형의 작업을 제외시키고 싶지 않다면 이 속성을 조정할 필요가 없습니다.

드래그 작업 중에 `{{event("dragenter")}}` 또는 `{{event("dragover")}}` 이벤트에 대한 리스너는 어떤 작업이 허용되어 있는지 알기 위해 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 속성을 확인할 수 있습니다. 관련된 속성으로, {{domxref("DataTransfer.dropEffect","dropEffect")}}는 이들 이벤트 중 하나에서 수행되어야 하는 단일 작업을 지정하기 위해 설정되어야 할 속성입니다. {{domxref("DataTransfer.dropEffect","dropEffect")}}에 유효한 값은 `none`, `copy`, `move`, 또는 `link`입니다. 이 속성에 값의 조합은 허용되지 않습니다.

`{{event("dragenter")}}`나 `{{event("dragover")}}` 이벤트가 발생하면 사용자가 요청하는 효과로 {{domxref("DataTransfer.dropEffect","dropEffect")}} 속성이 초기화됩니다. 사용자는 한정자 키를 눌러 원하는 효과로 수정할 수 있습니다. 플랫폼에 따라 정확한 키가 달라질 수 있지만, 일반적으로 쉬프트(Shift)와 컨트롤(Control) 키가 복사하기, 이동하기, 연결하기 간 전환에 사용됩니다. 마우스 포인터를 원하는 작업을 나타내도록 변경할 수 있습니다; 예를 들어, 복사 작업에 대해서는 마우스 포인터 옆에 더하기 기호가 표시된 커서가 나타날 수 있습니다.

`{{event("dragenter")}}` 또는 `{{event("dragover")}}` 이벤트가 발생하는 동안 {{domxref("DataTransfer.dropEffect","dropEffect")}} 속성을 변경할 수 있는데, 예를 들자면, 특정 작업만 지원되는 특수한 드랍 대상(drop target)일 경우가 그렇습니다. {{domxref("DataTransfer.dropEffect","dropEffect")}} 속성을 수정하여 사용자 효과(user effect)를 오버라이드하여 특정한 드랍 작업이 발생하게 할 수 있습니다. 이 효과는 {{domxref("DataTransfer.effectAllowed","effectAllowed")}} 속성에 열거된 것 중의 하나 이어야 함에 유의하시기 바랍니다. 그렇지 않을 경우, 허용되는 대체 값으로 설정되게 됩니다.

```js
event.dataTransfer.dropEffect = "copy";
```

이 예제에서는 복사가 수행될 효과입니다.

이 경우에는 이벤트를 취소하지 않는 것이 좋지만 `none` 값을 사용하여 이 위치에서 드롭이 허용되지 않음을 나타낼 수 있습니다.

`{{event("drop")}}`와 `{{event("dragend")}}` 이벤트 내에서{{domxref("DataTransfer.dropEffect","dropEffect")}} 속성을 확인하면 최종적으로 어떤 효과가 선택되었는지를 알 수 있습니다. 선택된 효과가 "move"였다면, `{{event("dragend")}}` 이벤트 내에서 드래그 소스의 원본 데이터가 삭제되어야 합니다.

## 드랍 대상 지정하기

`{{event("dragenter")}}`와 `{{event("dragover")}}` 이벤트에 대한 리스너는 유효한 드랍 대상인지, 즉 드래그된 아이템이 드랍될 수 있는 곳인지를 나타내는데 사용할 수 있습니다. 웹 페이지 또는 어플리케이션의 대부분의 영역은 데이터를 드랍할 수 있는 유효한 영역이 아닙니다. 따라서, 이들 이벤트에 대한 기본적인 처리는 드랍을 허용하지 않는 것입니다.

드랍을 허용하길 원한다면, 해당 이벤트를 취소하는 기본 처리를 막아야 합니다. 속성 정의(attribute-defined) 이벤트 리스너로부터 `false`를 반환 받거나 해당 이벤트의 {{domxref("Event.preventDefault","preventDefault()")}} 메서드를 호출하면 됩니다. 후자는 별도의 스크립트에 정의된 함수에 더 적합합니다.

```html
<div ondragover="return false">
  <div ondragover="event.preventDefault()"></div>
</div>
```

`{{event("dragenter")}}` and `{{event("dragover")}}` 두 이벤트 모두에서 {{domxref("Event.preventDefault","preventDefault()")}} 메서드를 호출하는 것은 그 위치에 드랍이 허용되는 것을 나타냅니다. 하지만, 일반적으로 특정한 상황에서만, 예를 들자면 링크가 드래그될 때만 {{domxref("Event.preventDefault","preventDefault()")}} 메서드를 호출하길 원할 것입니다. 이렇게 하기 위해서는 조건을 확인하여 조건이 충족될 때에만 해당 이벤트를 취소하는 함수를 호출합니다. 조건이 충족되지 않을 경우, 이벤트를 취소하지 않으면 사용자가 마우스 버튼을 놓더라도 드랍은 발생하지 않을 것입니다.

data transfer의 드래그 데이터 형식에 따라 드랍을 허용하거나 기각하는 경우가 대부분일 것입니다(예를 들어, 이미지나 링크를 허용하거나 둘 다 허용하는 경우). 이렇게 하기 위해서는 이벤트의 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 속성의 {{domxref("DataTransfer.types","types")}} 속성을 확인합니다. {{domxref("DataTransfer.types","types")}} 속성은 드래그가 시작될 때 추가된 형식 문자열의 배열을 반환하는데, 그 순서는 가장 세부적인 형식에서 가장 덜 세부적인 형식의 순서입니다.

```js
function contains(list, value) {
  for (var i = 0; i < list.length; ++i) {
    if (list[i] === value) return true;
  }
  return false;
}

function doDragOver(event) {
  var isLink = contains(event.dataTransfer.types, "text/uri-list");
  if (isLink) {
    event.preventDefault();
  }
}
```

이 예제에서 형식 목록 내에 [text/uri-list](/ko/docs/DragDrop/Recommended_Drag_Types#link) 형식이 존재하는지 확인하기 위해 `contains` 메서드를사용합니다. 존재할 경우에는 드랍을 허용하기 위해 이벤트가 취소될 것입니다. 드래그 데이터가 링크를 포함하지 않았다면, 해당 이벤트는 취소되지 않을 것이고 그 위치에 대한 드랍이 발생하지 않을 것입니다.

수행되어야 하는 작업 형식을 더 세부적으로 설정하길 원한다면, {{domxref("DataTransfer.effectAllowed","effectAllowed")}}나 {{domxref("DataTransfer.dropEffect","dropEffect")}} 속성을 각각 설정하거나 동시에 둘 다를 설정하고 싶을 것입니다. 두 속성을 변경하더라도 해당 이벤트를 취소하지 않으면 아무런 영향이 없을 것입니다.

### Updates to DataTransfer.types

최신 스펙에는 {{domxref("DataTransfer.types")}}이 {{domxref("DOMStringList")}}(이 속성은 Fiirefox 52 이상에서 지원됨)이 아닌 {{domxref("DOMString")}} 형식의 고정배열(fronzen array)을 반환하도록 명시하고 있음에 유의하시기 바랍니다.

그 결과로, [contains](/ko/docs/Web/API/Node/contains) 메서드는 해당 속성에 대해 더 이상 동작하지 않으며; 특정 형식의 데이터가 제공되는지 확인하기 위해서는 다음 코드와 같이 [includes](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) 메서드를 사용해야 합니다:

```js
if ([...event.dataTransfer.types].includes("text/html")) {
  // Do something
}
```

일부 특성 검출(feature detection)을 이용해 `types`에 대해 어떤 메서드가 지원되는지를 판별하고 적절하게 코드를 실행할 수 있습니다.

## Drop Feedback

There are several ways in which you can indicate to the user that a drop is allowed at a certain location. The mouse pointer will update as necessary depending on the value of the {{domxref("DataTransfer.dropEffect","dropEffect")}} property. Although the exact appearance depends on the user's platform, typically a plus sign icon will appear for a 'copy' for example, and a 'cannot drop here' icon will appear when a drop is not allowed. This mouse pointer feedback is sufficient in many cases.

However, you can also update the user interface with an insertion point or highlight as needed. For simple highlighting, you can use the `-moz-drag-over` CSS pseudoclass on a drop target.

```css
.droparea:-moz-drag-over {
  border: 1px solid black;
}
```

In this example, the element with the class `droparea` will receive a 1 pixel black border while it is a valid drop target, that is, if the {{domxref("Event.preventDefault","preventDefault()")}} method was called during the `{{event("dragenter")}}` event. Note that you must cancel the `{{event("dragenter")}}` event for this pseudoclass to apply, as this state is not checked for the `{{event("dragover")}}` event.

For more complex visual effects, you can also perform other operations during the `{{event("dragenter")}}` event, for example, by inserting an element at the location where the drop will occur. For example, this might be an insertion marker or an element that represents the dragged element in its new location. To do this, you could create an [image](/ko/docs/XUL/image) or [separator](/ko/docs/XUL/separator) element, for example, and simply insert it into the document during the `{{event("dragenter")}}` event.

The `{{event("dragover")}}` event will fire at the element the mouse is pointing at. Naturally, you may need to move the insertion marker around a `{{event("dragover")}}` event as well. You can use the event's {{domxref("MouseEvent.clientX","clientX")}} and {{domxref("MouseEvent.clientY","clientY")}} properties as with other mouse events to determine the location of the mouse pointer.

Finally, the `{{event("dragleave")}}` event will fire at an element when the drag leaves the element. This is the time when you should remove any insertion markers or highlighting. You do not need to cancel this event. Any highlighting or other visual effects specified using the `-moz-drag-over` pseudoclass will be removed automatically. The `{{event("dragleave")}}` event will always fire, even if the drag is cancelled, so you can always ensure that any insertion point cleanup can be done during this event.

## Performing a Drop

When the user releases the mouse, the drag and drop operation ends. If the mouse was released over an element that is a valid drop target, that is, one that cancelled the last `{{event("dragenter")}}` or `{{event("dragover")}}` event, and then the drop will be successful, and a `{{event("drop")}}` event will fire at the target. Otherwise, the drag operation is cancelled, and no `{{event("drop")}}` event is fired.

During the `{{event("drop")}}` event, you should retrieve that data that was dropped from the event and insert it at the drop location. You can use the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine which drag operation was desired.

As with all drag-related events, the event's `{{domxref("DataTransfer","dataTransfer")}}` property will hold the data that is being dragged. The {{domxref("DataTransfer.getData","getData()")}} method may be used to retrieve the data again.

```js
function onDrop(event) {
  var data = event.dataTransfer.getData("text/plain");
  event.target.textContent = data;
  event.preventDefault();
}
```

The {{domxref("DataTransfer.getData","getData()")}} method takes one argument, the type of data to retrieve. It will return the string value that was set when {{domxref("DataTransfer.setData","setData()")}} was called at the beginning of the drag operation. An empty string will be returned if data of that type does not exist. Naturally, though, you would likely know that the right type of data was available, as it was previously checked during a `{{event("dragover")}}` event.

In the example here, once we have retrieved the data, we insert the string as the textual content of the target. This has the effect of inserting the dragged text where it was dropped, assuming that the drop target is an area of text such as a `p` or `div` element.

In a web page, you should call the {{domxref("Event.preventDefault","preventDefault()")}} method of the event if you have accepted the drop so that the default browser handling does not handle the dropped data as well. For example, when a link is dragged to a web page, Firefox will open the link. By cancelling the event, this behavior will be prevented.

You can retrieve other types of data as well. If the data is a link, it should have the type [text/uri-list](/ko/docs/DragDrop/Recommended_Drag_Types#link). You could then insert a link into the content.

```js
function doDrop(event) {
  var lines = event.dataTransfer.getData("text/uri-list").split("\n");
  for (let line of lines) {
    if (line.startsWith("#")) continue;

    let link = document.createElement("a");
    link.href = line;
    link.textContent = line;
    event.target.appendChild(link);
  }
  event.preventDefault();
}
```

This example inserts a link from the dragged data. As you might be able to guess from the name, the [text/uri-list](/ko/docs/DragDrop/Recommended_Drag_Types#link) type actually may contain a list of URLs, each on a separate line. In this code, we use the [split](/ko/docs/JavaScript/Reference/Global_Objects/String/split) to split the string into lines, then iterate over the list of lines, inserting each as a link into the document. Note also that we skip links starting with a number sign (#) as these are comments.

For simple cases, you can use the special type `URL` just to retrieve the first valid URL in the list. For example:

```js
var link = event.dataTransfer.getData("URL");
```

This eliminates the need to check for comments or iterate through lines yourself; however, it is limited to only the first URL in the list.

The `URL` type is a special type used only as a shorthand, and it does not appear within the list of types specified in the {{domxref("DataTransfer.types","types")}} property.

Sometimes you may support some different formats, and you want to retrieve the data that is most specific that is supported. In this example, three formats are supported by a drop target.

The following example returns the data associated with the best-supported format:

```js
function doDrop(event) {
  var types = event.dataTransfer.types;
  var supportedTypes = [
    "application/x-moz-file",
    "text/uri-list",
    "text/plain",
  ];
  types = supportedTypes.filter((value) => types.includes(value));
  if (types.length) var data = event.dataTransfer.getData(types[0]);
  event.preventDefault();
}
```

This method relies on JavaScript functionality available in Firefox 3. However, the code could be adjusted to support other platforms.

## Finishing a Drag

Once the drag is complete, a `{{event("dragend")}}` event is fired at the source of the drag (the same element that received the `{{event("dragstart")}}` event). This event will fire if the drag was successful\[1] or if it was cancelled. However, you can use the {{domxref("DataTransfer.dropEffect","dropEffect")}} property to determine what drop operation occurred.

If the {{domxref("DataTransfer.dropEffect","dropEffect")}} property has the value `none` during a `{{event("dragend")}}`, then the drag was cancelled. Otherwise, the effect specifies which operation was performed. The source can use this information after a move operation to remove the dragged item from the old location. The {{domxref("DataTransfer.mozUserCancelled","mozUserCancelled")}} property will be set to true if the user cancelled the drag (by pressing Escape), and false if the drag was cancelled for other reasons such as an invalid drop target, or if it was successful.

A drop can occur inside the same window or over another application. The `{{event("dragend")}}` event will always fire regardless. The event's {{domxref("MouseEvent.screenX","screenX")}} and {{domxref("MouseEvent.screenY","screenY")}} properties will be set to the screen coordinate where the drop occurred.

After the `{{event("dragend")}}` event has finished propagating, the drag and drop operation is complete.

\[1] In Gecko, {{event("dragend")}} is not dispatched if the source node is moved or removed during the drag (e.g. on drop or {{event("dragover")}}). [bug 460801](https://bugzilla.mozilla.org/show_bug.cgi?id=460801)

## See also

- [HTML Drag and Drop API (Overview)](/ko/docs/Web/API/HTML_Drag_and_Drop_API)
- [Dragging and Dropping Multiple Items](/ko/docs/Web/Guide/HTML/Dragging_and_Dropping_Multiple_Items)
- [Recommended Drag Types](/ko/docs/Web/Guide/HTML/Recommended_Drag_Types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
