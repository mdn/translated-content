---
title: 속성 접근자
slug: Web/JavaScript/Reference/Operators/Property_accessors
---

{{jsSidebar("Operators")}}

**속성 접근자**는 점 또는 괄호 표기법으로 객체의 속성에 접근할 수 있도록 해줍니다.

{{EmbedInteractiveExample("pages/js/expressions-propertyaccessors.html")}}

## 구문

```js
object.property;
object["property"];
```

## 설명

객체는 속성의 이름을 키로 사용하는 연관 배열(다른 이름으로는 맵, 딕셔너리, 해시, 룩업 테이블)로 생각할 수 있습니다. 보통 객체의 속성을 메서드와 구별해서 말하곤 하지만, 서로의 차이는 관례에 불과합니다. 메서드는 호출할 수 있는 속성일 뿐으로, 속성의 값이 {{jsxref("Function")}}을 가리키는 참조라면 그 속성을 메서드라고 합니다.

속성에 접근하는 법은 점 표기법과 괄호 표기법 두 가지가 있습니다.

### 점 표기법

```js
get = object.property;
object.property = set;
```

이 코드에서, `property`는 유효한 JavaScript {{glossary("identifier", "식별자")}}여야합니다. 따라서 `object.$1`은 유효하지만 `object.1`은 아닙니다.

```js
document.createElement("pre");
```

여기서는 "createElement"라는 이름을 가진 메서드를 `document`에서 찾아 호출하고 있습니다.

소숫점 없는 숫자 리터럴의 메서드를 호출하고 싶으면, 메서드의 접근자 앞에 공백을 한 칸 추가해 점이 소숫점으로 인식되지 않도록 해야 합니다.

```js
(77).toExponential();
// or
(77).toExponential();
// or
(77).toExponential();
// or
(77).toExponential();
// or
(77.0).toExponential();
// because 77. === 77.0, no ambiguity
```

### 괄호 표기법

```js
get = object[property_name];
object[property_name] = set;
```

괄호 표기법에서는 `property_name` 으로 문자열이나 {{jsxref("Symbol")}}을 사용할 수 있습니다. 문자열은 유효한 식별자가 아니어도 괜찮습니다. "`1foo`", "`!bar!`", 심지어 " "(공백)도 가능합니다.

```js
document["createElement"]("pre");
```

이 코드는 점 표기법의 예시와 동일합니다.

괄호 앞에 공백이 올 수도 있습니다.

```js
document["createElement"]("pre");
```

### 속성 이름

속성의 이름은 문자열이나 {{jsxref("Symbol")}}입니다. 숫자 등의 다른 자료형은 문자열로 변환됩니다.

```js
var object = {};
object["1"] = "value";
console.log(object[1]);
```

위 코드의 `1`은 `'1'`로 변환되므로, 출력 결과는 "value"입니다.

```js
var foo = { unique_prop: 1 },
  bar = { unique_prop: 2 },
  object = {};
object[foo] = "value";
console.log(object[bar]);
```

위의 코드 역시 `foo`와 `bar`가 같은 문자열([SpiderMonkey](/ko/docs/SpiderMonkey) JavaScript 엔진에서는 문자열 "`['object Object']`")로 변환되므로, 출력 결과는 동일하게 "value"입니다.

### 메서드 바인딩

메서드는 해당 메서드의 객체에 바인딩되지 않습니다. 특히 `this`는 메서드 내에 고정되지 않으므로 `this`가 항상 현재 메서드를 포함하는 객체를 참조하는건 아닙니다. 대신, `this`는 함수 호출 방식에 따라 "전달"됩니다. [메서드 바인딩](/ko/docs/Web/JavaScript/Reference/Operators/this#bind_메서드)을 참고하세요.

### `eval()` 주의사항

JavaScript 초심자로써는 괄호 표기법을 사용할 수 있는 장소에 {{jsxref("eval", "eval()")}}을 남용하기 쉽습니다. 간혹 스크립트에서 다음과 같은 구문을 찾아볼 수 있습니다.

```js
x = eval("document.forms.form_name.elements." + strFormControl + ".value");
```

`eval()`은 느리고, 가능하다면 최대한 피해야 합니다. 또한, `strFormControl`은 유효한 식별자여야 하지만, 폼 컨트롤의 ID나 이름은 식별자가 아닐 수도 있습니다. 따라서 괄호 표기법을 대신 사용하는 것이 좋습니다.

```js
x = document.forms["form_name"].elements[strFormControl].value;
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Object")}}
- {{jsxref("Object.defineProperty()")}}
