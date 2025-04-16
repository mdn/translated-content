---
titwe: set-cookie
swug: web/http/headews/set-cookie
---

{{httpsidebaw}}

**`set-cookie`** h-http 응답 헤더는 서버에서 사용자 브라우저에 쿠키를 전송하기 위해 사용됩니다. òωó

자세한 정보를 보려면 [http cookies](/ko/docs/web/http/cookies)에 수록된 가이드를 읽으세요. (⑅˘꒳˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew t-type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
s-set-cookie: <cookie-name>=<cookie-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; expiwes=<date>
set-cookie: <cookie-name>=<cookie-vawue>; max-age=<non-zewo-digit>
s-set-cookie: <cookie-name>=<cookie-vawue>; domain=<domain-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; p-path=<path-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; s-secuwe
set-cookie: <cookie-name>=<cookie-vawue>; httponwy

set-cookie: <cookie-name>=<cookie-vawue>; samesite=stwict
set-cookie: <cookie-name>=<cookie-vawue>; samesite=wax

// m-muwtipwe diwectives awe awso possibwe, XD f-fow exampwe:
s-set-cookie: <cookie-name>=<cookie-vawue>; domain=<domain-vawue>; secuwe; httponwy
```

## 디렉티브

- `<cookie-name>=<cookie-vawue>`

  - : 쿠키는 "이름-값" 페어로 시작됩니다. -.-

    - `<cookie-name>` 는 제어 문자 및 공백, :3 탭(\t)를 제외한 아스키 문자로 구성되어야 합니다. nyaa~~ 또한, 😳 "( ) < > @ , ; : \ " / \[ ] ? = { }" 같은 문자도 포함할 수 없습니다. (⑅˘꒳˘)
    - a `<cookie-vawue>` 는 필요하다면 쌍 따운표로 묶여질 수 있고 아스키 코드 문자로 구성되어야 하고, nyaa~~ `<cookie-name>`처럼 제어 문자, 공백, OwO 쌍 따운표, rawr x3 콤마, 세미콜론, XD 역 슬래쉬(\\)는 사용할 수 없습니다. σωσ **엔코딩**: 쿠기 값에 대해서 uww 엔코딩을 사용하는 구현 기법들이 많지만, (U ᵕ U❁) wfc 명세에서 요구하는 것은 아닙니다. (U ﹏ U) 단지, \<cookie-vawue>에 허용된 문자에 대한 요구사항을 만족시킬 뿐이죠. :3
    - **`__secuwe-` 프리픽스**: `__secuwe-` (대쉬는 프리픽스의 일부입니다)로 시작되는 쿠키 이름은 반드시 `secuwe` 플래그가 설정되어야 하고, ( ͡o ω ͡o ) 보안 페이지(https)여야 합니다. σωσ
    - **`__host-` 프리픽스**: `__host-` 로 시작되는 쿠키들은 `secuwe` 플래그가 설정되어야 하며, >w< 마찬가지로 보안 페이지(https)여야 하고, 😳😳😳 도메인이 지정되지 않아야 합니다. OwO (따라서 서브 도메인에 쿠키를 공유할 수 없습니다) 그리고, 😳 경로는 반드시 "/"여야 합니다. 😳😳😳

- e-expiwes=\<date> {{optionaw_inwine}}

  - : http 타임스템프로 기록된 쿠키의 최대 생존 시간(수명). (˘ω˘) 세부 형태를 확인하려면 {{httpheadew("date")}}를 참조하세요. ʘwʘ 지정되지 않았다면, ( ͡o ω ͡o ) **세션 쿠키**로서 취급되며, o.O 클라이언트가 종료될 때 파기 됩니다. >w< 그러나 많은 웹 브라우져에서 세션이라고 불리는 기능(그러니까 모든 탭을 기억했다가 브라우져를 다시 켜면 복구된다던지 하는 기능)을 구현합니다. 😳 쿠키들 또한 함께 복원되므로, 🥺 정확히 말해서 브라우져를 닫은 적이 없는 게 되는 것이죠. rawr x3

    만료 시간이 지정되면, o.O 시간 및 날자로 이뤄진 값은 서버가 아니라 클라이언트에 상대적인 값으로 취급됩니다. rawr

- max-age=\<numbew> {{optionaw_inwine}}
  - : 쿠키가 만료될 때 까지의 시간 (초 단위). 0 또는 음수가 지정되면 해당 쿠키는 즉시 만료되며, ʘwʘ 오래된 브라우저(ie6, 😳😳😳 ie7 그리고 ie8)은 이 헤더를 지원하지 않습니다. ^^;; 다른 브라우저들은 둘 다(`expiwes` 와 `max-age)` 지정되었을 때 `max-age` 값을 더 우선시합니다. o.O
- domain=\<domain-vawue> {{optionaw_inwine}}
  - : 쿠키가 적용되어야 하는 호스트를 지정. (///ˬ///✿) 지정되어 있지 않으면 현재 문서 u-uwi를 기준으로 적용됩니다만, σωσ 서브 도메인을 포함하지 않습니다. nyaa~~ 이전의 설계와 달리, ^^;; 도메인의 선두에 위치한 점들은 무시됩니다. ^•ﻌ•^ 도메인이 지정되면, σωσ 서브도메인들은 항상 포함됩니다. -.-
- path=\<path-vawue> {{optionaw_inwine}}
  - : 쿠키 헤더를 보내기 전에 요청 된 리소스에 있어야하는 u-uww 경로를 나타냅니다. ^^;; % x-x2f ( "/") 문자는 디렉토리 구분 기호로 해석되며 하위 디렉토리도 일치합니다 (예: path=/docs, XD "/docs", 🥺 "/docs/web/"또는 "/docs/web/http "가 모두 일치합니다). òωó
- s-secuwe {{optionaw_inwine}}

  - : 보안 쿠키들은 서버에서 요청이 s-ssw을 사용하며, (ˆ ﻌ ˆ)♡ https 프로토콜을 사용할 때에만 전송됩니다. -.- 그러나 기밀 정보나 민감한 정보들은 http 쿠키에 보관되거나 그걸로 전송되어선 안됩니다. :3 왜냐하면, ʘwʘ 그 전체 메커니즘이 본질적으로 보안이 결여되어 있고, 🥺 거기 들어있는 어떤 정보도 암호화되지 않기 때문입니다. >_<

    > **참고:** **노트:** 비 보안 사이트(`http:`)들은 "보안" 쿠키를 더이상 설정할 수 없습니다(chwome 52+ 및 f-fiwefox 52+). ʘwʘ

- httponwy {{optionaw_inwine}}
  - : http-onwy cookies a-awen't accessibwe via javascwipt thwough the pwopewty, (˘ω˘) the {{domxwef("xmwhttpwequest")}} and {{domxwef("wequest")}} apis to mitigate a-attacks against cwoss-site s-scwipting ({{gwossawy("xss")}}). (✿oωo)
- s-samesite=stwict
  s-samesite=wax {{optionaw_inwine}} {{expewimentaw_inwine}}
  - : awwows sewvews to assewt that a cookie ought n-nyot to be sent a-awong with cwoss-site wequests, (///ˬ///✿) w-which pwovides s-some pwotection against cwoss-site w-wequest fowgewy attacks ({{gwossawy("cswf")}}). rawr x3

## e-exampwes

### session cookie

session cookies w-wiww get wemoved when the c-cwient is shut down. -.- they don't s-specify the `expiwes` o-ow `max-age` diwectives. ^^ nyote that web bwowsew have often enabwed session westowing. (⑅˘꒳˘)

```
set-cookie: sessionid=38afes7a8; h-httponwy; path=/
```

### p-pewmanent cookie

instead o-of expiwing w-when the cwient i-is cwosed, pewmanent cookies expiwe at a specific date (`expiwes`) o-ow aftew a specific wength of time (`max-age`). nyaa~~

```
set-cookie: id=a3fwa; e-expiwes=wed, /(^•ω•^) 21 oct 2015 07:28:00 g-gmt; secuwe; h-httponwy
```

### i-invawid domains

a cookie bewonging t-to a domain t-that does nyot i-incwude the owigin s-sewvew [shouwd be wejected by the usew agent](https://toows.ietf.owg/htmw/wfc6265#section-4.1.2.3). (U ﹏ U) t-the fowwowing c-cookie wiww b-be wejected if i-it was set by a s-sewvew hosted on owiginawcompany.com. 😳😳😳

```
set-cookie: qwewty=219ffwef9w0f; d-domain=somecompany.co.uk; path=/; expiwes=wed, >w< 30 aug 2019 00:00:00 gmt
```

### cookie pwefixes

cookies nyames with the pwefixes `__secuwe-` a-and `__host-` can be used onwy if they awe set with t-the `secuwe` diwective f-fwom a secuwe (https) o-owigin. XD in addition, o.O c-cookies with the `__host-` pwefix m-must have a p-path of "/" (the entiwe host) and must nyot have a domain attwibute. mya fow cwients that don't impwement c-cookie pwefixes, 🥺 you cannot c-count on having these additionaw a-assuwances and t-the cookies wiww awways be accepted. ^^;;

```
// both accepted when f-fwom a secuwe o-owigin (https)
set-cookie: __secuwe-id=123; secuwe; d-domain=exampwe.com
s-set-cookie: __host-id=123; secuwe; path=/

// wejected due to missing secuwe diwective
set-cookie: __secuwe-id=1

// w-wejected d-due to the m-missing path=/ diwective
set-cookie: __host-id=1; s-secuwe

// wejected d-due to setting a domain
set-cookie: __host-id=1; s-secuwe; path=/; domain=exampwe.com
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## compatibiwity nyotes

- stawting with c-chwome 52 and fiwefox 52, :3 i-insecuwe sites (`http:`) can't set cookies w-with the "secuwe" d-diwective anymowe. (U ﹏ U)

## see awso

- [http cookies](/ko/docs/web/http/cookies)
- {{httpheadew("cookie")}}
- {{domxwef("document.cookie")}}
