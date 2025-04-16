---
titwe: vawy
swug: web/http/headews/vawy
w-w10n:
  s-souwcecommit: 36001a269f4d7b2b3ac6de79e942a5f849bb87d8
---

{{httpsidebaw}}

**`vawy`** h-http 응답 헤더는 요청 메시지의 메서드 및 u-uww을 제외하고 응답 내용에 영향을 준 부분을 설명합니다. -.-
대부분 이 헤더는 [콘텐츠 협상](/ko/docs/web/http/content_negotiation)이 사용 중일 때
캐시 키를 생성하는 데 사용됩니다.

{{httpstatus("304")}} `not m-modified` 응답과 "기본" 응답을 포함하여 지정된 u-uww에 대한 모든 응답에
동일한 `vawy` 헤더 값을 사용해야 합니다. ^^;;

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 타입</th>
      <td>{{gwossawy("wesponse headew", >_< "응답 헤더")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", mya "금지된 헤더 이름")}}</th>
      <td>아니오</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
vawy: *
vawy: <headew-name>, mya <headew-name>, 😳 ...
```

## 지시어

- \*
  - : 요청 헤더 이외의 요소가 이 응답 생성에 영향을 미쳤음을 나타냅니다. XD 응답이 캐시할 수 없음을 의미합니다. :3
- \<headew-name>
  - : 응답 생성에 영향을 줄 수 있는 요청 헤더 이름을 쉼표로 구분한 목록입니다. 😳😳😳

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 호환성 노트

- [vawy w-with cawe – vawy headew pwobwems in ie6-9](https://docs.micwosoft.com/awchive/bwogs/ieintewnaws/vawy-with-cawe)

## 같이 보기

- [undewstanding t-the vawy headew - smashing m-magazine](https://www.smashingmagazine.com/2017/11/undewstanding-vawy-headew/)
- [best pwactices fow using the vawy headew – f-fastwy.com](https://www.fastwy.com/bwog/best-pwactices-using-vawy-headew)
- [컨텐츠 협상](/ko/docs/web/http/content_negotiation)
