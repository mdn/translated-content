---
title: 함수 — 코드 재사용
slug: Learn/JavaScript/Building_blocks/Functions
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}

코딩에 있어서 또 하나의 필수적인 개념은 **함수**인데, 이는 하나의 일을 하는 코드 조각을 정의된 블록 안에 저장하고, 같은 코드를 여러 번 타이핑하기보다는, 하나의 짧은 명령을 사용하여 여러분이 그 함수가 필요할 때 언제든지 그 코드를 호출할 수 있게 합니다. 이 문서에서 우리는 기본 문법(syntax), 어떻게 함수를 호출하고(invoke) 정의하는지, 스코프(scope), 그리고 매개변수(parameter)와 같은 함수 뒤에 있는 핵심적인 개념들을 탐구할 것입니다.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력, HTML과 CSS의 기본적인 이해,
        <a href="/ko/docs/Learn/JavaScript/First_steps">자바스크립트 첫 단계</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>JavaScript 함수의 기본 개념을 이해합니다.</td>
    </tr>
  </tbody>
</table>

## 함수는 어디에서 찾을 수 있나요?

자바스크립트 어디서든 함수를 찾을 수 있습니다. 사실, 우리는 지금까지 수업에서 함수를 계속 사용해왔습니다. 함수에 대해서 아주 많이 말해오지 않았을 뿐이죠. 그러나 이제 함수에 대해서 분명하게 말하고, 실제로 문법을 탐험할 때가 되었습니다.

