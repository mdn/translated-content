---
title: Classes in JavaScript
slug: Learn/JavaScript/Objects/Classes_in_JavaScript
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}

OOJS에 대한 개념을 설명했으니, 이 글에서는 부모 클래스에서 자식 클래스를 상속하는 방법을 알아봅니다. 덤으로 OOJS를 구현하는데 몇 가지 참고사항도 있습니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">선수조건:</th>
      <td>
        컴퓨터 기본지식, HTML과 CSS에 대한 기본적인 이해,자바스크립트에 어느
        정도 익숙할 것 (see
        <a href="/ko/docs/Learn/JavaScript/First_steps">First steps</a> and
        <a href="/ko/docs/Learn/JavaScript/Building_blocks">Building blocks</a
        >). OOJS 기초 지식 (see
        <a href="/ko/docs/Learn/JavaScript/Objects/Basics"
          >Introduction to objects</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">학습목표:</th>
      <td>Javascript에서 상속을 구현하는 법을 이해합니다.</td>
    </tr>
  </tbody>
</table>

## 프로토타입 상속

지금까지 몇 가지 상속을 살펴보았습니다 — 프로토타입 체인이 어떻게 동작하는지, 체인을 통해 멤버들을 탐색하는 것도 보았죠. 하지만 이는 대부분 브라우저가 알아서 처리하는 로직이었습니다. 그러면 우리가 직접 객체를 생성하고 상속하려면 어떻게 해야 할까요?

실질적인 예제를 통해 알아보도록 합시다.

## 시작하기

먼저 [oojs-class-inheritance-start.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-start.html)를 다운 받으시고 ([running live](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-start.html) 페이지도 보시구요). 파일 내에서 이전 예제에서 계속 봐 왔던 `Person()` 생성자를 보실 수 있습니다 — 생성자에 속성 몇 개를 정의했기에 조금 다릅니다:

```js
function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}
```

메소드는 _전부_ 아래처럼 prototype에 정의되어 있습니다:

```js
Person.prototype.greeting = function () {
  alert("Hi! I'm " + this.name.first + ".");
};
```

> **참고:** 소스 코드에는 `bio()와` `farewell()`메소드가 정의되어 있습니다. 잠시 후에 다른 생성자로 어떻게 상속하는지 알아보도록 합시다.

객체 지향에 대해 처음 정의할 때 언급했었던 `Teacher` 클래스를 만들어 봅시다. `Person`을 상속받고 아래 몇 가지를 추가해서요:

1. `subject` 속성 — 교사가 가르치는 과목을 나타냅니다.
2. 기존의 `greeting()` 보다 조금 더 공손한 인사를 하는 메소드 — 교사가 학생들에게 건넬 만한 표현으로 하죠.

## Teacher() 생성자 함수 정의

제일 처음 단계에서는 `Teacher()` 생성자를 만들어야 합니다 — 기존 코드 밑에 아래 코드를 추가하세요:

```js
function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}
```

Person() 생성자와 여러모로 비슷해 보이지만 여지껏 보지 못했던 한가지 차이점이 있습니다 — [`call()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/call) 함수죠. call() 함수의 첫번째 매개변수는 다른 곳에서 정의된 함수를 현재 컨텍스트에서 실행할 수 있도록 합니다. 실행하고자 하는 함수의 첫 번째 매개변수로 this를 전달하고 나머지는 실제 함수 실행에 필요한 인자들을 전달하면 됩니다.

Teacher()의 생성자는 `Person()`을 상속받았으므로 같은 매개변수들이 필요합니다. 따라서 동일한 매개변수들을 `call()`의 인자로 전달하여 실행합니다.

마지막 줄에서는 새 속성인 `subject`를 정의하여 Person이 아닌 Teacher만이 갖는 속성을 만들어 줍니다.

참고로 아래와 같이 할 수도 있습니다:

```js
function Teacher(first, last, age, gender, interests, subject) {
  this.name = {
    first,
    last,
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
  this.subject = subject;
}
```

다만 이는 `Person()`을 상속받은게 아니라 단지 동일한 인자를 정의했을 뿐이죠. 이건 원하는 방법이 아닐 뿐더러 코드의 길이만 더 늘어났습니다.

### 매개변수가 없는 생성자 상속하기

상속하려는 생성자가 속성을 매개변수로 받지 않는다면 `call()`의 매개변수에도 아무것도 전달할 필요가 없습니다. 아래처럼 간단한 생성자가 있다면:

```js
function Brick() {
  this.width = 10;
  this.height = 20;
}
```

`width`와 `height` 속성을 상속받기 위해 아래처럼만 하면 됩니다(물론 이후 설명할 방법을 써도 되구요):

```js
function BlueGlassBrick() {
  Brick.call(this);

  this.opacity = 0.5;
  this.color = "blue";
}
```

`call()` 함수에 this만 넘긴 것을 보세요. — `Brick()` 생성자에서 매개변수를 통해 초기화 하는 속성들이 없으므로 `call()`에도 넘길 필요가 없습니다.

## Teacher()의 프로토타입과 생성자 참조 설정하기

다 좋은데 문제가 있습니다. 방금 정의한 새 생성자에는 생성자 함수 자신에 대한 참조만 가지고 있는 프로토타입 속성이 할당되어 있습니다. 정작 상속 받은 Person() 생성자의 prototype 속성은 없죠. Javascript 콘솔에서 `Object.getOwnPropertyNames(Teacher.prototype)`을 쳐서 확인해 보세요. 다음엔 `Teacher`를 `Person`으로 바꿔서 확인해 보세요. Teacher()생성자는 Person()의 메소드를 상속받지 못하였습니다. `Person.prototype.greeting`과 `Teacher.prototype.greeting` 구문을 실행하여 비교해 보세요. `Teacher()`가 메소드도 상속 받으려면 어떻게 해야 할까요?

1. 기존 코드에 아래 코드를 추가하세요:

   ```js
   Teacher.prototype = Object.create(Person.prototype);
   ```

   구원 투수 [`create()`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)의 등판입니다. 새 객체를 생성하여 `Teacher.prototype`으로 할당했죠. 새 객체는 `Person.prototype` 객체를 자신의 프로토타입으로 가지고 있으므로 `Person.prototype`에 정의된 모든 메소드를 사용할 수 있습니다.

2. 넘어가기 전에 한가지 더 해야 합니다. 마지막 줄을 추가하고 나면 `Teacher.prototype`의 `constructor` 속성이 Person()으로 되어 있습니다. `Teacher.prototype`에 `Person.prototype`을 상속받은 객체를 할당했기 때문이죠. 코드를 저장한 뒤 브라우저로 불러와서 Teacher.prototype.constructor 구문의 반환 값을 확인해 보세요.
3. 문제의 소지가 있으므로 고쳐야 됩니다. 소스에 아래 코드를 추가하세요:

   ```js
   Teacher.prototype.constructor = Teacher;
   ```

4. 저장하고 다시 브라우저에서 불러오면 의도한대로 `Teacher.prototype.constructor`가 `Teacher()`를 반환합니다. 게다가 `Person()`도 상속받았죠!

## Teacher()에 새 greeting() 함수 부여하기

`Teacher()`에 새로운 `greeting()` 함수를 정의하여 코드를 완성합시다.

가장 간단한 방법은 Teacher()의 프로토타입에 정의합니다. — 아래 코드를 추가하세요:

```js
Teacher.prototype.greeting = function () {
  var prefix;

  if (
    this.gender === "male" ||
    this.gender === "Male" ||
    this.gender === "m" ||
    this.gender === "M"
  ) {
    prefix = "Mr.";
  } else if (
    this.gender === "female" ||
    this.gender === "Female" ||
    this.gender === "f" ||
    this.gender === "F"
  ) {
    prefix = "Mrs.";
  } else {
    prefix = "Mx.";
  }

  alert(
    "Hello. My name is " +
      prefix +
      " " +
      this.name.last +
      ", and I teach " +
      this.subject +
      ".",
  );
};
```

조건문을 이용해서 성별에 따라 적절한 호칭이 붙은 교사의 인삿말을 alert 창으로 띄웁니다.

## 예제 사용해 보기

소스를 환성했으니 아래 코드를 통해 새 `Teacher()` 인스턴스를 생성해 봅시다(아니면 인자를 원하는 값으로 변경하시거나요):

```js
var teacher1 = new Teacher(
  "Dave",
  "Griffiths",
  31,
  "male",
  ["football", "cookery"],
  "mathematics",
);
```

저장한 코드를 다시 불러와서 아래처럼 `teacher1`의 속성과 메소드를 확인해 봅시다:

```js
teacher1.name.first;
teacher1.interests[0];
teacher1.bio();
teacher1.subject;
teacher1.greeting();
teacher1.farewell();
```

아주 잘 실행될 겁니다. 1, 2, 3, 6 줄은 Person() 생성자(클래스)에서 상속 받은 멤버에 접근합니다. 4번째 줄은 Teacher() 생성자(클래스)만 가지고 있는 멤버에 접근합니다. 5번째 줄은 Person()에서 상속 받은 멤버도 있지만 Teacher()가 이미 자신만의 새 메소드를 정의했으므로 Teacher()의 메소드에 접근합니다.

> **참고:** 코드가 잘 동작하지 않으면 [완성된 버전](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-finished.html)을 확인해 보세요. ([실행 페이지](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-finished.html)도 보시구요).

이 테크닉이 Javascript에서 상속 받는 클래스를 만드는 유일한 방법은 아니지만 잘 동작하며 상속을 구현하는 방법을 잘 설명하고 있습니다.

조금 더 명확한 방식으로 Javascript에서 상속을 구현하는 새 {{glossary("ECMAScript")}} 기능도 관심 가질만한 주제입니다([Classes](/ko/docs/Web/JavaScript/Reference/Classes) 참조). 아직까지 많은 브라우저에서 지원하지 못하고 있기 때문에 여기서 다를 주제는 아닙니다. 여러 문서에서 제시한 코드들은 IE9보다 더 오래된 구형 브라우저에서도 사용 가능하며 더 이전 버전을 지원하기 위한 방법들도 있습니다.

JavaScript 라이브러리를 쓰면 간단합니다 — 상속 기능을 사용하기 위한 보편적인 방법이죠. 예를들어 [CoffeeScript](http://coffeescript.org/#classes)는 `class`와 `extends`등의 기능을 제공합니다.

## 더 연습하기

[OOP theory section](/ko/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters), 에서는 개념적으로 Person을 상속받고 Teacher보다 덜 공손한 `greeting()` 메소드를 재정의한 `Student` 클래스를 정의했었습니다. 해당 절에서 `Student`의 인삿말이 어땠는지 확인해 보시고 `Person()`을 상속받는 `Student()` 생성자를 구현해 보세요. `greeting()` 함수도 재정의 해 보시구요.

> **참고:** 코드가 잘 동작하지 않으면 [완성된 버전](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/oojs-class-inheritance-student.html) 을 확인해 보세요.([실행 페이지](http://mdn.github.io/learning-area/javascript/oojs/advanced/oojs-class-inheritance-student.html)도 보시구요).

## 객체 멤버 요약

요약하면, 상속에 있어 고려해야 할 세 가지 유형의 속성/메소드가 있습니다:

1. 생성자 함수 내에서 인스턴스에 정의하는 유형. 직접 작성한 코드에서는 생성자 함수 내에 `this.x = x` 구문과 유사하게 정의되어 있으므로 발견하기 쉽습니다. 브라우저 내장 코드에서는 객체 인스턴스(보통 `new` 키워드를 통해 생성, ex) `var myInstance = new myConstructor()`)에서만 접근할 수 있는 멤버입니다.
2. 생성자에 직접 정의하는 유형, 생성자에서만 사용 가능합니다. 브라우저 내장 객체에서 흔히 사용하는 방식인데, 인스턴스가 아니라 생성자 함수에서 바로 호출되는 유형입니다. `Object.key()` 같은 함수들이죠.
3. 인스턴스와 자식 클래스에 상속하기 위해 생성자의 프로토타입에 정의하는 유형. 생성자의 프로토타이비 속성에 정의되는 모든 멤버를 의미합니다. ex) `myConstructor.prototype.x()`.

뭐가 뭔지 헷갈려도 걱정하지 마세요 — 배우는 중이니 차츰 익숙해질겁니다.

## ECMAScript 2015 클래스

ECMAScript 2015에서는 C++나 Java와 유사한 [클래스 문법](/ko/docs/Web/JavaScript/Reference/Classes)을 공개하여 클래스를 조금 더 쉽고 명확하게 재활용 할 수 있게 되었습니다. 이 절에서는 프로토타입 상속으로 작성한 Person과 Teacher 예제를 클래스 문법으로 변경하고 어떻게 동작하는지 설명하겠습니다.

> **참고:** 대부분의 최신 브라우저에서 새로운 클래스 작성 방식을 지원합니다만 일부 구형 브라우저(Internet Explorer가 대표적)에서는 동작하지 않으므로 하위호환성을 위해 프로토타입 상속을 배워둘 필요가 있습니다.

Class-스타일로 재작성한 Person 예제를 보시죠:

```
class Person {
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }

  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  };

  farewell() {
    console.log(`${this.name.first} has left the building. Bye for now!`);
  };
}
```

[class](/ko/docs/Web/JavaScript/Reference/Statements/class) 구문은 새로운 클래스를 작성함을 의미합니다. Class 블록 내에서 모든 기능을 정의할 수 있습니다.

- [`constructor()`](/ko/docs/Web/JavaScript/Reference/Classes/constructor) 메소드는 `Person` 클래스의 생성자를 의미합니다.
- `greeting()` and `farewell()`는 멤버 메소드입니다. 클래스의 메소드는 생성자 다음에 아무 메소드나 추가할 수 있습니다. 여기서는 읽기 쉬우라고 string 결합이 아닌 [template literals](/ko/docs/Web/JavaScript/Reference/Template_literals)을 사용했습니다.

이제 위에서 했듯이 [`new` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/new)로 객체 인스턴스를 생성할 수 있습니다:

```
let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new Person('Leia', 'Organa', 19, 'female' ['Government']);
leia.farewell();
// Leia has left the building. Bye for now
```

> **참고:** 코드를 까보면 class 부분은 프로토타입 상속으로 변환이 됩니다. — 문법 설탕(syntactic sugar)의 일종인거죠. 하지만 읽기 쉽다는데 대부분 동의하실 겁니다.

### class 문법으로 상속

위에서 사람을 나타내는 클래스를 만들었습니다. Person 클래스는 일반적인 사람이 가질 만한 특성들을 나열하고 있죠; 이 절에서는 `Person`을 class 문법으로 상속받아 `Teacher` 클래스를 만들 예정입니다. 이 작업을 하위 클래스 생성이라 부릅니다.

하위 클래스를 만드려면 Javascript에서 [extends 키워드](/ko/docs/Web/JavaScript/Reference/Classes/extends)를 통해 상속 받을 클래스를 명시합니다.

```
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    this.name = {
      first,
      last
    };

  this.age = age;
  this.gender = gender;
  this.interests = interests;
  // subject and grade are specific to Teacher
  this.subject = subject;
  this.grade = grade;
  }
}
```

`constructor()`에서 첫번쨰로 [`super()` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/super)를 정의하면 코드를 조금 더 읽기 쉬워집니다. 이는 상위 클래스의 생성자를 호출하며 super()의 매개변수를 통해 상위 클래스의 멤버를 상속받을 수 있는 코드입니다.

```
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);

    // subject and grade are specific to Teacher
    this.subject = subject;
    this.grade = grade;
  }
}
```

`Teacher`의 인스턴스를 생성하면 의도한대로 이제 `Teacher`와 `Person` 양 쪽의 메소드와 속성을 사용할 수 있습니다.

```
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age // 58
snape.subject; // Dark arts
```

Person을 수정하지 않고 Teacher를 생성한 것처럼 또 다른 하위클래스도 생성할 수 있습니다.

> **참고:** GitHub에서 [es2015-class-inheritance.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-class-inheritance.html) 예제를 참조하세요([실행 페이지](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-class-inheritance.html)).

## Getters와 Setters

생성한 클래스 인스턴스의 속성 값을 변경하거나 최종 값을 예측할 수 없는 경우가 있을 겁니다. Teacher 예제를 보면 인스턴스를 생성하기 전에는 어떤 과목을 가르칠지 아직 모릅니다. 학기 도중에 가르치는 과목이 변경될 수도 있구요.

이런 상황에 getter/setter가 필요합니다.

Teacher 클래스에 getter/setter를 추가해 봅시다. 마지막에 작성했던 예제를 그대로 사용해보죠.

Getter와 setter는 쌍으로 동작합니다. Getter가 현재 값을 반환한다면 그에 대응하는 setter는 해당하는 값을 변경합니다.

수정된 `Teacher` 클래스는 아래와 같습니다:

```
class Teacher extends Person {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}
```

위 클래스를 보시면 `subject` 속성에 대해 getter와 setter가 생겼습니다. 멤버 변수에는 를 붙여 getter/setter 와 구분을 하였습니다. 이렇게 하지 않으면 get/set 을 호출할때마다 에러가 발생합니다:

- `snape` 객체의 `_subject` 속성 값을 보려면 `snape._subject`를 실행합니다.
- To show the current value of the `_subject` property of the `snape` object we can use `snape._subject`.
- `_subject`에 새 값을 할당하려면 `snape._subject="new value"`를 실행합니다.

두 기능이 실제로 어떻게 작동하는지 아래를 참조하세요:

```
// Check the default value
console.log(snape._subject) // Returns "Dark arts"

