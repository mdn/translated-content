---
title: Property (JavaScript)
slug: Glossary/Property/JavaScript
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**JavaScript 속성**은 키와 값을 연결하는 [객체](/ko/docs/Web/JavaScript/Data_structures#objects)의 구성원입니다. JavaScript 객체는 속성 모음을 저장하는 데이터 구조입니다.

속성은 다음 부분으로 구성됩니다.

- [문자열](/ko/docs/Web/JavaScript/Reference/Global_Objects/String)이나 [Symbol](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)인 "키" 또는 "이름".
- 임의의 JavaScript 값이 될 수 있는 "값". 함수를 값으로 가지는 속성은 [메서드](/ko/docs/Glossary/Method)라고 할 수 있습니다.
- 속성을 읽고 쓰는 방법을 지정하는 일부 "속성". 속성은 `configurable`, `enumerable`, 그리고 `writable` 속성을 가질 수 있습니다.

[접근자 속성](/ko/docs/Web/JavaScript/Data_structures#accessor_property)에는 실제 "값"이 없습니다. 값은 값을 읽을 때 호출되는 하나 (getter), 그리고 값을 설정할 때 호출되는 하나 (setter)로 한 쌍의 함수를 통해 간접적으로 표현됩니다. 그러나 접근자 속성은 표면적으로는 일반적인 데이터 속성처럼 동작하는데, getter와 setter 함수가 자동으로 호출되고 숨겨져 있기 때문입니다.

속성값 (getter와 setter를 포함하는) 그리고 속성은 "속성 설명자"로 불리는 데이터 레코드에 저장됩니다. {{jsxref("Object.getOwnPropertyDescriptor()")}}와 {{jsxref("Object.defineProperty()")}} 같은 많은 메서드는 속성 설명자와 함께 동작합니다.

"속성" 이라는 용어 자체는 모든 JavaScript 값과 일치하는 것은 아닙니다. 이것은 추상적인 개념입니다. 예를 들어, 아래와 같은 코드를 따릅니다.

```js
const obj = {
  a: 1,
  b() {},
};
```

`obj` 객체는 두 개의 속성을 가집니다. 첫 번째는 키인 `"a"`와 값인 `1`을 가집니다. 두 번째는 [메서드 구문](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions)을 사용하여 키인 `"b"`와 값으로 함수를 가집니다. `"a"` – `1`, `"b"` – `function` 조합은 객체의 속성입니다.

[클래스](/ko/docs/Web/JavaScript/Reference/Classes) 속성 맥락은 각 인스턴스가 소유하는 "인스턴스 속성"과 클래스가 소유하고 모든 인스턴스에 공통 데이터를 보유하는 "정적 속성"으로 나눌 수 있습니다. [상속](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain) 맥락에서 속성은 객체 자체가 소유하는 "고유 속성"과 객체의 프로토타입 체인에 있는 객체가 소유하는 "상속 속성"으로 나눌 수 있습니다.

읽기와 쓰기 속성에 대한 더 많은 정보는 [객체로 작업하기](/ko/docs/Web/JavaScript/Guide/Working_with_objects)를 참조하세요.

## 같이 보기

- [속성 (프로그래밍)](<https://en.wikipedia.org/wiki/Property_(programming)>) on Wikipedia
- [객체 지향 JavaScript 소개](/ko/docs/Learn/JavaScript/Objects)
- [객체 속성](/ko/docs/Web/JavaScript/Data_structures#properties)
- [속성의 열거 가능성 및 소유권](/ko/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
