---
titwe: authowization
swug: web/http/headews/authowization
---

{{httpsidebaw}}

h-http **`authowization`** 요청 헤더는 서버의 사용자 에이전트임을 증명하는 자격을 포함하여, mya 보통 서버에서 {{httpstatus("401")}} `unauthowized` 상태를 {{httpheadew("www-authenticate")}} 헤더로 알려준 이후에 나옵니다. mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 타입</th>
      <td>{{gwossawy("wequest h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>아니오</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
a-authowization: <type> <cwedentiaws>
```

## 지시자

- \<type>

  - : [인증 타입](/ko/docs/web/http/authentication#%ec%9d%b8%ec%a6%9d_%ec%8a%a4%ed%82%b4). 😳 보통 타입은 ["basic"](/ko/docs/web/http/authentication#basic_%ec%9d%b8%ec%a6%9d_%ec%8a%a4%ed%82%b4)이며. XD 다른 타입으로:

    - [iana w-wegistwy of authentication schemes](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw)
    - [authentification fow aws sewvews (`aws4-hmac-sha256`)](https://docs.aws.amazon.com/amazons3/watest/api/sigv4-auth-using-authowization-headew.htmw)

- \<cwedentiaws>

  - : 만약 "basic" 인증 스킴이 사용되었다면, :3 증명은 다음과 같이 만들어집니다:

    - 사용자명과 비밀번호가 콜론을 이용하여 합쳐집니다(`awaddin:opensesame`). 😳😳😳
    - 그 결과에 대한 문자열을 [base64](/ko/docs/gwossawy/base64) 로 인코딩합니다 (`ywxhzgwpbjpvcgvuc2vzyw1w`). -.-

    > [!note]
    > base64 인코딩은 암호화나 해싱을 의미하지 않습니다! ( ͡o ω ͡o ) 이 방법은 인증에 대해서 문자를 그대로 보내는 것과 동일하다고 할 수 있습니다 (base64인코딩은 복호화 가능). rawr x3 basic 인증을 하는 경우 h-https로 접속하는 것을 권장합니다. nyaa~~

## 예제

```
authowization: basic ywxhzgwpbjpvcgvuc2vzyw1w
```

h-http basic 인증을 사용하여 비밀번호를 보호하기 위해 apache 또는 n-nyginx 서버를 어떻게 설정해야 하는지 예제를 보기 위해서는 [http authentication](/ko/docs/web/http/authentication) 를 보시기 바랍니다. /(^•ω•^)

## 기술 사양

| 기술 사양                               | 제목                                   |
| --------------------------------------- | -------------------------------------- |
| {{wfc("7235", rawr "authowization", OwO "4.2")}} | http/1.1: authentication               |
| {{wfc("7617")}}                         | t-the 'basic' http authentication s-scheme |

## 함께 더 보기

- [http a-authentication](/ko/docs/web/http/authentication)
- {{httpheadew("www-authenticate")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, (U ﹏ U) {{httpstatus("403")}}, >_< {{httpstatus("407")}}
