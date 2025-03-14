---
title: 프리페치 (Prefetch)
slug: Glossary/Prefetch
l10n:
  sourceCommit: 15b56c28429cb191ee1507aa0b1445d5e695b251
---

{{GlossarySidebar}}

프리페치는 사용자가 가까운 미래에 탐색할 가능성이 '있는' 페이지에 대해 백그라운드에서 리소스를 추론적으로 가져오는 방식을 의미합니다.
이렇게 하면 사용자가 해당 페이지로 이동하기로 선택한 경우 미리 가져온 페이지의 로드 시간을 크게 줄일 수 있습니다.
예를 들어, 프리페치는 '다음' 버튼으로 연결된 페이지 리소스, 사용자가 마우스를 가져가는 링크 팝업 또는 검색 결과를 가져오는 데 사용될 수 있습니다.

### 리소스 프리페치

리소스는 향후 탐색에 필요한 가능성에 따라 미리 가져와야 합니다.
브라우저는 주소 표시줄의 현재 URL과 같은 일부 리소스에 대해 필요한 리소스를 자동으로 추론할 수 있습니다.

브라우저는 또한 [`rel="prefetch"`](/ko/docs/Web/HTML/Attributes/rel/prefetch)을 사용하여 [`<link>`](/ko/docs/Web/HTML/Element/link) 요소에 대한 콘텐츠를 미리 가져옵니다.
이 방식을 통해서, 개발자는 현재 페이지에서 가능한 탐색 방법을 브라우저에 암시해줄 수 있습니다.
이러한 링크만 미리 가져오고(`<a>` 요소는 그렇지 않습니다), `fetchPriority="low"`가 있는 요소를 포함해 현재 페이지에서 사용하는 리소스보다 낮은 우선순위로 가져옵니다.

프리페칭은 가능한 다음 탐색을 위해 HTML과 하위 리소스를 모두 가져오는 데 사용될 수 있습니다. 일반적인 사용 사례는 사이트의 나머지 부분에서 사용하는 더 많은 '무거운' 리소스를 가져오는 간단한 웹사이트 랜딩 페이지를 갖는 것입니다.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="https://example.com/landing-page" />
```

`prefetch` 작업에 대한 가져오기 요청으로 인해 HTTP 헤더 [`Sec-Purpose: prefetch`](/ko/docs/Web/HTTP/Headers/Sec-Purpose)가 포함된 HTTP 요청이 생성됩니다. 서버는 이 헤더를 사용해 리소스에 대한 캐시 시간 초과를 변경하거나, 다른 특수 처리를 수행할 수 있습니다.
요청에는 값이 `empty`로 설정된 {{HTTPHeader("Sec-Fetch-Dest")}} 헤더도 포함되어야 합니다.
요청의 {{HTTPHeader("Accept")}} 헤더는 일반 탐색 요청에 사용되는 값과 일치해야 합니다. 이를 통해 브라우저는 탐색 후 일치하는 캐시된 리소스를 찾을 수 있습니다.
응답이 반환되면, HTTP 캐시의 요청과 함께 캐시됩니다.

> [!NOTE]
> 브라우저 공급업체는 현재 전송되는 헤더를 중심으로 정렬하고 있으며, 다른 헤더와 값을 사용할 수 있습니다.
> 명세 준수 사항을 추적하는 가장 좋은 장소는 [`Sec-Purpose`](/ko/docs/Web/HTTP/Headers/Sec-Purpose) 호환성 표입니다.

### DNS 프리페치

[DNS 프리페치](/ko/docs/Web/HTML/Attributes/rel/dns-prefetch)는 도메인 네임을 미리 확인하여, 요청 시 도메인 조회와 관련된 시간을 줄여 로드 시간을 단축합니다.

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## 같이 보기

- [즉각적인 페이지 탐색을 위해 Chrome에서 페이지를 미리 렌더링](https://developer.chrome.com/docs/web-platform/prerender-pages#prerendering-from-the-address-bar) (developer.chrome.com)
- {{Glossary("prerender")}}
- [프리로드](/ko/docs/Web/HTML/Attributes/rel/preload)
- [dns 프리페치](/ko/docs/Web/HTML/Attributes/rel/dns-prefetch)
- [페이지 예측](/ko/docs/Glossary/Page_prediction)
- [지연 로딩](/ko/docs/Web/Performance/Lazy_loading)
