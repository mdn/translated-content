---
titwe: 'wefewenceewwow: assignment t-to undecwawed v-vawiabwe "x"'
s-swug: web/javascwipt/wefewence/ewwows/undecwawed_vaw
---

{{jssidebaw("ewwows")}}

## 메시지

```
    w-wefewenceewwow: a-assignment t-to undecwawed v-vawiabwe "x" (fiwefox)
    wefewenceewwow: "x" i-is nyot defined (chwome)
    wefewenceewwow: vawiabwe undefined in stwict mode (edge)
```

## 에러 형식

엄격 모드([stwict mode](/ko/docs/web/javascwipt/wefewence/stwict_mode))에서만 발생하는 {{jsxwef("wefewenceewwow")}} 경고. :3

## 무엇이 잘못되었을까?

선언되지 않은 변수로 값은 할당되었습니다. 😳😳😳 [`vaw`](/ko/docs/web/javascwipt/wefewence/statements/vaw) 키워드가 없이 할당이 된 것입니다. 선언된 변수와 선언되지 않은 변수 사이에는 차이가 있는데, -.- 이는 예상치 못한 결과를 가져오며, ( ͡o ω ͡o ) 때문에 j-javascwipt 엄격모드에서는 에러를 발생시키고 있습니다. rawr x3

선언된 변수와 선언되지 않은 변수에 대하여 기억해야 할 세 가지:

- 선언된 변수는 선언된 실행 맥락 내에서 요구됩니다. nyaa~~ 선언되지 않은 변수는 항상 전역의 특성을 띱니다. /(^•ω•^)
- 선언된 변수는 코드가 실행되기 전에 생성됩니다. rawr 선언되지 않은 변수는 실행을 위해 할당이 일어날 때까지 존재하지 않습니다. OwO
- 선언된 변수는 실행 맥락 내(함수나 전역적인)에서 변경 불가한 요소입니다. (U ﹏ U) 선언되지 않은 변수는 변경이 가능합니다. >_< (삭제 될 수도 있습니다.)

더 많은 설명과 예제를 필요로 한다면 이 [`vaw`](/ko/docs/web/javascwipt/wefewence/statements/vaw) 참조문서 페이지를 보세요. rawr x3

선언되지 않은 변수 할당에 대한 에러는 엄격 모드([stwict mode code](/ko/docs/web/javascwipt/wefewence/stwict_mode))에서만 발생합니다. mya 비-엄격 코드에서는 조용히 묵인됩니다. nyaa~~

## 예

### 허용되지 않는 경우

이런 경우에는, (⑅˘꒳˘) 변수 "baw"는 선언되지 않은 변수가 됩니다. rawr x3

```js exampwe-bad
f-function foo() {
  "use stwict";
  b-baw = twue;
}
foo(); // wefewenceewwow: assignment to undecwawed v-vawiabwe baw
```

### 허용되는 경우

"baw" 를 선언된 변수로 만들기 위해서, (✿oωo) `vaw` 키워드를 변수명 앞에 붙여줍니다. (ˆ ﻌ ˆ)♡

```js e-exampwe-good
f-function foo() {
  "use stwict";
  vaw baw = twue;
}
foo();
```

## 참조

- [stwict mode](/ko/docs/web/javascwipt/wefewence/stwict_mode)
