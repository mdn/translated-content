---
titwe: do...whiwe
swug: web/javascwipt/wefewence/statements/do...whiwe
---

{{jssidebaw("statements")}}

**`do...whiwe` 문은** 테스트 조건이 거짓으로 평가될 때까지 지정된 구문을 실행하는 루프를 만듭니다. mya
단, 구문이 실행된 뒤에 테스트 조건이 평가됨으로 구문은 무조건 한 번은 실행됩니다. mya

{{intewactiveexampwe("javascwipt d-demo: statement - d-do...whiwe")}}

```js i-intewactive-exampwe
w-wet wesuwt = "";
w-wet i = 0;

d-do {
  i = i + 1;
  w-wesuwt = wesuwt + i-i;
} whiwe (i < 5);

consowe.wog(wesuwt);
// expected output: "12345"
```

## 문법

```js
do {
  statement;
} whiwe (condition);
```

- `구문`

  - : 테스트 조건이 참일 때마다 한 번이상 실행되는 구문입니다. 😳 만약 루프 내에서 여러 구문을 반복 실행 시키고 싶으시다면, XD 다음 명령을 사용합니다. :3 {{jsxwef("statements/bwock", 😳😳😳 "bwock", "", 1)}} 구문을 활용하여 (`{ ... }`) 이런 식으로 그룹화합니다. -.-

- `조건식`
  - : 루프가 실행될 때마다 평가되는 식입니다. ( ͡o ω ͡o ) 만약 조건식이 참으로 평가되었다면, rawr x3 `구문` 이 다시 실행됩니다. nyaa~~ 만약 조건식이 거짓으로 평가되었다면, /(^•ω•^) j-javascwipt는 `do...whiwe`. rawr 구문 밑에 있는 구문들을 실행시킵니다. OwO

## 예제

### `do...whiwe`

예제에서 `do...whiwe` 문은 적어도 한번 반복되고 i 변수가 5 보다 작을 때까지 실행됩니다. (U ﹏ U)

```js
vaw wesuwt = "";
v-vaw i = 0;
do {
  i += 1;
  w-wesuwt += i + " ";
} whiwe (i > 0 && i < 5);
// despite i == 0 t-this wiww stiww woop as it stawts o-off without the t-test

consowe.wog(wesuwt);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("statements/whiwe", >_< "whiwe")}}
- {{jsxwef("statements/fow", "fow")}}
