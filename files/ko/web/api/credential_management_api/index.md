---
title: Credential Management API
slug: Web/API/Credential_Management_API
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{DefaultAPISidebar("Credential Management API")}}

Credential Management API를 사용하면 웹사이트에서 비밀번호, 공개 키 및 페더레이션 자격 증명을 저장하고 불러올 수 있습니다. 이러한 기능을 통해 사용자는 비밀번호를 입력하지 않고도 로그인하고, 사이트에 로그인할 때 사용한 페더레이션 계정을 확인하고, 만료된 세션의 명시적인 로그인 흐름 없이 세션을 다시 시작할 수 있습니다.

## 자격 증명 관리 개념 및 사용법

이 API를 사용하면 웹사이트가 사용자 에이전트의 비밀번호 시스템과 직접 상호작용할 수 있으므로, 웹사이트는 사이트 자격 증명을 일관된 방식으로 처리할 수 있고 사용자 에이전트는 자격 증명 관리를 개선할 수 있습니다. 예를 들어, 사용자 에이전트는 페더레이션 ID 공급자나 난해한 로그인 메커니즘을 처리하는 데 특히 어려움을 겪습니다.

이러한 문제를 해결하기 위해 Credential Management API는 웹사이트가 다양한 유형의 자격 증명을 저장하고 검색할 방법을 제공합니다. 이를 통해 사용자는 사이트에 로그인할 때 사용한 페더레이션 계정을 확인하거나 만료된 세션의 명시적인 로그인 흐름 없이 세션을 다시 시작하는 등의 기능을 사용할 수 있습니다.

> [!NOTE]
> 이 API는 최상위 맥락으로 제한됩니다. `<iframe>` 요소 내서 `get()` 및 `store()` 호출은 효과 없이 해결됩니다.

### 하위 도메인 공유 자격 증명

이후 버전의 사양에서는 자격 증명을 다른 하위 도메인에서 검색할 수 있습니다. 예를 들어 `login.example.com`에 저장된 비밀번호를 `www.example.com`에 로그인하는 데 사용할 수 있습니다. 이 기능을 활용하려면 {{domxref("CredentialsContainer.store()")}}를 호출하여 비밀번호를 명시적으로 저장해야 합니다. 이를 공개 접미사 목록(PSL) 매칭이라고도 하지만, 사양에서는 자격 증명의 유효 범위를 결정할 때만 PSL을 사용하도록 권장하며, 필수 사항은 아닙니다. 따라서 브라우저마다 구현 방식이 다를 수 있습니다.

## 인터페이스

- {{domxref("Credential")}}
  - : 신뢰 결정 전에 개체에 대한 정보를 제공합니다.
- {{domxref("CredentialsContainer")}}
  - : 자격증명을 요청하고 성공적인 로그인 또는 로그아웃과 같은 흥미로운 이벤트가 발생할 때 사용자 에이전트에 알릴 수 있는 메서드를 노출합니다. 이 인터페이스는 `navigator.credentials`에서 접근할 수 있습니다.
- {{domxref("FederatedCredential")}}
  - : 웹사이트가 사용자를 올바르게 인증하기 위해 신뢰하는 개체인 페더레이션 ID 공급자로부터 자격 증명에 대한 정보를 제공하며, 이를 위한 API를 제공합니다. [OpenID Connect](https://openid.net/developers/specs/)는 이러한 프레임워크의 한 예입니다.
- {{domxref("PasswordCredential")}}
  - : 사용자 이름/비밀번호 쌍에 대한 정보를 제공합니다.
- {{domxref("PublicKeyCredential")}}
  - : 비밀번호 대신 비대칭 암호화에 기반한 보다 안전한 시스템을 사용하여 로그인할 수 있는 자격 증명을 제공합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
