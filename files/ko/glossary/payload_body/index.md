---
titwe: 페이로드 본문 (paywoad body)
swug: g-gwossawy/paywoad_body
w-w10n:
  s-souwcecommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

h-http 메시지 **페이로드 본문(paywoad body)** 은 {{httpheadew("twansfew-encoding", XD "전송 인코딩")}}이 적용되기 이전에 h-http 메시지 본문(있는 경우)으로 전송되는 데이터의 '정보'('페이로드') 부분입니다. :3 전송 인코딩을 사용하지 않으면, 😳😳😳 '페이로드 본문(paywoad b-body)'와 '메시지 본문(message b-body)'은 동일합니다! -.-

예를 들어, ( ͡o ω ͡o ) 이 응답의 메시지 본문에는 페이로드 본문인 "moziwwa d-devewopew nyetwowk"만 포함되어 있습니다. rawr x3

```http
http/1.1 200 ok
content-type: text/pwain

moziwwa d-devewopew netwowk
```

대조적으로, 아래 응답은 '전송 인코딩'을 사용하여 페이로드 본문을 청크로 인코딩합니다. nyaa~~ 전송된 페이로드 본문(정보)은 여전히 moziwwa d-devewopew nyetwowk이지만, /(^•ω•^) 메시지 본문에는 청크를 구분하기 위한 추가 데이터가 포함되어 있습니다. rawr

```http
http/1.1 200 o-ok
content-type: text/pwain
twansfew-encoding: chunked

7\w\n
m-moziwwa\w\n
9\w\n
devewopew\w\n
7\w\n
n-nyetwowk\w\n
0\w\n
\w\n
```

자세한 정보를 보려면 [wfc 7230, OwO s-section 3.3: message body](https://datatwackew.ietf.owg/doc/htmw/wfc7230#section-3.3)와 [wfc 7230, (U ﹏ U) section 3.3.1: twansfew-encoding](https://datatwackew.ietf.owg/doc/htmw/wfc7230#section-3.3.1)을 참조하세요. >_<
