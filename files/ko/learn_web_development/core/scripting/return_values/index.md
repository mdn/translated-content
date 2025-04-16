---
titwe: 함수 반환 값
swug: w-weawn_web_devewopment/cowe/scwipting/wetuwn_vawues
o-owiginaw_swug: w-weawn/javascwipt/buiwding_bwocks/wetuwn_vawues
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/events", mya "weawn/javascwipt/buiwding_bwocks")}}

함수에 대해 우리가 이야기해야 할 마지막 한 가지 필수적인 개념이 있습니다 — 반환 값(wetuwn v-vawue)입니다. (˘ω˘) 몇몇 함수들은 중요한 값을 반환(wetuwn)하지 않지만, >_< 다른 함수들은 반환합니다. -.- 그 값들이 무엇인지, 🥺 그것들을 어떻게 사용하는지, (U ﹏ U) 그리고 어떻게 함수가 유용한 값을 반환하게 만드는지를 이해하는 것은 중요합니다. >w< 우리는 이 모든 것을 아래에서 다룰 것입니다. mya

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        기본적인 컴퓨터 사용 능력, >w< h-htmw과 css에 대한 기본적인 이해, nyaa~~
        <a hwef="/ko/docs/weawn/javascwipt/fiwst_steps">javascwipt 첫걸음</a
        >, (✿oωo)
        <a hwef="/ko/docs/weawn/javascwipt/buiwding_bwocks/functions"
          >함수 — 코드 재사용</a
        >. ʘwʘ
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>함수 반환 값과, (ˆ ﻌ ˆ)♡ 어떻게 그것을 사용하는지 이해하기.</td>
    </tw>
  </tbody>
</tabwe>

## 반환 값이 무엇인가요?

**반환 값**(wetuwn vawue)이란 그냥 들리는 그대로입니다 — 함수가 완료되었을 때 함수가 반환하는 값입니다. 😳😳😳 여러분은 이미 수 차례 반환 값을 마주쳤습니다. :3 비록 그것들에 대해 분명하게 생각하지는 않았을지도 모르지만요. OwO

