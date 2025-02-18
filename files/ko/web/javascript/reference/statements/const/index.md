---
title: const
slug: Web/JavaScript/Reference/Statements/const
---

{{jsSidebar("Statements")}}

**`const` 선언**은 블록 범위의 상수를 선언합니다. 상수의 값은 재할당할 수 없으며 다시 선언할 수도 없습니다.

{{InteractiveExample("JavaScript Demo: Statement - Const")}}

```js interactive-example
const number = 42;

try {
  number = 99;
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
  // (Note: the exact output may be browser-dependent)
}

console.log(number);
// Expected output: 42
```

## 구문

```js
    const name1 = value1 [, name2 = value2 [, ... [, nameN = valueN]]];
```

- `nameN`
  - : 상수의 이름. 아무 유효한 {{Glossary("identifier", "식별자")}}를 사용할 수 있습니다.
- `valueN`
  - : 상수의 값. 아무 유효한 [표현식](/ko/docs/Web/JavaScript/Guide/Expressions_and_operators#%ed%91%9c%ed%98%84%ec%8b%9d)이나 가능합니다.

## 설명

이 선언은 선언된 함수에 전역 또는 지역일 수 있는 상수를 만듭니다. 상수 초기자(initializer)가 필요합니다. 즉 선언되는 같은 문에 그 값을 지정해야 합니다(이는 나중에 변경될 수 없는 점을 감안하면 말이 됩니다).

상수는 [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let) 문을 사용하여 정의된 변수와 마찬가지로 블록 범위(block-scope)입니다. 상수의 값은 재할당을 통해 바뀔 수 없고 재선언될 수 없습니다.

[`let`](/ko/docs/Web/JavaScript/Reference/Statements/let)에 적용한 "[일시적 사각 지대](/ko/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_and_errors_with_let)"에 관한 모든 고려는, `const`에도 적용합니다.

상수는 같은 범위의 상수 또는 변수와 그 이름을 공유할 수 없습니다.

## 예제

다음 예제는 상수가 어떻게 동작하는지 보입니다. 브라우저 콘솔에서 따라해보세요.

```js
// 주의: 상수 선언에는 대소문자 모두 사용할 수 있지만,
// 일반적인 관습은 모두 대문자를 사용하는 것입니다.

// MY_FAV를 상수로 정의하고 그 값을 7로 함
const MY_FAV = 7;

// 에러가 발생함
MY_FAV = 20;

// 7 출력
console.log("my favorite number is: " + MY_FAV);

// 상수를 재선언하려는 시도는 오류 발생 - Uncaught SyntaxError: Identifier 'MY_FAV' has already been declared
const MY_FAV = 20;

// MY_FAV라는 이름은 위에서 상수로 예약되어 있어서 역시 실패함.
var MY_FAV = 20;

// 역시 오류가 발생함
let MY_FAV = 20;

// 블록 범위의 특성을 아는게 중요
if (MY_FAV === 7) {
    // 블록 범위로 지정된 MY_FAV 라는 변수를 만드므로 괜찮습니다
    // (let으로 const 변수가 아닌 블록 범위를 선언하는 것과 똑같이 동작합니다)
    let MY_FAV = 20;

    // MY_FAV는 이제 20입니다
    console.log('my favorite number is ' + MY_FAV);

    // 이 선언은 전역으로 호이스트되고 에러가 발생합니다.
    var MY_FAV = 20;
}

// MY_FAV는 여전히 7
console.log('my favorite number is ' + MY_FAV);

// const 선언시에 초기값을 생략해서 오류 발생
const FOO;

// const는 오브젝트에도 잘 동작합니다
const MY_OBJECT = {'key': 'value'};

// 오브젝트를 덮어쓰면 오류가 발생합니다
MY_OBJECT = {'OTHER_KEY': 'value'};

// 하지만 오브젝트의 키는 보호되지 않습니다.
// 그러므로 아래 문장은 문제없이 실행됩니다
MY_OBJECT.key = 'otherValue'; // 오브젝트를 변경할 수 없게 하려면 Object.freeze() 를 사용해야 합니다

// 배열에도 똑같이 적용됩니다
const MY_ARRAY = [];
// 배열에 아이템을 삽입하는 건 가능합니다
MY_ARRAY.push('A'); // ["A"]
// 하지만 변수에 새로운 배열을 배정하면 에러가 발생합니다
MY_ARRAY = ['B']
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var)
- [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let)
- [JavaScript 안내서의 상수](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#constants)
