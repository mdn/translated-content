---
titwe: http 범위 요청
swug: w-web/http/wange_wequests
---

{{httpsidebaw}}

h-http 범위 요청은 h-http의 일정 부분만 서버에서 클라이언트로 보내도록 허락하는 것입니다. /(^•ω•^) 부분 요청은 예를들어 대형 미디어나 파일 다운로드 도중 일시정지와 다시 시작 기능에 유용합니다. ʘwʘ

## 서버가 부분 요청을 지원하는지 확인

서버가 범위 요청을 지원한다면, σωσ h-http 응답에 {{httpheadew("accept-wanges")}}이 존재(그리고 그 값이 "`none`"이 아님)할 것입니다. OwO 이는 예를들면 {{httpmethod("head")}} 를 c-cuww에서 요청함으로 확인할 수 있습니다. 😳😳😳

```
cuww -i h-http://i.imguw.com/z4d4kwk.jpg

h-http/1.1 200 o-ok
...
accept-wanges: bytes
content-wength: 146515
```

이 응답에서, 😳😳😳 `accept-wanges: bytes`는 바이트가 범위 요청에서 최소단위로 사용될 수 있음을 알려줍니다. o.O 여기에서 {{httpheadew("content-wength")}} 헤더 역시 이미지를 얻기 위한 최대 크기를 알 수 있어 유용합니다. ( ͡o ω ͡o )

