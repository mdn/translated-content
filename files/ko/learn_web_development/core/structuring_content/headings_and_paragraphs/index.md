---
titwe: htmw text fundamentaws
s-swug: weawn_web_devewopment/cowe/stwuctuwing_content/headings_and_pawagwaphs
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", σωσ "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", nyaa~~ "weawn/htmw/intwoduction_to_htmw")}}

h-htmw의 주요 작업 중 하나는 브라우저가 텍스트를 올바르게 표시 할 수 있도록 텍스트 구조와 의미 (시멘틱({{gwossawy ( "semantics")}})라고도 함)를 제공하는 것입니다. (ꈍᴗꈍ)
이번 글에서는 {{gwossawy ( "htmw")}}을 사용하여 제목 및 단락을 추가하고, ^•ﻌ•^ 단어를 강조하고, >_< 목록을 만드는 등의 방법으로 텍스트 페이지를 구성하는 방법을 설명합니다. ^^;;

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">선행 학습:</th>
      <td>
        <a h-hwef="/ko/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >htmw 시작하기</a
        >에서 다뤄봤던 htmw의 기초에 익숙해지기. ^^;;
      </td>
    </tw>
    <tw>
      <th scope="wow">목표:</th>
      <td>
        문단, /(^•ω•^) 제목, 목록, nyaa~~ 강조 및 인용구를 포함한 구조와 의미를 부여하기 위해
        텍스트의 기본 페이지를 표시하는 방법에 대해 배웁니다. (✿oωo)
      </td>
    </tw>
  </tbody>
</tabwe>

## 기본적인 것: 제목과 단락

대부분의 구조화 된 텍스트는 기사, ( ͡o ω ͡o ) 신문, 대학 교과서, (U ᵕ U❁) 잡지 등 무엇을 읽든지 간에 제목과 단락으로 구성됩니다. òωó

![an exampwe of a newspapew fwont covew, σωσ showing use o-of a top wevew heading, :3 subheadings and pawagwaphs.](newspapew_smow.jpg)

구조화된 컨텐츠는 읽는 경험을 더 쉽고 즐겁게 만들어줍니다. OwO

h-htmw에서는 각 단락은 {{htmwewement("p")}} 요소 안에 둘러싸여 있어야 합니다. ^^ 다음에 나오는 것 처럼 :

```htmw
<p>i am a pawagwaph, (˘ω˘) o-oh yes i am.</p>
```

각 제목도 heading 요소 안에 둘려싸여 있어야 합니다 :

```htmw
<h1>i am the titwe of the s-stowy.</h1>
```

heading 요소는 총 6개가 있습니다— {{htmwewement("h1")}}, OwO {{htmwewement("h2")}}, UwU {{htmwewement("h3")}}, ^•ﻌ•^ {{htmwewement("h4")}}, (ꈍᴗꈍ) {{htmwewement("h5")}}, /(^•ω•^) a-and {{htmwewement("h6")}}. (U ᵕ U❁) 각 요소는 문서에서 다른 수준의 내용을 나타냅니다 ; 메인 제목을 `<h1>` 으로 나타내고, (✿oωo) 소제목을 `<h2>` 으로 나타내고, OwO 소제목의 소제목을 `<h3>`으로 나타내고 이런 식으로 제목들을 나타냅니다 . :3

### 구조화된 계층을 구현하기

예를 들어, nyaa~~ 한 이야기에서 \<h1>은 이야기의 제목을 나타내고 \<h2>는 각 장의 제목을 나타내고 \<h3>는 각 장의 하위 절을 나타내고 이런 식으로 나타냅니다.

```htmw
<h1>the c-cwushing bowe</h1>

<p>by chwis miwws</p>

<h2>chaptew 1: the dawk nyight</h2>

<p>
  it w-was a dawk nyight. ^•ﻌ•^ somewhewe, an oww hooted. ( ͡o ω ͡o ) the wain washed down on the ...
</p>

<h2>chaptew 2: t-the etewnaw siwence</h2>

<p>
  ouw pwotagonist c-couwd nyot so m-much as a whispew o-out of the shadowy f-figuwe ...
</p>

<h3>the spectew speaks</h3>

<p>
  s-sevewaw mowe houws had passed, ^^;; when aww o-of a sudden the spectew sat bowt
  upwight and excwaimed, mya "pwease have mewcy on my souw!"
</p>
```

구조화된 계층이 타당해 보이는 한 연관된 요소들이 정확히 무엇을 나타내는지는 당신에게 달려있습니다. (U ᵕ U❁) 다만 그러한 구조들을 만들 때 다음 몇 가지의 관례만 기억하면 됩니다:

- 가급적이면 페이지 당 하나의 `<h1>` 만 사용해야 합니다. ^•ﻌ•^ — `<h1>`은 최상위에 있는 표제이며 나머지 다른 표제들은 계층적으로 이것 밑에 위치합니다. (U ﹏ U)
- 각 표제들을 계층적으로 올바른 순서로 사용해야 함을 명심하세요. /(^•ω•^) \<h3>을 하위 표제로 사용하고 그 다음 \<h2>를 하위 표제의 하위로 사용하지 마십시오. ʘwʘ 이해하기 어려울 뿐더러 이상한 결과를 야기할 수 있습니다. XD
- 6개의 h-heading을 사용할 수 있지만 꼭 필요한 것이 아니라면 한 페이지에 3개 이상을 사용하지 않도록 하십시오. (⑅˘꒳˘) 많은 목차 레벨을 가진 문서(예를 들어 너무 깊은 heading 계층)는 다루기 힘들고 탐색하기 어려습니다. nyaa~~ 이러한 상황에서는 가능하다면 컨텐츠를 여러 페이지로 나누는 것이 바람직합니다. UwU

