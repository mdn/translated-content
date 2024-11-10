---
title: JavaScript 객체 기본
slug: Learn/JavaScript/Objects/Basics
---

{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}

이 글에서는 JavaScript 객체와 관련된 기본적인 문법을 살펴보고 이전 코스에서 학습해서 이미 알고 있는 JavaScript 의 특징들과 우리가 이미 사용하고 있는 기능들이 이미 객체와 관련되어 있다는 사실을 다시 한번 복습할 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">사전 지식:</th>
      <td>
        컴퓨터와 관련된 기본지식, HTML 과 CSS, 그리고 JavaScript 에 대한 기본
        지식 (<a href="/ko/docs/Learn/JavaScript/First_steps"
          >JavaScript 첫걸음</a
        >
        및
        <a href="/ko/docs/Learn/JavaScript/Building_blocks"
          >JavaScript 구성요소</a
        >
        참조).
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        객체지향 프로그래밍에 대한 기본 이론을 이해하고, JavaScript 에서 객체가
        어떻게 처리되는지("대부분이 객체임") 학습 후, JavaScript 객체를 실제로
        이용하는 방법에 대해 알게되는 것을 목표로 합니다.
      </td>
    </tr>
  </tbody>
</table>

## 객체 기본

객체는 관련된 데이터와 함수(일반적으로 여러 데이터와 함수로 이루어지는데, 객체 안에 있을 때는 보통 프로퍼티와 메소드라고 부릅니다)의 집합입니다. 예제를 통해서 실제 객체가 무엇인지 알아보도록 합시다.

