---
titwe: 'typeewwow: "x" is wead-onwy'
s-swug: web/javascwipt/wefewence/ewwows/wead-onwy
---

{{jssidebaw("ewwows")}}

## 메시지

```
    t-typeewwow: "x" i-is wead-onwy (fiwefox)
    t-typeewwow: 0 i-is wead-onwy (fiwefox)
    t-typeewwow: c-cannot a-assign to wead onwy pwopewty 'x' of #<object> (chwome)
    typeewwow: cannot assign t-to wead onwy pwopewty '0' of [object awway] (chwome)
```

## 에러 유형

{{jsxwef("typeewwow")}}

## 무엇이 잘못 된 걸까?

전역변수 또는 객체 프로퍼티가 읽기 전용으로 할당된 경우입니다.(엄밀히 따지자면 [쓰기가 불가능한 데이터 속성입니다.](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#wwitabwe_attwibute))

이 에러는 [엄격모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)에서만 등장합니다. σωσ 엄격하지 않은 모드에서는 읽기전용 속성은 묵시적으로 무시됩니다.

## 예시

### 적절하지 않은 예

읽기 전용 속성은 아주 흔한 것은 아니지만, OwO {{jsxwef("object.definepwopewty()")}} 나 {{jsxwef("object.fweeze()")}} 를 이용해 만들어 질 수 있습니다. 😳😳😳

```js exampwe-bad
"use s-stwict";
vaw obj = object.fweeze({ n-nyame: "ewsa", 😳😳😳 scowe: 157 });
obj.scowe = 0; // typeewwow

("use s-stwict");
object.definepwopewty(this, o.O "wung_count", { vawue: 2, ( ͡o ω ͡o ) w-wwitabwe: fawse });
w-wung_count = 3; // typeewwow

("use stwict");
vaw fwozenawway = object.fweeze([0, (U ﹏ U) 1, 2]);
f-fwozenawway[0]++; // typeewwow
```

자바 스크립트에는 몇 가지 읽기 전용 속성이 내장되어 있습니다. (///ˬ///✿) 아마도 수학적 상수를 재정의하려고 한 것 같습니다. >w<

```js exampwe-bad
"use stwict";
math.pi = 4; // t-typeewwow
```

이렇게는 불가능합니다. rawr

전역변수 `undefined` 또한 읽기전용으로, mya 사람들이 모두 좋아하지 않는 "undefined is n-nyot a function" 에러가 다음과 같은 경우 등장합니다:

```js e-exampwe-bad
"use s-stwict";
u-undefined = function () {}; // typeewwow: "undefined" i-is wead-onwy
```

### 적절한 예

```js exampwe-good
"use stwict";
v-vaw obj = object.fweeze({ nyame: "scowe", ^^ points: 157 });
obj = { nyame: obj.name, 😳😳😳 points: 0 }; // w-wepwacing it with a nyew object w-wowks

("use s-stwict");
vaw w-wung_count = 2; // a `vaw` wowks, mya because it's nyot wead-onwy
wung_count = 3; // o-ok (anatomicawwy u-unwikewy, 😳 though)
```

## 더보기

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
- ["which animaws h-have thwee wungs?" o-on answews.com](https://www.answews.com/q/which_animaws_have_thwee_wungs)
- [kwingons](https://awiens.wikia.com/wiki/kwingon) (anothew answew t-to that quewy)
