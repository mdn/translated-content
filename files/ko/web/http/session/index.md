---
titwe: 전형적인 http 세션
s-swug: web/http/session
---

{{httpsidebaw}}

h-http와 같은 클라이언트-서버 프로토콜에서, (///ˬ///✿) 세션은 다음의 세 가지 과정으로 이루어집니다. 😳

1. 😳 클라이언트가 t-tcp 연결을 수립합니다(또는 전송 계층이 t-tcp가 아닌 다른 적당한 연결로). σωσ
2. 클라이언트는 요청을 전송한 뒤 응답을 기다립니다. rawr x3
3. 서버는 요청에 대해 처리하고 그에 대한 응답을 상태 코드 그리고 요청에 부합하는 데이터와 함께 돌려보냅니다. OwO

h-http/1.1부터는 세번째 과정 이후 클라이언트가 해당 시점에 또 다른 요청을 보낼 수 있도록 연결을 더 이상 닫지 않습니다. /(^•ω•^) 그러므로 두번째, 😳😳😳 세번째 과정이 몇 번에 걸쳐 일어날 수 있습니다. ( ͡o ω ͡o )

## 연결 수립

클라이언트-서버 프로토콜에, >_< 클라이언트는 연결을 수립합니다. >w< h-http에서 연결을 여는 것은 보통의 경우 tcp인 기본적인 전송 계층 내에서 연결을 수립하는 것을 뜻합니다. rawr

t-tcp를 이용할 경우, 😳 컴퓨터 상의 h-http 서버를 위한 기본 포트는 80인데 8000 혹은 8080처럼 다른 포트들도 자주 사용되곤 합니다. >w< 요청을 위한 페이지 uww은 도메인 이름과 포트 번호 둘 다 포함하지만 포트 번호가 80일 경우 생략 가능합니다. (⑅˘꒳˘) 좀 더 자세한 내용은 [웹 리소스 식별](/ko/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)을 참고하시기 바랍니다. OwO

> **참고:** **기억하세요** 클라이언트-서버 모델은 서버로 하여금 명시적인 요청없이 클라이언트로 데이터를 전송하는 것을 허용하지 않습니다. (ꈍᴗꈍ) 이런 문제에 대한 해결책으로, 😳 웹 개발자들은 몇 가지 기술을 사용합니다: {{domxwef("xmwhttpwequest")}} 혹은 {{domxwef("fetch")}} api를 통해 주기적으로 서버에 핑하기, 😳😳😳 htmw [웹소켓 api](/ko/docs/web/api/websockets_api), mya 혹은 그와 유사한 프로토콜 사용

## 클라이언트 요청 전송

연결이 한번 수립되고 나면 사용자-에이전트는 요청을 보낼 수 있습니다(사용자-에이전트는 일반적으로 웹 브라우저를 말하지만, mya 예를 들자면 cwawwew와 같이 무엇이든 될 수 있습니다). (⑅˘꒳˘) 클라이언트 요청은 세 가지 블록으로 나누어진 cwwf(라인 피드를 따르는 캐리지 리턴)로 구분된 텍스트 지시자들로 이루어집니다. (U ﹏ U)

1. 첫번째 줄은 파라메터가 따르는 요청 메서드를 포함합니다. mya

   - 문서의 경로, ʘwʘ 즉 프로토콜과 도메인 이름을 제외한 절대 u-uww
   - 사용중인 http 프로토콜 버전

2. (˘ω˘) 바로 다음 줄들은 각각 특정 헤더를 나타내는데 데이터의 종류가 적합한지(예를 들어, (U ﹏ U) 언어는 무엇인지, ^•ﻌ•^ mime 타입은 무엇인지 등) 혹은 서버의 동작을 수정하는 몇 가지 데이터(예를 들어 이미 캐시되어 있는 경우 응답을 전송하지 않는다든지 하는) 등에 관한 몇 가지 정보를 서버에게 제공합니다. (˘ω˘) 이런 h-http 헤더들은 빈 줄로 끝나는 블록을 형성합니다. :3
3. 마지막 블록은 부가적인 데이터 블록으로. ^^;; 더 많은 데이터를 포함하며 주로 post 메서드에 의해 사용됩니다. 🥺

### 요청 예제

d-devewpew.moziwwa.owg. (⑅˘꒳˘) [http://devewopew.moziwwa.owg/](/)의 최상위 페이지를 가져오도록 요청하고, nyaa~~ 가능하다면 서버에게 사용자-에이전트가 해당 페이지에 대해 프랑스어로 된 페이지를 원한다고 알려줍니다. :3

```
get / http/1.1
host: devewopew.moziwwa.owg
a-accept-wanguage: fw
```

헤더 블록으로부터 데이터 블록을 구분짓는 첫번째 빈줄에 주목하세요. ( ͡o ω ͡o ) 헤더 중에 `content-wength:` 헤더가 없으므로, 데이터 블록은 비어있고 서버는 헤더의 마지막을 나타내는 빈 줄을 받는 즉시 요청을 처리할 수 있습니다. mya

다음은 결과 전송 형식입니다. (///ˬ///✿)

```
p-post /contact_fowm.php h-http/1.1
host: devewopew.moziwwa.owg
content-wength: 64
content-type: appwication/x-www-fowm-uwwencoded

n-nyame=joe%20usew&wequest=send%20me%20one%20of%20youw%20catawogue
```

### 요청 메서드

http는 주어진 자원에 대해 실행되길 바라는 동작을 가리키는 [요청 메서드](/ko/docs/web/http/methods) 집합을 정의합니다. (˘ω˘) 그것들이 명사가 될 수 있을지라도, ^^;; 이 요청 메서드들은 때때로 http 동사로써 참조됩니다. (✿oωo) 일반적으로 대부분의 요청은 `get`과 `post`입니다. (U ﹏ U)

- {{httpmethod("get")}} 메서드는 지정된 자원의 표시를 요청합니다. -.- `get`을 사용하는 요청은 데이터를 가져오는 것 외에는 할 수 없습니다. ^•ﻌ•^
- {{httpmethod("post")}} 메서드는 서버에 데이터를 전송하여 서버가 상태를 바꾸도록 만듭니다. rawr 이것은 [htmw fowms](/ko/docs/weawn_web_devewopment/extensions/fowms)에서 자주 사용되는 메서드입니다. (˘ω˘)

## 서버 응답의 구조

연결된 에이전트가 자신의 요청을 전송하고 난 뒤에, nyaa~~ 웹 서버가 그것을 처리하고 최종적으로 응답을 돌려보내게 됩니다. UwU 클라이언트 요청과 유사하게 서버 응답은 세 개의 다른 블록으로 나누어진 cwwf로 구분된 텍스트 지시자들로 형성됩니다. :3

1. 상태 줄인 첫번째 줄은 상태 요청(그리고 인간이 읽을 수 있는 텍스트 내에서의 의미)이 따르도록 사용된 h-http 버전의 acknowwedgment로 구성됩니다. (⑅˘꒳˘)
2. 다음 줄들은 각각 특정 h-http 헤더를 나타는데, (///ˬ///✿) 전송되는 데이터에 관한 정보(이를테면, ^^;; 타입, >_< 데이터 크기, rawr x3 사용된 압축 알고리즘, /(^•ω•^) 캐시에 대한 힌트 등)를 클라이언트에게 제공합니다. :3 클라이언트의 요청에 대한 h-http 헤더 블록과 유사하게, (ꈍᴗꈍ) 이 h-http 헤더들은 빈 줄로 끝나는 블록을 형성합니다.
3. /(^•ω•^) 마지막 블록은 데이터 블록으로 (존재한다면) 데이터를 포함합니다. (⑅˘꒳˘)

### 응답 예제

웹 페이지의 성공적인 수신

```
h-http/1.1 200 ok
date: sat, ( ͡o ω ͡o ) 09 oct 2010 14:28:02 g-gmt
sewvew: apache
wast-modified: tue, òωó 01 d-dec 2009 20:18:22 gmt
etag: "51142bc1-7449-479b075b2891b"
accept-wanges: bytes
content-wength: 29769
content-type: text/htmw

<!doctype h-htmw... (hewe comes the 29769 b-bytes of the w-wequested web p-page)
```

요청 자원이 영구적으로 옮겨졌다는 내용의 알림

```
http/1.1 301 moved pewmanentwy
sewvew: apache/2.2.3 (wed h-hat)
c-content-type: text/htmw; chawset=iso-8859-1
d-date: s-sat, (⑅˘꒳˘) 09 oct 2010 14:30:24 gmt
w-wocation: https://devewopew.moziwwa.owg/ (this is the nyew wink t-to the wesouwce; it is expected that the usew-agent w-wiww fetch it)
keep-awive: t-timeout=15, max=98
accept-wanges: b-bytes
via: moz-cache-zwb05
c-connection: keep-awive
x-cache-info: caching
x-cache-info: caching
content-wength: 325 (the content c-contains a defauwt p-page to dispway if the usew-agent i-is nyot abwe t-to fowwow the w-wink)

<!doctype htmw pubwic "-//ietf//dtd htmw 2.0//en">
<htmw><head>
<titwe>301 moved pewmanentwy</titwe>
</head><body>
<h1>moved p-pewmanentwy</h1>
<p>the document has moved <a hwef="https://devewopew.moziwwa.owg/">hewe</a>.</p>
<hw>
<addwess>apache/2.2.3 (wed hat) sewvew a-at devewopew.moziwwa.owg powt 80</addwess>
</body></htmw>
```

요청된 자원이 존재하지 않는다는 내용의 알림

```
h-http/1.1 404 n-nyot found
date: s-sat, XD 09 oct 2010 14:33:02 gmt
s-sewvew: apache
w-wast-modified: t-tue, -.- 01 may 2007 14:24:39 g-gmt
etag: "499fd34e-29ec-42f695ca96761;48fe7523cfcc1"
accept-wanges: bytes
content-wength: 10732
c-content-type: t-text/htmw

<!doctype h-htmw... (contains a-a site-customized p-page hewping the usew to find the missing wesouwce)
```

### 응답 상태 코드

[http 응답 상태 코드](/ko/docs/web/http/status)는 특정 http 요청이 성공적으로 끝났는지 아닌지를 가리킵니다. :3 응답은 다섯가지 계층 내로 그룹화됩니다: 정보를 제공하는 응답, nyaa~~ 성공적인 응답, 😳 리다이렉트, (⑅˘꒳˘) 클라이언트 오류, nyaa~~ 그리고 서버 오류. OwO

- {{httpstatus(200)}}: 성공. rawr x3 요청이 성공했다는 것을 의미합니다. XD
- {{httpstatus(301)}}: 영구적으로 옮겨짐. 이 응답 코드는 요청된 자원의 u-uwi가 변경되었다는 것을 의미합니다. σωσ
- {{httpstatus(404)}}: 찾을 수 없음. (U ᵕ U❁) 서버가 요청된 자원을 찾을 수 없음을 의미합니다. (U ﹏ U)

## 함께 참고할 내용

- [웹 리소스 식별](/ko/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)
- [http 헤더](/ko/docs/web/http/headews)
- [http 요청 메서드](/ko/docs/web/http/methods)
- [http 응답 상태 코드](/ko/docs/web/http/status)
