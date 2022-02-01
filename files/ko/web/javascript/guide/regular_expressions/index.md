---
title: 정규 표현식
slug: Web/JavaScript/Guide/Regular_Expressions
tags:
  - 자바스크립트
  - 정규식
translation_of: Web/JavaScript/Guide/Regular_Expressions
original_slug: Web/JavaScript/Guide/정규식
---
{{jsSidebar("JavaScript Guide")}} {{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}

정규 표현식은 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴입니다. 자바스크립트에서, 정규 표현식 또한 객체입니다.  이 패턴들은 {{jsxref("RegExp")}}의 {{jsxref("RegExp.exec", "exec")}} 메소드와 {{jsxref("RegExp.test", "test")}} 메소드  ,그리고 {{jsxref("String")}}의  {{jsxref("String.match", "match")}}메소드 , {{jsxref("String.replace", "replace")}}메소드 , {{jsxref("String.search", "search")}}메소드 ,  {{jsxref("String.split", "split")}} 메소드와 함께 쓰입니다 . 이 장에서는 자바스크립트의 정규식에 대하여 설명합니다.

## 정규 표현식 만들기

(역주: 정규 표현식을 줄여서 '정규식'이라고 하기도 합니다. 아래 부분부터 '정규식'이라는 용어를 사용하겠습니다.)

정규식을 만드는 방법에는 두 가지가 있습니다.

정규식 리터럴(슬래쉬"/"로 감싸는 패턴)을 사용하는 방법은 다음과 같습니다.

```js
var re = /ab+c/;
```

정규식 리터럴은 스크립트가 불러와질 때 컴파일됩니다. 만약 정규식이 상수라면, 이렇게 사용하는 것이 성능을 향상시킬 수 있습니다.

다른 방법으로는,  {{jsxref("RegExp")}} 객체의 생성자 함수를 호출하는 방법도 있습니다:

```js
var re = new RegExp("ab+c");
```

생성자 함수를 사용하면 정규식이 실행 시점에 컴파일됩니다. 정규식의 패턴이 변경될 수 있는 경우, 혹은 사용자 입력과 같이 다른 출처로부터 패턴을 가져와야 하는 경우에는 생성자 함수를 사용하세요.

## 정규식 패턴 작성하기

정규식 패턴은 `/abc/` 같이 단순 문자로 구성될 수도 있고, `/ab*c/` 또는 `/Chapter (\d+)\.\d*/`와 같이 단순 문자와 특수 문자의 조합으로 구성될 수도 있습니다. 마지막 예제는 기억장치처럼 쓰이는 괄호를 포함하고 있습니다. {{web.link("#.ED.8C.A8.ED.84.B4.ED.99.94.EB.90.9C_.EB.B6.80.EB.B6.84_.EB.AC.B8.EC.9E.90.EC.97.B4_.EC.9D.BC.EC.B9.98_.EC.82.AC.EC.9A.A9.ED.95.98.EA.B8.B0", "패턴화된 부분 문자열 일치 사용하기") }}에서 설명하는것 처럼 패턴에서 괄호를 포함한 부분은 나중에 사용하기 위하여 저장됩니다.

### 단순 패턴 사용하기

단순 패턴은 문자열을 있는 그대로 대응시키고자 할 때 사용됩니다. 예를 들어, `/abc/`라는 패턴은 문자열에서 정확히 'abc' 라는 문자들이 모두 함께 순서대로 나타나야 대응됩니다. 위의 패턴은 "Hi, do you know your abc's?" 와 "The latest airplane designs evolved from slabcraft." 두가지 예에서 부분 문자열 'abc'에 대응될 것입니다.  'Grab crab' 이라는 문자열에서 'ab c' 라는 부분 문자열을 포함하고 있지만, 'abc'를 정확하게 포함하고 있지 않기 때문에 대응되지 않습니다.

### 특수 문자 사용하기

검색에서 하나 이상의 b들을 찾거나, 혹은 공백을 찾는 것과 같이 '있는 그대로의 대응' 이상의 대응을 필요로 할 경우, 패턴에 특수한 문자를 포함시킵니다. 예를 들어, `/ab*c/` 패턴은  'a' 문자 뒤에 0개 이상의 'b' 문자(`*` 문자는 바로 앞의 문자가 0개 이상이라는 것을 의미합니다)가 나타나고 바로 뒤에 'c' 문자가 나타나는 문자 조합에 대응됩니다. 문자열 "cbbabbbbcdebc," 에서 위의 패턴은 부분 문자열 'abbbbc' 와 대응됩니다.

아래 표는 정규식에서 사용되는 모든 특수문자 목록 및 그에 대한 설명입니다.

<table class="standard-table">
 <caption>정규식에서의 특수문자</caption>
 <thead>
  <tr>
   <th scope="col">Character</th>
   <th scope="col">Meaning</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><a href="#special-backslash"  name="special-backslash"><code>\</code></a></td>
   <td>
    <p>다음의 규칙에 따라 일치합니다:<br>
     <br>
     특수 문자가 아닌 문자(non-special character) 앞에서 사용된 백슬래시는 '해당 문자는 특별하고, 문자 그대로 해석되면 안된다'는 사실을 가리킵니다. 예를 들어, 앞에 \가 없는 '<code>b</code>'는 보통 소문자 b가 나오는 패턴과 대응됩니다. 그러나 '<code>\b</code>' 자체는 어떤 문자와도 대응되지 않습니다; 이 문자는 특별한 <a href="#special-word-boundary" title="#special-word-boundary">단어 경계 문자</a>를 형성합니다.<br>
     <br>
     특수 문자 앞에 위치한 백슬래시는 '다음에 나오는 문자는 특별하지않고, 문자 그대로 해석되어야 한다'는 사실을 가리킵니다. 예를 들어, 패턴 <code>/a*/</code> 에서의 특수문자 '<code>*</code>'는 0개 이상의 'a' 문자가 등장함을 나타냅니다. 이와는 다르게, 패턴 <code>/a\*/</code> 는 '<code>*</code>'이 특별하지 않다는 것을 나타내며, 'a*'와 같은 문자열과 대응될 수 있습니다.<br>
     <br>
     RegExp("pattern") 표기를 쓰면서 \ 자체를 이스케이프 하는 것을 잊지 마세요. 왜냐하면 \ 는 문자열에서도 이스케이프 문자이기 때문입니다. (역주: <code>/a\*/</code> 와 같은 패턴을 생성자로 만들려면 <code>new RegExp('a\\*')</code>와 같이 백슬래시 자체를 이스케이프 시켜주어야 합니다.)</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-caret"  name="special-caret"><code>^</code></a></td>
   <td>입력의 시작 부분에 대응됩니다. 만약 다중행 플래그가 참으로 설정되어 있다면, 줄 바꿈 문자 바로 다음 부분과도 대응됩니다.<br>
    <br>
    예를 들어, <code>/^A/</code> 는 "an A" 의 'A'와는 대응되지 않습니다, 그러나 "An E" 의 'A'와는 대응됩니다.<br>
    <br>
    '<code>^</code>' 가 문자셋([abc]) 패턴의 첫 글자로 쓰인다면, 그 때는 전혀 다른 의미를 가집니다. 자세한 내용은 <a href="#special-negated-character-set" title="#special-negated-character-set">역 문자셋</a>을 참고하세요.</td>
  </tr>
  <tr>
   <td><a href="#special-dollar"  name="special-dollar"><code>$</code></a></td>
   <td>
    <p>입력의 끝 부분과 대응됩니다. 만약 다중행 플래그가 참으로 설정되어 있다면, 줄 바꿈 문자의 바로 앞 부분과도 대응됩니다.</p>

    <p>예를 들어, <code>/t$/</code> 는 "eater" 의 't'에는 대응되지 않습니다, 그러나 "eat" 과는 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-asterisk"  name="special-asterisk"><code>*</code></a></td>
   <td>
    <p>앞의 표현식이 0회 이상 연속으로 반복되는 부분과 대응됩니다. {0,} 와 같은 의미입니다.</p>

    <p>예를 들어, <code>/bo*/</code> 는 "A ghost booooed" 의 'boooo' 와 대응되고, "A bird warbled" 의 'b'에 대응되지만 "A goat grunted" 내의 어느 부분과도 대응되지 않습니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-plus"  name="special-plus"><code>+</code></a></td>
   <td>
    <p>앞의 표현식이 1회 이상 연속으로 반복되는 부분과 대응됩니다. <code>{1,}</code> 와 같은 의미입니다.</p>

    <p>예를 들어, <code>/a+/</code> 는 "candy"의 'a'에 대응되고 "caaaaaaandy" 의 모든 'a'들에 대응되지만, "cndy" 내의 어느 부분과도 대응되지 않습니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-questionmark"  name="special-questionmark"><code>?</code></a></td>
   <td>앞의 표현식이 0 또는 1회 등장하는 부분과 대응됩니다. <code>{0,1}</code> 와 같은 의미입니다.<br>
    <br>
    예를 들어, <code>/e?le?/</code> 는 "angel"의 'el' 에 대응되고, "angle"의 'le' 에 대응되고 또한 "oslo" 의 'l'에도 대응됩니다.<br>
    <br>
    만약 수량자 *, +, ?, {} 바로 뒤에 사용하면, 기본적으로 탐욕스럽던(가능한 한 많이 대응시킴) 수량자를 탐욕스럽지 않게(가능한 가장 적은 문자들에 대응시킴) 만듭니다. 예를 들어, <code>/\d+/</code>를 "123abc"에 적용시키면 "123"과 대응됩니다. 그러나 <code>/\d+?/</code>를 같은 문자열에 적용시키면 오직 "1"과만 대응됩니다.<br>
    <br>
    또한 이 문자는 <code>x(?=y)</code> 와 <code>x(?!y)</code> 항목에서 설명하는 바와 같이 사전 검증(lookahead assertion)을 위해서도 쓰입니다.<br>
     </td>
  </tr>
  <tr>
   <td><a href="#special-dot"  name="special-dot"><code>.</code></a></td>
   <td>
    <p>개행 문자를 제외한 모든 단일 문자와 대응됩니다.</p>

    <p>예를 들어, <code>/.n/</code>는 "nay, an apple is on the tree"에서 'an'과 'on'에 대응되지만, 'nay' 에는 대응되지 않습니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-capturing-parentheses"  name="special-capturing-parentheses"><code>(x)</code></a></td>
   <td>
    <p>다음의 예제가 보여주는것 처럼 'x'에 대응되고, 그것을 기억합니다. 괄호는 <em>포획 괄호(capturing parentheses)라</em> 불립니다.<br>
     <br>
     패턴 <code>/(foo) (bar) \1 \2/</code> 안의 '<code>(foo)</code>' 와 '<code>(bar)</code>'는 문자열"foo bar foo bar"에서 처음의 두 단어에 대응되고 이를 기억합니다. 패턴 내부의 <code>\1</code>와 <code>\2</code>는 문자열의 마지막 두 단어에 대응됩니다. (역주: \n 패턴은 앞의 n번째 포획괄호에 대응된 문자열과 똑같은 문자열에 대응됩니다.) <code>\1, \2, \n</code>과 같은 문법은 정규식의 패턴 부분에서 사용됩니다. 정규식의 치환 부분에서는 <code>$1, $2, $n</code>과 같은 문법이 사용되어야 합니다. 예를 들어, <code>'bar foo'.replace( /(...) (...)/, '$2 $1')</code>와 같이 사용되어야 합니다. <code>$&amp;</code> 패턴은 앞에서 대응된 전체 문자열을 가리킵니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-non-capturing-parentheses"  name="special-non-capturing-parentheses"><code>(?:x)</code></a></td>
   <td>'x'에 대응되지만 대응된 것을 기억하지 않습니다. 괄호는 <em>비포획 괄호(non-capturing parentheses)</em>라고 불리우고, 정규식 연산자가 같이 동작할 수 있게 하위 표현을 정의할 수 있습니다. 정규식 예제 <code>/(?:foo){1,2}/</code>을 생각해보세요. 만약 정규식이 <code>/foo{1,2}/</code>라면, <code>{1,2}</code>는 'foo'의 마지막 'o' 에만 적용됩니다. 비포획 괄호과 같이 쓰인다면, <code>{1,2}</code>는 단어 'foo' 전체에 적용됩니다.</td>
  </tr>
  <tr>
   <td><a href="#special-lookahead"  name="special-lookahead"><code>x(?=y)</code></a></td>
   <td>
    <p>오직 'y'가 뒤따라오는 'x'에만 대응됩니다. 이것은 lookahead 라고 불립니다.</p>

    <p>예를 들어, <code>/Jack(?=Sprat)/</code> 는 'Sprat'가 뒤따라오는 'Jack' 에만 대응됩니다. <code>/Jack(?=Sprat|Frost)/</code>는 'Sprat' 또는 'Frost'가 뒤따라오는 'Jack'에만 대응됩니다. 그러나, 'Sprat' 및 'Frost' 는 대응 결과의 일부가 아닙니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-negated-look-ahead"  name="special-negated-look-ahead"><code>x(?!y)</code></a></td>
   <td>
    <p>'x'뒤에  'y'가 없는경우에만 'x'에 일치합니다. 이것은 negated lookahead 라고 불립니다.</p>

    <p>예를 들어, <code>/\d+(?!\.)/</code>는 소숫점이 뒤따라오지 않는 숫자에 일치합니다. 정규식 <code>/\d+(?!\.)/.exec("3.141")</code>는 '3.141' 이 아닌 '141'에 일치합니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-or"  name="special-or"><code>x|y</code></a></td>
   <td>
    <p>'x' 또는 'y'에 대응됩니다.</p>

    <p>예를 들어, <code>/green|red/</code>는 "green apple"의 'green'에 대응되고, "red apple."의 'red'에 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-quantifier"  name="special-quantifier"><code>{n}</code></a></td>
   <td>앞 표현식이 n번 나타나는 부분에 대응됩니다. n은 반드시 양의 정수여야 합니다.<br>
    <br>
    예를 들어, <code>/a{2}/</code>는 "candy,"의 'a'에는 대응되지 않지만, "caandy,"의 모든 a 와, "caaandy."의 첫 두 a 에는 대응됩니다.</td>
  </tr>
  <tr>
   <td><a href="#special-quantifier-range"  name="special-quantifier-range"><code>{n,m}</code></a></td>
   <td>
    <p><code>n</code>과 <code>m</code>은 양의 정수이고, <code>n &lt;= m</code>를 만족해야 합니다. 앞 문자가 최소 <code>n</code>개, 최대 <code>m</code>개가 나타나는 부분에 대응됩니다. <code>m</code>이 생략된다면, m은 ∞로 취급됩니다.</p>

    <p>예를 들어, <code>/a{1,3}/</code>는 "cndy"에서 아무것에도 대응되지 않지만, "caandy,"의 첫 두 a 와 "caaaaaaandy"의 첫 세 a 에 대응됩니다. "caaaaaaandy"에서 더 많은 a 들이 있지만, "aaa"에만 대응된다는 점에 주목하세요.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-character-set"  name="special-character-set"><code>[xyz]</code></a></td>
   <td>문자셋(Character set) 입니다. 이 패턴 타입은 괄호 안의 어떤 문자(<a href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Values,_variables,_and_literals#Unicode_escape_sequences" title="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Values,_variables,_and_literals#Unicode_escape_sequences">이스케이프 시퀀스</a>까지 포함)와도 대응됩니다. 점(<code>.</code>) 이나 별표 (<code>*</code>) 같은 특수 문자는 문자셋 내부에서는 특수 문자가 아닙니다. 따라서 이스케이프시킬 필요가 없습니다. 하이픈을 이용하여 문자의 범위를 지정해줄 수 있습니다.<br>
    <br>
    예를 들어, 패턴 <code> [a-d]</code> 는 패턴 <code>[abcd]</code> 와 똑같이 동작하며, "brisket"의 'b' 에 일치하고, "city"의 'c' 에 일치합니다. 패턴 <code>/[a-z.]+/ </code> 와 <code>/[\w.]+/</code> 는 "test.i.ng" 전체 문자열이 일치합니다.</td>
  </tr>
  <tr>
   <td><a href="#special-negated-character-set"  name="special-negated-character-set"><code>[^xyz]</code></a></td>
   <td>
    <p>부정 문자셋(negated character set) 또는 보충 문자셋(complemented character set)입니다. 괄호 내부에 등장하지 않는 어떤 문자와도 대응됩니다. 하이픈을 이용하여 문자의 범위를 지정할 수 있습니다. 일반적인 문자셋에서 작동하는 모든 것은 여기에서도 작동합니다.</p>

    <p>예를 들어, 패턴<code>[^abc]</code>는 패턴<code>[^a-c]</code>와 동일합니다. 두 패턴은 "brisket"의 'r', "chop."의 'h' 에 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-backspace"  name="special-backspace"><code>[\b]</code></a></td>
   <td>백스페이스(U+0008)에 대응됩니다. 이와 같이, 백스페이스 문자 리터럴에 대응시키려면, 대괄호("[]")를 이용해야만 합니다. (<code>\b</code>와 혼동하지 마세요.)</td>
  </tr>
  <tr>
   <td><a href="#special-word-boundary"  name="special-word-boundary"><code>\b</code></a></td>
   <td>
    <p>단어 경계에 대응됩니다. 단어 경계는 다른 '단어 문자'가 앞이나 뒤에 등장하지 않는 위치에 대응됩니다. 단어의 경계는 대응 결과에 포함되지 않는다는 사실에 주의하세요. 다른 말로는, 단어의 경계에 대응되는 문자열의 길이는 항상 0입니다. (패턴 <code>[\b]</code>와 혼동하지 마세요.)</p>

    <p>예제:<br>
     <code>/\bm/</code>는 "moon"의 'm'에 대응됩니다;<br>
     <code>/oo\b/</code> 는 "moon"의 'oo' 부분에 대응되지 않는데, 왜냐하면 'oo'를 뒤따라오는 'n'이 단어 문자이기 때문입니다;<br>
     <code>/oon\b/</code>는 "moon"의 'oon'에 대응됩니다. 왜냐하면, 'oon'은 문자열의 끝이라서, 뒤따라오는 단어 문자가 없기 때문입니다 ;<br>
     <code>/\w\b\w/</code>는 어떤 것에도 일치하지 않습니다. 왜냐하면, 단어 문자는 절대로 비 단어 문자와 단어 문자 두개가 뒤따라올수 없기 때문입니다.</p>

    <div class="note">
    <p><strong>숙지하세요:</strong> 자바스크립트의 정규식 엔진은 <a href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.2.6">특정 문자 집합</a>을 '단어 문자'로 정의합니다. 이 집단에 속하지 않는 모든 문자는 단어 분리(word break) 로 여겨집니다. 단어 문자로 간주되는 문자들은 얼마 없습니다: 오로지 로마자 소문자와 대문자, 10진수 숫자, 밑줄 문자로 구성되어 있습니다. "é" 또는 "ü" 같이, 강세 표시 문자들은 안타깝게도 단어 분리(word breaks) 로 취급됩니다.</p>
    </div>
   </td>
  </tr>
  <tr>
   <td><a href="#special-non-word-boundary"  name="special-non-word-boundary"><code>\B</code></a></td>
   <td>
    <p>단어 경계가 아닌 부분에 대응됩니다. 아래와 같은 경우들이 있습니다:</p>

    <ul>
     <li>문자열의 첫 번째 문자가 단어 문자가 아닌 경우, 해당 문자의 앞 부분에 대응됩니다.</li>
     <li>문자열의 마지막 문자가 단어 문자가 아닌 경우, 해당 문자의 뒷 부분에 대응됩니다.</li>
     <li>두 단어 문자의 사이에 대응됩니다.</li>
     <li>단어 문자가 아닌 두 문자 사이에 대응됩니다.</li>
     <li>빈 문자열에 대응됩니다.</li>
    </ul>

    <p>문자열의 시작 부분과 끝 부분은 단어가 아닌 것으로 간주됩니다.</p>

    <p>예를 들어, <code>/\B../</code> 는 "noonday"의 'oo'와 대응되며, <code>/y\B./</code> 는 "possibly yesterday."의 'ye'와 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-control"  name="special-control"><code>\c<em>X</em></code></a></td>
   <td>
    <p>문자열 내부의 제어 문자에 대응됩니다. 여기서 <em>X</em>는 A에서 Z까지의 문자 중 하나입니다.</p>

    <p>예를 들어, <code>/\cM/</code>는 문자열에서 control-M (U+000D)에 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-digit"  name="special-digit"><code>\d</code></a></td>
   <td>
    <p>숫자 문자에 대응됩니다. <code>[0-9]</code>와 동일합니다.</p>

    <p>예를 들어, <code>/\d/</code> 또는 <code>/[0-9]/</code>는 "B2 is the suite number."에서 '2'에 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-non-digit"  name="special-non-digit"><code>\D</code></a></td>
   <td>
    <p>숫자 문자가 아닌 문자에 대응됩니다. <code>[^0-9]</code>와 동일합니다.</p>

    <p>예를 들어, <code>/\D/</code> 또는 <code>/[^0-9]/</code>는 "B2 is the suite number."의 'B'에 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-form-feed"  name="special-form-feed"><code>\f</code></a></td>
   <td>폼피드 (U+000C) 문자에 대응됩니다.</td>
  </tr>
  <tr>
   <td><a href="#special-line-feed"  name="special-line-feed"><code>\n</code></a></td>
   <td>줄 바꿈 (U+000A) 문자에 대응됩니다.</td>
  </tr>
  <tr>
   <td><a href="#special-carriage-return"  name="special-carriage-return"><code>\r</code></a></td>
   <td>캐리지 리턴(U+000D) 문자에 대응됩니다.</td>
  </tr>
  <tr>
   <td><a href="#special-white-space"  name="special-white-space"><code>\s</code></a></td>
   <td>
    <p>스페이스, 탭, 폼피드, 줄 바꿈 문자등을 포함한 하나의 공백 문자에 대응됩니다. <code>[ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>.와 동일합니다.</p>

    <p>예를 들어, <code>/\s\w*/</code>는 "foo bar."의 ' bar'에 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-non-white-space"  name="special-non-white-space"><code>\S</code></a></td>
   <td>
    <p>공백 문자가 아닌 하나의 문자에 대응됩니다. <code>[^ \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. 와 동일합니다.</p>

    <p>예를 들어, <code>/\S\w*/</code>는 "foo bar."의 'foo' 에 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-tab"  name="special-tab"><code>\t</code></a></td>
   <td>탭 (U+0009) 문자에 대응됩니다.</td>
  </tr>
  <tr>
   <td><a href="#special-vertical-tab"  name="special-vertical-tab"><code>\v</code></a></td>
   <td>수직 탭(U+000B) 문자에 대응됩니다.</td>
  </tr>
  <tr>
   <td><a href="#special-word"  name="special-word"><code>\w</code></a></td>
   <td>
    <p>밑줄 문자를 포함한 영숫자 문자에 대응됩니다. <code>[A-Za-z0-9_]</code> 와 동일합니다. (역주: 여기에 대응되는 문자를 단어 문자라고 합니다.)</p>

    <p>예를 들어, <code>/\w/</code>는 "apple,"의 'a' 에 대응되고, "$5.28,"의 '5'에 대응되고,"3D."의 '3'에 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-non-word"  name="special-non-word"><code>\W</code></a></td>
   <td>
    <p>단어 문자가 아닌 문자에 대응됩니다. <code>[^A-Za-z0-9_]</code> 와 동일합니다.</p>

    <p>예를 들어, <code>/\W/</code> 또는 <code>/[^A-Za-z0-9_]/</code>는 "50%."의 '%' 에 대응됩니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-backreference"  name="special-backreference"><code>\<em>n</em></code></a></td>
   <td>
    <p>정규식 내부의 <em>n</em>번째 괄호에서 대응된 부분에 대한 역참조 입니다. 여기서, <em>n은 양의 정수입니다.</em></p>

    <p>예를 들어, <code>/apple(,)\sorange\1/</code>는 "apple, orange, cherry, peach."의 'apple, orange,' 에 일치합니다.</p>
   </td>
  </tr>
  <tr>
   <td><a href="#special-null"  name="special-null"><code>\0</code></a></td>
   <td>널 (U+0000)문자에 대응합니다. 이 때 다른 숫자를 뒤에 쓰지 마세요. 왜냐하면 <code>\0&lt;digits&gt;</code>는 8진 <a href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Values,_variables,_and_literals#Unicode_escape_sequences" title="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Values,_variables,_and_literals#Unicode_escape_sequences">이스케이프 시퀀스</a>이기 때문입니다.</td>
  </tr>
  <tr>
   <td><a href="#special-hex-escape"  name="special-hex-escape"><code>\xhh</code></a></td>
   <td>코드가 hh(두 16진 숫자)인 문자에 일치합니다.</td>
  </tr>
  <tr>
   <td><a href="#special-unicode-escape"  name="special-unicode-escape"><code>\uhhhh</code></a></td>
   <td>코드가 hhhh(네개의 16진 숫자)인 문자에 일치합니다.</td>
  </tr>
 </tbody>
</table>

사용자 입력을 이스케이프해서 정규식 내부에서 문자 그대로 취급해야 하는 경우, 간단히 치환을 하면 됩니다:

```js
function escapeRegExp(string){
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $&는 일치한 전체 문자열을 의미합니다.
}
```

### 괄호를 사용하기

정규식 내부의 일부를 둘러싼 괄호는, 해당 부분에서 대응된 문자열을 기억하는 효과를 갖습니다. 기억된 문자열은 이후 {{ web.link("#.ED.8C.A8.ED.84.B4.ED.99.94.EB.90.9C_.EB.B6.80.EB.B6.84_.EB.AC.B8.EC.9E.90.EC.97.B4_.EC.9D.BC.EC.B9.98_.EC.82.AC.EC.9A.A9.ED.95.98.EA.B8.B0", "패턴화된 부분 문자열 일치 사용하기") }}에서 설명한 것처럼 다른 곳에서 사용하기 위하여 불러와질 수 있습니다.

예를 들면, 패턴 `/Chapter (\d+)\.\d*/`는 패턴의 일부분이 기억될 거라는 사실을 나타냅니다. 이 패턴은 하나 이상의 숫자(`\d`는 숫자를 의미하고 `+`는 1개 이상을 의미합니다.) 이후에 하나의 소숫점(\가 앞에 붙은 소숫점은 문자 그대로의 문자 '.' 에 대응됨을 나타냅니다), 그뒤 0개 이상의 숫자(`\d` 는 숫자, `*` 는 0개 이상을 의미합니다.)가 뒤따라오는 'Chapter ' 문자열에 대응됩니다. 더해서, 괄호는 처음으로 일치하는 숫자 문자들을 기억하기 위하여 사용되었습니다.

이 패턴은 "Open Chapter 4.3, paragraph 6"에 나타나며, '4'가 기억됩니다. 이 패턴은 "Chapter 3 and 4"에는 나타나지 않습니다. 왜냐하면 문자열이 '3'이후에 마침표를 가지고 있지 않기 때문입니다.

부분 문자열을 대응시키면서도 해당 부분을 기억하지 않으려면, 괄호의 첫머리에 `?:`패턴을 사용하세요. 예를 들어, `(?:\d+)`는 1개 이상의 숫자에 대응되지만 해당 문자들을 기억하지 않습니다.

## 정규식 사용하기

정규식은 `RegExp,` `test,` `exec,` `String,` `match`, `replace`, `search`, `split` 메소드와 함께 쓰입니다. 이 메소드는 [JavaScript reference](/en-US/docs/Web/JavaScript/Reference "en-US/docs/JavaScript/Reference")에서 잘 설명되어 있습니다.

| Method                                               | Description                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.exec", "exec")}}         | 대응되는 문자열을 찾는 <code style="font-style: normal;">RegExp</code><span style="background-color: rgba(212, 221, 228, 0.14902);"> 메소드입니다</span>. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.                                                                                                        |
| {{jsxref("RegExp.test", "test")}}         | 대응되는 문자열이 있는지 검사하는 <code style="font-style: normal;">RegExp</code><strong style="background-color: rgba(212, 221, 228, 0.14902); font-family: courier new,andale mono,monospace; font-weight: bold;"> </strong>메소드 입니다. true 나 false를 반환합니다.                                                                                  |
| {{jsxref("String.match", "match")}}     | 대응되는 문자열을 찾는 <code style="font-style: normal;">String</code><span style="background-color: rgba(212, 221, 228, 0.14902);"> 메소드입니다</span>. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.                                                                                                        |
| {{jsxref("String.search", "search")}}     | <p class="syntaxbox">대응되는 문자열이 있는지 검사하는 <code style="font-style: normal;">String</code><strong style="background-color: rgba(212, 221, 228, 0.14902); font-family: courier new,andale mono,monospace; font-weight: bold;"> </strong>메소드 입니다. 대응된 부분의 인덱스를 반환합니다. 대응되는 문자열을 찾지 못했다면 -1을 반환합니다.</p> |
| {{jsxref("String.replace", "replace")}} | 대응되는 문자열을 찾아 다른 문자열로 치환하는 `String` 메소드입니다.                                                                                                                                                                                                                                                                                      |
| {{jsxref("String.split", "split")}}     | 정규식 혹은 문자열로 대상 문자열을 나누어 배열로 반환하는 `String` 메소드입니다.                                                                                                                                                                                                                                                                          |

문자열 내부에 패턴과 대응되는 부분이 있는지 알고 싶다면, `test` 나 `search` 메소드를 사용하세요; 좀 더 많은 정보를 원하면 (대신 실행이 느림)  `exec` 나 `match` 메소드를 사용하세요. 만약 `exec` 나 `match` 메소드를 사용했는데 대응되는 부분이 있다면, 이 메소드는 배열을 반환하고 정규식 객체의 속성을 업데이트 합니다. 만약 대응되는 부분이 없다면, `exec` 메소드는 `null` 을 반환합니다. (즉, `false`와 같은 의미로 사용될 수 있습니다.).

아래의 예에서는, 문자열 내부에서 대응되는 부분을 찾기 위해 `exec` 메소드를 사용했습니다.

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
```

만약 정규식 속성에 접근할 필요가 없다면, 아래와 같이 `myArray`를 만드는 다른 방법도 있습니다:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
```

문자열로부터 정규식을 만들고 싶다면, 이런 방법도 있습니다:

```js
var myRe = new RegExp("d(b+)d", "g");
var myArray = myRe.exec("cdbbdbsbz");
```

위의 스크립트에서는, 대응되는 부분이 발견되었고 아래의 표에서 설명하는 대로 배열을 반환하며 속성을 갱신합니다.

<table class="standard-table" style="height: 299px; width: 1168px">
  <caption>
    정규식 실행결과
  </caption>
  <thead>
    <tr>
      <th scope="col">Object</th>
      <th scope="col">Property or index</th>
      <th scope="col">Description</th>
      <th scope="col">In this example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>myArray</code></td>
      <td></td>
      <td>대응된 문자열 및 기억한 모든 부분 문자열</td>
      <td><code>['dbbd', 'bb', index: 1, input: 'cdbbdbsbz']</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>입력된 문자열에서 대응된 부분에 해당하는 인덱스 (0부터 시작)</td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>입력된 원본 문자열</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>마지막으로 대응된 문자열</td>
      <td><code>"dbbd"</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>myRe</code></td>
      <td><code>lastIndex</code></td>
      <td>
        다음 검색 시 검색을 시작할 인덱스 (이 속성은 g 옵션을 설정한 정규식에
        대해서만 설정됩니다. 자세한 사항은
        {{ web.link("#Advanced_searching_with_flags", "Advanced Searching With Flags") }}
        부분을 참고하세요.)
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        패턴 문자열. 정규식이 생성될 때 갱신됩니다. 실행 시점에는 갱신되지
        않습니다.
      </td>
      <td><code>"d(b+)d"</code></td>
    </tr>
  </tbody>
</table>

위 예제에서의 두 번째 형태처럼, 정규식 객체를 변수에 대입하지 않고도 사용할 수 있습니다. 하지만, 이렇게 하면 정규식 객체가 매번 새로 생성됩니다. 이러한 이유로, 만약 변수에 대입하지 않는 형태를 사용하는 경우 나중에 그 정규식의 속성에 접근할 수 없게 됩니다. 예를 들어, 이러한 스크립트가 있을 수 있습니다:

```js
var myRe = /d(b+)d/g;
var myArray = myRe.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + myRe.lastIndex);

// "The value of lastIndex is 5"
```

그러나, 만약 이러한 스크립트가 있으면:

```js
var myArray = /d(b+)d/g.exec("cdbbdbsbz");
console.log("The value of lastIndex is " + /d(b+)d/g.lastIndex);

// "The value of lastIndex is 0"
```

두 구문에서의 `/d(b+)d/g` 는 서로 다른  정규식 객체이고, 따라서 별개의 `lastIndex` 속성을 갖게 됩니다. 정규식 객체의 속성을 사용해야 하는 경우라면, 먼저 변수에 대입하세요.

### 괄호로 둘러싼 패턴 사용하기

정규식 패턴에 괄호를 사용하면, 그 부분을 별도로 대응시키면서 대응된 부분을 기억합니다. 예를 들면, `/a(b)c/` 는 'abc' 와 대응되면서 'b'를 기억합니다. 괄호로 감싸진 문자열을 불러오려면, 배열 요소 `[1]`, ..., `[n]` 를 사용하세요.

괄호로 감쌀 수 있는 문자의 개수에는 제한이 없습니다. 반환된 배열은 찾아낸 모든 것들을 갖고 있습니다. 다음의 예는 괄호로 둘러싸진 부분이 어떻게 대응되는지 보여줍니다.

다음의 예는 문자열 내부의 단어를 바꾸기 위해 {{jsxref("String.replace", "replace()")}} 메소드를 이용하고 있습니다. 치환 문자열로는 `$1` 과 `$2` 를 사용하고 있는데, 이는 각각 첫 번째와 두 번째 괄호가 쳐진 부분에 대응된 문자열을 가리킵니다.

```js
var re = /(\w+)\s(\w+)/;
var str = "John Smith";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);

// "Smith, John"
```

### 플래그를 사용한 고급검색

정규식은 여섯 개의 플래그를 설정해줄 수 있으며, 이를 통해 전역 검색 또는 대소문자 구분 없는 검색을 수행할 수 있습니다. 이 플래그들은 각기 사용될 수도 있고 함께 사용될 수도 있고 순서에 구분이 없습니다.

| Flag | Description                                                                                                                         |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `g`  | 전역 검색                                                                                                                           |
| i    | 대소문자 구분 없는 검색                                                                                                             |
| m    | 다중행(multi-line) 검색                                                                                                             |
| s    | `.`에 개행 문자도 매칭(ES2018)                                                                                                      |
| u    | 유니코드; 패턴을 유니코드 코드 포인트의 나열로 취급합니다.                                                                          |
| y    | "sticky" 검색을 수행. 문자열의 현재 위치부터 검색을 수행합니다. {{jsxref("RegExp.sticky", "sticky")}} 문서를 확인하세요. |

정규식에 플래그를 포함시키려면, 아래 문법을 사용하세요:

```js
var re = /pattern/flags;
```

혹은 아래와 같이 할 수도 있습니다:

```js
var re = new RegExp("pattern", "flags");
```

이 플래그는 정규식에 합쳐지는 정보임을 기억하는게 좋습니다. 이것들은 나중에 추가되거나 제거될 수 없습니다.

예를 들어, `re = /\w+\s/g` 는 한 개 이상의 문자열 뒤에 공백이 하나 있는 패턴을 찾는 정규식을 생성합니다. 그리고 문자열 전체에 걸쳐 이 조합을 검색합니다.

```js
var re = /\w+\s/g;
var str = "fee fi fo fum";
var myArray = str.match(re);
console.log(myArray);

// ["fee ", "fi ", "fo "]
```

아래 코드는:

```js
var re = /\w+\s/g;
```

이렇게 바꿔쓸 수 있습니다:

```js
var re = new RegExp("\\w+\\s", "g");
```

그리고 똑같은 결과를 얻습니다.

`.exec()` 메소드를 사용할 때에는 '**`g`**' 플래그에 대한 동작이 다릅니다.  ("클래스"와 "인수"의 역할이 뒤바뀝니다:  `.match()`를 사용할 때는, string 클래스가 메소드를 갖고 정규식은 인수였던 것에 반해, `.exec()`를 사용할 때는 정규식이 메소드를 갖고 문자열이 인수가 됩니다. *`str.match(re)`* 과 *`re.exec(str)`*를 비교해보세요.)  '**`g`**' 플래그와  **`.exec()`** 메소드가 함께 사용되면 진행상황에 대한 정보가 반환됩니다.

    var xArray; while(xArray = re.exec(str)) console.log(xArray);
    // 다음과 같이 출력됩니다:
    // ["fee ", index: 0, input: "fee fi fo fum"]
    // ["fi ", index: 4, input: "fee fi fo fum"]
    // ["fo ", index: 7, input: "fee fi fo fum"]

`m` 플래그는 여러 줄의 입력 문자열이 실제로 여러 줄로서 다뤄져야 하는 경우에 쓰입니다. 만약 `m` 플래그가 사용되면, `^` 와 `$` 문자는 전체 문자열의 시작과 끝에 대응되는 것이 아니라 각 라인의 시작과 끝에 대응됩니다.

## 예시

다음의 예는 정규 표현식의 몇 가지 사용법을 보여줍니다.

### 입력 문자열에서 순서를 변경하기

다음 예는 정규식의 , `string.split()과` `string.replace()`의 사용을 설명합니다. 그것은 공백, 탭과 정확히 하나의 세미콜론의 구분으로 이름(이름을 먼저)이 포함된 대략 형식의 입력 문자열을 정리합니다. 마지막으로, 순서(성을 먼저)를 뒤바꾸고 목록을 정렬합니다.

```js
// The name string contains multiple spaces and tabs,
// and may have multiple spaces between first and last names.
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Original String\n", names + "\n"];

// Prepare two regular expression patterns and array storage.
// Split the string into array elements.

// pattern: possible white space then semicolon then possible white space
var pattern = /\s*;\s*/;

// Break the string into pieces separated by the pattern above and
// store the pieces in an array called nameList
var nameList = names.split(pattern);

// new pattern: one or more characters then spaces then characters.
// Use parentheses to "memorize" portions of the pattern.
// The memorized portions are referred to later.
pattern = /(\w+)\s+(\w+)/;

// New array for holding names being processed.
var bySurnameList = [];

// Display the name array and populate the new array
// with comma-separated names, last first.
//
// The replace method removes anything matching the pattern
// and replaces it with the memorized string—second memorized portion
// followed by comma space followed by first memorized portion.
//
// The variables $1 and $2 refer to the portions
// memorized while matching the pattern.

output.push("---------- After Split by Regular Expression");

var i, len;
for (i = 0, len = nameList.length; i < len; i++){
  output.push(nameList[i]);
  bySurnameList[i] = nameList[i].replace(pattern, "$2, $1");
}

// Display the new array.
output.push("---------- Names Reversed");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

// Sort by last name, then display the sorted array.
bySurnameList.sort();
output.push("---------- Sorted");
for (i = 0, len = bySurnameList.length; i < len; i++){
  output.push(bySurnameList[i]);
}

output.push("---------- End");

console.log(output.join("\n"));
```

### 입력을 확인하기 위해 특수 문자를 사용하기

다음 예에서, 사용자는 전화번호를 입력 할 것으로 예상됩니다. 사용자가 "Check" 버튼을 누를 때, 스크립트는 번호의 유효성을 검사합니다. 번호가 유효한 경우(정규식에 의해 지정된 문자 시퀀스와 일치합니다), 스크립트는 사용자에게 감사하는 메시지와 번호를 확인하는 메시지를 나타냅니다. 번호가 유효하지 않은 경우, 스크립트는 전화번호가 유효하지 않다는 것을 사용자에게 알립니다.

비 캡처링 괄호 `(?:` , 정규식은 세 자리 숫자를 찾습니다 `\d{3}` OR `|` 왼쪽 괄호`\(` 세 자리 숫자 다음에 `\d{3}`, 닫는 괄호 다음에 `\)`, (비 캡처링 괄호를 종료`)`) 안에, 하나의 대시, 슬래시, 또는 소수점을 다음과 같이 발견했을 때,  세 자리 숫자 다음에 `d{3}`, 대시의 기억 매치, 슬래시, 또는 소수점 다음에 `\1`, 네 자리 숫자 다음에 `\d{4}` 문자를 기억합니다**(\[-\\/\\.])**.

사용자가 \<Enter> 키를 누를 때 활성화 `변경` 이벤트는 `RegExp.input`의 값을 설정합니다.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
    <meta http-equiv="Content-Script-Type" content="text/javascript">
    <script type="text/javascript">
      var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
      function testInfo(phoneInput){
        var OK = re.exec(phoneInput.value);
        if (!OK)
          window.alert(OK.input + " isn't a phone number with area code!");
        else
          window.alert("Thanks, your phone number is " + OK[0]);
      }
    </script>
  </head>
  <body>
    <p>Enter your phone number (with area code) and then click "Check".
        <br>The expected format is like ###-###-####.</p>
    <form action="#">
      <input id="phone"><button onclick="testInfo(document.getElementById('phone'));">Check</button>
    </form>
  </body>
</html>
```

{{PreviousNext("Web/JavaScript/Guide/Text_formatting", "Web/JavaScript/Guide/Indexed_collections")}}
