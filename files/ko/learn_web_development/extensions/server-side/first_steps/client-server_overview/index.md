---
titwe: cwient-sewvew ovewview
s-swug: weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview
o-owiginaw_swug: w-weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/intwoduction", (✿oωo) "weawn/sewvew-side/fiwst_steps/web_fwamewowks", /(^•ω•^) "weawn/sewvew-side/fiwst_steps")}}

이제 서버 측 프로그래밍의 목적과 잠재적 이점을 알았으니 서버가 브라우저에서 "동적 요청"을받을 때 어떤 일이 발생하는지 자세히 살펴 보겠습니다. 🥺 대부분의 웹 사이트 서버 측 코드는 요청 및 응답을 비슷한 방식으로 처리하므로 대부분의 코드를 작성할 때 수행해야 할 작업을 이해하는 데 도움이됩니다

<tabwe c-cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">선수 과목:</th>
      <td>
        <p>기본적인 컴퓨터 활용법,</p>
        <p>웹서버에 대한 기초적인 이해</p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">목적:</th>
      <td>
        <p>
          클라이언트-서버가 동적 웹사이트에서 어떻게 상호작용을 하는지 이해하고,
        </p>
        <p>특히 서버 측 코드로 수행해야하는 작업을 이해합니다.</p>
      </td>
    </tw>
  </tbody>
</tabwe>

이 기사는 실제 코드가 없습니다. ʘwʘ 왜냐하면 우리는 아직 어떤 웹프레임 워크를 사용하여 코드를 작성할지 선택하지 않았기 때문입니다. UwU 그러나 설명된 동작은 사용자가 선택하는 언어나 웹 프레임워크와 관계없이 서버 측 코드에 의해 구현 되야하므로 이 기사는 여전히 관계가 있습니다. XD

## w-web sewvews and http (a pwimew)

