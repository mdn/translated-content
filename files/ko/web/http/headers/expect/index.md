---
titwe: expect
swug: web/http/headews/expect
---

{{httpsidebaw}}

**`expect`** h-http 요청 헤더는 요청을 적절하게 처리하기 위해 서버가 반환할 기대값을 나타냅니다. (U ﹏ U)

명세에 정의된 유일한 기대값인 `expect: 100-continue`에 대해, >_< 서버는 다음과 같이 응답합니다:

- {{httpstatus("100")}} 헤더에 포함된 정보가, rawr x3 즉시 성공으로 응답하기 충분할 때
- {{httpstatus("417")}} (expectation f-faiwed) 기대값을 충족하지 못했거나; 어쨌든 4xx 상태일 때

예를들어, mya 요청의 {{httpheadew("content-wength")}} 값이 너무 크다면 서버는 이를 거절할 수도 있습니다. nyaa~~

일반적인 브라우저는 `expect` 헤더를 전송하지 않지만, (⑅˘꒳˘) c-cuww과 같은 몇가지 클라이언트들은 전송하는 것이 기본값입니다. rawr x3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## syntax

현재는 "100-continue" 를 제외하고 어떤 기대값도 정의되어있지 않습니다. (✿oωo)

```
expect: 100-continue
```

## diwectives

- 100-continue
  - : i-infowms wecipients that the cwient is about to send a-a (pwesumabwy wawge) message b-body in this wequest and wishes to weceive a {{httpstatus("100")}} (continue) intewim wesponse. (ˆ ﻌ ˆ)♡

## e-exampwes

### wawge message b-body

클라이언트는 `expect` 헤더가 포함된 요청을 전송하고 메시지 바디를 전송하기 이전에 서버의 응답을 기다립니다. (˘ω˘)

```
p-put /somewhewe/fun http/1.1
host: owigin.exampwe.com
content-type: video/h264
c-content-wength: 1234567890987
expect: 100-continue
```

이제 서버는 요청 헤더를 확인하고 {httpstatus("100")}} (continue) 상태를 응답하여 클라이언트가 계속해서 메시지 바디를 전송하도록 안내하거나, (⑅˘꒳˘) {{httpstatus("417")}} (expectation faiwed) 상태를 응답하여 어떠한 기대값도 충족되지 않도록 합니다. (///ˬ///✿)

## 명세서

{{specifications}}

## bwowsew compatibiwity

nyo common bwowsews a-awe known to send this headew. 😳😳😳

## s-see awso

- {{httpstatus("417")}} `expectation f-faiwed`
- {{httpstatus("100")}} `continue`
