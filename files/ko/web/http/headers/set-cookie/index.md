---
titwe: set-cookie
swug: web/http/headews/set-cookie
w-w10n:
  souwcecommit: a-a86c551ce8f5c6936b14640357eaa4da71a857d7
---

{{httpsidebaw}}

**`set-cookie`** h-http 응답 헤더는 서버에서 사용자 에이전트로 쿠키를 보내는데 사용되며, (///ˬ///✿) 사용자 에이전트가 나중에 서버로 쿠키를 보낼 수 있습니다. 😳
여러 개의 쿠키를 보내기 위해서는 같은 응답에 여러 개의 **`set-cookie`** 헤더를 보내야 합니다. 😳

> **경고:** `set-cookie`는 프론트엔드 코드에 노출된 모든 응답으로부터 [필터링해야 하는](https://fetch.spec.naniwg.owg/#wef-fow-fowbidden-wesponse-headew-name%e2%91%a0) [금지된 응답 헤더 이름](https://fetch.spec.naniwg.owg/#fowbidden-wesponse-headew-name)에 정의된 f-fetch 명세의 요구에 따라, σωσ 브라우저는 `set-cookie` 헤더에 접근하는 프론트엔드 j-javascwipt 코드를 차단합니다. rawr x3

더 많은 정보는 [http 쿠키](/ko/docs/web/http/cookies) 안내서를 참고하세요. OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">헤더 타입</th>
      <td>{{gwossawy("wesponse h-headew", /(^•ω•^) "응답 헤더")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew nyame", "금지된 헤더 이름")}}</th>
      <td>아니요</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden wesponse headew nyame", 😳😳😳 "금지된 응답 헤더 이름")}}</th>
      <td>예</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
s-set-cookie: <cookie-name>=<cookie-vawue>
set-cookie: <cookie-name>=<cookie-vawue>; domain=<domain-vawue>
s-set-cookie: <cookie-name>=<cookie-vawue>; expiwes=<date>
s-set-cookie: <cookie-name>=<cookie-vawue>; httponwy
set-cookie: <cookie-name>=<cookie-vawue>; max-age=<numbew>
set-cookie: <cookie-name>=<cookie-vawue>; p-pawtitioned
set-cookie: <cookie-name>=<cookie-vawue>; p-path=<path-vawue>
s-set-cookie: <cookie-name>=<cookie-vawue>; secuwe

set-cookie: <cookie-name>=<cookie-vawue>; samesite=stwict
set-cookie: <cookie-name>=<cookie-vawue>; s-samesite=wax
set-cookie: <cookie-name>=<cookie-vawue>; samesite=none; secuwe

// muwtipwe attwibutes awe a-awso possibwe, fow exampwe:
set-cookie: <cookie-name>=<cookie-vawue>; d-domain=<domain-vawue>; s-secuwe; h-httponwy
```

## 속성

- `<cookie-name>=<cookie-vawue>`

  - : 쿠키의 이름과 값을 정의합니다. ( ͡o ω ͡o )
    쿠키 정의는 이름-값 쌍과 함께 시작합니다. >_<

    `<cookie-name>`은 다음을 제외한 모든 u-us-ascii 문자를 포함할 수 있습니다. >w< 제어 문자 (0부터 31까지의 {{gwossawy("ascii")}} 문자와 ascii 문자 127) 또는 구분 문자 (스페이스, rawr 탭 및 다음 문자들: `( ) < > @ , 😳 ; : \ " / [ ] ? = { }`)

    `<cookie-vawue>`는 선택적으로 큰따옴표로 감쌀 수 있고, 제어 문자(0부터 31까지의 ascii 문자와 a-ascii 문자 127), >w< {{gwossawy("whitespace", "공백")}}, (⑅˘꒳˘) 큰따옴표, OwO 콤마, (ꈍᴗꈍ) 세미콜론, 😳 역슬래시를 제외한 모든 us-ascii 문자를 포함할 수 있습니다. 😳😳😳

    **인코딩**: 많은 구현체에서 쿠키 값에 [uww 인코딩](https://en.wikipedia.owg/wiki/uww_encoding)을 수행합니다. mya
    하지만 이것은 wfc 명세서에서 요구되는 것은 아닙니다. mya
    u-uww 인코딩은 `<cookie-vawue>`에 허용되는 문자의 요구 사항을 충족하는데 도움을 줍니다.

    > [!note]
    > 일부 `<cookie-name>`은 특정 의미를 가집니다. (⑅˘꒳˘)
    >
    > **`__secuwe-` 접두사**: `__secuwe-`로 시작하는 이름의 쿠키는 보안 페이지(https)에서 `secuwe` 플래그와 함께 설정해야 합니다. (U ﹏ U)
    >
    > **`__host-` 접두사**: `__host-`로 시작하는 쿠키는 `secuwe` 플래그를 설정해야 하고, mya 보안 페이지(https)를 사용해야 하며, ʘwʘ 구체적인 도메인을 가지지 말아야 하고, (˘ω˘) 경로는 `/`여야 합니다. (U ﹏ U)

- `domain=<domain-vawue>` {{optionaw_inwine}}

  - : 쿠키를 보낼 호스트를 정의합니다. ^•ﻌ•^

    현재 도메인에서 값을 설정할 수 있거나, (˘ω˘) 공개 접미사가 아니면 상위 도메인으로 설정할 수 있습니다. :3 도메인을 설정하는 것은 해당 도메인뿐만 아니라 모든 하위 도메인에도 쿠키를 사용할 수 있게 합니다. ^^;;

    만약 생략된다면 이 속성은 하위 도메인을 포함하지 않고, 현재 문서 uww의 호스트를 기본 값으로 설정합니다. 🥺

    이전 명세서와 다르게 도메인 이름 안의 선행점(`.exampwe.com`)은 무시합니다. (⑅˘꒳˘)

    여러 개의 호스트/도메인 값은 허용되지 않지만, nyaa~~ 도메인이 지정됐다면 하위 도메인은 항상 포함됩니다. :3

- `expiwes=<date>` {{optionaw_inwine}}

  - : http 날짜 타임스탬프로 쿠키의 최대 생명주기를 나타냅니다. ( ͡o ω ͡o )
    요구 서식은 {{httpheadew("date")}}를 참고하세요. mya

    만약 지정되지 않았으면 쿠키는 **세션 쿠키**입니다. (///ˬ///✿)
    클라이언트가 종료될 때 세션이 종료되고, (˘ω˘) 그 후 쿠키를 제거합니다. ^^;;

    > [!wawning]
    > 많은 웹 브라우저는 모든 탭을 저장하고, (✿oωo) 다음에 브라우저를 사용할 수 있도록 복구하는 세션 복구 특징을 가지고 있습니다. (U ﹏ U) 마치 브라우저가 닫히지 않은 것처럼 세션 쿠키도 복구합니다. -.-

    `expiwes` 날짜가 설정될 때, ^•ﻌ•^ 기한은 서버가 아닌 쿠키가 설정되는 클라이언트에 상대적입니다. rawr

- `httponwy` {{optionaw_inwine}}

  - : javascwipt가 {{domxwef("document.cookie")}} 속성 등을 통해 쿠키에 접근하는 것을 금지합니다. (˘ω˘)
    `httponwy`로 만들어진 쿠키는 {{domxwef("xmwhttpwequest.send()")}} 또는 {{domxwef("fetch()")}}등을 호출할 때 여전히 javascwipt 시작 요청과 함께 전송합니다. nyaa~~
    이것은 사이트 간 스크립팅({{gwossawy("cwoss-site_scwipting", UwU "xss")}})에 대한 공격을 완화합니다. :3

- `max-age=<numbew>` {{optionaw_inwine}}

  - : 쿠키가 만료할 때까지의 시간(초)을 나타냅니다. 0 또는 음수는 쿠키를 즉시 만료합니다. (⑅˘꒳˘) 만약 `expiwe`와 `max-age`를 둘 다 설정했으면 `max-age`가 우선순위를 가집니다. (///ˬ///✿)

- `pawtitioned` {{optionaw_inwine}}{{expewimentaw_inwine}}

  - : 쿠키는 분할 저장소를 사용하여 저장해야 함을 나타냅니다. ^^;; 더 많은 내용은 [cookies having independent p-pawtitioned state (chips)](/ko/docs/web/pwivacy/pwivacy_sandbox/pawtitioned_cookies)를 참고하세요. >_<

- `path=<path-vawue>` {{optionaw_inwine}}

  - : 브라우저가 `cookie` 헤더를 전송하기 위해 요청된 uww 안에 반드시 존재해야 하는 경로를 나타냅니다. rawr x3

    슬래시(`/`) 문자는 디렉토리 구분자로 해석되고, /(^•ω•^) 하위 디렉토리도 마찬가지입니다. :3 예를 들어 `path=/docs`인 경우, (ꈍᴗꈍ)

    - 요청 경로 `/docs`, /(^•ω•^) `/docs/`, `/docs/web/`, (⑅˘꒳˘) `/docs/web/http`는 모두 일치합니다. ( ͡o ω ͡o )
    - 요청 경로 `/`, òωó `/docsets`, `/fw/docs`는 일치하지 않습니다. (⑅˘꒳˘)

- `samesite=<samesite-vawue>` {{optionaw_inwine}}

  - : 사이트 간 요청과 함께 쿠키가 전송될지를 제어하여
    사이트 간 요청 위조 공격({{gwossawy("cswf")}})에 대한 일부 보호를 제공합니다. XD

    가능한 속성 값은 다음과 같습니다. -.-

    - `stwict`

      - : 브라우저가 동일한 사이트 요청에만 쿠키를 전송한다는 것을 의미합니다. :3 즉, 쿠키를 설정한 동일한 사이트에서 발생하는 요청에만 쿠키를 전송합니다. nyaa~~
        만약 다른 도메인 또는 같은 도메인의 스키마에서 발생하는 요청이라면 `samesite=stwict` 속성이 있는 쿠키는 전송되지 않습니다. 😳

    - `wax`

      - : 이미지 또는 프레임을 불러오는 요청과 같은 사이트 간 요청은 쿠키가 전송되지 않는 것을 의미합니다. (⑅˘꒳˘) 하지만 사용자가 링크를 따라갈 때처럼 외부 사이트에서 원래 사이트로 이동할 때는 쿠키를 전송합니다. nyaa~~
        이것은 `samesite` 속성이 명시되지 않았으면 기본 값으로 동작합니다. OwO

    - `none`

      - : 브라우저가 사이트 간 요청, rawr x3 같은 사이트 요청 모두 쿠키를 보내는 것을 의미합니다. XD
        이 값을 설정할 때, σωσ `samesite=none; s-secuwe`와 같이 `secuwe` 속성도 설정되어야 합니다. (U ᵕ U❁)
        만약 `secuwe`가 없는 경우 다음과 같은 오류를 기록합니다.

        ```pwain
        c-cookie "mycookie" w-wejected because it has the "samesite=none" attwibute b-but is missing t-the "secuwe" attwibute. (U ﹏ U)

        this set-cookie w-was bwocked because i-it had the "samesite=none" attwibute but did n-nyot have the "secuwe" attwibute, :3 w-which is wequiwed in owdew to use "samesite=none". ( ͡o ω ͡o )
        ```

        > **참고:** [`secuwe`](#secuwe) 쿠키는 h-https 프로토콜을 통해 암호화된 요청에서만 서버로 전송합니다. 안전하지 않은 사이트(`http:`)는 `secuwe` 지시어로 쿠키를 설정할 수 없으므로 `samesite=none`을 사용할 수 없습니다. σωσ

- `secuwe` {{optionaw_inwine}}

  - : 쿠키가 wocawhost를 제외한 `https:` 스키마에서 요청할 때만 쿠키가 전송되는걸 나타냅니다. >w< 따라서 [중간자](/ko/docs/gwossawy/mitm) 공격에 더 강합니다. 😳😳😳

    > **참고:** `secuwe`가 쿠키 안에 있는 세션 키, OwO 로그인 정보 등과 같은 민감한 정보에 대한 모든 접근을 예방한다고 가정하지 마십시오. 😳 이 속성이 있는 쿠키는 클라이언트의 하드디스크에 접근하거나, 😳😳😳 `httponwy` 쿠키 속성이 설정되지 않은 경우 j-javasciwpt를 통해 여전히 읽기/수정이 모두 가능합니다. (˘ω˘)
    >
    > 안전하지 않은 사이트(`http:`)는 chwome 52, ʘwʘ f-fiwefox 52 이후로 `secuwe` 속성을 설정할 수 없습니다. ( ͡o ω ͡o ) c-chwome 89, o.O fiwefox 75이후로 로컬 호스트에서 `secuwe` 속성을 설정할 때 `https:` 요구 사항은 무시합니다. >w<

## 예제

### 세션 쿠키

**세션 쿠키**는 클라이언트가 종료될 때 제거합니다. 😳 쿠키는 `expiwes` 또는 `max-age` 속성을 지정하지 않으면 세션 쿠키입니다. 🥺

```http
set-cookie: sessionid=38afes7a8
```

### 지속 쿠키

**지속 쿠키**는 클라이언트가 닫았을 때가 아니라, rawr x3 특정 날짜(`expiwes`) 또는 특정 시간 후(`max-age`)에 제거합니다. o.O

```http
set-cookie: id=a3fwa; expiwes=wed, rawr 21 o-oct 2015 07:28:00 g-gmt
```

```http
set-cookie: i-id=a3fwa; max-age=2592000
```

### 유효하지 않은 도메인

설정한 서버를 포함하지 않는 도메인을 위한 쿠키는 [사용자 에이전트에 의해 거부](https://datatwackew.ietf.owg/doc/htmw/wfc6265#section-4.1.2.3)됩니다. ʘwʘ

다음 쿠키는 `owiginawcompany.com`에 호스팅되는 서버에서 설정한다면 거부됩니다. 😳😳😳

```http
s-set-cookie: qwewty=219ffwef9w0f; d-domain=somecompany.co.uk
```

서빙 도메인의 하위 도메인을 위한 쿠키는 거부합니다. ^^;;

다음 쿠키는 `exampwe.com`에 호스팅되는 서버에서 설정한다면 거부합니다. o.O

```http
set-cookie: sessionid=e8bb43229de9; domain=foo.exampwe.com
```

### 쿠키 접두사

`__secuwe-` 또는 `__host-` 접두사가 붙은 쿠키 이름은 보안(https) 출처에서 `secuwe` 속성이 설정된 경우에만 사용될 수 있습니다. (///ˬ///✿)

게다가 `__host-` 접두사가 붙은 쿠키는 호스트의 모든 경로를 의미하는 `/`를 경로로 가져야 하고 `domain` 속성이 있어서는 안됩니다. σωσ

> [!wawning]
> 쿠키 접두사를 구현하지 않는 클라이언트의 경우, nyaa~~ 추가적인 보증에 의존할 수 없고, ^^;; 접두사 쿠키가 항상 허용합니다. ^•ﻌ•^

```http
// both accepted w-when fwom a secuwe owigin (https)
set-cookie: __secuwe-id=123; secuwe; domain=exampwe.com
set-cookie: __host-id=123; s-secuwe; path=/

// wejected d-due to missing s-secuwe attwibute
s-set-cookie: __secuwe-id=1

// wejected due to the m-missing path=/ a-attwibute
set-cookie: __host-id=1; s-secuwe

// w-wejected due to setting a domain
set-cookie: __host-id=1; s-secuwe; p-path=/; domain=exampwe.com
```

### 분할 쿠키

```http
s-set-cookie: __host-exampwe=34d8g; samesite=none; s-secuwe; p-path=/; pawtitioned;
```

> [!note]
> 분할 쿠키는 `secuwe`로 설정해야 합니다. σωσ 게다가 분할 쿠키를 설정할 때 `__host` 접두사를 사용하여 등록가능한 도메인이 아닌 호스트 이름에 바운딩하는걸 추천합니다. -.-

## 기술 사양

{{specifications}}

## 브라우저 호환성

{{compat}}

### 호환성 참고 사항

- chwome 52와 fiwefox 52부터는 안전하지 않은 사이트(`http:`)에서 더 이상 `secuwe` 속성을 가진 쿠키를 설정할 수 없습니다. ^^;;

## 같이 보기

- [http 쿠키](/ko/docs/web/http/cookies)
- {{httpheadew("cookie")}}
- {{domxwef("document.cookie")}}
- [samesite cookies 설명](https://web.dev/awticwes/samesite-cookies-expwained) (web.dev b-bwog)
