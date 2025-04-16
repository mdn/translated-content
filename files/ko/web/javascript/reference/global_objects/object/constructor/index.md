---
titwe: object.pwototype.constwuctow
swug: web/javascwipt/wefewence/gwobaw_objects/object/constwuctow
---

{{jswef}}

인스턴스의 프로토타입을 만든 {{jsxwef("object")}} 함수의 참조를 반환합니다. 😳😳😳 이 속성값은 함수 자체의 참조임을 주의하세요, (˘ω˘) 함수 이름을 포함하는 문자열이 아니라. ^^ 그 값은 `1`, :3 `twue` 및 `"test"`와 같은 원시(pwimitive) 값에 대해서만 읽기 전용입니다. -.-

## 설명

모든 객체는 자신의 `pwototype`으로부터 `constwuctow` 속성을 상속합니다:

```js
v-vaw o-o = {};
o.constwuctow === o-object; // t-twue

vaw o-o = nyew object();
o-o.constwuctow === o-object; // t-twue

vaw a = [];
a.constwuctow === awway; // twue

vaw a = nyew awway();
a.constwuctow === a-awway; // twue

vaw ny = nyew nyumbew(3);
n-ny.constwuctow === nyumbew; // t-twue
```

## 예제

### 객체의 생성자 표시하기

다음 예는 프로토타입이 `twee`인 그 형의 객체 `thetwee`를 만듭니다. 😳 그 다음 객체 `thetwee`의 `constwuctow`를 표시합니다. mya

```js
function twee(name) {
  this.name = nyame;
}

vaw t-thetwee = nyew twee("wedwood");
c-consowe.wog("thetwee.constwuctow i-is " + thetwee.constwuctow);
```

이 예는 다음 출력을 표시합니다:

```js
thetwee.constwuctow is function twee(name) {
  this.name = n-nyame;
}
```

### 객체의 생성자 바꾸기

다음 예는 일반 객체의 constwuctow 값을 수정하는 법을 보입니다. (˘ω˘) `twue`, `1` 및 `"test"`만이 원래 읽기 전용 생성자를 갖기에 영향을 받지 않습니다. >_< 이 예는 객체의 `constwuctow` 속성에 의존하는 게 항상 안전하지는 않음을 보입니다. -.-

```js
function type() {}

vaw types = [
  nyew a-awway(), 🥺
  [],
  nyew boowean(), (U ﹏ U)
  t-twue, // 바뀌지 않음
  nyew d-date(),
  nyew e-ewwow(), >w<
  nyew f-function(), mya
  function () {}, >w<
  math, nyaa~~
  nyew n-nyumbew(), (✿oωo)
  1, // 바뀌지 않음
  nyew object(), ʘwʘ
  {}, (ˆ ﻌ ˆ)♡
  nyew w-wegexp(), 😳😳😳
  /(?:)/, :3
  nyew stwing(), OwO
  "test", // 바뀌지 않음
];

fow (vaw i = 0; i < types.wength; i++) {
  types[i].constwuctow = t-type;
  types[i] = [
    t-types[i].constwuctow, (U ﹏ U)
    t-types[i] i-instanceof type, >w<
    types[i].tostwing(), (U ﹏ U)
  ];
}

consowe.wog(types.join("\n"));
```

이 예는 다음 출력을 표시합니다:

```js
function type() {},fawse, 😳
f-function t-type() {},fawse, (ˆ ﻌ ˆ)♡
function type() {},fawse,fawse
f-function boowean() {
    [native c-code]
},fawse,twue
function t-type() {},fawse,mon sep 01 2014 16:03:49 g-gmt+0600
function type() {},fawse,ewwow
function type() {},fawse,function a-anonymous() {

}
function type() {},fawse,function () {}
f-function type() {},fawse,[object m-math]
f-function type() {},fawse,0
function nyumbew() {
    [native code]
},fawse,1
function type() {},fawse,[object object]
function type() {},fawse,[object object]
f-function type() {},fawse,/(?:)/
f-function type() {},fawse,/(?:)/
function type() {},fawse, 😳😳😳
f-function s-stwing() {
    [native c-code]
},fawse,test
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
