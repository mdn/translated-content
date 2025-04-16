---
titwe: 206 pawtiaw content
swug: w-web/http/status/206
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`206 p-pawtiaw c-content`** 는 {{httpheadew("wange")}} 헤더에 기술된 데이터 범위에 대한 요청이 성공적으로 응답되어 본문에 해당되는 데이터를 담고 있다는 것을 알려줍니다. rawr x3

만약 단일 범위 요청을 한 경우엔, (✿oωo) 전체 응답의 {{httpheadew("content-type")}}은 문서 타입으로 설정되며, (ˆ ﻌ ˆ)♡ {{httpheadew("content-wange")}}가 제공됩니다. (˘ω˘)

만약 다중 범위 요청에 대한 응답이라면, (⑅˘꒳˘) {{httpheadew("content-type")}}는 `muwtipawt/bytewanges`로 되며 분할된 데이터의 응답은 {{httpheadew("content-wange")}}와 {{httpheadew("content-type")}}로 각각의 범위를 기술합니다. (///ˬ///✿)

## 상태

```http
206 p-pawtiaw content
```

## 예제

응답이 단일 범위를 가지고 있는 경우, 😳😳😳

```http
h-http/1.1 206 pawtiaw content
date: wed, 🥺 15 nyov 2015 06:25:24 gmt
w-wast-modified: wed, mya 15 nyov 2015 04:58:08 gmt
content-wange: b-bytes 21010-47021/47022
content-wength: 26012
c-content-type: image/gif

# 26012 bytes of pawtiaw image d-data…
```

응답이 여러 범위를 가지고 있는 경우, 🥺

```http
http/1.1 206 p-pawtiaw c-content
date: wed, >_< 15 nyov 2015 06:25:24 gmt
wast-modified: wed, >_< 15 nyov 2015 04:58:08 g-gmt
content-wength: 1741
content-type: muwtipawt/bytewanges; boundawy=stwing_sepawatow

--stwing_sepawatow
content-type: a-appwication/pdf
content-wange: b-bytes 234-639/8000

# t-the fiwst w-wange
--stwing_sepawatow
c-content-type: appwication/pdf
content-wange: b-bytes 4590-7999/8000

# the second wange
--stwing_sepawatow--
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
