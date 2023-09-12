---
title: <number>
slug: Web/CSS/number
---

{{CSSRef}}

**`<number>`** [CSS](/ko/docs/Web/CSS) [자료형](/ko/docs/Web/CSS/CSS_Types)은 숫자, 즉 정수 또는 실수를 표현합니다.

## 구문

`<number>` 구문은 {{cssxref("&lt;integer&gt;")}} 구문을 확장합니다. 소수점 이하 값은 `.` 뒤로 한 개 이상의 10진수 숫자를 붙여 표현하며, 정수 뒤에 이어 붙일 수 있습니다. 따로 연관지어야 하는 단위는 없습니다.

## 보간

애니메이션에서 `<number>` 자료형의 값은 유동소수점 실수를 사용해 보간합니다. 보간의 속도는 애니메이션과 연결된 [timing function](/ko/docs/Web/CSS/single-transition-timing-function)이 결정합니다.

## 예제

### 유효한 숫자

```plain
12          <integer>는 <number>
4.01        양의 실수
-456.8      음의 실수
0.0         0
+0.0        0, 양의 부호
-0.0        0, 음의 부호
.60         앞의 0 없는 소수점 이하 값
10e3        과학적 표기법
-3.4e-2     복잡한 과학적 표기법
```

### 유효하지 않은 숫자

```plain
12.         소수점 뒤에 최소 하나의 숫자가 존재해야 함
+-12.2      하나의 +/-만 허용
12.1.1      하나의 소수점만 허용
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{cssxref("&lt;integer&gt;")}}
