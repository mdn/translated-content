---
title: 객체 지향 프로그래밍
slug: Learn_web_development/Extensions/Advanced_JavaScript_objects/Object-oriented_programming
original_slug: Learn/JavaScript/Objects/Object-oriented_programming
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}

객체 지향 프로그래밍(OOP)은 Java 및 C++를 비롯한 많은 프로그래밍 언어의 기본이 되는 프로그래밍 패러다임입니다. 이 기사에서는 OOP의 기본 개념에 대한 개요를 제공합니다. **클래스와 인스턴스**, **상속**, **캡슐화**라는 세 가지 주요 개념에 대해 설명합니다. 지금은 특히 JavaScript를 참조하지 않고 이러한 개념을 설명하므로 모든 예제가 {{Glossary("Pseudocode", "pseudocode")}}로 제공됩니다.

> [!NOTE]
> 정확히 말하면 여기에 설명된 기능은 **클래스 기반** 또는 "고전적인" OOP라고 하는 특정 스타일의 OOP입니다. 사람들이 OOP에 대해 이야기할 때 일반적으로 이것이 의미하는 유형입니다.

그런 다음 JavaScript에서 생성자와 프로토타입 체인이 이러한 OOP 개념과 어떻게 관련되고 어떻게 다른지 살펴보겠습니다. 다음 기사에서는 객체 지향 프로그램을 보다 쉽게 ​​구현할 수 있도록 하는 JavaScript의 추가 기능에 대해 살펴보겠습니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        JavaScript 함수 이해, JavaScript 기본 사항
        (
        <a href="/ko/docs/Learn/JavaScript/First_steps">첫 번째 단계</a> 및
        <a href="/ko/docs/Learn/JavaScript/Building_blocks"
          >빌딩 블록</a
        > 참조) 및 OOJS 기본 사항 (
        <a href="/ko/docs/Learn/JavaScript/Objects/Basics"
          >객체 소개</a
        > 및 <a href="/ko/docs/Learn/JavaScript/Objects/Object_prototypes">객체 프로토타입</a> 참조).
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        클래스 기반 객체 지향 프로그래밍의 기본 개념을 이해합니다.
      </td>
    </tr>
  </tbody>
</table>

객체 지향 프로그래밍은 각 객체가 시스템의 특정 측면을 나타내는 객체 모음으로 시스템을 모델링하는 것입니다. 객체에는 함수(또는 메서드)와 데이터가 모두 포함됩니다. 객체는 사용하려는 다른 코드에 대한 공용 인터페이스를 제공하지만 자체 비공개 내부 상태를 유지합니다. 시스템의 다른 부분은 객체 내부에서 일어나는 일에 대해 신경 쓸 필요가 없습니다.

## 클래스 및 인스턴스

OOP의 객체 측면에서 문제를 모델링할 때 시스템에 포함하려는 객체 유형을 나타내는 추상 정의를 만듭니다. 예를 들어 학교를 모델링하는 경우 교수를 나타내는 객체를 원할 수 있습니다. 모든 교수는 몇 가지 공통점이 있습니다. 모두 이름과 자신이 가르치는 과목이 있습니다. 또한 모든 교수는 특정 작업을 수행할 수 있습니다. 예를 들어 모두 논문을 채점할 수 있고 연초에 학생들에게 자신을 소개할 수 있습니다.

따라서 `Professor`는 우리 시스템의 **클래스**가 될 수 있습니다. 클래스의 정의에는 모든 교수가 가지고 있는 데이터와 방법이 나열되어 있습니다.

의사 코드에서 `Professor` 클래스는 다음과 같이 작성할 수 있습니다.

```plain
class Professor
    properties
        name
        teaches
    methods
        grade(paper)
        introduceSelf()
```

이는 다음과 같이 `Professor` 클래스를 정의합니다.

- 두 가지 데이터 속성: `name` 및 `teaches`
- 두 가지 메서드: 논문을 채점하는 `grade()`와 자신을 소개하는 `introduceSelf()`.

그 자체로 클래스는 아무 것도 하지 않습니다. 클래스는 해당 유형의 구체적인 객체를 만들기 위한 일종의 템플릿입니다. 우리가 생성하는 각 구체적인 교수는 `Professor` 클래스의 **인스턴스**라고 합니다. 인스턴스 생성 프로세스는 **생성자**라는 특수 함수에 의해 수행됩니다. 새 인스턴스에서 초기화하려는 내부 상태에 대한 값을 생성자에 전달합니다.

일반적으로 생성자는 클래스 정의의 일부로 작성되며 일반적으로 클래스 자체와 동일한 이름을 갖습니다.

```plain
class Professor
    properties
        name
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()
```

이 생성자는 두 개의 매개변수를 사용하므로 새로운 구체적인 교수를 만들 때 `name`과 `teaches` 속성을 초기화할 수 있습니다.

이제 생성자가 있으므로 일부 교수들을 만들 수 있습니다. 프로그래밍 언어는 종종 `new` 키워드를 사용하여 생성자가 호출되고 있음을 알립니다.

