---
title: <details>
slug: Web/HTML/Element/details
---

{{HTMLSidebar}}

**HTML `<details>` 요소**는 "열림" 상태일 때만 내부 정보를 보여주는 정보 공개 위젯을 생성합니다. 요약이나 레이블은 {{htmlelement("summary")}} 요소를 통해 제공할 수 있습니다.

정보 공개 위젯은 보통 레이블 옆의 작은 삼각형이 돌아가면서 열림/닫힘 상태를 나타냅니다. `<details>` 요소의 첫 번째 자식이 `<summary>` 요소라면, `<summary>`의 콘텐츠를 위젯의 레이블로 사용합니다.

{{EmbedInteractiveExample("pages/tabbed/details.html", "tabbed-shorter")}}

A `<details>` widget can be in one of two states. The default _closed_ state displays only the triangle and the label inside `<summary>` (or a {{Glossary("user agent")}}-defined default string if no `<summary>`).

When the user clicks on the widget or focuses it then presses the space bar, it "twists" open, revealing its contents. The common use of a triangle which rotates or twists around to represent opening or closing the widget is why these are sometimes called "twisty".

You can use CSS to style the disclosure widget, and you can programmatically open and close the widget by setting/removing its {{htmlattrxref("open", "details")}} attribute. Unfortunately, at this time there's no built-in way to animate the transition between open and closed.

By default when closed, the widget is only tall enough to display the disclosure triangle and summary. When open, it expands to display the details contained within.

Fully standards-compliant implementations automatically apply the CSS `{{cssxref("display")}}: list-item` to the {{HTMLElement("summary")}} element. You can use this to customize its appearance further. See [Customizing the disclosure widget](#customizing_the_disclosure_widget) for further details.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>플로우 콘텐츠, 구획 루트, 대화형 콘텐츠, 뚜렷한 콘텐츠.</td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        하나의 {{htmlelement("summary")}}와, 그 뒤의 플로우 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories#Flow_content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적 ARIA 역할</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/group_role'><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>없음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDetailsElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("open")}}
  - : 상세 정보, 즉 `<details>` 요소의 콘텐츠가 현재 보이는 상태인지 나타냅니다. 기본값 `false`는 정보가 보이지 않는다는 뜻입니다.

## 이벤트

`<details>` 요소는 HTML 요소가 지원하는 일반적인 이벤트 외에도, `<details>` 요소의 상태가 열기와 닫기로 바뀔 때 발생하는 {{event("toggle")}} 이벤트도 지원합니다. 이벤트는 상태가 변한 후 발생하며, 브라우저에서 이벤트를 쏘기 전에 상태가 여러 번 바뀌는 경우 모두 통합하여 하나의 이벤트만 전송합니다.

`toggle` 이벤트 처리기를 부착해 위젯의 상태 변화를 감지할 수 있습니다.

```js
details.addEventListener("toggle", event => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

## 예제

### 간단한 예제

이번 예제는 요약 없는 `<details>` 요소를 보입니다.

```html
<details>
  <p>Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>
```

이렇게 사용하는 경우, 브라우저는 기본 요약 문자열("상세", "세부정보" 등)을 사용합니다. 아래에서 직접 확인해보세요.

{{EmbedLiveSample("간단한_예제", 650, 150)}}

### 요약 제공하기

이번 예제는 이전 코드에 {{htmlelement("summary")}} 요소를 추가합니다.

```html
<details>
  <summary>System Requirements</summary>
  <p>Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>
```

결과는 다음과 같습니다.

{{EmbedLiveSample("요약_제공하기", 650, 150)}}

### 열려있는 상태로 만들기

`<details>`가 처음부터 열려있는 상태로 나타나게 하려면 `open` 특성을 지정하세요.

```html
<details open>
  <summary>System Requirements</summary>
  <p>Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>
```

결과는 다음과 같습니다.

{{EmbedLiveSample("열려있는_상태로_만들기", 650, 150)}}

### 외형 바꾸기

이제 CSS를 추가해서 외형을 바꿔보겠습니다.

#### CSS

```css
details {
  font: 16px "Open Sans", Calibri, sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}
```

위의 CSS는 탭 인터페이스 같은 외형을 적용합니다.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>
```

#### 결과

{{EmbedLiveSample("외형_바꾸기", 650, 150)}}

### 위젯 바꾸기

넓게 지원되지는 않지만, 열림/닫힘을 나타내는 삼각형의 외형도 바꿀 수 있습니다. 요소의 표준화 과정 중 추가된 실험적 구현이기 때문에 브라우저의 지원에 차이가 있으므로, 당분간 여러 방식을 함께 사용해야 합니다.

{{HTMLElement("summary")}} 요소는 {{cssxref("list-style")}} 단축 속성과, 그 본디 속성인 {{cssxref("list-style-type")}} 등을 지원하므로, {{cssxref("list-style-image")}} 속성 등을 사용해 삼각형을 원하는대로 바꿀 수 있습니다. 삼각형을 아예 제거하려면 `list-style: none`을 지정하면 됩니다.

그러나 Chrome은 위의 방법을 아직 지원하지 않습니다. 따라서 비표준 `::-webkit-details-marker` [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)를 사용해야 합니다.

#### CSS

```css
details {
  font: 16px "Open Sans", Calibri, sans-serif;
  width: 620px;
}

details > summary {
  padding: 2px 6px;
  width: 15em;
  background-color: #ddd;
  border: none;
  box-shadow: 3px 3px 4px black;
  cursor: pointer;
  list-style: none;
}

details > summary::-webkit-details-marker {
  display: none;
}

details > p {
  border-radius: 0 0 10px 10px;
  background-color: #ddd;
  padding: 2px 6px;
  margin: 0;
  box-shadow: 3px 3px 4px black;
}
```

위의 CSS도 탭 인터페이스같은 외형을 적용하며, 이에 더해 삼각형을 제거합니다.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>Requires a computer running an operating system. The computer
  must have some memory and ideally some kind of long-term storage.
  An input device as well as some form of output device is
  recommended.</p>
</details>
```

#### 결과

{{EmbedLiveSample("위젯_바꾸기", 650, 150)}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("summary")}}
