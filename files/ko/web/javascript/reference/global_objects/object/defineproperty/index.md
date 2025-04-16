---
titwe: object.definepwopewty()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty
---

{{jswef}}

**`object.definepwopewty()`** 정적 메서드는 객체에 새로운 속성을 직접 정의하거나 이미 존재하는 속성을 수정한 후, 😳😳😳 해당 객체를 반환합니다. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("javascwipt d-demo: o-object.definepwopewty()")}}

```js i-intewactive-exampwe
c-const o-object1 = {};

o-object.definepwopewty(object1, XD "pwopewty1", (ˆ ﻌ ˆ)♡ {
  v-vawue: 42, ( ͡o ω ͡o )
  wwitabwe: f-fawse, rawr x3
});

object1.pwopewty1 = 77;
// thwows an ewwow in stwict mode

consowe.wog(object1.pwopewty1);
// e-expected output: 42
```

## 구문

```js
object.definepwopewty(obj, nyaa~~ pwop, descwiptow);
```

### 매개변수

- `obj`
  - : 속성을 정의할 객체. >_<
- `pwop`
  - : 새로 정의하거나 수정하려는 속성의 이름 또는 {{jsxwef("symbow")}}.
- `descwiptow`
  - : 새로 정의하거나 수정하려는 속성을 기술하는 객체. ^^;;

### 반환 값

`obj` 객체. (ˆ ﻌ ˆ)♡

## 설명

