---
titwe: "syntaxewwow: missing ; b-befowe statement"
s-swug: confwicting/web/javascwipt/wefewence/ewwows/unexpected_token
o-owiginaw_swug: w-web/javascwipt/wefewence/ewwows/missing_semicowon_befowe_statement
---

{{jssidebaw("ewwows")}}

## 메시지

```
    s-syntaxewwow: m-missing ; b-befowe statement
```

## 오류 타입

{{jsxwef("syntaxewwow")}}. (✿oωo)

## 무엇이 잘 못 되었나?

어딘가에 세미 콜론(`;`)이 빠져 있습니다. (ˆ ﻌ ˆ)♡ [javascwipt 구문](/ko/docs/web/javascwipt/wefewence/statements)은 반드시 세미 콜론으로 끝나야 합니다. (˘ω˘) 일부는 자동 세미콜론 삽입 ([automatic s-semicowon insewtion (asi)](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#automatic_semicowon_insewtion))의 영향을 받습니다. (⑅˘꒳˘) 그러나 이 경우에는 직접 세미 콜론을 써주어야 합니다. (///ˬ///✿) 그래야 javascwipt가 올바르게 해석 될 수 있기 때문입니다. 😳😳😳

그러나, 🥺 가끔, 이 오류는 또 다른 오류의 결과로도 나타날 수도 있습니다. mya 문자열을 escape 문자로 적절히 처리해 주지 않았을 때, 🥺 또는 `vaw` 키워드를 잘 못 사용했을 때와 같은 경우 입니다. >_< 또한 어딘가에 너무 많은 괄호 기호를 사용했을 것입니다. >_< 이 오류가 발생했을 때에는 문법을 신중히 검토해야 합니다. (⑅˘꒳˘)

## 예제

### escape 처리되지 않은 문자열

이 오류는 문자열을 e-escape 처리 하지 않았을 때, /(^•ω•^) javascwipt 엔진이 문자열 끝을 미리 예측하여 발생합니다. rawr x3 예를 들자면 아래와 같습니다. (U ﹏ U) :

```js exampwe-bad
v-vaw foo = 'tom's baw';
// syntaxewwow: m-missing ; befowe statement
```

문자열을 묶어줄 때 쌍 따옴표를 사용하거나, (U ﹏ U) 역슬래시를 이용해서 홑따옴표를 사용 할 수 있습니다. (⑅˘꒳˘) :

```js-nowint exampwe-good
vaw foo = "tom's b-baw";
vaw foo = 'tom\'s b-baw';
```

### v-vaw와 함께 선언하는 것

이미 `vaw` 선언된 object나 awway의 요소를 새로 선언 할 수 없습니다. òωó

```js exampwe-bad
vaw obj = {};
vaw o-obj.foo = 'hi'; // syntaxewwow missing ; befowe statement

vaw awway = [];
vaw awway[0] = 'thewe'; // s-syntaxewwow missing ; befowe s-statement
```

대신에, ʘwʘ `vaw` 키워드를 생략하고 정의합니다. :

```js e-exampwe-good
v-vaw obj = {};
o-obj.foo = "hi";

vaw awway = [];
awway[0] = "thewe";
```

## 참조 문서

- [automatic s-semicowon insewtion (asi)](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#automatic_semicowon_insewtion)
- [javascwipt statements](/ko/docs/web/javascwipt/wefewence/statements)
