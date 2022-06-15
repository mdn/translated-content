---
title: 문자열 제대로 다루기
slug: Learn/JavaScript/First_steps/Useful_string_methods
tags:
  - Article
  - Beginner
  - CodingScripting
  - JavaScript
  - Learn
  - case
  - indexOf
  - l10n:priority
  - length
  - lower
  - replace
  - split
  - upper
translation_of: Learn/JavaScript/First_steps/Useful_string_methods
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

이제까지 문자열의 기초를 살펴보았습니다. 이제부터 - 텍스트 문자열의 길이 찾기, 문자열 합치기 및 쪼개기 등과 같은- 내장된 메서드를 사용하여 문자열에서 수행할 수 있는 유용한 작업에 대해 생각해 봅시다. 문자열의 한 문자를 다른 문자로 대체하는 등의 작업을 수행합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용 능력, HTML 및 CSS에 대한 기본적인 이해,
        JavaScript가 무엇인지 이해합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표:</th>
      <td>
        문자열이 객체임을 이해하고, 해당 객체에서 사용할 수있는 몇 가지
        기본 메서드를 사용하여 문자열을 조작하는 방법을 배웁니다.
      </td>
    </tr>
  </tbody>
</table>

## Strings as objects

이전에 말했지만, 다시 말하면 - JavaScript의 모든 것이 객체입니다. 문자열을 만들 때, 예를 들면

```js
var string = 'This is my string';
```

변수가 문자열 객체 인스턴스되면, 결과적으로 수많은 속성과 메서드가 사용 가능하게 됩니다. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String">String</a> 객체 페이지로 이동하여 페이지 측면의 목록을 내려다 보면 이것을 볼 수 있습니다!

이제 뇌가 녹기 시작하기 전에, 걱정하지 마십시오! 학습 여행 중에 초기에 대부분을 알 필요가 없습니다. 그러나 여기에서 살펴볼 몇 가지 사항을 자주 사용하게 될 것입니다.

콘솔에 예제를 작성해 보세요. 아래의 한 가지를 제공합니다(새 탭이나 새 창에서 콘솔을 열 수 있고, 브라우저의 개발자 콘솔을 사용할 수도 있습니다).

<div class="hidden"><h6 id="Hidden_code">Hidden code</h6><pre class="brush: html notranslate">&#x3C;!DOCTYPE html>
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

      inputDiv.setAttribute('class', 'input');
      inputPara.textContent = '>';
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

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

{{ EmbedLiveSample('Hidden_code', '100%', 300) }}

### 문자열의 길이 찾기

간단합니다 — 간단하게  {{jsxref("String.prototype.length", "length")}} 프로퍼티를 사용할 수 있습니다. 다음 코드를 입력해 보세요.

```js
var browserType = 'mozilla';
browserType.length;
```

결과는 7을 리턴해야 합니다. 'mozilla'는 7글자이기 때문입니다. 이것은 여러 가지 이유로 유용합니다. 예를 들어 이름의 길이에 따라 이름의 순서를 정렬해야 하던가, 유저가 작성한 이름이 특정 길이 이상일 때 너무 길다는 것을 알려줘야 하는 경우에 사용할 수 있습니다.

### 특정 문자열 찾기

관련하여, 대괄호 표기법을 이용해서 문자열 안의 문자를 구할 수 있습니다. 대괄호 표기법은 변수명 끝에 대괄호를 포함합니다. 대괄호 안에는 구하고 싶은 문자의 숫자를 포함시키면 되며, 예를 들어 아래의 경우 첫 번째 문자를 구할 수 있습니다:

```js
browserType[0];
```

컴퓨터는 1이 아니라 0부터 숫자를 셉니다! 문자열의 마지막 문자를 구하기 위해서, 우리는 다음 코드를 사용할 수 있으며, 기술적인 `length` 프로퍼티과 같이 사용하면 아래와 같습니다:

```js
browserType[browserType.length - 1];
```

"mozilla"는 7글자이지만, 숫자는 0부터 시작하기 때문에 글자의 위치는 6입니다. 그렇기 때문에 `length-1`을 사용합니다. 예를 들어, 여러 문자열 중 첫 번째 문자를 찾아 알파벳순으로 정렬해야 할 경우에 사용할 수 있습니다.

### 문자열 내부의 하위 문자열 찾기 및 추출

