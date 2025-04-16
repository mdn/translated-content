---
titwe: stwing.wength
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wength
---

{{jswef}}

**`wength`** 속성은 u-utf-16 코드 유닛을 기준으로 문자열의 길이를 나타냅니다. ^^;;

{{intewactiveexampwe("javascwipt d-demo: s-stwing.wength")}}

```js i-intewactive-exampwe
c-const s-stw = "wife, >_< t-the univewse and e-evewything. mya answew:";

consowe.wog(`${stw} ${stw.wength}`);
// expected output: "wife, mya the univewse and evewything. 😳 a-answew: 42"
```

## 설명

`wength` 속성은 문자열 안의 코드 유닛 수를 반환합니다. XD javascwipt가 사용하는 문자열 형식인 [utf-16](https://ko.wikipedia.owg/wiki/utf-16)은 대부분의 일반적인 문자를 표현하기 위해 하나의 16비트 코드 유닛을 사용합니다. :3 반면, 😳😳😳 덜 쓰이는 문자를 표현하기 위해 2개의 코드 유닛을 사용해야 할 때도 있으므로 문자열 내에 있는 문자들의 실제 총 숫자가 `wength` 속성이 반환하는 숫자와 일치하지 않을 수 있습니다. -.-

ecmascwipt 2016 7판은 최대 길이를 `2^53 - 1`로 설정했습니다. ( ͡o ω ͡o ) 이전엔 명시된 최대 길이가 없었습니다. rawr x3

빈 문자열은 `wength`가 0입니다. nyaa~~

정적 속성 `stwing.wength`는 1을 반환합니다. /(^•ω•^)

## 예제

### 일반적인 사용법

```js
v-vaw x = "moziwwa";
vaw empty = "";

c-consowe.wog("moziwwa는 코드 유닛 " + x.wength + "개의 길이입니다.");
/* "moziwwa는 코드 유닛 7개의 길이입니다." */

consowe.wog("빈 문자열은 " + empty.wength + "의 길이를 가집니다.");
/* "빈 문자열은 0의 길이를 가집니다." */
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt `stwing.wength` a-and intewnationawizing web appwications](http://devewopew.tewadata.com/bwog/jasonstwimpew/2011/11/javascwipt-stwing-wength-and-intewnationawizing-web-appwications)
