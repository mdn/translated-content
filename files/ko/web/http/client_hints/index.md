---
title: Client hints(클라이언트 힌트)
slug: Web/HTTP/Client_hints
---

**Client Hints**는 클라이언트 장치 및 에이전트별 기본 설정 목록을 확인할 수 있도록 사전 컨텐츠 체크를 위한 [HTTP request header](/ko/docs/Web/HTTP/Headers) 입니다. [Client Hints](/ko/docs/Web/HTTP/Headers#Client_hints)를 사용하면 이미지 DPR 해상도의 자동 조절과 최적화 된 assets을 자동으로 적용할 수 있습니다.

Client Hints는 자동으로 적용되는 것이 아닙니다 : ClientHints를 지원한다고 선언하기 위해서 서버에서 [`Accept-CH`](https://tools.ietf.org/html/draft-grigorik-http-client-hints-03#section-2.2.1) (accept client hints) header 또는 클라이언트에서 HTML Meta 태그의 [`http-equiv`](/ko/docs/Web/HTML/Element/meta#Attributes) 속성을 사용하여 선언해주어야 합니다.

```
Accept-CH: DPR, Width, Viewport-Width, Downlink
```

또는

```html
<meta http-equiv="Accept-CH" content="DPR, Width, Viewport-Width, Downlink" />
```

클라이언트가 `Accept-CH` header를 전달받게 되면 지원되는 경우, Client Hint header를 추가합니다. 예를 들어 위의 Accept-CH 예제를 기반으로 클라이언트는 모든 후속 요청에 DPR, Width, Viewport-Width 및 Downlink 헤더를 추가 할 수 있습니다.

두 번째 예에서 서버는 Accept-CH 메타 태그를 설정하여 브라우저에 힌트를 제공합니다.

일반적으로, Client Hints header를 가지고 개발자 또는 어플리케이션은 브라우저에게 장치 픽셀 비율, 뷰포트 너비 및 디스플레이 너비와 같은 서버 자체 정보를 제공하도록 할 수 있습니다. 그러면 클라이언트는 서버에 클라이언트 환경에 대한 정보를 제공할 수 있고, 서버는 해당 정보를 기반으로 전송할 리소스를 결정할 수도 있습니다.

## Vary Client Hints

다른 [Client Hints](/ko/docs/Web/HTTP/Headers#Client_hints)가 응답에 영향을 줄 수 있는 캐시를 전달하기 위해서는, [`Vary`](/ko/docs/Web/HTTP/Headers/Vary) HTTP header를 사용해야만 합니다.

응답 예시 :

`Vary: Accept, DPR, Width, Viewport-Width, Downlink`

## See Also

- [Client Hints headers](/ko/docs/Web/HTTP/Headers#Client_hints)
- [`Vary` HTTP Header](/ko/docs/Web/HTTP/Headers/Vary)
