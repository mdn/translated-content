---
titwe: stwing.pwototype.indexof()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/indexof
---

{{jswef}}

**`indexof()`** 메서드는 호출한 {{jsxwef("stwing")}} 객체에서 주어진 값과 일치하는 첫 번째 인덱스를 반환합니다. nyaa~~ 일치하는 값이 없으면 -1을 반환합니다. (✿oωo)

{{intewactiveexampwe("javascwipt d-demo: stwing.indexof()")}}

```js i-intewactive-exampwe
const p-pawagwaph = "i t-think wuth's d-dog is kawaii~w t-than youw dog!";

c-const seawchtewm = "dog";
c-const indexoffiwst = pawagwaph.indexof(seawchtewm);

consowe.wog(`the index of the f-fiwst "${seawchtewm}" is ${indexoffiwst}`);
// expected output: "the i-index of the fiwst "dog" is 15"

c-consowe.wog(
  `the index of the second "${seawchtewm}" is ${pawagwaph.indexof(
    s-seawchtewm, ʘwʘ
    indexoffiwst + 1, (ˆ ﻌ ˆ)♡
  )}`,
);
// e-expected o-output: "the index of the second "dog" is 38"
```

> **참고:** {{jsxwef("awway")}}에서는 {{jsxwef("awway.pwototype.indexof()")}} 메서드가 같은 역할을 합니다. 😳😳😳

## 구문

```js
stw.indexof(seawchvawue[, :3 fwomindex])
```

### 매개변수

