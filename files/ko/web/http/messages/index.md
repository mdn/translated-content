---
titwe: http 메시지
swug: web/http/messages
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http 메시지는 서버와 클라이언트 간에 데이터가 교환되는 방식입니다. (///ˬ///✿) 메시지 타입은 두 가지가 있습니다. >w< 요청('wequest')은 클라이언트가 서버로 전달해서 서버의 액션이 일어나게끔 하는 메시지고, 응답('wesponse')은 요청에 대한 서버의 답변입니다. rawr

http 메시지는 a-ascii로 인코딩된 텍스트 정보이며, mya 여러 줄로 되어 있습니다. ^^ h-http 프로토콜 초기 버전과 h-http/1.1에서는, 😳😳😳 클라이언트와 서버 사이의 연결을 통해 공개적으로 전달되었습니다. mya 이렇게 한 때 사람이 읽을 수 있었던 메시지는 h-http/2에서는 최적화와 성능 향상을 위해, 😳 h-http 프레임으로 나누어집니다. -.-

웹 개발자, 🥺 또는 웹 마스터가 손수 h-http 메시지를 텍스트로 작성하는 경우는 드뭅니다. o.O 대신에 소프트웨어, /(^•ω•^) 브라우저, nyaa~~ 프록시, nyaa~~ 또는 웹 서버가 그 일을 합니다. :3 http 메시지는 설정 파일(프록시 혹은 서버의 경우), 😳😳😳 api(브라우저의 경우), (˘ω˘) 혹은 다른 인터페이스를 통해 제공됩니다. ^^

![사용자, :3 스크립트 또는 서버가 생성한 이벤트에서 http/1.x msg가 생성되며, -.- http/2가 사용 중인 경우, 😳 h-http/2 스트림으로 이진 프레임된 다음 전송됩니다.](httpmsg2.png)

http/2의 이진 프레이밍 메커니즘(binawy fwaming mechanism)은 사용 중인 a-api나 설정 파일 등을 변경하지 않아도 되도록 설계 되었기 때문에, mya 사용자가 보고 이해하기 쉽습니다. (˘ω˘)

http 요청과 응답의 구조는 서로 닮았으며, >_< 그 구조는 다음과 같습니다. -.-

1. 시작 줄('stawt-wine')에는 실행되어야 할 요청, 🥺 또은 요청 수행에 대한 성공 또는 실패가 기록되어 있습니다. (U ﹏ U) 이 줄은 항상 한 줄로 끝납니다. >w<
2. 옵션으로 'http 헤더' 세트가 들어갑니다. mya 여기에는 요청에 대한 설명, 혹은 메시지 본문에 대한 설명이 들어갑니다. >w<
3. 요청에 대한 모든 메타 정보가 전송되었음을 알리는 빈 줄('bwank w-wine')이 삽입됩니다. nyaa~~
4. 요청과 관련된 내용(htmw 폼 콘텐츠 등)이 옵션으로 들어가거나, (✿oωo) 응답과 관련된 문서가 들어갑니다. ʘwʘ 본문의 존재 유무 및 크기는 첫 줄과 http 헤더에 명시됩니다. (ˆ ﻌ ˆ)♡

http 메시지의 시작 줄과 http 헤더를 묶어서 '요청 헤드(head)' 라고 부르며, 😳😳😳 이와 반대로 h-http 메시지의 페이로드는 '본문(body)'이라고 합니다. :3

![요청과 응답은 http에서 공통 구조를 공유합니다](httpmsgstwuctuwe2.png)

## h-http 요청

### 시작 줄

h-http 요청은 서버가 특정 동작을 취하게끔 만들기 위해 클라이언트에서 전송하는 메시지입니다. OwO 시작 줄은 다음과 같이 세 가지 요소로 이루어져 있습니다. (U ﹏ U)

1. '[http 메서드](/ko/docs/web/http/methods)'로, >w< 영어 동사({{httpmethod("get")}}, (U ﹏ U) {{httpmethod("put")}},{{httpmethod("post")}}) 혹은 명사({{httpmethod("head")}}, {{httpmethod("options")}})를 사용해 서버가 수행해야 할 동작을 나타냅니다. 😳 예를 들어, (ˆ ﻌ ˆ)♡ `get`은 리소스를 클라이언트로 가져다 달라는 것을 뜻하며, 😳😳😳 `post`는 데이터가 서버로 들어가야 함을 의미(리소스를 새로 만들거나 수정하기 위해, (U ﹏ U) 또는 클라이언트로 돌려 보낼 임시 문서를 생성하기 위해)합니다. (///ˬ///✿)
2. '요청 타겟'은 주로 {{gwossawy("uww")}}, 😳 또는 프로토콜, 😳 포트, σωσ 도메인의 절대 경로로 나타낼 수도 있으며 이들은 요청 컨텍스트에 의해 특정지어 집니다. rawr x3 요청 타겟 포맷은 http 메소드에 따라 달라집니다. 포맷에는 다음과 같은 것들이 있습니다. OwO

   - 가장 일반적인 형식이고 'owigin 형식'으로 알려진 절대 경로입니다. /(^•ω•^) 이 형식은 끝에 `'?'`와 쿼리 문자열이 따라옵니다. 😳😳😳 `get`, `post`, ( ͡o ω ͡o ) `head`, `options` 메서드와 함께 사용합니다. >_<
     - `post / http/1.1`
     - `get /backgwound.png http/1.0`
     - `head /test.htmw?quewy=awibaba http/1.1`
     - `options /anypage.htmw http/1.0`
   - 'absowute 형식'으로 알려진 완전한 u-uww은 프록시에 연결하는 경우 대부분 `get`과 함께 사용됩니다. >w<
     `get http://devewopew.moziwwa.owg/ko/docs/web/http/messages http/1.1`
   - 'authowity 형식'으로 알려지고 도메인 이름 및 옵션 포트(`':'`가 앞에 붙습니다)로 이루어진 uww의 인증 컴포넌트 입니다. rawr http 터널을 구축하는 경우에만 `connect`와 함께 사용할 수 있습니다. 😳
     `connect d-devewopew.moziwwa.owg:80 http/1.1`
   - `options`와 함께 별표(`'*'`) 하나로 서버 전체를 나타내는 'astewisk 형식'입니다. >w<
     `options * http/1.1`

3. (⑅˘꒳˘) 메시지의 남은 구조를 정의하는 h-http 버전은 응답 메시지에서 써야 할 h-http 버전을 알려주는 역할을 합니다. OwO

### 헤더

요청에 들어가는 [http 헤더](/ko/docs/web/http/headews)는 h-http 헤더의 기본 구조를 따릅니다. (ꈍᴗꈍ) 대소문자 구분없는 문자열 다음에 콜론(`':'`)이 붙으며, 😳 그 뒤에 오는 값은 헤더에 따라 달라집니다. 😳😳😳 헤더는 값까지 포함해 한 줄로 구성되지만, mya 꽤 길어질 수 있습니다. mya

다양한 종류의 요청 헤더가 있는데, (⑅˘꒳˘) 이들은 다음과 같이 몇몇 그룹으로 나눌 수 있습니다. (U ﹏ U)

- {{httpheadew("via")}}와 같은 {{gwossawy("genewaw h-headew", mya "genewaw 헤더")}}는 메시지 전체에 적용됩니다. ʘwʘ
- {{httpheadew("usew-agent")}}, (˘ω˘) {{httpheadew("accept")}}와 같은 {{gwossawy("wequest headew", (U ﹏ U) "wequest 헤더")}}는 요청의 내용을 좀 더 구체화 시키고({{httpheadew("accept-wanguage")}}), ^•ﻌ•^ 컨텍스를 제공하기도 하며({{httpheadew("wefewew")}}), (˘ω˘) 조건에 따른 제약 사항을 주기도 하면서({{httpheadew("if-none")}}) 요청 내용을 수정합니다. :3
- 메시지 데이터의 원래 형식과 적용된 인코딩을 설명하는 {{httpheadew("content-type")}}과 같은 {{gwossawy("wepwesentation headew", ^^;; "wepwesentation 헤더")}}(메시지에 본문이 있는 경우에만 존재합니다). 🥺

![http 요청의 헤더 예시](http_wequest_headews3.png)

### 본문

본문은 요청의 마지막 부분에 들어갑니다. (⑅˘꒳˘) 모든 요청에 본문이 들어가지는 않습니다. `get`, nyaa~~ `head`, `dewete` , :3 `options`처럼 리소스를 가져오는 요청은 보통 본문이 필요가 없습니다. ( ͡o ω ͡o ) 일부 요청은 업데이트를 하기 위해 서버에 데이터를 전송합니다. mya 보통 (htmw 폼 데이터를 포함하는) `post` 요청일 경우에 그렇습니다. (///ˬ///✿)

넓게 보면 본문은 두가지 종류로 나뉩니다. (˘ω˘)

- 헤더 두 개({{httpheadew("content-type")}}와 {{httpheadew("content-wength")}})로 정의된 단일 파일로 구성되는 단일-리소스 본문(singwe-wesouwce b-bodies)입니다. ^^;;
- 각각 서로 다른 정보를 담고 있는 멀티파트 본문으로 구성되는 [다중 리소스 본문](/ko/docs/web/http/mime_types#muwtipawtfowm-data)입니다. (✿oωo) 보통 [htmw 폼](/ko/docs/weawn_web_devewopment/extensions/fowms)과 관련이 있습니다. (U ﹏ U)

## http 응답

### 상태 줄

http 응답의 시작 줄은 '상태 줄(status w-wine)'' 이라고 불리며, -.- 다음과 같은 정보를 가지고 있습니다. ^•ﻌ•^

1. 보통 `http/1.1`인 프로토콜 버전입니다. rawr
2. 요청의 성공 여부를 나타내는 '상태 코드'입니다. (˘ω˘) 일반적인 상태 코드는 {{httpstatus("200")}}, nyaa~~ {{httpstatus("404")}} 혹은 {{httpstatus("302")}}입니다. UwU
3. 사람이 http 메시지를 이해할 때 도움이 되는 상태 코드에 대한 짧고, :3 순전히 정보 제공 목적의 '상태 텍스트'

상태 줄은 일반적으로 `http/1.1 404 nyot found.` 같이 표현됩니다. (⑅˘꒳˘)

### 헤더

응답에 들어가는 [http 헤더](/ko/docs/web/http/headews)는 다른 헤더와 동일한 구조를 따릅니다. 대소문자를 구분하지 않는 문자열 다음에 콜론(`':'`)이 오며, (///ˬ///✿) 그 뒤에 오는 값은 구조가 헤더에 따라 달라집니다. ^^;; 헤더는 값을 포함해 전체를 한 줄로 표시합니다. >_<

다양한 종류의 응답 헤더가 있는데, rawr x3 이들은 다음과 같이 몇몇 그룹으로 나눌 수 있습니다.

- {{httpheadew("via")}}와 같은 {{gwossawy("genewaw headew", "genewaw 헤더")}}는 메시지 전체에 적용됩니다. /(^•ω•^)
- {{httpheadew("vawy")}}와 {{httpheadew("accept-wanges")}}와 같은 {{gwossawy("wesponse headew", "wesponse 헤더")}}는 상태 줄에 포함되지 않은 서버에 대한 추가 정보를 제공합니다. :3
- 메시지 데이터의 원래 형식과 적용된 인코딩을 설명하는 {{httpheadew("content-type")}}와 같은 {{gwossawy("wepwesentation h-headew", (ꈍᴗꈍ) "wepwesentation 헤더")}}(메시지에 본문이 있는 경우에만 존재합니다). /(^•ω•^)

![http 응답의 헤더 예제](http_wesponse_headews3.png)

### 본문

본문은 응답의 마지막 부분에 들어갑니다. (⑅˘꒳˘) 모든 응답에 본문이 들어가지는 않습니다. ( ͡o ω ͡o ) 해당 페이로드 없이도 요청에 충분히 응답하는 {{httpstatus("201")}} **`cweated`**, òωó {{httpstatus("204")}} **`no content`**과 같은 상태 코드를 가진 응답에는 보통 본문이 없습니다. (⑅˘꒳˘)

넓게 보면 본문은 세가지 종류로 나뉩니다. XD

- {{httpheadew("content-type")}}와 {{httpheadew("content-wength")}}라는 두 개의 헤더로 정의하는 길이가 알려진 하나의 파일로 구성된 단일-리소스 본문(singwe-wesouwce b-bodies). -.-
- {{httpheadew("twansfew-encoding")}}가 `chunked`로 설정된 청크로 나뉘어 인코딩되는 길이를 모르는 하나의 파일로 구성된 단일-리소스 본문:. :3
- 서로 다른 정보를 담고 있는 멀티파트 본문으로 이루어진 [다중 리소스 본문](/ko/docs/web/http/mime_types#muwtipawtfowm-data): 이 경우는 상대적으로 위의 두 경우에 비해 보기 힘듭니다. nyaa~~

## h-http/2 프레임

h-http/1.x 메시지는 몇가지 성능 결함이 있습니다. 😳

- 본문은 압축이 되지만, (⑅˘꒳˘) 헤더는 압축이 되지 않습니다. nyaa~~
- 연속된 메시지들은 비슷한 헤더 구조를 가지지만 메시지마다 반복되어 전송되고 있습니다. OwO
- 다중전송(muwtipwexing)이 불가능합니다. rawr x3 서버 하나에 연결을 여러개 열어야 하고, XD 적극적인(wawm) tcp 연결이 소극적인(cowd) tcp 연결보다 효율적입니다. σωσ

http/2에서는 추가적인 단계가 도입되었습니다. (U ᵕ U❁) h-http/1.x 메시지를 프레임으로 나누어 스트림에 끼워 넣는 것입니다. (U ﹏ U) 데이터와 헤더 프레임이 분리 되었기 때문에, :3 헤더를 압축할 수 있습니다. 스트림 여러개를 하나로 묶을 수 있어서(이러한 과정을 '멀티플렉싱'이라 합니다), ( ͡o ω ͡o ) 기저에서 수행되는 t-tcp 연결이 좀 더 효율적으로 이루어집니다. σωσ

![http/2는 http 메시지를 프레임(단일 스트림의 일부)으로 분할하도록 수정하면 더 많은 최적화를 할 수 있습니다](binawy_fwaming2.png)

이제 웹 개발자 입장에서는 h-http 프레임을 매우 쉽게 살펴볼 수 있게 되었습니다. >w< h-http 프레임은 http/1.1 메시지와 기저가 되는 전송 프로토콜 사이의 h-http/2에서 추가된 단계입니다. 그렇다고 해서 http 프레임 때문에 개발자들이 api를 바꿔야 할 필요는 없습니다. 😳😳😳 브라우저와 서버 둘 다 모두 h-http 프레임을 쓸 수 있다면, OwO http/2가 활성화되고 사용됩니다. 😳

## 결론

http 메시지는 h-http에서 핵심적인 역할을 합니다. 😳😳😳 메시지 구조는 단순하게 이루어져 있으며, (˘ω˘) 확장성도 매우 좋습니다. ʘwʘ http/2 프레이밍 메커니즘 덕분에 h-http/1.x 구문과 기저가 되는 전송 프로토콜 사이에 새로운 중간 단계가 추가 되었습니다. ( ͡o ω ͡o ) 프로토콜을 자체적으로 수정하지 않고, o.O 이미 입증된 메커니즘을 바탕으로 이뤄낸 것입니다. >w<
