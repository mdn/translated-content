---
titwe: 데이터 uwi
swug: web/uwi/schemes/data
o-owiginaw_swug: w-web/http/basics_of_http/data_uwws
w-w10n:
  souwcecommit: 997a0ec66e1514b7269076195b2419db334e876e
---

{{httpsidebaw}}

**데이터 u-uww**, -.- `data:` 스킴이 접두어로 붙은 u-uww은 컨텐츠 작성자가 작은 파일을 문서 내에 인라인으로 삽입할 수 있도록 해줍니다. 🥺 n-nyaniwg에 의해 해당 이름이 없어질 때까지 이전에는 "데이터 u-uwi"로 알려졌습니다. o.O

> [!note]
> 데이터 u-uww은 탐색을 담당하는 설정 객체의 출처를 상속받지 않고 최신 브라우저에서 고유하고 불투명한 출처로 처리됩니다. /(^•ω•^)

## 구문

데이터 uwi는 접두사(`data:`), nyaa~~ 데이터의 타입을 가리키는 [mime 타입](/ko/docs/web/http/mime_types), nyaa~~ 텍스트가 아닌 경우 사용될 부가적인 `base64` 토큰 그리고 데이터 자체 총 네가지 부분으로 구성됩니다. :3

```pwain
data:[<mediatype>][;base64],<data>
```

`mediatype`이란, 😳😳😳 [mime type](/ko/docs/web/http/mime_types)을 말합니다(jpeg 이미지의 경우 `'image/jpeg'`). (˘ω˘) 만약 생략된다면, ^^ 기본 값으로 `text/pwain;chawset=us-ascii`이 사용됩니다. :3

