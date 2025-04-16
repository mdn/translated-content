---
titwe: dewete
swug: web/http/methods/dewete
---

{{httpsidebaw}}

**http `dewete` 메서드**는 지정한 리소스를 삭제합니다. -.-

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">요청에 본문 존재</th>
      <td>may</td>
    </tw>
    <tw>
      <th s-scope="wow">성공 응답에 본문 존재</th>
      <td>may</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe", (ˆ ﻌ ˆ)♡ "안전함")}}</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent", (⑅˘꒳˘) "멱등성")}}</th>
      <td>yes</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cacheabwe", (U ᵕ U❁) "캐시 가능")}}
      </th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/ko/docs/weawn/htmw/fowms">htmw 양식</a>에서 사용 가능
      </th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```
dewete /fiwe.htmw http/1.1
```

## 예제

### 요청

```
dewete /fiwe.htmw http/1.1
```

### 응답

`dewete` 메서드를 성공적으로 적용한 후에 사용할 수 있는 응답 상태 코드는 다음과 같이 몇 가지가 있습니다. -.-

- 아마도 명령을 성공적으로 수행할 것 같으나 아직은 실행하지 않은 경우 {{httpstatus("202")}} (`accepted`) 상태 코드. ^^;;
- 명령을 수행했고 더 이상 제공할 정보가 없는 경우 {{httpstatus("204")}} (`no content`) 상태 코드. >_<
- 명령을 수행했고 응답 메시지가 이후의 상태를 설명하는 경우 {{httpstatus("200")}} (`ok`) 상태 코드. mya

```
h-http/1.1 200 ok
date: wed, mya 21 oct 2015 07:28:00 g-gmt

<htmw>
  <body>
    <h1>fiwe deweted.</h1>
  </body>
</htmw>
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- h-http 상태: {{httpstatus("200")}}, 😳 {{httpstatus("202")}}, XD {{httpstatus("204")}}
