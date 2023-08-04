---
title: Signature (functions)
slug: Glossary/Signature/Function
---

**함수 시그니처**(_타입_ 시그니처, _메소드_ 시그니처)는 {{Glossary("Function", "functions")}} 그리고 {{Glossary("Method", "methods")}}의 입력과 출력을 정의합니다.

시그니처는 다음을 포함합니다:

- {{Glossary("Parameter", "parameters")}}와 그들의 {{Glossary("Type", "types")}}
- 반환값과 타입
- 던져지거나 콜백으로 반환되는 {{Glossary("Exception", "exceptions")}}
- {{Glossary("OOP", "object-oriented")}} 프로그램에서 메소드의 접근 권한에 대한 정보 (`public`, `static`, 혹은 `prototype`와 같은 키워드들).

## In depth

### Signatures in JavaScript

{{Glossary("JavaScript")}}는 _약한 타입_ 혹은 _동적_ 언어입니다. 이것은 여러분이 변수의 타입을 미리 선언하지 않아도 됨을 의미합니다. 타입은 프로그램이 실행되는 동안 자동으로 결정됩니다. 하지만 JavaScript에서의 시그니처는 여전히 여러분에게 메소드에 대한 몇 가지 정보를 제공해줄 수 있습니다:

```js
MyObject.prototype.myFunction(value);
```

- 메소드는 `MyObject`라 불리는 {{Glossary("object")}}에 장착되어 있습니다.
- 메소드는 `MyObject`의 `prototype`에 장착되어 있습니다. (따라서 이 메소드는 {{Glossary("instance method")}} 입니다.) 반대의 경우는 {{Glossary("static method")}}입니다.
- 메소드의 이름은 `myFunction`입니다.
- 메소드는 하나의 인자를 받고, 그것의 이름은 `value` 입니다.

### Signatures in Java

{{Glossary("Java")}}는 VM수준에서 메서드와 클래스를 식벽하는데 시그니처가 사용됩니다. Java 코드를 싱행하기 위해서는 변수의 타입을 선언해야 합니다. Java는 강한 타입이며, 컴파일 시간에 parameters의 type의 정확성을 검사합니다.

```java
public static void main(String[] args)
```

- The `public` keyword is an access modifier and indicates that this method can be called by any object.
- The `static` keyword indicates that this method is a class method as opposed to being an instance method.
- The `void` keyword indicates that this method has no return value.
- The name of the method is `main`.
- The method accepts one parameter of type String Array. It is named `args.`

## `Learn more`

### `General knowledge`

- [Type signature](https://en.wikipedia.org/wiki/Type_signature#Java) on Wikipedia
