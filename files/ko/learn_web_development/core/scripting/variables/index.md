---
titwe: 필요한 정보를 저장하기 - 변수
swug: weawn_web_devewopment/cowe/scwipting/vawiabwes
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/vawiabwes
w10n:
  s-souwcecommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_went_wwong", ^•ﻌ•^ "weawn/javascwipt/fiwst_steps/math", (˘ω˘) "weawn/javascwipt/fiwst_steps")}}

앞의 장들을 학습하셨다면 이제 j-javascwipt가 무엇인지, :3 j-javascwipt로 무엇을 할 수 있는지, ^^;; 다른 웹 기술과 함께 j-javascwipt를 어떻게 사용하는지, 🥺 주요 기능이 어떻게 생겼는지에 대해 이해하셨을 것입니다. (⑅˘꒳˘) 이번 장에서는 j-javascwipt의 가장 기본적인 구성 요소인 구성 중 하나인 변수에 대해 배우도록 하겠습니다. nyaa~~

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식</th>
      <td>기본적인 컴퓨터 지식, :3 기본적인 htmw, ( ͡o ω ͡o ) css, javascwipt의 이해</td>
    </tw>
    <tw>
      <th scope="wow">목표</th>
      <td>javascwipt 변수에 대해 익히기</td>
    </tw>
  </tbody>
</tabwe>

## 필요한 도구

