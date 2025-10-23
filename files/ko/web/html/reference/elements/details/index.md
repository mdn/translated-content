---
title: "<details>: 세부 정보 공개 요소"
slug: Web/HTML/Reference/Elements/details
l10n:
  sourceCommit: ad59de382f5a523bf5dbada344e669d3fd9d4f49
---

{{HTMLSidebar}}

**`<details>`** [HTML](/ko/docs/Web/HTML) 요소는 열림 상태일 때만 내용을 표시하는 공개 위젯을 만듭니다. {{HTMLElement("summary")}} 요소를 사용해 요약이나 라벨을 반드시 제공해야 합니다.

공개 위젯은 일반적으로 회전(또는 비틀림)하여 열림/닫힘 상태를 나타내는 작은 삼각형을 사용하여 화면에 표시되며, 삼각형 옆에 라벨이 있습니다. `<summary>` 요소의 내용은 공개 위젯의 라벨로 사용됩니다. `<details>`의 내용은 `<summary>`에 대한 {{glossary("accessible description")}}을 제공합니다.

{{InteractiveExample("HTML Demo: &lt;details&gt;", "tabbed-shorter")}}

```html interactive-example
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

```css interactive-example
details {
  border: 1px solid #aaa;
  border-radius: 4px;
  padding: 0.5em 0.5em 0;
}

summary {
  font-weight: bold;
  margin: -0.5em -0.5em 0;
  padding: 0.5em;
}

details[open] {
  padding: 0.5em;
}

details[open] summary {
  border-bottom: 1px solid #aaa;
  margin-bottom: 0.5em;
}
```

`<details>` 위젯은 두 가지 상태 중 하나가 될 수 있습니다. 기본적인 _닫힘_ 상태에서는 삼각형과 `<summary>` 내 라벨만 표시합니다. `<summary>`가 없는 경우 {{Glossary("user agent")}}에서 정의한 기본 문자열이 표시됩니다.

사용자가 위젯을 클릭하거나 포커스한 후 스페이스 바를 누르면, 삼각형이 "비틀리며" 위젯이 열리고 내용이 드러납니다. 이 위젯이 열리고 닫히는 상태를 나타내기 위해 삼각형을 회전하거나 비트는 방식을 사용하기 때문에, 이를 "twisty"라고 부르기도 합니다.

CSS를 사용해 공개 위젯의 스타일을 지정할 수 있으며, [`open`](#open) 특성을 지정/제거하여 프로그래밍 방식으로 위젯을 열고 닫을 수 있습니다. 다만 현재로서는 열림과 닫힘 사이의 전환에 애니메이션을 적용할 수 있는 기본 제공 기능이 없습니다.

기본적으로 닫혀 있을 때 위젯은 삼각형과 요약을 표시할 수 있을 만큼 높이를 가집니다. 위젯을 열면 확장되어 안에 포함하고 있는 세부 정보가 나타납니다.

표준을 완벽하게 준수하는 구현에서는 {{HTMLElement("summary")}} 요소에 자동으로 CSS `{{cssxref("display")}}: list-item` 스타일이 적용됩니다. 이 스타일이나 {{cssxref("::marker")}} 가상 요소를 사용하여 [공개 위젯을 사용자 정의](/ko/docs/Web/HTML/Element/summary#changing_the_summarys_icon)할 수 있습니다.

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Reference/Global_attributes)을 포함합니다.

- `open`
  - : 이 불리언 특성은 세부 정보, 즉 `<details>` 요소의 내용이 현재 표시되는지 여부를 나타냅니다. 이 특성이 있으면 세부 정보가 표시되고, 없으면 감춰집니다. 기본적으로 이 특성은 표시되지 않으므로 세부 정보가 표시되지 않습니다.

    > [!NOTE]
    > 세부 정보를 숨기려면 이 특성을 완전히 지워야 합니다. 이 특성은 불리언이므로 `open="false"`로 지정해도 세부 정보가 화면에 표시됩니다.

- `name`
  - : 이 특성은 여러 `<details>` 요소를 연결하고 한 번에 하나만 열 수 있게 합니다. 이를 통해 개발자는 스크립팅 없이 아코디언과 같은 UI 기능을 쉽게 만들 수 있습니다.

    `name` 특성은 그룹 이름을 지정합니다. 여러 `<details>` 요소에 동일한 `name` 값을 지정하여 그룹화할 수 있습니다. 그룹화된 `<details>` 요소는 한 번에 하나만 열 수 있으며, 하나를 열면 다른 요소가 닫힙니다. 여러 그룹화된 `<details>` 요소에 `open` 특성을 지정하면 소스 순서에서 첫 번째 요소만 열린 상태로 렌더링됩니다.

    > **Note:** `<details>` 요소들이 같은 그룹에 속하기 위해 반드시 소스에서 인접해야 할 필요는 없습니다.

## 이벤트

`<details>` 요소는 HTML 요소에서 지원하는 일반적인 이벤트 외에도 열림과 닫힘 상태가 변경될 때마다 `<details>` 요소로 전송하는 {{domxref("HTMLElement/toggle_event", "toggle")}} 이벤트를 지원합니다. 이 이벤트는 상태가 변경된 후에 전송되지만, 브라우저가 이벤트를 전송하기 전에 상태가 여러 번 변경되는 경우, 이벤트는 하나로 합쳐져 하나만 전송됩니다.

위젯 상태 변경을 감지하기 위해 `toggle` 이벤트에 대한 이벤트 리스너를 사용할 수 있습니다.

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

## 예제

### 간단한 예제

다음은 `<summary>`를 사용한 기본적인 `<details>` 요소 예제입니다.

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### 결과

{{EmbedLiveSample("A_basic_disclosure_example", 650, 150)}}

### 열린 공개 상자 만들기

`<details>` 상자를 열린 상태로 시작하려면, 불리언 `open` 특성을 추가합니다.

```html
<details open>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### 결과

