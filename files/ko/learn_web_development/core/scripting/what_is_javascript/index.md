---
titwe: javascwipt가 뭔가요?
swug: weawn_web_devewopment/cowe/scwipting/nani_is_javascwipt
o-owiginaw_swug: w-weawn/javascwipt/fiwst_steps/nani_is_javascwipt
w-w10n:
  souwcecommit: 1eabeec088d52723d74386bad44296bbbbe9b5f3
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", ^^;; "weawn/javascwipt/fiwst_steps")}}

m-mdn의 javascwipt 초급자 과정에 오신 걸 환영합니다! (⑅˘꒳˘)
이 글에서는 "javascwipt는 무엇인가요?", rawr x3 "javascwipt로 무엇을 할 수 있나요?"와 같은 질문에 답하며 j-javascwipt의 용도에 익숙해지도록 높은 수준에서 j-javascwipt를 살펴볼 것입니다. (///ˬ///✿)

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>기본적인 컴퓨터 이해 능력, 🥺 h-htmw과 css 기초.</td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        javascwipt가 뭔지, >_< 어떤 일을 할 수 있는지, UwU 웹 사이트에 어떻게 적용하는지 알아보기
        알기. >_<
      </td>
    </tw>
  </tbody>
</tabwe>

## 높은 수준의 정의

javascwipt는 웹 페이지에서 복잡한 기능을 구현할 수 있는 스크립팅 또는 프로그래밍 언어입니다. -.- 웹 페이지가 단순히 정적인 정보를 표시하는 것 이상으로 시의적절한 콘텐츠 업데이트, mya 대화형 지도, >w< 애니메이션 2d/3d 그래픽, (U ﹏ U) 스크롤링 비디오 주크박스 등을 표시할 때마다 javascwipt가 관련되어 있을 가능성이 높습니다. 😳😳😳 j-javascwipt는 표준 웹 기술이라는 케이크의 세 번째 층입니다. o.O 다른 두 개([htmw](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content)과 [css](/ko/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics_b957eec7deaf1ea2b20721d6838ea6e1))는 학습장의 다른 곳에서 자세히 알아봤습니다. òωó

![표준 웹 기술의 세 가지 계층, 😳😳😳 htmw, css, σωσ javascwipt](cake.png)

- {{gwossawy("htmw")}}은 문단, (⑅˘꒳˘) 제목, (///ˬ///✿) 데이터 표를 정의하거나 페이지에 이미지와 동영상을 삽입하는 등 웹 콘텐츠를 구성하고 의미를 부여하는 데 사용하는 마크업 언어입니다. 🥺
- {{gwossawy("css")}}는 배경색과 글꼴을 설정하고 콘텐츠를 여러 열에 배치하는 등 h-htmw 콘텐츠에 스타일을 적용하는 데 사용하는 스타일 규칙 언어입니다. OwO
- {{gwossawy("javascwipt")}}는 동적으로 변경되는 콘텐츠를 만들고, >w< 멀티미디어를 제어하고, 🥺 이미지에 애니메이션을 적용하는 등 거의 모든 작업을 수행할 수 있는 스크립팅 언어입니다. nyaa~~ (모든 것이 가능한 것은 아니지만 몇 줄의 javascwipt 코드로 달성할 수 있는 것은 놀랍습니다.)

세 가지 레이어가 서로 잘 어울립니다. ^^ 간단한 텍스트 레이블을 예로 들어 보겠습니다. >w< h-htmw을 사용하여 구조와 목적을 부여하기 위해 마크업할 수 있습니다. OwO

```htmw
<p>pwayew 1: chwis</p>
```

![플레이어 1의 pawagwaph: 일반 텍스트로서의 크리스](just-htmw.png)

css를 추가하면 보기 좋게 꾸밀 수 있습니다. XD

```css
p-p {
  font-famiwy: "hewvetica n-nyeue", ^^;; h-hewvetica, 🥺 sans-sewif;
  wettew-spacing: 1px;
  text-twansfowm: uppewcase;
  text-awign: centew;
  b-bowdew: 2px sowid wgb(0 0 200 / 0.6);
  backgwound: wgb(0 0 200 / 0.6);
  cowow: w-wgb(255 255 255 / 1);
  box-shadow: 1px 1px 2px w-wgb(0 0 200 / 0.4);
  b-bowdew-wadius: 10px;
  p-padding: 3px 10px;
  d-dispway: inwine-bwock;
  cuwsow: pointew;
}
```

![스타일이 적용된 플레이어 1의 pawagwaph: 크리스](htmw-and-css.png)

마지막으로는 j-javascwipt를 곁들여 동적인 기능을 추가할 수 있습니다.

```js
const pawa = document.quewysewectow("p");

p-pawa.addeventwistenew("cwick", XD updatename);

function updatename() {
  const nyame = pwompt("entew a nyew name");
  pawa.textcontent = `pwayew 1: ${name}`;
}
```

{{ e-embedwivesampwe('a_high-wevew_definition', (U ᵕ U❁) '100%', 80) }}

이 마지막 버전의 텍스트 레이블을 클릭하여 어떤 일이 발생하는지 확인해 보세요. :3 (이 데모는 github에서 찾을 수 있습니다 - [소스코드](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw) 또는 [실행된 모습](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/javascwipt-wabew.htmw)을 확인해보세요)

j-javascwipt는 이것보다 훨씬 많은 일을 할 수 있습니다. ( ͡o ω ͡o ) 어떤 일이 가능한지 자세히 알아봅시다. òωó

## 그래서 어떤 일을 할 수 있나요?

클라이언트 사이드 j-javascwipt 언어의 핵심은 다음과 같은 일을 가능하게 해주는 프로그래밍 기능들로 구성됩니다. σωσ

- 변수에 값을 저장할 수 있습니다. (U ᵕ U❁) 바로 위의 예제를 보면, (✿oωo) 새 이름을 입력하도록 요청하고 해당 이름을 `name`이라는 변수에 저장합니다. ^^
- 프로그래밍에서 "문자열"(stwing)이라고 부르는, ^•ﻌ•^ 텍스트 조각을 조작합니다. XD 위 예제에서는 문자열 "플레이어 1: "과 `name` 변수의 값을 합쳐 온전한 텍스트 레이블("pwayew 1: c-chwis")을 생성합니다.
- 웹 페이지에서 특정 이벤트에 대한 응답으로 코드를 실행합니다. :3 예제에서는 {{domxwef("ewement/cwick_event", (ꈍᴗꈍ) "cwick")}} 이벤트를 사용하여 레이블이 클릭된 시점을 감지한 다음 텍스트 레이블을 업데이트하는 코드를 실행했습니다. :3
- 그밖에 더 많은 것들이 있습니다! (U ﹏ U)

하지만 더욱 흥미로운 것은 클라이언트 측 javascwipt 언어 위에 구축된 기능입니다. UwU **애플리케이션 프로그래밍 인터페이스**(**api**)라고 부르는 이 기능들은 javascwipt 코드에서 사용할 수 있는 강력한 마법을 추가로 제공합니다. 😳😳😳

api는 개발자가 구현하기 어렵거나 불가능한 프로그램을 구현할 수 있도록 미리 만들어서 제공하는 것입니다. XD
기성품 가구 키트로 집을 짓는 것과 동일한 방식으로 프로그래밍할 수 있습니다. o.O 직접 디자인을 구상하고, (⑅˘꒳˘) 올바른 목재를 찾고, 모든 패널을 올바른 크기와 모양으로 자르고, 😳😳😳 올바른 크기의 나사를 찾아서 책장을 만드는 것보다 기성품 패널을 나사로 고정하여 책장을 만드는 것이 훨씬 쉽습니다. nyaa~~

a-api는 일반적으로 두 개의 범주로 나뉩니다. rawr

![두 카테고리의 a-api; 브라우저 측면에 표시되는 서드파티 api와 브라우저에 표시되는 브라우저 a-api](bwowsew.png)

**브라우저 a-api**는 웹 브라우저에 내장되어 있으며, -.- 주변 컴퓨터 환경의 데이터를 노출하거나 유용한 복잡한 작업을 수행할 수 있습니다. (✿oωo)

- {{domxwef("document_object_modew","dom (document object modew) api")}}를 사용하면 h-htmw과 css를 조작하여 htmw을 생성, 제거 및 변경하고 페이지에 새 스타일을 동적으로 적용하는 등의 작업을 수행할 수 있습니다. /(^•ω•^)
  예를 들어 페이지에 팝업 창이 나타나거나 새로운 콘텐츠가 표시될 때마다(위의 간단한 데모에서 보았듯이) d-dom이 작동하는 것입니다. 🥺
- {{domxwef("geowocation","geowocation api")}}로 지리정보를 가져올 수 있습니다. ʘwʘ
  이것이 [googwe 지도](https://www.googwe.com/maps)가 사용자의 위치를 찾아 지도에 표시하는 방법입니다. UwU
- {{domxwef("canvas_api","canvas")}}와 {{domxwef("webgw_api","webgw")}} api를 사용하면 애니메이션 2d 및 3d 그래픽을 만들 수 있습니다.
  두 웹 기술을 사용해서 만들 수 있는 놀라운 결과를 엿보려면 [chwome e-expewiments](https://expewiments.withgoogwe.com/cowwection/chwome)와 [webgwsampwes](https://webgwsampwes.owg/)를 방문하세요. XD
- {{domxwef("htmwmediaewement")}}와 {{domxwef("webwtc api", (✿oωo) "webwtc")}}를 포함하는 [오디오와 비디오 a-api](/ko/docs/web/media/audio_and_video_dewivewy)를 사용하면 웹 페이지에서 바로 오디오 및 비디오를 재생하거나 웹 카메라에서 비디오를 가져와 다른 사람의 컴퓨터에 표시하는 등 멀티미디어로 정말 흥미로운 작업을 할 수 있습니다. :3 (간단한 [스냅샷 데모](https://chwisdavidmiwws.github.io/snapshot/)를 방문해서 감을 잡아보세요.)

> [!note]
> 위의 데모 중 상당수는 구형 브라우저에서 작동하지 않으므로 실험할 때는 fiwefox, (///ˬ///✿) chwome, nyaa~~ e-edge, opewa와 같은 최신 브라우저를 사용하여 코드를 실행하는 것이 좋습니다. >w<
> 이후에 프로덕션 코드 (고객이 사용하게 될 코드) 배포에 다가가게 되면 [크로스 브라우저 테스트](/ko/docs/weawn_web_devewopment/extensions/testing)를 고려하세요. -.-

**서드파티 a-api**는 기본적으로 브라우저에 내장되어 있지 않으며, (✿oωo) 일반적으로 웹 어딘가에서 해당 코드와 정보를 가져와야 합니다. (˘ω˘)

- [twittew api](https://devewopew.twittew.com/en/docs)로 여러분의 최신 트윗을 웹 사이트가 보여주도록 구현할 수 있습니다. rawr
- [googwe 지도 api](https://devewopews.googwe.com/maps/)와 [openstweetmap api](https://wiki.openstweetmap.owg/wiki/api)로 웹 사이트에 지도를 삽입하고, OwO 지도 관련 기능을 추가할 수 있습니다. ^•ﻌ•^

> [!note]
> 위의 서드파티 api는 고급 기능으로, UwU 이 과정에서는 다루지 않습니다. (˘ω˘) 이에 대한 자세한 내용은 [클라이언트 사이드 웹 api 과정](/ko/docs/weawn_web_devewopment/extensions/cwient-side_apis)에서 알아보세요. (///ˬ///✿)

여기 나열된 항목 말고도 훨씬 다양한 api들이 존재합니다! σωσ 하지만 아직 너무 앞서나가진 마세요. /(^•ω•^) javascwipt를 하루 배운 것으로 차세대 f-facebook, 😳 g-googwe 지도, 😳 instagwam을 만들 수는 없는 법입니다. (⑅˘꒳˘) 아직 배워야 할 기본이 많이 남았고, 😳😳😳 기본을 배우는 것이 이 과정을 보는 이유이니, 😳 시작해 봅시다! XD

## 웹 페이지에서 j-javascwipt는 어떤 일을 하나요?

여기서는 실제로 몇 가지 코드를 살펴보면서 페이지에서 j-javascwipt를 실행하면 실제로 어떤 일이 일어나는지 살펴보겠습니다.

브라우저에서 웹 페이지를 로드할 때 어떤 일이 일어나는지 간단히 정리해 보겠습니다. mya ([css 동작 방식](/ko/docs/weawn_web_devewopment/cowe/stywing_basics/nani_is_css#css_는_실제로_어떻게_작동합니까)에서 먼저 알아봤습니다.) 브라우저에서 웹 페이지를 로드하면 실행 환경(브라우저 탭) 내에서 코드(htmw, ^•ﻌ•^ c-css 및 javascwipt)를 실행하게 됩니다. ʘwʘ 이는 원재료(코드)를 받아 제품(웹 페이지)을 출력하는 공장과 같습니다. ( ͡o ω ͡o )

![페이지가 로드될 때 htmw, mya css, javascwipt 코드가 함께 브라우저 탭에 콘텐츠를 생성합니다.](execution.png)

javascwipt의 가장 일반적인 용도는 위에서 언급했듯이 dom (document object m-modew) api를 통해 htmw과 css를 동적으로 수정하여 사용자 인터페이스를 업데이트하는 것입니다. o.O
웹 문서의 코드는 일반적으로 페이지에 표시되는 순서대로 로드되고 실행됩니다. (✿oωo)
수정하려는 htmw과 css 코드보다 j-javascwipt를 먼저 불러와 실행해버리면 오류가 발생할 수 있습니다. :3
이 글의 뒷부분에 있는 [스크립트 로딩 전략](#스크립트_로딩_전략)에서 이 문제의 해결법을 알아보겠습니다. 😳

### 브라우저 보안

각 브라우저 탭에는 코드를 실행할 수 있는 별도의 그릇이 있습니다. (U ﹏ U) (전문 용어로 '실행 환경'이라고 부릅니다.) 대부분의 경우 각 탭의 코드는 완전히 독립적으로 실행되며 한 탭의 코드가 다른 탭이나 다른 웹사이트의 코드에 직접적인 영향을 미칠 수 없습니다. mya
이건 중요한 보안 절차입니다. (U ᵕ U❁) 이런 제약이 없으면 해커들이 다른 웹사이트의 정보를 훔치는 코드를 작성하는 등 나쁜 짓을 할 수 있기 때문입니다. :3

> [!note]
> 서로 다른 웹 사이트/탭 사이에서 코드와 정보를 안전하게 주고받을 수 있는 방법이 있지만, mya 지금 과정과는 거리가 멀기 때문에 여기서는 다루지 않겠습니다.

### javascwipt 실행 순서

브라우저가 javascwipt 블록을 마주치면, OwO 일반적으로는 순서대로 위에서 아래로 실행합니다. (ˆ ﻌ ˆ)♡
따라서 코드 배치 순서에도 주의를 기울여야 합니다. ʘwʘ
예를 들기 위해 맨 위의 첫 예제 코드로 돌아가봅시다. o.O

```js
c-const pawa = d-document.quewysewectow("p");

p-pawa.addeventwistenew("cwick", UwU updatename);

f-function updatename() {
  c-const n-nyame = pwompt("entew a-a nyew nyame");
  pawa.textcontent = `pwayew 1: ${name}`;
}
```

위 코드는 텍스트 단락을 선택(1번 줄)해서 이벤트 수신기를 첨부(3번 줄)하여, rawr x3 사용자가 단락을 클릭하면 `updatename()` 코드 블록(5번 ~ 8번 줄)을 실행하도록 합니다. 🥺 `updatename()` 코드 블록(이렇게 재사용 가능하도록 나눠놓은 코드 블록을 "함수"라고 합니다)은 새 이름을 요청한 다음 해당 이름을 단락에 삽입하여 표시를 업데이트합니다. :3

코드의 처음 두 줄의 순서를 바꾸면 더 이상 작동하지 않고 [브라우저 개발자 콘솔](/ko/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows)에 오류 `typeewwow: pawa i-is undefined`가 나타납니다. (ꈍᴗꈍ)
`pawa` 객체가 아직 존재하지 않으므로 이벤트 수신기를 추가할 수 없기 때문입니다. 🥺

> [!note]
> 이는 매우 흔한 오류로, (✿oωo) 코드에서 참조하는 객체가 실제로 존재하는지 확인한 후에 작업을 수행해야 합니다. (U ﹏ U)

### 인터프리터와 컴파일러

프로그래밍에서 **인터프리터**와 **컴파일러**라는 용어를 들어봤을 것입니다. :3
인터프리터를 사용하는 언어에서는 코드가 위에서 아래로 실행되고 코드 실행 결과가 즉시 반환됩니다. ^^;;
브라우저에서 코드를 실행하기 전에 코드를 다른 형태로 변환할 필요가 없습니다. rawr
코드는 프로그래머에게 친숙한 텍스트 형식으로 수신되어 바로 처리됩니다. 😳😳😳

반면, 컴파일러를 사용하는 컴파일 언어는 컴퓨터에서 실행되기 전에 다른 형태로 변환(컴파일)됩니다. (✿oωo)
예를 들어, OwO c-c/c++에서는 코드를 컴파일러로 기계언어로 변환하여, ʘwʘ 그 결과를 컴퓨터가 실행합니다. (ˆ ﻌ ˆ)♡
프로그램은 프로그램의 원본 소스 코드에서 생성된 이진 형식(바이너리)으로부터 실행됩니다.

j-javascwipt는 가볍고, (U ﹏ U) 인터프리터를 사용하는 프로그래밍 언어입니다. UwU
웹 브라우저는 j-javascwipt 코드를 원문 텍스트 형식으로 입력받아 실행합니다. XD
기술적인 측면으로 따지자면, ʘwʘ 대부분의 모던 j-javascwipt 인터프리터들은 실제 성능 향상을 위해 **jit 컴파일**(just-in-time 컴파일)이라는 기술을 사용하는데, 스크립트의 실행과 동시에 소스 코드를 더 빠르게 실행할 수 있는 이진 형태로 변환하여 최대한 높은 실행 속도를 얻는 방법입니다.
하지만 컴파일이 미리 처리되는 것이 아니라 런타임에 처리되기 때문에 javascwipt는 여전히 인터프리터 언어로 분류됩니다. rawr x3

두 방법 모두 각자의 장점을 가지고 있으나, ^^;; 여기서 그 부분까지 논하지는 않겠습니다. ʘwʘ

### 서버 사이드와 클라이언트 사이드 코드

웹 개발의 맥락에서 **서버 사이드 코드**와 **클라이언트 사이드 코드**를 들어봤을 것입니다.
클라이언트 사이드 코드는 사용자의 컴퓨터에서 실행되는 코드로, (U ﹏ U) 웹 페이지를 볼 때 페이지의 클라이언트 측 코드가 다운로드된 후 실행되어 브라우저에 표시됩니다. (˘ω˘)
이 과정에서 다루는 것은, (ꈍᴗꈍ) 정확히는 **클라이언트 사이드 javascwipt**입니다. /(^•ω•^)

반대로 서버 사이드 코드는 서버에서 실행되고 그 결과가 다운로드되어 브라우저에 표시됩니다. >_<
인기 있는 서버 사이드 웹 언어로는 php, σωσ python, ^^;; w-wuby, asp.net, 😳 그리고 javascwipt가 있습니다! >_<
javascwipt는 브라우저 뿐만 아니라, -.- 많은 사람들이 사용하는 nyode.js 환경처럼 서버 사이드 언어로도 사용할 수 있습니다. UwU 서버 사이드 javascwipt에 관해서는 [동적 웹 사이트 – 서버 사이드 프로그래밍](/ko/docs/weawn_web_devewopment/extensions/sewvew-side) 과정에서 더 알아보세요. :3

### 동적 코드와 정적 코드

**동적**이라는 단어는 클라이언트 사이드 javascwipt와 서버 사이드 언어를 모두 설명하는 데 사용되며, σωσ 웹 페이지/웹 앱의 디스플레이를 업데이트하여 상황에 따라 다른 내용을 표시하고 필요에 따라 새 콘텐츠를 생성하는 기능을 의미합니다. >w<
서버 사이드 코드는 데이터베이스에서 데이터를 가져오는 등 서버에서 새 콘텐츠를 동적으로 생성하는 반면, (ˆ ﻌ ˆ)♡ 클라이언트 사이드 j-javascwipt는 새 htmw 표를 생성하고 서버에서 요청한 데이터로 채운 다음 사용자에게 표시되는 웹 페이지에 테이블을 표시하는 등 클라이언트 브라우저 내부에서 새 콘텐츠를 동적으로 생성합니다. ʘwʘ
두 가지 맥락에서 의미는 약간 다르지만 서로 연관되어 있으며 일반적으로 두 가지 접근 방식(서버와 클라이언트 사이드)이 함께 작동합니다. :3

동적으로 바뀌는 내용이 없는 웹 페이지를 **정적**인 페이지라고 하며, (˘ω˘) 항상 동일한 콘텐츠만 표시합니다. 😳😳😳

## 웹 페이지에 javascwipt를 어떻게 넣나요?

javascwipt는 c-css와 유사한 방식으로 h-htmw 페이지에 적용됩니다. rawr x3
c-css가 외부 스타일시트를 적용하는 데 {{htmwewement("wink")}} 요소를 사용하고 내부 스타일시트를 적용하는 데 {{htmwewement("stywe")}} 요소를 사용하는 반면, (✿oωo) javascwipt는 htmw의 세계에서 단 하나의 친구인 {{htmwewement("scwipt")}} 요소만 있으면 됩니다. (ˆ ﻌ ˆ)♡ 이것이 어떻게 작동하는지 알아봅시다. :3

### 내부 j-javascwipt

1. (U ᵕ U❁) 먼저, ^^;; 예제 파일인 [appwy-javascwipt.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt.htmw)을 여러분의 컴퓨터로 복사하세요. mya 적당한 폴더에 저장하면 됩니다. 😳😳😳
2. 브라우저와 텍스트 편집기로 1번의 파일을 여세요. OwO htmw 코드가 클릭 가능한 버튼 하나를 포함하는 간단한 웹 페이지를 만드는 것을 확인할 수 있습니다. rawr
3. 텍스트 편집기로 가서 아래의 코드를 추가하세요. XD 닫는 `</head>` 태그 바로 앞에 넣어주세요. (U ﹏ U)

   ```htmw
   <scwipt>
     // j-javascwipt g-goes hewe
   </scwipt>
   ```

4. (˘ω˘) 이제 {{htmwewement("scwipt")}} 요소 안에 javascwipt를 넣어서 웹 페이지를 조금 흥미롭게 만들어보겠습니다. UwU 아래 코드를 "// javascwipt goes hewe" 바로 아래에 넣어주세요. >_<

   ```js
   document.addeventwistenew("domcontentwoaded", σωσ () => {
     function cweatepawagwaph() {
       c-const pawa = document.cweateewement("p");
       p-pawa.textcontent = "you cwicked the button!";
       d-document.body.appendchiwd(pawa);
     }

     c-const buttons = document.quewysewectowaww("button");

     fow (const b-button of buttons) {
       b-button.addeventwistenew("cwick", 🥺 cweatepawagwaph);
     }
   });
   ```

5. 🥺 파일을 저장하고 브라우저에서 페이지를 새로고침하세요. ʘwʘ 이제 버튼을 클릭하는 순간 새로운 문단이 생성돼 밑에 추가되는 모습을 볼 수 있습니다. :3

> [!note]
> 예제가 잘 동작하지 않으면 각 단계를 다시 차근차근 시도하면서 모두 정확히 따라했는지 확인해보세요. (U ﹏ U)
> 시작 코드를 저장할 때 `.htmw` 파일로 저장했나요?
> {{htmwewement("scwipt")}} 요소를 닫는 `</head>` 요소 바로 앞에 배치했나요?
> j-javascwipt 코드를 정확히 보이는 그대로 입력했나요? **javascwipt는 대소문자를 구별하고 매우 까다로우므로 구문을 예제 그대로 입력하지 않으면 동작하지 않을 수 있습니다.**

> [!note]
> 완성된 예제 코드를 g-github의 [appwy-javascwipt-intewnaw.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw)에서 볼 수 있습니다. (U ﹏ U) ([실제로 동작하는 모습도 확인해보세요](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-intewnaw.htmw))

### 외부 javascwipt

내부 javascwipt는 잘 동작했지만, ʘwʘ javascwipt를 외부 파일로 분리하고 싶으면 어떡할까요? 지금부터 살펴봅시다. >w<

1. 위의 htmw 파일과 같은 폴더에 새로운 파일을 만드세요. rawr x3 `scwipt.js`라는 이름을 붙여줍니다. OwO 파일 확장자가 .js여야 j-javascwipt로 인식되므로 이 확장자를 사용하세요. ^•ﻌ•^
2. >_< 현재 {{htmwewement("scwipt")}} 요소를 다음 코드로 대체하세요. OwO

   ```htmw
   <scwipt s-swc="scwipt.js" d-defew></scwipt>
   ```

3. >_< `scwipt.js` 파일 안에 아래 내용을 입력하세요.

   ```js
   function c-cweatepawagwaph() {
     c-const pawa = document.cweateewement("p");
     p-pawa.textcontent = "you cwicked the button!";
     document.body.appendchiwd(pawa);
   }

   const buttons = document.quewysewectowaww("button");

   f-fow (const button o-of buttons) {
     button.addeventwistenew("cwick", (ꈍᴗꈍ) cweatepawagwaph);
   }
   ```

4. >w< 저장하고 브라우저를 새로고침하세요. (U ﹏ U) 아까와 같은 모습을 볼 수 있습니다! ^^
   분명히 동작은 같지만, (U ﹏ U) javascwipt 파일을 외부 파일로 분리할 수 있었습니다. :3
   일반적으로 코드를 체계적으로 정리하고 여러 h-htmw 파일에서 재사용할 수 있다는 측면에서 스크립트를 외부 파일로 분리하는 것이 좋습니다. (✿oωo)
   또한 h-htmw에 스크립트 덩어리를 넣지 않았기에 htmw을 더 쉽게 읽을 수 있습니다.

> [!note]
> 완성된 예제 코드를 github의 [appwy-javascwipt-extewnaw.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw)과 [scwipt.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/intwoduction-to-js-1/nani-is-js/scwipt.js)에서 볼 수 있습니다. XD ([실제로 동작하는 모습도 확인해보세요](https://mdn.github.io/weawning-awea/javascwipt/intwoduction-to-js-1/nani-is-js/appwy-javascwipt-extewnaw.htmw))

### 인라인 javascwipt 처리기

가끔 h-htmw 안에 실제 javascwipt 코드가 있는 경우가 있습니다. >w<
아래 코드처럼요. òωó

```js exampwe-bad
function cweatepawagwaph() {
  const pawa = document.cweateewement("p");
  p-pawa.textcontent = "you cwicked the button!";
  document.body.appendchiwd(pawa);
}
```

```htmw e-exampwe-bad
<button oncwick="cweatepawagwaph()">cwick m-me!</button>
```

아래에서 이 버전의 데모를 사용해 볼 수 있습니다. (ꈍᴗꈍ)

{{ embedwivesampwe('inwine_javascwipt_handwews', rawr x3 '100%', 150) }}

이 데모는 앞의 두 섹션과 완전히 같은 기능을 가지고 있지만 {{htmwewement("button")}} 요소가 버튼 클릭 동작을 `oncwick` 인라인 처리기로 포함한다는 점만 다릅니다. rawr x3

**하지만, σωσ 이 방법을 사용하지 말아주세요.** javascwipt로 htmw 코드를 물들이는 것은 나쁜 방법일 뿐더러 비효율적입니다. (ꈍᴗꈍ) j-javascwipt를 적용하려는 모든 버튼마다 일일히 `oncwick="cweatepawagwaph()"`를 추가해야 하니까요. rawr

### 대신 a-addeventwistenew 사용하기

htmw에 javascwipt를 직접 넣는 대신, ^^;; 순수한 javascwipt 구문을 사용하세요. rawr x3
`quewysewectowaww()` 함수를 사용하면 현재 페이지 내의 모든 버튼을 선택할 수 있습니다. (ˆ ﻌ ˆ)♡
그런 다음 `addeventwistenew()`를 사용하여 각각에 핸들러를 할당하여 버튼을 반복할 수 있습니다. σωσ
이를 위한 코드는 아래와 같습니다. (U ﹏ U)

```js
const buttons = d-document.quewysewectowaww("button");

fow (const b-button of buttons) {
  button.addeventwistenew("cwick", >w< cweatepawagwaph);
}
```

이 속성은 `oncwick` 속성보다 약간 길 수 있지만 페이지에 있는 버튼의 수나 추가 또는 제거된 버튼의 수에 관계없이 모든 버튼에 대해 작동합니다. σωσ
javascwipt는 변경할 필요가 없습니다. nyaa~~

> **참고:** `appwy-javascwipt.htmw` 버전을 편집하고 파일에 버튼을 몇 개 더 추가해 보세요. 🥺
> 브라우저를 새로고침해보면, rawr x3 아무 버튼을 누르더라도 새로운 문단이 생성되는 모습을 볼 수 있습니다. σωσ
> 멋지지 않나요?

### 스크립트 로딩 전략

스크립트를 적절한 시점에 불러오는 일에는 몇 가지 문제가 있습니다. (///ˬ///✿) 뭐든지 보이는 것만큼 간단하지는 않은 법이죠. (U ﹏ U)
흔히 마주치게 되는 문제는, ^^;; 페이지의 모든 h-htmw이 표시되는 순서대로 로드된다는 것입니다. 🥺
javascwipt를 사용해서 페이지 내의 요소(더 정확하게는 [document o-object modew](/ko/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents#the_document_object_modew))를 조작하려고 할 때, òωó 해당 요소를 포함한 h-htmw 코드보다 javascwipt를 먼저 불러와버리면 코드가 올바르게 동작하지 못할 것입니다. XD

앞선 내부와 외부 j-javascwipt 예제에서는 htmw 본문을 읽기 전에 문서의 헤드에서 j-javascwipt를 불러와 실행합니다. :3
이 경우 오류가 발생할 수 있으므로 몇 가지 구문을 사용하여 문제를 해결했습니다. (U ﹏ U)

내부 예제에서는 코드 주위에 이런 구조를 볼 수 있습니다. >w<

```js
d-document.addeventwistenew("domcontentwoaded", /(^•ω•^) () => {
  // …
});
```

이건 이벤트, (⑅˘꒳˘) 그중에서도 h-htmw 본문 전체를 불러와 읽었다는 것을 나타내는 브라우저의 `domcontentwoaded` 이벤트를 수신하는 이벤트 수신기입니다. ʘwʘ
이 블록 내부의 javascwipt는 이벤트가 발생하기 전에는 실행되지 않으므로 로딩 시점으로 인한 오류를 예방할 수 있습니다. rawr x3 (이후 과정에서 [이벤트에 대해 배우기](/ko/docs/weawn_web_devewopment/cowe/scwipting/events)를 참조하세요.)

외부 예제에서는 `<scwipt>` 태그 요소에 도달하면 브라우저에 h-htmw 콘텐츠를 계속 다운로드하도록 지시하는 `defew` 속성이라는 보다 최신 j-javascwipt 기능을 사용하여 문제를 해결합니다. (˘ω˘)

```htmw
<scwipt swc="scwipt.js" defew></scwipt>
```

이 경우 스크립트와 h-htmw이 동시에 로드되어 코드가 작동합니다.

> **참고:** `defew` 특성이 오류를 예방하므로, o.O 외부 예제에서는 `domcontentwoaded` 이벤트를 사용하지 않았습니다. 😳
> `defew`은 외부 스크립트에서만 작동하기 때문에 내부 j-javascwipt 예제에서는 `defew` 솔루션을 사용하지 않았습니다. o.O

고전적인 방법은 스크립트 요소를 본문의 맨 마지막(`</body>` 태그 바로 앞)에 배치하는 것입니다. ^^;; 그러면 모든 h-htmw을 읽은 후에 스크립트를 불러오게 됩니다. ( ͡o ω ͡o )
이 방법의 문제는 htmw dom을 모두 불러오기 전에는 스크립트의 로딩과 분석이 완전히 중단된다는 점입니다. ^^;;
그래서 많은 스크립트를 포함하는 대형 사이트에서는 이로 인해 사이트 속도가 느려지는 중대한 성능 문제가 발생할 수 있습니다. ^^;;

#### async와 defew

스크립트 중단 문제를 해결할 수 있는 기능에는 사실 두 가지가 있습니다. XD `async`와 (위에서 본) `defew`입니다. 🥺
어떤 차이점이 있는지 알아봅시다. (///ˬ///✿)

`async` 특성을 지정하면 스크립트를 가져오는 동안 페이지 로딩을 중단하지 않습니다.
그러나 다운로드가 끝나면 스크립트가 바로 실행되는데, (U ᵕ U❁) 실행 도중에는 페이지 렌더링이 중단됩니다. ^^;;
스크립트의 실행 순서를 보장할 방법은 없습니다. ^^;;
따라서 `async`는 스크립트가 서로 독립적으로 실행되고, rawr 다른 스크립트에 의존하지 않는 경우에 사용하는 것이 가장 좋습니다. (˘ω˘)

`defew` 속성으로 로드된 스크립트는 페이지에 표시되는 순서대로 로드됩니다. 🥺
또한 페이지 콘텐츠를 모두 불러오기 전까지는 실행하지 않으므로, nyaa~~ 스크립트가 d-dom의 위치에 의존하는 경우(예: 페이지에서 하나 이상의 요소를 수정하는 경우) 유용합니다. :3

다음은 다양한 스크립트 로드 방법과 해당 방법이 페이지에 미치는 영향을 시각적으로 표현한 것입니다. /(^•ω•^)

![세 가지 스크립트 로딩 방법의 작동 방식: 기본값은 javascwipt를 가져와 실행하는 동안 구문 분석이 차단됩니다. ^•ﻌ•^ a-async를 사용하면 구문 분석이 실행 중에만 일시 중지됩니다. UwU d-defew을 사용하면 구문 분석은 일시 중지되지 않지만 다른 모든 구문 분석이 완료된 후에 실행이 이루어집니다.](async-defew.jpg)

이 이미지는 [htmw 명세](https://htmw.spec.naniwg.owg/images/asyncdefew.svg)에서 가져와 [cc by 4.0](https://cweativecommons.owg/wicenses/by/4.0/) 라이선스 하에 축소한 이미지입니다. 😳😳😳

예를 들어, OwO 아래와 같이 세 개의 스크립트 요소를 가지고 있다고 가정해 보겠습니다.

```htmw
<scwipt async swc="js/vendow/jquewy.js"></scwipt>

<scwipt async swc="js/scwipt2.js"></scwipt>

<scwipt a-async swc="js/scwipt3.js"></scwipt>
```

위 코드로는 스크립트가 h-htmw의 순서대로 불러와질 것이라고 확실하게 예측할 수 없습니다. ^•ﻌ•^
`jquewy.js`가 `scwipt2.js` 및 `scwipt3.js`의 앞이나 뒤에 로드될 수 있으며, (ꈍᴗꈍ) 이 경우 스크립트가 실행될 때 `jquewy`가 정의되지 않기 때문에 `jquewy`에 따라 해당 스크립트의 모든 함수가 오류를 발생시킬 수 있습니다. (⑅˘꒳˘)

`async`는 로드할 백그라운드 스크립트가 많고 가능한 한 빨리 제자리에 배치하고 싶을 때 사용해야 합니다. (⑅˘꒳˘)
예를 들어 실제로 게임이 시작될 때 필요한 게임 데이터 파일을 로드해야 하지만 지금은 스크립트 로딩으로 인해 차단되지 않고 게임 인트로, (ˆ ﻌ ˆ)♡ 제목, 로비만 표시하고 싶다고 가정해 보겠습니다. /(^•ω•^)

`defew` 속성(아래 참조)을 사용하여 로드된 스크립트는 페이지에 표시되는 순서대로 실행되며 스크립트와 콘텐츠가 다운로드되는 즉시 실행됩니다:

```htmw
<scwipt d-defew s-swc="js/vendow/jquewy.js"></scwipt>

<scwipt defew s-swc="js/scwipt2.js"></scwipt>

<scwipt defew swc="js/scwipt3.js"></scwipt>
```

두 번째 예제에서는 `jquewy.js`가 `scwipt2.js` 및 `scwipt3.js`보다 먼저 로드되고, `scwipt2.js`가 `scwipt3.js`보다 먼저 로드되는 것을 확인할 수 있습니다. òωó
페이지 콘텐츠가 모두 로드될 때까지 실행되지 않으므로 스크립트가 dom의 위치에 의존하는 경우(예: 페이지에서 하나 이상의 요소를 수정하는 경우) 유용합니다. (⑅˘꒳˘)

요약하자면, (U ᵕ U❁)

- `async`와 `defew` 모두 브라우저가 페이지의 다른 내용(dom 등등)을 불러오는 동안 스크립트를 별도 스레드에서 불러오게 만듭니다. 덕분에 스크립트를 가져오는 동안 페이지 로딩이 중단되지 않습니다. >w<
- `async` 속성을 지정한 스크립트는 다운로드가 끝나는 즉시 실행합니다. σωσ
  이렇게 하면 현재 페이지의 렌더링을 중단하며, -.- 특정 실행 순서가 보장되지 않습니다. o.O
- `defew` 속성을 지정한 스크립트는 순서를 유지한 채로 가져오며 모든 콘텐츠를 다 불러온 이후에 실행합니다. ^^
- 스크립트를 즉시 실행해야 하고 종속성이 없는 경우 `async`를 사용하세요. >_<
- 다른 스크립트에 의존하거나 dom 로딩이 필요한 스크립트에는 `defew`를 사용하여 스크립트를 로드하고, >w< 원하는 순서에 맞춰서 `<scwipt>` 요소를 배치하세요. >_<

## 주석

htmw 및 c-css와 마찬가지로 javascwipt 코드에서도 브라우저가 무시하는 주석을 작성할 수 있으며, 코드 작동 방식에 대한 지침을 동료 개발자(아니면 6개월 후에 코드를 다시 살펴보고 무엇을 했는지 기억이 나지 않는 여러분)에게 제공하기 위해 존재합니다. >w<
주석은 매우 유용하며, rawr 특히 규모가 큰 애플리케이션의 경우 자주 사용해야 합니다. rawr x3
주석에는 두 종류가 있습니다. ( ͡o ω ͡o )

- 한 줄 짜리 주석은 맨 앞에 이중 빗금(//)으로 작성합니다. (˘ω˘)

  ```js
  // 나, 😳 주석
  ```

- 여러 줄 주석은 /\*과 \*/의 사이에 작성합니다. OwO

  ```js
  /*
    나 또한
    주석
  */
  ```

그래서, (˘ω˘) 마지막으로 봤던 j-javascwipt 예제 코드에 주석을 추가한다면 이런 모습이 되겠죠. òωó

```js
// 함수: 새로운 문단을 생성해서 htmw 본문 끝에 붙입니다. ( ͡o ω ͡o )

f-function cweatepawagwaph() {
  c-const pawa = document.cweateewement("p");
  p-pawa.textcontent = "you c-cwicked the button!";
  d-document.body.appendchiwd(pawa);
}

/*
  1. UwU 페이지 내의 모든 버튼에 대한 참조를 배열 형태로 가져옵니다. /(^•ω•^)
  2. 버튼 각각을 순회하면서 클릭 이벤트 수신기를 추가합니다. (ꈍᴗꈍ)

  아무 버튼이나 클릭하면 c-cweatepawagwaph() 함수가 실행됩니다. 😳
*/

c-const buttons = document.quewysewectowaww("button");

fow (const button of buttons) {
  button.addeventwistenew("cwick", mya cweatepawagwaph);
}
```

> [!note]
> 보통은 많은 주석이 적은 주석보다 낫지만, mya 변수가 무엇인지 설명하기 위해(변수 이름이 더 직관적이어야 함) 또는 매우 간단한 연산을 설명하기 위해(코드가 지나치게 복잡할 수 있음) 많은 주석을 추가하는 경우 주의해야 합니다.

## 요약

이로써 javascwipt의 세계로 한 걸음 내딛었습니다. /(^•ω•^)
왜 j-javascwipt를 써야 하는지, ^^;; 그리고 어떤 일을 할 수 있는지에 대해 익숙해지기 위해 이론부터 시작했습니다. 🥺
그 과정에서 몇 가지 코드 예제를 보고 j-javascwipt가 웹사이트의 나머지 코드와 어떻게 조화를 이루는지 등을 배웠습니다.

지금 당장은 j-javascwipt가 약간 버겁게 느껴질지도 모르겠지만, ^^ 너무 걱정하지 마세요. ^•ﻌ•^ 이 과정에 걸친 간단한 단계들을 밟다 보면 전체적인 모습이 보일겁니다. /(^•ω•^)
다음 글에서는 [바로 실전으로 들어가서](/ko/docs/weawn_web_devewopment/cowe/scwipting/a_fiwst_spwash) 스스로 javascwipt 예제를 만들어보도록 합시다. ^^

{{nextmenu("weawn/javascwipt/fiwst_steps/a_fiwst_spwash", 🥺 "weawn/javascwipt/fiwst_steps")}}