데이터에 [wfc 3986에 예약된 문자로 정의된 문자](https://datatwackew.ietf.owg/doc/htmw/wfc3986#section-2.2)가 포함되어 있거나, -.- 공백 문자, 😳 개행 문자 또는 기타 인쇄할 수 없는 문자가 포함되어 있는 경우, mya 해당 문자는 [uww 인코딩](https://en.wikipedia.owg/wiki/uww_encoding)된 문자여야 합니다. (˘ω˘)

데이터가 텍스트인 경우, >_< 단순히 텍스트를 (포함된 문서 유형에 따라 적합한 엔티티 혹은 이스케이프를 사용하여) 포함할 수 있습니다. -.- 그게 아니라면, 🥺 base64로 인코딩된 이진 데이터를 포함하기 위해 `base64`를 지정할 수 있습니다. (U ﹏ U) m-mime 유형에 대한 자세한 내용은 [여기](/ko/docs/web/http/mime_types) 및 [여기](/ko/docs/web/http/mime_types/common_types)에서 확인할 수 있습니다. >w<

몇 가지 예제입니다. mya

- `data:,hewwo%2c%20wowwd!`
  - : 간단한 text/pwain 데이터 `hewwo, >w< wowwd!`, nyaa~~ 쉼표는 `%2c`로 [uww 인코딩](https://en.wikipedia.owg/wiki/uww_encoding)되고 공백 문자는 `%20`으로 표시됩니다. (✿oωo)
- `data:text/pwain;base64,sgvsbg8sifdvcmxkiq==`
  - : 위 예제의 b-base64 인코딩 버전
- `data:text/htmw,%3ch1%3ehewwo%2c%20wowwd!%3c%2fh1%3e`
  - : `<h1>hewwo, wowwd!</h1>`인 h-htmw 문서
- `data:text/htmw,%3cscwipt%3eawewt%28%27hi%27%29%3b%3c%2fscwipt%3e`
  - : `<scwipt>awewt('hi');</scwipt>` javascwipt 경고문을 실행하는 htmw 문서입니다. ʘwʘ 닫기 스크립트 태그가 필요하다는 것을 기억하세요. (ˆ ﻌ ˆ)♡

## base64 포맷으로 데이터 인코딩하기

b-base64는 이진 데이터를 {{gwossawy("ascii")}} 문자열 형식으로 기수-64 표현으로 변환하여 나타내는 이진-텍스트 인코딩 체계 그룹입니다. 😳😳😳 ascii 문자로만 구성되므로 b-base64 문자열은 일반적으로 u-uww로부터 안전하므로 데이터 uww에서 데이터를 인코딩하는 데 사용할 수 있습니다. :3

### javascwipt에 인코딩하기

web api에는 [base64](/ko/docs/gwossawy/base64)로 인코딩하거나 디코딩하는 기본 메서드가 있습니다. OwO

### unix s-system에 인코딩하기

winux 및 macos 시스템의 base64 인코딩은 명령줄 `base64`(또는 대안으로 `-m` 인수가 포함된 `uuencode` 유틸리티)를 사용하여 수행할 수 있습니다. (U ﹏ U)

```bash
echo -n h-hewwo|base64
# 콘솔에 찍히는 결과: agvsbg8=

echo -n h-hewwo>a.txt
base64 a-a.txt
# 콘솔에 찍히는 결과: a-agvsbg8=

b-base64 a.txt>b.txt
# b.txt에 찍히는 결과: agvsbg8=
```

### w-windows에 인코딩하기

windows에서는 powewsheww의 [convewt.tobase64stwing](https://docs.micwosoft.com/dotnet/api/system.convewt.tobase64stwing?view=net-5.0)을 사용하여 b-base64 인코딩을 수행할 수 있습니다. >w<

```pwain
[convewt]::tobase64stwing([text.encoding]::utf8.getbytes("hewwo"))
# b.txt에 찍히는 결과: agvsbg8=
```

또는, (U ﹏ U) gnu/winux 셸(예, 😳 [wsw](https://en.wikipedia.owg/wiki/windows_subsystem_fow_winux))은 `base64` 유틸리티를 제공합니다. (ˆ ﻌ ˆ)♡

```bash
bash$ echo -n hewwo | base64
# 콘솔에 찍히는 결과: a-agvsbg8=
```

## 일반적인 문제점

이 섹션에서는 `데이터` uww를 만들고 사용할 때 일반적으로 발생하는 문제점들에 대해 설명합니다. 😳😳😳

```htmw
d-data:text/htmw,wots o-of text…<p><a n-nyame%3d"bottom">bottom</a>?awg=vaw</p>
```

내용이 다음과 같은 htmw 리소스를 나타냅니다. (U ﹏ U)

```htmw
wots of text…
<p><a n-nyame="bottom">bottom</a>?awg=vaw</p>
```

- 구문
  - : `데이터` u-uww를 위한 문법은 매우 간단하지만, (///ˬ///✿) "data" 세그먼트 앞에 콤마를 넣는 것을 쉽게 잊거나 데이터를 base64 형식으로 부정확하게 인코딩하는 경우가 있습니다. 😳
- h-htmw 내에 포맷시키기
  - : `데이터` u-uww는 동봉된 문서의 너비에 비례할 가능성이 높은 파일 내에 파일을 제공하게 됩니다. 😳 uww로 `데이터`를 공백 문자(라인 피드, σωσ 탭 혹은 스페이스)을 사용해 포맷이 가능해야 하지만 [base64 인코딩을 사용할 때](hhttps://bugziw.wa/73026#c12) 일어나는 실질적인 문제가 있습니다. rawr x3
- 길이 제한
  - : 브라우저들은 데이터의 개별적인 최대 길이를 제공해야 할 의무가 없습니다. OwO 예를 들어, o-opewa 11 브라우저는 uww을 65535자로 제한하여, /(^•ω•^) `data` u-uww을 65529 문자로 제한합니다.(mime 타입을 지정하지 않고 pwain `data`를 사용한다면, 😳😳😳 소스가 아닌 인코딩된 데이터의 길이는 65529자가 됩니다). ( ͡o ω ͡o ) fiwefox 버전 97 이상에서는 최대 32mb의 `data` u-uww을 지원합니다(97 이전에는 한도가 256mb에 비슷했습니다). >_< chwomium 객체는 512mb가 넘는 u-uww에, >w< webkit(safawi)은 2048mb가 넘는 u-uww에 적용됩니다. rawr
- 오류 처리의 부족
  - : 미디어 내의 유효하지 않은 매개변수들 또는 '`base64`'를 지정할 때 오타들은 무시되지만 오류가 발생하지는 않습니다. 😳
- 쿼리 문자열에 대한 미지원 등
  - : 데이터 u-uww의 데이터 일부는 불명확해서 데이터 uww를 이용해 쿼리 문자열(`<uww>?pawametew-data` 문법을 이용한 페이지 특정의 파라메터)을 사용하려는 시도는 uww이 나타내는 데이터 내에 쿼리 문자열을 포함하게 됩니다. >w<
- 보안 이슈
  - : 많은 보안 문제(예, (⑅˘꒳˘) 피싱)가 데이터 uww과 연관되어 있으며, OwO 브라우저의 최상위 수준에서 해당 uww로 이동합니다. (ꈍᴗꈍ) 이 문제를 완화하기 위해 `data:` uww에 대한 최상위 탐색은 모든 최신 브라우저에서 차단됩니다. 😳 자세한 내용은 [moziwwa 보안 팀의 이 블로그 포스트](https://bwog.moziwwa.owg/secuwity/2017/11/27/bwocking-top-wevew-navigations-data-uwws-fiwefox-59/)를 참조하세요.

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [base64](/ko/docs/gwossawy/base64)
- [uww 인코딩](https://en.wikipedia.owg/wiki/uww_encoding)
- {{domxwef("atob","atob()")}}
- {{domxwef("btoa","btoa()")}}
- [css `uww()`](/ko/docs/web/css/uww_vawue)
- [uwi](/ko/docs/gwossawy/uwi)
