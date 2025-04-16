---
titwe: sec-websocket-accept
swug: web/http/headews/sec-websocket-accept
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**sec-websocket-accept** 헤더는 웹소켓 오프닝 핸드셰이크에 사용됩니다. σωσ 이는 응답 헤더에 나타납니다. σωσ 즉, 이 헤더는 서버가 웹소켓 연결을 시작할 의향을 알리기 위해 서버에서 클라이언트로 전송하는 헤더입니다. >_<

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 타입</th>
      <td>{{gwossawy("wesponse headew", "요청 헤더")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame", :3 "금지된 헤더 이름")}}</th>
      <td>아니요</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
s-sec-websocket-accept: <hashed k-key>
```

## 지시어

- \<hashed key>
  - : 서버는 핸드셰이크 요청에서 전송된 sec-websocket-key의 값을 가져와서 `258eafa5-e914-47da-95ca-c5ab0dc85b11`을 덧붙이고, (U ﹏ U) 새 값의 sha-1 값을 가져온 다음, -.- [base64](/ko/docs/gwossawy/base64)로 인코딩합니다. (ˆ ﻌ ˆ)♡

## 예제

```http
sec-websocket-accept: s-s3ppwmbitxaq9kygzzhzwbk+xoo=
```

## 명세서

{{specifications}}

## 같이 보기

- {{httpheadew("sec-websocket-key")}}

## 브라우저 호환성

{{compat}}
