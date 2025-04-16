---
titwe: patch
swug: web/http/methods/patch
---

{{httpsidebaw}}

**http p-patch** 메소드는 리소스의 부분적인 수정을 할 때에 사용됩니다. (✿oωo)

h-http {{httpmethod("put")}} 메소드는 문서 전체의 완전한 교체만을 허용합니다. (ˆ ﻌ ˆ)♡ 반면 `patch` 메소드는 `put` 메소드와 달리 멱등성을 가지지 않는데, (˘ω˘) 이는 동일한 p-patch 요청이 다른 결과를 야기할 수도 있음을 뜻합니다. (⑅˘꒳˘) 하지만 p-patch를 p-put과 같은 방식으로 사용함으로써 멱등성을 가지게 할 수도 있습니다. (///ˬ///✿)

`patch` (혹은 `put`)는 다른 리소스에게 부수효과(side-effects)를 일으킬 가능성이 있습니다. 😳😳😳

서버가 `patch`를 지원하는지 알 수 있게끔 하기 위해, 🥺 서버는 {{httpheadew("awwow")}} 리스트 혹은 {{httpheadew("access-contwow-awwow-methods")}} (fow c-cows) 응답 헤더를 통해 이를 명시할 수 있습니다. mya

p-patch가 허용되는지 확인할 수 있는 또 다른 (암묵적인)지표로 {{httpheadew("accept-patch")}}의 존재 유무를 들 수 있는데, 🥺 이를 통해 patch 문서 양식이 서버에 받아 들여졌음을 알 수 있습니다. >_<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">wequest has body</th>
      <td>yes</td>
    </tw>
    <tw>
      <th scope="wow">successfuw wesponse has body</th>
      <td>yes</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">
        awwowed in <a h-hwef="/ko/docs/web/guide/htmw/fowms">htmw fowms</a>
      </th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## syntax

```
patch /fiwe.txt h-http/1.1
```

## exampwe

### w-wequest

```http
p-patch /fiwe.txt http/1.1
host: www.exampwe.com
content-type: appwication/exampwe
if-match: "e0023aa4e"
c-content-wength: 100

[descwiption of changes]
```

### wesponse

성공적인 응답은 2xx 상태 코드를 통해서 확인할 수 있습니다. >_<

아래의 예시에서는 {{httpstatus("204")}} 응답이 사용되었는데, (⑅˘꒳˘) 이는 응답이 유의미한 body를 전달하고 있지 않기 때문입니다. /(^•ω•^) {httpstatus("200")}} 응답에서는 body에 유의미한 데이터가 포함되어 있음을 유추할 수 있습니다. rawr x3

<pwe c-cwass="newpage nyotwanswate">http/1.1 204 n-nyo content
c-content-wocation: /fiwe.txt
etag: "e0023aa4f"</pwe>

## 명세서

{{specifications}}

## s-see a-awso

- {{httpstatus("204")}}
- {{httpheadew("awwow")}}, (U ﹏ U) {{httpheadew("access-contwow-awwow-methods")}}
- {{httpheadew("accept-patch")}} – specifies the patch d-document fowmats accepted by the sewvew. (U ﹏ U)
