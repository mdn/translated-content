---
title: 객체로 작업하기
slug: Web/JavaScript/Guide/Working_with_Objects
tags:
  - Beginner
  - Comparing object
  - Document
  - Guide
  - JavaScript
  - Object
  - l10n:priority
translation_of: Web/JavaScript/Guide/Working_with_Objects
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Keyed_collections", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}

JavaScript는 간단한 객체 기반 패러다임 위에 만들어졌습니다. 객체는 속성의 컬렉션이고, 속성은 이름('키')과 값 사이의 연결 관계입니다. 속성의 값이 함수인 경우에는 메서드라고 부릅니다. 브라우저 안에 미리 정의된 객체 뿐만 아니라 여러분이 직접 객체를 정의할 수도 있습니다. 이번 장에서는 객체, 속성, 함수, 메서드 사용법과 함께 직접 새로운 객체를 생성하는 법을 알아봅니다.

## 객체 개요

JavaScript의 객체는, 다른 프로그래밍 언어에서와 마찬가지로 현실 세계에서 객체(사물)라고 부르는 것과 비교할 수 있습니다. JavaScript 객체의 개념은 현실에서 인식 가능한 사물로 이해가 가능합니다.

JavaScript에서 객체는 속성과 타입을 가진 독립적인 개체(entity)입니다. 현실의 컵과 비교해본다면, 컵은 색, 디자인, 무게, 소재 등의 속성을 가진 객체라고 할 수 있습니다. 마찬가지로 JavaScript 객체 역시 특징을 결정짓는 속성을 가질 수 있습니다.

## 객체와 속성

JavaScript 객체는 자신과 연관된 속성들을 가집니다. 객체의 속성은 객체에 붙은 변수라고 설명할 수 있겠습니다. 객체의 속성은 일반적인 JavaScript 변수와 똑같은데, 다만 객체에 붙어있다는 점만 다릅니다. 속성에 접근할 땐 간단한 마침표 표기법을 사용합니다.

```js
objectName.propertyName
```

다른 모든 JavaScript 변수와 마찬가지로, 객체의 이름(아마도 그냥 변수)과 속성의 이름 모두 대소문자를 구별합니다. 객체에 속성을 정의하려면 값을 할당하세요. 예를 들기 위해 `myCar`라는 객체를 생성하고, `make`, `model`, `year`라는 이름의 속성을 추가해보겠습니다.

```js
const myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
```

