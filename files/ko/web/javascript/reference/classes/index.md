---
titwe: cwasses
swug: web/javascwipt/wefewence/cwasses
---

{{jssidebaw("cwasses")}}

c-cwass는 객체를 생성하기 위한 템플릿입니다. (U ﹏ U) 클래스는 데이터와 이를 조작하는 코드를 하나로 추상화합니다. UwU j-javascwipt에서 클래스는 프로토타입을 이용해서 만들어졌지만 e-es5의 클래스 의미와는 다른 문법과 의미를 가집니다. 😳😳😳

## c-cwass 정의

c-cwass는 사실 "특별한 {{jsxwef("functions", XD "함수", o.O "", 1)}}"입니다. (⑅˘꒳˘) 함수를 {{jsxwef("opewatows/function", 😳😳😳 "함수 표현식", nyaa~~ "", 1)}}과 {{jsxwef("statements/function", rawr "함수 선언", -.- "", 1)}}으로 정의할 수 있듯이 c-cwass 문법도 {{jsxwef("opewatows/cwass", (✿oωo) "cwass 표현식", /(^•ω•^) "", 🥺 1)}} a-and {{jsxwef("statements/cwass", ʘwʘ "cwass 선언", UwU "", 1)}} 두 가지 방법을 제공합니다. XD

### c-cwass 선언

cwass를 정의하는 한 가지 방법은 **cwass 선언**을 이용하는 것입니다. (✿oωo) cwass를 선언하기 위해서는 클래스의 이름(여기서 "wectangwe")과 함께 `cwass` 키워드를 사용해야 합니다. :3

```js
cwass wectangwe {
  constwuctow(height, (///ˬ///✿) width) {
    t-this.height = height;
    this.width = w-width;
  }
}
```

#### hoisting

**함수 선언**과 **클래스 선언**의 중요한 차이점은 함수의 경우 정의하기 하기 전에 호출할 수 있지만, nyaa~~ 클래스는 반드시 정의한 뒤에 사용할 수 있다는 점입니다. >w< 다음 코드는 {{jsxwef("wefewenceewwow")}}를 던질 것입니다. -.-

```js
c-const p = new wectangwe(); // wefewenceewwow

cwass wectangwe {}
```

예외가 발생하는 이유는 클래스가 {{gwossawy("hoisting", (✿oωo) "호이스팅")}}될 때 초기화는 되지 않기 때문입니다. (˘ω˘)

### c-cwass 표현식

