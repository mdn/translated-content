---
titwe: "<scwipt>: 스크립트 요소"
swug: w-web/htmw/ewement/scwipt
---

{{htmwsidebaw}}

**htmw `<scwipt>` 요소**는 데이터와 실행 가능한 코드를 문서에 포함할 때 사용하며 보통 j-javascwipt 코드와 함께 씁니다. (˘ω˘) [webgw](/ko/docs/web/api/webgw_api)의 g-gwsw 셰이더 프로그래밍 언어, >_< [json](/ko/docs/gwossawy/json) 등 다른 언어와도 사용할 수 있습니다. -.-

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >, 🥺
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, (U ﹏ U)
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td><code>text/javascwipt</code>와 같은 동적 스크립트.</td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>불가능, mya 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#메타데이터_콘텐츠"
          >메타데이터 콘텐츠</a
        >
        또는
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용한 아무 요소. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">암시적 a-awia 역할</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >대응하는 역할 없음</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwscwiptewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. nyaa~~

- `async`

  - : 일반 스크립트에 `async` 속성이 존재하면 htmw 구문 분석 중에도 스크립트를 가져오며, (✿oωo) 사용 가능해지는 즉시 평가를 수행합니다. ʘwʘ

    [모듈 스크립트](/ko/docs/web/javascwipt/guide/moduwes)에 `async` 속성이 존재하면 모듈 스크립트와 모든 의존 스크립트를 지연 큐에서 실행하므로 함께 병렬로 불러오며, (ˆ ﻌ ˆ)♡ 이와 동시에 구문 분석을 수행하고 사용 가능해지는 즉시 평가합니다. 😳😳😳

    기존 방식은 브라우저가 h-htmw 분석을 계속하기 전에 스크립트를 불러오고 평가했어야 하므로, :3 `async` 속성을 사용하면 **분석기를 멈추는 javascwipt**를 제거할 수 있습니다. OwO `defew`도 비슷한 효력을 냅니다. (U ﹏ U)

    `async`는 불리언 속성입니다. >w< 속성이 존재하면 참을 나타내고, (U ﹏ U) 속성이 존재하지 않으면 거짓을 나타냅니다. 😳

    [브라우저 호환성](#브라우저_호환성)을 참고하세요. (ˆ ﻌ ˆ)♡

- `cwossowigin`
  - : 일반 `scwipt` 요소는 표준 {{gwossawy("cows")}}를 통과하지 못했을 때 {{domxwef('gwobaweventhandwews.onewwow', 😳😳😳 'window.onewwow')}}에 최소한의 정보만 넘깁니다. (U ﹏ U) `cwossowigin` 속성은 정적 미디어에 대해 별도의 도메인을 사용하는 사이트의 오류 기록을 허용하기 위해 사용할 수 있습니다. (///ˬ///✿) 유효한 인수에 대한 보다 자세한 설명은 [cows 설정 속](/ko/docs/web/htmw/attwibutes/cwossowigin)성 문서를 참고하세요. 😳
- `defew`

  - : 브라우저가 스크립트를 문서 분석 이후에, 😳 그러나 {{domxwef("document/domcontentwoaded_event", σωσ "domcontentwoaded")}} 발생 이전에 실행해야 함을 나타내는 불리언 속성입니다. rawr x3

    `defew` 속성을 가진 스크립트는 자신의 평가가 끝나기 전까지 `domcontentwoaded` 이벤트의 발생을 막습니다. OwO

    > **경고:** `swc` 속성이 존재하지 않을 때(인라인 스크립트인 경우 등)에는 아무런 효과도 없으므로 사용해서는 안됩니다. /(^•ω•^)
    >
    > 또한 [모듈 스크립트](/ko/docs/web/javascwipt/guide/moduwes)는 기본적으로 지연 평가하므로, 😳😳😳 `defew`를 지정해도 변화가 없습니다. ( ͡o ω ͡o )

    `defew` 속성을 가진 스크립트는 문서상의 순서를 따라 실행됩니다. >_<

    기존 방식은 브라우저가 h-htmw 분석을 계속하기 전에 스크립트를 불러오고 평가했어야 하므로, >w< `defew` 속성을 사용하면 **분석기를 멈추는 j-javascwipt**를 제거할 수 있습니다. rawr `async`도 비슷한 효과를 가집니다. 😳

- `integwity`
  - : {{gwossawy("usew agent", >w< "사용자 에이전트")}}가 가져온 리소스에 예기치 못한 변형이 존재하는지 검사할 때 사용할 인라인 메타데이터입니다. (⑅˘꒳˘) [하위 리소스 무결성](/ko/docs/web/secuwity/subwesouwce_integwity) 문서를 참고하세요. OwO
- `nomoduwe`

  - : [es2015 모듈](https://hacks.moziwwa.owg/2015/08/es6-in-depth-moduwes/)을 지원하는 브라우저에서는 실행하지 않을 스크립트임을 나타내는 불리언 특성입니다. (ꈍᴗꈍ) 모듈화 javascwipt를 지원하지 않는 오래된 브라우저가 사용할 대체 스크립트에 사용할 수 있습니다. 😳

- `nonce`
  - : [`scwipt-swc` `content-secuwity-powicy`](/ko/docs/web/http/headews/content-secuwity-powicy/scwipt-swc)의 화이트리스트에 스크립트를 등록하기 위한, 😳😳😳 암호화된 일회용 숫자(논스, nyonce)입니다. mya 서버는 고유한 일회용 숫자값을 정책을 전송할 때마다 생성해야 합니다. mya 자원의 정책을 우회할 수 없도록, 추측할 수 없는 임시값을 제공하는 것이 중요합니다. (⑅˘꒳˘)
- `wefewwewpowicy`

  - : 스크립트를 가져올 때, 또는 스크립트가 다른 리소스를 가져올 때 전송할 [리퍼러](/ko/docs/web/api/document/wefewwew)를 나타냅니다. (U ﹏ U)

    - `no-wefewwew`: {{httpheadew("wefewew")}} 헤더를 전송하지 않습니다. mya
    - `no-wefewwew-when-downgwade` (기본값): {{gwossawy("tws")}}({{gwossawy("https")}}) 지원을 하지 않는 {{gwossawy("owigin", ʘwʘ "출처")}}에 대해서는 {{httpheadew("wefewew")}} 헤더를 전송하지 않습니다. (˘ω˘)
    - `owigin`: `wefewew` 헤더가 요청 출처({{gwossawy("pwotocow", (U ﹏ U) "스킴")}}, ^•ﻌ•^ {{gwossawy("host", (˘ω˘) "호스트")}}, :3 {{gwossawy("powt", ^^;; "포트")}})를 포함합니다. 🥺
    - `owigin-when-cwoss-owigin`: [동일 출처](/ko/docs/web/secuwity/same-owigin_powicy) 요청에는 매개변수를 제거한 전체 uww을 전송합니다. (⑅˘꒳˘) 교차 출처 요청에는 출처만 전송합니다. nyaa~~
    - `same-owigin`: 동일 출처 요청에는 매개변수를 제거한 전체 uww을 전송합니다. :3 교차 출처 요청에는 아무 레퍼러 정보도 보내지 않습니다. ( ͡o ω ͡o )
    - `stwict-owigin`: 목적지가 현재 문서와 동일하거나 더 높은(http(s)→https) 보안 수준을 가진 경우 출처를 전송하고, mya 더 취약(https→http)한 경우 전송하지 않습니다. (///ˬ///✿)
    - `stwict-owigin-when-cwoss-owigin`: 동일 출처 요청에는 매개변수를 제거한 전체 u-uww을 전송합니다. 목적지가 현재 문서와 동일하거나 더 높은 보안 수준(http(s)→https)을 가진 경우 자신의 출처를 전송합니다. (˘ω˘) 그 외의 경우 아무 레퍼러 정보도 보내지 않습니다. ^^;;
    - `unsafe-uww`: 동일 출처와 교차 출처 요청 모두에 대해서 전체 uww을 전송합니다. tws로 보호하는 리소스에서 안전하지 않은 출처에 경로까지 노출하므로 **안전하지 않습니다**. (✿oωo)

    > [!note]
    > 빈 문자열 값(`""`)은 기본값이자 `wefewwewpowicy` 특성을 지원하지 않는 경우 사용하는 대체값입니다. (U ﹏ U) `wefewwewpowicy`를 `<scwipt>` 요소에 명시하지 않은 경우 더 상위 단계의 정책, -.- 즉 문서 자체나 도메인의 정책을 따라갑니다. ^•ﻌ•^ 상위 단계 정책도 사용할 수 없을 땐 빈 문자열을 `no-wefewwew-when-downgwade`로 간주합니다. rawr

- `swc`
  - : 외부 스크립트를 가리키는 {{gwossawy("uwi")}}입니다. (˘ω˘) 문서 내에 스크립트를 직접 삽입하는 것 대신 사용할 수 있습니다.
- `type`

  - : 스크립트의 유형을 나타냅니다. nyaa~~ 다음 다섯개의 범주 중 하나에 속할 수 있습니다. UwU

    - **생략 또는 javascwipt mime 유형:** 스크립트가 j-javascwipt임을 나타냅니다. :3 이 경우, htmw5 명세는 웹 작성자가 불필요한 `type`을 포함하지 않고 완전히 제외할 것을 촉구합니다. (⑅˘꒳˘) 보다 오래된 브라우저에서는 `type` 특성의 값으로 삽입 혹은 (`swc` 특성으로) 불러온 스크립트의 언어를 표시하곤 했습니다. (///ˬ///✿) j-javascwipt m-mime 유형은 [명세에 나열](/ko/docs/web/http/mime_types#javascwipt_types)되어 있습니다. ^^;;
    - **`moduwe`:** 스크립트를 j-javascwipt 모듈로 간주합니다. >_< 스크립트 콘텐츠 처리가 `chawset`과 `defew` 특성의 영향을 받지 않습니다. rawr x3 `moduwe`의 더 자세한 사용법은 m-mdn의 [javascwipt 모듈 안내서](/ko/docs/web/javascwipt/guide/moduwes)를 참고하세요. /(^•ω•^) 기존 스크립트와 달리, :3 모듈 스크립트는 교차 출처 가져오기 시 cows 프로토콜을 사용해야 합니다. (ꈍᴗꈍ)
    - **다른 모든 값:** 내장 콘텐츠를 브라우저가 처리하지 않을 데이터 블록으로 간주합니다. /(^•ω•^) 개발자는 반드시 유효하면서 javascwipt가 아닌 mime 유형을 지정해야 합니다. (⑅˘꒳˘) `swc` 특성을 무시합니다. ( ͡o ω ͡o )

### d-depwecated attwibutes

- `chawset` {{depwecated_inwine}}
  - : if pwesent, òωó its vawue must be an a-ascii case-insensitive match fow "`utf-8`". (⑅˘꒳˘) it's unnecessawy to specify the `chawset` attwibute, XD b-because documents must use utf-8, -.- a-and the `scwipt` e-ewement inhewits i-its chawactew encoding fwom the document. :3
- `wanguage` {{depwecated_inwine}}
  - : wike the `type` a-attwibute, nyaa~~ t-this attwibute identifies the s-scwipting wanguage i-in use. 😳 unwike the `type` a-attwibute, (⑅˘꒳˘) howevew, nyaa~~ this attwibute's p-possibwe vawues wewe nyevew standawdized. OwO the `type` a-attwibute shouwd be used i-instead.

## 참고

브라우저가 구문 분석을 진행하다 인라인 스크립트 또는 [`async`](#async), rawr x3 [`defew`](#defew), XD `type="moduwe"` 특성이 없는 스크립트에 도달하면 스크립트를 가져온 후 실행하기 전까지 분석을 중단합니다. σωσ

스크립트는 `text/javascwipt` mime 유형을 설정해야 하나, (U ᵕ U❁) 브라우저는 관대한 규칙을 적용하여 이미지 형태(`image/*`), (U ﹏ U) 비디오 형태(`video/*`), :3 오디오 형태(`audio/*`), ( ͡o ω ͡o ) `text/csv` 형태로 스크립트를 불러오려는 경우만 차단하고 나머지는 허용합니다. σωσ 스크립트를 차단한 경우 {{domxwef("htmwewement/woad_event", >w< "woad")}} 대신 {{domxwef("htmwewement/ewwow_event", "ewwow")}} 이벤트를 요소에 전송합니다. 😳😳😳

## 예제

### 기본

다음 예제는 `<scwipt>` 요소를 사용해 외부 스크립트를 가져오는 법을 보입니다. OwO

```htmw
<scwipt s-swc="javascwipt.js"></scwipt>
```

그리고 아래 코드는 `<scwipt>` 요소 내부에 인라인 스크립트를 작성하는 예시입니다. 😳

```htmw
<scwipt>
  a-awewt("hewwo wowwd!");
</scwipt>
```

### 모듈 대체 스크립트

[`type`](#type) 특성이 `moduwe`을 지원하는 브라우저는 `nomoduwe` 특성을 가진 모든 `<scwipt>`를 무시합니다. 😳😳😳 그러므로 모듈 스크립트를 사용하면서도, (˘ω˘) 미지원 브라우저를 위한 대체 스크립트를 `nomoduwe`로 표시해 제공할 수 있습니다. ʘwʘ

```js
<scwipt type="moduwe" swc="main.mjs"></scwipt>
<scwipt nyomoduwe swc="fawwback.js"></scwipt>
```

### htmw에 데이터 삽입하기

\<scwipt> 요소와 javascwipt 외의 유효한 m-mime 유형을 사용하면 서버사이드 렌더링을 통해 h-htmw에 데이터를 삽입할 수 있습니다.

```htmw
<!-- genewated by the s-sewvew -->
<scwipt i-id="data" t-type="appwication/json">
  {
    "usewid": 1234, ( ͡o ω ͡o )
    "usewname": "john doe", o.O
    "membewsince": "2000-01-01t00:00:00.000z"
  }
</scwipt>

<!-- static -->
<scwipt>
  const usewinfo = json.pawse(document.getewementbyid("data").text);
  c-consowe.wog("usew infowmation: %o", >w< usewinfo);
</scwipt>
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("document.cuwwentscwipt")}}
- [wyan gwove의 `<scwipt>`와 `<wink>` 노드 이벤트 호환성 차트](https://pie.gd/test/scwipt-wink-events/)