위의 코드는, 중괄호(`{}`) 안에 쉼표로 구분한 속성 이름과 값의 목록으로 나타내는 [**객체 초기자**](#객체_초기자)로 나타낼 수도 있습니다.

```js
const myCar = {
  make: 'Ford',
  model: 'Mustang',
  year: 1969
};
```

객체에 할당되지 않은 속성은{{jsxref("undefined")}}입니다. ({{jsxref("null")}}이 아닙니다)

```js
myCar.color; // undefined
```

JavaScript의 객체 속성은 대괄호 표기법([속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_Accessors))을 사용해 접근할 수도 있습니다. 객체를 때때로 '연관 배열'(associative array)이라고 부르기도 하는데, 속성은 자신에 접근할 수 있는 문자열 값과 연관되어 있기 때문입니다. 그러므로 `myCar` 객체의 속성에 아래와 같이 접근할 수도 있을 것입니다.

```js
myCar['make'] = 'Ford';
myCar['model'] = 'Mustang';
myCar['year'] = 1969;
```

객체 속성 이름은 유효한 JavaScript 문자열 혹은 문자열로 변환 가능한 것이면 모두 가능하며, 빈 문자열도 여기 포함됩니다. 그러나 유효한 JavaScript 식별자가 아닌 이름(공백이나 붙임표, 숫자로 시작하는 이름)을 가진 속성은 대괄호 표기법으로만 접근할 수 있습니다. 대괄호 표기법은 속성 이름이 동적으로 정해지는 경우, 즉 런타임 시점까지 알 수 없는 경우 유용합니다. 아래 예제를 살펴보세요.

```js
// 네 개의 변수를 쉼표로 구분해서
// 한 번에 생성하고 할당
const myObj = new Object(),
      str = 'myString',
      rand = Math.random(),
      obj = new Object();

myObj.type              = '마침표 구문';
myObj['date created']   = '공백을 포함한 문자열';
myObj[str]              = '문자열 값';
myObj[rand]             = '무작위 수';
myObj[obj]              = '객체';
myObj['']               = '빈 문자열까지';

console.log(myObj);
```

모든 대괄호 표기법 안의 키는 심볼이 아닌 경우 문자열로 변환되는 점을 기억하세요. JavaScript 객체의 속성 이름(키)은 문자열이나 심볼 뿐이기 때문입니다([클래스 필드 제안서](https://github.com/tc39/proposal-class-fields)로 인해 비공개 속성 이름도 추가되겠지만, 비공개 속성 접근에는 `[]` 형식을 사용하지 않을 것입니다). 예를 들어, 위 코드의 `myObj`에 `obj`를 키로 추가하는 부분에서 JavaScript는 {{jsxref("Object.toString", "obj.toString()")}} 메서드를 호출한 결과 문자열을 새로운 키로 사용합니다.

속성 접근은 변수에 저장된 문자열 값으로도 가능합니다.

```js
let propertyName = 'make';
myCar[propertyName] = 'Ford';

propertyName = 'model';
myCar[propertyName] = 'Mustang';
```

대괄호 표기법은 [`for...in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in)과 함께 객체의 열거 가능한 속성을 순회할 때도 사용할 수 있습니다. 아래 함수는 이 방법의 동작 방식을 보이는 예제로, 객체와 객체 이름을 매개변수로 제공하면 객체의 속성들을 출력합니다.

```js
function showProps(obj, objName) {
  let result = '';
  for (let i in obj) {
    // obj.hasOwnProperty()를 사용해서 객체의 프로토타입 체인에 존재하지 않는 속성을 제외
    if (obj.hasOwnProperty(i)) {
      result += `${objName}.${i} = ${obj[i]}\n`;
    }
  }
  console.log(result);
}
```

`showProps(myCar, 'myCar')`를 호출하면 이렇게 출력됩니다.

```
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

## 객체 속성 나열하기

객체 속성을 나열하거나 순회하는 방법에는 세 가지 내장된 방법이 있습니다.

- [for...in](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 반복문. 이 방법은 객체와 객체의 프로토타입 체인에 존재하는 모든 열거 가능한 속성을 순회합니다.
  이 방법은 객체와 객체의 프로토타입 체인 상의 열거 가능한 모든 프로퍼티를 순회한다.
- {{jsxref("Object.keys", "Object.keys(o)")}}. 이 방법은 `o` 객체 자신만의(프로토타입 체인을 제외한) 열거 가능한 속성 이름("키")을 배열로 반환합니다.
- {{jsxref("Object.getOwnPropertyNames", "Object.getOwnPropertyNames(o)")}}. 이 방법은 `o` 객체 자신만의 모든(열거 불가능하더라도) 속성 이름("키")을 배열로 반환합니다.

'숨은' 속성(프로토타입 체인 상의 속성 중, 같은 이름의 속성이 체인에서 앞서 존재해서 가려진 속성)을 나열하는 내장 방법은 없습니다. 그러나 밑의 함수를 사용하면 가능합니다.

```js
function listAllProperties(o) {
	let objectToInspect = o;
	let result = [];

  while(objectToInspect !== null) {
    result = result.concat(Object.getOwnPropertyNames(objectToInspect));
    objectToInspect = Object.getPrototypeOf(objectToInspect)
  }

	return result;
}
```

## 객체 생성하기

JavaScript에는 미리 정의된 객체가 여럿 존재합니다. 여기에 더해 여러분만의 객체도 생성할 수 있습니다. 객체 생성에는 [객체 초기자](/ko/docs/Web/JavaScript/Reference/Operators/Object_initializer)를 사용할 수도 있고, 생성자 함수를 정의한 후에 `new` 연산자와 함께 호출해서 객체 인스턴스를 생성할 수도 있습니다.

### 객체 초기자 사용하기

객체 초기자의 사용은 종종 "리터럴 표기에 의한 객체 생성"이라고 불립니다. "객체 초기자"(Object initializer)라는 단어는 C++에서 사용하는 용어와 같습니다.

객체 초기자를 사용한 객체 생성 구문은 다음과 같습니다.

```js
const obj = {
  property_1:   value_1,   // 속성의 값은 식별자일 수도 있고
  2:            value_2,   // 숫자일 수도 있고
  // ...,
  'property n': value_n    // 문자열일 수도 있음
};
```

위 코드에서 `obj`는 새로운 객체의 이름이고, 콜론 앞에 위치한 속성 이름은 식별자(이름, 숫자, 스트링 리터럴), 각각의 `value_i`는 속성 이름에 할당할 표현식입니다. `obj`와 할당 구문은 선택 사항으로, 이 객체를 다른 곳에서 참조하지 않아도 되면 변수에 할당할 필요도 없습니다. (명령문을 기대하는 곳에 객체 리터럴을 배치하려면 블록 선언문으로 잘못 읽는 경우가 없도록 괄호로 감싸줄 필요가 있습니다)

객체 초기자는 표현식이며 자신이 속한 선언문이 실행될 때마다 새로운 객체를 생성합니다. 같은 초기자가 생성한 객체끼리라도 구별 가능하며 서로 비교했을 때 거짓을 반환합니다. 초기자가 생성하는 객체는 마치 `new Object()` 호출을 한 것과 같이 생성됩니다. 즉 객체 초기자 표현식의 결과 객체들은 `Object`의 인스턴스입니다.

다음 선언문은 `cond`가 참일 때만 객체를 생성해서 변수 `x`에 할당합니다.

```js
let x;
if (cond) {
  x = {greeting: '안녕하세요'};
}
```

다음 예제는 `myHonda`를 세 개의 속성과 함께 생성합니다. `engine` 속성 역시 자신만의 속성을 가진 객체임에 주목하세요.

```js
const myHonda = {color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}};
```

객체 초기자로 배열을 생성할 수도 있습니다. [배열 리터럴](/ko/docs/Web/JavaScript/Guide/Grammar_and_types#배열_리터럴)을 참고하세요.

### 생성자 함수 사용하기

다른 방법으로, 다음의 두 단계를 통해 객체를 생성할 수 있습니다.

1. 생성자 함수를 작성해서 객체 타입을 정의합니다. 객체 타입 이름의 첫 글자는, 그럴만한 이유로, 대문자로 시작하는 관례가 있습니다.
2. `new` 연산자를 사용해 객체 인스턴스를 생성합니다.

객체 타입을 정의하려면 타입 이름, 속성, 메서드를 지정하는 함수를 생성하세요. 예를 들어 차량을 표현하기 위한 객체 타입을 정의한다고 합시다. 그러면 객체 타입의 이름은 `Car`가 될 것이고, 브랜드와 모델, 연식 속성이 필요할 것입니다.

```js
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
```

함수에 전달한 값을 객체 속성으로 할당하기 위해 `this`를 사용하는 것에 주목하세요.

이제 `mycar` 객체를 생성할 수 있습니다.

```js
var mycar = new Car("Eagle", "Talon TSi", 1993);
```

이 선언문은 `mycar`를 생성한 후 매개변수로 지정한 값을 속성에 할당합니다. 이후 `mycar.make`는 문자열 "Eagle", `mycar.year`는 정수 1993 등을 가지게 됩니다.

`new`를 사용한 호출로 몇 개의 `Car` 객체라도 만들 수 있습니다.

```js
const kenscar = new Car("Nissan", "300ZX", 1992);
const vpgscar = new Car("Mazda", "Miata", 1990);
```

객체는 다른 객체도 속성으로 가질 수 있습니다. `Person`이라는 객체를 다음과 같이 정의한다고 하겠습니다.

```js
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
```

두 개의 새로운 `Person` 객체도 인스턴스화 했다고 합시다.

```js
const rand = new Person('Rand McKinnon', 33, 'M');
const ken = new Person('Ken Jones', 39, 'M');
```

이제 `Car`의 정의를, `Person` 객체를 갖는 `owner` 속성을 추가하도록 수정할 수 있습니다.

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
```

그 후에, 새로운 객체 인스턴스를 생성할 땐 이렇게 할 수 있습니다.

```js
const car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
const car2 = new Car('Nissan', '300ZX', 1992, ken);
```

문자열 리터럴이나 정수 값이 아니라 객체 `rand`와 `ken`을 소유자 매개변수로 지정했음을 볼 수 있습니다. 이제 `car2`의 소유자 이름을 알려면 이렇게 속성에 접근합니다.

```js
car2.owner.name
```

이미 정의된 객체에도 속성을 추가할 수 있습니다. 예를 들어,

```js
car1.color = 'black';
```

위의 코드는 `car1`에 `color` 속성을 추가한 후 값으로 `'black'`을 할당하고 있습니다. 그러나 이 방법은 다른 객체에 영향을 주지 않습니다. 같은 타입의 모든 객체에 값을 추가하려면 `Car` 객체 타입의 정의를 수정해야 합니다.

### `Object.create` 메서드 사용하기

{{jsxref("Object.create()")}} 메서드로 객체를 생성할 수도 있습니다. 이 메서드는 생성자 함수 정의 없이도 생성할 객체의 프로토타입을 지정할 수 있으므로 유용할 수도 있습니다.

```js
// 동물 속성과 메서드 캡슐화
const Animal = {
  type: '무척추동물', // 속성 기본 값
  displayType: function() {  // 동물 종류를 출력할 메서드
    console.log(this.type);
  }
};

// animal1이라는 이름의 동물 타입 객체 생성
const animal1 = Object.create(Animal);
animal1.displayType(); // 출력: 무척추동물

// fish라는 이름의 동물 타입 객체 생성
const fish = Object.create(Animal);
fish.type = '물고기';
fish.displayType(); // 출력: 물고기
```

## 상속

JavaScript의 모든 객체는 적어도 하나의 다른 객체를 상속합니다. 상속 대상 객체를 프로토타입이라고 부르고, 상속한 속성은 생성자의 `prototype` 객체에서 찾을 수 있습니다. [상속과 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)에서 자세히 알아보세요.

## 객체 속성 인덱싱

객체의 속성에 접근할 땐 속성 이름이나 인덱스로 접근할 수 있습니다. 처음에 속성을 이름으로 정의했으면 그 속성은 항상 이름으로만 참조해야 하고, 처음에 인덱스로 정의했으면 항상 인덱스로만 참조해야 합니다.

이 제한은 (위에서 `Car` 객체 타입으로 했던 것과 같이) 생성자 함수로 객체와 속성을 생성할 때, 그리고 (`myCar.color = 'red'`처럼) 각각의 속성을 명시적으로 정의할 때 모두 해당됩니다. 만약 객체의 속성을 `myCar[5] = '25 mpg'`처럼 인덱스로 정의했으면 이후에 참조할 때도 `myCar[5]`로 해야 합니다.

다만 HTML 요소를 나타내는, `document.forms`와 같은 유사 배열 객체에는 예외로, 문서 상의 순서를 나타내는 인덱스로 접근할 수도 있고 (정의된 경우) 이름으로 접근할 수도 있습니다. 즉 문서의 두 번째 `<form>` 태그가 `name="myForm"` 특성을 가지고 있다면 `document.forms[1]`, `document.forms['myForm']`, `document.forms.myForm` 모두 사용할 수 있습니다.

## 객체 속성 정의하기

`prototype` 속성을 사용하면 이전에 정의된 객체 타입에도 속성을 추가할 수 있습니다. 이렇게 정의된 속성은 해당 타입의 모든 인스턴스가 공유합니다. 아래 코드는 모든 `Car` 타입 객체에 `color` 속성을 추가한 후, `car1` 객체에 그 속성의 값을 할당하는 모습입니다.

```js
Car.prototype.color = null;
car1.color = "black";
```

[상속과 프로토타입 체인](/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)에서 더 자세한 정보를 알아보세요.

## 메서드 정의

메서드(method)는 객체와 연관된 함수, 다른 말로 하자면 객체 속성 중 함수인 것을 말합니다. 메서드는 다른 함수와 똑같이 정의하지만, 객체 속성에 할당한다는 점이 다릅니다. [메서드 정의](/ko/docs/Web/JavaScript/Reference/Functions/Method_definitions)에서 더 자세한 정보를 알아보세요. 메서드의 예시는 다음과 같습니다.

```js
objectName.methodName = functionName;

const myObj = {
  myMethod: function(params) {
    // 뭔가 하기...
  }

  // 이렇게도  동작해요
  myOtherMethod(params) {
    // 뭔가 다른거 하기...
  }
};
```

`objectName`은 이미 존재하는 객체, `methodName`은 할당하려는 메서드, `functionname`은 함수의 이름입니다.

객체의 맥락으로 메서드를 호출하려면 다음과 같이 사용하세요.

```js
object.methodName(params);
```

객체 생성자 함수에 메서드 정의를 포함하면 메서드 타입에 메서드를 정의할 수 있습니다. 앞에서 정의했던 `Car` 객체의 속성을 정리해서 출력하는 함수를 정의해봅시다.

```js
function displayCar() {
  const result = `아름다운 ${this.year} ${this.make} ${this.model}`;
  prettyPrint(result);
}
```

`prettyPrint`는 가로 구분선을 그리고 문자열을 출력하는 함수라고 가정하겠습니다. `this`를 사용해서 메서드가 속한 객체를 참조하는 모습을 확인하세요.

이제 이 함수가 `Car`의 메서드가 되려면 객체 정의에 아래의 코드를 추가하세요.

```js
this.displayCar = displayCar;
```

따라서 `Car` 정의의 전체 내용은 다음과 같아집니다.

```js
function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
  this.displayCar = displayCar;
}
```

이제 각각의 객체에 대해 `displayCar` 메서드를 호출할 수 있습니다.

```js
car1.displayCar();
car2.displayCar();
```

## `this`로 객체 참조하기

JavaScript에는 [`this`](/en-US/docs/Web/JavaScript/Reference/Operators/this)라는 특별한 키워드가 있습니다. `this`를 사용하면 메서드 내에서 현재 객체를 참조할 수 있습니다. 예를 들어 `Manager`and `Intern` 두 객체를 가정해보겠습니다. 각각의 객체는 자신만의 `name`, `age`, `job` 속성을 가집니다. 아래의 `sayHi()` 함수에서 `this.name`에 접근하는 것에 주목하세요. 이 함수를 각각의 객체에 할당한 후 호출하면 `'안녕하세요, 제 이름은'`, 자신의 `name`, 그리고 `'입니다.'`로 구성된 문자열을 출력하게 됩니다.

```js
const Manager = {
  name: "John",
  age: 27,
  job: "소프트웨어 엔지니어"
}
const Intern = {
  name: "Ben",
  age: 21,
  job: "소프트웨어 엔지니어 인턴"
}

function sayHi() {
  console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`)
}

// 두 객체 모두에 sayHi 함수 추가
Manager.sayHi = sayHi;
Intern.sayHi = sayHi;

Manager.sayHi(); // 안녕하세요, 제 이름은 John 입니다.'
Intern.sayHi(); // 안녕하세요, 제 이름은 Ben 입니다.'
```

위의 `this`는 자신이 속한 객체를 참조합니다. 이제 나이를 알려주는 문장을 콘솔에 기록하는 함수 `howOldAmI()`를 생성해볼 수 있을 것입니다.

```js
function howOldAmI() {
  console.log(`저는 ${this.age}살입니다.`);
}
Manager.howOldAmI = howOldAmI;
Manager.howOldAmI(); // 저는 27살입니다.
```

## 접근자와 설정자 정의하기

[접근자](/ko/docs/Web/JavaScript/Reference/Functions/get)는 특정 속성의 값을 반환하는 메서드입니다. [설정자](/ko/docs/Web/JavaScript/Reference/Functions/set)는 특정 속성의 값을 설정하는 메서드입니다. 접근자와 설정자는 속성 추가를 지원하는 객체라면, 사전정의된 코어 객체와 사용자 정의 객체 모두에 추가할 수 있습니다.

접근자와 생성자는...

- [객체 초기자](#객체_초기자)를 사용해 정의하거나,
- 나중에 필요한 시점에 아무 객체에나 접근자/설정자 추가 메서드로 추가할 수 있습니다.

[객체 초기자](#객체_초기자)를 사용해 접근자와 설정자를 정의하는 경우 필요한 것은, 접근자 메서드 이름 앞에 `get`, 설정자 메서드 이름 앞에 `set`을 붙이는 것 뿐입니다. 물론 모든 접근자 메서드는 아무 매개변수도 받지 않고, 설정자 메서드는 정확히 하나의 매개변수(설정할 값)만 받는다는 제한은 있습니다.

```js
const o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- 이 시점에 get b() 메서드 실행
o.c = 50;         //   <-- 이 시점에 set c(x) 메서드 실행
console.log(o.a); // 25
```

여기서 `o` 객체의 속성은 다음과 같습니다.

- `o.a` — 숫자
- `o.b` — `o.a`에 1을 더한 값을 반환하는 접근자
- `o.c` — `o.c`에 설정한 값의 반을 `o.a`에 설정하는 설정자

다만 객체 리터럴에서 "\[gs]et _property_()"을 사용해 정의한 접근자와 설정자의 함수 이름은 접근자와 설정자의 실제 이름이 아닙니다. `[gs]et propertyName(){ }` 구문이 생긴 모습 때문에 그렇게 보일 수는 있지만요.

접근자와 설정자는 또한 객체 생성 이후에 {{jsxref("Object.defineProperties()")}} 메서드로 추가할 수 있습니다. 이 메서드의 첫 번째 매개변수는 접근자와 설정자를 추가할 객체고, 두 번째 매개변수는 속성 이름이 추가할 접근자/설정자 이름, 속성 값은 접근자/설정자를 정의하는 객체입니다. 다음은 바로 위 예제에서 정의한 것과 같은 접근자/생성자를 추가하는 코드입니다.

```js
const o = { a: 0 };

Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // 설정자 실행, a 속성에 10 / 2 = 5 할당
console.log(o.b); // 접근자 실행, a + 1 = 6 반환
```

두 형태 중 선택할 형태는 여러분의 프로그래밍 스타일과 현재 해야 하는 작업에 달렸습니다. 프로토타입을 정의할 때 이미 객체 초기자를 사용 중이라면 아마 대부분 간결함과 자연스러움으로 인해 처음 형태를 선택하게 될 것입니다. 그러나 객체 프토토타입을 따로 작성하지 않은 등의 이유로 나중에 접근자와 설정자를 추가해야 할 필요가 있으면 두 번째가 유일한 방법입니다. 두 번째 방법은 JavaScript의 동적인 모습을 가장 잘 나타내는 표현 중 하나겠지만, 읽거나 이해하기 힘든 코드를 만들기도 합니다.

## 속성 삭제

상속한 속성이 아닌 경우 [`delete`](/ko/docs/Web/JavaScript/Reference/Operators/delete) 연산자로 속성을 삭제할 수 있습니다.

```js
// a와 b 두 속성의 새로운 객체 생성
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// a 속성을 제거해서 b 속성만 남김
delete myobj.a;
console.log ('a' in myobj); // 출력: false
```

## 객체 비교

JavaScript의 객체는 참조 타입입니다. 두 개의 객체는 서로 같은 속성을 갖더라도, 자신들끼리는 절대 같지 않으며 오직 자기 자신과의 비교만 참을 반환합니다.

```js
// 두 개의 변수, 두 개의 같은 속성을 가진 서로 다른 객체
const fruit = {name: '사과'};
const fruitbear = {name: '사과'};

fruit == fruitbear; // false 반환
fruit === fruitbear; // false 반환
```

```js
// 두 개의 변수, 하나의 객체
const fruit = {name: '사과'};
const fruitbear = fruit;  // fruit 객체 참조를 fruitbear에 할당

// fruit과 fruitbear가 같은 객체를 가리킴
fruit == fruitbear; // true 반환
fruit === fruitbear; // true 반환

fruit.name = '포도';
console.log(fruitbear); // 출력: { name: "사과" }가 아니라 { name: "포도" }
```

비교 연산에 대한 더 자세한 정보는 [동일 연산자](/ko/docs/Web/JavaScript/Reference/Operators#동일_연산자)에서 더 알아보세요.

## 같이 보기

- 더 깊게 들어가려면 [JavaScript 객체 모델의 세부 사항](/ko/docs/Web/JavaScript/Guide/Details_of_the_Object_Model)을 읽어보세요.
- 객체를 생성하는 다른 방법인 ECMAScript 2015 클래스에 대해 알아보려면 [JavaScript 클래스](/ko/docs/Web/JavaScript/Reference/Classes) 참고서를 방문하세요.

{{PreviousNext("Web/JavaScript/Guide/Regular_Expressions", "Web/JavaScript/Guide/Details_of_the_Object_Model")}}