1.  때때로 큰 문자열 안의 작은 문자열(우리는 이것을 하위 문자열이라고 이야기 한다.)을 찾고 싶을 것입니다. 이 작업은 {{jsxref("String.prototype.indexOf()", "indexOf()")}}를 사용하여 완료할 수 있습니다, which takes a single {{glossary("parameter")}} — 찾기 원하는 하위 문자열을 찾을 수 있습니다. 시도해 봅시다:

    ```js
    browserType.indexOf('zilla');
    ```

    결과는 2입니다. 하위 문자열인 "zilla"는 "mozilla'의 2번 위치(0, 1, 2— 그러므로 3번째 문자열)에서 시작합니다. 이러한 코드는 문자열을 필터링하는 데 사용될 수 있습니다. 예를 들어 웹 주소 목록에서 "mozilla"가 포함된 주소만 인쇄하고 싶은 경우입니다.

2.  다른 방법으로도 할 수 있으며, 더욱 효율적일 수 있습니다. 다음 예제를 따라해 봅시다:

    ```js
    browserType.indexOf('vanilla');
    ```

    이렇게 하면 -1( 하위 문자열 (이 경우 'vanilla')이 기본 문자열에서 발견되지 않으면 반환한다.)의 결과를 얻을 수 있습니다.

    하위 문자열 'mozilla'가 포함되지 않은 문자열의 모든 인스턴스를 찾으려면 이 연산자를 사용하고 아래에 표시된 것처럼 부정 연산자를 사용해서 작업을 수행할 수 있습니다. 다음과 같이 할 수 있습니다:

    ```js
    if (browserType.indexOf('mozilla') !== -1) {
      // do stuff with the string
    }
    ```

3.  문자열 내에서 부분 문자열이 어디에서 시작되고 어떤 문자로 끝나는지 알고 싶으면 {{jsxref("String.prototype.slice()", "slice()")}}를 사용하여 문자열을 추출할 수 있습니다. 다음을 시도해 봅시다:

    ```js
    browserType.slice(0, 3);
    ```

    "moz"를 반환합니다 - 첫 번째 파라메터는 추출을 시작할 문자 위치이고 두 번째 파라메터는 추출할 문자의 갯수입니다. 따라서 슬라이스는 첫 번째 위치에서부터 세 번째 위치까지 포함됩니다.

4.  또한 특정 문자 뒤에 문자열의 나머지 문자를 모두 추출하려는 경우 두 번째 매개 변수를 포함하지 않고 문자열에서 나머지 문자를 추출할 위치의 문자 위치만 포함하면 됩니다. 다음을 시도해보십시오.

    ```js
    browserType.slice(2);
    ```

    이렇게 하면 "zilla"가 반환됩니다. 문자의 2번째 위치는 "z"이고 두 번째 매개 변수를 포함하지 않았기 때문에 반환된 하위 문자열은 문자열의 나머지 문자 모두입니다.

> **참고:** `slice()` has other options too; study the {{jsxref("String.prototype.slice()", "slice()")}} page to see what else you can find out.

### 대/소문자 변경

