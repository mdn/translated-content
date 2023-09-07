---
title: "<dialog>: 대화 상자 요소"
slug: Web/HTML/Element/dialog
---

{{HTMLSidebar}}

**HTML `<dialog>` 요소**는 닫을 수 있는 경고, 검사기, 창 등 대화 상자 및 기타 다른 상호작용 가능한 컴포넌트를 나타냅니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, 구획 루트.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td>
        <a href="/ko/docs/Web/Accessibility/ARIA/Roles/dialog_role"
          ><code>dialog</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/alertdialog_role'><code>alertdialog</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDialogElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

> **경고:** `tabindex` 특성을 `<dialog>` 요소에 사용해서는 안됩니다.

- {{htmlattrdef("open")}}
  - : 대화 상자가 활성 상태이며 상호작용할 수 있음을 나타냅니다. `open` 특성이 없을 때 대화 상자가 사용자에게 보여서는 안됩니다.

## 사용 일람

- `method="dialog"` 특성을 사용한 {{htmlelement("form")}} 요소는 제출 시 대화 상자를 닫습니다. 이 때, 대화 상자의 {{domxref("HTMLDialogElement.returnValue", "returnValue")}} 속성은 양식을 제출할 때 사용한 버튼의 [`value`](/ko/docs/Web/HTML/Element/button#value)으로 설정됩니다.
- CSS {{cssxref('::backdrop')}} [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)를 사용하면, {{domxref("HTMLDialogElement.showModal()")}} 메서드를 사용해 활성화한 `<dialog>` 요소의 뒤에 스타일을 적용할 수 있습니다. 예를 들면, 모달 대화 상자가 활성화되어 있는 동안 접근할 수 없는 뒤쪽 요소를 어둡게 만들 때 사용합니다.

## 예제

### 간단한 예제

```html
<dialog open>
  <p>여러분 안녕하세요!</p>
</dialog>
```

### 고급 예제

다음 예제는 "상세정보 업데이트" 버튼을 클릭할 경우 양식을 포함한 팝업 대화 상자를 엽니다.

#### HTML

```html
<!-- 간단한 양식을 포함한 팝업 대화 상자 -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label
        >좋아하는 동물:
        <select>
          <option></option>
          <option>아르테미아</option>
          <option>레서판다</option>
          <option>거미원숭이</option>
        </select>
      </label>
    </p>
    <menu>
      <button value="cancel">취소</button>
      <button id="confirmBtn" value="default">확인</button>
    </menu>
  </form>
</dialog>

<menu>
  <button id="updateDetails">상세정보 업데이트</button>
</menu>

<output aria-live="polite"></output>
```

#### JavaScript

```js
var updateButton = document.getElementById("updateDetails");
var favDialog = document.getElementById("favDialog");
var outputBox = document.getElementsByTagName("output")[0];
var selectEl = document.getElementsByTagName("select")[0];
var confirmBtn = document.getElementById("confirmBtn");

// “Update details” button opens the <dialog> modally
updateButton.addEventListener("click", function onOpen() {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", function onSelect(e) {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener("close", function onClose() {
  outputBox.value =
    favDialog.returnValue + " button clicked - " + new Date().toString();
});
```

### 결과

{{EmbedLiveSample("고급_예제", "100%", 300)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 폴리필

지원하지 않는 브라우저에서 `<dialog>`를 사용하려면 [dialog-polyfill](https://github.com/GoogleChrome/dialog-polyfill)을 추가하세요.

## 같이 보기

- {{event("close")}} 이벤트
- {{event("cancel")}} 이벤트
- {{cssxref("::backdrop")}} 의사 요소
- [HTML 양식](/ko/docs/Web/Guide/HTML/Forms) 안내서
