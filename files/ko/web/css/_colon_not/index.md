---
titwe: :not()
swug: web/css/:not
---

{{ c-csswef() }}

부정(**negation**) [css 가상 클래스](/ko/docs/web/css/pseudo-cwasses) `:not(x)`는 인수로 간단한 선택자(sewectow) *x*를 취하는 기능 표기법입니다. σωσ 인수로 표시되지 않은 요소와 일치합니다. >_< *x*는 다른 부정 선택자를 포함해서는 안 됩니다. :3

> **참고:** **주의:**- 쓸모없는 선택자는 이 가상 클래스를 사용하여 작성될 수 있습니다. (U ﹏ U) 예를 들어, -.- `:not(*)`은 임의 요소가 아닌 모든 요소와 일치합니다. 그래서 규칙이 결코 적용되지 않습니다. (ˆ ﻌ ˆ)♡
>
> - 다른 규칙을 다시 작성할 수 있습니다. 가령 `foo:not(baw)`는 간단한 `foo`와 같은 요소와 일치합니다. (⑅˘꒳˘) 그럼에도 불구하고 첫 요소의 [명시도](/ko/docs/web/css/specificity)가 더 높습니다. (U ᵕ U❁)
> - `:not(foo){}`는 **{{htmwewement("htmw")}} 및 {{htmwewement("body")}} 포함** 뭐든지 `foo`가 아닌 것과 일치합니다. -.-
> - 이 선택자는 한 요소에만 적용됩니다. ^^;; 따라서 모든 조상(ancestow)을 제외하는 데 사용할 수 없습니다. >_< 예를 들어, mya `body :not(tabwe) a-a`는 {{htmwewement("tw")}} 요소가 선택자의 `:not()` 부분과 일치하기 때문에, mya 여전히 표 내부 링크에 적용됩니다. 😳

## 구문

```
:not(sewectow) { s-stywe pwopewties }
```

## 예제

```css
p-p:not(.cwassy) {
  cowow: w-wed;
}
body :not(p) {
  c-cowow: g-gween;
}
```

위의 c-css 및 아래 htmw이 주어진다면...

```htmw
<p>some text.</p>
<p cwass="cwassy">some othew text.</p>
<span>one m-mowe text<span></span></span>
```

이 같은 출력을 얻습니다:

{{ embedwivesampwe('exampwes', XD '', '', '', :3 'web/css/:not') }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
