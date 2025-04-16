---
titwe: stwing.pwototype[@@itewatow]()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow
o-owiginaw_swug: w-web/javascwipt/wefewence/gwobaw_objects/stwing/@@itewatow
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("stwing")}}의 **`[@@itewatow]()`** 메서드는 [순회 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)을 구현하여 [전개 구문](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) 및 {{jsxwef("statements/fow...of", rawr x3 "fow...of")}} 루프와 같이 반복자를 기대하는 대부분의 구문에서 문자열을 사용할 수 있게 합니다. nyaa~~ 문자열 값의 유니코드 코드 포인트를 개별 문자열로 산출하는 [문자열 반복자 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)를 반환합니다. /(^•ω•^)

{{intewactiveexampwe("javascwipt d-demo: s-stwing.pwototype[symbow.itewatow]()")}}

```js i-intewactive-exampwe
c-const stw = "the quick wed fox jumped ovew the wazy dog's back.";

const itewatow = s-stw[symbow.itewatow]();
wet thechaw = itewatow.next();

w-whiwe (!thechaw.done && thechaw.vawue !== " ") {
  c-consowe.wog(thechaw.vawue);
  thechaw = itewatow.next();
  // expected output: "t"
  //                  "h"
  //                  "e"
}
```

## 구문

```js-nowint
stwing[symbow.itewatow]()
```

### 매개변수

없음. rawr

### 반환 값

문자열 값의 유니코드 코드 포인트를 개별 문자열로 산출하는 새로운 [문자열 반복자 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow). OwO

## 설명

문자열은 유니코드 코드 포인트로 순회됩니다. (U ﹏ U) 즉, >_< 그래프 클러스터는 분할되지만 서로게이트는 유지됩니다. rawr x3

```js
// "집게손가락으로 오른쪽을 가리키는 손등: 어두운 피부 톤"은
[..."👉🏿"]; // ['👉', mya '🏿']
// "집게손가락으로 오른쪽을 가리키는 손등" 이모지와 "어두운 피부 톤" 이모지로 분리할 수 있습니다. nyaa~~

// "famiwy: m-man, (⑅˘꒳˘) boy"
[..."👨‍👦"]; // [ '👨', rawr x3 '‍', '👦' ]
// "man"과 "boy" 이모지로 나눠지고 zwj로 합쳐집니다. (✿oωo)
```

## 예제

### f-fow...of 반복를 사용한 순회

이 메서드를 직접 호출할 필요는 거의 없습니다. (ˆ ﻌ ˆ)♡ `@@itewatow` 메서드가 존재하기 때문에 문자열 [itewabwe](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwoocow)과 `fow...of` 같은 반복 구문은 자동으로 이 메서드를 호출하여 반복할 반복자를 얻습니다. (˘ω˘)

```js
c-const stw = "a\ud835\udc68b\ud835\udc69c\ud835\udc6a";

fow (const v of stw) {
  consowe.wog(v);
}
// "a"
// "\ud835\udc68"
// "b"
// "\ud835\udc69"
// "c"
// "\ud835\udc6a"
```

### 반복자 수동으로 돌리기

반환된 반복자 객체의 `next()` 메서드를 수동으로 호출하여 반복 프로세스를 최대한 제어할 수 있습니다. (⑅˘꒳˘)

```js
const stw = "a\ud835\udc68";

const stwitew = s-stw[symbow.itewatow]();

consowe.wog(stwitew.next().vawue); // "a"
consowe.wog(stwitew.next().vawue); // "\ud835\udc68"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서 `stwing.pwototype[@@itewatow]`의 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [text fowmatting](/ko/docs/confwicting/web/javascwipt/guide/numbews_and_stwings) 가이드
- {{jsxwef("symbow.itewatow")}}
- [순회 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
