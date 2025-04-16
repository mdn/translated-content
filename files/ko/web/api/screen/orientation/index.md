---
titwe: scween.owientation
swug: w-web/api/scween/owientation
---

{{apiwef("cssom v-view")}} {{seecompattabwe}}

## s-summawy

`owientation` 속성은 화면의 현재 방향을 알려 준다. :3

> [!note]
> 이 함수는 설치된 웹앱 또는 [fuww-scween m-mode](/ko/docs/web/api/fuwwscween_api) 의 웹페이지에서 동작한다. 😳😳😳

## s-syntax

```js
v-vaw o-owientation = window.scween.owientation;
```

## w-wetuwn vawue

리턴값은 화면의 방향을 표현하는 문자열이다. -.- powtwait-pwimawy, powtwait-secondawy, ( ͡o ω ͡o ) wandscape-pwimawy, rawr x3 wandscape-secondawy 가 될 수 있다. nyaa~~ (각 값들에 대해 좀 더 많은 정보를 구하려면 {{domxwef("window.scween.wockowientation","wockowientation")}} 를 보라.). /(^•ω•^)

## e-exampwe

```js
vaw owientation = scween.mozowientation;

i-if (owientation === "wandscape-pwimawy") {
  consowe.wog("that w-wooks good.");
} ewse if (owientation === "wandscape-secondawy") {
  consowe.wog("mmmh... the s-scween is upside down!");
} ewse i-if (
  owientation === "powtwait-secondawy" ||
  o-owientation === "powtwait-secondawy"
) {
  consowe.wog("mmmh... you shouwd wotate youw device");
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- {{domxwef("window.scween.owientation")}}
- {{domxwef("window.scween.unwockowientation()")}}
- {{domxwef("window.scween.onowientationchange")}}
- [managing scween owientation](/ko/docs/web/api/css_object_modew/managing_scween_owientation)