문자열 메소드 {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} 와{{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} 는 문자열을 가져와 그것을 모두 각각 대문자나 소문자로 바꿉니다. 이는 데이터베이스에 저장하기 전에 모든 사용자 입력 데이터를 표준화하려는 경우 유용합니다.

다음 행을 입력하여 어떻게 되는지 살펴보겠습니다.

```js
var radData = 'My NaMe Is MuD';
radData.toLowerCase();
radData.toUpperCase();
```

### 문자열의 일부를 변경하기

문자열 내의 한 하위 문자열을 {{jsxref("String.prototype.replace()", "replace()")}} 를 통해 다른 하위 문자열로 바꿀 수 있습니다. 이 작업은 기본적인 수준에서 매우 간단하게 작동합니다. 하지만 아직 시도해보지 않은 고급 작업도 있습니다.

그것은 2개의 매개변수를 가집니다. — 바뀜을 당하는 문자와 바꾸려는 문자입니다. 다음 예제를 따라해보세요.:

```js
browserType.replace('moz', 'van');
```

## 예제

이 섹션에서는 문자열을 다루는 방법을 설명합니다. 아래의 각 실습에서는 문자열로 이루어진 배열을 루프문을 사용해 bullet list(불릿 리스트)로 표현하였습니다. 지금 배열이나 루프를 이해할 필요가 없습니다. - 이러한 내용은 추후에 설명합니다. 중요한것은 각각의 문자열이 우리가 원하는 형식으로 출력하는 코드를 작성하는 것입니다.

각 예제에는 리셋 버튼이 있고, 리셋 버튼은 실수를 했거나 코드가 작동하지 않아서 재설정하는데 사용할 수 있습니다. 해결 방법을 모를 때, 해답 버튼(solution button)을 누르면  해답을 볼 수 있습니다.

### 인사말 필터링 하기

첫 번째 예제는 간단히 시작해봅시다. 우리는 배열에 들어있는 크리스마스 인사말 메시지를 정렬하려고 합니다. if(...)을 사용해 각 문자열을 비교하고 크리스마스 메시지인 경우의 목록만 인쇄하려고 합니다.

1.  먼저 각 메시지가 크리스마스 메시지인지 여부를 테스트할 수 있는 방법을 생각해봅시다. 메시지들은 어떤 문자열이 있고, 존재하는지 테스트하기 위해 어떤 방법을 사용할 수 있을까요?
2.  연산자와 피연산자를 사용해 조건문을 만들어야 합니다. 연산자 왼쪽에 있는것과 연산자 오른쪽에 있는 것이 동등한가요? 또는 이 경우 왼쪽 메서드가 오른쪽으로 결과값을 전달합니까?
3.  힌트 : 이 경우 메서드 호출이 결과값과 같지 않은지 테스트하는 것이 더 유용할 수 있습니다.

<div class="hidden"><h6 id="Playable_code">Playable code</h6><pre class="brush: html notranslate">&#x3C;div class="output" style="min-height: 125px;">

&#x3C;ul>

&#x3C;/ul>

&#x3C;/div>

&#x3C;textarea id="code" class="playable-code" style="height: 290px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
'Merry Christmas my love',
'A happy Christmas to all the family',
'You\'re all I want for Christmas',
'Get well soon'];

for (var i = 0; i &#x3C; greetings.length; i++) {
var input = greetings[i];
// Your conditional test needs to go inside the parentheses
// in the line below, replacing what's currently there
if (greetings[i]) {
var result = input;
var listItem = document.createElement('li');
listItem.textContent = result;
list.appendChild(listItem);
}
}
&#x3C;/textarea>

&#x3C;div class="playable-buttons">
&#x3C;input id="reset" type="button" value="Reset">
&#x3C;input id="solution" type="button" value="Show solution">
&#x3C;/div>

</pre><pre class="brush: js notranslate">var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
eval(textarea.value);
}

reset.addEventListener('click', function() {
textarea.value = code;
updateCode();
});

solution.addEventListener('click', function() {
textarea.value = jsSolution;
updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nlist.innerHTML = \'\';\nvar greetings = [\'Happy Birthday!\',\n \'Merry Christmas my love\',\n \'A happy Christmas to all the family\',\n \'You\\\'re all I want for Christmas\',\n \'Get well soon\'];\n\nfor(var i = 0; i &#x3C; greetings.length; i++) {\n var input = greetings[i];\n if(greetings[i].indexOf(\'Christmas\') !== -1) {\n var result = input;\n var listItem = document.createElement(\'li\');\n listItem.textContent = result;\n list.appendChild(listItem);\n }\n}';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

</pre></div>

{{ EmbedLiveSample('Playable_code', '100%', 490) }}

### 대/소문자 맞게 수정하기

이 예제에는 영국 도시의 이름들을 모아놨습니다만 대/소문자가 잘못되어 있습니다. 우리는 이 문자들을 첫 번째 문자를 제외하고 모두 소문자로 변경해야 합니다. 이것은 다음과 같은 방식으로 할 수 있습니다:

1.  `input` 변수에 담긴 문자열 전체를 소문자로 변환한 후 새로운 변수에 저장하세요.
2.  새로운 변수에 저장된 문자열의 첫 문자를 다른 변수에 저장하세요
3.  Using this latest variable as a substring, replace the first letter of the lowercase string with the first letter of the lowercase string changed to upper case. Store the result of this replace procedure in another new variable.
4.  Change the value of the `result` variable to equal to the final result, not the `input`.

> **참고:** A hint — the parameters of the string methods don't have to be string literals; they can also be variables, or even variables with a method being invoked on them.

<div class="hidden"><h6 id="Playable_code_2">Playable code 2</h6><pre class="brush: html notranslate">&#x3C;div class="output" style="min-height: 125px;">

&#x3C;ul>

&#x3C;/ul>

&#x3C;/div>

&#x3C;textarea id="code" class="playable-code" style="height: 250px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i &#x3C; cities.length; i++) {
var input = cities[i];
// write your code just below here

var result = input;
var listItem = document.createElement('li');
listItem.textContent = result;
list.appendChild(listItem);
}
&#x3C;/textarea>

&#x3C;div class="playable-buttons">
&#x3C;input id="reset" type="button" value="Reset">
&#x3C;input id="solution" type="button" value="Show solution">
&#x3C;/div>

</pre><pre class="brush: js notranslate">var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
eval(textarea.value);
}

