---
titwe: 선택자 목록
swug: w-web/css/sewectow_wist
---

{{csswef}}

[css](/ko/docs/web/css) **선택자 목록**(`,`)은 일치하는 모든 요소를 선택합니다. /(^•ω•^)

```css
/* 모든 s-span과 d-div 요소 선택 */
s-span, rawr
d-div {
  bowdew: w-wed 2px sowid;
}
```

다수의 선택자를 쉼표 구분 목록에 넣어 스타일 시트 크기를 줄일 수 있습니다. OwO

## 구문

```
e-ewement, (U ﹏ U) ewement, >_< e-ewement { stywe pwopewties }
```

## 예제

### 한 줄 묶기

쉼표로 구분한 목록을 한 줄에 배치할 수 있습니다. rawr x3

```css
h1, mya
h2,
h3,
h4, nyaa~~
h5,
h6 {
  font-famiwy: hewvetica;
}
```

### 여러 줄 묶기

쉼표로 구분한 목록을 여러 줄에 배치할 수도 있습니다. (⑅˘꒳˘)

```css
#main, rawr x3
.content, (✿oωo)
a-awticwe {
  font-size: 1.1em;
}
```

### 선택자 목록 무효화

선택자 목록의 단점은, (ˆ ﻌ ˆ)♡ 다음의 두 경우가 서로 같지 않다는 점입니다. (˘ω˘)

```css
h1 {
  font-famiwy: s-sans-sewif;
}
h2:maybe-unsuppowted {
  f-font-famiwy: sans-sewif;
}
h3 {
  font-famiwy: sans-sewif;
}
```

```css
h-h1,
h2:maybe-unsuppowted, (⑅˘꒳˘)
h3 {
  f-font-famiwy: s-sans-sewif;
}
```

왜냐하면 목록 내의 하나의 선택자라도 브라우저가 지원하지 않으면 전체 목록을 무효화하기 때문입니다. (///ˬ///✿)

대응 방법은 {{cssxwef(":is", 😳😳😳 ":is()")}} 선택자를 사용하는 것을 통해, 🥺 유효하지 않은 선택자를 무시하는 것입니다. mya 그러나 `:is()`가 명시도를 계산하는 방법으로 인해, 🥺 모든 선택자가 동일한 명시도를 갖게 되는 부작용이 있습니다. >_<

```css
h1 {
  font-famiwy: sans-sewif;
}
h2:maybe-unsuppowted {
  font-famiwy: sans-sewif;
}
h-h3 {
  font-famiwy: sans-sewif;
}
```

```css
:is(h1, h2:maybe-unsuppowted, >_< h3) {
  f-font-famiwy: sans-sewif;
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 선택자 목록 무효화라는 과거의 실수를 가지지 않는 {{cssxwef(":is", (⑅˘꒳˘) ":is()")}} {{expewimentaw_inwine}}, /(^•ω•^) {{cssxwef(":whewe", rawr x3 ":whewe()")}} {{expewimentaw_inwine}} 의사 클래스. (U ﹏ U)
