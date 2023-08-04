---
title: Window.getComputedStyle()
slug: Web/API/Window/getComputedStyle
---

{{APIRef}}

`Window.getComputedStyle()` 메소드는 인자로 전달받은 요소의 모든 CSS 속성값을 담은 객체를 회신합니다. 이 속성값들은, 해당 요소에 대하여 활성 스타일시트와 속성값에 대한 기본 연산이 모두 반영된 결과값입니다. 개별 CSS속성 값은 객체를 통해 제공되는 API 또는 CSS 속성 이름을 사용해서 간단히 색인화해서 액세스할 수 있습니다.

## 구문

```js
var style = window.getComputedStyle(element[, pseudoElt]);
```

- element
  - : 속성값을 얻으려하는 {{domxref("Element")}}.
- pseudoElt {{optional_inline}}
  - : 일치시킬 의사요소(`pseudo element`)를 지정하는 문자열. 보통의 요소들에 대해서는 생략되거나 `null`이어야 함.

반환되는 `style`은 요소의 스타일이 변경 될 때 자동으로 업데이트되는 실시간 {{domxref ( "CSSStyleDeclaration")}} 객체입니다.

## 예제

이 예제에서는 간단한 {{htmlelement("div")}} 요소에 CSS스타일을 적용하고, `getComputedStyle()`를 사용해서 적용된 스타일값을 찾아낸 후에 `<div>`의 본문으로 출력합니다.

```html
<p>Hello</p>
```

```css
p {
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  line-height: 2;
  font-size: 2rem;
  font-family: sans-serif;
  background: purple;
  color: white;
  text-align: center;
}
```

```js
let para = document.querySelector("p");
let compStyles = window.getComputedStyle(para);
para.textContent =
  "My computed font-size is " +
  compStyles.getPropertyValue("font-size") +
  ",\nand my computed line-height is " +
  compStyles.getPropertyValue("line-height") +
  ".";
```

### 결과

{{EmbedLiveSample('예제', '100%', '240px')}}

## 설명

메소드의 호출에서 반환되는 객체의 자료형은 요소의 {{domxref("HTMLElement.style", "style")}} 속성에서 반환되는 객체와 동일한 {{domxref("CSSStyleDeclaration")}}형입니다. 그러나 두 객체는 다른 목적을 가지고 있습니다. `getComputedStyle` 에서 반환된 객체는 읽기 전용이며 요소의 (\<style> 또는 외부 stylesheet로 설정되는 것도 포함해서) 스타일을 검사하는 데 사용할 수 있습니다. `elt.style` 객체는 특정한 요소에 스타일을 설정하는 데 사용해야 합니다.

첫 번째 인수는 요소여야합니다. #text 노드같은 비-요소 노드를 전달하면 오류가 발생합니다.

## `defaultView`

온라인의 많은 코드 샘플중에서, `getComputedStyle`은 `document.defaultView`객체에서 사용됩니다만, 대개의 경우에는 `getComputedStyle`은 `window`객체에도 존재하므로 `document.defaultView`객체에서 사용하는 패턴은 필요하지 않습니다. `defaultView`패턴은 (1) window 스펙을 작성하고 싶지 않은 사람들과 (2) Java에서도 사용할 수있는 API를 만드는 것의 조합이었을 가능성이 큽니다. 그러나 `defaultView`의 메소드를 사용해야만하는 [경우](https://github.com/jquery/jquery/pull/524#issuecomment-2241183)가 하나 있습니다. Firefox 3.6을 사용하여 프레임 스타일(framed styles)에 액세스하는 경우입니다.

## 의사요소 사용하기

getComputedStyle은 의사요소(pseudo-elements, `::after`, `::before`, `::marker`, `::line-marker`, [spec](http://dev.w3.org/csswg/css3-content/#pseudo-elements)참고)에서 스타일 정보를 가져올 수 있습니다.

```html
<style>
  h3::after {
    content: " rocks!";
  }
</style>

<h3>generated content</h3>

<script>
  var h3 = document.querySelector("h3");
  var result = getComputedStyle(h3, ":after").content;

  console.log("the generated content is: ", result); // returns ' rocks!'
</script>
```

## 참고

반환되는 {{domxref("CSSStyleDeclaration")}} 객체에는 지원되는 모든 CSS의 본디속성(longhand)명에 대한 활성값을 갖게 됩니다. 예로, 본디속성명 `border-bottom-width`의 경우를 보면, `border-width`와 `border`같은 [단축속성명](/ko/docs/Web/CSS/Shorthand_properties)이 사용됩니다. `font-size`과 같은 본디속성명만을 사용하여 속성값을 질의하는 것이 안전합니다. `font`같은 단축속성명을 사용하여 질의하는 것은 대부분의 브라우저에서 동작하지 않을 것입니다.

CSS속성 값은 `getPropertyValue(propName)` API를 사용하거나, `cs[' z-index']` 또는 `cs.zIndex` 같은 방식으로 객체에 직접 인덱싱하여 액세스할 수 있습니다.

`getComputedStyle`에서 반환되는 값들은 {{cssxref("resolved_value", "resolved values")}}라고 합니다. 이 값들은 일반적으로 CSS 2.1 {{cssxref("computed_value","computed values")}}과 같지만, 일부 오래된 속성(`width`, `height` 또는 `padding`)에 대해서는 {{cssxref("used_value","used values")}}입니다. 원래, CSS 2.0에서는 이 computed values를 cascading과 inheritance 후에 "사용준비완료"된 최종값을 의미했습니다. 하지만, CSS 2.1에서는 computed values를 pre-layout으로, used values들은 post-layout으로 재정의했습니다. CSS 2.0 속성들에 대해서는 `getComputedStyle`은 지금은 **used values**라고 불리는 옛 의미의 computed values를 반환합니다. pre-layout과 post-layout값의 차이를 나타내는 예로서 요소의 width 또는 height(layout이라고도 함)를 나타내는 백분율(퍼센트표시)이 이 있는데, 이 값들은 used value의 경우에만 픽셀(에 상당하는 대체물)로 대체됩니다.

몇 몇 알려진 경우에 대해, 반환값은 의도적으로 부정확한 값을 가집니다. 특히, 소위 CSS History Leak 보안 문제를 피하기 위해 브라우저는 링크에 대해서는 명시적으로 used value에 대해 "거짓말"을 하는데, 사용자가 링크된 사이트를 한번도 방문한 적이 없는 것 처럼 값을 반환합니다. 이것이 어떻게 구현되는 지에 대한 자세한 내용은 <http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/>와 <http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/>를 보십시오. 대부분의 최신 브라우저는 의사 선택기 스타일 응용과 `getComputedStyle`의 반환값에 대해서 유사한 변경 사항을 적용했습니다.

CSS전이 중에 `getComputedStyle`를 호출하면, Firefox에서는 원래속성값(Original property value)을 반환하지만, WebKit에서는 최종속성값(final property value)을 반환합니다.

Firefox에서는 `auto`값을 가진 속성들이 `auto`값이 아니라 used value를 반환합니다. 그래서, `height:100px;`의 컨테이너 블록 안에 `height:30px;`의 속성을 가진 요소를 넣고 `top:auto;`와 `bottom:0;`를 적용하면, `top`에 대한 computed style값을 요구할때 Firefox는 `100px-30px=70px`의 결과로서 `top:70px`를 반환합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("window.getDefaultComputedStyle")}}
- {{cssxref("resolved_value", "Resolved Value")}}
