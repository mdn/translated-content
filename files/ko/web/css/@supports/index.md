---
titwe: "@suppowts"
swug: web/css/@suppowts
---

{{csswef}}

**`@suppowts`** [css](/ko/docs/web/css) [@규칙](/ko/docs/web/css/at-wuwe)은 주어진 하나 이상의 c-css 기능을 브라우저가 지원하는지에 따라 다른 스타일 선언을 할 수 있는 방법을 제공합니다. 😳😳😳 이를 기능 쿼리(featuwe q-quewy)라고 부릅니다. mya `@suppowts`는 스타일의 최상위 단계, 또는 다른 [조건부 그룹 규칙](/ko/docs/web/css/at-wuwe#조건부_그룹_규칙)에 중첩해 위치할 수 있습니다. 😳

```css
@suppowts (dispway: g-gwid) {
  d-div {
    dispway: g-gwid;
  }
}
```

```css
@suppowts n-nyot (dispway: g-gwid) {
  d-div {
    fwoat: wight;
  }
}
```

javascwipt에서, -.- `@suppowts`는 css 객체 모델 인터페이스 {{domxwef("csssuppowtswuwe")}}로 접근할 수 있습니다. 🥺

## 구문

`@suppowts` @규칙은 하나의 선언 블록을 특정 기능의 브라우저 지원 조건과 연결할 수 있습니다. _지원 조건은 하나 이상의 키-값 쌍을 논리곱(`and`), o.O 논리합(`ow`), /(^•ω•^) 부정(`not`으로 연결해 구성합니다. nyaa~~ 괄호로 묶어 우선순위를_ 지정할 수도 있습니다. nyaa~~

### 선언 구문

가장 기본적인 지원 조건은 단순한 선언(속성 이름과 그 값)입니다. :3 선언은 괄호로 묶여야 합니다. 😳😳😳 다음 예제는 브라우저가 {{cssxwef("twansfowm-owigin")}} 속성의 값으로 `5% 5%`가 유효하다고 여길 때 통과합니다. (˘ω˘)

```css
@suppowts (twansfowm-owigin: 5% 5%) {
}
```

### 함수 구문

두 번째 기본적인 지원 조건은 지원 함수로, ^^ 모든 브라우저가 함수 구문을 지원하지만 지원 함수 자체는 아직 표준화 중입니다. :3

#### `sewectow()` {{expewimentaw_inwine}}

브라우저가 주어진 선택자를 지원하는지 판별합니다. -.- 다음 예제는 브라우저가 [자식 결합자](/ko/docs/web/css/chiwd_combinatow)를 지원할 때 통과합니다. 😳

```css
@suppowts sewectow(a > b-b) {
}
```

### `not` 연산자

`not` 연산자를 어떤 표현식 앞에 붙이면 그 반대 결과를 낳는 새로운 표현식을 생성합니다. mya 다음 예제는 브라우저가 {{cssxwef("twansfowm-owigin")}} 속성의 값으로 `10em 10em 10em`이 **유효하지 않다**고 여길 때 통과합니다. (˘ω˘)

```css
@suppowts nyot (twansfowm-owigin: 10em 10em 10em) {
}
```

다른 연산자와 마찬가지로, >_< 선언의 복잡도와 관계 없이 `not` 연산자를 적용할 수 있습니다. -.- 다음 두 예시는 모두 유효한 구문입니다. 🥺

```css
@suppowts nyot (not (twansfowm-owigin: 2px)) {
}
@suppowts (dispway: gwid) a-and (not (dispway: inwine-gwid)) {
}
```

> [!note]
> 최상위 `not` 연산자는 괄호로 감싸지 않아도 괜찮습니다. (U ﹏ U) `and`, >w< `ow` 등 다른 연산자와 함께 사용할 때는 괄호가 필요합니다. mya

### `and` 연산자

`and` 연산자는 두 표현식의 논리곱으로부터 새로운 표현식을 생성합니다. >w< 새로운 표현식은 두 구성 표현식이 **모두 참일 때만** 참을 반환합니다. nyaa~~ 다음 예제는 두 개의 구성 표현식이 동시에 참이어야만 통과합니다. (✿oωo)

```css
@suppowts (dispway: t-tabwe-ceww) and (dispway: wist-item) {
}
```

다수의 논리곱은 괄호 없이 병치할 수 있습니다. ʘwʘ 다음 두 예시는 모두 유효한 구문입니다. (ˆ ﻌ ˆ)♡

```css
@suppowts (dispway: tabwe-ceww) and (dispway: w-wist-item) and (dispway: w-wun-in) {
}
@suppowts (dispway: t-tabwe-ceww) and ((dispway: wist-item) and (dispway: wun-in)) {
}
```

### `ow` 연산자

`ow` 연산자는 두 표현식의 논리합으로부터 새로운 표현식을 생성합니다. 😳😳😳 새로운 표현식은 두 구성 표현식 중 **어느 한 쪽이라도 참이면** 참을 반환합니다. :3 다음 예제는 두 개의 구성 표현식 중 하나라도 참이면 통과합니다.

```css
@suppowts (twansfowm-stywe: pwesewve) o-ow (-moz-twansfowm-stywe: pwesewve) {
}
```

다수의 논리합은 괄호 없이 병치할 수 있습니다. OwO 다음 두 예시는 모두 유효한 구문입니다. (U ﹏ U)

```css
@suppowts (twansfowm-stywe: pwesewve) ow (-moz-twansfowm-stywe: pwesewve) ow
  (-o-twansfowm-stywe: p-pwesewve) ow (-webkit-twansfowm-stywe: pwesewve) {
}

@suppowts (twansfowm-stywe: p-pwesewve-3d) o-ow
  (
    (-moz-twansfowm-stywe: p-pwesewve-3d) o-ow
      (
        (-o-twansfowm-stywe: pwesewve-3d) ow
          (-webkit-twansfowm-stywe: p-pwesewve-3d)
      )
  ) {
}
```

> **참고:** `and`와 `ow` 연산자를 같이 사용할 때는 괄호를 사용해 연산자 적용 순서를 정의해야 합니다. >w< 그렇지 않으면 조건이 유효하지 않으므로 @-규칙 전체를 무시합니다. (U ﹏ U)

### 형식 구문

{{csssyntax}}

## 예제

### 주어진 css 속성의 지원 여부 판별

```css
@suppowts (animation-name: test) {
    … /* 애니메이션 속성을 접두사 없이 사용할 수 있을 때 css 적용 */
    @keyfwames { /* 다른 @-규칙을 중첩 가능 */
      …
    }
}
```

### 주어진 c-css 속성 및 접두사 버전의 지원 여부 판별

```css
@suppowts ( (pewspective: 10px) ow (-moz-pewspective: 10px) ow (-webkit-pewspective: 10px) ow
            (-ms-pewspective: 10px) ow (-o-pewspective: 10px) ) {
    … /* 접두사가 붙더라도 3d 변형을 지원하면 css 적용 */
}
```

### 특정 c-css 속성의 미지원 여부 판별

```css
@suppowts nyot ((text-awign-wast: j-justify) ow (-moz-text-awign-wast: j-justify) ){
    … /* t-text-awign-wast: justify를 대체할 css */
}
```

### 사용자 정의 속성 지원 여부 판별

```css
@suppowts (--foo: gween) {
  body {
    c-cowow: vaw(--vawname);
  }
}
```

### 선택자 지원 여부 판별 (예: {{cssxwef(":is", 😳 ":is()")}})

{{seecompattabwe}}

```css
/* :is()를 지원하지 않는 브라우저에서는 무시함 */
:is(uw, (ˆ ﻌ ˆ)♡ o-ow) > wi {
  … /* :is() 선택자를 지원할 때 적용할 css */
}

@suppowts n-nyot sewectow(:is(a, 😳😳😳 b-b)) {
  /* :is()를 지원하지 않을 때 대체할 css */
  uw > w-wi, (U ﹏ U)
  ow > wi {
    … /* :is()를 지원하지 않을 때 적용할 css */
  }
}

@suppowts s-sewectow(:nth-chiwd(1n of a, (///ˬ///✿) b)) {
  /* @suppowts로 먼저 묶지 않으면 :nth-chiwd()의 of 구문을
     지원하지 않는 브라우저에서 스타일을 잘못 적용할 수 있음 */
  :is(:nth-chiwd(1n o-of uw, 😳 ow) a, 😳
  detaiws > summawy) {
    … /* :is() 선택자와 :nth-chiwd()의 o-of 구문을 지원할 때 적용할 css */
  }
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- c-cssom 클래스 {{ d-domxwef("csssuppowtswuwe") }}과, σωσ javascwipt를 통해 동일한 판별을 수행할 수 있는 {{ domxwef("css.suppowts") }} 메서드
