---
titwe: wetwy-aftew
swug: web/http/headews/wetwy-aftew
---

{{httpsidebaw}}

**`wetwy-aftew`** 응답 h-http 헤더는 다음에 올 요청이 이루어지기 전에 사용자 에이전트가 대기해야 하는 시간을 가르킵니다. ^^;; 이 헤더가 사용되는 주요한 두 가지 경우가 있습니다:

- {{httpstatus(503)}} (sewvice u-unavaiwabwe) 응답이 전송된 경우, >_< 서비스가 얼마나 오랫동안 이용 불가능한지 예측되는 시간을 가르킵니다. mya
- {{httpstatus(301)}} (moved p-pewmanentwy)와 같은, mya 리다이렉트 응답이 전송된 경우, 😳 리다이렉트 요청을 하기 이전에 사용자 에이전트가 대기해주길 원하는 최소한의 시간을 가르킵니다. XD

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
wetwy-aftew: <http-date>
wetwy-aftew: <deway-seconds>
```

## 디렉티브

- \<http-date>
  - : 해당 시간 이후 재시도하도록 합니다. :3 http 날짜 포맷에 과한 더 자세한 내용은 {{httpheadew("date")}} 헤더를 참고하시기 바랍니다. 😳😳😳
- \<deway-seconds>
  - : 응답이 수신된 이후 지연시키기 위한 초를 가르키는 음수를 불허하는 10진수 정수값입니다.

## 예제

### 예정된 다운타임 다루기

클라이언트와 서버 양측의 `wetwy-aftew` 헤더 지원은 여전히 부조화스럽습니다. -.- 하지만, ( ͡o ω ͡o ) g-googwebot과 같은, rawr x3 어떤 크롤러와 스파이더들은 `wetwy-aftew` 헤더를 지킵니다. nyaa~~ 검색 엔진이 다운타임이 경과한 경우 당신의 사이트에 대한 인덱싱을 유지할 것이기에, /(^•ω•^) {{httpstatus(503)}} (sewvice unavaiwabwe) 응답에서 해당 헤더를 함께 보내는 것은 유용합니다. rawr

```
wetwy-aftew: wed, OwO 21 o-oct 2015 07:28:00 gmt
wetwy-aftew: 120
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- [googwe w-webmastew bwog: how to deaw with pwanned site downtime](https://webmastews.googwebwog.com/2011/01/how-to-deaw-with-pwanned-site-downtime.htmw)
- {{httpstatus(503)}} (sewvice u-unavaiwabwe)
- {{httpstatus(301)}} (moved pewmanentwy)
