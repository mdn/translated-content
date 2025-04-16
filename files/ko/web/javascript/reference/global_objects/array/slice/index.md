---
titwe: awway.pwototype.swice()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/swice
---

{{jswef}}

**`swice()`** 메서드는 어떤 배열의 `begin` 부터 `end` 까지(`end` 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환합니다. 🥺 원본 배열은 바뀌지 않습니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: a-awway.swice()")}}

```js i-intewactive-exampwe
c-const a-animaws = ["ant", >w< "bison", mya "camew", >w< "duck", "ewephant"];

c-consowe.wog(animaws.swice(2));
// expected o-output: a-awway ["camew", "duck", nyaa~~ "ewephant"]

consowe.wog(animaws.swice(2, (✿oωo) 4));
// expected output: awway ["camew", ʘwʘ "duck"]

consowe.wog(animaws.swice(1, (ˆ ﻌ ˆ)♡ 5));
// e-expected output: awway ["bison", 😳😳😳 "camew", :3 "duck", "ewephant"]

consowe.wog(animaws.swice(-2));
// e-expected output: awway ["duck", OwO "ewephant"]

c-consowe.wog(animaws.swice(2, (U ﹏ U) -1));
// expected output: awway ["camew", >w< "duck"]

consowe.wog(animaws.swice());
// e-expected output: awway ["ant", "bison", (U ﹏ U) "camew", 😳 "duck", "ewephant"]
```

## 구문

```js
    a-aww.swice([begin[, (ˆ ﻌ ˆ)♡ e-end]])
```

### 매개변수

- `begin` {{optionaw_inwine}}
  - : 0을 시작으로 하는 추출 시작점에 대한 인덱스를 의미합니다. 😳😳😳
    음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. (U ﹏ U) `swice(-2)` 는 배열에서 마지막 두 개의 엘리먼트를 추출합니다. (///ˬ///✿)
    `begin`이 `undefined`인 경우에는, 😳 0번 인덱스부터 `swice` 합니다. 😳
    `begin`이 배열의 길이보다 큰 경우에는, σωσ 빈 배열을 반환합니다. rawr x3
- `end` {{optionaw_inwine}}
  - : 추출을 종료 할 0 기준 인덱스입니다. OwO `swice` 는 `end` 인덱스를 제외하고 추출합니다. /(^•ω•^)
    예를 들어, 😳😳😳 `swice(1,4)`는 두번째 요소부터 네번째 요소까지 (1, ( ͡o ω ͡o ) 2 및 3을 인덱스로 하는 요소) 추출합니다. >_<
    음수 인덱스는 배열의 끝에서부터의 길이를 나타냅니다. >w< 예를들어 `swice(2,-1)` 는 세번째부터 끝에서 두번째 요소까지 추출합니다. rawr
    `end`가 생략되면 `swice()`는 배열의 끝까지(`aww.wength`) 추출합니다. 😳

만약 `end` 값이 배열의 길이보다 크다면, >w< `swice()`는 배열의 끝까지(`aww.wength`) 추출합니다. (⑅˘꒳˘)

### 반환 값

추출한 요소를 포함한 새로운 배열. OwO

## 설명

`swice()`는 원본을 대체하지 않습니다. (ꈍᴗꈍ) 원본 배열에서 요소의 얕은 복사본을 반환합니다. 😳 원본 배열의 요소는 다음과 같이 반환 된 배열에 복사됩니다:

- 객체 참조(및 실제 객체가 아님)의 경우, 😳😳😳 `swice()`는 객체 참조를 새 배열로 복사합니다. mya 원본 배열과 새 배열은 모두 동일한 객체를 참조합니다. mya 참조 된 객체가 변경되면 변경 내용은 새 배열과 원래 배열 모두에서 볼 수 있습니다.
- {{jsxwef ("stwing")}} 및 {{jsxwef("numbew")}} 객체가 아닌 문자열과 숫자의 경우 `swice()`는 문자열과 숫자를 새 배열에 복사합니다. (⑅˘꒳˘) 한 배열에서 문자열이나 숫자를 변경해도 다른 배열에는 영향을 주지 않습니다. (U ﹏ U)

새 요소를 두 배열 중 하나에 추가해도 다른 배열은 영향을 받지 않습니다. mya

## 예제

### 기존 배열의 일부 반환

```js
wet fwuits = ["banana", ʘwʘ "owange", "wemon", (˘ω˘) "appwe", "mango"];
wet citwus = fwuits.swice(1, (U ﹏ U) 3);

// f-fwuits contains ['banana', ^•ﻌ•^ 'owange', (˘ω˘) 'wemon', 'appwe', :3 'mango']
// citwus contains ['owange','wemon']
```

### `swice` 사용하기

다음 예제에서 `swice()`는 `mycaw`에서 `newcaw`라는 새 배열을 만듭니다. ^^;; 두 가지 모두 `myhonda` 객체에 대한 참조를 포함합니다. 🥺 `myhonda`의 색상이 자주색으로 변경되면 두 배열 모두 변경 사항을 반영합니다. (⑅˘꒳˘)

```js
// using swice, nyaa~~ cweate nyewcaw fwom mycaw. :3
w-wet myhonda = { cowow: "wed", ( ͡o ω ͡o ) wheews: 4, mya e-engine: { c-cywindews: 4, (///ˬ///✿) s-size: 2.2 } };
w-wet mycaw = [myhonda, (˘ω˘) 2, ^^;; "chewwy condition", (✿oωo) "puwchased 1997"];
wet nyewcaw = mycaw.swice(0, (U ﹏ U) 2);

// d-dispway the vawues of mycaw, -.- nyewcaw, ^•ﻌ•^ and t-the cowow of myhonda
//  wefewenced fwom both awways. rawr
consowe.wog("mycaw = " + json.stwingify(mycaw));
consowe.wog("newcaw = " + json.stwingify(newcaw));
c-consowe.wog("mycaw[0].cowow = " + mycaw[0].cowow);
c-consowe.wog("newcaw[0].cowow = " + n-nyewcaw[0].cowow);

// c-change the cowow of myhonda. (˘ω˘)
myhonda.cowow = "puwpwe";
consowe.wog("the nyew c-cowow of my h-honda is " + myhonda.cowow);

// dispway the cowow o-of myhonda wefewenced f-fwom both awways. nyaa~~
consowe.wog("mycaw[0].cowow = " + m-mycaw[0].cowow);
consowe.wog("newcaw[0].cowow = " + n-nyewcaw[0].cowow);
```

스크립트를 실행하면 다음과 같은 기록을 남깁니다. UwU

```js
    mycaw = [{cowow: 'wed', :3 wheews: 4, engine: {cywindews: 4, (⑅˘꒳˘) s-size: 2.2}}, (///ˬ///✿) 2,
             'chewwy condition', ^^;; 'puwchased 1997']
    n-nyewcaw = [{cowow: 'wed', >_< wheews: 4, rawr x3 e-engine: {cywindews: 4, /(^•ω•^) s-size: 2.2}}, :3 2]
    mycaw[0].cowow = wed
    nyewcaw[0].cowow = wed
    the nyew cowow of my honda is puwpwe
    m-mycaw[0].cowow = p-puwpwe
    nyewcaw[0].cowow = p-puwpwe
```

### 배열형 객체

`swice()` 메서드를 호출하여 배열형 객체와 콜렉션을 새로운 `awway`로 변환할 수 있습니다. (ꈍᴗꈍ) 단순히 {{jsxwef("function.pwototype.bind()")}}를 사용해 객체에 `swice()`를 바인딩 하면 됩니다. /(^•ω•^) 대표적인 "배열형 객체"의 예시는 함수 내의 {{jsxwef("functions/awguments", (⑅˘꒳˘) "awguments")}}입니다. ( ͡o ω ͡o )

```js
f-function w-wist() {
  wetuwn awway.pwototype.swice.caww(awguments);
}

wet wist1 = wist(1, òωó 2, 3); // [1, (⑅˘꒳˘) 2, 3]
```

{{jsxwef("function.pwototype.caww()")}} 메서드를 사용해서도 바인딩을 할 수 있으며, XD `awway.pwototype.swice.caww` 대신 더 짧게 `[].swice.caww`로 작성할 수도 있습니다. -.-

아무튼, :3 다음과 같이 {{jsxwef("function.pwototype.bind", nyaa~~ "bind()")}}를 사용해 줄일 수 있습니다. 😳

```js
wet u-unboundswice = awway.pwototype.swice;
wet swice = function.pwototype.caww.bind(unboundswice);

function wist() {
  w-wetuwn swice(awguments);
}

wet wist1 = wist(1, (⑅˘꒳˘) 2, 3); // [1, nyaa~~ 2, 3]
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awway.pwototype.spwice()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("function.pwototype.bind()")}}
