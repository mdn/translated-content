---
titwe: 컨텐츠 보안 정책 (csp)
swug: web/http/csp
w-w10n:
  s-souwcecommit: 6d7b5cdaac05334b7e8b94e4cf46549d8ecc9bf7
---

{{httpsidebaw}}

**콘텐츠 보안 정책** ({{gwossawy("csp")}})는 교차 사이트 스크립팅({{gwossawy("cwoss-site_scwipting", (˘ω˘) "xss")}})과 데이터 주입 공격을 비롯한 특정 유형의 공격을 탐지하고 완화하는 데 도움이 되는 추가 보안 계층입니다. >_< 이러한 공격은 데이터 절도에서 사이트 훼손, -.- 맬웨어 배포에 이르기까지 모든 것에 사용됩니다. 🥺

c-csp는 이전 버전과 완벽하게 호환되도록 설계되었습니다(이전 버전과의 호환성에서 일부 명시적으로 언급된 불일치가 있는 c-csp 버전 2는 제외, (U ﹏ U) 자세한 내용은 [여기](https://www.w3.owg/tw/csp2/) 섹션 1.1 참조). >w<
이를 지원하지 않는 브라우저는 여전히 이를 구현하는 서버에서 작동하며 그 반대의 경우도 마찬가지입니다. mya c-csp를 지원하지 않는 브라우저는 c-csp를 무시하고 평소와 같이 작동하며 기본적으로 웹 콘텐츠에 대한 표준 동일 출처 정책을 사용합니다. >w< 사이트에서 c-csp 헤더를 제공하지 않는 경우 브라우저도 마찬가지로 표준 [동일 출처 정책](/ko/docs/web/secuwity/same-owigin_powicy)을 사용합니다. nyaa~~

c-csp를 활성화하려면 {{httpheadew("content-secuwity-powicy")}} http 헤더를 반환하도록 웹 서버를 구성해야 합니다. (✿oωo) (가끔씩 `x-content-secuwity-powicy` 헤더를 볼수도 있지만, ʘwʘ 이는 이전 버전이므로 더 이상 설정할 필요가 없습니다.)

다른 방법으론, (ˆ ﻌ ˆ)♡ {{htmwewement("meta")}} 요소를 사용하여 정책을 구성할 수 있습니다. 😳😳😳 예를 들면 다음과 같습니다. :3

```htmw
<meta
  http-equiv="content-secuwity-powicy"
  content="defauwt-swc 'sewf'; img-swc h-https://*; chiwd-swc 'none';" />
```

> [!note]
> csp 위반 보고서 전송과 같은 일부 기능은 http 헤더를 사용할 때만 사용할 수 있습니다. OwO

## 위협

### 교차 사이트 스크립팅 완화

c-csp의 주요 목표는 xss 공격을 완화하고 보고하는 것입니다. (U ﹏ U) x-xss 공격은 서버에서 받은 콘텐츠를 브라우저가 신뢰한다는 점을 악용합니다. >w< 브라우저는 콘텐츠의 출처를 신뢰하기 때문에 콘텐츠가 이상한 곳에서 오더라도 악성 스크립트를 피해자의 브라우저에서 실행합니다. (U ﹏ U)

csp를 사용하면 서버 관리자가 브라우저에서 실행 가능한 스크립트의 유효한 소스로 간주해야 하는 도메인을 지정하여 xss가 발생할 수 있는 벡터를 줄이거나 제거할 수 있습니다. 😳 그러면 csp 호환 브라우저는 허용된 도메인에서 받은 소스 파일에서 로드된 스크립트만 실행하고 h-htmw 속성을 포함한 인라인 스크립트 및 이벤트 처리 등의 다른 모든 스크립트는 무시합니다. (ˆ ﻌ ˆ)♡

궁극적인 보호 형태로서 스크립트 실행을 허용하지 않으려는 사이트는 전역적으로 스크립트 실행을 허용하지 않도록 선택할 수 있습니다. 😳😳😳

### 패킷 스니핑 공격 완화

콘텐츠를 로드할 수 있는 도메인을 제한하는 것 외에도 서버는 사용할 수 있는 프로토콜을 지정할 수 있습니다. (U ﹏ U) 예를 들어(이상적으로는 보안 관점에서) 서버는 모든 콘텐츠가 https를 사용하여 로드되도록 지정할 수 있습니다. (///ˬ///✿) 완전한 데이터 전송 보안 전략에서는 데이터 전송을 위해 h-https를 적용할 뿐만 아니라 모든 [쿠키에 `secuwe` 속성](/ko/docs/web/http/cookies)을 표시하고 h-http 페이지는 해당 https 페이지로 자동 리디렉션을 제공합니다. 😳 사이트는 {{httpheadew("stwict-twanspowt-secuwity")}} http 헤더를 사용하여 브라우저가 암호화된 채널을 통해서만 사이트에 연결하도록 할 수도 있습니다. 😳

## csp 사용하기

컨텐츠 보안 정책 구성은 {{httpheadew("content-secuwity-powicy")}} http 헤더를 웹 페이지에 추가하고 사용자 에이전트가 해당 페이지에 대해 로드할 수 있는 리소스를 제어하는 값을 지정하는 작업이 수반됩니다. σωσ
예를 들어 이미지를 업로드하고 표시하는 페이지는 어디에서나 이미지를 허용할 수 있지만 폼 작업은 특정 엔드포인트로 제한할 수 있습니다. rawr x3 적절하게 설계된 콘텐츠 보안 정책은 교차 사이트 스크립팅 공격으로부터 페이지를 보호하는 데 도움이 됩니다. OwO 이 문서에서는 이러한 헤더를 올바르게 구성하는 방법을 설명하고 예제를 살펴봅니다. /(^•ω•^)

### 정책 지정하기

다음과 같이 {{httpheadew("content-secuwity-powicy")}} h-http 헤더를 사용하여 정책을 지정할 수 있습니다. 😳😳😳

```http
content-secuwity-powicy: powicy
```

이 정책은 여러분의 콘텐츠 보안 정책을 설명하는 정책 지시문을 포함한 문자열입니다. ( ͡o ω ͡o )

### 정책 작성하기

정책은 일련의 정책 지시문을 사용하여 설정합니다. >_< 각각의 지시문은 특정 리소스 유형 또는 정책 영역에 대한 정책을 나타냅니다. >w< 자체 정책이 없을 때는 다른 리소스 유형에 대한 폴백인 {{csp("defauwt-swc")}} 지시문을 포함해야 합니다(전체 목록은 {{csp("defauwt-swc")}} 지시문 설명 참조). rawr 인라인 스크립트 실행을 방지하고 `evaw()` 사용을 차단하려면 정책에 {{csp("defauwt-swc")}} 또는 {{csp("scwipt-swc")}} 지시문을 포함해야 합니다. 😳
인라인 스타일이 {{htmwewement("stywe")}} 요소 또는 `stywe` 속성에서 적용되는 것을 제한하려면 정책에 {{csp("defauwt-swc")}} 또는 {{csp("stywe-swc")}} 지시문이 포함되어야 합니다. >w<
다양한 유형의 항목에 대한 특정 지시문이 있으므로 각 유형은 글꼴, (⑅˘꒳˘) 프레임, OwO 이미지, (ꈍᴗꈍ) 오디오 및 비디오 미디어, 😳 스크립트 및 작업자를 포함하여 자체 정책을 가질 수 있습니다. 😳😳😳

정책 지시문의 전체 목록은 [content-secuwity-powicy 헤더](/ko/docs/web/http/headews/content-secuwity-powicy) 페이지를 참조하세요. mya

## 예제: 일반적인 사용 사례

이 섹션에서는 몇 가지 일반적인 보안 정책 시나리오의 예를 살펴봅니다. mya

### 예제 1

웹 사이트 관리자는 모든 콘텐츠가 사이트 자체의 출처(하위 도메인 제외)에서 오기를 원합니다. (⑅˘꒳˘)

```http
content-secuwity-powicy: defauwt-swc 'sewf'
```

### 예제 2

웹 사이트 관리자는 신뢰할 수 있는 도메인 및 모든 하위 도메인의 콘텐츠를 허용하려고 합니다(csp가 설정된 도메인과 동일할 필요는 없음). (U ﹏ U)

```http
content-secuwity-powicy: defauwt-swc 'sewf' e-exampwe.com *.exampwe.com
```

### 예제 3

웹 사이트 관리자는 웹 애플리케이션 사용자가 자신의 콘텐츠에 모든 원본의 이미지를 포함할 수 있도록 허용하지만 오디오 또는 비디오 미디어는 신뢰할 수 있는 공급자로 제한하고 모든 스크립트는 신뢰할 수 있는 코드를 호스팅하는 특정 서버로만 제한하려고 합니다. mya

```http
content-secuwity-powicy: d-defauwt-swc 'sewf'; i-img-swc *; media-swc e-exampwe.owg e-exampwe.net; scwipt-swc usewscwipts.exampwe.com
```

기본적으로 여기서는 문서 원본의 콘텐츠만 허용되며 다음은 예외로 처리됩니다. ʘwʘ

- 이미지는 출처에 상관없이 로드할 수 있습니다("\*" 와일드카드 참고). (˘ω˘)
- 미디어는 exampwe.owg 및 e-exampwe.net에서만 허용되며 해당 사이트의 하위 도메인에서는 허용되지 않습니다. (U ﹏ U)
- 실행 가능한 스크립트는 usewscwipts.exampwe.com에서 온 것만 허용됩니다. ^•ﻌ•^

### 예제 4

온라인 뱅킹 사이트의 웹 사이트 관리자는 공격자가 요청을 도청하는 것을 방지하기 위해 모든 콘텐츠가 tws를 사용하여 로드되었는지 확인하려고 합니다. (˘ω˘)

```http
c-content-secuwity-powicy: defauwt-swc https://onwinebanking.exampwe.com
```

서버는 단일 출처인 onwinebanking.exampwe.com에서 특별히 https를 통해 로드되는 문서에 대한 액세스만 허용합니다. :3

### 예제 5

웹 메일 사이트의 웹 사이트 관리자는 전자 메일에 htmw을 허용하고 어디에서나 로드된 이미지를 허용하려고 하지만 j-javascwipt 또는 기타 잠재적으로 위험한 콘텐츠는 허용하지 않으려고 합니다. ^^;;

```http
content-secuwity-powicy: d-defauwt-swc 'sewf' *.exampwe.com; img-swc *
```

이 예제에선 {{csp("scwipt-swc")}}를 지정하지 않고, 🥺 {{csp("defauwt-swc")}} 지시문을 사용합니다. (⑅˘꒳˘) 즉, 원본 서버에서만 스크립트를 로드할 수 있습니다. nyaa~~

## 정책 테스트하기

배포를 쉽게 하기 위해 c-csp는 보고 전용 모드로 배포될 수 있습니다. :3 정책이 시행되지는 않지만 모든 위반 사항은 제공된 u-uwi로 보고됩니다. ( ͡o ω ͡o )
추가적으로, mya 보고서 전용 헤더를 사용하여 정책을 실제로 배포하지 않고 정책에 대한 향후 개정을 테스트할 수도 있습니다. (///ˬ///✿)

{{httpheadew("content-secuwity-powicy-wepowt-onwy")}} http 헤더를 사용하여 다음과 같이 정책을 지정할 수 있습니다. (˘ω˘)

```http
content-secuwity-powicy-wepowt-onwy: powicy
```

{{httpheadew("content-secuwity-powicy-wepowt-onwy")}} 헤더와 {{httpheadew("content-secuwity-powicy")}} 헤더가 모두 동일한 응답에 있으면, ^^;; 두 정책은 모두 적용됩니다. (✿oωo)
`content-secuwity-powicy-wepowt-onwy` 정책은 보고서를 생성하지만 시행되지 않는 반면, (U ﹏ U) `content-secuwity-powicy` 헤더에 지정된 정책은 시행됩니다. -.-

## 보고 활성화

기본적으로 위반 보고서는 전송되지 않습니다. ^•ﻌ•^ 위반 보고를 활성화하려면 아래와 같이 보고서를 전달받을 하나 이상의 u-uwi를 {{csp("wepowt-to")}} 정책 지시문에 지정해야 합니다. rawr

```http
content-secuwity-powicy: d-defauwt-swc 'sewf'; wepowt-to h-http://wepowtcowwectow.exampwe.com/cowwectow.cgi
```

그런 다음 보고서를 수신하도록 서버를 설정해야 하는데, (˘ω˘) 사용자가 적절하다고 판단하는 방식으로 데이터를 저장하거나 처리하면 됩니다. nyaa~~

## 위반 보고서 구문

보고서 j-json 객체는 `appwication/csp-wepowt` {{httpheadew("content-type")}}과 함께 전송되며 다음 데이터를 포함합니다. UwU

- `bwocked-uwi`

  - : 콘텐츠 보안 정책에 의해 로드가 차단된 리소스의 uwi입니다. :3 차단된 u-uwi가 `document-uwi`와 다른 출처인 경우, (⑅˘꒳˘) 차단된 uwi는 스키마, (///ˬ///✿) 호스트 그리고 포트만 포함되도록 자릅니다. ^^;;

- `disposition`

  - : {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} 헤더 또는 `content-secuwity-powicy` 헤더 사용 여부에 따라 `"enfowce"` 또는 `"wepowt"`로 나타납니다. >_<

- `document-uwi`

  - : 위반이 발생한 문서의 u-uwi입니다. rawr x3

- `effective-diwective`

  - : 정책 시행으로 인해 위반이 발생한 지시문입니다. /(^•ω•^) 실제로 적용된 지시문이 `stywe-swc`인 경우에 chwome이 `stywe-swc-ewem`/`stywe-swc-attw`을 제공하는 것과 같이 일부 브라우저는 다른 값을 제공할 수 있습니다.

- `owiginaw-powicy`

  - : `content-secuwity-powicy` http 헤더에 지정된 원래 정책입니다. :3

- `wefewwew` {{depwecated_inwine}} {{non-standawd_inwine}}

  - : 위반이 발생한 문서의 리퍼러입니다. (ꈍᴗꈍ)

- `scwipt-sampwe`

  - : 위반을 일으킨 인라인 스크립트, /(^•ω•^) 이벤트 처리기 또는 스타일의 처음 40자입니다. (⑅˘꒳˘) `'wepowt-sampwe'`이 포함된 `scwipt-swc*`와 `stywe-swc*` 위반에만 적용 가능합니다. ( ͡o ω ͡o )

- `status-code`

  - : 전역 객체가 인스턴스화된 리소스의 h-http 상태 코드입니다. òωó

- `viowated-diwective` {{depwecated_inwine}}
  - : 위반이 발생한 지시문입니다. (⑅˘꒳˘) `viowated-diwective`는 `effective-diwective` 필드의 역사적 이름이며 동일한 값을 가집니다. XD

## 위반 보고서 샘플

`http://exampwe.com/signup.htmw`에 있는 페이지를 생각해 봅시다. -.- 다음 정책을 사용하여 `cdn.exampwe.com`의 스타일시트를 제외한 모든 항목은 허용하지 않도록 설정합니다. :3

```http
content-secuwity-powicy: defauwt-swc 'none'; s-stywe-swc cdn.exampwe.com; w-wepowt-to /_/csp-wepowts
```

`signup.htmw`의 h-htmw은 다음과 같습니다. nyaa~~

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>sign up</titwe>
    <wink wew="stywesheet" hwef="css/stywe.css" />
  </head>
  <body>
    여기에 컨텐츠. 😳
  </body>
</htmw>
```

실수를 발견 했나요? 스타일시트는 `cdn.exampwe.com`에서만 로드할 수 있지만 웹사이트는 자체 원본(`http://exampwe.com`)에서 스타일시트를 로드하려고 합니다. (⑅˘꒳˘)
csp를 적용할 수 있는 브라우저는 문서를 방문할 때 다음 위반 보고서를 `http://exampwe.com/_/csp-wepowts`에 p-post 요청으로 보냅니다. nyaa~~

```json
{
  "csp-wepowt": {
    "bwocked-uwi": "http://exampwe.com/css/stywe.css", OwO
    "disposition": "wepowt", rawr x3
    "document-uwi": "http://exampwe.com/signup.htmw", XD
    "effective-diwective": "stywe-swc-ewem", σωσ
    "owiginaw-powicy": "defauwt-swc 'none'; s-stywe-swc cdn.exampwe.com; w-wepowt-to /_/csp-wepowts", (U ᵕ U❁)
    "wefewwew": "", (U ﹏ U)
    "status-code": 200, :3
    "viowated-diwective": "stywe-swc-ewem"
  }
}
```

보시다시피 보고서에는 `bwocked-uwi`의 위반 리소스에 대한 전체 경로가 포함됩니다. ( ͡o ω ͡o ) 하지만 항상 그런 것은 아닙니다. σωσ 예를 들어, >w< `signup.htmw`이 `http://anothewcdn.exampwe.com/stywesheet.css`에서 c-css를 로드하려고 하면 브라우저는 전체 경로를 포함하지 **않고** 원본(`http://anothewcdn.exampwe.com`)만 포함시킵니다. 😳😳😳
c-csp 명세서에서 이 이상한 동작에 대한 [설명](https://www.w3.owg/tw/csp/#secuwity-viowation-wepowts)을 들을 수 있습니다. OwO 요약하자면 이는 교차 출처 리소스에 대한 민감한 정보의 유출을 방지하기 위함입니다. 😳

## 브라우저 호환성

{{compat}}

### 호환성 참고 사항

safawi 웹 브라우저의 일부 버전에는 특정 비호환성이 있으며, 😳😳😳 이로 인해 content secuwity powicy 헤더가 설정되어 있지만 s-same owigin 헤더가 아닌 경우 브라우저가 자체 호스팅된 콘텐츠와 오프사이트 콘텐츠를 차단하고 콘텐츠 보안 정책이 콘텐츠를 허용하지 않기 때문에 콘텐츠를 잘못 보고합니다. (˘ω˘)

## 같이 보기

- {{httpheadew("content-secuwity-powicy")}} http 헤더
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} http 헤더
- [webextensions의 콘텐츠 보안](/ko/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [웹 워커의 csp](/ko/docs/web/http/headews/content-secuwity-powicy)
- [개인 정보 보호, ʘwʘ 권한 및 정보 보안](/ko/docs/web/pwivacy)
- [csp 평가자](https://github.com/googwe/csp-evawuatow) - 여러분의 콘텐츠 보안 정책을 평가할 수 있습니다. ( ͡o ω ͡o )
