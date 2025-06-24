---
title: "<dialog>: 대화 상자 요소"
slug: Web/HTML/Reference/Elements/dialog
l10n:
  sourceCommit: 2dfac351d5f732bb9b61ec3b506d725e01fcc1bf
---

{{HTMLSidebar}}

**`<dialog>`** [HTML](/ko/docs/Web/HTML) 요소는 모달 또는 비모달 대화 상자나 닫을 수 있는 알림창, 검사기, 하위 창과 같은 상호작용 가능한 컴포넌트를 나타냅니다.

HTML `<dialog>` 요소는 모달 및 비모달 대화 상자를 만드는 데 사용됩니다. 모달 대화 상자는 페이지의 나머지 부분과 상호작용을 중단시키는 반면, 비모달 대화 상자는 페이지의 나머지 부분과 상호작용을 허용합니다.

`<dialog>` 요소를 표시하려면 JavaScript를 사용해야 합니다. 모달 대화 상자를 표시하려면 {{domxref("HTMLDialogElement.showModal()", ".showModal()")}} 메서드를 사용하고, 비모달 대화 상자를 표시하려면 {{domxref("HTMLDialogElement.show()", ".show()")}} 메서드를 사용합니다. 대화 상자는 {{domxref("HTMLDialogElement.close()", ".close()")}} 메서드를 사용하거나 `<dialog>` 요소 내에 중첩된 `<form>`을 제출할 때 [`dialog`](/ko/docs/Web/HTML/Reference/Elements/form#method) 메서드를 이용하여 닫을 수 있습니다. 모달 대화 상자는 <kbd>Esc</kbd> 키를 눌러 닫을 수도 있습니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)을 포함합니다.

> [!WARNING]
> 이 `tabindex` 특성은 `<dialog>` 요소에 사용하면 안 됩니다. [사용 일람](#사용_일람)을 참고하세요.

- `closedby`
  - : `<dialog>` 요소를 닫는 데 사용할 수 있는 사용자 작업 유형을 지정합니다. 이 특성은 대화 상자를 닫을 수 있는 세 가지 방법을 구분합니다.
    - 간편 닫기 사용자 작업. 사용자가 대화 상자 외부를 클릭하거나 탭할 때 `<dialog>`가 닫힙니다. 이는 ["자동" 상태 팝오버의 "간편 닫기" 동작](/ko/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)과 동일합니다.
    - 플랫폼별 사용자 작업. 데스크톱 플랫폼에서 <kbd>Esc</kbd> 키를 누르거나 모바일 플랫폼에서 "뒤로 가기" 또는 "닫기" 제스처와 같은 동작입니다.
    - 개발자가 지정한 메커니즘. {{domxref("HTMLDialogElement.close()")}}를 호출하는 [`click`](/ko/docs/Web/API/Element/click_event) 핸들러가 있는 {{htmlelement("button")}} 또는 {{htmlelement("form")}} 제출과 같은 메커니즘입니다.

    가능한 값은 다음과 같습니다.
    - `any`
      - : 세 가지 방법 중 어떤 방법으로든 대화 상자를 닫을 수 있습니다.
    - `closerequest`
      - : 플랫폼별 사용자 동작 또는 개발자가 지정한 메커니즘으로 대화 상자를 닫을 수 있습니다.
    - `none`
      - : 개발자가 지정한 메커니즘으로만 대화 상자를 닫을 수 있습니다.

    `<dialog>` 요소에 유효한 `closedby` 값이 지정되지 않은 경우,
    - {{domxref("HTMLDialogElement.showModal()", "showModal()")}}을 사용하여 열었다면 `"closerequest"` 값처럼 동작합니다.
    - 그렇지 않으면 `"none"` 값처럼 동작합니다.

- `open`
  - : 대화 상자가 활성화되어 상호 작용할 수 있음을 나타냅니다. `open` 특성이 설정되지 않으면 대화 상자가 사용자에게 표시되지 않습니다.
    대화 상자를 렌더링하려면 `open` 특성 대신 `.show()` 또는 `.showModal()` 메서드를 사용하는 것이 좋습니다. `open` 특성을 사용하여 `<dialog>`를 열면 비모달 상태가 됩니다.

    > [!NOTE]
    > 이 `open` 특성의 존재 여부를 토글하여 비모달 대화 상자의 열림 및 닫힘 상태를 전환할 수 있지만, 이 접근 방식은 권장되지 않습니다. 자세한 내용은 {{domxref("HTMLDialogElement.open", "open")}}을 참조하세요.

## 사용 일람

- HTML {{HTMLElement("form")}} 요소는 `method="dialog"` 특성이 있거나 양식 제출 버튼에 [`formmethod="dialog"`](/ko/docs/Web/HTML/Reference/Elements/input#formmethod)가 설정된 경우 대화 상자를 닫는 데 사용할 수 있습니다. `<dialog>` 내의 `<form>`이 `dialog` 메서드를 통해 제출되면 대화 상자가 닫히고, 폼 컨트롤의 상태가 저장되지만 제출되지는 않으며, {{domxref("HTMLDialogElement.returnValue", "returnValue")}} 속성에는 클릭된 버튼의 값이 설정됩니다.
- CSS {{cssxref('::backdrop')}} 의사 요소를 사용하여 모달 대화 상자의 배경을 스타일링할 수 있습니다. 이 배경은 대화 상자를 {{domxref("HTMLDialogElement.showModal()")}} 메서드를 사용하여 나타낼 때 `<dialog>` 요소 뒤에 표시됩니다. 예를 들어, 이 의사 요소를 사용하여 모달 대화 상자 뒤에 있는 비활성 콘텐츠를 흐리게 하거나, 어둡게 하거나, 가리는 등의 작업을 할 수 있습니다.
- 모달 대화 상자를 열 때 사용자가 즉시 상호 작용할 것으로 예상되는 요소에 [`autofocus`](/ko/docs/Web/HTML/Reference/Global_attributes/autofocus) 특성을 추가해야 합니다. 더 즉각적인 상호 작용이 필요한 다른 요소가 없는 경우, 대화 상자 내의 닫기 버튼에 `autofocus`를 추가하거나, 사용자가 대화 상자 자체를 클릭/활성화하여 닫을 것으로 예상되는 경우에는 대화 상자에 직접 `autofocus`를 추가하는 것이 좋습니다.
- `<dialog>` 요소는 상호작용하지 않고 포커스를 받지 않으므로 `tabindex` 속성을 추가하지 마세요. 대화 상자 내 닫기 버튼을 포함한 콘텐츠는 포커스를 받을 수 있고 상호작용할 수 있습니다.

## 접근성

대화 상자를 구현할 때, 사용자 포커스를 설정하기 가장 적절한 위치를 고려하는 것이 중요합니다. {{domxref("HTMLDialogElement.showModal()")}}을 사용하여 `<dialog>`를 열 때 대화 상자 내부에서 탭 순서상 첫 번째로 포커스 가능한 요소에 포커스가 자동으로 설정됩니다. [`autofocus`](/ko/docs/Web/HTML/Reference/Global_attributes/autofocus) 특성을 사용하여 초기 포커스를 명시적으로 지정하면 각 대화 상자에서 가장 적절한 요소에 초기 포커스가 설정되도록 할 수 있습니다. 대화 상자 내에서 초기 포커스를 어디에 설정할지 명확하지 않은 경우, 특히 대화 상자의 내용이 호출 시점에 동적으로 렌더링되는 상황에서는 `<dialog>` 요소 자체가 초기 포커스 배치에 가장 적절한 위치가 될 수 있습니다.

사용자가 대화 상자를 닫을 수 있는 메커니즘을 제공해야 합니다. 모든 사용자가 대화 상자를 닫을 수 있도록 보장하는 가장 강력한 방법은 확인, 취소 또는 닫기 버튼과 같은 명시적 버튼을 포함하는 것입니다.

기본적으로 `showModal()` 메서드로 호출된 대화 상자는 <kbd>Esc</kbd> 키를 눌러 닫을 수 있습니다. 비모달 대화 상자는 기본적으로 <kbd>Esc</kbd> 키로 닫히지 않으며, 비모달 대화 상자의 목적에 따라서는 이러한 동작이 필요하지 않을 수 있습니다. 키보드 사용자는 <kbd>Esc</kbd> 키가 모달 대화 상자를 닫을 것으로 예상하므로, 이 동작이 구현되고 유지되도록 해야 합니다. 여러 모달 대화 상자가 열려 있는 경우 <kbd>Esc</kbd> 키를 누르면 마지막으로 표시된 대화 상자만 닫아야 합니다. `<dialog>`를 사용하면 이 동작은 브라우저에서 제공됩니다.

다른 요소를 사용하여 대화 상자를 만들 수 있지만, 기본 `<dialog>` 요소는 사용성과 접근성 기능을 내장하고 있으므로 다른 요소로 비슷한 기능을 구현할 때는 이러한 특성들을 직접 구현해야 합니다. 사용자가 직접 대화 상자를 구현하는 경우, 모든 예상되는 기본 동작이 지원되는지 확인하고 적절한 레이블 지정 권장 사항을 준수해야 합니다.

`<dialog>` 요소는 ARIA [role="dialog"](/ko/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role) 특성을 사용하는 사용자 구현 대화 상자와 유사한 방식으로 브라우저에서 처리됩니다. `showModal()` 메서드로 호출된 `<dialog>` 요소는 암묵적으로 [aria-modal="true"](/ko/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-modal)를 가지고 있는 반면, `show()` 메서드로 호출되거나 `open` 특성을 사용하여 표시되거나 `<dialog>`의 기본 `display`를 변경하여 표시되는 `<dialog>` 요소는 `[aria-modal="false"]`로 노출됩니다. 모달 대화 상자를 구현할 때 `<dialog>` 및 그 콘텐츠를 제외한 모든 것은 [`inert`](/ko/docs/Web/HTML/Reference/Global_attributes/inert) 특성을 사용하여 비활성화되어야 합니다. `<dialog>`와 `HTMLDialogElement.showModal()` 메서드를 사용하면 이 동작은 브라우저에서 제공됩니다.

## 예제

### HTML만으로 대화 상자 만들기

이 예제는 HTML만을 사용하여 비모달 대화 상자를 만드는 방법을 보여줍니다. `<dialog>` 요소의 불리언 `open` 특성으로 인해 페이지가 로드될 때 대화 상자가 열린 상태로 나타납니다. `<form>` 요소의 `method` 특성이 `"dialog"`로 설정되어 있기 때문에 "확인" 버튼을 클릭하면 대화 상자가 닫힙니다. 이 경우 JavaScript는 필요하지 않습니다.

```html
<dialog open>
  <p>안녕하세요, 여러분!</p>
  <form method="dialog">
    <button>확인</button>
  </form>
</dialog>
```

#### 결과

{{EmbedLiveSample("HTML-only_dialog", "100%", 200)}}

> [!NOTE]
> 결과물을 초기화하려면 페이지를 새로고침 하세요.

이 대화 상자는 `open` 특성이 있기 때문에 처음에 열려 있습니다. `open` 특성을 사용하여 표시되는 대화 상자는 비모달입니다. "확인"을 클릭한 후 대화 상자가 닫히고 결과창은 비어있습니다. 대화 상자가 닫히면 다시 열 수 있는 방법이 제공되지 않습니다. 이러한 이유로 비모달 대화 상자를 표시하는 데 선호되는 방법은 {{domxref("HTMLDialogElement.show()")}} 메서드를 사용하는 것입니다. 불리언 `open` 특성을 추가하거나 제거하여 대화 상자의 표시를 전환할 수 있지만, 이는 권장되는 방법이 아닙니다.

### 모달 대화 상자 만들기

이 예제는 [gradient](/ko/docs/Web/CSS/gradient) 배경이 있는 모달 대화 상자를 보여줍니다. `.showModal()` 메서드는 "대화 상자 표시" 버튼이 클릭될 때 모달 대화 상자를 엽니다. 대화 상자는 <kbd>Esc</kbd> 키를 누르거나 대화 상자 내의 "닫기" 버튼이 클릭될 때 `close()` 메서드를 통해 닫을 수 있습니다.

대화 상자가 열리면 브라우저는 대화 상자 내에서 포커스를 받을 수 있는 첫 번째 요소에 기본적으로 포커스를 줍니다. 이 예제에서는 [`autofocus`](/ko/docs/Web/HTML/Reference/Global_attributes/autofocus) 특성이 "닫기" 버튼에 적용되어 대화 상자가 열릴 때 포커스를 받습니다. 이는 대화 상자가 열린 직후에 사용자가 상호 작용할 것으로 예상되는 요소이기 때문입니다.

#### HTML

```html
<dialog>
  <button autofocus>닫기</button>
  <p>이 모달 대화 상자는 멋진 배경을 가지고 있습니다!</p>
</dialog>
<button>대화 상자 표시</button>
```

#### CSS

{{cssxref('::backdrop')}} 의사 요소를 사용하여 대화 상자의 배경을 스타일링할 수 있습니다.

```css
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
```

#### JavaScript

대화 상자는 `.showModal()` 메서드를 사용하여 모달 방식으로 열리고 `.close()` 또는 `.requestClose()` 메서드를 사용하여 닫힙니다.

```js
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("dialog + button");
const closeButton = document.querySelector("dialog button");

// "대화 상자 표시" 버튼이 모달 방식으로 대화 상자를 엽니다
showButton.addEventListener("click", () => {
  dialog.showModal();
});

// "닫기" 버튼이 대화 상자를 닫습니다
closeButton.addEventListener("click", () => {
  dialog.close();
});
```

#### 결과

{{EmbedLiveSample("Creating_a_modal_dialog", "100%", 200)}}

모달 대화 상자가 표시되면 화면에 존재하는 다른 대화 상자보다 위에 나타납니다. 모달 대화 상자 외부의 모든 것은 비활성 상태이며 대화 상자 외부와 상호 작용이 차단됩니다. 대화 상자가 열려 있을 때 대화 상자 자체를 제외하고는 문서와의 상호 작용이 불가능하다는 점에 유의하세요. "대화 상자 표시" 버튼은 대화 상자의 불투명한 배경에 대부분 가려져 있으며 비활성 상태입니다.

### 대화 상자에서 반환 값 처리하기

이 예제는 `<dialog>` 요소의 [`returnValue`](/ko/docs/Web/API/HTMLDialogElement/returnValue)와 폼을 사용하여 모달 대화 상자를 닫는 방법을 보여줍니다. 기본적으로 `returnValue`는 빈 문자열이지만, `<dialog>` 요소 내에 폼을 제출하는 버튼이 있는 경우에는 해당 버튼의 값이 반환됩니다.

이 예제는 "대화 상자 표시" 버튼이 클릭될 때 모달 대화 상자를 엽니다. 대화 상자에는 {{HTMLElement("select")}}와 {{HTMLElement("button")}} 요소 두 개로 이루어진 양식이 포함되어 있으며, 버튼들은 기본적으로 `type="submit"`입니다. 이벤트 리스너는 선택 옵션이 변경될 때마다 "확인" 버튼의 값을 업데이트합니다. "확인" 버튼을 눌러 대화 상자를 닫으면 버튼의 현재 값이 반환 값입니다. "취소" 버튼을 눌러 대화 상자를 닫으면 `returnValue`는 `cancel`입니다.

대화 상자가 닫히면 "대화 상자 표시" 버튼 아래에 반환 값이 표시됩니다. 대화 상자가 <kbd>Esc</kbd> 키를 눌러 닫히면 `returnValue`가 업데이트되지 않고 `close` 이벤트가 발생하지 않으므로 {{HTMLElement("output")}}의 텍스트는 업데이트되지 않습니다.

#### HTML

```html
<!-- 폼이 포함된 모달 대화 상자 -->
<dialog id="favDialog">
  <form>
    <p>
      <label>
        좋아하는 동물:
        <select>
          <option value="default">선택하기…</option>
          <option>씨몽키</option>
          <option>레서판다</option>
          <option>거미원숭이</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel" formmethod="dialog">취소</button>
      <button id="confirmBtn" value="default">확인</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">대화 상자 표시</button>
</p>
<output></output>
```

#### JavaScript

```js
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// "대화 상자 표시" 버튼이 <dialog>를 모달 방식으로 엽니다
showButton.addEventListener("click", () => {
  favDialog.showModal();
});

// "취소" 버튼은 [formmethod="dialog"]이기 때문에 제출하지 않고 대화 상자를 닫아 close 이벤트를 트리거합니다.
favDialog.addEventListener("close", (e) => {
  outputBox.value =
    favDialog.returnValue === "default"
      ? "반환 값이 없습니다."
      : `반환 값: ${favDialog.returnValue}.`; // 빈 문자열 대신 "default"를 확인해야 합니다
});

// "확인" 버튼의 기본 동작인 폼을 제출하는 것을 방지하고, `close()` 메서드로 대화 상자를 닫아 "close" 이벤트를 트리거합니다.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // 가짜 폼을 제출하지 않습니다
  favDialog.close(selectEl.value); // 여기서 셀렉트 박스 값을 보내야 합니다.
});
```

#### 결과

{{EmbedLiveSample("Handling the return value from the dialog", "100%", 300)}}

위의 예제는 모달 대화 상자를 닫는 다음 세 가지 방법을 보여줍니다.

- `dialog` 메서드를 사용하여 대화 상자 내의 폼을 제출해 닫는 방법([HTML만으로 대화 상자 만들기](#html만으로_대화_상자_만들기)에서 볼 수 있음).
- <kbd>Esc</kbd> 키를 눌러 닫는 방법.
- {{domxref("HTMLDialogElement.close()")}} 메서드를 호출하여 닫는 방법([모달 예제](#모달_대화_상자_만들기)에서 볼 수 있음).
  이 예제에서 "취소" 버튼은 `dialog` 폼 메서드를 통해 대화 상자를 닫고 "확인" 버튼은 {{domxref("HTMLDialogElement.close()")}} 메서드를 통해 대화 상자를 닫습니다.

"취소" 버튼에는 [`formmethod="dialog"`](/ko/docs/Web/HTML/Reference/Elements/input/submit#formmethod) 특성이 포함되어 있어 {{HTMLElement("form")}}의 기본 {{HTTPMethod("GET")}} 메서드를 재정의합니다. 폼의 메서드가 [`dialog`](#사용_일람)인 경우 폼의 상태가 저장되지만 제출되지 않고 대화 상자가 닫힙니다.

`action`이 없으면 기본 {{HTTPMethod("GET")}} 메서드를 통해 폼을 제출하면 페이지가 다시 로드됩니다. 우리는 JavaScript를 사용하여 {{domxref("event.preventDefault()")}}와 {{domxref("HTMLDialogElement.close()")}} 메서드를 각각 사용하여 제출을 방지하고 대화 상자를 닫습니다.

모든 `dialog` 요소 내에 닫기 메커니즘을 제공하는 것이 중요합니다. <kbd>Esc</kbd> 키는 기본적으로 비모달 대화 상자를 닫지 않으며, 모든 사용자가 물리적 키보드를 이용할 수 있다고 가정해서는 안 됩니다 (예: 키보드 없이 터치스크린 장치만 사용하는 경우).

### 필수 폼 입력이 있는 대화 상자 닫기

대화 상자 내의 폼에 필수 입력이 있는 경우, 사용자는 필수 입력에 값을 제공한 후에만 대화 상자를 닫을 수 있습니다. 이런 대화 상자를 닫으려면 닫기 버튼에 [`formnovalidate`](/ko/docs/Web/HTML/Reference/Elements/input#formnovalidate) 특성을 사용하거나 닫기 버튼을 클릭할 때 대화 상자 객체의 `close()` 메서드를 호출하세요.

```html
<dialog id="dialog">
  <form method="dialog">
    <p>
      <label>
        좋아하는 동물:
        <input type="text" required />
      </label>
    </p>
    <div>
      <input type="submit" id="normal-close" value="일반 닫기" />
      <input
        type="submit"
        id="novalidate-close"
        value="검증 없이 닫기"
        formnovalidate />
      <input type="submit" id="js-close" value="JS 닫기" />
    </div>
  </form>
</dialog>
<p>
  <button id="show-dialog">대화 상자 표시</button>
</p>
<output></output>
```

```css hidden
[type="submit"] {
  margin-right: 1rem;
}
```

#### JavaScript

```js
const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("dialog");
const jsCloseBtn = dialog.querySelector("#js-close");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});

jsCloseBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
```

#### 결과

{{EmbedLiveSample("Closing a dialog with a required form input", "100%", 300)}}

결과에서 볼 수 있듯이 일반 닫기 버튼으로는 대화 상자를 닫을 수 없습니다. 그러나 취소 버튼에 `formnovalidate` 특성을 사용하여 폼 유효성 검사를 우회하면 대화 상자를 닫을 수 있습니다. 프로그래밍 방식으로 `dialog.close()`를 사용해도 이러한 대화 상자를 닫을 수 있습니다.

### 다양한 closedby 동작 비교

이 예제는 [`closedby`](#closedby) 특성의 서로 다른 값 간의 동작 차이를 보여줍니다.

#### HTML

{{htmlelement("button")}} 요소 세 개와 `<dialog>` 요소 세 개를 제공합니다. 버튼마다 `closedby` 특성 세 가지 값 `none`, `closerequest`, `any` 중 하나의 동작을 보여주는 대화 상자를 열도록 프로그래밍되었습니다. 모든 `<dialog>` 요소에는 대화 상자를 닫는 `<button>` 요소가 포함되어 있습니다.

```html live-sample___closedbyvalues
<p><code>&lt;dialog&gt;</code> 유형을 선택하세요:</p>
<div id="controls">
  <button id="none-btn"><code>closedby="none"</code></button>
  <button id="closerequest-btn">
    <code>closedby="closerequest"</code>
  </button>
  <button id="any-btn"><code>closedby="any"</code></button>
</div>

<dialog closedby="none">
  <h2><code>closedby="none"</code></h2>
  <p>
    특정 제공된 메커니즘만을 사용하여 닫을 수 있으며, 이 경우에는 아래 "닫기"
    버튼을 누르는 것입니다.
  </p>
  <button class="close">닫기</button>
</dialog>

<dialog closedby="closerequest">
  <h2><code>closedby="closerequest"</code></h2>
  <p>"닫기" 버튼 또는 Esc 키를 사용하여 닫을 수 있습니다.</p>
  <button class="close">닫기</button>
</dialog>

<dialog closedby="any">
  <h2><code>closedby="any"</code></h2>
  <p>
    "닫기" 버튼, Esc 키 또는 대화 상자 외부를 클릭하여 닫을 수 있습니다. "간편
    닫기" 동작입니다.
  </p>
  <button class="close">닫기</button>
</dialog>
```

```css hidden live-sample___closedbyvalues
body {
  font-family: sans-serif;
}

#controls {
  display: flex;
  justify-content: space-around;
}

dialog {
  width: 480px;
  border-radius: 5px;
  border-color: rgb(0 0 0 / 0.3);
}

dialog h2 {
  margin: 0;
}

dialog p {
  line-height: 1.4;
}
```

#### JavaScript

여기서는 메인 컨트롤의 `<button>` 요소, `<dialog>` 요소 및 대화 상자 내부의 "닫기" `<button>` 요소를 참조하기 위해 다양한 변수를 할당합니다. 먼저 [`addEventListener`](/ko/docs/Web/API/EventTarget/addEventListener)를 사용하여 각 컨트롤 버튼에 [`click`](/ko/docs/Web/API/Element/click_event) 이벤트 리스너를 할당합니다. 이 이벤트 핸들러 함수는 [`showModal()`](/ko/docs/Web/API/HTMLDialogElement/showModal)을 통해 관련 `<dialog>` 요소를 엽니다. 그런 다음 "닫기" `<button>` 참조를 반복하여 [`close()`](/ko/docs/Web/API/HTMLDialogElement/close)를 통해 `<dialog>` 요소를 닫는 `click` 이벤트 핸들러 함수를 각각 버튼에 할당합니다.

```js live-sample___closedbyvalues
const noneBtn = document.getElementById("none-btn");
const closerequestBtn = document.getElementById("closerequest-btn");
const anyBtn = document.getElementById("any-btn");

const noneDialog = document.querySelector("[closedby='none']");
const closerequestDialog = document.querySelector("[closedby='closerequest']");
const anyDialog = document.querySelector("[closedby='any']");

const closeBtns = document.querySelectorAll(".close");

noneBtn.addEventListener("click", () => {
  noneDialog.showModal();
});

closerequestBtn.addEventListener("click", () => {
  closerequestDialog.showModal();
});

anyBtn.addEventListener("click", () => {
  anyDialog.showModal();
});

closeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.parentElement.close();
  });
});
```

#### 결과

렌더링된 결과는 다음과 같습니다.

{{EmbedLiveSample("closedby-values", "100%", 300)}}

각 버튼을 클릭하여 대화 상자를 열어보세요. 첫 번째는 "닫기" 버튼을 클릭해야만 닫을 수 있습니다. 두 번째는 <kbd>Esc</kbd> 키와 같은 장치별 사용자 작업을 통해서도 닫을 수 있습니다. 세 번째는 완전한 ["간편 닫기" 동작](/ko/docs/Web/API/Popover_API/Using#auto_state_and_light_dismiss)을 가지므로 대화 상자 외부를 클릭하거나 탭하여 닫을 수도 있습니다.

### 대화 상자 애니메이션

`<dialog>`는 숨겨져 있을 때 [`display: none;`](/ko/docs/Web/CSS/display)으로 설정되고 나타날 때 `display: block;`으로 설정되며, {{glossary("top layer")}}와 [접근성 트리](/ko/docs/Web/Performance/Guides/How_browsers_work#building_the_accessibility_tree)에서 제거/추가됩니다. 따라서 `<dialog>` 요소에 애니메이션을 적용하려면 {{cssxref("display")}} 속성이 애니메이션을 지원해야 합니다. [지원하는 브라우저](/ko/docs/Web/CSS/display#browser_compatibility)는 [불연속 애니메이션 유형](/ko/docs/Web/CSS/CSS_animated_properties#discrete)의 변형을 통해 `display` 속성에 애니메이션 효과를 줍니다. 구체적으로, 브라우저는 `none`과 `display` 의 다른 값 사이를 전환하여 애니메이션이 진행되는 전체 기간 동안 콘텐츠가 보이도록 처리합니다.

예를 들면,

- `display`를 `none`에서 `block` (또는 다른 보이는 `display` 값)으로 애니메이션을 적용할 때, 애니메이션 시작 시점인 `0%`에서 값이 `block`으로 전환되어 애니메이션 전체 기간 동안 요소가 보이게 됩니다.
- `display`를 `block`(또는 다른 보이는 `display` 값)에서 `none`으로 애니메이션을 적용할 때, 애니메이션 종료 시점인 `100%`에서 값이 `none`으로 전환되어 애니메이션 전체 기간 동안 요소가 보이게 됩니다.

> [!NOTE]
> 이 [CSS 전환](/ko/docs/Web/CSS/CSS_transitions)을 사용하여 애니메이션을 적용할 때는 위의 동작을 활성화하기 위해 [`transition-behavior: allow-discrete`](/ko/docs/Web/CSS/transition-behavior) 를 설정해야 합니다. 이 동작은 [CSS 애니메이션](/ko/docs/Web/CSS/CSS_animations)으로 애니메이션을 적용할 때 기본적으로 사용할 수 있으므로 별도의 추가 작업이 필요하지 않습니다.

#### 대화 상자 요소 전환하기

CSS 전환으로 `<dialog>`에 애니메이션을 적용할 때 다음 기능이 필요합니다.

- [`@starting-style`](/ko/docs/Web/CSS/@starting-style) @규칙
  - : `<dialog>`가 열릴 때마다 전환 효과를 적용하고 싶은 속성들의 시작 값을 지정합니다. 이는 예상치 못한 동작을 방지하기 위해 필요합니다. 기본적으로 CSS 전환은 이미 화면에 표시된 요소에서 속성이 한 값에서 다른 값으로 변경될 때만 발생합니다. 요소가 처음 스타일을 적용받을 때나 `display` 속성이 `none`에서 다른 값으로 바뀔 때는 트리거되지 않습니다.
- [`display`](/ko/docs/Web/CSS/display) 속성
  - : 전환 목록에 `display`를 추가하여 대화 상자가 전환 기간 동안 `display: block`(또는 대화 상자가 열린 상태에 설정된 다른 보이는 `display` 값)으로 유지되어 다른 전환 효과가 제대로 보입니다.
- [`overlay`](/ko/docs/Web/CSS/overlay) 속성
  - : 전환 목록에 `overlay`를 포함하여 전환이 완료될 때까지 상위 레이어에서 `<dialog>` 제거를 지연하여 전환 효과가 제대로 보입니다.
- {{cssxref("transition-behavior")}} 속성
  - : `display`와 `overlay` 전환(또는 {{cssxref("transition")}} 단축형)에 `transition-behavior: allow-discrete`를 설정하여 기본적으로 애니메이션이 불가능한 이 두 속성에 불연속 전환을 적용할 수 있습니다.

다음은 이것이 어떻게 동작하는지 보여주는 간단한 예제입니다.

##### HTML

HTML에는 `<dialog>` 요소와 대화 상자를 표시하는 버튼이 포함되어 있습니다. 또한 `<dialog>` 요소에는 대화 상자 자체를 닫을 수 있는 다른 버튼이 포함되어 있습니다.

```html
<dialog id="dialog">
  여기에 내용
  <button class="close">닫기</button>
</dialog>

<button class="show">모달 나타내기</button>
```

##### CSS

CSS에는 `opacity`와 `transform` 속성의 전환 시작 스타일을 정의하는 `@starting-style` 블록과 `dialog:open` 상태에 대한 전환 종료 스타일, 그리고 `<dialog>`가 나타난 후 다시 전환할 기본 `dialog` 상태의 기본 스타일이 포함되어 있습니다. `<dialog>`의 `transition` 목록에는 이러한 속성뿐만 아니라 `display` 및 `overlay` 속성도 포함되며, 각각에는 `allow-discrete`가 설정되어 있습니다.

또한 `<dialog>` 뒤에 나타나는 [`::backdrop`](/ko/docs/Web/CSS/::backdrop)의 {{cssxref("background-color")}} 속성에 대한 시작 스타일 값을 설정하여 `<dialog>`가 열릴 때 어두워지는 멋진 애니메이션을 제공합니다. `dialog:open::backdrop` 선택자는 대화 상자가 열려 있을 때만 `<dialog>` 요소의 배경을 선택합니다.

```css
/* 대화 상자의 열린 상태 */
dialog:open {
  opacity: 1;
  transform: scaleY(1);
}

/* 대화 상자의 닫힌 상태 */
dialog {
  opacity: 0;
  transform: scaleY(0);
  transition:
    opacity 0.7s ease-out,
    transform 0.7s ease-out,
    overlay 0.7s ease-out allow-discrete,
    display 0.7s ease-out allow-discrete;
  /* 다음과 동일
  transition: all 0.7s allow-discrete; */
}

/* 열기 전 상태 */
/* 이전 dialog:open 규칙과 특이성이 같으므로 효과를 발휘하려면
  dialog:open 규칙 다음에 있어야 함 */
@starting-style {
  dialog:open {
    opacity: 0;
    transform: scaleY(0);
  }
}

/* 대화 상자 모달이 상위 레이어로 승격될 때 ::backdrop 전환 */
dialog::backdrop {
  background-color: rgb(0 0 0 / 0%);
  transition:
    display 0.7s allow-discrete,
    overlay 0.7s allow-discrete,
    background-color 0.7s;
  /* 다음과 동일
  transition: all 0.7s allow-discrete; */
}

dialog:open::backdrop {
  background-color: rgb(0 0 0 / 25%);
}

/* 이 starting-style 규칙은 위의 선택자 안에 중첩될 수 없음.
중첩 선택자는 의사 요소를 나타낼 수 없기 때문. */

@starting-style {
  dialog:open::backdrop {
    background-color: rgb(0 0 0 / 0%);
  }
}
```

> [!NOTE]
> 이 {{cssxref(":open")}} 의사 클래스를 지원하지 않는 브라우저에서는 `dialog[open]` 특성 선택자를 사용하여 열린 상태의 `<dialog>` 요소를 스타일링할 수 있습니다.

##### JavaScript

JavaScript는 클릭될 때 `<dialog>`를 보이거나 닫는 열기 버튼과 닫기 버튼에 이벤트 핸들러를 추가합니다.

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### 결과

코드는 다음과 같이 렌더링됩니다.

{{ EmbedLiveSample("대화_상자_요소_전환하기", "100%", "200") }}

> [!NOTE]
> 이 `<dialog>`는 표시될 때마다 `display: none`에서 `display: block`으로 변경되므로, 대화 상자는 전환이 시작될 때마다 `@starting-style` 스타일에서 `dialog:open` 스타일로 전환됩니다. `<dialog>`가 닫히면 `dialog:open` 상태에서 기본 `dialog` 상태로 전환됩니다.
>
> 이러한 경우에는 진입 및 퇴장 시 스타일 전환이 다를 수 있습니다. [시작 스타일 적용 시점 시연](/ko/docs/Web/CSS/@starting-style#demonstration_of_when_starting_styles_are_used) 예제를 참조하세요.

#### 대화 상자 키프레임 애니메이션

CSS 키프레임 애니메이션으로 `<dialog>`에 애니메이션을 적용할 때는 전환과 다른 몇 가지 차이점에 유의해야 합니다.

- `@starting-style`을 제공하지 않습니다.
- 키프레임에 `display` 값을 포함합니다. 이는 애니메이션 전체 기간 동안 적용되는 `display` 값이 되며, `none`이 아닌 다른 `display` 값이 나타나기 전까지 유지됩니다.
- 불연속 애니메이션을 명시적으로 활성화할 필요가 없습니다. 키프레임 내에서 `allow-discrete`와 동등한 것은 없습니다.
- 키프레임 내에 `overlay`를 설정할 필요도 없습니다. `display` 애니메이션이 표시된 상태에서 숨겨진 상태로의 `<dialog>` 애니메이션을 처리합니다.

예제를 살펴보고 어떻게 보이는지 확인해 보겠습니다.

##### HTML

먼저 HTML에는 `<dialog>` 요소와 대화 상자를 표시하는 버튼이 포함되어 있습니다. 또한 `<dialog>` 요소에는 대화 상자 자체를 닫을 수 있는 다른 버튼이 포함되어 있습니다.

```html
<dialog id="dialog">
  여기에 내용
  <button class="close">닫기</button>
</dialog>

<button class="show">모달 나타내기</button>
```

##### CSS

CSS는 `<dialog>`의 닫힌 상태와 열린 상태 사이의 전환 효과를 위한 키프레임과 `<dialog>` 배경의 페이드인 애니메이션을 정의합니다. `<dialog>` 애니메이션은 `display` 속성도 함께 변화시켜 실제 시각적 효과가 애니메이션 전체 기간 동안 유지되도록 합니다. `<dialog>`가 닫히면 배경이 즉시 DOM에서 제거되므로 배경에 페이드 아웃 애니메이션은 적용하지 못합니다.

```css
dialog {
  animation: fade-out 0.7s ease-out;
}

dialog:open {
  animation: fade-in 0.7s ease-out;
}

dialog:open::backdrop {
  animation: backdrop-fade-in 0.7s ease-out forwards;
}

/* 애니메이션 키프레임 */

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }

  100% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: scaleY(1);
    display: block;
  }

  100% {
    opacity: 0;
    transform: scaleY(0);
    display: none;
  }
}

@keyframes backdrop-fade-in {
  0% {
    background-color: rgb(0 0 0 / 0%);
  }

  100% {
    background-color: rgb(0 0 0 / 25%);
  }
}

body,
button {
  font-family: system-ui;
}
```

##### JavaScript

마지막으로 JavaScript는 `<dialog>` 열기 및 닫기를 활성화하기 위해 버튼에 이벤트 핸들러를 추가합니다.

```js
const dialogElem = document.getElementById("dialog");
const showBtn = document.querySelector(".show");
const closeBtn = document.querySelector(".close");

showBtn.addEventListener("click", () => {
  dialogElem.showModal();
});

closeBtn.addEventListener("click", () => {
  dialogElem.close();
});
```

##### Result

코드는 다음과 같이 렌더링됩니다.

{{ EmbedLiveSample("대화_상자_키프레임_애니메이션", "100%", "200") }}

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/HTML/Guides/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/HTML/Guides/Content_categories#flow_content">플로우 콘텐츠</a>,
        구획 루트
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/HTML/Guides/Content_categories#flow_content">플로우 콘텐츠</a>
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>불가능, 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/HTML/Guides/Content_categories#flow_content">플로우 콘텐츠</a>를 허용하는 모든 요소
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href="/ko/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role">dialog</a>
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td><a href="/ko/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role"><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>

  </tbody>
</table>

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("HTMLDialogElement")}} 인터페이스
- {{domxref("HTMLDialogElement/close_event", "close")}} `HTMLDialogElement` 인터페이스의 이벤트
- {{domxref("HTMLDialogElement/cancel_event", "cancel")}} `HTMLDialogElement` 인터페이스의 이벤트
- {{domxref("HTMLDialogElement/open", "open")}} `HTMLDialogElement` 인터페이스의 속성
- HTML 요소를 위한 [`inert`](/ko/docs/Web/HTML/Reference/Global_attributes/inert) 전역 특성
- {{CSSXref("::backdrop")}} CSS 의사 요소
- 학습 영역의 [Web forms](/ko/docs/Learn_web_development/Extensions/Forms)
