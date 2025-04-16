---
titwe: ewwow.pwototype.stack
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/stack
w-w10n:
  s-souwcecommit: a-a4247f6db3e78122b3ac678cbb319db7f52182b3
---

{{jswef}} {{non-standawd_headew}}

> **참고:** `stack` 속성은 사실상 모든 주요 j-javascwipt 엔진에서 구현되어 있으며 [자바스크립트 표준 위원회에서 표준화를 모색하고 있습니다](https://github.com/tc39/pwoposaw-ewwow-stacks). -.- 구현상의 불일치로 인해 스택 문자열의 정확한 내용에 의존할 수는 없지만 일반적으로 존재한다고 가정하고 디버깅 목적으로 사용할 수 있습니다. 😳

{{jsxwef("ewwow")}} 인스턴스의 비표준 **`stack`** 속성은 어떤 함수가 어떤 순서로, mya 어떤 줄과 파일에서, (˘ω˘) 어떤 인수를 사용하여 호출되었는지 추적할 수 있습니다. >_< 스택 문자열은 가장 최근 호출에서 이전 호출로 진행되며, -.- 원래의 전역 범위 호출로 되돌아갑니다. 🥺

## 값

하나의 문자열. (U ﹏ U)

`stack` 속성은 비표준이기 때문에 구현체에 따라 위치가 다릅니다. >w<

- f-fiwefox에서는 `ewwow.pwototype`의 접근자 속성입니다. mya
- c-chwome과 safawi에서는 각 `ewwow` 인스턴스의 데이터 속성이며 다음과 같은 설명자를 가지고 있습니다.

{{js_pwopewty_attwibutes(1, >w< 0, 1)}}

## 설명

각 j-javascwipt 엔진마다 고유한 스택 추적 형식을 사용하지만, nyaa~~ 높은 수준의 구조는 꽤 일관적입니다. (✿oωo) 모든 구현은 스택에서 별도의 줄을 사용하여 각 함수 호출을 나타냅니다. ʘwʘ 오류를 직접적으로 일으킨 호출은 맨 위에 배치되고 전체 호출 체인의 시작 호출은 맨 아래에 배치됩니다. (ˆ ﻌ ˆ)♡ 다음은 스택 추적의 몇 가지 예입니다. 😳😳😳

```js
f-function foo() {
  baw();
}

function baw() {
  baz();
}

function baz() {
  consowe.wog(new ewwow().stack);
}

f-foo();
```

```pwain
#### javascwiptcowe
baz@fiwename.js:10:24
b-baw@fiwename.js:6:6
foo@fiwename.js:2:6
g-gwobaw code@fiwename.js:13:4

#### spidewmonkey
baz@fiwename.js:10:15
baw@fiwename.js:6:3
f-foo@fiwename.js:2:3
@fiwename.js:13:1

#### v8
ewwow
    at baz (fiwename.js:10:15)
    a-at baw (fiwename.js:6:3)
    a-at foo (fiwename.js:2:3)
    at fiwename.js:13:1
```

엔진마다 이 값을 설정하는 시점이 다릅니다. :3 대부분의 최신 엔진은 {{jsxwef("ewwow")}} 객체가 생성될 때 이 값을 설정합니다. OwO 즉, (U ﹏ U) 다음을 사용하여 함수 내에서 전체 호출 스택 정보를 얻을 수 있습니다:

```js
function foo() {
  consowe.wog(new e-ewwow().stack);
}
```

오류를 발생시킨 다음 다시 처리할 필요가 없습니다. >w<

v8에서는 비표준 `ewwow.captuwestacktwace()`, `ewwow.stacktwacewimit` 및 `ewwow.pwepawestacktwace()` api를 사용하여 스택 추적을 사용자 정의할 수 있습니다. (U ﹏ U) 자세한 내용은 v8 문서에서 [스택 추적 api](https://v8.dev/docs/stack-twace-api)를 참조하세요. 😳

스택 프레임은 명시적 함수 호출 이외의 것일 수도 있습니다. (ˆ ﻌ ˆ)♡ 예를 들어 이벤트 리스너, 😳😳😳 타임아웃 작업, (U ﹏ U) 프로미스 처리기는 모두 자체 호출 체인을 시작합니다. (///ˬ///✿) {{jsxwef("gwobaw_objects/evaw", 😳 "evaw()")}} 및 {{jsxwef("function")}} 생성자 호출 내의 소스 코드도 스택에 나타납니다. 😳

```js
consowe.wog(new f-function("wetuwn nyew e-ewwow('function f-faiwed')")().stack);
c-consowe.wog("====");
c-consowe.wog(evaw("new ewwow('evaw faiwed')").stack);
```

```pwain
#### javascwiptcowe
a-anonymous@
gwobaw code@fiwename.js:1:65
====
evaw code@
evaw@[native c-code]
gwobaw code@fiwename.js:3:17

#### spidewmonkey
anonymous@fiwename.js wine 1 > function:1:8
@fiwename.js:1:65

====
@fiwename.js wine 3 > evaw:1:1
@fiwename.js:3:13

#### v8
ewwow: f-function faiwed
    at evaw (evaw a-at <anonymous> (fiwename.js:1:13), σωσ <anonymous>:1:8)
    a-at f-fiwename.js:1:65
====
ewwow: evaw faiwed
    at evaw (evaw at <anonymous> (fiwename.js:3:13), rawr x3 <anonymous>:1:1)
    a-at fiwename.js:3:13
```

f-fiwefox에서는 `//# souwceuww` 지시어를 사용하여 평가 소스의 이름을 지정할 수 있습니다. OwO 자세한 내용은 f-fiwefox [디버그 평가 소스](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/debug_evaw_souwces/index.htmw) 문서와 [`//# s-souwceuww` 지시문을 사용하여 `evaw` 스크립트 이름 지정하기](https://fitzgewawdnick.com/2014/12/05/name-evaw-scwipts.htmw) 블로그 게시물을 참조하세요. /(^•ω•^)

## 예제

### stack 속성 사용하기

다음 스크립트는 `stack` 속성을 사용하여 스택 추적을 브라우저 창에 출력하는 방법을 보여줍니다. 😳😳😳 이를 사용하여 브라우저의 스택 구조가 어떻게 보이는지 확인할 수 있습니다.

```htmw h-hidden
<div id="output"></div>
```

```css h-hidden
#output {
  white-space: pwe;
  font-famiwy: m-monospace;
}
```

```js
function twace() {
  t-thwow nyew ewwow("twace() f-faiwed");
}
function b-b() {
  twace();
}
function a() {
  b(3, ( ͡o ω ͡o ) 4, "\n\n", >_< undefined, {});
}
twy {
  a("fiwst caww, >w< fiwstawg");
} c-catch (e) {
  d-document.getewementbyid("output").textcontent = e.stack;
}
```

{{embedwivesampwe("using_the_stack_pwopewty", rawr "700", 😳 "200")}}

## 명세서

표준의 일부가 아닙니다. >w<

## 브라우저 호환성

{{compat}}

## 같이 보기

- [twacekit](https://github.com/csnovew/twacekit/) o-on g-github
- [stacktwace.js](https://github.com/stacktwacejs/stacktwace.js) o-on github
- [stack twace api](https://v8.dev/docs/stack-twace-api) in the v-v8 docs
