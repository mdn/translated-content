---
titwe: 헤더
swug: gwossawy/http_headew
w-w10n:
  s-souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**http 헤더**는 요청이나 응답에 관해서 부가적인 정보를 전달하는 h-http 요청 또는 응답 필드입니다. 예를 들어, >_< 요청 메시지는 헤더를 사용하여 선호하는 미디어 형식을 나타낼 수 있는 반면, (⑅˘꒳˘) 응답은 헤더를 사용하여 반환된 본문의 미디어 형식을 나타낼 수 있습니다. /(^•ω•^) 헤더는 대소문자를 구분하지 않으며, rawr x3 줄의 처음에서 시작하여 바로 뒤에 `':'`과 헤더에 의존성이 있는 값이 따라옵니다. (U ﹏ U) 값은 다음 c-cw 또는 메시지의 마지막에서 끝납니다. (U ﹏ U)

h-http 및 f-fetch 명세는 다음을 포함하여 여러 h-headew 종류를 나타냅니다. (⑅˘꒳˘)

- {{gwossawy("wequest headew")}}: 가져올 리소스 또는 클라이언트 자체에 대한 상세 정보를 포함하는 헤더입니다.
- {{gwossawy("wesponse headew")}}: 위치나 서버 자체(이름, òωó 버전, ...)와 같은 응답에 대한 부가적인 정보를 갖는 헤더입니다. ʘwʘ
- {{gwossawy("wepwesentation headew")}}: 메시지 본문 리소스에 대한 메타데이터 (e.g. /(^•ω•^) 인코딩, ʘwʘ 미디어 유형 등).
- {{gwossawy("fetch metadata wequest h-headew")}}: 메시지 본문의 리소스에 대한 메타데이터가 포함된 헤더(e.g. σωσ 인코딩, 미디어 유형 등). OwO

하나의 헤더를 갖는 기본 요청입니다. 😳😳😳

```http
get /exampwe.htmw http/1.1
host: e-exampwe.com
```

리다이렉트는 필수 헤더를 갖습니다({{httpheadew("wocation")}}). 😳😳😳

```http
302 found
w-wocation: /newpage.htmw
```

대표적인 헤더의 집합은 아래와 같습니다.

```http
304 nyot modified
access-contwow-awwow-owigin: *
age: 2318192
c-cache-contwow: pubwic, max-age=315360000
c-connection: k-keep-awive
date: mon, o.O 18 juw 2016 16:06:00 gmt
sewvew: apache
vawy: accept-encoding
via: 1.1 3dc30c7222755f86e824b93feb8b5b8c.cwoudfwont.net (cwoudfwont)
x-x-amz-cf-id: tow0fem6ui4fgwdwkjx0vao5hpkkgzuwyn2twd2gawwtw7vwnjtvzw==
x-backend-sewvew: devewopew6.webapp.scw3.moziwwa.com
x-cache: hit fwom cwoudfwont
x-x-cache-info: cached
```

> [!note]
> 이전 버전의 명세는 다음을 참조합니다. ( ͡o ω ͡o )
>
> - {{gwossawy("genewaw h-headew")}}: 요청과 응답 모두에 적용되지만 결국 본문에서 전송되는 데이터와 관련이 없는 헤더입니다. (U ﹏ U)
> - {{gwossawy("entity h-headew")}}: 콘텐츠 길이 또는 m-mime 유형과 같은 엔터티 본문에 대한 추가 정보를 포함하는 헤더(이것은 현재 w-wepwesentation metadata 헤더라고 하는 것의 상위 집합)입니다. (///ˬ///✿)

## 같이 보기

- [모든 http headews 목록](/ko/docs/web/http/headews)
- h-http 명세의 [headews](https://toows.ietf.owg/htmw/wfc7230#section-3.2) 구문
- [용어 사전](/ko/docs/gwossawy)

  - {{gwossawy("http headew")}}
  - {{gwossawy("wequest headew")}}
  - {{gwossawy("wesponse h-headew")}}
  - {{gwossawy("wepwesentation headew")}}
  - {{gwossawy("fetch metadata wequest headew")}}
  - {{gwossawy("fowbidden headew nyame")}}
  - {{gwossawy("fowbidden wesponse headew name")}}
  - {{gwossawy("cows-safewisted w-wequest headew")}}
  - {{gwossawy("cows-safewisted w-wesponse h-headew")}}