{{EmbedLiveSample("Creating_an_open_disclosure_box", 650, 150)}}

### 이름이 지정된 여러 공개 상자

동일한 이름의 여러 `<details>` 상자들은 한 번에 하나만 열 수 있습니다.

```html
<details name="reqs">
  <summary>Graduation Requirements</summary>
  <p>
    Requires 40 credits, including a passing grade in health, geography,
    history, economics, and wood shop.
  </p>
</details>
<details name="reqs">
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
<details name="reqs">
  <summary>Job Requirements</summary>
  <p>
    Requires knowledge of HTML, CSS, JavaScript, accessibility, web performance,
    privacy, security, and internationalization, as well as a dislike of
    broccoli.
  </p>
</details>
```

#### 결과

{{EmbedLiveSample("Multiple named disclosure boxes", 650, 150)}}

모든 공개 위젯을 열어보세요. 하나를 열면, 다른 모든 위젯이 자동으로 닫힙니다.

### 외관 사용자 정의하기

이제 CSS를 적용하여 공개 상자의 외관을 사용자 정의해 보겠습니다.

#### CSS

```css
details {
  font:
    16px "Open Sans",
    Calibri,
    sans-serif;
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

details:open > summary {
  background-color: #ccf;
}
```

이 CSS는 탭 인터페이스와 비슷한 모양을 만들어냅니다. 탭을 클릭하면 탭이 열리고 내용이 표시됩니다.

> [!NOTE]
> 브라우저가 {{cssxref(":open")}} 가상 요소를 지원하지 않는 경우 `details[open]` 특성 선택자를 사용해 `<details>` 요소가 열린 상태일 때 스타일을 지정할 수 있습니다.

#### HTML

```html
<details>
  <summary>System Requirements</summary>
  <p>
    Requires a computer running an operating system. The computer must have some
    memory and ideally some kind of long-term storage. An input device as well
    as some form of output device is recommended.
  </p>
</details>
```

#### 결과

{{EmbedLiveSample("Customizing_the_appearance", 650, 150)}}

[공개 위젯을 사용자 정의하는 방법의 예](/ko/docs/Web/HTML/Element/summary#changing_the_summarys_icon)는 {{htmlelement("summary")}} 페이지를 참조하세요.

## 기술 요약

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/HTML/Content_categories"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#flow_content"
          >플로우 콘텐츠</a
        >, 구획 루트, 대화형 콘텐츠, 촉각적 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#flow_content"
          >플로우 콘텐츠</a
        >에 따른 한 가지 {{HTMLElement("summary")}} 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>없음. 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/HTML/Content_categories#flow_content"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">암시적인 ARIA 역할</th>
      <td><a href="/ko/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a></td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td><code>role</code> 허용되지 않음</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLDetailsElement")}}</td>
    </tr>
  </tbody>
</table>

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{HTMLElement("summary")}}
- {{cssxref("::details-content")}}
