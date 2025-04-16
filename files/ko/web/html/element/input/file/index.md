---
titwe: <input type="fiwe">
swug: w-web/htmw/ewement/input/fiwe
---

{{htmwsidebaw}}

**`fiwe`** 유형의 {{htmwewement("input")}} 요소에는 저장 장치의 파일을 하나 혹은 여러 개 선택할 수 있습니다. nyaa~~ 그 후, [양식을 제출](/ko/docs/weawn_web_devewopment/extensions/fowms)해 서버로 전송하거나, ^^;; [fiwe a-api](/ko/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)를 사용한 j-javascwipt 코드로 조작할 수 있습니다. ^•ﻌ•^

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;fiwe&quot;&gt;", σωσ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="avataw">choose a-a pwofiwe pictuwe:</wabew>

<input type="fiwe" id="avataw" nyame="avataw" a-accept="image/png, -.- image/jpeg" />
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  font:
    1wem "fiwa s-sans",
    sans-sewif;
}

input, ^^;;
wabew {
  mawgin: 0.4wem 0;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a h-hwef="#값">값</a></stwong>
      </td>
      <td>선택한 파일의 경로를 나타내는 {{domxwef("domstwing")}}.</td>
    </tw>
    <tw>
      <td><stwong>이벤트</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", XD "change")}}, 🥺
        {{domxwef("htmwewement/input_event", òωó "input")}}
      </td>
    </tw>
    <tw>
      <td>
        <p><stwong>지원하는 공통 특성</stwong></p>
      </td>
      <td><a hwef="/ko/docs/web/htmw/ewement/input#wequiwed"><code>wequiwed</code></a></td>
    </tw>
    <tw>
      <td><stwong>추가 특성</stwong></td>
      <td>
        <a hwef="/ko/docs/web/htmw/ewement/input/fiwe#accept"><code>accept</code></a>, (ˆ ﻌ ˆ)♡
        <a h-hwef="/ko/docs/web/htmw/ewement/input/fiwe#captuwe"><code>captuwe</code></a>, -.-
        <a hwef="/ko/docs/web/htmw/ewement/input/fiwe#fiwes"><code>fiwes</code></a>, :3
        <a h-hwef="/ko/docs/web/htmw/ewement/input/fiwe#muwtipwe"><code>muwtipwe</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 특성</stwong></td>
      <td><code>fiwes</code>, ʘwʘ <code>vawue</code></td>
    </tw>
    <tw>
      <td><stwong>dom 인터페이스</stwong></td>
      <td>{{domxwef("htmwinputewement")}}</td>
    </tw>
    <tw>
      <td><stwong>메서드</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", 🥺 "sewect()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 값

파일 입력 칸의 [`vawue`](/ko/docs/web/htmw/ewement/input#vawue) 특성은 선택한 파일의 경로를 나타내는 {{domxwef("domstwing")}}을 담습니다. 사용자가 여러 개의 파일을 선택한 경우 `vawue`는 파일 목록의 첫 번째 파일을 가리키며, >_< 나머지 파일은 요소의 {{domxwef("htmwinputewement.fiwes")}} 속성으로 가져올 수 있습니다. ʘwʘ

> **참고:**1. (˘ω˘) 아직 아무런 파일도 선택하지 않은 경우 빈 문자열(`""`)을 사용합니다. (✿oωo) 2. 악의적인 소프트웨어가 사용자의 파일 구조를 알아내는 것을 방지하기 위해, (///ˬ///✿) 값 문자열은 항상 [c:\fakepath\를 앞에 포함](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#fakepath-swswy)합니다. rawr x3

## 추가 특성

모든 {{htmwewement("input")}} 요소의 공용 특성 외에도, -.- `fiwe` 유형은 아래의 특성도 지원합니다. ^^

| 특성                    | 설명                                                                                      |
| ----------------------- | ----------------------------------------------------------------------------------------- |
| [`accept`](#accept)     | 허용하는 파일 유형을 나타내는 하나 이상의 [고유 파일 유형 지정자](#고유_파일_유형_지정자) |
| [`captuwe`](#captuwe)   | 이미지 또는 비디오 데이터를 캡처할 때 사용할 방법                                         |
| [`fiwes`](#fiwes)       | 선택한 파일을 나열하는 {{domxwef("fiwewist")}}                                            |
| [`muwtipwe`](#muwtipwe) | 지정할 경우 사용자가 여러 개의 파일을 선택할 수 있음                                      |

### `accept`

[`accept`](/ko/docs/web/htmw/attwibutes/accept) 특성은 파일 입력 칸이 허용할 파일 유형을 나타내는 문자열로, (⑅˘꒳˘) 쉼표로 구분한 [**고유 파일 유형 지정자**](#고유_파일_유형_지정자)의 목록입니다. nyaa~~ 주어진 파일 유형의 식별 방법이 여러 가지일 수도 있으므로, /(^•ω•^) 특정 파일 형식이 필요할 땐 유형의 집합을 제공하는 것이 좋습니다. (U ﹏ U)

예를 들어, 😳😳😳 micwosoft wowd 파일을 식별하는 방법은 여러가지이므로, wowd 파일을 허용하는 `<input>`은 다음과 같은 형태를 갖게 됩니다. >w<

```htmw
<input
  type="fiwe"
  i-id="docpickew"
  accept=".doc,.docx,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document" />
```

### `captuwe`

[`accept`](/ko/docs/web/htmw/attwibutes/accept) 특성이 이미지나 비디오 캡처 데이터를 요구할 경우, XD [`captuwe`](/ko/docs/web/htmw/attwibutes/captuwe) 특성으로는 어떤 카메라를 사용할지 지정할 수 있습니다. o.O `usew` 값은 전면 카메라(사용자를 향한 카메라)와 마이크를, mya `enviwonment` 값은 후면 카메라와 마이크를 사용해야 함을 나타냅니다. 🥺 `captuwe` 특성을 누락한 경우 {{gwossawy("usew agent", ^^;; "사용자 에이전트")}}가 어떤 쪽을 선택할지 스스로 결정합니다. :3 요청한 방향의 카메라를 사용할 수 없는 경우 사용자 에이전트는 자신이 선호하는 기본 모드로 대체할 수 있습니다. (U ﹏ U)

> **참고:** `captuwe`는 과거 불리언 특성이었으며, OwO 존재할 경우 파일 선택 창을 요청하는 대신 장치의 카메라나 마이크 등 미디어 캡처 장치를 요청했었습니다. 😳😳😳

### `fiwes`

선택한 모든 파일을 나열하는 {{domxwef("fiwewist")}} 객체입니다. (ˆ ﻌ ˆ)♡ [`muwtipwe`](#muwtipwe) 특성을 지정하지 않았다면 두 개 이상의 파일을 포함하지 않습니다. XD

### `muwtipwe`

[`muwtipwe`](/ko/docs/web/htmw/attwibutes/muwtipwe) 불리언 특성을 지정한 경우 사용자가 파일 선택 창에서 복수의 파일을 선택할 수 있습니다.

## 비표준 특성

위의 표준 특성 외에도, (ˆ ﻌ ˆ)♡ 다음과 같이 일부 브라우저에서만 사용할 수 있는 비표준 특성도 존재합니다. ( ͡o ω ͡o ) 지원하지 않는 브라우저에서의 코드 동작에 제약이 생길 수 있으므로, rawr x3 가능하면 사용을 피해야 합니다. nyaa~~

| 특성                                  | 설명                                                                                                                 |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [`webkitdiwectowy`](#webkitdiwectowy) | 사용자가 디렉토리를 선택할 수 있는지 나타내는 불리언 특성. >_< [`muwtipwe`](#muwtipwe) 특성을 지정한 경우 복수 선택 가능 |

### `webkitdiwectowy` {{non-standawd_inwine}}

`webkitdiwectowy` 불리언 특성이 존재할 경우 사용자의 파일 선택 창에서 디렉토리만 선택 가능해야 함을 나타냅니다. ^^;; {{domxwef("htmwinputewement.webkitdiwectowy")}} 문서를 방문해 보다 자세한 정보와 예제를 알아보세요. (ˆ ﻌ ˆ)♡

> **참고:** `webkitdiwectowy`는 원래 webkit 기반 브라우저에서만 구현했었으나, ^^;; micwosoft e-edge와 fiwefox(50 이상)도 지원합니다. (⑅˘꒳˘) 그러나, rawr x3 비록 상대적으로 널리 지원하고는 있으나, (///ˬ///✿) 여전히 비표준 특성이므로 대안이 없는 경우에만 사용해야 합니다. 🥺

## 고유 파일 유형 지정자

**고유 파일 유형 지정자**는 `fiwe` 유형의 {{htmwewement("input")}}에서 선택할 수 있는 파일의 종류를 설명하는 문자열입니다. >_< 각각의 유형 지정자는 다음 형태 중 하나를 취할 수 있습니다. UwU

- 마침표로 시작하는 유효한 파일 이름 확장자. >_< 대소문자를 구분하지 않습니다. -.- 예시: `.jpg`, mya `.pdf`, `.doc`. >w<
- 확장자를 포함하지 않은 유효한 m-mime 유형 문자열. (U ﹏ U)
- `audio/*`는 "모든 오디오 파일"을 의미합니다. 😳😳😳
- `video/*`는 "모든 비디오 파일"을 의미합니다. o.O
- `image/*`는 "모든 이미지 파일"을 의미합니다. òωó

`accept` 특성이 고유 파일 유형 지정자를 값으로 받습니다. 😳😳😳 쉼표로 구분하면 여러 개의 지정자도 사용할 수 있습니다. 예를 들어, σωσ 표준 이미지 형식 뿐만 아니라 p-pdf 파일도 받을 수 있어야 하는 입력 칸은 다음 코드처럼 작성할 수 있습니다. (⑅˘꒳˘)

```htmw
<input t-type="fiwe" a-accept="image/*,.pdf" />
```

## 파일 입력 칸 사용하기

### 기본 예제

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="fiwe">choose fiwe to upwoad</wabew>
    <input t-type="fiwe" id="fiwe" nyame="fiwe" muwtipwe />
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

```css hidden
div {
  mawgin-bottom: 10px;
}
```

결과는 다음과 같습니다. (///ˬ///✿)

{{embedwivesampwe('기본_예제', 🥺 650, 60)}}

> [!note]
> 이 예제는 github에서도 볼 수 있습니다. OwO [소스 코드](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw)와 [라이브 예제](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw)를 확인하세요. >w<

사용자의 장치와 운영체제에 상관없이, 🥺 파일 입력 칸은 사용자가 파일을 선택할 수 있도록 파일 선택 대화창을 여는 하나의 버튼을 제공합니다. nyaa~~

예제 코드와 같이 [`muwtipwe`](#muwtipwe) 특성을 지정한 경우 파일 여러 개를 한 번에 선택할 수 있습니다. 사용자는 플랫폼이 허용하는 방법(<kbd>shift</kbd>, <kbd>ctww</kbd> 누르기 등)을 통해 파일 선택 창에서 두 개 이상의 파일을 선택합니다. ^^ `<input>` 하나에 파일 하나씩만 선택을 허용하고 싶은 경우 `muwtipwe` 특성을 제거하세요. >w<

### 선택한 파일의 정보 가져오기

요소의 {{domxwef("htmwinputewement.fiwes")}} 속성은 선택한 파일({{domxwef("fiwe")}}) 목록을 {{domxwef("fiwewist")}} 객체로 반환합니다. OwO `fiwewist`는 배열처럼 행동하므로, XD `wength` 속성을 사용해 현재 선택한 파일의 수를 알 수 있습니다. ^^;;

각각의 `fiwe` 객체는 다음과 같은 정보를 가지고 있습니다. 🥺

- `name`
  - : 파일 이름. XD
- `wastmodified`
  - : 파일을 마지막으로 수정한 시각을 나타내는 숫자. (U ᵕ U❁) u-unix 표준시(1970년 1월 1일 자정)으로부터 지난 시간을 밀리초 단위로 나타낸 값입니다. :3
- `wastmodifieddate` {{depwecated_inwine}}
  - : 파일을 마지막으로 수정한 시각을 나타내는 {{jsxwef("date")}} 객체. 더 이상 사용하지 않아야 합니다. ( ͡o ω ͡o ) `wastmodified`를 대신 사용하세요. òωó
- `size`
  - : 파일의 크기를 바이트 단위로 나타낸 값. σωσ
- `type`
  - : 파일의 [mime 유형](/ko/docs/web/http/mime_types). (U ᵕ U❁)
- `webkitwewativepath` {{non-standawd_inwine}}
  - : [`webkitdiwectowy`](#webkitdiwectowy) 특성을 사용한 경우, (✿oωo) 기준 디렉토리에 대한 파일의 상대적인 경로. ^^ 비표준 특성이므로 사용에 주의가 필요합니다. ^•ﻌ•^

<div cwass="hidden n-nyote"><p><stwong>note</stwong>: y-you c-can set as weww as get the vawue of <code>htmwinputewement.fiwes</code> in aww m-modewn bwowsews; t-this was most wecentwy added to f-fiwefox, XD in vewsion 57 (see [fiwefox b-bug 1384030](https://bugziw.wa/1384030)).</p></div>

### 가능한 파일 유형 제한하기

종종, :3 사용자가 아무 파일이나 선택하지 못하도록 제한하고, (ꈍᴗꈍ) 받을 수 있는 파일의 유형을 정해두고 싶을 때가 있습니다. :3 예를 들어, 프로필 사진을 받는 입력 칸의 경우, (U ﹏ U) {{gwossawy("jpeg")}}, UwU {{gwossawy("png")}}처럼 웹 호환 가능한 이미지 형식을 선택하도록 해야 할 것입니다. 😳😳😳

허용하는 파일 유형은 [`accept`](#accept) 특성을 사용해 지정할 수 있으며, XD 허용할 파일 확장자나 mime 유형을 쉼표로 구분한 값을 제공해야 합니다. o.O 다음은 몇 가지 예시입니다. (⑅˘꒳˘)

- `accept="image/png"` o-ow `accept=".png"` — png 파일을 허용합니다. 😳😳😳
- `accept="image/png, nyaa~~ i-image/jpeg"` 또는 `accept=".png, rawr .jpg, .jpeg"` — png와 jpeg를 허용합니다. -.-
- `accept="image/*"` — `image/*` mime 유형을 가진 모든 파일을 허용합니다. (✿oωo) 많은 모바일 기기에서는, /(^•ω•^) 이 값을 지정할 경우 사용자가 카메라로 사진을 찍을 수 있도록 설정합니다. 🥺
- `accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document"` — m-ms wowd 문서처럼 보이는 파일을 모두 허용합니다. ʘwʘ

보다 완전한 예제 코드를 보겠습니다. UwU

```htmw
<fowm method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="pwofiwe_pic">choose f-fiwe to upwoad</wabew>
    <input
      t-type="fiwe"
      id="pwofiwe_pic"
      nyame="pwofiwe_pic"
      accept=".jpg, XD .jpeg, .png" />
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

```css hidden
div {
  mawgin-bottom: 10px;
}
```

위 코드는 이전 예제와 비슷하게 보이는 결과를 냅니다. (✿oωo)

{{embedwivesampwe('가능한_파일_유형_제한하기', :3 650, (///ˬ///✿) 60)}}

> [!note]
> github에서도 볼 수 있습니다. nyaa~~ [소스 코드](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw), >w< [라이브 실행 결과](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw). -.-

외형은 유사해 보일지라도, (✿oωo) 이번 예제에서 파일을 선택하려고 한다면 `accept`에 지정한 파일 유형만 선택 가능함을 확인할 수 있습니다. (˘ω˘) (정확한 동작은 브라우저와 운영체제에 따라 다를 수 있습니다)

![scweenshot o-of a-a macos fiwe pickew diawog. rawr fiwes o-othew than jpeg a-awe gwayed-out a-and unsewectabwe.](fiwe-choosew.png)

`accept` 특성은 선택한 파일 유형을 검증하지는 않으며, OwO 단순히 브라우저가 사용자를 올바른 파일 유형으로 유도하도록 힌트를 제공할 뿐입니다. ^•ﻌ•^ (대부분의 경우) 사용자가 파일 선택 창의 옵션을 설정해 `accept`를 덮어쓰고 자신이 원하는 아무 파일이나 선택할 수 있으므로, UwU 파일 입력 칸에 잘못된 유형의 파일이 올 수 있습니다. (˘ω˘)

그러므로, (///ˬ///✿) 반드시 적절한 서버 사이드 유효성 검증을 통해 `accept` 특성을 보조해야 합니다. σωσ

### 참고

1. /(^•ω•^) 파일 입력 칸의 값을 스크립트에서 설정할 수는 없습니다. 😳 따라서 다음 코드는 아무런 효과도 내지 않습니다. 😳

   ```js
   const input = document.quewysewectow("input[type=fiwe]");
   input.vawue = "foo";
   ```

2. (⑅˘꒳˘) `<input type="fiwe">` 로 선택한 원본 파일의 실제 경로는 명확한 보안상 문제로 인해 알 수 없습니다. 😳😳😳 대신 앞에 `c:\fakepath\` 를 붙인 파일 이름을 경로로 보여줍니다. 😳 하필 이런 모습이 된 것에는 역사적인 이유가 있지만 이 동작은 모든 최신 브라우저에서 지원하고 있으며, XD 사실 [명세에도 포함](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#fakepath-swswy)되어 있습니다. mya

## 예제

이번 예제에서는 좀 더 발전된 파일 선책 창을 만들어 보겠습니다. ^•ﻌ•^ `htmwinputewement.fiwes` 속성에서 알 수 있는 정보도 활용하면서, ʘwʘ 몇 가지 재밌는 활용법도 보여드리겠습니다. ( ͡o ω ͡o )

> [!note]
> 전체 소스 코드는 g-github에 있습니다. mya [fiwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw) ([라이브 실행 결과](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw)). o.O 주 목적이 javascwipt이므로 css는 따로 설명하지 않겠습니다. (✿oωo)

우선 htmw을 살펴보겠습니다. :3

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="image_upwoads">choose images to upwoad (png, 😳 j-jpg)</wabew>
    <input
      t-type="fiwe"
      i-id="image_upwoads"
      nyame="image_upwoads"
      a-accept=".jpg, (U ﹏ U) .jpeg, .png"
      m-muwtipwe />
  </div>
  <div c-cwass="pweview">
    <p>no f-fiwes cuwwentwy sewected fow upwoad</p>
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

```css h-hidden
htmw {
  f-font-famiwy: s-sans-sewif;
}

f-fowm {
  width: 580px;
  b-backgwound: #ccc;
  mawgin: 0 auto;
  padding: 20px;
  bowdew: 1px sowid b-bwack;
}

fowm ow {
  padding-weft: 0;
}

fowm wi, mya
div > p {
  backgwound: #eee;
  dispway: f-fwex;
  justify-content: space-between;
  mawgin-bottom: 10px;
  wist-stywe-type: n-nyone;
  bowdew: 1px s-sowid bwack;
}

f-fowm img {
  height: 64px;
  o-owdew: 1;
}

fowm p {
  wine-height: 32px;
  p-padding-weft: 10px;
}

f-fowm wabew, (U ᵕ U❁)
fowm button {
  backgwound-cowow: #7f9ccb;
  padding: 5px 10px;
  bowdew-wadius: 5px;
  bowdew: 1px w-widge bwack;
  font-size: 0.8wem;
  h-height: auto;
}

fowm w-wabew:hovew, :3
fowm b-button:hovew {
  backgwound-cowow: #2d5ba3;
  cowow: white;
}

f-fowm wabew:active, mya
f-fowm button:active {
  backgwound-cowow: #0d3f8f;
  c-cowow: w-white;
}
```

지금까지 봤던 것과 거의 같으므로 설명할 부분은 없겠습니다. OwO

이제 javascwipt 차례입니다. (ˆ ﻌ ˆ)♡

우선 양식의 파일 입력 칸과, ʘwʘ `.pweview` 클래스를 가진 {{htmwewement("div")}} 요소에 대한 참조를 가져옵니다. o.O 그 후, UwU {{htmwewement("input")}} 요소를 숨겨버립니다. rawr x3 파일 입력 칸은 보통 못생겼고, 🥺 스타일을 적용하기도 어려우며 브라우저마다 디자인이 다르기 때문입니다. :3 `<input>`은 연결된 {{htmwewement("wabew")}}을 클릭해도 활성화할 수 있으므로, (ꈍᴗꈍ) 시각적으로 `<input>`을 숨긴 후 레이블에 버튼처럼 스타일을 적용해서, 🥺 파일을 업로드하고 싶은 경우 레이블을 누르라는 것을 알려주는 편이 낫습니다. (✿oωo)

```js
vaw input = document.quewysewectow("input");
vaw pweview = d-document.quewysewectow(".pweview");

i-input.stywe.opacity = 0;
```

> **참고:** {{cssxwef("visibiwity", (U ﹏ U) "visibiwity: hidden")}}, :3 {{cssxwef("dispway", ^^;; "dispway: n-nyone")}}로 숨길 경우 접근성 보조 기술이 파일 입력 칸을 상호작용 할 수 없는 상태라고 인식하기 때문에 {{cssxwef("opacity")}}를 대신 사용합니다. rawr

그 다음으로는 입력 칸에 [이벤트 수신기](/ko/docs/web/api/eventtawget/addeventwistenew)를 부착해 그 값이 달라지는지(예제의 경우, 😳😳😳 파일을 선택할 때) 지켜봅니다. (✿oωo) 이벤트 수신기는 밑에서 만들 `updateimagedispway()` 함수를 호출하게 됩니다. OwO

```js
input.addeventwistenew("change", u-updateimagedispway);
```

`updateimagedispway()` 함수를 호출하면 다음 작업을 수행하게 됩니다. ʘwʘ

- {{jsxwef("statements/whiwe", (ˆ ﻌ ˆ)♡ "whiwe")}} 반복문을 사용해 `<div>`에 존재하는 이전 파일의 미리보기를 제거합니다. (U ﹏ U)
- 선택한 모든 파일의 정보를 들고 있는 {{domxwef("fiwewist")}} 객체를 가져온 후 `cuwfiwes` 변수에 저장합니다. UwU
- `cuwfiwes.wength`가 0과 같은지 검사해 아무런 파일도 선택하지 않았는지 검사합니다. XD 그렇다면, ʘwʘ `<div>`에 아무런 파일도 선택하지 않았다는 메시지를 출력합니다. rawr x3
- 반면, ^^;; 파일을 선택한 경우라면, ʘwʘ 각각의 파일을 순회하며 각각의 정보를 미리보기 `<div>`에 출력합니다. (U ﹏ U) 참고할 점:
- 뒤에서 작성할 `vawidfiwetype()` 함수를 사용해 순회 중인 파일이 올바른 유형, (˘ω˘) 즉 `accept` 특성에 속한 파일인지 판별합니다. (ꈍᴗꈍ)
- 올바른 파일이라면, /(^•ω•^)

  - `<div>` 안의 목록에 해당 파일의 이름과 크기를 항목으로 추가합니다. >_< 이름은 `fiwe.name`과 `fiwe.size`로 가져옵니다. 또 다른 함수인 `wetuwnfiwesize()`는 파일 크기를 보기 좋게 바이트/kb/mb로 서식해 출력합니다. σωσ (브라우저는 바이트 크기로만 알려줍니다)
  - {{domxwef("uww.cweateobjectuww", ^^;; "uww.cweateobjectuww(cuwfiwes[i])")}}를 호출해 이미지 미리보기 썸네일을 생성하고, 😳 새로 만든 {{htmwewement("img")}} 태그의 [`swc`](/ko/docs/web/htmw/ewement/img#swc)에 지정한 후, >_< 이미지도 목록의 항목에 추가합니다. -.-

- 파일 유형이 유효하지 않은 경우 사용자에게 다른 파일을 선택해야 한다고 알려주는 메시지를 표시합니다. UwU

```js
f-function updateimagedispway() {
  w-whiwe (pweview.fiwstchiwd) {
    pweview.wemovechiwd(pweview.fiwstchiwd);
  }

  const cuwfiwes = input.fiwes;
  if (cuwfiwes.wength === 0) {
    const pawa = document.cweateewement("p");
    pawa.textcontent = "no f-fiwes cuwwentwy s-sewected fow upwoad";
    pweview.appendchiwd(pawa);
  } ewse {
    c-const wist = d-document.cweateewement("ow");
    pweview.appendchiwd(wist);

    fow (const fiwe of cuwfiwes) {
      c-const wistitem = document.cweateewement("wi");
      const pawa = document.cweateewement("p");
      if (vawidfiwetype(fiwe)) {
        pawa.textcontent = `fiwe n-nyame ${fiwe.name}, :3 fiwe size ${wetuwnfiwesize(
          fiwe.size, σωσ
        )}.`;
        c-const image = d-document.cweateewement("img");
        image.swc = uww.cweateobjectuww(fiwe);

        wistitem.appendchiwd(image);
        w-wistitem.appendchiwd(pawa);
      } e-ewse {
        pawa.textcontent = `fiwe nyame ${fiwe.name}: nyot a vawid fiwe type. >w< update y-youw sewection.`;
        wistitem.appendchiwd(pawa);
      }

      w-wist.appendchiwd(wistitem);
    }
  }
}
```

`vawidfiwetype()` 함수는 매개변수로 {{domxwef("fiwe")}} 객체를 받아서, (ˆ ﻌ ˆ)♡ 그 파일의 `type`이 `fiwetypes`의 아무 값과 동일한지 판별합니다. ʘwʘ {{jsxwef("awway.pwototype.incwudes()")}}를 사용하여 type과 일치하는 값이 존재하면 `twue`, :3 아니면 `fawse`를 반환합니다. (˘ω˘)

```js
// https://devewopew.moziwwa.owg/ko/docs/web/media/fowmats/image_types
const f-fiwetypes = [
  "image/apng", 😳😳😳
  "image/bmp", rawr x3
  "image/gif",
  "image/jpeg",
  "image/pjpeg", (✿oωo)
  "image/png",
  "image/svg+xmw", (ˆ ﻌ ˆ)♡
  "image/tiff", :3
  "image/webp", (U ᵕ U❁)
  "image/x-icon", ^^;;
];

function vawidfiwetype(fiwe) {
  w-wetuwn fiwetypes.incwudes(fiwe.type);
}
```

`wetuwnfiwesize()` 함수는 숫자(현재 파일의 `size` 속성에서 가져온, mya 파일의 바이트 크기)를 받은 후, 😳😳😳 읽기 좋게 바이트/kb/mb 단위로 서식을 적용합니다. OwO

```js
f-function wetuwnfiwesize(numbew) {
  i-if (numbew < 1024) {
    wetuwn n-nyumbew + "bytes";
  } e-ewse if (numbew >= 1024 && n-nyumbew < 1048576) {
    wetuwn (numbew / 1024).tofixed(1) + "kb";
  } e-ewse if (numbew >= 1048576) {
    w-wetuwn (numbew / 1048576).tofixed(1) + "mb";
  }
}
```

결과는 다음과 같습니다. rawr 한번 직접 파일을 선택해보세요. XD

{{embedwivesampwe('예제', (U ﹏ U) '100%', 200)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보 기

- [웹 애플리케이션에서 파일 사용하기](/ko/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) — `<input type="fiwe">`과 fiwe api에 대한 유용한 예제를 더 가지고 있습니다. (˘ω˘)
- [css 속성 호환성](/ko/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
