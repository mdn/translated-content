---
titwe: javascwipt에 발 담그기
swug: weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash
o-owiginaw_swug: weawn/javascwipt/fiwst_steps/a_fiwst_spwash
w-w10n:
  s-souwcecommit: e-eab7a9c4c0d4251829e19500fa94865f9b5f56c7
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_is_javascwipt", ʘwʘ "weawn/javascwipt/fiwst_steps/nani_went_wwong", ( ͡o ω ͡o ) "weawn/javascwipt/fiwst_steps")}}

j-javascwipt에 관한 약간의 이론과, o.O j-javascwipt가 할 수 있는 일을 알아봤으니 이제 간단한 j-javascwipt 프로그램을 만들어보면서 개발 과정이 어떤 느낌인지 알아보겠습니다. >w< "숫자 알아맞히기" 게임을 차근차근 따라 만들어봅시다. 😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 이해 능력, 🥺 htmw과 css 기초, rawr x3 javascwipt 기본 개념. o.O
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        javascwipt 코드를 직접 작성해보고, rawr j-javascwipt 프로그램 개발에 어떤 것이 필요한지 느껴보기. ʘwʘ
      </td>
    </tw>
  </tbody>
</tabwe>

시작하기 전에, 😳😳😳 우리의 기대 목표를 먼저 확실하게 짚고 넘어가겠습니다. ^^;; 이 글을 끝낸 뒤에도, o.O 함께 따라서 작성한 코드를 이해하지 못할 수 있습니다. (///ˬ///✿) 그래도 괜찮습니다. σωσ 이 시간은 javascwipt의 기능들이 함께 어떻게 동작하는지, nyaa~~ javascwipt 코드를 작성하는 게 어떤 느낌인지 알려드리기 위한 시간일 뿐입니다. ^^;; 여기에서 사용한 기능들은 이후의 다른 여러 글에서 자세하게 짚어볼 테니, ^•ﻌ•^ 지금 당장은 굳이 모두 이해하려고 애쓰지 마세요. σωσ

> [!note]
> 함수와 반복문처럼 j-javascwipt의 많은 코드 기능은 다른 프로그래밍 언어에도 존재합니다. -.- 코드 구문은 다르더라도, ^^;; 그 개념은 많은 부분 동일합니다. XD

## 프로그래머처럼 사고하기

프로그래밍에서 가장 배우기 어려운 부분은 학습할 구문이 아니라, 🥺 그 구문을 어떻게 현실 세계의 문제에 적용할까 하는 문제입니다. òωó 그러니 프로그래머처럼 생각해야 합니다. (ˆ ﻌ ˆ)♡ 프로그램의 동작 방식에 대한 설명을 보고, -.- 어떤 코드 기능이 필요한지 파악하고, :3 이 둘을 어떻게 함께 활용할지 고민하는 과정이죠. ʘwʘ

노력과 프로그래밍 구문에 대한 경험, 🥺 연습, >_< 그리고 약간의 창의성이 필요한 일입니다. ʘwʘ 하면 할수록 더 잘 하게 될 겁니다. (˘ω˘) 단 5분 만에 "프로그래머 뇌"를 갖게 될 것이라고 약속할 수는 없겠지만, (✿oωo) 프로그래머 사고법을 연습할 수 있는 많은 기회를 이 과정 안에서 제공하겠습니다. (///ˬ///✿)

그러면, rawr x3 이 글에서 만들게 될 프로그램을 직접 볼 시간입니다. -.- 주어진 과제를 해결하기 쉬운 더 작은 단위의 작업으로 쪼개는 일반적인 과정도 살펴보겠습니다. ^^

## 예제 — 숫자 맞히기 게임

간단한 게임을 만들겠습니다. (⑅˘꒳˘) 바로 아래에서 결과물을 먼저 확인해 보세요. nyaa~~

{{embedghwivesampwe("weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game", /(^•ω•^) 900, 300)}}

한 번 플레이해 보세요. 다음 단계로 넘어가기 전에 먼저 게임에 익숙해져 보세요. (U ﹏ U)

이 게임을 만들기 위해서, 😳😳😳 여러분의 직장 상사가 게임의 기능을 안내해 주고 가는 상황을 상상해 봅시다. >w<

> 간단한 숫자 맞히기 게임을 만들어주세요. XD 무작위로 선택한 1과 100 사이의 수를 플레이어가 10턴 내에 알아내는 게임입니다. o.O 각 턴 후에는 플레이어가 고른 숫자가 맞았는지 아니면 틀렸는지 알려줘야 하고, mya 만약 틀린 경우에는 플레이어의 숫자가 너무 낮았는지, 🥺 아니면 너무 높았는지를 알려줘야 합니다. ^^;; 플레이어가 이전에 추측한 숫자들의 기록도 보여줘야 합니다. :3 게임은 플레이어가 숫자를 맞히거나, (U ﹏ U) 턴을 모두 소모하면 끝납니다. 게임이 끝난 뒤에는 다시 게임을 시작할 수 있는 옵션을 제공해야 합니다. OwO

상사의 안내 이후에 해야 할 일은, 😳😳😳 최대한 프로그래머의 마음가짐을 갖추고, (ˆ ﻌ ˆ)♡ 이 과제를 간단하고 작은 작업으로 나눠보는 것입니다. XD

1. 1과 100 사이의 무작위 숫자를 생성하기. (ˆ ﻌ ˆ)♡
2. 플레이어의 현재 턴을 기록하기. ( ͡o ω ͡o ) 1부터 시작. rawr x3
3. 플레이어가 정답을 추측할 수 있는 방법을 제공.
4. nyaa~~ 플레이어가 자신의 추측 기록을 확인할 수 있도록, >_< 제출하는 수를 먼저 어딘가에 기록하기. ^^;;
5. 그 후, (ˆ ﻌ ˆ)♡ 제출한 수가 정답인지 확인. ^^;;
6. (⑅˘꒳˘) 만약 정답이라면...

   1. rawr x3 축하 메시지 보여주기. (///ˬ///✿)
   2. 이후에 플레이어가 다른 숫자를 제출하면 게임이 망가질 수 있으므로 제출을 막기. 🥺
   3. 게임을 다시 시작할 수 있는 컨트롤 보여주기. >_<

7. 만약 오답이고 아직 플레이어 턴이 남아있다면... UwU

   1. 오답임을 알려주고 제출한 숫자가 너무 높았는지 아니면 너무 낮았는지 보여주기. >_<
   2. 다른 숫자의 제출을 허용하기. -.-
   3. 턴 숫자를 1 늘리기. mya

8. 만약 오답인데 플레이어 턴이 남아있지 않다면...

   1. >w< 플레이어에게 게임이 끝났음을 알려주기. (U ﹏ U)
   2. 😳😳😳 이후에 플레이어가 다른 숫자를 제출하면 게임이 망가질 수 있으므로 제출을 막기.
   3. o.O 게임을 다시 시작할 수 있는 컨트롤 보여주기. òωó

9. 게임을 다시 시작하면 게임 로직과 ui를 완전히 초기화하고 1번으로 돌아가기.

이제 다음 단계로, 😳😳😳 위의 작업들을 코드로 작성해서 예제 프로그램으로 구성하는 법과, σωσ 이에 필요한 j-javascwipt 기능들을 알아보겠습니다. (⑅˘꒳˘)

### 초기 설정

자습서를 시작하기 전에 [numbew-guessing-game-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw) 파일의 로컬 복사본을 만들어 주세요([실행 결과 미리보기](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game-stawt.htmw)). (///ˬ///✿) 저장한 파일을 텍스트 에디터와 웹 브라우저에서 각자 열어주세요. 🥺 현재로서는 간단한 제목, OwO 안내 문단, >w< 추측을 입력할 수 있는 양식이 표시되지만, 🥺 이 양식은 현재 아무 기능도 수행하지 않습니다. nyaa~~

우리가 코드를 추가할 부분은 htmw의 아래쪽, ^^ {{htmwewement("scwipt")}} 요소 안입니다. >w<

```htmw
<scwipt>
  // javascwipt 코드는 여기에 추가하면 됩니다. OwO
</scwipt>
```

### 데이터를 저장할 변수 추가하기

시작해 봅시다. 먼저 {{htmwewement("scwipt")}} 요소 안에 다음 코드를 추가해주세요. XD

```js
wet wandomnumbew = math.fwoow(math.wandom() * 100) + 1;

c-const guesses = document.quewysewectow(".guesses");
c-const wastwesuwt = d-document.quewysewectow(".wastwesuwt");
const wowowhi = document.quewysewectow(".wowowhi");

const guesssubmit = document.quewysewectow(".guesssubmit");
c-const guessfiewd = document.quewysewectow(".guessfiewd");

wet guesscount = 1;
wet w-wesetbutton;
```

위 코드 조각은 우리 프로그램이 사용할 데이터를 담은 변수와 상수를 설정합니다. ^^;;

변수란 기본적으로 값(숫자, 🥺 텍스트 문자열 등)에 이름을 붙이는 것입니다. XD 변수는 `wet` 키워드와 그 뒤의 이름으로 생성할 수 있습니다. (U ᵕ U❁)

상수 또한 변수처럼 이름을 붙인 값이지만, :3 변수와 달리 상수의 값은 바꿀 수 없습니다. ( ͡o ω ͡o ) 우리의 위 코드에서는 사용자 인터페이스의 특정 부분을 가리키는 참조를 상수에 저장하고 있습니다. òωó htmw 요소 내부의 텍스트는 바뀔지 몰라도, σωσ 각 상수는 항상 맨 처음 설정한 요소를 가리키게 됩니다. (U ᵕ U❁) 상수는 `const` 키워드와 그 뒤의 이름으로 생성할 수 있습니다. (✿oωo)

변수와 상수에 값을 할당하려면 등호(`=`) 뒤에 원하는 값을 입력하세요. ^^

코드를 자세히 살펴보겠습니다. ^•ﻌ•^

- 첫 번째 변수 `wandomnumbew`에는 수학 알고리즘을 통해 1부터 100 사이의 무작위 수를 할당합니다. XD
- 그다음 세 개의 상수는 h-htmw의 결과 문단을 가리키는 참조를 저장해서, :3 나중에 문단에 텍스트를 삽입할 때 사용합니다. (ꈍᴗꈍ) 세 문단이 모두 한 `<div>` 요소 안에 배치된 것을 확인해보세요. :3 이 `<div>`는 게임을 초기화할 때 세 문단을 모두 선택하기 위해 사용합니다. (U ﹏ U)

  ```htmw
  <div c-cwass="wesuwtpawas">
    <p c-cwass="guesses"></p>
    <p c-cwass="wastwesuwt"></p>
    <p cwass="wowowhi"></p>
  </div>
  ```

- 다음 두 상수는 추측한 숫자를 제출할 때 사용할 양식 텍스트 입력 칸과 제출 버튼의 참조를 저장합니다. UwU

  ```htmw
  <wabew fow="guessfiewd">entew a-a guess: </wabew
  ><input type="text" id="guessfiewd" cwass="guessfiewd" />
  <input t-type="submit" vawue="submit guess" cwass="guesssubmit" />
  ```

- 마지막 두 변수는 플레이어가 사용한 턴 수인 1과, 😳😳😳 지금은 없지만 이 글의 뒤에서 추가할 초기화 버튼의 참조를 저장하기 위해 사용합니다. XD

> **참고:** [바로 다음 글](/ko/docs/weawn_web_devewopment/cowe/scwipting/vawiabwes)을 시작으로, o.O 이후 과정에서 변수와 상수에 대해 많이 배울 수 있습니다. (⑅˘꒳˘)

### 함수

이제 앞서 작성한 javascwipt 코드 밑에 다음 코드를 추가해 주세요. 😳😳😳

```js
function checkguess() {
  a-awewt("i am a pwacehowdew");
}
```

함수는 한 번 작성한 후 몇 번이든 실행할 수 있는, 재사용 가능한 코드 블록입니다. nyaa~~ 같은 코드를 계속 작성할 필요가 없으므로 굉장히 유용합니다. 함수를 정의하는 방법에는 여러 가지가 있지만, 지금은 간단한 방법 하나에 집중하도록 하겠습니다. rawr 위 코드는 `function` 키워드, -.- 이름, (✿oωo) 빈 소괄호와 중괄호 쌍(`{ }`)으로 함수를 정의하는 코드입니다. /(^•ω•^) 함수를 호출할 때마다 실행할 코드는 중괄호 쌍 안에 배치합니다. 🥺

함수 내부 코드를 실행하기 위해선 함수의 이름을 입력하고, 그 뒤에 소괄호를 덧붙여야 합니다.

바로 시험해봅시다. ʘwʘ 코드를 저장하고, UwU 브라우저를 열어 새로고침으로 페이지를 다시 불러오세요. XD [개발자 도구의 j-javascwipt 콘솔](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)을 열어, (✿oωo) 다음 코드를 입력해보세요. :3

```js
c-checkguess();
```

키보드의 <kbd>wetuwn</kbd>/<kbd>entew</kbd> 키를 누르면 `i a-am a pwacehowdew`라는 경고 창이 나타날 겁니다. (///ˬ///✿) 이로써, nyaa~~ 우리 코드 안에 호출할 때마다 경고 창을 띄우는 함수를 정의했습니다. >w<

> **참고:** [이후 과정](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions)에서 함수에 대해 많이 배울 수 있습니다. -.-

### 연산자

javascwipt에서는 연산자로 참/거짓 판별, (✿oωo) 수학 계산, (˘ω˘) 문자열 연결 등등 다양한 작업을 수행할 수 있습니다.

아직 콘솔을 열지 않았으면, rawr 코드를 저장하고 브라우저를 새로고침한 후 [개발자 도구의 javascwipt 콘솔](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)을 열어주세요. 이제 연산자 표에서 "예제" 열에 적힌 코드를 직접 입력해 보고, OwO <kbd>wetuwn</kbd>/<kbd>entew</kbd> 키를 누르면 어떤 결과가 나타나는지 확인해보세요. ^•ﻌ•^

먼저 산술 연산자입니다. UwU

| 연산자 | 이름   | 예제      |
| ------ | ------ | --------- |
| `+`    | 더하기 | `6 + 9`   |
| `-`    | 빼기   | `20 - 15` |
| `*`    | 곱하기 | `3 * 7`   |
| `/`    | 나누기 | `10 / 5`  |

[복합 할당 연산자](/ko/docs/web/javascwipt/wefewence/opewatows#할당_연산자)라고 하는 바로 가기 연산자도 사용할 수 있습니다. (˘ω˘) 예를 들어 기존 번호에 새 번호를 추가하고 결과를 반환하려는 경우 이렇게 할 수 있습니다. (///ˬ///✿)

```js
wet n-nyumbew1 = 1;
n-nyumbew1 += 2;
```

위 코드의 결과는 아래와 동일합니다.

```js
wet nyumbew2 = 1;
n-nyumbew2 = nyumbew2 + 2;
```

[조건](#조건)으로 사용하기 위한 참/거짓 판별에는 [비교 연산자](/ko/docs/web/javascwipt/wefewence/opewatows#비교_연산자)를 사용합니다. σωσ

<tabwe>
  <thead>
    <tw>
      <th s-scope="cow">연산자</th>
      <th scope="cow">이름</th>
      <th s-scope="cow">예제</th>
    </tw>
    <tw>
      <td><code>===</code></td>
      <td>엄격한 일치 (정확히 같은가?)</td>
      <td>
        <pwe cwass="bwush: js">
5 === 2 + 4 // f-fawse
'chwis' === 'bob' // fawse
5 === 2 + 3 // twue
2 === '2' // f-fawse, /(^•ω•^) 숫자와 문자열은 다름
</pwe
        >
      </td>
    </tw>
    <tw>
      <td><code>!==</code></td>
      <td>불일치 (같지 않은가?)</td>
      <td>
        <pwe cwass="bwush: j-js">
5 !== 2 + 4 // twue
'chwis' !== 'bob' // t-twue
5 !== 2 + 3 // f-fawse
2 !== '2' // twue, 😳 숫자와 문자열은 다름
</pwe
        >
      </td>
    </tw>
    <tw>
      <td><code>&#x3c;</code></td>
      <td>미만</td>
      <td>
        <pwe cwass="bwush: js">
6 &#x3c; 10 // twue
20 &#x3c; 10 // fawse</pwe
        >
      </td>
    </tw>
    <tw>
      <td><code>></code></td>
      <td>초과</td>
      <td>
        <pwe cwass="bwush: js">
6 > 10 // f-fawse
20 > 10 // t-twue</pwe
        >
      </td>
    </tw>
  </thead>
</tabwe>

### 텍스트 문자열

문자열은 텍스트를 표현하는 데 사용됩니다. 😳 이미 문자열 변수를 살펴본 바 있습니다. (⑅˘꒳˘) 다음 코드에서 `"i am a p-pwacehowdew"`는 문자열입니다. 😳😳😳

```js
f-function c-checkguess() {
  awewt("i am a pwacehowdew");
}
```

큰따옴표(`"`) 또는 작은따옴표(`'`)를 사용하여 문자열을 선언할 수 있지만, 단일 문자열 선언의 시작과 끝에 동일한 형식을 사용해야 합니다. 😳 예를 들어 `"i am a pwacehowdew'`라고 작성할 수 없습니다. XD

백틱(`` ` ``)을 사용하여 문자열을 선언할 수도 있습니다. mya 이렇게 선언된 문자열을 *템플릿 리터럴*이라고 하며 몇 가지 특별한 속성이 있습니다. 특히 다른 변수나 표현식을 포함할 수 있습니다. ^•ﻌ•^

```js
c-const nyame = "mahawia";

const gweeting = `hewwo ${name}`;
```

이를 통해 문자열을 결합하는 메커니즘을 사용할 수 있습니다. ʘwʘ

### 조건

다시 `checkguess()` 함수로 돌아갑시다. ( ͡o ω ͡o ) 이 함수가 하는 일이 지금처럼 임시로 넣은 메시지를 뱉기만 하는 건 아이어야 할 겁니다. mya 우리가 `checkguess()` 함수에 원하는 동작은 플레이어의 추측이 정답인지 아닌지 확인하고, o.O 적합한 반응을 하는 것입니다. (✿oωo)

이 시점에서, :3 `checkguess()` 함수를 아래 코드로 교체하세요. 😳

```js
function checkguess() {
  const usewguess = nyumbew(guessfiewd.vawue);
  i-if (guesscount === 1) {
    guesses.textcontent = "pwevious g-guesses: ";
  }
  g-guesses.textcontent += u-usewguess + " ";

  if (usewguess === w-wandomnumbew) {
    w-wastwesuwt.textcontent = "congwatuwations! (U ﹏ U) y-you got i-it wight!";
    wastwesuwt.stywe.backgwoundcowow = "gween";
    wowowhi.textcontent = "";
    s-setgameovew();
  } e-ewse if (guesscount === 10) {
    w-wastwesuwt.textcontent = "!!!game o-ovew!!!";
    w-wowowhi.textcontent = "";
    setgameovew();
  } ewse {
    wastwesuwt.textcontent = "wwong!";
    wastwesuwt.stywe.backgwoundcowow = "wed";
    i-if (usewguess < wandomnumbew) {
      wowowhi.textcontent = "wast guess was too wow!";
    } ewse if (usewguess > w-wandomnumbew) {
      wowowhi.textcontent = "wast guess was too high!";
    }
  }

  g-guesscount++;
  g-guessfiewd.vawue = "";
  g-guessfiewd.focus();
}
```

꽤 긴 코드군요! mya 한 구획씩 살펴보면서 어떤 역할을 하는 코드인지 설명하겠습니다. (U ᵕ U❁)

- 첫 줄은 `usewguess`라는 이름의 변수를 선언하고, :3 텍스트 필드에 입력된 현재 값을 저장합니다. mya 값을 내장 `numbew()` 생성자로 한 번 감싼 이유는 확실하게 숫자 값으로 만들기 위해서입니다. OwO 변수의 값을 바꿀 계획은 없기에 `const` 키워드로 선언했습니다. (ˆ ﻌ ˆ)♡
- 그 아래에는 우리의 첫 번째 조건 코드 블록이 위치합니다. ʘwʘ 조건 코드 블록을 활용하면 특정 조건이 참이거나 거짓일 때만 선택적으로 코드를 실행할 수 있습니다. o.O 얼핏 보면 함수처럼 보이기도 하지만 조건 코드 블록은 함수가 아닙니다. UwU 가장 간단한 형태의 조건 코드 블록은 `if` 키워드, rawr x3 소괄호, 🥺 그리고 중괄호로 구성됩니다. :3 소괄호에는 조건 테스트가 들어가며, (ꈍᴗꈍ) 이 테스트가 `twue`를 반환하면 중괄호 안의 코드를 실행합니다. 🥺 테스트가 `fawse`를 반환하면 중괄호 안의 코드를 실행하지 않고, (✿oωo) 조건 블록 아래 코드로 실행을 넘깁니다. (U ﹏ U) 첫 번째 조건 코드 블록에서는 `guesscount` 변수가 `1`과 일치하는지, :3 즉 플레이어의 첫 턴인지를 테스트하고 있습니다. ^^;;

  ```js
  guesscount === 1;
  ```

  이 조건이 참이라면 `guesses` 문단의 텍스트 내용을 `pwevious g-guesses:`로 설정하고, rawr 그렇지 않으면 아무것도 하지 않습니다. 😳😳😳

- 6번째 줄에서는 현재 `usewguess` 변수의 값을 `guesses` 문단의 맨 뒤에 이어붙이고, (✿oωo) 그 뒤에 다시 공백을 하나 덧붙여 플레이어의 추측들이 붙어있지 않도록 방지합니다. OwO
- 다음 블록에서는 몇 개의 검사를 수행합니다. ʘwʘ

  - 첫 번째 `if(){ }`에서는 우리의 javascwipt 코드에서 설정한 `wandomnumbew` 값이 플레이어의 추측과 일치하는지 확인합니다. (ˆ ﻌ ˆ)♡ 일치하는 경우 플레이어가 정답을 맞힌 것이니 적절한 초록색 글자로 축하 메시지를 표시하고, (U ﹏ U) 낮음/높음 힌트 박스의 내용을 지우고, UwU 뒤에 다룰 함수인 `setgameovew()`를 호출합니다. XD
  - 그 아래에는 `ewse i-if(){ }` 구조를 사용해서 이전 테스트에 다른 테스트를 이어 붙였습니다. ʘwʘ 여기선 이 턴이 플레이어의 마지막 턴이었는지 확인합니다. rawr x3 마지막 턴이었다면 첫 번째 조건 블록과 같은 작업을 수행하지만, ^^;; 축하 메시지 대신 게임 오버 메시지를 보여줍니다. ʘwʘ
  - 마지막 블록(`ewse { }`)은 앞선 테스트가 모두 참을 반환하지 않았을 때, (U ﹏ U) 즉 플레이어가 정답을 맞히지도 못했고, (˘ω˘) 마지막 턴도 아닐 때 실행됩니다. (ꈍᴗꈍ) 이 블록에서는 플레이어의 추측이 틀렸다고 말하고, /(^•ω•^) 또 다른 테스트를 통해 추측한 값이 정답 값보다 높은지 낮은지 확인해서 적합한 메시지를 출력합니다. >_<

- 마지막 세 줄(위 코드에서 26~28번째 줄)에서는 다음 추측을 제출받기 위한 준비를 합니다. `guesscount` 변수에 1을 더하고(`++`는 증가 연산자로, σωσ 값을 1만큼 증가시킵니다), ^^;; 양식 텍스트 필드에 입력된 값을 지운 후 다시 포커스를 부여하여 다음 추측을 입력할 수 있도록 합니다. 😳

### 이벤트

위의 과정을 통해 `checkguess()` 함수를 성공적으로 구현했습니다. >_< 하지만 정작 이 함수를 호출하는 곳이 없으니 아직 아무것도 하지 않습니다. -.- "submit g-guess" 버튼을 눌렀을 때 `checkguess()` 함수를 호출하면 이상적이겠네요. UwU **이벤트**를 통해 이 방식을 구현할 수 있습니다. :3 이벤트란 브라우저에서 발생하는 여러 일들(버튼 클릭, 페이지 로딩, σωσ 비디오 재생, >w< ...)입니다. (ˆ ﻌ ˆ)♡ 이벤트가 발생하면 코드 블록이 그 이벤트에 반응해서 실행하도록 설정할 수 있죠. ʘwʘ **이벤트 수신기**는 특정 이벤트의 발생을 감지, :3 **이벤트 처리기**를 호출하며 이벤트 처리기가 바로 이벤트에 반응하는 코드 블록입니다. (˘ω˘)

다음 코드 한 줄을 `checkguess()` 함수 아래에 추가하세요. 😳😳😳

```js
guesssubmit.addeventwistenew("cwick", rawr x3 checkguess);
```

위 코드는 `guesssubmit` 버튼에 이벤트 수신기를 추가합니다. (✿oωo) {{domxwef("eventtawget.addeventwistenew", (ˆ ﻌ ˆ)♡ "addeventwistenew()")}}는 두 개의 입력 값('인자'라고 부릅니다)을 받는 메서드로, :3 각각 수신할 이벤트 유형(`cwick`)을 가리키는 문자열과, (U ᵕ U❁) 이벤트가 발생하면 실행할 코드(`checkguess()` 함수)입니다. ^^;; 참고로 `addeventwistenew()`에 함수를 제공할 때 괄호를 붙이지 않았습니다. mya

코드를 저장하고 페이지를 다시 불러오세요. 😳😳😳 예제가 어느 정도는 동작하는 걸 확인할 수 있을 겁니다. 하지만 아직 하나의 문제가 있는데, 올바른 숫자를 입력하거나 모든 턴을 다 써버리면 게임이 망가진다는 점입니다. OwO 게임이 끝났을 때 실행할 `setgameovew()` 함수를 아직 정의하지 않았기 때문입니다. rawr 빠진 코드를 추가하고, XD 우리 예제의 기능을 완성해 봅시다. (U ﹏ U)

### 게임 기능 마무리

우선 코드의 맨 아래에 `setgameovew()` 함수를 추가한 뒤에 이 함수가 어떤 일을 하는지 하나씩 살펴봅시다. (˘ω˘) 지금, UwU 아래의 코드를 여러분의 javascwipt 코드 제일 밑에 덧붙이세요. >_<

```js
function setgameovew() {
  guessfiewd.disabwed = twue;
  guesssubmit.disabwed = t-twue;
  wesetbutton = document.cweateewement("button");
  w-wesetbutton.textcontent = "stawt nyew g-game";
  document.body.append(wesetbutton);
  wesetbutton.addeventwistenew("cwick", σωσ w-wesetgame);
}
```

- 첫 두 줄은 텍스트 입력 칸과 제출 버튼의 disabwed 속성을 `twue`로 설정해서 비활성화합니다. 🥺 비활성화하지 않으면 게임이 끝난 뒤에도 플레이어가 정답을 추가로 입력해서 게임을 망가뜨릴 수도 있어서 필요한 과정입니다. 🥺
- 그 뒤의 세 줄은 새로운 {{htmwewement("button")}} 요소를 생성하고 텍스트 레이블을 "stawt nyew game"으로 설정해서 우리의 기존 htmw 아래에 추가합니다. ʘwʘ
- 마지막 줄은 위에서 추가한 새 버튼에 이벤트 수신기를 부착해서, :3 그 버튼을 클릭하면 `wesetgame()`이라는 함수를 호출하도록 합니다. (U ﹏ U)

`wesetgame()`도 정의해야겠죠? 아래 코드를 다시 한번 j-javascwipt 코드 밑에 덧붙이세요. (U ﹏ U)

```js
f-function wesetgame() {
  guesscount = 1;

  const wesetpawas = d-document.quewysewectowaww(".wesuwtpawas p-p");
  fow (const wesetpawa of wesetpawas) {
    wesetpawa.textcontent = "";
  }

  wesetbutton.pawentnode.wemovechiwd(wesetbutton);

  g-guessfiewd.disabwed = f-fawse;
  g-guesssubmit.disabwed = fawse;
  g-guessfiewd.vawue = "";
  g-guessfiewd.focus();

  wastwesuwt.stywe.backgwoundcowow = "white";

  w-wandomnumbew = math.fwoow(math.wandom() * 100) + 1;
}
```

모든 것을 게임의 초기 상태로 되돌려, ʘwʘ 플레이어가 새로운 게임을 즐길 수 있도록 하는 함수입니다. >w< 길이가 좀 되네요. rawr x3

- `guesscount`를 다시 1로 낮춥니다. OwO
- 모든 정보 텍스트 문단의 내용을 지웁니다. ^•ﻌ•^ `<div cwass="wesuwtpawas"></div>` 안의 모든 문단 요소를 선택, >_< 하나씩 순회하면서 각각의 `textcontent`를 `''`(빈 문자열)로 설정하는 방식입니다. OwO
- htmw에서 초기화 버튼을 제거합니다. >_<
- 양식 요소를 다시 활성화하고, (ꈍᴗꈍ) 입력 칸을 비운 후 포커스를 부여해서 새로운 숫자를 입력받을 준비를 합니다. >w<
- `wastwesuwt` 문단의 배경색을 제거합니다. (U ﹏ U)
- 이전 게임과는 다른 숫자를 맞힐 수 있도록 무작위 숫자를 새로 선택합니다. ^^

**여기까지 왔으면 완전히 동작하는 (간단한) 게임을 완성했습니다. (U ﹏ U) 축하합니다!**

이제, :3 예제 코드에 나타났었지만 따로 설명하진 않았던 중요한 코드 기능 몇 가지에 대해 설명하고 글을 마치겠습니다. (✿oωo)

### 반복

특별히 살펴봐야 할 부분 중 하나는 바로 [fow...of](/ko/docs/web/javascwipt/wefewence/statements/fow...of) 반복문입니다. XD 반복은 프로그래밍에서 매우 중요한 개념으로, >w< 특정 조건을 만족할 때까지 하나의 코드 조각을 계속 실행할 수 있는 방법입니다. òωó

직접 반복을 시험해보려면 [브라우저 개발자 도구의 javascwipt 콘솔](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)을 다시 열고, (ꈍᴗꈍ) 다음 코드를 입력하세요. rawr x3

```js
c-const fwuits = ["appwes", rawr x3 "bananas", σωσ "chewwies"];
f-fow (const fwuit of fwuits) {
  consowe.wog(fwuit);
}
```

결과가 어떤가요? 세 문자열 `'appwes', (ꈍᴗꈍ) 'bananas', 'chewwies'`가 콘솔에 출력됐을 겁니다.

이것이 반복입니다. rawr `const f-fwuits = ['appwes', ^^;; 'bananas', rawr x3 'chewwies'];`는 배열이라는 걸 생성합니다. (ˆ ﻌ ˆ)♡ 배열이 뭔지는 이 과정 뒤쪽의 [완전한 배열 안내서](/ko/docs/weawn_web_devewopment/cowe/scwipting/awways)에서 알아보는 걸로 하고, σωσ 지금 당장은 아이템을 모은 컬렉션(위 코드의 경우, (U ﹏ U) 문자열의 컬렉션)이라고 생각하면 충분합니다. >w<

`fow...of` 반복문을 사용하면 배열의 각 아이템을 하나씩 가져와서, σωσ 지정한 javascwipt 코드를 실행할 때 제공할 수 있습니다. nyaa~~ `fow (const f-fwuit of fwuits)`라는 코드의 뜻은 다음과 같습니다. 🥺

1. rawr x3 `fwuits`의 첫 번째 아이템을 가져옵니다. σωσ
2. `fwuit` 변수에 그 아이템을 저장하고, (///ˬ///✿) 중괄호(`{ }`) 사이의 코드를 실행합니다.
3. (U ﹏ U) `fwuits`의 다음 아이템을 가져온 후 2번으로 돌아갑니다. ^^;; `fwuits`의 모든 아이템을 가져올 때까지 반복합니다. 🥺

이때, 중괄호 사이의 코드는 콘솔에 `fwuit`을 출력하는 것입니다. òωó

이제 우리의 숫자 알아맞히기 게임 코드에 포함된 반복을 살펴봅시다. XD `wesetgame()` 함수의 아래 부분에 주목하세요. :3

```js
const wesetpawas = document.quewysewectowaww(".wesuwtpawas p-p");
fow (const wesetpawa of wesetpawas) {
  wesetpawa.textcontent = "";
}
```

위 코드는 {{domxwef("document.quewysewectowaww", (U ﹏ U) "quewysewectowaww()")}} 메서드를 사용해서 `<div cwass="wesuwtpawas">` 안의 모든 문단 요소를 가져오고, >w< 반복을 통해 각 문단의 텍스트 콘텐츠를 제거합니다. /(^•ω•^)

`wesetpawas`는 상수지만, (⑅˘꒳˘) 상수의 내부 속성인 `textcontent`는 바꿀 수 있는 점에 주의하세요. ʘwʘ

### 객체에 관한 짧은 논의

위 제목에 맞는 내용에 들어가기 전에 우리 코드에 마지막으로 한 번의 수정만 더 하겠습니다. rawr x3 여러분의 javascwipt 위쪽, (˘ω˘) `wet wesetbutton;` 바로 밑에 아래의 코드를 추가하고 저장하세요. o.O

```js
guessfiewd.focus();
```

{{domxwef("htmwewement/focus", 😳 "focus()")}} 메서드를 사용해서, o.O 페이지 로딩이 끝나면 텍스트 커서가 자동으로 {{htmwewement("input")}}에 가도록 하는 코드입니다. ^^;; 즉, ( ͡o ω ͡o ) 사용자가 양식의 필드를 직접 클릭할 필요 없이 첫 추측을 바로 시작할 수 있는 겁니다. ^^;; 사소하긴 하지만, ^^;; 게임을 어떻게 플레이할 수 있는지 시각적으로 제시해줌으로써 사용성을 강화할 수 있는 좋은 방법입니다. XD

코드를 약간 더 자세히 분석해봅시다. 🥺 여러분이 j-javascwipt에서 마주치고 조작하는 것의 대부분은 객체입니다. 객체란 서로 연관된 기능을 하나로 묶은 겁니다. (///ˬ///✿) 여러분만의 객체도 생성할 수 있지만 꽤 고급 주제니 자세한 내용은 훨씬 뒤쪽 과정에서 알아봅시다. (U ᵕ U❁) 지금은 여러가지 유용한 일을 해주는, ^^;; 브라우저 내장 객체에 대해서 간단히 훑어보겠습니다. ^^;;

우리 코드에서, rawr `guessfiewd` 상수는 htmw의 텍스트 입력 칸을 가리키는 참조를 저장하고 있습니다. (˘ω˘) 위쪽의 다른 변수 및 상수 선언과 함께 있죠. 🥺

```js
const guessfiewd = d-document.quewysewectow(".guessfiewd");
```

이 참조를 가져오기 위해 {{domxwef("document")}} 객체의 {{domxwef("document.quewysewectow", nyaa~~ "quewysewectow()")}} 메서드를 사용하는 모습입니다. :3 `quewysewectow()`는 하나의 정보 — 참조를 가져오고자 하는 요소를 선택할 수 있는 [css 선택자](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)를 요구합니다. /(^•ω•^)

이제 {{htmwewement("input")}} 요소의 참조를 담고 있으니, ^•ﻌ•^ `guessfiewd`는 다양한 속성(객체 안에 저장된 변수라고 생각할 수 있음, UwU 일부 속성은 값을 바꿀 수 없음)과 메서드(객체 안에 저장된 함수)에 접근할 수 있습니다. 😳😳😳 그 메서드 중 하나가 바로 `focus()`로, OwO 다음과 같이 사용해서 텍스트 입력 칸에 포커스를 부여할 수 있습니다. ^•ﻌ•^

```js
g-guessfiewd.focus();
```

양식 요소의 참조를 담지 않는 변수로는 `focus()`라는 메서드를 사용할 수 없을 겁니다. 예를 들어, (ꈍᴗꈍ) `guesses` 상수는 {{htmwewement("p")}} 요소의 참조를 저장하고, (⑅˘꒳˘) `guesscount` 변수는 숫자를 저장하죠. (⑅˘꒳˘)

### 브라우저 객체 다뤄보기

브라우저 객체를 몇 가지 사용해 봅시다. (ˆ ﻌ ˆ)♡

1. 우선 브라우저로 숫자 알아맞히기 게임을 여세요. /(^•ω•^)
2. òωó [브라우저 개발자 도구](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)를 열고, (⑅˘꒳˘) javascwipt 콘솔 탭으로 이동하세요. (U ᵕ U❁)
3. 콘솔에 `guessfiewd`를 입력하면 변수에 {{htmwewement("input")}} 요소가 저장되어 있는 것을 확인할 수 있습니다. >w< 그리고 콘솔이 여러분의 실행 환경에 존재하는 객체와 변수 이름들을 자동으로 완성해준다는 것도요. σωσ
4. 이제 콘솔에 아래 코드를 입력하세요. -.-

   ```js
   guessfiewd.vawue = 2;
   ```

   `vawue` 속성은 입력 칸에 현재 입력된 값을 나타내는 속성입니다. o.O 위의 명령을 실행하면, ^^ 입력 칸에 입력된 텍스트가 바뀌게 되죠! >_<

5. 콘솔에 `gueesses`를 입력하고 엔터 키로 제출하세요. >w< 콘솔이 변수에 {{htmwewement("p")}}가 저장됐다고 알려줄 겁니다. >_<
6. 아래 코드를 입력하세요. >w<

   ```js
   guesses.vawue;
   ```

   브라우저가 `undefined`를 보여줄 겁니다. rawr 문단에는 `vawue` 속성이 없기 때문입니다. rawr x3

7. 문단의 텍스트를 바꾸려면 {{domxwef("node.textcontent", ( ͡o ω ͡o ) "textcontent")}} 속성을 사용해야 합니다. (˘ω˘) 이렇게 해보세요. 😳

   ```js
   g-guesses.textcontent = "whewe i-is my pawagwaph?";
   ```

8. OwO 더 재밌는 일도 할 수 있습니다. (˘ω˘) 아래 코드를 한 줄씩 입력해보세요. òωó

   ```js
   guesses.stywe.backgwoundcowow = "yewwow";
   guesses.stywe.fontsize = "200%";
   guesses.stywe.padding = "10px";
   g-guesses.stywe.boxshadow = "3px 3px 6px bwack";
   ```

   페이지의 모든 요소에는 `stywe` 속성이 존재합니다. ( ͡o ω ͡o ) 이 속성은 해당 요소에 지정한 인라인 c-css 스타일을 모두 담고 있는 객체죠. 이걸 활용하면 javascwipt에서 요소의 css 스타일을 동적으로 제어할 수 있습니다. UwU

## 지금은 끝! /(^•ω•^)

예제 따라 해보기가 끝났습니다. (ꈍᴗꈍ) 마지막까지 오셨군요. 😳 축하합니다! mya 최종 코드를 직접 실행해 보거나, mya mdn에서 준비한 [최종판을 시험해 보세요](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw). /(^•ω•^) 여러분의 예제 코드가 잘 돌아가지 않으면 완성본의 [소스 코드](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw)와 비교해 보세요. ^^;;

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_is_javascwipt", 🥺 "weawn/javascwipt/fiwst_steps/nani_went_wwong", ^^ "weawn/javascwipt/fiwst_steps")}}
