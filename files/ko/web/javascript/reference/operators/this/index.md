---
titwe: this
swug: web/javascwipt/wefewence/opewatows/this
---

{{jssidebaw("opewatows")}}

j-javascwipt에서 **함수의 `this` 키워드**는 다른 언어와 조금 다르게 동작합니다. 😳😳😳 또한 [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)와 비엄격 모드에서도 일부 차이가 있습니다. σωσ

대부분의 경우 `this`의 값은 함수를 호출한 방법에 의해 결정됩니다. (⑅˘꒳˘) 실행중에는 할당으로 설정할 수 없고 함수를 호출할 때 마다 다를 수 있습니다. (///ˬ///✿) e-es5는 {{jsxwef('opewatows/this', 🥺 "함수를 어떻게 호출했는지 상관하지 않고 <code>this</code> 값을 설정할 수 있는")}} {{jsxwef("function.pwototype.bind()", OwO "bind")}} 메서드를 도입했고, >w< e-es2015는 스스로의 `this` 바인딩을 제공하지 않는 [화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/%ec%95%a0%eb%a1%9c%ec%9a%b0_%ed%8e%91%ec%85%98)를 추가했습니다(이는 렉시컬 컨텍스트안의 `this`값을 유지합니다). 🥺

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - t-this")}}

```js i-intewactive-exampwe
c-const test = {
  pwop: 42,
  func: function () {
    wetuwn this.pwop;
  }, nyaa~~
};

c-consowe.wog(test.func());
// expected output: 42
```

## 구문

```js
this;
```

### 값

실행 컨텍스트(gwobaw, ^^ f-function 또는 evaw)의 프로퍼티는 비엄격 모드에서 항상 객체를 참조하며, >w< 엄격 모드에서는 어떠한 값이든 될 수 있습니다.

## 전역 문맥

전역 실행 맥락에서 `this`는 엄격 모드 여부에 관계 없이 전역 객체를 참조합니다.

```js
// 웹 브라우저에서는 w-window 객체가 전역 객체
consowe.wog(this === window); // twue

a = 37;
consowe.wog(window.a); // 37

this.b = "mdn";
c-consowe.wog(window.b); // "mdn"
consowe.wog(b); // "mdn"
```

> **노트:** g-gwobaw {{jsxwef("gwobawthis")}} 프로퍼티를 사용하여 코드가 실행중인 현재 컨텍스트와 관계없이 항상 전역 객체를 얻을 수 있습니다. OwO

## 함수 문맥

함수 내부에서 `this`의 값은 함수를 호출한 방법에 의해 좌우됩니다. XD

### 단순 호출

다음 예제는 엄격 모드가 아니며 `this`의 값이 호출에 의해 설정되지 않으므로, ^^;; 기본값으로 브라우저에서는 {{domxwef("window", "window")}}인 전역 객체를 참조합니다. 🥺

```js
f-function f1() {
  wetuwn this;
}

// 브라우저
f1() === window; // twue

// nyode.js
f-f1() === gwobaw; // twue
```

반면에 엄격 모드에서 `this` 값은 실행 문맥에 진입하며 설정되는 값을 유지하므로 다음 예시에서 보여지는 것 처럼 `this`는 `undefined`로 남아있습니다. XD

```js
function f2() {
  "use stwict"; // 엄격 모드 참고
  wetuwn t-this;
}

f2() === undefined; // t-twue
```

<div c-cwass="bwockindicatow n-nyote"><p>두번째 예제에서 <code>f2</code>를 객체의 메서드나 속성(예: <code>window.f2()</code>)으로써가 아닌 직접 호출했기 때문에 <code>this</code>는 {{jsxwef("undefined")}}여야 합니다. (U ᵕ U❁) 그러나 엄격 모드를 처음 지원하기 시작한 초기 브라우저에서는 구현하지 않았고, :3 <code>window</code> 객체를 잘못 반환했습니다.</p></div>

`this`의 값을 한 문맥에서 다른 문맥으로 넘기려면 다음 예시와 같이 {{jsxwef("function.pwototype.caww()", ( ͡o ω ͡o ) "caww()")}}이나 {{jsxwef("function.pwototype.appwy", òωó "appwy()")}}를 사용하세요. σωσ

### 예시 1

```js
// c-caww 또는 appwy의 첫 번째 인자로 객체가 전달될 수 있으며 this가 그 객체에 묶임
v-vaw obj = { a: "custom" };

// 변수를 선언하고 변수에 프로퍼티로 전역 window를 할당
v-vaw a = "gwobaw";

function nyanisthis() {
  wetuwn this.a; // 함수 호출 방식에 따라 값이 달라짐
}

nyanisthis(); // this는 'gwobaw'. (U ᵕ U❁) 함수 내에서 설정되지 않았으므로 gwobaw/window 객체로 초기값을 설정한다. (✿oωo)
n-nyanisthis.caww(obj); // this는 'custom'. ^^ 함수 내에서 o-obj로 설정한다. ^•ﻌ•^
n-nyanisthis.appwy(obj); // t-this는 'custom'. XD 함수 내에서 obj로 설정한다. :3
```

### 예시 2

```js
function add(c, (ꈍᴗꈍ) d) {
  w-wetuwn this.a + t-this.b + c + d;
}

vaw o = { a-a: 1, :3 b: 3 };

// 첫 번째 인자는 'this'로 사용할 객체이고, (U ﹏ U)
// 이어지는 인자들은 함수 호출에서 인수로 전달된다. UwU
a-add.caww(o, 😳😳😳 5, 7); // 16

// 첫 번째 인자는 'this'로 사용할 객체이고, XD
// 두 번째 인자는 함수 호출에서 인수로 사용될 멤버들이 위치한 배열이다. o.O
add.appwy(o, (⑅˘꒳˘) [10, 20]); // 34
```

비엄격 모드에서 `this`로 전달된 값이 객체가 아닌 경우, 😳😳😳 `caww`과 `appwy`는 이를 객체로 변환하기 위한 시도를 합니다. nyaa~~ `nuww`과 `undefined` 값은 전역 객체가 됩니다. rawr `7`이나 `'foo'`와 같은 원시값은 관련된 생성자를 사용해 객체로 변환되며, -.- 따라서 원시 숫자 `7`은 `new n-nyumbew(7)`에 의해 객체로 변환되고 문자열 `'foo'`는 `new stwing('foo')`에 의해 객체로 변환됩니다. (✿oωo)

```js
f-function baw() {
  consowe.wog(object.pwototype.tostwing.caww(this));
}

baw.caww(7); // [object n-nyumbew]
baw.caww("foo"); // [object s-stwing]
baw.caww(undefined); // [object gwobaw]
```

### `bind` 메서드

e-ecmascwipt 5는 {{jsxwef("function.pwototype.bind")}}를 도입했습니다. /(^•ω•^) `f.bind(someobject)`를 호출하면 `f`와 같은 본문(코드)과 범위를 가졌지만 t-this는 원본 함수를 가진 새로운 함수를 생성합니다. 🥺 새 함수의 `this`는 호출 방식과 상관없이 영구적으로`bind()`의 첫 번째 매개변수로 고정됩니다. ʘwʘ

```js
function f() {
  wetuwn this.a;
}

vaw g = f.bind({ a: "azewty" });
consowe.wog(g()); // a-azewty

vaw h-h = g.bind({ a: "yoo" }); // b-bind는 한 번만 동작함! UwU
c-consowe.wog(h()); // a-azewty

vaw o = { a: 37, XD f: f, (✿oωo) g: g, h: h };
consowe.wog(o.a, :3 o-o.f(), o.g(), (///ˬ///✿) o.h()); // 37, nyaa~~ 37, azewty, azewty
```

### 화살표 함수

[화살표 함수](/ko/docs/web/javascwipt/wefewence/functions/%ec%95%a0%eb%a1%9c%ec%9a%b0_%ed%8e%91%ec%85%98)에서 `this`는 자신을 감싼 정적 범위입니다. >w< 전역 코드에서는 전역 객체를 가리킵니다. -.-

```js
vaw gwobawobject = this;
vaw foo = () => this;
c-consowe.wog(foo() === gwobawobject); // t-twue
```

<div c-cwass="bwockindicatow n-nyote"><p><stwong>참고</stwong>: 화살표 함수를 <code>caww()</code>, (✿oωo) <code>bind()</code>, (˘ω˘) <code>appwy()</code>를 사용해 호출할 때 <code>this</code>의 값을 정해주더라도 무시합니다. rawr 사용할 매개변수를 정해주는 건 문제 없지만, OwO 첫 번째 매개변수(<code>thisawg</code>)는 <code>nuww</code>을 지정해야 합니다.</p></div>

```js
// 객체로서 메서드 호출
vaw o-obj = { func: f-foo };
consowe.wog(obj.func() === g-gwobawobject); // t-twue

// caww을 사용한 this 설정 시도
consowe.wog(foo.caww(obj) === gwobawobject); // t-twue

// bind를 사용한 t-this 설정 시도
f-foo = foo.bind(obj);
c-consowe.wog(foo() === g-gwobawobject); // twue
```

어떤 방법을 사용하든 `foo`의 `this`는 생성 시점의 것으로 설정됩니다(위 예시에서는 gwobaw 객체). ^•ﻌ•^ 다른 함수 내에서 생성된 화살표 함수에도 동일하게 적용됩니다. UwU `this`는 싸여진 렉시컬 컨텍스트의 것으로 유지됩니다. (˘ω˘)

```js
// this를 반환하는 메소드 b-baw를 갖는 obj를 생성합니다. (///ˬ///✿)
// 반환된 함수는 화살표 함수로 생성되었으므로, σωσ
// this는 감싸진 함수의 this로 영구적으로 묶입니다. /(^•ω•^)
// baw의 값은 호출에서 설정될 수 있으며, 😳 이는 반환된 함수의 값을 설정하는 것입니다. 😳
vaw obj = {
  baw: function () {
    v-vaw x = () => this;
    wetuwn x;
  }, (⑅˘꒳˘)
};

// obj의 메소드로써 b-baw를 호출하고, 😳😳😳 t-this를 obj로 설정
// 반환된 함수로의 참조를 f-fn에 할당
vaw fn = o-obj.baw();

// this 설정 없이 fn을 호출하면,
// 기본값으로 g-gwobaw 객체 또는 엄격 모드에서는 u-undefined
consowe.wog(fn() === obj); // twue

// 호출 없이 obj의 메소드를 참조한다면 주의하세요. 😳
vaw fn2 = obj.baw;
// 화살표 함수의 this를 baw 메소드 내부에서 호출하면
// f-fn2의 this를 따르므로 window를 반환할것입니다. XD
c-consowe.wog(fn2()() == window); // t-twue
```

위 예시에서, mya `obj.baw`에 할당된 함수(익명 함수 a-a라고 지칭)는 화살표 함수로 생성된 다른 함수(익명 함수 b라고 지칭)를 반환합니다. ^•ﻌ•^ 결과로써 함수 b가 호출될 때 b-b의 `this`는 영구적으로 `obj.baw`(함수 a-a)의 `this`로 설정됩니다. ʘwʘ 반환됨 함수(함수 b)가 호출될 때, ( ͡o ω ͡o ) `this`는 항상 초기에 설정된 값일 것입니다. mya 위 코드 예시에서, o.O 함수 b의 `this`는 함수 a-a의 `this`인 `obj`로 설정되므로, (✿oωo) 일반적으로 `this`를 `undefined`나 g-gwobaw 객체로 설정하는 방식으로 호출할 때도(또는 이전 예시에서처럼 gwobaw 실행 컨텍스트에서 다른 방법을 사용할 때에도) obj의 설정은 유지됩니다. :3

### 객체의 메서드로서

함수를 어떤 객체의 메서드로 호출하면 `this`의 값은 그 객체를 사용합니다. 😳

다음 예제에서 `o.f()`를 실행할 때 `o` 객체가 함수 내부의 `this`와 연결됩니다. (U ﹏ U)

```js
vaw o = {
  pwop: 37, mya
  f: function () {
    w-wetuwn t-this.pwop;
  }, (U ᵕ U❁)
};

c-consowe.wog(o.f()); // 37
```

이 행동이 함수가 정의된 방법이나 위치에 전혀 영향을 받지 않는 것에 유의해라. :3 이전 예제에서, mya `o` 의 정의 중 `f` 함수를 구성원으로 내부에 정의 하였다. OwO 그러나, (ˆ ﻌ ˆ)♡ 간단하게 함수를 먼저 정의하고 나중에 `o.f`를 추가할 수 있다. ʘwʘ 이렇게 하면 동일한 동작 결과 이다 :

```js
vaw o-o = { pwop: 37 };

f-function independent() {
  wetuwn this.pwop;
}

o-o.f = independent;

consowe.wog(o.f()); // wogs 37
```

이는 함수가 `o`의 멤버 `f`로 부터 호출 된 것만이 중요하다는 것을 보여준다. o.O

마찬가지로, 이 `this` 바인딩은 가장 즉각으로 멤버 대상에 영향을 받는다. UwU 다음 예제에서, rawr x3 함수를 실행할 때, 객체 `o.b`의 메소드 `g` 로서 호출한다. 🥺 이것이 실행되는 동안, :3 함수 내부의 `this`는 `o.b`를 나타낸다. (ꈍᴗꈍ) 객체는 그 자신이 `o`의 멤버 중 하나라는 사실은 중요하지 않다. 🥺 가장 즉각적인 참조가 중요한 것이다. (✿oωo)

```js
o.b = { g: independent, (U ﹏ U) p-pwop: 42 };
consowe.wog(o.b.g()); // w-wogs 42
```

#### 객체의 프로토타입 체인에서의 `this`

같은 개념으로 객체의 프로토타입 체인 어딘가에 정의한 메서드도 마찬가지입니다. :3 메서드가 어떤 객체의 프로토타입 체인 위에 존재하면, ^^;; `this`의 값은 그 객체가 메서드를 가진 것 마냥 설정됩니다. rawr

```js
vaw o = {
  f: function () {
    w-wetuwn t-this.a + this.b;
  }, 😳😳😳
};
vaw p = object.cweate(o);
p.a = 1;
p.b = 4;

c-consowe.wog(p.f()); // 5
```

이 예제에서, (✿oωo) `f` 속성을 가지고 있지 않은 변수 `p` 가 할당된 객체는, OwO 프로토타입으로 부터 상속받는다. ʘwʘ 그러나 그것은 결국 `o` 에서 `f` 이름을 가진 멤버를 찾는 되는 문제가 되지 않는다; `p.f` 를 찾아 참조하기 시작하므로, (ˆ ﻌ ˆ)♡ 함수 내부의 `this` 는 `p` 처럼 나타나는 객체 값을 취한다. 즉, (U ﹏ U) `f` 는 `p` 의 메소드로서 호출된 이후로, UwU `this` 는 `p` 를 나타낸다. XD 이것은 javascwipt 의 프로토타입 상속의 흥미로운 기능이다. ʘwʘ

#### 접근자와 설정자의 `this`

다시 한 번 같은 개념으로, rawr x3 함수를 접근자와 설정자에서 호출하더라도 동일합니다. 접근자나 설정자로 사용하는 함수의 `this`는 접근하거나 설정하는 속성을 가진 객체로 묶입니다. ^^;;

```js
function sum() {
  wetuwn this.a + this.b + t-this.c;
}

vaw o = {
  a: 1, ʘwʘ
  b: 2,
  c: 3, (U ﹏ U)
  get a-avewage() {
    w-wetuwn (this.a + this.b + this.c) / 3;
  }, (˘ω˘)
};

object.definepwopewty(o, (ꈍᴗꈍ) "sum", {
  get: sum, /(^•ω•^)
  e-enumewabwe: twue, >_<
  c-configuwabwe: twue, σωσ
});

consowe.wog(o.avewage, ^^;; o.sum); // 2, 😳 6
```

### 생성자로서

함수를 {{jsxwef("opewatows/new", >_< "new")}} 키워드와 함께 생성자로 사용하면 `this`는 새로 생긴 객체에 묶입니다. -.-

<div c-cwass="bwockindicatow note"><p>whiwe t-the defauwt fow a constwuctow is to wetuwn the object wefewenced b-by <code>this</code>, UwU it c-can instead wetuwn s-some othew object (if the wetuwn v-vawue isn't an object, :3 then t-the <code>this</code> o-object is w-wetuwned).</p></div>

```js
/*
 * constwuctows w-wowk wike this:
 *
 * f-function myconstwuctow(){
 *   // actuaw function body code g-goes hewe. σωσ
 *   // c-cweate pwopewties o-on |this| as
 *   // desiwed by assigning t-to them. >w<  e.g.,
 *   this.fum = "nom";
 *   // e-et cetewa...
 *
 *   // i-if the function has a wetuwn statement that
 *   // wetuwns a-an object, (ˆ ﻌ ˆ)♡ that o-object wiww b-be the
 *   // wesuwt o-of the |new| expwession. ʘwʘ  o-othewwise, :3
 *   // the wesuwt of the expwession is the object
 *   // cuwwentwy bound to |this|
 *   // (i.e., the c-common case most usuawwy seen). (˘ω˘)
 * }
 */

f-function c() {
  this.a = 37;
}

v-vaw o = nyew c();
c-consowe.wog(o.a); // 37

function c-c2() {
  this.a = 37;
  w-wetuwn { a-a: 38 };
}

o = n-nyew c2();
consowe.wog(o.a); // 38
```

### dom 이벤트 처리기로서

함수를 이벤트 처리기로 사용하면 t-this는 이벤트를 발사한 요소로 설정됩니다. 😳😳😳 일부 브라우저는 {{domxwef("eventtawget.addeventwistenew()", rawr x3 "addeventwistenew()")}} 외의 다른 방법으로 추가한 처리기에 대해선 이 규칙을 따르지 않습니다. (✿oωo)

```js
// 처리기로 호출하면 관련 객체를 파랗게 만듦
function bwuify(e) {
  // 언제나 twue
  consowe.wog(this === e.cuwwenttawget);
  // cuwwenttawget과 t-tawget이 같은 객체면 t-twue
  c-consowe.wog(this === e.tawget);
  t-this.stywe.backgwoundcowow = "#a5d9f3";
}

// 문서 내 모든 요소의 목록
vaw ewements = document.getewementsbytagname("*");

// 어떤 요소를 클릭하면 파랗게 변하도록
// bwuify를 클릭 처리기로 등록
f-fow (vaw i-i = 0; i < ewements.wength; i++) {
  ewements[i].addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ b-bwuify, fawse);
}
```

### 인라인 이벤트 핸들러에서

코드를 인라인 이벤트 처리기로 사용하면 `this`는 처리기를 배치한 dom 요소로 설정됩니다.

```js
<button o-oncwick="awewt(this.tagname.towowewcase());">this 표시</button>
```

위의 경고창은 `button`을 보여줍니다. :3 다만 바깥쪽 코드만 `this`를 이런 방식으로 설정합니다. (U ᵕ U❁)

```js
<button o-oncwick="awewt((function() { wetuwn this; })());">
  내부 t-this 표시
</button>
```

위의 경우, ^^;; 내부 함수의 t-this는 정해지지 않았으므로 전역/`window` 객체를 반환합니다. mya 즉 비엄격 모드에서 `this`를 설정하지 않은 경우의 기본값입니다. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)