// Change the value
snape._subject="Balloon animals" // Sets subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape._subject) // Returns "Balloon animals"
```

> **참고:** GitHub에서 [es2015-getters-setters.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/advanced/es2015-getters-setters.html) 예제를 참조하세요([실행 페이지](https://mdn.github.io/learning-area/javascript/oojs/advanced/es2015-getters-setters.html)).

## JavaScript에서 언제 상속을 사용해야 할까?

이 마지막 문서를 읽고 나면 "뭐가 이리 어렵냐"고 생각하실지도 모르겠습니다. 어렵긴 합니다 프로토타입과 상속은 Javascript에서 가장 난해한 부분이거든요. 하지만 이 부분은 Javascript가 강력하고 유연한 언어로써 작용할 수 있는 원동력이기에 충분한 시간을 들여 배울 가치가 있습니다.

어찌보면 여러분은 항상 상속하고 있었습니다. Web API나 브라우저 내장 객체인 string, array 등의 메소드/속성을 사용하면서 암묵적으로 상속을 사용하고 있었던거죠.

처음 시작하거나 작은 프로젝트에서 직접 상속을 구현하는 코드를 작성하는 경우는 그리 많지 않습니다. 필요하지도 않는데 상속을 위한 코드를 구현하는 건 시간 낭비에 불과하죠. 하지만 코드량이 많아질수록 상속이 필요한 경우가 생깁니다. 동일한 기능을 가진 클래스가 많아졌음을 발견했다면 기능들을 한데 묶어 공유할 수 있도록 일반 객체를 만들고 특이 객체들에게 상속하는 방식이 훨씬 편하고 유용하다는 점을 알 수 있습니다.

> **참고:** Javascript에서는 프로토타입을 통해 상속이 구현되어 있어 이 방식을 흔히 **위임**이라고 표현합니다. 특이 객체들이 일반 객체에게 일부 기능의 실행을 위임하는 것이죠.

상속을 구현할때 상속 레벨을 너무 깊게 하지 말고, 메소드와 속성들이 정확히 어디에 구현되어 있는지 항상 인지해야 합니다. 브라우저 내장 객체의 prototype 역시 일시적으로 수정이 가능하지만 정말로 필요한 경우를 제외하고는 건드리지 말아야 합니다. 너무 깊은 상속은 디버그 할 때 끝없는 혼돈과 고통만을 줄 겁니다.

궁극적으로 객체는 함수나 반복문과 같이 고유한 역할과 장점을 지닌 채 코드를 재사용하는 또 다른 방법입니다. 서로 연관된 변수와 함수들을 하나로 묶어 다룰 필요가 있을때 객체가 좋은 아이디어입니다. 한 곳에서 다른 곳으로 데이터 집합을 전달할 때에도 객체가 유용합니다. 두가지 모두 생성자나 상속 없이도 가능한 일입니다. 딱 하나의 인스턴스만 필요할 경우 객체를 선언하지 않고 객체 리터럴만으로도 충분합니다. 당연히 상속은 필요없구요.

## 요약

이 글에서는 여러분들이 반드시 알아야 할 OOJS 이론과 문법의 나머지 부분에 대해 다루고 있습니다. 이 시점에서 여러분은 javascript 객체와 OOP 기초, 프로토타입과 프로토타입 상속, 클래스(생성자)를 만들고 인스턴스를 생성하며 기능을 추가하고, 다른 클래스를 상속 받아 하위 클래스를 만드는 방법을 배웠습니다.

다음 글에서는 Javascript 객체로 데이터를 교환하는 방식인 Javascript Object Notation(JSON)에 대해 알아봅시다.

## See also

- [ObjectPlayground.com](http://www.objectplayground.com/) — A really useful interactive learning site for learning about objects.
- [Secrets of the JavaScript Ninja](https://www.amazon.com/gp/product/193398869X/), Chapter 6 — A good book on advanced JavaScript concepts and techniques, by John Resig and Bear Bibeault. Chapter 6 covers aspects of prototypes and inheritance really well; you can probably track down a print or online copy fairly easily.
- [You Don't Know JS: this & Object Prototypes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20&%20object%20prototypes/README.md#you-dont-know-js-this--object-prototypes) — Part of Kyle Simpson's excellent series of JavaScript manuals, Chapter 5 in particular looks at prototypes in much more detail than we do here. We've presented a simplified view in this series of articles aimed at beginners, whereas Kyle goes into great depth and provides a more complex but more accurate picture.

{{PreviousMenuNext("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects/JSON", "Learn/JavaScript/Objects")}}