```js
walsh = new Professor("Walsh", "Psychology");
lillian = new Professor("Lillian", "Poetry");

walsh.teaches; // 'Psychology'
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

lillian.teaches; // 'Poetry'
lillian.introduceSelf(); // 'My name is Professor Lillian and I will be your Poetry professor.'
```

이렇게 하면 `Professor` 클래스의 인스턴스인 두 개의 객체가 생성됩니다.

## 상속

우리 학교에서도 학생들을 대표하고 싶다고 가정해 봅시다. 교수와 달리 학생들은 논문을 채점할 수 없고, 특정 과목을 가르치지 않으며, 특정 연도에 속합니다.

그러나 학생들에게는 이름이 있고 자신을 소개하고 싶을 수도 있으므로 다음과 같이 학생 클래스의 정의를 작성할 수 있습니다.

```plain
class Student
    properties
        name
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```

학생과 교수가 어떤 속성을 공유한다는 사실, 더 정확하게는 어떤 수준에서 그들은 같은 종류라는 사실을 나타낼 수 있다면 도움이 될 것입니다. **상속**을 통해 이를 수행할 수 있습니다.

우리는 학생과 교수가 모두 사람이고 사람들은 이름이 있고 자신을 소개하고 싶어한다는 것을 관찰하는 것으로 시작합니다. 우리는 사람의 모든 공통 속성을 정의하는 새 클래스 `Person`을 정의하여 이를 모델링할 수 있습니다. 그런 다음 `Professor`와 `Student`는 둘 다 `Person`에서 **파생**되어 추가 속성을 추가할 수 있습니다.

```plain
class Person
    properties
        name
    constructor
        Person(name)
    methods
        introduceSelf()

class Professor : extends Person
    properties
        teaches
    constructor
        Professor(name, teaches)
    methods
        grade(paper)
        introduceSelf()

class Student : extends Person
    properties
        year
    constructor
        Student(name, year)
    methods
        introduceSelf()
```

이 경우 `Person`은 `Professor`와 `Student` 모두의 **상위 클래스** 또는 **부모 클래스**라고 말할 수 있습니다. 반대로 `Professor`와 `Student`는 `Person`의 **하위 클래스** 또는 **자식 클래스**입니다.

`introduceSelf()`가 세 클래스 모두에 정의되어 있음을 알 수 있습니다. 그 이유는 모든 사람이 자신을 소개하고 싶어하지만 그 방법이 다르기 때문입니다.

```js
walsh = new Professor("Walsh", "Psychology");
walsh.introduceSelf(); // 'My name is Professor Walsh and I will be your Psychology professor.'

summers = new Student("Summers", 1);
summers.introduceSelf(); // 'My name is Summers and I'm in the first year.'
```

학생이나 교수가 아닌 사람들을 위해 `introduceSelf()`의 기본 구현이 있을 수 있습니다.

```js
pratt = new Person("Pratt");
pratt.introduceSelf(); // 'My name is Pratt.'
```

이 기능(메서드 이름은 같지만 다른 클래스에서 구현이 다른 경우)을 **다형성**이라고 합니다. 하위 클래스의 메서드가 상위 클래스의 구현을 대체할 때 하위 클래스가 상위 클래스의 버전을 **재정의**한다고 합니다.

## 캡슐화

객체는 객체를 사용하려고 하지만 자체 내부 상태를 유지하려는 다른 코드에 대한 인터페이스를 제공합니다. 객체의 내부 상태는 **비공개**로 유지됩니다. 즉, 다른 객체가 아닌 객체 자체 메서드로만 액세스할 수 있습니다. 객체의 내부 상태를 비공개로 유지하고 일반적으로 공개 인터페이스와 비공개 내부 상태를 명확하게 구분하는 것을 **캡슐화**라고 합니다.

이 기능은 프로그래머가 객체를 사용하는 모든 코드를 찾아 업데이트하지 않고도 객체의 내부 구현을 변경할 수 있기 때문에 유용한 기능입니다. 이 객체와 시스템의 나머지 부분 사이에 일종의 방화벽을 만듭니다.

예를 들어, 학생들이 2학년 이상인 경우 양궁을 공부할 수 있다고 가정합니다. 학생의 `year` 속성을 노출하는 것만으로 이를 구현할 수 있으며 다른 코드에서 이를 검사하여 학생이 과정을 수강할 수 있는지 여부를 결정할 수 있습니다.

```js
if (student.year > 1) {
  // 그 학생을 수업에 들어오도록 허락
}
```

문제는 학생이 양궁을 공부하도록 허용하는 기준을 변경하기로 결정한 경우(예: 부모 또는 보호자의 허가를 받도록 요구하는 경우) 이 테스트를 수행하는 시스템의 모든 위치를 업데이트해야 한다는 것입니다. 한 곳에서 논리를 구현하는 `canStudyArchery()` 메서드를 `Student` 객체에 두는 것이 좋습니다.

```plain
class Student : extends Person
    properties
       year
    constructor
       Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }
```

```js
if (student.canStudyArchery()) {
  // allow the student into the class
}
```

