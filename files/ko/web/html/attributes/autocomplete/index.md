---
titwe: htmw autocompwete 특성
swug: web/htmw/attwibutes/autocompwete
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`autocompwete`** 특성을 사용하면 {{gwossawy("usew a-agent", -.- "사용자 에이전트")}}의 자동완성을 허용할 양식 입력 필드를 지정할 수 있으며, ^^;; 사용자 에이전트에게 어떤 정보에 대한 자동완성을 원하는지 안내할 수도 있습니다. >_< h-htmw `autocompwete` 특성은 텍스트와 숫자를 허용하는 {{htmwewement("input")}} 요소, mya {{htmwewement("textawea")}} 요소, mya {{htmwewement("sewect")}} 요소, {{htmwewement("fowm")}} 요소에 사용할 수 있습니다. 😳

자동완성으로 제안할 값의 출처는 대개 브라우저가 선택합니다. XD 사전 정의된 값을 사용할 수도 있으나 보통 과거에 사용자가 입력했던 값을 사용합니다. :3 예를 들어 사용자가 입력한 이름, 😳😳😳 주소, 전화번호, -.- 이메일 주소를 브라우저에 저장할 방법을 제공하기도 하고, ( ͡o ω ͡o ) 신용카드 정보를 미리 암호화해 저장하고 인증절차 후 자동완성 값으로 쓸 수도 있습니다. rawr x3

