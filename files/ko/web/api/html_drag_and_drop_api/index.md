---
title: HTML 드래그 앤 드롭 API
slug: Web/API/HTML_Drag_and_Drop_API
---

{{DefaultAPISidebar("HTML 드래그 앤 드롭 API")}}

HTML 드래그 앤 드롭 인터페이스는 파이어폭스와 다른 브라우저에서 어플리케이션이 드래그 앤 드롭 기능을 사용하게 해줍니다. 이 기능을 이용해 사용자는 _draggable_ 요소를 마우스로 선택해 _droppable_ 요소로 드래그하고, 마우스 버튼에서 손을 뗌으로써 요소를 드롭할 수 있습니다. 드래그하는 동안 draggable 요소는 반투명한 채로 마우스 포인터를 따라다닙니다.

웹 사이트나 확장 기능, XUL 어플리케이션을 위해, 다양한 요소를 draggable 요소로 만들 수 있고, 이벤트에 대한 draggable 요소의 반응들을 만들어내거나 droppable 요소를 자유자재로 만들 수 있습니다.

이 문서는 HTML 드래그 앤 드롭에 대한 전반적인 개요입니다. 인터페이스에 대한 설명과 드래그 앤 드롭 기능을 어플리케이션에서 사용하기 위한 기본적인 절차, 인터페이스의 상호 운용성에 대한 요약 등이 이 문서에 담겨있습니다.

## 드래그 이벤트

HTML 드래그 앤 드롭은 {{domxref("Event","DOM event model")}} 과 _{{domxref("DragEvent","drag events")}}_ 를 {{domxref("MouseEvent","mouse events")}} 로부터 상속받습니다. 보통 드래그는 사용자가 draggable 요소를 마우스로 선택하고, 마우스 포인터를 droppable 요소로 가져가 마우스 버튼을 때는 것으로 이루어집니다. 드래그하는 도중에 많은 이벤트가 발생하고, 몇몇 이벤트는 여러번 발생하기도 합니다. ( {{event("drag")}}와 {{event("dragover")}}).

