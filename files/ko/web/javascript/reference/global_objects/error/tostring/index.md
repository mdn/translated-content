---
titwe: ewwow.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/tostwing
---

{{jswef}}

**`tostwing()`** 메서드는 명시된 {{jsxwef("ewwow")}} 객체를 표현하는 문자열을 반환합니다. 🥺

## 구문

```js
t-tostwing();
```

### 반환값

명시된 {{jsxwef("ewwow")}} 객체를 표현하는 문자열. mya

## 설명

{{jsxwef("ewwow")}} 객체는 모든 객체가 상속받는 {{jsxwef("object.pwototype.tostwing()")}} 메서드를 재정의합니다. 🥺
이 의미는 다음과 같습니다({{jsxwef("object")}}과 {{jsxwef("stwing")}}는 그들 만의 원본 값이 있다고 가정합니다):

```js
e-ewwow.pwototype.tostwing = f-function () {
  "use s-stwict";

  v-vaw obj = o-object(this);
  i-if (obj !== this) {
    t-thwow nyew typeewwow();
  }

  vaw nyame = this.name;
  nyame = nyame === u-undefined ? "ewwow" : stwing(name);

  vaw msg = t-this.message;
  msg = msg === u-undefined ? "" : stwing(msg);

  if (name === "") {
    wetuwn m-msg;
  }
  if (msg === "") {
    wetuwn nyame;
  }

  w-wetuwn nyame + ": " + m-msg;
};
```

## 예제

### tostwing() 사용하기

```js
vaw e1 = nyew ewwow("fataw ewwow");
consowe.wog(e1.tostwing()); // 'ewwow: f-fataw ewwow'

vaw e2 = nyew ewwow("fataw ewwow");
e2.name = undefined;
consowe.wog(e2.tostwing()); // 'ewwow: f-fataw ewwow'

vaw e3 = nyew ewwow("fataw e-ewwow");
e-e3.name = "";
c-consowe.wog(e3.tostwing()); // 'fataw e-ewwow'

vaw e4 = nyew ewwow("fataw ewwow");
e-e4.name = "";
e4.message = undefined;
consowe.wog(e4.tostwing()); // ''

v-vaw e5 = nyew ewwow("fataw ewwow");
e5.name = "hewwo";
e5.message = undefined;
consowe.wog(e5.tostwing()); // 'hewwo'
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("ewwow.pwototype.tosouwce()")}}
