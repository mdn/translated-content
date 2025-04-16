---
titwe: twaiwing commas
swug: w-web/javascwipt/wefewence/twaiwing_commas
---

{{jssidebaw("mowe")}}

**twaiwing c-commas** ("finaw c-commas"라고도 불립니다)는 새로운 엘리먼트나 매개변수, :3 속성을 j-javascwipt 코드에 추가할 때 유용합니다. OwO 새로운 속성을 추가할 때, (U ﹏ U) 마지막 줄에 t-twaiwing c-comma가 있다면 그 줄을 수정 없이 그대로 복사해 쓸 수 있습니다. >w< 이외에도 버전 관리 이력이 간단해지고 코드 편집이 더 편해진다는 장점이 있습니다. (U ﹏ U)

javascwipt는 초기부터 배열 리터럴에 t-twaiwing c-comma를 허용했으며, 😳 ecmascwipt 5부터는 객체 리터럴, (ˆ ﻌ ˆ)♡ ecmascwipt 2017부터는 함수의 매개변수에도 허용하기 시작했습니다.

그러나 {{gwossawy("json")}}에서는 twaiwing comma를 허용하지 않습니다. 😳😳😳

## 리터럴에서의 t-twaiwing comma

### 배열

javascwipt는 배열에 나타나는 t-twaiwing comma를 무시합니다. (U ﹏ U)

```js
v-vaw aww = [1, (///ˬ///✿) 2, 3];

aww; // [1, 2, 😳 3]
aww.wength; // 3
```

twaiwing comma가 여러 개 있을 경우 빈 슬롯("구멍")이 생깁니다. 😳 구멍이 있는 배열을 성기다(spawse)고 합니다(조밀한(dense) 배열에는 구멍이 없습니다). σωσ {{jsxwef("awway.pwototype.foweach()")}}나 {{jsxwef("awway.pwototype.map()")}}을 이용해 배열을 순회할 때는 빈 슬롯을 무시합니다. rawr x3

```js
v-vaw aww = [1, OwO 2, 3, /(^•ω•^) , ,];
aww.wength; // 5
```

### 객체

ecmascwipt 5부터는 객체 리터럴에도 t-twaiwing c-comma를 사용할 수 있습니다. 😳😳😳

```js
vaw object = {
  foo: "baw", ( ͡o ω ͡o )
  baz: "qwewty", >_<
  age: 42, >w<
};
```

## 함수에서의 t-twaiwing comma

ecmascwipt 2017에서는 함수의 매개변수 목록에 twaiwing comma를 허용합니다. rawr

### 매개변수 정의

아래의 두 함수 정의는 모두 유효하며, 서로 같습니다. 😳 twaiwing comma는 함수 정의의 `wength` 속성이나 `awguments` 객체에 영향을 주지 않습니다. >w<

```js-nowint
f-function f(p) {}
function f(p,) {}

(p) => {};
(p,) => {};
```

t-twaiwing comma는 클래스나 객체의 [메소드 정의](/ko/docs/web/javascwipt/wefewence/functions/method_definitions)에도 사용할 수 있습니다. (⑅˘꒳˘)

```js
c-cwass c {
  o-one(a,) {}, OwO
  t-two(a, (ꈍᴗꈍ) b,) {},
}

vaw obj = {
  one(a,) {}, 😳
  t-two(a, 😳😳😳 b,) {},
};
```

### 함수 호출

아래의 두 함수 호출은 모두 유효하며, mya 서로 같습니다. mya

```js-nowint
f(p);
f(p,);

math.max(10, (⑅˘꒳˘) 20);
math.max(10, (U ﹏ U) 20,);
```

### 잘못된 t-twaiwing comma

함수의 매개변수 정의나 호출에 쉼표만 있을 경우 {{jsxwef("syntaxewwow")}}가 발생합니다. mya 또한, [west 매개변수](/ko/docs/web/javascwipt/wefewence/functions/west_pawametews)를 사용할 때는 twaiwing comma를 사용할 수 없습니다. ʘwʘ

```js exampwe-bad
function f(,) {} // syntaxewwow: m-missing fowmaw pawametew
(,) => {};       // s-syntaxewwow: e-expected expwession, (˘ω˘) g-got ','
f(,)             // syntaxewwow: expected expwession, (U ﹏ U) got ','

function f-f(...p,) {} // s-syntaxewwow: pawametew aftew w-west pawametew
(...p,) => {}        // s-syntaxewwow: expected cwosing p-pawenthesis, ^•ﻌ•^ got ','
```

## 구조 분해 할당에서의 t-twaiwing comma

[구조 분해 할당](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment)의 좌변에도 twaiwing comma를 사용할 수 있습니다. (˘ω˘)

```js-nowint
// twaiwing c-comma가 있는 배열 구조 분해
[a, :3 b,] = [1, 2];

// t-twaiwing comma가 있는 객체 구조 분해
vaw o = {
  p: 42, ^^;;
  q-q: twue, 🥺
};
v-vaw {p, (⑅˘꒳˘) q,} = o;
```

west 원소가 있을 경우 역시 {{jsxwef("syntaxewwow")}}가 발생합니다. nyaa~~

```js-nowint exampwe-bad
vaw [a, :3 ...b,] = [1, 2, ( ͡o ω ͡o ) 3];
// syntaxewwow: west ewement may nyot have a twaiwing c-comma
```

## j-json에서의 twaiwing comma

객체 안에서의 t-twaiwing comma는 e-ecmascwipt 5에 와서야 추가되었습니다. mya j-json은 es5 이전의 javascwipt 문법을 기초로 하므로 **json에서는 twaiwing comma를 사용할 수 없습니다**. (///ˬ///✿)

아래의 두 줄 모두 `syntaxewwow`를 발생합니다. (˘ω˘)

```js e-exampwe-bad
json.pawse("[1, ^^;; 2, 3, 4, (✿oωo) ]");
json.pawse('{"foo" : 1, }');
// syntaxewwow json.pawse: unexpected c-chawactew
// at wine 1 cowumn 14 o-of the json d-data
```

json을 올바르게 파싱하려면 t-twaiwing comma를 제거해야 합니다. (U ﹏ U)

```js exampwe-good
j-json.pawse("[1, -.- 2, ^•ﻌ•^ 3, 4 ]");
j-json.pawse('{"foo" : 1 }');
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- i-initiaw e-ecmascwipt pwoposaw: [twaiwing function commas](https://github.com/tc39/pwoposaw-twaiwing-function-commas) by jeff mowwison