그렇게 하면 양궁 공부에 대한 규칙을 변경하려는 경우 `Student` 클래스만 업데이트하면 되며 이를 사용하는 모든 코드는 계속 작동합니다.

많은 OOP 언어에서 일부 속성을 `private`로 표시하여 다른 코드가 객체의 내부 상태에 액세스하지 못하도록 할 수 있습니다. 객체 외부의 코드가 객체에 액세스하려고 하면 오류가 발생합니다.

```plain
class Student : extends Person
    properties
       private year
    constructor
        Student(name, year)
    methods
       introduceSelf()
       canStudyArchery() { return this.year > 1 }

student = new Student('Weber', 1)
student.year // error: 'year' is a private property of Student
```

이와 같이 액세스를 강제하지 않는 언어에서 프로그래머는 이름을 밑줄로 시작하는 것과 같은 명명 규칙을 사용하여 속성이 비공개로 간주되어야 함을 나타냅니다.

## OOP와 JavaScript

이 기사에서는 Java 및 C++와 같은 언어로 구현된 클래스 기반 객체 지향 프로그래밍의 기본 기능 중 일부를 설명했습니다.

이전 두 기사에서 우리는 두 가지 핵심 JavaScript 기능인 [생성자](/ko/docs/Learn/JavaScript/Objects/Basics)와 [프로토타입](/ko/docs/Learn/JavaScript/Objects/Object_prototypes)을 살펴보았습니다. 이러한 기능은 확실히 위에서 설명한 일부 OOP 개념과 어느 정도 관련이 있습니다.

- JavaScript의 **생성자**는 객체에 포함된 모든 메서드를 포함하여 객체의 "모양"을 단일 위치에서 정의할 수 있도록 클래스 정의와 같은 것을 제공합니다. 그러나 여기에서도 프로토타입을 사용할 수 있습니다. 예를 들어 메서드가 생성자의 `prototype` 속성에 정의된 경우 해당 생성자를 사용하여 생성된 모든 객체는 프로토타입을 통해 해당 메서드를 가져오므로 생성자에서 정의할 필요가 없습니다.

- **프로토타입 체인**은 상속을 구현하는 자연스러운 방법처럼 보입니다. 예를 들어 프로토타입이 `Person`인 `Student` 객체를 가질 수 있는 경우 `name`을 상속하고 `introduceSelf()`를 재정의할 수 있습니다.

그러나 이러한 기능과 위에서 설명한 "고전적인" OOP 개념 간의 차이점을 이해하는 것이 좋습니다. 여기에서 몇 가지를 강조하겠습니다.

첫째, 클래스 기반 OOP에서 클래스와 객체는 두 개의 별도 구성이며 객체는 항상 클래스의 인스턴스로 생성됩니다. 또한 클래스를 정의하는 데 사용되는 기능(클래스 구문 자체)과 객체를 인스턴스화하는 데 사용되는 기능(생성자) 사이에는 차이가 있습니다. JavaScript에서는 함수나 객체 리터럴을 사용하여 별도의 클래스 정의 없이 객체를 생성할 수 있고 종종 생성합니다. 이를 통해 기존 OOP보다 객체 작업을 훨씬 더 가볍게 만들 수 있습니다.

둘째, 프로토타입 체인은 상속 계층 구조처럼 보이고 어떤 면에서는 비슷하게 작동하지만 다른 면에서는 다릅니다. 하위 클래스가 인스턴스화되면 하위 클래스에 정의된 속성과 계층 구조에서 추가로 정의된 속성을 결합하는 단일 객체가 생성됩니다. 프로토타이핑을 사용하면 계층 구조의 각 수준이 별도의 객체로 표시되며 `__proto__` 속성을 통해 함께 연결됩니다. 프로토타입 체인의 동작은 상속보다는 **위임**에 가깝습니다. 위임은 객체가 작업을 수행하도록 요청받았을 때 작업 자체를 수행하거나 다른 객체(**대리인**)에게 대신 작업을 수행하도록 요청할 수 있는 프로그래밍 패턴입니다. 여러 면에서 위임은 상속보다 객체를 결합하는 더 유연한 방법입니다(한 가지로 런타임에 위임을 변경하거나 완전히 대체할 수 있음).

즉, 생성자와 프로토타입을 사용하여 JavaScript에서 클래스 기반 OOP 패턴을 구현할 수 있습니다. 그러나 상속과 같은 기능을 구현하기 위해 직접 사용하는 것은 까다롭기 때문에 JavaScript는 클래스 기반 OOP의 개념에 보다 직접적으로 매핑되는 프로토타입 모델 위에 추가 기능을 제공합니다. 이러한 추가 기능은 다음 문서의 주제입니다.

## 요약

이 기사에서는 클래스 기반 객체 지향 프로그래밍의 기본 기능을 설명하고 JavaScript 생성자와 프로토타입을 이러한 개념과 비교하는 방법을 간략하게 살펴보았습니다.

다음 기사에서는 클래스 기반 객체 지향 프로그래밍을 지원하기 위해 JavaScript가 제공하는 기능을 살펴보겠습니다.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/Classes_in_JavaScript", "Learn/JavaScript/Objects")}}
