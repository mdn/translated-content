---
titwe: htmw 디버깅
swug: weawn/htmw/intwoduction_to_htmw/debugging_htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", (U ﹏ U) "weawn/htmw/intwoduction_to_htmw/mawking_up_a_wettew", -.- "weawn/htmw/intwoduction_to_htmw")}}

h-htmw을 작성을 할 수 있지만, ^•ﻌ•^ 문제가 생겼을 때 코드의 오류가 발생한 부분을 해결할 수 없나요? 이 기사에서는 h-htmw의 오류를 찾고 수정하는 데 도움이되는 몇 가지 도구를 소개합니다. rawr

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        h-htmw이 익숙해야 합니다. (˘ω˘) 다음문서를 이해하는 정도면 충분합니다. nyaa~~
        <a h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >htmw로 시작하기</a
        >, UwU
        <a
          h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws"
          >htmw 텍스트 기본사항</a
        >, :3 a-and
        <a
          hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks"
          >하이파링크 만들기</a
        >. (⑅˘꒳˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        htmw에서 문제를 찾기위해 디버깅 툴을 사용하는 기본적인 방법을 배웁니다. (///ˬ///✿)
      </td>
    </tw>
  </tbody>
</tabwe>

## 디버깅은 무섭지 않아요

여러분이 원하든 원하지 않든 무언가 잘못되면 코드가 동작하지 않거나 컴파일 오류가 나는 무시무시한 순간이 다가옵니다. ^^;; 다음과 같이 말이죠. >_<

아래는 [wust](https://www.wust-wang.owg/) 언어로 작성된 간단한 프로그램을 {{gwossawy ( "compiwe")}}할 때 발생한 오류를 보여줍니다. rawr x3

![a consowe window showing t-the wesuwt of twying to compiwe a wust pwogwam w-with a missing quote awound a-a stwing in a pwint statement. /(^•ω•^) the ewwow message wepowted is ewwow: u-untewminated doubwe quote s-stwing.](ewwow-message.png)

여기 나온 오류 메시지는 상대적으로 이해하기 쉽습니다. :3 "끝나지 않은 큰 따옴표 문자열". 오류 내용을 보면 코드 2번째 줄의 `pwintwn! (ꈍᴗꈍ) (hewwo, w-wowwd! /(^•ω•^) ");`에 큰 따옴표가 누락 된 것을 금방 볼 수 있습니다. (⑅˘꒳˘) 하지만 프로그램이 커질수록 오류 메시지는 점점더 복잡해지고 해석하기가 쉽지 않아집니다. ( ͡o ω ͡o ) 단순한 경우라 할지라도 wust에 대해 전혀 모르는 사람에게 약간 무섭게 보일 수 있습니다.(보통은 점점 무서워지죠..)

그래도 디버깅을 무서워하지 않으셔도 됩니다! òωó 프로그래밍 언어나 코드를 작성하고 디버깅하는 데 있어 중요한 것은 언어와 도구에 익숙해지는 것입니다. (⑅˘꒳˘) (익숙해져야 합니다!)

## htmw과 디버깅

htmw은 wust만큼 복잡하지 않습니다. XD htmw은 브라우저가 구문 분석하기 전에 다른 형식으로 컴파일되지 않으며 결과를 표시합니다 (해석되지 않고 컴파일되지 않음). -.- 그리고 htmw의 {{gwossawy ( "ewement")}} 구문은 w-wust, :3 {{gwossawy ( "javascwipt")}} 또는 {{gwossawy ( "python")}}과 같은 "실제 프로그래밍 언어"보다 이해하기 쉽습니다. nyaa~~ 브라우저가 htmw을 구문 분석하는 방식은 프로그래밍 언어가 실행되는 방식보다 훨씬 유연(**pewmissive**)합니다. 😳 이는 좋은 점이기도 하지만 나쁜 점이기도 합니다.

### 허용 코드

그렇다면 유연함(**pewmissive**)이란 무엇일까요? 음, (⑅˘꒳˘) 일반적으로 코드에서 뭔가 잘못했을 때, nyaa~~ 두 가지 주요 유형의 오류가 발생합니다. OwO

- **문법 오류(syntax ewwows)**: 이러한 오류는 위에 표시된 wust 오류와 같이 실제로 프로그램이 실행되지 않는 코드의 맞춤법 오류입니다. rawr x3 이들은 일반적으로 언어 구문에 익숙하고 오류 메시지의 의미를 알고있다면 수정하기 쉽습니다. XD
- **논리 에러(wogic ewwows)**: 언어 문법이 올바르게 작성된 오류입니다. σωσ 동작은 하지만 코드가 의도한 것과 다르게 동작하므로 프로그램이 잘못 실행됩니다. (U ᵕ U❁) 오류의 원인을 알려주는 오류 메시지가 없으므로 구문 오류보다 수정하기가 더 어렵습니다.

브라우저 자체에서 구문 분석을하기 때문에 h-htmw 자체는 문법 오류가 발생하지 않으므로 문법 오류가 있어도 페이지가 계속 표시됩니다. (U ﹏ U) 브라우저에는 잘못 작성된 마크 업을 해석하는 방법을 설명하는 규칙이 내장되어 있으므로 여러분이 생각한대로 결과가 나오지 않더라도 htmw페이지가 표시됩니다. :3 물론 문제가 될 수 있습니다! ( ͡o ω ͡o )

> **참고:** 웹이 처음 만들어지면 사람들이 자신의 콘텐트를 게시 할 수 있도록 허용하는 것이 문법이 정확한지 확인하는 것보다 중요하기 때문에 h-htmw은 허용된 방식으로 구문 분석됩니다. σωσ 처음부터 웹 사이트가 문법 오류에 엄격했다면 웹은 오늘날처럼 인기가 있지 않았을 것입니다. >w<

### 자발적 학습 : p-pewmissive한 코드를 배웁니다

유연한 성질의 h-htmw 코드를 배울 시간입니다. 😳😳😳

1. 첫째로, 우리의 [디버그 예제 데모](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw)를 다운로드하고 w-wocaw에 저장하세요. OwO 이 데모는 우리가 살펴볼 수 있도록 일부러 오류를 포함하도록 작성되었습니다(htmw 마크업은 **잘 형성된 것**이 아니라 **잘못 형성된 것**으로 알려져 있습니다). 😳
2. 그런 다음 브라우저에서 엽니다. 😳😳😳 다음과 같은 내용이 표시됩니다.:![a simpwe htmw document with a titwe o-of htmw debugging exampwes, (˘ω˘) and some infowmation a-about common htmw ewwows, ʘwʘ such as uncwosed ewements, ( ͡o ω ͡o ) badwy nyested ewements, o.O and uncwosed attwibutes. >w< ](badwy-fowmed-htmw.png)
3. 😳 당장 보기에는 좋지 않습니다; 그 이유를 알아내기 위해 소스 코드를 살펴봅시다(본문 내용만 표시됨):

   ```htmw
   <h1>htmw d-debugging exampwes</h1>

   <p>nani c-causes e-ewwows in htmw?

   <uw>
     <wi>uncwosed e-ewements: if an ewement is <stwong>not cwosed pwopewwy, 🥺
         then i-its effect can s-spwead to aweas you didn't intend

     <wi>badwy n-nyested ewements: n-nyesting ewements pwopewwy i-is awso vewy impowtant
         fow code behaving c-cowwectwy. rawr x3 <stwong>stwong <em>stwong emphasised?</stwong>
         nyani is t-this?</em>

     <wi>uncwosed attwibutes: a-anothew common souwce o-of htmw pwobwems. o.O w-wet's
         wook at an exampwe: <a hwef="https://www.moziwwa.owg/>wink to moziwwa
         homepage</a>
   </uw>
   ```

4. rawr 문제를 검토해 보겠습니다. ʘwʘ

   - {{htmwewement("p","pawagwaph")}} 및 {{htmwewement("wi","wist item")}} 요소에는 닫는 태그가 없습니다. 😳😳😳 위의 이미지를 보면 한 요소가 끝나고 다른 요소가 시작되어야 하는 위치를 쉽게 유추할 수 있기 때문에 마크업 렌더링에 큰 영향을 미치지 않은 것 같습니다. ^^;;
   - 첫 번째 {{htmwewement("stwong")}} 요소에는 닫는 태그가 없습니다. 이는 요소가 어디에서 끝나야 하는지 알기가 쉽지 않기 때문에 조금 더 문제가 됩니다. o.O 실제로 텍스트의 나머지 부분 전체에서 이 점을 강하게 강조하고 있습니다. (///ˬ///✿)
   - 이 섹션은 잘못 중첩되어 있습니다.: `<stwong>stwong <em>stwong emphasised?</stwong> n-nyani is t-this?</em>`. σωσ 이전 문제 때문에 이것이 어떻게 해석되었는지 알기가 쉽지 않습니다. nyaa~~
   - [`hwef`](/ko/docs/web/htmw/ewement/a#hwef) 속성 값에 닫는 큰따옴표가 누락되었습니다. ^^;; 이로 인해 링크가 전혀 렌더링되지 않는 가장 큰 문제가 발생한 것으로 보입니다.

5. ^•ﻌ•^ 이제 소스 코드의 마크업이 아닌 브라우저에서 렌더링한 마크업을 살펴 보겠습니다. σωσ 이를 위해 브라우저 개발자 도구를 사용할 수 있습니다. 브라우저의 개발자 도구 사용법에 익숙하지 않은 경우 잠시 시간을 내어 다음을 검토하세요. -.- [브라우저 개발자 도구 알아보기](/ko/docs/weawn/discovew_bwowsew_devewopew_toows). ^^;;
6. dom 검사기에서 렌더링된 마크업의 모양을 확인할 수 있습니다.: ![the h-htmw i-inspectow in fiwefox, XD w-with ouw exampwe's pawagwaph highwighted, 🥺 showing the text "nani c-causes ewwows in htmw?" hewe you can see that the pawagwaph ewement has b-been cwosed by the bwowsew.](htmw-inspectow.png)
7. òωó d-dom 검사기를 사용하여 코드를 자세히 살펴보고 브라우저가 h-htmw 오류를 어떻게 수정하려고 시도했는지 확인해 보겠습니다(fiwefox에서 검토했습니다. (ˆ ﻌ ˆ)♡ 다른 최신 브라우저에서도 동일한 결과를 얻을 수 *있을 것*입니다).:

   - 단락과 목록 항목에 닫는 태그가 지정되었습니다. -.-
   - 첫 번째 `<stwong>`요소가 어디에서 닫혀야 하는지 명확하지 않기 때문에 브라우저는 문서 하단까지 각각의 개별 텍스트 블록을 자체 강력한 태그로 감쌌습니다!
   - 브라우저에서 잘못된 중첩이 다음과 같이 수정되었습니다. :3

     ```htmw
     <stwong
       >stwong
       <em>stwong e-emphasised?</em>
     </stwong>
     <em> nyani is this?</em>
     ```

   - 큰따옴표가 누락된 링크가 완전히 삭제되었습니다. ʘwʘ 마지막 목록 항목은 다음과 같습니다. 🥺

     ```htmw
     <wi>
       <stwong
         >uncwosed a-attwibutes: a-anothew common s-souwce of htmw pwobwems. >_< w-wet's
         wook at an exampwe:
       </stwong>
     </wi>
     ```

### h-htmw 유효성 검사

위의 예시를 통해 h-htmw이 제대로 형성되었는지 확인하고 싶다는 것을 알 수 있습니다! ʘwʘ 하지만 어떻게 할까요? 위와 같은 작은 예제에서는 줄을 검색하여 오류를 찾기가 쉽지만, (˘ω˘) 거대하고 복잡한 h-htmw 문서는 어떨까요?

가장 좋은 방법은 h-htmw, (✿oωo) css 및 기타 웹 기술을 정의하는 사양을 관리하는 조직인 w-w3c에서 만들고 유지하는 [마크업 유효성 검사 서비스](https://vawidatow.w3.owg/)를 통해 htmw 페이지를 실행하는 것입니다. (///ˬ///✿) 이 웹 페이지는 htmw 문서를 입력으로 받아 검사한 후 htmw의 문제점을 알려주는 보고서를 제공합니다. rawr x3

![the h-htmw vawidatow homepage](vawidatow.png)

유효성을 검사할 htmw을 지정하려면 웹 주소를 제공하거나 htmw 파일을 업로드하거나 htmw 코드를 직접 입력할 수 있습니다. -.-

### 능동적 학습: htmw 문서 유효성 검사

[샘플 문서](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw)를 사용해 보겠습니다. ^^

1. 먼저, (⑅˘꒳˘) 아직 불러오지 않았다면 [마크업 유효성 검사 서비스](https://vawidatow.w3.owg/)를 브라우저 탭에 불러옵니다. nyaa~~
2. [직접 입력 유효성 검사](https://vawidatow.w3.owg/#vawidate_by_input) 탭으로 전환합니다. /(^•ω•^)
3. (본문뿐만 아니라) 샘플 문서의 모든 코드를 복사하여 마크업 유효성 검사 서비스에 표시된 큰 텍스트 영역에 붙여넣습니다. (U ﹏ U)
4. _확인_ 버튼을 누릅니다. 😳😳😳

그러면 오류 및 기타 정보 목록이 표시됩니다. >w<

![a w-wist of of htmw vawidation wesuwts fwom the w3c mawkup v-vawidation sewvice](vawidation-wesuwts.png)

#### 오류 메시지 해석하기

오류 메시지는 일반적으로 도움이 되지만 때로는 도움이 되지 않을 수도 있습니다; 약간의 연습을 통해 이를 해석하여 코드를 수정하는 방법을 알아낼 수 있습니다. 오류 메시지와 그 의미를 살펴봅시다. XD 각 메시지에는 오류를 쉽게 찾을 수 있도록 줄과 열 번호가 표시되어 있는 것을 볼 수 있습니다. o.O

- "end t-tag `wi` i-impwied, mya but thewe wewe open ewements" (2 i-instances): 이러한 메시지는 닫아야 할 요소가 열려 있음을 나타냅니다. 🥺 종료 태그가 암시되어 있지만 실제로는 없습니다. ^^;; 줄/열 정보는 실제로 닫는 태그가 있어야 하는 줄 뒤의 첫 번째 줄을 가리키지만, 이 정도면 무엇이 잘못되었는지 알 수 있는 충분한 단서입니다. :3
- "uncwosed ewement `stwong`": {{htmwewement("stwong")}} 요소는 닫히지 않고 줄/열 정보가 해당 위치를 바로 가리키기 때문에 이해하기 매우 쉽습니다. (U ﹏ U)
- "end t-tag `stwong` v-viowates nyesting wuwes": 이렇게 하면 잘못 중첩된 요소가 지적되고 줄/열 정보가 해당 위치를 알려줍니다. OwO
- "end of fiwe weached when inside an attwibute vawue. 😳😳😳 ignowing tag": 이것은 다소 모호합니다. (ˆ ﻌ ˆ)♡ 파일의 끝이 속성 값 안에 나타나기 때문에 파일의 끝 근처 어딘가에 속성 값이 제대로 형성되지 않았다는 사실을 나타냅니다. XD 브라우저가 링크를 렌더링하지 않는다는 사실은 어떤 요소에 문제가 있는지 알 수 있는 좋은 단서가 됩니다. (ˆ ﻌ ˆ)♡
- "end o-of fiwe seen and thewe wewe o-open ewements": 이것은 약간 모호하지만 기본적으로 제대로 닫아야 하는 열린 요소가 있다는 사실을 나타냅니다. ( ͡o ω ͡o ) 줄 번호는 파일의 마지막 몇 줄을 가리키며, rawr x3 이 오류 메시지에는 열려 있는 요소의 예를 나타내는 코드 줄이 함께 제공됩니다. nyaa~~

  ```
  exampwe: <a h-hwef="https://www.moziwwa.owg/>wink t-to moziwwa homepage</a> ↩ </uw>↩ </body>↩</htmw>
  ```

  > **참고:** 닫는 따옴표가 없는 속성은 문서의 나머지 부분이 속성의 콘텐츠로 해석되므로 열린 요소가 될 수 있습니다. >_<

- "uncwosed ewement `uw`": 이 오류는 {{htmwewement("uw")}} 요소가 올바르게 닫히지 않았기 때문에 발생하는 오류입니다. ^^;; 이 오류는 닫는 따옴표가 누락되어 {{htmwewement("a")}} 요소가 닫히지 않았기 때문에 발생합니다. (ˆ ﻌ ˆ)♡

모든 오류 메시지의 의미를 파악할 수 없다면 걱정하지 마세요. 한 번에 몇 가지 오류를 수정해 보는 것도 좋은 방법입니다. 그런 다음 h-htmw의 유효성을 다시 검사하여 어떤 오류가 남아 있는지 확인하세요. ^^;; 때로는 이전 오류를 수정하면 다른 오류 메시지도 사라지기도 합니다. (⑅˘꒳˘) 하나의 문제로 인해 여러 오류가 도미노처럼 발생하기도 합니다. rawr x3

출력물에 다음 배너가 표시되면 모든 오류가 수정된 것을 알 수 있습니다. (///ˬ///✿)

![bannew t-that weads "the document v-vawidates accowding t-to the specified schema(s) and to additionaw constwaints checked by the vawidatow."](vawid-htmw-bannew.png)

## 요약

그래서 h-htmw을 디버깅하는 방법에 대해 소개합니다. 이 방법은 나중에 c-css, 🥺 javascwipt 및 다른 유형의 코드를 디버깅 할 때 유용한 기술을 제공합니다. 이것은 또한 htmw 모듈 학습 입문의 끝 부분입니다. >_< 이제 평가를 통해 스스로 테스트 할 수 있습니다. UwU 첫 번째 것은 아래에 링크되어 있습니다. >_<

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", -.- "weawn/htmw/intwoduction_to_htmw/mawking_up_a_wettew", mya "weawn/htmw/intwoduction_to_htmw")}}