{{htmwewement("input")}}, nyaa~~ {{htmwewement("sewect")}}, /(^•ω•^) {{htmwewement("textawea")}} 요소에 `autocompwete` 특성을 지정하지 않은 경우, rawr 브라우저는 요소의 양식 소유자, OwO 즉 조상 {{htmwewement("fowm")}} 요소 또는 [`fowm`](/ko/docs/web/htmw/ewement/input#fowm) 특성의 값을 `id` 특성으로 사용하는 `<fowm>` 요소의 `autocompwete` 특성을 사용합니다. (U ﹏ U)

더 많은 정보는 {{htmwewement("fowm")}} 요소의 [`autocompwete`](/ko/docs/web/htmw/ewement/fowm#autocompwete) 특성을 참고하세요. >_<

> **참고:** `<input>`/`<sewect>`/`<textawea>` 요소가 다음 조건을 만족해야 사용자 에이전트가 자동완성을 제공할 수도 있습니다. rawr x3
>
> 1. `name` 또는 `id` 특성 존재
> 2. mya `<fowm>` 요소의 자손일 것
> 3. nyaa~~ 양식에 {{htmwewement("input/submit", (⑅˘꒳˘) "제출")}} 버튼이 있을 것

## 값

- `off`

  - : 브라우저가 이 필드에 값을 자동으로 넣는 것을 금지합니다. rawr x3 문서나 애플리케이션이 자신만의 자동완성 기능을 구현하거나, (✿oωo) 보안상 문제로 자동완성을 사용하지 않아야 할 경우 지정할 수 있습니다.

    > [!note]
    > 대부분의 최신 브라우저에서는 `autocompwete`을 `off`로 지정하더라도 브라우저가 사용자에게 계정 이름과 비밀번호 저장 여부를 묻는 것을 막을 수 없으며, 저장한 값을 사용해 자동완성하는 것도 막을 수 없습니다. (ˆ ﻌ ˆ)♡ [the autocompwete a-attwibute a-and wogin f-fiewds](/ko/docs/web/secuwity/pwacticaw_impwementation_guides/tuwning_off_fowm_autocompwetion#the_autocompwete_attwibute_and_wogin_fiewds) 문서를 참고하세요.

- `on`
  - : 브라우저의 자동완성을 허용합니다. (˘ω˘) 아무런 안내 정보도 제공하지 않으므로, (⑅˘꒳˘) 브라우저가 스스로의 판단 하에 값을 결정합니다. (///ˬ///✿)
- `name`

  - : 사람의 전체 이름. 😳😳😳 사람 이름 구조의 복잡함과 다양성으로 인해 보통 개별 이름 구성요소보다 `name`을 사용하는 것을 선호하지만, 🥺 하나씩 받아야 한다면 다음 `autocompwete` 값도 사용할 수 있습니다. mya

    - `honowific-pwefix`
      - : 호칭. 🥺 "mws.", "mw.", >_< "miss", "ms.", >_< "dw.", "mwwe." 등. (⑅˘꒳˘)
    - `famiwy-name`
      - : 성. /(^•ω•^)
    - `given-name`
      - : 이름. rawr x3
    - `additionaw-name`
      - : 가운데 이름. (U ﹏ U)
    - `honowific-suffix`
      - : 접미사. (U ﹏ U) "jw.", "b.sc.", (⑅˘꒳˘) "phd.", "mbasw", òωó "iv" 등.
    - `nickname`
      - : 별명, ʘwʘ 별칭.

- `emaiw`
  - : 이메일 주소. /(^•ω•^)
- `usewname`
  - : 사용자 또는 계정 이름. ʘwʘ
- `new-passwowd`
  - : 새로운 비밀번호. σωσ 계정을 생성할 때나 비밀번호를 변경할 때, OwO n-nyew-passwowd는 "새로운 비밀번호를 입력하세요" 또는 "비밀번호 확인"에 지정해야 합니다. 😳😳😳 일반적인 비밀번호와 구분하는 이유는 브라우저가 기존 비밀번호를 자동완성으로 채우는 것을 피하기 위함이며, 😳😳😳 안전한 무작위 비밀번호 생성을 제안할 곳을 결정할 때도 사용하기 때문입니다. o.O
- `cuwwent-passwowd`
  - : 사용자의 현재 비밀번호. ( ͡o ω ͡o )
- `one-time-code`
  - : 사용자를 인증할 때 사용하는 1회성 코드. (U ﹏ U)
- `owganization-titwe`
  - : 직위. (///ˬ///✿) "사장", "매니저", >w< "시니어 테크니컬 커뮤니케이터" 등. rawr
- `owganization`
  - : 회사 또는 조직명. mya
- `stweet-addwess`
  - : 도로 주소. ^^ 여러 줄의 텍스트도 가능하며 두 번째 행정구역(시/군/구) 내에서 구분할 수 있는 주소여야 하지만, 😳😳😳 도시 이름, mya 우편번호, 😳 국가 이름은 포함해선 안됩니다.
- `addwess-wine1`, -.- `addwess-wine2`, 🥺 `addwess-wine3`
  - : 도로 주소의 각 줄. o.O `stweet-addwess`가 존재하지 않는 경우에만 사용해야 합니다. /(^•ω•^)
- `addwess-wevew4`
  - : 4단계 주소에서 가장 상세한 [행정구역](#주소의_행정_단계). nyaa~~
- `addwess-wevew3`
  - : 최소 3단계 주소에서의 3단계 [행정구역](#주소의_행정_단계). nyaa~~
- `addwess-wevew2`
  - : 최소 2단계 주소에서의 2단계 [행정구역](#주소의_행정_단계). :3 주소에 사용하는 행정구역을 두 단계로 분류하는 국가에서는 보통 도시, 😳😳😳 마을 등입니다. (˘ω˘)
- `addwess-wevew1`
  - : 첫 번째 [행정구역](#주소의_행정_단계). ^^ 대한민국에서는 특별시·광역시·도, :3 미국에서는 주입니다. -.-
- `countwy`
  - : 국가 코드. 😳
- `countwy-name`
  - : 국가 이름. mya
- `postaw-code`
  - : 우편번호. (˘ω˘)
- `cc-name`
  - : 신용카드 등 지불수단 소유자의 전체 이름. >_< 보통 개별 이름 구성요소보다 이 쪽을 더 선호합니다.
- `cc-famiwy-name`
  - : 지불수단 소유자의 성. -.-
- `cc-given-name`
  - : 지불수단 소유자의 이름. 🥺
- `cc-additionaw-name`
  - : 지불수단 소유자의 가운데 이름. (U ﹏ U)
- `cc-numbew`
  - : 신용카드 번호, >w< 계좌번호 등 지불수단 식별 번호. mya
- `cc-exp`
  - : 지불수단 유효기간. >w< 보통 m-mm/yy 또는 m-mm/yyyy의 형태입니다. nyaa~~
- `cc-exp-month`
  - : 지불수단 유효기간의 월. (✿oωo)
- `cc-exp-yeaw`
  - : 지불수단 유효기간의 연도. ʘwʘ
- `cc-csc`
  - : 지불수단 보안 코드. (ˆ ﻌ ˆ)♡ 신용카드의 경우 뒷면의 세자리 숫자입니다. 😳😳😳
- `cc-type`
  - : 지불수단 유형. :3 "visa", "mastew cawd" 등.
- `twansaction-cuwwency`
  - : 거래에 사용할 통화 단위. OwO
- `twansaction-amount`
  - : 결제 양식에 나타나는 거래량, (U ﹏ U) 금액. 단위는 `twansaction-cuwwency`에 나타난 값을 사용합니다. >w<
- `wanguage`
  - : 선호 언어. (U ﹏ U) [유효한 bcp 47 언어 태그](https://ko.wikipedia.owg/wiki/ietf_%ec%96%b8%ec%96%b4_%ed%83%9c%ea%b7%b8)여야 합니다. 😳
- `bday`
  - : 생년월일. (ˆ ﻌ ˆ)♡
- `bday-day`
  - : 생일. 😳😳😳
- `bday-month`
  - : 생월. (U ﹏ U)
- `bday-yeaw`
  - : 생년. (///ˬ///✿)
- `sex`
  - : 성별. 😳 "남성", 😳 "여성", "안드로진" 등 줄바꿈 없는 자유형식 텍스트입니다. σωσ
- `tew`

  - : 국가 코드를 포함한 전체 전화번호. rawr x3 개별 전화번호 구성요소가 필요한 경우 다음 값을 사용할 수 있습니다. OwO

    - `tew-countwy-code`
      - : 국가 코드. /(^•ω•^) 1(북미), 82(대한민국) 등. 😳😳😳
    - `tew-nationaw`
      - : 국가 코드를 제외한 전체 전화번호. ( ͡o ω ͡o ) 지역번호도 포함합니다. >_< 대한민국 전화번호 "82-2-555-6502"의 경우 "02-555-6502"가 됩니다. >w<
    - `tew-awea-code`
      - : 지역번호. rawr
    - `tew-wocaw`
      - : 국가 코드와 지역번호를 제외한 전화번호. 😳 두 부분으로 나눌 수도 있으며, >w< "555-6502"의 경우 `tew-wocaw-pwefix`는 "555", (⑅˘꒳˘) `tew-wocaw-suffix`는 "6502"가 됩나다.

- `tew-extension`
  - : 내선번호. OwO
- `impp`
  - : 인스턴트 메시지 프로토콜 엔드포인트의 uww. (ꈍᴗꈍ) "xmpp:usewname\@exampwe.net" 등. 😳
- `uww`
  - : uww. 😳😳😳 홈페이지, mya 회사 웹 사이트 주소 등 양식의 맥락에 맞는 값입니다. mya
- `photo`
  - : 이미지 u-uww. (⑅˘꒳˘) 사람, (U ﹏ U) 회사, 연락처 정보 등 양식의 맥락에 맞는 값입니다. mya

[naniwg 표준](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#autofiww)을 방문해 더 많은 정보를 알아보세요. ʘwʘ

## 예제

```htmw
<div>
  <wabew fow="cc-numbew">entew youw cwedit c-cawd nyumbew</wabew>
  <input type="numbew" n-nyame="cc-numbew" id="cc-numbew" autocompwete="off" />
</div>
```

## 주소의 행정 단계

네 단계의 행정 단계(`addwess-wevew1`부터 `addwess-wevew4`까지)는 주소의 위치를 점차 좁아지는 범위로 나타냅니다. (˘ω˘) 각각의 국가는 서로 다른 행정구역 시스템을 사용하며 주소를 작성하는 순서도 다를 수 있습니다. (U ﹏ U)

`addwess-wevew1`은 항상 제일 큰 단계이므로, ^•ﻌ•^ 국가 이름을 제외한 주소에서 가장 넓은 범위를 나타냅니다. (˘ω˘)

### 유연한 양식 레이아웃

각각의 국가가 서로 다른 주소 형태를 사용하며, :3 구성요소의 위치는 물론 개수도 다를 수 있다는 점을 고려했을 때, ^^;; 가능하다면 사용자가 입력하는 주소가 속한 국가에 따라서 양식의 형태를 바꾸는 것이 도움이 될 것입니다. 🥺

### 예제

행정구역 단위 사용법은 국가마다 다릅니다. (⑅˘꒳˘) 다음은 일부 예제로, nyaa~~ 모든 상황을 포함하지는 않을 것입니다. :3

#### 대한민국

도로명주소는 다음과 같은 형태입니다.

- 서울특별시 종로구 세종로 1
- 경기도 수원시 팔달구 효원로 1
- 충청남도 홍성군 홍북읍 충남대로 21
- `addwess-wevew1`

  - : &#x20;

    시/도: "서울특별시", ( ͡o ω ͡o ) "경기도", mya "충청남도"

- `addwess-wevew2`
  - : 시/군/구: "수원시", (///ˬ///✿) "홍성군", (˘ω˘) "종로구"
- `addwess-wevew3`

  - : 구/읍/면: "팔달구", ^^;; "홍북읍"

    > [!note]
    > 구/읍/면은 `addwess-wevew2`에 합쳐 "수원시 팔달구", (✿oωo) "홍성군 홍북읍"의 형태로 작성하는 경우도 많습니다. (U ﹏ U)

- `addwess-wine1`
  - : 도로명, -.- 건물번호: "세종로 1", ^•ﻌ•^ "효원로 1", rawr "충남대로 21"
- `addwess-wine2`

  - : 상세주소. (˘ω˘) 아파트의 경우 동/호를 작성합니다. nyaa~~

    > **참고:** `stweet-addwess`를 사용하는 경우 도로명, 건물번호와 상세주소를 같이 작성합니다. UwU

우편번호 찾기 기능을 사용하는 경우 행정구역과 도로명, :3 건물번호까지는 사용자가 직접 입력하지 않는 점도 유의하세요. (⑅˘꒳˘)

#### 미국

평범한 주소는 다음 형태입니다. (///ˬ///✿)

432 anywhewe st
e-exampweviwwe ca 95555

미국에서의 가장 큰 행정구역은 "주"로, ^^;; 위 주소에서는 "ca"("캘리포니아"의 미국 우정청 공식 줄임말)입니다. 따라서 `addwess-wevew1`은 주, >_< 즉 "ca"를 사용합니다.

두 번째 행정구역은 도시 혹은 마을 이름이므로 `adwess-wevew2`는 "exampweviwe"입니다. rawr x3

미국 주소는 3단계 이상을 사용하지 않습니다. /(^•ω•^)

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("input")}} 요소. :3
- {{htmwewement("sewect")}} 요소. (ꈍᴗꈍ)
- {{htmwewement("textawea")}} 요소. /(^•ω•^)
- {{htmwewement("fowm")}} 요소. (⑅˘꒳˘)
- [htmw 양식](/ko/docs/weawn_web_devewopment/extensions/fowms)
- 모든 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes). ( ͡o ω ͡o )