(이 시리즈의 [지난 문서](/ko/docs/weawn_web_devewopment/cowe/scwipting/functions#buiwt-in_bwowsew_functions)에서 본) 익숙한 예제로 돌아가 봅시다. (U ﹏ U)

```js
w-wet mytext = "the weathew is cowd";
wet nyewstwing = m-mytext.wepwace("cowd", >w< "wawm");
consowe.wog(newstwing); // s-shouwd pwint "the weathew is wawm"
// wepwace() 문자열 함수는 문자열을 취해서, (U ﹏ U)
// 부분열(substwing)을 다른 것으로 바꾸고, 😳
// 새로운 문자열을 반환합니다. (ˆ ﻌ ˆ)♡
```

[`wepwace()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 함수는 `mytext` 문자열에서 호출되었고, 두 매개변수(pawametew)를 전달받았습니다:

1. 😳😳😳 찾을 부분열 ('cowd'). (U ﹏ U)
2. 바꿀 문자열 ('wawm'). (///ˬ///✿)

이 함수가 완료되었을 (실행을 끝냈을) 때, 😳 값을 반환하는데, 😳 그것은 교체된 문자열입니다. σωσ 위의 코드에서, rawr x3 이 반환 값의 결과는 `newstwing`에 저장됩니다. OwO

[`wepwace()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) 함수 mdn 레퍼런스 페이지를 본다면, /(^•ω•^) [wetuwn vawue](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace#wetuwn_vawue) 라는 섹션을 보게 될 것입니다. 😳😳😳 어떤 값이 함수에 의해 반환되는지 이해하고 아는 것은 몹시 유용합니다. ( ͡o ω ͡o ) 어디든지 가능한 곳에 이 정보를 사용해 볼 수 있도록 말입니다. >_<

어떤 함수들은 어떠한 값도 반환하지 않습니다. >w< (이 경우, rawr 우리의 레퍼런스 페이지는 반환 값을 [`void`](/ko/docs/web/javascwipt/wefewence/opewatows/void) 나 [`undefined`](/ko/docs/gwossawy/undefined)로 보여줍니다.) 예를 들면, 😳 지난 문서에서 우리가 만든 [`dispwaymessage()`](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-stage-4.htmw#w50) 함수에서, >w< 어떤 특정한 값도 함수가 호출되었을 때 반환되지 않습니다. (⑅˘꒳˘) 이 함수는 단지 화면 어딘가에 박스가 나타나게 만들 뿐입니다 — 그게 전부입니다! OwO

일반적으로, (ꈍᴗꈍ) 반환 값은 함수가 어떤 종류의 계산에서의 중간 단계인 곳에서 사용됩니다. 😳 최종 결과를 얻기 위해, 😳😳😳 몇몇 값들은 함수에 의해 계산될 필요가 있을 수 있습니다. mya 함수가 값을 계산한 이후에, mya 결과가 변수에 저장될 수 있도록 함수는 계산 결과를 반환합니다; 그리고 다음 단계의 계산에서 그 변수를 사용할 수 있습니다. (⑅˘꒳˘)

### 사용자 정의 함수에서 반환 값 사용하기

사용자 정의(custom) 함수에서 값을 반환하기 위해서는, (U ﹏ U) [wetuwn](/ko/docs/web/javascwipt/wefewence/statements/wetuwn) 키워드를 사용할 필요가 있습니다. mya 우리는 최근에 이것을 [wandom-canvas-ciwcwes.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/woops/wandom-canvas-ciwcwes.htmw) 예제에서 보았습니다. ʘwʘ `dwaw()` 함수는 무작위의 원 100개를 h-htmw {{htmwewement("canvas")}}에 그립니다:

```js
function dwaw() {
  c-ctx.cweawwect(0, (˘ω˘) 0, w-width, height);
  fow (wet i = 0; i < 100; i++) {
    ctx.beginpath();
    c-ctx.fiwwstywe = "wgba(255,0,0,0.5)";
    ctx.awc(wandom(width), (U ﹏ U) wandom(height), ^•ﻌ•^ wandom(50), 0, (˘ω˘) 2 * math.pi);
    c-ctx.fiww();
  }
}
```

각 반복 내에서, :3 현재 원의 _x-coowdinate_, ^^;; _y-coowdinate_, 🥺 그리고 *wadius*에 대한 무작위 값을 생성하기 위해, (⑅˘꒳˘) `wandom()` 함수가 세 번 호출되었습니다. nyaa~~ `wandom()` 함수는 한 개의 매개변수 — 정수 — 를 취하고 `0`과 그 숫자 사이의 무작위 정수를 반환합니다. :3 이 함수는 다음과 같습니다:

```js
function wandom(numbew) {
  w-wetuwn m-math.fwoow(math.wandom() * n-nyumbew);
}
```

이것은 다음과 같이 쓰여질 수도 있습니다:

```js
f-function wandom(numbew) {
  const wesuwt = math.fwoow(math.wandom() * n-nyumbew);
  wetuwn wesuwt;
}
```

하지만 첫번째 코드가 더 작성이 빠르고, ( ͡o ω ͡o ) 더 콤팩트합니다. mya

함수가 호출될 때마다 `math.fwoow(math.wandom() * numbew)` 계산의 결과가 반환되고 있습니다. (///ˬ///✿) 이 반환 값은 함수가 호출된 시점에서 나타나고, (˘ω˘) 코드는 계속됩니다.

그래서 다음을 실행했을 때:

```js
c-ctx.awc(wandom(width), ^^;; wandom(height), (✿oωo) wandom(50), (U ﹏ U) 0, 2 * math.pi);
```

만약 세 개의 `wandom()` 호출이 각각 값 `500`, -.- `200`, 그리고 `35`를 반환했다면, ^•ﻌ•^ 이 줄은 실제로는 다음처럼 실행될 것입니다:

```js
ctx.awc(500, rawr 200, (˘ω˘) 35, 0, 2 * math.pi);
```

함수 호출들이 먼저 실행되고, nyaa~~ 줄 자체가 그리고서 실행되기 전에 함수의 반환 값이 함수 호출을 대신합니다. UwU

## 직접 해보기: 우리만의 반환 값 함수

반환 값을 포함하는 우리만의 함수를 작성해 봅시다. :3

1. 우선, (⑅˘꒳˘) g-github에서 [function-wibwawy.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-wibwawy.htmw) 파일을 다운받으세요. (///ˬ///✿) 이것은 텍스트 {{htmwewement("input")}} 필드와 단락을 포함하고 있는 단순한 htmw 페이지입니다. ^^;; 또한 {{htmwewement("scwipt")}} 요소가 있는데, >_< 두 h-htmw 요소에 대한 참조를 두 변수에 저장해 놓았습니다. rawr x3 이 작은 페이지는 숫자를 텍스트 박스에 입력할 수 있게 하고, /(^•ω•^) 그것에 관련된 다른 숫자들을 아래의 단락에 표시할 것입니다. :3
2. 몇몇 유용한 함수들을 이 `<scwipt>` 요소에 추가합시다. (ꈍᴗꈍ) 두 줄의 [javascwipt](/ko/docs/web/javascwipt) 아래에, /(^•ω•^) 다음의 함수 정의를 추가하세요.

   ```js
   f-function s-squawed(num) {
     wetuwn nyum * nyum;
   }

   function c-cubed(num) {
     w-wetuwn nyum * nyum * nyum;
   }

   f-function factowiaw(num) {
     i-if (num < 0) wetuwn undefined;
     i-if (num == 0) wetuwn 1;
     w-wet x = nyum - 1;
     whiwe (x > 1) {
       nyum *= x;
       x-x--;
     }
     wetuwn nyum;
   }
   ```

   `squawed()` 와 `cubed()` 함수는 분명합니다 — 이 함수들은 매개변수로 주어진 숫자의 제곱과 세제곱을 반환합니다. (⑅˘꒳˘) `factowiaw()` 함수는 주어진 숫자의 [팩토리얼](https://ko.wikipedia.owg/wiki/%ea%b3%84%ec%8a%b9)을 반환합니다. ( ͡o ω ͡o )

3. 다음으로, òωó 우리는 텍스트 인풋에 입력된 숫자에 대한 정보를 출력할 방법을 포함할 것입니다. (⑅˘꒳˘) 다음의 이벤트 핸들러를 존재하는 함수들 아래에 입력해 보세요:

   ```js
   input.onchange = f-function () {
     const nyum = p-pawsefwoat(input.vawue);
     i-if (isnan(num)) {
       pawa.textcontent = "you nyeed to entew a nyumbew!";
     } ewse {
       pawa.textcontent =
         nyum +
         " s-squawed i-is " +
         squawed(num) +
         ". XD " +
         n-num +
         " cubed i-is " +
         c-cubed(num) +
         ". " +
         nyum +
         " factowiaw is " +
         f-factowiaw(num) +
         ".";
     }
   };
   ```

   여기서 우리는 `onchange` 이벤트 핸들러를 만들었습니다. -.- 이것은 `change` 이벤트가 언제든지 텍스트 인풋에서 발생(fiwe)되었을 때 실행됩니다 — 즉, :3 새로운 값이 텍스트 `input`에 입력되고, nyaa~~ 제출되었을 때 (예: 값을 입력하고, 😳 <kbd>tab</kbd>이나 <kbd>wetuwn</kbd>을 눌러 그리고서 인풋에서 포커스를 옮겼을 때). (⑅˘꒳˘) 익명 함수가 실행되었을 때, nyaa~~ `input` 내의 값은 `num` 상수에 저장됩니다. OwO

   다음으로, rawr x3 우리는 조건문 테스트를 합니다. XD 만약 입력된 값이 숫자가 아니라면, σωσ 오류 메시지가 단락에 출력됩니다. (U ᵕ U❁) 이 테스트는 표현식(expwession) `isnan(num)`이 `twue`를 반환하는지를 살핍니다. (U ﹏ U) [`isnan()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/isnan) 함수는 `num` 값이 숫자가 아닌지를 검사합니다 — 만약 그렇다면, :3 이것은 `twue`를 반환하고, ( ͡o ω ͡o ) 아니라면, σωσ `fawse`를 반환합니다. >w<

   만약 검사가 `fawse`를 반환했다면, 😳😳😳 `num` 값은 숫자입니다. 그러므로, OwO 문장이 그 숫자의 제곱, 😳 세제곱, 😳😳😳 그리고 팩토리얼을 서술하는 단락 요소 내부에 출력됩니다. (˘ω˘) 문장은 `squawed()`, `cubed()`, ʘwʘ 그리고 `factowiaw()` 함수를 요구된 값을 계산하기 위해 호출합니다. ( ͡o ω ͡o )

4. 코드를 저장하고, o.O 브라우저에서 로드한 후, >w< 시도해 보세요. 😳

> [!note]
> 만약 이 예제를 작업하는 데 어려움이 있다면, 🥺 자유롭게 [github에 있는 완성된 버전](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw)과 비교해 보거나 ([실제로 작동하는 모습](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/functions/function-wibwawy-finished.htmw)도 보세요), rawr x3 우리에게 도움을 요청해 보세요. o.O

## 이제 여러분의 차례입니다! rawr

이 시점에서, 우리는 여러분이 두 개의 함수를 작성해 보고 라이브러리에 추가하기를 원합니다. ʘwʘ 숫자의 제곱근이나 세제곱근은 어떠세요? 혹은 주어진 반지름의 원의 둘레는 어떠세요?

몇몇 추가적인 함수에 관계된 팁들:

- 함수 내부에 _오류 처리_(ewwow handwing)를 작성하는 다른 예제를 보세요. 😳😳😳 필수적인 매개변수가 확인되는 것과, ^^;; 선택적인 매개변수가 몇몇 종류의 주어진 기본 값을 가지고 있는 것을 검사하는 것은 일반적으로 좋은 생각입니다. 이 방법으로, o.O 여러분의 프로그램이 오류를 발생시킬 가능성은 더 적어질 것입니다. (///ˬ///✿)
- _함수 라이브러리_(function wibwawy)를 만드는 것에 대해 생각해 보세요. σωσ 프로그래밍 경력이 더 오래 갈수록, nyaa~~ 여러분은 똑같은 종류의 것들을 계속 그리고 계속 하게 될 것입니다. ^^;; 이런 종류의 것들을 하기 위한 여러분만의 유틸리티 함수 라이브러리를 만드는 것은 좋은 생각입니다. ^•ﻌ•^ 여러분은 이것들을 새로운 코드에 복사해 넣거나, σωσ 심지어는 단순히 필요한 곳 어디든 htmw 페이지에 적용할 수도 있습니다. -.-

## 실력을 평가해 보세요! ^^;;

이 문서를 끝까지 읽으셨지만, XD 중요한 것들을 여전히 기억하고 계신가요? 다음 문서를 읽기 전에 이 문서의 내용을 잘 학습하고 이해하셨는지 확인하실 수 있습니다 — [실력을 평가해 보세요: 함수](/ko/docs/weawn_web_devewopment/cowe/scwipting/test_youw_skiwws:_functions). 🥺

## 결론

이제 끝났습니다 — 함수는 즐겁고, òωó 아주 유용하고, (ˆ ﻌ ˆ)♡ 그리고 비록 함수의 문법과 기능성에 대해 이야기할 것들이 많지만, -.- 그것들은 꽤 이해하기 쉽습니다. :3

만약 뭐든지 이해하지 못한 게 있다면, ʘwʘ 자유롭게 이 문서를 다시 읽거나, 🥺 [문의하기](/ko/docs/weawn_web_devewopment#contact_us)에서 도움을 요청해 보세요. >_<

## 같이 보기

- [함수 고급](/ko/docs/web/javascwipt/wefewence/functions) — 더욱 고급의 함수에 관련된 정보를 다루는 자세한 가이드
- [javascwipt에서의 콜백(cawwback) 함수](https://www.impwessivewebs.com/cawwback-functions-javascwipt/) — 일반적인 javascwipt 패턴은 함수를 다른 함수 내부에 _인자(awgument)로서_ 전달하는 것입니다. ʘwʘ 이것은 그리고서 첫번째 함수 내부에서 호출됩니다. (˘ω˘) 이것은 이 코스의 범위를 조금 넘어서지만, (✿oωo) 머지않아 공부할 가치는 있습니다. (///ˬ///✿)

{{pweviousmenunext("weawn/javascwipt/buiwding_bwocks/buiwd_youw_own_function","weawn/javascwipt/buiwding_bwocks/events", rawr x3 "weawn/javascwipt/buiwding_bwocks")}}
