---
title: VirtualKeyboard API
slug: Web/API/VirtualKeyboard_API
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{SeeCompatTable}}{{DefaultAPISidebar("VirtualKeyboard API")}}{{securecontext_header}}

VirtualKeyboard API는 개발자가 태블릿, 휴대폰 또는 하드웨어 키보드를 사용할 수 없는 기타 장치에서 화면상의 가상 키보드가 나타나고 사라질 때 애플리케이션의 레이아웃을 제어할 수 있도록 합니다.

웹 브라우저는 포커스가 맞춰지면, 일반적으로 뷰포트 높이를 조정하고 입력 필드로 스크롤 하는 방식으로 가상 키보드를 자체적으로 처리합니다.

아래 그림은 장치에서 화면상의 가상 키보드가 숨겨져 있을 때와 표시되어 있을 때, 웹 페이지에서 뷰포트 높이와 스크롤 위치의 차이를 보여줍니다.

![두 기기 중 하나는 가상 키보드가 없는 경우, 웹 페이지가 기기의 수직 공간의 대부분을 활용할 수 있음을 나타내며, 다른 하나는 가상 키보드가 있는 경우, 웹 페이지가 남은 공간에만 표시될 수 있음을 보여줍니다.](viewport-height.png)

더 복잡한 애플리케이션이나 멀티스크린 휴대폰과 같은 특정 장치에서는 가상 키보드가 나타날 때 레이아웃을 더 많이 제어해야 할 수 있습니다.

아래 그림은 듀얼 스크린 장치에서 가상 키보드가 두 화면 중 하나에만 표시될 때 어떤 일이 발생하는지 보여줍니다. 가상 키보드를 수용하기 위해 두 화면 모두에서 뷰포트가 작아지고 가상 키보드가 표시되지 않는 화면에는 낭비되는 공간이 남습니다.

![가상 키보드가 한 화면에 표시되는 듀얼 스크린 장치로, 웹 페이지가 키보드가 표시된 후 남은 수직 공간만 사용할 수 있음을 보여줍니다. 이에 따라 다른 화면에는 빈 공간이 남을 수 있습니다.](dual-screen.png)

VirtualKeyboard API를 사용하면 브라우저가 가상 키보드를 자동으로 처리하는 방식을 선택 해제하고 대신 가상 키보드를 완전히 제어할 수 있습니다. 또한 VirtualKeyboard API를 통해 양식 컨트롤에 포커스가 맞춰져 있을 때, 필요에 따라 키보드가 계속 나타나고 사라지지만 뷰포트는 변경되지 않으며 JavaScript 및 CSS를 사용하여 레이아웃을 조정할 수 있습니다.

## 개념

VirtualKeyboard API는 세 부분으로 구성됩니다.

- {{domxref('navigator.virtualKeyboard')}}를 통해 접근하는 {{domxref("VirtualKeyboard")}} 인터페이스는 자동 가상 키보드 동작을 선택 해제하고, 프로그래밍 방식으로 가상 키보드를 표시하거나 숨기고, 가상 키보드의 현재 위치와 크기를 가져오는 데 사용됩니다.
- `keyboard-inset-*` CSS 환경 변수는 가상 키보드의 위치 및 크기에 대한 정보를 제공합니다.
- [`virtualkeyboardpolicy`](/ko/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) 속성은 가상 키보드를 `contenteditable` 요소에 표시할지 여부를 지정합니다.

### 자동 가상 키보드 동작 사용 중지

브라우저의 자동 가상 키보드 동작을 선택 해제하려면, use `navigator.virtualKeyboard.overlaysContent = true`를 사용합니다. 브라우저는 더 이상 가상 키보드를 위한 공간을 확보하기 위해 뷰포트의 크기를 자동으로 조정하지 않고 대신 콘텐츠를 오버레이 합니다.

### JavaScript를 사용하여 가상 키보드 지오메트리 감지

