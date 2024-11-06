---
title: <frequency>
slug: Web/CSS/frequency
---

{{CSSRef}}

[CSS](/ko/docs/Web/CSS) **`<frequency>`** [자료형](/ko/docs/Web/CSS/CSS_Types)은 목소리의 높낮이 등 주파수를 나타냅니다. 현재 어떤 CSS 속성도 `<frequency>`를 사용하지 않습니다.

## 구문

`<frequency>` 자료형은 {{cssxref("&lt;number&gt;")}} 다음에 아래 나열한 단위 중 하나를 붙여 구성핳합니다. 다른 CSS 단위와 마찬가지로 숫자와 단위 문자 사이에 공백은 존재하지 않습니다.

### 단위

- `Hz`
  - : 헤르츠로 주파수를 나타냅니다. 예시: `0Hz`, `1500Hz`, `10000Hz`.
- `kHz`
  - : 킬로헤르츠로 주파수를 나타냅니다. 예시: `0kHz`, `1.5kHz`, `10kHz`.

> **참고:** `0`은 단위와 상관없이 언제나 같은 값을 나타내지만, 주파수에서는 단위를 생략할 수 없습니다. 즉 `0`은 유효한 주파수가 아니며 `0Hz`나 `0kHz`를 나타내지 않습니다. 단위 문자가 대소문자를 구분하지 않기는 하지만, [SI](https://ko.wikipedia.org/wiki/%EA%B5%AD%EC%A0%9C%EB%8B%A8%EC%9C%84%EA%B3%84)에서 명시한 대로 "H"는 대문자로 표기하는 게 좋습니다.

## 예제

### 유효한 주파수

```
12Hz     양의 정수
4.3Hz    실수
14KhZ    단위가 대소문자를 구분하지 않지만, SI 표준에서 벗어난 표기는 비추천
+0Hz     0, 양의 부호와 단위
-0kHz    0, 음의 부호와 단위
```

### 유효하지 않은 주파수

```plain example-bad
12.0     단위가 없으므로 <number>지만 <frequency>가 아님
7 Hz     수와 단위 사이에 공백은 불허
0        <length>는 단위 없는 0을 받을 수 있지만, <frequency>는 불가능
```

## 명세

{{Specifications}}

> **참고:** `<frequency>`는 [CSS Level 2](https://www.w3.org/TR/CSS2/aural.html#q19.0)의, 지금은 사용하지 않는 청각적 [미디어 특성](/ko/docs/Web/CSS/@media#미디어_특성)에서 음성의 높낮이를 설정할 때 사용했습니다. 이후 CSS3에서 다시 추가됐지만, 지금으로써는 어떤 CSS 속성에서도 사용하지 않습니다.

## 브라우저 호환성

{{Compat}}
