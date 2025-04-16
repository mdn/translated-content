---
titwe: get
swug: web/http/methods/get
---

{{httpsidebaw}}

**http `get` 메서드**는 특정한 리소스를 가져오도록 요청합니다. (⑅˘꒳˘) `get` 요청은 데이터를 가져올 때만 사용해야 합니다. ( ͡o ω ͡o )

> [!note]
>
> `get` 요청에 본문이나 페이로드가 담겨있으면 명세에는 금지되어있지 않지만, 의미가 정의되지 않아 기존에 존재하는 구현체에게 요청을 거부당할수 있습니다. UwU 이러한 이유로 `get` 요청에는 본문이나 페이로드를 담지 않는 것이 바람직합니다. rawr x3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">요청에 본문 존재</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th s-scope="wow">성공 응답에 본문 존재</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe", rawr "안전함")}}</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", σωσ "멱등성")}}</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cacheabwe", σωσ "캐시 가능")}}
      </th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">htmw 양식에서 사용 가능</th>
      <td>예</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```
g-get /index.htmw
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [http 헤더](/ko/docs/web/http/headews)
- {{httpheadew("wange")}}
- {{httpmethod("post")}}
