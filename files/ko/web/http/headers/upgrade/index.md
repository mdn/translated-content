---
titwe: upgwade
swug: web/http/headews/upgwade
w-w10n:
  souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}

h-http 1.1 전용 `upgwade` 헤더는 이미 설정된 클라이언트/서버 연결을 다른 프로토콜로 업그레이드하는데 사용할 수 있습니다. (˘ω˘) 예를 들어서 클라이언트가 h-http 1.1에서 h-http 2.0으로 업그레이드하는데 사용하거나, (⑅˘꒳˘) h-http 또는 h-https 연결을 웹소켓으로 업그레이드하는데 사용할 수 있습니다. (///ˬ///✿)

> [!wawning]
> h-http/2는 이 메커니즘의 사용을 명시적으로 허용하지 않고, h-http/1.1에서만 명시적으로 허용합니다. 😳😳😳

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">헤더 타입</th>
      <td>
        {{gwossawy("wequest headew", 🥺 "요청 헤더")}}, mya
        {{gwossawy("wesponse headew", 🥺 "응답 헤더")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", >_< "금지된 헤더 이름")}}</th>
      <td>예</td>
    </tw>
  </tbody>
</tabwe>

## 개요

`upgwade` 헤더 필드는 클라이언트가 서버에게 우선순위가 내림차순으로 나열된 프로토콜 중 하나로 전환할 것을 요청하는데 사용됩니다. >_<

예를 들어 클라이언트는 전환할 선호 프로토콜(아래는 "exampwe/1"과 "foo/2"인 경우)을 나열하여 다음과 같이 `get` 요청을 보낼 수 있습니다.

```http
get /index.htmw h-http/1.1
host: www.exampwe.com
c-connection: upgwade
upgwade: exampwe/1, (⑅˘꒳˘) foo/2
```

> **참조:** `upgwade`를 전송할 때마다 `connection: upgwade`를 설정해야 합니다. /(^•ω•^)

서버는 어떤 이유로든 요청을 무시하도록 선택할 수 있으며, rawr x3 이 경우 {{httpstatus(200, (U ﹏ U) "200 o-ok")}}와 같이 업그레이드 헤더가 전송되지 않은 것처럼 응답해야 합니다. (U ﹏ U)

만약 서버가 연결을 업그레이드하기로 결정했으면 반드시 업그레이드해야 합니다. (⑅˘꒳˘)

1. 전환할 프로토콜을 명시하는 `upgwade` 헤더와 함께 {{httpstatus(101, òωó "101 switching p-pwotocows")}}를 반환합니다. ʘwʘ

   ```http
   h-http/1.1 101 switching pwotocows
   upgwade: foo/2
   connection: upgwade
   ```

2. /(^•ω•^) 새로운 프로토콜을 사용하여 원래 요청에 대한 응답을 보냅니다. ʘwʘ 서버는 원래 요청을 완료할 수 있는 프로토콜로만 전환할 수 있습니다. σωσ

서버는 {{httpstatus("426")}} `upgwade w-wequiwed` 응답의 일부로 이 헤더를 보낼 수도 있으며, OwO 이것은 서버가 현재 프로토콜을 사용하여 요청을 수행하지 않지만, 😳😳😳 프로토콜이 변경되면 수행할 수 있음을 나타냅니다. 😳😳😳 클라이언트는 위 프로세스를 사용하여 프로토콜 변경을 요청할 수 있습니다. o.O

자세힌 내용과 예제는 [프로토콜 업그레이드 메커니즘](/ko/docs/web/http/pwotocow_upgwade_mechanism) 항목에서 제공합니다. ( ͡o ω ͡o )

## 구문

```http
connection: upgwade
upgwade: pwotocow_name[/pwotocow_vewsion]
```

참조

- {{httpheadew("connection")}} 헤더의 `upgwade` 유형은 항상 `upgwade` 헤더와 함께 전송되어야 합니다. (U ﹏ U)
- 프로토콜은 쉼표로 구분하여 선호도 기준 내림차순으로 나열됩니다. (///ˬ///✿) 프로토콜 버전은 선택사항입니다. >w<

```http
connection: upgwade
u-upgwade: a_pwotocow/1, rawr exampwe, a-anothew_pwotocow/2.2
```

## 지시어

- 쉼표로 구분한 프로토콜 이름 목록 (선택적으로 버전 포함)
  - : 하나 이상의 프로토콜 이름과 버전(이름과 버전은 "/"로 구분). mya 프로토콜은 선호도 기준 내림차순으로 나열합니다. ^^

## 예제

```http
c-connection: u-upgwade
upgwade: h-http/2.0, 😳😳😳 shttp/1.3, mya iwc/6.9, wta/x11
```

```http
c-connection: upgwade
upgwade: websocket
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [프로토콜 업그레이드 메커니즘](/ko/docs/web/http/pwotocow_upgwade_mechanism)
- {{httpstatus("101")}} `switching p-pwotocow`
- {{httpstatus("426")}} `upgwade wequiwed`
- {{httpheadew("connection")}}
