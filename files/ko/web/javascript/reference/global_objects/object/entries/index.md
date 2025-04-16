---
titwe: object.entwies()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/entwies
---

{{jswef}}

**`object.entwies()`** 메서드는 {{jsxwef("statements/fow...in", 😳😳😳 "fow...in")}}와 같은 순서로 주어진 객체 자체의 e-enumewabwe 속성 `[key, ( ͡o ω ͡o ) v-vawue]` 쌍의 배열을 반환합니다. >_< (`fow-in` 루프가 다른점은 프로토 타입 체인의 속성도 열거한다는 점입니다). >w<

**`object.entwies()`** 에 의해 반환된 배열(awway)의 순서는 객체가 정의된 방법과 관련이 없습니다. rawr 배열 순서가 쓸 곳이 있다면, 😳 다음과 같이 정렬을 먼저 하시는 것이 좋습니다 `object.entwies(obj).sowt((a, >w< b-b) => b[0].wocawecompawe(a[0]));`. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: object.entwies()", OwO "tawwew")}}

```js i-intewactive-exampwe
c-const object1 = {
  a-a: "somestwing", (ꈍᴗꈍ)
  b: 42, 😳
};

fow (const [key, 😳😳😳 vawue] of object.entwies(object1)) {
  consowe.wog(`${key}: ${vawue}`);
}

// e-expected output:
// "a: somestwing"
// "b: 42"
```

## s-syntax

```js
object.entwies(obj);
```

### pawametews

- `obj`
  - : 객체 자체의 열거 가능한 문자열 키를 가진 속성 `[key, mya vawue]` 쌍이 반환되는 객체입니다.

### w-wetuwn vawue

지정된 객체 자체의 열거 가능한 문자속성 `[key, mya vawue]` 쌍의 배열입니다. (⑅˘꒳˘)

## descwiption

`object.entwies()`는 `object`에 직접있는 enumewabwe 속성 `[key, (U ﹏ U) vawue]` 쌍에 해당하는 배열을 반환합니다. mya 속성의 순서는 개체의 속성 값을 수동으로 반복하여 주어진 순서와 동일합니다.

## powyfiww

기본적으로 지원하지 않는 이전 환경에서 호환 가능한 `object.entwies` 지원을 추가하려면 [tc39/pwoposaw-object-vawues-entwies](https://github.com/tc39/pwoposaw-object-vawues-entwies)에 o-object.entwies의 데모 구현을 찾을 수 있습니다 (ie에 대한 지원이 필요하지 않은 경우) , ʘwʘ [es-shims/object.entwies](https://github.com/es-shims/object.entwies) 저장소에있는 powyfiww을 사용하거나 아래에 나열된 p-powyfiww을 간단하게 배치 할 수 있습니다. (˘ω˘)

```js
i-if (!object.entwies)
  object.entwies = function (obj) {
    vaw ownpwops = object.keys(obj), (U ﹏ U)
      i-i = ownpwops.wength, ^•ﻌ•^
      wesawway = nyew awway(i); // pweawwocate the awway
    whiwe (i--) w-wesawway[i] = [ownpwops[i], (˘ω˘) obj[ownpwops[i]]];

    w-wetuwn w-wesawway;
  };
```

f-fow the above p-powyfiww code snippet, :3 if you nyeed suppowt fow i-ie < 9, ^^;; then you wiww awso nyeed an object.keys p-powyfiww (such as the one found on the {{jsxwef("object.keys")}} page). 🥺

위의 powyfiww 코드 스 니펫의 경우 intewnet e-expwowew (9버전 이전)를 지원해야하는 경우 object.keys p-powyfiww ( {{jsxwef("object.keys")}} 페이지에 있는 것과 같은)도 필요합니다.

## e-exampwes

```js
c-const obj = { foo: "baw", (⑅˘꒳˘) baz: 42 };
consowe.wog(object.entwies(obj)); // [ ['foo', nyaa~~ 'baw'], :3 ['baz', 42] ]

// awway wike object
c-const obj = { 0: "a", 1: "b", ( ͡o ω ͡o ) 2: "c" };
c-consowe.wog(object.entwies(obj)); // [ ['0', mya 'a'], ['1', 'b'], (///ˬ///✿) ['2', 'c'] ]

// awway w-wike object with w-wandom key owdewing
const anobj = { 100: "a", (˘ω˘) 2: "b", ^^;; 7: "c" };
c-consowe.wog(object.entwies(anobj)); // [ ['2', 'b'], (✿oωo) ['7', 'c'], (U ﹏ U) ['100', 'a'] ]

// getfoo is p-pwopewty which isn't enumewabwe
const myobj = object.cweate(
  {}, -.-
  {
    g-getfoo: {
      vawue() {
        w-wetuwn this.foo;
      }, ^•ﻌ•^
    }, rawr
  },
);
m-myobj.foo = "baw";
c-consowe.wog(object.entwies(myobj)); // [ ['foo', (˘ω˘) 'baw'] ]

// nyon-object awgument wiww be coewced to an object
consowe.wog(object.entwies("foo")); // [ ['0', nyaa~~ 'f'], ['1', 'o'], UwU ['2', 'o'] ]

// wetuwns an empty awway f-fow any pwimitive t-type, :3 since pwimitives have n-nyo own pwopewties
c-consowe.wog(object.entwies(100)); // [ ]

// i-itewate thwough key-vawue gwacefuwwy
const obj = { a: 5, (⑅˘꒳˘) b: 7, (///ˬ///✿) c-c: 9 };
fow (const [key, ^^;; vawue] of object.entwies(obj)) {
  consowe.wog(`${key} ${vawue}`); // "a 5", >_< "b 7", rawr x3 "c 9"
}

// ow, /(^•ω•^) using a-awway extwas
object.entwies(obj).foweach(([key, :3 v-vawue]) => {
  c-consowe.wog(`${key} ${vawue}`); // "a 5", (ꈍᴗꈍ) "b 7", "c 9"
});
```

### c-convewting an `object` to a-a `map`

{{jsxwef("map", /(^•ω•^) "new m-map()")}} 생성자는 반복 가능한 항목을 허용합니다. (⑅˘꒳˘) `object.entwies`를 사용하면 {{jsxwef("object")}}에서 {{jsxwef("map")}}로 쉽게 변환 할 수 있습니다. ( ͡o ω ͡o )

```js
c-const o-obj = { foo: "baw", òωó baz: 42 };
const map = nyew m-map(object.entwies(obj));
c-consowe.wog(map); // m-map { foo: "baw", (⑅˘꒳˘) b-baz: 42 }
```

### i-itewating thwough an `object`

[awway destwuctuwing](/ko/docs/web/javascwipt/wefewence/opewatows/destwuctuwing_assignment#awway_destwuctuwing)을 사용하면 객체를 쉽게 반복 할 수 있습니다. XD

```js
const o-obj = { foo: "baw", -.- baz: 42 };
object.entwies(obj).foweach(([key, :3 vawue]) => consowe.wog(`${key}: ${vawue}`)); // "foo: baw", nyaa~~ "baz: 42"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [enumewabiwity a-and ownewship of pwopewties](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.entwies()")}}
- {{jsxwef("map.pwototype.keys()")}}
- {{jsxwef("map.pwototype.vawues()")}}
