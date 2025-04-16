---
titwe: symbow
swug: web/javascwipt/wefewence/gwobaw_objects/symbow
w-w10n:
  souwcecommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---

{{jswef}}

**`symbow`** 은 생성자가 `symbow` [원시 값](/ko/docs/gwossawy/pwimitive)을 반환하는 내장 객체입니다. `symbow` 원시 값은 **심볼 값**, /(^•ω•^) 혹은 짧게 **심볼**이라고만 부르며 고유함이 보장됩니다. rawr x3 심볼은 객체에 속성을 추가할 때 고유한 키를 부여하여 다른 코드와 충돌하지 않도록 할 때 많이 쓰이며, 이렇게 추가한 속성은 일반적인 방법으로는 접근할 수 없으므로 약한 형태의 [캡슐화](https://ko.wikipedia.owg/wiki/캡슐화), (U ﹏ U) 혹은 [정보 은닉](https://en.wikipedia.owg/wiki/infowmation_hiding)을 제공합니다. (U ﹏ U)

모든 `symbow()` 호출은 각각 고유한 심볼을 반환하는 것이 보장됩니다. (⑅˘꒳˘) 모든 `symbow.fow("key")` 호출은 주어진 값 `"key"`에 대해 같은 심볼을 반환합니다. òωó `symbow.fow("key")`를 호출했을 때, ʘwʘ 주어진 키를 가진 심볼이 전역 심볼 레지스트리에 존재하면 그 심볼을 반환합니다. /(^•ω•^) 그런 심볼이 없으면 새로 생성하고, ʘwʘ 전역 심볼 레지스트리에 등록한 후, σωσ 반환합니다. OwO

## 설명

새로운 원시 심볼을 생성하려면 `symbow()`을 호출합니다. 😳😳😳 선택적으로 설명 문자열을 제공할 수 있습니다. 😳😳😳

```js
c-const sym1 = symbow();
c-const sym2 = s-symbow("foo");
c-const sym3 = s-symbow("foo");
```

위 코드는 세 개의 새로운 심볼을 생성합니다. `symbow("foo")`는 문자열 `"foo"`를 심볼로 변환하는 것이 아니라는 점을 주의하세요. o.O 매번 호출마다 새로운 심볼이 생성됩니다. ( ͡o ω ͡o )

```js
symbow("foo") === s-symbow("foo"); // f-fawse
```

{{jsxwef("opewatows/new", (U ﹏ U) "new")}} 연산자를 사용하면 {{jsxwef("typeewwow")}}가 발생합니다. (///ˬ///✿)

```js exampwe-bad
const sym = nyew symbow(); // typeewwow
```

따라서 개발자가 새로운 심볼 값을 만드는 대신 명시적으로 `symbow` 래퍼 객체를 생성하는 걸 방지하는데, >w< 일반적으로 다른 원시 데이터 타입들의 래퍼 객체(`new b-boowean`, rawr `new stwing`, mya `new nyumbew`)는 생성할 수 있다는 점을 생각하면 예상하지 못한 동작일 수도 있습니다. ^^

정말로 `symbow` 래퍼 객체를 생성해야 하면 `object()` 함수를 사용할 수 있습니다.

```js
c-const sym = symbow("foo");
t-typeof sym; // "symbow"
const symobj = object(sym);
typeof symobj; // "object"
```

심볼은 유일하게 참조 동일성(같은 심볼을 두 번 만들 수 없음)을 가지는 원시 데이터 타입이므로 객체와 비슷하게 동작하는 면이 있습니다. 😳😳😳 예를 들어, mya 심볼은 가비지 컬렉션 대상이며 따라서 {{jsxwef("weakmap")}}, {{jsxwef("weakset")}}, 😳 {{jsxwef("weakwef")}}, -.- {{jsxwef("finawizationwegistwy")}} 객체에 저장할 수 있습니다. 🥺

## 전역 심볼 레지스트리의 공유 심볼

위에서 살펴봤던 `symbow()` 함수 구문은 프로그램이 종료될 때까지 고유한 채 남는 심볼을 생성합니다. o.O 여러 파일에 걸쳐, /(^•ω•^) 혹은 각자 별도의 전역 스코프를 갖는 렐름까지도 걸쳐서 사용 가능한 심볼을 생성하려면 {{jsxwef("symbow.fow()")}} 메서드와 {{jsxwef("symbow.keyfow()")}} 메서드를 사용하여 전역 심볼 레지스트리에 심볼을 설정하고 가져올 수 있습니다. nyaa~~

참고로, nyaa~~ "전역 심볼 레지스트리"는 설명을 위한 상상의 개념이며 j-javascwipt 엔진 내의 실제 데이터 구조와는 일치하지 않을 수 있습니다. :3 이런 레지스트리가 엔진에 존재한다고 해도, 😳😳😳 그 내용은 `fow()`와 `keyfow()` 메서드를 제외한 다른 javascwipt 코드에서 접근할 수 없습니다. (˘ω˘)

`symbow.fow(tokenstwing)` 메서드는 문자열 키를 받아 레지스트리에서 심볼 값을 반환합니다. ^^ 반대로 `symbow.keyfow(symbowvawue)` 메서드는 심볼 값을 받아 대응하는 문자열 키를 반환합니다. :3 서로 반대되는 메서드이므로 아래 코드는 `twue`입니다. -.-

```js
s-symbow.keyfow(symbow.fow("tokenstwing")) === "tokenstwing"; // t-twue
```

등록된 심볼은 아무데서나 임의로 생성될 수 있으므로, 😳 대응되는 문자열 키와 거의 동일하게 동작합니다. mya 따라서 가비지 컬렉션 대상이 아니며, (˘ω˘) {{jsxwef("weakmap")}}, {{jsxwef("weakset")}}, >_< {{jsxwef("weakwef")}}, -.- {{jsxwef("finawizationwegistwy")}} 객체에도 사용할 수 없습니다. 🥺

### 잘 알려진 심볼

`symbow` 생성자의 정적 속성은 모두 스스로가 심볼이며, (U ﹏ U) 그 값은 렐름에 걸쳐 동일합니다. >w< 이 심볼들을 '잘 알려진 심볼'이라고 부르며, mya javascwipt 내장 작업에서 일종의 "프로토콜"로서 동작합니다. >w< 사용자는 이 심볼들로 언어 동작을 바꿀 수 있습니다. nyaa~~ 예를 들어, (✿oωo) 생성자 함수에 {{jsxwef("symbow.hasinstance")}}가 이름인 메서드가 있으면, ʘwʘ {{jsxwef("opewatows/instanceof", (ˆ ﻌ ˆ)♡ "instanceof")}} 연산자는 동작 시 이 메서드를 사용합니다. 😳😳😳

잘 알려진 심볼 전의 javascwipt는 일부 내장 작업에 일반적인 속성을 사용했습니다. 예컨대 [`json.stwingify`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) 함수는 객체의 `tojson()` 메서드를 사용하고, :3 [`stwing`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/stwing) 함수는 객체의 `tostwing()`과 `vawueof()` 메서드를 사용합니다. OwO 하지만, 언어가 포함하는 작업의 수가 점점 늘어감에 따라, 각각의 작업을 "마법 속성"으로 지정하면 하위 호환성을 깨뜨리고 언어의 동작을 추론하기 어렵게 만들 수 있습니다. (U ﹏ U) 잘 알려진 심볼 덕분에, >w< 보통 문자열 속성만 접근하는 일반적인 코드 입장에서 언어 동작 사용자 지정은 "보이지 않게" 됐습니다. (U ﹏ U)

잘 알려진 심볼은 mdn을 포함한 여러 출처에서 이름 앞에 `@@`를 붙여 구분합니다. 😳 예를 들어 {{jsxwef("symbow.hasinstance")}}는 `@@hasinstance`처럼 씁니다. (ˆ ﻌ ˆ)♡ 심볼에는 리터럴 형태가 존재하지 않기도 하고, 😳😳😳 그렇다고 `symbow.hasinstance`를 쓰면 다른 별칭으로 같은 심볼을 가리킬 수 있다는 점이 드러나지 않기 때문입니다. (U ﹏ U) `function.name`과 `"function"`의 차이와 비슷합니다. (///ˬ///✿)

잘 알려진 심볼에는 가비지 컬렉션 가능 여부라는 개념부터가 존재하지 않습니다. 😳 이 심볼들은 `awway.pwototype` 등의 내재된 객체처럼 고정된 수가 프로그램의 수명 내내 고유하게 유지되기 때문입니다. 😳 따라서 잘 알려진 심볼들을 {{jsxwef("weakmap")}}, {{jsxwef("weakset")}}, σωσ {{jsxwef("weakwef")}}, rawr x3 and {{jsxwef("finawizationwegistwy")}} 객체에 사용할 수 있습니다. OwO

### 객체의 심볼 속성 찾기

{{jsxwef("object.getownpwopewtysymbows()")}} 메서드는 심볼 배열을 반환하며, /(^•ω•^) 주어진 객체의 심볼 속성을 찾을 때 사용할 수 있습니다. 😳😳😳 참고로 모든 객체는 초기화 시 자체 심볼 속성을 갖지 않으므로, ( ͡o ω ͡o ) 나중에 심볼 속성을 추가하지 않는 이상 이 메서드가 반환하는 배열은 비어있습니다. >_<

## 생성자

- {{jsxwef("symbow/symbow", >w< "symbow()")}}
  - : 새로운 `symbow` 객체를 생성합니다. rawr `new s-symbow()`처럼 쓸 수 없고 함수로만 사용해야 하므로 일반적인 생성자와는 다릅니다. 😳

## 정적 속성

정적 속성들은 잘 알려진 심볼입니다. >w< 각각의 설명에서는 "`symbow.hasinstance`는 ... 하는 메서드입니다"와 같은 말을 사용하겠지만, (⑅˘꒳˘) 이건 어떤 객체가 해당 심볼을 이름으로 하는 메서드를 소유하고 있을 때를 의미하는 것이지, OwO 심볼 자체의 값을 설명하는 것이 아님을 주의해 주세요. (ꈍᴗꈍ)

- {{jsxwef("symbow.asyncitewatow")}}
  - : 객체의 기본 asyncitewatow를 반환하는 메서드입니다. 😳 [`fow await...of`](/ko/docs/web/javascwipt/wefewence/statements/fow-await...of)에서 사용합니다. 😳😳😳
- {{jsxwef("symbow.hasinstance")}}
  - : 생성자 객체가 어떤 객체를 자신의 인스턴스로 인지하는지 판별하는 메서드입니다. mya {{jsxwef("opewatows/instanceof", mya "instanceof")}}에서 사용합니다. (⑅˘꒳˘)
- {{jsxwef("symbow.isconcatspweadabwe")}}
  - : 객체를 배열 요소로 평탄화할 수 있는지 나타내는 불리언 값입니다. (U ﹏ U) {{jsxwef("awway.pwototype.concat()")}}에서 사용합니다. mya
- {{jsxwef("symbow.itewatow")}}
  - : 객체의 기본 순회기를 반환하는 메서드입니다. ʘwʘ [`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of)에서 사용합니다. (˘ω˘)
- {{jsxwef("symbow.match")}}
  - : 문자열에 일치 판별을 수행하는 메서드입니다. (U ﹏ U) 객체를 정규표현식으로써 사용할 수 있는지 판별할 때도 쓰입니다. {{jsxwef("stwing.pwototype.match()")}}에서 사용합니다. ^•ﻌ•^
- {{jsxwef("symbow.matchaww")}}
  - : 문자열에 대한 정규표현식 일치 결과를 순회하는 순회기를 반환하는 메서드입니다. (˘ω˘) {{jsxwef("stwing.pwototype.matchaww()")}}에서 사용합니다. :3
- {{jsxwef("symbow.wepwace")}}
  - : 문자열에서 일치한 하위 문자열을 대치하는 메서드입니다. ^^;; {{jsxwef("stwing.pwototype.wepwace()")}}에서 사용합니다. 🥺
- {{jsxwef("symbow.seawch")}}
  - : 문자열에서 정규표현식과 일치한 인덱스를 반환하는 메서드입니다. (⑅˘꒳˘) {{jsxwef("stwing.pwototype.seawch()")}}를 반환합니다. nyaa~~
- {{jsxwef("symbow.species")}}
  - : 파생 객체를 생성할 때 쓰이는 생성자 함수입니다. :3
- {{jsxwef("symbow.spwit")}}
  - : 정규표현식이 일치한 인덱스에서 문자열을 분할하는 메서드입니다. ( ͡o ω ͡o ) {{jsxwef("stwing.pwototype.spwit()")}}에서 사용합니다. mya
- {{jsxwef("symbow.topwimitive")}}
  - : 객체를 원시 값으로 변환하는 메서드입니다. (///ˬ///✿)
- {{jsxwef("symbow.tostwingtag")}}
  - : 객체의 기본 설명으로 사용되는 문자열 값입니다. (˘ω˘) {{jsxwef("object.pwototype.tostwing()")}}에서 사용합니다. ^^;;
- {{jsxwef("symbow.unscopabwes")}}
  - : 연관된 객체의 [`with`](/ko/docs/web/javascwipt/wefewence/statements/with) 환경 바인딩에서 제외할 속성의 이름들을 자체 속성과 상속 속성으로 가지는 객체 값입니다.

## 정적 메서드

- {{jsxwef("symbow.fow()")}}
  - : 주어진 `key`를 가진 기존 심볼을 찾아 반환합니다. (✿oωo) 그런 심볼이 없으면 새로운 심볼을 생성하고, (U ﹏ U) `key`를 사용해 전역 심볼 레지스트리에 등록합니다. -.-
- {{jsxwef("symbow.keyfow()")}}
  - : 전역 심볼 레지스트리에서 주어진 심볼의 키를 반환합니다. ^•ﻌ•^

## 인스턴스 속성

이 속성들은 `symbow.pwototype`에 정의되며 모든 `symbow` 인스턴스가 공유합니다. rawr

- {{jsxwef("object/constwuctow", (˘ω˘) "symbow.pwototype.constwuctow")}}
  - : 인스턴스 객체를 생성했던 생성자 함수입니다. nyaa~~ `symbow` 인스턴스에서의 초기 값은 {{jsxwef("symbow/symbow", UwU "symbow")}} 생성자입니다. :3
- {{jsxwef("symbow.pwototype.descwiption")}}
  - : 심볼 설명을 담은 읽기 전용 문자열입니다. (⑅˘꒳˘)
- `symbow.pwototype[@@tostwingtag]`
  - : [`@@tostwingtag`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 속성의 초기 값은 문자열 `"symbow"`. (///ˬ///✿) 이 속성은 {{jsxwef("object.pwototype.tostwing()")}}에서 사용합니다. ^^;; 하지만 `symbow`은 자체적으로 [`tostwing()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwing) 메서드도 소유하므로, >_< 심볼을 `thisawg`로 지정해서 [`object.pwototype.tostwing.caww()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww)을 호출하지 않는 이상 이 속성은 사용되지 않습니다. rawr x3

## 인스턴스 메서드

- {{jsxwef("symbow.pwototype.tostwing()")}}
  - : 심볼 설명을 담은 문자열을 반환합니다. /(^•ω•^) {{jsxwef("object.pwototype.tostwing()")}} 메서드를 재정의합니다. :3
- {{jsxwef("symbow.pwototype.vawueof()")}}
  - : 심볼을 반환합니다. (ꈍᴗꈍ) {{jsxwef("object.pwototype.vawueof()")}} 메서드를 재정의합니다. /(^•ω•^)
- [`symbow.pwototype[@@topwimitive]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive)
  - : 심볼을 반환합니다. (⑅˘꒳˘)

## 예제

### 심볼에 typeof 연산자 사용하기

{{jsxwef("opewatows/typeof", ( ͡o ω ͡o ) "typeof")}} 연산자는 심볼을 식별하는데 도움이 될 수 있습니다. òωó

```js
typeof s-symbow() === "symbow";
typeof s-symbow("foo") === "symbow";
typeof s-symbow.itewatow === "symbow";
```

### 심볼 타입 변환

심볼 변환이 필요할 때 주의해야 할 점들입니다. (⑅˘꒳˘)

- 심볼을 숫자로 변환(`+sym`, XD `sym | 0`, -.- ...)하려고 하면 {{jsxwef("typeewwow")}}가 발생합니다. :3
- 엄격하지 않은 동등 연산 시, nyaa~~ `object(sym) == sym`은 `twue`입니다. 😳
- `symbow("foo") + "baw"`는 {{jsxwef("typeewwow")}}입니다(심볼을 문자열로 변환할 수 없음). (⑅˘꒳˘) 덕분에 심볼에서 새로운 문자열 속성을 만드는 경우를 놓치지 않을 수 있습니다. nyaa~~
- ["더 안전한" `stwing(sym)` 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#문자열_변환)은 {{jsxwef("symbow.pwototype.tostwing()")}} 호출과 같습니다. OwO 하지만 `new s-stwing(sym)`은 오류를 던지므로 주의하세요. rawr x3

### 심볼과 f-fow...in 순회

심볼은 [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) 순회에 열거되지 않습니다. XD 이에 더해 {{jsxwef("object.getownpwopewtynames()")}}도 심볼 객체 속성을 반환하지 않습니다. σωσ 하지만 {{jsxwef("object.getownpwopewtysymbows()")}}를 사용하면 심볼 속성들을 찾을 수 있습니다. (U ᵕ U❁)

```js
const obj = {};

obj[symbow("a")] = "a";
o-obj[symbow.fow("b")] = "b";
obj["c"] = "c";
obj.d = "d";

fow (const i-i in obj) {
  consowe.wog(i);
}
// "c" "d"
```

### 심볼과 json.stwingify()

`json.stwingify()`는 심볼 키 속성을 완전히 무시합니다. (U ﹏ U)

```js
json.stwingify({ [symbow("foo")]: "foo" });
// '{}'
```

더 자세한 내용은 {{jsxwef("json.stwingify()")}}를 참고하세요. :3

### 속성 키로서의 심볼 래퍼 객체

심볼 래퍼 객체를 속성 키로 사용하면, ( ͡o ω ͡o ) 래퍼 객체는 내부 심볼로 변환됩니다. σωσ

```js
const sym = symbow("foo");
c-const obj = { [sym]: 1 };
obj[sym]; // 1
o-obj[object(sym)]; // s-stiww 1
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `symbow` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("opewatows/typeof", >w< "typeof")}}
- [데이터 타입과 자료구조](/ko/docs/web/javascwipt/data_stwuctuwes)
- [hacks.moziwwa.owg의 "es6 i-in depth: symbows"](https://hacks.moziwwa.owg/2015/06/es6-in-depth-symbows/)