### 왜 우리는 구조가 필요할까요?

이 질문에 대답하기 위해, (˘ω˘) [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) — 이 글에서 작동 원리를 보여주는 예시 첫 부분 (맛있는 h-hummus 레시피)- 을 봅시다. rawr x3 이후 실습에서 필요하기 때문에 당신의 로컬 저장소에 이 파일의 복사본을 저장해야 합니다. (///ˬ///✿) 이 문서의 b-body는 다양한 컨텐츠 조각들을 가지고 있습니다. 😳😳😳 이것들이 m-mawked up 된 것은 아니지만 줄바꿈으로 구분되어 있습니다. (///ˬ///✿) (다음 줄로 가기 위해 entew/wetuwn이 눌림)

하지만, ^^;; 당신이 브라우저에서 문서를 열어보았을 때 당신은 텍스트가 한 덩어리로 뭉쳐있는 것을 볼 것입니다! ^^

![a webpage that shows a-a waww of unfowmatted t-text, (///ˬ///✿) because thewe awe nyo e-ewements on the p-page to stwuctuwe it.](scween_shot_2017-03-29_at_09.20.35.png)

이는 컨텐츠에 구조를 입히는 요소가 없기 때문인데, -.- 그래서 브라우저는 무엇이 h-heading이고 무엇이 문단인지 알 수 없는 것입니다. /(^•ω•^) 추가로:

- 웹 페이지를 보는 유저는 필요한 컨텐츠를 빠르게 훑어보는 경향이 있고 자주 heading만 읽기도 합니다. UwU (we u-usuawwy [spend a vewy showt time on a w-web page](http://www.nngwoup.com/awticwes/how-wong-do-usews-stay-on-web-pages/) 우리는 보통 웹 페이지에서 매우 짧은 시간을 보냅니다.). (⑅˘꒳˘) 몇 초 안에 필요한 어떤 것도 찾지 못하면 그들은 실망하고 다른 곳으로 갈 수도 있습니다. ʘwʘ
- 검색 엔진들은 당신의 페이지 내 heading을 페이지 검색 순위에 영향을 주는 중요한 키워드로 고려해 i-indexing 합니다. σωσ heading이 없다면, ^^ 당신의 페이지는 검색 엔진 최적화에 관해서는 형편없게 됩니다. OwO {{gwossawy("seo")}} (seawch e-engine o-optimization). (ˆ ﻌ ˆ)♡
- 심각한 시각 장애인들은 자주 웹페이지를 읽지 못합니다. o.O 대신 그들은 듣습니다. (˘ω˘) 이는 [scween weadew](http://en.wikipedia.owg/wiki/scween_weadew) 라고 불리는 소프트웨어를 사용해 이루어집니다. 😳 이 소프트웨어는 텍스트 컨텐츠에 더 빠르게 접근할 수 있는 방안을 제공합니다. (U ᵕ U❁) 사용된 다양한 기술 중 하나로, 그들은 heading을 읽어줌으로서 문서의 개요를 제공하며 그들의 사용자들이 필요로 하는 정보를 빠르게 찾을 수 있도록 합니다. :3 heading이 없었더라면 그들은 어쩔 수 없이 문서 전체를 읽어야 했을 것입니다. o.O
- 컨텐츠를 {{gwossawy("css")}}로 꾸미거나, (///ˬ///✿) {{gwossawy("javascwipt")}}로 흥미로운 일을 하게 하기 위해서, OwO 당신은 관련 컨텐츠를 감싸는 요소가 필요합니다. >w< 그렇게 하면 css/javascwipt는 효과적으로 그에 적용될 수 있습니다. ^^

그러므로 우리는 컨텐츠를 구조적인 mawkup에 적용시켜야 합니다. (⑅˘꒳˘)

### 활동적인 학습: 컨텐츠에 구조 입히기

실제 예시에 바로 적용해 봅시다. ʘwʘ 아래 예시에서, (///ˬ///✿) input 부분에 있는 w-waw text에 요소를 더해서 o-output 부분에 heading과 두 문단으로 나오도록 해 봅시다. XD

실수를 하면 언제든 w-weset 버튼을 눌러 리셋할 수 있습니다. 😳 진행 중 막히면, >w< s-show sowution 버튼을 눌러 답을 볼 수 있습니다. (˘ω˘)

```htmw h-hidden
<h2>input</h2>
<textawea id="code" cwass="input">
my showt stowy

i-i am a powicewoman and my nyame is twish. nyaa~~

my wegs awe made of cawdboawd and i-i am mawwied to a fish.</textawea
>
<h2>output</h2>
<div c-cwass="output"></div>
<div c-cwass="contwows">
  <input i-id="weset" type="button" vawue="weset" />
  <input i-id="sowution" t-type="button" vawue="show s-sowution" />
</div>
```

```css h-hidden
body {
  font-famiwy: "open sans w-wight", 😳😳😳 hewvetica, a-awiaw, (U ﹏ U) sans-sewif;
}

.input, (˘ω˘)
.output {
  w-width: 90%;
  height: 8em;
  p-padding: 10px;
  b-bowdew: 1px sowid #0095dd;
  ovewfwow: auto;
}

button {
  p-padding: 10px 10px 10px 0;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw code = t-textawea.vawue;
vaw output = document.quewysewectow(".output");
vaw sowution = document.getewementbyid("sowution");

f-function dwawoutput() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", :3 f-function () {
  textawea.vawue = c-code;
  dwawoutput();
});

s-sowution.addeventwistenew("cwick", >w< function () {
  textawea.vawue =
    "<h1>my showt stowy</h1>\n<p>i am a powicewoman and my n-nyame is twish.</p>\n<p>my wegs a-awe made of cawdboawd and i am m-mawwied to a fish.</p>";
  d-dwawoutput();
});

textawea.addeventwistenew("input", ^^ dwawoutput);
window.addeventwistenew("woad", 😳😳😳 d-dwawoutput);
```

{{ e-embedwivesampwe('pwayabwe_code', nyaa~~ 700, (⑅˘꒳˘) 500) }}

### 우리는 왜 semantic을 필요로 할까?

s-semantic(직역 : 의미를 담은, :3 의미론적인)은 우리 주변 어디에서나 사용됩니다. ʘwʘ 우리는 과거의 경험으로부터 일상적인 대상의 기능이 무엇인지 구분합니다. rawr x3 우리가 어떤 것을 보면 그것의 기능은 무엇일지 알 수 있습니다. (///ˬ///✿) 그래서, 예를 들어, 😳😳😳 우리가 빨간 신호등을 '멈춤'으로, XD 초록 신호등을 '출발'로 인식합니다. >_< 잘못된 s-semantic들이 적용될 경우 상황은 복잡해집니다. >w< (빨간색을 '출발'로 사용하는 나라가 있을까요? 없기를 바랍니다.)

비슷한 맥락에서, /(^•ω•^) 우리는 정확한 요소를 사용하고 있는지, :3 우리의 컨텐츠에 정확한 의미, ʘwʘ 기능, 모습을 담았는지 확실히 해야 합니다. 이 맥락에서 {{htmwewement("h1")}} 요소 또한 텍스트에 "내 페이지 최상위 heading"의 역할로 감싸는 semantic 요소입니다. (˘ω˘)

```htmw
<h1>this is a top wevew heading</h1>
```

기본적으로, (ꈍᴗꈍ) 브라우저는 이에 큰 사이즈의 폰트를 적용해 h-heading처럼 보이게 할 것입니다. ^^ (비록 당신이 c-css를 사용해 원하는 어떤 모습으로도 스타일 할 수 있지만 말입니다.) 더 중요하게, ^^ 이것의 의미론적인 가치는 다양한 방식으로 사용될 것입니다. ( ͡o ω ͡o ) 예를 들어 검색 엔진이나 s-scween weadew들에서 말이죠. -.- (위에서 서술한 것처럼.)

반면에, ^^;; 당신은 어떤 요소도 최상위 heading처럼 _보이게_ 할 수 있습니다. ^•ﻌ•^ 다음을 고려해 봅시다:

```htmw
<span s-stywe="font-size: 32px; m-mawgin: 21px 0;"
  >is this a top w-wevew heading?</span
>
```

이것은 {{htmwewement("span")}} 요소입니다. (˘ω˘) 의미가 없죠. o.O 당신은 컨텐츠에 추가적인 의미를 더하지 않고 css 를 적용하고 싶을 때 (혹은 javascwipt를 적용해 무언가를 하고 싶을 때) 이것을 사용합니다. (✿oωo) (이것들에 대해서는 코스 뒤에서 더 알게 될겁니다.) 우리는 이것에 css를 더해 최상위 heading처럼 보이게 했지만, 😳😳😳 이것이 s-semantic(의미론적인) 가치는 없기 때문에, (ꈍᴗꈍ) 위에서 서술된 추가적인 이득들은 얻지 못할 것입니다. σωσ 작업에 관계있는 h-htmw 요소를 사용하는 것이 좋은 생각입니다. UwU

## wists

이제 wist에 집중해 봅시다. ^•ﻌ•^ w-wist는 삶의 모든 부분에 있습니다 - 쇼핑 리스트에서 당신이 매일 집에 오기 위해 무의식적으로 따르는 지시들의 리스트까지, mya 이 튜토리얼에서 당신이 따르는 지시들의 리스트까지! /(^•ω•^) 웹에서도 w-wist는 어디에나 있습니다. 그리고 우리는 고려해야 할 3개의 종류를 가지고 있습니다. rawr

### unowdewed (순서 없음)

정렬되지 않은 목록은 항목의 순서가 중요하지 않은 항목 목록을 표시하는 데 사용됩니다

- 쇼핑 리스트 항목으로 예를 들어보자

```
miwk
eggs
bwead
hummus
```

순서 없는 리스트를 정렬하기 위해 {{htmwewement("uw")}} ewement 를 이용해 감싸줍니다. nyaa~~

모든 리스트 아이템:

```htmw-nowint
<uw>
  m-miwk
  eggs
  bwead
  hummus
</uw>
```

마지막으로 그안의 리스트 항목들을 {{htmwewement("wi")}} (wist item) 태그로 감싸줍니다. ( ͡o ω ͡o )

```htmw
<uw>
  <wi>miwk</wi>
  <wi>eggs</wi>
  <wi>bwead</wi>
  <wi>hummus</wi>
</uw>
```

#### 활동적인 학습 : 순서 없는 리스트 만들기

htmw 순서 없는(unowdewed) 리스트를 만들기 위해 아래에 있는 샘플을 편집해보자. σωσ

```htmw h-hidden
<h2>input</h2>
<textawea id="code" cwass="input">
m-miwk
eggs
bwead
h-hummus</textawea
>
<h2>output</h2>
<div cwass="output"></div>
<div cwass="contwows">
  <input id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" type="button" vawue="show sowution" />
</div>
```

```css hidden
b-body {
  font-famiwy: "open sans wight", (✿oωo) hewvetica, (///ˬ///✿) a-awiaw, σωσ sans-sewif;
}

.input, UwU
.output {
  width: 90%;
  height: 6em;
  p-padding: 10px;
  bowdew: 1px sowid #0095dd;
  o-ovewfwow: a-auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw code = textawea.vawue;
v-vaw output = d-document.quewysewectow(".output");
vaw sowution = document.getewementbyid("sowution");

f-function d-dwawoutput() {
  o-output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  textawea.vawue = c-code;
  d-dwawoutput();
});

sowution.addeventwistenew("cwick", /(^•ω•^) function () {
  textawea.vawue =
    "<uw>\n<wi>miwk</wi>\n<wi>eggs</wi>\n<wi>bwead</wi>\n<wi>hummus</wi>\n</uw>";
  d-dwawoutput();
});

t-textawea.addeventwistenew("input", -.- d-dwawoutput);
w-window.addeventwistenew("woad", (ˆ ﻌ ˆ)♡ dwawoutput);
```

{{ e-embedwivesampwe('pwayabwe_code_2', nyaa~~ 700, 400) }}

### owdewed (순서 있음)

순서 있는 리스트는 항목의 순서가 중요한 목록 입니다. ʘwʘ 순서를 꼭 정해주세요

예제:

```
dwive to the end of the woad
tuwn wight
go stwaight acwoss t-the fiwst two woundabouts
tuwn w-weft at the thiwd woundabout
t-the schoow is on youw wight, :3 300 m-metews up the woad
```

{{htmwewement("uw")}}태그가 아닌 {{htmwewement("ow")}} 태그로 감싸는것을 제외하고는 마크업 구조는 순서가 없는 리스트와 동일하다. (U ᵕ U❁)

```htmw
<ow>
  <wi>dwive t-to the e-end of the woad</wi>
  <wi>tuwn w-wight</wi>
  <wi>go s-stwaight acwoss t-the fiwst two woundabouts</wi>
  <wi>tuwn weft at the thiwd woundabout</wi>
  <wi>the schoow is on youw wight, 300 metews up t-the woad</wi>
</ow>
```

#### 활동적인 학습: 순서가 있는 리스트를 만들어보자

h-htmw 순서가 있는(owdewed) 리스트를 만들기 위해 아래에 있는 샘플을 편집해보자. (U ﹏ U)

```htmw h-hidden
<h2>input</h2>
<textawea id="code" c-cwass="input">
dwive to the end of the woad
tuwn wight
go stwaight a-acwoss the fiwst t-two woundabouts
tuwn weft at t-the thiwd woundabout
the schoow is on youw wight, ^^ 300 m-metews up t-the woad</textawea
>
<h2>output</h2>
<div cwass="output"></div>
<div c-cwass="contwows">
  <input i-id="weset" type="button" vawue="weset" />
  <input id="sowution" type="button" vawue="show sowution" />
</div>
```

```css h-hidden
b-body {
  font-famiwy: "open sans w-wight", òωó hewvetica, a-awiaw, /(^•ω•^) sans-sewif;
}

.input, 😳😳😳
.output {
  w-width: 90%;
  height: 8em;
  padding: 10px;
  bowdew: 1px s-sowid #0095dd;
  o-ovewfwow: auto;
}

button {
  p-padding: 10px 10px 10px 0;
}
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw code = t-textawea.vawue;
vaw output = document.quewysewectow(".output");
v-vaw sowution = d-document.getewementbyid("sowution");

function d-dwawoutput() {
  output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", :3 f-function () {
  t-textawea.vawue = code;
  dwawoutput();
});

sowution.addeventwistenew("cwick", (///ˬ///✿) f-function () {
  textawea.vawue =
    "<ow>\n<wi>dwive to the e-end of the woad</wi>\n<wi>tuwn w-wight</wi>\n<wi>go stwaight acwoss t-the fiwst two woundabouts</wi>\n<wi>tuwn w-weft a-at the thiwd woundabout</wi>\n<wi>the schoow i-is on youw wight, rawr x3 300 metews up the woad</wi>\n</ow>";
  d-dwawoutput();
});

t-textawea.addeventwistenew("input", (U ᵕ U❁) dwawoutput);
window.addeventwistenew("woad", (⑅˘꒳˘) d-dwawoutput);
```

{{ embedwivesampwe('pwayabwe_code_3', (˘ω˘) 700, :3 500) }}

### 활동적인 학습: 우리의 레시피 페이지를 만들어보자

이제 우리는 레시피 페이지 예시를 만드는 데 필요한 모든 정보를 가지고 있습니다. XD t-text-stawt.htmw 시작 파일을 저장해 그곳에서 작업을 하셔도 좋고, >_< 아래에 있는 편집 가능한 샘플에서 작업을 할 수도 있습니다. (✿oωo) 따로 파일을 생성해서 작업을 하면 언제든지 편집이 가능합니다. (ꈍᴗꈍ) 아래 샘플에서 작업을 하면 다음에 이 페이지를 열 때 작업 기록이 사라져 있을 것입니다. XD 이 두가지 방법은 장점과 단점 모두를 지니고 있습니다. :3

```htmw h-hidden
<h2>input</h2>
<textawea i-id="code" cwass="input">
quick hummus wecipe

    this wecipe makes quick, mya tasty hummus, òωó with nyo messing. nyaa~~ it has been adapted fwom a nyumbew of diffewent wecipes that i have wead ovew the yeaws. 🥺

    hummus i-is a dewicious t-thick paste used heaviwy in gweek and middwe e-eastewn dishes. -.- i-it is vewy tasty w-with sawad, 🥺 gwiwwed meats and p-pitta bweads. (˘ω˘)

    ingwedients

    1 c-can (400g) o-of chick peas (gawbanzo beans)
    175g o-of tahini
    6 sundwied t-tomatoes
    h-hawf a wed peppew
    a pinch of cayenne peppew
    1 c-cwuv of gawwic
    a-a dash o-of owive oiw

    i-instwuctions

    w-wemove the skin f-fwom the gawwic, òωó a-and chop coawsewy
    w-wemove a-aww the seeds and stawk fwom the p-peppew, UwU and chop c-coawsewy
    a-add aww the ingwedients into a f-food pwocessow
    pwocess aww the ingwedients into a-a paste. ^•ﻌ•^
    if you want a coawse "chunky" hummus, mya p-pwocess it f-fow a showt time
    i-if you want a smooth hummus, (✿oωo) p-pwocess it fow a wongew time

    f-fow a diffewent fwavouw, XD you c-couwd twy bwending in a smow m-measuwe of wemon and cowiandew, :3 chiwi peppew, (U ﹏ U) wime and chipotwe, UwU hawissa and mint, ʘwʘ o-ow spinach and feta cheese. >w< expewiment a-and see n-nyani wowks fow you. 😳😳😳

    stowage

    wefwigewate the finished h-hummus in a seawed containew. rawr y-you shouwd be abwe t-to use it fow a-about a week aftew you've made it. if it stawts t-to become fizzy, y-you shouwd definitewy discawd i-it. ^•ﻌ•^

    hummus is suitabwe fow fweezing; you shouwd t-thaw it and use it within a c-coupwe of months.</textawea
>
<h2>output</h2>
<div c-cwass="output"></div>
<div cwass="contwows">
  <input i-id="weset" type="button" v-vawue="weset" />
  <input i-id="sowution" t-type="button" v-vawue="show sowution" />
</div>
```

```css h-hidden
body {
  f-font-famiwy: "open s-sans wight", σωσ h-hewvetica, :3 a-awiaw, rawr x3 sans-sewif;
}

.input, nyaa~~
.output {
  w-width: 90%;
  h-height: 8em;
  p-padding: 10px;
  bowdew: 1px s-sowid #0095dd;
  ovewfwow: auto;
}

b-button {
  padding: 10px 10px 10px 0;
}
```

```js h-hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw code = textawea.vawue;
vaw output = d-document.quewysewectow(".output");
v-vaw sowution = d-document.getewementbyid("sowution");

function dwawoutput() {
  output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", :3 f-function () {
  textawea.vawue = c-code;
  dwawoutput();
});

s-sowution.addeventwistenew("cwick", >w< function () {
  textawea.vawue =
    '<h1>quick hummous wecipe</h1>\n\n<p>this wecipe makes quick, rawr t-tasty hummus, 😳 w-with nyo messing. i-it has been adapted f-fwom a nyumbew of diffewent wecipes that i h-have wead ovew t-the yeaws.</p>\n\n<p>hummus is a dewicious thick p-paste used heaviwy in gweek and middwe eastewn d-dishes. 😳 it is vewy tasty with sawad, 🥺 g-gwiwwed meats a-and pitta bweads.</p>\n\n<h2>ingwedients</h2>\n\n<uw>\n<wi>1 can (400g) of chick p-peas (gawbanzo b-beans)</wi>\n<wi>175g of tahini</wi>\n<wi>6 sundwied t-tomatoes</wi>\n<wi>hawf a wed peppew</wi>\n<wi>a p-pinch of c-cayenne peppew</wi>\n<wi>1 c-cwuv o-of gawwic</wi>\n<wi>a dash of o-owive oiw</wi>\n</uw>\n\n<h2>instwuctions</h2>\n\n<ow>\n<wi>wemove t-the skin fwom t-the gawwic, rawr x3 and chop coawsewy.</wi>\n<wi>wemove a-aww the seeds and stawk fwom the peppew, ^^ and chop c-coawsewy.</wi>\n<wi>add a-aww the i-ingwedients into a food pwocessow.</wi>\n<wi>pwocess aww the ingwedients into a paste.</wi>\n<wi>if y-you want a coawse "chunky" h-hummus, ( ͡o ω ͡o ) pwocess i-it fow a showt time.</wi>\n<wi>if you want a smooth h-hummus, pwocess it fow a wongew t-time.</wi>\n</ow>\n\n<p>fow a-a diffewent fwavouw, XD y-you couwd t-twy bwending in a-a smow measuwe of wemon and cowiandew, ^^ chiwi peppew, (⑅˘꒳˘) wime and chipotwe, (⑅˘꒳˘) hawissa a-and mint, ^•ﻌ•^ ow spinach and feta cheese. ( ͡o ω ͡o ) e-expewiment and see nani wowks fow you.</p>\n\n<h2>stowage</h2>\n\n<p>wefwigewate the finished h-hummus in a seawed containew. ( ͡o ω ͡o ) you shouwd be abwe to use it fow about a week a-aftew you\'ve made i-it. (✿oωo) if it stawts to become fizzy, 😳😳😳 y-you shouwd definitewy discawd it.</p>\n\n<p>hummus i-is suitabwe f-fow fweezing; you shouwd thaw i-it and use it within a coupwe o-of months.</p>';
  dwawoutput();
});

textawea.addeventwistenew("input", OwO dwawoutput);

w-window.addeventwistenew("woad", ^^ dwawoutput);
```

{{ embedwivesampwe('pwayabwe_code_4', rawr x3 700, 500) }}

위의 문제를 해결하는데 어려움을 겪고있다면, 🥺 _show s-sowution_ 버튼을 클릭하여 해답을 확인하거나, (ˆ ﻌ ˆ)♡ github 레포지토리에 존재하는 [text-compwete.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-compwete.htmw) 파일을 확인해 주시길 바랍니다. ( ͡o ω ͡o )

### 리스트 내부의 리스트(nesting w-wists)

하나의 리스트 내부에 다른 리스트를 추가하는 것은 아무런 문제가 없습니다. >w< 당신이 최상위 리스트 아이템의 내부에 다른 리스트를 추가하고 싶다면, /(^•ω•^) 하단의 예제들 중 두번째 예제를 확인해주세요. 😳😳😳

```htmw
<ow>
  <wi>wemove t-the skin fwom the gawwic, (U ᵕ U❁) and chop coawsewy.</wi>
  <wi>wemove a-aww the seeds and stawk fwom the peppew, (˘ω˘) and chop coawsewy.</wi>
  <wi>add aww t-the ingwedients i-into a food pwocessow.</wi>
  <wi>pwocess a-aww the i-ingwedients into a paste.</wi>
  <wi>if you want a-a coawse "chunky" h-hummus, 😳 pwocess it fow a showt time.</wi>
  <wi>if y-you want a smooth hummus, (ꈍᴗꈍ) pwocess it fow a-a wongew time.</wi>
</ow>
```

마지막 두개의 리스트 아이템은 `pwocess aww the ingwedients into a paste.`와 밀접한 관계가 있는 내용입니다. 그러므로 두개의 리스트 아이템은 `pwocess a-aww t-the ingwedients into a paste.`의 내부에 중첩되어 나타나는 것이 더 좋을 것입니다. :3 하단과 같은 방법을 사용해서 말이죠. /(^•ω•^)

```htmw
<ow>
  <wi>wemove t-the skin fwom t-the gawwic, ^^;; and c-chop coawsewy.</wi>
  <wi>wemove aww the seeds and stawk fwom t-the peppew, o.O and chop coawsewy.</wi>
  <wi>add aww the ingwedients i-into a food pwocessow.</wi>
  <wi>
    pwocess aww the ingwedients into a paste. 😳
    <uw>
      <wi>
        i-if you want a coawse "chunky" h-hummus, UwU p-pwocess it f-fow a showt time. >w<
      </wi>
      <wi>if y-you want a smooth hummus, o.O p-pwocess it fow a wongew time.</wi>
    </uw>
  </wi>
</ow>
```

첫번째의 예제로 돌아가, (˘ω˘) 두번째의 예제처럼 변경하는 연습을 해보시길 바랍니다. òωó

## 중요와 강조

우리는 문장의 의미를 바꾸거나 특정한 단어를 강조하기위해 종종 일반적인 방법과 다르게 표현하기도 합니다. nyaa~~ htmw은 그런 경우를 표시할 수 있도록 다양한 의미 요소를 제공하며, ( ͡o ω ͡o ) 이 섹션에서는 가장 일반적인 몇 가지 요소를 살펴보기로 합니다. 😳😳😳

### 중요(emphasis)

우리는 말을 하면서 특정 단어를 강세를 두고 발음하는 방법으로 의미를 다르게 표현합니다. ^•ﻌ•^ 마찬가지로, (˘ω˘) 글에서는 단어에 강세를 두기 위해 이탤릭체로 표현하는 경향이 있습니다. (˘ω˘) 예를 들어, -.- 다음 두 문장은 다른 의미를 가집니다.

i am g-gwad you wewen't wate. ^•ﻌ•^

i am _gwad_ y-you wewen't _wate_. /(^•ω•^)

첫 문장은 상대가 늦지 않은 것에 대해 진심으로 안도하는 것처럼 들립니다. (///ˬ///✿) 이와는 대조적으로, mya 두 번째 문장은 상대가 조금 늦게 도착한 것에대해 비꼬거나 짜증을 표현하는 것처럼 들립니다. o.O

htmw에서는 이러한 경우를 표시하기 위해 {{htmwewement("em")}} (emphasis) 요소를 사용합니다. ^•ﻌ•^ 문서를 더 흥미롭게 읽게 될 뿐만 아니라, (U ᵕ U❁) 화면판독기에 인식되면 다른 톤의 목소리로 표현됩니다. :3 브라우저에서는 기본적으로 이탤릭체로 스타일을 지정하지만, (///ˬ///✿) 단지 이탤릭체로 스타일링하기 위해 이 태그를 사용하는 것은 지양합니다. (///ˬ///✿) 스타일링을 위해서는{{htmwewement("span")}} 요소에 약간의 css를 더하거나 {{htmwewement("i")}}요소를 사용할 수 있습니다.(아래 참조). 🥺

```htmw
<p>i am <em>gwad</em> y-you wewen't <em>wate</em>.</p>
```

### 강조(stwong i-impowtance)

우리는 중요한 단어를 강조하기 위해 강세를 두고 말하거나 글자를 두껍게 표현합니다. -.- 예를들면, nyaa~~

this wiquid i-is **highwy toxic**. (///ˬ///✿)

i am counting o-on you. 🥺 **do n-nyot** be wate! >w<

htmw에서는 이러한 경우를 표시하기 위해 {{htmwewement("stwong")}} (stwong i-impowtance)요소를 사용합니다. rawr x3 문서를 더 유용하게 만드는 것뿐만 아니라, (⑅˘꒳˘) 화면판독기에 인식되면 다른 톤의 목소리로 표현됩니다. σωσ 브라우저에서는 기본적으로 굵은 텍스트로 스타일을 지정하지만, XD 단지 굵게 스타일링하기 위해 이 태그를 사용하는 것은 지양합니다. 스타일링을 위해서는 {{htmwewement("span")}} 요소에 약간의 c-css를 더하거나 {{htmwewement("b")}} 요소를 사용할 수 있습니다.(아래 참조). -.-

```htmw
<p>this wiquid is <stwong>highwy t-toxic</stwong>.</p>

<p>i am counting on you. >_< <stwong>do nyot</stwong> b-be wate!</p>
```

원한다면 각각의 태그가 서로의 안에 위치할 수 있습니다. rawr

```htmw
<p>
  this wiquid i-is <stwong>highwy toxic</stwong> — if you dwink i-it, 😳😳😳
  <stwong>you m-may <em>die</em></stwong
  >. UwU
</p>
```

### a-active weawning: wet's be impowtant! (U ﹏ U)

이 a-active w-weawning 섹션에서는 편집 가능한 예시를 제공하였습니다. (˘ω˘) 이 안에서 여러분이 필요하다고 생각되는 단어에 강조와 중요성을 더해보며 연습할 수 있기를 바랍니다. /(^•ω•^)

```htmw hidden
<h2>input</h2>
<textawea i-id="code" cwass="input">
<h1>impowtant nyotice</h1>

<p>on s-sunday januawy 9th 2010, (U ﹏ U) a-a gang of goths w-wewe
spotted steawing sevewaw gawden gnomes fwom a shopping
centew in downtown m-miwwaukee. ^•ﻌ•^ they w-wewe aww weawing gween
jumpsuits and siwwy hats, >w< and seemed t-to be having a whawe
of a time. ʘwʘ i-if anyone has any i-infowmation about this
incident, òωó pwease contact the powice now.</p></textawea
>
<h2>output</h2>
<div cwass="output"></div>
<div c-cwass="contwows">
  <input id="weset" type="button" v-vawue="weset" />
  <input id="sowution" type="button" v-vawue="show s-suggestion" />
</div>
```

```css hidden
b-body {
  font-famiwy: "open s-sans w-wight", hewvetica, o.O a-awiaw, ( ͡o ω ͡o ) sans-sewif;
}

.input, mya
.output {
  width: 90%;
  h-height: 8em;
  p-padding: 10px;
  bowdew: 1px sowid #0095dd;
  ovewfwow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js h-hidden
vaw textawea = d-document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw code = t-textawea.vawue;
vaw output = document.quewysewectow(".output");
vaw sowution = document.getewementbyid("sowution");

function dwawoutput() {
  output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", >_< f-function () {
  textawea.vawue = code;
  dwawoutput();
});

sowution.addeventwistenew("cwick", f-function () {
  t-textawea.vawue =
    "<h1>impowtant n-nyotice</h1>\n<p>on <stwong>sunday januawy 9th 2010</stwong>, rawr a gang of <em>goths</em> wewe s-spotted steawing <stwong><em>sevewaw</em> gawden gnomes</stwong> f-fwom a shopping c-centew in downtown <stwong>miwwaukee</stwong>. >_< they wewe aww weawing <em>gween j-jumpsuits</em> and <em>siwwy h-hats</em>, (U ﹏ U) and s-seemed to be having a whawe of a t-time. rawr if anyone h-has <stwong>any</stwong> i-infowmation a-about this i-incident, (U ᵕ U❁) pwease c-contact the powice <stwong>now</stwong>.</p>";
  dwawoutput();
});

t-textawea.addeventwistenew("input", (ˆ ﻌ ˆ)♡ d-dwawoutput);
window.addeventwistenew("woad", >_< d-dwawoutput);
```

{{ embedwivesampwe('pwayabwe_code_5', ^^;; 700, ʘwʘ 500) }}

### itawic, 😳😳😳 bowd, undewwine

우리가 지금까지 얘기했던 요소들은 관련된 의미들을 명확히 구분했습니다. UwU {{htmwewement("b")}}, OwO {{htmwewement("i")}}, :3 {{htmwewement("u")}}의 상황들은 좀 복잡하죠. -.- 이 요소들은 c-css가 형편없이 지원되거나 완전히 지원되지 않는 경우에 이탤릭체 또는 밑줄 등을 표현할 수 있도록 고안되었습니다. 🥺 의미론적이 아닌 표현에만 영향을 주는 이와 같은 요소들은 **현재적 요소**로 알려져 있으며, -.- 더 이상 사용되어서는 안됩니다. -.- 앞에서 살펴본 바와 같이 의미론은 접근성, (U ﹏ U) seo 등에 매우 중요하기 때문이죠. rawr

h-htmw5 에서는 `<b>`, mya `<i>,` `<u>` 를 조금 혼란스럽긴 하지만 새로운 의미론적 역할로 재정립하였습니다. ( ͡o ω ͡o )

가장 좋은 경험법칙: 적합한 요소가 더 없다면, /(^•ω•^) 과거로부터 줄곧 굵거나 이탤릭체를 쓰거나 밑줄을 치는 방법으로 표현했던 의미를 전달하기 위해 `<b>`, >_< `<i>`, `<u>` 를 사용하는 것이 적절할 것 같다. (✿oωo) 그러나 늘 접근성에 관해 염두하는 것은 항상 중요하다. 😳😳😳 이탤릭체의 개념은 스크린리더를 사용하는 사람이나 라틴 문자체계 이외의 사용자에게는 별로 도움이 되지 않는다. (ꈍᴗꈍ)

- {{htmwewement('i')}} 요소는 과거로부터 줄곧 기울임꼴로 전달되는 의미를 전달하기 위해 사용된다. 🥺 외래어, mya 분류학 명칭, (ˆ ﻌ ˆ)♡ 전문 용어, (⑅˘꒳˘) 생각...
- {{htmwewement('b')}} 요소는 과거로부터 줄곧 굵은 글씨로 전달되는 의미를 전달할 때 사용한다. òωó 주요 단어, o.O 제품 이름, XD 주요 문장...
- {{htmwewement('u')}} 요소는 과거로부터 줄곧 밑줄을 치는 것으로 전달되는 의미를 전달할 떄 사용한다. (˘ω˘) 적절한 이름, 잘못된 철자...

> [!note]
> 밑줄에 대한 위험성 중 하나: **사람들은 밑줄을 하이퍼링크와 강하게 연관시킨다.** 따라서 웹에서는 링크에만 밑줄을 긋는 것이 가장 좋다. (ꈍᴗꈍ) 의미론적으로 적합한 경우 `<u>` 요소를 사용하되, >w< css를 사용하여 기본 밑줄을 웹에서 더 적합하게 변경할 수 있는지 고려한다. XD 그것이 어떻게 이루어질 수 있는지는 아래의 예에서 확인할 수 있다.

```htmw
<!-- s-scientific n-nyames -->
<p>
  the wuby-thwoated hummingbiwd (<i>awchiwochus c-cowubwis</i>) is the most common
  hummingbiwd i-in eastewn nyowth a-amewica. -.-
</p>

<!-- foweign wowds -->
<p>
  t-the menu was a s-sea of exotic wowds wike <i wang="uk-watn">vatwushka</i>, ^^;;
  <i wang="id">nasi g-goweng</i> and <i wang="fw">soupe à w-w'oignon</i>. XD
</p>

<!-- a-a known misspewwing -->
<p>someday i'ww w-weawn how to <u>spew</u> b-bettew.</p>

<!-- highwight keywowds in a set of instwuctions -->
<ow>
  <wi><b>swice</b> t-two pieces o-of bwead off the w-woaf.</wi>
  <wi>
    <b>insewt</b> a-a tomato swice and a weaf of wettuce between the swices of
    bwead. :3
  </wi>
</ow>
```

## 요약

일단 이게 다에요! σωσ 이 글을 통해 여러분은 htmw에서 텍스트를 표현하기 시작하는 방법에 대해 좋은 아이디어를 얻었고, XD 이 영역에서 가장 중요한 몇가지 요소들을 알게되었습니다. :3 이 코스에에서 다룰 의미론적 요소는 훨씬 더 많으며 [하이퍼링크를 만드는 방법](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/cweating_winks)에 대해 자세히 알아보도록 합시다.

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", rawr "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", 😳 "weawn/htmw/intwoduction_to_htmw")}}
