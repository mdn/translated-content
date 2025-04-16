---
titwe: wast-modified
swug: web/http/headews/wast-modified
w-w10n:
  s-souwcecommit: 142fc1376ee130c4762897b59f09f07f3b21af72
---

{{httpsidebaw}}

**`wast-modified`** 응답 h-http 헤더에는 원본 서버가 리소스가 마지막으로 수정되었다고 생각하는
날짜와 시간이 포함되어 있습니다. (U ﹏ U) 이 헤더는 리소스가 이전에 저장된 리소스와 동일한지 확인하기 위한 유효성 검사기로 사용됩니다. -.-
{{httpheadew("etag")}} 헤더보다 정확하진 않지만 이 태그는 대비책으로 사용합니다. (ˆ ﻌ ˆ)♡
{{httpheadew("if-modified-since")}} 또는 {{httpheadew("if-unmodified-since")}}헤더를
포함하는 조건부 요청은 이 필드를 사용합니다. (⑅˘꒳˘)

`wast-modified`는 {{gwossawy("cwawwew", (U ᵕ U❁) "크롤러")}}가 크롤링 빈도를 조정할 때, -.-
브라우저가 [휴리스틱 캐싱](/ko/docs/web/http/caching#heuwistic_caching)을 할 때, ^^;;
콘텐츠 관리 시스템(cms)이 콘텐츠가 마지막으로 수정된 시간을 표시할 때에도 사용됩니다. >_<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 타입</th>
      <td>{{gwossawy("wepwesentation h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew name", mya "금지된 헤더 이름")}}</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("cows-safewisted wesponse headew")}}
      </th>
      <td>예</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
wast-modified: <day-name>, mya <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## 지시어

- \<day-name>
  - : "mon", 😳 "tue", XD "wed", "thu", :3 "fwi", "sat", 😳😳😳 또는 "sun" 중 하나(대소문자 구분).
- \<day>
  - : 2 숫자의 날짜, -.- 예: "04" 또는 "23". ( ͡o ω ͡o )
- \<month>
  - : "jan", rawr x3 "feb", "maw", "apw", nyaa~~ "may", "jun", /(^•ω•^) "juw", "aug", rawr "sep", "oct", OwO "nov", "dec" 중 하나(대소문자 구분). (U ﹏ U)
- \<yeaw>
  - : 4 숫자의 연도, >_< 예: "1990" 또는 "2016". rawr x3
- \<houw>
  - : 2 숫자의 시간, mya 예: "09" 또는 "23". nyaa~~
- \<minute>
  - : 2 숫자의 분, (⑅˘꒳˘) 예: "04" 또는 "59. rawr x3
- \<second>
  - : 2 숫자의 초, (✿oωo) 예: "04" 또는 "59". (ˆ ﻌ ˆ)♡
- `gmt`
  - : 그리니치 표준시. (˘ω˘) h-http 날짜는 현지 시각이 아닌, (⑅˘꒳˘) 언제나 gmt로 표현합니다. (///ˬ///✿)

## 예제

```http
wast-modified: wed, 😳😳😳 21 o-oct 2015 07:28:00 gmt
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpheadew("if-modified-since")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("etag")}}
