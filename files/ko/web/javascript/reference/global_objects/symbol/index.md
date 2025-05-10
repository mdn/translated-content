---
title: Symbol
slug: Web/JavaScript/Reference/Global_Objects/Symbol
l10n:
  sourceCommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---

{{JSRef}}

**`Symbol`** 은 생성자가 `symbol` [원시 값](/ko/docs/Glossary/Primitive)을 반환하는 내장 객체입니다. `symbol` 원시 값은 **심볼 값**, 혹은 짧게 **심볼**이라고만 부르며 고유함이 보장됩니다. 심볼은 객체에 속성을 추가할 때 고유한 키를 부여하여 다른 코드와 충돌하지 않도록 할 때 많이 쓰이며, 이렇게 추가한 속성은 일반적인 방법으로는 접근할 수 없으므로 약한 형태의 [캡슐화](https://ko.wikipedia.org/wiki/캡슐화), 혹은 [정보 은닉](https://en.wikipedia.org/wiki/Information_hiding)을 제공합니다.

모든 `Symbol()` 호출은 각각 고유한 심볼을 반환하는 것이 보장됩니다. 모든 `Symbol.for("key")` 호출은 주어진 값 `"key"`에 대해 같은 심볼을 반환합니다. `Symbol.for("key")`를 호출했을 때, 주어진 키를 가진 심볼이 전역 심볼 레지스트리에 존재하면 그 심볼을 반환합니다. 그런 심볼이 없으면 새로 생성하고, 전역 심볼 레지스트리에 등록한 후, 반환합니다.

## 설명

새로운 원시 심볼을 생성하려면 `Symbol()`을 호출합니다. 선택적으로 설명 문자열을 제공할 수 있습니다.

```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

위 코드는 세 개의 새로운 심볼을 생성합니다. `Symbol("foo")`는 문자열 `"foo"`를 심볼로 변환하는 것이 아니라는 점을 주의하세요. 매번 호출마다 새로운 심볼이 생성됩니다.

```js
Symbol("foo") === Symbol("foo"); // false
```

{{jsxref("Operators/new", "new")}} 연산자를 사용하면 {{jsxref("TypeError")}}가 발생합니다.

```js example-bad
const sym = new Symbol(); // TypeError
```

따라서 개발자가 새로운 심볼 값을 만드는 대신 명시적으로 `Symbol` 래퍼 객체를 생성하는 걸 방지하는데, 일반적으로 다른 원시 데이터 타입들의 래퍼 객체(`new Boolean`, `new String`, `new Number`)는 생성할 수 있다는 점을 생각하면 예상하지 못한 동작일 수도 있습니다.

정말로 `Symbol` 래퍼 객체를 생성해야 하면 `Object()` 함수를 사용할 수 있습니다.

```js
const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"
```

심볼은 유일하게 참조 동일성(같은 심볼을 두 번 만들 수 없음)을 가지는 원시 데이터 타입이므로 객체와 비슷하게 동작하는 면이 있습니다. 예를 들어, 심볼은 가비지 컬렉션 대상이며 따라서 {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, {{jsxref("FinalizationRegistry")}} 객체에 저장할 수 있습니다.

## 전역 심볼 레지스트리의 공유 심볼

위에서 살펴봤던 `Symbol()` 함수 구문은 프로그램이 종료될 때까지 고유한 채 남는 심볼을 생성합니다. 여러 파일에 걸쳐, 혹은 각자 별도의 전역 스코프를 갖는 렐름까지도 걸쳐서 사용 가능한 심볼을 생성하려면 {{jsxref("Symbol.for()")}} 메서드와 {{jsxref("Symbol.keyFor()")}} 메서드를 사용하여 전역 심볼 레지스트리에 심볼을 설정하고 가져올 수 있습니다.

참고로, "전역 심볼 레지스트리"는 설명을 위한 상상의 개념이며 JavaScript 엔진 내의 실제 데이터 구조와는 일치하지 않을 수 있습니다. 이런 레지스트리가 엔진에 존재한다고 해도, 그 내용은 `for()`와 `keyFor()` 메서드를 제외한 다른 JavaScript 코드에서 접근할 수 없습니다.

`Symbol.for(tokenString)` 메서드는 문자열 키를 받아 레지스트리에서 심볼 값을 반환합니다. 반대로 `Symbol.keyFor(symbolValue)` 메서드는 심볼 값을 받아 대응하는 문자열 키를 반환합니다. 서로 반대되는 메서드이므로 아래 코드는 `true`입니다.

```js
Symbol.keyFor(Symbol.for("tokenString")) === "tokenString"; // true
```

등록된 심볼은 아무데서나 임의로 생성될 수 있으므로, 대응되는 문자열 키와 거의 동일하게 동작합니다. 따라서 가비지 컬렉션 대상이 아니며, {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, {{jsxref("FinalizationRegistry")}} 객체에도 사용할 수 없습니다.

### 잘 알려진 심볼

`Symbol` 생성자의 정적 속성은 모두 스스로가 심볼이며, 그 값은 렐름에 걸쳐 동일합니다. 이 심볼들을 '잘 알려진 심볼'이라고 부르며, JavaScript 내장 작업에서 일종의 "프로토콜"로서 동작합니다. 사용자는 이 심볼들로 언어 동작을 바꿀 수 있습니다. 예를 들어, 생성자 함수에 {{jsxref("Symbol.hasInstance")}}가 이름인 메서드가 있으면, {{jsxref("Operators/instanceof", "instanceof")}} 연산자는 동작 시 이 메서드를 사용합니다.

잘 알려진 심볼 전의 JavaScript는 일부 내장 작업에 일반적인 속성을 사용했습니다. 예컨대 [`JSON.stringify`](/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) 함수는 객체의 `toJSON()` 메서드를 사용하고, [`String`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/String) 함수는 객체의 `toString()`과 `valueOf()` 메서드를 사용합니다. 하지만, 언어가 포함하는 작업의 수가 점점 늘어감에 따라, 각각의 작업을 "마법 속성"으로 지정하면 하위 호환성을 깨뜨리고 언어의 동작을 추론하기 어렵게 만들 수 있습니다. 잘 알려진 심볼 덕분에, 보통 문자열 속성만 접근하는 일반적인 코드 입장에서 언어 동작 사용자 지정은 "보이지 않게" 됐습니다.

잘 알려진 심볼은 MDN을 포함한 여러 출처에서 이름 앞에 `@@`를 붙여 구분합니다. 예를 들어 {{jsxref("Symbol.hasInstance")}}는 `@@hasInstance`처럼 씁니다. 심볼에는 리터럴 형태가 존재하지 않기도 하고, 그렇다고 `Symbol.hasInstance`를 쓰면 다른 별칭으로 같은 심볼을 가리킬 수 있다는 점이 드러나지 않기 때문입니다. `Function.name`과 `"Function"`의 차이와 비슷합니다.

잘 알려진 심볼에는 가비지 컬렉션 가능 여부라는 개념부터가 존재하지 않습니다. 이 심볼들은 `Array.prototype` 등의 내재된 객체처럼 고정된 수가 프로그램의 수명 내내 고유하게 유지되기 때문입니다. 따라서 잘 알려진 심볼들을 {{jsxref("WeakMap")}}, {{jsxref("WeakSet")}}, {{jsxref("WeakRef")}}, and {{jsxref("FinalizationRegistry")}} 객체에 사용할 수 있습니다.

### 객체의 심볼 속성 찾기

{{jsxref("Object.getOwnPropertySymbols()")}} 메서드는 심볼 배열을 반환하며, 주어진 객체의 심볼 속성을 찾을 때 사용할 수 있습니다. 참고로 모든 객체는 초기화 시 자체 심볼 속성을 갖지 않으므로, 나중에 심볼 속성을 추가하지 않는 이상 이 메서드가 반환하는 배열은 비어있습니다.

## 생성자

- {{jsxref("Symbol/Symbol", "Symbol()")}}
  - : 새로운 `Symbol` 객체를 생성합니다. `new Symbol()`처럼 쓸 수 없고 함수로만 사용해야 하므로 일반적인 생성자와는 다릅니다.

## 정적 속성

정적 속성들은 잘 알려진 심볼입니다. 각각의 설명에서는 "`Symbol.hasInstance`는 ... 하는 메서드입니다"와 같은 말을 사용하겠지만, 이건 어떤 객체가 해당 심볼을 이름으로 하는 메서드를 소유하고 있을 때를 의미하는 것이지, 심볼 자체의 값을 설명하는 것이 아님을 주의해 주세요.

- {{jsxref("Symbol.asyncIterator")}}
  - : 객체의 기본 AsyncIterator를 반환하는 메서드입니다. [`for await...of`](/ko/docs/Web/JavaScript/Reference/Statements/for-await...of)에서 사용합니다.
- {{jsxref("Symbol.hasInstance")}}
  - : 생성자 객체가 어떤 객체를 자신의 인스턴스로 인지하는지 판별하는 메서드입니다. {{jsxref("Operators/instanceof", "instanceof")}}에서 사용합니다.
- {{jsxref("Symbol.isConcatSpreadable")}}
  - : 객체를 배열 요소로 평탄화할 수 있는지 나타내는 불리언 값입니다. {{jsxref("Array.prototype.concat()")}}에서 사용합니다.
- {{jsxref("Symbol.iterator")}}
  - : 객체의 기본 순회기를 반환하는 메서드입니다. [`for...of`](/ko/docs/Web/JavaScript/Reference/Statements/for...of)에서 사용합니다.
- {{jsxref("Symbol.match")}}
  - : 문자열에 일치 판별을 수행하는 메서드입니다. 객체를 정규표현식으로써 사용할 수 있는지 판별할 때도 쓰입니다. {{jsxref("String.prototype.match()")}}에서 사용합니다.
- {{jsxref("Symbol.matchAll")}}
  - : 문자열에 대한 정규표현식 일치 결과를 순회하는 순회기를 반환하는 메서드입니다. {{jsxref("String.prototype.matchAll()")}}에서 사용합니다.
- {{jsxref("Symbol.replace")}}
  - : 문자열에서 일치한 하위 문자열을 대치하는 메서드입니다. {{jsxref("String.prototype.replace()")}}에서 사용합니다.
- {{jsxref("Symbol.search")}}
  - : 문자열에서 정규표현식과 일치한 인덱스를 반환하는 메서드입니다. {{jsxref("String.prototype.search()")}}를 반환합니다.
- {{jsxref("Symbol.species")}}
  - : 파생 객체를 생성할 때 쓰이는 생성자 함수입니다.
- {{jsxref("Symbol.split")}}
  - : 정규표현식이 일치한 인덱스에서 문자열을 분할하는 메서드입니다. {{jsxref("String.prototype.split()")}}에서 사용합니다.
- {{jsxref("Symbol.toPrimitive")}}
  - : 객체를 원시 값으로 변환하는 메서드입니다.
- {{jsxref("Symbol.toStringTag")}}
  - : 객체의 기본 설명으로 사용되는 문자열 값입니다. {{jsxref("Object.prototype.toString()")}}에서 사용합니다.
- {{jsxref("Symbol.unscopables")}}
  - : 연관된 객체의 [`with`](/ko/docs/Web/JavaScript/Reference/Statements/with) 환경 바인딩에서 제외할 속성의 이름들을 자체 속성과 상속 속성으로 가지는 객체 값입니다.

## 정적 메서드

- {{jsxref("Symbol.for()")}}
  - : 주어진 `key`를 가진 기존 심볼을 찾아 반환합니다. 그런 심볼이 없으면 새로운 심볼을 생성하고, `key`를 사용해 전역 심볼 레지스트리에 등록합니다.
- {{jsxref("Symbol.keyFor()")}}
  - : 전역 심볼 레지스트리에서 주어진 심볼의 키를 반환합니다.

## 인스턴스 속성

이 속성들은 `Symbol.prototype`에 정의되며 모든 `Symbol` 인스턴스가 공유합니다.

- {{jsxref("Object/constructor", "Symbol.prototype.constructor")}}
  - : 인스턴스 객체를 생성했던 생성자 함수입니다. `Symbol` 인스턴스에서의 초기 값은 {{jsxref("Symbol/Symbol", "Symbol")}} 생성자입니다.
- {{jsxref("Symbol.prototype.description")}}
  - : 심볼 설명을 담은 읽기 전용 문자열입니다.
- `Symbol.prototype[@@toStringTag]`
  - : [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"Symbol"`. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용합니다. 하지만 `Symbol`은 자체적으로 [`toString()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toString) 메서드도 소유하므로, 심볼을 `thisArg`로 지정해서 [`Object.prototype.toString.call()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call)을 호출하지 않는 이상 이 속성은 사용되지 않습니다.

## 인스턴스 메서드

- {{jsxref("Symbol.prototype.toString()")}}
  - : 심볼 설명을 담은 문자열을 반환합니다. {{jsxref("Object.prototype.toString()")}} 메서드를 재정의합니다.
- {{jsxref("Symbol.prototype.valueOf()")}}
  - : 심볼을 반환합니다. {{jsxref("Object.prototype.valueOf()")}} 메서드를 재정의합니다.
- [`Symbol.prototype[@@toPrimitive]()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/Symbol.toPrimitive)
  - : 심볼을 반환합니다.

## 예제

### 심볼에 typeof 연산자 사용하기

{{jsxref("Operators/typeof", "typeof")}} 연산자는 심볼을 식별하는데 도움이 될 수 있습니다.

```js
typeof Symbol() === "symbol";
typeof Symbol("foo") === "symbol";
typeof Symbol.iterator === "symbol";
```

### 심볼 타입 변환

심볼 변환이 필요할 때 주의해야 할 점들입니다.

- 심볼을 숫자로 변환(`+sym`, `sym | 0`, ...)하려고 하면 {{jsxref("TypeError")}}가 발생합니다.
- 엄격하지 않은 동등 연산 시, `Object(sym) == sym`은 `true`입니다.
- `Symbol("foo") + "bar"`는 {{jsxref("TypeError")}}입니다(심볼을 문자열로 변환할 수 없음). 덕분에 심볼에서 새로운 문자열 속성을 만드는 경우를 놓치지 않을 수 있습니다.
- ["더 안전한" `String(sym)` 변환](/ko/docs/Web/JavaScript/Reference/Global_Objects/String#문자열_변환)은 {{jsxref("Symbol.prototype.toString()")}} 호출과 같습니다. 하지만 `new String(sym)`은 오류를 던지므로 주의하세요.

### 심볼과 for...in 순회

심볼은 [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 순회에 열거되지 않습니다. 이에 더해 {{jsxref("Object.getOwnPropertyNames()")}}도 심볼 객체 속성을 반환하지 않습니다. 하지만 {{jsxref("Object.getOwnPropertySymbols()")}}를 사용하면 심볼 속성들을 찾을 수 있습니다.

```js
const obj = {};

obj[Symbol("a")] = "a";
obj[Symbol.for("b")] = "b";
obj["c"] = "c";
obj.d = "d";

for (const i in obj) {
  console.log(i);
}
// "c" "d"
```

### 심볼과 JSON.stringify()

`JSON.stringify()`는 심볼 키 속성을 완전히 무시합니다.

```js
JSON.stringify({ [Symbol("foo")]: "foo" });
// '{}'
```

더 자세한 내용은 {{jsxref("JSON.stringify()")}}를 참고하세요.

### 속성 키로서의 심볼 래퍼 객체

심볼 래퍼 객체를 속성 키로 사용하면, 래퍼 객체는 내부 심볼로 변환됩니다.

```js
const sym = Symbol("foo");
const obj = { [sym]: 1 };
obj[sym]; // 1
obj[Object(sym)]; // still 1
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`의 `Symbol` 폴리필](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Operators/typeof", "typeof")}}
- [데이터 타입과 자료구조](/ko/docs/Web/JavaScript/Guide/Data_structures)
- [hacks.mozilla.org의 "ES6 In Depth: Symbols"](https://hacks.mozilla.org/2015/06/es6-in-depth-symbols/)
