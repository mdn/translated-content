---
title: revert
slug: Web/CSS/revert
---

{{CSSRef}}

**`revert`** 는 현재 엘리먼트에 선언 된 캐스캐이딩된 속성으로부터 **{{Glossary("style origin")}}** 으로 되돌립니다. 부모 속성 또는 user agent에 따라 default로 선언 된 속성으로 되돌리는 것입니다. 이 속성은 css 단축속성{{cssxref("all")}}을 포함한 어떤 프로퍼티에도 적용할 수 있습니다.

- 만약 그 사이트만의 css 속성이 지정되어있다면 `revert` 속성은 유저가 지정한 커스텀 스타일로 롤백합니다. 만약 하나만 존재한다면 user agent의 default 스타일로 돌아가는 것입니다.
- 만약 사용자의 커스텀 스타일을 사용하거나 사용자에 의해서 스타일이 적용되어 있다면, `revert` 는 user agent의 default 스타일로 되돌립니다.
- 만약 user agent default 스타일만 지정되어있다면, {{cssxref("unset")}}과 마찬가지의 의미입니다.

`revert` 키워드는 많은 경우에서 [`unset`](/ko/docs/Web/CSS/unset) 과 같은 성질을 가집니다. 한가지 차이점은 user agent에 의한 스타일이냐 유저가 지정한 스타일이냐의 차이입니다.

Revert 는 자식 요소까지 변경하지는 않습니다. (하지만 자식 요소에 특별히 rule이 지정되어 있지 않다면 적용됩니다.). 그래서 만약에 모든 섹션에 `color: green` 속성을 지정하고 `all: revert` 를 사용하면 모든 섹션의 컬러값은 black으로 돌아갈 것입니다. 하지만 만약, 당신이 section 내의 모든 p에 red를 지정했다면 그것들은 red로 유지될 것입니다.

> **참고:** Revert는 단순히 값입니다. 그러므로 `revert` 또한 다른 [specificity](/ko/docs/Web/CSS/Specificity)값으로 덮어 쓸 수 있습니다.

> **참고:** `revert` 는 {{cssxref("initial")}} 키워드와는 다른데, [initial value](/ko/docs/Web/CSS/initial_value) 는 프로퍼티 단위의 css 특성화입니다. user-agent의 스타일 시트도 default value로 되돌립니다..
>
> 예를 들어, {{cssxref("display")}} 속성에 대한 [initial value](/ko/docs/Web/CSS/initial_value) 는 `inline` 입니다. 반면에 {{HTMLElement("div")}} 에 대한 {{cssxref("display")}} user agent 속성은 `block` 이고, {{HTMLElement("table")}} 에 대한 속성은 `table` 입니다.

## 예시

### Revert vs unset

비록 `revert` 와 `unset` 은 비슷하지만 몇몇 엘리먼트와 몇몇 속성에서는 다릅니다.

그래서 아래 예시를 보면, 우리는 `font-weight` 를 커스텀으로 글로벌 스타일로 지정하였습니다. 그러나 revert와 unset을 시도해보면 다른 결과를 볼 수 있습니다. Unset text를 default로 설정된 normal로 유지합니다. Revert는 user-agent 상에 font-weight인 bold로 돌아갈 것입니다.

```css
h3 {
  font-weight: normal;
  color: blue;
}
```

```html
<h3 style="font-weight: unset; color: unset;">
  This will still have font-weight: normal, but color: black
</h3>
<p>Just some text</p>
<h3 style="font-weight: revert; color: revert;">
  This should have its original font-weight (bold) and color: black
</h3>
<p>Just some text</p>
```

{{EmbedLiveSample('Revert_vs_unset')}}

### Revert all

모든 요소를 revert 하는 것은 당신이 많은 캐스캐이딩에 따른 수정이 있었을 때 default로 돌아가기에 매우 유용합니다. 그래서 font-weight를 리버트 하고 color를 리버트하는 것을 각각 하기보다는 한꺼번에 돌릴 수 있습니다.

```css
h3 {
  font-weight: normal;
  color: blue;
  border-bottom: 1px solid grey;
}
```

```html
<h3>This will have custom styles</h3>
<p>Just some text</p>
<h3 style="all: revert">This should be reverted to browser/user defaults</h3>
<p>Just some text</p>
```

{{EmbedLiveSample('Revert_all')}}

### 부모요소에서의 Revert

효율적으로 revert 하는 것은 당신이 선택한 속성에 대해서만 해당 속성을 제거하는 것입니다. 우리는 paragraph에 한해서는 red 속성을 지정하고 section에는 darkgreen 을 따로 각각 지정할 수 있습니다.

```css
section {
  color: darkgreen;
}
p {
  color: red;
}
section.with-revert {
  color: revert;
}
```

```html
<section>
  <h3>따로 지정되지 않은 h3는 다크 그린</h3>
  <p>paragraph의 텍스트는 빨강</p>
  섹션 안의 요소니까 다크 그린.
</section>
<section class="with-revert">
  <h3>revert로 따로 지정되어있지 않았던 h3는 검정</h3>
  <p>특성화되어있는 paragraph는 그대로 빨강</p>
  섹션 안의 요소가 revert 되면서 검정
</section>
```

section 요소가 돌아갔음에도 paragraph는 여전히 빨강인 것에 주목하세요.

{{EmbedLiveSample('Revert_on_a_parent')}}

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 요약

- initial value를 지정할 때는 {{cssxref("initial")}} 를 사용하세요 .
- 초기 속성을 없애거나, 부모 요소에 대한 상속 된 속성을 지정할 때는 {{cssxref("unset")}} 를 사용하세요.
- 부모 속성을 지정할 때는 {{cssxref("inherit")}} 를 사용하세요.
- {{cssxref("all")}} 속성은 unset, initial, revert, inherit 속성을 한꺼번에 지정할 것입니다.
