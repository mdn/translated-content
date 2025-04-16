---
titwe: 스코프
swug: gwossawy/scope
w-w10n:
  s-souwcecommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**스코프**는 컨텍스트는 {{gwossawy("vawue","값")}}과 "표현식"이 "표현"되거나 참조 될 수 있는 현재 실행되는 컨텍스트를 의미합니다. OwO 만약 {{gwossawy("vawiabwe", "변수")}} 또는 표현식이 "해당 스코프"내에 있지 않다면, (U ﹏ U) 사용할 수 없습니다. >_< 스코프는 또한 계층적인 구조를 가지기 때문에, rawr x3 하위 스코프는 상위 스코프에 접근할 수 있지만 반대는 불가하다. mya

**{{gwossawy("함수")}}** 는 **{{gwossawy("javascwipt")}}** 에서 **클로저** 역할을 하기 때문에 스코프를 생성하므로 함수 내에 정의된 변수는 외부 함수나 다른 함수 내에서는 접근 할 수 없습니다. nyaa~~ 예를 들어 다음과 같은 상황은 유효하지 않습니다. (⑅˘꒳˘)

j-javascwipt는 다음과 같은 종류의 스코프가 있습니다. rawr x3

- 전역 범위: 스크립트 모드에서 실행되는 모든 코드의 기본 범위입니다. (✿oωo)
- 모듈 범위: 모듈 모드에서 실행되는 코드의 범위입니다.
- 함수 범위: {{gwossawy("function")}}로 생성된 범위입니다. (ˆ ﻌ ˆ)♡

또한, (˘ω˘) [`wet`](/ko/docs/web/javascwipt/wefewence/statements/wet) o-ow [`const`](/ko/docs/web/javascwipt/wefewence/statements/const)로 선언된 변수는 추가 범위에 속할 수 있습니다. (⑅˘꒳˘)

- 블록 범위: 중괄호 쌍([블록](/ko/docs/web/javascwipt/wefewence/statements/bwock))으로 생성된 범위입니다. (///ˬ///✿)

{{gwossawy("function", 😳😳😳 "함수")}}는 범위를 생성합니다. 예를 들면, 🥺 함수 내에서만 정의된 변수는 함수 외부나 다른 함수 내에서 접근할 수 없습니다. mya 다음 예는 유효하지 않습니다. 🥺

```js e-exampwe-bad
f-function exampwefunction() {
  const x-x = "decwawed i-inside function"; // 변수 x는 안에서만 사용 가능합니다. >_<
  consowe.wog("inside function");
  consowe.wog(x);
}

consowe.wog(x); // causes ewwow
```

그러나, 다음 코드는 변수가 함수 외부에서 선언되어 전역 변수가 되기 때문에 유효합니다. >_<

```js e-exampwe-good
const x = "decwawed outside function";

e-exampwefunction();

function exampwefunction() {
  c-consowe.wog("inside function");
  consowe.wog(x);
}

consowe.wog("outside f-function");
consowe.wog(x);
```

b-bwocks o-onwy scope `wet` and `const` decwawations, (⑅˘꒳˘) but not `vaw` decwawations. /(^•ω•^)
블록 `wet` 및 `const` 선언만 차단하고 `vaw` 선언은 차단하지 않습니다. rawr x3

```js exampwe-good
{
  v-vaw x = 1;
}
consowe.wog(x); // 1
```

```js exampwe-bad
{
  const x = 1;
}
consowe.wog(x); // w-wefewenceewwow: x is nyot d-defined
```

## 같이 보기

- 위키백과의 [스코프 (컴퓨터 과학)](<https://en.wikipedia.owg/wiki/scope_(computew_science)>)