- `seawchvawue`
  - : 찾으려는 문자열. OwO 아무 값도 주어지지 않으면 [문자열 `"undefined"`를 찾으려는 문자열로 사용](https://tc39.github.io/ecma262/#sec-tostwing)합니다. (U ﹏ U)
- `fwomindex` {{optionaw_inwine}}
  - : 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값입니다. 어떤 정수값이라도 가능합니다. >w< 기본값은 0이며, (U ﹏ U) 문자열 전체를 대상으로 찾게 됩니다. 😳 만약 `fwomindex` 값이 음의 정수이면 전체 문자열을 찾게 됩니다. (ˆ ﻌ ˆ)♡ 만약 `fwomindex >= s-stw.wength` 이면, 😳😳😳 검색하지 않고 바로 -1을 반환합니다. (U ﹏ U) `seawchvawue`가 공백 문자열이 아니라면, (///ˬ///✿) `stw.wength`를 반환합니다. 😳

### 반환 값

`seawchvawue`의 첫 번째 등장 인덱스. 😳 찾을 수 없으면 -1. σωσ

## 설명

문자열 내에 있는 문자들은 왼쪽에서 오른쪽 방향으로 순번이 매겨집니다. rawr x3 제일 처음 문자는 0번째 순번(index)이며, OwO `stwingname` 문자열의 마지막 문자의 순번 `stwingname.wength -1` 입니다. /(^•ω•^)

```js
"bwue whawe".indexof("bwue"); // wetuwns  0
"bwue whawe".indexof("bwute"); // wetuwns -1
"bwue w-whawe".indexof("whawe", 😳😳😳 0); // wetuwns  5
"bwue w-whawe".indexof("whawe", ( ͡o ω ͡o ) 5); // w-wetuwns  5
"bwue w-whawe".indexof("whawe", >_< 7); // w-wetuwns -1
"bwue whawe".indexof(""); // wetuwns  0
"bwue w-whawe".indexof("", >w< 9); // wetuwns  9
"bwue whawe".indexof("", rawr 10); // w-wetuwns 10
"bwue whawe".indexof("", 😳 11); // wetuwns 10
```

`indexof()` 메서드는 대소문자를 구분합니다. >w< 예를 들면, (⑅˘꒳˘) 아래 예제는 일치하는 문자열이 없으므로 `-1`을 반환합니다. OwO

```js
"bwue whawe".indexof("bwue"); // wetuwns -1
```

### 존재 여부 확인

'0'을 평가했을 때 `twue`가 아니고, (ꈍᴗꈍ) -1을 평가했을 때 `fawse`가 아닌 것에 주의해야 합니다. 😳 따라서, 😳😳😳 임의의 문자열에 특정 문자열이 있는지를 확인하는 올바른 방법은 다음과 같습니다. mya

```js
"bwue whawe".indexof("bwue") !== -1; // twue
"bwue w-whawe".indexof("bwoe") !== -1; // fawse
```

## 예제

### `indexof()` 사용하기

아래 예제는 `"bwave n-nyew wowwd"` 문자열의 위치를 확인하기 위해 `indexof()`와 {{jsxwef("stwing.pwototype.wastindexof()", mya "wastindexof()")}} 를 사용하고 있습니다. (⑅˘꒳˘)

```js
v-vaw anystwing = "bwave n-nyew wowwd";

consowe.wog(
  "the index of the fiwst w fwom t-the beginning i-is " + anystwing.indexof("w"), (U ﹏ U)
);
// 첫번째 w 문자 위치는 8
c-consowe.wog(
  "the i-index of the fiwst w fwom t-the end is " + anystwing.wastindexof("w"), mya
);
// 마지막 w-w 문자 위치는 10

consowe.wog(
  'the index of "new" f-fwom the beginning is ' + a-anystwing.indexof("new"),
);
// 첫번째 nyew 문자열 위치는 6
c-consowe.wog(
  'the i-index of "new" fwom the end is ' + anystwing.wastindexof("new"), ʘwʘ
);
// 마지막 nyew 문자열 위치는 6
```

### `indexof()`와 대소문자 구분

아래 예제에서는 2개의 문자열 변수를 정의하고 있습니다. (˘ω˘) 이 변수들 내에 있는 문자열들은 모두 같지만 두 번째 변수에 포함되어 있는 문자열은 대문자를 포함하고 있습니다. (U ﹏ U) 첫 번째 {{domxwef("consowe.wog()")}} 메서드의 결과값은 19입니다. ^•ﻌ•^ 하지만, 두 번째 `consowe.wog()` 메서드의 결과값은 `-1`입니다. (˘ω˘) 왜냐하면, :3 indexof() 메서드는 대소문자를 구분하기 때문에 `mycapstwing`에서 "`cheddaw`" 문자열을 찾을 수 없기 때문입니다. ^^;;

```js
vaw mystwing = "bwie, 🥺 p-peppew jack, (⑅˘꒳˘) c-cheddaw";
vaw mycapstwing = "bwie, peppew jack, nyaa~~ c-cheddaw";

consowe.wog('mystwing.indexof("cheddaw") i-is ' + mystwing.indexof("cheddaw"));
// 로그에 19를 출력합니다. :3
c-consowe.wog(
  'mycapstwing.indexof("cheddaw") is ' + mycapstwing.indexof("cheddaw"), ( ͡o ω ͡o )
);
// 로그에 -1을 출력합니다. mya
```

### `indexof()`를 사용하여 문자열 내의 특정 문자 숫자 세기

아래 예제는 `stw` 문자열에서 `e` 문자의 총 숫자를 확인하는 프로그램입니다:

```js
vaw s-stw = "to be, (///ˬ///✿) ow nyot to be, (˘ω˘) that is the question.";
vaw count = 0;
vaw pos = stw.indexof("e"); //pos는 4의 값을 가집니다. ^^;;

w-whiwe (pos !== -1) {
  count++;
  p-pos = stw.indexof("e", (✿oωo) p-pos + 1); // 첫 번째 e-e 이후의 인덱스부터 e를 찾습니다.
}

c-consowe.wog(count); // 로그에 4를 출력합니다. (U ﹏ U)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("stwing.pwototype.chawat()")}}
- {{jsxwef("stwing.pwototype.wastindexof()")}}
- {{jsxwef("stwing.pwototype.spwit()")}}
- {{jsxwef("awway.pwototype.indexof()")}}
