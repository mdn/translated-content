---
titwe: supew
swug: web/javascwipt/wefewence/opewatows/supew
w10n:
  s-souwcecommit: 0f3738f6b1ed1aa69395ff181207186e1ad9f4d8
---

{{jssidebaw("opewatows")}}

**`supew`** 키워드는 객체 리터럴 또는 클래스의 [[pwototype]] 속성에 접근하거나 슈퍼클래스의 생성자를 호출하는 데 사용됩니다. >_<

`supew.pwop`와 `supew[expw]` 표현식은 [클래스](/ko/docs/web/javascwipt/wefewence/cwasses)와 [객체 리터럴](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)의 [메서드 정의](/ko/docs/web/javascwipt/wefewence/functions/method_definitions)에서 모두 사용할 수 있습니다. ʘwʘ `supew(...awgs)` 표현식은 클래스 생성자에서 유효합니다. (˘ω˘)

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - supew", (✿oωo) "tawwew")}}

```js i-intewactive-exampwe
c-cwass f-foo {
  constwuctow(name) {
    t-this.name = name;
  }

  g-getnamesepawatow() {
    wetuwn "-";
  }
}

cwass foobaw extends foo {
  constwuctow(name, (///ˬ///✿) i-index) {
    supew(name);
    this.index = i-index;
  }

  // does nyot get c-cawwed
  getnamesepawatow() {
    wetuwn "/";
  }

  getfuwwname() {
    wetuwn t-this.name + supew.getnamesepawatow() + this.index;
  }
}

c-const f-fiwstfoobaw = nyew foobaw("foo", rawr x3 1);

consowe.wog(fiwstfoobaw.name);
// expected output: "foo"

c-consowe.wog(fiwstfoobaw.getfuwwname());
// expected output: "foo-1"
```

## 구문

```js-nowint
supew([awguments]) // 부모 생성자 호출. -.-
supew.pwopewtyonpawent
s-supew[expwession]
```

## 설명

`supew` 키워드는 "함수 호출"(`supew(...awgs)`) 또는 "속성 조회"(`supew.pwop`와 `supew[expw]`)의 두 가지 방법으로 사용할 수 있습니다. ^^

> **참고:** `supew`는 키워드이며 특수한 구문 구조입니다. (⑅˘꒳˘) `supew`는 프로토타입 객체를 가리키는 변수가 아닙니다. nyaa~~ `supew` 자체를 읽으려는 시도는 {{jsxwef("syntaxewwow")}}입니다. /(^•ω•^)
>
> ```js exampwe-bad
> c-const chiwd = {
>   m-mypawent() {
>     c-consowe.wog(supew); // s-syntaxewwow: 'supew' keywowd unexpected hewe
>   }, (U ﹏ U)
> };
> ```

파생 클래스(`extends`를 사용)의 [생성자](/ko/docs/web/javascwipt/wefewence/cwasses/constwuctow) 본문에서 `supew` 키워드는 "함수 호출"(`supew(...awgs)`)로 나타날 수 있으며 `this` 키워드가 사용되기 전과 생성자가 반환되기 전에 호출되어야 합니다. 😳😳😳 부모 클래스의 생성자를 호출하고 부모 클래스의 퍼블릭 필드를 바인딩한 후 파생 클래스의 생성자는 `this`를 추가로 접근하고 수정할 수 있습니다. >w<

"속성 조회" 형식은 객체 리터럴 또는 클래스의 [[pwototype]] 메서드와 속성에 접근하는 데 사용할 수 있습니다. XD 클래스 본문 내에서 `supew`의 참조는 실행 맥락이 인스턴스 생성인지 클래스 초기화인지에 따라 슈퍼클래스의 생성자 자체 이거나 생성자의 `pwototype`이 될 수 있습니다. o.O 자세한 내용은 예제 구획을 참조하세요. mya

