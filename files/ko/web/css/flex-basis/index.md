---
title: flex-basis
slug: Web/CSS/flex-basis
---

{{CSSRef}}

**`flex-basis`** [CSS](/ko/docs/Web/CSS) 속성은 플렉스 아이템의 초기 크기를 지정합니다. {{cssxref("box-sizing")}}을 따로 지정하지 않는다면 콘텐츠 박스의 크기를 변경합니다.

{{EmbedInteractiveExample("pages/css/flex-basis.html")}}

> **참고:** `auto` 값을 가지지 않은 `flex-basis`와 {{cssxref("width")}}({{cssxref("flex-direction")}}`: column`인 경우 {{cssxref("height")}}) 값을 동시에 적용한 경우 `flex-basis`가 우선합니다.

## 구문

```css
/* <'width'> 지정 */
flex-basis: 10em;
flex-basis: 3px;
flex-basis: auto;

/* 원본 크기 키워드 */
flex-basis: fill;
flex-basis: max-content;
flex-basis: min-content;
flex-basis: fit-content;

/* 플렉스 아이템 내용 크기에 따라 조절 */
flex-basis: content;

/* 전역 값 */
flex-basis: inherit;
flex-basis: initial;
flex-basis: unset;
```

`flex-basis` 속성값은 `content` 키워드를 사용하거나, [`<'width'>`](#width)를 나타내는 단위를 사용합니다.

### 값

- `<'width'>`
  - : {{cssxref("&lt;length&gt;")}}, 플렉스 컨테이너의 크기에 상대적인 {{cssxref("&lt;percentage&gt;")}}, `auto` 키워드 중 하나. 음수 값은 유효하지 않습니다.
- `content`

  - : 플렉스 아이템의 콘텐츠 크기에 따라 자동으로 크기가 변합니다.

    > **참고:** `content` 키워드는 Flexible Box Layout의 첫 배포에 포함되지 않아, 일부 오래 된 구현체에서는 지원하지 않을 수 있습니다. `flex-basis`와 주 크기({{cssxref("width")}}, {{cssxref("height")}}) 속성을 동시에 `auto`로 설정하면 동일한 효과를 볼 수 있습니다.

    > **역사:** 원래 `flex-basis: auto`의 뜻은 자신의 `width` 또는 `height` 속성의 값을 사용하라는 것이었습니다.

    - 그 후 `flex-basis: auto`는 자동 크기조절로 바뀌고, 기존의 `auto`는 `main-size`로 바뀌었습니다. [bug 1032922](https://bugzilla.mozilla.org/show_bug.cgi?id=1032922)에서 구현 기록을 볼 수 있습니다.[bug 1093316](https://bugzilla.mozilla.org/show_bug.cgi?id=1093316)에서 되돌려져 `auto` 가 다시 `width` / `height` 속성을 가리키게 됐고, 대신 새로운 `content` 키워드가 자동 크기조절을 맡게 됐습니다. ([Firefox bug 1105111](https://bugzil.la/1105111)에서 볼 수 있습니다)

### 형식 구문

{{csssyntax}}

## 예제

### HTML

```html
<ul class="container">
  <li class="flex flex1">1: flex-basis test</li>
  <li class="flex flex2">2: flex-basis test</li>
  <li class="flex flex3">3: flex-basis test</li>
  <li class="flex flex4">4: flex-basis test</li>
  <li class="flex flex5">5: flex-basis test</li>
</ul>

<ul class="container">
  <li class="flex flex6">6: flex-basis test</li>
</ul>
```

### CSS

```css
.container {
  font-family: arial, sans-serif;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
}

.flex {
  background: #6ab6d8;
  padding: 10px;
  margin-bottom: 50px;
  border: 3px solid #2e86bb;
  color: white;
  font-size: 20px;
  text-align: center;
  position: relative;
}

.flex:after {
  position: absolute;
  z-index: 1;
  left: 0;
  top: 100%;
  margin-top: 10px;
  width: 100%;
  color: #333;
  font-size: 18px;
}

.flex1 {
  flex-basis: auto;
}

.flex1:after {
  content: "auto";
}

.flex2 {
  flex-basis: max-content;
}

.flex2:after {
  content: "max-content";
}

.flex3 {
  flex-basis: min-content;
}

.flex3:after {
  content: "min-content";
}

.flex4 {
  flex-basis: fit-content;
}

.flex4:after {
  content: "fit-content";
}

.flex5 {
  flex-basis: content;
}

.flex5:after {
  content: "content";
}

.flex6 {
  flex-basis: fill;
}

.flex6:after {
  content: "fill";
}
```

### 결과

{{EmbedLiveSample('예제', '860', '360', '')}}

## 명세

{{Specifications}}

{{cssinfo}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- CSS 플렉스박스 안내서: _[Basic Concepts of Flexbox](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)_
- CSS 플렉스박스 안내서: _[Controlling Ratios of flex items along the main axis](/ko/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)_
- {{cssxref("width")}}
