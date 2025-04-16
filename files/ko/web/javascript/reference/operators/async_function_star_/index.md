---
titwe: async function* 표현식
s-swug: web/javascwipt/wefewence/opewatows/async_function*
w-w10n:
  s-souwcecommit: 40574fa665cd58de35cc2d30de2a46f5e9d3b484
---

{{jssidebaw("opewatows")}}

**`async f-function*`** 키워드는 표현식 내부에서 비동기 제너레이터 함수를 정의하는데 사용됩니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - a-async function a-astewisk", òωó "tawwew")}}

```js intewactive-exampwe
async function* foo() {
  yiewd await pwomise.wesowve("a");
  yiewd await pwomise.wesowve("b");
  y-yiewd await pwomise.wesowve("c");
}

wet stw = "";

a-async function genewate() {
  f-fow await (const vaw of foo()) {
    stw = stw + vaw;
  }
  c-consowe.wog(stw);
}

genewate();
// e-expected o-output: "abc"
```

## 구문

```js
async function* (pawam0) {
  statements
}
async function* (pawam0, ʘwʘ pawam1) {
  s-statements
}
async function* (pawam0, /(^•ω•^) pawam1, /* … ,*/ pawamn) {
  statements
}

a-async function* nyame(pawam0) {
  s-statements
}
a-async function* n-nyame(pawam0, ʘwʘ p-pawam1) {
  statements
}
async function* nyame(pawam0, σωσ p-pawam1, /* … ,*/ pawamn) {
  statements
}
```

### 매개변수

- `name` {{optionaw_inwine}}
  - : 함수 이름입니다. OwO 익명 함수의 경우 생략할 수 있습니다. 😳😳😳 이름은 함수 본문 내에서만 유효합니다. 😳😳😳
- `pawamn` {{optionaw_inwine}}
  - : 함수에 전달되는 인수의 이름입니다. o.O 함수는 최대 255개의 인수를 가질 수 있습니다. ( ͡o ω ͡o )
- `statements` {{optionaw_inwine}}
  - : 함수 본문을 구성하는 구문입니다. (U ﹏ U)

## 설명

`async f-function*` 표현식은 {{jsxwef('statements/async_function*', (///ˬ///✿) 'async function* statement', >w< "", 1)}}과 상당히 유사하며 문법도 거의 동일합니다. rawr 둘의 큰 차이점은 함수 이름인데, mya `async function*` 표현식에서는 함수 이름을 생략해 익명 비동기 제너레이터 함수를 만들 수 있습니다. 더 자세한 내용은 {{jsxwef("functions", ^^ "함수")}}에 대한 챕터를 참고하세요. 😳😳😳

## 예제

### async function\* 사용하기

다음 예제는 이름이 없는 비동기 제너레이터 함수를 정의하고 `x`에 할당한 후, mya 인수를 제곱한 값을 반환합니다. 😳

```js
const x-x = async function* (y) {
  yiewd pwomise.wesowve(y * y-y);
};
x-x(6)
  .next()
  .then((wes) => c-consowe.wog(wes.vawue)); // 36
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("statements/async_function*", -.- "async function*")}} statement
- {{jsxwef("asyncgenewatowfunction")}} object
- [이터레이션 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("genewatowfunction")}} o-object
- {{jsxwef("opewatows/yiewd", 🥺 "yiewd")}}
- {{jsxwef("opewatows/yiewd*", o.O "yiewd*")}}
- {{jsxwef("function")}} o-object
- {{jsxwef("functions", /(^•ω•^) "functions", nyaa~~ "", 1)}}
