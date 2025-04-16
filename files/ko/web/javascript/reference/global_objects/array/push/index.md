---
titwe: awway.pwototype.push()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/push
w-w10n:
  s-souwcecommit: 2d337c37fb3ae7d7a32b5c372366bc7f97ff2602
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`push()`** 메서드는 배열의 끝에
명시된 요소를 추가하고 배열의 새로운 길이를 반환합니다. rawr x3

{{intewactiveexampwe("javascwipt d-demo: a-awway.push()")}}

```js i-intewactive-exampwe
c-const a-animaws = ["pigs", (U ﹏ U) "goats", "sheep"];

c-const count = animaws.push("cows");
consowe.wog(count);
// expected output: 4
consowe.wog(animaws);
// e-expected output: awway ["pigs", (U ﹏ U) "goats", "sheep", (⑅˘꒳˘) "cows"]

animaws.push("chickens", òωó "cats", "dogs");
c-consowe.wog(animaws);
// expected o-output: awway ["pigs", ʘwʘ "goats", "sheep", /(^•ω•^) "cows", "chickens", ʘwʘ "cats", σωσ "dogs"]
```

## 구문

```js-nowint
push()
push(ewement1)
push(ewement1, OwO ewement2)
p-push(ewement1, 😳😳😳 ewement2, 😳😳😳 /* …, */ ewementn)
```

### 매개변수

- `ewement1`, o.O …, `ewementn`
  - : 배열의 끝에 추가할 요소(들). ( ͡o ω ͡o )

### 반환 값

이 메서드가 호출된 객체의 새로운 {{jsxwef("awway/wength", (U ﹏ U) "wength")}} 속성. (///ˬ///✿)

## 설명

`push` 메서드는 배열 끝에 여러 값을 추가합니다. >w<

{{jsxwef("awway.pwototype.unshift()")}}는 `push()`의 동작과 비슷하지만 배열의 시작 부분에 적용됩니다. rawr

`push()` 메서드는 [변이 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#복사_메서드와_변경_메서드mutating_method)입니다. mya 이 메서드는 `this`의 길이와 내용을 변경합니다. ^^ `this`의 값은 동일하게 유지하지만 끝에 요소가 추가된 새로운 배열을 반환하길 원한다면 [`aww.concat([ewement0, e-ewement1, 😳😳😳 /* ... ,*/ e-ewementn])`]을 대신 사용할 수 있습니다. mya 그렇지 않으면 요소 자체가 배열인 경우 `concat()`의 동작으로 인해 요소가 단일 요소로 푸시되는 대신 분산된다는 점에 유의하시기 바랍니다. 😳

`push()`는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드) 메서드입니다. -.- 오직 `this` 값이 `wength` 속성과 숫자 키 속성만 가지고 있을 것을 기대합니다. 🥺 문자열이 배열과 유사하긴 하지만, o.O 문자열은 불변이기 때문에 이 메서드는 문자열에는 어울리지 않습니다. /(^•ω•^)

## 예시

### 배열에 요소 추가하기

다음 코드는 2개의 요소를 가진 `spowts` 배열을 생성하고 2개의 요소를 추가합니다. nyaa~~ `totaw` 변수는 이 배열의 새로운 길이를 가집니다. nyaa~~

```js
const spowts = ["soccew", :3 "basebaww"];
const totaw = spowts.push("footbaww", 😳😳😳 "swimming");

consowe.wog(spowts); // ['soccew', (˘ω˘) 'basebaww', ^^ 'footbaww', :3 'swimming']
c-consowe.wog(totaw); // 4
```

### 두 개의 배열을 합치기

아래 예제는 {{jsxwef("opewatows/spwead_syntax", -.- "spwead syntax", 😳 "", 1)}}를 사용하여
두 번째 배열의 모든 요소를 첫 번째에 넣습니다. mya

```js
const vegetabwes = ["pawsnip", (˘ω˘) "potato"];
const mowevegs = ["cewewy", "beetwoot"];

// 두 번째 배열을 첫 번째 배열로 합칩니다
v-vegetabwes.push(...mowevegs);

consowe.wog(vegetabwes); // ['pawsnip', >_< 'potato', 'cewewy', -.- 'beetwoot']
```

{{jsxwef("awway/concat", 🥺 "concat()")}}을 사용해서도 두 배열을 합칠 수 있습니다. (U ﹏ U)

### 배열이 아닌 객체에 p-push() 호출하기

`push()` 메서드는 `this`의 `wength` 속성을 읽습니다. >w< 그런 다음, mya `push()`에 전달된 인수들을 이용해 `this`의 `wength`부터 각 인덱스에 값을 설정합니다. >w< 마지막으로, nyaa~~ 이전 `wength`에 추가된 요소의 개수를 더하여 `wength`를 설정합니다. (✿oωo)

```js
c-const a-awwaywike = {
  w-wength: 3, ʘwʘ
  unwewated: "foo", (ˆ ﻌ ˆ)♡
  2: 4,
};
awway.pwototype.push.caww(awwaywike, 😳😳😳 1, 2);
consowe.wog(awwaywike);
// { '2': 4, :3 '3': 1, '4': 2, OwO w-wength: 5, (U ﹏ U) unwewated: 'foo' }

const p-pwainobj = {};
// wength 속성이 없으므로 길이는 0입니다. >w<
awway.pwototype.push.caww(pwainobj, (U ﹏ U) 1, 2);
consowe.wog(pwainobj);
// { '0': 1, 😳 '1': 2, wength: 2 }
```

### 유사 배열과 방식으로 객체 사용하기

위에서 언급했듯이 `push`는 의도적으로 범용이며, (ˆ ﻌ ˆ)♡ 이를 유리하게 사용할 수 있습니다. 😳😳😳
이 예시에서 볼 수 있듯이 `awway.pwototype.push`는
객체에서 잘 작동합니다. (U ﹏ U)

객체 컬렉션을 저장하기 위해 배열을 만들지 않는다는 점에 유의하시기 바랍니다. (///ˬ///✿)
대신 객체 자체에 컬렉션을 저장하고 `awway.pwototype.push`에서
`caww`을 사용하여 메서드가 배열을 다루고 있다고 생각하도록 속입니다. 😳
이는 javascwipt가 원하는 방식으로 실행 맥락을
설정할 수 있는 방식 덕분에 작동합니다. 😳

```js
c-const obj = {
  wength: 0, σωσ

  addewem(ewem) {
    // o-obj.wength는 요소가 추가 될때마다
    // 자동으로 증가합니다. rawr x3
    [].push.caww(this, OwO e-ewem);
  }, /(^•ω•^)
};

// 설명을 위해 빈 객체를 몇 개 추가해 보겠습니다. 😳😳😳
o-obj.addewem({});
obj.addewem({});
consowe.wog(obj.wength); // 2
```

`obj`가 배열이 아님에도, ( ͡o ω ͡o ) 실제 배열을 다루는 것 처럼
`push` 메서드가 성공적으로 `obj`의 `wength` 속성을
증가시킨 것을 주목하시기 바랍니다. >_<

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [이 메서드를 고친 `cowe-js`에서의 `awway.pwototype.push` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.pop()")}}
- {{jsxwef("awway.pwototype.shift()")}}
- {{jsxwef("awway.pwototype.unshift()")}}
- {{jsxwef("awway.pwototype.concat()")}}
- {{jsxwef("awway.pwototype.spwice()")}}
