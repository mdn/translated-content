---
title: <mark>
slug: Web/HTML/Element/mark
---

{{HTMLSidebar}}

**HTML `<mark>` 요소**는 현재 맥락에 관련이 깊거나 중요해 표시 또는 하이라이트한 부분을 나타냅니다.

{{EmbedInteractiveExample("pages/tabbed/mark.html", "tabbed-shorter")}}

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
        >, 뚜렷한 콘텐츠.
      </td>
    </tr>
    <tr>
      <th scope="row">가능한 콘텐츠</th>
      <td>
        <a href="/ko/docs/Web/Guide/HTML/Content_categories#구문_콘텐츠"
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
      <td>{{domxref("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## 특성

이 요소는 [전역 특성](/ko/docs/Web/HTML/Global_attributes)을 포함합니다.

## 사용 일람

일반적인 `<mark>` 요소의 사용처는 다음과 같습니다.

- 인용문({{HTMLElement("q")}}, {{HTMLElement("blockquote")}})에서는, 원본엔 별도 표시가 없으나 특별히 봐야 하는 부분을, 그리고 원저자는 특별히 중요하다고는 생각하지 않았으나 주시해야 할 필요가 있는 부분을 표시합니다. 형광펜을 사용해 중요해 보이는 책에 강조 표시를 추가하는 것처럼 생각하면 됩니다.
- 다른 경우, `<mark>`는 문서 콘텐츠에서 사용자의 현재 행동과 관련 있는 부분을 나타낼 때 사용합니다. 예를 들어, 현재 검색 키워드를 강조 표시할 때 사용할 수 있습니다.
- `<mark>`를 표시만을 위한 용도로 사용하지 마세요. {{htmlelement("span")}}과 적절한 CSS를 대신 사용해야 합니다.

> **참고:** `<mark>`와 {{HTMLElement("strong")}} 요소의 차이점을 기억하세요. 텍스트에서, `<mark>`는 연관성을 가진 부분을, `<strong>`은 중요도를 가진 부분을 나타낼 때 사용합니다.

## 예제

### 관심 부분 표시하기

첫 예제의 `<mark>` 요소는 인용문에서 사용자가 관심을 가질 텍스트를 강조할 때 사용합니다.

```html
<blockquote>
  It is a period of civil war. Rebel spaceships, striking from a hidden base,
  have won their first victory against the evil Galactic Empire. During the
  battle, <mark>Rebel spies managed to steal secret plans</mark> to the Empire’s
  ultimate weapon, the DEATH STAR, an armored space station with enough power to
  destroy an entire planet.
</blockquote>
```

{{EmbedLiveSample("관심_부분_표시하기", 650, 130)}}

### 상황에 맞는 구절 식별

다음 예제는 글의 검색 결과를 강조할 용도로 `<mark>`를 사용합니다.

```html
<p>
  It is a dark time for the Rebellion. Although the Death Star has been
  destroyed, <mark class="match">Imperial</mark> troops have driven the Rebel
  forces from their hidden base and pursued them across the galaxy.
</p>

<p>
  Evading the dreaded <mark class="match">Imperial</mark> Starfleet, a group of
  freedom fighters led by Luke Skywalker has established a new secret base on
  the remote ice world of Hoth.
</p>
```

다른 `<mark>`와 검색 결과 표시를 구별하기 위해 사용자 지정 클래스 `"match"`를 추가로 적용했습니다.

{{EmbedLiveSample("상황에_맞는_구절_식별", 650, 130)}}

## 접근성 고려사항

대부분의 스크린 리더는 기본값에서 `<mark>` 요소의 존재를 표현하지 않습니다. 그러나 CSS {{cssxref("content")}} 속성과 {{cssxref("::before")}}, {{cssxref("::after")}} 의사 요소를 사용하면 소리내어 읽도록 할 수 있습니다.

```css
mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

mark::before {
  content: " [강조 시작] ";
}

mark::after {
  content: " [강조 끝] ";
}
```

스크린 리더 사용자 일부는 지나치게 자세한 안내를 유발할 수 있는 콘텐츠의 표현을 의도적으로 꺼놓습니다. 그러므로 이 방식을 남용해선 안되며, 콘텐츠의 이해에 강조표시의 유무가 꼭 필요할 때만 사용해야 합니다.

- [Short note on making your mark (more accessible) | The Paciello Group](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [Tweaking Text Level Styles | Adrian Roselli](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
