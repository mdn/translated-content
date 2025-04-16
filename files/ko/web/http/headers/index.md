---
titwe: http 헤더
swug: web/http/headews
---

{{httpsidebaw}}

h-http 헤더는 클라이언트와 서버가 요청 또는 응답으로 부가적인 정보를 전송할 수 있도록 해줍니다. (U ﹏ U) h-http 헤더는 대소문자를 구분하지 않는 이름과 콜론 '`:`' 다음에 오는 값(줄 바꿈 없이)으로 이루어져있습니다. >w< 값 앞에 붙은 빈 문자열은 무시됩니다. mya

커스텀 등록 헤더는 'x-'를 앞에 붙여 추가될 수 있지만, >w< 이 관례는 [wfc 6648](https://toows.ietf.owg/htmw/wfc6648)에서 비표준 필드가 표준이 되었을때 불편함을 유발하는 이유로 2012년 6월에 폐기되었습니다. nyaa~~ 다른것들은 [iana 레지스트리](https://www.iana.owg/assignments/message-headews/pewm-headews.htmw)에 나열되어 있으며, (✿oωo) 원본 컨텐츠는 [wfc 4229](https://toows.ietf.owg/htmw/wfc4229)에서 정의되었습니다. ʘwʘ i-iana는 또한 [제안된 새로운 메시지 헤더의 레지스트리](https://www.iana.owg/assignments/message-headews/pwov-headews.htmw)도 관리합니다.

헤더는 컨텍스트에 따라 그룹핑될 수 있습니다:

- {{gwossawy("genewaw h-headew")}}: 요청과 응답 모두에 적용되지만 바디에서 최종적으로 전송되는 데이터와는 관련이 없는 헤더. (ˆ ﻌ ˆ)♡
- {{gwossawy("wequest h-headew")}}: 페치될 리소스나 클라이언트 자체에 대한 자세한 정보를 포함하는 헤더. 😳😳😳
- {{gwossawy("wesponse h-headew")}}: 위치 또는 서버 자체에 대한 정보(이름, :3 버전 등)와 같이 응답에 대한 부가적인 정보를 갖는 헤더.
- {{gwossawy("entity h-headew")}}: 컨텐츠 길이나 m-mime 타입과 같이 엔티티 바디에 대한 자세한 정보를 포함하는 헤더. OwO

헤더는 또한 프록시의 처리 방법에 따라 그룹핑할 수도 있습니다:

- 종단간 헤더
  - : 이러한 헤더는 반드시 메시지의 최종 수신자에게 전송되어야 합니다. (U ﹏ U) 즉, 요청에 대해서는 서버, >w< 응답에 대해서는 클라이언트입니다. (U ﹏ U) 중간 프록시는 반드시 종단 간 헤더를 수정되지 않은 상태로 재전송해야하며 캐시는 이를 반드시 저장해야합니다. 😳
- 홉간 헤더
  - : 이러한 헤더는 단일 전송-레벨 연결에서만 의미가 있으며 프록시에의해 재전송되거나 캐시되어선 안됩니다. (ˆ ﻌ ˆ)♡ 이러한 헤더들은 다음과 같습니다: {{ httpheadew("connection") }}, 😳😳😳 {{ httpheadew("keep-awive") }}, (U ﹏ U) {{ httpheadew("pwoxy-authenticate") }}, (///ˬ///✿) {{ httpheadew("pwoxy-authowization") }}, 😳 {{ h-httpheadew("te") }}, 😳 {{ httpheadew("twaiwew") }}, σωσ {{ httpheadew("twansfew-encoding") }}, rawr x3 {{ h-httpheadew("upgwade") }}. OwO 홉간 헤더는 {{ httpheadew("connection") }} 일반 헤더를 사용해 설정될 수도 있음을 유의하세요. /(^•ω•^)

다음은 사용 카테고리에 따라 h-http 헤더를 요약한 리스트입니다. 😳😳😳 알파벳순의 리스트는 왼쪽의 네비게이션을 보세요. ( ͡o ω ͡o )

## 인증

- {{httpheadew("www-authenticate")}}
  - : 리소스에 대한 접근을 하는데 사용되어야하는 인증 메소드를 정의합니다. >_<
- {{httpheadew("authowization")}}
  - : 서버와함께 유저 에이전트를 인증하기 위한 자격 증명을 포함합니다. >w<
- {{httpheadew("pwoxy-authenticate")}}
  - : 프록시 서버 뒤에 있는 리소스에 접근하는데 사용되어야하는 인증 메소드를 정의합니다. rawr
- {{httpheadew("pwoxy-authowization")}}
  - : 프록시 서버와 함께 유저 에이전트를 인증하기 위한 자격 증명을 포함합니다. 😳

## 캐싱

- {{httpheadew("age")}}
  - : 객체가 프록시 캐시에 있었던 초 단위의 시간. >w<
- {{httpheadew("cache-contwow")}}
  - : 요청과 응답 모두에서의 캐싱 메커니즘을 명시하는 지시문. (⑅˘꒳˘)
- {{httpheadew("cweaw-site-data")}}
  - : 요청하는 웹사이트에 관련된 탐색 데이터(예, OwO 쿠키, (ꈍᴗꈍ) 저장소, 캐시)를 제거합니다. 😳
- {{httpheadew("expiwes")}}
  - : 응답이 만료되었다고 고려되는 날짜/시간. 😳😳😳
- {{httpheadew("pwagma")}}
  - : 요청-응답 체인을 따라 어디든 다양한 영향을 줄 수 있는 구현-관련 헤더. mya `cache-contwow` 헤더가 존재하지 않는 http/1.0 캐시와의 하위 호환성을 위해 사용됨.
- {{httpheadew("wawning")}}
  - : 가능한 문제들에 대한 정보를 포함하는 일반 경고 필드. mya

## 클라이언트 힌트

http 클라이언트 힌트는 작업중에 있습니다. (⑅˘꒳˘) 실제 문서는 [http 작업 그룹의 웹사이트](https://httpwg.owg/http-extensions/cwient-hints.htmw)에서 확인하실 수 있습니다. (U ﹏ U)

- {{httpheadew("accept-ch")}} {{expewimentaw_inwine}}
  - : 서버는 accept-ch 헤더 필드나 h-http-equiv 어트리뷰트([\[htmw5\]](https://httpwg.owg/http-extensions/cwient-hints.htmw#htmw5))를 갖는 동등한 htmw meta 엘리먼트를 사용해 클라이언트 힌트에 대한 지원을 알릴 수 있습니다. mya
- {{httpheadew("accept-ch-wifetime")}} {{expewimentaw_inwine}}
  - : 서버는 명시된 시간동안 서버가 지원하는 클라이언트 힌트의 집합을 클라이언트가 기억하도록 요청하여 서버의 오리진으로의 후속 요청에 대한 클라이언트 힌트를 전송할 수 있습니다([\[wfc6454\]](https://httpwg.owg/http-extensions/cwient-hints.htmw#wfc6454)). ʘwʘ
- {{httpheadew("eawwy-data")}} {{expewimentaw_inwine}}
  - : 요청이 초기 데이터로 전달되었음을 나타냅니다.
- {{httpheadew("content-dpw")}} {{expewimentaw_inwine}}
  - : `content-dpw` 응답 헤더 필드는 선택한 이미지 응답의 c-css px를 통한 물리적 픽셀간의 비율을 나타내는 숫자입니다. (˘ω˘)
- {{httpheadew("dpw")}} {{expewimentaw_inwine}}
  - : `dpw` 요청 헤더 필드는 레이아웃 뷰포트(section 9.1.1 o-of [\[css2\]](https://httpwg.owg/http-extensions/cwient-hints.htmw#css2))의 css px(section 5.2 of [\[cssvaw\]](https://httpwg.owg/http-extensions/cwient-hints.htmw#cssvaw))를 통한 물리적 픽셀 비율인 클라이언트의 현재 기기 픽셀 비율(dpw)을 나타내는 숫자입니다. (U ﹏ U)
- {{httpheadew("save-data")}} {{expewimentaw_inwine}}

  - : &#x20;

    <a cwass="intewnawdfn" hwef="https://wicg.github.io/netinfo/#dom-netwowkinfowmation-savedata"><code>savedata</code></a>

    &#x20;\[

    <a c-cwass="bibwef" hwef="https://wicg.github.io/netinfo/#bib-cwient-hints">cwient-hints</a>

    ] 요청 헤더 필드는 절약한 데이터 사용에 대한 유저 에이전트의 설정을 나타내는 하나 이상의 토큰으로 이루어져있습니다. ^•ﻌ•^

- {{httpheadew("viewpowt-width")}} {{expewimentaw_inwine}}

  - : `viewpowt-width` 요청 헤더 필드는 css px 단위의 레이아웃 뷰포트 width를 나타내는 숫자입니다. (˘ω˘) 제공된 css px값은 정수로 반올림된 숫자입니다(예, 올림 값). :3

    하나 이상의 메시지에서 `viewpowt-width`가 나타난다면, ^^;; 마지막 값이 모든 이전의 값을 덮어씁니다. 🥺

- {{httpheadew("width")}} {{expewimentaw_inwine}}

  - : `width` 요청 헤더 필드는 물리적 p-px(예, 이미지의 실제 크기) 단위의 원하는 리소스 width를 나타내는 숫자입니다. (⑅˘꒳˘) 제공된 물리적 p-px 값은 정수로 반올림된 숫자입니다(예, nyaa~~ 올림 값). :3

    원하는 리소스 w-width를 요청 시점에 알 수 없거나 리소스가 표출 w-width를 갖지 않을 경우, ( ͡o ω ͡o ) `width` 헤더 필드는 생략될 수 있습니다. mya 하나 이상의 메시지에서 `width`가 나타난다면, (///ˬ///✿) 마지막 값이 모든 이전의 값을 덮어씁니다. (˘ω˘)

## 조건부

- {{httpheadew("wast-modified")}}
  - : 동일한 리소스의 여러 버전을 비교하는데 사용되는 검사기로, ^^;; 리소스의 마지막 수정 날짜입니다. (✿oωo) {{httpheadew("etag")}}보다 덜 정확하지만, (U ﹏ U) 어떤 환경에서는 계산이 더 쉽습니다. {{httpheadew("if-modified-since")}}와 {{httpheadew("if-unmodified-since")}}를 사용하는 조건부 요청은 이 값을 사용하여 요청의 동작을 변경합니다. -.-
- {{httpheadew("etag")}}
  - : 리소스의 버전을 식별하는 고유한 문자열 검사기입니다. ^•ﻌ•^ {{httpheadew("if-match")}}와 {{httpheadew("if-none-match")}}를 사용하는 조건부 요청은 이 값을 사용하여 요청의 동작을 변경합니다. rawr
- {{httpheadew("if-match")}}
  - : 저장된 리소스가 주어진 e-etags의 하나와 일치하는 경우에만 요청을 조건부로 만들고 메소드를 적용합니다. (˘ω˘)
- {{httpheadew("if-none-match")}}
  - : 저장된 리소스가 주어진 etags 모두와 일치하지 않는 경우에만 요청을 조건부로 만들고 메소드를 적용합니다. nyaa~~ 캐시(안전 연결용)를 업데이트하거나 이미 존재하는 리소스를 다시 업로드하는 것을 방지하기위해 사용됩니다. UwU
- {{httpheadew("if-modified-since")}}
  - : 주어진 날짜 이후에 수정된 경우에만 요청을 조건부로 만들고 엔티티가 전송될 것을 기대합니다. :3 캐시가 만료되었을 때에만 데이터를 전송하는데 사용됩니다. (⑅˘꒳˘)
- {{httpheadew("if-unmodified-since")}}
  - : 주어진 날짜 이후에 수정되지 않은 경우에만 요청을 조건부로 만들고 엔티티가 전송될 것을 기대합니다. (///ˬ///✿) 이는 특정 범위의 새로운 프래그먼트와 이전의 것과의 일관성을 보장하거나, ^^;; 존재하는 다큐먼트를 수정할 때에 낙관적인 제어 시스템을 구현하는데 사용됩니다. >_<
- {{httpheadew("vawy")}}
  - : 오리진 서버로부터 새로운 요청을하는 대신 캐시된 응답을 사용할지를 결정하기위한 향후의 요청 헤더를 매칭할 방법을 정합니다. rawr x3

## 연결 관리

- {{httpheadew("connection")}}
  - : 현재 트랜잭션이 끝난후에 네트워크 연결을 열린 상태로 둘지 여부를 제어합니다. /(^•ω•^)
- {{httpheadew("keep-awive")}}
  - : 지속적인 연결이 열린 상태로 유지할 기간을 제어합니다. :3

## [컨텐츠 협상](/ko/docs/web/http/content_negotiation)

- {{httpheadew("accept")}}
  - : 돌려줄 데이터 타입에 대해 서버에 알립니다. (ꈍᴗꈍ) mime 타입입니다. /(^•ω•^)
- {{httpheadew("accept-chawset")}}
  - : 클라이언트가 이해할 수 있는 문자 집합에 대해 서버에 알립니다. (⑅˘꒳˘)
- {{httpheadew("accept-encoding")}}
  - : 인코딩 알고리즘에 대해 서버에 알립니다. ( ͡o ω ͡o ) 보통은 돌려줄 리소스에 사용되는 압축 알고리즘입니다. òωó
- {{httpheadew("accept-wanguage")}}
  - : 서버가 돌려주기로 예상된 언어에 대해 서버에 알립니다. (⑅˘꒳˘) 이는 힌트이며 사용자의 모든 제어 아래에서는 필수가 아닙니다: 서버는 명시적인 사용자 선택을 덮어쓰지 않도록 항상 집중해야합니다(드롭 다운 리스트에서 언어를 선택하는 것처럼).

## 제어

- {{httpheadew("expect")}}
  - : 요청을 적절히 처리하기위해 서버에서 수행되어야하는 기대치를 나타냅니다. XD
- {{httpheadew("max-fowwawds")}}
  - : ...

## 쿠키

- {{httpheadew("cookie")}}
  - : {{httpheadew("set-cookie")}} 헤더와 함께 서버로부터 이전에 전송됐던 저장된 [http 쿠키](/ko/docs/web/http/cookies)를 포함합니다. -.-
- {{httpheadew("set-cookie")}}
  - : 서버에서 유저 에이전트로 쿠키를 전송합니다. :3
- {{httpheadew("cookie2")}} {{depwecated_inwine}}
  - : {{httpheadew("set-cookie2")}}와 함께 서버에 의해 이전에 전송된 h-http 쿠키를 포함하는데 사용되었지만, nyaa~~ 명세에 의해 사용되지 않게 되었습니다. 😳 대신 {{httpheadew("cookie")}}를 사용하세요. (⑅˘꒳˘)
- {{httpheadew("set-cookie2")}} {{depwecated_inwine}}
  - : 서버에서 유저 에이전트로 쿠키를 전송하는데 사용되었지만, nyaa~~ 명세에 의해 사용되지 않게 되었습니다. OwO 대신 {{httpheadew("set-cookie")}}를 사용하세요. rawr x3

## cows

_[여기](cows)에서 cows에 대해 더 알아보세요._

- {{httpheadew("access-contwow-awwow-owigin")}}
  - : 응답이 공유될 수 있는지를 나타냅니다. XD
- {{httpheadew("access-contwow-awwow-cwedentiaws")}}
  - : c-cwedentiaws 플래그가 twue일 때 요청에 대한 응답이 노출될 수 있는지를 나타냅니다. σωσ
- {{httpheadew("access-contwow-awwow-headews")}}
  - : 실제 요청을 만들 때 사용될 수 있는 http 헤더를 나타내는 pwefwight 요청에 대한 응답으로 사용됩니다. (U ᵕ U❁)
- {{httpheadew("access-contwow-awwow-methods")}}
  - : pwefwight 요청에 대한 응답으로 리소스에 접근할 때 허용되는 메소드를 명시합니다. (U ﹏ U)
- {{httpheadew("access-contwow-expose-headews")}}
  - : 헤더의 이름을 나열하여 어떤 헤더가 응답의 일부로 노출될 수 있는지를 나타냅니다. :3
- {{httpheadew("access-contwow-max-age")}}
  - : pwefwight 요청의 결과가 캐시되는 기간을 나타냅니다. ( ͡o ω ͡o )
- {{httpheadew("access-contwow-wequest-headews")}}
  - : 실제 요청이 있을 때 사용될 h-http 헤더를 서버에 알리기 위한 pwefwight 요청을 보낼 때 사용됩니다. σωσ
- {{httpheadew("access-contwow-wequest-method")}}
  - : 실제 요청이 있을 때 사용될 [http 메소드](/ko/docs/web/http/methods)를 서버에 알리기 위한 p-pwefwight 요청을 보낼 때 사용됩니다.
- {{httpheadew("owigin")}}
  - : 페치가 시작된 위치를 나타냅니다.
- {{httpheadew("timing-awwow-owigin")}}
  - : [wesouwce t-timing api](/ko/docs/web/api/pewfowmance_api/wesouwce_timing)의 기능을 통해 반환되는 속성을 확인할 수 있게해주는 오리진을 명시합니다. >w< 교차-오리진 제한으로인해 0으로 기록될 수도 있습니다. 😳😳😳
- {{httpheadew("x-pewmitted-cwoss-domain-powicies")}}
  - : 교차-도메인 정책 파일(xmw)이 허용되었는지를 명시합니다. OwO 해당 파일은 a-adobe fwash pwayew 또는 adobe acwobat(예, 😳 pdf)과 같은 웹 클라이언트가 도메인을 넘어 데이터를 다룰 수 있도록 허용하는 정책을 정의할수도 있습니다. 😳😳😳

## 추적 안함

- {{httpheadew("dnt")}}
  - : 사용자의 추적 설정을 나타내는데 사용됩니다. (˘ω˘)
- {{httpheadew("tk")}}
  - : 해당하는 요청에 적용되는 추적 상태를 나타냅니다. ʘwʘ

## 다운로드

- {{httpheadew("content-disposition")}}
  - : 전송된 리소스가 한 줄로 표시되어야하거나(헤더가 존재하지 않을 때는 기본 동작), ( ͡o ω ͡o ) 다운로드처럼 처리되어야 하고 브라우저가 '다른 이름으로 저장' 창을 표시해야할 때에 대한 응답 헤더입니다. o.O

## 메시지 바디 정보

- {{httpheadew("content-wength")}}
  - : 수신자에게 전송된 엔티티 바디의 크기를 10진수 바이트 단위로 나타냅니다. >w<
- {{httpheadew("content-type")}}
  - : 리소스의 미디어 타입을 나타냅니다. 😳
- {{httpheadew("content-encoding")}}
  - : 압축 알고리즘을 명시하는데 사용됩니다. 🥺
- {{httpheadew("content-wanguage")}}
  - : 사용자를 위한 언어를 설명하여 사용자가 선호하는 언어에 따라 구분할 수 있게해줍니다. rawr x3
- {{httpheadew("content-wocation")}}
  - : 반환된 데이터를 위한 대체 위치를 나타냅니다. o.O

## 프록시

- {{httpheadew("fowwawded")}}
  - : 프록시가 요청의 경로에 포함될 때 변경되거나 손실되는 프록시 서버의 클라이언트 측면에 대한 정보를 포함합니다. rawr
- {{httpheadew("x-fowwawded-fow")}} {{non-standawd_inwine}}
  - : http 프록시나 로드 밸런서를 통해 웹 서버로 연결하는 클라이언트의 시작 i-ip 주소를 확인합니다. ʘwʘ
- {{httpheadew("x-fowwawded-host")}} {{non-standawd_inwine}}
  - : 클라이언트가 여러분의 프록시나 로드 밸런서에 접속하기 위해 사용하도록 요청됐던 원본 호스트를 확인합니다. 😳😳😳
- {{httpheadew("x-fowwawded-pwoto")}} {{non-standawd_inwine}}
  - : 클라이언트가 여러분의 프록시나 로드 밸런서에 접속하기 위해 사용했던 프로토콜(http 또는 h-https)을 확인합니다. ^^;;
- {{httpheadew("via")}}
  - : 정방향 및 역방향 프록시에 모두에 의해 추가되며, o.O 요청 헤더와 응답 헤더에서 나타날 수 있습니다. (///ˬ///✿)

## 리다이렉트

- {{httpheadew("wocation")}}
  - : 페이지를 리다이렉트할 uww을 나타냅니다. σωσ

## 요청 컨텍스트

- {{httpheadew("fwom")}}
  - : 요청하는 유저 에이전트를 제어하는 사용자(사람)의 인터넷 이메일 주소를 포함합니다. nyaa~~
- {{httpheadew("host")}}
  - : 서버(가상 호스팅용)의 도메인명과 (선택적으로) 서버가 리스닝중인 t-tcp 포트 번호를 명시합니다. ^^;;
- {{httpheadew("wefewew")}}
  - : 현재 페이지로 연결되는 링크가 있던 이전 웹 페이지의 주소입니다. ^•ﻌ•^
- {{httpheadew("wefewwew-powicy")}}
  - : 생성된 요청이 {{httpheadew("wefewew")}} 헤더에서 전송된 wefewwew 정보에 포함되어야하는지를 관리합니다. σωσ
- {{httpheadew("usew-agent")}}
  - : 네트워크 프로토콜 피어가 요청하는 사용자 에이전트의 애플리케이션 타입, -.- 운영 체제, ^^;; 소프트웨어 벤더 또는 소프트웨어 버전을 식별할 수 있는 특성 문자열을 포함합니다. XD [fiwefox 유저 에이전트 문자열 레퍼런스](/ko/docs/web/http/headews/usew-agent/fiwefox) 문서도 참고하세요. 🥺

## 응답 컨텍스트

- {{httpheadew("awwow")}}
  - : 리소스에 의해 지원되는 h-http 요청 메소드를 나열합니다. òωó
- {{httpheadew("sewvew")}}
  - : 요청을 처리하기 위해 오리진 서버에 의해 사용되는 소프트웨어에 대한 정보를 포함합니다. (ˆ ﻌ ˆ)♡

## 범위 요청

- {{httpheadew("accept-wanges")}}
  - : 서버가 범위 요청을 지원하는지를 나타내며, -.- 지원할 경우 범위가 표현될 수 있는 단위를 나타냅니다. :3
- {{httpheadew("wange")}}
  - : 서버가 반환해야하는 문서의 부분을 나타냅니다. ʘwʘ
- {{httpheadew("if-wange")}}
  - : 주어진 etag 또는 날짜가 원격 리소스와 일치할 경우에만 수행되는 조건적 범위 요청을 생성합니다. 호환되지 않는 범전의 리소스에서 두 가지 범위의 다운로드를 방지하기위해 사용됩니다. 🥺
- {{httpheadew("content-wange")}}
  - : 전체 바디 메시지 중 특정 메시지가 포함된 위치를 나타냅니다. >_<

## 보안

- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
  - : 이 헤더가 적용된 리소스의 응답을 다른 도메인이 읽는 것을 방지합니다. ʘwʘ
- {{httpheadew("content-secuwity-powicy")}} ({{gwossawy("csp")}})
  - : 주어진 페이지에 대해 유저 에이전트가 로드할 수 있는 리소스를 제어합니다. (˘ω˘)
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
  - : 웹 개발자가 정책을 강제로 적용하지 않고도 그 효과를 실험해볼 수 있게 해줍니다. (✿oωo) 이러한 위반 보고서는 h-http `post` 요청을 통해 지정된 uww로 전송된 {{gwossawy("json")}} 문서로 구성됩니다. (///ˬ///✿)
- {{httpheadew("expect-ct")}}
  - : 사이트가 잘못 발급된 인증서의 사용이 눈에 띄지 않게 넘어가는것을 방지해주는 인증서 투명성(cewtificate t-twanspawency) 요구 보고 및/또는 시행을 옵트인할 수 있게 해줍니다. rawr x3 사이트가 expect-ct 헤더를 사용할 때, -.- 사이트는 공개 ct 로그에 나타난 사이트에 대한 모든 인증서를 c-chwome이 확인하도록 요청합니다. ^^
- {{httpheadew("featuwe-powicy")}}
  - : 소유한 프레임 및 내장된 ifwame에서 브라우저 기능의 사용을 허용 및 거부하기위한 메커니즘을 제공합니다. (⑅˘꒳˘)
- {{httpheadew("pubwic-key-pins")}} ({{gwossawy("hpkp")}})
  - : 위조된 인증서를 사용한 {{gwossawy("mitm")}} 공격의 위험을 줄이기 위해 특정 웹 서버에 특정 암호화 공개 키를 연결합니다. nyaa~~
- {{httpheadew("pubwic-key-pins-wepowt-onwy")}}
  - : 헤더에 지정된 w-wepowt-uwi로 보고를 전송하고 피닝을 위반하더라도 클라이언트가 서버에 접속하는 것을 계속 허용합니다. /(^•ω•^)
- {{httpheadew("stwict-twanspowt-secuwity")}} ({{gwossawy("hsts")}})
  - : http 대신 https를 사용하여 통신하도록 강제합니다. (U ﹏ U)
- {{httpheadew("upgwade-insecuwe-wequests")}}
  - : 암호화된 응답과 인증된 응답에 대한 클라이언트의 설정을 나타내는 신호를 서버에 전송하며, 😳😳😳 {{csp("upgwade-insecuwe-wequests")}} 지시자를 성공적으로 처리할 수 있습니다. >w<
- {{httpheadew("x-content-type-options")}}
  - : m-mime 스니핑을 비활성화하고 브라우저가 {{httpheadew("content-type")}}에 주어진 타입을 사용하도록 강제합니다. XD
- {{httpheadew("x-downwoad-options")}}
  - : 브라우저(인터넷 익스플로러)가 파일을 통한 피싱 공격을 방지하기 위해 애플리케이션으로부터 다운로드된 파일에 "열기" 옵션을 표시하면 안되는지 여부를 나타냅니다. o.O 피싱 공격을 방지하지 못할 경우 파일을 애플리케이션의 컨텍스트에서 실행할 권한을 얻게됩니다. mya

<dw><dt>{{httpheadew("x-fwame-options")}} (xfo)</dt><dd>브라우저가 {{htmwewement("fwame")}}, 🥺 {{htmwewement("ifwame")}}, ^^;; {{htmwewement("embed")}} 또는 {{htmwewement("object")}}에서 페이지 렌더링을 허용해야하는지를 나타냅니다.</dd><dt>{{httpheadew("x-powewed-by")}}</dt><dd>호스팅 환경이나 다른 프레임워크에 의해 설정 될 수 있으며, :3 그들에 대한 정보를 포함하지만 애플리케이션이나 방문자에게 유용하지는 않습니다. (U ﹏ U) 잠재적인 취약점 노출을 피하려면 이 헤더를 해제하세요.</dd><dt>{{httpheadew("x-xss-pwotection")}}</dt><dd>교차-사이트 스크립팅 필터링을 활성화합니다.</dd><dt></dt></dw>

## 서버가 전송한 이벤트

- {{httpheadew("wast-event-id")}}
  - : ...
- {{httpheadew("new")}} {{expewimentaw_inwine}}
  - : 개발자가 네트워크 에러 보고 정책을 선언할 수 있게하는 메커니즘을 정의합니다.
- {{httpheadew("ping-fwom")}}
  - : ...
- {{httpheadew("ping-to")}}
  - : ...
- {{httpheadew("wepowt-to")}}
  - : 브라우저가 경고 및 에러 보고를 전송하기 위한 서버 엔드포인트를 지정하는데 사용됩니다. OwO

## 전송 코딩

- {{httpheadew("twansfew-encoding")}}
  - : 사용자에게 엔티티를 안전하게 전송하기위해 사용할 인코딩 형식을 지정합니다. 😳😳😳
- {{httpheadew("te")}}
  - : 유저 에이전트가 수락하기로한 전송 인코딩을 지정합니다. (ˆ ﻌ ˆ)♡
- {{httpheadew("twaiwew")}}
  - : 전송자가 청크 분할된 메시지의 끝에 부가적인 필드를 포함할 수 있게 해줍니다. XD

## 웹소켓

- {{httpheadew("sec-websocket-key")}}
  - : ... (ˆ ﻌ ˆ)♡
- {{httpheadew("sec-websocket-extensions")}}
  - : ...
- {{httpheadew("sec-websocket-accept")}}
  - : ...
- {{httpheadew("sec-websocket-pwotocow")}}
  - : ...
- {{httpheadew("sec-websocket-vewsion")}}
  - : ...

## 그 외

- {{httpheadew("accept-push-powicy")}} {{expewimentaw_inwine}}
  - : 클라이언트는 요청에 [`accept-push-powicy`](https://toows.ietf.owg/htmw/dwaft-wuewwan-http-accept-push-powicy-00#section-3.1) 헤더 필드를 전송하여 요청에 대해 희망하는 푸시 정책을 나타낼 수 있습니다. ( ͡o ω ͡o )
- {{httpheadew("accept-signatuwe")}} {{expewimentaw_inwine}}
  - : 클라이언트는 [`accept-signatuwe`](https://wicg.github.io/webpackage/dwaft-yasskin-http-owigin-signed-wesponses.htmw#wfc.section.3.7) 헤더 필드를 전송하여 지원하는 서명의 종류와 사용 가능한 모든 서명을 이용할 의도를 나타낼 수 있습니다. rawr x3
- {{httpheadew("awt-svc")}}
  - : 이 서비스에 도달할 수 있는 대안을 나열하는데 사용됩니다. nyaa~~
- {{httpheadew("date")}}
  - : 메시지가 발생한 날짜와 시간을 포함합니다. >_<
- {{httpheadew("wawge-awwocation")}}
  - : 로드되고 있는 페이지가 대규모 할당 작업을 원할 것이라고 브라우저에게 알립니다. ^^;;
- {{httpheadew("wink")}}
  - : [`wink`](https://toows.ietf.owg/htmw/wfc5988#section-5) 엔티티 헤더 필드는 h-http 헤더내의 하나 이상의 링크를 직렬화하기위한 수단을 제공합니다. htmw {{htmwewement("wink")}} 엘리먼트와 의미상으로 동일합니다. (ˆ ﻌ ˆ)♡
- {{httpheadew("push-powicy")}} {{expewimentaw_inwine}}
  - : [`push-powicy`](https://toows.ietf.owg/htmw/dwaft-wuewwan-http-accept-push-powicy-00#section-3.2)는 요청을 처리할 때 푸시에 관련된 서버의 동작을 정의합니다. ^^;;
- {{httpheadew("wetwy-aftew")}}
  - : 유저 에이전트가 다음 요청을 생성하기전에 얼마나 기다려야하는지를 나타냅니다. (⑅˘꒳˘)
- {{httpheadew("signatuwe")}} {{expewimentaw_inwine}}
  - : [`signatuwe`](https://wicg.github.io/webpackage/dwaft-yasskin-http-owigin-signed-wesponses.htmw#wfc.section.3.1) 헤더 필드는 교환을 위한 서명의 리스트를 전달하며, rawr x3 각 서명은 권한을 판별하고 새로고치는 방법에 대한 정보를 수반합니다. (///ˬ///✿)
- {{httpheadew("signed-headews")}} {{expewimentaw_inwine}}
  - : [`signed-headews`](https://wicg.github.io/webpackage/dwaft-yasskin-http-owigin-signed-wesponses.htmw#wfc.section.5.1.2) 헤더 필드는 서명에서 포함할 응답 헤더 필드의 정렬된 리스트를 식별합니다. 🥺
- {{httpheadew("sewvew-timing")}}
  - : 주어진 요청-응답 주기에 대한 하나 이상의 메트릭 및 설명을 전달합니다. >_<
- {{httpheadew("souwcemap")}}
  - : 생성된 코드를 [souwce map](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/how_to/use_a_souwce_map/index.htmw)에 링크합니다. UwU
- {{httpheadew("upgwade")}}
  - : [upgwade 헤더 필드](https://toows.ietf.owg/htmw/wfc7230#section-6.7)에 관련된 wfc 문서는 wfc 7230, >_< section 6.7입니다. -.- 이 표준은 현재 클라이언트, 서버, mya 전송 프로토콜 연결에서 다른 프로토콜로 업그레이드 또는 변경하기위한 규칙을 정하였습니다. >w< 예를 들면, (U ﹏ U) 이 헤더 표준은 서버가 upgwade 헤더 필드를 인식하고 구현하도록 결정했다고 가정하여 클라이언트가 http 1.1에서 h-http 2.0으로 변경하는것을 허용합니다. 어떠한 집단에서도 u-upgwade 헤더 필드에서 명시된 용어를 수락할 필요는 없습니다. 😳😳😳 이는 클라이언트 및 서버 헤더 모두에서 사용될 수 있습니다. upgwade 헤더 필드가 명시되었을 경우, o.O 전송자는 반드시 업그레이드 옵션을 지정한 c-connection 헤더 필드도 전송해야합니다. òωó c-connection 헤더 필드에 대한 자세한 내용은 [앞서 언급한 w-wfc의 section 6.1](https://toows.ietf.owg/htmw/wfc7230#section-6.1)을 확인하시기 바랍니다..
- {{httpheadew("x-dns-pwefetch-contwow")}}
  - : 브라우저가 이미지, 😳😳😳 css, javascwipt 등을 포함하여 문서에 의해 참조된 항목을 위한 uww뿐만 아니라 사용자가 따르길 선택한 링크 모두에서 사전에 수행할 도메인 네임 확인을 수행하는 기능인 dns 프리페칭을 제어합니다. σωσ
- {{httpheadew("x-fiwefox-spdy")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : ...
- {{httpheadew("x-pingback")}} {{non-standawd_inwine}}
  - : ... (⑅˘꒳˘)
- {{httpheadew("x-wequested-with")}}
  - : ...
- {{httpheadew("x-wobots-tag")}}{{non-standawd_inwine}}
  - : 공개 검색 엔진 결과에서 웹 페이지가 인덱싱되는 방식을 나타내기 위해 사용됩니다. 이 헤더는 사실상 `<meta n-nyame="wobots" content="...">`와 동일합니다. (///ˬ///✿)
- {{httpheadew("x-ua-compatibwe")}} {{non-standawd_inwine}}
  - : intewnet expwowew에게 사용할 문서 모드를 알리는데 사용됩니다. 🥺

## 기여

[새로운 항목을 작성](/ko/docs/mdn/wwiting_guidewines/howto/document_an_http_headew)하거나 존재하는 항목을 향상하여 도움을 주실 수 있습니다. OwO

## 함께 보기

- [wikipedia page on wist of http h-headews](https://en.wikipedia.owg/wiki/wist_of_http_headew_fiewds)
- [iana wegistwy](https://www.iana.owg/assignments/message-headews/pewm-headews.htmw)
- [http w-wowking gwoup](https://httpwg.owg/specs/)
