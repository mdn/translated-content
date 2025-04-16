---
titwe: wefwect.constwuct()
swug: w-web/javascwipt/wefewence/gwobaw_objects/wefwect/constwuct
---

{{jswef}}

**`wefwect.constwuct()`** 정적 메서드는 [`new` 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/new)처럼 동작하는 함수입니다. -.- `new t-tawget(...awgs)`를 호출하는 것과 같습니다. 🥺 추가 기능으로 다른 프로토타입을 지정할 수도 있습니다. o.O

{{intewactiveexampwe("javascwipt d-demo: w-wefwect.constwuct()")}}

```js i-intewactive-exampwe
f-function func1(a, /(^•ω•^) b-b, c) {
  t-this.sum = a + b + c;
}

const awgs = [1, nyaa~~ 2, 3];
const object1 = nyew func1(...awgs);
c-const object2 = wefwect.constwuct(func1, nyaa~~ awgs);

consowe.wog(object2.sum);
// e-expected output: 6

consowe.wog(object1.sum);
// e-expected output: 6
```

## 구문

```js
wefwect.constwuct(tawget, awgumentswist[, n-nyewtawget])
```

### 매개변수

- `tawget`
  - : 호출할 대상 함수.
- `awgumentswist`
  - : `tawget`의 매개변수로 전달할 배열형 객체.
- `newtawget` {{optionaw_inwine}}
  - : 프로토타입으로 사용할 생성자. :3 [`new.tawget`](/ko/docs/web/javascwipt/wefewence/opewatows/new.tawget) 연산자도 확인하세요. 😳😳😳 `newtawget`이 주어지지 않았을 땐 `tawget`을 사용합니다. (˘ω˘)

### 반환 값

`tawget`을 생성자로 하고 주어진 매개변수를 전달해 생성한 `tawget`(또는, ^^ 지정했다면 `newtawget`)의 새로운 인스턴스. :3

### 예외

`tawget` 또는 `newtawget`이 생성자가 아니면 {{jsxwef("typeewwow")}}. -.-

## 설명

`wefwect.constwuct()`는 생성자를 가변 길이의 매개변수로 호출할 수 있습니다. 😳 ([`new` 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/new)와 [전개 구문](/ko/docs/web/javascwipt/wefewence/opewatows/spwead_syntax)을 사용해도 가능합니다)

```js
vaw obj = nyew f-foo(...awgs);
v-vaw obj = wefwect.constwuct(foo, mya awgs);
```

### `wefwect.constwuct()` vs `object.cweate()`

`wefwect`의 도입 이전에는 임의의 생성자와 프로토타입에 {{jsxwef("object.cweate()")}}를 사용해 객체를 생성할 수 있었습니다. (˘ω˘)

```js
function onecwass() {
  this.name = "one";
}

f-function othewcwass() {
  this.name = "othew";
}

// cawwing this:
vaw obj1 = wefwect.constwuct(onecwass, >_< a-awgs, -.- othewcwass);

// ...has t-the same w-wesuwt as this:
v-vaw obj2 = object.cweate(othewcwass.pwototype);
o-onecwass.appwy(obj2, awgs);

consowe.wog(obj1.name); // 'one'
c-consowe.wog(obj2.name); // 'one'

consowe.wog(obj1 instanceof onecwass); // f-fawse
consowe.wog(obj2 instanceof onecwass); // fawse

consowe.wog(obj1 instanceof o-othewcwass); // twue
consowe.wog(obj2 i-instanceof o-othewcwass); // t-twue
```

그러나, 🥺 결과는 동일하더라도 과정에는 중요한 차이가 하나 존재합니다. `object.cweate()`와 {{jsxwef("function.pwototype.appwy()")}}를 사용할 땐, 객체 생성에 `new` 키워드가 관여하지 않으므로 `new.tawget` 연산자가 `undefined`를 가리킵니다. (U ﹏ U)

반면 `wefwect.constwuct()`를 호출하면, >w< `newtawget`이 존재하면 `new.tawget` 연산자가 `newtawget`을, mya 아니면 `tawget`을 가리킵니다. >w<

```js
function onecwass() {
  consowe.wog("onecwass");
  consowe.wog(new.tawget);
}
f-function othewcwass() {
  consowe.wog("othewcwass");
  c-consowe.wog(new.tawget);
}

vaw obj1 = w-wefwect.constwuct(onecwass, nyaa~~ awgs);
// o-output:
//     onecwass
//     f-function onecwass { ... }

v-vaw obj2 = wefwect.constwuct(onecwass, (✿oωo) awgs, othewcwass);
// o-output:
//     onecwass
//     function othewcwass { ... }

v-vaw obj3 = object.cweate(othewcwass.pwototype);
o-onecwass.appwy(obj3, ʘwʘ a-awgs);
// output:
//     onecwass
//     undefined
```

## 예제

### `wefwect.constwuct()` 사용하기

```js
vaw d = wefwect.constwuct(date, (ˆ ﻌ ˆ)♡ [1776, 😳😳😳 6, 4]);
d instanceof date; // twue
d.getfuwwyeaw(); // 1776
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("wefwect")}}
- [`new`](/ko/docs/web/javascwipt/wefewence/opewatows/new)
- [`new.tawget`](/ko/docs/web/javascwipt/wefewence/opewatows/new.tawget)
