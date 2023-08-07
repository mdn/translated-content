---
title: <del>
slug: Web/HTML/Element/del
---

{{HTMLSidebar}}

**HTML `<del>` 요소**는 문서에서 제거된 텍스트의 범위를 나타냅니다. 문서나 소스 코드의 변경점 추적 등에 사용할 수 있습니다. {{htmlelement("ins")}} 요소를 추가된 텍스트의 범위를 나타낼 수 있습니다.

{{EmbedInteractiveExample("pages/tabbed/del.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ko/docs/Web/Guide/HTML/Content_categories">콘텐츠 카테고리</a>
      </th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >,
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#투명_콘텐츠_모델"
          >투명</a
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
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 ARIA 역할</th>
      <td>모두</td>
    </tr>
    <tr>
      <th scope="row">DOM 인터페이스</th>
      <td>{{domxref("HTMLModElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

- {{htmlattrdef("cite")}}
  - : 회의록, 이슈 추적 시스템의 티켓 번호 등 변경점을 설명하는 리소스의 {{glossary("URI")}}.
- {{htmlattrdef("datetime")}}
  - : 변경이 발생한 일시. 유효한 날짜 문자열이어야 하며, 시간을 지정할 경우 역시 유효해야 합니다. 유효하지 않은 값을 지정할 경우 일시를 지정하지 않은 것과 같습니다. 유효한 문자열의 종류는 [HTML에서 사용하는 날짜와 시간 형식](/ko/docs/Web/HTML/Date_and_time_formats) 문서에서 확인할 수 있습니다.

## 예제

```html
<p><del>This text has been deleted</del>, here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
```

### 결과

{{EmbedLiveSample("예제")}}

## 접근성 고려사항

대부분의 스크린 리더는 기본값에서 `<del>` 요소의 존재를 표현하지 않습니다. 그러나 CSS {{cssxref("content")}} 속성과 {{cssxref("::before")}}, {{cssxref("::after")}} 의사 요소를 사용하면 소리내어 읽도록 할 수 있습니다.

```css
del::before,
del::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

del::before {
  content: " [제거 부분 시작] ";
}

del::after {
  content: " [제거 부분 끝] ";
}
```

스크린 리더 사용자 일부는 지나치게 자세한 안내를 유발할 수 있는 콘텐츠의 표현을 의도적으로 꺼놓습니다. 그러므로 이 방식을 남용해선 안되며, 콘텐츠의 이해에 삭제 여부가 꼭 필요할 때만 사용해야 합니다.

- [Short note on making your mark (more accessible) | The Paciello Group](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 텍스트의 삽입을 위한 {{HTMLElement("ins")}} 요소
- 삭제 여부와 관계 없이 취소선을 위한 {{htmlelement("s")}} 요소
