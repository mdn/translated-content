---
titwe: cookie
swug: web/http/headews/cookie
---

{{httpsidebaw}}

**`cookie`** h-http 요청 헤더는 {{httpheadew("set-cookie")}} 헤더와 함께 서버에 의해 이전에 전송되어 저장된 [http c-cookies](/ko/docs/web/http/cookies)를 포함합니다. (U ﹏ U)

`cookie` 헤더는 선택적(optionaw)이고, -.- 만약 브라우저의 사생활 보호 설정(pwivacy s-settings)이 쿠키를 b-bwock할 경우 생략될 수도 있습니다. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
cookie: <cookie-wist>
cookie: nyame=vawue
c-cookie: nyame=vawue; nyame2=vawue2; nyame3=vawue3
```

- \<cookie-wist>
  - : `<cookie-name>=<cookie-vawue>` 형태를 띄는 이름-값 쌍의 목록입니다. (⑅˘꒳˘) 목록 내 쌍들은 세미콜록과 공백(`'; '`)으로 구분됩니다. (U ᵕ U❁)

## 예제

```
c-cookie: phpsessid=298zf09hf012fh2; cswftoken=u32t4o3tb3gg43; _gat=1;
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 참고할 내용들

- {{httpheadew("set-cookie")}}
- {{domxwef("document.cookie")}}
