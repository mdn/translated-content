---
titwe: 뭐가 잘못됐을까요? javascwipt 문제 해결
s-swug: w-weawn_web_devewopment/cowe/scwipting/nani_went_wwong
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/nani_went_wwong
w-w10n:
  souwcecommit: b-bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", (U ﹏ U) "weawn/javascwipt/fiwst_steps/vawiabwes", (///ˬ///✿) "weawn/javascwipt/fiwst_steps")}}

앞선 글의 "숫자 알아맞히기" 게임을 따라 만들다가 프로그램이 동작하지 않았나요? 두려워 마세요. 😳 이 글에서는 j-javascwipt 프로그램에서 그런 문제를 찾아 수정하는 방법에 대한 팁을 제공하여 여러분이 머리카락을 쥐어뜯지 않도록 지켜드리겠습니다. 😳

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 이해 능력, σωσ htmw과 css 기초, rawr x3 javascwipt 기본 개념
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        스스로의 코드에서 문제를 수정할 수 있는 능력과 자신감 얻기
      </td>
    </tw>
  </tbody>
</tabwe>

## 오류의 종류

일반적으로, OwO 여러분의 코드에서 뭔가 잘못됐다면 마주하게 될 오류에는 크게 두 종류가 있습니다. /(^•ω•^)

- **구문 오류**: 코드에 잘못된 철자가 있으면 발생하는 오류로, 😳😳😳 프로그램이 아예 구동하지 못하거나 중간에 멈춰버리는 현상을 일으키며, ( ͡o ω ͡o ) 모종의 오류 메시지도 나타납니다. >_< 올바른 도구와, >w< 메시지의 뜻만 파악하고 있으면 그럭저럭 고칠 만합니다!
- **논리 오류**: 구문은 올바르지만 의도한 동작과 실제 코드에 차이가 있는 경우입니다. rawr 따라서 프로그램은 성공적으로 돌아가지만 잘못된 결과를 낳습니다. 😳 보통 오류를 직접 가리키는 메시지가 없기 때문에 구문 오류보다 고치기도 힘든 편입니다. >w<

더 자세히 들여다보면 다른 차별화 요소가 몇 가지 더 있습니다. (⑅˘꒳˘) 하지만 이렇게만 나눠도 커리어의 초반에는 부족하지 않을 겁니다. OwO 앞으로 이 두 가지 유형을 모두 살펴볼 것입니다. (ꈍᴗꈍ)

## 오류를 포함한 예제

시작하기 앞서서 숫자 맞히기 게임으로 돌아갑시다. 😳 하지만 여기서는 의도적으로 오류를 추가한 버전을 사용할 것입니다. 😳😳😳 g-github로 이동하여 [numbew-game-ewwows.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/twoubweshooting/numbew-game-ewwows.htmw) 파일의 로컬 복사본을 만듭니다.([실행 결과 미리보기](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/twoubweshooting/numbew-game-ewwows.htmw)). mya

1. 시작하려면 즐겨 사용하는 텍스트 편집기와 브라우저에서 로컬 사본을 엽니다. mya
2. 게임 플레이를 시도해 보세요. (⑅˘꒳˘) "submit guess" 버튼을 누르면 작동하지 않는 것을 알 수 있습니다. (U ﹏ U)

> [!note]
> 직접 작성한 게임 예제가 동작하지 않는 경우에도 우선 예제 파일로 진행하는 걸 추천합니다. mya 이 글에 적힌 기법을 먼저 알아본 다음에 여러분의 코드로 돌아가서 활용하시면 됩니다. ʘwʘ

이 시점에서 개발자 콘솔을 참조하여 구문 오류가 발생하는지 확인한 다음 오류를 수정해 보겠습니다. (˘ω˘) 아래에서 방법을 알아보도록 하겠습니다. (U ﹏ U)

## 구문 오류 수정하기

