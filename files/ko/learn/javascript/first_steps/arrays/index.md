---
title: 배열(Arrays)
slug: Learn/JavaScript/First_steps/Arrays
tags:
  - Article
  - Beginner
  - CodingScripting
  - JavaScript
  - Learn
  - l10n:priority
translation_of: Learn/JavaScript/First_steps/Arrays
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

이 모듈의 이 마지막 문서에서, 우리는 배열을 살펴볼 것입니다. 배열이란 하나의 변수명 아래에 데이터 아이템의 리스트를 저장하는 간편한 방법입니다. 여기서 우리는 왜 배열이 유용한지 보고, 어떻게 배열을 만들고, 검색하고(retrieve), 추가하고, 그리고 배열에 저장된 원소들(items)을 삭제하는지, 그리고 그 외의 많은 것을 탐구합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">선행요소:</th>
      <td>
        기초 컴퓨터 활용지식, HTML, CSS 그리고 JavaScript에 대한 기초 지식.
      </td>
    </tr>
    <tr>
      <th scope="row">목적:</th>
      <td>배열이 무엇인지 이해하고 JavaScript에서 어떻게 활용하는지 배운다.</td>
    </tr>
  </tbody>
</table>

## 배열이란?

배열이란 일반적으로 "리스트같은 객체(list-like objects)"라고 기술됩니다. 배열은 보통 리스트에 저장된 다수의 값들을 포함하고 있는 하나의 객체입니다. 배열 객체는 변수에 저장될 수 있고 다른 종류의 값들처럼 훨씬 같은 방법으로 다뤄질 수 있는데, 차이는 우리는 배열 안의 각 값들에 개별적으로 접근할 수 있고, 리스트를 통해 반복(loop)하고 모든 값에 동일한 것을 할 수 있는 것과 같이, 리스트와 함께 엄청 유용하고 효율적인 것들을 할 수 있다는 것입니다. 아마도 우리는 배열에 저장된 상품명과 가격을 가지고 있고, 그 값들을 통해 반복하고, 모든 가격을 하나로 합하고 총액을 청구서의 하단에 출력하고 싶을지도 모릅니다.

만약 배열이 없다면 모든 원소를 별도의 변수에 저장해야 할 것이고, 각 원소에 대해 별도로 출력하고 더하는 코드를 불러야 할 것입니다. 이런 방식은 작성하기에 훨씬 오래 걸리고, 덜 효율적이며, 오류가 나기 쉽습니다. 만약 우리가 청구서에 더할 10개의 물품을 가지고 있다면 이것만으로도 이미 짜증나는데, 100개의 물품, 혹은 1000개의 물품이라면 어떨까요? 우리는 이 문서에서 나중에 이 예시로 돌아올 것입니다.

지난 문서에서처럼, 브라우저 개발자 콘솔에 몇몇 예제를 입력함으로써 배열의 진짜 기초에 대해 배워 봅시다. (아래의 콘솔 창을 사용하거나, 당신이 선호하는 [개발자 콘솔](/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)을 사용하면 됩니다.)

<div class="hidden"><h6 id="Hidden_code">Hidden code</h6><pre class="brush: html">&#x3C;!DOCTYPE html>
&#x3C;html>
  &#x3C;head>
    &#x3C;meta charset="utf-8">
    &#x3C;title>JavaScript console&#x3C;/title>
    &#x3C;style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0C323D;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0C323D;
        color: #809089;
      }

      div {
        clear: both;
      }

    &#x3C;/style>

&#x3C;/head>
&#x3C;body>

&#x3C;/body>