[for loop](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code#%EB%A3%A8%ED%94%84%EC%9D%98_%ED%91%9C%EC%A4%80), [while 과 do...while loop](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code#while_%EA%B7%B8%EB%A6%AC%EA%B3%A0_do_..._while), 또는 [if...else문](/ko/docs/Learn/JavaScript/Building_blocks/%EC%A1%B0%EA%B1%B4%EB%AC%B8#if_..._else_%EB%AC%B8)과 같은 일반적인 내장 언어 구조를 사용하지 **않고** — `()` —같은 괄호 쌍을 사용했다면 여러분은 함수를 사용하고 있던 겁니다.

## 브라우저 내장 함수

우리는 이 코스에서 많은 브라우저 내장(built-in) 함수를 사용해왔습니다. 예를 들어, 우리가 매번 텍스트 문자열을 조작할 때마다:

```js
var myText = "I am a string";
var newString = myText.replace("string", "sausage");
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

또는 우리가 배열을 조작할 때마다:

```js
var myArray = ["I", "love", "chocolate", "frogs"];
var madeAString = myArray.join(" ");
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string
```

또는 우리가 무작위의 숫자를 생성할 때마다:

```js
var myNumber = Math.random();
// the random() function generates a random
// number between 0 and 1, and returns that
// number
```

...우리는 함수를 사용하고 있었어요!

> **참고:** 만약 필요하다면, 이 기능들에 다시 익숙해지기 위해 여러분의 브라우저 자바스크립트 콘솔에 자유롭게 이 코드들을 입력해 보세요.

JavaScript 언어는 여러분 스스로 코드 전체를 적을 필요 없이, 유용한 것들을 할 수 있게 해주는 많은 내장 함수를 가지고 있습니다. 사실, 브라우저 내장 함수를 **호출**("함수를 실행하다(run 또는 execute)"는 말을 멋있게 "호출하다(invoke)"라고 하기도 합니다)할 때 호출하는 일부 코드는 JavaScript로 작성될 수 없었습니다 — 이러한 함수 중 상당수는 백그라운드 브라우저 코드의 일부를 호출하고 있으며, 이는 JavaScript와 같은 웹 언어가 아니라 대체로 C++와 같은 저수준 시스템 언어로 작성됩니다.

몇몇 브라우저 내장함수는 핵심(core) 자바스크립트 언어의 일부가 아니라는 것을 유념하세요. 몇몇은 브라우저 API의 일부로써 정의되어 있는데, 더욱 많은 기능성을 제공하기 위해 기본(default) 언어의 위에 개발되었습니다 ([앞선 코스](/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript#%EA%B7%B8%EB%9E%98%EC%84%9C_%EC%A7%84%EC%A7%9C_%EC%96%B4%EB%96%A4_%EC%9D%BC%EC%9D%84_%ED%95%A0_%EC%88%98_%EC%9E%88%EB%82%98%EC%9A%94)에서 더 자세한 설명을 볼 수 있습니다). 브라우저 API를 다루는 법은 나중에 더 살펴보도록 하겠습니다.

## 함수 대 메소드

프로그래머들은 객체(object)의 부분인 **함수**를 **메서드**(method)라고 부릅니다. 여러분은 아직 구성된(structured) 자바스크립트 객체의 내부 작동에 대해서 배울 필요는 없습니다. 차후의 모듈에서 객체의 내부 작동과, 어떻게 객체를 생성하는지에 대한 모든 것을 배울 수 있습니다. 우선은, 우리는 메서드 대 함수에 대해 있을 수 있는 혼란을 단지 정리하기를 원합니다. — 웹 상에서 이용 가능한 관련된 리소스들을 살펴보면서 여러분은 두 용어를 만날 가능성이 있습니다.

우리가 지금까지 사용해 왔던 내장된(built-in) 코드는 두 형태로 나타납니다. 바로 **함수**와 **메서드**입니다. 여러분은 내장 함수의 전체 목록과, 내장 객체와 그들의 해당하는 메서드들 또한 [여기서](/ko/docs/Web/JavaScript/Reference/Global_Objects) 확인할 수 있습니다.

여러분은 또한 많은 **사용자 정의 함수**(custom functions)들을 이 코스에서 지금까지 봐 왔습니다. — 브라우저 내부에서 정의된 게 아니라, 여러분의 코드에서 정의된 함수 말입니다. 괄호 바로 앞에 있는 사용자 정의 이름을 봤을 때마다, 여러분은 사용자 정의 함수를 사용하고 있었던 것입니다. [반복문(loops) 문서](/ko/docs/Learn/JavaScript/Building_blocks/Looping_code)의 [random-canvas-circles.html](https://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html) 예제 (전체 [소스 코드](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html) 또한 보세요)에서, 우리는 다음과 같은 사용자 정의 `draw()` 함수를 포함했었습니다.

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

이 함수는 {{htmlelement("canvas")}} 요소 안에 100개의 임의의 원을 그립니다. 원할 때마다 아래 코드로 함수를 호출할 수 있습니다.

```js
draw();
```

우리가 이것을 반복하기를 원할 때마다 모든 코드를 또 작성하지 않고 말이죠. 그리고 함수는 여러분이 원하는 코드를 무엇이든지간에 포함할 수 있습니다. 여러분은 심지어 다른 함수들을 함수 내부에서부터 호출할 수 있습니다. 위의 예시는 아래와 같이 정의된 `random()` 함수를 세 번이나 호출하고 있죠.

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

브라우저의 내장 [Math.random()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random) 함수는 오직 0과 1사이의 무작위 소수를 생성하기 때문에 우리는 이 함수가 필요했습니다. 우리는 0과 명시된 숫자 사이의 무작위 정수를 원했습니다.

## 함수 호출

지금까지 꽤 잘 따라온 거 같은데 혹시 모르니깐 말해 주자면... 정의된 함수를 작동시키기 위해선 함수를 '호출' 해야 돼요. 함수 호출은 함수의 이름을 괄호와 함께 코드 내에 적어 주면 됩니다.

```js
function myFunction() {
  alert("hello");
}

myFunction();
// calls the function once
```

> **참고:** 이 형태의 함수 생성은 또한 _함수 선언_(function declaration)으로도 알려져 있습니다. 이것은 언제나 호이스팅(hoisting)되어서, 여러분은 함수를 함수 정의 위에서 호출할 수 있고 이것은 잘 작동할 것입니다.

## 익명 함수

여러분은 조금 다른 방식으로 정의되거나 호출되는 함수를 본 적 있을 거예요. 이제까지 우리는 이런 식으로 함수를 생성했죠:

```js
function myFunction() {
  alert("hello");
}
```

하지만 이름 없는 함수 또한 만들 수 있답니다.

```js
function() {
  alert('hello');
}
```

이건 **익명 함수**라고 불려요. 이름이 없다는 뜻이죠! 익명함수는 스스로 뭘 어쩌지 못 해요. 익명함수는 주로 이벤트 핸들러와 사용됩니다. 아래의 예시는 함수 내의 코드가 관련된 버튼을 클릭함에 따라 작동한다는 걸 보여주죠.

```js
var myButton = document.querySelector("button");

myButton.onclick = function () {
  alert("hello");
};
```

위의 예시는 페이지 상의 클릭을 위해 {{htmlelement("button")}} 요소를 필요로 합니다. 여러분은 코스를 거치며 이런 구조의 코드를 꽤 봐왔을 거예요. 다음 문서에서 더 많은 걸 배워 보자구요.

여러분은 변수 속에 익명함수를 넣을 수 있어요. 예시입니다.

```js
var myGreeting = function () {
  alert("hello");
};
```

> **참고:** 이 형태의 함수 생성은 또한 _함수 표현식_(function expression)으로도 알려져 있습니다. 함수 선언과는 다르게, 함수 표현식은 호이스팅되지 않습니다.

이 함수는 이런 식으로 호출되죠:

```js
myGreeting();
```

이 방법은 효과적으로 함수에 이름을 부여하고 있어요. 여러분은 다중 변수들에 함수를 할당할 수도 있죠. 예를 들면,

```js
var anotherGreeting = function () {
  alert("hello");
};
```

이제 함수는 이런 식으로도 호출이 가능해졌구요.

```js
myGreeting();
anotherGreeting();
```

하지만 위의 방식은 사람 헷갈리게 만들어요. 그니깐 쓰진 맙시다! 함수를 만들 땐 아래의 형태를 고수하는 게 나아요.

```js
function myGreeting() {
  alert("hello");
}
```

익명함수는 이벤트 발생에 따른 수많은 코드를 작동시키기 위해 주로 쓰이게 돼요. 이벤트 핸들러를 사용한 버튼의 클릭과 같은 상황에 말이죠. 자, 그 코드는 아래와 같이 생겼어요.

```js
myButton.onclick = function () {
  alert("hello");
  // 내가 원하는 만큼 얼마든지
  // 여기에 코드를 작성하면 됩니다!
};
```

## 함수 매개변수

몇몇 함수는 호출을 위해 매개변수를 필요로 하는 경우가 있습니다. 이것들은 함수 괄호 안에 포함될 필요가 있는 값들인데, 올바르게 동작하기 위해 필요합니다.

> **참고:** 매개변수는 종종 arguments, properties, 심지어 attributes 라고도 불려요.

예를 들어, 브라우저의 내장 함수인 [Math.random()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/random)은 어떤 매개변수도 필요로 하지 않습니다. 이 함수는 호출되면 늘 0과 1사이의 무작위 수를 반환해 주죠.

```js
var myNumber = Math.random();
```

하지만 브라우저의 내장 문자열 [replace()](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 함수는 두 개의 매개변수를 필요로 합니다. 대체될 문자와 대체할 문자죠.

```js
var myText = "I am a string";
var newString = myText.replace("string", "sausage");
```

> **참고:** 여러 개의 매개변수는 콤마에 의해 구분되어집니다.

매개변수는 이따금 선택 사항이기도 합니다. 여러분이 명시해 줄 필요가 없다는 뜻이죠. 그런 경우, 일반적으로 함수는 기본 기능을 수행합니다. 예를 들어, 배열과 관련된 [join()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 함수의 매개변수가 그렇죠.

```js
var myArray = ["I", "love", "chocolate", "frogs"];
var madeAString = myArray.join(" ");
// returns 'I love chocolate frogs'
var madeAString = myArray.join();
// returns 'I,love,chocolate,frogs'
```

결합(joining)/한정(delimiting)하는 문자를 명시할 어떠한 매개변수도 포함되지 않는다면, 콤마가 기본으로 사용될 것입니다.

## 함수 스코프와 충돌(conflicts)

우리 '[스코프](/ko/docs/Glossary/Scope)(scope)'에 대해 얘기해 볼까요? '스코프'는 함수와 관련된 매우 중요한 개념입니다. 함수를 생성할 때, 변수 및 함수 내 정의된 코드들은 그들만의 분리된 '스코프' 안에 자리하게 됩니다. 그 말인 즉슨, 다른 함수의 내부나 외부 함수의 코드가 접근할 수 없는 그들만의 구획에 갇혀 있다는 뜻입니다.

함수 바깥에 선언된 가장 상위 레벨의 스코프를 '**전역 스코프**(global scope)' 라고 부릅니다.전역 스코프 내에 정의된 값들은 어느 코드든 접근이 가능합니다.

자바스크립트는 다양한 이유로 인해 이와 같이 설정되어 있지만, 주로는 안전성과 구조 때문입니다. 어떤 때에는 여러분의 변수가 어느 코드나 접근 가능한 변수가 되는 걸 원치 않을 겁니다. 여러분이 어딘가에서 불러온 외부 스크립트가 문제를 일으킬 수도 있으니깐요. 외부 스크립트의 코드와 같은 변수 이름을 사용하면 충돌이 일어나게 돼요. 이건 악의적일 수도 있고, 아님 뭐 단순한 우연이겠죠.

예를 들어 , 여러분에게 두 개의 외부 자바스크립트 파일을 호출하는 HTML이 있다고 쳐요. 그 둘은 같은 이름으로 정의된 변수와 함수를 사용하고 있습니다.

```html
<!-- Excerpt from my HTML -->
<script src="first.js"></script>
<script src="second.js"></script>
<script>
  greeting();
</script>
```

```js
// first.js
var name = "Chris";
function greeting() {
  alert("Hello " + name + ": welcome to our company.");
}
```

```js
// second.js
var name = "Zaptec";
function greeting() {
  alert("Our company is called " + name + ".");
}
```

여러분이 호출하고 싶은 두 함수 모두 `greeting()` 이지만, 여러분은 오직 `first.js` 파일의 `greeting()` 함수에만 접근할 수 있을 뿐입니다 (두번째 것은 무시됩니다). 추가적으로, `second.js` 파일에서 `let` 키워드로 `name` 변수를 두 번째로 선언하려고 시도하는 것은 오류를 낳습니다.

> **참고:** 예제를 [GitHub](https://mdn.github.io/learning-area/javascript/building-blocks/functions/conflict.html)에서 볼 수 있습니다. ([소스 코드](https://github.com/mdn/learning-area/tree/master/javascript/building-blocks/functions) 또한 볼 수 있습니다).

함수의 일부를 코드 안에 가두는 것은 이러한 문제를 피할 수 있고, 가장 좋은 방법이라 여겨집니다.

동물원 같네요. 사자, 얼룩말, 호랑이, 그리고 펭귄은 자신들만의 울타리 안에 있으며, 그들의 울타리 내부에 있는 것만 건드릴 수 있어요. 함수 스코프처럼 말이죠. 만약 동물들이 다른 울타리 안으로 들어갈 수 있었다면, 문제가 생겼을 겁니다. 좋게는 다른 동물이 낯선 거주 환경에서 불편함을 느끼는 정도겠죠. 사자나 호랑이가 펭귄의 물기 많고 추운 영역 안에서 끔찍함을 느끼듯이요. 하지만 최악의 상황엔 사자나 호랑이가 펭귄을 먹어 치울지도 모르죠!

![](mdn-mozilla-zoo.png)

사육사는 전역 스코프와 같습니다. 그들은 모든 울타리에 들어갈 수 있고, 먹이를 보충하고, 아픈 동물들을 돌볼 수 있어요.

### 직접 해보기: 스코프랑 놀자

스코프를 설명하기 위해 스코프 사용의 실례를 한번 봅시다.

1. 먼저, 주어진 [function-scope.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-scope.html) 예제의 복사본을 만드세요. 예제에는 2개의 함수 `a()` 와 `b()`, 그리고 3개의 변수 — `x`, `y`, 와 `z` —가 있습니다. 그 중 2개는 함수 안에 정의되어 있으며, 1개는 전역 스코프에 정의되어 있습니다. 이것은 또한 세 번째 함수 `output()`을 포함하고 있는데, 이건 하나의 매개변수만 받으며, 페이지의 단락 안에 그것을 출력합니다.
2. 예제를 인터넷 브라우저나 텍스트 에디터를 통해 열어봅시다.
3. 브라우저 개발자 툴에서 자바스크립트 콘솔을 엽시다. 자바스크립트 콘솔에서 아래와 같이 작성해보세요.

   ```js
   output(x);
   ```

   여러분은 브라우저 뷰포트에 출력된 변수 `x`의 값을 볼 수 있을 것입니다.

4. 이제 다음을 콘솔에 입력해 보세요.

   ```js
   output(y);
   output(z);
   ```

   이것 모두는 다음의 오류를 리턴할 것입니다. "[ReferenceError: y is not defined](/ko/docs/Web/JavaScript/Reference/Errors/Not_defined)". 이것은 왜 그럴까요? 왜냐하면 함수 스코프 때문입니다. — `y`와 `z`는 `a()`와 `b()`함수 안에 잡혀 있어서, `output()`은 전역 스코프에서 호출되었을 때 그들에게 접근할 수 없습니다.

5. 그러나, 이것이 다른 함수 안쪽에서 호출되었을 때는 어떨까요? `a()`와 `b()`를 다음과 같이 보이도록 수정해 보세요.

   ```js
   function a() {
     var y = 2;
     output(y);
   }

   function b() {
     var z = 3;
     output(z);
   }
   ```

   코드를 저장하고 브라우저에서 다시 로드한 후, `a()`와 `b()` 함수를 자바스크립트 콘솔에서 호출해 보세요.

   ```js
   a();
   b();
   ```

   여러분은 페이지에 출력된 `y`와 `z`값들을 볼 수 있을 것입니다. `output()` 함수가 다른 함수 안쪽에서 호출되고 있으므로, 이것은 잘 작동합니다. — 각각의 경우에서, 같은 스코프에서 그것이 출력하고 있는 변수들이 정의되어 있으므로. `output()`는 전역 스코프에서 정의되었으므로, 이 함수 자체는 어디서든 이용할 수 있습니다.

6. 이제 여러분의 코드를 다음과 같이 갱신해 보세요.

   ```js
   function a() {
     var y = 2;
     output(x);
   }

   function b() {
     var z = 3;
     output(x);
   }
   ```

7. 저장하고 다시 로드한 후 이것을 자바스크립트 콘솔에서 시도해 보세요.

   ```js
   a();
   b();
   ```

8. 브라우저 뷰포트에 `a()` 와 `b()` 모두 x 값을 출력해야 합니다. 왜냐하면 비록 `output()` 호출이 `x`가 정의되어 있는 같은 스코프에 있지 않더라도, `x`는 전역 변수이므로 모든 코드 어디서든 이용 가능하기 때문에 이것들은 잘 작동합니다.
9. 마지막으로, 여러분의 코드를 다음과 같이 갱신해 보세요.

   ```js
   function a() {
     var y = 2;
     output(z);
   }

   function b() {
     var z = 3;
     output(y);
   }
   ```

10. 저장하고 다시 로드한 후, 자바스크립트 콘솔에서 다시 다음을 시도해 보세요.

    ```js
    a();
    b();
    ```

    이번에는 `a()` 와 `b()` 호출이 둘 다 이 짜증나는 "[ReferenceError: z is not defined](/ko/docs/Web/JavaScript/Reference/Errors/Not_defined)" 오류를 리턴할 것입니다. — 이것은 왜냐하면 `output()` 호출과 그들이 출력하기를 시도하는 변수들이 같은 함수 스코프 내부에 정의되어 있지 않기 때문입니다. — 변수들은 효과적으로 이 함수 호출에 보이지 않습니다.

> **참고:** 같은 스코프 규칙은 반복문 (예: `for() { ... }`)과 조건문(conditional blocks) (예: `if() { ... }`)에 적용되지 않습니다. — 이것들은 아주 비슷하게 생겼지만, 같은 것이 아닙니다! 헷갈리지 않도록 조심하세요.

> **참고:** [ReferenceError: "x" is not defined](/ko/docs/Web/JavaScript/Reference/Errors/Not_defined) 오류는 여러분이 마주칠 가장 일반적인 것들 중 하나입니다. 만약 여러분이 이 오류를 얻었고 여러분이 문제의 변수를 정의했다는 것이 확실하다면, 그것이 어떤 스코프 안에 들어있는지 확인해 보세요.

### 함수 내부의 함수

여러분은 함수를 어디에서나, 심지어 다른 함수 내에서도 호출할 수 있다는 것을 명심하세요. 이것은 종종 코드를 깔끔하게 유지하기 위한 방법으로써 사용됩니다. — 만약 여러분이 크고 복잡한 함수를 가지고 있다면, 만약 여러분이 그것을 몇몇의 하위 함수(sub-functions)로 나눈다면 이해하기 더 쉬울 것입니다.

```js
function myBigFunction() {
  var myValue;

  subFunction1();
  subFunction2();
  subFunction3();
}

function subFunction1() {
  console.log(myValue);
}

function subFunction2() {
  console.log(myValue);
}

function subFunction3() {
  console.log(myValue);
}
```

함수 내부에서 사용되고 있는 값들이 올바르게 스코프 내에 있는지 확실히 하세요. 상기의 예시는 `ReferenceError: myValue is not defined` 오류를 던질 것인데, 이는 왜냐하면 비록 `myValue` 변수가 함수가 호출되는 같은 스코프 내에 정의되어 있긴 하지만, 이것은 함수 정의 (함수가 호출될 때 실행되는 실제 코드) 내부에 정의되어 있지 않습니다. 이것을 작동하게 하려면, 여러분은 값을 함수 내부에 매개변수로써 다음과 같이 전달해야만 합니다.

```js
function myBigFunction() {
  var myValue = 1;

  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
```

## 실력을 평가해 보세요!

이 문서를 끝까지 읽으셨지만, 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 함수](/ko/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions). 이 테스트들은 다음 두 문서에서 다뤄지는 기술들을 요구하므로, 여러분은 그 문서들을 이 테스트를 시도해 보기 전에 먼저 읽기를 원할지도 모릅니다.

## 결론

이 문서는, 여러분만의 사용자 정의 함수 만들기를 익히도록 돕고 실제적인 것을 다루는 다음 문서에 대한 길을 만들며, 함수 뒤에 있는 핵심적인 개념들을 탐구했습니다.

## 같이 보기

- [자세한 함수 가이드](/ko/docs/Web/JavaScript/Guide/Functions) — 여기 포함되지 않은 몇몇 고급 기능들을 다룹니다.
- [함수 참고서](/ko/docs/Web/JavaScript/Reference/Functions)
- [기본 매개변수](/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters), [화살표 함수](/ko/docs/Web/JavaScript/Reference/Functions/Arrow_functions) — 고급 개념 참고서

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Looping_code","Learn/JavaScript/Building_blocks/Build_your_own_function", "Learn/JavaScript/Building_blocks")}}
