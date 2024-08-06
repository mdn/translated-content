---
title: 하위 리소스 무결성
slug: Web/Security/Subresource_Integrity
l10n:
  sourceCommit: 4a6dacf8c68925a8538585be3b2728bcb271241e
---

{{QuickLinksWithSubpages("/ko/docs/Web/Security")}}

**하위 리소스 무결성**(SRI)은 브라우저가 가져온 리소스(예: [CDN](/ko/docs/Glossary/CDN)에서)가 예기치 않은 조작 없이 전달되었는지 검증하는 보안 기능입니다. 가져온 리소스와 일치해야 하는 암호 해시를 제공함으로써 작동합니다.

> [!NOTE]
> 임베드된 문서 이외의 출처에서 제공되는 하위 리소스 무결성을 검증하기 위해, 브라우저는 추가로 [교차 출처 리소스 공유 (CORS)](/ko/docs/Web/HTTP/CORS)를 사용하여 리소스를 제공하는 출처가 요청 출처와 리소스를 공유할 수 있는지 확인합니다.

## 하위 리소스 무결성이 어떻게 도움이 되는가?

{{Glossary("CDN", "콘텐츠 전달 네트워크(CDN)")}}를 사용하여 여러 사이트에서 공유되는 스크립트와 스타일시트와 같은 파일을 호스트하면 사이트의 성능을 개선하고 대역폭을 절약할 수 있습니다. 그러나, 공격자가 CDN을 제어할 수 있는 경우, CDN을 사용하게 된다면, 공격자가 임의의 악성 콘텐츠를 CDN 파일에 삽입(또는 파일을 완전히 교체)할 수 있으므로 해당 CDN에서 파일을 가져오는 모든 사이트는 잠재적인 공격 대상이 될 수 있습니다.

하위 리소스 무결성을 사용하면 웹 애플리케이션 또는 웹 문서가 가져오는 파일(CDN 또는 어디에서나)이 제삼자의 추가 콘텐츠가 삽입 없이 전달되었고, 어떤 종류의 다른 변경 사항도 전혀 적용되지 않았다는 것을 확신할 수 있어 이와 같은 공격의 일부 위험을 완화할 수 있습니다.

## 하위 리소스 무결성 사용하기

하위 리소스 무결성은 {{HTMLElement("script")}} 또는 {{HTMLElement("link")}} 요소의 `integrity` 속성값에 브라우저에서 가져오라고 지시한 리소스(파일)의 base64로 인코딩된 암호 해시를 지정하여 사용합니다.

`integrity` 값은 하나 이상의 문자열로 시작하고, 각 문자열에는 특정 해시 알고리즘(현재 허용되는 접두사는 `sha256`, `sha384`, 그리고 `sha512`)을 나타내는 접두사가 포함되어 있으며, 대시가 따라온 뒤, 실제 base64로 인코딩된 해시로 끝납니다.

> **참고:** **integrity** 값에는 공백으로 구분된 여러 해시가 포함될 수 있습니다. 해당 해시 중 하나와 일치하는 경우 리소스가 로드됩니다.

`integrity` 문자열과 base64로 인코딩된 sha384 해시의 예제입니다.

```plain
sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC
```

즉, `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC`는 해시 부분이고, `sha384` 접두사는 sha384 해시임을 나타냅니다.

> [!NOTE]
> 엄밀히 말해, `integrity` 값의 "해시" 부분은 어떤 입력(예: 스크립트 또는 스타일시트 파일)에 특정 해시 함수를 적용하여 형성된 **암호 다이제스트**입니다. 그러나 암호 다이제스트를 의미하기 위해 "해시"라는 단축어를 사용하는 것이 일반적이므로 이 문서에서도 그렇게 사용했습니다.

### SRI 해시 생성 도구

#### SRI 해시 생성기

