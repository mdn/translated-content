---
title: 프리 렌더 (Prerender)
slug: Glossary/Prerender
l10n:
  sourceCommit: c7f7f5cde1506f1e324598f1792de13474d5d79d
---

{{GlossarySidebar}}

프리 렌더링 (Prerendering)은 사용자가 가까운 미래에 탐색할 '가능성이 있는' 페이지를 추측에 따라 [프리페치](/ko/docs/Glossary/Prefetch)하고 렌더링하는 행위를 의미합니다(브라우저는 사실상 보이지 않는 별도의 탭에서 백그라운드로 페이지를 렌더링합니다).
그런 다음 사용자가 페이지를 탐색하기로 선택하면, 해당 콘텐츠가 거의 즉시 표시될 수 있습니다.

예를 들어, 프리 렌더링은 '다음' 버튼으로 링크된 페이지 리소스, 사용자가 마우스를 올려놓은 링크 팝업, 주소 표시줄에 입력되는 URL의 가능한 페이지 대상을 가져오는 데 사용될 수 있습니다.

```html
<link rel="prerender" href="https://example.com/content/to/prerender" />
```

프리 렌더링을 사용하면 프리페치보다 표시 시간이 빨리지고 더 많은 리소스를 필요로 하는 대신 사용자 경험이 향상됩니다.

## 같이 보기

- [즉각적인 페이지 탐색을 위해 Chrome에서 페이지를 미리 렌더링합니다](https://developer.chrome.com/docs/web-platform/prerender-pages#prerendering-from-the-address-bar) 주소 표시줄의 URL 프리 렌더링 및 제안된 추측 규칙 API 사용과 같은 프리 렌더링을 위한 Chrome 전용 기능에 대해 설명합니다.
- [prefetch](/ko/docs/Glossary/Prefetch)
