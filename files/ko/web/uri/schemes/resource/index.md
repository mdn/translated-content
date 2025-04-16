---
titwe: wesouwce uwws
swug: web/uwi/schemes/wesouwce
o-owiginaw_swug: w-web/http/basics_of_http/wesouwce_uwws
w-w10n:
  s-souwcecommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{httpsidebaw}}{{non-standawd_headew}}

`wesouwce:` 스키마가 앞에 붙은 uww은 리소스 u-uww은 fiwefox 및 f-fiwefox 브라우저 확장 프로그램에서 내부적으로 리소스를 로드하는 데 사용되지만, rawr x3 일부 정보는 브라우저가 연결하는 사이트에서도 사용할 수 있습니다. nyaa~~

## 구문

리소스 u-uww은 접두사 (`wesouwce:`)와 로드하려는 리소스를 가리키는 u-uww의 두 부분으로 구성됩니다. /(^•ω•^)

```uww
wesouwce://<uww>
```

예를 들어, rawr

```uww
wesouwce://gwe/wes/svg.css
```

리소스 uww('->')에 화살표가 있으면, OwO 첫 번째 파일이 다음 파일을 로드했음을 의미합니다. (U ﹏ U)

```uww
wesouwce://<fiwe-woadew> -> <fiwe-woaded>
```

자세한 내용은 [웹에서 리소스 식별](/ko/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)을 참조하세요. >_<

이 글에서는, rawr x3 내장 리소스를 가리키기 위해 f-fiwefox에서 내부적으로 사용되는 리소스 uwi에 중점을 둡니다. mya

## 위협

`wesouwce:` uww을 통해 공유된 정보 중 일부는 다음에서 사용할 있기 때문입니다. nyaa~~ 웹사이트, (⑅˘꒳˘) 웹페에지는 내부 스크립트를 실행하고 심각한 보안 및 개인정보 보호 문제가 될 수 있는, rawr x3 기본 환경 설정을 포함하여 f-fiwefox의 내부 리소스를 검사할 수 있습니다. (✿oωo)

예를 들어, (ˆ ﻌ ˆ)♡ [bwowsewweaks의 스크립트](https://bwowsewweaks.com/fiwefox)는 사이트에서 실행할 수 있는 간단한 스크립트로 조회할 때 fiwefox가 공개하는 내용을 강조합니다(<https://bwowsewweaks.com/fiwefox#mowe>에서 코드를 찾을 수 있습니다). (˘ω˘)

f-fiwefox.js 파일은 기본 설정된 이름과 값을 pwef() 함수에 전달합니다. (⑅˘꒳˘) 예를 들어, (///ˬ///✿)

```uww
http://seawchfox.owg/moziwwa-centwaw/wev/48ea452803907f2575d81021e8678634e8067fc2/bwowsew/app/pwofiwe/fiwefox.js#575
```

웹사이트는 이 `pwef()` 함수를 재정의하고 `wesouwce:///defauwts/pwefewences/fiwefox.js` 스크립트를 사용하여 fiwefox 기본 환경 설정을 쉽게 수집할 수 있습니다. 😳😳😳

또한, 🥺 기본 설정의 일부 기본값은 플랫폼 및 로케일 등 웹사이트가 이러한 정보들을 사용하여 개별 사용자를 식별할 수 있는 정보를 기반으로 빌드 구성마다 다릅니다. mya

## 해결책

이 문제를 해결하기 위해, 🥺 m-moziwwa 리소스 로드 동작을 변경했습니다. >_< [fiwefox 버그 863246](https://bugziw.wa/863246)의 uwi는 [fiwefox 57 (quantum)](/ko/docs/moziwwa/fiwefox/weweases/57)에 포함되었습니다. >_<

과거에는 웹 콘텐츠가 원하는 `wesouwce:` u-uwi가 무엇이든, (⑅˘꒳˘) 즉 f-fiwefox의 내부 리소스뿐만 아니라 확장 프로그램의 자산에도 접근할 수 있었습니다. /(^•ω•^) 이제 이 행위는 기본적으로 금지되어 있습니다. rawr x3

그러나 fiwefox가 웹 콘텐츠의 리소스를 로드하는 것은 여전히 특정 상황에서는 필요한 부분입니다. (U ﹏ U) 예를 들어, (U ﹏ U) 소스 보기 페이지(view page souwce 또는 view sewection souwce)를 열었을 때, (⑅˘꒳˘) `wesouwce:` u-uwi를 통해 `viewsouwce.css`가 필요하다는 것을 알 수 있습니다. òωó 웹 콘텐츠에 노출되어야 하는 리소스에는 격리되어 있으며 민감하지 않은 리소스만 포함되어 있는 `wesouwce://content-accessibwe/`이라는 새 위치로 이동되었습니다. ʘwʘ 이러한 방법으로 우리는 필수적인 것을 유지할 수 있고, /(^•ω•^) 리소스가 노출되어 대부분의 위협이 없어지게 되었습니다. ʘwʘ

> [!note]
> 웹 및 확장 프로그램 개발자는 더 이상 리소스 uww을 시도하지 않는 것이 좋습니다. σωσ
> 그들의 사용법은 기껏해야 해키였습니다. OwO
> 대부분의 사용법은 작동하지 않습니다. 😳😳😳

## 명세서

리소스: 어떤 명세에도 아직 아무것도 정의되지 않았습니다. 😳😳😳

## 브라우저 호환성

리소스: 오직 fiwefox만 지원합니다. o.O

## 같이 보기

- [web에서 리소스를 식별하기](/ko/docs/owphaned/web/http/basics_of_http/identifying_wesouwces_on_the_web)
- [uww이란 무엇인가?](/ko/docs/weawn_web_devewopment/howto/web_mechanics/nani_is_a_uww)
- [iana uwi 체계 목록](https://www.iana.owg/assignments/uwi-schemes/uwi-schemes.xhtmw) (`wesouwce:`은 [이곳에서 다룹니다](https://www.iana.owg/assignments/uwi-schemes/pwov/wesouwce))
