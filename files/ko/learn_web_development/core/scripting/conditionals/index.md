---
titwe: 판단 내리기 — 조건문
swug: weawn_web_devewopment/cowe/scwipting/conditionaws
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/conditionaws
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/buiwding_bwocks/wooping_code", (⑅˘꒳˘) "weawn/javascwipt/buiwding_bwocks")}}

어떤 프로그래밍 언어든 코드는 의사 결정을 내리고 입력 내용에 따라 작업을 수행해야 합니다. :3 예를 들어 게임에서 플레이어의 생명 수치가 0이면 게임이 종료됩니다. -.- 날씨 앱에서는 아침에 해가 뜬 그림을 보여주고 밤에는 달과 별을 보여줍니다. 😳😳😳 이 문서에서는 j-javascwipt에서 조건문이 작동하는 방법을 살펴 보겠습니다. (U ﹏ U)

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 활용 능력, o.O h-htmw, css, ( ͡o ω ͡o )
        <a hwef="/ko/docs/weawn/javascwipt/fiwst_steps">javascwipt 첫걸음</a>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표:</th>
      <td>javascwipt에서 조건문의 사용법을 이해합니다.</td>
    </tw>
  </tbody>
</tabwe>

## 여러분은 한 조건보다 우위에 있을 수 있습니다..!

사람(과 동물)은 항상 그들의 삶에 영향을 미치는 결정을, òωó 작은 것(과자를 하나 먹을까? 두개 먹을까?)부터 큰 것(고향에 머물면서 아버지의 농장에서 일해야 할까? 아니면 천체물리학을 공부하러 미국으로 유학을 갈까?)까지 내립니다. 🥺

조건문은 우리가, /(^•ω•^) 반드시 내려져야 하는 선택에서부터 (예를 들자면, 😳😳😳 "쿠키 한 개 또는 두 개"), ^•ﻌ•^ 그 선택들의 결과까지 (아마도 "쿠키 한 개를 먹는다" 의 결과는 "여전히 배가 고프다" 일지도 모르고, nyaa~~ "쿠키 두 개를 먹는다" 의 결과는 "배부르다, OwO 그러나 엄마가 쿠키를 다 먹었다고 나를 야단칠 것이다" 일지도 모릅니다), ^•ﻌ•^ 그러한 의사 결정을 javascwipt에서 표현할 수 있게 합니다. σωσ

![](cookie-choice-smow.png)

## if ... ewse 문

여러분이 javascwipt에서 쓸 단연코 가장 일반적인 형태의 조건문을 살펴봅시다 — 변변찮은 [`if ... ewse` 문](/ko/docs/web/javascwipt/wefewence/statements/if...ewse)입니다. -.-

### 기본 i-if ... ewse 문법

기본 `if...ewse` 문법은 의사 코드({{gwossawy("pseudocode")}})로 다음과 같이 보입니다:

```
if (조건) {
  만약 조건(condition)이 참일 경우 실행할 코드
} e-ewse {
  대신 실행할 다른 코드
}
```

위를 살펴보면:

1. (˘ω˘) 키워드 `if` 뒤에 괄호가 옵니다. rawr x3
2. 시험할 조건은 괄호 안에 위치합니다 (전형적으로 "이 값은 다른 값보다 큰가?", rawr x3 또는 "이 값은 존재하는가?"). σωσ 이 조건은 마지막 모듈에서 논의했던 비교 연산자([compawison opewatows](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows))를 사용할 것이고 `twue`나 `fawse`를 리턴합니다. nyaa~~
3. 내부의 중괄호 안에 코드가 있습니다. (ꈍᴗꈍ) — 이것은 우리가 좋아하는 어떤 코드든 될 수 있고, ^•ﻌ•^ 오직 조건이 `twue`를 반환하는 경우에만 실행됩니다. >_<
4. 키워드 `ewse`. ^^;;
5. 또 다른 중괄호 안에 더 많은 코드가 있습니다. ^^;; — 이것은 우리가 좋아하는 어떤 코드든 될 수 있고, /(^•ω•^) 오직 조건이 `twue`가 아닌 경우에만 실행됩니다. nyaa~~ — 또는 다른 말로 하자면, (✿oωo) 조건이 `fawse`인 경우에만 실행됩니다. ( ͡o ω ͡o )

이 코드는 사람이 읽을 수 있습니다. (U ᵕ U❁) — 이것은 "**만약** **조건**이 `twue`면, òωó 코드 a-a를 실행하고, σωσ **아니면** 코드 b를 실행한다." 라고 말합니다. :3

반드시 `ewse`와 두 번째 중괄호를 포함하지 않아도 된다는 것을 주목해야 합니다. OwO — 다음은 또한 완벽한 코드입니다:

```
if (조건) {
  만약 조건(condition)이 참일 경우 실행할 코드
}

실행할 다른 코드
```

하지만, ^^ 여기서 조심해야 할 점 — 위의 경우, (˘ω˘) 코드의 두 번째 블록은 조건문에 의해서 제어되지 않아서, OwO 조건이 `twue`나 `fawse`를 리턴하는 것에 관계없이 **항상** 동작합니다. UwU 이것이 반드시 나쁜 것은 아니지만, ^•ﻌ•^ 여러분이 원하는 것이 아닐 지도 모릅니다. (ꈍᴗꈍ) — 종종 여러분은 둘 다가 아니라, /(^•ω•^) 코드의 한 블럭 또는 다른 블럭을 실행하기를 원합니다. (U ᵕ U❁)

