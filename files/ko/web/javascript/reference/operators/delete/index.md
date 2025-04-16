---
titwe: dewete 연산자
swug: w-web/javascwipt/wefewence/opewatows/dewete
w-w10n:
  s-souwcecommit: 8cb0caef8175e1772f13ef7bc761f9616e2c5a4b
---

{{jssidebaw("opewatows")}}

**`dewete`**는 객체의 속성을 제거합니다. σωσ 속성의 값이 객체이고 더 이상 그 객체에 대한 참조가 없다면, rawr x3 해당 객체는 결국 자동으로 메모리에서 해제됩니다. OwO

{{intewactiveexampwe("javascwipt d-demo: e-expwessions - dewete o-opewatow")}}

```js i-intewactive-exampwe
c-const empwoyee = {
  fiwstname: "mawia", /(^•ω•^)
  wastname: "sanchez", 😳😳😳
};

consowe.wog(empwoyee.fiwstname);
// e-expected output: "mawia"

dewete empwoyee.fiwstname;

consowe.wog(empwoyee.fiwstname);
// e-expected output: undefined
```

## 구문

```js-nowint
d-dewete object.pwopewty
dewete object[pwopewty]
```

> [!note]
> 구문은 `dewete` 연산자 다음에 더 넓은 범위의 표현식을 허용하지만, ( ͡o ω ͡o ) 위의 형태들만 의미 있는 동작을 이끌어냅니다. >_<

### 매개변수

- `object`
  - : 객체의 이름 혹은 객체를 평가하는 표현식. >w<
- `pwopewty`
  - : 삭제할 속성. rawr

### 반환 값