[SRI 해시 생성기](https://www.srihash.org/)는 SRI 해시를 생성하는 온라인 도구입니다.

#### OpenSSL 사용하기

명령줄에서 다음과 같이 **OpenSSL**을 사용하여 SRI 해시를 생성할 수 있습니다.

```bash
cat FILENAME.js | openssl dgst -sha384 -binary | openssl base64 -A
```

Windows 환경에서는 다음 코드를 사용하여 SRI 해시를 생성하는 도구를 만들 수 있습니다.

```batch
@echo off
set bits=384
openssl dgst -sha%bits% -binary %1% | openssl base64 -A > tmp
set /p a= < tmp
del tmp
echo sha%bits%-%a%
pause
```

이 코드는 다음과 같이 사용할 수 있습니다.

1. 위 코드를 여러분 환경의 Windows SendTo 폴더(예: `C:\Users\USER\AppData\Roaming\Microsoft\Windows\SendTo`)에 `sri-hash.bat` 라는 이름으로 저장합니다.
2. 파일 탐색기에서 파일을 마우스 오른쪽 버튼으로 클릭하고 <strong>보내기...</strong>를 선택한 다음, `sri-hash`를 선택합니다. 명령 상자에 무결성 값이 표시됩니다.
3. 무결성 값을 선택하고 마우스 오른쪽 버튼을 클릭하여 클립보드에 복사합니다.
4. 아무 키나 눌러 명령 상자를 닫습니다.

> [!NOTE]
> 시스템에 OpenSSL이 설치되어 있지 않은 경우, [OpenSSL 프로젝트 웹 사이트](https://www.openssl.org)를 방문하여 다운로드와 설치에 대한 정보를 확인하십시오. OpenSSL 프로젝트 자체는 OpenSSL의 바이너리 배포판을 호스팅하지 않지만, 타사 배포판의 비공식 목록(https://wiki.openssl.org/index.php/Binaries)은 유지되고 있습니다.

#### shasum 사용하기

다음과 같은 명령 호출로 [**shasum**](https://linux.die.net/man/1/shasum)을 사용하여 SRI 해시를 생성할 수 있습니다.

```bash
shasum -b -a 384 FILENAME.js | awk '{ print $1 }' | xxd -r -p | base64
```

- `xxd` 파이프 통과 단계는 `shasum`에서 16진수 출력을 가져와 이진수로 변환합니다.
- `shasum`은 해시된 파일의 이름을 `xxd`로 전달하기 때문에 `awk` 파이프 통과 단계가 필요합니다. 파일 이름에 유효한 16진수 문자가 있는 경우, 재앙적인 결과가 초래될 수 있습니다. `xxd`도 해당 문자를 디코딩하여 `base64`로 전달하기 때문입니다.

### 교차 출처 리소스 공유 및 하위 리소스 무결성

임베드된 문서 이외의 출처에서 제공되는 하위 리소스 무결성을 검증하기 위해, 브라우저는 추가로 [교차 출처 리소스 공유(CORS)](/ko/docs/Web/HTTP/CORS)를 사용하여 리소스를 제공하는 출처가 요청 출처와 리소스를 공유할 수 있는지 확인합니다. 따라서 리소스가 리소스 요청 출처와 공유될 수 있도록 하는 [`Access-Control-Allow-Origin`](/ko/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) 헤더가 함께 제공되어야 합니다. 예를 들어 다음과 같습니다.

```http
Access-Control-Allow-Origin: *
```

## 예제

다음 예제에서 `oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC`가 `example-framework.js`라는 특정 스크립트의 기대 SHA-384 해시(다이제스트)로 이미 알려져 있고, `https://example.com/example-framework.js`에 스크립트의 복사본이 호스팅 되어있다고 가정합니다.

### \<script> 요소와 하위 리소스 무결성

다음 {{HTMLElement("script")}} 요소를 사용하여 `https://example.com/example-framework.js` 스크립트를 실행하기 전, 브라우저에 먼저 스크립트를 기대 해시와 비교하고 일치하는지 확인해야 한다고 알릴 수 있습니다.

```html
<script
  src="https://example.com/example-framework.js"
  integrity="sha384-oqVuAfXRKap7fdgcCY5uykM6+R9GqQ8K/uxy9rx7HNQlGYl1kPzQho1wx4JwY8wC"
  crossorigin="anonymous"></script>
```

> **참고:** `crossorigin` 속성의 용도에 대한 자세한 내용은 [CORS 설정 속성](/ko/docs/Web/HTML/Attributes/crossorigin)을 참조하십시오.

## 브라우저가 하위 리소스 무결성을 처리하는 방법

브라우저는 하위 리소스 무결성을 다음과 같이 처리합니다.

1. 브라우저가 `integrity` 속성이 있는 {{HTMLElement("script")}}나 {{HTMLElement("link")}} 요소를 발견하면, 브라우저는 스크립트를 실행하거나 {{HTMLElement("link")}} 요소에 지정된 스타일시트를 적용하기 전에 먼저 스크립트 또는 스타일시트를 `integrity` 값에 지정된 기대 해시와 비교해야 합니다.

   임베드된 문서 이외의 출처에서 제공되는 하위 리소스 무결성을 검증하기 위해, 브라우저는 추가로 [교차 출처 리소스 공유 (CORS)](/ko/docs/Web/HTTP/CORS)를 사용하여 리소스를 제공하는 출처가 요청 출처와 리소스를 공유할 수 있는지 확인합니다.

2. 스크립트 또는 스타일시트가 관련 `integrity` 값과 일치하지 않는 경우, 브라우저는 스크립트 실행 또는 스타일시트 적용을 거부하고, 해당 스크립트나 스타일시트 가져오기가 실패했음을 나타내는 네트워크 오류를 대신 반환해야 합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [콘텐츠 보안 정책](/ko/docs/Web/HTTP/CSP)
- {{httpheader("Content-Security-Policy")}} HTTP 헤더
- [XSS를 할 수 없는 CDN: 하위 리소스 무결성 사용하기](https://frederik-braun.com/using-subresource-integrity.html)
- [W3C의 하위 리소스 무결성 검사](https://w3c-test.org/subresource-integrity/subresource-integrity.html)
- [SRI 해시 생성기](https://www.srihash.org/)
