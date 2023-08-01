---
title: 웹 보안
slug: Web/Security
l10n:
  sourceCommit: d75d870c8718608d6b27568b8b0803ead94d1d7a
---

{{QuickLinksWithSubpages}}

웹사이트 또는 개방형 웹 애플리케이션이 안전한지 확인하는 것은 중요합니다. 코드의 단순한 버그라도 개인 정보가 유출될 수 있으며 나쁜 사람들은 그 데이터를 훔칠 방법을 찾으려고 할겁니다. 여기에 있는 웹 보안 관련 문서는 공격 및 데이터 절도로부터 여러분의 사이트와 코드를 보호하는 데 도움이 되는 정보를 제공합니다.

## 콘텐츠 보안

- [콘텐츠 보안 정책 (CSP)](/ko/docs/Web/HTTP/CSP)
  - : **콘텐츠 보안 정책** ({{Glossary("CSP")}})은 교차 사이트 스크립팅 ({{Glossary("XSS")}}) 및 데이터 주입 공격을 비롯한 특정 유형의 공격을 탐지하고 완화하는 데 도움이 되는 추가 보안 계층입니다. 이러한 공격은 데이터 도난에서 사이트 손상, 맬웨어 배포에 이르기까지 모든 것에 사용됩니다.

## 연결 보안

- [전송 계층 보안 (TLS)](/ko/docs/Web/Security/Transport_Layer_Security)
  - : 전송 계층 보안 ({{Glossary("TLS")}}) 프로토콜은 네트워크로 연결된 두 개의 애플리케이션 또는 장치가 비공개로 안전하게 정보를 교환할 수 있도록 하는 표준입니다. TLS를 사용하는 애플리케이션은 데이터의 보안 및 안정성에 상당한 영향을 미칠 수 있는 보안 매개변수를 선택할 수 있습니다. 이 문서에서는 TLS에 대한 개요와 여러분이 콘텐츠를 보호할 때 내려야 하는 결정의 종류를 살펴봅니다.
- HTTPS
  - : **HTTPS** (**_HyperText Transfer Protocol Secure_**)는 {{Glossary("HTTP")}} 프로토콜의 암호화된 버전입니다. {{Glossary("SSL")}} 또는 {{Glossary("TLS")}}를 사용하여 클라이언트와 서버 간의 모든 통신을 암호화합니다. 이 보안 연결을 통해 클라이언트는 의도한 서버와 연결되어 있는지 확인하고 중요한 데이터를 교환할 수 있습니다.