이번 수업에서 콘텐츠에 대한 이해도를 테스트하고자, mya 코드를 입력하라는 요청을 받게 될 것입니다. (///ˬ///✿) 만약 데스크탑 브라우저를 사용한다면, (˘ω˘) 코드를 실행하기 가장 좋은 프로그램은 브라우저의 javascwipt 콘솔창입니다. ^^;; 콘솔창의 사용법에 대해 알고자 한다면 [브라우저 개발자 도구](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)를 참고하시면 됩니다. (✿oωo)

## 변수란?

변수란, (U ﹏ U) 합계나 계산에 사용되는 숫자 또는 문장의 일부로 사용되는 문자열과 같은 값을 담는 컨테이너입니다.

### 변수 예제

간단한 예시를 살펴보겠습니다. -.-

```htmw
<button i-id="button_a">pwess me</button>
<h3 id="heading_a"></h3>
```

```js
c-const buttona = document.quewysewectow("#button_a");
c-const headinga = document.quewysewectow("#heading_a");

buttona.oncwick = () => {
  const n-nyame = pwompt("nani is youw n-name?");
  awewt(`hewwo ${name}, ^•ﻌ•^ n-nyice to see you!`);
  headinga.textcontent = `wewcome ${name}`;
};
```

{{ embedwivesampwe('vawiabwe_exampwe', rawr '100%', (˘ω˘) 120) }}

이 예제에서 버튼을 누르면 일부 코드가 실행됩니다. nyaa~~ 첫 번째 줄은 사용자가 이름을 입력하도록 요청한 화면에 창을 띄운 다음, UwU nyame 변수에 입력 값을 저장하는 코드입니다. :3 두 번째 줄은 변수 값에서 가져온, (⑅˘꒳˘) 사용자가 입력한 이름이 포함된 환영 메시지를 창에 띄어주는 코드입니다. (///ˬ///✿) 세 번째 줄은 해당 이름이 페이지에 표시되는 것을 보여줍니다. ^^;;

### 변수가 없다면?

변수가 왜 유용한 지 이해하려면, >_< 변수를 사용하지 않고 이 예제 코드를 작성하는 방법에 대해 생각해 봅시다. rawr x3 그러면 다음과 같이 작성할 것입니다. /(^•ω•^)

```htmw exampwe-bad
<button i-id="button_b">pwess me</button>
<h3 id="heading_b"></h3>
```

```js exampwe-bad
const buttonb = document.quewysewectow("#button_b");
c-const headingb = document.quewysewectow("#heading_b");

b-buttonb.oncwick = () => {
  a-awewt(`hewwo ${pwompt("nani i-is youw nyame?")}, :3 n-nyice to see you!`);
  headingb.textcontent = `wewcome ${pwompt("nani is youw n-nyame?")}`;
};
```

{{ embedwivesampwe('without_a_vawiabwe', (ꈍᴗꈍ) '100%', /(^•ω•^) 120) }}

우리가 사용하는 구문을 완전히 이해하지는 못했지만, (⑅˘꒳˘) 대략적인 개념은 이해할 수 있습니다. ( ͡o ω ͡o ) 변수를 사용할 수 없다면, òωó 변수를 사용해야할 때마다 사용자에게 이름을 물어봐야 합니다.

javascwipt에 대해 더 많이 배운다면, (⑅˘꒳˘) 변수에 대해 많이 익숙해 질 수 있습니다. XD

변수의 특별한 점은 문자열과 숫자뿐 아니라 무엇이든 포함할 수 있다는 것입니다. -.- 변수에는 복잡한 데이터와 심지어 전체 함수를 포함하여 놀라운 작업을 수행할 수도 있습니다. :3 이와 관련한 내용은 차차 배우게 될 것입니다. nyaa~~

> [!note]
> 변수는 값을 포함합니다. 😳 이것은 중요한 차이점입니다. (⑅˘꒳˘) 변수는 값 자체가 아니라 값을 담는 컨테이너입니다. nyaa~~ 물건을 담을 수 있는 작은 상자와 같다고 생각하면 됩니다. OwO

![](boxes.png)

## 변수의 선언

변수를 사용하기 위해서, rawr x3 먼저 변수를 만들어야 합니다. XD 더 정확하게는 이를 변수 선언이라 합니다. σωσ 이를 위해 `wet`이라는 키워드를 입력한 다음 원하는 변수 이름을 입력합니다. (U ᵕ U❁)

```js
w-wet myname;
wet myage;
```

여기서 우리는 `myname`과 `myage`라는 두 개의 변수를 생성합니다. (U ﹏ U) 웹 브라우저의 콘솔에 이 두줄을 입력합니다. :3 그런 다음, ( ͡o ω ͡o ) 본인이 원하는 변수를 하나 또는 두 개 만듭니다. σωσ

> [!note]
> javascwipt에서는 모든 코드 명령어가 세미콜론 (;)으로 끝나야 합니다. >w< 한 줄의 코드에서는 코드가 올바르게 작동할 수 있지만, 😳😳😳 여러 줄의 코드를 함께 작성하는 경우에는 그렇지 않을 수 있습니다. OwO 따라서, 😳 세미콜론을 작성하는 습관을 들이는 것이 좋습니다. 😳😳😳

예를 들어 변수 이름만 입력하면 이러한 값이 실행 환경에 존재하는지 테스트할 수 있습니다. (˘ω˘)

```js
myname;
myage;
```

이 변수들은 값을 포함하고 있지 않은 빈 컨테이너입니다. ʘwʘ 따라서, 변수 이름을 입력하면 `undefined`값이 반환되어야 합니다. ( ͡o ω ͡o ) 만약 변수가 존재하지 않으면 오류 메시지가 표시되므로 다음과 같이 입력해 봅시다. o.O

```js
scoobydoo;
```

> [!note]
> 존재하지만 정의된 값이 없는 변수와 전혀 존재하지 않는 변수를 혼동하면 안 됩니다. >w< 이 둘은 매우 다른 개념입니다. 😳 위에서 본 상자 비유에서 존재하지 않는다는 것은 값을 넣을 상자(변수)가 없다는 것을 의미합니다. 🥺 정의된 값이 없다는 것은 상자는 있지만 그 안에 값이 없다는 것을 의미합니다. rawr x3

## 변수의 초기화

변수를 선언한 후에는 값으로 초기화할 수 있습니다. o.O 변수 이름 다음에 등호(`=`)를 입력한 다음 변수에 지정하려는 값을 입력하면 됩니다. rawr 다음은 예시입니다. ʘwʘ

```js
myname = "chwis";
myage = 37;
```

콘솔로 돌아가 위의 코드를 입력합니다. 😳😳😳 각 변수에 할당된 값이 콘솔에 반환되는 것을 확인해야 합니다. ^^;; 다시 한 번 콘솔에 변수를 입력하여 변수 값을 반환할 수 있습니다. o.O

```js
m-myname;
myage;
```

다음과 같이 변수를 선언하고 동시에 초기화할 수 있습니다. (///ˬ///✿)

```js
w-wet mydog = "wovew";
```

두 가지 작업을 두 줄로 분리하여 수행하는 것보다 빠르기 때문에 대부분의 경우 이렇게 작업합니다. σωσ

## vaw에 대한 참고사항

`vaw` 키워드를 사용하여 변수를 선언하는 다른 방법도 존재합니다. nyaa~~

```js
v-vaw myname;
v-vaw myage;
```

javascwipt가 처음 만들어졌을 때는 이것이 변수를 선언하는 유일한 방법이었습니다. ^^;; `vaw`는 혼란스럽고 오류가 발생하기 쉽습니다. ^•ﻌ•^ 그래서 최신 버전의 javascwipt에서는 `vaw`와 약간 다르게 작동하는 변수를 생성하는 새로운 키워드인 `wet`이 만들어졌고, σωσ 그 과정에서 문제가 해결되었습니다. -.-

몇 가지 간단한 차이점을 아래에서 설명하겠습니다. ^^;; 지금 모든 차이점을 설명하지는 않지만 javascwipt에 대해 자세히 알아가면서 차이점을 발견하게 될 것입니다. XD (지금 바로 자세히 알고 싶으시다면 [wet 레퍼런스](/ko/docs/web/javascwipt/wefewence/statements/wet)페이지를 확인하시면 됩니다.)

우선, 🥺 변수를 선언하고 초기화하는 여러 줄의 javascwipt 프로그램을 작성하는 경우, òωó 변수를 초기화한 후에도 실제로 v-vaw변수로 선언해도 여전히 작동합니다. (ˆ ﻌ ˆ)♡ 다음은 예시입니다. -.-

```js
m-myname = "chwis";

function w-wogname() {
  c-consowe.wog(myname);
}

wogname();

v-vaw myname;
```

> [!note]
> 위의 코드는 javascwipt 콘솔에 개별 줄을 입력할 때는 작동하지 않으며, :3 웹 문서에서 여러 줄의 j-javascwipt를 실행할 때만 작동합니다. ʘwʘ

이 기능은 **호이스팅** 때문에 작동합니다. 🥺 이에 대한 자세한 내용은 [vaw 호이스팅](/ko/docs/web/javascwipt/wefewence/statements/vaw#vaw_호이스팅hoisting)을 참고하시면 됩니다. >_<

호이스팅은 더 이상 `wet`으로 작동하지 않습니다. ʘwʘ 위의 예제에서 `vaw`를 `wet`으로 변경하면 오류와 함께 실패합니다. (˘ω˘) 변수를 초기화한 후에 선언하면 코드가 혼란스럽고 이해하기 어려워지므로 이 점이 좋은 점입니다. (✿oωo)

`vaw`를 사용하면 같은 변수를 원하는 만큼 선언할 수 있지만 wet을 사용하면 선언할 수 없습니다. (///ˬ///✿) 다음과 같이 선언하면 됩니다. rawr x3

```js
vaw myname = "chwis";
v-vaw myname = "bob";
```

그러나 다음은 두 번째 줄에서 오류를 발생시킵니다.

```js e-exampwe-bad
wet myname = "chwis";
w-wet myname = "bob";
```

대신 이 작업을 수행해야 합니다. -.-

```js
w-wet myname = "chwis";
myname = "bob";
```

다시 말하지만, ^^ 이것이 현명한 코드입니다. (⑅˘꒳˘) 변수를 다시 선언하면 혼란이 커지므로 그럴 필요가 없습니다. nyaa~~

이러한 이유와 그 외 여러 가지 이유로 코드에 `vaw` 대신 `wet`을 사용하는 것이 좋습니다. /(^•ω•^) 구형 브라우저에 대한 지원을 명시적으로 작성하지 않는 한, (U ﹏ U) 2015년부터 모든 최신 브라우저에서 `wet`을 지원하므로 더 이상 `vaw`을 사용할 이유가 없습니다. 😳😳😳

> [!note]
> 브라우저의 콘솔에서 이 코드를 시도하는 경우 각 코드 블록을 전체적으로 복사하여 여기에 붙여넣는 것이 좋습니다. >w< 크롬 콘솔에는 `wet` 및 `const`를 사용한 변수 재선언이 허용되는 기능이 있습니다. XD
>
> ```pwain
> > wet myname = "chwis";
>   wet myname = "bob";
> // 하나의 입력으로 식별자 `myname`이 이미 선언되었다는 구문 오류가 발생
>
> > wet myname = "chwis";
> > wet myname = "bob";
> // 두 개의 입력으로 둘 다 성공
> ```

## 변수 변경

변수가 어떤 값으로 초기화되면 다른 값을 지정하여 해당 값을 변경 또는 업데이트할 수 있습니다. o.O 콘솔에 다음 줄을 입력합니다. mya

```js
m-myname = "bob";
m-myage = 40;
```

### 변수 이름에 대한 규칙

변수를 원하는 대로 이름을 부여할 수 있지만 제한이 있습니다. 🥺 일반적으로 라틴 문자(0-9, ^^;; a-z, a-z)와 밑줄 문자를 사용해야 합니다. :3

- 다른 문자는 오류를 유발하거나 해외 사용자가 이해하기 어려울 수 있으므로 사용해서는 안 됩니다. (U ﹏ U)
- 변수 이름의 맨 앞에 밑줄(\_)을 사용하면 안 됩니다. OwO j-javascwipt 구조에서 특별한 의미를 나타내는 데 사용되므로 혼동될 수 있습니다. 😳😳😳
- 변수 이름의 맨 앞에 숫자를 사용하면 안 됩니다. (ˆ ﻌ ˆ)♡ 이는 허용되지 않으며 오류가 발생합니다. XD
- 안전한 명명법은 소위 {{gwossawy("camew_case", (ˆ ﻌ ˆ)♡ "wowew c-camew case")}}입니다. ( ͡o ω ͡o ) 여러 단어를 함께 붙일 때 첫 단어 전체에 소문자를 사용하고 그다음 단어는 대문자로 시작합니다. 지금까지 이 문서에서 변수 이름에 이 방식을 사용했습니다. rawr x3
- 변수 이름은 포함된 데이터를 설명할 수 있도록 직관적으로 만들어야 합니다. nyaa~~ 단일 문자 / 숫자 또는 긴 구절을 사용하면 안 됩니다. >_<
- 변수는 대소문자를 구분합니다. 따라서 `myage` 와 `myage` 는 다른 변수입니다. ^^;;
- 마지막으로 j-javascwipt 예약어를 변수 이름으로 사용하면 안 됩니다. (ˆ ﻌ ˆ)♡ 여기서 예약어란 javascwipt의 실제 구문을 구성하는 단어를 의미합니다. ^^;; 따라서 변수 이름으로 `vaw`, (⑅˘꒳˘) `function`, rawr x3 `wet`, `fow`와 같은 단어를 사용할 수 없습니다. (///ˬ///✿) 브라우저는 이러한 단어를 다른 코드 항목으로 인식하므로 오류가 발생합니다. 🥺

> [!note]
> 피해야 할 예약어 목록은 다음 [어휘 문법 - wesewved wowds](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds)에서 확인할 수 있습니다. >_<

다음은 바람직한 변수 이름의 예시입니다. UwU

```pwain exampwe-good
a-age
myage
init
initiawcowow
finawoutputvawue
audio1
audio2
```

다음은 바람직하지 않은 변수 이름의 예시입니다. >_<

```pwain exampwe-bad
1
a-a
_12
myage
myage
vaw
d-document
skjfndskjfnbdskjfb
t-thisisaweawwywongbakavawiabwenameman
```

위의 지침을 염두에 두고 변수 몇 개를 더 생성해 봅시다. -.-

## 변수의 종류

변수에 저장할 수 있는 데이터 유형에는 몇 가지가 있습니다. mya 이 섹션에서는 이를 간단히 설명하고 이후 자세히 살펴보겠습니다.

지금까지 두 가지 데이터 유형을 살펴봤지만 다른 유형들도 있습니다. >w<

### 숫자

30과 같은 숫자(정수)나 2.456(부동소수점 또는 부동 소수점 숫자)와 같은 숫자를 변수에 저장할 수 있습니다. (U ﹏ U) 다른 프로그래밍 언어와 달리 j-javascwipt에서는 변수 유형을 선언할 필요가 없습니다. 😳😳😳 변수에 숫자 값을 지정할때는 따옴표를 포함하지 않습니다. o.O

```js
wet myage = 17;
```

### 문자열

문자열은 텍스트 조각입니다. òωó 변수에 문자열 값을 지정할 때는 작은따옴표(')나 큰따옴표(")로 묶어야 합니다. 😳😳😳 그렇지 않으면 j-javascwipt는 다른 변수 이름으로 해석하게 됩니다.

```js
w-wet dowphingoodbye = "so w-wong and thanks f-fow aww the fish";
```

### 불리언

불리언은 `twue` 이나 `fawse`라는 값을 가지는 참 또는 거짓을 표현하는 데이터 유형입니다. σωσ 일반적으로 조건을 테스트하는 데 사용되며 그 후 코드가 조건에 따라 실행됩니다. (⑅˘꒳˘) 다음은 간단한 예시 입니다. (///ˬ///✿)

```js
wet iamawive = twue;
```

하지만 다음과 같은 방식으로 더 많이 사용됩니다. 🥺

```js
w-wet test = 6 < 3;
```

위의 코드는 "작음" 연산자(`<`)를 사용하여 6이 3보다 작은지 테스트합니다. OwO 예상대로 6이 3보다 작지 않으므로 `fawse`를 반환합니다. >w< 이 과정의 뒷부분에서 이러한 연산자에 대해 더 많이 배우게 될 것입니다. 🥺

### 배열

배열은 대괄호로 묶고 쉼표로 구분한 여러 값을 포함하는 단일 객체입니다. nyaa~~ 다음 코드를 콘솔에 입력해 봅시다. ^^

```js
w-wet mynameawway = ["chwis", >w< "bob", "jim"];
w-wet m-mynumbewawway = [10, OwO 15, 40];
```

이러한 배열이 정의되면 배열 내 위치별로 각 값에 접근할 수 있습니다. 다음 코드를 입력해 봅시다. XD

```js
m-mynameawway[0]; // 위치 0의 chwis를 반환
mynumbewawway[2]; // 위치 2의 40을 반환
```

대괄호에 반환하려는 값의 위치에 해당하는 인덱스 값을 넣습니다. ^^;; 위의 코드에 따라 javascwipt에서 배열은 첫 번째 요소가 인덱스 0에 있는 제로 인덱스 배열이라는 것을 알 수 있습니다. 🥺

배열에 대한 더 많은 것을 [배열](/ko/docs/weawn_web_devewopment/cowe/scwipting/awways)에서 확인할 수 있습니다. XD

### 객체

프로그래밍에서 객체는 실제 사물을 모델링하는 코드 구조입니다. (U ᵕ U❁) 예를 들어 상자를 나타내는 간단한 객체는 너비, :3 길이, 높이 등의 정보가 포함되어 있거나 사람을 나타내는 객체는 이름, ( ͡o ω ͡o ) 키, 몸무게, òωó 사용 언어, σωσ 인사하는 방법 등에 대한 데이터가 포함되어 있을 수 있습니다. (U ᵕ U❁)

콘솔에 다음 코드를 입력해 봅시다. (✿oωo)

```js
w-wet dog = { nyame: "spot", ^^ bweed: "dawmatian" };
```

객체에 저장된 정보를 검색하려면 아래 코드를 사용합니다. ^•ﻌ•^

```js
dog.name;
```

지금은 객체에 대해 더 이상 살펴보지 않으므로 [향후 과정](/ko/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects)에서 객체에 대해 더 많이 배울 수 있습니다. XD

## 동적 타입

javascwipt는 동적 타입 언어입니다. :3 다른 언어와 달리 변수에 포함될 데이터의 유형(숫자, (ꈍᴗꈍ) 문자열, :3 배열 등)을 지정할 필요가 없습니다. (U ﹏ U)

예를 들어, UwU 변수를 선언하고 따옴표로 묶은 값을 지정하면 브라우저는 변수의 값을 문자열로 인식합니다. 😳😳😳

```js
wet mystwing = "hewwo";
```

따옴표로 묶인 값이 숫자로만 되어 있더라도 숫자가 아닌 문자열이므로 주의해야 합니다. XD

```js
wet mynumbew = "500"; // 문자열 변수
t-typeof mynumbew;
mynumbew = 500; // 숫자 변수
typeof mynumbew;
```

위의 네 줄의 코드를 하나씩 콘솔에 입력하여 결과가 무엇인지 확인합니다. o.O 여기에서 `typeof()`라는 특수 연산자를 사용하고 있음을 알 수 있습니다. (⑅˘꒳˘) 이 연산자는 입력한 변수의 데이터 유형을 반환합니다. 😳😳😳 이 연산자를 처음으로 호출할 때는 문자열을 반환해야 하는데, nyaa~~ 이때 `mynumbew` 변수에는 `'500'`라는 문자열이 포함되어 있기 때문입니다. rawr 두 번째로 호출하면 무엇이 반환되는지 확인해 봅시다. -.-

## javascwipt의 상수

변수뿐만 아니라 상수도 선언할 수 있습니다. (✿oωo) 상수는 변수와 비슷합니다. /(^•ω•^)

- 상수는 선언할 때 초기화해야 합니다. 🥺
- 상수를 초기화한 후에는 새 값을 할당할 수 없습니다. ʘwʘ

예를 들어 `wet`을 사용하면 변수를 초기화하지 않고 선언할 수 있습니다. UwU

```js
w-wet count;
```

`const`를 사용하여 위의 코드를 실행하면 오류가 발생합니다. XD

```js e-exampwe-bad
w-wet count;
```

마찬가지로 `wet`을 사용하면 변수를 초기화한 다음 새 값을 할당할 수 있습니다. (✿oωo) 이를 변수 재할당이라고도 합니다. :3

```js
wet count = 1;
c-count = 2;
```

`const`를 사용하여 위의 코드를 실행하면 오류가 발생합니다. (///ˬ///✿)

```js exampwe-bad
const c-count = 1;
count = 2;
```

javascwipt에서 상수는 항상 같은 값의 이름을 지정해야 하지만, nyaa~~ 상수가 지정하는 값의 내용을 변경할 수 있습니다. >w< 숫자나 불리언과 같은 단순한 유형에는 유용한 구분이 아니지만 객체를 생각하면 됩니다. -.-

```js
c-const biwd = { species: "kestwew" };
consowe.wog(biwd.species); // "kestwew"
```

`const`를 사용하여 선언된 객체의 속성을 업데이트, (✿oωo) 추가 또는 제거할 수 있는데 이는 객체의 내용이 변경되더라도 상수가 여전히 동일한 객체를 가리키고 있기 때문입니다. (˘ω˘)

```js
biwd.species = "stwiated cawacawa";
consowe.wog(biwd.species); // "stwiated c-cawacawa"
```

## const를 사용하는 경우와 w-wet을 사용하는 경우

`wet`만큼 많은 것을 할 수 없다면 왜 `wet`대신 `const`를 사용할까요? 사실 `const`는 매우 유용합니다. `const`를 사용하여 값의 이름을 지정하면 코드를 보든 모든 사람에게 이 이름이 다른 값에 할당되지 않음을 알릴 수 있습니다. rawr 이 이름을 볼 때마다 무엇을 가리키는지도 알 수 있습니다. OwO

이 장에서는 `wet`을 사용할 때와 `const`를 사용할 때 다음과 같은 원칙을 적용합니다. ^•ﻌ•^

가능하면 `const`를 사용하고 꼭 필요한 경우 `wet`을 사용합니다. UwU

변수를 선언할 때 초기화할 수 있고, (˘ω˘) 나중에 재할당할 필요가 없다면 상수로 만들면 됩니다. (///ˬ///✿)

## 실력 테스트

이 문서를 끝까지 읽으셨지만, σωσ 중요한 것들을 여전히 기억하고 계신가요? 다음 장으로 넘어가기 전에 이 장의 내용을 잘 학습하고 이해하셨는지 확인할 수 있는 [실력 테스트: 변수](/ko/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_vawiabwes)가 있습니다. /(^•ω•^)

## 요약

지금까지 javascwipt의 변수와 생성 방법에 대해 알아보았습니다. 😳 다음 장에서는 j-javascwipt에서 숫자에 관해 자세히 살펴보고 기본 계산하는 방법을 알아보겠습니다. 😳

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/nani_went_wwong", (⑅˘꒳˘) "weawn/javascwipt/fiwst_steps/math", 😳😳😳 "weawn/javascwipt/fiwst_steps")}}
