---
title: will-change
slug: Web/CSS/will-change
---

{{CSSRef}}

## 요약

**`will-change`** [CSS](/ko/docs/Web/CSS) 속성은 요소에 예상되는 변화의 종류에 관한 힌트를 브라우저에 제공케 한다. 그래서 실제 요소가 변화되기 전에 미리 브라우저는 적절하게 최적화할 수 있다. 이러한 종류의 최적화는 잠재적으로 성능 비용이 큰 작업을 그것이 실제로 요구되기 전에 미리 실행함으로써 페이지의 반응성을 증가시킬 수 있다.

이 속성을 적당하게 사용하는 것이 꽤 어려울 수 있다:

- _너무 많은 요소에 will-change 를 적용하지 말라._ 브라우저는 모든 것을 최적화하기 위해 가능한 모든 것을 이미 시도하고 있다. will-change 와 묶인 강한 최적화의 몇은 많은 기기 자원을 소모할 것이다. 또한 이 같은 과도한 사용은 페이지 속도를 늦추거나 엄청난 자원을 소비할 수 있다.
- _아껴 사용하라._ 브라우저가 만드는 최적화의 기본 행동은 가능한 바로 최적화를 제거하고 기본 상태로 돌리는 것이다. 그러나 will-change를 스타일시트에 직접 추가하는 것은 목표 요소가 곧 변경되어 (will-change 를 정의하지 않았을 때보다) 더 오랜 시간동안 최적화를 유지하리란 것을 암시한다. 스크립트 코드를 사용하여 변화발생의 전후로 will-change 의 활성/비활성을 바꿔주는 것이 좋다.
- _서둘러 최적화하기 위해 will-change 를 적용하지 말라._ 만약 페이지가 잘 돌아간다면 단지 조금 더 빨리하기 위해 will-change 속성을 추가하지 말라. `will-change` 는 당장의 성능 문제를 해결하기 위한 마지막 수단으로 사용되기 위해 계획된 것이다. 성능문제를 예상하며 사용되어선 안된다. will-change 의 초과사용은 브라우저가 가능한 변화에 대한 준비를 시도하기 때문에 과도한 메모리 사용과 더 복잡한 렌더링을 초래할 것이다. 더 열악한 성능을 이끌 것이다.
- _작업할 충분한 시간을 줘라._ 이 속성은 작성자로 하여금 사용자 에이전트가 변경가능한 속성을 미리 알 수 있게 하도록고안되었다. 그러면 브라우저는 실제 속성변화가 발생하기 전에 속성에 요구되는 어떠한 최적화던지 미리 적용하는 것을 선택할 수 있다. 그래서 브라우저가 실제 최적화를 할 시간을 주는 것은 중요하다. 변화가 발생하기 조금 전에라도 그 변화를 예상할 방법을 찾아 `will-change` 를 설정하라.

{{cssinfo}}

## 구문

```css
/* 키워드 값 */
will-change: auto;
will-change: scroll-position;
will-change: contents;
will-change: transform; /* Example of <custom-ident> */
will-change: opacity; /* Example of <custom-ident> */
will-change: left, top; /* Example of two <animateable-feature> */

/* 전역 값 */
will-change: inherit;
will-change: initial;
will-change: unset;
```

### 값

- `auto`
  - : 이 키워드는 특정 의도 없음을 나타낸다; 사용자 에이전트는 보통 실행하는 어떤 발견한 방법이던 최적화이던 적용해야 한다.

`<animateable-feature>` 는 다음의 값중 하나일 수 있다:

- `scroll-position`
  - : 머지않아 요소 스크롤 위치의 변경 혹은 변이에 대한 기대를 가르킨다.
- `contents`
  - : 머지않아 요소 내용에 대한 변경 혹은 변이에 대한 기대를 가르킨다.
- {{cssxref("custom-ident", "&lt;custom-ident&gt;")}}
  - : 머지않아 해당 요소의 주어진 이름의 속성에 대한 변경 혹은 변이에 대한 기대를 가르킨다. 만약 주어진 속성이 축약형이라면 그 안에 들어간 나열된 속성 모두에 대한 기대이다. 다음의 값들은 불가능하다: `unset`, `initial`, `inherit`, `will-change`, `auto`, `scroll-position`, `contents`. 명세는 특정값의 행동을 정의하지 않으나 but it is common for `transform` to be a compositing layer hint. [Chrome currently takes two actions](https://github.com/operasoftware/devopera/pull/330), given particular CSS property idents: establish a new compositing layer or a new {{Glossary("stacking context")}}.

### Formal syntax

{{csssyntax}}

## 예시

```css
.sidebar {
  will-change: transform;
}
```

상단 예시는 will-change 속성을 스타일시트에 직접 추가한다: 이것은 브라우저가 항상 메모리내에서 필요보다 더 오래동안 최적화를 유지하도록 하는데 바로 이렇게 스타일시트에 직접 삽입하는 것을 피해야 할 이유로서 살펴봤던 것이다. 아래는 스크립트를 통해 will-change 를 적용하는 법의 다른 예시를 보여주고 십중팔구 대부분의 경우에 이렇게 시행해야 한다.

```js
var el = document.getElementById("element");

// 요소가 hover 상태일 때 will-change 설정
el.addEventListener("mouseenter", hintBrowser);
el.addEventListener("animationEnd", removeHint);

function hintBrowser() {
  // 애니메이션 키프레임 단락 내에서
  // 변경될 예정인 최적화 가능한 속성들
  this.style.willChange = "transform, opacity";
}

function removeHint() {
  this.style.willChange = "auto";
}
```

그러나 페이지가 크고 복잡한 앨범 혹은 슬라이드 다발로 이뤄진 프레젠테이션등 키를 눌러서 페이지를 넘기는 어플리케이션등을 위해선 스타일시트에 will-change 를 직접 포함시키는 것이 적절할 것이다. 이것은 브라우저가 미리 변이를 준비하게 해 키가 눌리자마자 페이지간의 팔팔한 애니메이션을 가능케 할 것이다.

```css
.slide {
  will-change: transform;
}
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
