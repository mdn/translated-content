---
title: 함수
slug: Web/JavaScript/Guide/Functions
---

{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}

함수는 JavaScript에서 기본 구성 요소 중 하나입니다. JavaScript의 함수는 작업을 수행하거나 값을 계산하는 명령문의 집합인 프로시저(procedure)와 비슷하지만, 프로시저가 함수로 쓰이려면 입력을 반드시 받아야 하고 입력과 명확한 관계가 있는 출력을 반환해야 합니다. 함수를 사용하려면 함수를 호출할 스코프 내에서 함수를 정의해야 합니다.

자세한 내용은 [JavaScript 함수](/ko/docs/Web/JavaScript/Reference/Functions)에 대한 문서를 참조하세요.

## 함수 정의

### 함수 선언

함수 정의(또는 함수 선언)는 다음과 같은 [`함수`](/ko/docs/Web/JavaScript/Reference/Statements/function) 키워드로 구성되어 있습니다.

- 함수의 이름
- 함수의 매개변수들, 괄호로 묶고 쉼표로 구분합니다.
- 함수를 정의하는 JavaScript 문으로 중괄호로 묶습니다. `{ /* ... */ }`

예를 들어, 아래의 코드는 `square`라는 간단한 함수를 정의합니다.

```js
function square(number) {
  return number * number;
}
```

함수 `square`은 `number`라는 하나의 매개변수를 가집니다. 이 함수는 함수의 매개변수(`number`)를 곱한 값을 반환하는 간단한 구문을 가지고 있습니다. [`return`](/ko/docs/Web/JavaScript/Reference/Statements/return) 문은 함수가 반환하는 값을 지정합니다.

```js
return number * number;
```

기본적으로 `number`와 같은 매개변수는 **값**으로 함수에 전달됩니다. 따라서 함수 내의 코드가 함수에 전달된 매개 변수에 완전히 새로운 값을 할당하는 경우에도 변경 사항은 **전역적으로 또는 해당 함수를 호출한 코드에 반영되지 않습니다**.

객체를 매개 변수로 전달할 때 함수가 객체의 속성을 변경한다면 다음 예제와 같이 함수 외부에서 해당 변경 사항을 볼 수 있습니다.

```js
function myFunc(theObject) {
  theObject.make = "Toyota";
}

const mycar = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

// `x`의 값은 "Honda"입니다.
const x = mycar.make;

// `make` 속성은 함수에 의해 `Toyota`로 변경됩니다.
myFunc(mycar);

// `y`의 값은 "Toyota"입니다.
const y = mycar.make;
```

배열(Array)을 매개 변수로 전달할 때 함수가 배열의 값을 변경한다면 다음 예제와 같이 함수 외부에서 해당 변경 사항을 볼 수 있습니다.

```js
function myFunc(theArr) {
  theArr[0] = 30;
}

const arr = [45];

console.log(arr[0]); // 45
myFunc(arr);
console.log(arr[0]); // 30
```

### 함수 표현식

위의 함수 선언은 구문상 명령문이지만 함수는 **함수 표현식**([function expression](/ko/docs/Web/JavaScript/Reference/Operators/function))으로도 만들 수 있습니다.

이러한 함수를 **익명 함수**라 하며. 함수가 이름을 가질 필요는 없음을 의미합니다. 예를 들어, 제곱 함수 `square`은 다음과 같이 정의 할 수 있습니다.

```js
const square = function (number) {
  return number * number;
};
const x = square(4); // `x` 의 값은 16 입니다.
```

하지만 함수 표현식에서도 함수의 이름을 지정할 수 있습니다. 함수가 자신을 참조할 수 있고, 디버거의 스택 추적에서 함수를 보다 쉽게 식별할 수 있습니다.

```js
const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));
```

함수 표현식은 함수를 다른 함수의 매개변수로 전달할 때 편리합니다. 다음 예제에서는 첫 번째 매개변수로 함수, 두 번째 매개변수로 배열을 전달받는 `map` 함수를 보여줍니다.

```js
function map(fn, arr) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i]);
  }
  return result;
}
```

계속해서 아래의 코드에서 함수는 함수 표현식으로 정의된 함수를 받고 두 번째 인수로 전달된 배열의 각 요소에 대해 함수를 호출합니다.