모든 [드래그 이벤트](/ko/docs/Web/API/DragEvent#Event_types)는 [글로벌 이벤트 핸들러](/ko/docs/Web/API/DragEvent#GlobalEventHandlers)와 연결되어 있습니다. 각 드래그 이벤트와 드래그 전역 속성은 참조 문서를 가지고 있습니다. 아래 표는 각 이벤트에 대한 간략한 설명과 참조 문서로의 링크를 담고 있습니다.

| 이벤트                                      | 이벤트 핸들러                                                | 설명                                                                                                                                                     |
| ------------------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{domxref('Document/drag_이벤트', 'drag')}} | {{domxref('GlobalEventHandlers.ondrag','ondrag')}}           | 요소나 텍스트 블록을 드래그 할 때 발생한다.                                                                                                              |
| {{event('dragend')}}                        | {{domxref('GlobalEventHandlers.ondragend','ondragend')}}     | 드래그를 끝냈을 때 발생한다. (마우스 버튼을 떼거나 ESC 키를 누를 때) ([드래그 끝내기](/ko/docs/DragDrop/Drag_Operations#dragend)를 보시오)               |
| {{event('dragenter')}}                      | {{domxref('GlobalEventHandlers.ondragenter','ondragenter')}} | 드래그한 요소나 텍스트 블록을 적합한 드롭 대상위에 올라갔을 때 발생한다. ([드롭 대상 지정하기](/ko/docs/DragDrop/Drag_Operations#droptargets)를 보시오.) |
| {{event('dragexit')}}                       | {{domxref('GlobalEventHandlers.ondragexit','ondragexit')}}   | 요소가 더 이상 드래그의 직접적인 대상이 아닐 때 발생한다.                                                                                                |
| {{event('dragleave')}}                      | {{domxref('GlobalEventHandlers.ondragleave','ondragleave')}} | 드래그하는 요소나 텍스트 블록이 적합한 드롭 대상에서 벗어났을 때 발생한다.                                                                               |
| {{event('dragover')}}                       | {{domxref('GlobalEventHandlers.ondragover','ondragover')}}   | 요소나 텍스트 블록을 적합한 드롭 대상 위로 지나갈 때 발생한다. (매 수백 밀리초마다 발생한다.)                                                            |
| {{event('dragstart')}}                      | {{domxref('GlobalEventHandlers.ondragstart','ondragstart')}} | 사용자가 요소나 텍스트 블록을 드래그하기 시작했을 때 발생한다. ([드래그 시작하기](/ko/docs/DragDrop/Drag_Operations#dragstart)를 보시오.)                |
| {{event('drop')}}                           | {{domxref('GlobalEventHandlers.ondrop','ondrop')}}           | 요소나 텍스트 블록을 적합한 드롭 대상에 드롭했을 때 발생한다. ([드롭하기](/ko/docs/DragDrop/Drag_Operations#dragstart)를 보시오.)                        |

> **참고:** `참고: dragstart`와 `dragend` 이벤트는 파일을 브라우저로 드래그할 때는 발생하지 않습니다.

## 인터페이스

HTML 드래그와 드롭 인터페이스는 {{domxref("DragEvent")}}, {{domxref("DataTransfer")}}, {{domxref("DataTransferItem")}}, {{domxref("DataTransferItemList")}} 입니다.

{{domxref("DataTransfer")}} 객체는 드래그 형태나 드래그 데이터 (하나 이상의 아이템), 각 드래그 아이템의 종류 (MIME 종류) 와 같은 드래그 이벤트의 상태를 담고 있습니다. {{domxref("DataTransfer")}} 는 또한 드래그 데이터에 아이템을 추가하거나 제거하는 메소드를 가지고 있습니다. The {{domxref("DragEvent")}} 와 {{domxref("DataTransfer")}} 인터페이스만 있으면 어플리케이션에 HTML 드래그 앤 드롭 기능을 추가할 수 있습니다. 참고로 파이어폭스는 {{domxref("DataTransfer")}}에 [Gecko-specific extensions](#gecko_specific_interfaces) 와 같은 파이어폭스에서만 동작하는 추가적인 확장을 제공합니다.

{{domxref("DataTransfer")}}는 {{domxref("DataTransferItem")}}의 {{domxref("DataTransferItemList","목록")}} 인 {{domxref("DataTransfer.items","items")}} 프로퍼티를 가지고 있습니다. 각 {{domxref("DataTransferItem")}} 는 하나의 드래그 아이템을 나타내고 각 아이템은 데이터의 종류 (`string` 혹은 `file`) 를 나타내는 {{domxref("DataTransferItem.kind","kind")}} 프로퍼티와 데이터 아이템의 종류 (MIME 종류) 를 나타내는 {{domxref("DataTransferItem.type","type")}} 프로퍼티를 가집니다. {{domxref("DataTransferItem")}}은 드래그 아이템의 데이터를 가져오는 메소드를 제공합니다.

{{domxref("DataTransferItemList")}} 객체는 {{domxref("DataTransferItem")}}의 리스트입니다. 이 리스트 객체는 세 개의 메소드 - 드래그 아이템을 리스트에 추가하거나, 리스트에서 아이템을 삭제하거나, 모든 드래그 아이템을 리스트에서 삭제하는 메소드 - 를 가집니다.

A key difference between the {{domxref("DataTransfer")}} and {{domxref("DataTransferItem")}} interfaces is that the former uses the synchronous {{domxref("DataTransfer.getData","getData()")}} method to access a drag item's data, whereas the later uses the asynchronous {{domxref("DataTransferItem.getAsString","getAsString()")}} method to access a drag item's data.

{{domxref("DataTransfer")}}와 {{domxref("DataTransferItem")}}의 가장 중요한 차이점은 전자는 드래그 아이템의 데이터에 접근하기 위해 동기 메소드인 {{domxref("DataTransfer.getData","getData()")}}를 사용하는데 반해, 후자는 비동기 메소드인 {{domxref("DataTransferItem.getAsString","getAsString()")}}를 사용한다는 점입니다.

> **참고:** 참고: {{domxref("DragEvent")}} and {{domxref("DataTransfer")}}는 여러 데스크탑 브라우저에서 폭넓게 지원하고 있습니다. 하지만 {{domxref("DataTransferItem")}}와 {{domxref("DataTransferItemList")}}는 제한적으로 사용 가능합니다. 드래그 앤 드롭의 상호 운용성에 대한 더 많은 정보를 찾아보기 위해 [Interoperability](#interoperability)를 보십시오.

### Gecko 한정 인터페이스

모질라와 파이어폭스는 표준 드래그 앤 드롭 모델에서 제공하지 않는 몇가지 기능들을 추가로 제공합니다. 여러 개의 아이템을 동시에 드래그하거나 파일과 같이 문자열이 아닌 데이터를 드래그 하기 위한 여러 편리한 기능을 제공합니다. 더 많은 정보를 찾아보기 위해, [Dragging and Dropping Multiple Items](/ko/docs/DragDrop/Dragging_and_Dropping_Multiple_Items)을 보십시오. 덧붙여, 모든 Gecko 한정 프로퍼티나 Gecko 한정 메소드를 찾아보기 위해 {{domxref("DataTransfer")}} 참조 페이지도 보시기 바랍니다.

## 기본

이번 절은 드래그 앤 드롭 기능을 추가하기 위한 기본적인 방법을 요약하고 있습니다. 각 절은 단계를 설명하고, 짧은 코드 예제와 추가적인 정보를 위한 링크를 포함합니다.

### 어떤 것이 *draggable*인지 확인하기

하나의 요소를 draggable로 만들기 위해서는 [`draggable`](/ko/docs/Web/HTML/Global_attributes#draggable)와 {{domxref("GlobalEventHandlers.ondragstart","ondragstart")}} 전역 이벤트 핸들러를 아래 예제 코드와 같이 추가해야합니다.

```js
function dragstart_handler(ev) {
  console.log("dragStart");
  // 데이터 전달 객체에 대상 요소의 id를 추가합니다.
  ev.dataTransfer.setData("text/plain", ev.target.id);
}
```

```html
<script>
  function dragstart_handler(ev) {
    // 데이터 전달 객체에 대상 요소의 id를 추가합니다.
    ev.dataTransfer.setData("text/plain", ev.target.id);
  }

  window.addEventListener("DOMContentLoaded", () => {
    // id를 통해 element를 가져옵니다.
    const element = document.getElementById("p1");
    // 'dragstart' 이벤트 리스터를 추가합니다.
    element.addEventListener("dragstart", dragstart_handler);
  });
</script>

<p id="p1" draggable="true">This element is draggable.</p>
```

추가 정보를 위해 [draggable attribute reference](/ko/docs/Web/HTML/Global_attributes/draggable)와 [Drag operations guide](/ko/docs/Web/Guide/HTML/Drag_operations#draggableattribute)를 참고하세요.

### 드래그 데이터 정의하기

드래그할 때 자유롭게 데이터 아이템을 포함할 수 있습니다. 각 데이터 아이템은 특정 `type`의 {{domxref("DOMString","문자열")}}이며, 보통 `text/html`와 같은 MIME type입니다.

각 {{domxref("DragEvent","drag event")}} 은 이벤트 데이터를 가지고 있는 {{domxref("DragEvent.dataTransfer","dataTransfer")}} 를 가집니다. 이 프로퍼티는 ({{domxref("DataTransfer")}} 객체) 드래그 데이터를 관리하는 메소드를 가집니다. {{domxref("DataTransfer.setData","setData()")}} 는 아래 코드 예제와 같이 아이템을 드래그 데이터에 추가할 때 사용합니다.

```js
function dragstart_handler(ev) {
  // 드래그 데이터를 추가합니다.
  ev.dataTransfer.setData("text/plain", ev.target.id);
  ev.dataTransfer.setData("text/html", "<p>Example paragraph</p>");
  ev.dataTransfer.setData("text/uri-list", "http://developer.mozilla.org");
}
```

드래그 앤 드롭에 사용할 수 있는 공통 데이터 타입 (텍스트, HTML, 링크, 파일 등) 의 목록을 보려면, [Recommended Drag Types](/ko/docs/DragDrop/Recommended_Drag_Types)를 참고하십시오. 드래그 데이터에 대한 추가적인 정보를 위해서는 [Drag Data](/ko/docs/Web/Guide/HTML/Drag_operations#dragdata)를 참고하십시오.

### 드래그 이미지 정의하기

브라우저는 드래그 하는 동안 마우스 포인터 옆에 나타나는 이미지를 기본적으로 제공합니다. 어플리케이션에서 다른 이미지를 사용하기 원한다면 아래 예제와 같이 {{domxref("DataTransfer.setDragImage","setDragImage()")}}를 사용할 수 있습니다.

```js
function dragstart_handler(ev) {
  // 드래그 이미지로 사용할 이미지를 만듭니다.
  // 참고: "example.gif"를 존재하는 이미지로 바꾸지 않으면 기본 드래그 이미지를 사용합니다.
  var img = new Image();
  img.src = "example.gif";
  ev.dataTransfer.setDragImage(img, 10, 10);
}
```

드래그 이미지에 대해 더 알아보려면, [Setting the Drag Feedback Image](/ko/docs/DragDrop/Drag_Operations#dragfeedback)를 참고하세요.

### 드래그 효과 정의하기

{{domxref("DataTransfer.dropEffect","dropEffect")}} 프로퍼티는 드래그 앤 드롭 도중에 사용자에게 피드백 (보통 시각적인) 을 제공하기 위해 사용합니다. 브라우저가 드래그 하는 동안 어떤 마우스 포인터를 보여줄 지 결정합니다. 사용자가 마우스 포인터를 대상 드롭 요소에 올려놓으면, 브라우저는 드래그 효과에 적합한 마우스 포인터를 보여줄 것입니다.

세 개의 효과가 정의되어 있습니다:

`copy`는 현재 위치에서 드롭하는 위치로 데이터가 복사될 것을 암시합니다.

`move`는 현재 위치에서 드롭하는 위치로 데이터가 이동할 것을 암시합니다.

`link`는 드래그하는 위치와 드롭하는 위치 간의 일종의 관계나 연결이 맺어진 다는 것을 암시합니다.

특정 위치에서는 특정 효과가 허용된다는 것을 알려주기 위해 드래그 하는 도중에 효과가 변할 수 있습니다. 허용되는 경우에만 해당 위치에 드롭할 수 있습니다.

다음 예제는 어떻게 이 프로퍼티를 사용하는지 보여줍니다.

```js
function dragstart_handler(ev) {
  // 드래그 효과를 copy로 지정합니다.
  ev.dataTransfer.dropEffect = "copy";
}
```

더 자세한 설명은 [Drag Effects](/ko/docs/Web/Guide/HTML/Drag_operations#drageffects)를 참고하세요.

### 드롭 지역 정의하기

기본적으로는 브라우저는 HTML 요소에 뭔가를 드롭했을 때 아무 일도 일어나지 않도록 합니다. 특정 요소가 드롭 지역 혹은 droppable로 만들기 위해서는 해당 요소가 {{domxref("GlobalEventHandlers.ondragover","ondragover")}}와 {{domxref("GlobalEventHandlers.ondrop","ondrop")}} 이벤트 핸들러 속성을 가져야합니다. 아래 예제는 두 요소를 어떻게 사용하고, 각 요소에 포함된 기본적인 이벤트 핸들러를 보여줍니다.

```html
<script>
  function dragover_handler(ev) {
    ev.preventDefault();
    // dropEffect를 move로 설정.
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // 대상의 id를 가져와 대상 DOM에 움직인 요소를 추가합니다.
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

각 핸들러는 {{domxref("Event.preventDefault","preventDefault()")}} 를 호출해 추가적인 이벤트 (터치 이벤트나 포인터 이벤트) 가 일어나지 않도록 합니다.

추가적인 정보는, [Specifying Drop Targets](/ko/docs/Web/Guide/HTML/Drag_operations#droptargets)를 참고하세요.

### 드롭 효과 다루기

{{event("drop")}} 이벤트 핸들러는 자유롭게 드래그 데이터를 가공할 수 있습니다. 보통, 드래그 아이템과 각 아이템을 가공하기 위해 {{domxref("DataTransfer.getData","getData()")}}를 사용합니다. 추가로, {{domxref("DataTransfer.dropEffect","dropEffect")}} 값이나 보조키 상태에 따라 어플리케이션이 어떻게 동작할지를 결정할 수 있습니다.

아래 예제는 드롭 핸들러가 드래그 데이터로부터 드래그하는 요소의 id를 가져와 드래그하는 요소를 드롭하는 요소로 옮기기위해 사용합니다.

```html
<script>
  function dragstart_handler(ev) {
    // 데이터 전달 객체에 대상 요소의 id를 추가합니다.
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
  }
  function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  }
  function drop_handler(ev) {
    ev.preventDefault();
    // 대상의 id를 가져와 이동한 대상 DOM 요소를 추가합니다.
    // Get the id of the target and add the moved element to the target's DOM
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

더 많은 정보를 위해 [Performing a Drop](/ko/docs/Web/Guide/HTML/Drag_operations#drop)을 보십시오.

### 드래그가 끝나면

드래그가 끝나면 드래그한 요소에 {{event("dragend")}} 이벤트가 발생합니다. 이 이벤트는 드래그가 완료되거나 중간에 취소되어도 발생합니다. {{event("dragend")}} 이벤트 핸들러는 {{domxref("DataTransfer.dropEffect","dropEffect")}} 프로퍼티를 확인해 드래그가 성공했는지를 확인할 수 있습니다.

드래그 끝을 다루기 위한 더 많은 정보는 [Finishing a Drag](/ko/docs/DragDrop/Drag_Operations#dragend)를 참고하세요.

## 상호 운용성

[DataTransferItem interface's Browser Compatibility table](/ko/docs/Web/API/DataTransferItem#Browser_compatibility)에 나온 대로, 드래그 앤 드롭은 상대적으로 여러 데스크톱 브라우저에서 폭넓게 사용할 수 있습니다 ({{domxref("DataTransferItem")}}는 {{domxref("DataTransferItemList")}} 덜 지원하지만). 또한 모바일 브라우저에서는 매우 한정적으로 사용할 수 있습니다.

## 예제와 데모

- [Copying and moving elements with the `DataTransfer` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransfer.html)
- [Copying and moving elements with the `DataTransferListItem` interface](https://mdn.github.io/dom-examples/drag-and-drop/copy-move-DataTransferItemList.html)
- 파일 드래그 앤 드롭; 파이어폭스 전용: <http://jsfiddle.net/9C2EF/>
- 파일 드래그 앤 드롭; 모든 브라우저: [https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?html,js,output)

## 명세서

{{Specifications}}

## 더보기

- [Drag Operations](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Dragging and Dropping Multiple Items](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Multiple_items)
- [Recommended Drag Types](/ko/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [HTML5 Living Standard: Drag and Drop](https://html.spec.whatwg.org/multipage/interaction.html#dnd)
- [Drag and Drop interoperability data from CanIUse](http://caniuse.com/#search=draganddrop)
