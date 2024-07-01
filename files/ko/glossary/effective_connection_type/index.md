---
title: 유효 연결 타입 (Effective connection type)
slug: Glossary/Effective_connection_type
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**유효 연결 타입 (Effective connection type, ECT)**은 실제 연결이 광대역이나 Wi-Fi 테더링이더라도, 브라우저가 페이지를 요청하는 시간과 유효 연결 타입 사이의 시간을 기준으로 3G와 같은 셀룰러 연결 타입을 반환하는, 측정된 네트워크 성능을 나타냅니다.

'`slow-2g`', '`2g`', '`3g`'과 '`4g`' 값은 관찰되는 왕복 시간과 다운링크 값을 사용하여 결정됩니다.

| 유효 연결 타입 | 최소 [왕복 시간](/ko/docs/Glossary/Round_Trip_Time) | 최대 다운링크 | 설명                                                                                        |
| -------------- | --------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------- |
| `slow-2g`      | 2000ms                                              | 50 Kbps       | 이 네트워크는 텍스트 전용 페이지와 같은 소규모 전송에만 적합합니다.                         |
| `2g`           | 1400ms                                              | 70 Kbps       | 이 네트워크는 작은 이미지 전송에 적합합니다.                                                |
| `3g`           | 270ms                                               | 700 Kbps      | 이 네트워크는 고해상도 이미지, 오디오, SD 비디오 등 대용량 리소스를 전송하는 데 적합합니다. |
| `4g`           | 0ms                                                 | ∞             | 이 네트워크는 HD 비디오, 실시간 비디오 등에 적합합니다.                                     |

[유효타입](/ko/docs/Web/API/NetworkInformation/effectiveType)은 [네트워크 정보 API](/ko/docs/Web/API/Network_Information_API)의 속성으로, [navigator.connection](/ko/docs/Web/API/Navigator/connection) 객체를 통해 JavaScript에 노출됩니다. 유효 연결 타입을 보려면, 지원 브라우저의 개발자 도구 콘솔을 열고 다음을 입력하세요.

```js
navigator.connection.effectiveType;
```

## 같이 보기

- [네트워크 정보 API](/ko/docs/Web/API/Network_Information_API)
- {{domxref('NetworkInformation')}}
- {{domxref('NetworkInformation.effectiveType')}}
- {{HTTPHeader("ECT")}}