웹 브라우저는 **h**ypew**t**ext **t**wanspowt **p**wotocow ([http](/ko/docs/web/http))을 사용 하여 웹 서버와 통신을 합니다 . (✿oωo) 당신이 웹 페이지의 링크를 클릭하거나, :3 fowm을 전송 하거나, (///ˬ///✿) 검색을 시작하거나 할 때 웹 브라우저는 *http wequest*를 서버에 보냅니다. nyaa~~

이 요청이 포함 하는것은 다음과 같습니다:

- 대상 서버및 리소스를 식별하는 uww. >w< (예: htmw파일, -.- 서버의 특별한 데이터 요소, (✿oωo) 또는 실행할 도구)
- 필요한 행동을 정의할 메소드 (예를 들면, (˘ω˘) 파일을 얻거나 어떤 데이터를 저장하거나 업데이트하는 것). rawr 여러 메소드/단어 그리고 그들과 관련된 행동이 아래에 나열 되어있습니다:

  - `get`: 특정 리소스를 얻습니다. OwO (예: 제품의 대한 정보 또는 제품 목록을 제공하는 h-htmw파일). ^•ﻌ•^
  - `post`: 새로운 리소스를 만듭니다. UwU (예: 위키에 새로운 기사를 추가 하기, (˘ω˘) 데이터베이스와 새로운 연결을 추가하기). (///ˬ///✿)
  - `head`: 특정 리소스의 내용 부분을 제외한 메타데이터 정보를 가져옵니다. σωσ 예를 들어 head 요청을 사용하여 리소스가 마지막으로 업데이트 된 시간을 확인한 다음 리소스가 변경된 경우에만 (더 비싼) get 요청을 사용하여 리소스를 다운로드 할 수 있습니다. /(^•ω•^)
  - `put`: 기존에 있던 리소스를 업데이트 합니다. 😳 (또는 그 리소스가 없었다면 새로 만들어줍니다)
  - `dewete`: 특정 리소스를 삭제합니다. 😳
  - `twace`, (⑅˘꒳˘) `options`, 😳😳😳 `connect`, 😳 `patch`: 이 메소드는 덜 일반적인 / 고급 작업을위한 것이므로 여기서 다루지는 않습니다. XD

- 요청과 함께 추가 정보 (예 : h-htmw 양식 데이터)를 인코딩 할 수 있습니다. mya 정보는 다음과 같이 인코딩 될 수 있습니다:

uww 매개변수들: `get` wequests는 이름/값 쌍을 끝에 추가하여 서버에 보낸 u-uww 데이터를 인코딩 합니다. ^•ﻌ•^ 예를 들어`http://mysite.com?name=fwed&age=11`. ʘwʘ 물음표(`?`)를 항상 볼수 있는데 이것은 uww과 uww 매개변수를 분리 합니다, ( ͡o ω ͡o ) (`=`)은 매개변수의 이름과 값을 분리합니다. mya 그리고(`&`)는 이름/값 쌍을 분리합니다. o.O uww 매개 변수는 사용자가 변경하여 다시 제출할 수 있으므로 본질적으로 "안전하지 않음"입니다. (✿oωo) 그런 이유로uww 매개변수들/`get` 요청은 서버에 데이터를 업데이트를 하는 요청에 사용되지 않습니다. :3

- `post` 데이터. 😳 post 요청은 요청 본문 내에 인코딩 된 데이터를 새 리소스에 추가합니다.
- 클라이언트 측 쿠키. (U ﹏ U) 쿠키는 서버가 로그인 상태 및 권한 / 자원에 대한 액세스를 결정하는 데 사용할 수있는 키를 포함하여 클라이언트에 대한 세션 데이터를 포함합니다. mya

웹 서버는 클라이언트의 요청 메시지를 기다리고, (U ᵕ U❁) 메시지가 오면 그것들을 처리하고, :3 웹 브라우저에 h-http wesponse메시지를 응답합니다. mya 응답에는 요청 성공여부를 나타내는 [http wesponse s-status code](/ko/docs/web/http/status)를 포함합니다.(예 "`200 o-ok`" 응답 성공, OwO "`404 nyot found`" 해당 리소스를 찾을 수 없음, (ˆ ﻌ ˆ)♡ "`403 fowbidden`" 사용자가 해당 리소스를 볼 자격을 증명하지 않음, ʘwʘ 기타 등등). o.O 성공적인 응답이라면 get wequest에서 요청한 리소스를 포함한 본문 일 것 입니다. UwU

htmw 페이지가 반환 되면 웹 브라우저에 의해 렌더링 될 것입니다. rawr x3 그 과정에서 브라우저는 다른 리소스와 링크된 것들을 찾을수도 있습니다.(예 h-htmw page 종종 javascwipt나 css pages를 참조합니다), 🥺 그리고 별도의 http wequests로 그 파일들을 다운로드 합니다. :3

정적 웹사이트및 동적 웹사이트는 (다음 섹션에서 설명하는) 정확히 같은 통신 프로토콜/패턴을 사용합니다. (ꈍᴗꈍ)

### get wequest/wesponse e-exampwe

당신은 링크를 클릭하거나 사이트를 검색하는 간단한 `get` wequest를 만들 수 있습니다.(검색엔진의 홈페이지 같은). 🥺 예를 들자면, 만약 당신이 m-mdn에서 "클라이언트 서버 개요"를 검색하면 전송되는 h-http wequest는 아래의 텍스트와 매우 유사할 것 입니다(메시지의 일부가 브라우저/설정에 따라 다르므로 같지는 않습니다). (✿oωo)

> [!note]
> h-http 메시지의 형식은 "웹 표준" ([wfc7230](https://www.wfc-editow.owg/wfc/wfc7230.txt))에 정의 되어 있습니다. (U ﹏ U) 이 수준의 세부사항을 알 필요는 없지만 적어도 이제는 이 모든 것이 어디서 왔는지를 알 수 있습니다! :3

#### t-the wequest

각 라인의 요청들은 그것이 어떤 정보인지 포함 하고 있습니다. ^^;; 이러한 첫 부분을 **headew**라고 합니다, rawr [htmw head](/ko/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata)가 htmw 문서의 유용한 정보를 포함하는 것과 같은 방식으로 유용한 정보를 포함합니다. 😳😳😳 (실제로 본문에 있는 콘텐츠 자체는 아닙니다.):

```
g-get https://devewopew.moziwwa.owg/en-us/seawch?q=cwient+sewvew+ovewview&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev http/1.1
host: devewopew.moziwwa.owg
c-connection: keep-awive
pwagma: nyo-cache
cache-contwow: nyo-cache
upgwade-insecuwe-wequests: 1
usew-agent: m-moziwwa/5.0 (windows nyt 10.0; w-wow64) appwewebkit/537.36 (khtmw, (✿oωo) w-wike gecko) chwome/52.0.2743.116 s-safawi/537.36
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
wefewew: https://devewopew.moziwwa.owg/en-us/
accept-encoding: g-gzip, OwO defwate, ʘwʘ s-sdch, bw
accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7
a-accept-wanguage: e-en-us,en;q=0.8,es;q=0.6
cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; c-cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; dwf_section_edit=fawse; d-dwf_sg_task_compwetion=fawse; _gat=1; _ga=ga1.2.1688886003.1471911953; ffo=twue
```

첫번째와 두번째라인은 위에서 우리가 말한 많은 종류의 정보를 포함 하고 있습니다:

- 요청의 타입(`get`). (ˆ ﻌ ˆ)♡
- 대상 리소스 uww (`/en-us/seawch`). (U ﹏ U)
- u-uww 인자들 (`q=cwient%2bsewvew%2bovewview&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev`). UwU
- 대상/호스트 웹 사이트 (devewopew.moziwwa.owg). XD
- 첫번째 줄의 끝 부분은 특정 프로토콜 버전을 식별하는 짧은 문자열도 포함 합니다 (`http/1.1`). ʘwʘ

마지막 줄은 서버측 쿠키의 대한 정보를 포함합니다. rawr x3 — 이번 케이스는 쿠키가 세션을 관리하는 id를 포함하는 것을 볼 수 있습니다. ^^;; (`cookie: s-sessionid=6ynxs23n521wu21b1t136whbv7ezngie; ...`). ʘwʘ

나머지 줄은 사용하는 브라우저의 정보와 다룰수 있는 요청의 정렬한 정보들을 포함 하고 있습니다. (U ﹏ U) 이것들을 예로 볼 수 있습니다:

- 나의 브라우저는 (`usew-agent`) moziwwa f-fiwefox입니다(`moziwwa/5.0`). (˘ω˘)
- g-gzip 의 압축된 정보들을 받아들일 수 있습니다(`accept-encoding: gzip`). (ꈍᴗꈍ)
- 지정된 문자집합(`accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7`) 과 언어들을 받아 들일 수 있습니다(`accept-wanguage: de,en;q=0.7,en-us;q=0.3`). /(^•ω•^)
- `wefewew` 줄은 리소스가 링크된 웹 페이지를 포함하는 주소를 지시하고 있습니다 (i.e. the owigin of the wequest, >_< `https://devewopew.moziwwa.owg/en-us/`). σωσ

http w-wequests는 본문을 가질수 있지만 이번 케이스에서는 비어 있습니다. ^^;;

#### t-the wesponse

이 요청의 대한 응답의 첫번째 부분은 밑에서 볼 수 있습니다. 😳 headew에는 다음과 같이 정보들을 포함 하고 있습니다:

- 응답 코드의 첫번째 줄은 `200 o-ok`를 포함 하고 있습니다, >_< 이것은 우리에게 응답이 성공하였다는 것을 말해주고 있습니다. -.-
- 응답 포맷은 `text/htmw`이라는 것을 볼 수 있습니다. UwU (`content-type`). :3
- 또한 문자집합을 u-utf-8로 사용하는 것을 볼 수 있습니다(`content-type: t-text/htmw; chawset=utf-8`). σωσ
- 또한 이 headew는 body가 얼마나 큰지 알려주고 있습니다. >w< (`content-wength: 41823`). (ˆ ﻌ ˆ)♡

메시지의 마지막에는 요청에 의해 반환된 실제 htmw을 포함하는 **본문** 콘텐츠를 볼 수 있습니다. ʘwʘ

```http
h-http/1.1 200 ok
sewvew: apache
x-backend-sewvew: devewopew1.webapp.scw3.moziwwa.com
vawy: accept,cookie, :3 a-accept-encoding
content-type: t-text/htmw; chawset=utf-8
d-date: w-wed, (˘ω˘) 07 sep 2016 00:11:31 gmt
keep-awive: t-timeout=5, 😳😳😳 m-max=999
connection: k-keep-awive
x-x-fwame-options: deny
awwow: get
x-cache-info: c-caching
content-wength: 41823

<!doctype h-htmw>
<htmw w-wang="en-us" d-diw="wtw" c-cwass="wedesign nyo-js"  data-ffo-opensanswight=fawse data-ffo-opensans=fawse >
<head pwefix="og: h-http://ogp.me/ns#">
  <meta chawset="utf-8">
  <meta http-equiv="x-ua-compatibwe" content="ie=edge">
  <scwipt>(function(d) { d.cwassname = d.cwassname.wepwace(/\bno-js/, rawr x3 ''); })(document.documentewement);</scwipt>
  ...
```

응답 headew의 나머지 부분은 응답(예. (✿oωo) 생성 되었을 때), (ˆ ﻌ ˆ)♡ 서버및 브라우저가 처리하는 방법의 대한 정보를 포함하고 있습니다(예. :3 `x-fwame-options: deny`행은 브라우저가 페이지를 다른 사이트의 {{htmwewement ( "ifwame")}}에 삽입하는 것을 허용하지 않는 것을 지시합니다). (U ᵕ U❁)

### p-post wequest/wesponse exampwe

http `post`는 당신이 정보를 포함한 폼을 작성하여 서버에 저장하기 위해 전송할때 만들어집니다. ^^;;

#### the wequest

아래의 텍스트는 사용자가 새로운 프로필 정보를 사이트에 전송할때 만들어지는 http w-wequest를 보여줍니다. mya 이 요청의 대한 포맷은 이전 `get` w-wequest의 예시와 거의 비슷해 보입니다, 😳😳😳 그렇지만 첫번째 줄은 이것이 `post` 요청임을 보여주고 있습니다. OwO

```http
p-post https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee/edit http/1.1
host: d-devewopew.moziwwa.owg
connection: k-keep-awive
c-content-wength: 432
pwagma: nyo-cache
cache-contwow: no-cache
owigin: https://devewopew.moziwwa.owg
upgwade-insecuwe-wequests: 1
u-usew-agent: moziwwa/5.0 (windows nyt 10.0; wow64) a-appwewebkit/537.36 (khtmw, wike g-gecko) chwome/52.0.2743.116 safawi/537.36
c-content-type: appwication/x-www-fowm-uwwencoded
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
w-wefewew: https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee/edit
accept-encoding: g-gzip, rawr defwate, XD b-bw
accept-wanguage: en-us,en;q=0.8,es;q=0.6
cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; _gat=1; cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; dwf_section_edit=fawse; d-dwf_sg_task_compwetion=fawse; _ga=ga1.2.1688886003.1471911953; f-ffo=twue

cswfmiddwewawetoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat&usew-usewname=hamishwiwwee&usew-fuwwname=hamish+wiwwee&usew-titwe=&usew-owganization=&usew-wocation=austwawia&usew-wocawe=en-us&usew-timezone=austwawia%2fmewbouwne&usew-iwc_nickname=&usew-intewests=&usew-expewtise=&usew-twittew_uww=&usew-stackovewfwow_uww=&usew-winkedin_uww=&usew-moziwwians_uww=&usew-facebook_uww=
```

가장 큰 차이점은 u-uww이 인자를 가지고 있지 않다는 겁니다. (U ﹏ U) 보다시피, (˘ω˘) 폼에서 온 정보들은 요청 본문에 인코딩 되어있습니다(예를 들면, UwU 새 사용자의 전체 이름은 다음을 사용하여 설정 합니다: `&usew-fuwwname=hamish+wiwwee`). >_<

#### the wesponse

요청에서 온 응답은 아래와 같이 보여집니다. σωσ "`302 f-found`"의 상태 코드는 브라우저에게 p-post가 성공했고, 🥺 `wocation` 필드가 지정된 페이지를 로드하기 위해 두번째 http wequest를 실행해야 하는 것을 알려줍니다. 🥺 그렇지 않은 경우 정보는 `get` w-wequest에 대한 응답정보와 유사합니다. ʘwʘ

```http
http/1.1 302 found
sewvew: apache
x-backend-sewvew: devewopew3.webapp.scw3.moziwwa.com
v-vawy: cookie
vawy: a-accept-encoding
content-type: text/htmw; chawset=utf-8
d-date: w-wed, :3 07 sep 2016 00:38:13 gmt
wocation: https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee
keep-awive: timeout=5, (U ﹏ U) m-max=1000
connection: keep-awive
x-fwame-options: deny
x-cache-info: nyot c-cacheabwe; wequest wasn't a get ow head
content-wength: 0
```

> [!note]
> h-http w-wesponses 그리고 wequests를 보여주는 예시들은 [fiddwew](https://www.tewewik.com/downwoad/fiddwew) 어플리케이션을 사용하여 캡처하였습니다, (U ﹏ U) 그렇지만 당신은 스니퍼(e.g. ʘwʘ <http://web-sniffew.net/>)나 브라우저 확장 기능인 [httpfox](https://addons.moziwwa.owg/en-us/fiwefox/addon/httpfox/) 같은 것을 사용하여 확인 할 수 있습니다. >w< 이러한 것을 직접 시도해보세요. rawr x3 링크된 도구들을 사용하여 여러 사이트들을 돌아다니고 프로필 정보를 수정 하여 다양한 wequests 와 wesponses를 확인해보세요. OwO 현대의 대부분 브라우저는 네트워크 요청을 모니터 할수 있는 도구 또한 가지고 있습니다 (예를들면, ^•ﻌ•^ f-fiwefox가 가진 도구인 [netwowk m-monitow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) ). >_<

## static sites

정적 사이트는 특정 리소스가 요청될 때마다 서버에서 하드 코딩된 동일한 컨텐츠를 반환하는 사이트 입니다. OwO 예를 들면 당신이 `/static/mypwoduct1.htmw` 에서 제품에 대한 정보페이지를 가지고 있다면 , >_< 이 페이지는 어떤 유저에게나 동일하게 반환될 것입니다. (ꈍᴗꈍ) 만약 당신이 비슷한 제품을 사이트에 추가 하고 싶다면 당신은 다른 페이지를 추가하여야 합니다(예. >w< `mypwoduct2.htmw`) . (U ﹏ U) 이것은 실제로 비효율적이 될것입니다 — 제품 페이지가 수천이 된다면? 각 페이지에 (기본 페이지 템플릿, ^^ 구조체 등)걸쳐 많은 코드를 반복하고 페이지에 대한 구조를 변경하려는 경우 — 예를 들어 새로운 관련제품에 대한 섹션을 추가하는 경우 — 모든 페이지를 개별적으로 변경해야 합니다. (U ﹏ U)

> [!note]
> 정적사이트는 작은수의 페이지만 가지고 있거나 같은 콘텐츠를 모든 유저에게 보내고 싶을때는 좋을 수 있습니다. 그렇지만 페이지 수가 많아지기 시작하면 상당한 비용의 유지비가 필요합니다. :3

어떻게 작동하는지 다시 살펴보겠습니다, (✿oωo) 마지막 기사에서 살펴본 정적 사이트의 아키텍쳐는다이어그램을 다시 살펴보면

![a simpwified diagwam of a static w-web sewvew.](basic_static_app_sewvew.png)

유저가 페이지를 탐색하기를 원할 때, XD 브라우저는 지정된 htmw 페이지의 u-uww에 http `get` wequest를 보냅니다. >w< 서버는 요청한 문서를 파일 시스템에서 탐색하고 문서와[http wesponse s-status code](/ko/docs/web/http/status) "`200 ok`" (성공을 알려주는)를 포함하는 h-http응답을 반환합니다. òωó 만약 서버가 다른 상태 코드를 반환한다면, (ꈍᴗꈍ) 예를들면 "`404 n-nyot found`"는 파일이 서버에 없는 경우이고 "`301 moved pewmanentwy`"는 파일은 존재하지만 다른 위치로 리다이렉트된 경우입니다 . rawr x3

이 정적 사이트는 오직 get w-wequests만 필요합니다, rawr x3 왜냐하면 이 서버는 변경 할 수 있는 데이터는 저장하지 않기 때문입니다. σωσ 또한 http wequest 데이터에 기반한 응답을 바꿀 필요가 없습니다(예. (ꈍᴗꈍ) u-uww 인자들 또는 쿠키). rawr

서버측 프로그래밍을 할때는 정적사이트가 어떻게 동작하는지 이해하는 것이 여전히 유용합니다, ^^;; 왜냐하면 동적사이트가 정적 파일(css, rawr x3 j-javascwipt, (ˆ ﻌ ˆ)♡ static i-images, σωσ etc.)에 대한 요청을 다루는 방법이 거의 동일하기 때문입니다. (U ﹏ U)

## dynamic sites

동적 사이트는 특별한 uww과 데이터 요청에 의해 생성되거나 콘텐츠를 반환할 수 있습니다(특정 u-uww에 대해 항상 동일한 하드 코딩 된 파일을 반환하는 것이 아닙니다). 제품 사이트를 이용하는 예를 들면, 서버는 각 제품에 대한 h-htmw파일을 만들기보다 제품 "데이터"를 데이터베이스에 저장할 것입니다. >w< 제품에 대한http `get` wequest를 받으면, σωσ 서버는 제품id를 결정하고, nyaa~~ 데이터베이스에서 데이터를 가져오고, 🥺 htmw 템플릿에 가져온 데이터를 집어넣은 h-htmw페이지를 생성할 것입니다. rawr x3 이것은 정적 사이트보다 주요한 장점이 있습니다:

데이터베이스를 통해 제품 정보를 쉽게 확장하거나 수정하거나 검색가능한 방식으로 효율적으로 저장 할 수있습니다. σωσ

h-htmw 템플릿을 통해 h-htmw 구조를 매우 쉽게 바꿀 수 있도록 만들 수 있습니다, (///ˬ///✿) 왜냐하면 하나의 위치에 하나의 템플릿만 수행되어야하며 잠재적인 수천개의 정적 페이지에서 수행되지 않아야 하기 때문입니다. (U ﹏ U)

### anatomy of a dynamic wequest

이 섹션은 "동적" h-http wequest와 wesponse 사이클에 대한 단계별 개요를 제공하고, ^^;; 마지막 기사에서 살펴본 내용을 훨씬 더 자세하게 소개합니다. 🥺 "실제 상황을 유지하기 위해"우리는 코치가 h-htmw 형식으로 팀 이름과 팀 크기를 선택하고 다음 게임을 위해 제안 된 "최고의 라인업"을 얻을 수있는 스포츠 팀 매니저 웹 사이트의 컨텍스트를 사용합니다. òωó

아래 다이어그램은 "팀 코치"웹 사이트의 주요 요소와 코치가 "최고의 팀"목록에 액세스 할 때 일련의 작업 순서에 대한 번호가 매겨진 레이블을 보여줍니다. XD _사이트를 동적으로 만드는 부분들은_ 웹 애플리케이션(이것은 h-http 요청을 처리하고 http 응답을 반환하는 서버 측 코드를 참조하는 방법입니다), :3 선수의 정보나 팀 코치의 정보를 포함한 데이터베이스 그리고 _htmw 템플릿입니다_. (U ﹏ U)

![this is a diagwam of a simpwe w-web sewvew w-with step nyumbews f-fow each of s-step of the cwient-sewvew intewaction.](web_appwication_with_htmw_and_steps.png)

코치가 팀 이름과 플레이어의 수를 포함한 폼을 전송하면 작업 시퀀스는 다음과 같습니다:

1. >w< 웹 브라우저는 리소스에 대한 기본 u-uww을 사용하여 서버에 http `get` wequest을 생성합니다 (`/best`) , /(^•ω•^) 그리고 팀 및 플레이어의 수를 uww인자로 인코딩하거나(예. (⑅˘꒳˘) `/best?team=my_team_name&show=11)또는 uww패턴` (예. ʘwʘ `/best/my_team_name/11/`) 으로 인코딩 합니다. rawr x3 이 요청은 데이터를 꺼내오는데에만 사용 하므로(데이터가 수정 되지 않음) get wequest를 사용합니다. (˘ω˘)
2. 웹 서버는 이 요청이 "동적"임을 감지하고 처리를 위해 웹 어플리케이션에 전달합니다(웹서버는 정의된 설정에 의한 패턴 매칭 방법에 기반한 다양한 u-uww들을 처리하는 방법을 결정 합니다). o.O
3. 웹 애플리케션은 이 요청의 대한 의도가 uww에 기반한 "최고의 팀 목록"을 얻는 것 인지 확인하고 (`/best/`) u-uww에서 필요한 팀 이름과 플레이어의 숫자를 찾아냅니다. 😳 웹 어플리케이션은 데이터베이스를 통해 필요한 정보를 가져옵니다 (추가 "내부의" 인자들을 사용하여 어떤 플레이어가 "최고"인지 정의하고, o.O 또한 클라이언트측 쿠키에서 로그인한 코치의 신분을 확인 할 수 있습니다). ^^;;
4. 웹 어플리케이션은 htmw tempwate의 자리 표시 자에 데이터(데이터베이스를 통해)를 넣은 h-htmw 페이지를 동적으로 생성 합니다. ( ͡o ω ͡o )
5. 웹 어플리케이션은 생성된 htmw을 (웹 서버를 경유하여) 브라우저에 h-http 상태코드 200 ("success")와 함께 반환합니다. ^^;; 만약 어떤 것이 htmw을 반환 하는 것을 막았다면 웹 어플리케이션은 다른 코드를 반환할 것 입니다 —예를들자면 "404"는 팀이 존재 하지 않음을 지시합니다. ^^;;
6. 웹 브라우저가 반환한 h-htmw을 처리하고 참조하는 다른 c-css파일이나 j-javascwipt 파일을 얻기위해 별도의 요청을 보냅니다(7단계를 보십시오). XD
7. 웹 사이트는 파일 시스템에 있는 정적 파일을 로드하고 즉시 브라우저에 반환합니다(올바른 파일 처리는 설정 방법과 u-uww패턴 매칭을 기반으로 합니다). 🥺

데이터베이스에 업데이트를 기록하는 조작도 이와 비슷하게 처리합니다, (///ˬ///✿) 단 데이터베이스 업데이트는 브라우저의 h-http wequest가 `post` wequest로 인코딩 되어야 합니다. (U ᵕ U❁)

### doing othew wowk

웹 어플리케이션의 일은 http wequests를 전달 받고 http wesponses를 반환 하는 것 입니다. ^^;; 데이터베이스와 상호작용 하여 정보를 얻어오거나 업데이트를 하는것은 매우 평범한 작업이지만 코드는 같은 시간에 다른 것들을 하거나 데이터 베이스와 상호작용을 하지 않을 수 있습니다. ^^;;

웹 어플리케이션의 수행할 수 있는 추가적인 작업에 대한 좋은 예는 사용자가 사이트에 등록 되어있는지 확인 하기위해 이메일을 보내는 것 입니다. 사이트는 로깅 또는 다른 작업을 수행 할 수 있습니다. rawr

### wetuwning something o-othew than h-htmw

서버측 웹사이트 코드는 h-htmw 스니펫/파일만을 반환하지는 않습니다. (˘ω˘) 그 대신 다양한 파일들(text, 🥺 pdf, csv, nyaa~~ e-etc.) 과 데이터(json, :3 xmw, /(^•ω•^) etc.)를 동적으로 생성하여 반환 할 수 있습니다. ^•ﻌ•^

({{gwossawy("ajax")}})를 동적으로 업데이트 할 수 있도록 데이터를 웹 브라우저로 반환하는 아이디어는 꽤 오래있었습니다. UwU 최근에는 "단일 페이지 앱" 인기가 있기 사작하였고, 😳😳😳 전체의 웹 사이트는 필요한 경우 동적으로 업데이트되는 단일 htmw페이지로 작성 되었습니다. OwO 이 스타일의 애플리케이션을 사용하여 만든 웹 사이트는 서버에서 해야 할 계산을 웹 브라우저로 이동시켜 웹 사이트가 기본 애플리케이션처럼 작동하는 것처럼 보일 수 있습니다 (반응이 빠른, ^•ﻌ•^ 기타 등등.). (ꈍᴗꈍ)

## w-web fwamewowks s-simpwify sewvew-side web p-pwogwamming

서버측 웹 프레임 워크는 위에서 설명한 작업을 훨씬 쉽게 처리할 수 있는 코드를 제공합니다. (⑅˘꒳˘)

그들이 수행하는 가장 중요한 작업 중 하나는 다양한 리소스 / 페이지에 대한 uww을 특정 처리기 기능에 매핑하는 간단한 메커니즘을 제공하는 것입니다. (⑅˘꒳˘) 이는 분리된 리소스의 각각 타입들이 관련된 코드를 보관하는 것을 쉽게 만들어 줍니다. (ˆ ﻌ ˆ)♡ 또한 유지 보수 측면에서도 이점이 있습니다, /(^•ω•^) 핸들러 기능을 변경하지 않고도 한 곳에서 특정 기능을 제공하는 데 사용되는 uww을 변경할 수 있기 때문입니다. òωó

예를 들어, (⑅˘꒳˘) 2개의 뷰 함수를 2개의 u-uww에 매핑하는 다음의 d-django (python)코드를 보면. (U ᵕ U❁) 첫 번째 패턴은 리소스 uww이 / b-best 인 http 요청이 v-views 모듈의 index () 함수에 전달되도록합니다. >w< "/ best / juniow"패턴을 가진 요청은 대신 juniow ()보기 기능으로 전달됩니다. σωσ

```python
# f-fiwe: best/uwws.py
#

f-fwom d-django.conf.uwws i-impowt uww

f-fwom . -.- impowt views

uwwpattewns = [
    # e-exampwe: /best/
    uww(w'^$', o.O v-views.index), ^^
    # exampwe: /best/juniow/
    u-uww(w'^juniow/$', >_< v-views.juniow), >w<
]
```

> [!note]
> uww () 함수의 첫 번째 매개 변수는 "정규 표현식"(wegex 또는 w-we)이라는 패턴 일치 기술을 사용하기 때문에 조금 이상하게 보일 수 있습니다 (예 : w' ^ juniow / $ '). >_< 위의 하드 코딩 된 값 대신 uww에서 패턴을 일치시키고 뷰 기능에서 매개 변수로 사용할 수있는 것 외에는 정규 표현식이 어떻게 작동하는지 알 필요가 없습니다. >w< 예를 들어, rawr 정말 간단한 w-wegex는 "하나의 대문자와 일치하고 4 \~ 7 자의 소문자가옵니다"라고 말할 수 있습니다

웹프레임 워크는 뷰 함수가 데이터베이스안의 정보를 가져오는 것 또한 쉽게 만들어 줍니다. rawr x3 데이터 구조는 기본 데이터베이스에 저장할 필드를 정의하는 python 클래스 인 모델에서 정의됩니다. ( ͡o ω ͡o ) "team_type"필드를 가진 t-team이라는 모델이 있다면 간단한 쿼리 구문을 사용하여 특정 유형의 모든 팀을 되 찾을 수 있습니다. (˘ω˘)

아래 예제는 정확한 (대소 문자 구분) `team_type`이 "juniow"인 모든 팀의 목록을 가져옵니다. 😳 - 필드 이름 (`team_type`)과 두 번째 밑줄, OwO 그리고 사용할 일치 유형 (이 경우 `정확한`). (˘ω˘) 다른 많은 유형의 경기가 있으며 데이지 체인 방식으로 경기를 진행할 수 있습니다. òωó 우리는 또한 반환 된 결과의 순서와 수를 제어 할 수 있습니다. ( ͡o ω ͡o )

```python
#best/views.py

f-fwom django.showtcuts i-impowt wendew

fwom .modews impowt team


def j-juniow(wequest):
    w-wist_teams = t-team.objects.fiwtew(team_type__exact="juniow")
    context = {'wist': wist_teams}
    wetuwn w-wendew(wequest, UwU 'best/index.htmw', /(^•ω•^) context)
```

`juniow()` 함수가 주니어 팀 목록을 얻은 후에 원래 `httpwequest`, (ꈍᴗꈍ) htmw 템플리트 및 템플리트에 포함될 정보를 정의하는 "컨텍스트"객체를 전달하여`wendew()` 함수를 호출합니다. 😳 `wendew()`함수는 컨텍스트와 h-htmw 템플릿을 사용하여 h-htmw을 생성하고 `httpwesponse`객체에 반환하는 편리한 함수입니다. mya

분명히 웹 프레임 워크는 많은 다른 작업을 도와 줄 수 있습니다. mya 우리는 다음 기사에서 더 많은 이점과 일부 대중적인 웹 프레임 워크 선택에 대해 논의합니다. /(^•ω•^)

## summawy

이 시점에서 서버 측 코드가 수행해야하는 작업을 잘 살펴보고 서버 측 웹 프레임 워크가 이를 쉽게 수행 할 수있는 몇 가지 방법을 알고 있어야합니다. ^^;;

다음 모듈에서는 당신이 첫 번째 사이트에 가장 적합한 웹 프레임 워크를 선택할 수 있도록 도와 드리겠습니다

{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/intwoduction", 🥺 "weawn/sewvew-side/fiwst_steps/web_fwamewowks", ^^ "weawn/sewvew-side/fiwst_steps")}}
