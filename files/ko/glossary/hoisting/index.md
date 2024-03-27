---
title: 호이스팅
slug: Glossary/Hoisting
l10n:
  sourceCommit: 8fb5853ceee5db8ac6e1c564c6dda4b3f5ec86c5
---

{{GlossarySidebar}}

JavaScript **호이스팅**은 인터프리터가 코드를 실행하기 전에 함수, 변수, 클래스 또는 임포트(import)의 선언문을 해당 범위의 맨 위로 끌어올리는 것처럼 보이는 현상을 뜻합니다.

호이스팅은 ECMAScript 사양에서 규범적으로 정의된 용어가 아닙니다. 사양에서는 선언 그룹을 [_HoistableDeclaration_](https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#prod-HoistableDeclaration)로 정의되어 있지만, 여기에는 [`function`](/ko/docs/Web/JavaScript/Reference/Statements/function), [`function*`](/ko/docs/Web/JavaScript/Reference/Statements/function*) 만 포함되어 있습니다, [`async 함수`](/ko/docs/Web/JavaScript/Reference/Statements/async_function), [`async 함수`](/ko/docs/Web/JavaScript/Reference/Satements/async_function*) 선언을 사용하세요. 호이스팅은 다른 방식이긴 하지만 종종 [`var`](/ko/docs/Web/JavaScript/Reference/Statements/var) 선언의 기능으로 간주되기도 합니다. 구어체 용어로는 다음과 같은 동작을 호이스팅으로 간주할 수 있습니다.

1. 변수가 선언된 줄 이전에 해당 범위에서 변수 값을 사용할 수 있는 경우 ("값 호이스팅")
2. 변수가 선언된 줄 이전에 해당 범위의 변수를 참조할 수 있지만 {{jsxref("ReferenceError")}}를 던지지 않고 값이 항상 [`정의되지 않음`](/ko/docs/Web/JavaScript/Reference/Global_Objects/undefined)인 경우입니다. ("선언 호이스팅")
3. 변수를 선언하면 변수가 선언된 줄 앞의 범위에서 동작이 변경됩니다.
4. 선언의 부작용은 선언이 포함된 나머지 코드를 평가하기 전에 발생합니다.

위의 네 가지 함수 선언은 유형 1 동작으로 호출되고, `var` 선언은 유형 2 동작으로 호출됩니다. [`let`](/ko/docs/Web/JavaScript/Reference/Statements/let), [`const`](/ko/docs/Web/JavaScript/Reference/Statements/const) 및 [`class`](/ko/docs/Web/JavaScript/Reference/Satements/class) 선언(총칭하여 lexical 선언이라고도 함)은 유형 3 동작으로 올라갑니다. [`import`](/ko/docs/Web/JavaScript/Reference/Statements/import) 선언은 유형 1 및 유형 4 동작으로 호출됩니다.

일부에서는 `let`, `const` 및 `class`를 호이스트되지 않는 것으로 보는 것을 선호하는데, 그 이유는 [temporal dead zone](/ko/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)이 선언 이전의 변수 사용을 엄격하게 금지하고 있기 때문입니다. 호이스팅은 보편적으로 합의된 용어가 아니기 때문에 이러한 반대는 괜찮습니다. 그러나 temporal dead zone은 그 범위에서 관찰 가능한 다른 변화를 일으킬 수 있으며, 이는 어떤 형태의 호이스팅이 있음을 시사합니다.

```js
const x = 1;
{
  console.log(x); // 참조 에러
  const x = 2;
}
```

만약 `const x = 2` 선언이 전혀 호출되지 않는다면(즉, 실행될 때만 효력이 발생한다면), `console.log(x)` 문은 상위 범위에서 `x` 값을 읽을 수 있어야 합니다. 그러나 `const` 선언은 여전히 정의된 전체 범위를 "오염"시키기 때문에 `console.log(x)` 문은 아직 초기화되지 않은 `const x = 2` 선언에서 `x`를 대신 읽어서 {{jsxref("ReferenceError")}}를 던집니다. 하지만 실용적인 관점에서 볼 때 이러한 선언의 호이스팅은 의미 있는 기능을 제공하지 않기 때문에 어휘 선언을 비호이스팅으로 특성화하는 것이 더 유용할 수 있습니다.

다음은 호이스팅의 한 형태가 아니라는 점에 유의하세요.

```js
{
  var x = 1;
}
console.log(x); // 1
```

여기에는 "선언 전 접근"이 없는데, 이는 단순히 `var` 선언이 블록으로 범위가 지정되지 않았기 때문입니다.

호이스팅에 대한 자세한 내용은 다음을 참조하십시오.

- `var`/`let`/`const` 호이스팅 - [문법 및 유형 가이드](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting)
- `함수` 호이스팅 - [함수 가이드](/ko/docs/Web/JavaScript/Guide/Functions#function_hoisting)
- `class` 호이스팅 - [클래스 가이드](/ko/docs/Web/JavaScript/Guide/Using_classes#class_declaration_hoisting)
- `import` 호이스팅 - [JavaScript 모듈](/ko/docs/Web/JavaScript/Guide/Modules#import_declarations_are_hoisted)

## 참조

- [`var` 문](/ko/docs/Web/JavaScript/Reference/Statements/var) - MDN
- [`let` 문](/ko/docs/Web/JavaScript/Reference/Statements/let) - MDN
- [`const` 문](/ko/docs/Web/JavaScript/Reference/Statements/const) - MDN
- [`function` 문](/ko/docs/Web/JavaScript/Reference/Statements/function) - MDN
