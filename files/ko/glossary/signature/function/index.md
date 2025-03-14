---
title: 함수 시그니처
slug: Glossary/Signature/Function
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**함수 시그니처**('타입' 시그니처, '메서드' 시그니처)는 {{Glossary("Function", "함수")}}와 {{Glossary("Method", "메서드")}}의 입력과 출력을 정의합니다.

시그니처는 다음을 포함합니다.

- {{Glossary("Parameter", "매개변수")}}와 그들의 {{Glossary("Type", "타입")}}
- 반환값과 타입
- 던져지거나 콜백으로 반환되는 {{Glossary("Exception", "예외")}}
- {{Glossary("OOP", "객체 지향")}} 프로그램에서 메서드의 접근 권한에 대한 정보 (`public`, `static`, 혹은 `prototype`와 같은 키워드).

## 자세한 내용

### JavaScript 시그니처

{{Glossary("JavaScript")}}는 '약한 타입' 혹은 '동적' 언어입니다. 이것은 여러분이 변수의 타입을 미리 선언하지 않아도 됨을 의미합니다. 타입은 프로그램이 실행되는 동안 자동으로 결정됩니다. 하지만 JavaScript에서의 시그니처는 여전히 여러분에게 메서드에 대한 몇 가지 정보를 제공해줄 수 있습니다.

```js
MyObject.prototype.myFunction(value);
```

- 메서드는 `MyObject`라 불리는 {{Glossary("object")}}에 붙어 있습니다.
- 메서드는 `MyObject`의 `prototype`에 붙어 있습니다(따라서 이 메서드는 {{Glossary("instance method", "인스턴스 메서드")}} 입니다). 반대의 경우는 {{Glossary("static method", "정적 메서드")}}입니다.
- 메서드의 이름은 `myFunction`입니다.
- 메서드는 이름은 `value`이고, 정의되지 않은 하나의 매개변수를 받습니다.

### Java 시그니처

{{Glossary("Java")}}는 가상머신 코드 수준에서 메서드와 클래스를 식별하는데 시그니처가 사용됩니다. Java 코드를 실행하기 위해서는 변수의 타입을 선언해야 합니다. Java는 '강한 타입'이며, 컴파일 시간에 매개변수 타입을 검사합니다.

```java
public static void main(String[] args)
```

- `public` 키워드는 접근 한정자이며, 이 메서드가 모든 객체에서 호출될 수 있음을 의미합니다.
- `static` 키워드는 이 메서드가 인스턴스 메서드가 아닌 클래스 메서드임을 의미합니다.
- `void` 키워드는 이 메서드에 반환 값이 없음을 의미합니다.
- 메서드의 이름은 `main`입니다.
- 이 메서드는 `args`라는 이름의 문자열 배열 타입 매개변수 하나를 허용합니다.

## 같이 보기

- 위키백과의 [자바 내부 타입 시그니처](https://en.wikipedia.org/wiki/Type_signature#Java)