reset.addEventListener('click', function() {
textarea.value = code;
updateCode();
});

solution.addEventListener('click', function() {
textarea.value = jsSolution;
updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nlist.innerHTML = \'\';\nvar cities = [\'lonDon\', \'ManCHESTer\', \'BiRmiNGHAM\', \'liVERpoOL\'];\n\nfor(var i = 0; i &#x3C; cities.length; i++) {\n var input = cities[i];\n var lower = input.toLowerCase();\n var firstLetter = lower.slice(0,1);\n var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());\n var result = capitalized;\n var listItem = document.createElement(\'li\');\n listItem.textContent = result;\n list.appendChild(listItem);\n\n}';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

</pre></div>

{{ EmbedLiveSample('Playable_code_2', '100%', 450) }}

### Making new strings from old parts

In this last exercise the array contains a bunch of strings containing information about train stations in the North of England. The strings are data items that contain the three letter station code, followed by some machine-readable data, followed by a semi-colon, followed by the human-readable station name. For example:

    MAN675847583748sjt567654;Manchester Piccadilly

We want to extract the station code and name, and put them together in a  string with the following structure:

    MAN: Manchester Piccadilly

We'd recommend doing it like this:

1.  Extract the three-letter station code and store it in a new variable.
2.  Find the character index number of the semi-colon.
3.  Extract the human-readable station name using the semi-colon character index number as a reference point, and store it in a new variable.
4.  Concatenate the two new variables and a string literal to make the final string.
5.  Change the value of the `result` variable to equal to the final string, not the `input`.

<div class="hidden"><h6 id="Playable_code_3">Playable code 3</h6><pre class="brush: html notranslate">&#x3C;div class="output" style="min-height: 125px;">

&#x3C;ul>

&#x3C;/ul>

&#x3C;/div>

&#x3C;textarea id="code" class="playable-code" style="height: 285px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i &#x3C; stations.length; i++) {
var input = stations[i];
// write your code just below here

var result = input;
var listItem = document.createElement('li');
listItem.textContent = result;
list.appendChild(listItem);
}
&#x3C;/textarea>

&#x3C;div class="playable-buttons">
&#x3C;input id="reset" type="button" value="Reset">
&#x3C;input id="solution" type="button" value="Show solution">
&#x3C;/div>

</pre><pre class="brush: js notranslate">var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
eval(textarea.value);
}

reset.addEventListener('click', function() {
textarea.value = code;
updateCode();
});

solution.addEventListener('click', function() {
textarea.value = jsSolution;
updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nlist.innerHTML = \'\';\nvar stations = [\'MAN675847583748sjt567654;Manchester Piccadilly\',\n \'GNF576746573fhdg4737dh4;Greenfield\',\n \'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street\',\n \'SYB4f65hf75f736463;Stalybridge\',\n \'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield\'];\n\nfor(var i = 0; i &#x3C; stations.length; i++) {\n var input = stations[i];\n var code = input.slice(0,3);\n var semiC = input.indexOf(\';\');\n var name = input.slice(semiC + 1);\n var final = code + \': \' + name;\n var result = final;\n var listItem = document.createElement(\'li\');\n listItem.textContent = result;\n list.appendChild(listItem);\n}';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

</pre></div>

{{ EmbedLiveSample('Playable_code_3', '100%', 485) }}

## 결론

자바스크립트에서 문장과 단어들을 다룰 수 있는 프로그래밍 능력이 매우 중요하다. 웹사이트는 사람들과 소통하는 공간이기 때문이다. 이 문서는 문자열을 다룰 수 있는 기초적인 내용에 대해 다루었다. 이 내용은 앞으로 배우게 될 심화 과정에 도움이 될 것이다. 다음으로 배열에 대해 알아보겠다.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