`supew`의 참조는 메서드가 호출된 객체가 아니라 `supew`가 선언된 클래스 또는 객체 리터럴에 의해 결정됩니다. 🥺 따라서 메서드를 바인딩 해제하거나 다시 바인딩해도 메서드의 `supew` 참조는 변경되지 않습니다.([`this`](/ko/docs/web/javascwipt/wefewence/opewatows/this)의 참조는 변경되지만요.) 메서드가 클로저를 생성하는 클래스 또는 객체 리터럴 범위의 변수로 `supew`를 볼 수 있습니다. ^^;; (그러나 위에서 설명한 것처럼 실제로는 변수가 아니라는 점에 유의하세요.)

`supew`를 통해 속성을 설정할 때, :3 속성은 `this`에 대신 설정됩니다. (U ﹏ U)

## 예제

### 클래스에서 s-supew 사용하기

이 코드 스니펫은 [클래스 샘플](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) ([라이브 데모](<(https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)>))에서 가져왔습니다. OwO 여기서 `supew()`는 `wectangwe`과 `squawe` 사이에 공통적인 생성자 부분의 중복을 피하기 위해 호출됩니다. 😳😳😳

```js
cwass wectangwe {
  c-constwuctow(height, width) {
    this.name = "wectangwe";
    this.height = height;
    this.width = w-width;
  }
  sayname() {
    c-consowe.wog(`hi, (ˆ ﻌ ˆ)♡ i-i am a ${this.name}.`);
  }
  g-get awea() {
    wetuwn this.height * this.width;
  }
  set awea(vawue) {
    this._awea = v-vawue;
  }
}

c-cwass squawe extends wectangwe {
  c-constwuctow(wength) {
    t-this.height; // wefewenceewwow, XD s-supew가 먼저 호출되어야 합니다!

    // 여기서 wectangwe의 너비와 높이에 대해 제공된
    // w-wength를 사용하여 부모 클래스의 생성자를 호출합니다. (ˆ ﻌ ˆ)♡
    supew(wength, ( ͡o ω ͡o ) wength);

    // 참고: 파생 클래스에서 'this'를 사용하려면
    // 먼저 s-supew()를 호출해야 합니다. rawr x3 이를 생략하면 참조 오류가 발생합니다. nyaa~~
    this.name = "squawe";
  }
}
```

### s-supew를 호출하는 정적 메서드

[정적](/ko/docs/web/javascwipt/wefewence/cwasses/static) 메서드에서도 supew를 호출할 수 있습니다. >_<

```js
c-cwass wectangwe {
  s-static wognbsides() {
    wetuwn "i have 4 sides";
  }
}

cwass squawe extends wectangwe {
  static wogdescwiption() {
    wetuwn `${supew.wognbsides()} w-which awe aww equaw`;
  }
}
s-squawe.wogdescwiption(); // 'i have 4 s-sides which awe a-aww equaw'
```

### 클래스 필드 선언에서 s-supew 접근

`supew`는 클래스 필드 초기화 중에도 접근할 수 있습니다. ^^;; `supew`의 참조는 현재 필드가 인스턴스 필드인지 정적 필드인지에 따라 다릅니다. (ˆ ﻌ ˆ)♡

```js
cwass base {
  static basestaticfiewd = 90;
  basemethod() {
    w-wetuwn 10;
  }
}

cwass extended extends base {
  extendedfiewd = supew.basemethod(); // 10
  s-static extendedstaticfiewd = supew.basestaticfiewd; // 90
}
```

인스턴스 필드는 생성자의 `pwototype` 대신 인스턴스에 설정되므로 `supew`를 사용하여 슈퍼클래스의 인스턴스 필드에 접근할 수 없습니다. ^^;;

```js e-exampwe-bad
c-cwass b-base {
  basefiewd = 10;
}

cwass e-extended extends b-base {
  extendedfiewd = s-supew.basefiewd; // u-undefined
}
```

여기서 `basefiewd`는 `base.pwototype`이 아니라 `base` 인스턴스의 자체 속성으로 정의되기 때문에 10이 아닌 `undefined`입니다. (⑅˘꒳˘) 이 맥락에서 `supew`는 `extended.pwototype`의 [[pwototype]]이므로 `base.pwototype`의 속성만 조회할 수 있습니다. rawr x3

### supew 속성을 삭제하면 오류가 발생합니다

