---
title: PAC
slug: Glossary/PAC
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**프록시 자동 구성 파일 (Proxy Auto-Configuration file, PAC file)** 은 요청(HTTP, HTTPS 및 FTP 포함)이 대상으로 직접 이동해야 하는지 또는 프록시 서버를 통해 전달되어야 하는지를 결정하기 위해 브라우저에서 사용되는 `FindProxyForURL()` 함수가 포함된 파일입니다.

```js
function FindProxyForURL(url, host) {
  // …
}

ret = FindProxyForURL(url, host);
```

이러한 사용 방법과 새 프록시 생성 방법에 대한 자세한 내용은 [프록시 자동 구성 (PAC) 파일](/ko/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)을 참조하세요.

## 같이 보기

- 위키백과의 [PAC](https://en.wikipedia.org/wiki/Proxy_auto-config)
- MDN의 [프록시 자동 구성 파일](/ko/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_PAC_file)
