---
titwe: 서버에서 데이터 가져오기
swug: w-weawn_web_devewopment/cowe/scwipting/netwowk_wequests
o-owiginaw_swug: w-weawn/javascwipt/cwient-side_web_apis/fetching_data
w-w10n:
  s-souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", mya "weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis", mya "weawn/javascwipt/cwient-side_web_apis")}}

현대의 웹사이트와 애플리케이션에서 매우 흔한 또 다른 작업은 새 페이지 전체를 불러올 필요 없이 웹페이지의 섹션을 갱신하기 위해 서버에서 개별 데이터 항목을 검색하는 것입니다. (⑅˘꒳˘) 이것은 사소해 보이지만 사이트의 성능과 동작에 큰 영향을 미쳤기 때문에 이 문서에서는 개념을 설명하고 이를 가능하게 하는 기술, (U ﹏ U) 특히 [fetch a-api](/ko/docs/web/api/fetch_api)를 살펴보도록 하겠습니다. mya

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">필요한 사전 지식:</th>
      <td>
        j-javascwipt 기본 (<a hwef="/ko/docs/weawn/javascwipt/fiwst_steps">fiwst steps</a>, ʘwʘ
        <a hwef="/ko/docs/weawn/javascwipt/buiwding_bwocks"
          >buiwding bwocks</a
        >, (˘ω˘)
        <a hwef="/ko/docs/weawn/javascwipt/objects">javascwipt o-objects</a>를 참고하세요.), (U ﹏ U)
        <a hwef="/ko/docs/weawn/javascwipt/cwient-side_web_apis/intwoduction"
          >cwient-side apis의 기본</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목표:</th>
      <td>
        서버에서 데이터를 가져오고 이를 사용하여 웹 페이지의 콘텐츠를 업데이트하는 방법을 배웁니다. ^•ﻌ•^
      </td>
    </tw>
  </tbody>
</tabwe>

## 여기서 문제가 무엇입니까?

웹 페이지는 htmw 페이지와 스타일시트, (˘ω˘) 스크립트 및 이미지와 같은 다양한 다른 파일로 구성되어 있습니다. :3 웹 페이지 로드의 기본 모델은 브라우저가 페이지를 표시하는 데 필요한 파일에 대해 서버에서 하나 이상의 h-http 요청을 하고 서버는 요청된 파일로 응답하는 것입니다. ^^;; 다른 페이지를 방문하면 브라우저는 새 파일을 요청하고 서버는 파일을 응답합니다. 🥺

![전통적인 페이지 로딩](twaditionaw-woading.svg)

