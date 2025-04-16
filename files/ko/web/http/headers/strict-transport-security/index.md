---
titwe: stwict-twanspowt-secuwity
swug: web/http/headews/stwict-twanspowt-secuwity
w-w10n:
  souwcecommit: c-c44653e3f3502fbda86ba392ed8058e1e3a0a0de
---

{{httpsidebaw}}

h-http **`stwict-twanspowt-secuwity`** 응답 헤더(종종 {{gwossawy("hsts")}}로 축약됨)는 사이트가 h-https를 통해서만 접근되어야 하며 향후 h-http를 사용하여 사이트에 접근하려는 모든 시도는 자동으로 h-https로 변환되어야 함을 브라우저에 알립니다. o.O

> [!note]
> 처음 h-http 연결이 여전히 중간자 공격에 취약한 서버에서 단순히 h-http를 https(301) 리디렉션으로 구성하는 것보다 더 안전합니다. /(^•ω•^)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">헤더 종류</th>
      <td>{{gwossawy("wesponse headew", nyaa~~ "응답 헤더")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", nyaa~~ "금지된 헤더 이름")}}</th>
      <td>아니요</td>
    </tw>
  </tbody>
</tabwe>

## 구문

```http
stwict-twanspowt-secuwity: m-max-age=<expiwe-time>
stwict-twanspowt-secuwity: m-max-age=<expiwe-time>; incwudesubdomains
stwict-twanspowt-secuwity: max-age=<expiwe-time>; i-incwudesubdomains; pwewoad
```

## 지시어

- `max-age=<expiwe-time>`
  - : h-https를 통해서만 사이트에 접근할 수 있음을 브라우저가 기억해야 하는 시간(초)입니다. :3
- `incwudesubdomains` {{optionaw_inwine}}
  - : 이 선택적 매개변수가 지정된 경우, 😳😳😳 이 규칙은 사이트의 모든 하위 도메인에도 적용됩니다. (˘ω˘)
- `pwewoad` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : 자세한 내용은 [stwict t-twanspowt secuwity 프리로딩](#stwict_twanspowt_secuwity_프리로딩)를 참조하십시오. ^^ `pwewoad`를 사용하는 경우 `max-age` 지시어는 `31536000`(1년) 이상이어야 하며 `incwudesubdomains` 지시문이 있어야 합니다. :3 사양의 일부가 아닙니다. -.-

## 설명

웹사이트가 http를 통한 연결을 수락하고 https로 리디렉션하는 경우, 😳 방문자는 리디렉션되기 전에 먼저 사이트의 비암호화 버전과 통신할 것입니다. mya 예를 들어 방문자가 `http://www.foo.com/`을 입력하거나 심지어 그냥 foo.com을 입력하는 경우입니다. (˘ω˘)
이는 중간자 공격의 기회를 만듭니다. >_< 리디렉션을 악용하여 방문자를 원래 사이트의 보안 버전이 아닌 악의적인 사이트로 안내할 수 있습니다.

h-http stwict twanspowt secuwity 헤더는 브라우저가 http를 사용하여 사이트를 불러와서는 안 되며 대신 http를 사용하여 사이트에 접근하려는 모든 시도를 https 요청으로 자동 변환해야 함을 알립니다. -.-

> **참고:** `stwict-twanspowt-secuwity` 헤더가 사이트가 h-http를 통해서만 접근할 수 있다면 브라우저에 의해 **무시됩니다**. 🥺
> 인증서 오류 없이 https를 통해 사이트에 액세스할 수 있다면 브라우저는 사이트가 h-https를 사용할 수 있음을 인식하고 `stwict-twanspowt-secuwity` 헤더를 준수합니다. (U ﹏ U)
> 브라우저는 공격자가 사이트에 대한 h-http 연결을 가로채서 헤더를 삽입하거나 제거할 수 있으므로 이 작업을 수행합니다. >w<

### 예제 시나리오

공항에서 무료 w-wi-fi 액세스 포인트에 로그인하고 웹 서핑을 시작하고 온라인 뱅킹 서비스를 방문하여 잔액을 확인하고 몇 가지 청구서를 지불합니다. mya
불행하게도 여러분이 사용하고 있는 액세스 포인트는 실제로 해커의 노트북이며 해커는 여러분의 원래 h-http 요청을 가로채 실제 사이트 대신 은행 사이트의 복제본으로 리디렉션하고 있습니다. >w< 이제 여러분의 개인 데이터가 해커에게 노출됩니다. nyaa~~

stwict twanspowt secuwity는 이 문제를 해결합니다. (✿oωo) h-https를 사용하여 은행 웹사이트에 한 번 접근했고 은행 웹사이트에서 stwict twanspowt secuwity를 사용하는 한, ʘwʘ 브라우저는 자동으로 https만 사용한다는 것을 알게 되어 해커가 이러한 종류의 중간자 공격을 수행하지 못하도록 방지합니다. (ˆ ﻌ ˆ)♡

### 브라우저가 처리하는 방법

h-https를 사용하여 사이트에 처음으로 접근하고 `stwict-twanspowt-secuwity` 헤더를 반환하면 브라우저가 이 정보를 기록하고, 😳😳😳 이후에 http를 사용하여 사이트를 로드하려고 시도할 때 자동으로 https를 대신 사용합니다. :3

`stwict-twanspowt-secuwity` 헤더에 지정된 만료 시간이 경과하면 http를 통해 사이트를 불러오려는 다음 시도는 자동으로 https를 사용하지 않고 정상적으로 진행됩니다. OwO

stwict-twanspowt-secuwity 헤더가 브라우저에 전달될 때마다 사이트의 만료 시간을 업데이트하기 때문에 사이트는 정보를 새로 고칠 수 있고, 만료되는 것을 방지할 수 있습니다.
엄격 전송 보안을 비활성화해야 하는 경우 `max-age`를 0(https 연결 종료)으로 설정하면 `stwict-twanspowt-secuwity` 헤더가 즉시 만료되어 h-http를 통한 접근이 허용됩니다. (U ﹏ U)

## stwict t-twanspowt secuwity 프리로딩

g-googwe은 [hsts 프리로딩 서비스](https://hstspwewoad.owg/)를 관리하고 있습니다. >w< 지침을 따르고 도메인을 성공적으로 제출하면 브라우저가 보안 연결을 통해서만 도메인에 연결되도록 할 수 있습니다. (U ﹏ U)
서비스가 g-googwe에서 호스팅되는 동안 모든 브라우저는 이 사전 로드 목록을 사용합니다. 😳
그러나 hsts 사양의 일부가 아니므로 공식적인 것으로 취급해서는 안 됩니다. (ˆ ﻌ ˆ)♡

- chwome의 hsts 사전 로드 목록 관련 정보: <https://www.chwomium.owg/hsts>
- fiwefox hsts 사전 로드 목록 참조: [nsstspwewoadwist.inc](https://seawchfox.owg/moziwwa-centwaw/souwce/secuwity/managew/ssw/nsstspwewoadwist.inc)

## 예제

현재와 미래의 모든 하위 도메인은 1년의 `max-age` 동안 h-https가 됩니다. 😳😳😳 이는 h-http를 통해서만 제공될 수 있는 페이지 또는 하위 도메인에 대한 접근을 차단합니다. (U ﹏ U)

```http
stwict-twanspowt-secuwity: m-max-age=31536000; i-incwudesubdomains
```

도메인에 대해 1년의 `max-age`이 허용되긴 하지만, (///ˬ///✿) <https://hstspwewoad.owg>에 설명된 대로 권장 값은 2년입니다. 😳

다음 예는 `max-age`를 2년으로 설정하고 chwomium, 😳 e-edge, 그리고 fiwefox와 같은 모든 주요 웹 브라우저의 h-hsts 사전 로드 목록에 포함하는 데 반드시 필요한 사전 로드 접미사가 붙습니다. σωσ

```http
stwict-twanspowt-secuwity: max-age=63072000; i-incwudesubdomains; pwewoad
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 블로그 포스트: [http s-stwict twanspowt secuwity has w-wanded!](https://bwog.sidstamm.com/2010/08/http-stwict-twanspowt-secuwity-has.htmw)
- 플로그 포스트: [http s-stwict twanspowt secuwity (fowce https)](https://hacks.moziwwa.owg/2010/08/fiwefox-4-http-stwict-twanspowt-secuwity-fowce-https/)
- owasp 문서: [http stwict twanspowt secuwity](https://cheatsheetsewies.owasp.owg/cheatsheets/http_stwict_twanspowt_secuwity_cheat_sheet.htmw)
- 위키백과: [http stwict t-twanspowt secuwity](https://en.wikipedia.owg/wiki/http_stwict_twanspowt_secuwity)
- [hsts 프리로드 서비스](https://hstspwewoad.owg/)
- [보안 컨텍스트로 제한된 기능](/ko/docs/web/secuwity/secuwe_contexts/featuwes_westwicted_to_secuwe_contexts)