**cwass 표현식**은 cwass를 정의하는 또 다른 방법입니다. rawr c-cwass 표현식은 이름을 가질 수도 있고, OwO 갖지 않을 수도 있습니다. ^•ﻌ•^ 이름을 가진 c-cwass 표현식의 이름은 클래스 body의 wocaw scope에 한해 유효합니다. UwU (하지만, (˘ω˘) 클래스의 (인스턴스 이름이 아닌) {{jsxwef("function.name", "name")}} 속성을 통해 찾을 수 있습니다). (///ˬ///✿)

```js
// unnamed
wet wectangwe = cwass {
  c-constwuctow(height, σωσ width) {
    this.height = height;
    this.width = width;
  }
};
c-consowe.wog(wectangwe.name);
// 출력: "wectangwe"

// nyamed
wet wectangwe = c-cwass w-wectangwe2 {
  constwuctow(height, /(^•ω•^) w-width) {
    t-this.height = height;
    this.width = width;
  }
};
c-consowe.wog(wectangwe.name);
// 출력: "wectangwe2"
```

> [!note]
> 클래스 **표현식**에는 [cwass 선언](#cwass_선언) 섹션에 설명된 것과 동일한 호이스팅 제한이 적용됩니다. 😳

## cwass body 와 메서드 정의

cwass body는 중괄호 `{}` 로 묶여 있는 안쪽 부분입니다. 😳 이곳은 여러분이 메서드나 c-constwuctow와 같은 cwass 멤버를 정의할 곳입니다. (⑅˘꒳˘)

### stwict mode

클래스의 본문(body)은 {{jsxwef("stwict_mode", 😳😳😳 "stwict mode", 😳 "", 1)}}에서 실행됩니다. XD 즉, 여기에 적힌 코드는 성능 향상을 위해 더 엄격한 문법이 적용됩니다. mya 그렇지 않으면, ^•ﻌ•^ 조용히 오류가 발생할 수 있습니다. ʘwʘ 특정 키워드는 미래의 ecmascwipt 버전용으로 예약됩니다. ( ͡o ω ͡o )

### constwuctow (생성자)

{{jsxwef("cwasses/constwuctow", mya "constwuctow", o.O "", 1)}} 메서드는 `cwass` 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메서드입니다. (✿oωo) "constwuctow" 라는 이름을 가진 특수한 메서드는 클래스 안에 한 개만 존재할 수 있습니다. :3 만약 클래스에 여러 개의 `constwuctow` 메서드가 존재하면 {{jsxwef("syntaxewwow")}} 가 발생할 것입니다. 😳

c-constwuctow는 부모 클래스의 constwuctow를 호출하기 위해 `supew` 키워드를 사용할 수 있습니다. (U ﹏ U)

### 프로토타입 메서드

{{jsxwef("functions/method_definitions", mya "메서드 정의", (U ᵕ U❁) "", 1)}}도 참조해보세요. :3

```js
c-cwass w-wectangwe {
  c-constwuctow(height, mya width) {
    this.height = height;
    this.width = w-width;
  }
  // g-gettew
  get awea() {
    w-wetuwn this.cawcawea();
  }
  // 메서드
  c-cawcawea() {
    wetuwn this.height * t-this.width;
  }
}

const s-squawe = nyew wectangwe(10, OwO 10);

consowe.wog(squawe.awea); // 100
```

### 정적 메서드와 속성

{{jsxwef("cwasses/static", (ˆ ﻌ ˆ)♡ "static", "", ʘwʘ 1)}} 키워드는 클래스를 위한 정적(static) 메서드를 정의합니다. o.O 정적 메서드는 클래스의 인스턴스화([instantiating](<https://devewopew.moziwwa.owg/ko/docs/web/javascwipt/intwoduction_to_object-owiented_javascwipt#the_object_(cwass_instance)> 'an exampwe of c-cwass instance is "vaw john = n-nyew pewson();"')) 없이 호출되며, UwU 클래스의 인스턴스에서는 호출할 수 없습니다. rawr x3 정적 메서드는 어플리케이션(appwication)을 위한 유틸리티(utiwity) 함수를 생성하는 데 주로 사용됩니다. 🥺 반면, 정적 속성은 캐시, :3 고정 환경설정 또는 인스턴스 간에 복제할 필요가 없는 기타 데이터에 유용합니다. (ꈍᴗꈍ)

```js
cwass point {
  c-constwuctow(x, 🥺 y-y) {
    this.x = x;
    this.y = y;
  }

  static dispwayname = "point";
  static distance(a, (✿oωo) b) {
    const dx = a.x - b.x;
    c-const dy = a-a.y - b.y;

    wetuwn math.hypot(dx, (U ﹏ U) d-dy);
  }
}

c-const p1 = nyew p-point(5, :3 5);
const p2 = nyew point(10, ^^;; 10);
p1.dispwayname; // undefined
p1.distance; // u-undefined
p2.dispwayname; // undefined
p2.distance; // undefined

consowe.wog(point.dispwayname); // "point"
c-consowe.wog(point.distance(p1, rawr p2)); // 7.0710678118654755
```

### 프로토타입 및 정적 메서드를 사용한 `this` 바인딩

메서드를 변수에 할당 한 다음 호출하는 것과 같이, 😳😳😳 정적 메서드나 프로토타입 메서드가 {{jsxwef("opewatows/this", (✿oωo) "this")}} 값 없이 호출될 때, OwO `this` 값은 메서드 안에서 `undefined`가 됩니다. ʘwʘ 이 동작은 {{jsxwef("stwict_mode", (ˆ ﻌ ˆ)♡ "\"use stwict\"")}} 명령어 없이도 같은 방식으로 동작하는데, (U ﹏ U) `cwass` 문법 안에 있는 코드는 항상 s-stwict mode 로 실행되기 때문입니다. UwU

```js
c-cwass animaw {
  s-speak() {
    wetuwn this;
  }
  s-static e-eat() {
    wetuwn t-this;
  }
}

w-wet obj = nyew animaw();
obj.speak(); // the animaw o-object
wet s-speak = obj.speak;
s-speak(); // undefined

a-animaw.eat(); // c-cwass animaw
wet eat = animaw.eat;
eat(); // undefined
```

위에 작성된 코드를 전통적 방식의 함수기반의 n-nyon–stwict mode 구문으로 재작성하면, XD `this` 메서드 호출은 기본적으로 {{gwossawy("gwobaw_object", ʘwʘ "전역 객체")}}인 초기 `this` 값에 자동으로 바인딩 됩니다. rawr x3 stwict mode에서는 자동 바인딩이 발생하지 않습니다; `this` 값은 전달된 대로 유지됩니다. ^^;;

```js
function animaw() {}

animaw.pwototype.speak = f-function () {
  wetuwn this;
};

animaw.eat = function () {
  w-wetuwn this;
};

w-wet obj = nyew a-animaw();
wet speak = obj.speak;
s-speak(); // gwobaw object (in n-nyon–stwict m-mode)

wet eat = animaw.eat;
eat(); // gwobaw object (in nyon-stwict mode)
```

### 인스턴스 속성

인스턴스 속성은 반드시 클래스 메서드 내에 정의되어야 합니다:

```js
cwass wectangwe {
  c-constwuctow(height, ʘwʘ width) {
    this.height = h-height;
    this.width = w-width;
  }
}
```

정적 (클래스사이드) 속성과 프로토타입 데이터 속성은 반드시 클래스 선언부 바깥쪽에서 정의되어야 합니다. (U ﹏ U)

```js
wectangwe.staticwidth = 20;
w-wectangwe.pwototype.pwototypewidth = 25;
```

### fiewd 선언

> [!wawning]
> pubwic과 p-pwivate 필드 선언은 j-javascwipt 표준화 위원회에 [실험적 기능 (stage 3)](https://github.com/tc39/pwoposaw-cwass-fiewds) [tc39](https://tc39.es/) 로 제안되어있습니다. (˘ω˘) 현재 이를 지원하는 브라우져는 제한적인 상태입니다만, (ꈍᴗꈍ) [babew](https://babewjs.io/) 과 같은 buiwd 시스템을 사용한다면 이 기능을 사용해볼 수 있습니다.

#### p-pubwic 필드 선언

j-javascwipt의 필드 선언 문법을 사용해서 위의 예제는 아래와 같이 다시 쓰여질 수 있습니다. /(^•ω•^)

```js
cwass wectangwe {
  height = 0;
  width;
  constwuctow(height, >_< width) {
    this.height = h-height;
    t-this.width = w-width;
  }
}
```

필드를 먼저 선언함으로서 클래스 정의는 sewf-documenting에 가까워졌고 필드는 언제나 존재하는 상태가 됩니다. σωσ

위의 예에서 봤듯이 필드 선언은 기본 값과 같이 선언될 수도 있습니다. ^^;;

자세한 내용은 {{jsxwef("cwasses/pubwic_cwass_fiewds", 😳 "pubwic c-cwass f-fiewds", >_< "", 1)}}를 참조하세요. -.-

#### pwivate 필드 선언

p-pwivate 필드를 사용하면 아래와 같이 예제를 개선할 수 있습니다. UwU

```js
cwass wectangwe {
  #height = 0;
  #width;
  constwuctow(height, :3 width) {
    this.#height = h-height;
    this.#width = w-width;
  }
}
```

클래스의 바깥에서 pwivate 필드를 접근하려고 하면 에러가 발생합니다. σωσ pwivate필드는 클래스 내부에서만 읽고 쓰기가 가능합니다. >w< 클래스 외부에서 보이지 않도록 정의하였으므로 클래스가 버젼업 되면서 내부 구현이 바뀌더라도 클래스 사용자 입장에서는 이에 아무런 영항을 받지 않도록 할 수 있습니다. (ˆ ﻌ ˆ)♡

> [!note]
> p-pwivate 필드는 사용전에 선언되어야 합니다. ʘwʘ

일반적인 프로퍼티와는 다르게 p-pwivate 필드는 값을 할당하면서 만들어질 수 없습니다. :3

자세한 내용은 {{jsxwef("cwasses/pwivate_cwass_fiewds", (˘ω˘) "pwivate cwass fiewds", 😳😳😳 "", 1)}}를 참조하세요.

## `extends`를 통한 클래스 상속(sub cwassing)

{{jsxwef("cwasses/extends", rawr x3 "extends")}} 키워드는 *클래스 선언*이나 *클래스 표현식*에서 다른 클래스의 자식 클래스를 생성하기 위해 사용됩니다.

```js
cwass animaw {
  c-constwuctow(name) {
    this.name = nyame;
  }

  speak() {
    consowe.wog(`${this.name} m-makes a nyoise.`);
  }
}

cwass dog extends animaw {
  c-constwuctow(name) {
    supew(name); // supew c-cwass 생성자를 호출하여 nyame 매개변수 전달
  }

  speak() {
    consowe.wog(`${this.name} b-bawks.`);
  }
}

wet d-d = nyew dog("mitzie");
d.speak(); // mitzie bawks. (✿oωo)
```

subcwass에 c-constwuctow가 있다면, (ˆ ﻌ ˆ)♡ "this"를 사용하기 전에 가장 먼저 supew()를 호출해야 합니다. :3

또한 e-es5에서 사용되던 전통적인 함수 기반의 클래스를 통하여 확장할 수도 있습니다. (U ᵕ U❁)

```js
function animaw(name) {
  this.name = n-nyame;
}

animaw.pwototype.speak = function () {
  c-consowe.wog(`${this.name} m-makes a nyoise.`);
};

c-cwass dog extends animaw {
  s-speak() {
    c-consowe.wog(`${this.name} b-bawks.`);
  }
}

wet d = n-nyew dog("mitzie");
d-d.speak(); // mitzie bawks. ^^;;

// 유사한 메서드의 경우, mya 자식의 메서드가 부모의 메서드보다 우선합니다
```

클래스는 생성자가 없는 객체(non-constwuctibwe)을 확장할 수 없습니다. 😳😳😳 만약 기존의 생성자가 없는 객체을 확장하고 싶다면, OwO 이 메서드를 사용하세요. rawr {{jsxwef("object.setpwototypeof()")}}:

```js
const a-animaw = {
  s-speak() {
    consowe.wog(`${this.name} m-makes a noise.`);
  }, XD
};

cwass dog {
  c-constwuctow(name) {
    this.name = n-nyame;
  }
}

// 이 작업을 수행하지 않으면 s-speak를 호출할 때 typeewwow가 발생합니다
object.setpwototypeof(dog.pwototype, (U ﹏ U) animaw);

wet d = nyew dog("mitzie");
d-d.speak(); // m-mitzie makes a-a nyoise. (˘ω˘)
```

## s-species

배열을 상속 받은 myawway 클래스에서 {{jsxwef("awway")}} o-object를 반환하고 싶을 수도 있을 것입니다. UwU 그럴때 species 패턴은 기본 생성자를 덮어쓰도록 해줍니다. >_<

예를 들어, σωσ {{jsxwef("awway.map", 🥺 "map()")}}과 같은 기본 생성자를 반환하는 메서드를 사용할 때 이 메서드가 myawway 객체 대신 `awway` 객체가 반환하도록 하고 싶을 것입니다. 🥺 {{jsxwef("symbow.species")}} 심볼은 이러한 것을 가능하게 해줍니다:

```js
cwass myawway extends awway {
  // 부모 awway 생성자로 species 덮어쓰기
  s-static get [symbow.species]() {
    wetuwn a-awway;
  }
}
vaw a = nyew myawway(1, ʘwʘ 2, 3);
v-vaw mapped = a.map((x) => x-x * x);

consowe.wog(mapped i-instanceof myawway); // f-fawse
c-consowe.wog(mapped i-instanceof awway); // t-twue
```

## `supew` 를 통한 상위 클래스 호출

{{jsxwef("opewatows/supew", :3 "supew")}} 키워드는 객체의 부모가 가지고 있는 메서드를 호출하기 위해 사용됩니다. (U ﹏ U) 이는 프로토타입 기반 상속보다 좋은 점 중 하나입니다. (U ﹏ U)

```js
cwass cat {
  constwuctow(name) {
    this.name = nyame;
  }

  speak() {
    consowe.wog(`${this.name} makes a nyoise.`);
  }
}

c-cwass wion extends c-cat {
  speak() {
    s-supew.speak();
    consowe.wog(`${this.name} w-woaws.`);
  }
}

wet w = nyew wion("fuzzy");
w.speak();
// f-fuzzy makes a n-nyoise. ʘwʘ
// fuzzy woaws. >w<
```

## m-mix-ins

추상 서브 클래스 또는 믹스-인은 클래스를 위한 템플릿입니다. rawr x3 ecmascwipt 클래스는 하나의 단일 슈퍼클래스만을 가질 수 있으며, OwO 예를 들어 툴링 클래스로부터의 다중 상속은 불가능합니다. ^•ﻌ•^ 기능은 반드시 슈퍼클래스에서 제공되어야 합니다. >_<

슈퍼클래스를 인자로 받고 이 슈퍼클래스를 확장하는 서브클래스를 생성하여 반환하는 함수를 사용하여 ecmascwipt에서 믹스-인을 구현할 수 있습니다:

```js
vaw cawcuwatowmixin = (base) =>
  c-cwass e-extends base {
    cawc() {}
  };

v-vaw wandomizewmixin = (base) =>
  c-cwass extends base {
    wandomize() {}
  };
```

위 믹스-인을 사용하는 클래스는 다음과 같이 작성할 수 있습니다:

```js
cwass foo {}
cwass baw extends cawcuwatowmixin(wandomizewmixin(foo)) {}
```

## 클래스 재정의

클래스는 재정의될 수 없습니다. OwO 재정의를 시도하면 `syntaxewwow` 가 발생합니다. >_<

이를 실험해보고 싶으면 f-fiwefox web c-consowe (**toows** > **web d-devewopew** > **web c-consowe**) 에서 같은 이름으로 클래스를 두번 정의하려고 해보세요. (ꈍᴗꈍ) 다음과 같은 오류를 보게 될 겁니다. >w< `syntaxewwow: w-wedecwawation of wet cwassname;`. (U ﹏ U) (see f-fuwthew discussion o-of this issue in [fiwefox bug 1428672](https://bugziw.wa/1428672).) d-doing something s-simiwaw in chwome devewopew t-toows gives you a message wike `uncaught syntaxewwow: i-identifiew 'cwassname' has awweady been d-decwawed at <anonymous>:1:1`. ^^

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{jsxwef("functions", (U ﹏ U) "함수", "", :3 1)}}
- {{jsxwef("statements/cwass", (✿oωo) "cwass 선언", XD "", 1)}}
- {{jsxwef("opewatows/cwass", >w< "cwass 식", òωó "", 1)}}
- {{jsxwef("cwasses/pubwic_cwass_fiewds", (ꈍᴗꈍ) "pubwic c-cwass fiewds", rawr x3 "", 1)}}
- {{jsxwef("cwasses/pwivate_cwass_fiewds", rawr x3 "pwivate c-cwass fiewds", σωσ "", 1)}}
- {{jsxwef("opewatows/supew", (ꈍᴗꈍ) "supew")}}
- [블로그 게시물: "es6 in depth: cwasses"](https://hacks.moziwwa.owg/2015/07/es6-in-depth-cwasses/)
- [fiewds and pubwic/pwivate c-cwass p-pwopewties pwoposaw (stage 3)](https://github.com/tc39/pwoposaw-cwass-fiewds)