브라우저의 기본 동작을 선택 해제하고 나면, `navigator.virtualKeyboard.boundingRect`를 사용하여 가상 키보드의 현재 지오메트리를 가져와 CSS 및 JavaScript를 사용하여 레이아웃을 적절히 조정할 수 있습니다. `geometrychange` 이벤트를 사용하여 키보드가 표시되거나 숨겨질 때와 같은 지오메트리 변경을 수신할 수 있습니다.

이는 가상 키보드가 덮지 않는 영역에 중요한 UI 요소를 배치할 때 유용합니다.

아래 코드는 `geometrychange` 이벤트를 사용하여 가상 키보드 지오메트리가 변경되는 시점을 감지한 다음, `boundingRect` 속성에 접근하여 가상 키보드의 크기와 위치를 조회합니다.

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

### CSS 환경 변수를 사용하여 가상 키보드 지오메트리 감지

또한 VirtualKeyboard API는 다음 {{cssxref("env", "CSS environment variables", "", "nocode")}}를 노출합니다: `keyboard-inset-top`, `keyboard-inset-right`, `keyboard-inset-bottom`, `keyboard-inset-left`, `keyboard-inset-width`와 `keyboard-inset-height`.

`keyboard-inset-*` CSS 환경 변수는 CSS를 사용하여 레이아웃을 가상 키보드 모양에 맞게 조정하는 데 유용합니다. 이 변수는 뷰포트 가장자리에서 위쪽, 오른쪽, 아래쪽, 왼쪽 인셋으로 직사각형을 정의합니다. 필요한 경우 `width`와 `height` 변수도 사용할 수 있습니다.

아래 코드는 `keyboard-inset-height` CSS 변수를 사용하여 채팅과 유사한 애플리케이션에서 메시지 목록 및 입력 필드 아래에 가상 키보드가 표시될 공간을 예약합니다. 가상 키보드가 숨겨지면, `env()` 함수가 `0px`를 반환하고 `keyboard` 격자 영역이 숨겨집니다. 메시지 및 입력 요소는 뷰포트의 전체 높이를 차지할 수 있습니다. 가상 키보드가 나타나면 `keyboard` 격자 영역은 가상 키보드의 높이가 됩니다.

```html
<style>
  body {
    display: grid;
    margin: 0;
    height: 100vh;
    grid-template:
      "messages" 1fr
      "input" auto
      "keyboard" env(keyboard-inset-height, 0px);
  }
</style>
<ul id="messages"></ul>
<input type="text" />
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;
  }
</script>
```

### `contenteditable` 요소에서 가상 키보드 제어

기본적으로 [`contenteditable`](/ko/docs/Web/HTML/Reference/Global_attributes/contenteditable) 속성을 사용하는 요소는 탭 하거나 클릭하면 가상 키보드를 나타냅니다. 특정 상황에서는 이 동작을 방지하고 대신 다른 이벤트 후에 가상 키보드를 표시하는 것이 바람직할 수 있습니다.

브라우저에서 가상 키보드가 기본적으로 처리되지 않도록 [`virtualkeyboardpolicy`](/ko/docs/Web/HTML/Global_attributes/virtualkeyboardpolicy) 속성을 `manual`으로 설정하고, 대신 {{domxref("VirtualKeyboard")}} 인터페이스의 `show()`와 `hide()` 메서드를 사용하여 직접 처리하세요.

아래 코드는 `virtualkeyboardpolicy` 속성과 `navigator.virtualKeyboard.show()` 메서드를 사용하여 두 번 클릭 시 가상 키보드를 대신 표시하는 방법을 보여줍니다.

```html
<div contenteditable virtualkeyboardpolicy="manual" id="editor"></div>
<script>
  if ("virtualKeyboard" in navigator) {
    navigator.virtualKeyboard.overlaysContent = true;

    const editor = document.getElementById("editor");
    editor.addEventListener("dblclick", () => {
      navigator.virtualKeyboard.show();
    });
  }
</script>
```

## 인터페이스

- {{domxref('VirtualKeyboard')}} {{experimental_inline}}
  - : 키보드 레이아웃 맵을 검색하고 물리적 키보드에서 키 누름 캡처를 토글 하는 기능을 제공합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [VirtualKeyboard API 완전 제어](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