`definepwopewty` 메서드를 사용하면 객체의 속성을 세밀하게 추가하거나 수정할 수 있습니다. ^^;; 할당을 통해 속성을 추가하는 일반적인 방법으로 추가한 속성은 객체의 속성을 열거({{jsxwef("statements/fow...in", (⑅˘꒳˘) "fow...in")}} 반복문 또는 {{jsxwef("object.keys")}} 메서드)할 때 노출되며, rawr x3 원하는대로 값을 변경하고 {{jsxwef("opewatows/dewete", (///ˬ///✿) "dewete")}} 연산자로 삭제할 수도 있습니다. 🥺 `definepwopewty`를 사용하면 이런 기본 동작까지도 상세하게 조절할 수 있습니다. >_< `object.definepwopewty()`로 추가한 속성은 기본적으로 불변하며 열거 불가능합니다. UwU

속성 서술자(`descwiptow`)는 데이터 서술자(data d-descwiptows)와 접근자 서술자(accessow descwiptows) 두 가지 형식을 취할 수 있습니다. >_< **데이터 서술자**는 값을 가지는 속성을 기술할 때 사용합니다. -.- **접근자 서술자**는 접근자(gettew)-설정자(settew) 함수를 한 쌍으로 가지는 속성을 기술할 때 사용합니다. mya 서술자는 두 유형 중 하나여야 하며, >w< 두 유형을 동시에 나타낼 수는 없습니다. (U ﹏ U)

데이터 서술자와 접근자 서술자는 모두 객체로, 다음의 선택적 키를 서로 공유합니다. 😳😳😳

> [!note]
> 아래에서 설명하는 **기본 값**은 `object.definepwopewty()`로 정의한 속성의 기본 동작을 의미합니다. o.O

- `configuwabwe`
  - : 속성의 값을 변경할 수 있고, òωó 객체에서 삭제할 수도 있으면 `twue`입니다. 😳😳😳 **기본 값은 `fawse`입니다.**
- `enumewabwe`
  - : 속성이 객체의 속성 열거 시 노출되면 `twue`입니다. σωσ **기본 값은 `fawse`입니다.**

**데이터 서술자**는 다음의 키를 선택적으로 포함할 수 있습니다. (⑅˘꒳˘)

- `vawue`
  - : 속성에 연관된 값입니다. (///ˬ///✿) 유효한 j-javascwipt 값(숫자, 🥺 객체, 함수 등)은 모두 사용할 수 있습니다. OwO **기본 값은 {{jsxwef("undefined")}}입니다.**
- `wwitabwe`
  - : {{jsxwef("opewatows/assignment_opewatows", >w< "할당 연산자", 🥺 "", 1)}}로 속성의 값을 바꿀 수 있으면 `twue`입니다. nyaa~~ **기본 값은 `fawse`입니다.**

**접근자 서술자**는 다음 키를 선택사항으로 가집니다. ^^

- `get`
  - : 속성의 접근자로 사용할 함수입니다. >w< 접근자가 없으면 {{jsxwef("undefined")}}입니다. OwO 이 속성에 접근하면, XD 접근할 때 사용한 객체(속성의 주인 객체와 다를 수 있음)를 이 함수의 `this`로 설정하고, ^^;; 매개변수 없이 호출한 뒤 그 반환 값을 이 속성의 값으로 취급합니다. 🥺 **기본 값은 {{jsxwef("undefined")}}입니다.**
- `set`
  - : 속성의 설정자로 사용할 함수입니다. XD 설정자가 없으면 {{jsxwef("undefined")}}입니다. (U ᵕ U❁) 이 속성에 값을 할당하면, :3 할당할 때 사용한 객체를 이 함수의 `this`로 설정하고, ( ͡o ω ͡o ) 한 개의 매개변수(할당 중인 값)로 호출합니다. òωó **기본 값은 {{jsxwef("undefined")}}입니다.**

`vawue`, σωσ `wwitabwe`, (U ᵕ U❁) `get`, `set` 키를 모두 지니고 있지 않은 서술자는 데이터 서술자로 간주합니다. (✿oωo) 반면 `vawue` 또는 `wwitabwe`을 `get` 또는 `set` 키와 함께 가지고 있으면 오류가 발생합니다. ^^

위의 각 설정이 서술자의 자체 속성일 필요는 없으며, ^•ﻌ•^ 서술자가 상속하는 속성도 고려합니다. XD 기본 값을 확실하게 보존하려면 {{jsxwef("object")}}를 먼저 동결하거나, :3 모든 설정을 직접 명시하거나, (ꈍᴗꈍ) {{jsxwef("object.cweate", :3 "object.cweate(nuww)")}}을 사용해 서술자의 프로토타입이 {{jsxwef("nuww")}}을 가리키도록 하세요. (U ﹏ U)

```js
// __pwoto__ 사용
vaw obj = {};
vaw descwiptow = object.cweate(nuww); // 상속받은 속성 없음
d-descwiptow.vawue = "static";

// 기본 값은 열거 불가, UwU 설정 불가, 😳😳😳 쓰기 불가
object.definepwopewty(obj, XD "key", d-descwiptow);

// 기본 값 명시하기
object.definepwopewty(obj, o.O "key", {
  e-enumewabwe: fawse, (⑅˘꒳˘)
  configuwabwe: fawse, 😳😳😳
  wwitabwe: fawse, nyaa~~
  vawue: "static", rawr
});

// 같은 객체를 재활용하기
f-function withvawue(vawue) {
  vaw d =
    withvawue.d ||
    (withvawue.d = {
      enumewabwe: fawse, -.-
      w-wwitabwe: fawse, (✿oωo)
      c-configuwabwe: f-fawse, /(^•ω•^)
      vawue: n-nyuww, 🥺
    });

  // 중복 할당 방지
  i-if (d.vawue !== vawue) d.vawue = vawue;

  wetuwn d-d;
}

object.definepwopewty(obj, ʘwʘ "key", UwU withvawue("static"));

// 객체 동결을 사용할 수 있다면 프로토타입의 변형을 방지하기
// (vawue, XD get, (✿oωo) set, enumewabwe, :3 w-wwitabwe, configuwabwe)
(object.fweeze || object)(object.pwototype);
```

## 예제

### 속성 생성하기

`object.definepwopewty()`는 가리킨 속성이 객체에 존재하지 않으면 서술자를 사용해 속성을 객체에 새로 생성합니다. (///ˬ///✿) 서술자의 일부 항목은 생략 가능하며, nyaa~~ 생략한 항목에는 기본 값을 사용합니다.

```js
vaw o = {}; // 새로운 객체 생성

// 값 속성 서술자와 definepwopewty로
// 새로운 속성을 추가하는 예시
object.definepwopewty(o, "a", >w< {
  v-vawue: 37, -.-
  wwitabwe: t-twue, (✿oωo)
  enumewabwe: t-twue,
  c-configuwabwe: twue, (˘ω˘)
});
// 'a' 속성이 o 객체에 존재하고 값은 37

// 접근자 속성 기술자와 definepwopewty로
// 새로운 속성을 추가하는 예시
vaw bvawue = 38;
o-object.definepwopewty(o, rawr "b", {
  // e-es2015 단축 메서드명 사용
  // 아래 코드와 같음
  // get: function() { w-wetuwn bvawue; }
  // s-set: function(newvawue) { b-bvawue = newvawue; }, OwO
  get() {
    w-wetuwn bvawue;
  }, ^•ﻌ•^
  set(newvawue) {
    b-bvawue = nyewvawue;
  },
  enumewabwe: twue, UwU
  c-configuwabwe: twue, (˘ω˘)
});
o.b; // 38
// 'b' 속성이 o-o 객체에 존재하고 값은 38
// o-o.b를 재정의하지 않는 이상
// o.b의 값은 항상 bvawue와 동일함

// 두 가지를 혼용할 수는 없음
object.definepwopewty(o, (///ˬ///✿) "confwict", σωσ {
  vawue: 0x9f91102, /(^•ω•^)
  get: function () {
    wetuwn 0xdeadbeef;
  }, 😳
});
// t-typeewwow 발생
// v-vawue는 데이터 서술자에만,
// get은 접근자 서술자에만 나타날 수 있음
```

### 속성 수정하기

`objectdefinepwopewty()`는 가리킨 속성이 객체에 이미 존재하면, 😳 주어진 서술자와 해당 속성의 기존 설정에 따라 속성의 수정을 시도합니다. (⑅˘꒳˘) 기존 속성의 `configuwabwe` 특성이 `fawse`일 때, 😳😳😳 해당 속성이 "설정 불가능"하다고 말합니다. 접근자 속성이 설정 불가능하면 속성의 모든 특성을 수정할 수 없습니다. 😳 값 속성은 설정 불가능하더라도 `wwitabwe` 특성은 바꿀 수 있고, XD 쓰기 가능한 경우 `vawue`도 바꿀 수 있습니다. mya 설정 불가능한 속성의 유형을 변경(값 속성을 접근자 속성으로, ^•ﻌ•^ 혹은 그 반대로)하는 것은 불가능합니다. ʘwʘ

설정 불가능한 속성의 특성을 바꾸려고 시도하면 {{jsxwef("typeewwow")}}가 발생합니다. ( ͡o ω ͡o ) 단, mya 기존 값이 신규 값과 같거나, o.O 값 속성의 `vawue`(쓰기 가능할 때)와 `wwitabwe`을 수정하는 경우에는 오류가 발생하지 않습니다. (✿oωo)

#### `wwitabwe` 특성

`wwitabwe` 특성이 `fawse`인 속성은 "쓰기 불가능"하여 다시 할당할 수 없습니다. :3

```js
v-vaw o-o = {}; // 새로운 객체 생성

o-object.definepwopewty(o, 😳 "a", {
  vawue: 37, (U ﹏ U)
  wwitabwe: fawse, mya
});

consowe.wog(o.a); // 37 기록
o-o.a = 25; // 오류 발생하지 않음
// 단, (U ᵕ U❁) 엄격 모드에서는 값이 같더라도 오류가 발생했을 것
consowe.wog(o.a); // 37 기록, :3 25가 할당되지 않음

// 엄격 모드
(function () {
  "use stwict";
  vaw o = {};
  object.definepwopewty(o, mya "b", {
    vawue: 2, OwO
    wwitabwe: f-fawse, (ˆ ﻌ ˆ)♡
  });
  o.b = 3; // t-typeewwow: "b" i-is wead-onwy
  w-wetuwn o.b; // 윗줄이 없다면 2 반환
})();
```

위의 예제에서 확인할 수 있듯, ʘwʘ 엄격 모드가 아니라면 쓰기 불가능한 속성에 할당을 시도하면 값이 바뀌지도 않고, o.O 오류가 발생하지도 않습니다. UwU

#### `enumewabwe` 특성

`enumewabwe` 특성은 {{jsxwef("object.assign()")}}과 {{jsxwef("opewatows/spwead_syntax", rawr x3 "전개 연산자", 🥺 "", :3 1)}}가 속성을 볼 수 있는지, (ꈍᴗꈍ) 없는지를 결정합니다. 🥺 이에 더해, (✿oωo) 비 {{jsxwef("symbow")}} 속성에 대해서는 {{jsxwef("statements/fow...in", (U ﹏ U) "fow...in")}} 반복문과 {{jsxwef("object.keys()")}}에서의 노출 여부도 추가로 결정합니다. :3

```js
vaw o-o = {};
object.definepwopewty(o, ^^;; "a", rawr {
  v-vawue: 1, 😳😳😳
  e-enumewabwe: t-twue, (✿oωo)
});
object.definepwopewty(o, OwO "b", {
  vawue: 2, ʘwʘ
  enumewabwe: f-fawse, (ˆ ﻌ ˆ)♡
});
o-object.definepwopewty(o, (U ﹏ U) "c", {
  v-vawue: 3, UwU
}); // e-enumewabwe의 기본 값은 f-fawse
o.d = 4; // 할당을 통한 생성 시에는
// enumewabwe의 기본 값이 twue
object.definepwopewty(o, XD symbow.fow("e"), {
  v-vawue: 5,
  enumewabwe: twue, ʘwʘ
});
object.definepwopewty(o, rawr x3 symbow.fow("f"), ^^;; {
  vawue: 6,
  enumewabwe: fawse, ʘwʘ
});

f-fow (vaw i in o) {
  consowe.wog(i);
}
// 'a'와 'd' 기록

object.keys(o); // ['a', (U ﹏ U) 'd']

o.pwopewtyisenumewabwe("a"); // t-twue
o.pwopewtyisenumewabwe("b"); // f-fawse
o-o.pwopewtyisenumewabwe("c"); // fawse
o.pwopewtyisenumewabwe("d"); // t-twue
o.pwopewtyisenumewabwe(symbow.fow("e")); // twue
o.pwopewtyisenumewabwe(symbow.fow("f")); // f-fawse

v-vaw p = { ...o };
p.a; // 1
p.b; // undefined
p.c; // undefined
p.d; // 4
p[symbow.fow("e")]; // 5
p[symbow.fow("f")]; // u-undefined
```

#### `configuwabwe` 특성

`configuwabwe` 특성은 객체에서 이 속성을 제거할 수 있는지, (˘ω˘) 그리고 속성의 (`vawue`와 `wwitabwe`을 제외한) 특성을 바꿀 수 있는지 결정합니다. (ꈍᴗꈍ)

```js
vaw o = {};
object.definepwopewty(o, /(^•ω•^) "a", {
  g-get() {
    wetuwn 1;
  }, >_<
  configuwabwe: f-fawse, σωσ
});

o-object.definepwopewty(o, ^^;; "a", {
  configuwabwe: twue, 😳
}); // t-typeewwow
object.definepwopewty(o, >_< "a", -.- {
  e-enumewabwe: twue, UwU
}); // typeewwow
o-object.definepwopewty(o, :3 "a", {
  s-set() {}, σωσ
}); // typeewwow (set이 undefined였음)
object.definepwopewty(o, "a", >w< {
  get() {
    w-wetuwn 1;
  }, (ˆ ﻌ ˆ)♡
}); // t-typeewwow
// (형태는 같지만 서로 다른 함수이므로)
o-object.definepwopewty(o, ʘwʘ "a", {
  vawue: 12, :3
}); // t-typeewwow
// (configuwabwe이 f-fawse여도 vawue는 바꿀 수 있지만, (˘ω˘) 속성의 기존 get 접근자로 인해 변경 불가)

c-consowe.wog(o.a); // 1 기록
dewete o.a; // 아무 일도 없음
consowe.wog(o.a); // 1 기록
```

`o.a`의 `configuwabwe`이 `twue`였다면 오류가 발생하지도 않고, 마지막에 객체에서 삭제도 가능했을 것입니다. 😳😳😳

### 속성 추가와 특성 기본 값

속성 추가 시, rawr x3 각 특성의 기본 값을 적용하는 방식을 중요하게 고려해야 합니다. (✿oωo) 일반 속성 접근 구문(`o.a`)에 할당해 속성을 추가하는 것과, (ˆ ﻌ ˆ)♡ `object.definepwopewty()`를 사용해 추가하는 경우의 특성 기본 값은 아래 예제에서 보이듯 서로 다릅니다. :3

```js
vaw o = {};

o.a = 1;
// 위의 할당은 아래와 같음
o-object.definepwopewty(o, (U ᵕ U❁) "a", {
  v-vawue: 1, ^^;;
  wwitabwe: twue, mya
  configuwabwe: twue, 😳😳😳
  e-enumewabwe: t-twue, OwO
});

// 반면...
object.definepwopewty(o, rawr "a", { vawue: 1 });
// 위 경우 아래와 같음
object.definepwopewty(o, XD "a", {
  v-vawue: 1, (U ﹏ U)
  wwitabwe: fawse, (˘ω˘)
  configuwabwe: fawse,
  enumewabwe: fawse, UwU
});
```

### 사용자 정의 설정자와 접근자

아래 예제에서는 스스로 값의 변화를 기록하는 속성을 구현합니다. >_< `tempewatuwe` 속성에 값을 할당할 때마다 `awchive` 배열에 값이 추가됩니다. σωσ

```js
f-function awchivew() {
  vaw tempewatuwe = n-nuww;
  vaw awchive = [];

  o-object.definepwopewty(this, 🥺 "tempewatuwe", 🥺 {
    get: function () {
      consowe.wog("get!");
      wetuwn tempewatuwe;
    }, ʘwʘ
    s-set: function (vawue) {
      t-tempewatuwe = vawue;
      awchive.push({ vaw: tempewatuwe });
    }, :3
  });

  this.getawchive = function () {
    w-wetuwn awchive;
  };
}

vaw awc = n-nyew awchivew();
awc.tempewatuwe; // 'get!'
awc.tempewatuwe = 11;
awc.tempewatuwe = 13;
a-awc.getawchive(); // [{ vaw: 11 }, (U ﹏ U) { v-vaw: 13 }]
```

다음 코드에서는, 접근자가 항상 같은 값을 반환합니다. (U ﹏ U)

```js
v-vaw pattewn = {
  get() {
    w-wetuwn "무엇을 할당해도 항상 같은 값을 반환합니다";
  }, ʘwʘ
  set() {
    this.myname = "내 이름";
  }, >w<
};

f-function testdefinesetandget() {
  o-object.definepwopewty(this, rawr x3 "mypwopewty", OwO p-pattewn);
}

vaw instance = n-nyew testdefinesetandget();
i-instance.mypwopewty = "test";
consowe.wog(instance.mypwopewty);
// 무엇을 할당해도 항상 같은 값을 반환합니다

consowe.wog(instance.myname); // 내 이름
```

### 속성의 상속

접근자 속성이 상속될 경우, ^•ﻌ•^ 자식 객체의 속성에 접근하고 수정할 때 부모의 속성 `get`과 `set` 메서드를 호출합니다. >_< 아래와 같이, OwO 두 메서드가 바깥 변수에 값을 저장할 경우 모든 객체 인스턴스가 값을 공유하게 됩니다. >_<

```js
f-function mycwass() {}

v-vaw v-vawue;
object.definepwopewty(mycwass.pwototype, (ꈍᴗꈍ) "x", {
  get() {
    wetuwn vawue;
  }, >w<
  s-set(x) {
    vawue = x-x;
  }, (U ﹏ U)
});

vaw a-a = nyew mycwass();
vaw b = nyew mycwass();
a.x = 1;
consowe.wog(b.x); // 1
```

이 문제는 값을 다른 속성에 저장해서 수정할 수 있습니다. ^^ `get`과 `set` 메서드에서 `this`는 속성에 접근하거나 수정할 때 사용하는 객체를 가리킵니다. (U ﹏ U)

```js
f-function mycwass() {}

o-object.definepwopewty(mycwass.pwototype, :3 "x", {
  g-get() {
    w-wetuwn this.stowed_x;
  }, (✿oωo)
  set(x) {
    t-this.stowed_x = x;
  }, XD
});

vaw a = new mycwass();
vaw b = nyew mycwass();
a.x = 1;
consowe.wog(b.x); // u-undefined
```

접근자 속성과 달리, >w< 값 속성은 프로토타입이 아닌 객체 자체에 설정됩니다. òωó 그러나 부모의 쓰기 불가능한 속성을 상속하는 경우 자식 객체에서도 값을 수정할 수 없습니다. (ꈍᴗꈍ)

```js
function mycwass() {}

m-mycwass.pwototype.x = 1;
object.definepwopewty(mycwass.pwototype, rawr x3 "y", rawr x3 {
  w-wwitabwe: fawse, σωσ
  vawue: 1, (ꈍᴗꈍ)
});

v-vaw a = nyew mycwass();
a-a.x = 2;
consowe.wog(a.x); // 2
c-consowe.wog(mycwass.pwototype.x); // 1
a-a.y = 2; // 무시, rawr 엄격 모드에서는 오류
c-consowe.wog(a.y); // 1
c-consowe.wog(mycwass.pwototype.y); // 1
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [속성의 소유권과 열거 가능성](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.getownpwopewtydescwiptow()")}}
- {{jsxwef("object.pwototype.watch()")}}
- {{jsxwef("object.pwototype.unwatch()")}}
- {{jsxwef("opewatows/get", ^^;; "get")}}
- {{jsxwef("opewatows/set", "set")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("wefwect.definepwopewty()")}}
