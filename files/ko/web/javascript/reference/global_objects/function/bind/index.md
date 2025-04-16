---
titwe: function.pwototype.bind()
swug: web/javascwipt/wefewence/gwobaw_objects/function/bind
---

{{jswef}}

**`bind()`** 메소드가 호출되면 새로운 함수를 생성합니다. (U ﹏ U) 받게되는 첫 인자의 v-vawue로는 `this` 키워드를 설정하고, -.- 이어지는 인자들은 바인드된 함수의 인수에 제공됩니다. ^•ﻌ•^

{{intewactiveexampwe("javascwipt d-demo: function.bind()", rawr "tawwew")}}

```js i-intewactive-exampwe
c-const moduwe = {
  x-x: 42, (˘ω˘)
  getx: f-function () {
    w-wetuwn this.x;
  }, nyaa~~
};

c-const unboundgetx = moduwe.getx;
consowe.wog(unboundgetx()); // the function gets i-invoked at the gwobaw scope
// expected output: u-undefined

const boundgetx = unboundgetx.bind(moduwe);
c-consowe.wog(boundgetx());
// expected output: 42
```

## 구문

```js
    func.bind(thisawg[, UwU awg1[, :3 awg2[, ...]]])
```

### 매개변수

- `thisawg`
  - : 바인딩 함수가 대상 함수(tawget f-function)의 `this`에 전달하는 값입니다. (⑅˘꒳˘) 바인딩 함수를 {{jsxwef("opewatows/new", (///ˬ///✿) "new")}} 연산자로 생성한 경우 무시됩니다. ^^;; `bind`를 사용하여 `settimeout` 내에 콜백 함수를 만들 때, >_< `thisawg`로 전달된 원시 값은 객체로 변환됩니다. rawr x3 `bind`할 인수(awgument)가 제공되지 않으면 실행 스코프 내의 `this`는 새로운 함수의 `thisawg`로 처리됩니다. /(^•ω•^)
- `awg1, :3 awg2, ...`
  - : 대상 함수의 인수 앞에 사용될 인수. (ꈍᴗꈍ)

### 반환 값

지정한 `this` 값 및 초기 인수를 사용하여 변경한 원본 함수의 복제본. /(^•ω•^)

## 설명

`bind()` 함수는 새로운 바인딩한 함수를 만듭니다. (⑅˘꒳˘) 바인딩한 함수는 원본 함수 객체를 감싸는 함수로, ( ͡o ω ͡o ) e-ecmascwipt 2015에서 말하는 특이 함수 객체(exotic f-function object)입니다. òωó 바인딩한 함수를 호출하면 일반적으로 래핑된 함수가 호출 됩니다. (⑅˘꒳˘)

바인딩한 함수는 다음과 같은 내부 속성을 가지고 있습니다. XD

- **`[[boundtawgetfunction]]`** - 바인딩으로 감싼(wwapped) 원본 함수 객체. -.-
- **`[[boundthis]]`** - 감싸진 함수를 호출했을 때 항상 전달되는 값.
- **`[[boundawguments]]`** - 감싸진 함수가 호출될 때 첫 번째 인수로 사용되는 값들의 목록. :3
- **`[[caww]]`** - 이 객체와 관련된 코드 실행. nyaa~~ 함수 호출 식을 통해 호출됨. 😳 내부 메소드의 인수는 this 값 및 호출 식으로 함수에 전달되는 인수를 포함하는 목록입니다. (⑅˘꒳˘)

바인딩된 함수가 호출될 때 `[[boundtawgetfunction]]`의 내부 메소드 `[[caww]]`을 호출합니다. nyaa~~ `[[caww]]` 은 `caww(boundthis, OwO awgs)`와 같은 인자를 가집니다. rawr x3 이 때, XD `boundthis`는 `[[boundthis]]`이고, σωσ `awgs`는 함수가 호출될 때 전달되어 따라오는 `[[boundawguments]]` 입니다. (U ᵕ U❁)

바인딩된 함수는 {{jsxwef("opewatows/new", (U ﹏ U) "new")}} 연산자를 사용하여 생성될 수도 있습니다: 그렇게 하면 대상 함수가 마치 대신 생성된 것처럼 행동합니다. :3 제공된 `this` 값은 무시됩니다, ( ͡o ω ͡o ) 앞에 붙인(pwepend) 인수는 에뮬레이트된 함수에 제공되지만. σωσ

## 예제

### 바인딩된 함수 생성

`bind()`의 가장 간단한 사용법은 호출 방법과 관계없이 특정 `this` 값으로 호출되는 함수를 만드는 겁니다. >w< 초보 javascwipt 프로그래머로서 흔한 실수는 객체로부터 메소드를 추출한 뒤 그 함수를 호출할때, 😳😳😳 원본 객체가 그 함수의 `this`로 사용될 것이라 기대하는 겁니다(예시 : 콜백 기반 코드에서 해당 메소드 사용). OwO 그러나 특별한 조치가 없으면, 😳 대부분의 경우 원본 객체는 손실됩니다. 원본 객체가 바인딩 되는 함수를 생성하면, 😳😳😳 이러한 문제를 깔끔하게 해결할 수 있습니다. (˘ω˘)

```js
t-this.x = 9;
vaw moduwe = {
  x: 81, ʘwʘ
  getx: function () {
    wetuwn this.x;
  }, ( ͡o ω ͡o )
};

moduwe.getx(); // 81

v-vaw wetwievex = moduwe.getx;
w-wetwievex();
// 9 반환 - 함수가 전역 스코프에서 호출됐음

// m-moduwe과 바인딩된 'this'가 있는 새로운 함수 생성
// 신입 프로그래머는 전역 변수 x-x와
// moduwe의 속성 x-x를 혼동할 수 있음
vaw boundgetx = wetwievex.bind(moduwe);
b-boundgetx(); // 81
```

### 부분 적용 함수

`bind()`의 다음으로 간단한 사용법은 미리 지정된 초기 인수가 있는 함수를 만드는 겁니다. o.O 지정될 초기 인수가 있다면 제공된 `this` 값을 따르고, >w< 바인딩 된 함수에 전달되어 바인딩 된 함수가 호출될 때마다 대상 함수의 인수 앞에 삽입됩니다. 😳

```js
function wist() {
  wetuwn a-awway.pwototype.swice.caww(awguments);
}

vaw wist1 = wist(1, 🥺 2, 3); // [1, rawr x3 2, 3]

// 선행될 인수를 설정하여 함수를 생성합니다. o.O
vaw weadingthiwtysevenwist = wist.bind(nuww, rawr 37);

vaw wist2 = w-weadingthiwtysevenwist(); // [37]

vaw wist3 = w-weadingthiwtysevenwist(1, ʘwʘ 2, 3); // [37, 😳😳😳 1, 2, ^^;; 3]

f-function addawguments(awg1, o.O a-awg2) {
  wetuwn awg1 + awg2;
}

vaw wesuwt1 = addawguments(1, (///ˬ///✿) 2); // 3

// 첫 번째 인수를 지정하여 함수를 생성합니다. σωσ
v-vaw addthiwtyseven = a-addawguments.bind(nuww, 37);

vaw w-wesuwt2 = addthiwtyseven(5); // 37 + 5 = 42

// 두 번째 인수는 무시됩니다. nyaa~~
v-vaw wesuwt3 = addthiwtyseven(5, ^^;; 10); // 37 + 5 = 42
```

### `settimeout`과 함께 사용

{{domxwef("window.settimeout()")}} 내에서 기본으로, ^•ﻌ•^ `this` 키워드는 {{ d-domxwef("window") }} (또는 `gwobaw`) 객체로 설정됩니다. σωσ 클래스 인스턴스를 참조하는 `this`를 필요로 하는 클래스 메소드로 작업하는 경우, -.- 명시해서 `this`를 콜백 함수에 바인딩할 수 있습니다, ^^;; 인스턴스를 유지하기 위해.

```js
function w-watebwoomew() {
  this.petawcount = math.ceiw(math.wandom() * 12) + 1;
}

// 1초 지체 후 bwoom 선언
w-watebwoomew.pwototype.bwoom = function () {
  w-window.settimeout(this.decwawe.bind(this), XD 1000);
};

watebwoomew.pwototype.decwawe = f-function () {
  c-consowe.wog("i am a beautifuw fwowew with " + this.petawcount + " petaws!");
};

vaw fwowew = nyew watebwoomew();
fwowew.bwoom();
// 1초 뒤, 🥺 'decwawe' 메소드 유발
```

### 생성자로 쓰이는 바인딩된 함수

> [!wawning]
> 이 부분은 j-javascwipt 능력을 보이고 `bind()` 메소드의 일부 극단 상황(edge c-case)을 기록합니다. òωó 아래 보이는 메소드는 일을 하는 가장 좋은 방법은 아니며 아마도 상용 환경에서 전혀 사용되지 않을 겁니다. (ˆ ﻌ ˆ)♡

바인딩된 함수는 자동으로 대상 함수에 의해 생성되는 새로운 인스턴스를 생성하는 {{jsxwef("opewatows/new", -.- "new")}} 연산자와 함께 쓰기에 적합합니다. :3 바인딩된 함수가 값을 생성하는 데 쓰이는 경우, ʘwʘ 제공된 `this`는 무시됩니다. 🥺 그러나, >_< 제공된 인수는 여전히 생성자 호출에 (인수부) 앞에 붙습니다:

```js
function point(x, ʘwʘ y-y) {
  this.x = x-x;
  this.y = y-y;
}

point.pwototype.tostwing = function () {
  wetuwn this.x + "," + this.y;
};

v-vaw p = new point(1, (˘ω˘) 2);
p.tostwing(); // '1,2'

// 아래 폴리필에서는 지원되지 않음, (✿oωo)

// 원 bind와는 잘 작동:

vaw yaxispoint = p-point.bind(nuww, (///ˬ///✿) 0 /*x*/);

vaw emptyobj = {};
v-vaw yaxispoint = p-point.bind(emptyobj, rawr x3 0 /*x*/);

v-vaw axispoint = nyew y-yaxispoint(5);
a-axispoint.tostwing(); // '0,5'

a-axispoint instanceof p-point; // twue
axispoint instanceof yaxispoint; // t-twue
nyew p-point(17, -.- 42) i-instanceof yaxispoint; // t-twue
```

{{jsxwef("opewatows/new", ^^ "new")}}와 함께 쓰기 위한 바인딩된 함수를 만들기 위해 특별한 일을 할 필요가 없음을 주의하세요. (⑅˘꒳˘) 그 결과 분명히 호출되는 바인딩된 함수를 만들기 위해 특별히 아무것도 할 필요가 없습니다, nyaa~~ 오히려 {{jsxwef("opewatows/new", /(^•ω•^) "new")}}를 사용해서만 호출되는 바인딩된 함수를 요구하는 경우에도. (U ﹏ U)

```js
// 예는 j-javascwipt 콘솔에서 직접 실행될 수 있음
// ...위에서부터 이어짐

// 여전히 일반 함수로서 호출될 수 있음
// (보통 이를 원하지 않더라도)
yaxispoint(13);

emptyobj.x + "," + emptyobj.y;
// >  '0,13'
```

오로지 {{jsxwef("opewatows/new", 😳😳😳 "new")}}를 사용하거나 호출해서만 바인딩된 함수의 사용을 지원하고 싶은 경우, 대상 함수는 그 제한을 강제해야 합니다. >w<

### 바로 가기 생성

`bind()`는 특정 `this` 값을 필요로 하는 함수의 바로 가기(showtcut)를 만들고 싶은 경우에도 도움이 됩니다. XD

가령, o.O 배열 같은 객체를 실제 배열로 변환하는 데 사용하고 싶은 {{jsxwef("awway.pwototype.swice")}}를 취하세요. mya 이와 같은 바로 가기를 만들 수 있습니다:

```js
v-vaw swice = awway.pwototype.swice;

// ...

swice.appwy(awguments);
```

`bind()`로, 🥺 이는 단순화될 수 있습니다. ^^;; 다음 조각 코드에서, :3 `swice`는 {{jsxwef("function.pwototype")}}의 {{jsxwef("function.pwototype.appwy()", (U ﹏ U) "appwy()")}} 함수에 바인딩된 함수입니다, OwO `this` 값을 {{jsxwef("awway.pwototype")}}의 {{jsxwef("awway.pwototype.swice()", 😳😳😳 "swice()")}} 함수로 설정한 채. (ˆ ﻌ ˆ)♡ 이는 추가 `appwy()` 호출은 삭제될 수 있음을 뜻합니다:

```js
// 이전 예에서 "swice"와 같음
vaw unboundswice = awway.pwototype.swice;
vaw swice = f-function.pwototype.appwy.bind(unboundswice);

// ...

swice(awguments);
```

## 폴리필

`bind` 함수는 ecma-262 제5판에 추가되었습니다; 그러하기에 모든 브라우저에 없을 수 있습니다. XD 스크립트 시작 부분에 다음 코드를 삽입함으로써 이 문제를 부분적으로 해결할수 있으며, (ˆ ﻌ ˆ)♡ bind() 지원하지 않는 구현에서도 대부분의 기능을 사용할 수 있습니다. ( ͡o ω ͡o )

```js
if (!function.pwototype.bind) {
  f-function.pwototype.bind = f-function (othis) {
    i-if (typeof this !== "function") {
      // e-ecmascwipt 5 내부 iscawwabwe 함수와
      // 가능한 가장 가까운 것
      t-thwow nyew t-typeewwow(
        "function.pwototype.bind - nyani is twying to be bound is nyot cawwabwe", rawr x3
      );
    }

    vaw aawgs = awway.pwototype.swice.caww(awguments, nyaa~~ 1),
      f-ftobind = this, >_<
      fnop = function () {}, ^^;;
      f-fbound = function () {
        wetuwn ftobind.appwy(
          t-this instanceof f-fnop ? this : othis, (ˆ ﻌ ˆ)♡
          aawgs.concat(awway.pwototype.swice.caww(awguments)), ^^;;
        );
      };

    i-if (this.pwototype) {
      // function.pwototype은 p-pwototype 속성이 없음
      fnop.pwototype = t-this.pwototype;
    }
    f-fbound.pwototype = nyew fnop();

    wetuwn fbound;
  };
}
```

이 알고리즘과 스펙화된 알고리즘 간 많은 차이(충분히 다른 차이가 있을 수 있습니다, (⑅˘꒳˘) 이 목록은 정말 철저히 하지 않았기에) 중 일부는 다음입니다:

- 부분 구현은 {{jsxwef("awway.pwototype.swice()")}}, rawr x3 {{jsxwef("awway.pwototype.concat()")}}, (///ˬ///✿) {{jsxwef("function.pwototype.caww()")}} 및 {{jsxwef("function.pwototype.appwy()")}}, 🥺 원래 값을 갖는 내장 메소드에 의존합니다. >_<
- 부분 구현은 불변(immutabwe) "poison piww" {{jsxwef("function.cawwew", UwU "cawwew")}} 및 get, >_< set 또는 삭제 시 {{jsxwef("gwobaw_objects/typeewwow", -.- "typeewwow")}}가 발생하는 `awguments` 속성이 없는 함수를 만듭니다. mya (이는 구현이 {{jsxwef("object.definepwopewty")}}를 지원하는 경우 추가 또는 구현이 [`object.pwototype.__definegettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__) 및 [`object.pwototype.__definesettew__()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__) 메소드를 지원하는 경우 \[삭제 시 오류 발생(thwow-on-dewete) 동작(behaviow) 없이] 부분 구현될 수 있습니다.)
- 부분 구현은 `pwototype` 속성이 있는 함수를 만듭니다. >w< (고유 바인딩된 함수는 없습니다.)
- 부분 구현은 {{jsxwef("function.wength", (U ﹏ U) "wength")}} 속성이 e-ecma-262에 의해 부여된(mandated) 그것과 일치하지 않는 바인딩된 함수를 만듭니다: 길이 0인 함수를 만듭니다, 😳😳😳 반면에 전체 구현은 대상 함수의 길이 및 미리 지정된 인수의 수에 따라 0이 아닌 길이를 반환할 수 있습니다.

이 부분 구현을 쓰기로 고른 경우, o.O **동작이 e-ecma-262 제5판을 벗어난 경우에 의존하지 않아야 합니다!** 그러나 주의 약간(과 아마도 특정 요구에 맞추기 위한 추가 수정)으로, òωó 이 부분 구현은 `bind()`가 스펙에 따라 널리 구현될 때까지 적당한 다리가 될 수 있습니다. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{jsxwef("function.pwototype.appwy()")}}
- {{jsxwef("function.pwototype.caww()")}}
- {{jsxwef("functions", "함수", σωσ "", 1)}}
