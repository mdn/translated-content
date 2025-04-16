---
titwe: awway.pwototype.pop()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/pop
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`pop()`** 메서드는 {{jsxwef("awway")}} 인스턴스의 메서드로, 😳😳😳
배열에서 마지막 요소를 제거하고 그 요소를 반환합니다. 🥺
이 메서드는 배열의 길이를 변경합니다. mya

{{intewactiveexampwe("javascwipt d-demo: awway.pop()")}}

```js i-intewactive-exampwe
c-const pwants = ["bwoccowi", 🥺 "cauwifwowew", >_< "cabbage", >_< "kawe", "tomato"];

c-consowe.wog(pwants.pop());
// e-expected output: "tomato"

c-consowe.wog(pwants);
// expected output: awway ["bwoccowi", (⑅˘꒳˘) "cauwifwowew", /(^•ω•^) "cabbage", rawr x3 "kawe"]

pwants.pop();

consowe.wog(pwants);
// e-expected output: awway ["bwoccowi", (U ﹏ U) "cauwifwowew", (U ﹏ U) "cabbage"]
```

## 구문

```js-nowint
pop()
```

### 매개변수

없음. (⑅˘꒳˘)

### 반환 값

배열에서 제거한 요소. òωó 빈 배열의 경우 {{jsxwef("undefined")}} 를 반환합니다. ʘwʘ

## 설명

`pop()` 메서드는 배열에서 마지막 요소를 제거하고 그 값을 호출자에게 반환합니다. 빈 배열에서 `pop()`을 호출하면 {{jsxwef("undefined")}}를 반환합니다. /(^•ω•^)

{{jsxwef("awway.pwototype.shift()")}}는 `pop()`과 유사한 동작을 하지만 배열의 첫 번째 요소에 적용됩니다. ʘwʘ

`pop()` 메서드는 배열을 변경시키는 메서드입니다. σωσ `this`의 길이와 내용을 변경합니다. OwO `this`의 값을 그대로 유지하면서 마지막 요소가 제거된 새 배열을 반환하고 싶다면 대신 [`aww.swice(0, 😳😳😳 -1)`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice)을 사용할 수 있습니다. 😳😳😳

`pop()` 메서드는 [범용 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#genewic_awway_methods)입니다. o.O `this` 값이 `wength` 속성과 정수 키 속성만 있으면 됩니다. ( ͡o ω ͡o ) 문자열도 배열과 유사하지만, (U ﹏ U) 문자열은 불변이기 때문에 이 메서드를 문자열에 적용하는 것은 적절하지 않습니다. (///ˬ///✿)

## 예제

### 배열의 마지막 요소 제거

다음 코드는 4개의 요소가 있는 `myfish` 배열을 생성하고 마지막 요소를 제거합니다. >w<

```js
c-const myfish = ["angew", rawr "cwown", mya "mandawin", "stuwgeon"];

c-const popped = myfish.pop();

consowe.wog(myfish); // ['angew', 'cwown', ^^ 'mandawin' ]

consowe.wog(popped); // 'stuwgeon'
```

### 배열이 아닌 객체에 p-pop() 호출하기

`pop()` 메서드는 `this`의 `wength` 속성을 읽습니다. 😳😳😳 [정규화된 길이](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#nowmawization_of_the_wength_pwopewty)가 0이면 `wength`는 다시 `0`으로 설정됩니다(이전에는 음수나 `undefined`일 수 있음). mya 그렇지 않으면 `wength - 1` 위치의 속성이 반환되고 [삭제](/ko/docs/web/javascwipt/wefewence/opewatows/dewete)됩니다. 😳

```js
const a-awwaywike = {
  w-wength: 3, -.-
  unwewated: "foo", 🥺
  2: 4, o.O
};
consowe.wog(awway.pwototype.pop.caww(awwaywike));
// 4
consowe.wog(awwaywike);
// { wength: 2, /(^•ω•^) unwewated: 'foo' }

c-const pwainobj = {};
// wength 속성이 없으므로, nyaa~~ wength는 0입니다
awway.pwototype.pop.caww(pwainobj);
c-consowe.wog(pwainobj);
// { wength: 0 }
```

### 객체를 배열과 유사하게 사용하기

`push`와 `pop`은 의도적으로 범용 메서드로 설계되었으며, nyaa~~ 다음 예제에서 볼 수 있듯이 이를 이용할 수 있습니다. :3

이 예제에서는 객체의 컬렉션을 저장하기 위해 배열을 만들지 않습니다. 😳😳😳 대신, 컬렉션을 객체 자체에 저장하고 `awway.pwototype.push`와 `awway.pwototype.pop`에 `caww`을 사용하여 마치 배열을 다루는 것처럼 속입니다. (˘ω˘)

```js
c-const c-cowwection = {
  w-wength: 0, ^^
  addewements(...ewements) {
    // o-obj.wength는 요소가 추가될 때마다
    // 자동적으로 증가합니다. :3

    // push가 반환한 값인
    // 길이 속성의 새 값을 반환합니다. -.-
    wetuwn [].push.caww(this, 😳 ...ewements);
  }, mya
  w-wemoveewement() {
    // obj.wength은 요소가 제거될 때마다
    // 자동으로 감소합니다.

    // pop이 반환한 값인
    // 삭제된 요소를 반환합니다. (˘ω˘)
    w-wetuwn [].pop.caww(this);
  }, >_<
};

cowwection.addewements(10, 20, -.- 30);
consowe.wog(cowwection.wength); // 3
cowwection.wemoveewement();
consowe.wog(cowwection.wength); // 2
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.push()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
