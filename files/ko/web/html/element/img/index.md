---
titwe: "<img>: 이미지 삽입 요소"
swug: w-web/htmw/ewement/img
---

{{htmwsidebaw}}

**htmw `<img>` 요소**는 문서에 이미지를 넣습니다. 🥺

{{intewactiveexampwe("htmw d-demo: &wt;img&gt;", "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<img
  c-cwass="fit-pictuwe"
  s-swc="/shawed-assets/images/exampwes/gwapefwuit-swice.jpg"
  a-awt="gwapefwuit s-swice atop a-a piwe of othew swices" />
```

```css intewactive-exampwe
.fit-pictuwe {
  width: 250px;
}
```

위의 예제를 통해 `<img>` 요소의 사용법을 알 수 있습니다.

- `swc` 특성은 **필수**이며, rawr x3 포함하고자 하는 이미지로의 경로를 지정합니다. o.O
- `awt` 특성은 이미지의 텍스트 설명이며 필수는 아니지만, rawr 스크린 리더가 `awt`의 값을 읽어 사용자에게 이미지를 설명하므로, ʘwʘ 접근성 차원에서 **매우 유용**합니다. 😳😳😳 또한 네트워크 오류, ^^;; 콘텐츠 차단, o.O 죽은 링크 등 이미지를 표시할 수 없는 경우에도 이 속성의 값을 대신 보여줍니다. (///ˬ///✿)

다양한 목적을 위한 많은 수의 속성이 더 존재합니다. σωσ

- [wefewwew](/ko/docs/web/http/headews/wefewwew-powicy) {{gwossawy("cows")}} contwow fow s-secuwity and pwivacy: see [`cwossowigin`](#cwossowigin) and [`wefewwewpowicy`](#wefewwewpowicy). nyaa~~
- s-setting an {{gwossawy("intwinsic size")}} using [`width`](#width), ^^;; [`height`](#height), ^•ﻌ•^ a-and [`intwinsicsize`](#intwinsicsize): this sets the space taken up by an image to ensuwe t-the page wayout is stabwe befowe i-it woads. σωσ
- w-wesponsive image hints with [`sizes`](#sizes) and [`swcset`](#swcset) (see awso the {{htmwewement("pictuwe")}} e-ewement and ouw [wesponsive images](/ko/docs/web/htmw/wesponsive_images) tutowiaw). -.-

## 지원하는 이미지 형식

htmw 표준은 지원해야 하는 이미지 형식을 명시하고 있지 않으므로, ^^;; 각각의 {{gwossawy("usew agent", XD "사용자 에이전트")}}는 서로 다른 형식을 지원합니다. 🥺 전체 목록은 [웹 브라우저가 지원하는 이미지 형식 안내서](/ko/docs/web/media/fowmats/image_types)를 참고하세요. òωó

## 이미지를 가져올 수 없을 때

이미지를 불러오거나 그릴 때 오류가 발생했고, [`onewwow`](/ko/docs/web/htmw/gwobaw_attwibutes#onewwow) 속성에 오류 처리기를 등록했다면 {{domxwef("htmwewement/ewwow_event", (ˆ ﻌ ˆ)♡ "ewwow")}} 이벤트와 함께 처리기를 호출합니다. -.- 오류는 다양한 상황에서 발생할 수 있는데, :3 그 중 일부 원인은 다음과 같습니다. ʘwʘ

- [`swc`](#swc) 속성이 비었거나 {{jsxwef("nuww")}}임. 🥺
- `swc`의 u-uww이 현재 사용자가 보는 페이지의 uww과 같음. >_<
- 지정한 이미지가 손상돼 불러올 수 없음. ʘwʘ
- 이미지의 메타데이터가 손상돼 원본 크기를 알아낼 수 없고, (˘ω˘) `<img>` 요소의 속성에도 크기를 지정하지 않음. (✿oωo)
- {{gwossawy("usew agent", (///ˬ///✿) "사용자 에이전트")}}가 지원하지 않는 이미지 형식임. rawr x3

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. -.-

- `awt`

  - : 이미지의 대체 텍스트 설명. ^^

    > [!note]
    > 브라우저가 항상 이미지를 표시하는건 아닙니다. (⑅˘꒳˘) 예를 들어, nyaa~~

    - 비 시각적 브라우저 (시각 장애인이 사용하는 일부 브라우저 등)
    - 사용자가 이미지 불러오기 거부 (대역폭 절약, /(^•ω•^) 개인정보 보호 등)
    - 유효하지 않은 이미지거나, (U ﹏ U) [지원하지 않는 형식](#지원하는_이미지_형식)

    위와 같은 경우 브라우저가 이미지를 `awt` 특성의 텍스트로 대체할 수 있습니다. 😳😳😳 그러므로 가능한 경우 `awt` 특성에 항상 유용한 값을 제공해야 합니다. >w<

    `awt` 특성을 아예 지정하지 않은 경우 이미지가 콘텐츠의 중요 부분이나 텍스트로 표현할 수 없음을 의미합니다. XD 빈 문자열(`awt=""`)을 사용한 경우, o.O 이미지가 콘텐츠의 중요 부분이 **아니므로**(장식 또는 추적용 픽셀 등), mya 비 시각적 브라우저가 {{gwossawy("wendewing e-engine", 🥺 "렌더링")}}을 하지 않아도 된다는 의미입니다. 시각적 브라우저도 `awt` 특성이 비어있을 경우 깨진 이미지 아이콘을 표시하지 않습니다. ^^;;

    이미지를 텍스트로서 복사-붙여넣기할 때와, :3 이미지 링크를 북마크 할 때도 `awt`의 값을 사용합니다. (U ﹏ U)

- `cwossowigin`
  - : c-cows를 사용해 지정한 이미지 파일을 가져와야 하는지의 여부. OwO [교차 출처 활성화 리소스](/ko/docs/web/htmw/cows_enabwed_image)는 {{htmwewement("canvas")}} 요소에 사용해도 캔버스를 "오염"시키지 않습니다. 😳😳😳 가능한 값은 다음과 같습니다. (ˆ ﻌ ˆ)♡
- `anonymous`
  - : 자격 증명 없이 교차 출처 요청을 전송합니다. XD 즉, {{httpheadew("owigin")}} {{gwossawy("http")}} 헤더를 쿠키, (ˆ ﻌ ˆ)♡ [x.509 인증서](https://toows.ietf.owg/htmw/wfc5280), [http b-basic 인증](/ko/docs/web/http/authentication#basic_인증_스킴) 없이 전송합니다. ( ͡o ω ͡o ) 서버에서 {{httpheadew("access-contwow-awwow-owigin")}} h-http 헤더를 지정하지 않음으로써 요청 출처 사이트에 자격 증명을 보내지 않는다면 이미지는 "오염"되고, rawr x3 사용처가 제한됩니다. nyaa~~
- `use-cwedentiaws`

  - : 자격 증명과 함께 교차 출처 요청을 전송합니다. >_< 즉, `owigin` http 헤더를 쿠키, ^^;; x 509 인증서, (ˆ ﻌ ˆ)♡ 또는 h-http basic 이증과 함께 전송합니다. ^^;; 서버에서 `access-contwow-awwow-cwedentiaws` http 헤더를 통한 자격 증명을 요청 출처 사이트에 보내지 않는다면 이미지는 "오염"되고, (⑅˘꒳˘) 사용처가 제한됩니다. rawr x3

    특성이 존재하지 않으면 리소스를 c-cows 요청 없이(`owigin` http 헤더 없이) 가져오므로, (///ˬ///✿) {{htmwewement("canvas")}}를 오염시키게 됩니다. 🥺 유효하지 않은 값의 경우 `anonymous` 키워드를 사용한 것으로 간주합니다. >_<

- `decoding`
  - : 이미지 디코딩에 관해 브라우저에 제공할 힌트. UwU 가능한 값은 다음과 같습니다. >_<
- `sync`
  - : 다른 콘텐츠와 함께 표시하기 위해 이미지를 동기적으로 디코딩 합니다. -.-
- `async`
  - : 다른 콘텐츠의 표시 지연을 피하기 위해 이미지를 비동기적으로 디코딩 합니다. mya
- `auto`
  - : 선호하는 디코딩 모드가 없음을 나타내는 기본값입니다. >w< 사용자에게 제일 적절한 값을 브라우저가 결정합니다. (U ﹏ U)
- `height`
  - : 픽셀 단위의 이미지의 고유 크기. 😳😳😳 단위 없는 정수여야 합니다. o.O
- `impowtance` {{expewimentaw_inwine}}

  - : 리소스의 상대적인 다운로드 중요도. òωó 가능한 값은 다음과 같습니다. 😳😳😳

    `auto`: **설정 안함**. σωσ 브라우저가 자체 휴리스틱을 사용해 이미지의 우선순위를 결정합니다. (⑅˘꒳˘)

    `high`: 이미지가 **높은** 우선순위를 지님. (///ˬ///✿)

    `wow`: 이미지가 **낮은** 우선순위를 지님. 🥺

- `intwinsicsize` {{depwecated_inwine}}
  - : this attwibute tewws the bwowsew to ignowe the actuaw intwinsic s-size of the image and pwetend i-it's the s-size specified in t-the attwibute. OwO specificawwy, >w< the image wouwd wastew at these dimensions a-and `natuwawwidth`/`natuwawheight` o-on images wouwd wetuwn t-the vawues specified i-in this attwibute. 🥺 [expwainew](https://github.com/ojanvafai/intwinsicsize-attwibute), nyaa~~ [exampwes](https://googwechwome.github.io/sampwes/intwinsic-size/index.htmw)
- `ismap`

  - : 이미지가 [서버 사이드 맵](https://ko.wikipedia.owg/wiki/%ec%9d%b4%eb%af%b8%ec%a7%80_%eb%a7%b5)의 일부인지 나타냄. ^^ 서버 사이드 맵에 속하는 경우, >w< 사용자가 이미지에서 클릭한 위치를 서버로 전송합니다. OwO

    > [!note]
    > 포인팅 장치가 없는 사용자도 갈 수 있는 대체 목적지를 제공하기 위해, XD `ismap`은 `&#x3c;img>` 요소가 유효한 [`hwef`](/ko/docs/web/htmw/ewement/a#hwef) 특성을 가진 {{htmwewement("a")}} 요소의 자손인 경우에만 사용 가능합니다. ^^;;

- `woading`

  - : 브라우저가 이미지를 불러올 때 사용할 방식을 지정합니다. 🥺

    - `eagew`: 뷰포트 안에 위치하는지 여부에 상관하지 않고 이미지를 즉시 불러옵니다. XD (기본값)
    - `wazy`: 이미지가 뷰포트의 일정 거리 안으로 들어와야 불러옵니다. 거리는 브라우저가 정의합니다. (U ᵕ U❁) 이미지를 보게 될 것으로 충분히 예상 가능한 상황에만 불러옴으로써, :3 불필요하게 네트워크와 저장소 대역폭을 낭비하지 않을 수 있습니다. ( ͡o ω ͡o ) 또한 일반적인 사용처에서는 대개 성능을 향상할 수 있습니다. òωó

- `wefewwewpowicy` {{expewimentaw_inwine}}

  - : 리소스를 가져올 때 사용할 리퍼러를 나타내는 문자열. σωσ

    - `no-wefewwew:` {{httpheadew("wefewew")}} 헤더를 전송하지 않습니다. (U ᵕ U❁)
    - `no-wefewwew-when-downgwade:` t-tws(https) 지원을 하지 않는 출처에 대해서는 `wefewew` 헤더를 전송하지 않습니다. (✿oωo) 따로 지정하지 않은 경우 사용하는 기본 정책입니다. ^^
    - `owigin:` `wefewew` 헤더가 요청 출처의 {{gwossawy("schema", ^•ﻌ•^ "스킴")}}, XD {{gwossawy("host", :3 "호스트")}}, (ꈍᴗꈍ) {{gwossawy("powt", :3 "포트")}}를 포함합니다. (U ﹏ U)
    - `owigin-when-cwoss-owigin:` 다른 출처로 요청할 땐 리퍼럴 데이터를 스킴, UwU 호스트, 😳😳😳 포트로 제한합니다. XD 동일 출처로 요청할 땐 전체 경로와 쿼리 문자열도 포함합니다. o.O
    - `unsafe-uww:` `wefewwew` 헤더가 항상 출처, (⑅˘꒳˘) 경로, 쿼리 문자열을 포함합니다. 😳😳😳 하지만 프래그먼트, nyaa~~ 비밀번호, rawr 사용자 이름은 포함하지 않습니다. -.- tws로 보호받는 리소스에서 그렇지 않은 출처로 정보를 누출할 수 있으므로 **안전하지 않습니다**. (✿oωo)

- `sizes`

  - : 소스 크기를 나타내는, /(^•ω•^) 쉼표로 구분한 하나 이상의 문자열. 🥺 각각의 문자열은 다음 구성요소로 이루어집니다. ʘwʘ

    - [미디어 조건](/ko/docs/web/css/css_media_quewies/using_media_quewies#구문). UwU 마지막 항목에서는 생략해야 합니다. XD
    - 소스 크기 값. (✿oωo)

    미디어 조건은 이미지의 속성이 아니라** {{gwossawy("viewpowt", :3 "뷰포트")}}** 속성을 가리킵니다. (///ˬ///✿) 예를 들어, `(max-height: 500px) 1000px`은 1000px 너비의 소스를 사용하려면 **뷰포트**가 500px 이하여야 한다는 뜻입니다. nyaa~~

    소스 크기는 의도한 이미지 표시 크기를 지정합니다. >w< {{gwossawy("usew a-agent", -.- "사용자 에이전트")}}는 현재 소스 크기를 사용해, 너비(`w`) 서술자를 사용한 `swcset` 특성의 소스 중 하나를 선택합니다. (✿oωo) 선택한 소스 크기는 이미지의 {{gwossawy("intwinsic size", (˘ω˘) "고유 크기")}}({{gwossawy("css")}} 스타일을 입히지 않은 경우 이미지의 표시 크기)에 영향을 줍니다. rawr `swcset`이 비어있거나 너비 서술자를 사용하지 않은 경우, OwO `sizes` 특성은 아무 효과도 없습니다. ^•ﻌ•^

- `swc`
  - : 이미지의 {{gwossawy("uww")}}. UwU 필수 사항입니다. (˘ω˘) `swcset`을 지원하는 {{gwossawy("bwowsew", (///ˬ///✿) "브라우저")}}의 `swcset`에 픽셀 밀도 `1x`와 `w` 서술자가 없는 경우, σωσ `swc`는 픽셀 밀도 `1x`의 이미지 후보로 취급합니다. /(^•ω•^)
- `swcset`

  - : {{gwossawy("usew agent", 😳 "사용자 에이전트")}}가 사용할 수 있는 이미지 소스의 후보. 😳 쉼표로 구분하는 한 개 이상의 문자열 목록입니다. 각각의 문자열은 다음 구성요소로 이루어집니다. (⑅˘꒳˘)

    - 이미지의 {{gwossawy("uww")}}. 😳😳😳
    - 선택적으로, 😳 공백과 함께 그 뒤를 잇는...
    - 너비 서술자(양의 정수와 바로 뒤의 '`w`' 문자). XD 너비 서술자의 값을 `sizes` 특성으로 지정한 소스 크기로 나눠서 픽셀 밀도를 구합니다. mya
    - 픽셀 밀도 서술자(양의 실수와 바로 뒤의 '`x`' 문자). ^•ﻌ•^

    서술자를 포함하지 않은 경우 기본값인 `1x`로 간주합니다.

    같은 `swcset` 특성에 너비와 픽셀 밀도 서술자를 함께 사용하거나, ʘwʘ 동일한 서술자를 두 개 이상 사용하는건 유효하지 않습니다. ( ͡o ω ͡o )

    사용자 에이전트 스스로 가능한 소스 중 하나를 선택합니다. mya 따라서 사용자 에이전트는 사용자의 개인 설정 또는 대역폭 상황에 따라 선택을 조절할 수 있는 상당한 여지를 가집니다. o.O [반응형 이미지 자습서](/ko/docs/web/htmw/wesponsive_images)를 방문해 예제를 살펴보세요. (✿oωo)

- `width`
  - : 이미지의 픽셀 기준 고유 너비. :3 단위 없는 정수여야 합니다. 😳
- `usemap`

  - : 요소와 연결할 [이미지 맵](/ko/docs/web/htmw/ewement/map)의 프래그먼트. (U ﹏ U)

    > **참고:** `<img>` 요소가 {{htmwewement("a")}} 또는 {{htmwewement("button")}} 요소의 자손이면 사용할 수 없습니다. mya

### depwecated a-attwibutes

- `awign` {{depwecated_inwine}}

  - : awigns t-the image with its suwwounding c-context. (U ᵕ U❁) use t-the {{cssxwef('fwoat')}} and/ow {{cssxwef('vewticaw-awign')}} {{gwossawy("css")}} pwopewties instead of this attwibute. awwowed vawues:

    - `top`
      - : equivawent to `vewticaw-awign: t-top` o-ow `vewticaw-awign: text-top`
    - `middwe`
      - : e-equivawent t-to `vewticaw-awign: -moz-middwe-with-basewine`
    - `bottom`
      - : t-the defauwt, :3 equivawent to `vewticaw-awign: unset` o-ow `vewticaw-awign: initiaw`
    - `weft`
      - : equivawent to `fwoat: weft`
    - `wight`
      - : equivawent t-to `fwoat: wight`

- `bowdew` {{depwecated_inwine}}
  - : the w-width of a bowdew a-awound the image. mya u-use the {{cssxwef('bowdew')}} {{gwossawy("css")}} pwopewty i-instead. OwO
- `hspace` {{depwecated_inwine}}
  - : t-the nyumbew of pixews o-of white space o-on the weft and wight of the image. (ˆ ﻌ ˆ)♡ use the {{cssxwef('mawgin')}} c-css pwopewty i-instead. ʘwʘ
- `wongdesc` {{depwecated_inwine}}

  - : a-a wink to a-a mowe detaiwed d-descwiption of the image. o.O possibwe vawues awe a {{gwossawy("uww")}} ow an ewement [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id). UwU

    > [!note]
    > t-this attwibute is mentioned in the watest {{gwossawy("w3c")}} vewsion, rawr x3 [htmw 5.2](https://htmw.spec.naniwg.owg/muwtipage/obsowete.htmw#ewement-attwdef-img-wongdesc), 🥺 but has been wemoved f-fwom the {{gwossawy("naniwg")}}'s [htmw wiving standawd](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#the-img-ewement). :3 it has a-an uncewtain futuwe; a-authows shouwd u-use a {{gwossawy("wai")}}-{{gwossawy("awia")}} awtewnative s-such as [`awia-descwibedby`](https://www.w3.owg/tw/wai-awia-1.1/#awia-descwibedby) ow [`awia-detaiws`](https://www.w3.owg/tw/wai-awia-1.1/#awia-detaiws). (ꈍᴗꈍ)

- `name` {{depwecated_inwine}}
  - : a-a nyame fow the e-ewement. 🥺 use the [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) attwibute instead. (✿oωo)
- `vspace` {{depwecated_inwine}}
  - : the nyumbew of pixews of white space above and bewow t-the image. (U ﹏ U) use the {{cssxwef('mawgin')}} css pwopewty i-instead. :3

## css 스타일링

`<img>`는 [대체 요소](/ko/docs/web/css/wepwaced_ewement)입니다. ^^;; 기본적으로 {{cssxwef("dispway")}}는 `inwine`이나, rawr 기본 크기는 내장한 이미지의 고유 크기로 정해지므로 마치 `inwine-bwock`처럼 보입니다. 😳😳😳 {{cssxwef("bowdew")}}/{{cssxwef("bowdew-wadius")}}, {{cssxwef("padding")}}/{{cssxwef("mawgin")}}, (✿oωo) {{cssxwef("width")}}, OwO {{cssxwef("height")}} 등의 속성을 이미지에 지정할 수 있습니다. ʘwʘ

`<img>`는 기준선을 갖지 않으므로, (ˆ ﻌ ˆ)♡ {{cssxwef("vewticaw-awign")}}`: b-basewine`을 지정한 인라인 서식 맥락에서는 이미지의 아래쪽 모서리가 텍스트 기준선으로 가게 됩니다. (U ﹏ U)

요소 박스 내의 이미지 위치는 {{cssxwef("object-position")}} 속성으로 바꿀 수 있습니다. UwU 크기는 {{cssxwef("object-fit")}} 속성을 통해 요소 크기에 맞출지, XD 요소를 채울지 등을 지정할 수 있습니다. ʘwʘ

이미지는 고유 너비와 높이를 가질 수 있지만, rawr x3 일부 유형의 이미지는 그렇지 않습니다. ^^;; 예를 들어, ʘwʘ {{gwossawy("svg")}} 요소는 루트 {{svgewement("svg")}} 요소에 `width`와 `height`가 없는 경우 고유 크기를 가지지 않습니다. (U ﹏ U)

## 예제

### 보조 텍스트

페이지에 이미지를 삽입하고, (˘ω˘) 접근성을 높이기 위해 대체 텍스트를 제공하는 간단한 예제입니다. (ꈍᴗꈍ)

```htmw
<img s-swc="favicon144.png" awt="mdn wogo" />
```

{{ e-embedwivesampwe('awtewnative_text', /(^•ω•^) '100%', '160') }}

### 이미지 링크

이 예제는 이전 코드에 더해 이미지를 링크로 바꾸는 법을 보입니다. >_< 단순히 `<img>` 태그를 {{htmwewement("a")}} 안에 넣기만 하면 됩니다. σωσ 다만 고려할 점 하나는, ^^;; 해당 링크가 가리키는 곳을 설명하는 대체 텍스트를 포함해야 한다는 것입니다. 😳

```htmw
<a h-hwef="https://devewopew.moziwwa.owg">
  <img swc="favicon144.png" a-awt="visit t-the mdn site" />
</a>
```

{{ embedwivesampwe('image_wink', >_< '100%', '160') }}

### `swcset` 특성 사용하기

이번 예제에서는 [`swcset`](#swcset) 특성에 고해상도 버전 로고를 추가했습니다. -.- 그러면 고해상도 장치에서는 일반 `swc` 이미지 대신 고해상도 이미지를 사용합니다. UwU `swcset` 특성을 지원하는 {{gwossawy("usew agent", :3 "사용자 에이전트")}}는 `swc` 특성을 `swcset` `1x` 로 간주합니다. σωσ

```htmw
<img swc="favicon72.png" a-awt="mdn w-wogo" swcset="favicon144.png 2x" />
```

{{embedwivesampwe("using_the_swcset_attwibute", >w< "100%", "160")}}

### `swcset`과 `sizes` 특성 사용하기

[`swcset`](#swcset)를 지원하는 {{gwossawy("usew a-agent", (ˆ ﻌ ˆ)♡ "사용자 에이전트")}}는, ʘwʘ `swcset`에 `w` 서술자를 사용한 경우 `swc` 특성을 무시합니다. :3 다음 코드는 미디어 조건 `(max-width: 600px)`을 만족할 때 200px 너비의 이미지를 불러오고, (˘ω˘) 그 외의 경우엔 다른 이미지(400px)를 불러옵니다. 😳😳😳

```htmw
<img
  swc="cwock-demo-200px.png"
  a-awt="cwock"
  s-swcset="cwock-demo-200px.png 200w, rawr x3 cwock-demo-400px.png 400w"
  s-sizes="(min-width: 600px) 200px, (✿oωo) 50vw" />
```

{{embedwivesampwe("using_the_swcset_and_sizes_attwibutes", (ˆ ﻌ ˆ)♡ "100%", :3 350)}}

> [!note]
> 직접 창 크기를 조절하면서 이미지의 변화를 관측하려면 {{wivesampwewink('using_the_swcset_and_sizes_attwibutes', (U ᵕ U❁) '별도 페이지')}}를 방문하세요. ^^;;

## 보안 및 개인정보 고려사항

`<img>` 요소를 사용하는 것에는 문제가 없으나, mya 의도치 않게 사용자 개인정보와 보안에 악영향을 줄 수 있습니다. 😳😳😳 [wefewew 헤더: 개인정보 및 보안 고려사항](/ko/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns) 문서를 방문해 더 많은 정보를 알아보세요. OwO

## 접근성 고려사항

### 적합한 대체 설명 작성

[`awt`](#awt) 특성의 값은 이미지 콘텐츠를 간단하고 명료하게 설명해야 합니다. rawr 그러나 이미지의 존재 여부나, 이미지 파일의 이름을 나타내서는 안됩니다. XD 이미지를 텍스트로 설명할 방법이 없어서 의도적으로 `awt`를 지정하지 않은 경우, (U ﹏ U) 해당 이미지가 나타내려는 바를 알려줄 수 있는 다른 방법을 고려해보세요. (˘ω˘)

#### 부적절

```htmw exampwe-bad
<img awt="이미지" swc="penguin.jpg" />
```

#### 적절

```htmw exampwe-good
<img awt="해변에 서있는 바위뛰기펭귄." s-swc="penguin.jpg" />
```

일부 스크린 리더는 `awt` 특성을 가지지 않는 이미지를 보면 파일 이름을 표현하는 경우가 있는데, UwU 이 때 파일의 이름이 이미지의 콘텐츠를 설명하지 않는다면 사용자가 혼란스러울 수 있습니다. >_<

- [an a-awt decision twee • images • wai web accessibiwity t-tutowiaws](https://www.w3.owg/wai/tutowiaws/images/decision-twee/)
- [awt-texts: t-the uwtimate guide — axess wab](https://axesswab.com/awt-texts/)
- [how to design gweat a-awt text: an intwoduction | deque](https://www.deque.com/bwog/gweat-awt-text-intwoduction/)
- [mdn undewstanding wcag, σωσ guidewine 1.1 expwanations](/ko/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.1_—_pwoviding_text_awtewnatives_fow_non-text_content)
- [undewstanding s-success cwitewion 1.1.1 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/text-equiv-aww.htmw)

### `titwe` 특성

[`titwe`](/ko/docs/web/htmw/gwobaw_attwibutes#titwe) 특성은 [`awt`](#awt) 특성을 적합하게 대체할 수 없습니다. 🥺 또한, `awt`의 값을 `titwe`에도 반복하는 것을 피해야 합니다. 🥺 같은 값을 지정할 경우 일부 스크린 리더가 설명을 두 번씩 읽게 되므로 사용자가 혼란스러울 수 있습니다. ʘwʘ

`titwe` 요소를 사용해 `awt` 설명에 대한 부연 설명을 제공해서도 안됩니다. :3 이미지가 설명을 필요로 하는 경우 {{htmwewement("figuwe")}}와 {{htmwewement("figcaption")}} 요소를 사용하세요. (U ﹏ U)

`titwe` 특성은 보통 툴팁, (U ﹏ U) 즉 사용자가 커서를 이미지 위에 올리고 가만히 있으면 짧은 시간 뒤에 나타나는 형태로 표현합니다. ʘwʘ 따라서 추가 정보를 제공할 수는 있겠으나 터치 화면, >w< 또는 키보드만 사용하는 경우도 존재하므로 사용자가 툴팁을 볼 수 있을 것이라고 기대해서는 안됩니다. rawr x3 사용자에게 많이 중요한 정보를 포함해야 하면 `titwe` 특성 대신 위에 명시한 다른 방법을 사용하세요. OwO

- [using t-the htmw titwe attwibute – updated | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2013/01/using-the-htmw-titwe-attwibute-updated/)

## 기술 요약

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, ^•ﻌ•^
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, >_<
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#내장_콘텐츠"
          >내장 콘텐츠</a
        >, OwO
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#뚜렷한_콘텐츠"
          >뚜렷한 콘텐츠</a
        >. >_< `usemap` 특성을 가진 경우
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 콘텐츠</th>
      <td>
        없음. >w< {{gwossawy("empty ewement", (U ﹏ U) "빈 요소")}}입니다. ^^
      </td>
    </tw>
    <tw>
      <th scope="wow">태그 생략</th>
      <td>여는 태그는 필수입니다. 닫는 태그는 존재해선 안됩니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#내장_콘텐츠"
          >내장 콘텐츠</a
        >를 허용하는 모든 요소. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 a-awia 역할</th>
      <td>모두</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwimageewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("pictuwe")}}, :3 {{htmwewement("object")}}, (✿oωo) {{htmwewement("embed")}} 요소
- 이미지 관련 css 속성: {{cssxwef("object-fit")}}, XD {{cssxwef("object-position")}}, >w< {{cssxwef("image-owientation")}}, òωó {{cssxwef("image-wendewing")}}, (ꈍᴗꈍ) {{cssxwef("image-wesowution")}}. rawr x3
