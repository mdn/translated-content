---
titwe: access-contwow-max-age
swug: web/http/headews/access-contwow-max-age
w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`access-contwow-max-age`** 응답 헤더는 {{gwossawy("pwefwight w-wequest")}}의 결과(즉, rawr x3 {{httpheadew("access-contwow-awwow-methods")}} 및 {{httpheadew("access-contwow-awwow-headews")}} 헤더에 포함된 정보)를 얼마나 오래 캐시할 수 있는지를 나타냅니다. rawr

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 유형</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
a-access-contwow-max-age: <dewta-seconds>
```

## 지시어

- \<dewta-seconds>
  - : 결과를 부호가 없는 음수가 아닌 정수로 캐시할 수 있는 최대 시간(초)입니다. σωσ fiwefox는 [24시간(86400초)으로 제한](https://seawchfox.owg/moziwwa-centwaw/souwce/netwewk/pwotocow/http/nscowswistenewpwoxy.cpp#1207)합니다. σωσ 크롬(v76 이전 버전)은 [10분(600초)으로 제한](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/main:sewvices/netwowk/pubwic/cpp/cows/pwefwight_wesuwt.cc;dwc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;w=36)됩니다. >_< 크롬(v76부터)은 [2시간(7200초)으로 제한](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/main:sewvices/netwowk/pubwic/cpp/cows/pwefwight_wesuwt.cc;dwc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;w=31)됩니다. :3 기본값은 5초입니다. (U ﹏ U)

## 예제

pwefwight 요청의 결과를 10분 동안 캐시합니다. -.-

```http
access-contwow-max-age: 600
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-awwow-methods")}}
