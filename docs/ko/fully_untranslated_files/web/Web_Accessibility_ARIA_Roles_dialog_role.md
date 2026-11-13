---
title: "ARIA: dialog role"
slug: Web/Accessibility/ARIA/Roles/dialog_role
---

{{draft()}}

{{ariaref}}

[`dialog`](http://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#dialog) 역할(role)은 HTML 기반의 애플리케이션의 다이얼로그 또는 콘텐츠를 분리하는 창 또는 다른 웹 애플리케이션의 UI 혹은 페이지를 마크업하는데 사용됩니다. 다이얼로그는 일반적으로 오버레이를 사용하여 페이지 위에 표시됩니다. 다이얼로그는 비모달(non-modal) (열린 이후에도 다이얼로그 바깥의 콘텐츠와 상호작용할 수 있습니다) 또는 모달(오로지 다이얼로그 콘텐츠와 상호작용할 수 있습니다) 형태일 수 있습니다.

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">귀하의 개인정보가 성공적으로 갱신되었습니다.</h2>
  <p id="dialog1Desc">
    <a href="/account">개인정보 관리</a> 페이지에서 언제든지 개인정보를 수정할
    수 있습니다.
  </p>
  <button>닫기</button>
</div>
```

## 설명

다이얼로그 요소를 마크업하는 것은 보조 기술(Assistive Technology)이 다이얼로그의 콘텐츠가 그룹하 되어 페이지의 나머지 콘텐츠와 분리됨을 식별하는 것을 돕습니다. 하지만, 단순히 `role="dialog"`를 추가하는 것으로 다이얼로그의 접근성을 높이지 못합니다. 추가적으로 다음 항목들이 충족되어야 합니다:

- 다이얼로그의 레이블이 올바르게 지정되어야 합니다.
- 키보드 포커스가 올바르게 관리되어야 합니다.

아래 섹션들은 이 두가지 요구 사항을 어떻게 만족시킬 수 있을지 설명합니다.

#### 레이블링

다이얼로그 요소 자체가 포커스를 가질 필요는 없지만, 여전히 레이블링을 할 필요가 있습니다. 다이얼로그에 주어진 레이블은 다이얼로그 내 상호작용 가능한 컨트롤들에 contextual information를 제공합니다. 예를 들어, 다이얼로그의 레이블은 내부의 컨트롤들의 레이블의 그롭화된 레이블처럼 작동합니다. (`<legend>` 요소가 내부의 `<fieldset>` 요소에 그룹화된 레이블을 제공하는 것과 비슷합니다)

만약 다이얼로그가 이미 눈에 보이는 타이틀바를 가지고 있다면, 그 안속의 텍스트는 다이얼로그를 레이블하는데 사용될 수 있습니다. 이를 이루기 위해 `role="dialog"` 속성을 가진 요소에 `aria-labelledby` 속성을 사용합니다. 또한, 만약 다이얼로그에 제목 외의 추가적인 설명 텍스트가 있다면, 그 텍스트는 `aria-describedby` 속성을 사용하여 다이얼로그에 관련되게 만들 수 있습니다. 이러한 방법은 아래 코드를 통해 확인하실 수 있습니다:

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">귀하의 개인정보가 성공적으로 갱신되었습니다.</h2>
  <p id="dialog1Desc">
    <a href="/account">개인정보 관리</a> 페이지에서 언제든지 개인정보를 수정할
    수 있습니다.
  </p>
  <button>닫기</button>
</div>
```

> **참고:** 비가상 모드에서 작동하는 스크린 판독기에 의해 인지되기 위해서는 다이얼로그 제목과 설명 텍스트가 포커스가 가능하지 않아야 한다는 점을 유의하십시오. ARIA 다이얼로그 역할과 레이블링 기술은 다이얼로그로 포커스가 이동하였을 때 스크린 판독기가 다이얼로그의 정보를 인지할 수 있도록 합니다.

#### Focus management 포커스 관리

다이얼로그는 키보드 포커스를 관리하는 방법에 대한 특별한 요구 사항이 있습니다.

- 다이얼로그는 최소한 한 개 이상의 포커스 가능한 컨트롤이 있어야 합니다. 대부분의 다이얼로그는 "닫기", "확인" 또는 "취소"와 같은 버튼들이 존재합니다. 더 나아가 폼 또는 탭 같은 위젯 컨테이너 등 얼마든지 포커스 가능한 요소들을 가질 수 있습니다.
- 다이얼로그가 화면에 나타났을 때, 다이얼로그 안의 기본 포커스 가능한 컨트롤로 키보드 포커스를 이동시켜야 합니다. 예를 들어 간단한 메시지만을 제공하는 다이얼로그라면 "확인" 버튼이, 폼을 제공하는 다이얼로그의 경우는 폼의 첫 번째 필드가 기본으로 포커스 될 것입니다.
- 다이얼로그가 닫힌 이후, 키보드 포커스는 다이얼로그를 열기 전에 있었던 곳으로 다시 이동해야 합니다. 그렇지 않으면 포커스가 페이지의 첫 번째 부분으로 초기화될 수 있습니다.
- 대부분의 다이얼로그는 탭 순서가 _감싸지길_ 기대합니다. 이는 사용자가 다이얼로그 안의 마지막 포커스 가능한 요소에 도달했을 때, 탭을 누르면 첫 번째 포커스 가능한 요소로 포커스가 이동하길 원합니다. 즉, 탭 순서는 다이얼로그 안에 갇혀 있어야 합니다. (_역자 : "Focus Trap"으로 관련 자료들을 열람하실 수 있습니다_)
- 만약 다이얼로그가 움직이거나 크기가 변경될 수 있는 경우, 마우스를 사용하는 사용자가 수행하는 동작을 키보드를 사용하는 사용자도 거의 비슷하게 조작할 수 있도록 보장하십시오. 비슷하게, 만약 다이얼로그가 툴바 또는 context menus 처럼 특별한 기능을 제공하는 경우, 이들 또한 키보드 사용자에 의해서도 접근 가능하고 조작이 가능해야 합니다.
- 다이얼로그는 모달 또는 비모달일 수 있습니다. 만약 모달 다이얼로그가 화면에 나타나면, 다이얼로그 밖의 페이지 콘텐츠들과 상호작용하는 것은 불가능합니다. 다른 말로, 모달 다이얼로그가 나타나 있는한 메인 애플리케이션의 UI 또는 페이지 콘텐츠는 일시적으로 비활성화 상태여야 합니다. 비모달 다이얼로그는 열러 있는 동안에도 다이얼로그 바깥의 콘텐츠들과 상호작용이 가능합니다. 비모달 다이얼로그를 위해서 열려 있는 다이얼로그와 메인 페이지간에 포커스를 이동시킬 수 있는 전역 키보드 단축키가 필요하다는 점을 유의하십시오.

### 관련된 ARIA 역할, 상태 및 속성

- `aria-labelledby`
  - : 다이얼로그에 label을 하려면 이 속성을 사용하십시오. 보통, 다이얼로그의 제목 요소의 id값이 aria-labelledby 속성의 값이 됩니다.
- `aria-describedby`
  - : 다이얼로그의 콘텐츠를 묘사하기 위해 이 속성을 사용하십시오.

### Possible effects on user agents and assistive technology

When the `dialog` role is used, the user agent should do the following:

- Expose the element as a dialog in the operating system's accessibility API.

When the dialog is correctly labeled and focus is moved to a control inside the dialog, screen readers should announce the dialog's accessible role, name and optionally description before announcing the focused element.

> **참고:** Opinions may differ on how assistive technology should handle this technique. The information provided above is one of those opinions and therefore not normative.

### 예제

#### 예제 1: 폼을 포함하는 다이얼로그

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">구독하기</h2>
  <p id="dialog1Desc">우리는 이 정보를 제 3자에게 제공하지 않습니다.</p>
  <form>
    <p>
      <label for="firstName">이름</label>
      <input id="firstName" type="text" />
    </p>
    <p>
      <label for="lastName">성</label>
      <input id="lastName" type="text" />
    </p>
    <p>
      <label for="interests">관심분야</label>
      <textarea id="interests"></textarea>
    </p>
    <p>
      <input type="submit" value="정보 저장하기" />
    </p>
  </form>
</div>
```

#### Example 2: A dialog based on a Fieldset as fallback content

To support browsers or AT products that do not support ARIA mark up, it's also possible to use apply the dialog markup to a fieldset element as fallback content. This way the dialog title will still be announced correctly:

```html
<fieldset
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <legend>
    <span id="dialog1Title"
      >Your personal details were successfully updated.</span
    >
    <span id="dialog1Desc"
      >You can change your details at any time in the user account
      section.</span
    >
  </legend>

  <button>Close</button>
</fieldset>
```

#### 작업된 예제

- [jQuery-UI Dialog](http://jqueryui.com/demos/dialog/)

### Notes

> **참고:** While it is possible to prevent keyboard users from moving focus to elements outside of the dialog, screen reader users may still be able to navigate that content virtually to use their screen reader's virtual cursor. Because of this, dialogs are considered to be a special case of the application role: They are expected to be navigated by screen reader users in a non-virtual navigation mode.

### 사용되는 ARIA 속성

- [dialog](http://www.w3.org/TR/wai-aria/roles#dialog)
- [aria-labelledby](http://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby)
- [aria-describedby](http://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby)

### 관련된 ARIA 기술

- [Using the alertdialog role](/en/ARIA/ARIA_Techniques/Using_the_alertdialog_role)

### Compatibility

TBD: Add support information for common UA and AT product combinations

### Additional resources