```js
function map(fn, arr) {
  const result = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn(arr[i]);
  }
  return result;
}

const fn = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const cube = map(fn, numbers);
console.log(cube);
```

함수는 `[0, 1, 8, 125, 1000]`을 반환합니다.

JavaScript에서는 조건에 따라 함수를 정의할 수 있습니다. 예를 들어, 아래 함수는 `num`이 `0`인 경우에만 `myFunc`를 정의합니다.

```js
let myFunc;

if (num === 0) {
  myFunc = function (theObject) {
    theObject.make = "Toyota";
  };
}
```

여기에 설명된 것 이외에도 {{jsxref("eval", "eval()")}} 처럼 {{jsxref("Function")}} 생성자를 사용하여 런타임 중 문자열에서 함수를 만들 수 있습니다.

객체의 속성이 함수인 것을 **메서드**(method)라고 합니다. 자세한 내용은 [객체로 작업하기](/ko/docs/Web/JavaScript/Guide/Working_with_Objects) 문서를 참고하세요.

## 함수 호출

함수를 정의해도 함수가 실행되는 것은 아닙니다. 함수를 정의하는 것은 함수의 이름과 수행할 작업을 지정하는 것입니다.

함수를 **호출**하면 지정된 매개 변수를 가지고 작업이 수행됩니다. 예를 들어 함수 `square`를 정의했다면 함수는 다음과 같이 호출할 수 있습니다.

```js
square(5);
```

위의 문장은 `5`라는 인수를 가지고 함수를 호출합니다. 함수는 이 함수의 실행문을 실행하고 값 `25`를 반환합니다.

