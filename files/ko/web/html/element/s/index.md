---
title: <s>
slug: Web/HTML/Element/s
---

{{HTMLSidebar}}

**HTML `<s>` 요소**는 글자에 취소선, 즉 글자를 가로지르는 선을 그립니다. `<s>` 요소를 사용해 이제 관계 없거나 더 이상 정확하지 않은 부분을 나타내세요. 그러나, `<s>`는 문서의 편집 기록을 나타내는 용도로는 적합하지 않습니다. 상황에 따라 {{HTMLElement("del")}}과 {{HTMLElement("ins")}} 요소를 대신 사용하세요.

{{EmbedInteractiveExample("pages/tabbed/s.html", "tabbed-shorter")}}

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
        >,
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
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
        <a href="/ko/docs/Web/Guide/HTML/컨텐트_카테고리#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 요소</th>
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)만 포함합니다.

## 예제

```html
<s>Today's Special: Salmon</s> SOLD OUT<br />
```

{{EmbedLiveSample("예제")}}

## 접근성 고려사항

대부분의 스크린 리더는 기본값에서 `<s>` 요소의 존재를 표현하지 않습니다. 그러나 CSS {{cssxref("content")}} 속성과 {{cssxref("::before")}}, {{cssxref("::after")}} 의사 요소를 사용하면 소리내어 읽도록 할 수 있습니다.

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [취소선 시작] ";
}

s::after {
  content: " [취소선 끝] ";
}
```

스크린 리더 사용자 일부는 지나치게 자세한 안내를 유발할 수 있는 콘텐츠의 표현을 의도적으로 꺼놓습니다. 그러므로 이 방식을 남용해선 안되며, 콘텐츠의 이해에 취소선의 유무가 꼭 필요할 때만 사용해야 합니다.

- [Short note on making your mark (more accessible) | The Paciello Group](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 자료가 **삭제**된 경우 사용하는 {{HTMLElement("del")}} 요소.
- `<s>` 요소의 시각적 요소를 재현할 수 있는 CSS {{cssxref("text-decoration-line")}} 속성.