&#x3C;script>
var geval = eval;
function createInput() {
var inputDiv = document.createElement('div');
var inputPara = document.createElement('p');
var inputForm = document.createElement('input');

      inputDiv.setAttribute('class','input');
      inputPara.textContent = '>';
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      if(document.querySelectorAll('div').length > 1) {

inputForm.focus();
      }

      inputForm.addEventListener('change', executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch(e) {
        var result = 'error — ' + e.message;
      }

      var outputDiv = document.createElement('div');
      var outputPara = document.createElement('p');

      outputDiv.setAttribute('class','output');
      outputPara.textContent = 'Result: ' + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = '0.5';

      createInput()
    }

    createInput();

&#x3C;/script>
&#x3C;/html></pre></div>

{{ EmbedLiveSample('Hidden_code', '100%', 300, "", "", "hide-codepen-jsfiddle") }}

### 배열 만들기

배열은 대괄호로 구성되며 쉼표로 구분 된 항목들을 포함합니다.

1.  쇼핑 목록을 배열에 저장하고 싶다면 다음과 같이 하면 됩니다. 콘솔에 다음 행을 입력하십시오.

    ```js
    var shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];
    shopping;
    ```

2.  위의 예제에서, 각 원소는 문자열이지만, 우리는 다양한 데이터 유형을 배열에 저장할 수 있습니다 (문자열, 숫자, 개체, 다른 변수, 심지어 다른 배열). 동일한 형태의 항목만 넣거나 (아래 sequence 처럼) 다양한 형태의 항목을 함께 넣을 수 (아래 random 처럼) 있습니다. 모두 숫자, 문자열 등일 필요는 없습니다. 다음을 입력해보세요.

    ```js
    var sequence = [1, 1, 2, 3, 5, 8, 13];
    var random = ['tree', 795, [0, 1, 2]];
    ```

3.  다음으로 넘어가기 전 여러분 마음대로 배열을 만들어 보세요.

### 배열 항목의 접근과 수정 

그런 다음 [문자열의 문자에 접근했던 것](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)과 같은 방법으로 괄호 표기법을 사용하여 배열의 개별 항목에 접근 할 수 있습니다.

1.  콘솔에 다음을 입력하세요:

    ```js
    shopping[0];
    // returns "bread"
    ```

2.  단일 배열 항목에 새 값을 제공하여, 배열의 항목을 수정할 수도 있습니다. 한번 해보세요:

    ```js
    shopping[0] = 'tahini';
    shopping;
    // shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]
    ```

    <div class="note"><strong>참고</strong>: 전에도 말했지만, 컴퓨터는 숫자를 셀 때 0부터 시작합니다!</div>

3.  배열 내부의 배열을 다중배열(multidimensional array)이라고 합니다. 대괄호 두개를 함께 연결하여 다른 배열 안에있는 배열 내부의 항목에 접근 할 수 있습니다.예를 들어 `random` 배열 내부의 세 번째 원소에 접근하려면(앞 섹션 참조) 다음과 같이 할 수 있습니다:

    ```js
    random[2][2];
    ```

4.  다음 단계로 넘어가기 전에 충분히 배열 예제를 연습해 보세요.

### 배열의 갯수 알아내기

{{jsxref("Array.prototype.length","length")}} 속성을 사용해서, 문자열의 (문자의) 길이를 알아낸 것과 정확히 같은 방식으로 (얼마나 많은 원소가 배열에 들어 있는지) 배열의 길이를 알아낼 수 있습니다. 다음을 봅시다.:

```js
sequence.length;
// should return 7
```

이것은 다른 사용법을 가지고 있지만, 이것은 가장 흔히 반복문이 배열의 모든 원소를 거치기 전까지 계속하라고 말하는 데 쓰입니다. 다음이 예시입니다.

```js
var sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
```

다음 문서에서 반복문에 대해서 자세히 다루겠지만, 간단히 말하자면, 이 코드는 다음을 말하고 있습니다.

1.  배열의 원소 번호 0에서 반복을 시작합니다.
2.  배열의 길이와 같은 원소 번호에서 반복을 멈춥니다. 이것은 어떠한 길이의 배열에서도 작동하지만, 이 경우에서는 원소 번호 7에서 반복을 멈춥니다 (마지막 원소(우리가 반복문이 포함하기를 원하는)는 번호 6이므로, 이것은 좋습니다.)
3.  각 원소에 대해, `console.log()`로 브라우저 콘솔에 출력합니다.

## 유용한 배열 메서드

이번 섹션에서는 문자열을 배열 원소로 나누고 그 역으로도 할 수 있게 하는, 그리고 새로운 원소들을 배열에 추가할 수 있게 하는 몇몇 꽤 유용한 배열에 관련된 메서드들을 살펴볼 것입니다.

### 문자열을 배열로, 배열을 문자열로 변환하기

프로그램을 만들다보면 종종 긴 문자열로 이루어진 원시 데이터를 제공받게 될 것이고, 원시 데이터를 정제하여 더 유용한 데이터를 추출해 테이블 형태로 표시하는 등 작업을 수행해야 합니다. 이러한 작업을 위해 {{jsxref("String.prototype.split()","split()")}} 메서드를 사용할 수 있습니다. {{jsxref("String.prototype.split()","split()")}} 메서드는 사용자가 원하는 매개변수로 문자열을 분리하여 배열로 표현해줍니다.

> **참고:** 사실 엄밀히 따지면 문자열 메서드지만, 배열과 함께 사용하기 때문에 여기에 넣었습니다.

1.  {{jsxref("String.prototype.split()","split()")}} 메서드가 어떻게 작동하는지 살펴봅시다. 우선 콘솔에서 아래와 같은 문자열을 만듭니다:

    ```js
    var myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
    ```

2.  콤마로 분리해 봅시다:

    ```js
    var myArray = myData.split(',');
    myArray;
    ```

3.  마지막으로 새로운 배열의 길이를 찾고 이 배열에서 몇 가지 항목을 검색해 봅시다:

    ```js
    myArray.length;
    myArray[0]; // the first item in the array
    myArray[1]; // the second item in the array
    myArray[myArray.length-1]; // the last item in the array
    ```

4.  또한 아래 방법처럼 {{jsxref("Array.prototype.join()","join()")}} 메서드를 사용하여 배열을 다시 문자열로 만들 수 있습니다:

    ```js
    var myNewString = myArray.join(',');
    myNewString;
    ```

5.  배열을 문자열로 변환하는 또 다른 방법은 {{jsxref("Array.prototype.toString()","toString()")}} 메서드를 사용하는 것입니다. `toString()` 은 `join()` 과 달리 매개변수가 필요없어서 더 간단하지만, 더 많은 제한이 있습니다. `join()` 을 사용하면 다른 구분자를 지정할 수 있지만, `toString()` 은 항상 콤마를 사용합니다. (콤마 말고 다른 매개변수를 사용하여 4단계를 실행해 보세요.)

    ```js
    var dogNames = ['Rocket','Flash','Bella','Slugger'];
    dogNames.toString(); //Rocket,Flash,Bella,Slugger
    ```

### 배열에 원소를 추가하고 제거하기

이번엔 배열에 원소를 추가하고 제거하는 방법을 알아볼 차례입니다. 위에서 만든 `myArray` 를 다시 사용하겠습니다. 섹션을 순서대로 진행하지 않았다면 아래와 같은 배열을 만들어주세요:

```js
var myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
```

먼저, 배열의 맨 끝에 원소를 추가하거나 제거하기 위해 각각 {{jsxref("Array.prototype.push()","push()")}} and {{jsxref("Array.prototype.pop()","pop()")}} 를 사용할 수 있습니다.

1.  먼저 `push()` 를 사용합니다. — 배열의 끝에 추가할 원소를 반드시 하나 이상 포함해야 한다는 점을 기억하고 아래와 같이 따라해보세요:

    ```js
    myArray.push('Cardiff');
    myArray;
    myArray.push('Bradford', 'Brighton');
    myArray;
    ```

2.  메서드 호출이 완료되면 배열의 새 길이가 리턴됩니다. 만약 새 배열의 길이를 변수에 저장하고 싶다면, 다음과 같이 할 수 있습니다:

    ```js
    var newLength = myArray.push('Bristol');
    myArray;
    newLength;
    ```

3.  배열의 마지막 원소를 제거하는 방법은 `pop()`으로 매우 간단합니다. 아래와 같이 따라해 보세요:

    ```js
    myArray.pop();
    ```

4.  메서드 호출이 완료되면 제거된 원소가 리턴됩니다. 이 원소를 새 변수에 저장하기 위해서, 다음과 같이 할 수 있습니다:

    ```js
    var removedItem = myArray.pop();
    myArray;
    removedItem;
    ```

{{jsxref("Array.prototype.unshift()","unshift()")}} 와{{jsxref("Array.prototype.shift()","shift()")}}는 `push()` 와 `pop()`과 완전히 동일하게 동작합니다. 다만, 배열의 맨 끝이 아닌 제일 처음 부분의 원소를 추가하거나 제거합니다.

1.  먼저 `unshift()` 를 사용해봅시다:

    ```js
    myArray.unshift('Edinburgh');
    myArray;
    ```

2.  이제 `shift()`를 사용해봅시다!

    ```js
    var removedItem = myArray.shift();
    myArray;
    removedItem;
    ```

## 활동적 학습: 상품들 출력하기!

앞에서 설명했던 예제로 돌아가 봅시다. 상품의 이름과 가격을 청구서에 출력하고, 가격의 합계를 내서 그것을 밑에 출력합니다. 아래의 수정 가능한 예제에, 숫자를 포함하고 있는 주석이 있습니다. 각 줄은 코드에 추가할 장소를 표시하고 있습니다. 그것들은 다음과 같습니다.

1.  아래의 `// number 1` 주석은 몇 개의 문자열인데, 각 문자열은 상품의 이름과 가격을 포함하고 있고 콜론에 의해 분리되어 있습니다. 우리는 당신이 이것을 `products`라는 배열으로 바꾸고 이곳에 이것을 저장하기를 원합니다.
2.  `// number 2` 주석이 있는 같은 라인에서는 for 반복문이 시작됩니다. 이 라인에서 우리는 현재 `i <= 0`를 가지고 있는데, 이 조건 테스트(conditional test)는 "`i`가 더 이상 0보다 작거나 같지 않을 때 멈추시오"라고 말하고 있고, `i`는 0에서 시작하기 때문에, 이는 [for 반복문](/ko/docs/Learn/JavaScript/First_steps/A_first_splash#Loops)이 즉시 멈추는 것을 유발하는 조건 테스트입니다. 우리는 당신이 이것을 `i`가 `products`배열의 길이(length)보다 더 이상 작지 않을 때 반복을 멈추게 하는 조건 테스트로 바꾸기를 원합니다.
3.  `// number 3` 주석 바로 아래에서 우리는 당신이 현재 배열의 원소를, 한 개는 단순히 이름을 포함하고 한 개는 단순히 가격을 포함하는 두 개의 원소로 분리하는 한 줄의 코드를 작성하기를 원합니다. 만약 당신이 이것을 어떻게 하는지 확실히 알지 못한다면, [유용한 문자열 메서드(Useful string methods)](/ko/docs/Learn/JavaScript/First_steps/Useful_string_methods)를 도움을 위해 참고하거나, 더 나은 정보를 원한다면, 이 글의 [문자열과 배열 전환하기](#문자열과_배열_전환하기) 부분을 참고하세요.
4.  상기 코드 라인의 부분으로써, 당신은 또한 가격을 문자열에서 숫자로 전환하기를 원할 것입니다. 만약 당신이 어떻게 이것을 하는지 기억하지 못한다면, [첫번째 문자열 문서](/ko/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings)를 살펴보세요.
5.  만들어지고 0의 값이 주어진 `total`이라는 변수가 코드의 위쪽에 있습니다. 이 반복문 안에서 (`// number 4` 아래) 우리는 당신이 현재 상품의 가격을 반복문의 각 반복마다 총액(total)에 합하는 코드 한 줄을 추가해서, 코드의 끝에서 올바른 총액이 청구서에 인쇄되도록 하기를 원합니다. 당신은 이것을 하기 위해 [대입 연산자(assignment operator)](/ko/docs/Learn/JavaScript/First_steps/Math#Assignment_operators)가 필요할지도 모릅니다.
6.  `itemText` 변수가 "current item name — $current item price"와 같이 만들어지도록, 예를 들자면 각각의 경우에 "Shoes — $23.99" 처럼 만들어지도록 우리는 당신이 `// number 5` 바로 아래의 줄을 변경해서, 각각의 물품에 대한 올바른 정보가 청구서에 출력되도록 하기를 원합니다. 이것은, 당신에게 친숙할지도 모르는, 단지 단순한 문자열 연결(concatenation)입니다.

<div class="hidden"><h6 id="Playable_code">Playable code</h6><pre class="brush: html">&#x3C;h2>Live output&#x3C;/h2>

&#x3C;div class="output" style="min-height: 150px;">

&#x3C;ul>

&#x3C;/ul>

&#x3C;p>&#x3C;/p>

&#x3C;/div>

&#x3C;h2>Editable code&#x3C;/h2>

&#x3C;p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).&#x3C;/p>

&#x3C;textarea id="code" class="playable-code" style="height: 410px;width: 95%">
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
'Underpants:6.99'
'Socks:5.99'
'T-shirt:14.99'
'Trousers:31.99'
'Shoes:23.99';

for (var i = 0; i &#x3C;= 0; i++) { // number 2
// number 3

// number 4

// number 5
itemText = 0;

var listItem = document.createElement('li');
listItem.textContent = itemText;
list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
&#x3C;/textarea>

&#x3C;div class="playable-buttons">
&#x3C;input id="reset" type="button" value="Reset">
&#x3C;input id="solution" type="button" value="Show solution">
&#x3C;/div>

</pre><pre class="brush: js">var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
eval(textarea.value);
}

reset.addEventListener('click', function() {
textarea.value = code;
userEntry = textarea.value;
solutionEntry = jsSolution;
solution.value = 'Show solution';
updateCode();
});

solution.addEventListener('click', function() {
if(solution.value === 'Show solution') {
textarea.value = solutionEntry;
solution.value = 'Hide solution';
} else {
textarea.value = userEntry;
solution.value = 'Show solution';
}
updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nvar totalBox = document.querySelector(\'.output p\');\nvar total = 0;\nlist.innerHTML = \'\';\ntotalBox.textContent = \'\';\n\nvar products = [\'Underpants:6.99\',\n \'Socks:5.99\',\n \'T-shirt:14.99\',\n \'Trousers:31.99\',\n \'Shoes:23.99\'];\n\nfor(var i = 0; i &#x3C; products.length; i++) {\n var subArray = products[i].split(\':\');\n var name = subArray[0];\n var price = Number(subArray[1]);\n total += price;\n itemText = name + \' — $\' + price;\n\n var listItem = document.createElement(\'li\');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n}\n\ntotalBox.textContent = \'Total: $\' + total.toFixed(2);';
var solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
if (e.keyCode === 9) {
e.preventDefault();
insertAtCaret('\t');
}

if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
var scrollPos = textarea.scrollTop;
var caretPos = textarea.selectionStart;

var front = (textarea.value).substring(0, caretPos);
var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
textarea.value = front + text + back;
caretPos = caretPos + text.length;
textarea.selectionStart = caretPos;
textarea.selectionEnd = caretPos;
textarea.focus();
textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
// We only want to save the state when the user code is being shown,
// not the solution, so that solution is not saved over the user code
if(solution.value === 'Show solution') {
userEntry = textarea.value;
} else {
solutionEntry = textarea.value;
}

updateCode();
};</pre><pre class="brush: css">html {
font-family: sans-serif;
}

h2 {
font-size: 16px;
}

.a11y-label {
margin: 0;
text-align: right;
font-size: 0.7rem;
width: 98%;
}

body {
margin: 10px;
background-color: #f5f9fa;
}</pre></div>

{{ EmbedLiveSample('Playable_code', '100%', 730, "", "", "hide-codepen-jsfiddle") }}

## 실습: 상위 5개의 검색어

{{jsxref("Array.prototype.push()","push()")}} 와 {{jsxref("Array.prototype.pop()","pop()")}}같은 배열 메서드의 좋은 사용은 웹 앱(web app)에서 현재 활동적인 원소(item)의 기록을 유지할 때입니다. 예를 들자면 동영상으로 된 장면에서, 당신은 현재 보이는 배경을 나타내는 객체들의 배열을 가지고 있고 성능이나 어수선함의 이유로 오직 한번에 50개만이 보여지기를 원할지도 모릅니다. 새로운 객체가 생성되고 배열에 추가되며, 원하는 수를 유지하기 위해, 오래된 것들은 배열에서 삭제될 수 있습니다.

이 예제에서 우리는 더욱 단순한 사용을 보일 것입니다. 여기서 우리는 당신에게 검색 상자가 있는 가짜 검색 사이트를 제공합니다. 개념은 용어가 검색 상자에 입력되었을 때, 상위 5개의 이전 검색 용어들이 목록에 보이는 것입니다. 용어의 수가 5를 넘어갈 때, 마지막 용어는 새로운 용어가 위에 추가될 때마다 지워지기 시작해서, 5개의 이전 용어가 계속 보입니다.

> **참고:** 실제 검색 앱에서는, 당신은 아마도 이전 검색으로 돌아가기 위해 이전 검색 용어를 클릭할 수 있고, 이것은 실제 검색 결과를 보여줄 것입니다! 우리는 단지 우선은 단순하게 하고 있습니다.

앱을 완성하기 위해, 우리는 당신이 다음을 하기를 필요로 합니다.

1.  `// number 1` 주석 밑에 배열의 시작에 검색 입력(input)에 입력된 현재 값을 추가하는 코드를 추가하세요. 이것은 `searchInput.value`를 사용하여 탐색될 수 있습니다.
2.  `// number 2` 주석 밑에 현재 배열의 끝에 있는 값을 제거하는 코드를 추가하세요.

<div class="hidden"><h6 id="Playable_code_2">Playable code 2</h6><pre class="brush: html">&#x3C;h2>Live output&#x3C;/h2>
&#x3C;div class="output" style="min-height: 150px;">

&#x3C;input type="text">&#x3C;button>Search&#x3C;/button>

&#x3C;ul>

&#x3C;/ul>

&#x3C;/div>

&#x3C;h2>Editable code&#x3C;/h2>

&#x3C;p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).&#x3C;/p>

&#x3C;textarea id="code" class="playable-code" style="height: 370px; width: 95%">
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
// we will only allow a term to be entered if the search input isn't empty
if (searchInput.value !== '') {
// number 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (var i = 0; i &#x3C; myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();

}
}
&#x3C;/textarea>

&#x3C;div class="playable-buttons">
&#x3C;input id="reset" type="button" value="Reset">
&#x3C;input id="solution" type="button" value="Show solution">
&#x3C;/div></pre><pre class="brush: css">html {
font-family: sans-serif;
}

h2 {
font-size: 16px;
}

.a11y-label {
margin: 0;
text-align: right;
font-size: 0.7rem;
width: 98%;
}

body {
margin: 10px;
background: #f5f9fa;
}</pre><pre class="brush: js">var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
eval(textarea.value);
}

reset.addEventListener('click', function() {
textarea.value = code;
userEntry = textarea.value;
solutionEntry = jsSolution;
solution.value = 'Show solution';
updateCode();
});

solution.addEventListener('click', function() {
if(solution.value === 'Show solution') {
textarea.value = solutionEntry;
solution.value = 'Hide solution';
} else {
textarea.value = userEntry;
solution.value = 'Show solution';
}
updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nvar searchInput = document.querySelector(\'.output input\');\nvar searchBtn = document.querySelector(\'.output button\');\n\nlist.innerHTML = \'\';\n\nvar myHistory= [];\n\nsearchBtn.onclick = function() {\n if(searchInput.value !== \'\') {\n myHistory.unshift(searchInput.value);\n\n list.innerHTML = \'\';\n\n for(var i = 0; i &#x3C; myHistory.length; i++) {\n itemText = myHistory[i];\n var listItem = document.createElement(\'li\');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n }\n\n if(myHistory.length >= 5) {\n myHistory.pop();\n }\n\n searchInput.value = \'\';\n searchInput.focus();\n }\n}';
var solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
if (e.keyCode === 9) {
e.preventDefault();
insertAtCaret('\t');
}

if (e.keyCode === 27) {
textarea.blur();
}
};

function insertAtCaret(text) {
var scrollPos = textarea.scrollTop;
var caretPos = textarea.selectionStart;

var front = (textarea.value).substring(0, caretPos);
var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
textarea.value = front + text + back;
caretPos = caretPos + text.length;
textarea.selectionStart = caretPos;
textarea.selectionEnd = caretPos;
textarea.focus();
textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
// We only want to save the state when the user code is being shown,
// not the solution, so that solution is not saved over the user code
if(solution.value === 'Show solution') {
userEntry = textarea.value;
} else {
solutionEntry = textarea.value;
}

updateCode();
};</pre></div>

{{ EmbedLiveSample('Playable_code_2', '100%', 700, "", "", "hide-codepen-jsfiddle") }}

## 당신의 기량을 시험해 보세요!

당신은 이 문서의 끝에 도달했지만, 가장 중요한 정보들을 기억할 수 있으신가요? 당신은 나아가기 전에 이 정보들을 보유하고 있다는 것을 확인하는 추가적인 테스트들을 찾을 수 있습니다 — 다음을 보세요: [Test your skills: Arrays](/en-US/docs/Learn/JavaScript/First_steps/Test_your_skills:_Arrays)

## 결론

이 문서를 쭉 읽으셨다면 배열이 꽤 유용해 보인다는 것에 동의할 겁니다. 배열은 종종 모든 원소에 동일한 것을 하기 위해 반복문과 함께 자바스크립트의 모든 곳에서 찾아볼 수 있습니다. 다음 모듈에서 반복문에 대해 알기 위해 있는 모든 유용한 기본을 가르칠 것이지만, 우선 스스로에게 박수를 보내고 휴식을 취하세요. 이 모듈의 모든 문서를 독파하셨으니 잠깐 쉬어가도 좋습니다!

유일한 남은 것은 이 모듈의 평가인데, 이는 이 평가 이전에 오는 문서들에 대한 당신의 이해를 테스트할 것입니다.

## 참고

- [Indexed collections](/en-US/docs/Web/JavaScript/Guide/Indexed_collections) — 배열과 배열의 친척인 typed arrays에 대한 고급 단계 가이드
- {{jsxref("Array")}} — `Array` 객체 참조 페이지 — 이 페이지에서 다뤄진 기능들과 더 많은 것들에 대한 자세한 참조 가이드

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

## 이번 모듈에서 배울 것들

- [JavaScript란 무엇인가?](/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [JavaScript를 시작해보자](/en-US/docs/Learn/JavaScript/First_steps/A_first_splash)
- [뭐가 잘못 되었지? Troubleshooting JavaScript(잘못된 걸 고쳐보자)](/en-US/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [원하는 정보를 저장하기 — 변](/en-US/docs/Learn/JavaScript/First_steps/Variables)수
- [JavaScript의 수학 기초 — 숫자와 연산자](/en-US/docs/Learn/JavaScript/First_steps/Math)
- [문자 다루기 — JavaScript에서의 문자](/en-US/docs/Learn/JavaScript/First_steps/Strings)
- [유용한 문자 메소드](/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [배열](/en-US/docs/Learn/JavaScript/First_steps/Arrays)
- [평가: 짧은 글 랜덤 생성기](/en-US/docs/Learn/JavaScript/First_steps/Silly_story_generator)