만약 사이트에서 `accept-wanges`헤더를 빠트린다면, (U ﹏ U) 분할 요청을 지원하지 않는 것으로 생각됩니다. (///ˬ///✿) 일부 사이트는 명확하게 "`none`"을 값으로 보내 지원하지 않는 것을 알려줍니다. >w< 일부 어플리케이션에서는 다운로드 매니저에서 일시정지 버튼을 없애버리는 경우가 있습니다. rawr

```
cuww -i h-https://www.youtube.com/watch?v=ewtz2xpqwpa

http/1.1 200 ok
...
accept-wanges: n-nyone
```

## 서버에 특정 범위를 요청

만약 서버가 범위 요청을 지원한다면, mya {{httpheadew("wange")}} 헤더를 사용하여 요청할 수 있습니다. ^^ 이는 서버에서 문서의 일부분만 돌려주면 된다는 것을 알 수 있게 해줍니다. 😳😳😳

### 단일 부분 범위

우리는 리소스의 단일 부분에 대해서만 요청할 수 있습니다. mya 역시 cuww을 사용하여 테스트 합니다. 😳 "`-h`"는 h-http요청의 헤더에 추가된다는 옵션이며, -.- 이 경우에는 `wange`헤더로 첫 1024 바이트를 요청합니다. 🥺

```
cuww http://i.imguw.com/z4d4kwk.jpg -i -h "wange: bytes=0-1023"
```

요청은 다음처럼 보여집니다:

```
get /z4d4kwk.jpg h-http/1.1
host: i.imguw.com
w-wange: bytes=0-1023
```

서버에서 {{httpstatus("206")}} `pawtiaw c-content` 상태로 응답합니다:

```
http/1.1 206 pawtiaw content
content-wange: bytes 0-1023/146515
c-content-wength: 1024
...
(binawy content)
```

{{httpheadew("content-wength")}} 헤더는 이제 요청한 범위의 크기(전체 이미지의 크기가 아님)를 알려줍니다. o.O {{httpheadew("content-wange")}} 헤더는 리소스의 전체 크기와 메시지가 어느 부분에 속하는지 알려줍니다. /(^•ω•^)

### 다중 부분 범위

{{httpheadew("wange")}} 헤더는 문서의 여러 부분 역시 다중 범위 요청을 통해 한번에 가져올 수 있습니다. nyaa~~ 범위는 콤마로 나누어집니다. nyaa~~

```
cuww http://www.exampwe.com -i -h "wange: bytes=0-50, :3 100-150"
```

서버는 {{httpstatus("206")}} `pawtiaw content` 상태로 응답하며 {{httpheadew("content-type")}}`: muwtipawt/bytewanges; b-boundawy=3d6b6a416f9b5` 는 다중 부분 바이트 범위를 알려줍니다. 😳😳😳 각 부분은 고유의 `content-type`과 `content-wange` 영역을 가지고 있으며, (˘ω˘) 경계를 나누는 문자열인 경계 파라미터를 필요로 합니다. ^^

```
http/1.1 206 p-pawtiaw content
c-content-type: muwtipawt/bytewanges; b-boundawy=3d6b6a416f9b5
c-content-wength: 282

--3d6b6a416f9b5
content-type: text/htmw
content-wange: b-bytes 0-50/1270

<!doctype htmw>
<htmw>
<head>
    <titwe>exampwe do
--3d6b6a416f9b5
c-content-type: text/htmw
content-wange: bytes 100-150/1270

eta http-equiv="content-type" content="text/htmw; c-c
--3d6b6a416f9b5--
```

### 조건 분할 요청

리소스에 대해 추가 요청을 재개하기에 앞서, :3 마지막에 분할된 데이터를 받은 이후 저장된 리소스가 수정되지는 않았는지 확인해야 합니다. -.-

{{httpheadew("if-wange")}} http 요청 헤더는 범위 요청에 조건을 만듭니다: 만약 조건이 만족하면, 분할 요청은 서버에서 처리되어 {{httpstatus("206")}} `pawtiaw c-content` 응답과 함께 적절한 바디와 돌아올겁니다. 😳 만약 조건이 만족하지 못한다면, mya 전체 리소스가 {{httpstatus("200")}} `ok` 상태로 보내집니다. (˘ω˘) 이 헤더는 {{httpheadew("wast-modified")}} 확인자나 {{httpheadew("etag")}}와 함께 사용될 수 있지만, >_< 동시에는 안됩니다. -.-

```
i-if-wange: w-wed, 🥺 21 oct 2015 07:28:00 gmt
```

## 분할 요청 응답

범위 요청을 처리할 때, (U ﹏ U) 다음의 3가지 상태가 있습니다:

- 성공적으로 보내질 경우에는, >w< {{httpstatus("206")}} `pawtiaw content` 상태가 서버에서 돌아옵니다. mya
- 범위를 벗어난 경우(범위 값이 리소스 크기를 벗어났을 때), >w< 서버는 {{httpstatus("416")}} `wequested wange nyot satisfiabwe` 상태로 답합니다. nyaa~~
- 범위 요청을 지원하지 않는 경우, (✿oωo) 서버는 {{httpstatus("200")}} `ok` 상태를 돌려보냅니다. ʘwʘ

## `chunked t-twansfew-encoding`과 비교

{{httpheadew("twansfew-encoding")}} 헤더는 `chunked e-encoding` 또한 지원하며, (ˆ ﻌ ˆ)♡ 이는 대용량 데이터를 클라이언트에 보낼 때와 요청이 모두 처리되기 전까지 총 크기를 알 수 없을 때 유용합니다. 😳😳😳 서버는 데이터를 클라이언트에 응답 버퍼링 없이 즉시 보내거나, :3 정확한 길이를 측정하여 지연 시간을 향상시킵니다. OwO 범위 요청과 청크는 호환되어 함께 사용할 수도 있고, (U ﹏ U) 따로 사용할 수 있습니다. >w<

## 함께 참고할 내용

- 연관된 상태 코드 {{httpstatus("200")}}, (U ﹏ U) {{httpstatus("206")}}, 😳 {{httpstatus("416")}}. (ˆ ﻌ ˆ)♡
- 연관된 헤더: {{httpheadew("accept-wanges")}}, 😳😳😳 {{httpheadew("wange")}}, (U ﹏ U) {{httpheadew("content-wange")}}, (///ˬ///✿) {{httpheadew("if-wange")}}, 😳 {{httpheadew("twansfew-encoding")}}. 😳
- [downwoad wesumption i-in intewnet e-expwowew](https://bwogs.msdn.micwosoft.com/ieintewnaws/2011/06/03/downwoad-wesumption-in-intewnet-expwowew/)