시작하기에 앞서, [oojs.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs.html) 파일의 복사본을 로컬 환경에 만듭니다. 이 파일은 우리가 작성한 소스코드를 포함하는 작은 {{HTMLElement("script")}} 요소를 포함하고 있습니다. 우리는 기본 객체 문법을 탐구하기 위한 기반으로 이 파일을 사용할 것입니다. 예제를 제대로 따라하려면 반드시 [개발자 도구 JavaScript 콘솔](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools#The_JavaScript_console)을 열어두고, 몇몇 명령어를 직접 입력할 준비가 되어있어야 합니다.

여타 JavaScript 의 요소들과 마찬가지로, 객체를 생성하는 것은 변수를 정의하고 초기화하는 것으로 시작합니다. 아래의 JavaScript 코드를 oojs.html 파일의 script tag 사이에 입력하고 저장 한 후, 리로드 해보세요.

```js
var person = {};
```

이제 브라우저의 [JavaScript 콘솔](/ko/docs/Learn/Common_questions/What_are_browser_developer_tools#the_javascript_console) 을 열고 `person`을 입력 한 다음 <kbd>Enter</kbd>/<kbd>Return</kbd>을 누르세요. 아래 줄 중 하나와 유사한 결과가 표시됩니다.

```js
[object Object]
Object { }
{ }
```

축하합니다. 방금 첫번째 객체를 만들었습니다. 잘했어요! 그러나 이것은 빈 객체이므로 실제로 많은 것들을 할 수 없습니다. 파일에서 JavaScript 객체를 다음과 같이 업데이트 해보겠습니다.

```js
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name[0] +
        " " +
        this.name[1] +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        ".",
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.name[0] + ".");
  },
};
```

저장하고 새로 고침 한 후 브라우저 devtools의 JavaScript 콘솔에 다음 중 일부를 입력 해보세요.

```js
person.name;
person.name[0];
person.age;
person.interests[1];
person.bio();
person.greeting();
```

이제 객체 내부에 몇 가지 데이터와 기능이 있으며, 멋진 간단한 구문으로 액세스 할 수 있습니다!

> [!NOTE]
> 만약 여기까지 진행하는데 어려움이 있다면, 제가 만들어놓은 파일과 비교해보세요 — [oojs-finished.html](https://github.com/mdn/learning-area/blob/master/javascript/oojs/introduction/oojs-finished.html) (그리고 [실행되는 예제도 보세요](https://mdn.github.io/learning-area/javascript/oojs/introduction/oojs-finished.html)). Live 버전에서는 텅빈 화면만 보이겠지만, 그게 정상입니다 — 다시, 개발자도구를 열고 객체 구조를 들여다보기 위해 위에 언급된 명령어를 입력해보세요.

자, 이제 뭘 해볼까요? 객체는 각기 다른 이름(위의 예에서는 `name` 과 `age`)과 값(예제에서, `['Bob', 'Smith']` 과 `32`)을 갖는 복수개의 멤버로 구성됩니다. 한 쌍의 이름과 값은 ',' 로 구분되야 하고, 이름과 값은 ':' 으로 분리됩니다. 결국 문법은 아래와 같은 패턴이 됩니다.

```js
var objectName = {
  member1Name: member1Value,
  member2Name: member2Value,
  member3Name: member3Value,
};
```

객체를 구성하는 멤버의 값은 어떤 것이라도 될 수 있습니다. 우리가 만든 person 객체는 문자열, 숫자, 배열 두개와 두개의 함수를 가지고 있습니다. 처음 4개의 아이템은 데이터 아이템인데, 이걸 객체의 **프로퍼티(속성)** 라고 부릅니다. 끝에 두개의 아이템은 함수인데 이 함수를 통해 데이터를 가지고 뭔가 일을 할 수 있게 됩니다. 이걸 우리는 **메소드** 라고 부릅니다.

이런 객체는 객체 리터럴(**object literal)** 이라고 부릅니다. 객체를 생성할 때 컨텐츠를 그대로 대입합니다. 객체 리터럴은 클래스로부터 생성하는 방식과는 다릅니다. 이 방식은 뒤에서 살펴보게 될겁니다.

객체 리터럴을 사용해서 객체를 생성하는 것은 연속된 구조체나 연관된 데이터를 일정한 방법으로 변환하고자 할 때 많이 쓰이는 방법입니다. 예를 들면 서버에게 주소를 데이터베이스에 넣어달라고 요청하는 경우입니다. 각 아이템들을 하나 하나 개별 전송하는 것보다, 하나의 객체를 전송하는 것이 훨씬 효율적입니다. 또 각 아이템들을 이름으로 구분해서 사용하기 원할 때도 배열을 사용하는 것보다 훨씬 쉽습니다.

## 점 표기법

위에서, 우리는 객체의 프로퍼티와 메소드를 **점 표기법**을 통해 접근했습니다. 객체 이름(person)은 **네임스페이스**처럼 동작합니다. 객체내에 **캡슐화되어있는**것에 접근하려면 먼저 점을 입력해야합니다. 그 다음 점을 찍고 접근하고자 하는 항목을 적습니다. 간단한 프로퍼티의 이름일 수도 있을 것이고, 배열의 일부이거나 객체의 메소드를 호출할 수도 있습니다.

```js
person.age;
person.interests[1];
person.bio();
```

### 하위 namespaces

다른 객체를 객체 멤버의 값으로 갖는 것도 가능합니다. 예를 들면, 다음과 같은 name 멤버를

```js
name: ['Bob', 'Smith'],
```

아래와 같이 바꿔봅시다.

```js
name : {
  first: 'Bob',
  last: 'Smith'
},
```

자, 이제 우리는 성공적으로 **하위 namespace** 를 만들었습니다. 복잡해보이지만, 사실 그렇지도 않습니다. 이 속성을 사용하려면 그저 끝에 다른 점을 하나 찍어주기만 하면 됩니다. JS 콘솔에서 아래와 같이 입력해보세요.

```js
person.name.first;
person.name.last;
```

**중요**: 객체의 속성이 바뀌었으니까, 기존 메소드 코드를 바꿔 줘야 합니다. 기존 코드를

```js
name[0];
name[1];
```

아래와 같이 바꿔줘야 합니다.

```js
name.first;
name.last;
```

그렇지 않으면 기존 메소드는 더 이상 동작하지 않을 것입니다.

## 괄호 표기법

객체의 프로퍼티에 접근하는 다른 방법으로 괄호 표기법을 사용하는 것이 있습니다. 다음과 같이 사용하는 대신

```js
person.age;
person.name.first;
```

이렇게 사용할 수 있습니다.

```js
person["age"];
person["name"]["first"];
```

이런 방식은 배열 속에 있는 항목에 접근하는 방법과 매우 유사해 보이는데 실제로도 이는 기본적으로 동일한 것입니다. 한 항목을 선택하기 위해 인덱스 숫자를 이용하는 대신에 각 멤버의 값들과 연결된 이름을 이용합니다. 객체가 간혹 **연관배열 (associative arrays**)이라고 불리는 것이 당연합니다. 연관배열은 배열이 숫자를 값에 연결하는 것과 같은 방법으로 문자열을 값에 매핑합니다.

## 객체 멤버 설정하기

지금까지는 객체 멤버를 단순히 가져오기만(또는 **반환**) 했습니다. 설정할 멤버를 간단히 명시하여(점이나 대괄호 표기법을 사용) 객체 멤버의 값을 **설정**(갱신)하는 것도 물론 가능합니다.

```js
person.age = 45;
person["name"]["last"] = "Cratchit";
```

위의 코드를 입력한 다음, 객체 멤버값을 아래와 같이 다시 확인해봅시다.

```js
person.age;
person["name"]["last"];
```

객체 멤버를 설정하는 것은 단순히 기존에 존재하는 프로퍼티나 메소드로 값을 설정하는 것 뿐 아니라, 완전히 새로운 멤버를 생성할 수도 있습니다. JS 콘솔에서 아래 내용을 입력해보세요.

```js
person["eyes"] = "hazel";
person.farewell = function () {
  alert("Bye everybody!");
};
```

자, 이제 새로운 멤버를 테스트해보세요.

```js
person["eyes"];
person.farewell();
```

대괄호 표현의 이점 중 하나는 멤버의 값을 동적으로 변경할 수 있을 뿐아니라, 멤버 이름까지도 동적으로 사용할 수 있다는 것입니다. 자, 만약 사용자가 두개의 텍스트 입력을 통해서 people 데이터에 커스텀 값을 넣고 싶어한다고 가정해봅시다. 그 값은 다음과 같이 얻어올 수 있을겁니다.

```js
var myDataName = nameInput.value;
var myDataValue = nameValue.value;
```

이제 `person` 객체에 다음과 같이 새 멤버의 이름과 값을 추가할 수 있습니다.

```js
person[myDataName] = myDataValue;
```

자, 제대로 동작하는지 보려면 아래와 같이 `person` 객체에 대괄호를 붙여서 확인해보면 됩니다.

```js
var myDataName = "height";
var myDataValue = "1.75m";
person[myDataName] = myDataValue;
```

이제 저장하고 리로드후 아래코드를 입력해보세요.

```js
person.height;
```

점 표기법으로는 위의 예제처럼 멤버의 이름을 동적으로 사용할 수 없고, 상수 값만을 사용해야 합니다.

## "this" 는 무엇인가?

자, 우리가 이제 보게될 메소드가 좀 이상하게 보일 수도 있을겁니다. 예제를 한번 봐주세요

```js
greeting: function() {
  alert('Hi! I\'m ' + this.name.first + '.');
}
```

아마도 "this" 가 뭔지 의아하실 것입니다. `this` 키워드는 지금 동작하고 있는 코드를 가지고 있는 객체를 가리킵니다. 위의 예제에서 `this` 는 `person` 객체와 동일합니다. 그럼 왜 직접 `person` 객체를 쓰지 않은걸까요? 앞으로 보게될 [입문자를 위한 객체 지향 JavaScript](/ko/docs/Learn/JavaScript/Objects/Object-oriented_JS) 문서에서 우리가 생성자를 공부하게 될 때, 혹은 그것 말고도 기타 등등의 상황에서 `this` 는 매우 유용하게 사용됩니다. 이 this 라는 녀석은 객체 멤버의 컨텍스트가 바뀌는 경우에도 언제나 정확한 값을 사용하게 해줍니다(예를 들어, 두개의 다른 `person` 객체가 각각 다른 이름으로 인스턴스로 생성된 상태에서 인사말을 출력하기 위해 객체의 name 을 참조해야 한다고 생각해보세요).

간략화된 person 객체를 가지고 설명을 좀 해보겠습니다.

```js
var person1 = {
  name: "Chris",
  greeting: function () {
    alert("Hi! I'm " + this.name + ".");
  },
};

var person2 = {
  name: "Deepti",
  greeting: function () {
    alert("Hi! I'm " + this.name + ".");
  },
};
```

이 예제에서, 메소드의 실제 코드는 완전히 동일하지만 `person1.greeting()` 은 "Hi! I'm Chris." 를 출력합니다. 반면 `person2.greeting()` 은 "Hi! I'm Deepti." 을 출력하게 됩니다. 앞서 이야기한 것처럼, `this` 은 실행중인 코드가 속해있는 객체입니다. 객체 리터럴을 직접 지정해서 사용하는 경우라면 그리 유용하지 않겠지만, 동적으로 객체를 생성하는 경우(예를 들면 생성자를 사용하는 경우)에는 매우 유용합니다. 이 부분은 추후에 더 명확하게 이해가 될 겁니다.

## 객체를 줄곧 사용해 왔습니다

예제코드를 따라하다보니, 이쯤 되면 슬슬 "점" 표기법을 사용하는 것이 꽤 자연스럽게 느껴질 것입니다. 물론 이 코스 내내 사용했기 때문입니다! 샘플에서 사용하였던 브라우저 내장 API 나 JavaScript 객체들은 실제로 우리가 공부했던 구조와 완전히 동일한 방법으로 구현된 것들입니다. 물론 우리가 봤던 예제보다 복잡하기는 합니다.

자, 다음과 같이 문자열의 메소드를 사용했다고 가정합시다.

```js
myString.split(",");
```

[`String`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String) 클래스의 인스턴스가 가진 메소드를 사용하고 있습니다. 코드에서 문자열을 생성할 때 마다 `String` 의 인스턴스가 만들어지고, 그렇게 만들어진 인스턴스는 당연히 공통적으로 사용할 수 있는 메소드와 프러퍼티를 가집니다.

아래와 같이 도큐먼트 오브젝트 모델(DOM)에 접근할때면,

```js
var myDiv = document.createElement("div");
var myVideo = document.querySelector("video");
```

[`Document`](/ko/docs/Web/API/Document) 클래스의 인스턴스를 통해 메소드를 사용하고 있는 것입니다. 각 웹페이지가 로딩될 때, `Document` 인스턴스가 만들어지고, 전체 웹 페이지 구조와 컨텐츠 그리고 URL같은 기능들을 제공하는 `document` 가 호출됩니다. 다시 말하지만 이건 여러 공통 메소드와 프로퍼티들이 이 인스턴스를 통해 사용가능하게 됩니다.

우리가 계속 사용해왔던 다른 내장 객체/API([`Array`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array), [`Math`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math) 등등)들도 마찬가지입니다

모든 내장 객체/API가 자동으로 객체의 인스턴스를 생성하는 것은 아니라는 것에 주의 하세요. 예를 들어, [Notifications API](/ko/docs/Web/API/Notifications_API) — 최근 브라우져들이 시스템 알림을 사용하게 하는 기능 — 는 사용자가 발생 시키길 원하는 notification 만을 선택하게 하는 생성자를 사용해야 합니다. JavaScript 콘솔에 다음 내용을 입력해보세요

```js
var myNotification = new Notification("Hello!");
```

다음 문서에서 생성자에 대해서 좀더 자세히 알아볼 것입니다.

> [!NOTE]
> 객체간 통신은 **message passing** 방식을 사용한다고 생각하는게 좋습니다. 한 객체가 다른 객체에게 어떤 액션을 요청해야 하는 경우, 그 객체는 다른 객체가 가지고 있는 메소드를 통해서 메세지를 보내는 것이고, 응답을 기다리는 것입니다. 그 응답은 것이 우리가 알고 있는 return 값입니다.

## 실력을 시험해보세요!

본문의 끝에 도달했지만 가장 중요한 정보를 기억할 수 있나요? 계속 진행하기전에 정보들을 잘 기억하고 있는지 확인하기 위한 몇 가지 추가 테스트를 찾을 수 있습니다. [기술 테스트 : 객체의 기본 사항](/ko/docs/Learn/JavaScript/Objects/Test_your_skills:_Object_basics)을 참조하세요.

## 요약

축하합니다, 첫 번째 JavaScript 객체 설명 문서를 끝까지 읽으셨습니다. 이제 여러분은 JavaScript 객체를 어떻게 활용하는지 이해하게 되었습니다. 간단한 사용자 정의 객체를 만드는 방법을 포함해서요. 또 객체는 데이터와 연관된 함수를 저장하는데 매우 유용한 구조라는 것도 알게 되었습니다. 만약 `person` 객체가 가지고 있는 모든 프로퍼티와 메소드를 따로 따로 분리된 변수와 함수로 구현하려고 한다면 그것이야 말로 비효율적이고 끔찍한 일이 될 것입니다. 변수명과 함수명들이 중복된다거나 하는 일도 비일비재 할 것입니다. 객체는 고유의 패키지에 우리의 정보를 안전하게 정보를 보호해주는 역활을 합니다.

다음 장에서는 객체지향(OOP) 이론을 배우고, JavaScript 에서는 객체지향이 어떻게 사용되었는지 알아볼 것입니다.

{{NextMenu("Learn/JavaScript/Objects/Object_prototypes", "Learn/JavaScript/Objects")}}
