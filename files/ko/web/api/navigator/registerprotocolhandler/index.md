---
title: Navigator.registerProtocolHandler()
slug: Web/API/Navigator/registerProtocolHandler
---

{{APIRef("HTML DOM")}}{{securecontext_header}}

**`Navigator.registerProtocolHandler()`** 메서드는 웹 사이트가 특정 {{glossary("URL")}} 스킴("프로토콜")을 열거나 처리할 수 있도록 등록합니다. 이를테면, 이메일 사이트가 `mailto:` URL에, VoIP 사이트가 `tel:` URL에 자신을 등록할 때 사용할 수 있습니다.

## 구문

```js
navigator.registerProtocolHandler(protocol, url, title);
```

### 매개변수

- `protocol`
  - : 웹 사이트가 처리하고자 하는 프로토콜 문자열. 예컨대 SMS 문자 메시지를 처리하고자 한다면 `"sms"`를 전달하세요.
- `url`
  - : 처리기의 URL. **플레이스홀더로 사용할 `%s`를 반드시 포함**해야 합니다. 실제 사용 시, `%s`에는 처리 대상 URL을 [이스케이프 처리](/ko/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)해 대입합니다.> **참고:** 처리기의 URL은 반드시 `http` 또는 `https` 스킴을 필요로 합니다. 일부 브라우저는 보안상 `https`를 요구하므로 `https`를 사용하는 편이 좋습니다.
- `title`
  - : 사람이 읽을 수 있는 형태의 처리기 이름. 브라우저 설정 등 처리기 목록에서 **사용자에게 보이는 이름**입니다.

### 예외

- `SecurityError`
  - : {{glossary("user agent", "사용자 에이전트")}}가 등록을 막았습니다. 다음 상황에서 발생할 수 있습니다.\* 등록하려는 스킴(프로토콜)이 유효하지 않습니다. 브라우저가 직접 처리하는 스킴을 등록하려 하면 발생합니다. (`https:`, `about:`, ...)
    - 처리기 URL의 {{glossary("출처")}}가 API를 호출한 페이지 출처와 일치하지 않습니다.
    - 브라우저가 보안 맥락에서의 `registerProtocolHandler()` 호출을 요구합니다.
    - 브라우저가 처리기 URL의 HTTPS 사용을 요구합니다.
- `SyntaxError`
  - : 처리기 URL에 `%s` 플레이스홀더가 없습니다.

## 가능한 스킴

보안상의 이유로, `registerProtocolHandler()`가 등록할 수 있는 스킴은 제한적입니다.

**사용자 지정 스킴**은 다음 조건을 만족해야 합니다.

- 스킴이 `web+`로 시작합니다.
- `web+` 접두사 뒤에 다른 글자가 최소 하나 존재해야 합니다.
- 소문자 ASCII 문자로만 구성해야 합니다.

아래 [예제](#예제)에서 사용한 `web+burger`는 제약조건을 만족하는 사용자 지정 스킴입니다.

그 외에는 다음 스킴을 등록할 수 있습니다.

- `bitcoin`
- `geo`
- `im`
- `irc`
- `ircs`
- `magnet`
- `mailto`
- `mms`
- `news`
- `nntp`
- `openpgp4fpr`
- `sip`
- `sms`
- `smsto`
- `ssh`
- `tel`
- `urn`
- `webcal`
- `wtai`
- `xmpp`

## 예제

사이트 주소가 `burgers.example.com`인 경우, 아래 코드로 `web+burger:` 스킴에 대한 처리기를 등록할 수 있습니다.

```js
navigator.registerProtocolHandler(
  "web+burger",
  "https://burgers.example.com/?burger=%s",
  "Burger handler",
);
```

이제, `web+burger:` 링크는 사용자를 `burgers.example.com`로 보내고, 자신의 URL을 `%s` 위치에 삽입합니다.

이때, 예제 코드는 처리기 URL과 같은 {{glossary("출처")}}를 가져야 하므로 `https://burgers.example.com`의 페이지 안에서 호출해야 하며, 처리기 URL은 `http`/`https`를 사용해야 합니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
