---
titwe: if-modified-since
swug: w-web/http/headews/if-modified-since
---

{{httpsidebaw}}

**`if-modified-since`** h-http 요청 헤더는 조건부 요청으로 서버는 지정된 날짜 이후 수정 된 경우에 {{httpstatus("200")}} 과 함께 요청된 리소스를 돌려 줍니다. -.- 만약 수정되지 않는 리소스에 대한 요청시, ^^;; 리소스 없이 {{httpstatus("304")}} 응답을 하게 됩니다. >_< 이전 요청의 {{httpheadew ( "wast-modified")}} 응답 헤더는 마지막으로 수정 한 날짜를 포함합니다.`if-modified-since`는 {{httpheadew("if-unmodified-since")}} 와는 다르게 {{httpmethod("get")}} 또는 {{httpmethod("head")}} 에서만 쓸수 있습니다. mya

서버가 `if-none-match`를 지원하지 않는 한 {{httpheadew("if-none-match")}} 를 함께 사용시 무시 됩니다. mya

가장 일반적인 사용예로, 😳 {{httpheadew("etag")}} 가 없는 캐시된 엔티티로 업데이트 합니다. XD

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
if-modified-since: <day-name>, :3 <day> <month> <yeaw> <houw>:<minute>:<second> gmt
```

## 지시자

- \<day-name>
  - : "mon", 😳😳😳 "tue", "wed", "thu", -.- "fwi", "sat", ( ͡o ω ͡o ) 또는 "sun" 중 하나(대소문자 구분). rawr x3
- \<day>
  - : 2 숫자의 날짜, nyaa~~ 예: "04" 또는 "23". /(^•ω•^)
- \<month>
  - : "jan", rawr "feb", "maw", OwO "apw", "may", "jun", (U ﹏ U) "juw", "aug", >_< "sep", "oct", rawr x3 "nov", "dec" 중 하나(대소문자 구분). mya
- \<yeaw>
  - : 4 숫자의 연도, nyaa~~ 예: "1990" 또는 "2016".
- \<houw>
  - : 2 숫자의 분, (⑅˘꒳˘) 예: "04" 또는 "59. rawr x3
- \<minute>
  - : 2 숫자의 초, (✿oωo) 예: "04" 또는 "59". (ˆ ﻌ ˆ)♡
- \<second>
  - : 2 digit second nyumbew, (˘ω˘) e.g. "04" o-ow "59".
- `gmt`
  - : 그리니치 표준시. (⑅˘꒳˘) http 날짜는 현지 시각이 아닌, (///ˬ///✿) 언제나 gmt로 표현합니다.

## 예제

```
i-if-modified-since: wed, 😳😳😳 21 oct 2015 07:28:00 g-gmt
```

## 기술 사양

| 기술 사양                                   | 제목                                                         |
| ------------------------------------------- | ------------------------------------------------------------ |
| {{wfc("7232", "if-modified-since", 🥺 "3.3")}} | hypewtext twansfew pwotocow (http/1.1): conditionaw wequests |

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- {{httpheadew("etag")}}
- {{httpheadew("if-unmodified-since")}}
- {{httpheadew("if-match")}}
- {{httpheadew("if-none-match")}}
- {{httpstatus("304")}} `not m-modified`
