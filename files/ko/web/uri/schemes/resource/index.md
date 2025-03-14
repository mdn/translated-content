---
title: Resource URLs
slug: Web/URI/Schemes/resource
original_slug: Web/HTTP/Basics_of_HTTP/Resource_URLs
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{HTTPSidebar}}{{non-standard_header}}

`resource:` 스키마가 앞에 붙은 URL은 리소스 URL은 Firefox 및 Firefox 브라우저 확장 프로그램에서 내부적으로 리소스를 로드하는 데 사용되지만, 일부 정보는 브라우저가 연결하는 사이트에서도 사용할 수 있습니다.

## 구문

리소스 URL은 접두사 (`resource:`)와 로드하려는 리소스를 가리키는 URL의 두 부분으로 구성됩니다.

```url
resource://<url>
```

예를 들어,

```url
resource://gre/res/svg.css
```

리소스 URL('->')에 화살표가 있으면, 첫 번째 파일이 다음 파일을 로드했음을 의미합니다.

```url
resource://<File-loader> -> <File-loaded>
```

자세한 내용은 [웹에서 리소스 식별](/ko/docs/orphaned/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)을 참조하세요.

이 글에서는, 내장 리소스를 가리키기 위해 Firefox에서 내부적으로 사용되는 리소스 URI에 중점을 둡니다.

## 위협

`resource:` URL을 통해 공유된 정보 중 일부는 다음에서 사용할 있기 때문입니다. 웹사이트, 웹페에지는 내부 스크립트를 실행하고 심각한 보안 및 개인정보 보호 문제가 될 수 있는, 기본 환경 설정을 포함하여 Firefox의 내부 리소스를 검사할 수 있습니다.

예를 들어, [Browserleaks의 스크립트](https://browserleaks.com/firefox)는 사이트에서 실행할 수 있는 간단한 스크립트로 조회할 때 Firefox가 공개하는 내용을 강조합니다(<https://browserleaks.com/firefox#more>에서 코드를 찾을 수 있습니다).

firefox.js 파일은 기본 설정된 이름과 값을 pref() 함수에 전달합니다. 예를 들어,

```url
http://searchfox.org/mozilla-central/rev/48ea452803907f2575d81021e8678634e8067fc2/browser/app/profile/firefox.js#575
```

웹사이트는 이 `pref()` 함수를 재정의하고 `resource:///defaults/preferences/firefox.js` 스크립트를 사용하여 Firefox 기본 환경 설정을 쉽게 수집할 수 있습니다.

또한, 기본 설정의 일부 기본값은 플랫폼 및 로케일 등 웹사이트가 이러한 정보들을 사용하여 개별 사용자를 식별할 수 있는 정보를 기반으로 빌드 구성마다 다릅니다.

## 해결책

이 문제를 해결하기 위해, Mozilla 리소스 로드 동작을 변경했습니다. [Firefox 버그 863246](https://bugzil.la/863246)의 URI는 [Firefox 57 (Quantum)](/ko/docs/Mozilla/Firefox/Releases/57)에 포함되었습니다.

과거에는 웹 콘텐츠가 원하는 `resource:` URI가 무엇이든, 즉 Firefox의 내부 리소스뿐만 아니라 확장 프로그램의 자산에도 접근할 수 있었습니다. 이제 이 행위는 기본적으로 금지되어 있습니다.

그러나 Firefox가 웹 콘텐츠의 리소스를 로드하는 것은 여전히 특정 상황에서는 필요한 부분입니다. 예를 들어, 소스 보기 페이지(View Page Source 또는 View Selection Source)를 열었을 때, `resource:` URI를 통해 `viewsource.css`가 필요하다는 것을 알 수 있습니다. 웹 콘텐츠에 노출되어야 하는 리소스에는 격리되어 있으며 민감하지 않은 리소스만 포함되어 있는 `resource://content-accessible/`이라는 새 위치로 이동되었습니다. 이러한 방법으로 우리는 필수적인 것을 유지할 수 있고, 리소스가 노출되어 대부분의 위협이 없어지게 되었습니다.

> [!NOTE]
> 웹 및 확장 프로그램 개발자는 더 이상 리소스 URL을 시도하지 않는 것이 좋습니다.
> 그들의 사용법은 기껏해야 해키였습니다.
> 대부분의 사용법은 작동하지 않습니다.

## 명세서

리소스: 어떤 명세에도 아직 아무것도 정의되지 않았습니다.

## 브라우저 호환성

리소스: 오직 Firefox만 지원합니다.

## 같이 보기

- [Web에서 리소스를 식별하기](/ko/docs/orphaned/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
- [URL이란 무엇인가?](/ko/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)
- [IANA URI 체계 목록](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml) (`resource:`은 [이곳에서 다룹니다](https://www.iana.org/assignments/uri-schemes/prov/resource))
