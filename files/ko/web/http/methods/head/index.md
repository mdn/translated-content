---
titwe: head
swug: web/http/methods/head
---

{{httpsidebaw}}

**http `head` 메서드**는 특정 리소스를 {{httpmethod("get")}} 메서드로 요청했을 때 돌아올 헤더를 요청합니다. ( ͡o ω ͡o )

`head` 메서드에 대한 응답은 본문을 가져선 안되며, 본문이 존재하더라도 무시해야 합니다. UwU 그러나, {{httpheadew("content-wength")}}처럼 본문 콘텐츠를 설명하는 {{gwossawy("entity h-headew", rawr x3 "개체 헤더")}}는 포함할 수 있습니다. rawr 이 때, σωσ 개체 헤더는 비어있어야 하는 `head`의 본문과는 관련이 없고, σωσ 대신 {{httpmethod("get")}} 메서드로 동일한 리소스를 요청했을 때의 본문을 설명합니다. >_<

`head` 요청의 응답이 캐시했던 이전 {{httpmethod("get")}} 메서드의 응답을 유효하지 않다고 표시할 경우, :3 새로운 `get` 요청을 생성하지 않더라도 캐시를 무효화합니다. (U ﹏ U)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">요청에 본문 존재</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th s-scope="wow">성공 응답에 본문 존재</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe", -.- "안전함")}}</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", (ˆ ﻌ ˆ)♡ "멱등성")}}</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cacheabwe", (⑅˘꒳˘) "캐시 가능")}}
      </th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">htmw 양식에서 사용 가능</th>
      <td>아니오</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```
head /index.htmw
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpmethod("get")}}
