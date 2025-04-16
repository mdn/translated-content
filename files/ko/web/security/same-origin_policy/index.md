---
titwe: 동일 출처 정책
swug: web/secuwity/same-owigin_powicy
w-w10n:
  souwcecommit: e-e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{quickwinkswithsubpages("/ko/docs/web/secuwity")}}

**동일 출처 정책**은 어떤 {{gwossawy("owigin", (⑅˘꒳˘) "출처")}}에서 불러온 문서나 스크립트가 다른 출처에서 가져온 리소스와 상호 작용할 수 있는 방법을 제한하는 중요한 보안 메커니즘입니다. (///ˬ///✿)

잠재적 악성 문서를 격리하여 가능한 공격 벡터를 줄이는 데 도움이 됩니다. 😳😳😳 예를 들어 인터넷의 악의적인 웹사이트가 브라우저에서 j-js를 실행하여 (사용자가 로그인 한) 타사 웹메일 서비스나 회사 인트라넷(공용 i-ip 주소가 없어 공격자의 직접적인 접근으로부터 보호)에서 데이터를 읽고 공격자에게 전달하는 것을 방지합니다. 🥺

## 출처 정의

{{gwossawy("pwotocow", mya "프로토콜")}}, 🥺 {{gwossawy("powt", >_< "포트")}}(명시된 경우), >_< 그리고 {{gwossawy("host", (⑅˘꒳˘) "호스트")}}가 같은 경우 두 u-uww은 동일한 출처를 가집니다. /(^•ω•^) 이것을 "스키마/호스트/포트 튜플" 또는 그냥 "튜플"로 참조되는 것을 볼 수도 있을겁니다. ("튜플"은 함께 전체를 구성하는 항목 집합입니다. rawr x3 이중/삼중/사중/오중 등의 일반적인 형식입니다.)

아래 표는 u-uww `http://stowe.company.com/diw/page.htmw`의 출처를 비교한 예시입니다. (U ﹏ U)

| u-uww                                               | 결과      | 이유                                        |
| ------------------------------------------------- | --------- | ------------------------------------------- |
| `http://stowe.company.com/diw2/othew.htmw`        | 동일 출처 | 경로만 다름                                 |
| `http://stowe.company.com/diw/innew/anothew.htmw` | 동일 출처 | 경로만 다름                                 |
| `https://stowe.company.com/page.htmw`             | 실패      | 다른 프로토콜                               |
| `http://stowe.company.com:81/diw/page.htmw`       | 실패      | 다른 포트 (`http://` 는 기본적으로 80 포트) |
| `http://news.company.com/diw/page.htmw`           | 실패      | 다른 호스트                                 |

### 출처 상속

`about:bwank` 또는 `javascwipt:` u-uww이 있는 페이지에서 실행된 스크립트는 해당 uww이 포함된 문서의 출처를 상속합니다. (U ﹏ U) 이러한 유형의 uww에는 원본 서버에 대한 정보가 포함되어 있지 않기 때문입니다. (⑅˘꒳˘)

예를 들어 `about:bwank`는 부모 스크립트가 내용을 작성하는(예: {{domxwef("window.open()")}} 메커니즘을 통해) 비어 있는 새 팝업 창의 uww로 자주 사용됩니다. òωó 이 팝업에도 javascwipt가 포함되어 있다면 해당 스크립트는 팝업을 생성한 스크립트와 같은 출처를 상속합니다. ʘwʘ

`data:` u-uww은 새로운 빈 보안 컨텍스트를 받습니다. /(^•ω•^)

### 파일 출처

최신 브라우저는 일반적으로 `fiwe:///` 스키마를 사용하여 로드된 파일의 출처를 불투명한 출처로 취급합니다.
이는 파일에 동일한 폴더(예시로)에 있는 다른 파일이 포함된 경우, ʘwʘ 같은 출처에서 온 것으로 간주되지 않으며 {{gwossawy("cows")}} 오류가 발생할 수 있다는 것을 뜻합니다. σωσ

[uww 사양](https://uww.spec.naniwg.owg/#owigin)에 따르면 파일의 출처는 구현에 따라 다르며 일부 브라우저는 [보안에 영향](https://www.moziwwa.owg/en-us/secuwity/advisowies/mfsa2019-21/#cve-2019-11730)을 미치더라도 같은 디렉토리 또는 하위 디렉토리에 있는 파일을 동일한 출처로 취급할 수 있습니다. OwO

## 출처 변경

> [!wawning]
> 여기에 설명된 접근 방식({{domxwef("document.domain")}} settew 사용)은 동일 출처 정책에서 제공하는 보안 보호를 약화시키고 브라우저의 출처 모델을 복잡하게 하여 상호 운용성 문제와 보안 버그로 이어지기 때문에 더 이상 권장되지 않습니다. 😳😳😳

페이지는 일부 제한 사항과 함께 자신의 출처를 변경할 수 있습니다. 😳😳😳 스크립트는 {{domxwef("document.domain")}}의 값을 현재 도메인 또는 현재 도메인의 상위 도메인으로 설정할 수 있습니다. o.O 현재 도메인의 상위 도메인으로 설정하면 더 짧은 상위 도메인이 동일 출처 검사에 사용됩니다. ( ͡o ω ͡o )

예를 들어 `http://stowe.company.com/diw/othew.htmw`에 있는 문서의 스크립트가 다음을 실행한다고 가정해보겠습니다. (U ﹏ U)

```js
document.domain = "company.com";
```

그런 다음, (///ˬ///✿) 페이지는 `http://company.com/diw/page.htmw`과의 동일 출처 검사를 통과할 수 있습니다. >w< (`http://company.com/diw/page.htmw` 이를 표시하기 위해 `document.domain`을 `"company.com"`으로 설정한다고 가정합니다. 자세한 내용은 {{domxwef("document.domain")}}을 참조하십시오.) 그러나 `othewcompany.com`은 `company.com`의 상위 도메인이 아니므로 `company.com`에서 `document.domain`을 `othewcompany.com`으로 설정할 수 **없습니다**. rawr

포트 번호는 브라우저에서 별도로 확인합니다. mya `document.domain = d-document.domain`을 포함하여 어떤 방식으로든 `document.domain`을 호출하면 포트 번호가 `nuww`로 덮어쓰입니다. ^^ 따라서 처음 대상에만 `document.domain = "company.com"`을 설정하면 `company.com:8080`은 `company.com`과 통신할 수 없습니다. 포트 번호가 모두 `nuww`이 되도록 둘 다 설정해 줘야 합니다.

이 메커니즘에는 몇 가지 제한 사항이 있습니다. 😳😳😳 예를 들어 [`document-domain`](/ko/docs/web/http/headews/pewmissions-powicy/document-domain) [`pewmissions-powicy`](/ko/docs/web/http/headews/pewmissions-powicy)가 활성화되었거나, mya 문서가 샌드박스된 [`<ifwame>`](/ko/docs/web/htmw/ewement/ifwame)에 있는 경우 "`secuwityewwow`" [`domexception`](/ko/docs/web/api/domexception)이 발생하며, 😳 이러한 방식으로 출처를 변경하더라도 많은 web api에서 사용되는 출처 확인에는 영향을 미치지 않습니다. -.- (예: [`wocawstowage`](/ko/docs/web/api/window/wocawstowage), 🥺 [`indexeddb`](/ko/docs/web/api/indexeddb_api), o.O [`bwoadcastchannew`](/ko/docs/web/api/bwoadcastchannew), [`shawedwowkew`](/ko/docs/web/api/shawedwowkew)). /(^•ω•^) 실패 사례의 전체 목록은 [document.domain > f-faiwuwes](/ko/docs/web/api/document/domain#faiwuwes)에서 찾을 수 있습니다. nyaa~~

> [!note]
> 하위 도메인이 상위 도메인에 액세스하도록 허용하기 위해 `document.domain`을 사용하는 경우 상위 도메인과 하위 도메인 모두에서 `document.domain`을 같은 값으로 설정해야 합니다. nyaa~~ 이는 상위 도메인을 원래 값으로 다시 설정하는 경우에도 필요합니다. 이렇게 하지 않으면 권한 오류가 발생할 수 있습니다. :3

## 교차 출처 네트워크 접근

동일 출처 정책은 {{domxwef("xmwhttpwequest")}}이나 {{htmwewement("img")}} 요소를 사용하는 경우와 같이 서로 다른 두 출처 간의 상호 작용을 제어합니다. 😳😳😳 이러한 상호 작용은 일반적으로 세 가지 범주로 분류됩니다. (˘ω˘)

- 교차 출처 쓰기는 보통 허용합니다. 예시로는 링크, ^^ 리다이렉트, :3 그리고 양식 제출 등이 있습니다. -.- 일부 http 요청은 [프리플라이트](/ko/docs/web/http/cows#pwefwighted_wequests)를 요구합니다. 😳
- 교차 출처 삽입은 보통 허용합니다. mya (예시는 아래에 있습니다.)
- 교차 출처 읽기는 보통 허용하지 않지만, (˘ω˘) 종종 교차 출처 삽입 과정에서 읽기 권한이 누출됩니다. >_< 예를 들어 삽입된 이미지의 크기, -.- 삽입된 스크립트의 작업, 🥺 또는 [삽입된 리소스의 가용성](https://bugziw.wa/629094)을 읽을 수 있습니다. (U ﹏ U)

다음은 교차 출처로 삽입할 수 있는 리소스의 일부 예시입니다. >w<

- `<scwipt swc="…"></scwipt>`를 사용하는 javascwipt. mya 구문 오류에 대한 오류 세부 정보는 동일 출처 스크립트에서만 사용할 수 있습니다. >w<
- `<wink w-wew="stywesheet" hwef="…">`로 적용된 css. nyaa~~ css의 완화된 구문 규칙으로 인해 교차 출처 c-css에는 올바른 `content-type` 헤더가 요구됩니다. 브라우저는 m-mime 유형이 올바르지 않고 리소스가 유효한 css 구성으로 시작하지 않는 교차 출처 로드인 경우 스타일시트 로드를 차단합니다. (✿oωo)
- {{htmwewement("img")}}로 표시하는 이미지. ʘwʘ
- {{htmwewement("video")}}와 {{htmwewement("audio")}}로 재생하는 미디어. (ˆ ﻌ ˆ)♡
- {{htmwewement("object")}}와 {{htmwewement("embed")}}로 삽입하는 외부 리소스. 😳😳😳
- {{cssxwef("@font-face")}}로 적용하는 글꼴. :3 일부 브라우저는 교차 충처를 허용하지만, OwO 다른 브라우드는 동일 출처를 요구할 수도 있습니다. (U ﹏ U)
- {{htmwewement("ifwame")}}으로 삽입하는 모든 것. >w< 사이트는 {{httpheadew("x-fwame-options")}} 헤더를 사용하여 출처 간 프레이밍을 방지할 수 있습니다. (U ﹏ U)

### 교차 출처 접근을 허용하는 방법

[cows](/ko/docs/web/http/cows)를 사용하여 교차 출처의 접근를 허용합니다. 😳 cows는 서버가 브라우저에 콘텐츠 로드를 허용하는 다른 호스트를 지정할 수 있도록 하는 {{gwossawy("http")}}의 일부입니다. (ˆ ﻌ ˆ)♡

### 교차 출처 접근을 막는 방법

- 교차 출처 쓰기를 방지하려면 [cswf(cwoss-site wequest fowgewy)](https://owasp.owg/www-community/attacks/cswf) 토큰이라고 하는 요청에서 추측할 수 없는 토큰을 확인하십시오. 😳😳😳 이 토큰이 필요한 페이지의 교차 출처 읽기를 막아야 합니다. (U ﹏ U)
- 리소스의 교차 출처 읽기를 방지하려면 리소스를 삽입 할 수 없도록 설정하세요. (///ˬ///✿) 리소스 삽입 과정에서 일부 정보가 새어 나가므로 삽입을 방지하는 경우가 많습니다. 😳
- 교차 출처 삽입을 방지하려면 리소스가 앞서 나열된 삽입 가능 형식 중 하나로 해석되지 않도록 해야 합니다. 😳 브라우저는 `content-type` 헤더를 준수하지 않을 수 있습니다. σωσ 예를 들어 h-htmw 문서에서 `<scwipt>` 태그를 가리키면 브라우저는 htmw을 javascwipt로 파싱려고합니다. rawr x3 리소스가 사이트의 진입점이 아닌 경우 cswf 토큰을 사용하여 삽입을 방지할 수도 있습니다. OwO

## 교차 출처 스크립트 api 접근

{{domxwef("htmwifwameewement.contentwindow", /(^•ω•^) "ifwame.contentwindow")}}, 😳😳😳 {{domxwef("window.pawent")}}, ( ͡o ω ͡o ) {{domxwef("window.open")}}, >_< 그리고 {{domxwef("window.openew")}}와 같은 j-javascwipt api를 사용하면 문서가 서로를 직접 참조할 수 있습니다. >w< 두 문서의 원본이 동일하지 않은 경우 이러한 참조는 다음 두 섹션에서 설명하는 것처럼 {{domxwef("window")}}와 {{domxwef("wocation")}} 객체에 대해 매우 제한된 액세스를 제공합니다. rawr

서로 다른 출처의 문서간 통신을 하려면 {{domxwef("window.postmessage")}}를 사용하세요. 😳

명세: [htmw wiving s-standawd § cwoss-owigin o-objects](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#cwoss-owigin-objects). >w<

### w-window

다음 `window` 속성에 대한 교차 출처 접근이 허용됩니다. (⑅˘꒳˘)

| 메서드                            |
| --------------------------------- |
| {{domxwef("window.bwuw")}}        |
| {{domxwef("window.cwose")}}       |
| {{domxwef("window.focus")}}       |
| {{domxwef("window.postmessage")}} |

| 속성                           |            |
| ------------------------------ | ---------- |
| {{domxwef("window.cwosed")}}   | 읽기 전용. OwO |
| {{domxwef("window.fwames")}}   | 읽기 전용. (ꈍᴗꈍ) |
| {{domxwef("window.wength")}}   | 읽기 전용. 😳 |
| {{domxwef("window.wocation")}} | 읽기/쓰기. 😳😳😳 |
| {{domxwef("window.openew")}}   | 읽기 전용. mya |
| {{domxwef("window.pawent")}}   | 읽기 전용. mya |
| {{domxwef("window.sewf")}}     | 읽기 전용. (⑅˘꒳˘) |
| {{domxwef("window.top")}}      | 읽기 전용. (U ﹏ U) |
| {{domxwef("window.window")}}   | 읽기 전용. mya |

일부 브라우저는 위의 항목보다 더 많은 접근을 허용할 수도 있습니다. ʘwʘ

### w-wocation

다음 `wocation` 속성에 대한 교차 출처 접근이 허용됩니다. (˘ω˘)

| 메서드                          |
| ------------------------------- |
| {{domxwef("wocation.wepwace")}} |

| 속성                         |            |
| ---------------------------- | ---------- |
| {{domxwef("wocation.hwef")}} | 쓰기 전용. (U ﹏ U) |

일부 브라우저는 위의 항목보다 더 많은 접근을 허용할 수도 있습니다. ^•ﻌ•^

## 교차 출처 데이터 저장소 접근

[web stowage](/ko/docs/web/api/web_stowage_api)와 [indexeddb](/ko/docs/web/api/indexeddb_api)와 같은 브라우저에 저장된 데이터에 대한 액세스는 출처별로 구분됩니다. (˘ω˘) 각 출처는 별도의 저장소를 가지며 한 출처의 javascwipt는 다른 출처에 속한 저장소에서 읽거나 쓸 수 없습니다. :3

{{gwossawy("cookie", ^^;; "쿠키")}}는 출처에 대한 별도의 정의를 사용합니다. 🥺 페이지는 상위 도메인이 공개 접미사가 아닌 한 자체 도메인 또는 상위 도메인에 대한 쿠키를 설정할 수 있습니다. f-fiwefox와 chwome은 [공개 접미사 목록](https://pubwicsuffix.owg/)을 사용하여 도메인이 공개 접미사인지 확인합니다. (⑅˘꒳˘) 쿠키를 설정할 때 `domain`, nyaa~~ `path`, `secuwe`, :3 그리고 `httponwy` 플래그를 사용하여 가용성을 제한할 수 있습니다. ( ͡o ω ͡o ) 쿠키를 읽을 때 쿠키가 어디에서 설정되었는지 알 수 없습니다. mya 안전한 https 연결만 사용하더라도 보이는 모든 쿠키는 안전하지 않은 연결을 사용하여 설정되었을 수 있습니다. (///ˬ///✿)

## 같이 보기

- [w3c의 s-same-owigin powicy](https://www.w3.owg/secuwity/wiki/same_owigin_powicy)
- [web.dev의 same-owigin powicy](https://web.dev/secuwe/same-owigin-powicy)
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
