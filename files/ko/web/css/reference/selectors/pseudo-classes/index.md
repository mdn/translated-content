---
title: 의사 클래스
slug: Web/CSS/Reference/Selectors/Pseudo-classes
original_slug: Web/CSS/Pseudo-classes
---

[CSS](/ko/docs/Web/CSS) **의사 클래스**(가상 클래스)는 선택자에 추가하는 키워드로, 선택한 요소가 특별한 상태여야 만족할 수 있습니다. 예를 들어 {{cssxref(":hover")}}를 사용하면 포인터를 올렸을 때에만 글씨 색을 바꾸고 싶을 때 사용할 수 있습니다.

```css
/* Any button over which the user's pointer is hovering */
button:hover {
  color: blue;
}
```

의사 클래스를 사용하면 문서 트리 콘텐츠와 관련된 경우 뿐만 아니라 탐색기 히스토리({{cssxref(":visited")}} 등), 콘텐츠의 상태(특정 폼 요소에 적용한 {{cssxref(":checked")}} 등), 마우스의 위치(커서가 마우스 위인지 아닌지 알 수 있는 {{cssxref(":hover")}} 등)처럼 외부 인자와 관련된 경우에도 스타일을 적용할 수 있습니다.

> [!NOTE]
> [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)는 의사 클래스와 달리 요소의 **특정 부분**에 스타일을 적용할 때 사용합니다.

## 구문

```
selector:pseudo-class {
  property: value;
}
```

일반적인 클래스와 같이 여러 개의 의사 클래스를 조합해 복잡한 선택자를 만들 수 있습니다.

## 표준 의사 클래스 색인

- {{CSSxRef(":active")}}
- {{CSSxRef(":any-link")}} {{Experimental_Inline}}
- {{CSSxRef(":blank")}} {{Experimental_Inline}}
- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}
- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}} {{Experimental_Inline}}
- {{CSSxRef(":disabled")}}
- {{CSSxRef(":drop")}} {{Experimental_Inline}}
- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}
- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":fullscreen")}} {{Experimental_Inline}}
- {{CSSxRef(":future")}} {{Experimental_Inline}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}} {{Experimental_Inline}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":has", ":has()")}} {{Experimental_Inline}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host()")}}
- {{CSSxRef(":host-context()")}} {{Experimental_Inline}}
- {{CSSxRef(":hover")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":in-range")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}}
- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}
- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-col", ":nth-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-col", ":nth-last-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}
- {{CSSxRef(":past")}} {{Experimental_Inline}}
- {{CSSxRef(":placeholder-shown")}} {{Experimental_Inline}}
- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}
- {{CSSxRef(":scope")}}
- {{CSSxRef(":state", ":state()")}} {{Experimental_Inline}}
- {{CSSxRef(":target")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}
- {{CSSxRef(":user-invalid")}} {{Experimental_Inline}}
- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}}

## 명세

{{Specifications}}

## 같이 보기

- [의사 요소](/ko/docs/Web/CSS/Pseudo-elements)
