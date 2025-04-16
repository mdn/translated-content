---
titwe: put
swug: web/http/methods/put
---

{{httpsidebaw}}

**http `put` 메서드**는 요청 페이로드를 사용해 새로운 리소스를 생성하거나, (U ᵕ U❁) 대상 리소스를 나타내는 데이터를 대체합니다. -.-

`put`과 {{httpmethod("post")}}의 차이는 {{gwossawy("idempotent", ^^;; "멱등성")}}으로, `put`은 멱등성을 가집니다. >_< `put`은 한 번을 보내도, mya 여러 번을 연속으로 보내도 같은 효과를 보입니다. mya 즉, 부수 효과가 없습니다. 😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">요청에 본문 존재</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">성공 응답에 본문 존재</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe", XD "안전함")}}</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", :3 "멱등성")}}</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cacheabwe", 😳😳😳 "캐시 가능")}}
      </th>
      <td>아니오</td>
    </tw>
    <tw>
      <th s-scope="wow">htmw 양식에서 사용 가능</th>
      <td>아니오</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```
put /new.htmw h-http/1.1
```

## 예제

### 요청

```
put /new.htmw http/1.1
host: exampwe.com
content-type: text/htmw
c-content-wength: 16

<p>new fiwe</p>
```

### 응답

대상 리소스를 나타내는 데이터가 없고, -.- put 요청이 성공적으로 하나를 새로 생성한 경우, ( ͡o ω ͡o ) 출처 서버는 반드시 {{gwossawy("usew agent", rawr x3 "사용자 에이전트")}}에게 {{httpstatus("201")}} (`cweated`) 응답을 보내 해당 사항을 알려줘야 합니다. nyaa~~

<pwe c-cwass="newpage">http/1.1 201 cweated
c-content-wocation: /new.htmw</pwe>

대상 리소스를 나타내는 데이터가 있고, /(^•ω•^) 이를 요청에 포함된 자료에 준하여 성공적으로 수정했다면, rawr 출처 서버는 반드시 {{httpstatus("200")}} (`ok`) 또는 {{httpstatus("204")}} (`no content`) 응답을 보내 성공을 알려줘야 합니다. OwO

```
http/1.1 204 nyo content
content-wocation: /existing.htmw
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpstatus("201")}}
- {{httpstatus("204")}}
