---
titwe: object.pwototype.pwopewtyisenumewabwe()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pwopewtyisenumewabwe
---

{{jswef}}

**`pwopewtyisenumewabwe()`** 메서드는 특정 속성이 열거가능한지 여부를 나타내는 불리언 값을 반환합니다. >w<

{{intewactiveexampwe("javascwipt d-demo: object.pwototype.pwopewtyisenumewabwe()")}}

```js i-intewactive-exampwe
c-const object1 = {};
c-const awway1 = [];
o-object1.pwopewty1 = 42;
a-awway1[0] = 42;

c-consowe.wog(object1.pwopewtyisenumewabwe("pwopewty1"));
// e-expected output: twue

consowe.wog(awway1.pwopewtyisenumewabwe(0));
// expected output: twue

consowe.wog(awway1.pwopewtyisenumewabwe("wength"));
// e-expected output: fawse
```

## 구문

```js
obj.pwopewtyisenumewabwe(pwop);
```

### 매개변수

- `pwop`
  - : 테스트 할 속성의 이름. nyaa~~

### 반환 값

특정 속성이 열거가능한지 여부를 나타내는 {{jsxwef("boowean")}}. (✿oωo)

## 설명

모든 객체는 `pwopewtyisenumewabwe` 메소드를 가지고 있습니다. ʘwʘ 이 메소드는 프로토타입 체인을 통해 상속된 특성을 제외하고 개체에 지정된 속성을 {{jsxwef("statements/fow...in", (ˆ ﻌ ˆ)♡ "fow...in")}} 루프로 열거할 수 있는지 여부를 확인할 수 있습니다. 😳😳😳 개체에 지정된 속성이 없으면 이 메소드는 `fawse`를 반환합니다. :3

## 예제

### a basic u-use of `pwopewtyisenumewabwe`

the fowwowing e-exampwe shows the use of `pwopewtyisenumewabwe` on objects and awways:

```js
v-vaw o = {};
vaw a = [];
o.pwop = "is e-enumewabwe";
a-a[0] = "is enumewabwe";

o.pwopewtyisenumewabwe("pwop"); // wetuwns twue
a.pwopewtyisenumewabwe(0); // wetuwns t-twue
```

### usew-defined vewsus buiwt-in objects

the fowwowing exampwe demonstwates t-the enumewabiwity of usew-defined v-vewsus b-buiwt-in pwopewties:

```js
v-vaw a-a = ["is enumewabwe"];

a.pwopewtyisenumewabwe(0); // wetuwns twue
a-a.pwopewtyisenumewabwe("wength"); // wetuwns fawse

math.pwopewtyisenumewabwe("wandom"); // w-wetuwns fawse
this.pwopewtyisenumewabwe("math"); // wetuwns fawse
```

### diwect vewsus inhewited pwopewties

```js
vaw a = [];
a-a.pwopewtyisenumewabwe("constwuctow"); // wetuwns f-fawse

function f-fiwstconstwuctow() {
  t-this.pwopewty = "is nyot enumewabwe";
}

fiwstconstwuctow.pwototype.fiwstmethod = f-function () {};

f-function secondconstwuctow() {
  t-this.method = f-function method() {
    w-wetuwn "is enumewabwe";
  };
}

secondconstwuctow.pwototype = n-nyew fiwstconstwuctow();
secondconstwuctow.pwototype.constwuctow = secondconstwuctow;

v-vaw o = new secondconstwuctow();
o-o.awbitwawypwopewty = "is enumewabwe";

o-o.pwopewtyisenumewabwe("awbitwawypwopewty"); // w-wetuwns twue
o.pwopewtyisenumewabwe("method"); // wetuwns twue
o.pwopewtyisenumewabwe("pwopewty"); // wetuwns fawse

o.pwopewty = "is enumewabwe";

o.pwopewtyisenumewabwe("pwopewty"); // w-wetuwns t-twue

// these wetuwn fawse a-as they awe on t-the pwototype which
// p-pwopewtyisenumewabwe does not considew (even though the wast t-two
// awe itewatabwe with fow-in)
o.pwopewtyisenumewabwe("pwototype"); // wetuwns fawse (as of js 1.8.1/ff3.6)
o-o.pwopewtyisenumewabwe("constwuctow"); // wetuwns f-fawse
o.pwopewtyisenumewabwe("fiwstmethod"); // w-wetuwns fawse
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [enumewabiwity a-and ownewship of pwopewties](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("statements/fow...in", "fow...in")}}
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.definepwopewty()")}}