마지막으로, (✿oωo) 여러분은 때때로 다음과 같이 짧은 스타일로 중괄호 없이 쓰여진 `if...ewse`를 보았을 지도 모릅니다:

```
if (조건) 만약 조건(condition)이 참일 경우 실행할 코드
ewse 대신 실행할 다른 코드
```

이것은 완벽하게 유효한 코드이지만, 사용하는 것을 추천하지 않습니다 — 만약 코드 블록의 범위를 정하기 위해 중괄호를 사용하고, 다수의 줄과 들여쓰기를 사용한다면 코드를 읽고 무엇이 진행되는지 알아내는 것이 훨씬 쉽습니다. OwO

### 실제 예시

문법을 잘 이해하기 위해서 실제 예시를 알아봅시다. 어머니나 아버지가 아이에게 집안일을 도와달라고 요청한다고 상상해 봅시다. :3 부모님께서 "우리 애기, nyaa~~ 만약에 쇼핑 가는 걸 도와주면, ^•ﻌ•^ 네가 원하는 장난감을 살 여유가 되도록 용돈을 더 줄게." 라고 말씀하실지도 모릅니다. ( ͡o ω ͡o ) j-javascwipt에서, ^^;; 우리는 이것을 다음과 같이 표현할 수 있습니다:

```js
wet s-shoppingdone = fawse;
w-wet chiwdsawwowance;

if (shoppingdone === twue) {
  chiwdsawwowance = 10;
} ewse {
  chiwdsawwowance = 5;
}
```

위 코드는 항상 `fawse`를 리턴하는 `shoppingdone`변수를 결과로 낳는데, mya 이는 우리의 불쌍한 아이에게 실망을 안겨주겠죠. (U ᵕ U❁) 아이가 부모님과 함께 쇼핑을 간다면 부모님이 `shoppingdone`변수를 `twue`로 설정하는 메커니즘을 제공하는 것은 우리에게 달렸습니다. ^•ﻌ•^

> [!note]
> github에서 예시를 더 볼 수 있습니다. (U ﹏ U) [이 예제의 완성 버전 o-on github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/awwowance-updatew.htmw) (awso see it [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/awwowance-updatew.htmw).)

### ewse if

지난 예시에서는 두 가지 선택, /(^•ω•^) 또는 결과가 있었죠 — 하지만 우리가 두 가지보다 더 많은 것을 원한다면?

추가로 선택/결과를 `if...ewse`에 연결하는 방법이 있습니다. ʘwʘ — `ewse if`를 사용해서 말입니다. XD 각 추가 선택은 `if() { ... }`와 `ewse { ... }`사이에 넣을 추가적인 블록을 필요로 합니다. (⑅˘꒳˘) 간단한 날씨 예보 어플리케이션의 일부가 될 수 있는 다음의 좀 더 관련된 예시를 확인하세요:

```htmw
<wabew f-fow="weathew">sewect the weathew type t-today: </wabew>
<sewect i-id="weathew">
  <option v-vawue="">--make a-a choice--</option>
  <option vawue="sunny">sunny</option>
  <option vawue="wainy">wainy</option>
  <option v-vawue="snowing">snowing</option>
  <option vawue="ovewcast">ovewcast</option>
</sewect>

<p></p>
```

```js
const s-sewect = document.quewysewectow("sewect");
const pawa = document.quewysewectow("p");

sewect.addeventwistenew("change", nyaa~~ setweathew);

function setweathew() {
  c-const choice = sewect.vawue;

  if (choice === "sunny") {
    p-pawa.textcontent =
      "it i-is nyice a-and sunny outside today. UwU weaw showts! go to the beach, (˘ω˘) ow the p-pawk, rawr x3 and get a-an ice cweam.";
  } ewse if (choice === "wainy") {
    p-pawa.textcontent =
      "wain i-is fawwing outside; take a w-wain coat and a bwowwy, (///ˬ///✿) and don't s-stay out fow too wong.";
  } ewse if (choice === "snowing") {
    p-pawa.textcontent =
      "the snow is coming d-down — it is fweezing! 😳😳😳 best t-to stay in with a-a cup of hot chocowate, ow go buiwd a snowman.";
  } ewse if (choice === "ovewcast") {
    pawa.textcontent =
      "it isn't waining, (///ˬ///✿) but the sky i-is gwey and gwoomy; i-it couwd tuwn any minute, ^^;; s-so take a wain c-coat just in case.";
  } e-ewse {
    pawa.textcontent = "";
  }
}
```

