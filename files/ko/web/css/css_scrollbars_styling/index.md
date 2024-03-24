---
title: CSS Scrollbars
slug: Web/CSS/CSS_scrollbars_styling
---

{{CSSRef}}{{SeeCompatTable}}

**CSS Scrollbars**는 Windows IE 5.5에서 2000년에 도입한 더이상 사용되지 않는(obsolete) 스크롤바 색상 프로퍼티를 표준화합니다.

## 기본 예제

이 예제에서 우리는 녹색 트랙과 보라색 썸(thumb)을 가진 얇은 스크롤바를 사용하기로 선택했습니다.

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}
```

### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

### 결과

{{EmbedLiveSample("Basic_Example")}}

## 참고

### CSS 속성

- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("scrollbar-color")}}

## 명세

{{Specifications}}

## 접근성 고려사항

스크롤바를 커스터마이징 할 때, 스크롤바에 충분한 대비가 있고 터치 입력을 사용하는 사람들에게도 충분히 히트 영역(hit area)이 큰지 고려하십시오.

- [Baseline Rules for Scrollbar Usability | Adrian Roselli](https://adrianroselli.com/2019/01/baseline-rules-for-scrollbar-usability.html)

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{CSSxRef("::-webkit-scrollbar")}}
- {{CSSxRef("-ms-overflow-style")}}
