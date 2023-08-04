---
title: <hr>
slug: Web/HTML/Element/hr
---

{{HTMLSidebar}}

**HTML `<hr>` 요소**는 이야기 장면 전환, 구획 내 주제 변경 등, 문단 레벨 요소에서 주제의 분리를 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/hr.html", "tabbed-shorter")}}

역사적으로 `<hr>`은 가로줄로 표현했습니다. 시각적 브라우저에서도 가로줄로 그려질 수 있지만, 이제 시각 표현에 그치지 않고 의미를 가지게 됐습니다. 따라서 가로줄을 그리고 싶다면 적절한 CSS를 사용해야 합니다.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/ko/docs/Web/Guide/HTML/%EC%BB%A8%ED%85%90%ED%8A%B8_%EC%B9%B4%ED%85%8C%EA%B3%A0%EB%A6%AC"
          >콘텐츠 카테고리</a
        >
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        없음. {{glossary("empt element", "빈 요소")}}입니다.
      </td>
    </tr>
    <tr>
      <th scope="row">태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
    </tr>
    <tr>
      <th scope="row">가능한 부모 요소</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td><a href='/ko/docs/Web/Accessibility/ARIA/Roles/presentation_role'><code>presentation</code></a></td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLHRElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("align")}} {{deprecated_inline}}
  - : 줄의 정렬을 지정합니다. 기본값은 `left`입니다.
- {{htmlattrdef("color")}} {{Non-standard_inline}}
  - : 색깔 이름 또는 16 진수의 값으로 줄의 색깔을 지정합니다.
- {{htmlattrdef("noshade")}} {{deprecated_inline}}
  - : Sets the rule to have no shading.
- {{htmlattrdef("size")}} {{deprecated_inline}}
  - : 줄의 높이를 픽셀 단위로 지정합니다.
- {{htmlattrdef("width")}} {{deprecated_inline}}
  - : 줄의 가로 길이를 픽셀이나 퍼센트 값으로 지정합니다.

## 예제

### HTML

```html-nolint
<p>
This is the first paragraph of text.
This is the first paragraph of text.
This is the first paragraph of text.
This is the first paragraph of text.
</p>

<hr>

<p>
This is second paragraph of text.
This is second paragraph of text.
This is second paragraph of text.
This is second paragraph of text.
</p>
```

### 결과

{{EmbedLiveSample("예제")}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{htmlelement("p")}}