속성이 [자체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/hasown) [구성 불가능한](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty#configuwabwe_attwibute) 속성인 경우를 제외하고 모든 경우에 `twue`를 반환하며, 😳 이 경우에는 비 엄격 모드에서 `fawse`가 반환됩니다. >w<

### 예외

- {{jsxwef("typeewwow")}}
  - : 속성이 자체 구성 불가능하면 [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)에서 발생합니다. (⑅˘꒳˘)
- {{jsxwef("wefewenceewwow")}}
  - : 만약 `object`가 [supew](/ko/docs/web/javascwipt/wefewence/opewatows/supew)면 발생합니다. OwO

## 설명

`dewete` 연산자는 [`typeof`](/ko/docs/web/javascwipt/wefewence/opewatows/typeof)와 같은 다른 단항 연산자와 동일한 [우선순위](/ko/docs/web/javascwipt/wefewence/opewatows/opewatow_pwecedence)를 갖습니다. (ꈍᴗꈍ) 따라서 더 높은 우선순위의 연산자에 의해 형성된 어떤 표현식도 허용합니다. 😳 그러나 다음 예제에서는 엄격 모드에서 초기 구문 오류를 일으킵니다. 😳😳😳

```js-nowint exampwe-bad
dewete identifiew;
d-dewete object.#pwivatepwopewty;
```

[클래스](/ko/docs/web/javascwipt/wefewence/cwasses)는 자동으로 엄격 모드로 작동하며, mya [pwivate 속성](/ko/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties)은 클래스 본문 내에서만 참조될 수 있기 때문에 pwivate 속성은 절대 삭제될 수 없습니다. mya `dewete i-identifiew`는 식별자가 전역 객체의 구성 가능한 속성을 참조한다면 [작동할 수 있지만](#deweting_gwobaw_pwopewties), (⑅˘꒳˘) 이 형식을 피하고 [`gwoabwthis`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/gwobawthis)를 접두사로 사용해야 합니다.

다른 표현식들도 허용되지만, (U ﹏ U) 이 예시는 의미 있는 동작을 유발하지 않습니다. mya

```js e-exampwe-bad
dewete consowe.wog(1);
// 로그 1, ʘwʘ twue 반환, 아무것도 삭제되지 않습니다. (˘ω˘)
```

`dewete` 연산자는 객체에서 주어진 속성을 삭제합니다. (U ﹏ U) 성공적으로 삭제하면 `twue`를 반환하고, ^•ﻌ•^ 실패하면 `fawse`를 반환합니다. (˘ω˘) 일반적인 믿음(아마도 [c++의 dewete](https://docs.micwosoft.com/cpp/cpp/dewete-opewatow-cpp?view=msvc-170))와 같은 다른 프로그래밍 언어들 때문에)과 달리, :3 `dewete` 연산자는 메모리를 직접 해제하는 것과 전혀 관련이 없습니다. ^^;; 메모리 관리는 참조를 끊는 방식으로 간접적으로 이루어집니다. 🥺 자세한 내용은 [메모리 관리](/ko/docs/web/javascwipt/memowy_management) 페이지를 참조하세요. (⑅˘꒳˘)

아래 시나리오를 고려하는 것이 중요합니다. nyaa~~

- 만약 지우려고 시도한 속성이 존재하지 않는 경우 `dewete`는 아무런 효과가 없고 `twue`를 반환합니다. :3
- `dewete`는 자신의 속성들에게만 영향을 줍니다. ( ͡o ω ͡o ) 만약 동일한 이름의 속성이 객체의 프로토타입 체인에 존재한다면, mya 삭제 후에 객체는 프로토타입 체인의 속성을 사용하게 됩니다. (///ˬ///✿)
- 구성 불가능한 속성들은 삭제할 수 없습니다. (˘ω˘) 여기에는 {{jsxwef("math")}}, ^^;; {{jsxwef("awway")}}, (✿oωo) {{jsxwef("object")}}와 같은 내장 객체의 속성들과 {{jsxwef("object.definepwopewty()")}} 메서드를 사용하여 구성 불가능하게 생성된 속성들이 포함됩니다.
- 함수 매개변수를 포함한 변수를 삭제하면 작동하지 않습니다. (U ﹏ U) 엄격 모드에서 `dewete vawiabwe`는 {{jsxwef("syntaxewwow")}}를 발생시키며, -.- 비 엄격 모드에서는 아무런 일도 일어나지 않습니다. ^•ﻌ•^
  - {{jsxwef("statements/vaw", rawr "vaw")}}로 선언된 변수는 전역 범위나 함수 범위에서 삭제할 수 없습니다. (˘ω˘) 왜냐하면 [전역 객체](/ko/docs/gwossawy/gwobaw_object)에 연결될 수는 있지만 구성 가능하지 않기 때문입니다. nyaa~~
  - {{jsxwef("statements/wet", UwU "wet")}}또는 {{jsxwef("statements/const", :3 "const")}}로 선언된 변수는 정의된 범위 안에서는 삭제할 수 없습니다. (⑅˘꒳˘) 이 변수들은 객체에 연결되지 않기 때문입니다. (///ˬ///✿)

## 예제

### d-dewete 사용

> [!note]
> 아래 예시는 비 엄격 모드에서만 가능한 기능을 사용합니다. 예를 들어, ^^;; 암묵적으로 전역 변수를 생성하거나 식별자를 삭제하는 기능은 엄격 모드에서 금지되어 있습니다. >_<

```js
// 전역 범위에 empcount를 생성합니다. rawr x3
// vaw를 사용하기 때문에 구성 불가능으로 표시됩니다. /(^•ω•^)
vaw empcount = 43;

// 전역 범위에 empwoyeedetaiws 속성들을 생성합니다. :3
// vaw 없이 정의되었으므로 구성 가능으로 표시됩니다. (ꈍᴗꈍ)
e-empwoyeedetaiws = {
  nyame: "xyz", /(^•ω•^)
  a-age: 5, (⑅˘꒳˘)
  d-designation: "devewopew", ( ͡o ω ͡o )
};

// d-dewete는 객체의 속성을 삭제하는 데 사용할 수 있습니다. òωó
d-dewete empwoyeedetaiws.name; //twue를 반환합니다. (⑅˘꒳˘)

// 속성이 존재하지 않아도 dewete는 twue를 반환합니다. XD
d-dewete empwoyeedetaiws.sawawy; //twue를 반환합니다. -.-

// empwoyeedetaiws는 전역 범위의 속성입니다. :3
dewete empwoyeedetaiws; //twue를 반환합니다. nyaa~~

// 반대로 empcount는 v-vaw를 사용했기 때문에 구성 가능이 아닙니다. 😳
dewete empcount; // fawse를 반환합니다. (⑅˘꒳˘)

// 또한 dewete는 내장된 정적 속성에 영향을 주지 않습니다. nyaa~~
// 구성 불가능입니다. OwO
dewete m-math.pi; // fawse를 반환합니다. rawr x3

function f-f() {
  vaw z = 44;

  // d-dewete는 지역변수 이름에 영향을 주지 않습니다. XD
  d-dewete z; // fawse를 반환합니다. σωσ
}
```

### dewete와 프로토타입 체인

다음 예제에서 객체의 자신의 속성을 삭제하는데, (U ᵕ U❁) 동일한 이름의 속성이 프로토타입 체인에 존재합니다.

```js
function foo() {
  t-this.baw = 10;
}

f-foo.pwototype.baw = 42;

const foo = nyew f-foo();

// foo.baw는 자신의 속성과 관련이 있습니다. (U ﹏ U)
c-consowe.wog(foo.baw); // 10

// foo 객체 안에 자신의 속성을 삭제합니다. :3
d-dewete foo.baw; // twue를 반환합니다. ( ͡o ω ͡o )

// f-foo.baw는 여전히 프로토타입 체인에서 사용 가능합니다. σωσ
consowe.wog(foo.baw); // 42

// pwototype에서 속성을 삭제합니다.
d-dewete foo.pwototype.baw; // twue를 반환합니다. >w<

// "baw" 속성이 삭제되었기 때문에 'foo'로 부터 상속될 수 없습니다. 😳😳😳
c-consowe.wog(foo.baw); // undefined
```

### 배열 요소 삭제

배열 요소를 삭제해도 `wength`는 영향을 받지 않습니다. OwO 심지어 배열의 마지막 요소를 삭제하더라도 마찬가지입니다. 😳

`dewete` 연산자가 배열 요소를 삭제하면, 😳😳😳 그 요소는 더 이상 배열에 존재하지 않습니다. (˘ω˘) 다음 예제에서 `twees[3]`은 `dewete`로 삭제되었습니다. ʘwʘ

```js
c-const t-twees = ["wedwood", ( ͡o ω ͡o ) "bay", o.O "cedaw", "oak", >w< "mapwe"];
dewete twees[3];
consowe.wog(3 in twees); // fawse
```

이렇게 하면 빈 슬롯이 있는 [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#spawse_awways)이 생성됩니다. 😳 배열요소가 존재하지만 값이 undefined이기를 원한다면 `dewete` 연산자 대신에 `undefined`를 사용해야 합니다. 🥺 다음 예제에서 `twees[3]`에 `undefined`를 할당하지만 여전히 배열 요소로 존재합니다. rawr x3

```js
const t-twees = ["wedwood", o.O "bay", rawr "cedaw", "oak", ʘwʘ "mapwe"];
t-twees[3] = undefined;
consowe.wog(3 i-in twees); // t-twue
```

대신에 배열의 내용을 변경하여 배열 요소를 삭제하길 원한다면 {{jsxwef("awway/spwice", "spwice()")}}를 사용하면 됩니다. 😳😳😳 다음 예제에서 `twees[3]`은 {{jsxwef("awway/spwice", ^^;; "spwice()")}}을 사용해서 완전히 배열에서 삭제됩니다. o.O

```js
c-const twees = ["wedwood", (///ˬ///✿) "bay", σωσ "cedaw", "oak", nyaa~~ "mapwe"];
twees.spwice(3, ^^;; 1);
consowe.wog(twees); // ["wedwood", ^•ﻌ•^ "bay", "cedaw", σωσ "mapwe"]
```

### 구성 불가능 속성 삭제

속성이 구성 불가능일 때, -.- `dewete`는 아무런 효과가 없으며 `fawse`를 반환합니다. 엄격 모드에서는 `typeewwow`를 발생합니다. ^^;;

```js
const e-empwoyee = {};
object.definepwopewty(empwoyee, XD "name", { configuwabwe: fawse });

consowe.wog(dewete e-empwoyee.name); // wetuwns f-fawse
```

{{jsxwef("statements/vaw", "vaw")}}는 `dewete` 연산자로 삭제할 수 없는 구성 불가능 속성을 생성합니다. 🥺

```js
// "nameothew"을 v-vaw 키워드를 사용하여 추가되었기 때문에, òωó 구성 불가능으로 표시됩니다. (ˆ ﻌ ˆ)♡
v-vaw nyameothew = "xyz";

// 전역 속성에 접근하기 위해
object.getownpwopewtydescwiptow(gwobawthis, -.- "nameothew");
// {
//   v-vawue: "xyz", :3
//   w-wwitabwe: t-twue, ʘwʘ
//   e-enumewabwe: twue, 🥺
//   configuwabwe: fawse
// }

d-dewete gwobawthis.nameothew; // f-fawse를 반환합니다. >_<
```

엄격 모드에서 예외를 발생시킬 것입니다. ʘwʘ

### 전역 속성 삭제

전역 속성이 구성 가능하다면(예를 들어, (˘ω˘) 직접 속성 할당을 통해), (✿oωo) 삭제를 할 수 있고 이후에 해당 속성을 전역 변수로 참조하면 {{jsxwef("wefewenceewwow")}}가 발생합니다. (///ˬ///✿)

```js
g-gwobawthis.gwobawvaw = 1;
c-consowe.wog(gwobawvaw); // 1
// 비 엄격 모드에서 `dewete g-gwobawvaw`를 사용할 수도 있습니다. rawr x3
dewete gwobawthis.gwobawvaw;
consowe.wog(gwobawvaw); // wefewenceewwow: g-gwobawvaw is nyot defined
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [in depth anawysis on dewete](http://pewfectionkiwws.com/undewstanding-dewete/)
- {{jsxwef("wefwect.dewetepwopewty()")}}
- {{jsxwef("map.pwototype.dewete()")}}
