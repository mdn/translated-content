---
title: contain
slug: Web/CSS/contain
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`contain`** 속성은 특정 요소와 콘텐츠가 문서 트리의 다른 부위와 독립되어있음을 나타낼 때 사용합니다. 브라우저는 이 정보를 사용해 레이아웃, 스타일, 페인트, 크기, 또는 그 조합의 계산을 전체 페이지 DOM 대신 일부에서만 수행할 수 있으므로 뚜렷한 성능 상 이점을 얻을 수 있습니다.

`contain` 속성은 위젯 내부 콘텐츠가 외부에 부작용을 끼치는 것을 방지할 수 있으므로 서로 독립된 많은 양의 위젯이 존재하는 페이지에서 유용합니다.

> **참고:** `paint`, `strict`, `content` 값을 설정할 경우 다음을 생성합니다.
>
> 1. 새로운 [컨테이닝 블록](/ko/docs/Web/CSS/All_About_The_Containing_Block) ({{cssxref("position")}} 속성이 `absolute` 또는 `fixed`인 자손을 위함).
> 2. 새로운 [쌓임 맥락](/ko/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).
> 3. 새로운 [블록 서식 맥락](/ko/docs/Web/Guide/CSS/Block_formatting_context).

## 구문

```css
/* 키워드 값 */
contain: none;
contain: strict;
contain: content;
contain: size;
contain: layout;
contain: style;
contain: paint;

/* 다중 값 */
contain: size paint;
contain: size layout paint;

/* 전역 값 */
contain: inherit;
contain: initial;
contain: unset;
```

`contain` 속성은 다음 방법 중 하나를 사용해 지정합니다.

- `none`, `strict`, `content` 키워드 중 하나를 사용.
- `size`, `layout`, `style`, `paint` 키워드를 임의 순서로 하나 이상 사용.

### 값

- `none`
  - : 아무것도 격리하지 않고 요소를 평범하게 렌더링합니다.
- `strict`
  - : `style`을 제외한 모든 격리 규칙을 적용합니다. `contain: size layout paint`와 같습니다.
- `content`
  - : `size`와 `style`을 제외한 모든 격리 규칙을 적용합니다. `contain: layout paint`와 같습니다.
- `size`
  - : 요소의 크기를 계산할 때 자손의 크기는 고려하지 않아도 됨을 나타냅니다.
- `layout`
  - : 요소 외부의 어느 것도 내부 레이아웃에 영향을 주지 않고, 그 반대도 성립함을 나타냅니다.
- `style`
  - : 요소 자신과 자손 외에도 영향을 주는 속성이라도 그 영향 범위가 자신을 벗어나지 않음을 나타냅니다. 이 값은 명세에서 "제외 고려" 대상이므로 모든 브라우저가 지원하지 않을 수도 있음을 참고하세요.
- `paint`
  - : 요소의 자손이 자신의 범위 바깥에 그려지지 않음을 나타냅니다. 이 값을 지정한 요소의 경우, 요소가 화면 밖에 위치할 경우 당연히 그 안의 자손도 화면 안에 들어오지 않을 것이므로 브라우저는 그 안의 요소를 고려하지 않아도 됩니다. 그러나 만약 자손이 범위 밖으로 넘칠 경우에는 요소의 테두리 상자에서 잘라냅니다.

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### 간단한 레이아웃

다음 마크업은 각각의 콘텐츠를 가진 여러 개의 글을 가정합니다.

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo" />
  <p>More content here.</p>
</article>
```

각 `<article>`과 `<img>`엔 테두리를 부여하고, 이미지는 모두 좌측으로 플로팅합니다.

```css
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}
```

{{EmbedLiveSample('간단한_레이아웃', '100%', '300')}}

### 플로팅 간섭

첫 번째 글의 마지막에 다른 이미지를 넣게 되면 많은 양의 DOM 트리가 다시 레이아웃이나 페인트 과정을 거쳐야 하며, 두 번째 글의 레이아웃에도 간섭하게 됩니다.

```html
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="i-just-showed-up.jpg" alt="social" />
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo" />
  <p>More content here.</p>
</article>
```

```css hidden
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
}
```

아래의 라이브 샘플에서, 플로팅 작동 방식으로 인해 첫 번째 이미지가 두 번째 글 안으로 들어가버린 모습을 볼 수 있습니다.

{{EmbedLiveSample('플로팅_간섭', '100%', '300')}}

### `contain`으로 수정하기

각각의 `article`에 `contain: content`를 지정해주면, 새로운 요소를 추가할 때 그 하위 트리만 계산하고 바깥은 고려하지 않아도 된다는 것을 브라우저가 인식합니다.

```html hidden
<h1>My blog</h1>
<article>
  <h2>Heading of a nice article</h2>
  <p>Content here.</p>
  <img src="i-just-showed-up.jpg" alt="social" />
</article>
<article>
  <h2>Another heading of another article</h2>
  <img src="graphic.jpg" alt="photo" />
  <p>More content here.</p>
</article>
```

```css
img {
  float: left;
  border: 3px solid black;
}

article {
  border: 1px solid black;
  contain: content;
}
```

또한 첫 번째 이미지가 플로팅으로 인해 아래로 넘어가지 않고, 컨테이너 요소의 범위 안에 머무르는 것도 확인할 수 있습니다.

{{EmbedLiveSample('contain으로_수정하기', '100%', '330')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [CSS Containment](/ko/docs/Web/CSS/CSS_Containment)
- CSS {{cssxref("position")}} 속성
