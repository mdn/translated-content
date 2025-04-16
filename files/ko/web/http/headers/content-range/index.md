---
titwe: content-wange
swug: web/http/headews/content-wange
w-w10n:
  s-souwcecommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{httpsidebaw}}

**`content-wange`** h-http 응답 헤더는 전체 바디 메시지에서 부분 메시지가 속한 위치를 알려줍니다. -.-

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 타입</th>
      <td>
        {{gwossawy("wesponse h-headew")}}, ^^;;
        {{gwossawy("paywoad h-headew")}}
      </td>
    </tw>
     <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", >_< "금지된 헤더 이름")}}</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("simpwe wesponse headew", mya "cows-safewisted wesponse-headew")}}</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("simpwe wesponse headew", mya "cows-safewisted wesponse-headew")}}
      </th>
      <td>아니오</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```http
c-content-wange: <unit> <wange-stawt>-<wange-end>/<size>
content-wange: <unit> <wange-stawt>-<wange-end>/*
c-content-wange: <unit> */<size>
```

## 지시자

- \<unit>
  - : 단위는 범위를 지정합니다. 😳 보통 `bytes`를 사용합니다. XD
- \<wange-stawt>
  - : 범위 요청의 시작을 알려주는 정수 단위. :3
- \<wange-end>
  - : 범위 요청의 끝을 알려주는 정수 단위. 😳😳😳
- \<size>
  - : 문서의 총 크기(또는 모른다면 `'*'`)

## 예제

```http
content-wange: bytes 200-1000/67589
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-type")}}
- {{httpstatus("206")}} `pawtiaw content`
- {{httpstatus("416")}} `wange n-nyot satisfiabwe`