함수는 호출될 때 스코프 내에 있어야 합니다. 그러나 함수의 선언은 이 예시 처럼 [호이스팅](#함수-호이스팅) 될 수 있습니다. (코드에서 호출 아래에 선언문이 있습니다.)

함수의 스코프는 함수가 선언된 곳(또는 최상위 레벨에 선언되었다면 전역)입니다.

```js example-bad
console.log(square); // square는 초기값으로 undefined를 가지고 호이스트된다.
console.log(square(5)); // TypeError: square는 함수가 아니다.
square = function (n) {
  return n * n;
};
```

함수의 인수는 문자열과 숫자에 제한되지 않습니다. 여러분은 함수에 전체 객체를 전달할 수 있습니다. [객체로 작업하기](/ko/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_Properties)에서 정의된 `showProps()` 함수는 인수로 객체를 받는 함수의 예입니다.

함수는 자신을 호출할 수 있습니다. 예를 들어, 팩토리얼을 재귀적으로 계산하는 함수가 있습니다.

```js
function factorial(n) {
  if (n == 0 || n == 1) return 1;
  else return n * factorial(n - 1);
}
```

다음과 같이 1부터 5까지의 팩토리얼을 계산할 수 있습니다.

```js
const a = factorial(1); // a의 값은 1이 됩니다.
const b = factorial(2); // b의 값은 2가 됩니다.
const c = factorial(3); // c의 값은 6이 됩니다.
const d = factorial(4); // d의 값은 24가 됩니다.
const e = factorial(5); // e의 값은 120이 됩니다.
```

함수를 호출하는 다른 방법들이 있습니다. 함수를 동적 호출해야 하거나, 함수의 인수의 수가 다르거나, 함수 호출의 맥락이 런타임에서 결정된 특정한 객체로 설정해야 하는 경우가 자주 있습니다.

함수가 그 자체로 객체이며 이 객체는 차례로 메서드를({{jsxref("Function")}} 객체를 참조) 가지고 있습니다. {{jsxref("Function.apply", "apply()")}} 메서드를 사용하여 이 목표를 달성할 수 있습니다.

## 함수 호이스팅

```js
console.log(square(5)); // `25`

function square(n) {
  return n * n;
}
```

이 코드는 `square` 함수가 정의되기 전에 호출되었지만 오류 없이 실행됩니다. JavaScript 인터프리터가 전체 함수 선언을 현재 스코프의 최상단으로 끌어올려지기 때문에 위의 코드는 다음과 같습니다.

```js
// 모든 함수 선언이 스코프의 최상단으로 끌어올려집니다.
function square(n) {
  return n * n;
}

console.log(square(5)); // `25`
```

함수 호이스팅은 **함수 선언**에만 적용됩니다. 함수 표현식에선 쓸 수 없습니다. 아래의 코드는 실행되지 않습니다.

```js example-bad
console.log(square); // ReferenceError: 초기화 되기 전에는 `square`에 접근할 수 없습니다.

const square = function (n) {
  return n * n;
};
```

## 함수 스코프

함수 내에서 정의된 변수는 변수가 함수의 스코프에서만 정의되어 있기 때문에, 함수 외부의 어느 곳에서든 접근할 수 없습니다. 그러나 함수가 정의된 스코프 내에서 정의된 모든 변수나 함수에는 접근할 수 있습니다.

즉, 전역함수는 모든 전역 범위에 정의된 모든 변수에 접근할 수 있습니다. 다른 함수 내부에 정의 된 함수는 상위 함수에 정의된 모든 변수에 접근할 수 있고, 또한 상위 함수가 접근할 수 있는 다른 변수에도 접근할 수 있습니다.

```js
// 다음 변수는 전역 스코프에 있습니다.
const num1 = 20;
const num2 = 3;
const name = "Chamakh";

// 이 함수는 전역 스코프에 있습니다.
function multiply() {
  return num1 * num2;
}

multiply(); // 60

// 중첩된 함수의 예시
function getScore() {
  const num1 = 2;
  const num2 = 3;

  function add() {
    return `${name} scored ${num1 + num2}`;
  }

  return add();
}

getScore(); // "Chamakh scored 5"
```

## 스코프와 함수 스택

### 재귀

함수는 자신을 참조하고 호출할 수 있습니다. 함수가 자신을 참조하는 방법에는 세 종류가 있습니다.

1. 함수의 이름
2. [`arguments.callee`](/ko/docs/Web/JavaScript/Reference/Functions/arguments/callee)
3. 함수를 참조하는 스코프 내 변수

예를 들어, 다음 함수의 정의를 고려해보세요.

```js
var foo = function bar() {
  // 여기에 구문이 들어갑니다.
};
```

함수 본문 내에서 다음은 모두 동일합니다.

1. `bar()`
2. `arguments.callee()`
3. `foo()`

자신을 호출하는 함수를 *재귀 함수*라고 합니다. 어찌 보면 재귀는 루프와 유사합니다. 둘 다 동일한 코드를 여러 번 실행하고, 무한 루프를 방지하는 조건 (여기서는 무한 재귀를 방지하는 조건)이 필요합니다.

예를 들어, 다음 루프는 재귀 함수로 바꿀 수 있고 그 함수를 호출할 수 있습니다.

```js
var x = 0;
while (x < 10) {
  // 루프 조건: "x < 10"
  // 뭔가 합니다.
  x++;
}
```

```js
function loop(x) {
  if (x >= 10)
    // "x >= 10" 는 탈출 조건 ("!(x < 10)"와 동일)
    return;
  // 뭔가 합니다.
  loop(x + 1); // 재귀 호출
}
loop(0);
```

그러나 일부 알고리즘은 단순 반복 루프가 될 수 없습니다. 예를 들어, [DOM](/ko/docs/DOM)과 같은 트리 구조의 모든 노드를 가져오는 것은 재귀를 사용하는 편이 더 간편합니다.

```js
function walkTree(node) {
  if (node == null) {
    return;
  }
  // 노드를 가지고 뭔가 합니다.
  for (var i = 0; i < node.childNodes.length; i++) {
    walkTree(node.childNodes[i]);
  }
}
```

함수 `loop` 와 비교하여, 각 재귀 호출 자체는 많은 재귀 호출을 수행합니다.

재귀 알고리즘을 비재귀 알고리즘으로 변환하는 것은 가능하지만 논리가 더 복잡해지는 경우가 있고 스택을 사용해야 합니다.

사실 재귀도 스택(함수 스택)을 사용합니다. 스택과 같은 동작은 다음 예제에서 확인할 수 있습니다.

```js
function foo(i) {
  if (i < 0) {
    return;
  }
  console.log(`begin: ${i}`);
  foo(i - 1);
  console.log(`end: ${i}`);
}
foo(3);

// Output:

// begin:3
// begin:2
// begin:1
// begin:0
// end:0
// end:1
// end:2
// end:3
```

### 중첩된 함수와 클로저

함수 내에 함수를 끼워 넣을 수 있습니다. 중첩된(내부) 함수는 그것을 포함하는 (외부) 함수에서만 사용할 수 있습니다.

그것은 또한 *클로저*를 형성합니다. 클로저는 (표현식을 "닫는")변수를 바인딩하는 환경과 함께 자유 변수를 가질 수 있는 표현(일반적으로는 함수)입니다.

중첩 함수는 클로저이므로, 중첩된 함수는 그것을 포함하는 함수의 인수와 변수를 "상속"할 수 있음을 의미합니다. 즉, 내부 함수는 외부 함수의 스코프를 포함합니다.

요약하자면,

- 내부 함수는 외부 함수의 명령문에서만 액세스할 수 있습니다.

- 내부 함수는 클로저를 형성합니다: 외부 함수는 내부 함수의 인수와 변수를 사용할 수 없는 반면에, 내부 함수는 외부 함수의 인수와 변수를 사용할 수 있습니다.

다음 예는 중첩된 함수를 보여줍니다.

```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
a = addSquares(2, 3); // 13
b = addSquares(3, 4); // 25
c = addSquares(4, 5); // 41
```

내부 함수는 클로저를 형성하기 때문에 외부 함수를 호출하고, 외부 및 내부 함수 모두에 인수를 지정할 수 있습니다.

```js
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
// 어떤 값이 들어와도 3을 더하는 함수라 생각해보세요.
fn_inside = outside(3);
result = fn_inside(5); // 8

result1 = outside(3)(5); // 8
```

### 변수의 보존

`inside`가 반환될 때 외부 함수의 인수 `x`가 보존된다는 점을 알 수 있습니다. 클로저는 그것을 참조하는 모든 스코프에서 인수와 변수를 보존해야 합니다. 각 호출은 잠재적으로 다른 인수를 제공할 수 있기 때문에, 클로저는 `outside`에 대하여 매번 새로 생성됩니다. 메모리는 그 무엇도 `inside`에 접근하지 않을 때만 해제됩니다.

변수의 보존은 일반 객체에서 참조를 저장하는 것과 별 차이점은 없지만, 사용자가 직접 참조를 설정하고 검사하는게 아니여서 명확하지 않은 경우가 많습니다.

### 다중 중첩 함수

함수는 다중 중첩될 수 있습니다. 예시입니다.

- 함수 `A`에는 함수 `B`가 포함되며, `B`에는 함수 `C`가 포함됩니다.
- 함수 `B`, `C`는 모두 클로저를 형성합니다. 그래서 `B`는 `A`에, `C`는 `B`를 접근 할 수 있습니다.
- 또한 `C`는 `A`에 접근 할 수 있는 `B`에도 접근할 수 있기 때문에 `A`에도 접근 할 수 있습니다.

따라서 클로저는 여러 스코프가 포함될 수 있으며, 이 스코프를 포함하는 함수의 스코프를 재귀적으로 포함합니다. 이것을 *스코프 체이닝*이라 합니다. (그것을 "체이닝"이라 하는 이유는 추후에 설명할 것입니다.)

다음 예를 살펴 보겠습니다.

```js
function A(x) {
  function B(y) {
    function C(z) {
      console.log(x + y + z);
    }
    C(3);
  }
  B(2);
}
A(1); // logs 6 (1 + 2 + 3)
```

이 예에서, `C`는 `B`의 `y`와 `A`의 `x`에 접근할 수 있고, 다음과 같이 됩니다.

1. `B`는 `A`를 포함하는 클로저를 형성합니다. 즉, `B`는 `A`의 인수와 변수를 엑세스할 수 있습니다.
2. `C`는 `B`를 포함하는 클로저를 형성합니다.
3. `C`의 클로저는 `B`를 포함하고 `B`의 클로저는 `A`를 포함하기 때문에, `C`의 클로저도 `A`를 포함합니다. 따라서 `C`는 `A`의 인수와 변수에 접근할 수 있다는 것을 의미합니다. 즉, `C`는 `A`의 스코프를 체이닝합니다.

하지만 `A`는 `C`의 변수인 `B`의 인수나 변수에 접근 할 수 없기 때문에 그 반대로는 불가능합니다. 따라서 `C`는 `B`에게만 비공개로 유지됩니다.

### 이름 충돌

클로저의 스코프에서 두 개의 인수 또는 변수의 이름이 같은 경우, *이름 충돌*이 발생합니다. 이 경우 더 안쪽 스코프가 우선순위를 갖습니다. 가장 바깥 스코프는 우선순위가 가장 낮은 반면에, 가장 안쪽 스코프는 가장 높은 우선순위를 갖습니다. 이것이 스코프 체인(scope chain)입니다. 체인의 첫번째는 가장 안쪽 스코프이고, 마지막은 가장 바깥 쪽 스코프입니다. 다음을 참고하세요.

```js
function outside() {
  var x = 10;
  function inside(x) {
    return x * 2;
  }
  return inside;
}
result = outside()(20); // 10 대신 20을 반환합니다
```

이름 충돌은 `x * 2`를 반환하는 부분에서 발생하며, `inside`의 매개 변수 `x`와 `outside`의 매개 변수 `x` 사이에서 발생합니다. 여기에서 스코프 체이닝은 {`inside`, `outside`, `전역 객체`}로 이루어집니다. 따라서 `inside`의 `x`는 `outside`의 `x`보다 높은 우선순위를 갖게 되고, 20(`inside`의 `x`)이 10(`outside`의 `x`) 대신에 반환됩니다.

## 클로저

클로저는 자바스크립트의 강력한 기능 중 하나입니다. 자바스크립트는 함수의 중첩(함수 안에 함수를 정의하는 것)을 허용하고, 내부 함수가 외부 함수 안에서 정의된 모든 변수와 함수(및 외부함수가 접근할 수 있는 다른 모든 변수와 함수들까지)에 대해 전체 접근 권한을 부여합니다.

하지만 외부 함수는 내부 함수에 정의된 변수와 함수에 접근 할 수 없습니다. 이는 내부 함수의 변수에 대한 일종의 캡슐화를 제공합니다.

또한, 내부 함수는 외부 함수의 스코프에 접근할 수 있기 때문에, 내부 함수가 외부 함수의 수명 보다 오래 생존하는 경우 외부 함수에서 선언된 변수나 함수는 외부 함수의 실행 기간보다 오래 유지됩니다. 내부 함수가 외부 함수 밖의 모든 스코프에서 사용 가능할 때 클로저가 생성됩니다.

```js
const pet = function (name) {
  // 외부 함수는 'name'이라 불리는 변수를 정의합니다.
  const getName = function () {
    return name; // 내부 함수는 외부 함수의 'name' 변수에 접근합니다.
  };
  return getName; // 내부 함수를 반환함으로써, 외부 스코프에 노출됩니다.
};

const myPet = pet("Vivie");

myPet(); // "Vivie"로 반환합니다.
```

클로저는 위 코드보다 더 복잡해 질 수도 있습니다. 외부 함수의 내부 변수를 다루는 메서드를 포함한 객체도 반환될 수도 있습니다.

```js
const createPet = function (name) {
  let sex;

  const pet = {
    // `setName(newName)`은 이 문맥에서
    // `setName: function (newName)`과 동일합니다.
    setName(newName) {
      name = newName;
    },

    getName() {
      return name;
    },

    getSex() {
      return sex;
    },

    setSex(newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };

  return pet;
};

const pet = createPet("Vivie");
pet.getName(); // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex(); // male
pet.getName(); // Oliver
```

위의 코드에서 외부 함수의 `name` 변수는 내부 함수에 접근할 수 있으며, 내부 함수를 통해서만 내부 변수에 접근할 수 있습니다. 내부 함수의 내부 변수는 외부 인수와 변수를 안전하게 저장하는 역할을 합니다. 이들은 내부 기능이 작동할 수 있게 '지속적'이고 '캡슐화된' 데이터를 보유합니다. 함수를 변수에 할당하거나 이름을 가질 필요가 없습니다.

```js
const getCode = (function () {
  const secureCode = "0]Eal(eh&2"; // 외부에서 접근할 수 없게 하고 싶은 변수.

  return function () {
    return secureCode;
  };
})();

getCode(); // `secureCode`를 반환합니다.
```

> **참고:** 클로저를 사용할 때 주의해야 할 점이 있습니다!
>
> 둘러싸인 함수가 외부 스코프의 변수와 동일한 이름을 가진 변수를 정의하면, 외부 스코프의 변수에 다시 참조할 방법이 없습니다. (내부 스코프 변수는 프로그램이 내부 스코프를 종료할 때까지 외부 스코프 변수를 [덮어씁니다](#name_conflicts). 이건 이름 충돌로 생각할 수 있습니다.)
>
> ```js example-bad
> // 외부 함수는 변수 `name`을 정의합니다.
> const createPet = function (name) {
>   return {
>     // 내부의 함수 또한 변수 `name`을 정의합니다.
>     setName(name) {
>       // 그럼 외부 함수에서 정의된 `name`에는 어떻게 접근해야 할까요?
>       name = name;
>     },
>   };
> };
> ```

## 인수(arguments) 객체 사용하기

함수의 인수는 배열과 비슷한 객체로 처리가 됩니다. 함수 내에서는, 전달 된 인수를 다음과 같이 다룰 수 있습니다.

```js
arguments[i];
```

`i` 는 `0`으로 시작하는 순서 번호입니다. 따라서 함수에 전달된 첫 번째 인수는 `arguments[0]` 입니다. 총 인수의 개수는 `arguments.length` 에서 얻을 수 있습니다.

인수(`arguments`) 객체를 이용하면, 보통 함수에 정의된 개수보다 많은 인수를 넘겨주면서 함수를 호출할 수 있습니다. 이것은 얼마나 많은 인수가 함수로 넘겨질지 모르는 상황에서 유용한 경우가 많습니다. `arguments.length`를 함수에 실제로 넘겨받은 인수의 수를 알아낼 때 사용할 수 있고 , 각각의 인수에 인수(`arguments`) 객체를 이용하여 접근 할 수 있습니다.

예를 들어, 여러 문자열을 연결하는 함수를 생각해 봅시다. 이 함수의 유일한 형식 인수는 각 문자열을 구분해주는 문자를 나타내는 문자열입니다. 이 함수는 다음과 같이 정의됩니다.

```js
function myConcat(separator) {
  // 리스트를 초기화한다
  let result = "";
  // arguments를 이용하여 반복한다
  for (let i = 1; i < arguments.length; i++) {
    result += arguments[i] + separator;
  }
  return result;
}
```

어떤 개수의 인수도 이 함수로 넘겨줄 수 있고, 이 함수는 각각의 인수를 하나의 문자열 "리스트" 로 연결합니다.

```js
// "red, orange, blue, "를 반환합니다.
myConcat(", ", "red", "orange", "blue");

// "elephant; giraffe; lion; cheetah; "를 반환합니다.
myConcat("; ", "elephant", "giraffe", "lion", "cheetah");

// "sage. basil. oregano. pepper. parsley. "를 반환합니다.
myConcat(". ", "sage", "basil", "oregano", "pepper", "parsley");
```

> **참고:** 인수(arguments) 객체는 배열과 닮은 것이지 배열이 아닙니다. 인수 객체는 번호가 붙여진 인덱스와 길이 속성을 가지고 있다는 점에서 배열과 닮은 것입니다. 인수 객체는 배열을 다루는 모든 메서드를 가지고 있지 않습니다.

더 자세한 정보를 얻고 싶으시면 {{jsxref("Function")}} 객체 문서를 참고하세요.

## 함수의 매개변수

ECMAScript 2015에서 추가된 매개변수 구문(parameter syntax)에는 기본 매개변수와 나머지 매개변수라는 두 가지 특수한 유형이 있습니다.

### 기본 매개변수

JavaScript에서 함수의 매개변수는 `undefined` 가 기본으로 설정됩니다. 하지만 경우에 따라 다른 기본값을 설정하는 것이 유용할 수 있습니다. 이것이 바로 기본 매개변수가 하는 일입니다.

이전에는 기본값 설정을 위해 함수 본문에서 매개변수 값을 테스트하고, `undefined`인 경우에 값을 할당하는 것이 보편적인 방식이었습니다.

다음 예제에서 `b` 매개변수에 아무 값도 주지 않으면, `a * b`를 계산 할 때 `b` 매개변수의 값은 `undefined`가 되므로 `multiply` 함수 호출은 `NaN`을 반환할 것입니다. 그러나 두번째 줄에서 이 문제가 방지됩니다.

```js
// ECMAScript 2015 이전
function multiply(a, b) {
  b = typeof b !== "undefined" ? b : 1;
  return a * b;
}

multiply(5); // 5
```

디폴트 매개변수를 사용한다면 함수 본문에서 일일히 확인할 필요가 없습니다. 간단히 `b` 의 기본값으로 `1`을 넣어주면 됩니다.

```js
// ECMAScript 2015 이후
function multiply(a, b = 1) {
  return a * b;
}

multiply(5); // 5
```

더 자세한 내용을 보고 싶으시면, [기본 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters) 문서를 참조하세요.

### 나머지 매개변수

[나머지 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/rest_parameters) 구문을 사용하면 배열로 임의 개수의 인수를 나타낼 수 있습니다.

이 예제에서, 우리는 나머지 매개변수를 2번째 인수부터 마지막 인수까지 얻기 위하여 사용하였습니다. 그리고 우리는 첫번째 값으로 나머지 매개변수에 곱하였습니다. 이 예제는 다음 섹션에서 소개할 화살표(arrow) 함수 입니다.

```js
function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

var arr = multiply(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

## 화살표 함수

[화살표 함수 표현](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions) (**뚱뚱한 화살표(fat arrow) 함수라고 알려진**)은 함수 표현식에 비해 짧은 문법을 가지고 있고 사전적으로 this 값을 묶습니다. 화살표 함수는 언제나 익명입니다. hacks.mozilla.org 블로그 포스트 "[ES6 In Depth: Arrow functions](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)" 를 참조하세요.

화살표 함수 도입에는 더 짧은 함수와 바인딩 되지않은 `this`라는 두 가지 요인이 영향을 미쳤습니다.

### 더 짧은 함수

몇몇 함수 패턴에서는 더 짧은 함수를 사용하는 것이 더 유용합니다. 한번 비교해보세요.

```js
var a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

var a2 = a.map(function (s) {
  return s.length;
});
console.log(a2); // logs [8, 6, 7, 9]

// 화살표 함수 사용
var a3 = a.map((s) => s.length);
console.log(a3); // logs [8, 6, 7, 9]
```

### 사전적 `this`

화살표 함수 이전 까지 모든 new 함수는 고유한 this 값을 정의(생성자의 경우 new 객체, [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)에서는 호출 되지 않음, 함수가 "객체 메서드"로 호출 되는 경우의 기본 객체 등)했습니다. 이런 방식은 객체 지향 프로그래밍 스타일과 잘 맞지 않았습니다.

```js
function Person() {
  // `Person()` 생성자는 `this`를 자신으로 정의합니다.
  this.age = 0;

  setInterval(function growUp() {
    // 느슨한 모드에서 `growUp()` 함수는 `this`를 전역 객체로 정의합니다.
    // 이는 `Person()` 생성자에 의해 정의된 `this`와 다릅니다.
    this.age++;
  }, 1000);
}

var p = new Person();
```

ECMAScript 3/5 에서 이 문제는 `this` 안의 값을 뒤덮을 수 있는 변수에 할당하면서 해결했습니다.

```js
function Person() {
  var self = this; // `self` 대신 `that`을 선택하는 사람도 있습니다.
  // 어느 한 쪽만 선택하고 그것만 사용하도록 하죠.
  self.age = 0;

  setInterval(function growUp() {
    // 콜백은 기대하는 객체의 `self` 변수를 참조합니다.
    self.age++;
  }, 1000);
}
```

또는 적절한 `this` 값이 `growUp()` 함수에 전달되도록, [바인딩된 함수](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)를 만들 수도 있습니다.

화살표 함수에는 `this`가 없습니다. 화살표 함수를 포함하는 객체 값이 사용됩니다. 따라서 다음 코드에서 `setInterval`에 전달 된 함수 내의 `this` 값은 화살표 함수를 둘러싼 함수의 `this`와 같은 값을 갖습니다.

```js
function Person() {
  this.age = 0;

  setInterval(() => {
    // `this`는 person 객체를 가리킵니다.
    this.age++;
  }, 1000);
}

var p = new Person();
```

## 미리 정의된 함수들

JavaScript에는 몇 가지 최상위 레벨의 내장 함수가 있습니다:

- {{jsxref("Global_Objects/eval", "eval()")}}

  - : **`eval()`** 메소드는 문자열로 표현된 JavaScript 코드를 실행합니다.

- {{jsxref("Global_Objects/uneval", "uneval()")}} {{non-standard_inline}}

  - : **`uneval()`** 메소드는 {{jsxref("Object")}}의 소스코드를 표현하는 문자열을 만듭니다.

- {{jsxref("Global_Objects/isFinite", "isFinite()")}}

  - : 전역 **`isFinite()`** 함수는 전달받은 값이 유한한지 결정합니다. 만약 필요하다면, 매개변수는 첫번째로 숫자로 변환됩니다.

- {{jsxref("Global_Objects/isNaN", "isNaN()")}}

  - : **`isNaN()`** 함수는 {{jsxref("Global_Objects/NaN", "NaN")}}인지 아닌지 결정합니다.
    > **참고:** `isNaN` 함수 안의 강제 변환은 [흥미로운](/ko/docs/Web/JavaScript/Reference/Global_Objects/isNaN#Description) 규칙을 가지고 있습니다.
    >
    > {{jsxref("Number.isNaN()")}}을 이용해 값이 NaN인지 확인할 수 있습니다.
    >
    > ECMAScript6에서 정의된 값이 숫자값이 아닌 경우에는 [`typeof`](/ko/docs/Web/JavaScript/Reference/Operators/typeof)를 사용할 수도 있습니다.

- {{jsxref("Global_Objects/parseFloat", "parseFloat()")}}

  - **`parseFloat()`** 함수는 문자열 인수 값을 해석하여 부동소숫점 수를 반환합니다.

- {{jsxref("Global_Objects/parseInt", "parseInt()")}}

  - **`parseInt()`** 함수는 문자열 인수 값을 수학적인 수 체계에 따라 해석하여 특정한 진법의 정수를 반환합니다.

- {{jsxref("Global_Objects/decodeURI", "decodeURI()")}}

  - **`decodeURI()`** 함수는 사전에 {{jsxref("Global_Objects/encodeURI", "encodeURI")}}을 통해 만들어지거나 비슷한 과정을 통해 만들어진 URI(Uniform Resource Identifier) 를 해독합니다.

- {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent()")}}

  - **`decodeURIComponent()`** 함수는 인코딩으로 이전에 생성된 URI({{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}})를 디코딩합니다. URI(Uniform Resource Identifier) 또는 유사한 루틴을 사용합니다.

- {{jsxref("Global_Objects/encodeURI", "encodeURI()")}}

  - **`encodeURI()`** 메소드는 URI(Uniform Resource Identifier)를 각 인스턴스의 특정한 문자를 한 개, 두 개, 세 개 또는 네 개의 UTF-8인코딩으로 나타내어지는 연속된 확장문자들과 바꾸는 방법으로 부호화 합니다. (두 "surrogate"문자로 구성된 문자들은 오직 네 개의 연속된 확장문자 입니다)

- {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent()")}}

  - **`encodeURIComponent()`** 메소드는 URI(Uniform Resource Identifier) 컴포넌트를 각 인스턴스의 특정한 문자를 한개, 두 개, 세 개 또는 네 개의 UTF-8 인코딩으로 나타내어지는 연속된 확장문자들과 바꾸는 방법으로 부호화 합니다.(두 "surrogate"문자로 구성된 문자들은 오직 네개의 연속된 확장문자 입니다.)

- {{jsxref("Global_Objects/escape", "escape()")}} {{deprecated_inline}}

  - 곧 사라질 **`escape()`** 메소드는 한 문자열에서 특정 문자들이 16진 확장 비트열로 바뀌어진 문자열로 계산합니다. {{jsxref("Global_Objects/encodeURI", "encodeURI")}} 또는 {{jsxref("Global_Objects/encodeURIComponent", "encodeURIComponent")}} 를 사용하세요.

- {{jsxref("Global_Objects/unescape", "unescape()")}} {{deprecated_inline}}
  - 곧 사라질 **`unescape()`** 메소드는 문자열에서 확장 비트열이 확장 비트열이 나타내는 문자로 바뀌어진 문자열로 계산합니다. {{jsxref("Global_Objects/escape", "escape")}}에서 확장 비트열이 소개될 것입니다. `unescape()` 메소드가 곧 사라지기 때문에, {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} or {{jsxref("Global_Objects/decodeURIComponent", "decodeURIComponent")}} 를 대신 사용하세요.

{{PreviousNext("Web/JavaScript/Guide/Loops_and_iteration", "Web/JavaScript/Guide/Expressions_and_Operators")}}