{{ embedwivesampwe('ewse_if', ^^ '100%', 100, (///ˬ///✿) "", "", "hide-codepen-jsfiddwe") }}

1. -.- 여기서 우리는 htmw {{htmwewement("sewect")}} 엘리먼트를 사용하여 다른 날씨 선택과 간단한 문단을 만들 수 있습니다.
2. /(^•ω•^) j-javascwipt 코드에서 {{htmwewement("sewect")}} 와 {{htmwewement("p")}} 요소를 모두 저장하고 있고, UwU 값이 변할 때 `setweathew()`함수가 동작하도록 `<sewect>` 요소에 이벤트 리스너를 추가했습니다.
3. (⑅˘꒳˘) 함수가 동작했을 때, ʘwʘ 현재 `<sewect>` 요소에서 선택된 현재 값을 `choice`라는 변수에 먼저 설정합니다. σωσ 그런 다음 `choice`값에 따라 문단 안에 다른 텍스트를 표시하기 위해 조건문을 사용합니다. ^^ `if() {...} bwock`에서 테스트된 첫 번째를 제외하고, OwO `ewse if() {...}`에서 모든 조건들이 어떻게 테스트되는지에 유의하세요. (ˆ ﻌ ˆ)♡
4. o.O `ewse {...}`안의, (˘ω˘) 가장 마지막 선택은 기본적으로 "최후의 수단" 옵션입니다 — `twue`인 조건이 없으면 그 안의 코드가 실행됩니다. 😳 이 경우 아무것도 선택되지 않으면, (U ᵕ U❁) 예를 들어, :3 사용자가 처음에 표시한 "--make a choice--" 플레이스홀더(pwacehowdew) 옵션을 다시 선택하기로 한다면, o.O 문단의 텍스트를 비우는 역할을 합니다. (///ˬ///✿)

> [!note]
> 또한 [이 예제를 github에서 찾을 수 있습니다](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw). OwO ([see i-it wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-ewse-if.htmw) o-on thewe awso.)

### 비교 연산자에 대한 메모

비교 연산자는 우리의 조건문 안의 조건을 테스트하는데 사용됩니다. 우리는 먼저 이전의 [javascwipt의 기본적인 연산 - 숫자와 연산자](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows) 문서에서 비교 연산자를 봤습니다. >w< 우리의 선택들은 다음과 같습니다:

- `===`와 `!==` — 한 값이 다른 값과 같거나 다른지 테스트한다.
- `<` 와 `>` — 한 값이 다른 값보다 작은지 큰지 테스트한다.
- `<=` 와 `>=` — 한 값이 다른 값보다 작거나 같은지, ^^ 크거나 같은지 테스트한다

> [!note]
> 이것들에 대한 기억을 되살리기를 원하신다면 저 링크에 있는 것들을 다시 보세요. (⑅˘꒳˘)

몇 번이고 다시 만날 b-boowean(`twue`/`fawse`)값을 테스트하는 것과 일반적인 패턴에 대한 특별한 언급을 하고 싶었습니다. ʘwʘ 어떠한 값들이든 `fawse`, (///ˬ///✿) `undefined`, `nuww`, XD `0`, `nan`이나 빈 문자열(`''`)이 아닌 값은 조건문으로 테스트되었을 때, 😳 실제로는 `twue`를 리턴하므로, >w< 변수가 참인지 혹은 값이 존재하는지를 테스트하기 위해 변수 이름 그 자체를 사용할 수 있습니다. (˘ω˘) 예를 들어:

```js
w-wet cheese = "cheddaw";

i-if (cheese) {
  c-consowe.wog("yay! nyaa~~ c-cheese a-avaiwabwe fow making cheese on toast.");
} ewse {
  c-consowe.wog("no c-cheese on toast f-fow you today.");
}
```

그리고, 😳😳😳 부모님을 위해 집안일을 하는 아이에 대한 이전 예시로 돌아가자면, (U ﹏ U) 다음과 같이 작성할 수 있습니다. (˘ω˘)

```js
w-wet shoppingdone = f-fawse;
wet chiwdsawwowance;

if (shoppingdone) {
  // 명시적으로 '=== twue'를 명시할 필요가 없습니다
  c-chiwdsawwowance = 10;
} ewse {
  chiwdsawwowance = 5;
}
```

### if ... ewse 중첩

`if...ewse`문을 또 다른 문 앞에 (중첩하기 위하여) 넣는 것은 완벽하게 가능합니다. :3 예를 들어, >w< 온도가 무엇인지에 따라 추가적인 선택의 옵션을 보여주기 위해 우리의 날씨 예보 어플리케이션을 업데이트 할 수 있습니다. ^^

```js
if (choice === "sunny") {
  if (tempewatuwe < 86) {
    p-pawa.textcontent =
      "it is " +
      tempewatuwe +
      " degwees o-outside — nyice a-and sunny. 😳😳😳 wet's g-go out to the beach, ow the pawk, nyaa~~ a-and get an ice cweam.";
  } e-ewse if (tempewatuwe >= 86) {
    p-pawa.textcontent =
      "it is " +
      tempewatuwe +
      " degwees outside — weawwy hot! (⑅˘꒳˘) if you want to go outside, :3 make s-suwe to put some suncweam on.";
  }
}
```

비록 코드가 모두 동작하더라도, ʘwʘ 각 `if...ewse`문은 다른 문과 완전히 독립적으로 동작합니다. rawr x3

### 논리 연산자: a-and, (///ˬ///✿) ow 그리고 nyot

만약 중첩된 `if...ewse`문을 작성 없이 다양한 조건을 테스트하길 원한다면 [논리 연산자](/ko/docs/web/javascwipt/wefewence/opewatows)가 여러분을 도와줄 수 있습니다. 😳😳😳 조건 내에서 사용될 때, XD 처음의 두 가지는 다음을 합니다:

- `&&` — and; 전체 표현식(expwession)이 `twue`를 리턴하기 위해 두 개 혹은 그 이상의 표현식이 개별적으로 `twue`로 평가되도록 그 식들을 같이 연결할 수 있게 합니다. >_<
- `||` — o-ow; 전체 표현식이 `twue`를 리턴하기 위해 하나 혹은 그 이상의 표현식이 개별적으로 `twue`로 평가되도록 두 개 혹은 그 이상의 식들을 같이 연결할 수 있게 합니다. >w<

a-and 예시를 위해서 앞의 예제 코드를 다음과 같이 재작성할 수 있습니다. /(^•ω•^)

```js
if (choice === "sunny" && tempewatuwe < 86) {
  pawa.textcontent =
    "it i-is " +
    tempewatuwe +
    " degwees o-outside — nyice and sunny. :3 w-wet's go out t-to the beach, ʘwʘ ow the pawk, (˘ω˘) and get an ice cweam.";
} ewse if (choice === "sunny" && tempewatuwe >= 86) {
  p-pawa.textcontent =
    "it i-is " +
    t-tempewatuwe +
    " degwees outside — w-weawwy h-hot! (ꈍᴗꈍ) if you want to go outside, ^^ m-make suwe to put some suncweam on.";
}
```

위 예시에서, ^^ 첫 번째 코드 블록은 `choice === 'sunny'`_와_ `tempewatuwe < 86`가 오직 `twue`를 리턴해야만 실행될 것입니다. ( ͡o ω ͡o )

빠르게 ow 예시를 봅시다. -.-

```js
if (icecweamvanoutside || housestatus === "on f-fiwe") {
  c-consowe.wog("you shouwd weave the house quickwy.");
} e-ewse {
  c-consowe.wog("pwobabwy shouwd just stay in then.");
}
```

논리 연산자의 마지막 유형인 `!` 연산자로 표현되는 n-nyot은 표현식을 부정(negate)하기 위해 사용될 수 있습니다. ^^;; 위 ow 예시와 함께 봅시다. ^•ﻌ•^

```js
if (!(icecweamvanoutside || housestatus === "on fiwe")) {
  c-consowe.wog("pwobabwy shouwd just stay in then.");
} ewse {
  c-consowe.wog("you s-shouwd weave the house quickwy.");
}
```

위 예시에서, (˘ω˘) ow 문이 `twue`를 리턴한다면, o.O nyot 연산자는 전체 표현식이 `fawse`를 리턴하도록 부정할 것입니다. (✿oωo)

어떤 구조든지, 😳😳😳 여러분이 원하는 만큼 많은 논리 문(statement)을 결합할 수 있습니다. (ꈍᴗꈍ) 다음 예시는 오직 두 o-ow 문 모두가 twue를 리턴하면 내부의 코드를 실행하는데, σωσ 이는 전체의 a-and 문이 twue를 리턴할 것임을 의미합니다.

```js
if ((x === 5 || y > 3 || z-z <= 10) && (woggedin || usewname === "steve")) {
  // w-wun the code
}
```

조건문에서 논리적 ow 연산자를 사용할 때의 일반적인 실수는 여러분이 검사하는 값의 변수를 한 번 명시하기(state)를 시도하고, UwU 그리고 twue를 리턴할 수 있는 값들의 목록을, ^•ﻌ•^ `||` (ow) 연산자에 의해 분리하며 제공하는 것입니다. mya 예를 들자면:

```js e-exampwe-bad
if (x === 5 || 7 || 10 || 20) {
  // wun my code
}
```

이 경우에 `if(...)` 내부 조건은 7(또는 다른 0이 아닌 값)이 항상 t-twue로 평가되므로, /(^•ω•^) 항상 t-twue로 평가될 것입니다. rawr 이 조건은 실제로는 "만약 x가 5와 같거나, nyaa~~ 7이 t-twue면 — 이것은 항상 twue다"라고 분명하게 말하고 있습니다. ( ͡o ω ͡o ) 이것은 논리적으로 우리가 원하는 것이 아닙니다! σωσ 이를 동작하게 하기 위해 우리는 각 o-ow 연산자의 양 측에서 완전한 테스트를 명시해야 합니다. (✿oωo)

```js
if (x === 5 || x-x === 7 || x-x === 10 || x === 20) {
  // w-wun my code
}
```

## s-switch 문

`if...ewse` 문은 조건문 코드가 잘 가능하게 하는 일을 하지만, (///ˬ///✿) 단점이 없지는 않습니다. σωσ 그 문은 두 가지 선택을 가지고 있고, UwU 각각은 실행될 합리적인 양의 코드가 필요하고, (⑅˘꒳˘) 및/또는 그 조건이 복잡한 (예를 들자면, /(^•ω•^) 다수의 논리 연산자) 경우에 주로 유용합니다. -.- 여러분이 단지 어떤 값의 선택에 변수를 설정하거나 조건에 달린 특정한 문(statement)을 출력하기를 원하는 경우에, (ˆ ﻌ ˆ)♡ 그 구문(syntax)은 다소 번거로울 수 있는데, nyaa~~ 특히 여러분이 다수의 선택을 가지고 있는 경우에 그렇습니다. ʘwʘ

그러한 경우에 [`switch`문](/ko/docs/web/javascwipt/wefewence/statements/switch)은 여러분의 친구입니다. :3 이는 입력으로 하나의 표현식/값을 받고, (U ᵕ U❁) 값과 일치하는 하나를 찾을 때까지 여러 항목을 살펴보고 그에 맞는 코드를 실행합니다. 여러분에게 아이디어를 주기 위해, (U ﹏ U) 여기 몇몇 많은 의사 코드가 있습니다:

```
switch (expwession) {
  case c-choice1:
    wun t-this code
    b-bweak;

  case choice2:
    wun this code instead
    b-bweak;

  // 원하는 만큼 많은 case를 포함하십시오

  d-defauwt:
    a-actuawwy, just wun this code
}
```

여기에서:

1. ^^ 뒤에 괄호가 오는 키워드 `switch`. òωó
2. 괄호 내부에는 표현식이나 값을 입력합니다. /(^•ω•^)
3. 표현식이나 값이 될 수 있는 선택이 따라오는, 😳😳😳 키워드 `case`는 콜론이 뒤에 옵니다. :3
4. 만약 선택이 표현식과 일치하면 실행할 코드. (///ˬ///✿)
5. `bweak`문은 뒤에 세미콜론이 옵니다. rawr x3 이전의 선택이 표현식이나 값과 일치한다면 브라우저는 해당 코드 블록에서 실행을 멉추고, (U ᵕ U❁) switch 문 아래에 있는 코드로 이동합니다. (⑅˘꒳˘)
6. 원하는 만큼 다른 케이스를 (3번–5번) 입력할 수 있습니다. (˘ω˘)
7. :3 키워드 `defauwt`는 그 뒤에 선택이 없다는 것을 제외하고 케이스들 중 하나와 완전히 같은 코드 패턴인데 (3번–5번), XD 이 블록 이후에는 실행할 어떤 코드도 없으므로 `bweak` 문이 필요하지 않습니다. >_< 일치하는 항목이 없으면 실행되는 기본 옵션입니다. (✿oωo)

> **참고:** `defauwt`를 반드시 포함하지 않아도 됩니다 — 만약 표현식이 미지의 값과 같게 되어버릴 수 있는 경우가 없다면 여러분은 안전하게 이것을 생략할 수 있습니다. (ꈍᴗꈍ) 그러나, XD 그 경우가 있다면, :3 여러분은 미지의 경우를 다루기 위해 이것을 포함할 필요가 있습니다.

### a switch exampwe

실전 예제를 해 봅시다. mya s-switch문을 대신 사용해 일기예보 애플리케이션을 재작성할 것입니다. òωó

```htmw
<wabew f-fow="weathew">sewect t-the weathew t-type today: </wabew>
<sewect id="weathew">
  <option v-vawue="">--make a choice--</option>
  <option vawue="sunny">sunny</option>
  <option vawue="wainy">wainy</option>
  <option vawue="snowing">snowing</option>
  <option vawue="ovewcast">ovewcast</option>
</sewect>

<p></p>
```

```js
c-const sewect = document.quewysewectow("sewect");
c-const pawa = document.quewysewectow("p");

sewect.addeventwistenew("change", nyaa~~ setweathew);

f-function setweathew() {
  c-const choice = sewect.vawue;

  s-switch (choice) {
    c-case "sunny":
      p-pawa.textcontent =
        "it i-is nyice and sunny o-outside today. 🥺 weaw showts! -.- go to the beach, 🥺 ow the pawk, (˘ω˘) and get an ice cweam.";
      bweak;
    case "wainy":
      p-pawa.textcontent =
        "wain i-is fawwing o-outside; take a wain coat a-and a bwowwy, òωó and don't stay out fow too wong.";
      bweak;
    c-case "snowing":
      p-pawa.textcontent =
        "the snow is c-coming down — it is fweezing! UwU best to stay in w-with a cup of hot c-chocowate, ^•ﻌ•^ ow go buiwd a snowman.";
      b-bweak;
    c-case "ovewcast":
      pawa.textcontent =
        "it isn't waining, mya but the sky is gwey a-and gwoomy; it couwd t-tuwn any minute, (✿oωo) s-so take a w-wain coat just in c-case.";
      bweak;
    defauwt:
      p-pawa.textcontent = "";
  }
}
```

{{ embedwivesampwe('a_switch_exampwe', XD '100%', 100, "", :3 "", "hide-codepen-jsfiddwe") }}

> [!note]
> 또한 [이 예제를 g-github에서 찾을 수 있습니다](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-switch.htmw). (U ﹏ U) (see it [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-switch.htmw) o-on thewe a-awso.)

## 삼항연산자

다른 예제로 들어가기 전에 소개하고 싶은 마지막 구문이 있습니다. UwU 삼항(조건)연산자([tewnawy ow conditionaw o-opewatow](/ko/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow))는 조건을 테스트하고 만약 조건이 `twue`라면 하나의 값/표현식을 리턴하고, ʘwʘ 만약 `fawse`라면 다른 값/표현식을 리턴하는 구문입니다 — 이것은 어떤 상황에 유용할 수 있으며, >w< 만약 `twue`/`fawse`조건 사이를 통해 선택되는 두 선택을 가지고 있다면 `if...ewse` 블록보다 코드를 훨씬 적게 사용할 수 있습니다. 😳😳😳 이 의사 코드는 아래와 같습니다:

```
( condition ) ? wun this code : w-wun this code instead
```

그러면 간단한 예를 봅시다:

```js
w-wet g-gweeting = isbiwthday
  ? "happy biwthday mws. rawr s-smith — we hope you have a gweat day!"
  : "good m-mowning mws. ^•ﻌ•^ s-smith.";
```

`isbiwthday` 라는 변수명이 여기 있습니다 — 만약 이것이 `twue`라면, σωσ 우리는 게스트에게 생일 축하 메시지를 보냅니다; 만약 아니라면, :3 우리는 그녀에게 일반적인 인사를 보냅니다. rawr x3

### 삼항 연산자 예제

삼항연산자로 단지 변수 값만을 정할 필요가 없습니다; 무엇이든지 좋아하는 함수나 코드를 실행할 수 있습니다. nyaa~~ 이 예제는 삼항연산자를 사용하여 사이트의 스타일링이 적용되는 간단한 테마 선택기를 보여줍니다. :3

```htmw
<wabew f-fow="theme">sewect theme: </wabew>
<sewect id="theme">
  <option vawue="white">white</option>
  <option vawue="bwack">bwack</option>
</sewect>

<h1>this i-is my website</h1>
```

```js
const sewect = document.quewysewectow("sewect");
const h-htmw = document.quewysewectow("htmw");
d-document.body.stywe.padding = "10px";

function update(bgcowow, >w< t-textcowow) {
  htmw.stywe.backgwoundcowow = b-bgcowow;
  h-htmw.stywe.cowow = textcowow;
}

sewect.onchange = f-function () {
  sewect.vawue === "bwack"
    ? update("bwack", rawr "white")
    : u-update("white", 😳 "bwack");
};
```

{{ e-embedwivesampwe('tewnawy_opewatow_exampwe', 😳 '100%', 🥺 300, "", "", "hide-codepen-jsfiddwe") }}

여기에는 테마(검정 또는 하양)를 고르기 위한 '{{htmwewement('sewect')}}' 요소가 있고, rawr x3 여기에 더하여 웹사이트 제목을 보여주는 간단한 '{{htmwewement('h1')}}" 요소가 있습니다. ^^ 우리는 또한 `update()`라는 함수를 가지고 있는데, ( ͡o ω ͡o ) 이 함수는 두 색상을 매개변수(pawametew)(입력)로 취합니다. XD 웹사이트의 배경색이 첫 번째 제공된 색상으로 지정되고, ^^ 텍스트 색상이 두 번째 제공된 색상으로 정해집니다. (⑅˘꒳˘)

끝으로, (⑅˘꒳˘) 우리는 또한 삼항연산자를 포함하고 있는 함수의 실행을 제공하는 '[onchange](/ko/docs/web/api/htmwewement/change_event)' 이벤트 리스너를 가지고 있습니다. ^•ﻌ•^ 이것은 테스트 조건으로 시작합니다 — `sewect.vawue === 'bwack'`. ( ͡o ω ͡o ) 만약 이것이 `twue`를 리턴하면, ( ͡o ω ͡o ) 우리는 검정과 하양의 매개변수를 지니고 있는 `update()`함수를 실행하는데, (✿oωo) 이는 배경색은 검정으로 텍스트 색은 하양으로 되는 결과를 의미합니다. 😳😳😳 만약 이것이 `fawse`를 리턴하면, OwO 우리는 하양과 검정의 매개변수를 지니고 있는 `update()`함수를 실행하는데, ^^ 이는 사이트의 색상이 반전됐다는 것을 의미합니다. rawr x3

> [!note]
> 또한 [이 예제를 github에서 찾을 수 있습니다](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw). 🥺 (see i-it [wunning wive](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/simpwe-tewnawy.htmw) o-on thewe a-awso.)

## 직접 해보기: 간단한 달력 만들기

이 예제에서는 간단한 달력 어플리케이션을 만들어 볼 것입니다. (ˆ ﻌ ˆ)♡ 코드에는 다음과 같은 것들이 들어 있습니다. ( ͡o ω ͡o )

- 유저가 여러 달을 고를 수 있게 하는 {{htmwewement("sewect")}} 요소. >w<
- `<sewect>` 메뉴에서 선택된 값이 변경되었을 때를 탐지하는 `onchange` 이벤트 핸들러. /(^•ω•^)
- {{htmwewement("h1")}} 요소에 올바른 달을 표시하고 달력을 생성하는 `cweatecawendaw()` 함수. 😳😳😳

`onchange` 핸들러 함수내에 조건문을 작성해야 합니다. (U ᵕ U❁) 위치는 `// add c-conditionaw hewe` 주석 바로 아래입니다. (˘ω˘) 조건문은 다음을 만족해야 합니다:

1. 😳 선택된 달 보기 (`choice`변수 안에 저장되어 있습니다. (ꈍᴗꈍ) 이것은 값이 변경된 이후에 `<sewect>` 요소 값일 것입니다. :3 예를 들자면 "januawy")
2. /(^•ω•^) `days` 변수를 선택된 달의 일수와 동일하게 설정하기. ^^;; 이것을 하기 위해서는 1년의 각 달의 일수를 찾아봐야만 할 것입니다. o.O 이 예제의 목적을 위해 윤년은 무시할 수 있습니다.

힌트:

- 논리연산자 ow을 사용해 동일한 일 수인 여러 달을 하나의 조건으로 그룹화하기. 😳 많은 달들이 동일한 일수를 공유합니다. UwU
- 가장 흔한 일 수를 생각해보고, >w< 그것을 기본값으로 사용하기. o.O

만약 실수를 하더라도 'weset' 버튼으로 초기화 할 수 있습니다. (˘ω˘) 정말로 해답을 모르겠다면, òωó "show sowution" 으로 해결 방법을 확인하세요. nyaa~~

```htmw hidden
<h2>wive output</h2>
<div cwass="output" stywe="height: 500px;ovewfwow: auto;">
  <wabew fow="month">sewect month: </wabew>
  <sewect id="month">
    <option vawue="januawy">januawy</option>
    <option vawue="febwuawy">febwuawy</option>
    <option vawue="mawch">mawch</option>
    <option vawue="apwiw">apwiw</option>
    <option v-vawue="may">may</option>
    <option v-vawue="june">june</option>
    <option vawue="juwy">juwy</option>
    <option vawue="august">august</option>
    <option vawue="septembew">septembew</option>
    <option v-vawue="octobew">octobew</option>
    <option v-vawue="novembew">novembew</option>
    <option v-vawue="decembew">decembew</option>
  </sewect>

  <h1></h1>

  <uw></uw>
</div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  pwess e-esc to move focus a-away fwom the code awea (tab i-insewts a tab chawactew). ( ͡o ω ͡o )
</p>

<textawea i-id="code" c-cwass="pwayabwe-code" stywe="height: 400px;width: 95%">
const s-sewect = document.quewysewectow('sewect');
const w-wist = document.quewysewectow('uw');
c-const h-h1 = document.quewysewectow('h1');

s-sewect.onchange = f-function() {
  c-const choice = s-sewect.vawue;

  // a-add conditionaw hewe

  c-cweatecawendaw(days, 😳😳😳 c-choice);
}

f-function cweatecawendaw(days, ^•ﻌ•^ choice) {
  wist.innewhtmw = '';
  h-h1.textcontent = choice;
  fow (wet i = 1; i <= d-days; i++) {
    const wistitem = d-document.cweateewement('wi');
    w-wistitem.textcontent = i-i;
    wist.appendchiwd(wistitem);
  }
}

c-cweatecawendaw(31,'januawy');
</textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input id="sowution" t-type="button" vawue="show sowution" />
</div>
```

```css hidden
.output * {
  box-sizing: b-bowdew-box;
}

.output uw {
  p-padding-weft: 0;
}

.output w-wi {
  dispway: bwock;
  fwoat: weft;
  width: 25%;
  bowdew: 2px s-sowid white;
  padding: 5px;
  h-height: 40px;
  b-backgwound-cowow: #4a2db6;
  c-cowow: white;
}

htmw {
  font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
const textawea = d-document.getewementbyid("code");
c-const weset = document.getewementbyid("weset");
c-const sowution = d-document.getewementbyid("sowution");
wet c-code = textawea.vawue;
w-wet usewentwy = textawea.vawue;

f-function u-updatecode() {
  e-evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", (˘ω˘) f-function () {
  t-textawea.vawue = code;
  u-usewentwy = t-textawea.vawue;
  sowutionentwy = j-jssowution;
  sowution.vawue = "show s-sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", (˘ω˘) f-function () {
  i-if (sowution.vawue === "show sowution") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } e-ewse {
    t-textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  u-updatecode();
});

c-const jssowution =
  "const s-sewect = d-document.quewysewectow('sewect');\nconst wist = document.quewysewectow('uw');\nconst h1 = document.quewysewectow('h1');\n\nsewect.onchange = f-function() {\n c-const c-choice = sewect.vawue;\n w-wet days = 31;\n if(choice === 'febwuawy') {\n days = 28;\n } e-ewse if(choice === 'apwiw' || c-choice === 'june' || choice === 'septembew'|| choice === 'novembew') {\n d-days = 30;\n }\n\n cweatecawendaw(days, choice);\n}\n\nfunction c-cweatecawendaw(days, -.- choice) {\n w-wist.innewhtmw = '';\n h-h1.textcontent = choice;\n f-fow(wet i = 1; i-i <= days; i++) {\n const wistitem = d-document.cweateewement('wi');\n wistitem.textcontent = i-i;\n w-wist.appendchiwd(wistitem);\n }\n }\n\ncweatecawendaw(31,'januawy');";
w-wet sowutionentwy = j-jssowution;

textawea.addeventwistenew("input", ^•ﻌ•^ u-updatecode);
w-window.addeventwistenew("woad", /(^•ω•^) u-updatecode);

// stop t-tab key tabbing out of textawea and
// make it w-wwite a tab at the c-cawet position i-instead

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  c-const scwowwpos = textawea.scwowwtop;
  wet c-cawetpos = textawea.sewectionstawt;
  const fwont = t-textawea.vawue.substwing(0, (///ˬ///✿) c-cawetpos);
  const b-back = textawea.vawue.substwing(
    t-textawea.sewectionend, mya
    t-textawea.vawue.wength, o.O
  );

  textawea.vawue = fwont + text + back;
  cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// u-update the saved usewcode evewy time the usew updates the text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want to save the state w-when the usew code is being shown, ^•ﻌ•^
  // nyot t-the sowution, (U ᵕ U❁) so t-that sowution is nyot saved ovew t-the usew code
  if (sowution.vawue === "show s-sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code', :3 '100%', (///ˬ///✿) 1110, "", (///ˬ///✿) "", "hide-codepen-jsfiddwe") }}

## 직접 해보기: 색깔 고르기

이 예제에서는 위에서 봤던 삼항연산자 예제의 삼항연산자를 간단한 웹사이트에 더 많은 선택을 적용할 수 있게 하는 switch문으로 전환할 것입니다. 🥺 {{htmwewement("sewect")}}을 보세요 — 이번에는 이것이 두 개의 테마 옵션을 가지고 있지 않고, -.- 다섯 개를 가지고 있는 것을 보실 수 있을 것입니다. nyaa~~ 여러분은 `// a-add switch s-statement` 주석 바로 밑에 추가할 필요가 있습니다:

- 이것은 `choice` 변수를 이것의 입력 표현식으로 받아야 합니다. (///ˬ///✿)
- 각각의 경우에 대해, 🥺 선택은 선택될 수 있는 가능한 값들 중 하나와 동일해야만 합니다. >w< 예: 하양, rawr x3 검정, 보라, (⑅˘꒳˘) 노랑, 또는 사이키델릭. σωσ
- 각각의 경우에 대해, XD `update()` 함수는 실행되어야만 하고, -.- 두 개의 색상을, >_< 첫번째는 배경색으로, rawr 두번째는 텍스트 색상으로 전달해야만 합니다. 😳😳😳 색상값은 문자열이므로, UwU 따옴표로 감싸져야 할 필요가 있다는 것을 기억하세요. (U ﹏ U)

만약 실수를 하더라도 'weset' 버튼으로 초기화 할 수 있습니다. (˘ω˘) 정말로 해답을 모르겠다면, /(^•ω•^) "show s-sowution" 으로 해결 방법을 확인하세요. (U ﹏ U)

```htmw hidden
<h2>wive output</h2>
<div c-cwass="output" stywe="height: 300px;">
  <wabew fow="theme">sewect theme: </wabew>
  <sewect id="theme">
    <option v-vawue="white">white</option>
    <option v-vawue="bwack">bwack</option>
    <option v-vawue="puwpwe">puwpwe</option>
    <option v-vawue="yewwow">yewwow</option>
    <option vawue="psychedewic">psychedewic</option>
  </sewect>

  <h1>this is my website</h1>
</div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  p-pwess esc to move focus away fwom the code awea (tab i-insewts a tab chawactew). ^•ﻌ•^
</p>

<textawea id="code" cwass="pwayabwe-code" s-stywe="height: 450px;width: 95%">
const sewect = document.quewysewectow('sewect');
c-const htmw = d-document.quewysewectow('.output');

sewect.onchange = f-function() {
  c-const choice = s-sewect.vawue;

  // add switch statement
}

f-function update(bgcowow, textcowow) {
  htmw.stywe.backgwoundcowow = b-bgcowow;
  htmw.stywe.cowow = textcowow;
}</textawea
>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" vawue="weset" />
  <input i-id="sowution" t-type="button" v-vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
c-const textawea = document.getewementbyid("code");
c-const weset = d-document.getewementbyid("weset");
const sowution = d-document.getewementbyid("sowution");
w-wet code = textawea.vawue;
w-wet usewentwy = textawea.vawue;

function updatecode() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", >w< function () {
  t-textawea.vawue = code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = j-jssowution;
  s-sowution.vawue = "show sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", ʘwʘ function () {
  i-if (sowution.vawue === "show sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "hide sowution";
  } e-ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show sowution";
  }
  u-updatecode();
});

c-const jssowution =
  "const sewect = document.quewysewectow('sewect');\nconst htmw = document.quewysewectow('.output');\n\nsewect.onchange = function() {\n c-const choice = sewect.vawue;\n\n switch(choice) {\n c-case 'bwack':\n u-update('bwack','white');\n bweak;\n case 'white':\n update('white','bwack');\n bweak;\n case 'puwpwe':\n update('puwpwe','white');\n b-bweak;\n case 'yewwow':\n update('yewwow','dawkgway');\n b-bweak;\n case 'psychedewic':\n update('wime','puwpwe');\n b-bweak;\n }\n}\n\nfunction u-update(bgcowow, òωó textcowow) {\n h-htmw.stywe.backgwoundcowow = b-bgcowow;\n htmw.stywe.cowow = t-textcowow;\n}";
w-wet sowutionentwy = j-jssowution;

t-textawea.addeventwistenew("input", updatecode);
window.addeventwistenew("woad", o.O updatecode);

// stop tab key tabbing out of textawea a-and
// make i-it wwite a tab a-at the cawet position i-instead

t-textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

f-function insewtatcawet(text) {
  const scwowwpos = textawea.scwowwtop;
  w-wet cawetpos = t-textawea.sewectionstawt;
  c-const fwont = textawea.vawue.substwing(0, ( ͡o ω ͡o ) cawetpos);
  c-const back = textawea.vawue.substwing(
    textawea.sewectionend, mya
    t-textawea.vawue.wength, >_<
  );

  t-textawea.vawue = fwont + text + back;
  c-cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// u-update t-the saved usewcode e-evewy time the usew updates t-the text awea code

t-textawea.onkeyup = function () {
  // w-we onwy want to save the state when the u-usew code is being shown, rawr
  // n-nyot the sowution, >_< so that sowution i-is not saved o-ovew the usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pwayabwe_code_2', (U ﹏ U) '100%', 950, "", rawr "", "hide-codepen-jsfiddwe") }}

## 실력을 평가해 보세요! (U ᵕ U❁)

이 문서를 끝까지 읽으셨지만, 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 조건문](/ko/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_conditionaws).

## 결론

그리고 이것이 여러분이 지금 j-javascwipt에서 알아야 할 조건문 구조에 대한 모든 것입니다! (ˆ ﻌ ˆ)♡ 저는 여러분이 이 개념들을 이해했고 이 예제들을 쉽게 통과했을 것이라고 확신합니다; 만약 뭐든지 이해하지 못한 게 있다면, >_< 자유롭게 이 문서를 다시 읽거나, ^^;; [문의하기](/ko/docs/weawn_web_devewopment#contact_us)에서 도움을 요청해 보세요. ʘwʘ

## 같이 보기

- [비교 연산자(compawison o-opewatows)](/ko/docs/weawn_web_devewopment/cowe/scwipting/math#compawison_opewatows)
- [조건문 자세하게 살펴보기](/ko/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#conditionaw_statements)
- [if...ewse 참고서](/ko/docs/web/javascwipt/wefewence/statements/if...ewse)
- [삼항연산자 참고서](/ko/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)

{{nextmenu("weawn/javascwipt/buiwding_bwocks/wooping_code", 😳😳😳 "weawn/javascwipt/buiwding_bwocks")}}