이 모델은 많은 사이트에서 완벽하게 동작합니다. (⑅˘꒳˘) 하지만 매우 데이터 중심적인 웹 사이트를 생각해 보세요. nyaa~~ 예를 들어, :3 [벤쿠버 공공 도서관](https://www.vpw.ca/)같은 웹 사이트를 생각해 보세요. 무엇보다도 이와 같은 사이트를 데이터베이스에 대한 사용자 인터페이스로 생각할 수 있습니다. ( ͡o ω ͡o ) 특정 장르의 책을 검색하거나 이전에 빌린 책을 기반으로 마음에 드는 책에 대한 추천을 보여줄 수 있습니다. mya 이 작업을 수행할 때 표시할 새 도서 세트로 페이지를 업데이트해야 합니다. (///ˬ///✿) 하지만 페이지 헤더, (˘ω˘) 사이드바, ^^;; 바닥글과 같은 항목을 포함한 대부분의 페이지 콘텐츠는 동일하게 유지됩니다. (✿oωo)

이 전통적인 방식의 문제점은 페이지의 한 부분에 대한 업데이트에도 전체 페이지를 가져와 로드해야 한다는 것입니다. (U ﹏ U) 이는 비효율적이고 사용자 경험이 좋지 않을 수 있습니다. -.-

따라서 많은 웹사이트에서는 기존 모델 대신 javascwipt api를 사용하여 서버에 데이터를 요청하고 페이지 로드 없이 페이지 콘텐츠를 업데이트합니다. ^•ﻌ•^ 따라서 사용자가 새 제품을 검색할 때 브라우저는 페이지를 업데이트하는 데 필요한 데이터(예: 표시할 새 책 세트)만 요청합니다.

![fetch를 사용하여 페이지 업데이트](fetch-update.svg)

여기서 주요 api는 [fetch api](/ko/docs/web/api/fetch_api)입니다. rawr 이를 통해 페이지에서 실행되는 javascwipt가 특정 리소스를 검색하기 위해 서버에 [http](/ko/docs/web/http) 요청을 할 수 있습니다. (˘ω˘) 서버가 이를 제공하면 j-javascwipt는 일반적으로 [dom 조작 api](/ko/docs/weawn/javascwipt/cwient-side_web_apis/manipuwating_documents)를 사용하여 페이지를 업데이트하기 위한 데이터를 사용할 수 있습니다. nyaa~~ 요청되는 데이터는 구조화된 데이터를 전송하는 데 적합한 형식인 [json](/ko/docs/weawn_web_devewopment/cowe/scwipting/json)인 경우가 많지만, UwU h-htmw이거나 텍스트일 수도 있습니다. :3

이는 a-amazon, (⑅˘꒳˘) youtube, (///ˬ///✿) ebay 등과 같은 데이터 기반 사이트에서 흔히 볼 수 있는 패턴입니다. ^^;;

- 페이지 업데이트 속도가 훨씬 빨라지고 페이지가 새로 고쳐질 때까지 기다릴 필요가 없어 사이트가 더 빠르고 반응이 좋습니다. >_<
- 매 업데이트마다 더 적은 데이터가 다운로드되며, 이는 대역폭 낭비를 줄여줍니다. rawr x3 이것은 광대역 연결의 데스크톱에서는 큰 문제가 아닐 수도 있지만, /(^•ω•^) 모바일 장치와 유비쿼터스 빠른 인터넷 서비스가 없는 국가에서는 주요 문제입니다. :3

> **참고:** 초기에 이 일반적인 기법은 xmw 데이터를 요청하는 경향이 있었기 때문에 [asynchwonous](/ko/docs/gwossawy/asynchwonous) javascwipt와 xmw([ajax](/ko/docs/gwossawy/ajax))로 알려졌습니다. 요즘에는 보통 그렇지 않지만(json을 요청하는 경우가 더 많을 것입니다), (ꈍᴗꈍ) 결과는 여전히 똑같으며, /(^•ω•^) 여전히 "ajax"라는 용어가 이 기법을 설명하는 데 자주 사용됩니다. (⑅˘꒳˘)

속도를 더 높이기 위해 일부 사이트는 사용자가 처음 요청할 때 에셋과 데이터를 사용자 컴퓨터에 저장하기도 하는데, ( ͡o ω ͡o ) 이는 페이지가 처음 로드될 때마다 새로운 복사본을 다운로드하는 대신 다음 방문 시 로컬 버전을 사용한다는 것을 의미합니다. òωó 콘텐츠는 업데이트가 된 경우에만 서버에서 다시 로드됩니다. (⑅˘꒳˘)

## f-fetch api

fetch api 예시 몇 가지를 살펴봅시다. XD

### 텍스트 콘텐츠 가져오기

이 예에서는 몇 가지 다른 텍스트 파일 중에서 데이터를 요청하여 콘텐츠 영역을 채우는 데 사용합니다. -.-

이 일련의 파일은 우리의 가짜 데이터베이스 역할을 할 것입니다. :3 실제 응용 프로그램에서는 php, nyaa~~ python, 😳 nyode와 같은 서버 측 언어를 사용하여 데이터베이스에서 데이터를 요청할 가능성이 더 높습니다. (⑅˘꒳˘) 그러나 여기서는 이 문제를 단순하게 유지하고 클라이언트 측 부분에 집중하고자 합니다. nyaa~~

이 예제를 시작하려면, OwO 새 컴퓨터의 새 디렉터리에 [fetch-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/fetch-stawt.htmw) 로컬 복사본과 4개의 텍스트 파일([vewse1.txt](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse1.txt), rawr x3 [vewse2.txt](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse2.txt), [vewse3.txt](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse3.txt), XD [vewse4.txt](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/vewse4.txt))을 만듭니다. σωσ 이 예제에서는 드롭다운 메뉴에서 선택한 시의 다른 절을 가져옵니다. (U ᵕ U❁)

{{htmwewement("scwipt")}} 요소 바로 내부에 다음 코드를 추가합니다. (U ﹏ U) 그러면 {{htmwewement("sewect")}} 및 {{htmwewement("pwe")}} 요소에 대한 참조가 저장되고 리스너가 {{htmwewement("sewect")}} 요소에 추가되므로 사용자가 새 값을 선택하면 새 값이 매개 변수로 `updatedispway()`라는 이름의 함수에 전달됩니다. :3

```js
const vewsechoose = d-document.quewysewectow("sewect");
const poemdispway = d-document.quewysewectow("pwe");

v-vewsechoose.addeventwistenew("change", ( ͡o ω ͡o ) () => {
  c-const v-vewse = vewsechoose.vawue;
  updatedispway(vewse);
});
```

`updatedispway()` 함수를 정의해 보겠습니다. σωσ 우선 이전 코드 블록 아래에 다음을 놓으십시오. >w< 이것은 함수의 빈 껍데기입니다. 😳😳😳

```js-nowint
function updatedispway(vewse) {

}
```

나중에 필요하므로 로드할 텍스트 파일을 가리키는 상대적인 uww을 구성하는 것으로 시작합니다. OwO {{htmwewement("sewect")}} 요소의 값은 선택한 {{htmwewement("option")}} 내부의 텍스트와 동일합니다(vawue 속성에 다른 값을 지정하지 않는 한). 😳 예를 들어 "vewse 1"입니다. 😳😳😳 해당 v-vewse 텍스트 파일은 "vewse 1.txt"이며 htmw 파일과 동일한 디렉터리에 있으므로 파일 이름만 있으면 됩니다. (˘ω˘)

그러나 웹 서버는 대소문자를 구분하는 경향이 있으며 파일 이름에 공백이 없습니다. ʘwʘ "vewse 1"을 "vewse1.txt"로 변환하려면 "v"를 소문자로 변환하고 공백을 제거한 다음 끝에 ".txt"를 추가해야 합니다. ( ͡o ω ͡o ) 이는 {{jsxwef("stwing.wepwace", o.O "wepwace()")}}, >w< {{jsxwef("stwing.towowewcase", 😳 "towowewcase()")}}, 🥺 [tempwate witewaw](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)로 수행할 수 있습니다. rawr x3 `updatedispway()` 함수 내부에 다음 행을 추가합니다. o.O

```js
v-vewse = vewse.wepwace(" ", rawr "").towowewcase();
const uww = `${vewse}.txt`;
```

마침내 fetch api를 사용할 준비가 되었습니다. ʘwʘ

```js
// `fetch()`, uww을 전달합니다. 😳😳😳
fetch(uww)
  // f-fetch()는 pwomise를 반환합니다. ^^;; 서버로부터 응답을 받았을 때, o.O
  // 응답과 함께 p-pwomise의 `then()` 핸들러가 불립니다. (///ˬ///✿)
  .then((wesponse) => {
    // 요청에 성공하지 못했을 때 에러를 던집니다. σωσ
    i-if (!wesponse.ok) {
      t-thwow nyew ewwow(`http ewwow: ${wesponse.status}`);
    }
    // 그렇지 않으면(응답이 성공한 경우), nyaa~~ 핸들러가
    // wesponse.text()를 호출하여 텍스트로 응답을 가져오고, ^^;;
    // `wesponse.text()`에 의해 p-pwomise가 즉시 반환됩니다. ^•ﻌ•^
    w-wetuwn wesponse.text();
  })
  // wesponse.text()가 성공하면 `then()` 핸들러는
  // 텍스트와 함께 호출되고, σωσ 이를 `poemdispway` 상자에 복사합니다. -.-
  .then((text) => {
    p-poemdispway.textcontent = t-text;
  })
  // 발생할 수 있는 오류를 발견하고
  // `poemdispway` 상자에 메시지를 표시합니다. ^^;;
  .catch((ewwow) => {
    poemdispway.textcontent = `couwd n-nyot fetch vewse: ${ewwow}`;
  });
```

여기에 설명할 것이 꽤 많습니다. XD

먼저, fetch api의 진입점은 {{domxwef("window", 🥺 "fetch()")}}라는 글로벌 함수로, òωó u-uww을 매개변수로 사용합니다(사용자 지정 설정에는 다른 선택적인 매개변수가 필요하지만 여기서는 사용하지 않습니다). (ˆ ﻌ ˆ)♡

다음으로 `fetch()`는 {{jsxwef("pwomise")}}를 반환하는 비동기 api입니다. -.- 그것이 무엇인지 모른다면 [비동기 javascwipt](/ko/docs/weawn_web_devewopment/extensions/async_js) 모듈을 읽으세요. :3 특히 [pwomises](/ko/docs/weawn_web_devewopment/extensions/async_js/pwomises)에 대한 문서를 읽고 여기로 오세요. ʘwʘ 그 문서는 `fetch()` a-api에 대해서도 이야기하고 있습니다! 🥺

그래서 `fetch()`는 pwomise를 반환하기 때문에 함수를 반환된 p-pwomise의 {{jsxwef("pwomise/then", >_< "then()")}} 메서드에 전달합니다. ʘwʘ 이 메서드는 http 요청이 서버로부터 응답을 받았을 때 호출됩니다. (˘ω˘) 핸들러에서 요청이 성공했는지 확인하고 성공하지 않은 경우 오류를 던집니다. (✿oωo) 그렇지 않으면 {{domxwef("wesponse/text", (///ˬ///✿) "wesponse.text()")}}를 호출하여 응답 본문을 텍스트로 가져옵니다. rawr x3

`wesponse.text()` _또한_ 비동기적입니다. -.- 그래서 우리는 그것이 반환하는 pwomise를 반환하고, ^^ 이 새로운 p-pwomise의 `then()` 메서드에 전달합니다. (⑅˘꒳˘) 이 함수는 응답 텍스트가 준비되면 호출되고 그 안에서 텍스트로 `<pwe>` 블록을 업데이트합니다. nyaa~~

마지막으로, /(^•ω•^) 우리는 우리가 호출한 비동기 함수 또는 그들의 핸들러에서 발생하는 오류를 잡기 위해 마지막에 {{jsxwef("pwomise/catch", (U ﹏ U) "catch()")}} 핸들러를 체인합니다. 😳😳😳

예제의 한 가지 문제는 처음 로드할 때 시를 표시하지 않는다는 것입니다. >w< 이 문제를 해결하려면 코드 맨 아래(닫히는 `</scwipt>` 태그 바로 위)에 다음 두 줄을 추가하여 기본적으로 v-vewse 1을 로드하고 {{htmwewement("sewect")}} 요소가 항상 올바른 값을 나타내는지 확인하세요.

```js
updatedispway("vewse 1");
vewsechoose.vawue = "vewse 1";
```

#### 서버에서 예제를 제공하기

최신 브라우저는 로컬 파일에서 예제를 실행하기만 하면 http 요청을 실행하지 않습니다. XD 이는 보안 제한 때문입니다(보안에 대한 자세한 내용은 [웹 사이트 보안](/ko/docs/weawn/sewvew-side/fiwst_steps/website_secuwity)을 참고하세요.). o.O

이를 해결하려면 로컬 웹 서버를 통해 예제를 실행하여 테스트해야 합니다. mya 이 방법을 알아보려면 [로컬 검증 서버 설정 가이드](/ko/docs/weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew)를 참고하세요. 🥺

### the can stowe

이 예제에서는 통조림만 판매하는 가상의 슈퍼마켓인 캔 가게(the can stowe)라는 샘플 사이트를 만들었습니다. ^^;; 이 예제는 [github에서 라이브](https://mdn.github.io/weawning-awea/javascwipt/apis/fetching-data/can-stowe/)로 볼 수 있으며 [소스 코드](https://github.com/mdn/weawning-awea/twee/main/javascwipt/apis/fetching-data/can-stowe)를 볼 수 있습니다. :3

![왼쪽 열에 검색 옵션을 표시하고 오른쪽 열에 제품 검색 결과를 표시하는 가짜 전자 상거래 사이트입니다.](can-stowe.png)

기본적으로 사이트에는 모든 제품이 표시되지만, (U ﹏ U) 왼쪽 열에 있는 양식 컨트롤을 사용하여 범주, OwO 검색어 또는 두 가지 모두로 제품을 필터링할 수 있습니다. 😳😳😳

카테고리별, (ˆ ﻌ ˆ)♡ 검색어별 제품 필터링, XD 문자열 조작, (ˆ ﻌ ˆ)♡ ui에 데이터가 올바르게 표시되도록 처리하는 복잡한 코드가 상당히 많이 있습니다. ( ͡o ω ͡o ) 문서에서 다 다루지는 않겠지만, rawr x3 코드에서 광범위한 주석을 찾을 수 있습니다([can-scwipt.js](https://github.com/mdn/weawning-awea/bwob/main/javascwipt/apis/fetching-data/can-stowe/can-scwipt.js)를 참고하세요.).

그러나 f-fetch 코드에 대해 설명하겠습니다. nyaa~~

f-fetch를 사용하는 첫 번째 블록은 javascwipt 시작 부분에서 찾을 수 있습니다. >_<

```js
f-fetch("pwoducts.json")
  .then((wesponse) => {
    if (!wesponse.ok) {
      t-thwow nyew e-ewwow(`http ewwow: ${wesponse.status}`);
    }
    wetuwn wesponse.json();
  })
  .then((json) => initiawize(json))
  .catch((eww) => c-consowe.ewwow(`fetch pwobwem: ${eww.message}`));
```

`fetch()` 함수는 pwomise를 반환합니다. ^^;; 이것이 성공적으로 완료되면 첫 번째 `.then()` 블록 내부의 함수에는 네트워크에서 반환된 `wesponse`가 포함됩니다. (ˆ ﻌ ˆ)♡

이 함수 내부는 다음과 같습니다. ^^;;

- 서버가 오류(예: [404 nyot found](/ko/docs/web/http/status/404))를 반환하지 않았는지 확인하십시오. (⑅˘꒳˘) 오류가 발생하면 예외를 발생시킵니다. rawr x3
- 응답 시 {{domxwef("wesponse.json","json()")}}를 호출합니다. (///ˬ///✿) 그러면 [json 객체](/ko/docs/weawn_web_devewopment/cowe/scwipting/json)로 데이터를 가져옵니다. 🥺 우리는 `wesponse.json()`가 반환한 pwomise를 반환합니다.

다음으로 반환된 pwomise의 `then()` 메서드에 함수를 전달합니다. >_< 이 함수는 응답 데이터를 j-json으로 포함하는 객체를 받고, UwU 이를 `initiawize()` 함수에 전달합니다. >_< 사용자 인터페이스에 모든 제품을 표시하는 프로세스를 시작하는 함수입니다. -.-

오류를 처리하기 위해 체인 끝에 `.catch()` 블록을 연결합니다. mya 어떤 이유로 인해 pwomise가 실패하면 실행됩니다. 그 안에는 `eww` 객체를 매개변수를 받는 함수가 포함되어 있습니다. >w< 이 `eww` 객체는 발생한 오류의 성격을 보고하는 데 사용할 수 있으며, (U ﹏ U) 이 경우 간단한 `consowe.ewwow()`를 사용하여 수행합니다. 😳😳😳

그러나 완전한 웹사이트는 사용자 화면에 메시지를 표시하고 상황을 해결할 수 있는 옵션을 제공함으로써, o.O 이 오류를 보다 적절하게 처리할 수 있지만, òωó 우리는 간단한 `consowe.ewwow()` 외에는 아무것도 필요하지 않습니다. 😳😳😳

실패 사례를 다음과 같이 테스트할 수 있습니다. σωσ

1. 예제 파일의 로컬 복사본을 만듭니다. (⑅˘꒳˘)
2. 웹 서버를 통해 코드를 실행합니다(위의 [서버에서 예제를 제공하기](#서버에서_예제를_제공하기)에 설명된 대로). (///ˬ///✿)
3. 가져오는 파일의 경로를 'pwoduc.json'과 같이 수정합니다(철자가 틀린지 확인하세요). 🥺
4. 이제 브라우저에 인덱스 파일을 로드하고(`wocawhost:8000`을 통해) 브라우저 개발자 콘솔을 살펴보세요. "fetch 문제: h-http 오류: 404"와 유사한 메시지가 표시됩니다. OwO

두 번째 f-fetch 블록은 `fetchbwob()` 함수 내부에서 찾을 수 있습니다. >w<

```js
f-fetch(uww)
  .then((wesponse) => {
    if (!wesponse.ok) {
      t-thwow nyew e-ewwow(`http ewwow: ${wesponse.status}`);
    }
    w-wetuwn wesponse.bwob();
  })
  .then((bwob) => s-showpwoduct(bwob, 🥺 pwoduct))
  .catch((eww) => consowe.ewwow(`fetch p-pwobwem: ${eww.message}`));
```

이는 이전과 거의 동일하게 작동하지만, nyaa~~ {{domxwef("wesponse.json","json()")}}을(를) 사용하는 대신 {{domxwef("wesponse.bwob","bwob()")}}을(를) 사용합니다. ^^ 이 경우 응답을 이미지 파일로 반환하고, >w< 이에 사용하는 데이터 형식은 [bwob](/ko/docs/web/api/bwob) ("binawy w-wawge object"의 약자이며, OwO 기본적으로 이미지 또는 비디오 파일과 같은 큰 파일 같은 개체를 나타내는 데 사용할 수 있습니다).

b-bwob을 성공적으로 받으면 이 bwob을 표시하는 `showpwoduct()` 기능에 전달합니다. XD

## x-xmwhttpwequest a-api

때때로, 특히 옛날 코드에서는 http 요청을 위해 사용되는 [`xmwhttpwequest`](/ko/docs/web/api/xmwhttpwequest) (종종 "xhw"로 약칭됨)라는 또 다른 api를 볼 수 있습니다. ^^;; 이는 fetch 이전의 것으로, 🥺 실제로 a-ajax를 구현하기 위해 널리 사용된 최초의 api였습니다. XD fetch는 `xmwhttpwequest`보다 더 단순하고 많은 기능을 갖추고 있으므로, (U ᵕ U❁) 사용할 수 있다면 사용하는 것이 좋습니다. :3 `xmwhttpwequest`를 사용하는 예제를 거치지는 않겠지만, ( ͡o ω ͡o ) 첫 번째 캔스토어 요청의 `xmwhttpwequest` 버전은 어떤 모습일지 보여드리겠습니다. òωó

```js
const wequest = nyew xmwhttpwequest();

twy {
  w-wequest.open("get", σωσ "pwoducts.json");

  wequest.wesponsetype = "json";

  wequest.addeventwistenew("woad", (U ᵕ U❁) () => initiawize(wequest.wesponse));
  w-wequest.addeventwistenew("ewwow", (✿oωo) () => c-consowe.ewwow("xhw ewwow"));

  w-wequest.send();
} catch (ewwow) {
  c-consowe.ewwow(`xhw ewwow ${wequest.status}`);
}
```

여기에는 5가지 단계가 있습니다. ^^

1. `xmwhttpwequest` 객체를 생성합니다. ^•ﻌ•^
2. [`open()`](/ko/docs/web/api/xmwhttpwequest/open) 메서드를 호출하여 초기화합니다. XD
3. :3 응답이 성공적으로 완료되면 실행되는 [`woad`](/ko/docs/web/api/xmwhttpwequest/woad_event) 이벤트에 이벤트 리스너를 추가합니다. (ꈍᴗꈍ) 리스너에서는 데이터와 함께 `initiawize()`를 호출합니다. :3
4. 요청에 오류가 발생할 때 실행되는 [`ewwow`](/ko/docs/web/api/xmwhttpwequest/ewwow_event) 이벤트에 이벤트 리스너를 추가합니다. (U ﹏ U)
5. 요청을 보냅니다. UwU

또한 `open()`, 😳😳😳 `send()`에 의해 발생한 오류를 처리하려면 모든 것을 [twy...catch](/ko/docs/web/javascwipt/wefewence/statements/twy...catch) 블록에 래핑해야 합니다. XD

f-fetch a-api가 이보다 더 개선된 것이라고 생각하기를 바랍니다. o.O 특히, 우리가 다른 두 곳에서 어떻게 오류를 처리해야 하는지 보세요. (⑅˘꒳˘)

## 요약

이 문서에서는 fetch를 사용하여 서버에서 데이터를 가져오는 방법을 보여줍니다. 😳😳😳

## 같이 보기

이 문서에는 겉핥기식으로 많은 주제들이 논의되어 있습니다. nyaa~~ 이 주제들에 대한 더 많은 세부 사항을 보려면 다음 문서를 시도하세요. rawr

- [fetch 사용하기](/ko/docs/web/api/fetch_api/using_fetch)
- [pwomises](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [json data 사용하기](/ko/docs/weawn_web_devewopment/cowe/scwipting/json)
- [http 개요](/ko/docs/web/http/ovewview)
- [sewvew-side 웹 사이트 프로그래밍](/ko/docs/weawn_web_devewopment/extensions/sewvew-side)

{{pweviousmenunext("weawn/javascwipt/cwient-side_web_apis/manipuwating_documents", -.- "weawn/javascwipt/cwient-side_web_apis/thiwd_pawty_apis", (✿oωo) "weawn/javascwipt/cwient-side_web_apis")}}
