---
title: 반복기 및 생성기
slug: Web/JavaScript/Guide/Iterators_and_generators
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}

컬렉션 내 각 항목 처리는 매우 흔한 연산입니다. JavaScript는 간단한 {{jsxref("Statements/for","for")}} 루프에서 {{jsxref("Global_Objects/Array/map","map()")}} 및 {{jsxref("Global_Objects/Array/filter","filter()")}}에 이르기까지, 컬렉션을 반복하는 많은 방법을 제공합니다. 반복기(iterator) 및 생성기(generator)는 반복 개념을 핵심 언어 내로 바로 가져와 {{jsxref("Statements/for...of","for...of")}} 루프의 동작(behavior)을 사용자 정의하는 메커니즘을 제공합니다.

자세한 내용은, 다음을 참조하세요:

- [반복 프로토콜](/ko/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/for...of","for...of")}}
- {{jsxref("Statements/function*","function*")}} 및 {{jsxref("Generator")}}
- {{jsxref("Operators/yield","yield")}} 및 {{jsxref("Operators/yield*","yield*")}}

## 반복자

JavaScript에서 **반복자**(**Iterator**)는 시퀀스를 정의하고 종료시의 반환값을 잠재적으로 정의하는 객체입니다. 더 구체적으로 말하자면, 반복자는 두 개의 속성( `value`, `done`)을 반환하는 next() 메소드 사용하여 객체의 [Iterator protocol](/ko/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol)을 구현합니다. 시퀀스의 마지막 값이 이미 산출되었다면 `done` 값은 true 가 됩니다. 만약 `value`값이 `done` 과 함께 존재한다면, 그것은 반복자의 반환값이 됩니다.

반복자를 생성하면 `next()` 메소드를 반복적으로 호출하여 명시적으로 반복시킬 수 있습니다. 반복자를 반복시키는 것은 일반적으로 한 번씩만 할 수 있기 때문에, 반복자를 소모시키는 것이라고 할 수 있습니다. 마지막 값을 산출하고나서 `next()`를 추가적으로 호출하면 `{done: true}`. 가 반환됩니다.

JavaScript에서 가장 일반적인 반복자는 배열 반복자로, 배열의 각 값을 순서대로 반환합니다. 모든 반복자가 배열로 표현될수 있다고 상상할 수 있지만 , 이것은 사실은 아닙니다. 배열은 완전히 할당되어야 하지만, 반복자는 필요한만큼만 소모되므로 무제한 시퀀스로 표현할 수 있습니다. 이를 테면 0부터 무한대사이의 정수범위처럼 말이죠.

여기에 실습할 수 있는 예제가 있습니다. `start`에서 `end`까지 `step` 수 만큼 띄어진 정수 시퀀스를 정의하는 간단한 범위 반복자를 만들 수 있습니다. 최종적으로 시퀀스의 크기가 반환됩니다.

```javascript
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  var nextIndex = start;
  var n = 0;

  var rangeIterator = {
    next: function () {
      var result;
      if (nextIndex < end) {
        result = { value: nextIndex, done: false };
      } else if (nextIndex == end) {
        result = { value: n, done: true };
      } else {
        result = { done: true };
      }
      nextIndex += step;
      n++;
      return result;
    },
  };
  return rangeIterator;
}
```

위의 반복자를 사용하면 아래와 같습니다:

```javascript
var it = makeRangeIterator(1, 4);

var result = it.next();
while (!result.done) {
  console.log(result.value); // 1 2 3
  result = it.next();
}

console.log("Iterated over sequence of size: ", result.value);
```

It is not possible to know reflectively whether a particular object is an iterator. If you need to do this, use [Iterables](#iterables).

## Generator functions

잘 만들어진 반복자(Iterator)는 유용한 도구인 반면, 이것을 생성할 때는 주의해서 프로그래밍을 해야 하는데, 반복자 내부에 명시적으로 상태를 유지할 필요가 있기 때문입니다. 생성자(Generator) 함수는 이에 대한 강력한 대안을 제공합니다: 실행이 연속적이지 않은 하나의 함수를 작성함으로서 개발자가 iterative algorithm을 정의할 수 있게 해줍니다. 생성자 함수는 {{jsxref("Statements/function*","function*")}} 문법을 사용하여 작성됩니다. 생성자 함수가 최초로 호출될 때, 함수 내부의 어떠한 코드도 실행되지 않고, 대신 생성자라고 불리는 반복자 타입을 반환합니다. 생성자의 **next** 메소드를 호출함으로서 어떤 값이 소비되면, 생성자 함수는 **yield** 키워드를 만날 때까지 실행됩니다.

생성자 함수는 원하는 만큼 호출될 수 있고, 매번 새로운 생성자를 반환합니다다. 하지만, 각 생성자는 단 한 번만 순회될 수 있을 것입니다.

위의 예제 코드에 생성자를 적용한 것입니다. 두 코드의 행위는 동일하지만, 생성자를 사용한 쪽이 쓰거나 읽기가 훨씬 쉽습니다.

```javascript
function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let n = 0;
  for (let i = start; i < end; i += step) {
    n++;
    yield i;
  }
  return n;
}
```

## Iterables

객체는 값이 {{jsxref("Statements/for...of", "for..of")}} 구조 내에서 반복되는 것 같은 그 반복 동작을 정의하는 경우 반복이 가능(**iterable**)합니다. {{jsxref("Array")}} 또는 {{jsxref("Map")}}과 같은 일부 내장 형은 기본 반복 동작이 있지만 다른 형(가령 {{jsxref("Object")}})은 없습니다.

**반복가능**하기 위해서, 객체는 **@@iterator** 메서드를 구현해야 합니다. 즉, 객체( 혹은 그 [프로토타입 체인](/ko/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)에 등장하는 객체 중 하나)가 {{jsxref("Symbol.iterator")}} 키를 갖는 속성이 있어야 함을 뜻합니다.

하나의 iterable은 단 한 번, 혹은 여러번 반복가능합니다. 어떤 순간에 어떻게 사용할 지는 프로그래머에게 달려있습니다. 단 한 번 반복가능한 iterable(e.g. Generator)은 관습적으로 자신의 **@@iterator** 메소드로부터 **this**를 반환합니다. 반면, 여러 번 반복 가능한 iterables은 **@@iterator** 메소드가 호출되는 매 회 새로운 iterator를 반드시 반환해야합니다.

### 사용자 정의 iterable

이와 같이 자신의 반복가능 객체를 만들 수 있습니다:

```javascript
    var myIterable = {
        *[Symbol.iterator]() {
            yield 1;
            yield 2;
            yield 3;
        }
    }

    for (let value of myIterable) {
        console.log(value);
    }
    // 1
    // 2
    // 3

    or

    [...myIterable]; // [1, 2, 3]
```

### 내장 iterable

{{jsxref("String")}}, {{jsxref("Array")}}, {{jsxref("TypedArray")}}, {{jsxref("Map")}} 및 {{jsxref("Set")}}은 모두 내장 반복가능 객체입니다, 그들의 프로토타입 객체가 모두 {{jsxref("Symbol.iterator")}} 메서드가 있기 때문입니다.

### iterable을 기대하는 구문

일부 문(statement) 및 식(expression)은 iterable합니다, 가령 {{jsxref("Statements/for...of","for-of")}} 루프, {{jsxref("Operators/Spread_operator","spread syntax","",1)}}, {{jsxref("Operators/yield*","yield*")}} 및 {{jsxref("Operators/Destructuring_assignment","해체 할당","",1)}}.

```js
for (let value of ["a", "b", "c"]) {
  console.log(value);
}
// "a"
// "b"
// "c"

[..."abc"]; // ["a", "b", "c"]

function* gen() {
  yield* ["a", "b", "c"];
}

gen().next(); // { value:"a", done:false }

[a, b, c] = new Set(["a", "b", "c"]);
a; // "a"
```

## Generator 심화

생성자 함수는 요청에 따라 그 산출된(yielded, yield 식으로 산출된) 값을 계산하고, 계산하기 비싼(힘든) 수열 또는 위에 설명한 대로 무한 수열이라도 효율적으로 나타내게 합니다.

{{jsxref("Global_Objects/Generator/next","next()")}} 메서드는 또한 생성기의 내부 상태를 수정하는 데 쓰일 수 있는 값을 받습니다. `next()`에 전달되는 값은 생성기가 중단된 마지막 `yield` 식의 결과로 처리됩니다.

여기 sequence(수열)을 재시작하기 위해 `next(x)`를 사용하는 피보나치 생성기가 있습니다:

```js
function* fibonacci() {
  var fn1 = 0;
  var fn2 = 1;
  while (true) {
    var current = fn1;
    fn1 = fn2;
    fn2 = current + fn1;
    var reset = yield current;
    if (reset) {
      fn1 = 0;
      fn2 = 1;
    }
  }
}

var sequence = fibonacci();
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
```

제너레이터의 {{jsxref("Global_Objects/Generator/throw","throw()")}} 메서드를 호출하고 throw해야 하는 예외 값을 전달하여 생성자가 예외를 throw하도록 할 수 있습니다. 이 예외는 생성기의 현재 일시 중단된 컨텍스트에서 throw됩니다. 마치 현재 일시 중단된 `yield` 가 대신 `throwvalue` 문인 것처럼 말입니다.

예외가 생성기 내에서 포착되지 않으면 `throw()` 호출을 통해 전파되고 이후의 `next()` 호출은 `done` 속성이 `true` 가 됩니다.

제너레이터에는 주어진 값을 반환하고 제너레이터 자체를 완료하는 {{jsxref("Global_Objects/Generator/return","return(value)")}} 메서드가 있습니다.

{{PreviousNext("Web/JavaScript/Guide/Using_promises", "Web/JavaScript/Guide/Meta_programming")}}