- [HTTP Strict-Transport-Security](/ko/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : `Strict-Transport-Security` [HTTP](/ko/docs/Web/HTTP) 헤더를 사용하면 웹사이트에서 HTTPS를 통해서만 액세스할 수 있음을 지정할 수 있습니다.
- [인증서 투명성](/ko/docs/Web/Security/Certificate_Transparency)
  - : **인증서 투명성**은 인증서의 오류를 방지하고 모니터링하도록 설계된 개방형 프레임워크입니다. 새로 발급된 인증서는 공개적으로 실행되도록 '로그'되며, 발급된 TLS 인증서의 추가 전용 암호화 보증 기록을 유지하는 독립적인 CT 로그인 경우가 많습니다.
- [혼합 콘텐츠](/ko/docs/Web/Security/Mixed_content)
  - : 일반 텍스트 HTTP를 사용하여 가져온 콘텐츠가 포함된 HTTPS 페이지를 **혼합 콘텐츠** 페이지라고 합니다. 이런 페이지는 부분적으로만 암호화되어있어 스니퍼와 중간자 공격자가 암호화되지 않은 콘텐츠에 액세스할 수 있습니다.
- [혼합 콘텐츠가 차단된 웹사이트를 고치는 방법](/ko/docs/Web/Security/Mixed_content/How_to_fix_website_with_mixed_content)
  - : 웹 사이트에가 HTTPS 페이지를 제공한다면, HTTP를 통해 제공되는 모든 [혼합 활성 콘텐츠](/ko/docs/Web/Security/Mixed_content)는 기본적으로 차단됩니다. 결과적으로 여러분의 웹사이트는 사용자에게 깨진 것처럼 보일 수 있습니다(iframe 또는 플러그인이 로드되지 않는 경우 등). [혼합 패시브 콘텐츠](/ko/docs/Web/Security/Mixed_content)는 기본적으로 표시되지만 사용자는 이러한 유형의 콘텐츠를 차단하도록 기본 설정을 지정할 수도 있습니다. 이 페이지에서는 웹 개발자로서 알아야 할 사항을 살펴봅니다.
- [보안 컨텍스트](/ko/docs/Web/Security/Secure_Contexts)
  - : **보안 컨텍스트**는 콘텐츠가 안전하게 전달되었다는 합리적인 확신이 있고 (HTTPS/TLS를 통해) 안전하지 **않은** 컨텍스트와의 통신 가능성은 제한되는 `Window` 또는 `Worker`입니다. 많은 웹 API와 기능은 보안 컨텍스트에서만 액세스할 수 있습니다. 보안 컨텍스트의 주요 목표는 [중간자 공격자](https://ko.wikipedia.org/wiki/%EC%A4%91%EA%B0%84%EC%9E%90_%EA%B3%B5%EA%B2%A9)가 피해자를 추가로 손상시킬 수 있는 강력한 API에 액세스하지 못하도록 방지하는 것입니다.
- [보안 컨텍스트로 제한된 기능](/ko/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
  - : 이 참조는 보안 컨텍스트에서만 사용할 수 있는 웹 플랫폼 기능을 나열합니다.
- [Weak signature algorithms](/ko/docs/Web/Security/Weak_Signature_Algorithm)
  - : {{Glossary("digital certificate", "디지털 인증서")}} {{Glossary("Signature/Security", "서명")}}에 사용되는 해시 알고리즘의 강도는 인증서 보안의 중요한 요소입니다. 이 문서에서는 약하다고 알려진 서명 알고리즘에 대한 몇 가지 정보를 제공하므로 적절하게 이런 경우를 피할 수 있습니다.
- 301 및 302 응답 코드로 리디렉션
  - : 추후 작성 예정

## 데이터 보안

- [HTTP 쿠키 사용](/ko/docs/Web/HTTP/Cookies)
  - : **HTTP 쿠키** (웹 쿠키, 브라우저 쿠키)는 서버가 사용자의 웹 브라우저에 보내는 작은 데이터 조각입니다. 브라우저는 이를 저장하고 나중에 동일한 서버에 대한 요청과 함께 다시 보낼 수 있습니다. 일반적으로 두 개의 요청이 동일한 브라우저에서 온 것인지 알려주는 데 사용됩니다. 예: 사용자 로그인 유지
- [로컬 스토리지](/ko/docs/Web/API/Window/localStorage)
  - : `Window` 객체의 {{domxref("Window.localStorage")}} 프로퍼티은 서버가 세션 간에 지속되는 클라이언트에 데이터를 저장하는 방법입니다.

## 정보 유출

- [리퍼러 헤더 정책: 개인 정보 보호 및 보안 문제](/ko/docs/Web/Security/Referer_header:_privacy_and_security_concerns)
  - : [Referer HTTP 헤더](/ko/docs/Web/HTTP/Headers/Referer)와 관련된 개인 정보 및 보안 위험이 있습니다. 이 문서에서는 이에 대해 설명하고 이러한 위험을 완화하는 방법에 대한 조언을 제공합니다.
- [자격 증명 없는 IFrame](/ko/docs/Web/Security/IFrame_credentialless)
  - : 자격 증명 없는 IFrame애는 개발자가 새로운 임시 컨텍스트를 사용하여 {{htmlelement("iframe")}}에서 서드 파티 리소스를 로드할 수 있는 메커니즘을 제공합니다. 이 컨텍스트는 원본과 연결된 네트워크, 쿠키 및 스토리지 데이터에 액세스할 수 없고, 최상위 문서 수명이 로컬인 새로운 컨텍스트를 사용합니다. 그 대가로{{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) 포함 규칙을 해제할 수 있으므로 COEP가 설정된 문서는 그렇지 않은 서드 파티 문서를 포함할 수 있습니다.

## 무결성

- [동일 출처 정책](/ko/docs/Web/Security/Same-origin_policy)
  - : **동일 출처 정책**은 한 {{Glossary("origin", "출처")}}에서 로드된 문서 또는 스크립트가 다른 출처의 리소스와의 상호작용을 제한하는 중요한 보안 메커니즘입니다. 잠재적인 악성 문서를 격리하여 가능한 공격 경로를 줄이는 데 도움이 됩니다.
- [하위 리소스 무결성](/ko/docs/Web/Security/Subresource_Integrity)
  - : **하위 리소스 무결성**(SRI)은 브라우저가 {{Glossary("CDN")}} 등 에서 불러오는 리소스가 예기치 않은 조작 없이 전달됐는지 확인할 수 있는 보안 기능입니다. 불러온 리소스와 반드시 일치해야 하는 암호화 해시를 제공하는 방식으로 동작합니다.
- [HTTP Access-Control-Allow-Origin](/ko/docs/Web/HTTP/Headers/Access-Control-Allow-Origin)
  - : **`Access-Control-Allow-Origin`** 응답 헤더는 주어진 {{glossary("origin", "출처")}}의 요청 코드와 응답을 공유할 수 있는지 여부를 나타냅니다.
- [HTTP X-Content-Type-Options](/ko/docs/Web/HTTP/Headers/X-Content-Type-Options)
  - : **`X-Content-Type-Options`** HTTP 응답 헤더는 {{HTTPHeader("Content-Type")}} 헤더에 광고된 [MIME 타입](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types) 유형을 변경허나 따르지 않아야 함을 나타내기 위해 서버에서 사용하는 마커입니다. 이는 [MIME 스니핑](/ko/docs/Web/HTTP/Basics_of_HTTP/MIME_types#mime_스니핑)을 빠져나오는 방법입니다. 즉, MIME 유형이 의도적으로 구성되었음을 나타냅니다.

## 클릭재킹 보호

{{Glossary("Clickjacking", "클릭재킹")}}은 사용자가 기대하는 것과 다른 작업을 수행하는 UI 요소를 클릭하도록 속입니다.

- [HTTP X-Frame-Options](/ko/docs/Web/HTTP/Headers/X-Frame-Options)
  - : **`X-Frame-Options`** [HTTP](/ko/docs/Web/HTTP) 응답 헤더는 브라우저가 {{htmlelement("frame")}}, {{htmlelement("iframe")}}, {{htmlelement("embed")}} 또는 {{htmlelement("object")}}에서 페이지를 렌더링하도록 허용해야 하는지 여부를 나타내는 데 사용할 수 있습니다. 사이트는 이를 사용하여 콘텐츠가 다른 사이트에 포함되지 않도록 함으로써 {{Glossary("Clickjacking", "클릭재킹")}} 공격을 피할 수 있습니다.
- [CSP: frame-ancestors](/ko/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors)
  - : HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`frame-ancestors`** 지시문은 {{HTMLElement("frame")}}, {{HTMLElement("iframe")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}}, 또는 {{HTMLElement("applet")}}을 사용하여 페이지를 포함할 수 있는 유효한 부모를 지정합니다.

## 사용자 정보 보안

- [안전하지 않은 비밀번호](/ko/docs/Web/Security/Insecure_passwords)
  - : HTTP를 통해 로그인 양식을 제공하는 것은 사용자 암호를 추출하기 위해 사용할 수 있는 다양한 공격으로 인해 특히 위험합니다. 네트워크 도청자는 네트워크를 스니핑하거나 전송 중인 페이지를 수정하여 사용자의 비밀번호를 훔칠 수 있습니다.
- [개인 정보 및 :visited 선택자](/ko/docs/Web/CSS/Privacy_and_the_:visited_selector)
  - : 2010년 이전에는 [CSS](/ko/docs/Web/CSS) {{cssxref(":visited")}} 선택자를 사용하여 웹사이트에서 사용자의 검색 기록을 발견하고 사용자가 방문한 사이트를 파악할 수 있었습니다. 이 문제를 완화하기 위해 브라우저는 방문한 링크에서 얻을 수 있는 정보의 양을 제한했습니다.

## 보안 관련 용어

- {{Glossary("Block cipher mode of operation")}}
- {{Glossary("Certificate authority")}}
- {{Glossary("challenge", "Challenge-response authentication")}}
- {{Glossary("Cipher")}}
- {{Glossary("Cipher suite")}}
- {{Glossary("Ciphertext")}}
- {{Glossary("Clickjacking")}}
- {{Glossary("CORS")}}
- {{Glossary("CORS-safelisted request header")}}
- {{Glossary("CORS-safelisted response header")}}
- {{Glossary("Cross-site scripting")}}
- {{Glossary("Cryptanalysis")}}
- {{Glossary("Cryptographic hash function")}}
- {{Glossary("Cryptography")}}
- {{Glossary("CSP")}}
- {{Glossary("CSRF")}}
- {{Glossary("Decryption")}}
- {{Glossary("Digital certificate")}}
- {{Glossary("DTLS")}}
- {{Glossary("Encryption")}}
- {{Glossary("Forbidden header name")}}
- {{Glossary("Forbidden response header name")}}
- {{Glossary("Hash")}}
- {{Glossary("HMAC")}}
- {{Glossary("HPKP")}}
- {{Glossary("HSTS")}}
- {{Glossary("HTTPS")}}
- {{Glossary("Key")}}
- {{Glossary("MitM")}}
- {{Glossary("OWASP")}}
- {{Glossary("Preflight request")}}
- {{Glossary("Public-key cryptography")}}
- {{Glossary("Reporting directive")}}
- {{Glossary("Robots.txt")}}
- {{Glossary("Same-origin policy")}}
- {{Glossary("Session hijacking")}}
- {{Glossary("SQL injection")}}
- {{Glossary("Symmetric-key cryptography")}}
- {{Glossary("TOFU")}}
- {{Glossary("TLS")}}

## 같이 보기

- [보안 블로그](https://blog.mozilla.org/security/)
- [@mozsec 트위터](https://twitter.com/mozsec)
