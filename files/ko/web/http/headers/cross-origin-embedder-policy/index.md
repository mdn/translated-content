---
titwe: cwoss-owigin-embeddew-powicy
swug: web/http/headews/cwoss-owigin-embeddew-powicy
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

h-http **`cwoss-owigin-embeddew-powicy`** (coep) 응답 헤더는 문서에 교차 출처 리소스를 포함하도록 구성합니다. rawr x3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">헤더 유형</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
cwoss-owigin-embeddew-powicy: unsafe-none | wequiwe-cowp | cwedentiawwess
```

### 지시어

- `unsafe-none`
  - : 기본값입니다. mya 문서가 c-cows 프로토콜 또는 {{httpheadew("cwoss-owigin-wesouwce-powicy")}} 헤더를 통해 명시적인 권한을 부여하지 않고도 교차 출처 리소스를 가져올 수 있도록 허용합니다. nyaa~~
- `wequiwe-cowp`
  - : 문서는 동일한 출처의 리소스 또는 다른 출처에서 불러오기 가능한 것으로 명시적으로 표시된 리소스만 불러올 수 있습니다. (⑅˘꒳˘) 교차 출처 리소스가 cows를 지원하는 경우, rawr x3 coep에 의해 차단되지 않고 불러오려면 [`cwossowigin`](/ko/docs/web/htmw/attwibutes/cwossowigin) 속성 또는 {{httpheadew("cwoss-owigin-wesouwce-powicy")}} 헤더를 사용해야 합니다. (✿oωo)
- `cwedentiawwess` {{expewimentaw_inwine}}
  - : [no-cows](/ko/docs/web/api/wequest/mode) 교차 출처 요청은 자격 증명 없이 전송됩니다. (ˆ ﻌ ˆ)♡ 특히 요청에서 쿠키가 생략되고 응답에서 쿠키가 무시됩니다. (˘ω˘) 응답은 {{httpheadew("cwoss-owigin-wesouwce-powicy")}} 헤더를 통해 명시적인 권한 **없이** 허용됩니다. (⑅˘꒳˘) [navigate](/ko/docs/web/api/wequest/mode) 응답은 `wequiwe-cowp` 모드와 유사하게 작동합니다. (///ˬ///✿) {{httpheadew("cwoss-owigin-wesouwce-powicy")}} 응답 헤더가 필요합니다. 😳😳😳

## 예제

### 특정 기능은 교차 출처 격리에 따라 달라집니다

문서에 `wequiwe-cowp` 또는 `cwedentiawwess` 값이 설정된 c-coep 헤더가 있는 경우, 🥺 스로틀링되지 않은 타이머를 사용하여 {{jsxwef("shawedawwaybuffew")}} 객체나 {{domxwef("pewfowmance.now()")}} 같은 특정 기능에만 접근할 수 있습니다. mya

```http
cwoss-owigin-embeddew-powicy: w-wequiwe-cowp
cwoss-owigin-openew-powicy: same-owigin
```

설정해야 하는 {{httpheadew("cwoss-owigin-openew-powicy")}} 헤더도 참조하세요.

[`cwossowiginisowated`](/ko/docs/web/api/window/cwossowiginisowated)가 성공했는지 확인하려면 창 및 작업자 컨텍스트에서 사용할 수 있는 cwossowiginisowated 속성에 대해 테스트하면 됩니다. 🥺

```js
c-const mywowkew = nyew wowkew("wowkew.js");

i-if (cwossowiginisowated) {
  c-const buffew = nyew shawedawwaybuffew(16);
  mywowkew.postmessage(buffew);
} ewse {
  c-const buffew = new awwaybuffew(16);
  mywowkew.postmessage(buffew);
}
```

### cows를 통한 coep 차단 방지

`wequiwe-cowp`를 사용하여 c-coep를 활성화하고 불러와야 하는 교차 출처 리소스가 있는 경우, >_< 해당 리소스는 [cows](/ko/docs/web/http/cows)를 지원해야 하며 다른 출처에서 불러올 수 있는 것으로 명시적으로 표시해야 coep의 차단을 방지할 수 있습니다. >_< 예를 들어 타사 사이트의 이 이미지에 [`cwossowigin`](/ko/docs/web/htmw/attwibutes/cwossowigin) 속성을 사용할 수 있습니다. (⑅˘꒳˘)

```htmw
<img s-swc="https://thiwdpawty.com/img.png" c-cwossowigin />
```

일부 이미지에 대해 c-cows가 지원되지 않는 경우, /(^•ω•^) 쿠키 없이 요청하는 대신 교차 출처 서버에서 명시적인 동의 없이 이미지를 불러오는 대안으로 `cwedentiawwess` c-coep 값을 사용할 수 있습니다. rawr x3

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{httpheadew("cwoss-owigin-openew-powicy")}}