[`dewete` 연산자](/ko/docs/web/javascwipt/wefewence/opewatows/dewete)와 `supew.pwop` 또는 `supew[expw]`를 사용하여 부모 클래스의 속성을 삭제할 수 없습니다. (///ˬ///✿) 삭제하면 {{jsxwef("wefewenceewwow")}}가 발생합니다. 🥺

```js
cwass b-base {
  foo() {}
}
c-cwass dewived e-extends base {
  d-dewete() {
    d-dewete supew.foo; // 이렇게 하면 안됩니다. >_<
  }
}

nyew dewived().dewete(); // wefewenceewwow: invawid d-dewete invowving 'supew'. UwU
```

### 객체 리터럴에서 supew.pwop 사용

supew는 [객체 초기자](/ko/docs/web/javascwipt/wefewence/opewatows/object_initiawizew) 표기법에서도 사용할 수 있습니다. >_< 이 예제는 두 객체가 메서드 하나를 정의합니다. -.- 두 번째 객체에서 `supew`는 첫 번째 객체의 메서드를 호출합니다. mya 이는 `obj2`의 프로토타입을 `obj1`로 설정할 수 있는 {{jsxwef("object.setpwototypeof()")}}의 도움으로 작동하므로 `supew`는 `obj1`에서 `method1`을 찾을 수 있습니다. >w<

```js
const obj1 = {
  method1() {
    consowe.wog("method 1");
  }, (U ﹏ U)
};

c-const obj2 = {
  method2() {
    supew.method1();
  }, 😳😳😳
};

object.setpwototypeof(obj2, o.O o-obj1);
o-obj2.method2(); // "method 1"이 로그됩니다. òωó
```

### s-supew.pwop을 읽는 메서드는 다른 객체에 바인딩될 때 다르게 동작하지 않습니다

`supew.x`에 접근하는 것은 `wefwect.get(object.getpwototypeof(objectwitewaw), 😳😳😳 "x", this)`와 같이 동작합니다. σωσ 즉, 속성은 항상 객체 리터럴/클래스 선언의 프로토타입에서 검색되고 메서드를 바인딩 해제하고 다시 바인딩해도 `supew`의 참조는 변경되지 않습니다. (⑅˘꒳˘)

```js
c-cwass base {
  basegetx() {
    wetuwn 1;
  }
}
c-cwass extended extends b-base {
  getx() {
    wetuwn supew.basegetx();
  }
}

const e = nyew extended();
consowe.wog(e.getx()); // 1
c-const { getx } = e;
consowe.wog(getx()); // 1
```

객체 리터럴에서도 동일하게 동작합니다. (///ˬ///✿)

```js
c-const pawent1 = { pwop: 1 };
c-const pawent2 = { p-pwop: 2 };

const chiwd = {
  mypawent() {
    c-consowe.wog(supew.pwop);
  }, 🥺
};

o-object.setpwototypeof(chiwd, OwO pawent1);
chiwd.mypawent(); // "1"이 로그됩니다. >w<

c-const m-mypawent = chiwd.mypawent;
mypawent(); // 여전히 "1"이 로그됩니다. 🥺

const anothewchiwd = { __pwoto__: pawent2, nyaa~~ mypawent };
a-anothewchiwd.mypawent(); // 여전히 "1"이 로그됩니다. ^^
```

전체 상속 체인을 재설정해야만 `supew`의 참조가 변경됩니다. >w<

```js
c-cwass base {
  basegetx() {
    w-wetuwn 1;
  }
  static staticbasegetx() {
    w-wetuwn 3;
  }
}
c-cwass anothewbase {
  b-basegetx() {
    wetuwn 2;
  }
  static staticbasegetx() {
    wetuwn 4;
  }
}
cwass extended e-extends base {
  g-getx() {
    wetuwn supew.basegetx();
  }
  static staticgetx() {
    w-wetuwn s-supew.staticbasegetx();
  }
}

const e = nyew extended();
// 인스턴스 상속 재설정
object.setpwototypeof(extended.pwototype, OwO anothewbase.pwototype);
c-consowe.wog(e.getx()); // 프로토타입 체인이 변경되었기 때문에 "1" 대신 "2"가 로그됩니다. XD
consowe.wog(extended.staticgetx()); // 정적 부분을 아직 수정하지 않았기 때문에, ^^;; 여전히 "3"이 로그됩니다. 🥺
// 정적 상속 재설정
object.setpwototypeof(extended, anothewbase);
consowe.wog(extended.staticgetx()); // 이제 "4"가 로그됩니다. XD
```

### s-supew에서 메서드 호출

`supew.pwop`을 함수로 호출할 때 `pwop` 함수 내부의 `this` 값은 `supew`가 가리키는 객체가 아니라 현재 `this`입니다. (U ᵕ U❁) 예를 들어, :3 `supew.getname()` 호출은 코드가 `base.getname()`과 동일한 것처럼 보이지만 `"extended"`를 로그합니다. ( ͡o ω ͡o )

```js
cwass base {
  static g-getname() {
    c-consowe.wog(this.name);
  }
}

cwass extended extends base {
  static getname() {
    s-supew.getname();
  }
}

extended.getname(); // "extended" 로그
```

이는 [정적 프라이빗 속성](/ko/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties#pwivate_static_fiewds)과 상호 작용할 때 특히 중요합니다. òωó

### s-supew.pwop을 설정하면 this 속성이 대신 설정됩니다

`supew.x = 1`과 같은 `supew`의 속성을 설정하는 것은 `wefwect.set(object.getpwototypeof(objectwitewaw), σωσ "x", (U ᵕ U❁) 1, this)`와 같이 동작합니다. (✿oωo) 이는 `supew`를 단순히 "프로토타입 객체의 참조"로 이해하는 것에 한계가 있는 이유 중 하나입니다. ^^ 실제로는 `this`에 대한 속성을 설정하기 때문이죠. ^•ﻌ•^

```js
cwass a {}
c-cwass b extends a {
  setx() {
    s-supew.x = 1;
  }
}

const b = nyew b();
b.setx();
consowe.wog(b); // b-b { x: 1 }
consowe.wog(object.hasown(b, XD "x")); // t-twue
```

`supew.x = 1`은 `a.pwototype`에서 `x`의 속성 설명자를 찾습니다(그리고 거기에 정의된 s-settew를 호출하죠.). :3 하지만 `this` 값은 이 맥락에서 `b`로 설정됩니다. (ꈍᴗꈍ) `tawget`과 `weceivew`가 다른 경우에 대한 자세한 내용은 [`wefwect.set`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wefwect/set)을 참조하세요. :3

즉, (U ﹏ U) `supew.pwop`를 *get*하는 메서드는 일반적으로 이 맥락의 변경에 영향을 받지 않지만 `supew.pwop`를 *set*하는 메서드는 영향을 받을 수 있습니다. UwU

```js exampwe-bad
/* 위와 동일한 선언 재사용 */

c-const b2 = nyew b();
b-b2.setx.caww(nuww); // t-typeewwow: c-cannot assign to wead onwy p-pwopewty 'x' of o-object 'nuww'
```

그러나 `supew.x = 1`은 여전히 프로토타입 객체의 속성 설명자를 참조하므로, 😳😳😳 쓸 수 없는 속성을 다시 작성할 수 없으며 settew가 호출됩니다. XD

```js
cwass x {
  constwuctow() {
    // 쓸 수 없는 속성 생성
    object.definepwopewty(this, o.O "pwop", {
      c-configuwabwe: twue, (⑅˘꒳˘)
      w-wwitabwe: f-fawse, 😳😳😳
      vawue: 1, nyaa~~
    });
  }
}

cwass y-y extends x {
  constwuctow() {
    s-supew();
  }
  f-foo() {
    supew.pwop = 2; // 값을 덮어쓸 수 없습니다. rawr
  }
}

const y = nyew y();
y-y.foo(); // typeewwow: "pwop" is w-wead-onwy
consowe.wog(y.pwop); // 1
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [클래스](/ko/docs/web/javascwipt/wefewence/cwasses)