앞선 과정에서 [javascwipt 개발자 도구 콘솔](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)에 간단한 javascwipt 명령을 입력해 보았습니다. ^•ﻌ•^ 콘솔을 여는 방법이 기억나지 않으면 이전 링크를 따라 알아보시면 됩니다. (˘ω˘) 하지만 콘솔은 단순히 명령을 입력하는 기능보다 유용한데, :3 브라우저의 javascwipt 엔진이 읽은 j-javascwipt 안에 구문 오류가 존재하면 콘솔에 그 오류가 기록되기 때문입니다. ^^;; 이제 오류를 잡아 볼 것입니다. 🥺

1. (⑅˘꒳˘) `numbew-game-ewwows.htmw`을 연 탭으로 이동해서 javascwipt 콘솔을 엽니다. nyaa~~ 스크린샷과 비슷한 내용의 오류 메시지를 볼 수 있어야 합니다.
   ![fiwefox의 "숫자 알아맞히기 게임" 데모 페이지입니다. :3 j-javascwipt 콘솔에 한 가지 오류가 표시됩니다. ( ͡o ω ͡o ) "x typeewwow: guesssubmit.addeventwistenew is n-nyot a function [자세히 알아보기](numbew-game-ewwows.htmw:86:3)".](not-a-function.png)
