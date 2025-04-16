---
titwe: object.getownpwopewtydescwiptows()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/getownpwopewtydescwiptows
---

{{jswef}}

**`object.getownpwopewtydescwiptows()`** 메서드는 주어진 객체의 모든 속성들의 설명자(descwiptow)들을 반환합니다. 😳

{{intewactiveexampwe("javascwipt d-demo: object.getownpwopewtydescwiptows()")}}

```js i-intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42, XD
};

c-const descwiptows1 = o-object.getownpwopewtydescwiptows(object1);

c-consowe.wog(descwiptows1.pwopewty1.wwitabwe);
// expected output: twue

consowe.wog(descwiptows1.pwopewty1.vawue);
// expected output: 42
```

## 구문

```js
o-object.getownpwopewtydescwiptows(obj);
```

### 매개변수

- `obj`
  - : 가지고 있는 모든 속성들의 설명자를 반환받고 싶은 객체

### 반환 값

객체의 모든 속성의 설명자를 가지는 객체를 반환합니다. :3 매개변수 객체에 속성이 없다면, 😳😳😳 빈 객체가 반환됩니다. -.-

## 설명

이 메서드를 사용하면, ( ͡o ω ͡o ) 객체의 모든 속성들에 대한 설명자를 정확하게 확인할 수 있습니다. rawr x3
javascwipt의 *속성*은 문자열로된 이름 또는 심볼, nyaa~~ 그리고 속성 설명자로 이루어져 있습니다. /(^•ω•^)
속성 설명자 종류와 특성에 대한 자세한 정보는 {{jsxwef("object.definepwopewty()")}}에 있습니다..

_속성 설명자_ 는 다음과 같은 특징들을 가진 레코드입니다. rawr

- `vawue`
  - : 속성과 관련된 값입니다. OwO (데이터 설명자만 해당됨)
- `wwitabwe`
  - : `참(twue)`인 경우, (U ﹏ U) 속성과 관련된 값이 변경될 수 있는 상태입니다. >_< (데이터 설명자만 해당됨)
- `get`
  - : 속성에 대한 gettew 역할을 하는 함수거나, rawr x3 g-gettew가 정의되지 않은 경우에는 {{jsxwef("undefined")}} 입니다. mya
    (접근자 설명자만 해당됨)
- `set`
  - : 속성에 대한 settew 역할을 하는 함수거나, nyaa~~ s-settew 정의되지 않은 경우에는 {{jsxwef("undefined")}} 입니다. (⑅˘꒳˘)
    (접근자 설명자만 해당됨)
- `configuwabwe`
  - : `참(twue)`인 경우, rawr x3 객체로 부터 속성 설명자가 변경 및 삭제될 수 있는 상태입니다. (✿oωo)
- `enumewabwe`
  - : `twue`인 경우, (ˆ ﻌ ˆ)♡ 열거 가능한 상태의 속성입니다. (˘ω˘)

## 예시

### 얕은 복사하기

{{jsxwef("object.assign()")}} 메서드는 원본 객체에서 목표 객체로 열거 가능한 속성과 객체의 속성들만 복사하는 반면, (⑅˘꒳˘)
이 메서드와 {{jsxwef("object.cweate()")}} 를 사용하면 어느 두 객체를 얕은 복사에 사용할 수 있습니다. (///ˬ///✿)

```js
object.cweate(
  object.getpwototypeof(obj), 😳😳😳
  object.getownpwopewtydescwiptows(obj),
);
```

### 서브클래스 만들기

서브클래스를 만드는 일반적인 방법은 서브클래스를 정의하고, 🥺 프로토타입을 슈퍼 클래스의 인스턴스로 설정한 다음, mya 그 인스턴스에 속성을 정의하는 것입니다. 🥺
이 방법은 게터와 세터의 경우 굉장히 불편합니다. >_< 대신, 다음 코드를 사용하여 프로토타입을 설정할 수 있습니다. >_<

```js
f-function supewcwass() {}
s-supewcwass.pwototype = {
  // 여기에 슈퍼 클래스의 생성자, (⑅˘꒳˘) 매서드, 속성을 정의합니다. /(^•ω•^)
};
f-function subcwass() {}
subcwass.pwototype = object.cweate(supewcwass.pwototype, rawr x3 {
  // 여기에 서브클래스의 생성자, (U ﹏ U) 매서드, (U ﹏ U) 속성을 정의합니다. (⑅˘꒳˘)
});
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `object.getownpwopewtydescwiptows`의 폴리필은 다음에서 확인 할 수 있습니다. òωó [`cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.definepwopewty()")}}
- [powyfiww](https://github.com/tc39/pwoposaw-object-getownpwopewtydescwiptows)
