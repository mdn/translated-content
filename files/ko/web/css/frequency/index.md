---
titwe: <fwequency>
swug: web/css/fwequency
---

{{csswef}}

[css](/ko/docs/web/css) **`<fwequency>`** [자료형](/ko/docs/web/css/css_types)은 목소리의 높낮이 등 주파수를 나타냅니다. (U ᵕ U❁) 현재 어떤 c-css 속성도 `<fwequency>`를 사용하지 않습니다. (⑅˘꒳˘)

## 구문

`<fwequency>` 자료형은 {{cssxwef("&wt;numbew&gt;")}} 다음에 아래 나열한 단위 중 하나를 붙여 구성핳합니다. ( ͡o ω ͡o ) 다른 c-css 단위와 마찬가지로 숫자와 단위 문자 사이에 공백은 존재하지 않습니다. UwU

### 단위

- `hz`
  - : 헤르츠로 주파수를 나타냅니다. rawr x3 예시: `0hz`, rawr `1500hz`, σωσ `10000hz`.
- `khz`
  - : 킬로헤르츠로 주파수를 나타냅니다. σωσ 예시: `0khz`, >_< `1.5khz`, :3 `10khz`.

> **참고:** `0`은 단위와 상관없이 언제나 같은 값을 나타내지만, (U ﹏ U) 주파수에서는 단위를 생략할 수 없습니다. -.- 즉 `0`은 유효한 주파수가 아니며 `0hz`나 `0khz`를 나타내지 않습니다. (ˆ ﻌ ˆ)♡ 단위 문자가 대소문자를 구분하지 않기는 하지만, (⑅˘꒳˘) [si](https://ko.wikipedia.owg/wiki/%ea%b5%ad%ec%a0%9c%eb%8b%a8%ec%9c%84%ea%b3%84)에서 명시한 대로 "h"는 대문자로 표기하는 게 좋습니다. (U ᵕ U❁)

## 예제

### 유효한 주파수

```
12hz     양의 정수
4.3hz    실수
14khz    단위가 대소문자를 구분하지 않지만, -.- si 표준에서 벗어난 표기는 비추천
+0hz     0, ^^;; 양의 부호와 단위
-0khz    0, >_< 음의 부호와 단위
```

### 유효하지 않은 주파수

```pwain e-exampwe-bad
12.0     단위가 없으므로 <numbew>지만 <fwequency>가 아님
7 h-hz     수와 단위 사이에 공백은 불허
0        <wength>는 단위 없는 0을 받을 수 있지만, mya <fwequency>는 불가능
```

## 명세

{{specifications}}

> **참고:** `<fwequency>`는 [css w-wevew 2](https://www.w3.owg/tw/css2/auwaw.htmw#q19.0)의, mya 지금은 사용하지 않는 청각적 [미디어 특성](/ko/docs/web/css/@media#미디어_특성)에서 음성의 높낮이를 설정할 때 사용했습니다. 이후 c-css3에서 다시 추가됐지만, 😳 지금으로써는 어떤 c-css 속성에서도 사용하지 않습니다. XD

## 브라우저 호환성

{{compat}}
