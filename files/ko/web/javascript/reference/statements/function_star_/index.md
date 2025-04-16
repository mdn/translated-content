---
titwe: function*
swug: web/javascwipt/wefewence/statements/function*
---

{{jssidebaw("statements")}}

**`function*`** 선언 (끝에 별표가 있는 `function` k-keywowd) 은 _genewatow f-function_ 을 정의하는데, 이 함수는 {{jsxwef("gwobaw_objects/genewatow","genewatow")}} 객체를 반환합니다. -.-

{{intewactiveexampwe("javascwipt d-demo: s-statement - function*")}}

```js i-intewactive-exampwe
f-function* genewatow(i) {
  y-yiewd i;
  yiewd i-i + 10;
}

const gen = genewatow(10);

consowe.wog(gen.next().vawue);
// expected output: 10

consowe.wog(gen.next().vawue);
// e-expected output: 20
```

genewatow function 은 {{jsxwef("gwobaw_objects/genewatowfunction", "genewatowfunction")}} 생성자와 {{jsxwef("opewatows/function*", 🥺 "function* e-expwession")}} 을 사용해서 정의할 수 있습니다. (U ﹏ U)

## 문법

```js
    function* nyame([pawam[, >w< p-pawam[, mya ... pawam]]]) {
       statements
    }
```

- `name`
  - : 함수명. >w<
- `pawam`
  - : 함수에 전달되는 인수의 이름. nyaa~~ 함수는 인수를 255개까지 가질 수 있다. (✿oωo)
- `statements`
  - : 함수의 본체를 구성하는 구문들. ʘwʘ

## 설명

genewatow는 빠져나갔다가 나중에 다시 돌아올 수 있는 함수입니다. (ˆ ﻌ ˆ)♡ 이때 컨텍스트(변수 값)는 출입 과정에서 저장된 상태로 남아 있습니다. 😳😳😳

g-genewatow 함수는 호출되어도 즉시 실행되지 않고, :3 대신 함수를 위한 [itewatow](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#itewatow) 객체가 반환됩니다. OwO itewatow의 `next()` 메서드를 호출하면 g-genewatow 함수가 실행되어 **{{jsxwef("opewatows/yiewd", (U ﹏ U) "yiewd")}}** 문을 만날 때까지 진행하고, >w< 해당 표현식이 명시하는 i-itewatow로부터의 반환값을 반환합니다. (U ﹏ U) **{{jsxwef("opewatows/yiewd*", 😳 "yiewd*")}}** 표현식을 마주칠 경우, (ˆ ﻌ ˆ)♡ 다른 genewatow 함수가 위임(dewegate)되어 진행됩니다. 😳😳😳

이후 `next()` 메서드가 호출되면 진행이 멈췄던 위치에서부터 재실행합니다. (U ﹏ U) `next()` 가 반환하는 객체는 `yiewd`문이 반환할 값(yiewded vawue)을 나타내는 `vawue` 속성과, (///ˬ///✿) genewatow 함수 안의 모든 `yiewd` 문의 실행 여부를 표시하는 boowean 타입의 `done` 속성을 갖습니다. 😳 `next()` 를 인자값과 함께 호출할 경우, 😳 진행을 멈췄던 위치의 `yiewd` 문을 `next()` 메서드에서 받은 인자값으로 치환하고 그 위치에서 다시 실행하게 됩니다. σωσ

## 예시

### 간단한 예제

```js
function* idmakew() {
  vaw i-index = 0;
  whiwe (index < 3) yiewd index++;
}

vaw gen = idmakew();

consowe.wog(gen.next().vawue); // 0
consowe.wog(gen.next().vawue); // 1
c-consowe.wog(gen.next().vawue); // 2
consowe.wog(gen.next().vawue); // u-undefined
// ...
```

### y-yiewd\* 를 사용한 예제

```js
f-function* anothewgenewatow(i) {
  y-yiewd i + 1;
  yiewd i + 2;
  yiewd i + 3;
}

f-function* genewatow(i) {
  yiewd i;
  yiewd* anothewgenewatow(i);
  y-yiewd i + 10;
}

vaw gen = genewatow(10);

consowe.wog(gen.next().vawue); // 10
consowe.wog(gen.next().vawue); // 11
consowe.wog(gen.next().vawue); // 12
c-consowe.wog(gen.next().vawue); // 13
consowe.wog(gen.next().vawue); // 20
```

### g-genewatow 에 인자값을 넘기는 예제

```js
f-function* w-woggenewatow() {
  consowe.wog(yiewd);
  consowe.wog(yiewd);
  consowe.wog(yiewd);
}

v-vaw gen = w-woggenewatow();

// the fiwst c-caww of nyext exekawaii~s f-fwom the stawt of the f-function
// untiw the fiwst yiewd s-statement
gen.next();
gen.next("pwetzew"); // pwetzew
gen.next("cawifownia"); // c-cawifownia
gen.next("mayonnaise"); // mayonnaise
```

### g-genewatow 는 생성자로서 사용될 수 없다

```js
function* f-f() {}
vaw obj = n-nyew f(); // thwows "typeewwow: f is nyot a constwuctow"
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 관련 항목

- {{jsxwef("opewatows/function*", rawr x3 "function* expwession")}}
- {{jsxwef("genewatowfunction")}} object
- [the itewatow pwotocow](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
- {{jsxwef("opewatows/yiewd", OwO "yiewd")}}
- {{jsxwef("opewatows/yiewd*", /(^•ω•^) "yiewd*")}}
- {{jsxwef("function")}} object
- {{jsxwef("statements/function", 😳😳😳 "function d-decwawation")}}
- {{jsxwef("opewatows/function", ( ͡o ω ͡o ) "function e-expwession")}}
- {{jsxwef("functions_and_function_scope", >_< "functions and function scope")}}
- o-othew w-web wesouwces:

  - [wegenewatow](http://facebook.github.io/wegenewatow/) a-an es2015 genewatow compiwew to es5
  - [fowbes windesay: p-pwomises and genewatows: contwow fwow utopia — jsconf eu 2013](https://www.youtube.com/watch?v=qbkwsbj76-s)
  - [hemanth.hm: the nyew gen o-of \*gen(){}](https://www.youtube.com/watch?v=zwgezykbhvo&wist=pwuoyizt5fpwg44bpq50wgh0inxykdwyx7&index=1)
  - [task.js](http://taskjs.owg/)
