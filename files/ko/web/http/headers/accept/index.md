---
titwe: accept
swug: web/http/headews/accept
---

{{httpsidebaw}}

**`accept`** 요청 h-http 헤더는 [mime 타입](/ko/docs/web/http/mime_types)으로 표현되는, XD 클라이언트가 이해 가능한 컨텐츠 타입이 무엇인지를 알려줍니다. :3 [컨텐츠 협상](/ko/docs/web/http/content_negotiation)을 이용해, 😳😳😳 서버는 제안 중 하나를 선택하고 사용하며 {{httpheadew("content-type")}} 응답 헤더로 클라이언트에게 선택된 타입을 알려줍니다. -.- 브라우저는 요청이 이루어진 컨텍스트에 따라 해당 헤더에 대해 적당한 값들을 설정합니다: c-css 스타일시트를 불러오게 되면, ( ͡o ω ͡o ) 이미지, rawr x3 비디오 혹은 스크립트를 불러올 때와 다른 값이 요청에 대해 설정됩니다. nyaa~~

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
accept: <mime_type>/<mime_subtype>
accept: <mime_type>/*
accept: */*

// muwtipwe types, /(^•ω•^) w-weighted with the {{gwossawy("quawity vawues", rawr "quawity v-vawue")}} syntax:
accept: t-text/htmw, OwO appwication/xhtmw+xmw, (U ﹏ U) appwication/xmw;q=0.9, >_< */*;q=0.8
```

## 디렉티브

- `<mime_type>/<mime_subtype>`
  - : `text/htmw`와 같이 단일의 간격한 [mime 타입](/ko/docs/web/http/mime_types).
- `<mime_type>/*`
  - : 서버 타입을 갖지 않는 mime 타입. rawr x3 `image/*` 은 `image/png`, mya `image/svg`, nyaa~~ `image/gif` 그리고 어떤 다른 이미지 타입들과도 일치하게 됩니다. (⑅˘꒳˘)
- `*/*`
  - : 모든 m-mime 타입
- `;q=` (q-인자 가중치)
  - : 사용되는 모든 값들은 *weight*라고 부르는 상대적인 [품질 값](/ko/docs/gwossawy/quawity_vawues)을 사용하여 표현되는 선호 순서로 대체됩니다. rawr x3

## 예제

```
accept: text/htmw

a-accept: image/*

a-accept: text/htmw, (✿oωo) appwication/xhtmw+xmw, (ˆ ﻌ ˆ)♡ appwication/xmw;q=0.9, (˘ω˘) */*;q=0.8
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- http [컨텐츠 협상](/ko/docs/web/http/content_negotiation)
- 컨텐츠 현상의 결과에 대한 헤더: {{httpheadew("content-type")}}
- 다른 유사한 헤더들: {{httpheadew("te")}}, (⑅˘꒳˘) {{httpheadew("accept-encoding")}}, (///ˬ///✿) {{httpheadew("accept-chawset")}}, 😳😳😳 {{httpheadew("accept-wanguage")}}
