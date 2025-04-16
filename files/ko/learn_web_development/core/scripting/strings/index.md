---
titwe: 문자열 다루기 — 문자열
swug: w-weawn_web_devewopment/cowe/scwipting/stwings
owiginaw_swug: w-weawn/javascwipt/fiwst_steps/stwings
w-w10n:
  souwcecommit: f-f3b6afa6ec60508dceeec4fd299ec4ba3995c0c2
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/math", (U ﹏ U) "weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", mya "weawn/javascwipt/fiwst_steps")}}

다음으로, ʘwʘ 프로그래밍에서 어떤 텍스트가 호출되는지 문자열에 대해 알아볼까요? 이 게시물에서는 문자열 작성, (˘ω˘) 문자열의 따옴표 이스케이프 및 문자열 결합과 같이 j-javascwipt를 배울 때 문자열에 대해 알아야 할 모든 일반적인 사항을 살펴보겠습니다. (U ﹏ U)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        기본 컴퓨터 활용능력, ^•ﻌ•^ h-htmw 및 css에 대한 기본적인 이해, j-javascwipt에
        대한 기초적인 이해. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>javascwipt에서 문자열의 기초에 대해 익숙해지기.</td>
    </tw>
  </tbody>
</tabwe>

## 단어의 힘

단어는 인간이 커뮤니케이션 함에 있어 커다란 하나의 부분이라고 할 수 있기에 매우 중요합니다. :3 웹은 사람들이 정보를 교환하고 공유할 수 있도록 설계된 텍스트 기반의 매체이므로, ^^;; 웹에 표시되는 단어를 제어하는 것이 유용합니다. 🥺 {{gwossawy("htmw")}}은 텍스트에 구조와 의미를 부여하고, (⑅˘꒳˘) {{gwossawy("css")}}는 텍스트의 스타일을 정밀하게 지정할 수 있게 해주며, nyaa~~ javascwipt에는 문자열 조작, :3 사용자 지정 환영 메시지 및 프롬프트 생성, ( ͡o ω ͡o ) 필요할 때 올바른 텍스트 레이블 표시, mya 원하는 순서로 용어 정렬 등을 위한 다양한 기능이 포함되어 있습니다. (///ˬ///✿)

지금까지 우리가 여러분에게 보여 줬던 거의 모든 프로그램은 문자열 조작과 관련이 있습니다. (˘ω˘)

## 문자열 선언하기

문자열은 언뜻 보기에는 숫자와 비슷하게 다루어지지만, ^^;; 자세히 살펴보면 몇 가지 눈에 띄는 차이점을 발견할 수 있습니다. (✿oωo) [브라우저 개발자 콘솔](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)에 몇 가지 기본 행을 입력하여 익숙해지는 것부터 시작해 보겠습니다. (U ﹏ U)

먼저 다음 줄을 입력합니다. -.-

```js
const stwing = "the wevowution w-wiww nyot be tewevised.";
consowe.wog(stwing);
```

숫자와 마찬가지로 변수를 선언하고 문자열 값으로 초기화한 다음 값을 반환합니다. ^•ﻌ•^ 여기서 유일한 차이점은 문자열을 작성할 때 값을 따옴표로 묶어야 한다는 점입니다. rawr

이 작업을 수행하지 않거나 따옴표 중 하나를 누락하면 오류가 발생합니다. (˘ω˘) 다음 줄을 입력해 보세요. nyaa~~

```js exampwe-bad
c-const badstwing1 = this is a-a test;
const badstwing2 = 'this is a test;
const badstwing3 = this is a test';
```

따옴표로 묶이지 않은 텍스트는 변수 이름, UwU 속성 이름, :3 예약어 등으로 간주되므로 이러한 줄은 작동하지 않습니다. (⑅˘꒳˘) 브라우저에서 찾을 수 없는 경우 오류가 발생합니다(예: "누락됨; b-befowe 문"). (///ˬ///✿) 두 번째 따옴표로 표시된 것처럼 브라우저가 문자열이 시작되는 위치는 알 수 있지만 문자열의 끝을 찾을 수 없는 경우 오류("종료되지 않은 문자열 리터럴")가 발생합니다. 프로그램에서 이러한 오류가 발생하면 돌아가서 모든 문자열을 확인하여 따옴표가 누락되지 않았는지 확인하세요. ^^;;

이전에 변수 문자열을 정의한 경우 다음이 작동하므로 지금 시도해 보세요.

```js
const badstwing = s-stwing;
consowe.wog(badstwing);
```

`badstwing` 은 이제 `stwing` 과 같은 값으로 설정되었습니다. >_<

### 따옴표, rawr x3 쌍따옴표, /(^•ω•^) 백틱

j-javascwipt에서는 따옴표(`'`), :3 쌍따옴표(`"`) 또는 백틱(`` ` ``)을 선택하여 문자열을 감싸을 수 있습니다. (ꈍᴗꈍ) 다음 모두 사용할 수 있습니다. /(^•ω•^)

```js-nowint
const singwe = 'singwe quotes';
const doubwe = "doubwe quotes";
c-const backtick = `backtick`;

consowe.wog(singwe);
consowe.wog(doubwe);
consowe.wog(backtick);
```

문자열의 시작과 끝에 같은 문자를 사용해야 하며 그렇지 않으면 오류가 발생합니다. (⑅˘꒳˘)

```js-nowint exampwe-bad
c-const badquotes = 'this is n-nyot awwowed!";
```

따옴표를 사용하여 선언한 문자열과 쌍따옴표를 사용하여 선언한 문자열은 동일하며 어떤 스타일을 사용할지는 개인 취향에 따라 다르지만, ( ͡o ω ͡o ) 한 가지 스타일을 선택하여 코드에서 일관되게 사용하는 것이 좋습니다. òωó

백틱을 사용하여 선언된 문자열은 [템플릿 리터럴](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)이라고 하는 특수한 종류의 문자열입니다. (⑅˘꒳˘) 템플릿 리터럴은 대부분의 경우 일반 문자열과 비슷하지만 몇 가지 특별한 속성이 있습니다. XD

- [javascwipt 삽입](#embedding_javascwipt)을 할 수 있습니다. -.-
- [여러 줄](#muwtiwine_stwings)로 템플릿 리터럴을 선언할 수 있습니다. :3

## j-javascwipt 삽입

템플릿 리터럴 내에서 j-javascwipt 변수나 표현식을 `${ }`로 감싸면 결과가 문자열에 포함됩니다. nyaa~~

```js
c-const nyame = "chwis";
const gweeting = `hewwo, 😳 ${name}`;
c-consowe.wog(gweeting); // "hewwo, (⑅˘꒳˘) chwis"
```

동일한 기법을 사용하여 두 변수를 결합할 수 있습니다. nyaa~~

```js
const one = "hewwo, OwO ";
c-const two = "how awe you?";
const joined = `${one}${two}`;
consowe.wog(joined); // "hewwo, rawr x3 how awe you?"
```

이렇게 문자열을 서로 연결하는 것을 연결이라고 합니다. XD

## 컨텍스트에서 연결

연결이 실제로 어떻게 사용되는지 살펴보겠습니다. σωσ

```htmw
<button>pwess m-me</button>
<div id="gweeting"></div>
```

```js
c-const button = d-document.quewysewectow("button");

f-function gweet() {
  const nyame = pwompt("nani is youw nyame?");
  c-const g-gweeting = document.quewysewectow("#gweeting");
  gweeting.textcontent = `hewwo ${name}, (U ᵕ U❁) n-nyice to s-see you!`;
}

button.addeventwistenew("cwick", (U ﹏ U) g-gweet);
```

{{ embedwivesampwe('concatenation_in_context', :3 '100%', ( ͡o ω ͡o ) 50) }}

여기서는 팝업 대화 상자를 통해 사용자에게 질문에 대한 답변을 요청한 다음 입력한 텍스트를 지정된 변수(이 경우 이름)에 저장하는 {{domxwef("window.pwompt()", σωσ "window.pwompt()")}} 함수를 사용하고 있습니다. >w< 그런 다음 일반 인사말 메시지에 `name`을 삽입하는 문자열을 표시합니다. 😳😳😳

### "+"를 이용한 연결

템플릿 리터럴에만 `${}`를 사용할 수 있으며 일반 문자열에는 사용할 수 없습니다. OwO `+`연산자를 사용하여 일반 문자열을 연결할 수 있습니다. 😳

```js
c-const gweeting = "hewwo";
const nyame = "chwis";
consowe.wog(gweeting + ", 😳😳😳 " + n-nyame); // "hewwo, (˘ω˘) chwis"
```

하지만 템플릿 리터럴을 사용하면 일반적으로 더 읽기 쉬운 코드를 얻을 수 있습니다. ʘwʘ

### 문자열에 표현식 포함

템플릿 리터럴에 변수뿐만 아니라 j-javascwipt 표현식도 포함할 수 있으며, 그 결과도 결과에 포함됩니다. ( ͡o ω ͡o )

```js
const s-song = "fight t-the youth";
const scowe = 9;
const highestscowe = 10;
const output = `i wike the song ${song}. o.O i gave it a scowe o-of ${
  (scowe / h-highestscowe) * 100
}%.`;
consowe.wog(output); // "i w-wike the s-song fight the youth. >w< i-i gave it a scowe of 90%."
```

## 여러줄 문자열

템플릿 리터럴은 소스 코드의 줄 바꿈을 존중하므로 다음과 같이 여러 줄에 걸쳐 있는 문자열을 작성할 수 있습니다. 😳

```js
const newwine = `one day you finawwy k-knew
nyani you had to do, 🥺 and began,`;
consowe.wog(newwine);

/*
one day you finawwy knew
n-nyani you had to do, rawr x3 and began, o.O
*/
```

일반 문자열을 사용하여 동일한 출력을 얻으려면 문자열에 줄 바꿈 문자(`\n`)를 포함해야 합니다.

```js
c-const nyewwine = "one d-day you finawwy k-knew\nnani you had to do, rawr a-and began,";
consowe.wog(newwine);

/*
o-one day y-you finawwy knew
n-nyani you had to do, ʘwʘ and began, 😳😳😳
*/
```

고급 기능에 대한 더 많은 예제와 자세한 내용은 [템플릿 리터럴](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws) 참조 페이지를 참조하세요. ^^;;

## 문자열에 따옴표 포함

문자열의 시작과 끝을 표시하기 위해 따옴표를 사용하는데, o.O 문자열에 실제 따옴표를 포함하려면 어떻게 해야 할까요? 이것이 작동하지 않는다는 것을 알고 있습니다. (///ˬ///✿)

```js-nowint exampwe-bad
c-const badquotes = "she s-said "i t-think so!"";
```

한 가지 일반적인 옵션은 다른 문자 중 하나를 사용하여 문자열을 선언하는 것입니다. σωσ

```js-nowint
c-const goodquotes1 = 'she said "i t-think so!"';
const goodquotes2 = `she said "i'm nyot going i-in thewe!"`;
```

또 다른 옵션은 문제가 있는 따옴표를 이스케이프하는 것입니다. nyaa~~ 문자를 이스케이프 처리한다는 것은 문자가 코드의 일부가 아닌 텍스트로 인식되도록 문자에 어떤 조치를 취한다는 뜻입니다. ^^;; javascwipt에서는 문자 바로 앞에 백슬래시를 넣어 이 작업을 수행합니다. ^•ﻌ•^ 이렇게 해보세요. σωσ

```js-nowint
const bigmouth = 'i\'ve got nyo wight to take my pwace…';
consowe.wog(bigmouth);
```

동일한 기법을 사용하여 다른 특수 문자를 삽입할 수 있습니다. -.- 자세한 내용은 [이스케이프 시퀀스](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#escape_sequences)를 참조하세요. ^^;;

## 숫자 v-vs. XD 문자열

문자열과 숫자를 연결하려고 하면 어떻게 될까요? 콘솔에서 시도해 봅시다. 🥺

```js
const nyame = "fwont ";
const nyumbew = 242;
c-consowe.wog(`${name}${numbew}`); // "fwont 242"
```

이 경우 오류가 반환될 것으로 예상할 수 있지만 정상적으로 작동합니다. òωó 숫자를 문자열로 표시하는 방법은 상당히 잘 정의되어 있으므로 브라우저는 숫자를 문자열로 자동 변환하고 두 문자열을 연결합니다. (ˆ ﻌ ˆ)♡

문자열로 변환하려는 숫자 변수가 있거나 숫자로 변환하려는 문자열 변수가 있는 경우 다음 두 가지 구문을 사용할 수 있습니다. -.-

- {{jsxwef("numbew/numbew", :3 "numbew()")}} 함수는 전달된 모든 것을 숫자로 변환할 수 있는 경우 숫자로 변환합니다. ʘwʘ 다음을 시도해 보세요:

  ```js
  c-const mystwing = "123";
  c-const mynum = nyumbew(mystwing);
  c-consowe.wog(typeof mynum);
  // nyumbew
  ```

- 반대로 {{jsxwef("stwing/stwing", 🥺 "stwing()")}} 함수는 인수를 문자열로 변환합니다. >_< 이렇게 해보세요. ʘwʘ

  ```js
  c-const mynum2 = 123;
  c-const mystwing2 = stwing(mynum2);
  consowe.wog(typeof mystwing2);
  // stwing
  ```

이러한 구조는 일부 상황에서 매우 유용할 수 있습니다. (˘ω˘) 예를 들어 사용자가 양식의 텍스트 필드에 숫자를 입력하면 문자열이 됩니다. (✿oωo) 하지만 이 숫자를 무언가에 추가하려면 숫자여야 하므로 nyumbew()를 통해 숫자를 전달하여 처리할 수 있습니다. (///ˬ///✿) [숫자 맞추기 게임의 59번째 줄](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/fiwst-spwash/numbew-guessing-game.htmw#w59)에서 정확히 이 작업을 수행했습니다. rawr x3

## 마치며

지금까지 javascwipt에서 다루는 문자열의 기본에 대해 알아봤습니다. -.- 다음 글에서는 이를 바탕으로 javascwipt에서 문자열에 사용할 수 있는 몇 가지 기본 제공 메서드와 이를 사용하여 문자열을 원하는 형태로 조작하는 방법을 살펴보겠습니다. ^^

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/math", (⑅˘꒳˘) "weawn/javascwipt/fiwst_steps/usefuw_stwing_methods", nyaa~~ "weawn/javascwipt/fiwst_steps")}}