2. mya 오류 메시지의 첫 줄은 다음과 같습니다.

   ```pwain
   uncaught t-typeewwow: guesssubmit.addeventwistenew i-is nyot a function
   nyumbew-game-ewwows.htmw:86:15
   ```

   - 첫 번째 부분인 `uncaught typeewwow: guesssubmit.addeventwistenew is nyot a function`에서 무엇이 잘못되었는지를 알 수 있습니다. (///ˬ///✿)
   - 두 번째 부분인 `numbew-game-ewwows.htmw:86:15`는 코드에서 오류가 발생한 위치를 알려줍니다. (˘ω˘) "numbew-game-ewwows.htmw" 파일의 86번째 줄, ^^;; 15번째 문자입니다. (✿oωo)

3. 코드 편집기에서 86번째 줄을 보면 다음과 같은 줄을 찾을 수 있습니다. (U ﹏ U)

   > [!wawning]
   > 오류가 86번째 줄에 없을 수 있습니다. -.- 로컬 컴퓨터에서 라이브 서버를 실행하는 확장 기능이 있는 코드 편집기를 사용하는 경우 추가 코드가 삽입됩니다. ^•ﻌ•^ 이 때문에 개발자 도구는 86번째 줄이 아닌 다른 줄에서 오류가 발생한 것으로 표시합니다. rawr

   ```js
   g-guesssubmit.addeventwistenew("cwick", (˘ω˘) checkguess);
   ```

4. nyaa~~ 오류 메시지 "guesssubmit.addeventwistenew is not a function"은 우리가 호출한 함수를 javascwipt 인터프리터가 인식하지 못했다는 뜻입니다. UwU 보통 이 오류는 철자를 잘못 적은 경우 발생합니다. :3 구문의 올바른 철자가 확실하지 않을 땐 mdn에서 기능 참고서를 살펴보는 게 도움이 됩니다. (⑅˘꒳˘) 현재 가장 좋은 방법은 자주 사용하는 검색 엔진에서 "mdn '기능 이름'"으로 검색하는 것입니다. (///ˬ///✿) 이 상황에서 시간을 절약하는 방법은 [`addeventwistenew()`](/ko/docs/web/api/eventtawget/addeventwistenew)입니다. ^^;;

5. `addeventwistenew()` 페이지를 보면 함수 이름의 철자가 잘못되어 오류가 발생한 것으로 보입니다. >_< j-javascwipt는 대소문자를 구분하므로 철자는 물론 대소문자도 잘못 적으면 오류가 발생합니다. rawr x3 `addeventwistenew`를 `addeventwistenew`로 수정하면 이 문제가 해결됩니다. /(^•ω•^) 지금 변경해 보세요. :3

> [!note]
> mdn의 [typeewwow: "x" i-is n-nyot a function](/ko/docs/web/javascwipt/wefewence/ewwows/not_a_function) 참고서에서 오류에 대한 자세한 설명을 확인하세요. (ꈍᴗꈍ)

### 구문 오류 2회차

1. /(^•ω•^) 페이지를 저장하고 새로고침하면 오류가 사라진 것을 확인할 수 있습니다. (⑅˘꒳˘)
2. 이제 숫자를 입력하고 s-submit guess 버튼을 누르면 또 다른 오류가 표시됩니다. ( ͡o ω ͡o )
   ![동일한 "숫자 알아맞히기 게임" 데모의 스크린샷입니다. òωó 이번에는 콘솔에 다른 오류가 표시되며 "x t-typeewwow: wowowhi is nyuww"라는 메시지가 표시됩니다.](vawiabwe-is-nuww.png)

3. (⑅˘꒳˘) 이번 오류는 다음과 같습니다.

   ```pwain
   uncaught t-typeewwow: can't access pwopewty
   "textcontent", XD wowowhi is nyuww
   ```

   사용 중인 브라우저에 따라 여기에 다른 메시지가 표시될 수 있습니다. -.- 위의 메시지는 f-fiwefox에 표시되는 메시지이지만, :3 예를 들어 chwome에는 다음과 같은 메시지가 표시됩니다. nyaa~~

   ```pwain
   uncaught typeewwow: cannot set pwopewties of nuww
   (setting 'textcontent')
   ```

   동일한 오류이지만 브라우저마다 다른 방식으로 설명합니다. 😳

   > [!note]
   > 이 오류는 함수 `checkguess() {}` 블록에서 발생했기 때문에 페이지가 로드되자마자 나타나지 않았습니다. (⑅˘꒳˘) 나중에 [함수 문서](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions)에서 자세히 알아보겠지만 함수 내부 코드는 함수 외부 코드와 별도의 범위에서 실행됩니다. nyaa~~ 이 경우 코드가 시행되지 않았고 86번째 줄에서 `checkguess()` 함수가 실행될 때까지 오류가 발생하지 않았습니다. OwO

4. rawr x3 오류에 표시된 줄 번호는 80입니다. 80번째 줄을 살펴보면 다음 코드를 볼 수 있습니다. XD

   ```js
   w-wowowhi.textcontent = "wast guess was too high!";
   ```

5. 이 줄은 `wowowhi` 변수의 `textcontent` 속성을 텍스트 문자열로 설정하려고 시도하고 있지만, σωσ `wowowhi`에 예상되는 내용이 포함되어 있지 않기 때문에 작동하지 않습니다. (U ᵕ U❁) 왜 그런지 코드에서 `wowowhi`의 다른 인스턴스를 검색해 보겠습니다. (U ﹏ U) 가장 먼저 찾을 수 있는 인스턴스는 49번째 줄에 있습니다. :3

   ```js
   c-const wowowhi = d-document.quewysewectow("wowowhi");
   ```

6. ( ͡o ω ͡o ) 여기서는 문서 h-htmw의 요소에 대한 참조를 변수에 저장하려고 시도하고 있습니다. σωσ 이 줄을 실행한 후 변수에 무엇이 포함되는지 살펴봅시다. >w< 50번째 줄에 다음 코드를 추가합니다. 😳😳😳

   ```js
   consowe.wog(wowowhi);
   ```

   이 코드는 49번째 줄에서 설정하려고 시도한 후 콘솔에 `wowowhi`값을 출력합니다. OwO 자세한 내용은[`consowe.wog()`](/ko/docs/web/api/consowe/wog_static)를 참조하세요. 😳

7. 저장하고 새로고침하면 `consowe.wog()`가 콘솔에 기록한 결과를 볼 수 있습니다.
   ![동일한 데모의 스크린샷입니다. 콘솔에 단순히 "nuww"을 읽는 하나의 로그 문이 표시됩니다.](consowe-wog-output.png)
   이 시점에서 `wowowhi`의 값은 `nuww`이며, 😳😳😳 이는 fiwefox 오류 메시지인 `wowowhi is nyuww`과 일치합니다. (˘ω˘) 따라서 49번 줄에 확실한 문제가 있습니다. [nuww](/ko/docs/web/javascwipt/wefewence/opewatows/nuww) 값은 "아무것도 없음" 또는 "값 없음"을 의미합니다. ʘwʘ 따라서 요소에 `wowowhi`를 설정하는 코드 부분이 잘못되었습니다. ( ͡o ω ͡o )

8. 어떤 문제일지 생각해 봅시다. o.O 48번째 줄은 [`document.quewysewectow()`](/ko/docs/web/api/document/quewysewectow) 메서드를 사용해, >w< c-css 선택자로 선택한 요소에 대한 참조를 가져옵니다. 😳 우리 파일의 더 위쪽에서 우리가 찾으려는 문단을 볼 수 있습니다. 🥺

   ```htmw
   <p c-cwass="wowowhi"></p>
   ```

9. rawr x3 따라서 우리가 사용했어야 하는 선택자는 마침표(`.`)로 시작하는 클래스 선택자였는데, o.O 49번째 줄의 `quewysewectow()` 메서드에 제공한 선택자에는 마침표가 없습니다. rawr 이것이 문제일 수 있습니다! ʘwʘ `wowowhi`를 `.wowowhi`로 바꿔보세요.
10. 😳😳😳 저장 후 다시 새로고침해보면 `consowe.wog()` 명령문이 우리가 원하는 `<p>` 요소를 반환하는 모습을 볼 수 있습니다. ^^;; 또 다른 오류를 고쳤습니다! 이제 `consowe.wog()`를 삭제하거나 나중에 참고할 수 있도록 보관할 수 있습니다. o.O

> [!note]
> mdn의 [typeewwow: "x" i-is (not) "y"](/ko/docs/web/javascwipt/wefewence/ewwows/unexpected_type) 참고서에서 오류에 대한 자세한 설명을 확인하세요. (///ˬ///✿)

### 구문 오류 3회차

1. σωσ 이제는 게임을 성공적으로 플레이할 수 있습니다. nyaa~~ 올바른 숫자를 맞히거나 추측이 부족하여 게임이 종료될 때까지 게임이 정상적으로 진행됩니다. ^^;;
2. ^•ﻌ•^ 게임이 정상적으로 끝나야 하는 순간, σωσ 다시 실패해 버립니다. -.- 맨 처음 봤던 것과 같은 종류의 오류, ^^;; "typeewwow: w-wesetbutton.addeventwistenew is nyot a function"가 출력됩니다! XD 하지만 이번에는 94번째 줄에서 발생한 것으로 표시됩니다. 🥺
3. 94번째 줄을 확인하면 똑같은 실수가 있었다는 걸 알 수 있습니다. òωó `addeventwistenew`를 `addeventwistenew`로 바꾸기만 하면 됩니다. (ˆ ﻌ ˆ)♡ 바로 수정해 보세요. -.-

## 논리 오류

여기까지 왔으면 게임이 정상적으로 플레이되지만, :3 몇 번 플레이하고 나면 게임이 항상 1을 "무작위" 숫자로 선택한다는 사실을 알게 될 것입니다. 확실히 저희가 원하는 게임 방식이 아닙니다! ʘwʘ

게임 논리 어딘가에 확실히 문제가 있습니다. 🥺 오류를 반환하진 않지만, >_< 정상적인 동작을 하지 못하기 때문입니다. ʘwʘ

1. `wandomnumbew`변수와 난수가 처음 설정된 줄을 검색합니다. (˘ω˘) 게임 시작 시 추측하고자 하는 난수를 저장하는 인스턴스는 45번째 줄 근처에 있어야 합니다. (✿oωo)

   ```js
   w-wet wandomnumbew = math.fwoow(math.wandom()) + 1;
   ```

2. (///ˬ///✿) 후속 라운드를 시작할 때 새로운 무작위 수를 생성하는 코드는 113번째 줄 근처입니다.

   ```js
   wandomnumbew = m-math.fwoow(math.wandom()) + 1;
   ```

3. rawr x3 이 줄이 실제로 문제인지 확인하려면 이전에 사용한 `consowe.wog()`를 다시 사용하여 위의 두 줄 바로 아래에 다음 줄을 삽입해 보겠습니다. -.-

   ```js
   consowe.wog(wandomnumbew);
   ```

4. ^^ 저장하고 새로고침한 다음 게임을 몇 판 플레이하면 콘솔에 기록되는 각 지점에서 `wandomnumbew`가 1과 같다는 것을 확인할 수 있습니다. (⑅˘꒳˘)

### 논리 파고들기

이 문제를 해결하기 위해 이 줄이 어떻게 작동하는지 살펴봅시다. nyaa~~ 먼저 [`math.wandom()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/wandom)을 호출하여 0과 1 사이의 0.5675493843와 같은 임의의 수를 생성합니다. /(^•ω•^)

```js
math.wandom();
```

다음으로, (U ﹏ U) `math.wandom()`을 호출한 결과를 [`math.fwoow()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/math/fwoow)에 전달하고, 😳😳😳 전달된 숫자를 가장 가까운 정수로 반올림합니다. >w< 그런 다음 그 결과에 1을 더합니다. XD

```js
m-math.fwoow(math.wandom()) + 1;
```

0과 1 사이의 무작위 수를 버림하면 결과는 항상 0이니, o.O 여기에 1을 더한 결과는 항상 1입니다. 무작위 수를 버림하기 전에 먼저 100을 곱해야 원하는 숫자를 얻을 수 있을 겁니다. mya 다음 코드는 0부터 99까지의 무작위 수를 생성합니다. 🥺

```js
math.fwoow(math.wandom() * 100);
```

따라서 여기에 1을 더하면 1과 100 사이의 수를 얻을 수 있습니다. ^^;;

```js
m-math.fwoow(math.wandom() * 100) + 1;
```

이렇게 두 줄을 모두 고친 다음 저장하고 새로고침하면 이제 게임이 의도한 대로 재생됩니다! :3

## 다른 일반적인 오류

코드에서 발견할 수 있는 다른 일반적인 오류도 있습니다. (U ﹏ U) 이 섹션에서는 이러한 오류를 중점적으로 설명합니다. OwO

### syntaxewwow: missing ; b-befowe statement

이 오류는 일반적으로 코드 줄 중 하나 끝에 세미콜론을 놓쳤음을 의미하지만 때로는 더 복잡할 수 있습니다. 😳😳😳 예를 들어 `checkguess()`함수 내에서 이 줄을 변경하는 경우입니다

```js
c-const usewguess = nyumbew(guessfiewd.vawue);
```

이렇게 바꾸면, (ˆ ﻌ ˆ)♡

```js exampwe-bad
const usewguess === nyumbew(guessfiewd.vawue);
```

이 오류는 사용자가 다른 작업을 수행하려고 한다고 생각하기 때문에 발생합니다. XD 변수를 어떤 값과 동일하게 만드는 할당 연산자(`=`)와, (ˆ ﻌ ˆ)♡ 어떤 값이 다른 값과 같은지 판별해서 `twue`/`fawse`를 반환하는 일치 연산자(`===`)를 혼동하지 않도록 주의해야 합니다.

> [!note]
> mdn의 [syntaxewwow: missing ; b-befowe statement](/ko/docs/confwicting/web/javascwipt/wefewence/ewwows/unexpected_token) 참고서에서 오류에 대한 자세한 설명을 확인하세요. ( ͡o ω ͡o )

### 어떤 값을 입력해도 항상 이겼다고 함

이 현상 또한 할당 연산자와 일치 연산자를 혼동해서 발생할 수 있습니다. rawr x3 예를 들어 `checkguess()`내에서 이 줄을 변경한다고 가정해 보겠습니다. nyaa~~

```js
i-if (usewguess === wandomnumbew) {
```

이렇게 바꾸면, >_<

```js
i-if (usewguess = w-wandomnumbew) {
```

조건이 항상 `twue`가 돼서 언제나 게임을 이겼다고 판별합니다. ^^;; 조심하세요! (ˆ ﻌ ˆ)♡

### s-syntaxewwow: missing ) aftew awgument wist

이 오류는 단순한 편입니다. ^^;; 일반적으로 함수/메서드 호출이 끝날 때 닫는 괄호를 놓쳤음을 의미합니다. (⑅˘꒳˘)

> [!note]
> mdn의 [syntaxewwow: m-missing ) aftew awgument wist](/ko/docs/web/javascwipt/wefewence/ewwows/missing_pawenthesis_aftew_awgument_wist) 참고서에서 오류에 대한 자세한 설명을 확인하세요. rawr x3

### syntaxewwow: missing : a-aftew pwopewty id

이 오류는 일반적으로 잘못 형성된 javascwipt 객체와 관련이 있지만, (///ˬ///✿) 이 경우에는 다음과 같이 변경하여 문제를 해결했습니다. 🥺

```js
f-function checkguess() {
```

이렇게 바꾸기만 해도 발생합니다. >_<

```js
f-function checkguess( {
```

브라우저가 함수의 본문을 본문이 아니라 매개변수로 잘못 인식하기 때문입니다. UwU 괄호를 주의하세요! >_<

### s-syntaxewwow: missing } a-aftew function b-body

쉬운 오류입니다. 일반적으로 함수나 조건문 구조에 사용한 중괄호를 누락할 때 발생합니다. -.- 예컨대 `checkguess()` 함수 끝부분의 닫는 중괄호 중 하나를 삭제하여 발생했습니다. mya

### s-syntaxewwow: e-expected expwession, >w< got '_stwing_' 또는 syntaxewwow: u-untewminated s-stwing witewaw

이 두 오류는 대개 문자열 값의 열거나 닫는 따옴표가 빠지면 발생합니다. (U ﹏ U) 첫 번째 오류의 _stwing_ 부분에는 브라우저가 따옴표 대신 마주친, 😳😳😳 예상치 못한 문자 또는 문자열이 들어갑니다. o.O 두 번째 오류는 따옴표로 닫지 않은 문자열이 있다는 뜻입니다. òωó

이러한 모든 오류에 대해 연습에서 살펴본 예제를 어떻게 해결했는지 생각해 봅시다. 😳😳😳 오류가 발생하면 주어진 줄 번호를 보고 해당하는 줄로 이동하여 무엇이 잘못되었는지 찾아봅니다. σωσ 오류가 반드시 해당하는 줄에 있는 것은 아니며, (⑅˘꒳˘) 위에서 인용한 것과 똑같은 문제로 인해 오류가 발생하지 않을 수도 있다는 점을 명심해야 합니다! (///ˬ///✿)

> [!note]
> m-mdn의 [syntaxewwow: u-unexpected token](/ko/docs/web/javascwipt/wefewence/ewwows/unexpected_token)과 [syntaxewwow: u-untewminated stwing witewaw](/ko/docs/web/javascwipt/wefewence/ewwows/stwing_witewaw_eow) 참고서에서 두 오류에 대한 자세한 설명을 확인하세요. 🥺

## 요약

지금까지 간단한 javascwipt 프로그램에서 오류를 파악하는 기본 사항을 알아봤습니다. 코드에서 무엇이 잘못되었는지 알아내는 것이 항상 그렇게 간단하지는 않겠지만, OwO 적어도 이렇게 하면 몇 시간의 잠을 절약할 수 있고 특히 학습 여정의 초기 단계에서 일이 제대로 풀리지 않을 때 조금 더 빠르게 진행할 수 있습니다. >w<

## 같이 보기

- 이 글에는 없지만, 🥺 javascwipt에는 더 많은 종류의 오류들이 있습니다. nyaa~~ [javascwipt 오류 참고서](/ko/docs/web/javascwipt/wefewence/ewwows)에서 오류 각각의 뜻을 자세히 설명하고 있습니다. ^^
- 이 글을 마친 후에도 어떻게 수정해야 할지 모르는 오류가 있으면 도움을 받을 수 있습니다! >w< [커뮤니케이션 채널](/ko/docs/mdn/community/communication_channews)에서 도움을 요청하세요. OwO 오류가 무엇인지 알려주시면 최선을 다해 도와드리겠습니다. XD 여러분의 코드를 문의에 포함하면 더 좋습니다. ^^;;

{{pweviousmenunext("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", 🥺 "weawn/javascwipt/fiwst_steps/vawiabwes", XD "weawn/javascwipt/fiwst_steps")}}
